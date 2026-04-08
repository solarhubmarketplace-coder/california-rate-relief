const twilio = require("twilio");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const os = require("os");
const OpenAI = require("openai");
const config = require("../config");
const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  OPENAI_API_KEY,
} = config;
const { supabaseAdmin } = require("../lib/supabase");
const phoneMatcher = require("./phone-matcher.service");

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/**
 * Get the public URL, ensuring no trailing slash
 */
const getPublicUrl = () => {
  let url = config.PUBLIC_URL || process.env.PUBLIC_URL || "";
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  return url;
};

/**
 * Normalize phone number to E.164 format
 * Converts various formats (9519721902, (442) 245-3581, etc.) to +19519721902, +14422453581
 * @param {string} phoneNumber - Phone number in any format
 * @returns {string|null} - Normalized E.164 format (+[country code][number]) or null if invalid
 */
const normalizePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return null;

  // If already starts with +, validate and return as-is (preserve international numbers)
  if (phoneNumber.trim().startsWith("+")) {
    const cleaned = phoneNumber.replace(/[^\d+]/g, "");
    // Must have + followed by country code and number (minimum 8 digits total after +)
    if (/^\+[1-9]\d{7,14}$/.test(cleaned)) {
      return cleaned;
    }
    // Invalid format
    return null;
  }

  // Remove all non-digit characters
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  // If empty after cleaning, invalid
  if (!digitsOnly) return null;

  // Handle US/Canada numbers (country code 1)
  // If starts with 1 and has 11 digits, it's already country code + number
  if (digitsOnly.length === 11 && digitsOnly.startsWith("1")) {
    return `+${digitsOnly}`;
  }

  // If has 10 digits, assume US/Canada and prepend +1
  if (digitsOnly.length === 10) {
    return `+1${digitsOnly}`;
  }

  // Invalid format
  return null;
};

/**
 * Validate phone number format (after normalization)
 * @param {string} phoneNumber - Phone number to validate (can be in any format)
 * @returns {boolean} - True if valid, false otherwise
 */
const isValidPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return false;

  // Normalize first
  const normalized = normalizePhoneNumber(phoneNumber);
  if (!normalized) return false;

  // Check for test numbers (555-xxxx pattern)
  if (/^\+?1?555/.test(normalized)) {
    return false;
  }

  // Must be valid E.164 format: +[country code][number] (8-15 digits after +)
  const e164Pattern = /^\+[1-9]\d{7,14}$/;
  return e164Pattern.test(normalized);
};

const makeCall = async (leadId, phoneNumber, context = {}) => {
  try {
    // ========================================
    // STEP 1: Normalize phone number to E.164 format
    // ========================================
    const normalizedPhone = normalizePhoneNumber(phoneNumber);
    
    if (!normalizedPhone) {
      const error = new Error(`Invalid phone number format: ${phoneNumber}`);
      error.code = "INVALID_PHONE_NUMBER";
      error.twilioCode = "21211";
      throw error;
    }

    // Validate normalized phone number
    if (!isValidPhoneNumber(normalizedPhone)) {
      const error = new Error(`Invalid phone number format: ${phoneNumber} (normalized: ${normalizedPhone})`);
      error.code = "INVALID_PHONE_NUMBER";
      error.twilioCode = "21211";
      throw error;
    }

    // Check if this is an international call (not US/Canada)
    const countryCode = normalizedPhone.match(/^\+(1|\d{1,3})/);
    if (countryCode && countryCode[1] !== '1') {
      console.warn(`[Voice] International call: +${countryCode[1]} ${normalizedPhone}`);
    }

    const publicUrl = getPublicUrl();

    if (!publicUrl || publicUrl === "" || publicUrl.includes("REPLACE")) {
      throw new Error("PUBLIC_URL environment variable is not configured");
    }

    // ========================================
    // STEP 2: LOCAL PRESENCE - Select Twilio number based on lead's area code
    // Use normalized number for matching (or override via context.fromNumber)
    // ========================================
    const localNumber = context.fromNumber || phoneMatcher.getLocalNumber(normalizedPhone);
    const matchInfo = context.fromNumber
      ? { region: "Fixed (override)", leadAreaCode: null }
      : phoneMatcher.getMatchInfo(normalizedPhone);
    
    // Validate that we have a valid Twilio number to call FROM
    if (!localNumber) {
      const error = new Error("No valid Twilio phone number available for outbound calls");
      error.code = "NO_TWILIO_NUMBER";
      throw error;
    }

    console.log(`[Voice] From: ${localNumber} (${matchInfo.region})`);

    // Validate leadId before building URLs
    if (!leadId || leadId === 'undefined' || leadId === 'null') {
      throw new Error("Invalid leadId: leadId is required for TwiML URL");
    }

    // Build TwiML URL with leadId and optional trigger context
    // Ensure leadId is properly encoded
    const encodedLeadId = encodeURIComponent(String(leadId));
    let twimlUrl = `${publicUrl}/api/voice/twiml?leadId=${encodedLeadId}`;
    if (context.trigger) {
      twimlUrl += `&trigger=${encodeURIComponent(String(context.trigger))}`;
    }
    const statusCallback = `${publicUrl}/api/voice/status/${encodedLeadId}`;
    const recordingCallback = `${publicUrl}/api/voice/recording-callback/${encodedLeadId}`;

    // Validate URLs before passing to Twilio
    try {
      new URL(twimlUrl);
      new URL(statusCallback);
      new URL(recordingCallback);
    } catch (urlError) {
      throw new Error(`Invalid URL format: ${urlError.message}. Check PUBLIC_URL env var (current: ${publicUrl}).`);
    }

    console.log(`[Voice] Call: ${normalizedPhone} from ${localNumber} (lead: ${leadId})`);

    // ========================================
    // STEP 3: Make Twilio call with normalized numbers
    // ========================================
    const call = await client.calls.create({
      url: twimlUrl,
      to: normalizedPhone, // Use normalized E.164 format
      from: localNumber, // Use geo-matched local number (already in E.164 from config)
      statusCallback: statusCallback,
      statusCallbackEvent: ["initiated", "ringing", "answered", "completed"],

      // ========================================
      // RECORDING: Twilio will record the entire call
      // and send us the file when complete
      // ========================================
      record: true,
      recordingStatusCallback: recordingCallback,
      recordingStatusCallbackEvent: ["completed"],
    });

    console.log(`[Voice] Call created: ${call.sid} (${call.status})`);

    return call;
  } catch (error) {
    console.error("[Voice] ✗ Error making Twilio call:", error.message);
    if (error.code) {
      console.error("[Voice] Twilio Error Code:", error.code);
    }
    throw error;
  }
};

/**
 * Process recording callback from Twilio
 * Downloads the recording and uploads to Supabase Storage
 *
 * @param {string} leadId - Lead UUID
 * @param {string} twilioUrl - Twilio recording URL
 * @param {string} recordingSid - Twilio Recording SID
 * @param {string} callSid - Twilio Call SID
 */
const processRecording = async (leadId, twilioUrl, recordingSid, callSid) => {
  try {
    console.log(`[Recording] Processing: ${recordingSid} (lead: ${leadId})`);

    // 1. Download audio from Twilio (append .mp3 to get MP3 format)
    const downloadUrl = `${twilioUrl}.mp3`;

    const response = await axios({
      url: downloadUrl,
      method: "GET",
      responseType: "arraybuffer", // Important for binary data
      timeout: 30000, // 30s timeout to prevent hanging on large recordings
      auth: {
        username: TWILIO_ACCOUNT_SID,
        password: TWILIO_AUTH_TOKEN,
      },
    });

    const fileBuffer = response.data;

    // 2. Generate filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `lead_${leadId}_${recordingSid}_${timestamp}.mp3`;

    // 3. Upload to Supabase Storage bucket "call-recordings"
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("call-recordings")
      .upload(fileName, fileBuffer, {
        contentType: "audio/mpeg",
        upsert: true,
      });

    if (uploadError) {
      console.error("[Recording] ❌ Upload error:", uploadError.message);
      throw uploadError;
    }

    // 4. Get the public URL
    const { data: publicUrlData } = supabaseAdmin.storage
      .from("call-recordings")
      .getPublicUrl(fileName);

    const supabaseUrl = publicUrlData.publicUrl;

    // ==========================================
    // ✨ NEW: Transcribe Full Recording (Whisper)
    // ==========================================
    let fullTranscriptText = "";
    let tempFilePath = null;
    try {
      // Whisper transcription

      // 1. Save buffer to temp file (Whisper needs a file stream)
      // SPEED FIX: Use async write to avoid blocking event loop
      tempFilePath = path.join(os.tmpdir(), fileName);
      await fs.promises.writeFile(tempFilePath, fileBuffer);

      // 2. Call OpenAI API
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(tempFilePath),
        model: "whisper-1",
        language: "en", // Force English directly
        prompt:
          "California Rate Relief Program solar qualification call. Manager Chad. Customer discussion about net metering and solar PPA program.", // Context to prevent hallucinations
      });

      fullTranscriptText = transcription.text;
    } catch (transcribeError) {
      console.error(
        "[Recording] ⚠️ Transcription failed:",
        transcribeError.message
      );
    } finally {
      // Always clean up temp file (async - don't block)
      if (tempFilePath) {
        fs.promises.unlink(tempFilePath).catch(() => { /* file may not exist */ });
      }
    }

    // 5. Update call_logs table with recording URL AND transcript
    if (callSid) {
      // Fetch existing log to append transcript
      const { data: existingLogs } = await supabaseAdmin
        .from("call_logs")
        .select("transcript")
        .eq("call_sid", callSid)
        .limit(1);

      const existingLog = existingLogs?.[0] || null;

      let updatedTranscript = existingLog?.transcript || [];

      if (fullTranscriptText) {
        // Check if it's a string (old format) or array (new format)
        if (typeof updatedTranscript === "string") {
          try {
            updatedTranscript = JSON.parse(updatedTranscript);
          } catch (e) {
            updatedTranscript = [];
          }
        }
        if (!Array.isArray(updatedTranscript)) updatedTranscript = [];

        // ========================================
        // Only add full recording transcript if a manager transfer occurred
        // AI-only calls don't need the Whisper transcript (we already have real-time transcripts)
        // ========================================
        const transcriptText = updatedTranscript
          .map((t) => t.content || "")
          .join(" ")
          .toLowerCase();
        const hasManagerTransfer =
          transcriptText.includes("manager") ||
          transcriptText.includes("transfercall") ||
          transcriptText.includes("please hold");

        if (hasManagerTransfer) {
          updatedTranscript.push({
            role: "system",
            content: `🎙️ FULL CALL RECORDING TRANSCRIPT:\n\n${fullTranscriptText}`,
            timestamp: new Date().toISOString(),
          });
        }
      }

      const { error: updateError } = await supabaseAdmin
        .from("call_logs")
        .update({
          recording_url: supabaseUrl,
          transcript: updatedTranscript,
        })
        .eq("call_sid", callSid);

      if (updateError) {
        console.error("[Recording] Failed to update call_logs:", updateError.message);
      }
    } else if (leadId) {
      // Fallback: update most recent call for this lead
      const { data: latestCalls } = await supabaseAdmin
        .from("call_logs")
        .select("id")
        .eq("lead_id", leadId)
        .order("created_at", { ascending: false })
        .limit(1);

      const latestCall = latestCalls?.[0] || null;

      if (latestCall) {
        await supabaseAdmin
          .from("call_logs")
          .update({ recording_url: supabaseUrl })
          .eq("id", latestCall.id);
      }
    }

    console.log(`[Recording] Saved: ${recordingSid}`);
    return supabaseUrl;
  } catch (error) {
    console.error("[Recording] ❌ Failed to process recording:", error.message);
    throw error;
  }
};

const transferCall = async (callSid, targetNumber) => {
  try {
    // Normalize target number before transfer
    const normalizedTarget = normalizePhoneNumber(targetNumber);
    
    if (!normalizedTarget) {
      const error = new Error(`Invalid phone number format for transfer: ${targetNumber}`);
      error.code = "INVALID_PHONE_NUMBER";
      throw error;
    }

    console.log(`[Voice] Transfer: ${callSid} → ${normalizedTarget}`);

    // Update the call with new TwiML to dial the normalized number
    const call = await client.calls(callSid).update({
      twiml: `<Response>
                      <Say>Please hold while I connect you to a manager.</Say>
                      <Dial>${normalizedTarget}</Dial>
                    </Response>`,
    });
    return call;
  } catch (error) {
    console.error("[Voice] Failed to transfer call:", error);
    throw error;
  }
};

module.exports = {
  makeCall,
  processRecording,
  isValidPhoneNumber,
  normalizePhoneNumber,
  transferCall,
};
