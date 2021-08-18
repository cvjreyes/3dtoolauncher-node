const fs = require("fs");
const { exec, spawn } = require('child_process');
var os = require('os');


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
    console.log(route)
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

module.exports = {
    execExternal
}