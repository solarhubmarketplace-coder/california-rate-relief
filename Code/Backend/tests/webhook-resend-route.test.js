const crypto = require('node:crypto');

const mockApplyResendEvent = jest.fn();
jest.mock('../src/config', () => ({ RESEND_WEBHOOK_SECRET: 'whsec_dGVzdC1zaWduaW5nLWtleQ==' }));
jest.mock('../src/services/email-delivery.service', () => ({ applyResendEvent: mockApplyResendEvent }));
// The delivery handler under test is isolated from the unrelated legacy lead
// and SMS handlers exported by this controller.
jest.mock('../src/services/lead.service', () => ({ createLead: jest.fn() }));
jest.mock('../src/services/sms.service', () => ({ parseIncomingSms: jest.fn() }));
jest.mock('../src/lib/supabase', () => ({ supabaseAdmin: { from: jest.fn() } }));

const { webhookResendDelivery } = require('../src/controllers/webhook.controller');
const fs = require('node:fs');
const path = require('node:path');

function response() {
  const res = { status: jest.fn(), json: jest.fn() };
  res.status.mockReturnValue(res);
  return res;
}

function signedRequest(body) {
  const rawBody = Buffer.from(JSON.stringify(body));
  const id = 'msg_test_123';
  const timestamp = String(Math.floor(Date.now() / 1000));
  const secret = Buffer.from('dGVzdC1zaWduaW5nLWtleQ==', 'base64');
  const digest = crypto.createHmac('sha256', secret).update(`${id}.${timestamp}.${rawBody}`, 'utf8').digest('base64');
  return { body, rawBody, headers: { 'svix-id': id, 'svix-timestamp': timestamp, 'svix-signature': `v1,${digest}` } };
}

describe('Resend delivery webhook', () => {
  beforeEach(() => jest.clearAllMocks());

  test('a valid signed provider event reaches the delivery writer without staff credentials', async () => {
    mockApplyResendEvent.mockResolvedValue({ applied: true, reason: 'applied', emailLogId: 'log-1' });
    const req = signedRequest({ type: 'email.delivered', data: { email_id: 'email-1' } });
    const res = response();
    await webhookResendDelivery(req, res);
    expect(mockApplyResendEvent).toHaveBeenCalledWith(req.body, 'msg_test_123');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ received: true, applied: true }));
  });

  test('an unsigned request is rejected before it can write any delivery event', async () => {
    const res = response();
    await webhookResendDelivery({ body: { type: 'email.delivered' }, rawBody: Buffer.from('{"type":"email.delivered"}'), headers: {} }, res);
    expect(mockApplyResendEvent).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'invalid signature' });
  });

  test('the public signed callback is mounted ahead of the staff-only API guard', () => {
    const app = fs.readFileSync(path.join(__dirname, '../src/app.js'), 'utf8');
    expect(app.indexOf("app.post('/api/webhook/resend', webhookController.webhookResendDelivery);")).toBeGreaterThan(-1);
    expect(app.indexOf("app.post('/api/webhook/resend', webhookController.webhookResendDelivery);")).toBeLessThan(app.indexOf("app.use('/api', requireStaff);"));
  });
});
