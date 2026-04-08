const express = require('express');
const router = express.Router();
const smsLogsController = require('../controllers/sms-logs.controller');

// GET /api/sms-logs
router.get('/', smsLogsController.getSmsLogs);

// GET /api/sms-logs/stats
router.get('/stats', smsLogsController.getSmsStats);

module.exports = router;
