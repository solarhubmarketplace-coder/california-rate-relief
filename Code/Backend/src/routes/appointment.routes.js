const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

router.post('/', appointmentController.bookAppointment);
router.get('/', appointmentController.getAppointments);

module.exports = router;
