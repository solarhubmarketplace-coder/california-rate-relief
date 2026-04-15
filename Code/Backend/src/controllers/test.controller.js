const voiceService = require("../services/voice.service");
const smsService = require("../services/sms.service");
const emailService = require("../services/email.service");
const callLogService = require("../services/call-log.service");
const phoneMatcher = require("../services/phone-matcher.service");
const { supabaseAdmin } = require("../lib/supabase");

/**
 * Test Controller - Manual Testing Endpoints
 * These endpoints allow manual testing of call, SMS, and email functionality
 */

/**
 * Test Voice Call
 * Makes a test call to the provided phone number
 *
 * POST /api/test/call
 * Body: { phoneNumber: "+1234567890" }
 */
const testCall = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.apiResponse(
        400,
        "Phone number is required",
        null,
        "Missing phoneNumber in request body"
      );
    }

    // Normalize phone number to E.164 format
    const normalizedPhone = phoneMatcher.normalizePhoneNumber(phoneNumber);
    
    if (!normalizedPhone) {
      return res.apiResponse(
        400,
        "Invalid phone number format",
        null,
        `Phone number "${phoneNumber}" could not be normalized to E.164 format. Examples: +19519721902, (442) 245-3581, 9494218970`
      );
    }

    // Check if lead already exists with this phone number (use normalized for lookup)
    const { data: existingLead, error: findError } = await supabaseAdmin
      .from("leads")
      .select("*")
      .eq("phone", normalizedPhone)
      .single();

    let testLead;

    if (existingLead) {
      testLead = existingLead;
    } else {
      // Create a new test lead (use normalized phone number)
      const { data: newLead, error: leadError } = await supabaseAdmin
        .from("leads")
        .insert({
          name: "Test Call Lead",
          phone: normalizedPhone,
          email: "test@example.com",
          source: "manual_test",
          type: "hot",
          status: "new",
        })
        .select()
        .single();

      if (leadError) {
        console.error("[TestController] Error creating test lead:", leadError);
        return res.apiResponse(
          500,
          "Failed to create test lead",
          null,
          leadError.message
        );
      }

      testLead = newLead;
    }

    // Initiate the call with fixed Twilio number for testing
    // Override regional matching - always use fallback number for test calls
    const FIXED_TEST_FROM = "+19516251343";
    const call = await voiceService.makeCall(testLead.id, normalizedPhone, {
      trigger: "manual_test",
      fromNumber: FIXED_TEST_FROM,
    });

    // Create call log
    await callLogService.createCallLog({
      leadId: testLead.id,
      callSid: call.sid,
      status: "initiated",
      attemptNumber: 1,
    });

    return res.apiResponse(200, "Test call initiated successfully", {
      callSid: call.sid,
      status: call.status,
      to: normalizedPhone,
      originalInput: phoneNumber,
      from: call.from,
      leadId: testLead.id,
      message: "Call has been initiated. You should receive a call shortly.",
    });
  } catch (error) {
    console.error("[TestController] Error in test call:", error.message);
    next(error);
  }
};

/**
 * Test SMS
 * Sends a test SMS to the provided phone number
 *
 * POST /api/test/sms
 * Body: { phoneNumber: "+1234567890" }
 */
const testSms = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.apiResponse(
        400,
        "Phone number is required",
        null,
        "Missing phoneNumber in request body"
      );
    }

    // Normalize phone number to E.164 format
    const normalizedPhone = phoneMatcher.normalizePhoneNumber(phoneNumber);

    if (!normalizedPhone) {
      return res.apiResponse(
        400,
        "Invalid phone number format",
        null,
        `Phone number "${phoneNumber}" could not be normalized to E.164 format. Examples: +19519721902, (442) 245-3581, 9494218970`
      );
    }

    // Send test SMS (SMS service will normalize again, but we pass normalized for consistency)
    const messageBody = `Hi! This is a test message from California Rate Relief.
Your system is working correctly! ☀️

If you received this, SMS functionality is operational.

Time: ${new Date().toLocaleString()}`;

    const message = await smsService.sendSms(normalizedPhone, messageBody);

    if (!message) {
      return res.apiResponse(
        500,
        "Failed to send SMS",
        null,
        "SMS service returned null"
      );
    }

    return res.apiResponse(200, "Test SMS sent successfully", {
      messageSid: message.sid,
      status: message.status,
      to: normalizedPhone,
      originalInput: phoneNumber,
      from: message.from,
      body: messageBody,
      message: "SMS has been sent. You should receive it shortly.",
    });
  } catch (error) {
    console.error("[TestController] Error in test SMS:", error.message);
    next(error);
  }
};

/**
 * Test Email
 * Sends a test email to the provided email address
 *
 * POST /api/test/email
 * Body: { email: "test@example.com" }
 */
const testEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.apiResponse(
        400,
        "Email address is required",
        null,
        "Missing email in request body"
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.apiResponse(
        400,
        "Invalid email format",
        null,
        "Please provide a valid email address"
      );
    }

    // Send test email
    const subject = "☀️ Test Email from California Rate Relief";
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            font-family: 'Helvetica Neue', Arial, sans-serif; 
            background-color: #f4f4f4; 
        }
        .container { 
            max-width: 600px; 
            margin: 40px auto; 
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); 
            padding: 40px 20px; 
            text-align: center; 
        }
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
        }
        .content { 
            padding: 40px 30px; 
        }
        .content h2 {
            color: #333333;
            font-size: 24px;
            margin: 0 0 20px 0;
        }
        .content p { 
            color: #555555; 
            font-size: 16px; 
            line-height: 1.6; 
            margin: 0 0 15px 0; 
        }
        .info-box {
            background: #f8f9fa;
            border-left: 4px solid #3b82f6;
            padding: 15px 20px;
            margin: 25px 0;
        }
        .info-box p {
            margin: 5px 0;
            font-size: 14px;
            color: #666666;
        }
        .success-badge {
            display: inline-block;
            background: #28a745;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            margin: 20px 0;
        }
        .footer { 
            background: #f8f8f8; 
            padding: 20px 30px; 
            text-align: center; 
        }
        .footer p { 
            color: #888888; 
            font-size: 12px; 
            margin: 0; 
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>☀️ California Rate Relief</h1>
        </div>
        <div class="content">
            <h2>Test Email - System Check ✅</h2>
            <span class="success-badge">✓ EMAIL SYSTEM WORKING</span>
            <p>Hello!</p>
            <p>This is a <strong>test email</strong> from your CRM system. If you're reading this, your email functionality is working correctly!</p>
            
            <div class="info-box">
                <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>To:</strong> ${email}</p>
                <p><strong>Service:</strong> Resend Email API</p>
            </div>

            <p>This email confirms that:</p>
            <ul>
                <li>✅ Your Resend API key is configured correctly</li>
                <li>✅ Email service is operational</li>
                <li>✅ HTML email rendering is working</li>
                <li>✅ Email delivery is successful</li>
            </ul>

            <p>You're all set to send emails to your leads!</p>
            
            <p>Best regards,<br><strong>The California Rate Relief Team</strong></p>
        </div>
        <div class="footer">
            <p>California Rate Relief CRM | Email Testing System</p>
            <p>This is an automated test message.</p>
        </div>
    </div>
</body>
</html>`;

    const result = await emailService.sendEmail(email, subject, htmlBody);

    return res.apiResponse(200, "Test email sent successfully", {
      emailId: result.id,
      to: email,
      subject: subject,
      message:
        "Email has been sent. Please check your inbox (and spam folder).",
    });
  } catch (error) {
    console.error("[TestController] Error in test email:", error.message);
    next(error);
  }
};

/**
 * Get Test Status
 * Returns the status of all test configurations
 *
 * GET /api/test/status
 */
const getTestStatus = async (req, res, next) => {
  try {
    const config = require("../config");
    const phoneMatcher = require("../services/phone-matcher.service");
    const phoneStats = phoneMatcher.getStats();

    const status = {
      timestamp: new Date().toISOString(),
      services: {
        call: {
          configured: !!(
            config.TWILIO_ACCOUNT_SID &&
            config.TWILIO_AUTH_TOKEN &&
            phoneStats.totalNumbers > 0
          ),
          twilioAccountSid: config.TWILIO_ACCOUNT_SID ? "✓ Set" : "✗ Missing",
          twilioAuthToken: config.TWILIO_AUTH_TOKEN ? "✓ Set" : "✗ Missing",
          phoneNumbers: `✓ ${phoneStats.totalNumbers} numbers configured (${phoneStats.uniqueAreaCodes} area codes)`,
          fallbackNumber: phoneStats.fallbackNumber || "✗ Missing",
        },
        sms: {
          configured: !!(
            config.TWILIO_ACCOUNT_SID &&
            config.TWILIO_AUTH_TOKEN &&
            phoneStats.totalNumbers > 0
          ),
          twilioAccountSid: config.TWILIO_ACCOUNT_SID ? "✓ Set" : "✗ Missing",
          twilioAuthToken: config.TWILIO_AUTH_TOKEN ? "✓ Set" : "✗ Missing",
          phoneNumbers: `✓ ${phoneStats.totalNumbers} numbers configured (${phoneStats.uniqueAreaCodes} area codes)`,
          fallbackNumber: phoneStats.fallbackNumber || "✗ Missing",
        },
        email: {
          configured: !!(config.RESEND_API_KEY && config.EMAIL_FROM),
          resendApiKey: config.RESEND_API_KEY ? "✓ Set" : "✗ Missing",
          emailFrom: config.EMAIL_FROM || "✗ Missing",
        },
      },
      environment: {
        publicUrl: process.env.PUBLIC_URL || "✗ Missing",
        baseUrl: config.BASE_URL,
        frontendUrl: config.FRONTEND_URL,
      },
      phoneMatching: {
        totalNumbers: phoneStats.totalNumbers,
        areaCodes: phoneStats.areaCodes,
        regions: phoneStats.regions,
        fallbackNumber: phoneStats.fallbackNumber,
      },
    };

    return res.apiResponse(200, "Test configuration status", status);
  } catch (error) {
    console.error("[TestController] Error getting test status:", error.message);
    next(error);
  }
};

module.exports = {
  testCall,
  testSms,
  testEmail,
  getTestStatus,
};
