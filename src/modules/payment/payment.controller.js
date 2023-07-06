const PaymentModel = require("./payment.model");

const createPayment = async (req, res) => {
  const paymentDataGet = req.body;
  try {
    const paymentData = new PaymentModel(paymentDataGet);
    const savedPayment = await paymentData.save();
    res.status(201).json({
      message: "Payment created successfully",
      data: savedPayment,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await PaymentModel.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const paymentController = {
  createPayment,
  getPayments,
};

module.exports = paymentController;
