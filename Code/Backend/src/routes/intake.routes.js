const express = require('express');
const intakeController = require('../controllers/intake.controller');

const router = express.Router();
router.post('/', intakeController.createIntake);

module.exports = router;
