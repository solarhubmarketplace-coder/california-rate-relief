/**
 * Tests for lead.service.js
 * Covers: dedup check (no .single() crash), lead creation, type assignment
 */

const mockFrom = jest.fn();

jest.mock("../src/lib/supabase", () => ({
  supabaseAdmin: {
    from: (...args) => mockFrom(...args),
  },
}));
jest.mock("../src/services/email-sequence.service", () => ({
  getActiveSequence: jest.fn().mockResolvedValue(null),
  assignSequenceToLead: jest.fn().mockResolvedValue(null),
}));
jest.mock("../src/services/queue.service", () => ({
  createTasksForLead: jest.fn().mockResolvedValue(),
}));

const leadService = require("../src/services/lead.service");
const queueService = require("../src/services/queue.service");

describe("LeadService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("createLead - dedup check", () => {
    test("creates lead when phone does not exist (no .single() crash)", async () => {
      const createdLead = {
        id: "new-lead-id",
        name: "Test User",
        phone: "+19519721902",
        status: "new",
        type: "hot",
      };

      // Dedup check returns empty array (no existing lead)
      const dedupChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({ data: [], error: null }),
      };

      // Insert returns created lead
      const insertChain = {
        select: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({
          data: createdLead,
          error: null,
        }),
      };

      mockFrom
        .mockReturnValueOnce(dedupChain) // dedup check
        .mockReturnValueOnce({ insert: jest.fn().mockReturnValue(insertChain) }); // insert

      const result = await leadService.createLead({
        name: "Test User",
        phone: "+19519721902",
        source: "website",
      });

      expect(result).toEqual(createdLead);
      expect(queueService.createTasksForLead).toHaveBeenCalledWith(createdLead);
    });

    test("throws 409 when phone already exists", async () => {
      const dedupChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: [{ id: "existing-id" }],
          error: null,
        }),
      };

      mockFrom.mockReturnValueOnce(dedupChain);

      await expect(
        leadService.createLead({
          name: "Duplicate",
          phone: "+19519721902",
        })
      ).rejects.toEqual(
        expect.objectContaining({
          statusCode: 409,
          message: expect.stringContaining("already exists"),
        })
      );
    });

    test("throws 500 on dedup database error", async () => {
      const dedupChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({
          data: null,
          error: { message: "Connection timeout" },
        }),
      };

      mockFrom.mockReturnValueOnce(dedupChain);

      await expect(
        leadService.createLead({
          name: "Test",
          phone: "+19519721902",
        })
      ).rejects.toEqual(
        expect.objectContaining({
          statusCode: 500,
          message: "Connection timeout",
        })
      );
    });
  });

  describe("createLead - type assignment", () => {
    test("defaults hot for website source", async () => {
      const dedupChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({ data: [], error: null }),
      };

      const insertFn = jest.fn().mockReturnValue({
        select: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({
          data: { id: "1", type: "hot" },
          error: null,
        }),
      });

      mockFrom
        .mockReturnValueOnce(dedupChain)
        .mockReturnValueOnce({ insert: insertFn });

      await leadService.createLead({
        name: "Web Lead",
        phone: "+15551234567",
        source: "website",
      });

      const insertedData = insertFn.mock.calls[0][0];
      expect(insertedData.type).toBe("hot");
    });

    test("respects explicit type override", async () => {
      const dedupChain = {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        limit: jest.fn().mockResolvedValue({ data: [], error: null }),
      };

      const insertFn = jest.fn().mockReturnValue({
        select: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({
          data: { id: "1", type: "cold" },
          error: null,
        }),
      });

      mockFrom
        .mockReturnValueOnce(dedupChain)
        .mockReturnValueOnce({ insert: insertFn });

      await leadService.createLead({
        name: "Cold Import",
        phone: "+15559999999",
        source: "csv_import",
        type: "cold",
      });

      const insertedData = insertFn.mock.calls[0][0];
      expect(insertedData.type).toBe("cold");
    });
  });
});
