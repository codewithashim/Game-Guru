const express = require("express");
const paymentRouter = express.Router();
const paymentController = require("./payment.controller");

paymentRouter.get("/payment", paymentController.getPayments);
paymentRouter.post("/payment", paymentController.createPayment);

module.exports = paymentRouter;
