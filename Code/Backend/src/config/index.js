require('dotenv').config();

const getEnv = (key, fallback = null) => {
    const value = process.env[key];
    if (!value && fallback === null) {
        console.warn(`Missing env variable: ${key}`);
    }
    return value || fallback;
};

module.exports = {
    PORT: getEnv('PORT', 8000),
    SUPABASE_URL: getEnv('SUPABASE_URL'),
    SUPABASE_SERVICE_ROLE_KEY: getEnv('SUPABASE_SERVICE_ROLE_KEY'),
    OPENAI_API_KEY: getEnv('OPENAI_API_KEY'),
    TWILIO_ACCOUNT_SID: getEnv('TWILIO_ACCOUNT_SID'),
    TWILIO_AUTH_TOKEN: getEnv('TWILIO_AUTH_TOKEN'),
    TWILIO_PHONE_NUMBER: getEnv('TWILIO_PHONE_NUMBER', null), // Optional: Phone numbers now in config/twilio-numbers.json

    // Resend Email
    RESEND_API_KEY: getEnv('RESEND_API_KEY'),
    EMAIL_FROM: getEnv('EMAIL_FROM', 'California Rate Relief <noreply@ratereliefca.com>'),
    COLD_EMAIL_FROM: getEnv('COLD_EMAIL_FROM'), // Optional: Special sender for cold leads

    // Public URL (ngrok or production domain) - used for Twilio callbacks
    PUBLIC_URL: getEnv('PUBLIC_URL'),

    // Base URL for tracking links
    BASE_URL: getEnv('BASE_URL', 'http://localhost:8000'),
    FRONTEND_URL: getEnv('FRONTEND_URL', 'http://localhost:3000'),

    // Queue Configuration (all in seconds)
    QUEUE_SMS_ENABLED: getEnv('QUEUE_SMS_ENABLED', 'true'),
    QUEUE_VOICE_ENABLED: getEnv('QUEUE_VOICE_ENABLED', 'true'),
    QUEUE_EMAIL_DELAY: parseInt(getEnv('QUEUE_EMAIL_DELAY', '60'), 10),
    QUEUE_SMS_DELAY: parseInt(getEnv('QUEUE_SMS_DELAY', '30'), 10),
    QUEUE_VOICE_DELAY: parseInt(getEnv('QUEUE_VOICE_DELAY', '60'), 10),
    QUEUE_RETRY_DELAY: parseInt(getEnv('QUEUE_RETRY_DELAY', '30'), 10),
    QUEUE_MAX_ATTEMPTS: parseInt(getEnv('QUEUE_MAX_ATTEMPTS', '3'), 10),
    QUEUE_CHECK_INTERVAL: parseInt(getEnv('QUEUE_CHECK_INTERVAL', '10000'), 10),

    // Quiet Hours (8 PM - 9 AM Pacific, auto-skips weekends)
    QUIET_HOURS_ENABLED: getEnv('QUIET_HOURS_ENABLED', 'true'),

    // Live Transfer
    LIVE_TRANSFER_NUMBER: getEnv('LIVE_TRANSFER_NUMBER', '951-972-1902'),

    // Timezone
    BUSINESS_TIMEZONE: getEnv('BUSINESS_TIMEZONE', 'America/Los_Angeles'),
};
