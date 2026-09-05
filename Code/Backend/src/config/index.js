require('dotenv').config();

const getEnv = (key, fallback = null) => {
    const value = process.env[key];
    if (!value && fallback === null) {
        console.warn(`Missing env variable: ${key}`);
    }
    return value || fallback;
};

const getEnvInt = (key, fallback, minimum = 0, maximum = Number.MAX_SAFE_INTEGER) => {
    const rawValue = getEnv(key, String(fallback));
    const parsedValue = Number.parseInt(rawValue, 10);

    if (!Number.isFinite(parsedValue)) {
        console.warn(`Invalid integer env variable ${key}; using ${fallback}`);
        return fallback;
    }

    const clampedValue = Math.min(maximum, Math.max(minimum, parsedValue));
    if (clampedValue !== parsedValue) {
        console.warn(`Env variable ${key} must be between ${minimum} and ${maximum}; using ${clampedValue}`);
    }
    return clampedValue;
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

    // Owner/admin instant alert — who gets emailed the moment a new inbound lead arrives.
    // Defaults to the operator's inbox; override in Railway env if it changes.
    OWNER_NOTIFICATION_EMAIL: getEnv('OWNER_NOTIFICATION_EMAIL', 'solarhubmarketplace@gmail.com'),

    // Owner instant SMS alert - texts this number the moment a new inbound
    // lead arrives. OFF by default (empty): set OWNER_SMS_ALERT_TO in Railway
    // to enable. Requires a live Twilio account (same creds the queue uses).
    OWNER_SMS_ALERT_TO: getEnv('OWNER_SMS_ALERT_TO', ''),

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
    // Raised from 10s to 30s on 2026-09-05. At a 10s tick the scheduler drove
    // ~137k Supabase requests/day against a 33.8 MB database and pinned the
    // t4g.nano instance's burstable disk IOPS at 100%, causing repeated
    // multi-day outages. 30s is still well inside the queue's delivery SLAs.
    QUEUE_CHECK_INTERVAL: getEnvInt('QUEUE_CHECK_INTERVAL', 30000, 1000),

    // Scheduler cadences (milliseconds). Queue delivery stays on the fast base
    // tick while higher-I/O scans are throttled independently.
    SCHEDULER_REMINDER_INTERVAL_MS: getEnvInt('SCHEDULER_REMINDER_INTERVAL_MS', 60000, 10000),
    SCHEDULER_SEQUENCE_INTERVAL_MS: getEnvInt('SCHEDULER_SEQUENCE_INTERVAL_MS', 60000, 10000),
    SCHEDULER_AUTO_ENROLLMENT_INTERVAL_MS: getEnvInt('SCHEDULER_AUTO_ENROLLMENT_INTERVAL_MS', 300000, 60000),
    SCHEDULER_SETTINGS_SYNC_INTERVAL_MS: getEnvInt('SCHEDULER_SETTINGS_SYNC_INTERVAL_MS', 300000, 60000),
    SCHEDULER_TOKEN_REFRESH_INTERVAL_MS: getEnvInt('SCHEDULER_TOKEN_REFRESH_INTERVAL_MS', 300000, 60000),
    SCHEDULER_REENGAGEMENT_INTERVAL_MS: getEnvInt('SCHEDULER_REENGAGEMENT_INTERVAL_MS', 86400000, 3600000),
    SCHEDULER_REENGAGEMENT_BATCH_SIZE: getEnvInt('SCHEDULER_REENGAGEMENT_BATCH_SIZE', 100, 1, 1000),

    // Quiet Hours (8 PM - 9 AM Pacific, auto-skips weekends)
    QUIET_HOURS_ENABLED: getEnv('QUIET_HOURS_ENABLED', 'true'),

    // Live Transfer
    LIVE_TRANSFER_NUMBER: getEnv('LIVE_TRANSFER_NUMBER', '951-972-1902'),

    // Timezone
    BUSINESS_TIMEZONE: getEnv('BUSINESS_TIMEZONE', 'America/Los_Angeles'),

    // Voice provider selection — controls which realtime API powers the voice bot
    // Values: 'openai' (default, existing gpt-4o-realtime) | 'inworld' (Inworld Realtime API w/ Sarah voice)
    VOICE_PROVIDER: getEnv('VOICE_PROVIDER', 'openai'),

    // Inworld Realtime API — only used when VOICE_PROVIDER=inworld
    // Format: base64-encoded client_id:client_secret (sent as "Authorization: Basic <key>")
    INWORLD_API_KEY: getEnv('INWORLD_API_KEY', ''),
    // Inworld TTS model — 'inworld-tts-1.5-max' (top quality) or 'inworld-tts-1.5-mini' (faster/cheaper)
    INWORLD_TTS_MODEL: getEnv('INWORLD_TTS_MODEL', 'inworld-tts-1.5-max'),
    // Inworld voice name for TTS — confirmed name from playground (e.g. 'Sarah', 'Dennis', etc.)
    INWORLD_VOICE: getEnv('INWORLD_VOICE', 'Sarah'),
    // LLM model routed through Inworld Router — matches OpenAI model IDs
    INWORLD_LLM_MODEL: getEnv('INWORLD_LLM_MODEL', 'gpt-4o'),
};
