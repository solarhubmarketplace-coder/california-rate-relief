'use client';

import { useEffect, useRef, useState } from 'react';
import { captureFirstTouch } from '@/lib/attribution';
import { getOrCreateSubmissionAttempt, intakeAttribution, submitIntake, type IntakePayload } from '@/lib/intake';
import { emailOfferAttribution } from '@/lib/email-offer-attribution';
import { serviceMarkets } from '@/lib/service-market';
import { trackEvent } from '@/components/GoogleAnalyticsClient';

const inputClass = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600';
type Attempt = { id: string; payload: IntakePayload };

export function OfferRequest({ offer }: { offer: 'bill-review' | 'quote-review' }) {
  const storageKey = `crr_email_offer_${offer}_v1`;
  const attempt = useRef<Attempt | null>(null);
  const locked = useRef(false);
  const [pending, setPending] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState('');
  useEffect(() => {
    captureFirstTouch();
    try {
      const stored = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
      if (stored?.id === stored?.payload?.submission_id && stored?.payload?.contact && stored?.payload?.qualification_data?.inquiry_topic === offer) {
        attempt.current = stored; setPending(true);
      }
    } catch { /* A blocked storage API still permits in-memory retries. */ }
  }, [offer, storageKey]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    const fields = new FormData(event.currentTarget);
    const value = (name: string) => String(fields.get(name) || '').trim();
    if (!attempt.current && fields.get('contact_permission') !== 'on') { setError('Please confirm permission to follow up on this request.'); return; }
    locked.current = true; setBusy(true); setError('');
    try {
      attempt.current = getOrCreateSubmissionAttempt(attempt.current, id => ({
        submission_id: id, segment: 'residential',
        contact: { name: value('name'), phone: value('phone'), email: value('email') },
        qualification_data: {
          homeowner: value('homeowner') === 'yes', service_market: value('market'), service_zip: value('zip'),
          utility_provider: value('utility'), bill_amount: value('bill') ? Number(value('bill')) : null,
          inquiry_topic: offer, inquiry_question: value('question'),
        },
        attribution: emailOfferAttribution(intakeAttribution(captureFirstTouch()), window.location.search),
        consent: { status: 'opted_in', timestamp: new Date().toISOString() },
      }));
      try { sessionStorage.setItem(storageKey, JSON.stringify(attempt.current)); } catch { /* Preserve the in-memory attempt. */ }
      const result = await submitIntake(attempt.current.payload);
      if (!result.data?.lead_id || result.data.submission_id !== attempt.current.id) throw new Error('Storage was not confirmed. Please retry the saved request.');
      setSaved(result.data.submission_id);
      if (!result.data.duplicate) trackEvent('generate_lead', { form_kind: offer, segment: 'residential' });
      try { sessionStorage.removeItem(storageKey); } catch { /* A replay stays deduplicated server-side. */ }
      attempt.current = null; setPending(false);
    } catch (cause) {
      if ((cause as { statusCode?: number })?.statusCode === 400) {
        attempt.current = null;
        try { sessionStorage.removeItem(storageKey); } catch { /* Optional browser storage. */ }
      }
      setPending(Boolean(attempt.current));
      setError(cause instanceof Error ? cause.message : 'We could not confirm storage. Retry the same request.');
    } finally { locked.current = false; setBusy(false); }
  }

  return <section id="request" className="scroll-mt-8 rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm md:p-9">
    <h2 className="text-2xl font-bold text-slate-950">Ask about your solar options</h2>
    <p className="mt-3 text-sm leading-6 text-slate-600">Send your question to California Rate Relief. We collect project details for solar referrals. A provider confirms service availability, design and pricing.</p>
    {saved ? <div role="status" className="mt-6 rounded-xl bg-emerald-50 p-5"><p className="font-semibold">Your request is saved.</p><p className="mt-2 text-sm">Keep this reference for follow-up: <span className="break-all">{saved}</span>.</p><p className="mt-2 text-sm">A saved request does not confirm provider availability or an appointment.</p></div> :
      <form onSubmit={submit} className="mt-6">
        {pending && <p role="status" className="mb-4 rounded-xl bg-amber-50 p-4 text-sm">A previous request is awaiting confirmation. Retry sends the original information and reference, including after a page reload.</p>}
        <fieldset disabled={busy || pending} className="grid gap-4 sm:grid-cols-2 disabled:opacity-60">
          <legend className="sr-only">Your project and contact details</legend>
          <label className="text-sm font-medium">Name<input name="name" required autoComplete="name" maxLength={160} className={inputClass}/></label>
          <label className="text-sm font-medium">Phone<input name="phone" required type="tel" autoComplete="tel" maxLength={40} className={inputClass}/></label>
          <label className="text-sm font-medium sm:col-span-2">Email<input name="email" required type="email" autoComplete="email" maxLength={254} className={inputClass}/></label>
          <label className="text-sm font-medium">Project state<select name="market" defaultValue="CA" className={inputClass}>{serviceMarkets.map(([code,label])=><option key={code} value={code}>{label}</option>)}</select></label>
          <label className="text-sm font-medium">Project ZIP<input name="zip" required inputMode="numeric" pattern="[0-9]{5}" maxLength={5} autoComplete="postal-code" className={inputClass}/></label>
          <label className="text-sm font-medium">Utility on your bill<input name="utility" required maxLength={120} placeholder="For example, SCE" className={inputClass}/></label>
          <label className="text-sm font-medium">Monthly electric bill (optional)<input name="bill" type="number" min="0" max="10000000" step="0.01" className={inputClass}/></label>
          <label className="text-sm font-medium sm:col-span-2">Do you own the property?<select name="homeowner" defaultValue="yes" className={inputClass}><option value="yes">Yes</option><option value="no">No</option></select></label>
          <label className="text-sm font-medium sm:col-span-2">Your question (optional)<textarea name="question" rows={3} maxLength={200} className={inputClass}/></label>
          <label className="flex items-start gap-3 text-sm leading-6 sm:col-span-2"><input name="contact_permission" type="checkbox" required className="mt-1 h-5 w-5 shrink-0"/><span>I agree that California Rate Relief may contact me about this inquiry and share my project details with a solar provider for follow-up. <a href="/privacy" className="underline">Privacy policy</a>.</span></label>
        </fieldset>
        {error && <p role="alert" className="mt-4 text-sm text-red-800">{error}</p>}
        <button disabled={busy} className="mt-6 w-full rounded-xl bg-emerald-800 px-5 py-4 font-semibold text-white hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 disabled:opacity-60">{busy ? 'Saving…' : pending ? 'Retry saved request' : 'Send my question'}</button>
        <p className="mt-3 text-xs leading-5 text-slate-600">No purchase required. This request does not guarantee a quote, savings or program eligibility. Please leave utility account numbers and financial documents out of this form.</p>
      </form>}
  </section>;
}
