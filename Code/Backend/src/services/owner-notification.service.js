const crypto = require('crypto');
const { supabaseAdmin } = require('../lib/supabase');
const emailService = require('./email.service');
const config = require('../config');
const { cleanJourney } = require('../lib/lead-journey');

function escapeHtml(value) {
  return String(value ?? '—').replace(/[<>&"']/g, (char) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function render(outbox) {
  const payload = outbox.payload || {};
  const qualification = payload.qualification_data || {};
  const attribution = payload.attribution || {};
  const journey = cleanJourney(attribution.journey);
  const rows = [
    ['TEST SUBMISSION', payload.is_test ? 'YES — DO NOT FORWARD' : null],
    ['Lead ID', outbox.lead_id],
    ['Submission ID', outbox.submission_id],
    ['Project type', payload.segment],
    ['Original article', attribution.landing_page],
    ['Submitted from', attribution.submitted_from],
    ['Pages visited in this tab', journey?.pages.map(page => `${page.path} (${page.viewed_at})`).join(' → ')],
    ['Page history coverage', journey ? (journey.truncated ? 'Entry and most recent pages; middle visits omitted after 30 pages' : 'Observed public pages in this browser tab') : 'Not recorded for this submission'],
    ['Entry recorded at', attribution.captured_at],
    ['Referring website', attribution.referrer],
    ['Name', payload.name],
    ['Phone', payload.phone],
    ['Email', payload.email],
    ['Address', payload.address],
    ['Utility', qualification.utility_provider],
    ['Monthly bill', qualification.bill_amount ?? qualification.monthly_bill_range],
    ['Homeowner', typeof qualification.homeowner === 'boolean' ? (qualification.homeowner ? 'Yes' : 'No') : null],
    ['Credit', qualification.credit_score],
    ['ZIP / county', qualification.service_zip || qualification.county],
    ['Location', qualification.location],
    ['Company', qualification.company_name],
    ['Property type / control', [qualification.property_type, qualification.property_control].filter(Boolean).join(' / ')],
    ['Timeline', qualification.project_timeline],
    ['Source', attribution.source],
    ['Observed acquisition source', attribution.acquisition_source],
    ['Observed acquisition medium', attribution.acquisition_medium],
    ['Original organic landing page', attribution.organic_landing_page],
    ['Inquiry topic', qualification.inquiry_topic],
    ['Calculator method', qualification.calculator_version],
    ['Entered monthly bill, before CRM rounding ($)', qualification.calculator_monthly_bill],
    ['Entered annual usage (kWh)', qualification.calculator_annual_kwh],
    ['Quoted solar size (kW DC)', qualification.calculator_system_kw],
    ['Solar-only cash price ($)', qualification.calculator_solar_only_price],
    ['Battery cash price ($)', qualification.calculator_battery_price],
    ['Combined entered cash price ($)', qualification.calculator_cash_price],
    ['Quoted remaining annual utility bill ($)', qualification.calculator_annual_bill_after],
    ['Calculated annual bill difference ($)', qualification.calculator_annual_difference],
    ['Simple cash payback (years; input arithmetic only)', qualification.calculator_simple_payback],
    ['UTM source', attribution.utm_source],
    ['UTM medium', attribution.utm_medium],
    ['UTM campaign', attribution.utm_campaign],
    ['UTM content', attribution.utm_content],
    ['UTM term', attribution.utm_term],
  ].filter(([, value]) => value !== null && value !== undefined && value !== '');
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:620px"><h2>New California Rate Relief ${escapeHtml(payload.segment)} inquiry</h2><table style="border-collapse:collapse">${rows.map(([label, value]) => `<tr><td style="padding:4px 10px;color:#555"><b>${escapeHtml(label)}</b></td><td style="padding:4px 10px">${escapeHtml(value)}</td></tr>`).join('')}</table><p>Review this inquiry and forward it manually if it qualifies.</p></div>`;
}

function deliveryFailure(error) {
  const status = Number(error?.statusCode || error?.status);
  const permanent = Number.isFinite(status) && status >= 400 && status < 500 && status !== 408 && status !== 429;
  return { ambiguous: !permanent, retryable: !permanent };
}

class OwnerNotificationService {
  constructor() { this.timer = null; this.running = false; }

  async processOne() {
    const leaseToken = crypto.randomUUID();
    const { data, error } = await supabaseAdmin.rpc('claim_owner_notification', {
      p_lease_token: leaseToken,
      p_stale_minutes: config.OWNER_NOTIFICATION_STALE_MINUTES,
      p_max_attempts: config.OWNER_NOTIFICATION_MAX_ATTEMPTS,
      p_provider_window_hours: config.OWNER_NOTIFICATION_IDEMPOTENCY_WINDOW_HOURS,
    });
    if (error) throw error;
    const outbox = Array.isArray(data) ? data[0] : data;
    if (!outbox) return false;

    try {
      const subject = `${outbox.payload?.is_test ? '[TEST] ' : ''}New ${outbox.payload?.segment || 'solar'} inquiry — lead ${outbox.lead_id} — submission ${outbox.submission_id}`;
      const html = render(outbox);
      const { data: preparedData, error: prepareError } = await supabaseAdmin.rpc('prepare_owner_notification', {
        p_outbox_id: outbox.id, p_lease_token: leaseToken, p_provider_from: config.EMAIL_FROM,
        p_provider_subject: subject, p_provider_html: html,
      });
      if (prepareError) throw prepareError;
      const prepared = Array.isArray(preparedData) ? preparedData[0] : preparedData;
      if (!prepared) throw new Error('Owner notification lease lost before request preparation');
      const provider = await emailService.sendEmail(
        prepared.destination,
        prepared.provider_subject,
        prepared.provider_html,
        { from: prepared.provider_from, leadId: prepared.lead_id, idempotencyKey: prepared.provider_idempotency_key }
      );
      // A success-shaped response without a provider ID cannot establish acceptance.
      if (typeof provider?.id !== 'string' || !provider.id.trim()) throw new Error('Owner notification provider response missing message ID');
      const { error: markError } = await supabaseAdmin.rpc('complete_owner_notification', {
        p_outbox_id: outbox.id,
        p_lease_token: leaseToken,
        p_provider_message_id: provider?.id || null,
      });
      if (markError) throw markError;
    } catch (sendError) {
      const failure = deliveryFailure(sendError);
      const { error: failError } = await supabaseAdmin.rpc('fail_owner_notification', {
        p_outbox_id: outbox.id,
        p_lease_token: leaseToken,
        p_error_message: String(sendError?.message || 'Unknown provider error').slice(0, 1000),
        p_ambiguous: failure.ambiguous,
        p_retryable: failure.retryable,
        p_max_attempts: config.OWNER_NOTIFICATION_MAX_ATTEMPTS,
        p_provider_window_hours: config.OWNER_NOTIFICATION_IDEMPOTENCY_WINDOW_HOURS,
      });
      if (failError) console.error('[OwnerNotification] Failed to record delivery state:', failError.message);
      console.error(`[OwnerNotification] ${failure.ambiguous ? 'Uncertain' : 'Rejected'} owner delivery for ${outbox.submission_id}:`, sendError.message);
    }
    return true;
  }

  async tick() {
    if (this.running) return;
    this.running = true;
    try {
      for (let i = 0; i < 10 && await this.processOne(); i += 1) { /* bounded drain */ }
    } catch (error) {
      console.error('[OwnerNotification] Worker error:', error.message);
    } finally { this.running = false; }
  }

  start() {
    if (this.timer) return;
    this.tick();
    this.timer = setInterval(() => this.tick(), config.OWNER_NOTIFICATION_POLL_INTERVAL_MS);
  }

  stop() { if (this.timer) clearInterval(this.timer); this.timer = null; }
}

module.exports = new OwnerNotificationService();
