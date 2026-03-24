const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  age: Number,
  gender: String,
  appointmentDate: { type: Date, required: true },

  dentistName: String,
  clinicName: String,
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);