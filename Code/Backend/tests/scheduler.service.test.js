/**
 * Tests for scheduler.service.js
 * Covers: error isolation in runChecks(), withRetry integration, start/stop
 */

// Mock all dependencies
const mockProcessQueues = jest.fn().mockResolvedValue();
const mockCheckAndRefreshTokens = jest.fn().mockResolvedValue();
const mockCreateTask = jest.fn().mockResolvedValue();
const mockFrom = jest.fn();

jest.mock("../src/lib/supabase-wrapper", () => ({
  supabaseAdmin: {
    from: (...args) => mockFrom(...args),
  },
  withRetry: jest.fn((operation) => operation()),
}));
jest.mock("../src/services/queue.service", () => ({
  processQueues: mockProcessQueues,
  createTask: mockCreateTask,
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
  // scheduleAutoEnrollments() calls getActiveSequence() for 4 sequence types
  // on every pass (it isn't behind a mockable wrapper in these tests) - if
  // this isn't mocked it throws "is not a function" and adds an extra,
  // untracked console.error to every runChecks() call in this file.
  getActiveSequence: jest.fn().mockResolvedValue(null),
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
    jest.spyOn(console, "warn").mockImplementation(() => {});

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

  describe("scheduleSequenceEmails - 24h dedup guard", () => {
    // Regression coverage for the runaway-queue bug (2026-09-09): a task that
    // was completed/failed without correctly advancing tracking must not be
    // re-created on every 30s-60s tick forever. The status-based
    // "existingTask" check alone can miss this (e.g. a task marked
    // 'completed' by a bug that never actually sent), so the 24h guard keys
    // off lead/sequence/step regardless of status.
    const baseTracking = {
      id: "track-1",
      sequence_id: "seq-1",
      current_step: 1,
      last_sent_at: null,
      leads: {
        id: "lead-1",
        email: "lead@example.com",
        name: "Lead One",
        phone: "+15551234567",
        type: "hot",
      },
      email_sequences: { id: "seq-1", name: "Hot Sequence", lead_type: "hot" },
    };
    const steps = [
      { id: "step-1", sequence_id: "seq-1", step_order: 1, delay_days: 0 },
    ];

    test("skips creating a task when one exists for lead/sequence/step within the last 24h, even with no pending/processing task", async () => {
      // 1. lead_sequence_tracking (withRetry)
      mockFrom.mockReturnValueOnce(
        createMockChain({ data: [baseTracking], error: null })
      );
      // 2. email_sequence_steps
      mockFrom.mockReturnValueOnce(createMockChain({ data: steps, error: null }));
      // 3. existingTask check (pending/processing) - none outstanding
      mockFrom.mockReturnValueOnce(createMockChain({ data: [], error: null }));
      // 4. 24h dedup guard - a task WAS already created within the window
      mockFrom.mockReturnValueOnce(
        createMockChain({ data: [{ id: "old-task" }], error: null })
      );

      await scheduler.scheduleSequenceEmails();

      expect(mockCreateTask).not.toHaveBeenCalled();
      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining("24h dedup guard")
      );
    });

    test("creates the task when no recent task exists for lead/sequence/step", async () => {
      mockFrom.mockReturnValueOnce(
        createMockChain({ data: [baseTracking], error: null })
      );
      mockFrom.mockReturnValueOnce(createMockChain({ data: steps, error: null }));
      mockFrom.mockReturnValueOnce(createMockChain({ data: [], error: null })); // existingTask
      mockFrom.mockReturnValueOnce(createMockChain({ data: [], error: null })); // guard: nothing recent

      await scheduler.scheduleSequenceEmails();

      expect(mockCreateTask).toHaveBeenCalledWith(
        expect.objectContaining({
          lead_id: "lead-1",
          task_type: "email",
          metadata: expect.objectContaining({
            sequence_id: "seq-1",
            sequence_step: 1,
          }),
        })
      );
    });

    test("logs only one guard warning per pass even when multiple leads are skipped", async () => {
      const trackingA = { ...baseTracking, id: "track-a", leads: { ...baseTracking.leads, id: "lead-a" } };
      const trackingB = { ...baseTracking, id: "track-b", leads: { ...baseTracking.leads, id: "lead-b" } };

      // 1. lead_sequence_tracking -> two leads in the same pass
      mockFrom.mockReturnValueOnce(
        createMockChain({ data: [trackingA, trackingB], error: null })
      );
      // 2. email_sequence_steps - fetched once and cached for both (same sequence_id)
      mockFrom.mockReturnValueOnce(createMockChain({ data: steps, error: null }));
      // Lead A: existingTask (none), guard (hit)
      mockFrom.mockReturnValueOnce(createMockChain({ data: [], error: null }));
      mockFrom.mockReturnValueOnce(
        createMockChain({ data: [{ id: "old-a" }], error: null })
      );
      // Lead B: existingTask (none), guard (hit)
      mockFrom.mockReturnValueOnce(createMockChain({ data: [], error: null }));
      mockFrom.mockReturnValueOnce(
        createMockChain({ data: [{ id: "old-b" }], error: null })
      );

      await scheduler.scheduleSequenceEmails();

      expect(mockCreateTask).not.toHaveBeenCalled();
      const guardWarnings = console.warn.mock.calls.filter((call) =>
        call[0].includes("skipping sequence step")
      );
      expect(guardWarnings).toHaveLength(1);
      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining("suppressed 1 additional skip warning")
      );
    });
  });

  describe("recoverStaleProcessingTasks", () => {
    test("resets tasks stuck in 'processing' beyond the threshold back to 'pending'", async () => {
      const selectChain = createMockChain({
        data: [{ id: "task-1" }, { id: "task-2" }],
        error: null,
      });
      const updateChain = {
        update: jest.fn().mockReturnThis(),
        in: jest.fn().mockReturnThis(),
        then: jest.fn(function (resolve) {
          if (resolve) resolve({ data: null, error: null });
        }),
      };

      mockFrom
        .mockReturnValueOnce(selectChain) // scan for stale rows
        .mockReturnValueOnce(updateChain); // bulk reset

      await scheduler.recoverStaleProcessingTasks();

      expect(selectChain.eq).toHaveBeenCalledWith("status", "processing");
      expect(selectChain.lt).toHaveBeenCalledWith(
        "updated_at",
        expect.any(String)
      );
      expect(selectChain.limit).toHaveBeenCalledWith(expect.any(Number));

      expect(updateChain.update).toHaveBeenCalledWith(
        expect.objectContaining({
          status: "pending",
          error_message: expect.stringContaining("stale processing task recovered"),
        })
      );
      expect(updateChain.in).toHaveBeenCalledWith("id", ["task-1", "task-2"]);

      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining("Recovered 2 stale 'processing' task(s)")
      );
    });

    test("does nothing when no tasks are stuck in processing", async () => {
      mockFrom.mockReturnValue(createMockChain({ data: [], error: null }));

      await scheduler.recoverStaleProcessingTasks();

      expect(console.warn).not.toHaveBeenCalled();
    });

    test("does not throw when the scan query errors, and does not attempt an update", async () => {
      mockFrom.mockReturnValueOnce(
        createMockChain({ data: null, error: { message: "db down" } })
      );

      await expect(scheduler.recoverStaleProcessingTasks()).resolves.not.toThrow();
      // Only the scan call should have happened - no follow-up update call
      expect(mockFrom).toHaveBeenCalledTimes(1);
    });

    test("runs on every runChecks tick, not behind a throttled cadence", async () => {
      const spy = jest
        .spyOn(scheduler, "recoverStaleProcessingTasks")
        .mockResolvedValue();

      await scheduler.runChecks();
      await scheduler.runChecks();

      expect(spy).toHaveBeenCalledTimes(2);
      spy.mockRestore();
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
