const mockRpc = jest.fn();
const mockUpdate = jest.fn();
const mockEq = jest.fn();
const mockReceivingGet = jest.fn();
const mockSend = jest.fn();

jest.mock('../src/config', () => ({
  RESEND_API_KEY: 'test-key', EMAIL_FROM: 'info@ratereliefca.com', OWNER_NOTIFICATION_EMAIL: 'owner@example.com',
}));
jest.mock('../src/lib/supabase', () => ({
  supabaseAdmin: {
    rpc: (...args) => mockRpc(...args),
    from: () => ({ update: (...args) => { mockUpdate(...args); return { eq: (...eqArgs) => mockEq(...eqArgs) }; } }),
  },
}));
jest.mock('resend', () => ({ Resend: jest.fn(() => ({
  emails: { receiving: { get: (...args) => mockReceivingGet(...args) }, send: (...args) => mockSend(...args) },
})) }));

const replies = require('../src/services/email-reply.service');

describe('inbound email replies', () => {
  beforeEach(() => jest.clearAllMocks());

  test('extracts only an opaque UUID reply token', () => {
    expect(replies.replyToken(['reply+11111111-2222-4333-8444-555555555555@vtropo.resend.app']))
      .toBe('11111111-2222-4333-8444-555555555555');
    expect(replies.replyToken(['random@vtropo.resend.app'])).toBeNull();
  });

  test('records the reply, stops the journey, and alerts the owner once', async () => {
    mockRpc.mockResolvedValue({ data: { reply_event_id: 'reply-1' }, error: null });
    mockReceivingGet.mockResolvedValue({ data: { text: 'Please call me tomorrow.' }, error: null });
    mockSend.mockResolvedValue({ data: { id: 'alert-1' }, error: null });
    const result = await replies.applyInboundReply({ type: 'email.received', data: {
      email_id: 'received-1', from: 'person@example.com',
      to: ['reply+11111111-2222-4333-8444-555555555555@vtropo.resend.app'], subject: 'Re: bill review',
    } }, 'svix-1');
    expect(result.applied).toBe(true);
    expect(mockRpc).toHaveBeenCalledWith('record_crr_email_reply', expect.objectContaining({ p_provider_event_id: 'svix-1' }));
    expect(mockSend).toHaveBeenCalledWith(expect.objectContaining({ to: ['owner@example.com'] }), { idempotencyKey: 'crr-inbound-reply-svix-1' });
    expect(mockUpdate).toHaveBeenCalledWith(expect.objectContaining({ owner_alert_resend_id: 'alert-1' }));
  });
});
