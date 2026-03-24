const Dentist = require("../models/Dentist");

// GET all dentists
exports.getDentists = async (req, res) => {
  try {
    const dentists = await Dentist.find();
    res.json(dentists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST new dentist
exports.addDentist = async (req, res) => {
  try {
    const dentist = new Dentist(req.body);
    const saved = await dentist.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};