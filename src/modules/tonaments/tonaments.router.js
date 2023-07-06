const express = require("express");
const tornamentRouter = express.Router();
const turnamentController = require("./tonaments.controller");

tornamentRouter.get("/tornament", turnamentController.getTurnament);
tornamentRouter.post("/tornament", turnamentController.createTurnament);

module.exports = tornamentRouter;
