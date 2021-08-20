const express = require("express");
const router = express.Router();
const controller = require("../main/main.controller");

let routes = (app) => {
    router.post("/execExternal", controller.execExternal)
    router.get("/getProjectsNames", controller.getProjectsNames)
    router.post("/addProject", controller.addProject)
    app.use(router);
};

module.exports = routes;