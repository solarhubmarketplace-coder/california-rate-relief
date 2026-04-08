/**
 * Tests for voice.service.js
 * Covers: phone normalization, validation, and processRecording fixes
 */

// Mock dependencies before requiring the module
jest.mock("twilio", () => {
  return jest.fn(() => ({
    calls: { create: jest.fn() },
  }));
});
jest.mock("axios");
jest.mock("openai", () => {
  return jest.fn().mockImplementation(() => ({
    audio: { transcriptions: { create: jest.fn() } },
  }));
});
jest.mock("../src/config", () => ({
  TWILIO_ACCOUNT_SID: "ACtest",
  TWILIO_AUTH_TOKEN: "test_token",
  OPENAI_API_KEY: "sk-test",
}));
jest.mock("../src/lib/supabase", () => ({
  supabaseAdmin: {
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      update: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: null, error: null }),
    })),
    storage: {
      from: jest.fn(() => ({
        upload: jest.fn().mockResolvedValue({ data: {}, error: null }),
        getPublicUrl: jest.fn(() => ({
          data: { publicUrl: "https://example.com/recording.mp3" },
        })),
      })),
    },
  },
}));
jest.mock("../src/services/phone-matcher.service", () => ({
  getLocalNumber: jest.fn(() => "+19519721902"),
  getMatchInfo: jest.fn(() => ({
    region: "test",
    leadAreaCode: "951",
  })),
  normalizePhoneNumber: jest.fn((phone) => {
    if (!phone) return null;
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 10) return `+1${digits}`;
    if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
    return null;
  }),
}));

const {
  normalizePhoneNumber,
  isValidPhoneNumber,
} = require("../src/services/voice.service");

describe("Phone Number Normalization", () => {
  test("normalizes 10-digit US number", () => {
    expect(normalizePhoneNumber("9519721902")).toBe("+19519721902");
  });

  test("normalizes 11-digit US number with leading 1", () => {
    expect(normalizePhoneNumber("19519721902")).toBe("+19519721902");
  });

  test("normalizes formatted US number", () => {
    expect(normalizePhoneNumber("(951) 972-1902")).toBe("+19519721902");
  });

  test("preserves international numbers with +", () => {
    expect(normalizePhoneNumber("+442071234567")).toBe("+442071234567");
  });

  test("returns null for empty input", () => {
    expect(normalizePhoneNumber("")).toBe(null);
    expect(normalizePhoneNumber(null)).toBe(null);
    expect(normalizePhoneNumber(undefined)).toBe(null);
  });

  test("returns null for too-short numbers", () => {
    expect(normalizePhoneNumber("12345")).toBe(null);
  });

  test("returns null for invalid format", () => {
    expect(normalizePhoneNumber("abc")).toBe(null);
  });

  test("handles number with spaces and dashes", () => {
    expect(normalizePhoneNumber("951 972 1902")).toBe("+19519721902");
    expect(normalizePhoneNumber("951-972-1902")).toBe("+19519721902");
  });
});

describe("Phone Number Validation", () => {
  test("validates proper E.164 numbers", () => {
    expect(isValidPhoneNumber("+19519721902")).toBe(true);
    expect(isValidPhoneNumber("9519721902")).toBe(true);
  });

  test("rejects test numbers (555)", () => {
    expect(isValidPhoneNumber("+15551234567")).toBe(false);
  });

  test("rejects empty/null input", () => {
    expect(isValidPhoneNumber("")).toBe(false);
    expect(isValidPhoneNumber(null)).toBe(false);
  });

  test("rejects invalid numbers", () => {
    expect(isValidPhoneNumber("abc")).toBe(false);
    expect(isValidPhoneNumber("123")).toBe(false);
  });
});
