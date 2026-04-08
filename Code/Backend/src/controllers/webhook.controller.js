const leadService = require("../services/lead.service");
const { supabaseAdmin } = require("../lib/supabase");
const smsService = require("../services/sms.service");

/**
 * PUBLIC WEBHOOK - No authentication required
 * Allows external clients to submit leads from their websites
 *
 * Required fields: name, phone
 * Optional fields: email, source
 *
 * Usage:
 * POST /api/webhook/lead
 * Content-Type: application/json
 *
 * Body:
 * {
 *   "name": "John Smith",
 *   "phone": "+15551234567",
 *   "email": "john@example.com",
 *   "source": "partner_website"
 * }
 */
const webhookCreateLead = async (req, res, next) => {
  try {
    const { name, phone, email, source } = req.body;

    // Validate required fields
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name and phone are required",
        data: null,
      });
    }

    // Validate phone format (basic validation)
    const phoneRegex =
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number format",
        data: null,
      });
    }

    // Prepare lead data (only fields that exist in database)
    // ✨ CRITICAL: Website leads are automatically "hot" to trigger immediate AI calls
    const leadData = {
      name: name.trim(),
      phone: phone.trim(),
      source: source || "webhook",
      email: email ? email.trim() : null,
      type: "hot", // Website form submissions are hot leads - trigger calls immediately
    };

    // Create lead
    const lead = await leadService.createLead(leadData);

    // Return success response
    return res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: {
        id: lead.id,
        name: lead.name,
        phone: lead.phone,
        status: lead.status,
        created_at: lead.created_at,
      },
    });
  } catch (error) {
    // Handle duplicate phone error
    if (error.statusCode === 409) {
      return res.status(409).json({
        success: false,
        message: "Lead with this phone number already exists",
        data: null,
      });
    }

    // Handle other errors
    console.error("[WebhookController] Error creating lead:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create lead",
      data: null,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

/**
 * PUBLIC WEBHOOK - Twilio Incoming SMS
 * Handles STOP/UNSUBSCRIBE opt-out keywords for TCPA compliance.
 * Configure in Twilio console: Messaging → Phone Number → "A Message Comes In" → POST /api/webhook/sms
 *
 * POST /api/webhook/sms
 */
const OPT_OUT_KEYWORDS = ["stop", "unsubscribe", "cancel", "quit", "opt out", "optout", "end"];

const webhookIncomingSms = async (req, res) => {
  try {
    const parsed = smsService.parseIncomingSms(req);
    const body = (parsed.body || "").trim().toLowerCase();
    const from = parsed.from;

    console.log(`[WebhookSMS] Incoming SMS from ${from}: "${parsed.body}"`);

    if (!from) {
      return res.type("text/xml").status(200).send("<Response></Response>");
    }

    const isOptOut = OPT_OUT_KEYWORDS.some((kw) => body === kw);

    if (isOptOut) {
      console.log(`[WebhookSMS] OPT-OUT detected from ${from}`);

      // Clean phone for matching - sanitize to prevent query injection
      const cleanPhone = from.replace(/\D/g, "");
      const sanitizedFrom = from.replace(/[^+\d]/g, "");

      const { data: leads, error } = await supabaseAdmin
        .from("leads")
        .select("id, name, consent_status")
        .or(`phone.eq.${sanitizedFrom},phone.eq.${cleanPhone}`)
        .limit(1);

      if (!error && leads && leads.length > 0) {
        const lead = leads[0];

        await supabaseAdmin
          .from("leads")
          .update({ consent_status: "opted_out" })
          .eq("id", lead.id);

        console.log(`[WebhookSMS] Lead ${lead.id} (${lead.name}) opted out`);

        await smsService.logSmsActivity(lead.id, parsed.messageSid, "opt_out_received", "received");
      } else {
        console.warn(`[WebhookSMS] No lead found for phone ${from}`);
      }
    }

    // Return empty TwiML (Twilio requires valid XML response)
    return res.type("text/xml").status(200).send("<Response></Response>");
  } catch (error) {
    console.error("[WebhookSMS] Error handling incoming SMS:", error);
    return res.type("text/xml").status(200).send("<Response></Response>");
  }
};

module.exports = {
  webhookCreateLead,
  webhookIncomingSms,
};
