const { supabaseAdmin } = require('../lib/supabase');
const { ERRORS: CONTRACT_ERRORS } = require('../lib/lead-contract');

const TAG = /^[a-z0-9_]{1,40}$/;
const PAGE = /^\/[a-z0-9/_-]{0,119}$/;

class IntakeService {
  async recordEmailVisit(input) {
    const { data, error } = await supabaseAdmin.rpc('record_crr_email_visit', {
      p_visit_id: input.visit_id,
      p_landing_path: input.landing_path,
      p_campaign_key: input.campaign_key,
      p_variant_key: input.variant_key,
      p_is_test: input.is_test,
      p_client_time: input.client_time,
    });
    if (error) throw { statusCode: 503, message: 'Email visit could not be recorded', code: error.code };
    return { inserted: data === true };
  }

  async createSubmission(input) {
    const { data, error } = await supabaseAdmin.rpc('ingest_crr_submission', {
      p_submission_id: input.submission_id,
      p_segment: input.segment,
      p_name: input.name,
      p_phone: input.phone,
      p_email: input.email,
      p_address: input.address,
      p_qualification_data: input.qualification_data,
      p_attribution: input.attribution,
      p_consent_status: input.consent_status,
      p_consent_timestamp: input.consent_timestamp,
      p_is_test: input.is_test,
    });
    // Migration 014: the RPC refuses a new residential submission that breaks the
    // lead contract with SQLSTATE 22023 'crr_contract:<code>'. That is a 400 the
    // form can show, not a 503 the form would retry forever.
    const contractCode = error?.code === '22023' ? /^crr_contract:([a-z0-9_]{1,40})$/.exec(String(error.message || '').trim())?.[1] : null;
    if (contractCode) throw { statusCode: 400, message: CONTRACT_ERRORS[contractCode] || 'Submission refused', code: contractCode };
    if (error?.code === '23505') throw { statusCode: 409, message: 'submission_id was already used for different submission data', code: error.code };
    if (error) throw { statusCode: 503, message: 'Submission could not be stored', code: error.code };
    if (!data?.submission_id || !data?.lead_id) throw { statusCode: 503, message: 'Submission storage returned no acknowledgment' };
    return data;
  }

  /**
   * Count a refused residential submission without personal data: a one-line
   * JSON log (Railway) and, once migration 014 is applied, a daily counter row.
   * Takes reason, landing page path, form kind and layer only. Never throws.
   */
  recordRejection({ reason, landing_page, form_kind, layer } = {}) {
    const entry = {
      evt: 'crr_intake_reject',
      reason: TAG.test(reason || '') ? reason : 'other',
      form_kind: TAG.test(form_kind || '') ? form_kind : 'unknown',
      landing_page: PAGE.test(landing_page || '') ? landing_page : 'unknown',
      layer: layer === 'rpc' ? 'rpc' : 'api',
    };
    try { console.info(JSON.stringify(entry)); } catch { /* logging must not fail a response */ }
    try {
      return Promise.resolve(supabaseAdmin.rpc('record_crr_intake_rejection', {
        p_reason: entry.reason, p_landing_page: entry.landing_page, p_form_kind: entry.form_kind, p_layer: entry.layer,
      })).then(() => undefined, () => undefined);
    } catch {
      return Promise.resolve();
    }
  }
}

module.exports = new IntakeService();
