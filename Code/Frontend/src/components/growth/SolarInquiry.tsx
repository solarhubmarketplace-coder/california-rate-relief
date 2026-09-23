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
import { isFiveDigitZip, isServiceMarket, serviceMarkets, type ServiceMarket } from '@/lib/service-market';
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
  formatBill,
  parseBill,
  quickStartFromEvent,
  sanitizeBillInput,
  takeQuickStart,
  utilityCodeFor,
  utilityLabelFor,
  type QuickStart,
} from '@/lib/quick-start';
import { InquiryReceived } from './InquiryReceived';
import { TrustBlock } from './TrustBlock';

const fieldBase =
  'w-full rounded-lg border border-input bg-white px-3 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring';
const field = `mt-1 ${fieldBase}`;
const invalidField = 'border-destructive';
const ATTEMPT_KEY = 'crr_review_submission_v1';

// Two steps, not one long form. Step 1 asks the utility and the monthly bill
// and no PII at all; step 2 asks where the project is, the two qualification
// questions and the contact details. The bill figure is both the smallest
// possible first ask and the qualification signal every one of the recorded
// leads carried, so it is the right thing to ask for first.
type FormStep = 1 | 2;

/** Where step-1 answers came from, reported as the prefill_source event param. */
type PrefillSource = 'none' | 'calculator' | 'quick_check';

type FieldKey = 'utility_provider' | 'bill_amount' | 'service_market' | 'zip' | 'homeowner' | 'phone';

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
  market = 'CA',
  variant,
  sourceTool,
  sectionId = 'solar-inquiry',
  heading,
  showTrustBlock = true,
}: {
  utility?: string;
  topic?: string;
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
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [homeowner, setHomeowner] = useState('');
  const [roofAge, setRoofAge] = useState('');
  const [serviceMarket, setServiceMarket] = useState<ServiceMarket | ''>(market);
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
  const errorId = (key: FieldKey) => `${uid}-${key}-error`;

  const pathname = usePathname() || '';
  const resolvedVariant: CtaVariant = variant
    ? variant
    : isCommercialIntentPath(pathname)
      ? 'commercial'
      : ctaVariantForPath(pathname);
  const copy = ctaCopyFor(resolvedVariant);

  // Funnel instrumentation. This component previously emitted generate_lead and
  // nothing else, so the 73% of organic clicks that land on a page carrying this
  // form had no measurable drop-off: a page could earn clicks and produce no
  // signal at all between "arrived" and "submitted". form_view is the denominator,
  // form_start the first interaction, and the two failure events separate
  // "wrong input" from "the request failed". Every event now also carries
  // cta_variant (which ask was made) and form_step (where the visitor was), and
  // form_step_complete marks clearing step 1 — the split the two-step form
  // exists to measure. No existing event was renamed or removed.
  // prefill_source (added 2026-09-22) says whether step 1 arrived pre-answered
  // from the calculator context or from a HeroQuickCheck handoff.
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewedRef = useRef(false);
  const startedRef = useRef(false);
  const prefillRef = useRef<PrefillSource>('none');
  const contextRef = useRef<Record<string, string>>({});
  contextRef.current = {
    form_kind: 'solar_inquiry',
    inquiry_topic: topic,
    service_market: serviceMarket || 'unset',
    cta_variant: resolvedVariant,
    form_step: String(step),
    form_layout: 'two_step_v1',
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
    // never fires (it needs a painted frame, so headless and background tabs
    // report nothing at all).
    markViewed();
    trackEvent('form_start', funnelContext());
  };

  // HeroQuickCheck handoff: step 1 is already answered, so open at step 2.
  // The form's own form_start/form_step_complete fire here (once, guarded),
  // tagged prefill_source=quick_check, which keeps the funnel monotonic.
  const applyQuickStart = (value: QuickStart) => {
    if (attempt.current) return; // A frozen attempt must not change.
    prefillRef.current = 'quick_check';
    setInputs((current) => ({ ...current, utility: value.utility, monthlyBill: value.monthlyBill }));
    setUtilityOther(value.utility === 'other' ? value.utilityOther : '');
    setError('');
    setFieldErrors({});
    markStarted();
    if (step === 1) trackEvent('form_step_complete', { ...funnelContext(), form_step: '1' });
    focusStepRef.current = true;
    setStep(2);
  };
  const applyQuickStartRef = useRef(applyQuickStart);
  applyQuickStartRef.current = applyQuickStart;

  useEffect(() => {
    captureFirstTouch();
    const context = readCalculatorContext();
    if (context) {
      prefillRef.current = 'calculator';
      setInputs(context);
    }
    const update = (event: Event) => {
      if (!attempt.current) {
        prefillRef.current = 'calculator';
        setInputs((event as CustomEvent<CalculatorContext>).detail);
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
        setInputs({
          utility: code,
          zip: q.service_zip || '',
          monthlyBill: String(q.calculator_monthly_bill ?? q.bill_amount ?? ''),
          annualKwh:
            q.calculator_annual_kwh == null
              ? ''
              : String(q.calculator_annual_kwh),
          systemKw:
            q.calculator_system_kw == null
              ? ''
              : String(q.calculator_system_kw),
          solarPrice:
            q.calculator_solar_only_price == null
              ? ''
              : String(q.calculator_solar_only_price),
          batteryPrice:
            q.calculator_battery_price == null
              ? ''
              : String(q.calculator_battery_price),
          annualBillAfter:
            q.calculator_annual_bill_after == null
              ? ''
              : String(q.calculator_annual_bill_after),
        });
        setContact({
          name: stored.payload.contact.name || '',
          phone: formatUsPhoneInput(stored.payload.contact.phone || ''),
          email: stored.payload.contact.email || '',
        });
        setHomeowner(q.homeowner ? 'yes' : 'no');
        if (typeof q.roof_age === 'string' && isRoofAgeBand(q.roof_age))
          setRoofAge(q.roof_age);
        if (isServiceMarket(q.service_market)) setServiceMarket(q.service_market);
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
  // HeroQuickCheck (or the URL hash) handles the scroll.
  useEffect(() => {
    if (!focusStepRef.current || step !== 2) return;
    focusStepRef.current = false;
    stepStatusRef.current?.focus({ preventScroll: true });
  }, [step]);

  // form_view — fires once the form actually enters the viewport, so "never
  // scrolled this far" stays distinguishable from "saw it and left".
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || viewedRef.current) continue;
          // Refs and a module import only, so this effect stays dependency-free
          // and the observer is never torn down and rebuilt on a re-render.
          viewedRef.current = true;
          trackEvent('form_view', { ...contextRef.current, prefill_source: prefillRef.current });
          observer.disconnect();
        }
      },
      // threshold 0, not a fraction: this section runs ~2,700px tall, so on a
      // phone viewport no meaningful fraction of it is ever on screen at once
      // and a fractional threshold would never fire. Any pixel visible counts
      // as "the visitor reached the form".
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const showFieldErrors = (errors: Partial<Record<FieldKey, string>>, first: FieldKey) => {
    setFieldErrors(errors);
    fieldRefs.current[first]?.focus();
  };
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

  const advance = () => {
    markStarted();
    // "Other / not sure" is a complete answer; the name box is optional.
    const utilityAnswer = inputs.utility;
    if (!utilityAnswer || parseBill(inputs.monthlyBill) === null) {
      const reason: FieldKey = !utilityAnswer ? 'utility_provider' : 'bill_amount';
      showFieldErrors(
        {
          ...(!utilityAnswer
            ? { utility_provider: 'Choose the utility on your bill. Pick "Other / not sure" if yours is not listed.' }
            : {}),
          ...(parseBill(inputs.monthlyBill) === null
            ? { bill_amount: 'Enter your average monthly electricity bill in dollars, above zero.' }
            : {}),
        },
        reason,
      );
      trackEvent('form_validation_error', {
        ...funnelContext(),
        reason,
      });
      return;
    }
    setError('');
    setFieldErrors({});
    trackEvent('form_step_complete', funnelContext());
    setStep(2);
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
    if (!attempt.current) {
      const errors: Partial<Record<FieldKey, string>> = {};
      if (!serviceMarket) errors.service_market = 'Select the state or district where the project is.';
      if (!isFiveDigitZip(inputs.zip)) errors.zip = 'Enter the 5-digit ZIP code for the project.';
      if (!homeowner) errors.homeowner = 'Answer whether you own this home.';
      if (!(Number(inputs.monthlyBill) > 0))
        errors.bill_amount = 'Enter a monthly electricity bill above zero. Use Edit to change it.';
      const phoneMessage = usPhoneError(contact.phone);
      if (phoneMessage) errors.phone = phoneMessage;
      // Same reason precedence as before; phone is new and comes last.
      const order: FieldKey[] = ['service_market', 'zip', 'homeowner', 'bill_amount', 'phone'];
      const first = order.find((key) => errors[key]);
      if (first) {
        showFieldErrors(errors, first);
        trackEvent('form_validation_error', {
          ...funnelContext(),
          reason: first,
        });
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
        const calc = calculateSolarScenario({
          monthlyBill: Number(inputs.monthlyBill),
          annualKwh: optional(inputs.annualKwh),
          systemKw: optional(inputs.systemKw),
          solarPrice: optional(inputs.solarPrice),
          batteryPrice: optional(inputs.batteryPrice),
          annualBillAfter: optional(inputs.annualBillAfter),
        });
        return {
          submission_id: id,
          segment: 'residential',
          contact: {
            name: contact.name,
            // The backend normalizes every phone to E.164 (intake.controller
            // normalizePhone), so sending E.164 stores exactly the same value.
            phone: toE164Us(contact.phone) ?? contact.phone,
            email: contact.email,
          },
          qualification_data: {
            homeowner: homeowner === 'yes',
            // Both new qualification answers are nullable by design: the column
            // may not exist yet in every environment, and an unanswered band is
            // more useful than a manufactured one.
            roof_age: roofAge || null,
            // "Other / not sure" with no name typed sends 'other', which the
            // backend stores as its canonical 'Other'.
            utility_provider:
              inputs.utility === 'other' ? utilityOther.trim() || 'other' : inputs.utility,
            service_zip: inputs.zip,
            service_market: serviceMarket,
            territory_resolution: 'visitor_selected_zip_validated',
            bill_amount: Number(inputs.monthlyBill),
            credit_score: 'unsure',
            inquiry_topic: topic,
            source_tool: sourceTool || null,
            calculator_version: 'quote-input-v2',
            calculator_monthly_bill: Number(inputs.monthlyBill),
            calculator_annual_kwh: optional(inputs.annualKwh) ?? null,
            calculator_system_kw: optional(inputs.systemKw) ?? null,
            calculator_solar_only_price: optional(inputs.solarPrice) ?? null,
            calculator_battery_price: optional(inputs.batteryPrice) ?? null,
            calculator_cash_price: calc.cashPrice,
            calculator_annual_bill_after:
              optional(inputs.annualBillAfter) ?? null,
            calculator_annual_difference: calc.annualDifference,
            calculator_simple_payback: calc.simplePayback,
          },
          attribution: {
            ...baseAttribution,
            // utm_content is already carried through the whole intake contract,
            // so a tool-sourced submission is attributable end to end without a
            // schema change or a second ingest path. A real campaign value is
            // never overwritten: an inbound utm_content wins, and the marker in
            // qualification_data.source_tool is the one that always survives.
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
      if (!result.data.duplicate)
        trackEvent('generate_lead', {
          ...funnelContext(),
          segment: 'residential',
          landing_page:
            attempt.current.payload.attribution.landing_page || 'unknown',
        });
      try {
        sessionStorage.removeItem(ATTEMPT_KEY);
      } catch {
        /* A replay is deduplicated by the API. */
      }
      attempt.current = null;
      setPending(false);
    } catch (cause) {
      // HTTP 400 is validation before storage. Allow correction; retain the frozen
      // attempt on timeout/5xx/409 because persistence may already have happened.
      if ((cause as { statusCode?: number })?.statusCode === 400) {
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
        status_code: String(
          (cause as { statusCode?: number })?.statusCode ?? 0,
        ),
        retained_attempt: attempt.current ? 'yes' : 'no',
      });
      setError(
        cause instanceof Error
          ? cause.message
          : 'Submission was not confirmed. Retry the same information.',
      );
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  };
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
              <div className="min-w-0">
                {/* Label kept outside the $ adornment so its accessible name
                    stays exactly "Average monthly electricity bill ($)". */}
                <label htmlFor={`${uid}-bill`} className="text-sm font-medium">
                  Average monthly electricity bill ($)
                </label>
                <div className="relative mt-1">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground"
                  >
                    $
                  </span>
                  <input
                    id={`${uid}-bill`}
                    aria-required="true"
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    enterKeyHint="next"
                    ref={(node) => {
                      fieldRefs.current.bill_amount = node;
                    }}
                    className={`${fieldBase} pl-7 ${fieldErrors.bill_amount ? invalidField : ''}`}
                    value={inputs.monthlyBill}
                    aria-invalid={Boolean(fieldErrors.bill_amount) || undefined}
                    aria-describedby={describedBy('bill_amount')}
                    onChange={(e) => {
                      setInputs({ ...inputs, monthlyBill: sanitizeBillInput(e.target.value) });
                      clearFieldError('bill_amount');
                    }}
                  />
                </div>
                {fieldError('bill_amount')}
              </div>
              <p className="text-xs text-muted-foreground md:col-span-2">
                No contact details on this step. Nothing is sent until you
                submit the second step.
              </p>
            </fieldset>
          ) : (
            <>
              {inputs.utility && Number(inputs.monthlyBill) > 0 && (
                <p className="flex flex-wrap items-center gap-x-2 rounded-lg bg-white px-3 py-1 text-sm text-foreground">
                  <span>
                    Utility: <strong>{utilityLabelFor(inputs.utility, utilityOther)}</strong>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    Bill: <strong>{formatBill(inputs.monthlyBill)}</strong>
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
              {fieldError('bill_amount')}
              <fieldset
                disabled={busy || pending}
                className="grid min-w-0 gap-4 md:grid-cols-2"
              >
                <div className="min-w-0">
                  <label className="text-sm font-medium">
                    Project state or district
                    <select
                      required
                      ref={(node) => {
                        fieldRefs.current.service_market = node;
                      }}
                      className={`${field} ${fieldErrors.service_market ? invalidField : ''}`}
                      value={serviceMarket}
                      aria-invalid={Boolean(fieldErrors.service_market) || undefined}
                      aria-describedby={describedBy('service_market')}
                      onChange={(e) => {
                        setServiceMarket(e.target.value as ServiceMarket);
                        clearFieldError('service_market');
                      }}
                    >
                      <option value="">Select project market</option>
                      {serviceMarkets.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
                    </select>
                  </label>
                  {fieldError('service_market')}
                </div>
                <div className="min-w-0">
                  <label className="text-sm font-medium">
                    Project ZIP
                    <input
                      required
                      inputMode="numeric"
                      pattern="[0-9]{5}"
                      autoComplete="postal-code"
                      ref={(node) => {
                        fieldRefs.current.zip = node;
                      }}
                      className={`${field} ${fieldErrors.zip ? invalidField : ''}`}
                      value={inputs.zip}
                      aria-invalid={Boolean(fieldErrors.zip) || undefined}
                      aria-describedby={describedBy('zip')}
                      onChange={(e) => {
                        setInputs({ ...inputs, zip: e.target.value.replace(/\D/g, '').slice(0, 5) });
                        clearFieldError('zip');
                      }}
                    />
                  </label>
                  {fieldError('zip')}
                </div>
                <fieldset className="min-w-0">
                  <legend className="text-sm font-medium">Do you own this home?</legend>
                  <div className="mt-1 grid grid-cols-2 gap-2">
                    {(
                      [
                        ['yes', 'Yes'],
                        ['no', 'No'],
                      ] as const
                    ).map(([value, label], index) => (
                      <label
                        key={value}
                        className={`flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 text-base font-medium focus-within:ring-2 focus-within:ring-ring ${
                          homeowner === value
                            ? 'border-primary bg-primary/10 text-primary'
                            : `${fieldErrors.homeowner ? invalidField : 'border-input'} bg-white text-foreground`
                        }`}
                      >
                        <input
                          required
                          type="radio"
                          name={`${uid}-homeowner`}
                          value={value}
                          checked={homeowner === value}
                          aria-describedby={describedBy('homeowner')}
                          ref={
                            index === 0
                              ? (node) => {
                                  fieldRefs.current.homeowner = node;
                                }
                              : undefined
                          }
                          onChange={() => {
                            setHomeowner(value);
                            clearFieldError('homeowner');
                          }}
                          className="h-4 w-4 accent-primary"
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                  {fieldError('homeowner')}
                </fieldset>
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
                <label className="text-sm font-medium">
                  Name
                  <input
                    required
                    maxLength={160}
                    autoComplete="name"
                    autoCapitalize="words"
                    className={field}
                    value={contact.name}
                    onChange={(e) =>
                      setContact({ ...contact, name: e.target.value })
                    }
                  />
                </label>
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
                  {/* One line, hint or error, so a blur-time error never
                      moves the consent checkbox out from under a tap. */}
                  <p
                    id={errorId('phone')}
                    className={`mt-1 text-xs ${fieldErrors.phone ? 'font-medium text-destructive' : 'text-muted-foreground'}`}
                  >
                    {fieldErrors.phone || US_PHONE_HINT}
                  </p>
                </div>
                <label className="text-sm font-medium md:col-span-2">
                  Email {sourceTool ? '(for the comparison)' : '(optional)'}
                  <input
                    required={Boolean(sourceTool)}
                    type="email"
                    maxLength={254}
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    className={field}
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                  />
                </label>
                <label className="flex items-start gap-3 text-sm md:col-span-2">
                  <input
                    required
                    type="checkbox"
                    className="mt-1 h-5 w-5 shrink-0"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <span>
                    I agree that California Rate Relief may contact me about this
                    inquiry and share my project details with a solar provider for
                    follow-up. Read the{' '}
                    <a href="/privacy" className="underline">
                      privacy policy
                    </a>
                    .
                  </span>
                </label>
              </fieldset>
            </>
          )}
          {error && (
            <p role="alert" className="text-sm font-medium text-destructive">
              {error}
            </p>
          )}
          {step === 1 ? (
            <button
              type="button"
              disabled={busy || pending}
              onClick={advance}
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 sm:w-auto"
            >
              Continue
            </button>
          ) : (
            <button
              disabled={busy}
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 sm:w-auto"
            >
              {busy
                ? 'Saving…'
                : pending
                  ? 'Retry saved submission'
                  : copy.submitLabel}
            </button>
          )}
          <p className="text-xs text-muted-foreground">
            Submitting does not guarantee a quote, savings, program funding or
            eligibility.
          </p>
        </form>
      )}
      {showTrustBlock && <TrustBlock id={`${sectionId}-trust`} />}
    </section>
  );
}
