const mockSend = jest.fn();
const mockInsert = jest.fn().mockResolvedValue({ error: null });
const mockRpc = jest.fn();

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({ emails: { send: mockSend } })),
}));
jest.mock('../src/config', () => ({ RESEND_API_KEY: 'test-key', EMAIL_FROM: 'sender@example.com' }));
jest.mock('../src/lib/supabase', () => ({
  supabaseAdmin: { from: jest.fn(() => ({ insert: mockInsert })), rpc: (...args) => mockRpc(...args) },
}));

const emailService = require('../src/services/email.service');

describe('EmailService provider errors', () => {
  beforeEach(() => jest.clearAllMocks());

  test.each([null, { allowed: false, reason: 'recipient_suppressed' }])('holds queued outreach when permission result is %j', async data => {
    mockRpc.mockResolvedValue({ data, error: null });
    await expect(emailService.sendEmail('owner@example.com', 'subject', 'body', {
      leadId: 'lead-1', outreachQueue: true,
    })).rejects.toMatchObject({ outreachBlocked: true });
    expect(mockSend).not.toHaveBeenCalled();
    expect(mockInsert).not.toHaveBeenCalled();
  });

  test('does not send when fresh permission lookup fails', async () => {
    mockRpc.mockResolvedValue({ data: null, error: { message: 'unavailable' } });
    await expect(emailService.sendEmail('owner@example.com', 'subject', 'body', {
      leadId: 'lead-1', outreachQueue: true,
    })).rejects.toThrow('permission check unavailable');
    expect(mockSend).not.toHaveBeenCalled();
  });

  test('sends queued outreach only after a positive current permission check', async () => {
    mockRpc.mockResolvedValue({ data: { allowed: true }, error: null });
    mockSend.mockResolvedValue({ data: { id: 'permitted-1' }, error: null });
    await emailService.sendEmail('owner@example.com', 'subject', 'body', { leadId: 'lead-1', outreachQueue: true });
    expect(mockRpc).toHaveBeenCalledWith('check_crr_email_outreach', { p_lead_id: 'lead-1', p_email: 'owner@example.com' });
    expect(mockRpc.mock.invocationCallOrder[0]).toBeLessThan(mockSend.mock.invocationCallOrder[0]);
  });

  test('preserves campaign identity and optional reply, text and unsubscribe fields', async () => {
    mockSend.mockResolvedValue({ data: { id: 'provider-1' }, error: null });
    const headers = { 'List-Unsubscribe': '<https://example.com/unsubscribe>' };
    await emailService.sendEmail('owner@example.com', 'subject', '<p>body</p>', {
      leadId: 'lead-1', sequenceId: 'sequence-1', sequenceStepId: 'step-1',
      replyTo: 'replies@example.com', text: 'body', headers,
      idempotencyKey: 'crr-email-task-1',
    });
    expect(mockSend).toHaveBeenCalledWith(expect.objectContaining({
      replyTo: 'replies@example.com', text: 'body', headers,
    }), { idempotencyKey: 'crr-email-task-1' });
    expect(mockInsert).toHaveBeenCalledWith(expect.objectContaining({
      lead_id: 'lead-1', sequence_id: 'sequence-1', sequence_step_id: 'step-1',
      resend_email_id: 'provider-1', delivery_state: 'accepted',
    }));
  });

  test('preserves Resend status and type for outbox retry classification', async () => {
    mockSend.mockResolvedValue({
      data: null,
      error: { message: 'rate limited', name: 'rate_limit_exceeded', statusCode: 429 },
    });

    await expect(emailService.sendEmail(
      'owner@example.com',
      'subject',
      '<p>body</p>',
      { idempotencyKey: 'crr-owner-submission-1' },
    )).rejects.toEqual(expect.objectContaining({
      message: 'rate limited',
      name: 'rate_limit_exceeded',
      statusCode: 429,
    }));
    expect(mockSend).toHaveBeenCalledWith(expect.any(Object), {
      idempotencyKey: 'crr-owner-submission-1',
    });
  });
});
