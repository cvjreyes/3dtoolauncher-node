const fs = require("fs");
const { exec, spawn } = require('child_process');
var os = require('os');
const sql = require("../../db.js");



const execExternal = async(req, res) =>{
  const project = req.body.project
  let route;

  switch(project){
    case "COCAPI":
      route = "//es001vs0106/COCAPI";
      break;
    case "BIXLOZONE":
      route = "//ES001VS0154/BIO"
    default:
      break;
  }
    exec('C:/AVEVA/Everything3D2.10/mon.exe PROD 3D init ' + route + '"/ADMIN/SCRIPT/ScriptE3D2/wk/launch.init', (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
        return;
      });
    res.status(200)
    
}

const getProjectsNames = async(req, res) =>{
  sql.query("SELECT name FROM projects", (err, results)=>{
    if(err){
      res.status(401)
    }else{
      res.json(results).status(201)
    }
  })
}

const addProject = async(req, res) =>{
  const name = req.body.name
  const server = req.body.server
  const folder = req.body.server

  sql.query("INSERT INTO projects(name, server, folder) VALUES(?,?,?)",[name, server, folder], (err, results)=>{
    if(err){
      console.log(err)
      res.send({success: false}).status(401)
    }else{
      res.send({success: true}).status(201)
    }
  })
}

module.exports = {
    execExternal,
    getProjectsNames,
    addProject
}