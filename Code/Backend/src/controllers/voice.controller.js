const voiceService = require("../services/voice.service");
const leadService = require("../services/lead.service");
const callLogService = require("../services/call-log.service");
const settingsService = require("../services/settings.service");
const { VoiceResponse } = require("twilio").twiml;
const { supabaseAdmin } = require("../lib/supabase");


const config = require("../config");
const { VOICEMAIL_DATA_ANOMALY } = require("../config/scripts");
const emailService = require("../services/email.service");


const triggerCall = async (req, res, next) => {
  try {
    const { leadId, phoneNumber } = req.body;


    if (!phoneNumber) {
      console.log("[VoiceController] Missing phone number");
      return res.apiResponse(400, "PhoneNumber is required");
    }

    // Validate leadId if provided
    if (leadId && (leadId === 'undefined' || leadId === 'null' || leadId === '')) {
      return res.apiResponse(400, "Invalid leadId provided");
    }

    const call = await voiceService.makeCall(leadId, phoneNumber);

    // Create call log
    if (leadId) {
      await callLogService.createCallLog({
        leadId,
        callSid: call.sid,
        status: "initiated",
        attemptNumber: 1,
      });
    }

    return res.apiResponse(200, "Call initiated", call);
  } catch (error) {
    console.error("[VoiceController] Error triggering call:", error.message);
    
    // Handle Twilio-specific errors
    if (error.code === 21211 || error.code === 21205 || error.message?.includes('Url is not a valid URL')) {
      const publicUrl = process.env.PUBLIC_URL || 'http://localhost:8000';
      const isLocalhost = publicUrl.includes('localhost') || publicUrl.includes('127.0.0.1');
      
      let errorMsg = `Invalid URL configuration: ${error.message}`;
      if (isLocalhost && publicUrl.startsWith('http://')) {
        errorMsg = `Twilio requires HTTPS URLs. Your PUBLIC_URL is set to HTTP (${publicUrl}). For local development, use ngrok or a similar tool to create an HTTPS tunnel. Error: ${error.message}`;
      } else {
        errorMsg = `Invalid URL configuration: ${error.message}. Please check PUBLIC_URL environment variable (currently: ${publicUrl})`;
      }
      
      return res.apiResponse(400, errorMsg);
    }
    
    next(error);
  }
};

const getTwiml = async (req, res) => {
  try {
    const { leadId, trigger } = req.query;
    const host = req.get("host");

    console.log(`[VoiceController] TwiML request - Lead: ${leadId}, Trigger: ${trigger || 'initial'}`);

    const response = new VoiceResponse();

    // TCPA/FCC Compliance: Recording disclosure is handled by the AI's
    // opening script ("Hi, this is Ray calling on a recorded line...")
    // The AI opener is legally required and immutable per scripts.js Step 1.

    // Create the WebSocket stream connection for AI conversation
    const connect = response.connect();
    const stream = connect.stream({
      url: `wss://${host}/streams`,
    });

    if (leadId) {
      stream.parameter({ name: "leadId", value: leadId });
    }
    // Pass trigger to socket.service.js for prompt selection
    if (trigger) {
      stream.parameter({ name: "trigger", value: trigger });
    }

    res.type("text/xml");
    res.send(response.toString());
  } catch (error) {
    console.error(`[VoiceController] ❌ Error generating TwiML:`, error.message);

    // Send a basic error response so call doesn't fail silently
    const response = new VoiceResponse();
    response.say("Sorry, there was a technical error. Please try again later.");
    response.hangup();

    res.type("text/xml");
    res.send(response.toString());
  }
};

const handleVoicemail = (req, res) => {
  const { leadId } = req.query;
  const dialCallStatus = req.body.DialCallStatus;


  const response = new VoiceResponse();

  // Only leave voicemail if call wasn't answered
  if (dialCallStatus === "no-answer" || dialCallStatus === "busy") {
    response.say(
      {
        voice: "Polly.Matthew",
      },
      VOICEMAIL_DATA_ANOMALY
    );

    console.log("[VoiceController] Left voicemail for lead:", leadId);
  }

  response.hangup();

  res.type("text/xml");
  res.send(response.toString());
};

const handleStatus = async (req, res) => {
  const { leadId } = req.params;
  const {
    CallStatus: status,
    CallSid: callSid,
    CallDuration: duration,
    RecordingUrl: recordingUrl,
    CallDirection: direction,
    CallerCountry: callerCountry,
    CalledCountry: calledCountry,
    CallerState: callerState,
    CalledState: calledState,
    CallerCity: callerCity,
    CalledCity: calledCity,
    CallerZip: callerZip,
    CalledZip: calledZip,
    ErrorCode: errorCode,
    ErrorUrl: errorUrl,
    AnsweredBy: answeredBy,
    To: to,
    From: from,
  } = req.body || {};

  if (!status) {
    console.warn(
      "[VoiceController] Status update missing CallStatus. Body:",
      req.body
    );
    return res.sendStatus(200);
  }

  // Only log errors and terminal states, not every status update
  if (errorCode) {
    console.error(`[VoiceController] Twilio error ${errorCode} - Lead: ${leadId}, SID: ${callSid}`);
  } else if (status === 'completed' || status === 'failed' || status === 'busy' || status === 'no-answer') {
    console.log(`[VoiceController] Call ${status} - Lead: ${leadId}, Duration: ${duration || '0'}s`);
  }

  // Update call log in database
  if (callSid) {
    const updates = { status };
    if (duration) updates.duration = parseInt(duration, 10);
    if (recordingUrl) updates.recording_url = recordingUrl;

    await callLogService.updateCallLog(callSid, updates);
  }

  // Update lead status based on call outcome
  if (leadId && leadId !== "undefined") {

    // ========================================
    // LEAD STATUS FLOW:
    // - 'new'       → Just added, never called
    // - 'declined'  → Call not answered (busy, no-answer, failed)
    // - 'contacted' → Call answered/completed (but no booking yet)
    // - 'converted' → Appointment booked (set in socket.service.js)
    // ========================================

    // First, check current lead status to avoid overwriting 'converted'
    const { data: currentLead } = await supabaseAdmin
      .from("leads")
      .select("status, email, name, phone")
      .eq("id", leadId)
      .single();

    const currentStatus = currentLead?.status;

    if (status === "completed") {
      // Only update to 'contacted' if NOT already 'converted'
      // (Appointment booking sets 'converted' DURING the call)
      if (currentStatus !== "converted") {
        await supabaseAdmin
          .from("leads")
          .update({ status: "contacted" })
          .eq("id", leadId);
        console.log("[VoiceController] Lead status updated to: contacted");
      } else {
        console.log(
          "[VoiceController] Lead already converted - keeping status"
        );
      }

      // ✨ Trigger Appointment Follow Up Email
      if (currentLead && currentLead.email) {
        try {

          await emailService.sendAppointmentFollowUpEmail(currentLead.email, currentLead.name, currentLead.phone, leadId);
          console.log("[VoiceController] Sent appointment follow-up email");
        } catch (emailErr) {
          console.error("[VoiceController] Failed to send follow-up email:", emailErr);
        }
      }
    } else if (
      status === "busy" ||
      status === "no-answer" ||
      status === "failed" ||
      status === "canceled"
    ) {
      // Call was not answered - determine action based on attempt count

      // Count total call attempts for this lead
      const callCount = await callLogService.getCallCountForLead(leadId);

      console.log(
        `[VoiceController] Call declined/failed - Lead: ${leadId}, Attempt: ${callCount}, Status: ${status}`
      );

      if (callCount === 1) {
        // ✨ FIRST ATTEMPT FAILED - Send SMS (only if Leave Voicemail enabled)
        // ✨ FIRST ATTEMPT FAILED
        // Logic Update: We do NOT send SMS here anymore.
        // The QueueService (scheduler) picks up the 'declined' status.
        // - It checks if Double Dial is needed (Voice Task 2).
        // - If NO Double Dial (or after Call 2 fails), IT sends the SMS.
        // This prevents the "Immediate SMS + Double Dial" race condition.

        console.log("[VoiceController] First call attempt failed - updating status to declined");

        // Update lead status to 'declined'
        // This status change triggers the QueueService to evaluate next steps (Retry or SMS)
        await supabaseAdmin
          .from("leads")
          .update({ status: "declined" })
          .eq("id", leadId);

        // Note: If Double Dial is enabled, queue.handleTaskFailure()
        // will create a retry voice task automatically
      } else if (callCount >= config.QUEUE_MAX_ATTEMPTS) {
        // ✨ MAX ATTEMPTS REACHED - Mark as exhausted
        await supabaseAdmin
          .from("leads")
          .update({ status: "exhausted" })
          .eq("id", leadId);

        console.log(
          `[VoiceController] Lead ${leadId} reached max attempts (${callCount}), marked as exhausted`
        );
      } else {
        // In-between attempts (attempt 2, 3, etc if max > 2)
        await supabaseAdmin
          .from("leads")
          .update({ status: "declined" })
          .eq("id", leadId);

        console.log(
          `[VoiceController] Lead status updated to: declined (attempt ${callCount})`
        );
      }
    }
  }

  res.sendStatus(200);
};

const handleRecordingCallback = async (req, res) => {
  try {
    const { leadId } = req.params;
    const {
      RecordingUrl, // URL to download the recording
      RecordingSid, // Unique ID for the recording
      CallSid, // Call SID for linking to call_logs
      RecordingStatus, // Should be 'completed'
      RecordingDuration, // Duration in seconds
    } = req.body;

    console.log(`[VoiceController] Recording callback - Lead: ${leadId}, SID: ${RecordingSid}, Duration: ${RecordingDuration}s`);

    if (RecordingStatus !== "completed") {
      console.log("[VoiceController] Recording not complete yet, skipping");
      return res.status(200).send("OK");
    }

    if (!RecordingUrl) {
      console.log("[VoiceController] No recording URL provided");
      return res.status(200).send("OK");
    }

    // Process the recording (download from Twilio, upload to Supabase)
    await voiceService.processRecording(
      leadId,
      RecordingUrl,
      RecordingSid,
      CallSid
    );

    res.status(200).send("OK");
  } catch (error) {
    console.error(
      "[VoiceController] Error handling recording callback:",
      error.message
    );
    // Still return 200 so Twilio doesn't retry
    res.status(200).send("Error logged");
  }
};

module.exports = {
  triggerCall,
  getTwiml,
  handleStatus,
  handleVoicemail,
  handleRecordingCallback,
};
