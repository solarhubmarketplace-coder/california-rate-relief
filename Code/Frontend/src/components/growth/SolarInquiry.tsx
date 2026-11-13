'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { captureFirstTouch } from '@/lib/attribution';
import {
  getOrCreateSubmissionAttempt,
  intakeAttribution,
  submitIntake,
  type IntakePayload,
} from '@/lib/intake';
import {
  readCalculatorContext,
  utilityOptions,
  type CalculatorContext,
} from '@/lib/calculator-context';
import { calculateSolarScenario } from '@/lib/solar-savings-engine';
import type { ServiceMarket } from '@/lib/service-market';
import { derivedLocationFields } from '@/lib/ca-utility-by-zip';
import { trackEvent } from '@/components/GoogleAnalyticsClient';
import {
  INQUIRY_RECEIVED_COPY,
  ROOF_AGE_BANDS,
  ctaCopyFor,
  ctaVariantForPath,
  isRoofAgeBand,
  type CtaVariant,
} from '@/lib/cta-intent';
import { isCommercialIntentPath } from '@/lib/intake-routing';
import { US_PHONE_HINT, formatUsPhoneInput, isValidUsPhone, toE164Us, usPhoneError } from '@/lib/phone';
import {
  QUICK_START_EVENT,
  parseBill,
  quickStartFromEvent,
  takeQuickStart,
  utilityCodeFor,
  utilityLabelFor,
  type QuickStart,
} from '@/lib/quick-start';
import {
  ADDRESS_REJECT_CODES,
  BILL_CHOICES,
  CONSENT_TEXT,
  ERRORS,
  LEAD_CONTRACT_VERSION,
  UNDER_250_ID,
  billBandLabel,
  billChoiceForAmount,
  fieldForErrorCode,
  firstLeadError,
  isBillBandId,
  needsUnitQuestion,
  residentialLeadErrors,
  composeAddress,
  type LeadErrorCode,
  type LeadField,
} from '@/lib/lead-contract';
import {
  EMPTY_PROJECT_ADDRESS,
  addressLeadInput,
  type ProjectAddressState,
} from '@/lib/project-address';
import { HAS_PLACES_KEY } from '@/lib/use-places-address';
import { useLeadGates } from '@/lib/lead-gates';
import { InquiryReceived } from './InquiryReceived';
import { TrustBlock } from './TrustBlock';
import { LeadChoiceButtons } from './LeadChoiceButtons';
import { LeadGateNotice } from './LeadGateNotice';
import { ProjectAddressFields, type AddressField } from './ProjectAddressFields';
import { ReferralDisclosure } from '@/components/shared/ReferralDisclosure';

const fieldBase =
  'w-full rounded-lg border border-input bg-white px-3 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring';
const field = `mt-1 ${fieldBase}`;
const invalidField = 'border-destructive';
// v2 (residential lead contract, 12 Nov 2026): a frozen attempt saved by the
// old form has the old payload shape and is never replayed.
const ATTEMPT_KEY = 'crr_review_submission_v2';

// Two steps, not one long form. Step 1 asks the utility and the monthly bill
// band and no PII at all; step 2 asks whether the visitor owns the home (so a
// renter is stopped before giving PII), where it is, and the contact details.
type FormStep = 1 | 2;

/** Where step-1 answers came from, reported as the prefill_source event param. */
type PrefillSource = 'none' | 'calculator' | 'quick_check';

type FieldKey = 'utility_provider' | LeadField;

/** A utility prop may be a code ('sce') or a label ('PG&E'); the select needs a code. */
function initialUtility(value: string): { utility: string; other: string } {
  const code = utilityCodeFor(value);
  if (code) return { utility: code, other: '' };
  // An unlisted name is kept as the visitor-facing "other" answer, which sends
  // the same utility_provider string the prop used to send.
  return value.trim() ? { utility: 'other', other: value.trim() } : { utility: '', other: '' };
}

export function SolarInquiry({
  utility = '',
  topic = 'Solar comparison',
  variant,
  sourceTool,
  sectionId = 'solar-inquiry',
  heading,
  showTrustBlock = true,
}: {
  utility?: string;
  topic?: string;
  /**
   * Ignored since 12 Nov 2026: the residential form is California only (the
   * out-of-state pages 301 per Decision 41). Kept so existing pages compile.
   */
  market?: ServiceMarket;
  /** Override the intent-matched copy. Omitted, it follows the pathname. */
  variant?: CtaVariant;
  /**
   * Set when this form is opened from one of the on-page calculators, so those
   * submissions stay separable in the numerator without a second ingest path.
   */
  sourceTool?: string;
  /** Unique when a page carries the form twice (article form + tool report). */
  sectionId?: string;
  heading?: string;
  showTrustBlock?: boolean;
}) {
  const uid = useId();
  const initial = initialUtility(utility);
  const [inputs, setInputs] = useState<CalculatorContext>({
    utility: initial.utility,
    zip: '',
    monthlyBill: '',
  });
  const [billChoice, setBillChoice] = useState('');
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [address, setAddress] = useState<ProjectAddressState>(EMPTY_PROJECT_ADDRESS);
  const [homeowner, setHomeowner] = useState<'' | 'yes' | 'no'>('');
  const [roofAge, setRoofAge] = useState('');
  const [utilityOther, setUtilityOther] = useState(initial.other);
  const [consent, setConsent] = useState(false);
  const [step, setStep] = useState<FormStep>(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [saved, setSaved] = useState('');
  const [pending, setPending] = useState(false);
  const attempt = useRef<{ id: string; payload: IntakePayload } | null>(null);
  const inFlight = useRef(false);
  const stepStatusRef = useRef<HTMLParagraphElement | null>(null);
  const focusStepRef = useRef(false);
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({});
  // True while the calculator context supplied a usable bill: its figures ride
  // along as informational calculator_* fields (never the stored bill).
  const calculatorSuppliedRef = useRef(false);
  const errorId = (key: FieldKey) => `${uid}-${key}-error`;
  const trackGate = useLeadGates('solar_inquiry');

  const pathname = usePathname() || '';
  const resolvedVariant: CtaVariant = variant
    ? variant
    : isCommercialIntentPath(pathname)
      ? 'commercial'
      : ctaVariantForPath(pathname);
  const copy = ctaCopyFor(resolvedVariant);

  // Funnel instrumentation. form_view is the denominator, form_start the first
  // interaction, and the two failure events separate "wrong input" from "the
  // request failed". Every event carries cta_variant (which ask was made) and
  // form_step (where the visitor was), and form_step_complete marks clearing
  // step 1. prefill_source says whether step 1 arrived pre-answered from the
  // calculator context or from a HeroQuickCheck handoff.
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewedRef = useRef(false);
  const startedRef = useRef(false);
  const prefillRef = useRef<PrefillSource>('none');
  const contextRef = useRef<Record<string, string>>({});
  contextRef.current = {
    form_kind: 'solar_inquiry',
    inquiry_topic: topic,
    service_market: 'CA',
    cta_variant: resolvedVariant,
    form_step: String(step),
    form_layout: 'two_step_v2',
    prefill_source: prefillRef.current,
    ...(sourceTool ? { source_tool: sourceTool } : {}),
  };
  const funnelContext = () => ({ ...contextRef.current, prefill_source: prefillRef.current });
  const markViewed = () => {
    if (viewedRef.current) return;
    viewedRef.current = true;
    trackEvent('form_view', funnelContext());
  };
  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    // Interacting implies having seen it. Emitting the view first keeps
    // view >= start in the reported funnel even where IntersectionObserver
    // never fires.
    markViewed();
    trackEvent('form_start', funnelContext());
  };

  /** A calculator bill preselects its band (still needs Continue); never "Under $250". */
  const bandFromCalculator = (context: CalculatorContext) => {
    const amount = parseBill(context.monthlyBill || '');
    calculatorSuppliedRef.current = amount !== null;
    const band = amount === null ? null : billChoiceForAmount(amount);
    return isBillBandId(band) ? band : '';
  };

  // HeroQuickCheck handoff: step 1 is already answered, so open at step 2.
  // An older handoff without a usable band opens at the bill question instead.
  const applyQuickStart = (value: QuickStart) => {
    if (attempt.current) return; // A frozen attempt must not change.
    prefillRef.current = 'quick_check';
    setInputs((current) => ({ ...current, utility: value.utility }));
    setUtilityOther(value.utility === 'other' ? value.utilityOther : '');
    setBillChoice(value.billChoice ?? '');
    setError('');
    setFieldErrors({});
    markStarted();
    if (!value.billChoice) {
      setStep(1);
      return;
    }
    if (step === 1) trackEvent('form_step_complete', { ...funnelContext(), form_step: '1' });
    focusStepRef.current = true;
    setStep(2);
  };
  const applyQuickStartRef = useRef(applyQuickStart);
  applyQuickStartRef.current = applyQuickStart;
  const bandFromCalculatorRef = useRef(bandFromCalculator);
  bandFromCalculatorRef.current = bandFromCalculator;

  useEffect(() => {
    captureFirstTouch();
    // The calculator's California ZIP pre-fills the home's ZIP when that field
    // is still empty (review R2); ProjectAddressFields then checks it and fills City.
    const prefillZip = (context: CalculatorContext) => {
      if (/^\d{5}$/.test(context.zip || '')) {
        setAddress((current) => (current.zip ? current : { ...current, zip: context.zip, zipKnown: null }));
      }
    };
    const context = readCalculatorContext();
    if (context) {
      prefillRef.current = 'calculator';
      setInputs(context);
      prefillZip(context);
      const band = bandFromCalculatorRef.current(context);
      if (band) setBillChoice(band);
    }
    const update = (event: Event) => {
      if (!attempt.current) {
        const detail = (event as CustomEvent<CalculatorContext>).detail;
        prefillRef.current = 'calculator';
        setInputs(detail);
        prefillZip(detail);
        const band = bandFromCalculatorRef.current(detail);
        if (band) setBillChoice(band);
      }
    };
    window.addEventListener('crr-calculator-context', update);
    const onQuickStart = (event: Event) => {
      const value = quickStartFromEvent(event, sectionId);
      if (value) applyQuickStartRef.current(value);
    };
    window.addEventListener(QUICK_START_EVENT, onQuickStart);
    try {
      const stored = JSON.parse(sessionStorage.getItem(ATTEMPT_KEY) || 'null');
      if (
        stored?.id &&
        stored?.payload?.submission_id === stored.id &&
        stored.payload.contact &&
        stored.payload.qualification_data
      ) {
        attempt.current = stored;
        setPending(true);
        // A frozen attempt already holds contact details, so the retry belongs
        // on the contact step rather than back at the first question.
        setStep(2);
        const q = stored.payload.qualification_data;
        const code =
          utilityOptions.find(
            ([id, label]) =>
              id === String(q.utility_provider).toLowerCase() ||
              label === q.utility_provider,
          )?.[0] || 'other';
        if (code === 'other' && typeof q.utility_provider === 'string' && q.utility_provider !== 'other')
          setUtilityOther(q.utility_provider);
        setInputs((current) => ({
          ...current,
          utility: code,
          monthlyBill: q.calculator_monthly_bill == null ? '' : String(q.calculator_monthly_bill),
        }));
        if (isBillBandId(q.monthly_bill_band)) setBillChoice(q.monthly_bill_band);
        const street = String(stored.payload.contact.street || '');
        setAddress({
          ...EMPTY_PROJECT_ADDRESS,
          street,
          city: typeof q.city === 'string' ? q.city : '',
          zip: typeof q.service_zip === 'string' ? q.service_zip : '',
          zipKnown: true,
          source: q.address_source === 'places' ? 'places' : 'manual',
          placeSelected: q.address_source === 'places',
          placesUnitFlag: q.unit_flagged === true && !needsUnitQuestion(street, false),
          unitAnswer: q.unit_flagged === true ? 'yes' : '',
        });
        setContact({
          name: stored.payload.contact.name || '',
          phone: formatUsPhoneInput(stored.payload.contact.phone || ''),
          email: stored.payload.contact.email || '',
        });
        setHomeowner(q.homeowner ? 'yes' : 'no');
        if (typeof q.roof_age === 'string' && isRoofAgeBand(q.roof_age))
          setRoofAge(q.roof_age);
        setConsent(stored.payload.consent?.status === 'opted_in');
      }
    } catch {
      /* Storage is optional; the in-memory attempt still supports retries. */
    }
    // A handoff from another page (sessionStorage, or qc_* params when storage
    // is blocked). Consumed once, so a reload does not jump ahead again.
    const handoff = takeQuickStart(sectionId);
    if (handoff) applyQuickStartRef.current(handoff);
    return () => {
      window.removeEventListener('crr-calculator-context', update);
      window.removeEventListener(QUICK_START_EVENT, onQuickStart);
    };
  }, [sectionId]);

  // After a handoff, put keyboard and screen-reader focus on the step line.
  useEffect(() => {
    if (!focusStepRef.current || step !== 2) return;
    focusStepRef.current = false;
    stepStatusRef.current?.focus({ preventScroll: true });
  }, [step]);

  // form_view: fires once the form actually enters the viewport.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || viewedRef.current) continue;
          viewedRef.current = true;
          trackEvent('form_view', { ...contextRef.current, prefill_source: prefillRef.current });
          observer.disconnect();
        }
      },
      // threshold 0: any pixel visible counts as "the visitor reached the form".
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearFieldError = (key: FieldKey) =>
    setFieldErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  const describedBy = (key: FieldKey) => (fieldErrors[key] ? errorId(key) : undefined);
  const fieldError = (key: FieldKey) =>
    fieldErrors[key] ? (
      <p id={errorId(key)} className="mt-1 text-sm font-medium text-destructive">
        {fieldErrors[key]}
      </p>
    ) : null;
  const focusField = (key: FieldKey) => {
    // Next frame: the field may only render after the state update.
    requestAnimationFrame(() => fieldRefs.current[key]?.focus());
  };

  const chooseBill = (id: string) => {
    setBillChoice(id);
    clearFieldError('bill');
    if (id === UNDER_250_ID) trackGate('gate_under_250');
  };

  const advance = () => {
    markStarted();
    if (billChoice === UNDER_250_ID) return; // screened out; the notice is showing
    // "Other / not sure" is a complete answer; the name box is optional.
    const utilityAnswer = inputs.utility;
    const billOk = isBillBandId(billChoice);
    if (!utilityAnswer || !billOk) {
      const reason: FieldKey = !utilityAnswer ? 'utility_provider' : 'bill';
      setFieldErrors({
        ...(!utilityAnswer
          ? { utility_provider: 'Choose the utility on your bill. Pick "Other / not sure" if yours is not listed.' }
          : {}),
        ...(!billOk ? { bill: ERRORS.bill_band_required } : {}),
      });
      focusField(reason);
      trackEvent('form_validation_error', {
        ...funnelContext(),
        reason: reason === 'bill' ? 'bill_band_required' : reason,
      });
      return;
    }
    setError('');
    setFieldErrors({});
    trackEvent('form_step_complete', funnelContext());
    setStep(2);
  };

  const chooseHomeowner = (value: 'yes' | 'no') => {
    setHomeowner(value);
    clearFieldError('homeowner');
    if (value === 'no') trackGate('gate_renter');
  };

  /** Show a contract error inline (from the browser check or an API 400). */
  const showContractError = (key: FieldKey, code: string, message: string) => {
    if (key === 'bill') setStep(1);
    setFieldErrors({ [key]: message });
    focusField(key);
    if ((ADDRESS_REJECT_CODES as readonly string[]).includes(code)) trackGate('gate_address_rejected', code);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (inFlight.current) return;
    // Enter/Go on the step-1 keyboard submits the form; treat it as Continue.
    if (step === 1) {
      advance();
      return;
    }
    markStarted();
    const needsUnit = needsUnitQuestion(address.street, address.placesUnitFlag);
    if (!attempt.current) {
      const errors = residentialLeadErrors({
        billChoice: billChoice || null,
        homeowner: homeowner === 'yes' ? true : homeowner === 'no' ? false : null,
        ...addressLeadInput(address, HAS_PLACES_KEY),
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        consent,
      });
      const first = firstLeadError(errors);
      if (first) {
        if (first.field === 'bill') setStep(1);
        const shown: Partial<Record<FieldKey, string>> = {};
        for (const [key, value] of Object.entries(errors)) shown[key as FieldKey] = value.message;
        setFieldErrors(shown);
        focusField(first.field);
        trackEvent('form_validation_error', { ...funnelContext(), reason: first.error.code });
        if ((ADDRESS_REJECT_CODES as readonly LeadErrorCode[]).includes(first.error.code)) {
          trackGate('gate_address_rejected', first.error.code);
        }
        return;
      }
    }
    inFlight.current = true;
    setBusy(true);
    setError('');
    setFieldErrors({});
    trackEvent('form_submit_attempt', funnelContext());
    try {
      const optional = (value?: string) =>
        value?.trim() ? Number(value) : undefined;
      attempt.current = getOrCreateSubmissionAttempt(attempt.current, (id) => {
        const baseAttribution = intakeAttribution(captureFirstTouch());
        const utilityProvider = inputs.utility === 'other' ? utilityOther.trim() || 'other' : inputs.utility;
        const calculatorBill = parseBill(inputs.monthlyBill || '');
        const calculatorFields =
          calculatorSuppliedRef.current && calculatorBill !== null
            ? (() => {
                const calc = calculateSolarScenario({
                  monthlyBill: calculatorBill,
                  annualKwh: optional(inputs.annualKwh),
                  systemKw: optional(inputs.systemKw),
                  solarPrice: optional(inputs.solarPrice),
                  batteryPrice: optional(inputs.batteryPrice),
                  annualBillAfter: optional(inputs.annualBillAfter),
                });
                return {
                  calculator_version: 'quote-input-v2',
                  calculator_monthly_bill: calculatorBill,
                  calculator_annual_kwh: optional(inputs.annualKwh) ?? null,
                  calculator_system_kw: optional(inputs.systemKw) ?? null,
                  calculator_solar_only_price: optional(inputs.solarPrice) ?? null,
                  calculator_battery_price: optional(inputs.batteryPrice) ?? null,
                  calculator_cash_price: calc.cashPrice,
                  calculator_annual_bill_after: optional(inputs.annualBillAfter) ?? null,
                  calculator_annual_difference: calc.annualDifference,
                  calculator_simple_payback: calc.simplePayback,
                };
              })()
            : {};
        return {
          submission_id: id,
          segment: 'residential',
          contact: {
            name: contact.name.trim(),
            // The backend normalizes every phone to E.164, so sending E.164
            // stores exactly the same value.
            phone: toE164Us(contact.phone) ?? contact.phone,
            email: contact.email.trim(),
            // The API composes "street, City, CA ZIP" from the parts.
            street: address.street.trim(),
            // Ignored by the contract API; lets the previous API accept the lead
            // if the forms go live before it during the deploy (review R1).
            address: composeAddress(address.street, address.city, address.zip),
          },
          qualification_data: {
            lead_contract_version: LEAD_CONTRACT_VERSION,
            form_kind: 'solar_inquiry',
            homeowner: true,
            monthly_bill_band: billChoice,
            roof_age: roofAge || null,
            // "Other / not sure" with no name typed sends 'other', which the
            // backend stores as its canonical 'Other'.
            utility_provider: utilityProvider,
            credit_score: 'unsure',
            inquiry_topic: topic,
            source_tool: sourceTool || null,
            ...derivedLocationFields(address.zip, address.city, utilityProvider),
            city: address.city.trim(),
            service_zip: address.zip,
            service_market: 'CA',
            unit_flagged: needsUnit,
            unit_confirmed_detached: needsUnit ? true : null,
            address_source: address.source,
            places_status: address.placesStatus,
            ...calculatorFields,
          },
          attribution: {
            ...baseAttribution,
            // A tool-sourced submission is attributable end to end through
            // utm_content. A real campaign value is never overwritten.
            ...(sourceTool && !baseAttribution.utm_content
              ? { utm_content: `tool_${sourceTool}` }
              : {}),
          },
          consent: { status: 'opted_in', timestamp: new Date().toISOString() },
        };
      });
      try {
        sessionStorage.setItem(ATTEMPT_KEY, JSON.stringify(attempt.current));
      } catch {
        /* Retry remains in memory. */
      }
      const result = await submitIntake(attempt.current.payload);
      if (
        !result.data?.lead_id ||
        result.data.submission_id !== attempt.current.id
      )
        throw new Error('Storage was not confirmed. Retry this submission.');
      setSaved(result.data.submission_id);
      if (!result.data.duplicate) {
        const q = attempt.current.payload.qualification_data;
        trackEvent('generate_lead', {
          ...funnelContext(),
          segment: 'residential',
          landing_page:
            attempt.current.payload.attribution.landing_page || 'unknown',
          bill_band: String(q.monthly_bill_band ?? 'unknown'),
          traffic_channel: attempt.current.payload.attribution.traffic_channel || 'unknown',
          unit_flagged: q.unit_flagged === true ? 'yes' : 'no',
          address_source: String(q.address_source ?? 'unknown'),
        });
      }
      try {
        sessionStorage.removeItem(ATTEMPT_KEY);
      } catch {
        /* A replay is deduplicated by the API. */
      }
      attempt.current = null;
      setPending(false);
    } catch (cause) {
      const status = (cause as { statusCode?: number })?.statusCode;
      const code = (cause as { code?: string })?.code;
      // HTTP 400 is validation before storage. Allow correction; retain the frozen
      // attempt on timeout/5xx/409 because persistence may already have happened.
      if (status === 400) {
        attempt.current = null;
        try {
          sessionStorage.removeItem(ATTEMPT_KEY);
        } catch {
          /* memory cleared */
        }
      }
      setPending(Boolean(attempt.current));
      trackEvent('form_submit_error', {
        ...funnelContext(),
        status_code: String(status ?? 0),
        retained_attempt: attempt.current ? 'yes' : 'no',
        ...(code ? { reason: code } : {}),
      });
      const target = status === 400 ? fieldForErrorCode(code) : null;
      const message = cause instanceof Error ? cause.message : 'Submission was not confirmed. Retry the same information.';
      if (target) showContractError(target, code || '', message);
      else setError(message);
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  };

  const renter = homeowner === 'no';
  const underGate = billChoice === UNDER_250_ID;
  const unitDeclined = address.unitAnswer === 'no' && needsUnitQuestion(address.street, address.placesUnitFlag);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="my-10 scroll-mt-24 rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-8"
    >
      <h2 className="text-2xl font-bold text-foreground">
        {heading ?? copy.formHeading}
      </h2>
      {!saved && <p className="mt-2 text-foreground/80">{copy.formIntro}</p>}
      {saved ? (
        <InquiryReceived
          className="mt-5"
          reference={saved}
          received={INQUIRY_RECEIVED_COPY.inquiryReceived}
          contact={INQUIRY_RECEIVED_COPY.inquiryContact}
        />
      ) : (
        <form
          onSubmit={submit}
          onFocusCapture={markStarted}
          noValidate
          className="mt-6 space-y-4"
        >
          <p
            ref={stepStatusRef}
            tabIndex={-1}
            className="text-sm font-medium text-muted-foreground outline-none"
            aria-live="polite"
          >
            Step {step} of 2 —{' '}
            {step === 1 ? 'your bill' : 'where and who to send it to'}
          </p>
          {pending && (
            <p role="status" className="rounded-lg bg-secondary p-3 text-sm">
              A submission is awaiting confirmation. Retry sends the same saved
              information and reference. Your browser tab keeps this attempt
              until it is confirmed.
            </p>
          )}
          {step === 1 ? (
            <fieldset
              disabled={busy || pending}
              className="grid min-w-0 gap-4 md:grid-cols-2"
            >
              <div className="min-w-0">
                <label className="text-sm font-medium">
                  Utility on your bill
                  <select
                    aria-required="true"
                    ref={(node) => {
                      fieldRefs.current.utility_provider = node;
                    }}
                    className={`${field} ${fieldErrors.utility_provider ? invalidField : ''}`}
                    value={inputs.utility}
                    aria-invalid={Boolean(fieldErrors.utility_provider) || undefined}
                    aria-describedby={describedBy('utility_provider')}
                    onChange={(e) => {
                      setInputs({ ...inputs, utility: e.target.value });
                      clearFieldError('utility_provider');
                    }}
                  >
                    <option value="">Choose utility</option>
                    {utilityOptions.map(([id, label]) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                {fieldError('utility_provider')}
              </div>
              {inputs.utility === 'other' && (
                <label className="text-sm font-medium">
                  Utility company on your bill (optional)
                  <input maxLength={120} autoComplete="off" className={field} value={utilityOther} onChange={(e) => setUtilityOther(e.target.value)} />
                </label>
              )}
              <LeadChoiceButtons
                className="md:col-span-2"
                legend="Average monthly electricity bill"
                name="monthly_bill_band"
                options={BILL_CHOICES}
                value={billChoice}
                columns="grid-cols-2 sm:grid-cols-4"
                error={fieldErrors.bill}
                firstRef={(node) => {
                  fieldRefs.current.bill = node;
                }}
                onChange={chooseBill}
              />
              {underGate ? (
                <LeadGateNotice kind="under_250" className="md:col-span-2" onChangeAnswer={() => setBillChoice('')} returnFocusTo={() => fieldRefs.current.bill} />
              ) : (
                <p className="text-xs text-muted-foreground md:col-span-2">
                  No contact details on this step. Nothing is sent until you
                  submit the second step.
                </p>
              )}
            </fieldset>
          ) : (
            <>
              {inputs.utility && isBillBandId(billChoice) && (
                <p className="flex flex-wrap items-center gap-x-2 rounded-lg bg-white px-3 py-1 text-sm text-foreground">
                  <span>
                    Utility: <strong>{utilityLabelFor(inputs.utility, utilityOther)}</strong>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    Bill: <strong>{billBandLabel(billChoice)}</strong>
                  </span>
                  {!pending && (
                    <>
                      <span aria-hidden="true">·</span>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => {
                          setError('');
                          setFieldErrors({});
                          setStep(1);
                        }}
                        aria-label="Edit utility and bill"
                        className="inline-flex min-h-[44px] items-center px-1 font-semibold text-primary underline disabled:opacity-50"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </p>
              )}
              <fieldset
                disabled={busy || pending}
                className="grid min-w-0 gap-4 md:grid-cols-2"
              >
                <LeadChoiceButtons
                  className="md:col-span-2"
                  legend="Do you own this home?"
                  name="homeowner"
                  options={[
                    { id: 'yes', label: 'Yes' },
                    { id: 'no', label: 'No' },
                  ]}
                  value={homeowner}
                  error={fieldErrors.homeowner}
                  firstRef={(node) => {
                    fieldRefs.current.homeowner = node;
                  }}
                  onChange={(id) => chooseHomeowner(id as 'yes' | 'no')}
                />
                {renter ? (
                  <LeadGateNotice kind="renter" className="md:col-span-2" onChangeAnswer={() => setHomeowner('')} returnFocusTo={() => fieldRefs.current.homeowner} />
                ) : (
                  <>
                    <ProjectAddressFields
                      value={address}
                      onChange={setAddress}
                      formKind="solar_inquiry"
                      eager
                      disabled={busy || pending}
                      errors={{
                        street: fieldErrors.street,
                        unit: fieldErrors.unit,
                        city: fieldErrors.city,
                        zip: fieldErrors.zip,
                      }}
                      onClearError={(key: AddressField) => clearFieldError(key)}
                      registerField={(key, node) => {
                        fieldRefs.current[key] = node;
                      }}
                    />
                    <label className="text-sm font-medium">
                      Roughly how old is your roof?
                      <select
                        className={field}
                        value={roofAge}
                        onChange={(e) => setRoofAge(e.target.value)}
                      >
                        <option value="">Prefer not to say</option>
                        {ROOF_AGE_BANDS.map(([id, label]) => (
                          <option key={id} value={id}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <div className="min-w-0">
                      <label className="text-sm font-medium">
                        Name
                        <input
                          required
                          maxLength={160}
                          autoComplete="name"
                          autoCapitalize="words"
                          ref={(node) => {
                            fieldRefs.current.name = node;
                          }}
                          className={`${field} ${fieldErrors.name ? invalidField : ''}`}
                          value={contact.name}
                          aria-invalid={Boolean(fieldErrors.name) || undefined}
                          aria-describedby={describedBy('name')}
                          onChange={(e) => {
                            setContact({ ...contact, name: e.target.value });
                            clearFieldError('name');
                          }}
                        />
                      </label>
                      {fieldError('name')}
                    </div>
                    <div className="min-w-0">
                      <label className="text-sm font-medium">
                        Phone
                        <input
                          required
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          maxLength={20}
                          ref={(node) => {
                            fieldRefs.current.phone = node;
                          }}
                          className={`${field} ${fieldErrors.phone ? invalidField : ''}`}
                          value={contact.phone}
                          aria-invalid={Boolean(fieldErrors.phone) || undefined}
                          aria-describedby={errorId('phone')}
                          onChange={(e) => {
                            const phone = formatUsPhoneInput(e.target.value);
                            setContact({ ...contact, phone });
                            if (fieldErrors.phone && isValidUsPhone(phone)) clearFieldError('phone');
                          }}
                          onBlur={() => {
                            if (!contact.phone) return;
                            const message = usPhoneError(contact.phone);
                            setFieldErrors((current) =>
                              message ? { ...current, phone: message } : current,
                            );
                          }}
                        />
                      </label>
                      {/* One line, hint or error, so an error never moves the
                          consent checkbox out from under a tap. */}
                      <p
                        id={errorId('phone')}
                        className={`mt-1 text-xs ${fieldErrors.phone ? 'font-medium text-destructive' : 'text-muted-foreground'}`}
                      >
                        {fieldErrors.phone || US_PHONE_HINT}
                      </p>
                    </div>
                    <div className="min-w-0 md:col-span-2">
                      <label className="text-sm font-medium">
                        Email
                        <input
                          required
                          type="email"
                          maxLength={254}
                          autoComplete="email"
                          autoCapitalize="none"
                          spellCheck={false}
                          ref={(node) => {
                            fieldRefs.current.email = node;
                          }}
                          className={`${field} ${fieldErrors.email ? invalidField : ''}`}
                          value={contact.email}
                          aria-invalid={Boolean(fieldErrors.email) || undefined}
                          aria-describedby={describedBy('email')}
                          onChange={(e) => {
                            setContact({ ...contact, email: e.target.value });
                            clearFieldError('email');
                          }}
                        />
                      </label>
                      {fieldError('email')}
                    </div>
                    <div className="min-w-0 md:col-span-2">
                      <label className="flex items-start gap-3 text-sm">
                        <input
                          required
                          type="checkbox"
                          ref={(node) => {
                            fieldRefs.current.consent = node;
                          }}
                          className="mt-1 h-5 w-5 shrink-0"
                          checked={consent}
                          aria-invalid={Boolean(fieldErrors.consent) || undefined}
                          aria-describedby={describedBy('consent')}
                          onChange={(e) => {
                            setConsent(e.target.checked);
                            clearFieldError('consent');
                          }}
                        />
                        <span>
                          {CONSENT_TEXT} Read the{' '}
                          <a href="/privacy" className="underline">
                            privacy policy
                          </a>
                          .
                        </span>
                      </label>
                      {fieldError('consent')}
                    </div>
                  </>
                )}
              </fieldset>
            </>
          )}
          {error && (
            <p role="alert" className="text-sm font-medium text-destructive">
              {error}
            </p>
          )}
          {step === 1 ? (
            !underGate && (
              <button
                type="button"
                disabled={busy || pending}
                onClick={advance}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 sm:w-auto"
              >
                Continue
              </button>
            )
          ) : (
            !renter && (
              <button
                disabled={busy || (unitDeclined && !pending)}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 sm:w-auto"
              >
                {busy
                  ? 'Saving…'
                  : pending
                    ? 'Retry saved submission'
                    : copy.submitLabel}
              </button>
            )
          )}
          <p className="text-xs text-muted-foreground">
            Submitting does not guarantee a quote, savings, program funding or
            eligibility.
          </p>
        </form>
      )}
      <ReferralDisclosure className="mt-4" />
      {showTrustBlock && <TrustBlock id={`${sectionId}-trust`} />}
    </section>
  );
}
