const staffService = require('../services/staff.service');

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const allowed = ['partner_name', 'forwarded_at', 'partner_qualified', 'qualification_reason', 'partner_contacted_at', 'appointment_at', 'sale_at', 'lost_at', 'partner_reference'];

async function growthScorecard(req,res,next) {
  const {from,to}=req.query;
  if (!from||!to||!Number.isFinite(Date.parse(from))||!Number.isFinite(Date.parse(to))||Date.parse(to)<=Date.parse(from)) return res.apiResponse(400,'An explicit valid from/to interval is required');
  try {return res.apiResponse(200,'Organic storage and receipt counts',await staffService.growthScorecard(from,to));} catch(error){return next(error);}
}
async function recordReceipt(req,res,next) {
  const reference=typeof req.body?.evidence_reference==='string'?req.body.evidence_reference.trim():'';
  const receiptAt=req.body?.receipt_at;
  if(!UUID.test(req.params.id||'')||reference.length<3||reference.length>300||!Number.isFinite(Date.parse(receiptAt))||Date.parse(receiptAt)>Date.now()) return res.apiResponse(400,'Submission ID, inbox evidence reference and past receipt time are required');
  try{return res.apiResponse(201,'Inbox receipt evidence recorded',await staffService.recordReceipt(req.params.id,{evidence_reference:reference,receipt_at:new Date(receiptAt).toISOString()},req.staffUser));}catch(error){return next(error);}
}

function pickOutcome(body) {
  const value = {};
  for (const key of allowed) if (Object.prototype.hasOwnProperty.call(body || {}, key)) value[key] = body[key] === '' ? null : body[key];
  if (typeof value.partner_name === 'string') value.partner_name = value.partner_name.trim().slice(0, 160);
  if (typeof value.qualification_reason === 'string') value.qualification_reason = value.qualification_reason.trim().slice(0, 500);
  if (typeof value.partner_reference === 'string') value.partner_reference = value.partner_reference.trim().slice(0, 200);
  return value;
}

function validDate(value) { return value == null || Number.isFinite(Date.parse(value)); }
function validateOutcome(value) {
  if (value.partner_qualified !== undefined && value.partner_qualified !== null && typeof value.partner_qualified !== 'boolean') return 'partner_qualified must be true, false, or null';
  for (const key of ['forwarded_at', 'partner_contacted_at', 'appointment_at', 'sale_at', 'lost_at']) if (!validDate(value[key])) return `${key} must be an ISO date`;
  return null;
}

async function recordReferral(req, res, next) {
  const leadId = req.body?.lead_id;
  const submissionId = req.body?.submission_id;
  const outcome = pickOutcome(req.body);
  if (!UUID.test(leadId || '') || !UUID.test(submissionId || '') || !outcome.partner_name || !outcome.forwarded_at) return res.apiResponse(400, 'lead_id, submission_id, partner_name and forwarded_at are required');
  const invalid = validateOutcome(outcome); if (invalid) return res.apiResponse(400, invalid);
  try { return res.apiResponse(200, 'Referral recorded', await staffService.recordReferral({ lead_id: leadId, submission_id: submissionId, ...outcome }, req.staffUser)); }
  catch (error) { return next(error); }
}

async function updateReferral(req, res, next) {
  if (!UUID.test(req.params.id || '')) return res.apiResponse(400, 'Invalid referral id');
  const outcome = pickOutcome(req.body); const invalid = validateOutcome(outcome);
  if (invalid) return res.apiResponse(400, invalid);
  try { return res.apiResponse(200, 'Referral updated', await staffService.updateReferral(req.params.id, outcome, req.staffUser)); }
  catch (error) { return next(error); }
}

async function listReferrals(req, res, next) { try { return res.apiResponse(200, 'Referrals retrieved', await staffService.listReferrals(req.query)); } catch (error) { return next(error); } }
async function getScorecard(req, res, next) { try { return res.apiResponse(200, 'Scorecard retrieved', await staffService.scorecard(req.query.from, req.query.to)); } catch (error) { return next(error); } }
async function listOwnerNotifications(req, res, next) { try { return res.apiResponse(200, 'Owner notifications retrieved', await staffService.ownerNotifications(req.query.status)); } catch (error) { return next(error); } }
async function listSubmissions(req, res, next) { try { return res.apiResponse(200, 'Submissions retrieved', await staffService.listSubmissions(req.query)); } catch (error) { return next(error); } }
async function classifySubmission(req, res, next) {
  if (!UUID.test(req.params.id || '')) return res.apiResponse(400, 'Invalid submission id');
  const classification = {};
  for (const key of ['is_test','is_spam']) {
    if (Object.prototype.hasOwnProperty.call(req.body || {}, key)) {
      if (typeof req.body[key] !== 'boolean') return res.apiResponse(400, `${key} must be boolean`);
      classification[key] = req.body[key];
    }
  }
  if (!Object.keys(classification).length) return res.apiResponse(400, 'is_test or is_spam is required');
  try { return res.apiResponse(200, 'Submission classification updated', await staffService.classifySubmission(req.params.id, classification, req.staffUser)); }
  catch (error) { return next(error); }
}
async function reconcileOwnerNotification(req, res, next) {
  if (!UUID.test(req.params.id || '') || !['sent', 'retry', 'failed'].includes(req.body?.resolution)) return res.apiResponse(400, 'Valid notification id and resolution are required');
  try { return res.apiResponse(200, 'Owner notification reconciled', await staffService.reconcileOwnerNotification(req.params.id, req.body.resolution, req.body.provider_message_id, req.staffUser)); }
  catch (error) { return next(error); }
}

module.exports = { growthScorecard, recordReceipt, recordReferral, updateReferral, listReferrals, getScorecard, listSubmissions, classifySubmission, listOwnerNotifications, reconcileOwnerNotification, pickOutcome, validateOutcome };
