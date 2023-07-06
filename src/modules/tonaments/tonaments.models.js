const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tornamentSchema = new Schema({
  turnamentName: {
    type: String,
  },
  game: {
    type: String,
  },
  entryFee: {
    type: Number,
  },
  date: {
    type: Date,
  },
});

const TornamentModel = mongoose.model("Tornament", tornamentSchema);

module.exports = TornamentModel;
