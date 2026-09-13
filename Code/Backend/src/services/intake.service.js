const { supabaseAdmin } = require('../lib/supabase');

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
    if (error?.code === '23505') throw { statusCode: 409, message: 'submission_id was already used for different submission data', code: error.code };
    if (error) throw { statusCode: 503, message: 'Submission could not be stored', code: error.code };
    if (!data?.submission_id || !data?.lead_id) throw { statusCode: 503, message: 'Submission storage returned no acknowledgment' };
    return data;
  }
}

module.exports = new IntakeService();
