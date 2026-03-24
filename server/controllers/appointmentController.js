const Appointment = require("../models/Appointment");

// CREATE appointment
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully ✅",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET all appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};