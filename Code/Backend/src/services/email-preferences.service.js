const config = require('../config');
const { supabaseAdmin } = require('../lib/supabase');

const FOOTER_TEXT = `California Rate Relief\nSolar Hub Marketplace LLC\n44087 Caleluz\nTemecula, CA 92592`;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[character]));
}

async function preparePromotionalMessage(leadId, html, text) {
  const { data: token, error } = await supabaseAdmin.rpc('get_crr_email_unsubscribe_token', { p_lead_id: leadId });
  if (error || !token) throw new Error(`Unable to prepare email preferences: ${error?.message || 'missing token'}`);
  const baseUrl = String(config.BASE_URL || '').replace(/\/$/, '');
  const unsubscribeUrl = `${baseUrl}/api/email/unsubscribe/${token}`;
  const replyDomain = config.EMAIL_REPLY_DOMAIN || 'vtropo.resend.app';
  const replyTo = `reply+${token}@${replyDomain}`;
  const footerHtml = `<hr><p style="color:#64748b;font-size:12px;line-height:1.5">${escapeHtml(FOOTER_TEXT).replace(/\n/g, '<br>')}<br><a href="${escapeHtml(unsubscribeUrl)}">Unsubscribe</a></p>`;
  return {
    html: `${html || ''}${footerHtml}`,
    text: `${text || ''}\n\n${FOOTER_TEXT}\nUnsubscribe: ${unsubscribeUrl}`.trim(),
    replyTo,
    headers: {
      'List-Unsubscribe': `<${unsubscribeUrl}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
    },
  };
}

async function unsubscribeByToken(token) {
  const { data, error } = await supabaseAdmin.rpc('record_crr_email_opt_out_by_token', { p_token: token });
  if (error) throw new Error('Unable to record unsubscribe');
  return data;
}

module.exports = { preparePromotionalMessage, unsubscribeByToken, FOOTER_TEXT };
