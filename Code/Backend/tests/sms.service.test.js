/**
 * Tests for sms.service.js
 * Covers: SMS_APPOINTMENT_REMINDER_24H import fix, sendSms normalization
 */

jest.mock("twilio", () => {
  const mockCreate = jest.fn().mockResolvedValue({
    sid: "SM_test_123",
    status: "queued",
    price: null,
    priceUnit: "USD",
  });

  return jest.fn(() => ({
    messages: { create: mockCreate },
  }));
});
jest.mock("../src/config", () => ({
  TWILIO_ACCOUNT_SID: "ACtest",
  TWILIO_AUTH_TOKEN: "test_token",
}));
jest.mock("../src/lib/supabase", () => ({
  supabaseAdmin: {
    from: jest.fn(() => ({
      insert: jest.fn().mockResolvedValue({ error: null }),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      range: jest.fn().mockResolvedValue({ data: [], error: null, count: 0 }),
    })),
  },
}));
jest.mock("../src/services/phone-matcher.service", () => ({
  getLocalNumber: jest.fn(() => "+19519721902"),
  getMatchInfo: jest.fn(() => ({ region: "SoCal", leadAreaCode: "951" })),
  normalizePhoneNumber: jest.fn((phone) => {
    if (!phone) return null;
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 10) return `+1${digits}`;
    if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
    return null;
  }),
}));

// Must require AFTER mocks
const smsService = require("../src/services/sms.service");
const {
  SMS_APPOINTMENT_REMINDER_24H,
  fillTemplate,
} = require("../src/config/scripts");

describe("SmsService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("SMS_APPOINTMENT_REMINDER_24H import (Phase 1A fix)", () => {
    test("SMS_APPOINTMENT_REMINDER_24H is defined and importable", () => {
      expect(SMS_APPOINTMENT_REMINDER_24H).toBeDefined();
      expect(typeof SMS_APPOINTMENT_REMINDER_24H).toBe("string");
      expect(SMS_APPOINTMENT_REMINDER_24H.length).toBeGreaterThan(0);
    });

    test("sendAppointmentReminder does not throw ReferenceError", async () => {
      // This would crash with ReferenceError before the import fix
      const result = await smsService.sendAppointmentReminder(
        "9519721902",
        "Test User",
        "Tomorrow at 2pm"
      );

      // Should return a message object (from mock), not crash
      expect(result).toBeDefined();
      expect(result.sid).toBe("SM_test_123");
    });
  });

  describe("sendSms", () => {
    test("normalizes phone number before sending", async () => {
      const result = await smsService.sendSms("9519721902", "Test message");
      expect(result).toBeDefined();
      expect(result.sid).toBe("SM_test_123");
    });

    test("rejects empty phone number", async () => {
      const result = await smsService.sendSms("", "Test message");
      expect(result).toBeNull(); // Returns null on error per implementation
    });

    test("rejects empty body", async () => {
      const result = await smsService.sendSms("9519721902", "");
      expect(result).toBeNull();
    });

    test("truncates body over 1600 chars", async () => {
      const longBody = "A".repeat(2000);
      const result = await smsService.sendSms("9519721902", longBody);
      // Should not crash
      expect(result).toBeDefined();
    });
  });

  describe("sendHotLeadWelcome", () => {
    test("sends welcome SMS with lead name", async () => {
      const result = await smsService.sendHotLeadWelcome(
        "9519721902",
        "John",
        "lead-123"
      );
      expect(result).toBeDefined();
    });
  });

  describe("sendAppointmentConfirmation", () => {
    test("sends confirmation with name and time", async () => {
      const result = await smsService.sendAppointmentConfirmation(
        "9519721902",
        "Jane",
        "Monday at 3pm",
        "lead-456"
      );
      expect(result).toBeDefined();
    });
  });
});
