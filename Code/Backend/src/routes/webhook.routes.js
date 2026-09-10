const express = require("express");
const router = express.Router();
const webhookController = require("../controllers/webhook.controller");

// PUBLIC WEBHOOK - No authentication required
// POST /api/webhook/lead
router.post("/lead", webhookController.webhookCreateLead);

// TWILIO SMS WEBHOOK - Handles incoming SMS replies (STOP opt-out for TCPA)
// POST /api/webhook/sms
router.post("/sms", webhookController.webhookIncomingSms);

// RESEND DELIVERY WEBHOOK - records delivered / bounced / complained so the
// delivery rate is measurable. Signature-verified inside the controller; the
// route itself stays unauthenticated because Resend cannot present a bearer token.
// POST /api/webhook/resend
router.post("/resend", webhookController.webhookResendDelivery);

module.exports = router;
