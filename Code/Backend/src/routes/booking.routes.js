const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

// PUBLIC ROUTES - No authentication required

// POST /api/booking/confirm?lead_id=xxx - Confirm interest (upgrade to hot lead)
router.post('/confirm', bookingController.confirmInterest);

module.exports = router;
