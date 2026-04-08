/**
 * Tests for email-sequence.service.js
 * Covers: .single() → .limit(1) fixes, getNextStepForLead, advanceLeadToNextStep
 */

const mockFrom = jest.fn();

jest.mock("../src/lib/supabase", () => ({
  supabaseAdmin: {
    from: (...args) => mockFrom(...args),
  },
}));

const emailSequenceService = require("../src/services/email-sequence.service");

describe("EmailSequenceService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("getActiveSequence", () => {
    test("returns null when no active sequence", async () => {
      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({ data: [], error: null }),
      });

      const result = await emailSequenceService.getActiveSequence("hot");
      expect(result).toBeNull();
    });

    test("returns sequence with steps when found", async () => {
      const mockSequence = { id: "seq-1", name: "Hot Sequence", lead_type: "hot" };
      const mockSteps = [
        { id: "step-1", step_order: 1, delay_days: 0, subject: "Welcome" },
      ];

      // First call: sequences query
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [mockSequence],
          error: null,
        }),
      });

      // Second call: steps query
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({
          data: mockSteps,
          error: null,
        }),
      });

      const result = await emailSequenceService.getActiveSequence("hot");
      expect(result).not.toBeNull();
      expect(result.name).toBe("Hot Sequence");
      expect(result.steps).toHaveLength(1);
    });
  });

  describe("getNextStepForLead (fixed .single() → .limit(1))", () => {
    test("returns null when no active sequence for lead", async () => {
      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        is: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({ data: [], error: null }),
      });

      const result = await emailSequenceService.getNextStepForLead("lead-1");
      expect(result).toBeNull();
    });

    test("returns current and next step when tracking exists", async () => {
      const tracking = {
        id: "track-1",
        lead_id: "lead-1",
        sequence_id: "seq-1",
        current_step: 1,
      };

      const currentStep = {
        id: "step-1",
        step_order: 1,
        subject: "Welcome",
      };

      const nextStep = {
        id: "step-2",
        step_order: 2,
        subject: "Follow-up",
      };

      // Tracking query
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        is: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [tracking],
          error: null,
        }),
      });

      // Current step query
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [currentStep],
          error: null,
        }),
      });

      // Next step query
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [nextStep],
          error: null,
        }),
      });

      const result = await emailSequenceService.getNextStepForLead("lead-1");
      expect(result).not.toBeNull();
      expect(result.currentStep.subject).toBe("Welcome");
      expect(result.nextStep.subject).toBe("Follow-up");
    });

    test("marks sequence complete when no next step", async () => {
      const tracking = {
        id: "track-1",
        sequence_id: "seq-1",
        current_step: 3,
      };

      const currentStep = {
        id: "step-3",
        step_order: 3,
        subject: "Final",
      };

      // Tracking query
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        is: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [tracking],
          error: null,
        }),
      });

      // Current step found
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [currentStep],
          error: null,
        }),
      });

      // No next step
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [],
          error: null,
        }),
      });

      const result = await emailSequenceService.getNextStepForLead("lead-1");
      expect(result.nextStep).toBeNull();
    });

    test("completes sequence when current step not found", async () => {
      const tracking = {
        id: "track-1",
        sequence_id: "seq-1",
        current_step: 99,
      };

      // Tracking query
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        is: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [tracking],
          error: null,
        }),
      });

      // No current step
      mockFrom.mockReturnValueOnce({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [],
          error: null,
        }),
      });

      // Update tracking to completed
      mockFrom.mockReturnValueOnce({
        update: jest.fn().mockReturnThis(),
        eq: jest.fn().mockResolvedValue({ error: null }),
      });

      const result = await emailSequenceService.getNextStepForLead("lead-1");
      expect(result).toBeNull();
    });
  });

  describe("advanceLeadToNextStep (fixed .single() → .limit(1))", () => {
    test("throws when no active sequence", async () => {
      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        is: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({ data: [], error: null }),
      });

      await expect(
        emailSequenceService.advanceLeadToNextStep("lead-1")
      ).rejects.toThrow("No active sequence found for lead");
    });
  });
});
