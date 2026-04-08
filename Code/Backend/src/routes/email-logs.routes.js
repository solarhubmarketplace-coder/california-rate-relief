const express = require('express');
const router = express.Router();
const emailLogsController = require('../controllers/email-logs.controller');

router.get('/', emailLogsController.getEmailLogs);
router.get('/stats', emailLogsController.getEmailStats);

module.exports = router;
