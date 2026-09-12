const preferences = require('../services/email-preferences.service');

async function unsubscribe(req, res) {
  if (req.method === 'GET') {
    const token = String(req.params.token || '').replace(/[^0-9a-f-]/gi, '');
    return res.status(200).type('html').send(`<!doctype html><html><body><main><h1>Stop promotional email?</h1><form method="post" action="/api/email/unsubscribe/${token}"><button type="submit">Unsubscribe</button></form></main></body></html>`);
  }
  try {
    await preferences.unsubscribeByToken(req.params.token);
    // RFC 8058 one-click requests expect a blank successful response. Browser
    // form posts receive the same state change and can safely render nothing.
    return res.status(200).type('text/plain').send('');
  } catch (_error) {
    return res.status(400).type('text/plain').send('This unsubscribe link is invalid.');
  }
}

module.exports = { unsubscribe };
