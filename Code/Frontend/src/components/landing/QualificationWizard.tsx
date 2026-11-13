'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ProgressBar } from './ProgressBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Home,
  CreditCard,
  Zap,
  DollarSign,
  User,
  Phone,
  Mail,
  Loader2,
  XCircle,
} from 'lucide-react';
import { trackEvent } from '@/components/GoogleAnalyticsClient';
import { captureFirstTouch, getFirstTouch } from '@/lib/attribution';
import {
  getOrCreateSubmissionAttempt,
  intakeAttribution,
  submitIntake,
  type IntakePayload,
} from '@/lib/intake';
import { derivedLocationFields } from '@/lib/ca-utility-by-zip';
import { isNewConfirmedSubmission } from '@/lib/submission-identity';
import { useToast } from '@/hooks/use-toast';
import { HOME_WIZARD_COPY, INQUIRY_RECEIVED_COPY } from '@/lib/cta-intent';
import { US_PHONE_HINT, formatUsPhoneInput, isValidUsPhone, toE164Us, usPhoneError } from '@/lib/phone';
import {
  HOME_WIZARD_TARGET,
  QUICK_START_EVENT,
  quickStartFromEvent,
  takeQuickStart,
  wizardUtilityFor,
  type QuickStart,
} from '@/lib/quick-start';
import {
  ADDRESS_REJECT_CODES,
  BILL_CHOICES,
  CONSENT_TEXT,
  LEAD_CONTRACT_VERSION,
  RENTER_COMMERCIAL_LINK,
  RENTER_MESSAGE,
  UNDER_250_ID,
  UNDER_250_LINK,
  UNDER_250_MESSAGE,
  billBandLabel,
  fieldForErrorCode,
  firstLeadError,
  isBillBandId,
  needsUnitQuestion,
  residentialLeadErrors,
  type LeadErrorCode,
  type LeadField,
} from '@/lib/lead-contract';
import { EMPTY_PROJECT_ADDRESS, addressLeadInput, type ProjectAddressState } from '@/lib/project-address';
import { HAS_PLACES_KEY } from '@/lib/use-places-address';
import { useLeadGates } from '@/lib/lead-gates';
import { InquiryReceived } from '@/components/growth/InquiryReceived';
import { ProjectAddressFields, type AddressField } from '@/components/growth/ProjectAddressFields';

type WizardStep = 1 | 2 | 3 | 4 | 5;

interface FormData {
  utilityProvider: string;
  utilityProviderOther: string;
  /** A bill band id, or 'under_250' (screens out). */
  billChoice: string;
  isHomeowner: boolean | null;
  creditScore: string;
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}

const utilityProviders = [
  {
    id: 'sce',
    label: 'SCE',
    sublabel: 'Southern California Edison',
    icon: '/img/1.png',
  },
  {
    id: 'pge',
    label: 'PG&E',
    sublabel: 'Pacific Gas & Electric',
    icon: '/img/2.png',
  },
  {
    id: 'sdge',
    label: 'SDG&E',
    sublabel: 'San Diego Gas & Electric',
    icon: '/img/3.png',
  },
  {
    id: 'mvu',
    label: 'MVU',
    sublabel: 'Moreno Valley Utility',
    icon: '/img/4.png',
  },
  {
    id: 'ladwp',
    label: 'LADWP',
    sublabel: 'Los Angeles DWP',
    icon: '/img/5.png',
  },
  {
    id: 'other',
    label: 'Other',
    sublabel: 'Different Provider',
    icon: null, // No icon for "Other"
  },
];

/** Contact-step fields that can carry an inline error (residential lead contract). */
type ContactField = Exclude<LeadField, 'bill' | 'homeowner'>;

const initialFormData: FormData = {
  utilityProvider: '',
  utilityProviderOther: '',
  billChoice: '',
  isHomeowner: null,
  creditScore: '',
  name: '',
  phone: '',
  email: '',
  consent: false,
};

const creditOptions = [
  { id: 'yes', label: 'Yes', sublabel: 'Above 650' },
  { id: 'no', label: 'No', sublabel: 'Below 650' },
  { id: 'unsure', label: "I'm Not Sure", sublabel: "We'll help verify" },
];

export function QualificationWizard({
  quickStartTargetId = HOME_WIZARD_TARGET,
}: {
  /** id of the element wrapping this wizard; HeroQuickCheck addresses it. */
  quickStartTargetId?: string;
} = {}) {
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisqualified, setIsDisqualified] = useState(false);
  // "Under $250" (residential lead contract, 12 Nov 2026): screened out, nothing sent.
  const [isUnderMinimum, setIsUnderMinimum] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasUnconfirmedAttempt, setHasUnconfirmedAttempt] = useState(false);
  const { toast } = useToast();
  const attemptRef = useRef<{ id: string; payload: IntakePayload } | null>(null);
  const trackedSuccessIdsRef = useRef(new Set<string>());
  const submitInFlightRef = useRef(false);
  const [savedReference, setSavedReference] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<ContactField, string>>>({});
  const fieldRefs = useRef<Partial<Record<ContactField, HTMLElement | null>>>({});
  // HeroQuickCheck handoff (see src/lib/quick-start.ts). prefill_source is a
  // new param on the wizard's existing events; the event names are unchanged.
  const prefillRef = useRef<'none' | 'quick_check'>('none');
  const stepHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const focusHeadingRef = useRef(false);
  const [address, setAddress] = useState<ProjectAddressState>(EMPTY_PROJECT_ADDRESS);
  const trackGate = useLeadGates('qualification_wizard');

  // Common form funnel (ported from 170a99c6, measurement only): form_view,
  // form_step_complete once per step, form_validation_error and
  // form_submit_attempt, beside the legacy wizard_* events.
  const wizardSectionRef = useRef<HTMLElement | null>(null);
  const viewedRef = useRef(false);
  const completedStepsRef = useRef(new Set<number>());
  const funnelContextRef = useRef<Record<string, string>>({});
  funnelContextRef.current = {
    form_kind: 'qualification_wizard',
    segment: 'residential',
    form_layout: 'home_wizard_v1',
    form_step: String(currentStep),
    prefill_source: prefillRef.current,
  };
  const funnelContext = () => ({ ...funnelContextRef.current, prefill_source: prefillRef.current });
  const markViewed = () => {
    if (viewedRef.current) return;
    viewedRef.current = true;
    trackEvent('form_view', funnelContext());
  };
  useEffect(() => {
    const node = wizardSectionRef.current;
    if (!node || isSuccess || isDisqualified || isUnderMinimum || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      if (!viewedRef.current) {
        viewedRef.current = true;
        trackEvent('form_view', { ...funnelContextRef.current });
      }
      observer.disconnect();
    }, { threshold: 0.1 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [isSuccess, isDisqualified, isUnderMinimum]);

  // Record the first page of the session so a lead can be credited to the page
  // that earned it rather than to whichever page hosts the wizard.
  useEffect(() => {
    captureFirstTouch();
  }, []);

  // wizard_start — fires once, the first time the visitor interacts. Without this
  // the funnel has no denominator and drop-off is invisible.
  const startedRef = useRef(false);
  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    markViewed();
    const ft = getFirstTouch();
    trackEvent('wizard_start', {
      ...funnelContext(),
      segment: 'residential',
      landing_page: ft?.landing_page ?? 'unknown',
      landing_page_type: ft?.landing_page_type ?? 'unknown',
      landing_city_slug: ft?.landing_city_slug ?? 'none',
      prefill_source: prefillRef.current,
    });
  };

  const recordStepCompletion = (step: number, source = prefillRef.current) => {
    // Preserve the legacy series, and count each answered step only once in
    // the common form funnel when a visitor goes Back and corrects an answer.
    trackEvent('wizard_step_completed', {
      step,
      landing_page_type: getFirstTouch()?.landing_page_type ?? 'unknown',
      prefill_source: source,
    });
    if (completedStepsRef.current.has(step)) return;
    completedStepsRef.current.add(step);
    trackEvent('form_step_complete', { ...funnelContext(), form_step: String(step), prefill_source: source });
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (
    field: keyof FormData,
    value: string | boolean | null
  ) => {
    if (hasUnconfirmedAttempt) {
      toast({
        title: 'Choose how to continue',
        description: 'Retry the same information, or start a new submission before editing.',
        variant: 'destructive',
      });
      return;
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    markStarted();
    if (currentStep < 5) {
      recordStepCompletion(currentStep);
      setCurrentStep((prev) => (prev + 1) as WizardStep);
    }
  };

  // HeroQuickCheck handoff: fill utility and bill, then skip the steps they
  // answer. The skipped steps are recorded as wizard_step_completed with
  // prefill_source=quick_check (they were answered, just not here), and
  // wizard_start fires through the usual once-only guard, so nothing is
  // double-counted and the step funnel stays monotonic.
  const applyQuickStart = (value: QuickStart) => {
    if (isSuccess || isDisqualified || isUnderMinimum || hasUnconfirmedAttempt || attemptRef.current) return;
    const utility = wizardUtilityFor(value);
    // A band skips the bill question; an older handoff without a usable band
    // (typed under $250, or unusable) opens step 2 with nothing selected.
    const band = isBillBandId(value.billChoice) ? value.billChoice : '';
    prefillRef.current = 'quick_check';
    setFormData((prev) => ({
      ...prev,
      utilityProvider: utility.utilityProvider,
      utilityProviderOther: utility.utilityProviderOther,
      billChoice: band,
    }));
    markStarted();
    const target: WizardStep = band ? (Math.max(currentStep, 3) as WizardStep) : 2;
    for (let step = currentStep; step < target; step++) {
      recordStepCompletion(step, 'quick_check');
    }
    focusHeadingRef.current = true;
    setCurrentStep(target);
  };
  const applyQuickStartRef = useRef(applyQuickStart);
  applyQuickStartRef.current = applyQuickStart;

  useEffect(() => {
    const onQuickStart = (event: Event) => {
      const value = quickStartFromEvent(event, quickStartTargetId);
      if (value) applyQuickStartRef.current(value);
    };
    window.addEventListener(QUICK_START_EVENT, onQuickStart);
    // Arrived from another page's quick check (sessionStorage or qc_* params).
    const handoff = takeQuickStart(quickStartTargetId);
    if (handoff) applyQuickStartRef.current(handoff);
    return () => window.removeEventListener(QUICK_START_EVENT, onQuickStart);
  }, [quickStartTargetId]);

  // After a handoff, move keyboard/screen-reader focus to the current question.
  useEffect(() => {
    if (!focusHeadingRef.current) return;
    focusHeadingRef.current = false;
    stepHeadingRef.current?.focus({ preventScroll: true });
  }, [currentStep]);

  const clearFieldError = (field: ContactField) =>
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  const fieldErrorId = (field: ContactField) => `wizard-${field}-error`;

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as WizardStep);
    }
  };

  const handleHomeownerSelect = (isOwner: boolean) => {
    updateFormData('isHomeowner', isOwner);
    if (!isOwner) {
      trackGate('gate_renter');
      setIsDisqualified(true);
    } else {
      nextStep();
    }
  };

  const handleBillSelect = (choice: string) => {
    updateFormData('billChoice', choice);
    if (choice === UNDER_250_ID) {
      markStarted();
      trackGate('gate_under_250');
      setIsUnderMinimum(true);
      return;
    }
    nextStep();
  };

  const handleSubmit = async () => {
    if (submitInFlightRef.current) return;

    // Inline errors next to the field, in page order, instead of a toast that
    // disappears. The first invalid field takes focus.
    if (!attemptRef.current) {
      const errors = residentialLeadErrors({
        billChoice: formData.billChoice || null,
        homeowner: formData.isHomeowner,
        ...addressLeadInput(address, HAS_PLACES_KEY),
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        consent: formData.consent,
      });
      const first = firstLeadError(errors);
      if (first) {
        // Bill and homeowner live on earlier steps.
        if (first.field === 'bill' || first.field === 'homeowner') {
          focusHeadingRef.current = true;
          setCurrentStep(first.field === 'bill' ? 2 : 3);
        } else {
          const shown: Partial<Record<ContactField, string>> = {};
          for (const [key, value] of Object.entries(errors)) {
            if (key !== 'bill' && key !== 'homeowner') shown[key as ContactField] = value.message;
          }
          setFieldErrors(shown);
          const field = first.field as ContactField;
          requestAnimationFrame(() => fieldRefs.current[field]?.focus());
        }
        trackEvent('wizard_validation_error', {
          reason: first.error.code,
          prefill_source: prefillRef.current,
        });
        trackEvent('form_validation_error', { ...funnelContext(), reason: first.error.code });
        if ((ADDRESS_REJECT_CODES as readonly LeadErrorCode[]).includes(first.error.code)) {
          trackGate('gate_address_rejected', first.error.code);
        }
        return;
      }
    }
    setFieldErrors({});

    submitInFlightRef.current = true;
    setIsSubmitting(true);
    markStarted();
    trackEvent('form_submit_attempt', funnelContext());
    const firstTouch = getFirstTouch();
    const needsUnit = needsUnitQuestion(address.street, address.placesUnitFlag);

    try {
      // E.164, exactly what the old normalizer produced for a US number and
      // what the backend's normalizePhone stores.
      const normalizedPhone = toE164Us(formData.phone) ?? formData.phone;
      // "Other" with no name typed sends 'other' (the backend's canonical 'Other').
      const utilityProvider =
        formData.utilityProvider === 'other' ? formData.utilityProviderOther.trim() || 'other' : formData.utilityProvider;

      // The ZIP-derived territory is recorded ALONGSIDE the visitor's own
      // utility answer, never on top of it: a disagreement is a review signal.
      const location = derivedLocationFields(address.zip, address.city, formData.utilityProvider);

      const attempt = getOrCreateSubmissionAttempt<IntakePayload>(attemptRef.current, submissionId => ({
        submission_id: submissionId,
        segment: 'residential',
        contact: {
          name: formData.name.trim(), phone: normalizedPhone,
          email: formData.email.trim(),
          // The API composes "street, City, CA ZIP" from the parts.
          street: address.street.trim(),
        },
        qualification_data: {
          lead_contract_version: LEAD_CONTRACT_VERSION,
          form_kind: 'qualification_wizard',
          homeowner: true,
          monthly_bill_band: formData.billChoice,
          utility_provider: utilityProvider,
          credit_score: formData.creditScore,
          ...location,
          city: address.city.trim(),
          service_zip: address.zip,
          service_market: 'CA',
          unit_flagged: needsUnit,
          unit_confirmed_detached: needsUnit ? true : null,
          address_source: address.source,
          places_status: address.placesStatus,
        },
        attribution: intakeAttribution(firstTouch),
        consent: { status: 'opted_in', timestamp: new Date().toISOString() },
      }));
      attemptRef.current = attempt;
      const result = await submitIntake(attempt.payload);
      const isNewSubmission = isNewConfirmedSubmission(result.data, attempt.id);

      // Standard GA4 lead event. Fire only after the API confirms creation and
      // never attach contact details or other personally identifying fields.
      if (isNewSubmission && !trackedSuccessIdsRef.current.has(attempt.id)) {
        trackEvent('generate_lead', {
          ...funnelContext(),
          segment: 'residential',
          landing_page: firstTouch?.landing_page ?? 'unknown',
          landing_page_type: firstTouch?.landing_page_type ?? 'unknown',
          landing_city_slug: firstTouch?.landing_city_slug ?? 'none',
          utility_provider: formData.utilityProvider || 'unknown',
          derived_utility: location.derived_utility ?? 'unknown',
          bill_bracket: formData.billChoice || 'unknown',
          bill_band: formData.billChoice || 'unknown',
          traffic_channel: firstTouch?.traffic_channel ?? 'unknown',
          unit_flagged: needsUnit ? 'yes' : 'no',
          address_source: address.source,
          prefill_source: prefillRef.current,
        });
        trackedSuccessIdsRef.current.add(attempt.id);
      }
      // The panel that replaces the form is the confirmation; a toast on top
      // of it would announce the same thing twice.
      setSavedReference(attempt.id);
      setIsSuccess(true);
      setHasUnconfirmedAttempt(false);
      attemptRef.current = null;
    } catch (error) {
      const status = (error as { statusCode?: number })?.statusCode;
      const code = (error as { code?: string })?.code;
      // Without this, a backend outage looks identical to "no traffic" in GA4.
      trackEvent('form_submit_error', {
        ...funnelContext(),
        status_code: String(status ?? 0),
        ...(code ? { reason: code } : {}),
        segment: 'residential',
        landing_page_type: firstTouch?.landing_page_type ?? 'unknown',
        landing_city_slug: firstTouch?.landing_city_slug ?? 'none',
      });
      // HTTP 400 is validation before storage: nothing was saved, so the
      // visitor corrects the field the API named instead of retrying.
      const field = status === 400 ? fieldForErrorCode(code) : null;
      if (status === 400) {
        attemptRef.current = null;
        setHasUnconfirmedAttempt(false);
        const message = error instanceof Error ? error.message : 'Check your answers and send again.';
        if (field === 'bill' || field === 'homeowner') {
          focusHeadingRef.current = true;
          setCurrentStep(field === 'bill' ? 2 : 3);
        } else if (field) {
          setFieldErrors({ [field]: message });
          requestAnimationFrame(() => fieldRefs.current[field as ContactField]?.focus());
          if ((ADDRESS_REJECT_CODES as readonly string[]).includes(code || '')) trackGate('gate_address_rejected', code);
        }
        toast({ title: 'Check your answers', description: message, variant: 'destructive' });
      } else {
        setHasUnconfirmedAttempt(true);
        toast({
          title: 'Submission Failed',
          description: 'Your information was not confirmed as received. Please try again.',
          variant: 'destructive',
        });
      }
    } finally {
      submitInFlightRef.current = false;
      setIsSubmitting(false);
    }
  };

  // Disqualification Screen (Renter)
  if (isDisqualified) {
    return (
      <section className='py-16 bg-muted'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto bg-card rounded-xl border border-border p-8 min-h-[650px] flex flex-col items-center justify-center'>
            <div className='text-center max-w-md'>
              <div className='w-16 h-16 bg-status-warning/10 rounded-full flex items-center justify-center mx-auto mb-6'>
                <XCircle className='h-8 w-8 text-status-warning' />
              </div>
              <h2 className='text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight'>
                Residential assessment requires property ownership
              </h2>
              <p className='text-muted-foreground mb-6'>
                {RENTER_MESSAGE} If you control a business or commercial
                property, use the commercial assessment instead.
              </p>
              <div className='bg-primary/5 rounded-lg p-4 mb-6 border border-primary/20'>
                <p className='text-sm text-primary'>
                  <a href={RENTER_COMMERCIAL_LINK.href} className='font-semibold underline'>
                    {RENTER_COMMERCIAL_LINK.label}
                  </a>
                </p>
              </div>
              <Button
                onClick={() => {
                  setIsDisqualified(false);
                  setCurrentStep(1);
                  setFormData(initialFormData);
                  setFieldErrors({});
                }}
                variant='outline'
                className='w-full'
              >
                Start Over
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Screen-out: average bill under $250 (residential lead contract). Nothing is sent.
  if (isUnderMinimum) {
    return (
      <section className='py-16 bg-muted'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto bg-card rounded-xl border border-border p-8 min-h-[650px] flex flex-col items-center justify-center'>
            <div className='text-center max-w-md'>
              <div className='w-16 h-16 bg-status-warning/10 rounded-full flex items-center justify-center mx-auto mb-6'>
                <XCircle className='h-8 w-8 text-status-warning' />
              </div>
              <h2 className='text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight'>
                Referrals start at a $250 monthly bill
              </h2>
              <p className='text-muted-foreground mb-6'>{UNDER_250_MESSAGE}</p>
              <div className='bg-primary/5 rounded-lg p-4 mb-6 border border-primary/20'>
                <p className='text-sm text-primary'>
                  <a href={UNDER_250_LINK.href} className='font-semibold underline'>
                    {UNDER_250_LINK.label}
                  </a>
                </p>
              </div>
              <Button
                onClick={() => {
                  setIsUnderMinimum(false);
                  setFormData((prev) => ({ ...prev, billChoice: '' }));
                  setCurrentStep(2);
                }}
                variant='outline'
                className='w-full'
              >
                Change my answer
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Success Screen: what was received, who may get in touch, no obligation,
  // two guides, and the reference. Display only; generate_lead fired above.
  if (isSuccess) {
    return (
      <section className='py-16 bg-muted'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl'>
            <InquiryReceived
              headingLevel='h2'
              reference={savedReference}
              received={INQUIRY_RECEIVED_COPY.wizardReceived}
              contact={INQUIRY_RECEIVED_COPY.wizardContact}
            />
          </div>
        </div>
      </section>
    );
  }

  const utilityLabel =
    formData.utilityProvider === 'other'
      ? formData.utilityProviderOther.trim() || 'Other'
      : utilityProviders.find((provider) => provider.id === formData.utilityProvider)?.label ?? '';
  const billLabel = billBandLabel(formData.billChoice) ?? '';
  const showSummary = prefillRef.current === 'quick_check' && currentStep > 1 && Boolean(utilityLabel);
  const unitDeclined = address.unitAnswer === 'no' && needsUnitQuestion(address.street, address.placesUnitFlag);

  return (
    <section ref={wizardSectionRef} onFocusCapture={markStarted} className='py-16 bg-muted'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-5xl'>
          {/* Card Container */}
          <div className='bg-card rounded-xl border border-border p-6 md:p-10 lg:p-12 min-h-[650px] relative'>
            {/* Back (44px tap target) and, after a quick-check handoff, the
                answers carried over so the visitor sees the continuity. */}
            {currentStep > 1 && (
              <div className='-mt-2 mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1'>
                <button
                  type='button'
                  onClick={prevStep}
                  className='-ml-2 inline-flex min-h-[44px] items-center rounded-md px-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                >
                  <ArrowLeft className='h-4 w-4 mr-2' aria-hidden='true' />
                  {HOME_WIZARD_COPY.back}
                </button>
                {showSummary && (
                  <p className='flex flex-wrap items-center gap-x-2 text-sm text-foreground'>
                    <span>
                      Utility: <strong>{utilityLabel}</strong>
                    </span>
                    {billLabel && (
                      <>
                        <span aria-hidden='true'>·</span>
                        <span>
                          Bill: <strong>{billLabel}</strong>
                        </span>
                      </>
                    )}
                    <span aria-hidden='true'>·</span>
                    <button
                      type='button'
                      onClick={() => setCurrentStep(1)}
                      aria-label='Edit utility and bill'
                      className='inline-flex min-h-[44px] items-center px-1 font-semibold text-primary underline'
                    >
                      {HOME_WIZARD_COPY.edit}
                    </button>
                  </p>
                )}
              </div>
            )}

            {/* Step 1: Utility Provider */}
            {currentStep === 1 && (
              <div className='space-y-6'>
                <div className='text-center mb-8'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Zap className='h-6 w-6 text-primary' />
                  </div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className='text-3xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight outline-none'>
                    Who is your current electric provider?
                  </h2>
                  <p className='text-base text-muted-foreground font-medium'>
                    Select the utility that supplies your property
                  </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                  {utilityProviders.map((provider) => (
                    <button
                      key={provider.id}
                      type='button'
                      aria-pressed={formData.utilityProvider === provider.id}
                      onClick={() => {
                        updateFormData('utilityProvider', provider.id);
                        nextStep();
                      }}
                      className={`p-6 rounded-xl border-2 transition-all duration-200 hover:border-primary hover:shadow-lg flex flex-col items-center justify-center aspect-square ${
                        formData.utilityProvider === provider.id
                          ? 'border-primary bg-primary/10 shadow-md'
                          : 'border-border bg-card hover:bg-muted/50'
                      }`}
                    >
                      {provider.icon ? (
                        <div className='relative w-full h-28 mb-10 flex items-center justify-center'>
                          <Image
                            src={provider.icon}
                            alt={provider.label}
                            width={140}
                            height={70}
                            className='object-contain max-h-[112px] max-w-[140px]'
                          />
                        </div>
                      ) : (
                        <div className='w-28 h-28 bg-muted rounded-lg flex items-center justify-center mb-10'>
                          <Zap className='h-14 w-14 text-muted-foreground' />
                        </div>
                      )}
                      <span className='text-base md:text-lg text-center text-foreground font-bold'>
                        {provider.sublabel}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Bill Amount */}
            {currentStep === 2 && (
              <div className='space-y-6'>
                <div className='text-center mb-8'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <DollarSign className='h-6 w-6 text-primary' />
                  </div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className='text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight outline-none'>
                    What is your average monthly bill?
                  </h2>
                  <p className='text-base text-muted-foreground font-medium'>
                    Choose the range closest to your typical bill
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-6 max-w-2xl mx-auto'>
                  {BILL_CHOICES.map((amount) => (
                    <button
                      key={amount.id}
                      type='button'
                      aria-pressed={formData.billChoice === amount.id}
                      onClick={() => handleBillSelect(amount.id)}
                      className={`p-8 rounded-xl border-2 text-center font-bold text-xl md:text-2xl transition-all duration-200 min-h-[120px] flex items-center justify-center ${
                        formData.billChoice === amount.id
                          ? 'border-primary bg-primary/10 text-primary shadow-lg scale-105'
                          : 'border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted/50 hover:shadow-md'
                      }`}
                    >
                      {amount.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Homeowner Status */}
            {currentStep === 3 && (
              <div className='space-y-6'>
                <div className='text-center mb-8'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Home className='h-6 w-6 text-primary' />
                  </div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className='text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight outline-none'>
                    Do you own your home?
                  </h2>
                  <p className='text-base text-muted-foreground font-medium'>
                    This residential assessment is for property owners
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-6 max-w-2xl mx-auto'>
                  <button
                    type='button'
                    onClick={() => handleHomeownerSelect(true)}
                    className='p-6 rounded-xl border-2 border-border bg-card hover:border-status-success hover:bg-status-success/5 transition-all duration-200'
                  >
                    <CheckCircle className='h-10 w-10 text-status-success mx-auto mb-3' />
                    <span className='block font-bold text-foreground'>
                      Yes, I own it
                    </span>
                  </button>
                  <button
                    type='button'
                    onClick={() => handleHomeownerSelect(false)}
                    className='p-6 rounded-xl border-2 border-border bg-card hover:border-muted-foreground/50 transition-all duration-200'
                  >
                    <XCircle className='h-10 w-10 text-muted-foreground mx-auto mb-3' />
                    <span className='block font-bold text-foreground'>
                      No, I rent
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Credit Score */}
            {currentStep === 4 && (
              <div className='space-y-6'>
                <div className='text-center mb-8'>
                  <div className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <CreditCard className='h-7 w-7 text-primary' />
                  </div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className='text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight outline-none'>
                    Is your credit score above 650?
                  </h2>
                  <p className='text-base text-muted-foreground font-medium'>
                    This helps a provider understand potential financing options
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
                  {creditOptions.map((option) => (
                    <button
                      key={option.id}
                      type='button'
                      aria-pressed={formData.creditScore === option.id}
                      onClick={() => {
                        updateFormData('creditScore', option.id);
                        nextStep();
                      }}
                      className={`p-8 rounded-xl border-2 text-center transition-all duration-200 min-h-[140px] flex flex-col items-center justify-center ${
                        formData.creditScore === option.id
                          ? 'border-primary bg-primary/10 text-primary shadow-lg scale-105'
                          : 'border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted/50 hover:shadow-md'
                      }`}
                    >
                      <span className='block font-bold text-xl md:text-2xl mb-2'>
                        {option.label}
                      </span>
                      <span className='block text-sm text-muted-foreground font-medium'>
                        {option.sublabel}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Contact Form */}
            {currentStep === 5 && (
              <div className='space-y-6'>
                <div className='text-center mb-8'>
                  <div className='w-16 h-16 bg-status-success/10 rounded-full flex items-center justify-center mx-auto mb-5'>
                    <CheckCircle className='h-8 w-8 text-status-success' />
                  </div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className='text-2xl md:text-2xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight outline-none'>
                    Send your information for review
                  </h2>
                  <p className='text-lg md:text-xl text-muted-foreground font-medium'>
                    A provider must review the property before confirming options or savings
                  </p>
                </div>

                <form
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className='space-y-6'
                >
                  {/* Location first (a picked suggestion fills city and ZIP),
                      contact details last, next to the consent line. */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5'>
                    <ProjectAddressFields
                      value={address}
                      // A frozen attempt keeps its address; only the Places status may move.
                      onChange={(next) => setAddress(hasUnconfirmedAttempt ? { ...address, placesStatus: next.placesStatus } : next)}
                      formKind='qualification_wizard'
                      eager
                      disabled={isSubmitting || hasUnconfirmedAttempt}
                      errors={{ street: fieldErrors.street, unit: fieldErrors.unit, city: fieldErrors.city, zip: fieldErrors.zip }}
                      onClearError={(field: AddressField) => clearFieldError(field)}
                      registerField={(field, node) => {
                        fieldRefs.current[field] = node;
                      }}
                      labelClassName='text-base font-bold text-foreground'
                      inputClassName='mt-2 h-12 w-full rounded-md border-2 border-border bg-background px-3 text-base focus:border-primary focus:outline-none'
                    />

                    {formData.utilityProvider === 'other' && (
                      <div className='space-y-3'>
                        <Label htmlFor='utility-provider-other' className='text-base font-bold text-foreground'>Electric utility on your bill (optional)</Label>
                        <Input id='utility-provider-other' type='text' maxLength={120} autoComplete='off' value={formData.utilityProviderOther} onChange={(e) => updateFormData('utilityProviderOther', e.target.value)} className='h-12 text-base border-2 border-border focus:border-primary transition-colors' />
                      </div>
                    )}

                    <div className='space-y-3'>
                      <Label
                        htmlFor='name'
                        className='text-base font-bold text-foreground'
                      >
                        Full Name
                      </Label>
                      <div className='relative'>
                        <User className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' aria-hidden='true' />
                        <Input
                          id='name'
                          type='text'
                          autoComplete='name'
                          autoCapitalize='words'
                          maxLength={160}
                          ref={(node) => {
                            fieldRefs.current.name = node;
                          }}
                          value={formData.name}
                          onChange={(e) => {
                            updateFormData('name', e.target.value);
                            clearFieldError('name');
                          }}
                          required
                          aria-invalid={Boolean(fieldErrors.name) || undefined}
                          aria-describedby={fieldErrors.name ? fieldErrorId('name') : undefined}
                          className={`pl-12 h-12 text-base border-2 focus:border-primary transition-colors ${fieldErrors.name ? 'border-destructive' : 'border-border'}`}
                        />
                      </div>
                      {fieldErrors.name && (
                        <p id={fieldErrorId('name')} className='text-sm font-medium text-destructive'>
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    <div className='space-y-3'>
                      <Label
                        htmlFor='phone'
                        className='text-base font-bold text-foreground'
                      >
                        Phone Number
                      </Label>
                      <div className='relative'>
                        <Phone className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' aria-hidden='true' />
                        <Input
                          id='phone'
                          type='tel'
                          inputMode='tel'
                          autoComplete='tel'
                          maxLength={20}
                          ref={(node) => {
                            fieldRefs.current.phone = node;
                          }}
                          value={formData.phone}
                          onChange={(e) => {
                            const phone = formatUsPhoneInput(e.target.value);
                            updateFormData('phone', phone);
                            if (fieldErrors.phone && isValidUsPhone(phone)) clearFieldError('phone');
                          }}
                          onBlur={() => {
                            if (!formData.phone) return;
                            const message = usPhoneError(formData.phone);
                            if (message) setFieldErrors((current) => ({ ...current, phone: message }));
                          }}
                          required
                          aria-invalid={Boolean(fieldErrors.phone) || undefined}
                          aria-describedby='phone-help'
                          className={`pl-12 h-12 text-base border-2 focus:border-primary transition-colors ${fieldErrors.phone ? 'border-destructive' : 'border-border'}`}
                        />
                      </div>
                      <p
                        id='phone-help'
                        className={`text-xs ${fieldErrors.phone ? 'font-medium text-destructive' : 'text-muted-foreground'}`}
                      >
                        {fieldErrors.phone || US_PHONE_HINT}
                      </p>
                    </div>

                    <div className='space-y-3 md:col-span-2'>
                      <Label
                        htmlFor='email'
                        className='text-base font-bold text-foreground'
                      >
                        Email Address
                      </Label>
                      <div className='relative'>
                        <Mail className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' aria-hidden='true' />
                        <Input
                          id='email'
                          type='email'
                          autoComplete='email'
                          autoCapitalize='none'
                          spellCheck={false}
                          maxLength={254}
                          ref={(node) => {
                            fieldRefs.current.email = node;
                          }}
                          value={formData.email}
                          onChange={(e) => {
                            updateFormData('email', e.target.value);
                            clearFieldError('email');
                          }}
                          required
                          aria-invalid={Boolean(fieldErrors.email) || undefined}
                          aria-describedby={fieldErrors.email ? fieldErrorId('email') : undefined}
                          className={`pl-12 h-12 text-base border-2 focus:border-primary transition-colors ${fieldErrors.email ? 'border-destructive' : 'border-border'}`}
                        />
                      </div>
                      {fieldErrors.email && (
                        <p id={fieldErrorId('email')} className='text-sm font-medium text-destructive'>
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div className='space-y-2 md:col-span-2'>
                      <label className='flex items-start gap-3 text-sm text-foreground'>
                        <input
                          type='checkbox'
                          required
                          ref={(node) => {
                            fieldRefs.current.consent = node;
                          }}
                          checked={formData.consent}
                          onChange={(e) => {
                            updateFormData('consent', e.target.checked);
                            clearFieldError('consent');
                          }}
                          aria-invalid={Boolean(fieldErrors.consent) || undefined}
                          aria-describedby={fieldErrors.consent ? fieldErrorId('consent') : undefined}
                          className='mt-1 h-5 w-5 shrink-0'
                        />
                        <span>
                          {CONSENT_TEXT} Read the{' '}
                          <a href='/privacy' className='underline'>
                            privacy policy
                          </a>
                          .
                        </span>
                      </label>
                      {fieldErrors.consent && (
                        <p id={fieldErrorId('consent')} className='text-sm font-medium text-destructive'>
                          {fieldErrors.consent}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className='pt-2'>
                    {hasUnconfirmedAttempt && (
                      <div className='mb-4 rounded-lg border border-status-warning/30 bg-status-warning/10 p-4 text-sm text-foreground'>
                        Receipt was not confirmed. Retry to send the exact same attempt, or start a new submission before changing any answer.
                        <Button type='button' variant='outline' className='mt-3 w-full' onClick={() => {
                          attemptRef.current = null;
                          setHasUnconfirmedAttempt(false);
                        }}>
                          Start a new submission with edits
                        </Button>
                      </div>
                    )}
                    <Button
                      type='submit'
                      disabled={isSubmitting || unitDeclined}
                      size='default'
                      className='w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 h-12'
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />
                          {HOME_WIZARD_COPY.submittingLabel}
                        </>
                      ) : (
                        <>
                          {HOME_WIZARD_COPY.submitLabel}
                          <ArrowRight className='ml-2 h-4 w-4' aria-hidden='true' />
                        </>
                      )}
                    </Button>
                  </div>

                </form>
              </div>
            )}
          </div>

          {/* Service details */}
          <div className='mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <CheckCircle className='h-4 w-4 text-status-success' />
              <span>SSL Secured</span>
            </div>
            <div className='flex items-center gap-1'>
              <CheckCircle className='h-4 w-4 text-status-success' />
              <span>California referral service</span>
            </div>
            <div className='flex items-center gap-1'>
              <CheckCircle className='h-4 w-4 text-status-success' />
              <span>No final eligibility decision in this form</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
