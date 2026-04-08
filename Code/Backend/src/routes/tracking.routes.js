const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/tracking.controller');

// Email click tracking
router.get('/:token', trackingController.handleTrackingClick);

module.exports = router;
