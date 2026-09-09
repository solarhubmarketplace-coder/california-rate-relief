'use client';

import { useCallback, useEffect, useState } from 'react';
import { Loader2, RefreshCw } from 'lucide-react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  createReferral,
  classifySubmission,
  fetchReferrals,
  fetchScorecard,
  fetchSubmissions,
  updateReferral,
  type ReferralRecord,
  type ScorecardRow,
  type ReferralOutcomeUpdate,
  type SubmissionRecord,
} from '@/lib/staff';

function localDate(value: Date) {
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
}

function initialRange() {
  const to = new Date();
  const from = new Date(to);
  from.setDate(from.getDate() - 27);
  return { from: localDate(from), to: localDate(to) };
}

function dateRange(range: { from: string; to: string }) {
  const from = new Date(`${range.from}T00:00:00`);
  const to = new Date(`${range.to}T00:00:00`);
  to.setDate(to.getDate() + 1);
  return { from: from.toISOString(), to: to.toISOString() };
}

function inputDate(value: string | null) {
  if (!value) return '';
  const date = new Date(value);
  return `${localDate(date)}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function OutcomeEditor({ record, onSave }: { record: ReferralRecord; onSave: (id: string, patch: ReferralOutcomeUpdate) => Promise<void> }) {
  const [saving, setSaving] = useState(false);
  const [qualification, setQualification] = useState(record.partner_qualified === null ? 'unknown' : record.partner_qualified ? 'qualified' : 'rejected');
  const [reason, setReason] = useState(record.qualification_reason || '');
  const [dates, setDates] = useState({
    partner_contacted_at: inputDate(record.partner_contacted_at), appointment_at: inputDate(record.appointment_at),
    sale_at: inputDate(record.sale_at), lost_at: inputDate(record.lost_at),
  });
  return <details className='min-w-64'>
    <summary className='cursor-pointer font-medium text-primary'>Update partner feedback</summary>
    <form className='mt-3 space-y-3' onSubmit={async event => {
      event.preventDefault(); setSaving(true);
      try {
        await onSave(record.id, {
          partner_qualified: qualification === 'unknown' ? null : qualification === 'qualified',
          qualification_reason: reason.trim() || null,
          ...Object.fromEntries(Object.entries(dates).map(([key, value]) => [key, value ? new Date(value).toISOString() : null])),
        });
      } finally { setSaving(false); }
    }}>
      <label className='block text-xs'>Qualification
        <select className='mt-1 h-9 w-full rounded border bg-background px-2 text-sm' value={qualification} onChange={e => setQualification(e.target.value)}>
          <option value='unknown'>Unknown / awaiting feedback</option><option value='qualified'>Partner confirmed qualified</option><option value='rejected'>Partner rejected</option>
        </select>
      </label>
      <label className='block text-xs'>Acceptance or rejection reason
        <textarea className='mt-1 w-full rounded border bg-background p-2 text-sm' value={reason} onChange={e => setReason(e.target.value)} maxLength={500} required={qualification !== 'unknown'} />
      </label>
      {Object.entries({ partner_contacted_at: 'Contact made', appointment_at: 'Appointment', sale_at: 'Sale', lost_at: 'Lost' }).map(([key, label]) => <label key={key} className='block text-xs'>{label} (local time)
        <input type='datetime-local' className='mt-1 h-9 w-full rounded border bg-background px-2 text-sm' value={dates[key as keyof typeof dates]} onChange={e => setDates(current => ({ ...current, [key]: e.target.value }))} />
      </label>)}
      <p className='text-xs text-muted-foreground'>Leave missing reports blank. A call or appointment alone does not mean the project is qualified.</p>
      <Button size='sm' disabled={saving}>{saving ? 'Saving...' : 'Save feedback'}</Button>
    </form>
  </details>;
}

export default function ReferralsPage() {
  const [referrals, setReferrals] = useState<ReferralRecord[]>([]);
  const [scorecard, setScorecard] = useState<ScorecardRow[]>([]);
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [range, setRange] = useState(initialRange);
  const [classification, setClassification] = useState({ submissionId: '', value: 'prospect' });
  const [classificationMessage, setClassificationMessage] = useState('');
  const [form, setForm] = useState({ leadId: '', submissionId: '', partnerName: '', partnerReference: '', forwardedAt: inputDate(new Date().toISOString()) });

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    const queryRange = dateRange(range);
    try {
      const [referralRows, scoreRows, submissionRows] = await Promise.all([
        fetchReferrals(queryRange.from, queryRange.to),
        fetchScorecard(queryRange.from, queryRange.to),
        fetchSubmissions(queryRange.from, queryRange.to),
      ]);
      setReferrals(referralRows);
      setScorecard(scoreRows);
      setSubmissions(submissionRows);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not load protected referral data.');
    } finally {
      setLoading(false);
    }
  }, [range]);

  useEffect(() => {
    load();
  }, [load]);

  const recordReferral = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    try {
      await createReferral({
        lead_id: form.leadId.trim(),
        submission_id: form.submissionId.trim(),
        partner_name: form.partnerName.trim(),
        forwarded_at: new Date(form.forwardedAt).toISOString(),
        partner_reference: form.partnerReference.trim() || null,
      });
      setForm({ leadId: '', submissionId: '', partnerName: '', partnerReference: '', forwardedAt: inputDate(new Date().toISOString()) });
      await load();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not record the referral.');
    } finally {
      setSaving(false);
    }
  };

  const setOutcome = async (id: string, patch: ReferralOutcomeUpdate) => {
    setError('');
    try {
      const updated = await updateReferral(id, patch);
      setReferrals(rows => rows.map(row => row.id === id ? updated : row));
      const queryRange = dateRange(range);
      setScorecard(await fetchScorecard(queryRange.from, queryRange.to));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not save the outcome.');
    }
  };

  const totals = scorecard.reduce((sum, row) => ({
    inquiries: sum.inquiries + row.unique_inquiries,
    forwarded: sum.forwarded + row.forwarded,
    qualified: sum.qualified + row.partner_qualified,
    appointments: sum.appointments + row.appointments,
    sales: sum.sales + row.sales,
  }), { inquiries: 0, forwarded: 0, qualified: 0, appointments: 0, sales: 0 });

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold'>Referral outcomes</h1>
              <p className='text-sm text-muted-foreground'>Record manual partner handoffs and the outcome the partner reports.</p>
            </div>
            <Button variant='outline' onClick={load} disabled={loading}><RefreshCw className='mr-2 h-4 w-4' />Refresh</Button>
          </div>

          {error && <p role='alert' className='rounded-lg bg-destructive/10 p-3 text-sm text-destructive'>{error}</p>}

          <div className='flex flex-wrap items-end gap-4'>
            <div><Label htmlFor='report-from'>Inquiry period starts</Label><Input id='report-from' type='date' value={range.from} max={range.to} onChange={e => { if (e.target.value) setRange(current => ({ ...current, from: e.target.value })); }} /></div>
            <div><Label htmlFor='report-to'>Through</Label><Input id='report-to' type='date' value={range.to} min={range.from} onChange={e => { if (e.target.value) setRange(current => ({ ...current, to: e.target.value })); }} /></div>
            <p className='max-w-xl text-xs text-muted-foreground'>Counts unique prospects who inquired in this period and their reported outcomes. Tests and spam are excluded. Week groups use Pacific time. Acquisition sessions and form starts remain in GA4.</p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-5'>
            {Object.entries(totals).map(([label, value]) => (
              <div key={label} className='rounded-xl border bg-card p-4'>
                <p className='text-xs font-medium uppercase text-muted-foreground'>{label}</p>
                <p className='mt-1 text-3xl font-bold'>{value}</p>
              </div>
            ))}
          </div>

          <form onSubmit={recordReferral} className='rounded-xl border bg-card p-5'>
            <h2 className='mb-4 text-lg font-semibold'>Record a partner handoff</h2>
            <label className='mb-4 block text-sm'>Choose a recent inquiry
              <select className='mt-1 h-10 w-full rounded border bg-background px-2' value={form.submissionId} onChange={event => {
                const selected = submissions.find(row => row.submission_id === event.target.value);
                if (selected) setForm(current => ({ ...current, leadId: selected.lead_id, submissionId: selected.submission_id }));
              }}>
                <option value=''>Select an inquiry or enter IDs below</option>
                {submissions.filter(row => !row.is_test && !row.is_spam).map(row => <option key={row.submission_id} value={row.submission_id}>{new Date(row.received_at).toLocaleDateString()} — {row.leads?.name || row.lead_id} — {row.segment} — {row.submission_id}</option>)}
              </select>
            </label>
            <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
              <div className='space-y-2'><Label htmlFor='ref-lead'>Lead ID</Label><Input id='ref-lead' value={form.leadId} onChange={e => setForm(v => ({ ...v, leadId: e.target.value }))} required /></div>
              <div className='space-y-2'><Label htmlFor='ref-submission'>Submission ID</Label><Input id='ref-submission' value={form.submissionId} onChange={e => setForm(v => ({ ...v, submissionId: e.target.value }))} required /></div>
              <div className='space-y-2'><Label htmlFor='ref-partner'>Partner name</Label><Input id='ref-partner' value={form.partnerName} onChange={e => setForm(v => ({ ...v, partnerName: e.target.value }))} required /></div>
              <div className='space-y-2'><Label htmlFor='ref-reference'>Partner reference</Label><Input id='ref-reference' value={form.partnerReference} onChange={e => setForm(v => ({ ...v, partnerReference: e.target.value }))} /></div>
              <div className='space-y-2'><Label htmlFor='ref-date'>Forwarded at (local time)</Label><Input id='ref-date' type='datetime-local' value={form.forwardedAt} onChange={e => setForm(v => ({ ...v, forwardedAt: e.target.value }))} required /></div>
            </div>
            <Button type='submit' className='mt-4' disabled={saving}>{saving && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}Record handoff</Button>
            <p className='mt-2 text-xs text-muted-foreground'>This records a handoff after it occurs. It does not send lead data to a partner.</p>
          </form>

          <div className='overflow-x-auto rounded-xl border bg-card'>
            {loading ? <div className='p-8 text-center'><Loader2 className='mx-auto h-6 w-6 animate-spin' /></div> : (
              <table className='w-full text-sm'>
                <thead className='border-b bg-muted/50 text-left'><tr><th className='p-3'>Partner / lead</th><th className='p-3'>Forwarded</th><th className='p-3'>Qualification</th><th className='p-3'>Reference</th><th className='p-3'>Record outcome</th></tr></thead>
                <tbody>
                  {referrals.map(record => (
                    <tr key={record.id} className='border-b last:border-0'>
                      <td className='p-3 font-medium'>{record.partner_name}<p className='mt-1 break-all text-xs font-normal text-muted-foreground'>{record.lead_id}</p></td>
                      <td className='p-3'>{new Date(record.forwarded_at).toLocaleDateString()}</td>
                      <td className='p-3'>{record.partner_qualified === true ? 'Qualified' : record.partner_qualified === false ? 'Rejected' : 'Unknown'}<p className='mt-1 text-xs text-muted-foreground'>{record.qualification_reason}</p></td>
                      <td className='p-3'>{record.partner_reference || '—'}</td>
                      <td className='p-3'>
                        <OutcomeEditor record={record} onSave={setOutcome} />
                      </td>
                    </tr>
                  ))}
                  {!referrals.length && <tr><td colSpan={5} className='p-8 text-center text-muted-foreground'>No referrals recorded in the selected period.</td></tr>}
                </tbody>
              </table>
            )}
          </div>

          <div className='overflow-x-auto rounded-xl border bg-card'>
            <h2 className='p-4 text-lg font-semibold'>Weekly inquiry scorecard</h2>
            <table className='w-full text-left text-xs'>
              <thead className='border-y bg-muted/50'><tr>{['Week','Segment','Original page','Utility','ZIP / county','Inquiries','Forwarded','Qualified','Rejected','Unknown','Contacted','Appointments','Sales'].map(label => <th key={label} className='p-3'>{label}</th>)}</tr></thead>
              <tbody>{scorecard.map((row, index) => <tr key={index} className='border-b last:border-0'>
                {[row.week_start,row.segment,row.original_landing_page || 'Unknown',row.utility_provider || 'Unknown',row.geography || 'Unknown',row.unique_inquiries,row.forwarded,row.partner_qualified,row.partner_rejected,row.qualification_unknown,row.contacted,row.appointments,row.sales].map((value, cell) => <td key={cell} className='p-3'>{value}</td>)}
              </tr>)}{!scorecard.length && <tr><td colSpan={13} className='p-5 text-muted-foreground'>No eligible inquiries in this period.</td></tr>}</tbody>
            </table>
          </div>

          <form className='rounded-xl border bg-card p-5' onSubmit={async event => {
            event.preventDefault(); setSaving(true); setError(''); setClassificationMessage('');
            try {
              await classifySubmission(classification.submissionId.trim(), { is_test: classification.value === 'test', is_spam: classification.value === 'spam' });
              await load(); setClassificationMessage('Classification saved. The scorecard has been refreshed.');
            } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not save classification.'); }
            finally { setSaving(false); }
          }}>
            <h2 className='mb-3 text-lg font-semibold'>Exclude a test or spam submission</h2>
            <label className='mb-3 block text-sm'>Recent submissions (up to 250 in this period)
              <select className='mt-1 h-10 w-full rounded border bg-background px-2' value={classification.submissionId} onChange={event => {
                const selected = submissions.find(row => row.submission_id === event.target.value);
                if (selected) setClassification({ submissionId: selected.submission_id, value: selected.is_test ? 'test' : selected.is_spam ? 'spam' : 'prospect' });
              }}>
                <option value=''>Select a submission or enter its ID below</option>
                {submissions.map(row => <option key={row.submission_id} value={row.submission_id}>{new Date(row.received_at).toLocaleDateString()} — {row.leads?.name || row.lead_id} — {row.is_test ? 'TEST' : row.is_spam ? 'SPAM' : row.segment} — {row.submission_id}</option>)}
              </select>
            </label>
            <div className='flex flex-wrap items-end gap-3'>
              <div className='min-w-64 flex-1'><Label htmlFor='class-submission'>Submission ID from the notification</Label><Input id='class-submission' value={classification.submissionId} onChange={e => setClassification(current => ({ ...current, submissionId: e.target.value }))} required /></div>
              <label className='text-sm'>Classification<select className='ml-2 h-10 rounded border bg-background px-2' value={classification.value} onChange={e => setClassification(current => ({ ...current, value: e.target.value }))}><option value='prospect'>Real inquiry</option><option value='test'>Test</option><option value='spam'>Spam</option></select></label>
              <Button disabled={saving}>Save classification</Button>
            </div>
            <p className='mt-2 text-xs text-muted-foreground'>This changes reporting eligibility and preserves the submission record.</p>
            {classificationMessage && <p role='status' className='mt-2 text-sm'>{classificationMessage}</p>}
          </form>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
