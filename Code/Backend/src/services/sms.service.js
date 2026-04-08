const twilio = require("twilio");
const config = require("../config");
const { supabaseAdmin } = require("../lib/supabase");
const phoneMatcher = require("./phone-matcher.service");
const {
  SMS_HOT_LEAD_WELCOME,
  SMS_MISSED_CALL_FOLLOWUP,
  SMS_APPOINTMENT_CONFIRMATION,
  SMS_APPOINTMENT_REMINDER_24H,
  fillTemplate,
} = require("../config/scripts");

class SmsService {
  constructor() {
    this.client = twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);
    // Note: fromNumber is now dynamically selected per message using phone-matcher.service
  }

  /**
   * Send an SMS
   * @param {string} to - Recipient phone number (any format, will be normalized)
   * @param {string} body - SMS content (max 1600 chars for Twilio)
   * @param {Object} options - Additional options
   * @returns {Object|null} - Twilio message object or null on failure
   */
  async sendSms(to, body, options = {}) {
    try {
      // Validate inputs
      if (!to) {
        throw new Error("Recipient phone number is required");
      }
      if (!body) {
        throw new Error("SMS body is required");
      }

      // ========================================
      // STEP 1: Normalize phone number to E.164 format
      // ========================================
      const normalizedTo = phoneMatcher.normalizePhoneNumber(to);
      
      if (!normalizedTo) {
        throw new Error(`Invalid phone number format: ${to}`);
      }

      console.log(`[SmsService] 📱 Phone normalization: ${to} → ${normalizedTo}`);

      // Truncate body if too long (Twilio limit is 1600 chars)
      const truncatedBody =
        body.length > 1600 ? body.substring(0, 1597) + "..." : body;

      // ========================================
      // STEP 2: LOCAL PRESENCE - Select Twilio number based on recipient's area code
      // Use normalized number for matching
      // ========================================
      const localNumber = phoneMatcher.getLocalNumber(normalizedTo);
      const matchInfo = phoneMatcher.getMatchInfo(normalizedTo);

      // Validate that we have a valid Twilio number to send FROM
      if (!localNumber) {
        throw new Error("No valid Twilio phone number available for SMS");
      }

      const messageParams = {
        body: truncatedBody,
        from: localNumber, // Use geo-matched local number (already in E.164 from config)
        to: normalizedTo, // Use normalized E.164 format
        ...options,
      };

      console.log(`[SmsService] Sending SMS to ${normalizedTo}`);
      console.log(
        `[SmsService] 📱 Local Presence: Using ${matchInfo.region} number (${matchInfo.leadAreaCode || 'unknown'} → ${localNumber})`
      );
      console.log(`[SmsService] Body length: ${truncatedBody.length} chars`);

      const message = await this.client.messages.create(messageParams);

      console.log(`[SmsService] ✓ SMS sent successfully`);
      console.log(`[SmsService] Message SID: ${message.sid}`);
      console.log(`[SmsService] Status: ${message.status}`);
      console.log(`[SmsService] Price: ${message.price} ${message.priceUnit}`);

      return message;
    } catch (error) {
      console.error("[SmsService] ✗ Failed to send SMS:", error.message);
      if (error.code) {
        console.error("[SmsService] Twilio Error Code:", error.code);
      }
      if (error.moreInfo) {
        console.error("[SmsService] More Info:", error.moreInfo);
      }
      // Don't throw logic-breaking errors for SMS failure, just log it
      return null;
    }
  }

  /**
   * Send the immediate "Blitz" follow-up for Hot Leads
   * @param {string} to - Recipient phone number
   * @param {string} name - Lead name
   * @param {string} leadId - Lead UUID (optional, for logging)
   * @returns {Object|null} - Twilio message object or null on failure
   */
  async sendHotLeadWelcome(to, name, leadId = null) {
    const body = fillTemplate(SMS_HOT_LEAD_WELCOME, { name });

    console.log(`[SmsService] Sending Hot Lead Welcome SMS`);
    if (leadId) {
      console.log(`[SmsService] Lead ID: ${leadId}`);
    }

    const result = await this.sendSms(to, body);

    // Log SMS activity to database if leadId provided
    if (leadId && result) {
      try {
        await this.logSmsActivity(
          leadId,
          result.sid,
          "hot_lead_welcome",
          "sent"
        );
      } catch (error) {
        console.error(
          error.message
        );
      }
    }

    return result;
  }

  /**
   * Send appointment confirmation SMS after booking
   * @param {string} to - Recipient phone number
   * @param {string} name - Lead name
   * @param {string} appointmentTime - Formatted appointment time
   * @param {string} leadId - Lead UUID (optional)
   * @returns {Object|null} - Twilio message object or null on failure
   */
  async sendAppointmentConfirmation(to, name, appointmentTime, leadId = null) {
    const body = fillTemplate(SMS_APPOINTMENT_CONFIRMATION, { name, time: appointmentTime });

    console.log(`[SmsService] Sending Appointment Confirmation SMS`);
    if (leadId) {
      console.log(`[SmsService] Lead ID: ${leadId}`);
    }

    const result = await this.sendSms(to, body);

    if (leadId && result) {
      try {
        await this.logSmsActivity(
          leadId,
          result.sid,
          "appointment_confirmation",
          "sent"
        );
      } catch (error) {
        console.error(
          "[SmsService] Failed to log SMS activity:",
          error.message
        );
      }
    }

    return result;
  }

  /**
   * Send appointment reminder SMS
   * @param {string} to - Recipient phone number
   * @param {string} name - Lead name
   * @param {string} appointmentTime - Formatted appointment time
   * @param {string} leadId - Lead UUID (optional)
   * @returns {Object|null} - Twilio message object or null on failure
   */
  async sendAppointmentReminder(to, name, appointmentTime, leadId = null) {
    const body = fillTemplate(SMS_APPOINTMENT_REMINDER_24H, { name }) + `\nYour appointment is scheduled for ${appointmentTime}. Reply CONFIRM to confirm.`;

    console.log(`[SmsService] Sending Appointment Reminder SMS`);
    if (leadId) {
      console.log(`[SmsService] Lead ID: ${leadId}`);
    }

    const result = await this.sendSms(to, body);

    if (leadId && result) {
      try {
        await this.logSmsActivity(
          leadId,
          result.sid,
          "appointment_reminder",
          "sent"
        );
      } catch (error) {
        console.error(
          "[SmsService] Failed to log SMS activity:",
          error.message
        );
      }
    }

    return result;
  }

  /**
   * Send follow-up SMS after missed call
   * @param {string} to - Recipient phone number
   * @param {string} name - Lead name
   * @param {string} leadId - Lead UUID (optional)
   * @returns {Object|null} - Twilio message object or null on failure
   */
  async sendMissedCallFollowup(to, name, leadId = null) {
    const body = fillTemplate(SMS_MISSED_CALL_FOLLOWUP, { name });

    console.log(`[SmsService] Sending Missed Call Follow-up SMS`);
    if (leadId) {
      console.log(`[SmsService] Lead ID: ${leadId}`);
    }

    const result = await this.sendSms(to, body);

    if (leadId && result) {
      try {
        await this.logSmsActivity(
          leadId,
          result.sid,
          "missed_call_followup",
          "sent"
        );
      } catch (error) {
        console.error(
          "[SmsService] Failed to log SMS activity:",
          error.message
        );
      }
    }

    return result;
  }

  /**
   * Log SMS activity to database
   * @param {string} leadId - Lead UUID
   * @param {string} messageSid - Twilio message SID
   * @param {string} type - SMS type (hot_lead_welcome, appointment_reminder, etc.)
   * @param {string} status - SMS status (sent, delivered, failed, etc.)
   */
  async logSmsActivity(leadId, messageSid, type, status) {
    try {
      const { error } = await supabaseAdmin.from("sms_logs").insert({
        lead_id: leadId,
        sms_sid: messageSid,
        content: type, // Storing 'type' in 'content' column as 'type' column doesn't exist
        status: status,
        created_at: new Date().toISOString(),
      });

      if (error) {
        throw error;
      }

      console.log(`[SmsService] ✓ Logged SMS activity for lead ${leadId}`);
    } catch (error) {
      console.error("[SmsService] Failed to log SMS activity:", error.message);
      // Don't throw - logging failure shouldn't break the flow
    }
  }

  /**
   * Get SMS delivery status from Twilio
   * @param {string} messageSid - Twilio message SID
   * @returns {Object|null} - Message status object or null on failure
   */
  async getSmsStatus(messageSid) {
    try {
      const message = await this.client.messages(messageSid).fetch();

      console.log(`[SmsService] SMS Status for ${messageSid}:`);
      console.log(`[SmsService] Status: ${message.status}`);
      console.log(`[SmsService] Error Code: ${message.errorCode || "None"}`);
      console.log(
        `[SmsService] Error Message: ${message.errorMessage || "None"}`
      );

      return {
        sid: message.sid,
        status: message.status,
        to: message.to,
        from: message.from,
        dateSent: message.dateSent,
        dateUpdated: message.dateUpdated,
        errorCode: message.errorCode,
        errorMessage: message.errorMessage,
        price: message.price,
        priceUnit: message.priceUnit,
      };
    } catch (error) {
      console.error("[SmsService] Failed to get SMS status:", error.message);
      return null;
    }
  }

  /**
   * Handle incoming SMS webhook (for SMS replies)
   * @param {Object} req - Express request object with Twilio webhook data
   * @returns {Object} - Parsed SMS data
   */
  parseIncomingSms(req) {
    return {
      messageSid: req.body.MessageSid,
      from: req.body.From,
      to: req.body.To,
      body: req.body.Body,
      numMedia: req.body.NumMedia || 0,
      mediaUrls: this.getMediaUrls(req.body),
    };
  }

  /**
   * Get media URLs from incoming SMS
   * @param {Object} body - Twilio webhook body
   * @returns {Array} - Array of media URLs
   */
  getMediaUrls(body) {
    const numMedia = parseInt(body.NumMedia || 0, 10);
    const urls = [];

    for (let i = 0; i < numMedia; i++) {
      const url = body[`MediaUrl${i}`];
      if (url) {
        urls.push(url);
      }
    }

    return urls;
  }
  /**
   * Get SMS logs with pagination and filtering
   * @param {Object} params - Query parameters
   * @param {number} params.page - Page number
   * @param {number} params.limit - Items per page
   * @param {string} params.status - Filter by status
   * @param {string} params.lead_id - Filter by lead ID
   * @returns {Object} - { data, count, error }
   */
  async getLogs({ page = 1, limit = 50, status, lead_id }) {
    try {
      const offset = (page - 1) * limit;

      let query = supabaseAdmin
        .from('sms_logs')
        .select('*, leads(name, email, phone)', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(offset, offset + parseInt(limit) - 1);

      if (status) {
        query = query.eq('status', status);
      }

      if (lead_id) {
        query = query.eq('lead_id', lead_id);
      }

      const { data, error, count } = await query;

      if (error) {
        throw error;
      }

      return { data, count };
    } catch (error) {
      console.error('[SmsService] Failed to get SMS logs:', error.message);
      throw error;
    }
  }

  /**
   * Get SMS statistics
   * @returns {Object} - { total, sent, failed, success_rate }
   */
  async getStats() {
    try {
      const { data: logs, error } = await supabaseAdmin
        .from('sms_logs')
        .select('status');

      if (error) {
        throw error;
      }

      const total = logs.length;
      const sent = logs.filter(l => l.status === 'sent' || l.status === 'delivered').length;
      const failed = logs.filter(l => l.status === 'failed' || l.status === 'undelivered').length;
      const success_rate = total > 0 ? (sent / total) * 100 : 0;

      return {
        total,
        sent,
        failed,
        success_rate
      };
    } catch (error) {
      console.error('[SmsService] Failed to get SMS stats:', error.message);
      throw error;
    }
  }
}

module.exports = new SmsService();
