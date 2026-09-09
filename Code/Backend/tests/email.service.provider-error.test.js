const mockSend = jest.fn();

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({ emails: { send: mockSend } })),
}));
jest.mock('../src/config', () => ({ RESEND_API_KEY: 'test-key', EMAIL_FROM: 'sender@example.com' }));
jest.mock('../src/lib/supabase', () => ({
  supabaseAdmin: { from: jest.fn(() => ({ insert: jest.fn().mockResolvedValue({ error: null }) })) },
}));

const emailService = require('../src/services/email.service');

describe('EmailService provider errors', () => {
  beforeEach(() => jest.clearAllMocks());

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
