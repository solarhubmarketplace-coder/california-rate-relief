const { supabaseAdmin } = require('../lib/supabase');

function databaseError(error) {
  return { statusCode: 500, message: 'CRM operation failed', code: error?.code };
}

class StaffService {
  async growthScorecard(from, to) {
    const { data, error } = await supabaseAdmin.rpc('get_crr_growth_scorecard', {p_from:from,p_to:to});
    if (error) throw databaseError(error);
    return data;
  }

  async recordReceipt(submissionId, evidence, staffUser) {
    const { data, error } = await supabaseAdmin.from('owner_receipt_evidence').insert({
      submission_id:submissionId,destination:'solarhubmarketplace@gmail.com',
      evidence_reference:evidence.evidence_reference,receipt_at:evidence.receipt_at,recorded_by:staffUser.id,
    }).select('id,submission_id,receipt_at,recorded_at').single();
    if (error?.code === '23505') throw { statusCode: 409, message: 'This owner inbox message already has receipt evidence', code: error.code };
    if (error?.code === '23503') throw { statusCode: 404, message: 'Submission or staff record not found', code: error.code };
    if (error?.code === '23514') throw { statusCode: 400, message: 'Receipt time must follow submission and cannot be in the future', code: error.code };
    if (error) throw databaseError(error);
    return data;
  }
  async listReferrals({ from, to } = {}) {
    let query = supabaseAdmin.from('lead_referral_outcomes').select('*').order('forwarded_at', { ascending: false });
    if (from) query = query.gte('forwarded_at', from);
    if (to) query = query.lt('forwarded_at', to);
    const { data, error } = await query;
    if (error) throw databaseError(error);
    return data;
  }

  async recordReferral(payload, staffUser) {
    const row = { ...payload, recorded_by: staffUser.id, updated_at: new Date().toISOString() };
    const { data, error } = await supabaseAdmin.from('lead_referral_outcomes').upsert(row, {
      onConflict: 'submission_id,partner_name', ignoreDuplicates: false,
    }).select().single();
    if (error) throw databaseError(error);
    return data;
  }

  async updateReferral(id, payload, staffUser) {
    const { data, error } = await supabaseAdmin.from('lead_referral_outcomes').update({
      ...payload, recorded_by: staffUser.id, updated_at: new Date().toISOString(),
    }).eq('id', id).select().single();
    if (error) throw databaseError(error);
    return data;
  }

  async scorecard(from, to) {
    const { data, error } = await supabaseAdmin.rpc('get_crr_scorecard', { p_from: from || null, p_to: to || null });
    if (error) throw databaseError(error);
    return data;
  }

  async listSubmissions({ from, to } = {}) {
    let query = supabaseAdmin.from('lead_submissions')
      .select('submission_id,lead_id,segment,qualification_data,attribution,is_test,is_spam,classified_by,classified_at,received_at,leads(name,phone,email)')
      .order('received_at', { ascending: false }).limit(250);
    if (from) query = query.gte('received_at', from);
    if (to) query = query.lt('received_at', to);
    const { data, error } = await query;
    if (error) throw databaseError(error);
    return data;
  }

  async classifySubmission(id, classification, staffUser) {
    const { data, error } = await supabaseAdmin.rpc('classify_lead_submission', {
      p_submission_id: id, p_is_test: classification.is_test ?? null,
      p_is_spam: classification.is_spam ?? null, p_recorded_by: staffUser.id,
    });
    if (error) throw databaseError(error);
    return Array.isArray(data) ? data[0] : data;
  }

  async ownerNotifications(status) {
    let query = supabaseAdmin.from('owner_notification_outbox')
      .select('id,submission_id,lead_id,status,attempt_count,retry_cycle_attempt_count,next_attempt_at,claimed_at,provider_message_id,sent_at,error_message,created_at,updated_at')
      .order('created_at', { ascending: false }).limit(250);
    if (status) query = query.eq('status', status);
    const { data, error } = await query;
    if (error) throw databaseError(error);
    return data;
  }

  async reconcileOwnerNotification(id, resolution, providerMessageId, staffUser) {
    const { error } = await supabaseAdmin.rpc('reconcile_owner_notification', {
      p_outbox_id: id, p_resolution: resolution, p_provider_message_id: providerMessageId || null,
      p_recorded_by: staffUser.id,
    });
    if (error) throw databaseError(error);
    return { id, resolution };
  }

  async listEmailOfferTasks(status) {
    let query = supabaseAdmin.from('email_offer_staff_tasks')
      .select('id,submission_id,lead_id,offer,status,is_test,due_at,completed_at,created_at,updated_at,leads(name,phone,email)')
      .order('due_at', { ascending: true }).limit(250);
    if (status) query = query.eq('status', status);
    const { data, error } = await query;
    if (error) throw databaseError(error);
    return data;
  }

  async updateEmailOfferTask(id, status) {
    const now = new Date().toISOString();
    const { data, error } = await supabaseAdmin.from('email_offer_staff_tasks').update({
      status, completed_at: status === 'open' ? null : now, updated_at: now,
    }).eq('id', id).select('id,submission_id,lead_id,offer,status,is_test,due_at,completed_at,updated_at').single();
    if (error) throw databaseError(error);
    return data;
  }
}

module.exports = new StaffService();
