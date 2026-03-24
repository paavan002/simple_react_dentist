const mongoose = require("mongoose");

const dentistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualification: String,
  experience: Number,
  clinicName: String,
  address: String,
  location: String,
  photo: String,
}, { timestamps: true });

module.exports = mongoose.model("Dentist", dentistSchema);