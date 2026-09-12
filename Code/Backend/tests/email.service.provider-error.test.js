const mockSend = jest.fn();
const mockInsert = jest.fn().mockResolvedValue({ error: null });

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({ emails: { send: mockSend } })),
}));
jest.mock('../src/config', () => ({ RESEND_API_KEY: 'test-key', EMAIL_FROM: 'sender@example.com' }));
jest.mock('../src/lib/supabase', () => ({
  supabaseAdmin: { from: jest.fn(() => ({ insert: mockInsert })) },
}));

const emailService = require('../src/services/email.service');

describe('EmailService provider errors', () => {
  beforeEach(() => jest.clearAllMocks());

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
