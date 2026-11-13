'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '@/components/GoogleAnalyticsClient';
import {
  readCalculatorContext,
  saveCalculatorContext,
  utilityOptions,
} from '@/lib/calculator-context';
import { QUICK_CHECK_COPY as COPY, ctaVariantForPath } from '@/lib/cta-intent';
import { isCommercialIntentPath } from '@/lib/intake-routing';
import {
  DEFAULT_QUICK_CHECK_TARGET,
  QUICK_START_SOURCE,
  announceQuickStart,
  billBracketParam,
  calculatorContextWithQuickCheck,
  parseBill,
  quickCheckTargetForm,
  quickStartHref,
  resolveQuickCheckHandoff,
  storeQuickStart,
  utilityCodeFor,
  validateQuickCheck,
  type QuickCheckField,
  type QuickStart,
} from '@/lib/quick-start';
import { BILL_CHOICES, UNDER_250_ID, billChoiceForAmount, isBillBandId } from '@/lib/lead-contract';
import { useLeadGates } from '@/lib/lead-gates';
import { LeadChoiceButtons } from './LeadChoiceButtons';
import { LeadGateNotice } from './LeadGateNotice';
import { ReferralDisclosure } from '@/components/shared/ReferralDisclosure';

export interface HeroQuickCheckProps {
  /** Inquiry topic for analytics (the full form keeps its own topic prop). */
  topic?: string;
  /** Preselected utility: a code ('pge') or a label ('PG&E'). */
  utility?: string;
  /** id of the full form on this page. Default 'solar-inquiry'; home uses 'qualify'. */
  targetId?: string;
  /** Overrides QUICK_CHECK_COPY.heading. */
  heading?: string;
  className?: string;
  /** Tighter padding and no intro line, for a busy hero. */
  compact?: boolean;
}

/**
 * Bill-first first step for a page hero. Two answers (utility, average monthly
 * bill as a band button), no contact details, nothing sent to the backend.
 * "Under $250" screens the visitor out here (residential lead contract,
 * 12 Nov 2026): a notice replaces Continue and nothing is handed on. On Continue it hands
 * the answers to the page's full form (see src/lib/quick-start.ts) and brings
 * the visitor to it: a scroll when the form is on this page, otherwise a
 * navigation to intakeHrefForPath(pathname) carrying the answers.
 *
 * The receiving form fires its own form_start (or wizard_start) when it
 * applies the handoff; its started-guard keeps that to one per visit, so this
 * component does not fire it and cannot double-count it.
 */
export function HeroQuickCheck({
  topic,
  utility,
  targetId = DEFAULT_QUICK_CHECK_TARGET,
  heading,
  className = '',
  compact = false,
}: HeroQuickCheckProps) {
  const uid = useId();
  const ids = {
    heading: `${uid}-heading`,
    utility: `${uid}-utility`,
    utilityError: `${uid}-utility-error`,
    other: `${uid}-utility-other`,
  };
  const pathname = usePathname() || '/';
  const router = useRouter();
  const [utilityValue, setUtilityValue] = useState<string>(() => utilityCodeFor(utility));
  const [utilityOther, setUtilityOther] = useState('');
  const [billChoice, setBillChoice] = useState('');
  const [invalid, setInvalid] = useState<QuickCheckField[]>([]);
  const navigating = useRef(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const utilityRef = useRef<HTMLSelectElement | null>(null);
  const billRef = useRef<HTMLElement | null>(null);
  const trackGate = useLeadGates('quick_check');

  const variant = isCommercialIntentPath(pathname) ? 'commercial' : ctaVariantForPath(pathname);
  const baseParams = () => ({
    form_kind: 'quick_check',
    cta_variant: variant,
    inquiry_topic: topic || 'unset',
    target_id: targetId,
  });
  const paramsRef = useRef(baseParams());
  paramsRef.current = baseParams();

  // Answers already given in this tab (calculator or an earlier quick check).
  useEffect(() => {
    const saved = readCalculatorContext();
    if (!saved) return;
    if (!utilityCodeFor(utility) && saved.utility) setUtilityValue(saved.utility);
    // A calculator bill preselects its band; never "Under $250".
    const amount = parseBill(saved.monthlyBill);
    const band = amount === null ? null : billChoiceForAmount(amount);
    if (isBillBandId(band)) setBillChoice(band);
  }, [utility]);

  // quick_check_view: the denominator for quick_check_submit.
  useEffect(() => {
    const node = formRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        trackEvent('quick_check_view', paramsRef.current);
        observer.disconnect();
      },
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clear = (field: QuickCheckField) =>
    setInvalid((current) => current.filter((item) => item !== field));

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (navigating.current) return;
    if (billChoice === UNDER_250_ID) return; // screened out; the notice is showing
    const result = validateQuickCheck({ utility: utilityValue, utilityOther, billChoice });
    // Compared with === (not !result.ok): the repo compiles without
    // strictNullChecks, which truthiness narrowing on a union needs.
    if (result.ok === false) {
      setInvalid(result.invalid);
      trackEvent('quick_check_validation_error', { ...paramsRef.current, reason: result.invalid[0] });
      (result.invalid[0] === 'utility' ? utilityRef : billRef).current?.focus();
      return;
    }
    setInvalid([]);

    const handoff = resolveQuickCheckHandoff(pathname, targetId, (id) =>
      Boolean(document.getElementById(id)),
    );
    const quickStart: QuickStart = {
      source: QUICK_START_SOURCE,
      targetId: handoff.targetId,
      utility: result.utility,
      utilityOther: result.utilityOther,
      billChoice: result.billChoice,
      topic: topic || '',
      fromPath: pathname,
      issuedAt: Date.now(),
    };

    // 1. The existing calculator context: every form and calculator that
    //    already reads it (on this page or the next) gets the answers.
    saveCalculatorContext(calculatorContextWithQuickCheck(readCalculatorContext(), result));

    trackEvent('quick_check_submit', {
      ...paramsRef.current,
      target_id: handoff.targetId || 'none',
      target_form: quickCheckTargetForm(handoff),
      handoff: handoff.mode,
      utility_provider: result.utility,
      bill_bracket: billBracketParam(result.billChoice),
    });

    // 2. The quick-start signal, addressed to one form.
    if (handoff.mode === 'scroll') {
      announceQuickStart(quickStart);
      const node = document.getElementById(handoff.targetId);
      const reduceMotion =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      // Next frame: the form has switched steps, so the scroll lands on the
      // layout the visitor will actually see.
      requestAnimationFrame(() =>
        node?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }),
      );
      return;
    }
    navigating.current = true;
    const stored = storeQuickStart(quickStart);
    router.push(stored ? handoff.href : quickStartHref(handoff.href, quickStart));
    // Allow a second try if the navigation did not happen (same-URL push).
    window.setTimeout(() => {
      navigating.current = false;
    }, 3000);
  };

  const fieldClass = (bad: boolean) =>
    `mt-1 h-12 w-full rounded-lg border bg-card px-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
      bad ? 'border-destructive' : 'border-input'
    }`;
  const utilityInvalid = invalid.includes('utility');
  const billInvalid = invalid.includes('bill');

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-labelledby={ids.heading}
      className={`rounded-xl border border-border bg-card text-card-foreground shadow-sm ${
        compact ? 'p-4' : 'p-5 md:p-6'
      } ${className}`}
    >
      <h2 id={ids.heading} className="text-lg font-bold text-foreground md:text-xl">
        {heading ?? COPY.heading}
      </h2>
      {!compact && <p className="mt-1 text-sm text-muted-foreground">{COPY.intro}</p>}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor={ids.utility} className="block text-sm font-medium text-foreground">
            {COPY.utilityLabel}
          </label>
          <select
            id={ids.utility}
            ref={utilityRef}
            value={utilityValue}
            onChange={(e) => {
              setUtilityValue(e.target.value);
              clear('utility');
            }}
            aria-invalid={utilityInvalid || undefined}
            aria-describedby={utilityInvalid ? ids.utilityError : undefined}
            className={fieldClass(utilityInvalid)}
          >
            <option value="">{COPY.utilityPlaceholder}</option>
            {utilityOptions.map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
          {utilityInvalid && (
            <p id={ids.utilityError} className="mt-1 text-sm font-medium text-destructive">
              {COPY.utilityError}
            </p>
          )}
        </div>

        {/* Under the utility on a phone; full width after both on wider screens. */}
        {utilityValue === 'other' && (
          <div className="min-w-0 sm:order-last sm:col-span-2">
            <label htmlFor={ids.other} className="block text-sm font-medium text-foreground">
              {COPY.utilityOtherLabel}
            </label>
            <input
              id={ids.other}
              type="text"
              maxLength={120}
              autoComplete="off"
              value={utilityOther}
              onChange={(e) => setUtilityOther(e.target.value)}
              className={fieldClass(false)}
            />
          </div>
        )}
      </div>

      <LeadChoiceButtons
        className="mt-4"
        legend={COPY.billLabel}
        name="monthly_bill_band"
        options={BILL_CHOICES}
        value={billChoice}
        columns="grid-cols-2 sm:grid-cols-4"
        error={billInvalid ? COPY.billError : undefined}
        firstRef={(node) => {
          billRef.current = node;
        }}
        onChange={(id) => {
          setBillChoice(id);
          clear('bill');
          if (id === UNDER_250_ID) trackGate('gate_under_250');
        }}
      />

      {billChoice === UNDER_250_ID ? (
        <LeadGateNotice kind="under_250" className="mt-4" onChangeAnswer={() => setBillChoice('')} />
      ) : (
        <button
          type="submit"
          className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
        >
          {COPY.action}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
      <ReferralDisclosure className="mt-3" />
    </form>
  );
}
