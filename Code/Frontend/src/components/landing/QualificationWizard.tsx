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
  MapPin,
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
import { isFiveDigitZip, serviceLocationFields, serviceMarkets, type ServiceMarket } from '@/lib/service-market';
import { isNewConfirmedSubmission } from '@/lib/submission-identity';
import { useToast } from '@/hooks/use-toast';
import usePlacesAutocomplete, {
  getGeocode,
  getZipCode,
} from 'use-places-autocomplete';
import { HOME_WIZARD_COPY, INQUIRY_RECEIVED_COPY } from '@/lib/cta-intent';
import { US_PHONE_HINT, formatUsPhoneInput, isValidUsPhone, toE164Us, usPhoneError } from '@/lib/phone';
import {
  HOME_WIZARD_TARGET,
  QUICK_START_EVENT,
  formatBill,
  quickStartFromEvent,
  takeQuickStart,
  wizardBillBracket,
  wizardUtilityFor,
  type QuickStart,
} from '@/lib/quick-start';
import { InquiryReceived } from '@/components/growth/InquiryReceived';

type WizardStep = 1 | 2 | 3 | 4 | 5;

interface FormData {
  utilityProvider: string;
  utilityProviderOther: string;
  billAmount: string;
  isHomeowner: boolean | null;
  creditScore: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  serviceZip: string;
  serviceMarket: ServiceMarket | '';
}

/** Minimal shape of the geocoder components we read; @types/google.maps is not installed. */
interface AddressComponent {
  long_name?: string;
  short_name?: string;
  types?: string[];
}

/** City from a Places result: locality first, then the postal-town fallbacks. */
function cityFromComponents(components: AddressComponent[] | undefined): string {
  if (!Array.isArray(components)) return '';
  const priority = ['locality', 'postal_town', 'sublocality_level_1', 'administrative_area_level_3'];
  for (const type of priority) {
    const match = components.find(part => Array.isArray(part?.types) && part.types.includes(type));
    if (match?.long_name) return match.long_name;
  }
  return '';
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

const billAmounts = [
  { id: '150-200', label: '$150 – $200', value: 175 },
  { id: '201-350', label: '$201 – $350', value: 275 },
  { id: '351-500', label: '$351 – $500', value: 425 },
  { id: '500+', label: '$500+', value: 600 },
];

/** Contact-step fields that can carry an inline error. */
type ContactField = 'phone' | 'city' | 'serviceMarket' | 'serviceZip';

const initialFormData: FormData = {
  utilityProvider: '',
  utilityProviderOther: '',
  billAmount: '',
  isHomeowner: null,
  creditScore: '',
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  serviceZip: '',
  // This wizard sits on the California home page; the visitor can still change
  // it. Pre-selecting removes one required tap without changing what is sent.
  serviceMarket: 'CA',
};

/** Minimal window shape for the Maps script loaded in layout.tsx. */
type MapsWindow = Window & {
  google?: { maps?: { places?: unknown } };
  gm_authFailure?: () => void;
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
  const [quickBill, setQuickBill] = useState('');
  const stepHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const focusHeadingRef = useRef(false);

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
    const ft = getFirstTouch();
    trackEvent('wizard_start', {
      segment: 'residential',
      landing_page: ft?.landing_page ?? 'unknown',
      landing_page_type: ft?.landing_page_type ?? 'unknown',
      landing_city_slug: ft?.landing_city_slug ?? 'none',
      prefill_source: prefillRef.current,
    });
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  // A ZIP-to-utility inference is deliberately California-only.
  const zipWarning =
    formData.serviceZip.length === 5 && !isFiveDigitZip(formData.serviceZip)
      ? 'Enter a 5-digit project ZIP code.'
      : '';

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

  // Google Places suggestions for the address field. The hook is created with
  // initOnMount: false and init() runs only once window.google.maps.places
  // exists; initialising without it is what logged "use-places-autocomplete:
  // Google Maps Places API library must be loaded". The address input is one
  // plain input either way, so typing works with or without Maps.
  const {
    ready: placesReady,
    setValue: setPlacesValue,
    suggestions: { status, data },
    clearSuggestions,
    init: initPlaces,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'us' }, // US addresses only
    },
    debounce: 300,
    initOnMount: false,
  });
  const [placesFailed, setPlacesFailed] = useState(false);
  const placesActive = placesReady && !placesFailed;

  useEffect(() => {
    const mapsWindow = window as MapsWindow;
    // Google calls this global when the key is rejected (for example
    // ApiNotActivatedMapError); fall back to the plain input quietly.
    const previousAuthFailure = mapsWindow.gm_authFailure;
    const onAuthFailure = () => {
      setPlacesFailed(true);
      clearSuggestions();
      previousAuthFailure?.();
    };
    mapsWindow.gm_authFailure = onAuthFailure;
    let tries = 0;
    let timer: number | undefined;
    const tryInit = () => {
      if (mapsWindow.google?.maps?.places) {
        initPlaces();
        return;
      }
      // The home page loads the script afterInteractive, only when a key is
      // configured; stop looking after ~30 s so a page without Maps does no
      // further work.
      if (++tries < 60) timer = window.setTimeout(tryInit, 500);
    };
    tryInit();
    return () => {
      if (timer) window.clearTimeout(timer);
      if (mapsWindow.gm_authFailure === onAuthFailure) mapsWindow.gm_authFailure = previousAuthFailure;
    };
    // initPlaces and clearSuggestions are stable useCallbacks in the hook.
  }, [clearSuggestions, initPlaces]);

  const nextStep = () => {
    markStarted();
    if (currentStep < 5) {
      trackEvent('wizard_step_completed', {
        step: currentStep,
        landing_page_type: getFirstTouch()?.landing_page_type ?? 'unknown',
        prefill_source: prefillRef.current,
      });
      setCurrentStep((prev) => (prev + 1) as WizardStep);
    }
  };

  // HeroQuickCheck handoff: fill utility and bill, then skip the steps they
  // answer. The skipped steps are recorded as wizard_step_completed with
  // prefill_source=quick_check (they were answered, just not here), and
  // wizard_start fires through the usual once-only guard, so nothing is
  // double-counted and the step funnel stays monotonic.
  const applyQuickStart = (value: QuickStart) => {
    if (isSuccess || isDisqualified || hasUnconfirmedAttempt || attemptRef.current) return;
    const utility = wizardUtilityFor(value);
    const bracket = wizardBillBracket(Number(value.monthlyBill));
    prefillRef.current = 'quick_check';
    setQuickBill(value.monthlyBill);
    setFormData((prev) => ({
      ...prev,
      utilityProvider: utility.utilityProvider,
      utilityProviderOther: utility.utilityProviderOther,
      // Below $150 there is no matching range; the visitor picks one on step 2
      // rather than the form recording a range they did not give.
      billAmount: bracket ?? '',
    }));
    markStarted();
    const target: WizardStep = bracket ? (Math.max(currentStep, 3) as WizardStep) : 2;
    for (let step = currentStep; step < target; step++) {
      trackEvent('wizard_step_completed', {
        step,
        landing_page_type: getFirstTouch()?.landing_page_type ?? 'unknown',
        prefill_source: 'quick_check',
      });
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
      setIsDisqualified(true);
    } else {
      nextStep();
    }
  };

  const handleSubmit = async () => {
    if (submitInFlightRef.current) return;

    // Inline errors next to the field, in page order, instead of a toast that
    // disappears. The first invalid field takes focus.
    const errors: Partial<Record<ContactField, string>> = {};
    if (!formData.city.trim()) errors.city = 'Enter the city for the project address.';
    if (!isFiveDigitZip(formData.serviceZip)) errors.serviceZip = 'Enter the 5-digit ZIP code for the project.';
    if (!formData.serviceMarket) errors.serviceMarket = 'Select the state or district where the project is.';
    const phoneMessage = usPhoneError(formData.phone);
    if (phoneMessage) errors.phone = phoneMessage;
    const order: ContactField[] = ['city', 'serviceZip', 'serviceMarket', 'phone'];
    const firstInvalid = order.find((field) => errors[field]);
    if (firstInvalid) {
      setFieldErrors(errors);
      fieldRefs.current[firstInvalid]?.focus();
      trackEvent('wizard_validation_error', {
        reason: firstInvalid,
        prefill_source: prefillRef.current,
      });
      return;
    }
    setFieldErrors({});

    submitInFlightRef.current = true;
    setIsSubmitting(true);
    const firstTouch = getFirstTouch();

    try {
      const billOption = billAmounts.find((b) => b.id === formData.billAmount);
      const billValue = billOption?.value || 0;

      // E.164, exactly what the old normalizer produced for a US number and
      // what the backend's normalizePhone stores.
      const normalizedPhone = toE164Us(formData.phone) ?? formData.phone;

      // The ZIP-derived territory is recorded ALONGSIDE the visitor's own
      // utility answer, never on top of it. utility_provider stays exactly what
      // the visitor picked, derived_utility is what the seed table says, and a
      // disagreement between the two is a review signal rather than a silent
      // overwrite. The seed table is the less reliable of the two sources.
      // serviceMarket was checked non-empty above.
      const location = serviceLocationFields(formData.serviceMarket as ServiceMarket, formData.serviceZip, formData.city, formData.utilityProvider);

      const attempt = getOrCreateSubmissionAttempt<IntakePayload>(attemptRef.current, submissionId => ({
        submission_id: submissionId,
        segment: 'residential',
        contact: {
          name: formData.name.trim(), phone: normalizedPhone,
          email: formData.email.trim(), address: formData.address.trim(),
        },
        qualification_data: {
          // "Other" with no name typed sends 'other' (the backend's canonical
          // 'Other') instead of an empty string the backend would reject.
          utility_provider: formData.utilityProvider === 'other' ? formData.utilityProviderOther.trim() || 'other' : formData.utilityProvider, bill_amount: billValue,
          monthly_bill_range: formData.billAmount, credit_score: formData.creditScore,
          homeowner: formData.isHomeowner === true,
          ...location,
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
          segment: 'residential',
          landing_page: firstTouch?.landing_page ?? 'unknown',
          landing_page_type: firstTouch?.landing_page_type ?? 'unknown',
          landing_city_slug: firstTouch?.landing_city_slug ?? 'none',
          utility_provider: formData.utilityProvider || 'unknown',
          derived_utility: location.derived_utility ?? 'unknown',
          bill_bracket: formData.billAmount || 'unknown',
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
      setHasUnconfirmedAttempt(true);
      // Without this, a backend outage looks identical to "no traffic" in GA4.
      trackEvent('form_submit_error', {
        segment: 'residential',
        landing_page_type: firstTouch?.landing_page_type ?? 'unknown',
        landing_city_slug: firstTouch?.landing_city_slug ?? 'none',
      });
      toast({
        title: 'Submission Failed',
        description: 'Your information was not confirmed as received. Please try again.',
        variant: 'destructive',
      });
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
                This form is for California homeowners. If you control a business
                or commercial property, use the commercial assessment instead.
              </p>
              <div className='bg-primary/5 rounded-lg p-4 mb-6 border border-primary/20'>
                <p className='text-sm text-primary'>
                  <a href='/commercial-assessment' className='font-semibold underline'>
                    Open the commercial solar assessment
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
  const billOptionLabel = billAmounts.find((amount) => amount.id === formData.billAmount)?.label ?? '';
  // Show the figure the visitor typed in the quick check while it still
  // matches the selected range; otherwise the range itself.
  const billLabel =
    quickBill && formData.billAmount && wizardBillBracket(Number(quickBill)) === formData.billAmount
      ? formatBill(quickBill)
      : billOptionLabel;
  const showSummary = prefillRef.current === 'quick_check' && currentStep > 1 && Boolean(utilityLabel);
  const quickBillBelowRanges =
    prefillRef.current === 'quick_check' && quickBill !== '' && wizardBillBracket(Number(quickBill)) === null;

  return (
    <section className='py-16 bg-muted'>
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
                    This helps us estimate your potential savings
                  </p>
                  {quickBillBelowRanges && (
                    <p className='mt-3 text-sm text-foreground'>
                      You entered {formatBill(quickBill)} a month. Choose the range closest to your typical bill.
                    </p>
                  )}
                </div>

                <div className='grid grid-cols-2 gap-6 max-w-2xl mx-auto'>
                  {billAmounts.map((amount) => (
                    <button
                      key={amount.id}
                      type='button'
                      aria-pressed={formData.billAmount === amount.id}
                      onClick={() => {
                        updateFormData('billAmount', amount.id);
                        nextStep();
                      }}
                      className={`p-8 rounded-xl border-2 text-center font-bold text-xl md:text-2xl transition-all duration-200 min-h-[120px] flex items-center justify-center ${
                        formData.billAmount === amount.id
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
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className='space-y-6'
                >
                  {/* Location first (a picked suggestion fills city and ZIP),
                      contact details last, next to the consent line. */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5'>
                    <div className='space-y-3 md:col-span-2'>
                      <Label
                        htmlFor='address'
                        className='text-base font-bold text-foreground'
                      >
                        Home Address
                      </Label>
                      <div className='relative'>
                        <MapPin className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10' aria-hidden='true' />
                        <Input
                          id='address'
                          type='text'
                          maxLength={500}
                          value={formData.address}
                          onChange={(e) => {
                            const value = e.target.value;
                            updateFormData('address', value);
                            if (placesActive && !hasUnconfirmedAttempt) setPlacesValue(value);
                          }}
                          required
                          autoComplete={placesActive ? 'off' : 'street-address'}
                          aria-describedby='address-help'
                          className='pl-12 h-12 text-base border-2 border-border focus:border-primary transition-colors'
                        />
                        {placesActive && status === 'OK' && data.length > 0 && (
                          <div className='absolute z-50 w-full mt-1 bg-card border-2 border-border rounded-lg shadow-lg max-h-60 overflow-y-auto'>
                            {data.map(({ place_id, description }) => (
                              <button
                                key={place_id}
                                type='button'
                                onClick={async () => {
                                  if (hasUnconfirmedAttempt) {
                                    updateFormData('address', description);
                                    return;
                                  }
                                  setPlacesValue(description, false);
                                  updateFormData('address', description);
                                  clearSuggestions();

                                  // Auto-fill city and ZIP from the selected
                                  // place. Both stay editable, and a geocode
                                  // failure must not block the submission.
                                  try {
                                    const results = await getGeocode({ address: description });
                                    const first = results?.[0];
                                    if (first) {
                                      const city = cityFromComponents(
                                        (first as unknown as { address_components?: AddressComponent[] }).address_components,
                                      );
                                      if (city) {
                                        updateFormData('city', city);
                                        clearFieldError('city');
                                      }
                                      const zip = getZipCode(first, false);
                                      if (zip && /^\d{5}$/.test(zip)) {
                                        updateFormData('serviceZip', zip);
                                        clearFieldError('serviceZip');
                                      }
                                    }
                                  } catch (error) {
                                    console.error('Error getting address details:', error);
                                  }
                                }}
                                className='w-full min-h-[44px] text-left px-4 py-3 hover:bg-muted transition-colors border-b border-border last:border-b-0'
                              >
                                <p className='text-sm text-foreground'>{description}</p>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <p id='address-help' className='text-xs text-muted-foreground'>
                        {placesActive
                          ? 'Start typing, then pick a suggestion to fill in the city and ZIP.'
                          : 'Street address, for example 123 Main St.'}
                      </p>
                    </div>

                    <div className='space-y-3'>
                      <Label
                        htmlFor='service-city'
                        className='text-base font-bold text-foreground'
                      >
                        City
                      </Label>
                      <Input
                        id='service-city'
                        type='text'
                        autoComplete='address-level2'
                        maxLength={80}
                        ref={(node) => {
                          fieldRefs.current.city = node;
                        }}
                        value={formData.city}
                        onChange={(e) => {
                          updateFormData('city', e.target.value);
                          clearFieldError('city');
                        }}
                        required
                        aria-invalid={Boolean(fieldErrors.city) || undefined}
                        aria-describedby={fieldErrors.city ? fieldErrorId('city') : 'service-city-help'}
                        className={`h-12 text-base border-2 focus:border-primary transition-colors ${fieldErrors.city ? 'border-destructive' : 'border-border'}`}
                      />
                      {fieldErrors.city ? (
                        <p id={fieldErrorId('city')} className='text-sm font-medium text-destructive'>
                          {fieldErrors.city}
                        </p>
                      ) : (
                        placesActive && (
                          <p id='service-city-help' className='text-xs text-muted-foreground'>
                            Filled in automatically when you pick a suggested address
                          </p>
                        )
                      )}
                    </div>

                    <div className='space-y-3'>
                      <Label
                        htmlFor='service-zip'
                        className='text-base font-bold text-foreground'
                      >
                        Project ZIP Code
                      </Label>
                      <Input
                        id='service-zip'
                        type='text'
                        inputMode='numeric'
                        autoComplete='postal-code'
                        pattern='[0-9]{5}'
                        ref={(node) => {
                          fieldRefs.current.serviceZip = node;
                        }}
                        value={formData.serviceZip}
                        onChange={(e) => {
                          updateFormData('serviceZip', e.target.value.replace(/\D/g, '').slice(0, 5));
                          clearFieldError('serviceZip');
                        }}
                        required
                        aria-invalid={Boolean(fieldErrors.serviceZip || zipWarning) || undefined}
                        aria-describedby='service-zip-help'
                        className={`h-12 text-base border-2 focus:border-primary transition-colors ${fieldErrors.serviceZip ? 'border-destructive' : 'border-border'}`}
                      />
                      <p
                        id='service-zip-help'
                        className={`text-xs ${fieldErrors.serviceZip || zipWarning ? 'text-sm font-medium text-destructive' : 'text-muted-foreground'}`}
                      >
                        {fieldErrors.serviceZip || zipWarning || 'Enter the 5-digit ZIP code for the selected project market'}
                      </p>
                    </div>

                    <div className='space-y-3'>
                      <Label htmlFor='service-market' className='text-base font-bold text-foreground'>
                        Project state or district
                      </Label>
                      <select
                        id='service-market'
                        ref={(node) => {
                          fieldRefs.current.serviceMarket = node;
                        }}
                        value={formData.serviceMarket}
                        onChange={(e) => {
                          updateFormData('serviceMarket', e.target.value as ServiceMarket);
                          clearFieldError('serviceMarket');
                        }}
                        required
                        aria-invalid={Boolean(fieldErrors.serviceMarket) || undefined}
                        aria-describedby={fieldErrors.serviceMarket ? fieldErrorId('serviceMarket') : undefined}
                        className={`h-12 w-full rounded-md border-2 bg-background px-3 text-base focus:border-primary focus:outline-none ${fieldErrors.serviceMarket ? 'border-destructive' : 'border-border'}`}
                      >
                        <option value=''>Select project market</option>
                        {serviceMarkets.map(([code, label]) => <option key={code} value={code}>{label}</option>)}
                      </select>
                      {fieldErrors.serviceMarket && (
                        <p id={fieldErrorId('serviceMarket')} className='text-sm font-medium text-destructive'>
                          {fieldErrors.serviceMarket}
                        </p>
                      )}
                    </div>

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
                          value={formData.name}
                          onChange={(e) =>
                            updateFormData('name', e.target.value)
                          }
                          required
                          className='pl-12 h-12 text-base border-2 border-border focus:border-primary transition-colors'
                        />
                      </div>
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
                          value={formData.email}
                          onChange={(e) =>
                            updateFormData('email', e.target.value)
                          }
                          required
                          className='pl-12 h-12 text-base border-2 border-border focus:border-primary transition-colors'
                        />
                      </div>
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
                      disabled={isSubmitting}
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

                  <p className='text-sm text-center text-foreground/70 leading-relaxed font-medium pt-2'>
                    By submitting, you agree to be contacted about the Rate
                    Relief Program by California Rate Relief and a matched solar
                    provider using the contact information above.
                  </p>
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
