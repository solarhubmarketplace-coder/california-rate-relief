/**
 * Tests for context.service.js
 * Covers: getPreviousCallContext, getLeadByPhone (no .single() crash),
 *         generateContextualSystemMessage
 */

const mockFrom = jest.fn();

jest.mock("../src/lib/supabase", () => ({
  supabaseAdmin: {
    from: (...args) => mockFrom(...args),
  },
}));

const {
  getPreviousCallContext,
  generateContextualSystemMessage,
  getLeadByPhone,
  buildContextSummary,
  clearCache,
} = require("../src/services/context.service");

describe("Context Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => {});
    clearCache(); // Clear in-memory caches between tests
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("getPreviousCallContext", () => {
    test("returns empty context for null leadId", async () => {
      const result = await getPreviousCallContext(null);
      expect(result.has_previous_calls).toBe(false);
      expect(result.previous_calls).toEqual([]);
    });

    test("returns empty context when no calls found", async () => {
      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({ data: [], error: null }),
      });

      const result = await getPreviousCallContext("lead-123");
      expect(result.has_previous_calls).toBe(false);
    });

    test("returns context when previous calls exist", async () => {
      const mockCalls = [
        {
          id: "call-1",
          created_at: new Date().toISOString(),
          status: "completed",
          duration: 120,
          ai_summary: "Discussed solar panels",
          conversation_context: {
            customer_interests: ["savings"],
            objections_raised: ["expensive"],
            call_outcome: "callback_requested",
          },
        },
      ];

      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: mockCalls,
          error: null,
        }),
      });

      const result = await getPreviousCallContext("lead-123");
      expect(result.has_previous_calls).toBe(true);
      expect(result.total_previous_calls).toBe(1);
      expect(result.summary).toContain("Discussed solar panels");
    });

    test("handles database error gracefully", async () => {
      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: null,
          error: { message: "Connection failed" },
        }),
      });

      const result = await getPreviousCallContext("lead-123");
      expect(result.has_previous_calls).toBe(false);
    });
  });

  describe("getLeadByPhone", () => {
    test("returns null for empty phone", async () => {
      const result = await getLeadByPhone(null);
      expect(result).toBeNull();
    });

    test("returns lead data when found (no .single() crash)", async () => {
      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        or: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [
            {
              id: "lead-1",
              name: "John Smith",
              phone: "+19519721902",
              email: "john@test.com",
              status: "new",
              bill_amount: 200,
              utility_provider: "SCE",
              credit_score: "yes",
              address: "123 Main St",
            },
          ],
          error: null,
        }),
      });

      const result = await getLeadByPhone("+19519721902");
      expect(result).not.toBeNull();
      expect(result.name).toBe("John Smith");
      expect(result.firstName).toBe("John");
      expect(result.lastName).toBe("Smith");
      expect(result.bill_amount).toBe(200);
    });

    test("returns null when lead not found (no crash)", async () => {
      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        or: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [],
          error: null,
        }),
      });

      const result = await getLeadByPhone("+10000000000");
      expect(result).toBeNull();
    });

    test("returns null on database error (no crash)", async () => {
      mockFrom.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        or: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: null,
          error: { message: "timeout" },
        }),
      });

      const result = await getLeadByPhone("+19519721902");
      expect(result).toBeNull();
    });
  });

  describe("generateContextualSystemMessage", () => {
    test("returns base message when no previous context", () => {
      const result = generateContextualSystemMessage(
        "You are an AI assistant.",
        null
      );
      expect(result).toBe("You are an AI assistant.");
    });

    test("adds returning caller notice when previous calls exist", () => {
      const context = {
        has_previous_calls: true,
        total_previous_calls: 2,
        last_call_date: new Date().toISOString(),
        summary: "Discussed solar savings",
        previous_calls: [
          {
            conversation_context: {
              customer_interests: ["savings"],
              objections_raised: ["expensive"],
              objections_resolved: ["expensive"],
              call_outcome: "callback_requested",
            },
          },
        ],
      };

      const result = generateContextualSystemMessage(
        "Base prompt",
        context,
        { name: "John" }
      );

      expect(result).toContain("RETURNING CALLER DETECTED");
      expect(result).toContain("Customer Name: John");
      expect(result).toContain("PREVIOUS CONVERSATION CONTEXT");
      expect(result).toContain("savings");
    });

    test("includes qualification data from form", () => {
      const context = {
        has_previous_calls: true,
        total_previous_calls: 1,
        previous_calls: [{}],
      };

      const leadInfo = {
        name: "Jane Doe",
        bill_amount: 250,
        utility_provider: "PG&E",
        credit_score: "yes",
        address: "456 Oak Ave",
      };

      const result = generateContextualSystemMessage(
        "Base prompt",
        context,
        leadInfo
      );

      expect(result).toContain("QUALIFICATION DATA FROM FORM");
      expect(result).toContain("$250");
      expect(result).toContain("PG&E");
      expect(result).toContain("Above 650");
    });

    test("includes objection handling guide", () => {
      const context = {
        has_previous_calls: true,
        total_previous_calls: 1,
        previous_calls: [{}],
      };

      const result = generateContextualSystemMessage("Base", context);
      expect(result).toContain("CRITICAL OBJECTION HANDLING");
      expect(result).toContain("UCC-1");
    });
  });

  describe("buildContextSummary", () => {
    test("returns null for empty calls", () => {
      expect(buildContextSummary([])).toBeNull();
      expect(buildContextSummary(null)).toBeNull();
    });

    test("builds summary from call data", () => {
      const calls = [
        {
          ai_summary: "Good conversation about solar",
          conversation_context: {
            customer_interests: ["savings", "rebates"],
            objections_raised: ["expensive"],
            call_outcome: "callback_requested",
          },
        },
      ];

      const summary = buildContextSummary(calls);
      expect(summary).toContain("Good conversation about solar");
      expect(summary).toContain("savings, rebates");
      expect(summary).toContain("expensive");
    });
  });
});
