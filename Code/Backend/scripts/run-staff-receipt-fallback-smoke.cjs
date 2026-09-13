#!/usr/bin/env node

// Verifies the real protected staff path without reading or changing the
// owner's password. Supabase generates a one-use link in memory, exchanges it
// for a short-lived session, and the script never prints either credential.

const { supabaseAdmin } = require('../src/lib/supabase');

const STAFF_USER_ID = 'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d';
const SUBMISSION_ID = '7fdafac5-22a0-43ee-90e8-75f7722f7654';
const EVIDENCE_REFERENCE = 'gmail:1a0981012ff486ae';
const RECEIPT_AT = '2026-09-12T23:59:44Z';
const API = 'https://api.ratereliefca.com/api';

async function responseJson(response) {
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${JSON.stringify(body)}`);
  return body;
}

async function main() {
  const { data: staffData, error: staffError } = await supabaseAdmin.auth.admin.getUserById(STAFF_USER_ID);
  const email = staffData?.user?.email;
  if (staffError || !email) throw new Error(`Staff lookup failed: ${staffError?.message || 'email missing'}`);

  const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({ type: 'magiclink', email });
  const tokenHash = linkData?.properties?.hashed_token;
  if (linkError || !tokenHash) throw new Error(`Short-lived staff link failed: ${linkError?.message || 'token missing'}`);

  const { data: sessionData, error: sessionError } = await supabaseAdmin.auth.verifyOtp({ token_hash: tokenHash, type: 'magiclink' });
  const accessToken = sessionData?.session?.access_token;
  if (sessionError || !accessToken) throw new Error(`Staff session exchange failed: ${sessionError?.message || 'session missing'}`);

  const headers = { authorization: `Bearer ${accessToken}`, 'content-type': 'application/json' };
  try {
    const receipt = await responseJson(await fetch(`${API}/staff/submissions/${SUBMISSION_ID}/receipt`, {
      method: 'POST', headers,
      body: JSON.stringify({ evidence_reference: EVIDENCE_REFERENCE, receipt_at: RECEIPT_AT }),
    }));
    const scorecard = await responseJson(await fetch(`${API}/staff/growth-scorecard?from=2026-09-12T00:00:00Z&to=2026-09-14T00:00:00Z`, { headers }));
    const tasks = await responseJson(await fetch(`${API}/staff/email-offer-tasks`, { headers }));

    process.stdout.write(JSON.stringify({
      ok: true,
      staff_email: email,
      receipt_http_path: `/staff/submissions/${SUBMISSION_ID}/receipt`,
      receipt_recorded: receipt?.data?.submission_id === SUBMISSION_ID,
      scorecard_read: Array.isArray(scorecard?.data),
      protected_tasks_read: Array.isArray(tasks?.data),
      matched_task: tasks?.data?.some(task => task.submission_id === SUBMISSION_ID) || false,
    }));
  } finally {
    if (supabaseAdmin.auth.admin.signOut) await supabaseAdmin.auth.admin.signOut(accessToken, 'global').catch(() => {});
  }
}

main().catch(error => { process.stderr.write(`${error.message}\n`); process.exit(1); });
