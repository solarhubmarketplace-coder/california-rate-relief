/**
 * Tests for config/scripts.js
 * Covers: M2 requirements - Golden Path, Iron Dome, templates, exports
 */

const scripts = require("../src/config/scripts");

describe("AI Scripts Configuration", () => {
  describe("Exports", () => {
    test("exports AI_VOICE", () => {
      expect(scripts.AI_VOICE).toBe("shimmer");
    });

    test("exports AI_SYSTEM_PROMPT_INITIAL_CALL", () => {
      expect(scripts.AI_SYSTEM_PROMPT_INITIAL_CALL).toBeDefined();
      expect(typeof scripts.AI_SYSTEM_PROMPT_INITIAL_CALL).toBe("string");
      expect(scripts.AI_SYSTEM_PROMPT_INITIAL_CALL.length).toBeGreaterThan(100);
    });

    test("exports AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY", () => {
      expect(scripts.AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY).toBeDefined();
      expect(typeof scripts.AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY).toBe("string");
    });

    test("exports VOICEMAIL_DATA_ANOMALY", () => {
      expect(scripts.VOICEMAIL_DATA_ANOMALY).toBeDefined();
      expect(scripts.VOICEMAIL_DATA_ANOMALY).toContain("Sun Speed");
    });

    test("exports fillTemplate helper", () => {
      expect(typeof scripts.fillTemplate).toBe("function");
    });
  });

  describe("Golden Path Qualification (M2 Issue #2)", () => {
    const prompt = scripts.AI_SYSTEM_PROMPT_INITIAL_CALL;

    test("contains FCC-compliant opener", () => {
      expect(prompt).toContain("Sarah");
      expect(prompt.toLowerCase()).toContain("recorded line");
      expect(prompt.toLowerCase()).toContain("sun speed solar");
    });

    test("contains homeowner qualification", () => {
      expect(prompt.toLowerCase()).toContain("homeowner");
    });

    test("contains electric bill qualification", () => {
      expect(prompt.toLowerCase()).toContain("bill");
    });

    test("contains credit qualification", () => {
      expect(prompt.toLowerCase()).toContain("credit");
    });

    test("contains roof assessment", () => {
      expect(prompt.toLowerCase()).toContain("roof");
    });
  });

  describe("Iron Dome Objection Handling (M2 Issue #2)", () => {
    const prompt = scripts.AI_SYSTEM_PROMPT_INITIAL_CALL;

    test("handles 'too expensive' objection", () => {
      expect(prompt.toLowerCase()).toContain("expensive");
    });

    test("handles 'not interested' objection", () => {
      expect(prompt.toLowerCase()).toContain("not interested");
    });

    test("handles lien/UCC concerns", () => {
      // Either in main prompt or in context service objection guide
      const hasLien =
        prompt.toLowerCase().includes("lien") ||
        prompt.toLowerCase().includes("ucc");
      expect(hasLien).toBe(true);
    });
  });

  describe("SMS Templates", () => {
    test("exports all SMS templates", () => {
      expect(scripts.SMS_HOT_LEAD_WELCOME).toBeDefined();
      expect(scripts.SMS_MISSED_CALL_FOLLOWUP).toBeDefined();
      expect(scripts.SMS_APPOINTMENT_CONFIRMATION).toBeDefined();
      expect(scripts.SMS_APPOINTMENT_REMINDER_24H).toBeDefined();
    });

    test("SMS templates contain placeholders", () => {
      expect(scripts.SMS_HOT_LEAD_WELCOME).toContain("{{name}}");
      expect(scripts.SMS_APPOINTMENT_CONFIRMATION).toContain("{{name}}");
    });
  });

  describe("Email Templates", () => {
    test("exports email templates", () => {
      expect(scripts.EMAIL_COLD_LEAD_SUBJECT).toBeDefined();
      expect(scripts.EMAIL_COLD_LEAD_HTML).toBeDefined();
      expect(scripts.EMAIL_APPOINTMENT_CONFIRMATION_SUBJECT).toBeDefined();
      expect(scripts.EMAIL_APPOINTMENT_CONFIRMATION_HTML).toBeDefined();
    });
  });

  describe("fillTemplate", () => {
    test("replaces placeholders", () => {
      const result = scripts.fillTemplate("Hello {{name}}, your bill is {{bill}}.", {
        name: "John",
        bill: "$200",
      });
      expect(result).toBe("Hello John, your bill is $200.");
    });

    test("replaces multiple occurrences", () => {
      const result = scripts.fillTemplate("Hi {{name}}! {{name}} is great.", {
        name: "Jane",
      });
      expect(result).toBe("Hi Jane! Jane is great.");
    });

    test("handles missing values by keeping placeholder", () => {
      const result = scripts.fillTemplate("Hi {{name}}!", {});
      expect(result).toBe("Hi {{name}}!");
    });
  });
});
