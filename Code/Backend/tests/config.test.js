/**
 * Tests for config/index.js
 * Covers: BUSINESS_TIMEZONE, required env vars, defaults
 */

// Save original env
const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    SUPABASE_URL: "https://test.supabase.co",
    SUPABASE_SERVICE_ROLE_KEY: "test-key",
    OPENAI_API_KEY: "sk-test",
    TWILIO_ACCOUNT_SID: "ACtest",
    TWILIO_AUTH_TOKEN: "test-auth",
    RESEND_API_KEY: "re_test",
  };
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  process.env = originalEnv;
  jest.restoreAllMocks();
});

describe("Config", () => {
  test("exports BUSINESS_TIMEZONE with default", () => {
    const config = require("../src/config");
    expect(config.BUSINESS_TIMEZONE).toBe("America/Los_Angeles");
  });

  test("BUSINESS_TIMEZONE respects env override", () => {
    process.env.BUSINESS_TIMEZONE = "America/New_York";
    const config = require("../src/config");
    expect(config.BUSINESS_TIMEZONE).toBe("America/New_York");
  });

  test("exports PORT with default 8000", () => {
    const config = require("../src/config");
    expect(config.PORT).toBe("8000");
  });

  test("exports queue configuration", () => {
    const config = require("../src/config");
    expect(config.QUEUE_CHECK_INTERVAL).toBeDefined();
    expect(typeof config.QUEUE_CHECK_INTERVAL).toBe("number");
    expect(config.QUEUE_MAX_ATTEMPTS).toBeDefined();
  });

  test("exports quiet hours config", () => {
    const config = require("../src/config");
    expect(config.QUIET_HOURS_ENABLED).toBeDefined();
  });

  test("exports live transfer number", () => {
    const config = require("../src/config");
    expect(config.LIVE_TRANSFER_NUMBER).toBeDefined();
  });
});
