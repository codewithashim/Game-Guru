const TornamentModel = require("./tonaments.models");

const createTurnament = async (req, res) => {
  const turnamentData = req.body;
  console.log(turnamentData);
  try {
    const newTurnament = new TornamentModel(turnamentData);
    const savedTurnament = await newTurnament.save();
    return res
      .status(201)
      .json({
        message: "Turnament created successfully",
        data: savedTurnament,
      })
      .render("./login");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTurnament = async (req, res) => {
  try {
    const turnaments = await TornamentModel.find();
    return res.status(200).json({
      message: "Turnaments fetched successfully",
      data: turnaments,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const turnamentController = {
  createTurnament,
  getTurnament,
};

module.exports = turnamentController;
