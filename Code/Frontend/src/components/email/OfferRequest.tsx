'use client';

import { useEffect, useRef, useState } from 'react';
import { captureFirstTouch } from '@/lib/attribution';
import { getOrCreateSubmissionAttempt, intakeAttribution, submitIntake, type IntakePayload } from '@/lib/intake';
import { emailOfferAttribution } from '@/lib/email-offer-attribution';
import { ensureEmailOfferVisit } from '@/lib/email-funnel';
import { derivedLocationFields } from '@/lib/ca-utility-by-zip';
import { trackEvent } from '@/components/GoogleAnalyticsClient';
import { US_PHONE_HINT, formatUsPhoneInput, toE164Us } from '@/lib/phone';
import {
  ADDRESS_REJECT_CODES,
  BILL_CHOICES,
  CONSENT_TEXT,
  LEAD_CONTRACT_VERSION,
  UNDER_250_ID,
  fieldForErrorCode,
  firstLeadError,
  needsUnitQuestion,
  residentialLeadErrors,
  type LeadErrorCode,
  type LeadField,
} from '@/lib/lead-contract';
import { EMPTY_PROJECT_ADDRESS, addressLeadInput, type ProjectAddressState } from '@/lib/project-address';
import { HAS_PLACES_KEY } from '@/lib/use-places-address';
import { useLeadGates } from '@/lib/lead-gates';
import { LeadChoiceButtons } from '@/components/growth/LeadChoiceButtons';
import { LeadGateNotice } from '@/components/growth/LeadGateNotice';
import { ProjectAddressFields, type AddressField } from '@/components/growth/ProjectAddressFields';

const inputClass = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600';
type Attempt = { id: string; payload: IntakePayload };
type FieldKey = LeadField | 'utility';

/**
 * The /email/bill-review and /email/quote-review request form, on the
 * residential lead contract (12 Nov 2026): homeowner Yes/No (no default), the
 * four bill buttons (required), the shared project address, utility, contact
 * details, an optional question and the consent checkbox. Under $250, a renter
 * or a declined unit shows the notice and disables Send.
 */
export function OfferRequest({ offer }: { offer: 'bill-review' | 'quote-review' }) {
  // v2: a frozen attempt saved by the old form has the old payload shape.
  const storageKey = `crr_email_offer_${offer}_v2`;
  const attempt = useRef<Attempt | null>(null);
  const visitId = useRef<string | null>(null);
  const locked = useRef(false);
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({});
  const trackGate = useLeadGates('offer_request');
  const [pending, setPending] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState('');
  const [homeowner, setHomeowner] = useState<'' | 'yes' | 'no'>('');
  const [billChoice, setBillChoice] = useState('');
  const [address, setAddress] = useState<ProjectAddressState>(EMPTY_PROJECT_ADDRESS);
  const [utility, setUtility] = useState('');
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [question, setQuestion] = useState('');
  const [consent, setConsent] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});

  useEffect(() => {
    captureFirstTouch();
    visitId.current = ensureEmailOfferVisit(offer, window.location.search);
    try {
      const stored = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
      if (stored?.id === stored?.payload?.submission_id && stored?.payload?.contact && stored?.payload?.qualification_data?.inquiry_topic === offer) {
        attempt.current = stored; setPending(true);
      }
    } catch { /* A blocked storage API still permits in-memory retries. */ }
  }, [offer, storageKey]);

  const clearFieldError = (key: FieldKey) =>
    setFieldErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  const focusField = (key: FieldKey) => requestAnimationFrame(() => fieldRefs.current[key]?.focus());
  const errorText = (key: FieldKey) =>
    fieldErrors[key] ? <p id={`offer-${key}-error`} className="mt-1 text-sm font-medium text-red-800">{fieldErrors[key]}</p> : null;

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    if (!attempt.current) {
      const errors: Partial<Record<FieldKey, string>> = {};
      const contractErrors = residentialLeadErrors({
        billChoice: billChoice || null,
        homeowner: homeowner === 'yes' ? true : homeowner === 'no' ? false : null,
        ...addressLeadInput(address, HAS_PLACES_KEY),
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        consent,
      });
      for (const [key, value] of Object.entries(contractErrors)) errors[key as FieldKey] = value.message;
      if (!utility.trim()) errors.utility = 'Enter the utility on your bill.';
      const first = firstLeadError(contractErrors);
      // Screen order: homeowner, bill, address, utility, contact, consent.
      const order: FieldKey[] = ['homeowner', 'bill', 'street', 'unit', 'city', 'zip', 'utility', 'name', 'phone', 'email', 'consent'];
      const firstKey = order.find((key) => errors[key]);
      if (firstKey) {
        setFieldErrors(errors);
        focusField(firstKey);
        trackEvent('form_validation_error', { form_kind: 'offer_request', inquiry_topic: offer, reason: first?.error.code ?? firstKey });
        if (first && (ADDRESS_REJECT_CODES as readonly LeadErrorCode[]).includes(first.error.code)) trackGate('gate_address_rejected', first.error.code);
        return;
      }
    }
    locked.current = true; setBusy(true); setError(''); setFieldErrors({});
    const needsUnit = needsUnitQuestion(address.street, address.placesUnitFlag);
    try {
      attempt.current = getOrCreateSubmissionAttempt(attempt.current, id => ({
        submission_id: id, segment: 'residential',
        contact: {
          name: contact.name.trim(), phone: toE164Us(contact.phone) ?? contact.phone, email: contact.email.trim(),
          // The API composes "street, City, CA ZIP" from the parts.
          street: address.street.trim(),
        },
        qualification_data: {
          lead_contract_version: LEAD_CONTRACT_VERSION,
          form_kind: 'offer_request',
          homeowner: true,
          monthly_bill_band: billChoice,
          // Typed name; the server maps known utilities and keeps the rest under Other.
          utility_provider: utility.trim(),
          credit_score: 'unsure',
          inquiry_topic: offer,
          inquiry_question: question.trim(),
          ...derivedLocationFields(address.zip, address.city, utility.trim()),
          city: address.city.trim(),
          service_zip: address.zip,
          service_market: 'CA',
          unit_flagged: needsUnit,
          unit_confirmed_detached: needsUnit ? true : null,
          address_source: address.source,
          places_status: address.placesStatus,
        },
        attribution: emailOfferAttribution(
          intakeAttribution(captureFirstTouch()), window.location.search,
          visitId.current || ensureEmailOfferVisit(offer, window.location.search),
        ),
        consent: { status: 'opted_in', timestamp: new Date().toISOString() },
      }));
      try { sessionStorage.setItem(storageKey, JSON.stringify(attempt.current)); } catch { /* Preserve the in-memory attempt. */ }
      const result = await submitIntake(attempt.current.payload);
      if (!result.data?.lead_id || result.data.submission_id !== attempt.current.id) throw new Error('Storage was not confirmed. Please retry the saved request.');
      setSaved(result.data.submission_id);
      if (!result.data.duplicate) {
        const q = attempt.current.payload.qualification_data;
        trackEvent('generate_lead', {
          form_kind: offer, segment: 'residential',
          bill_band: String(q.monthly_bill_band ?? 'unknown'),
          traffic_channel: attempt.current.payload.attribution.traffic_channel || 'unknown',
          unit_flagged: q.unit_flagged === true ? 'yes' : 'no',
          address_source: String(q.address_source ?? 'unknown'),
        });
      }
      try { sessionStorage.removeItem(storageKey); } catch { /* A replay stays deduplicated server-side. */ }
      attempt.current = null; setPending(false);
    } catch (cause) {
      const status = (cause as { statusCode?: number })?.statusCode;
      const code = (cause as { code?: string })?.code;
      if (status === 400) {
        attempt.current = null;
        try { sessionStorage.removeItem(storageKey); } catch { /* Optional browser storage. */ }
      }
      setPending(Boolean(attempt.current));
      const message = cause instanceof Error ? cause.message : 'We could not confirm storage. Retry the same request.';
      const field = status === 400 ? fieldForErrorCode(code) : null;
      if (field) {
        setFieldErrors({ [field]: message });
        focusField(field);
        if ((ADDRESS_REJECT_CODES as readonly string[]).includes(code || '')) trackGate('gate_address_rejected', code);
      } else setError(message);
    } finally { locked.current = false; setBusy(false); }
  }

  const renter = homeowner === 'no';
  const under = billChoice === UNDER_250_ID;
  const unitDeclined = address.unitAnswer === 'no' && needsUnitQuestion(address.street, address.placesUnitFlag);
  const blocked = !pending && (renter || under || unitDeclined);

  return <section id="request" className="scroll-mt-8 rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm md:p-9">
    <h2 className="text-2xl font-bold text-slate-950">Ask about your solar options</h2>
    <p className="mt-3 text-sm leading-6 text-slate-600">Send your question to California Rate Relief. We collect project details for solar referrals. A provider confirms service availability, design and pricing.</p>
    {saved ? <div role="status" className="mt-6 rounded-xl bg-emerald-50 p-5"><p className="font-semibold">Your request is saved.</p><p className="mt-2 text-sm">Keep this reference for follow-up: <span className="break-all">{saved}</span>.</p><p className="mt-2 text-sm">A saved request does not confirm provider availability or an appointment.</p></div> :
      <form onSubmit={submit} noValidate className="mt-6">
        {pending && <p role="status" className="mb-4 rounded-xl bg-amber-50 p-4 text-sm">A previous request is awaiting confirmation. Retry sends the original information and reference, including after a page reload.</p>}
        <fieldset disabled={busy || pending} className="grid gap-4 sm:grid-cols-2 disabled:opacity-60">
          <legend className="sr-only">Your project and contact details</legend>
          <LeadChoiceButtons
            className="sm:col-span-2"
            legend="Do you own the property?"
            name="homeowner"
            options={[{ id: 'yes', label: 'Yes' }, { id: 'no', label: 'No' }]}
            value={homeowner}
            error={fieldErrors.homeowner}
            firstRef={(node) => { fieldRefs.current.homeowner = node; }}
            onChange={(id) => {
              setHomeowner(id as 'yes' | 'no');
              clearFieldError('homeowner');
              if (id === 'no') trackGate('gate_renter');
            }}
          />
          {renter && <LeadGateNotice kind="renter" className="sm:col-span-2" onChangeAnswer={() => setHomeowner('')} />}
          <LeadChoiceButtons
            className="sm:col-span-2"
            legend="Average monthly electric bill"
            name="monthly_bill_band"
            options={BILL_CHOICES}
            value={billChoice}
            columns="grid-cols-2 sm:grid-cols-4"
            error={fieldErrors.bill}
            firstRef={(node) => { fieldRefs.current.bill = node; }}
            onChange={(id) => {
              setBillChoice(id);
              clearFieldError('bill');
              if (id === UNDER_250_ID) trackGate('gate_under_250');
            }}
          />
          {under && <LeadGateNotice kind="under_250" className="sm:col-span-2" onChangeAnswer={() => setBillChoice('')} />}
          <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2">
            <ProjectAddressFields
              value={address}
              onChange={setAddress}
              formKind="offer_request"
              disabled={busy || pending}
              errors={{ street: fieldErrors.street, unit: fieldErrors.unit, city: fieldErrors.city, zip: fieldErrors.zip }}
              onClearError={(key: AddressField) => clearFieldError(key)}
              registerField={(key, node) => { fieldRefs.current[key] = node; }}
              inputClassName={inputClass}
            />
          </div>
          <div className="min-w-0 sm:col-span-2">
            <label className="text-sm font-medium">Utility on your bill<input required maxLength={120} placeholder="For example, SCE" className={inputClass}
              ref={(node) => { fieldRefs.current.utility = node; }} value={utility}
              aria-invalid={Boolean(fieldErrors.utility) || undefined} aria-describedby={fieldErrors.utility ? 'offer-utility-error' : undefined}
              onChange={(e) => { setUtility(e.target.value); clearFieldError('utility'); }}/></label>
            {errorText('utility')}
          </div>
          <div className="min-w-0">
            <label className="text-sm font-medium">Name<input required autoComplete="name" maxLength={160} className={inputClass}
              ref={(node) => { fieldRefs.current.name = node; }} value={contact.name}
              aria-invalid={Boolean(fieldErrors.name) || undefined} aria-describedby={fieldErrors.name ? 'offer-name-error' : undefined}
              onChange={(e) => { setContact({ ...contact, name: e.target.value }); clearFieldError('name'); }}/></label>
            {errorText('name')}
          </div>
          <div className="min-w-0">
            <label className="text-sm font-medium">Phone<input required type="tel" inputMode="tel" autoComplete="tel" maxLength={20} className={inputClass}
              ref={(node) => { fieldRefs.current.phone = node; }} value={contact.phone}
              aria-invalid={Boolean(fieldErrors.phone) || undefined} aria-describedby="offer-phone-error"
              onChange={(e) => { setContact({ ...contact, phone: formatUsPhoneInput(e.target.value) }); clearFieldError('phone'); }}/></label>
            <p id="offer-phone-error" className={`mt-1 text-xs ${fieldErrors.phone ? 'font-medium text-red-800' : 'text-slate-600'}`}>{fieldErrors.phone || US_PHONE_HINT}</p>
          </div>
          <div className="min-w-0 sm:col-span-2">
            <label className="text-sm font-medium">Email<input required type="email" autoComplete="email" maxLength={254} className={inputClass}
              ref={(node) => { fieldRefs.current.email = node; }} value={contact.email}
              aria-invalid={Boolean(fieldErrors.email) || undefined} aria-describedby={fieldErrors.email ? 'offer-email-error' : undefined}
              onChange={(e) => { setContact({ ...contact, email: e.target.value }); clearFieldError('email'); }}/></label>
            {errorText('email')}
          </div>
          <label className="text-sm font-medium sm:col-span-2">Your question (optional)<textarea rows={3} maxLength={200} className={inputClass} value={question} onChange={(e) => setQuestion(e.target.value)}/></label>
          <div className="min-w-0 sm:col-span-2">
            <label className="flex items-start gap-3 text-sm leading-6"><input type="checkbox" required className="mt-1 h-5 w-5 shrink-0"
              ref={(node) => { fieldRefs.current.consent = node; }} checked={consent}
              aria-invalid={Boolean(fieldErrors.consent) || undefined} aria-describedby={fieldErrors.consent ? 'offer-consent-error' : undefined}
              onChange={(e) => { setConsent(e.target.checked); clearFieldError('consent'); }}/><span>{CONSENT_TEXT} <a href="/privacy" className="underline">Privacy policy</a>.</span></label>
            {errorText('consent')}
          </div>
        </fieldset>
        {error && <p role="alert" className="mt-4 text-sm text-red-800">{error}</p>}
        <button disabled={busy || blocked} className="mt-6 w-full rounded-xl bg-emerald-800 px-5 py-4 font-semibold text-white hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 disabled:opacity-60">{busy ? 'Saving…' : pending ? 'Retry saved request' : 'Send my question'}</button>
        <p className="mt-3 text-xs leading-5 text-slate-600">No purchase required. This request does not guarantee a quote, savings or program eligibility. Please leave utility account numbers and financial documents out of this form.</p>
      </form>}
  </section>;
}
