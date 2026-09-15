'use client';

import { useEffect, useRef, useState } from 'react';
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

const field =
  'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600';
const ATTEMPT_KEY = 'crr_review_submission_v1';
export function SolarInquiry({
  utility = '',
  topic = 'Solar comparison',
  market = 'CA',
}: {
  utility?: string;
  topic?: string;
  market?: ServiceMarket;
}) {
  const [inputs, setInputs] = useState<CalculatorContext>({
    utility,
    zip: '',
    monthlyBill: '',
  });
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [homeowner, setHomeowner] = useState('yes');
  const [serviceMarket, setServiceMarket] = useState<ServiceMarket | ''>(market);
  const [utilityOther, setUtilityOther] = useState('');
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState('');
  const [pending, setPending] = useState(false);
  const attempt = useRef<{ id: string; payload: IntakePayload } | null>(null);
  const inFlight = useRef(false);

  // Funnel instrumentation. This component previously emitted generate_lead and
  // nothing else, so the 73% of organic clicks that land on a page carrying this
  // form had no measurable drop-off: a page could earn clicks and produce no
  // signal at all between "arrived" and "submitted". form_view is the denominator,
  // form_start the first interaction, and the two failure events separate
  // "wrong input" from "the request failed".
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewedRef = useRef(false);
  const startedRef = useRef(false);
  const contextRef = useRef<Record<string, string>>({});
  contextRef.current = {
    form_kind: 'solar_inquiry',
    inquiry_topic: topic,
    service_market: serviceMarket || 'unset',
  };
  const funnelContext = () => contextRef.current;
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
  useEffect(() => {
    captureFirstTouch();
    const context = readCalculatorContext();
    if (context) setInputs(context);
    const update = (event: Event) => {
      if (!attempt.current)
        setInputs((event as CustomEvent<CalculatorContext>).detail);
    };
    window.addEventListener('crr-calculator-context', update);
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
        const q = stored.payload.qualification_data;
        const code =
          utilityOptions.find(
            ([id, label]) =>
              id === String(q.utility_provider).toLowerCase() ||
              label === q.utility_provider,
          )?.[0] || 'other';
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
          phone: stored.payload.contact.phone || '',
          email: stored.payload.contact.email || '',
        });
        setHomeowner(q.homeowner ? 'yes' : 'no');
        if (isServiceMarket(q.service_market)) setServiceMarket(q.service_market);
        setConsent(stored.payload.consent?.status === 'opted_in');
      }
    } catch {
      /* Storage is optional; the in-memory attempt still supports retries. */
    }
    return () => window.removeEventListener('crr-calculator-context', update);
  }, []);

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
          trackEvent('form_view', contextRef.current);
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

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (inFlight.current) return;
    markStarted();
    if (
      !attempt.current &&
      (!serviceMarket || !isFiveDigitZip(inputs.zip) || Number(inputs.monthlyBill) <= 0)
    ) {
      setError(
        'Select the project market, enter a 5-digit ZIP, and enter a monthly electricity bill above zero.',
      );
      trackEvent('form_validation_error', {
        ...funnelContext(),
        reason: !serviceMarket
          ? 'service_market'
          : !isFiveDigitZip(inputs.zip)
            ? 'zip'
            : 'bill_amount',
      });
      return;
    }
    inFlight.current = true;
    setBusy(true);
    setError('');
    trackEvent('form_submit_attempt', funnelContext());
    try {
      const optional = (value?: string) =>
        value?.trim() ? Number(value) : undefined;
      attempt.current = getOrCreateSubmissionAttempt(attempt.current, (id) => {
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
          contact,
          qualification_data: {
            homeowner: homeowner === 'yes',
            utility_provider: inputs.utility === 'other' ? utilityOther : inputs.utility,
            service_zip: inputs.zip,
            service_market: serviceMarket,
            territory_resolution: 'visitor_selected_zip_validated',
            bill_amount: Number(inputs.monthlyBill),
            credit_score: 'unsure',
            inquiry_topic: topic,
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
          attribution: intakeAttribution(captureFirstTouch()),
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
      id="solar-inquiry"
      className="my-10 scroll-mt-24 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 md:p-8"
    >
      <h2 className="text-2xl font-bold text-slate-900">
        Want to discuss your solar options?
      </h2>
      <p className="mt-2 text-slate-700">
        Send your project details to California Rate Relief. We collect the
        information for a solar referral; the provider confirms availability,
        design and price. The calculator and checklist are yours to use without
        submitting.
      </p>
      {saved ? (
        <div role="status" className="mt-5 rounded-lg bg-white p-5">
          <p className="font-semibold">Your inquiry is saved.</p>
          <p className="mt-2 text-sm">
            Keep this reference for follow-up:{' '}
            <span className="break-all">{saved}</span>.
          </p>
        </div>
      ) : (
        <form
          onSubmit={submit}
          onFocusCapture={markStarted}
          className="mt-6 space-y-4"
        >
          {pending && (
            <p role="status" className="rounded-lg bg-amber-50 p-3 text-sm">
              A submission is awaiting confirmation. Retry sends the same saved
              information and reference. Your browser tab keeps this attempt
              until it is confirmed.
            </p>
          )}
          <fieldset
            disabled={busy || pending}
            className="grid min-w-0 gap-4 md:grid-cols-2"
          >
            <label className="text-sm font-medium">
              Utility on your bill
              <select
                required
                className={field}
                value={inputs.utility}
                onChange={(e) =>
                  setInputs({ ...inputs, utility: e.target.value })
                }
              >
                <option value="">Choose utility</option>
                {utilityOptions.map(([id, label]) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            {inputs.utility === 'other' && (
              <label className="text-sm font-medium">
                Utility company on your bill
                <input required maxLength={120} className={field} value={utilityOther} onChange={(e) => setUtilityOther(e.target.value)} />
              </label>
            )}
            <label className="text-sm font-medium">
              Project state or district
              <select required className={field} value={serviceMarket} onChange={(e) => setServiceMarket(e.target.value as ServiceMarket)}>
                <option value="">Select project market</option>
                {serviceMarkets.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
              </select>
            </label>
            <label className="text-sm font-medium">
              Project ZIP
              <input
                required
                inputMode="numeric"
                pattern="[0-9]{5}"
                maxLength={5}
                autoComplete="postal-code"
                className={field}
                value={inputs.zip}
                onChange={(e) => setInputs({ ...inputs, zip: e.target.value })}
              />
            </label>
            <label className="text-sm font-medium">
              Average monthly electricity bill ($)
              <input
                required
                type="number"
                min="1"
                max="100000"
                step="any"
                className={field}
                value={inputs.monthlyBill}
                onChange={(e) =>
                  setInputs({ ...inputs, monthlyBill: e.target.value })
                }
              />
            </label>
            <label className="text-sm font-medium">
              Do you own the property?
              <select
                className={field}
                value={homeowner}
                onChange={(e) => setHomeowner(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="text-sm font-medium">
              Name
              <input
                required
                maxLength={160}
                autoComplete="name"
                className={field}
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
              />
            </label>
            <label className="text-sm font-medium">
              Phone
              <input
                required
                type="tel"
                autoComplete="tel"
                className={field}
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
              />
            </label>
            <label className="text-sm font-medium md:col-span-2">
              Email (optional)
              <input
                type="email"
                maxLength={254}
                autoComplete="email"
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
          {error && (
            <p role="alert" className="text-sm font-medium text-red-800">
              {error}
            </p>
          )}
          <button
            disabled={busy}
            className="rounded-lg bg-emerald-800 px-6 py-3 font-semibold text-white disabled:opacity-50"
          >
            {busy
              ? 'Saving…'
              : pending
                ? 'Retry saved submission'
                : 'Send my inquiry'}
          </button>
          <p className="text-xs text-slate-600">
            Submitting does not guarantee a quote, savings, program funding or
            eligibility.
          </p>
        </form>
      )}
    </section>
  );
}
