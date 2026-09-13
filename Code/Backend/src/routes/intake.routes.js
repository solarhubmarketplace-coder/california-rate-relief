const express = require('express');
const intakeController = require('../controllers/intake.controller');

const router = express.Router();
router.post('/', intakeController.createIntake);
router.post('/email-visit', intakeController.recordEmailVisit);

module.exports = router;
