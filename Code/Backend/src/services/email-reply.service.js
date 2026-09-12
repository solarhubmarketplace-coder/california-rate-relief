const { Resend } = require('resend');
const config = require('../config');
const { supabaseAdmin } = require('../lib/supabase');

function replyToken(addresses) {
  for (const address of Array.isArray(addresses) ? addresses : [addresses]) {
    const match = String(address || '').match(/reply\+([0-9a-f-]{36})@/i);
    if (match) return match[1].toLowerCase();
  }
  return null;
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[character]));
}

async function applyInboundReply(event, providerEventId) {
  const data = event?.data || {};
  const token = replyToken(data.to);
  if (!token) return { applied: false, reason: 'unrecognized reply address' };
  const from = String(data.from || '').trim();
  const to = (Array.isArray(data.to) ? data.to : [data.to]).filter(Boolean).join(',');
  const { data: result, error } = await supabaseAdmin.rpc('record_crr_email_reply', {
    p_token: token,
    p_provider_event_id: providerEventId || null,
    p_provider_email_id: data.email_id || null,
    p_email_from: from,
    p_email_to: to,
    p_subject: data.subject || null,
  });
  if (error) throw new Error(`Unable to record inbound reply: ${error.message}`);

  let body = '';
  try {
    const resend = new Resend(config.RESEND_API_KEY);
    const received = await resend.emails.receiving.get(data.email_id);
    if (received.error) throw new Error(received.error.message || 'retrieve failed');
    body = received.data?.text || '';
  } catch (error) {
    body = `[Reply body unavailable: ${error.message}]`;
  }

  const alertHtml = `<p><strong>Reply received from:</strong> ${escapeHtml(from)}</p><p><strong>Subject:</strong> ${escapeHtml(data.subject || '(no subject)')}</p><pre style="white-space:pre-wrap">${escapeHtml(body).slice(0, 20000)}</pre>`;
  const resend = new Resend(config.RESEND_API_KEY);
  const alert = await resend.emails.send({
    from: config.EMAIL_FROM,
    to: [config.OWNER_NOTIFICATION_EMAIL],
    subject: `[CRR reply] ${String(data.subject || 'No subject').slice(0, 150)}`,
    html: alertHtml,
  }, { idempotencyKey: `crr-inbound-reply-${providerEventId || data.email_id}` });
  if (alert.error) throw new Error(`Reply saved but owner alert failed: ${alert.error.message}`);

  if (result?.reply_event_id) {
    await supabaseAdmin.from('email_reply_events').update({
      owner_alert_resend_id: alert.data?.id || null,
      owner_alerted_at: new Date().toISOString(),
    }).eq('id', result.reply_event_id);
  }
  return { applied: true, reason: 'reply recorded, journey stopped, owner alerted' };
}

module.exports = { applyInboundReply, replyToken };
