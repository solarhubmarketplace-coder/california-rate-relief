const express = require("express");
const router = express.Router();
const webhookController = require("../controllers/webhook.controller");

// PUBLIC WEBHOOK - No authentication required
// POST /api/webhook/lead
router.post("/lead", webhookController.webhookCreateLead);

// TWILIO SMS WEBHOOK - Handles incoming SMS replies (STOP opt-out for TCPA)
// POST /api/webhook/sms
router.post("/sms", webhookController.webhookIncomingSms);

module.exports = router;
