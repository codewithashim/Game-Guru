const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema(
  {
    card_number: {
      type: Number,
    },
    card_holder: {
      type: String,
    },
    phone_number: {
      type: Number,
    },
    expires: {
      type: Number,
    },
    cvc: {
      type: String,
    },
    amount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const PaymentModel = mongoose.model("Payment", paymentSchema);

module.exports = PaymentModel;
