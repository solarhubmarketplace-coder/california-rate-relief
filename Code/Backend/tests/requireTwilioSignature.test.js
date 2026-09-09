const mockValidateRequest = jest.fn();
jest.mock('twilio', () => ({ validateRequest: mockValidateRequest }));
jest.mock('../src/config', () => ({
  TWILIO_AUTH_TOKEN: 'auth-token',
  PUBLIC_URL: 'https://api.ratereliefca.com/',
}));

const requireTwilioSignature = require('../src/middleware/requireTwilioSignature');

function response() {
  return { sendStatus: jest.fn() };
}

describe('requireTwilioSignature', () => {
  beforeEach(() => jest.clearAllMocks());

  test('rejects an invalid callback signature', () => {
    mockValidateRequest.mockReturnValue(false);
    const req = {
      method: 'POST', originalUrl: '/api/webhook/sms', body: { From: '+15555550100' },
      get: jest.fn(() => 'bad-signature'),
    };
    const res = response();
    requireTwilioSignature(req, res, jest.fn());
    expect(res.sendStatus).toHaveBeenCalledWith(403);
  });

  test('validates against the configured public callback URL and body', () => {
    mockValidateRequest.mockReturnValue(true);
    const next = jest.fn();
    const body = { From: '+15555550100', Body: 'STOP' };
    const req = {
      method: 'POST', originalUrl: '/api/webhook/sms?source=twilio', body,
      get: jest.fn(() => 'valid-signature'),
    };
    requireTwilioSignature(req, response(), next);
    expect(mockValidateRequest).toHaveBeenCalledWith(
      'auth-token',
      'valid-signature',
      'https://api.ratereliefca.com/api/webhook/sms?source=twilio',
      body,
    );
    expect(next).toHaveBeenCalledTimes(1);
  });
});
