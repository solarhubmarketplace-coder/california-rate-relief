const mockRpc = jest.fn();
jest.mock('../src/config', () => ({ BASE_URL: 'https://api.ratereliefca.com', EMAIL_REPLY_DOMAIN: 'vtropo.resend.app' }));
jest.mock('../src/lib/supabase', () => ({ supabaseAdmin: { rpc: (...args) => mockRpc(...args) } }));

const preferences = require('../src/services/email-preferences.service');

describe('email preferences', () => {
  beforeEach(() => mockRpc.mockReset());

  test('adds an opaque reply address, physical identity, visible opt-out, and RFC 8058 headers', async () => {
    const token = '11111111-2222-4333-8444-555555555555';
    mockRpc.mockResolvedValue({ data: token, error: null });
    const message = await preferences.preparePromotionalMessage('lead-1', '<p>Hello</p>', 'Hello');
    expect(mockRpc).toHaveBeenCalledWith('get_crr_email_unsubscribe_token', { p_lead_id: 'lead-1' });
    expect(message.replyTo).toBe(`reply+${token}@vtropo.resend.app`);
    expect(message.html).toContain('44087 Caleluz');
    expect(message.html).toContain(`/api/email/unsubscribe/${token}`);
    expect(message.text).toContain('Solar Hub Marketplace LLC');
    expect(message.headers).toEqual({
      'List-Unsubscribe': `<https://api.ratereliefca.com/api/email/unsubscribe/${token}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
    });
  });

  test('fails closed when a preference token cannot be created', async () => {
    mockRpc.mockResolvedValue({ data: null, error: { message: 'database unavailable' } });
    await expect(preferences.preparePromotionalMessage('lead-1', 'x', 'x')).rejects.toThrow('Unable to prepare email preferences');
  });
});
