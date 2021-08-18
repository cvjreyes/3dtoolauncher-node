const express = require("express");
const router = express.Router();
const controller = require("../main/main.controller");

let routes = (app) => {
    router.post("/execExternal", controller.execExternal)
    app.use(router);
};

module.exports = routes;