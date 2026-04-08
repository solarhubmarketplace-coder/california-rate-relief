require('dotenv').config();
const voiceService = require('../src/services/voice.service');
const { LIVE_TRANSFER_NUMBER } = require('../src/config');

const runTest = async () => {
    console.log("Testing Live Transfer Logic...");
    console.log(`Live Transfer Number from Env: ${LIVE_TRANSFER_NUMBER}`);

    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
        console.error("Missing Twilio Credentials in .env");
        return;
    }

    // Mocking the Twilio Client call would be ideal, but for a "manual" verification 
    // without actually calling, we can just check if the function is defined and 
    // maybe try to call it with a fake SID to see if it AUTHENTICATES with Twilio 
    // (it will fail with 'Call not found', which is good!)

    // If it fails with "Authentication Error", that's bad.
    // If it fails with "Call not found", that means it successfully contacted Twilio.

    const FAKE_CALL_SID = "CA1234567890abcdef1234567890abcdef";

    try {
        console.log(`Attempting to transfer fake call ${FAKE_CALL_SID}...`);
        await voiceService.transferCall(FAKE_CALL_SID, LIVE_TRANSFER_NUMBER);
    } catch (error) {
        if (error.code === 20404 || error.status === 404) {
            console.log("✅ SUCCESS: Twilio responded with 'Not Found' (Expected for fake SID).");
            console.log("This confirms the API client is configured and the function attempts the transfer.");
        } else {
            console.error("❌ ERROR: Unexpected error:", error.message);
            console.error(error);
        }
    }
};

runTest();
