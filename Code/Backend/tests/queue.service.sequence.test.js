/**
 * Tests for queue.service.js - email sequence task handling
 * Covers: the runaway-queue fix (2026-09-09) where a sequence task with no
 * resolvable step used to be silently marked 'completed' without sending an
 * email or advancing the lead's tracking. It must now go through the normal
 * failure/retry path instead.
 */

const mockUpdate = jest.fn().mockReturnThis();
const mockEq = jest.fn().mockReturnThis();
const mockFrom = jest.fn(() => ({
  update: mockUpdate,
  eq: mockEq,
}));

jest.mock("../src/lib/supabase", () => ({
  supabaseAdmin: {
    from: (...args) => mockFrom(...args),
  },
}));

const mockSendEmail = jest.fn().mockResolvedValue({ id: "resend-1" });
jest.mock("../src/services/email.service", () => ({
  sendEmail: (...args) => mockSendEmail(...args),
}));
jest.mock("../src/services/sms.service", () => ({}));
jest.mock("../src/services/voice.service", () => ({}));
jest.mock("../src/services/call-log.service", () => ({}));
jest.mock("../src/services/settings.service", () => ({
  getAutoDialSettings: jest.fn().mockResolvedValue({ enabled: false }),
  getVoicemailSettings: jest.fn().mockResolvedValue({ enabled: false }),
  getDoubleDialSettings: jest.fn().mockResolvedValue({ enabled: false }),
}));
jest.mock("../src/config/scripts", () => ({
  SMS_FOLLOWUP_90_DAY: "",
  fillTemplate: (s) => s,
}));
jest.mock("../src/config", () => ({
  BASE_URL: "https://example.test",
  QUEUE_MAX_ATTEMPTS: 3,
  QUEUE_RETRY_DELAY: 30,
  QUIET_HOURS_ENABLED: "false",
}));

const mockGetNextStepForLead = jest.fn();
const mockAdvanceLeadToNextStep = jest.fn().mockResolvedValue({});
jest.mock("../src/services/email-sequence.service", () => ({
  getNextStepForLead: (...args) => mockGetNextStepForLead(...args),
  advanceLeadToNextStep: (...args) => mockAdvanceLeadToNextStep(...args),
}));

const queueService = require("../src/services/queue.service");

describe("QueueService - sequence email tasks", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
    queueService.updateTask = jest.fn().mockResolvedValue();
    queueService.handleTaskFailure = jest.fn().mockResolvedValue();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const makeTask = (overrides = {}) => ({
    id: "task-1",
    lead_id: "lead-1",
    task_type: "email",
    attempt_number: 1,
    max_attempts: 3,
    metadata: { sequence_id: "seq-1", sequence_step: 2 },
    leads: {
      id: "lead-1",
      email: "lead@example.com",
      name: "Lead One",
      phone: "+15551234567",
      consent_status: "opted_in",
    },
    ...overrides,
  });

  test("fails a pre-existing queued task for a manual-review intake before delivery", async () => {
    const task = makeTask({ leads: { ...makeTask().leads, project_type: "residential" } });
    queueService.getPendingTasks = jest.fn().mockResolvedValue([task]);
    await queueService.processEmailQueue();
    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(queueService.updateTask).toHaveBeenCalledWith(task.id, expect.objectContaining({
      status: "failed",
      error_message: expect.stringContaining("Manual-review intake"),
    }));
  });

  test("fails a queued email when documented opt-in is absent", async () => {
    const task = makeTask({ leads: { ...makeTask().leads, consent_status: "pending" } });
    queueService.getPendingTasks = jest.fn().mockResolvedValue([task]);

    await queueService.processEmailQueue();

    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(queueService.updateTask).toHaveBeenCalledWith(task.id, expect.objectContaining({
      status: "failed",
      error_message: expect.stringContaining("documented opt-in"),
    }));
  });

  test("sends the email and advances tracking when the step resolves", async () => {
    const task = makeTask();
    queueService.getPendingTasks = jest.fn().mockResolvedValue([task]);
    mockGetNextStepForLead.mockResolvedValue({
      currentStep: {
        id: "step-2",
        step_order: 2,
        subject: "Hi {{name}}",
        html_content: "<p>Hello {{name}}</p>",
      },
      tracking: { sequence_id: "seq-1" },
    });

    await queueService.processEmailQueue();

    expect(mockSendEmail).toHaveBeenCalledWith(
      "lead@example.com",
      "Hi Lead One",
      expect.stringContaining("Hello Lead One"),
      expect.objectContaining({ leadId: "lead-1", sequenceId: "seq-1", sequenceStepId: "step-2", idempotencyKey: "crr-email-task-task-1" })
    );
    expect(mockGetNextStepForLead).toHaveBeenCalledWith("lead-1", "seq-1");
    expect(mockAdvanceLeadToNextStep).toHaveBeenCalledWith("lead-1", "seq-1");
    expect(queueService.handleTaskFailure).not.toHaveBeenCalled();
    expect(queueService.updateTask).toHaveBeenCalledWith(
      "task-1",
      expect.objectContaining({ status: "completed" })
    );
  });

  test("goes through handleTaskFailure instead of being marked completed when the step is unavailable", async () => {
    const task = makeTask();
    queueService.getPendingTasks = jest.fn().mockResolvedValue([task]);
    // Simulates the production bug: tracking row exists but the step can't
    // be resolved (e.g. deleted step, or the tracking query itself failed).
    mockGetNextStepForLead.mockResolvedValue(null);

    await queueService.processEmailQueue();

    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(mockAdvanceLeadToNextStep).not.toHaveBeenCalled();

    // Must NOT be silently marked completed
    const completedCalls = queueService.updateTask.mock.calls.filter(
      (call) => call[1] && call[1].status === "completed"
    );
    expect(completedCalls).toHaveLength(0);

    // Must go through the normal failure/retry path instead
    expect(queueService.handleTaskFailure).toHaveBeenCalledTimes(1);
    expect(queueService.handleTaskFailure).toHaveBeenCalledWith(
      task,
      expect.stringContaining("Sequence step unavailable for lead lead-1 step 2")
    );
  });

  test("goes through handleTaskFailure when currentStep is missing from a resolved sequence", async () => {
    const task = makeTask();
    queueService.getPendingTasks = jest.fn().mockResolvedValue([task]);
    mockGetNextStepForLead.mockResolvedValue({ currentStep: null, tracking: { sequence_id: "seq-1" } });

    await queueService.processEmailQueue();

    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(queueService.handleTaskFailure).toHaveBeenCalledTimes(1);
  });

  test.each([
    ["different sequence", "seq-other", 2],
    ["already advanced step", "seq-1", 3],
  ])("does not send a %s from an old queued task", async (_label, sequenceId, stepOrder) => {
    queueService.getPendingTasks = jest.fn().mockResolvedValue([makeTask()]);
    mockGetNextStepForLead.mockResolvedValue({
      currentStep: { id: "step-other", step_order: stepOrder, subject: "Subject", html_content: "Body" },
      tracking: { sequence_id: sequenceId },
    });
    await queueService.processEmailQueue();
    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(mockAdvanceLeadToNextStep).not.toHaveBeenCalled();
    expect(queueService.handleTaskFailure).toHaveBeenCalledWith(expect.any(Object), expect.stringContaining("no longer matches"));
  });
});
