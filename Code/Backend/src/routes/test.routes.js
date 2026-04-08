const express = require("express");
const router = express.Router();
const testController = require("../controllers/test.controller");

/**
 * Test Routes
 * Manual testing endpoints for Call, SMS, and Email functionality
 */

// Get test configuration status
router.get("/status", testController.getTestStatus);

// Test Voice Call
router.post("/call", testController.testCall);

// Test SMS
router.post("/sms", testController.testSms);

// Test Email
router.post("/email", testController.testEmail);

module.exports = router;
