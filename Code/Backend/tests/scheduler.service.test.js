/**
 * Tests for scheduler.service.js
 * Covers: error isolation in runChecks(), withRetry integration, start/stop
 */

// Mock all dependencies
const mockProcessQueues = jest.fn().mockResolvedValue();
const mockCheckAndRefreshTokens = jest.fn().mockResolvedValue();
const mockFrom = jest.fn();

jest.mock("../src/lib/supabase-wrapper", () => ({
  supabaseAdmin: {
    from: (...args) => mockFrom(...args),
  },
  withRetry: jest.fn((operation) => operation()),
}));
jest.mock("../src/services/queue.service", () => ({
  processQueues: mockProcessQueues,
  createTask: jest.fn().mockResolvedValue(),
  getNextWorkingHoursTime: jest.fn(() => new Date().toISOString()),
}));
jest.mock("../src/services/google-auth.service", () => ({
  checkAndRefreshTokens: mockCheckAndRefreshTokens,
}));
jest.mock("../src/config", () => ({
  QUEUE_CHECK_INTERVAL: 10000,
}));
jest.mock("../src/services/email-sequence.service", () => ({
  getNextStepForLead: jest.fn().mockResolvedValue(null),
}));

const scheduler = require("../src/services/scheduler.service");
const { withRetry } = require("../src/lib/supabase-wrapper");

/**
 * Creates a mock Supabase chain where every method returns `this`
 * and the chain is properly thenable (resolves when awaited).
 */
function createMockChain(resolveWith = { data: [], error: null }) {
  const chain = {
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    gte: jest.fn().mockReturnThis(),
    lte: jest.fn().mockReturnThis(),
    lt: jest.fn().mockReturnThis(),
    not: jest.fn().mockReturnThis(),
    is: jest.fn().mockReturnThis(),
    in: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    order: jest.fn().mockReturnThis(),
    // Proper thenable: calls the resolve callback so `await` works
    then: jest.fn(function (resolve) {
      if (resolve) resolve(resolveWith);
    }),
  };
  return chain;
}

describe("SchedulerService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});

    // Default: all queries return empty arrays via properly thenable chain
    mockFrom.mockReturnValue(createMockChain());
  });

  afterEach(() => {
    jest.restoreAllMocks();
    scheduler.stop();
  });

  describe("runChecks - error isolation", () => {
    test("continues processing when scheduleReminders fails", async () => {
      const origReminders = scheduler.scheduleReminders;
      const origReengagement = scheduler.scheduleReengagementCalls;
      const origSequences = scheduler.scheduleSequenceEmails;

      scheduler.scheduleReminders = jest
        .fn()
        .mockRejectedValue(new Error("Reminders DB down"));
      scheduler.scheduleReengagementCalls = jest.fn().mockResolvedValue();
      scheduler.scheduleSequenceEmails = jest.fn().mockResolvedValue();

      await scheduler.runChecks();

      // processQueues and tokenRefresh should STILL run
      expect(mockProcessQueues).toHaveBeenCalled();
      expect(mockCheckAndRefreshTokens).toHaveBeenCalled();

      scheduler.scheduleReminders = origReminders;
      scheduler.scheduleReengagementCalls = origReengagement;
      scheduler.scheduleSequenceEmails = origSequences;
    });

    test("continues processing when processQueues fails", async () => {
      const origReminders = scheduler.scheduleReminders;
      const origReengagement = scheduler.scheduleReengagementCalls;
      const origSequences = scheduler.scheduleSequenceEmails;

      scheduler.scheduleReminders = jest.fn().mockResolvedValue();
      scheduler.scheduleReengagementCalls = jest.fn().mockResolvedValue();
      scheduler.scheduleSequenceEmails = jest.fn().mockResolvedValue();
      mockProcessQueues.mockRejectedValueOnce(
        new Error("Queue processing failed")
      );

      await scheduler.runChecks();

      // tokenRefresh should still run
      expect(mockCheckAndRefreshTokens).toHaveBeenCalled();

      scheduler.scheduleReminders = origReminders;
      scheduler.scheduleReengagementCalls = origReengagement;
      scheduler.scheduleSequenceEmails = origSequences;
    });

    test("continues processing when tokenRefresh fails", async () => {
      const origReminders = scheduler.scheduleReminders;
      const origReengagement = scheduler.scheduleReengagementCalls;
      const origSequences = scheduler.scheduleSequenceEmails;

      scheduler.scheduleReminders = jest.fn().mockResolvedValue();
      scheduler.scheduleReengagementCalls = jest.fn().mockResolvedValue();
      scheduler.scheduleSequenceEmails = jest.fn().mockResolvedValue();
      mockCheckAndRefreshTokens.mockRejectedValueOnce(
        new Error("Token refresh failed")
      );

      // Should not throw
      await expect(scheduler.runChecks()).resolves.not.toThrow();

      scheduler.scheduleReminders = origReminders;
      scheduler.scheduleReengagementCalls = origReengagement;
      scheduler.scheduleSequenceEmails = origSequences;
    });

    test("all operations run independently even if multiple fail", async () => {
      const origReminders = scheduler.scheduleReminders;
      const origReengagement = scheduler.scheduleReengagementCalls;
      const origSequences = scheduler.scheduleSequenceEmails;

      scheduler.scheduleReminders = jest
        .fn()
        .mockRejectedValue(new Error("fail 1"));
      scheduler.scheduleReengagementCalls = jest
        .fn()
        .mockRejectedValue(new Error("fail 2"));
      scheduler.scheduleSequenceEmails = jest
        .fn()
        .mockRejectedValue(new Error("fail 3"));
      mockProcessQueues.mockRejectedValueOnce(new Error("fail 4"));

      await scheduler.runChecks();

      // tokenRefresh still runs despite 4 prior failures
      expect(mockCheckAndRefreshTokens).toHaveBeenCalledTimes(1);
      // 4 operations failed → 4 console.error calls
      expect(console.error).toHaveBeenCalledTimes(4);

      scheduler.scheduleReminders = origReminders;
      scheduler.scheduleReengagementCalls = origReengagement;
      scheduler.scheduleSequenceEmails = origSequences;
    });
  });

  describe("withRetry integration", () => {
    test("scheduleReminders wraps query with withRetry", async () => {
      await scheduler.scheduleReminders();

      expect(withRetry).toHaveBeenCalledWith(
        expect.any(Function),
        expect.objectContaining({ label: "Scheduler.reminders" })
      );
    });

    test("scheduleReengagementCalls wraps query with withRetry", async () => {
      await scheduler.scheduleReengagementCalls();

      expect(withRetry).toHaveBeenCalledWith(
        expect.any(Function),
        expect.objectContaining({ label: "Scheduler.reengagement" })
      );
    });

    test("scheduleSequenceEmails wraps query with withRetry", async () => {
      await scheduler.scheduleSequenceEmails();

      expect(withRetry).toHaveBeenCalledWith(
        expect.any(Function),
        expect.objectContaining({ label: "Scheduler.sequences" })
      );
    });
  });

  describe("start/stop", () => {
    test("start sets isRunning flag", () => {
      // Mock runChecks to prevent it from actually executing queries
      const origRunChecks = scheduler.runChecks;
      scheduler.runChecks = jest.fn().mockResolvedValue();

      scheduler.start();
      expect(scheduler.isRunning).toBe(true);

      scheduler.runChecks = origRunChecks;
    });

    test("stop clears interval and resets flag", () => {
      const origRunChecks = scheduler.runChecks;
      scheduler.runChecks = jest.fn().mockResolvedValue();

      scheduler.start();
      scheduler.stop();
      expect(scheduler.isRunning).toBe(false);
      expect(scheduler.intervalId).toBeNull();

      scheduler.runChecks = origRunChecks;
    });

    test("start prevents double-start", () => {
      const origRunChecks = scheduler.runChecks;
      scheduler.runChecks = jest.fn().mockResolvedValue();

      scheduler.start();
      const firstInterval = scheduler.intervalId;
      scheduler.start(); // second call should be no-op
      expect(scheduler.intervalId).toBe(firstInterval);

      scheduler.runChecks = origRunChecks;
    });
  });
});
