const express = require("express");
const router = express.Router();
const {
  getDentists,
  addDentist
} = require("../controllers/dentistController");

router.get("/", getDentists);
router.post("/", addDentist);

module.exports = router;