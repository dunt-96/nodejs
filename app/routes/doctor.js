const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.get("/get-all-doctor", doctorController.getALlDoctor);

module.exports = router;
