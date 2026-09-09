const twilio = require('twilio');
const config = require('../config');

function requireTwilioSignature(req, res, next) {
  const signature = req.get('X-Twilio-Signature');
  if (!config.TWILIO_AUTH_TOKEN || !config.PUBLIC_URL) {
    console.error('[Twilio] Callback validation is not configured');
    return res.sendStatus(503);
  }
  const url = `${String(config.PUBLIC_URL).replace(/\/$/, '')}${req.originalUrl}`;
  const params = req.method === 'GET' ? {} : (req.body || {});
  if (!signature || !twilio.validateRequest(config.TWILIO_AUTH_TOKEN, signature, url, params)) {
    return res.sendStatus(403);
  }
  return next();
}

module.exports = requireTwilioSignature;
