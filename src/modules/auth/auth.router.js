const express = require("express");
const authRouter = express.Router();
const authController = require("./auth.controller");

authRouter.post("/auth/signup", authController.signUp);
authRouter.post("/auth/signin", authController.signIn);
authRouter.get("/auth/logout", authController.logOut);

module.exports = authRouter;
