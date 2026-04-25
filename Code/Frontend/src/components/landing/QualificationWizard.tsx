'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
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
import { createLead } from '@/lib/leads';
import { useToast } from '@/hooks/use-toast';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { parsePhoneNumber, isValidPhoneNumber, AsYouType } from 'libphonenumber-js';

type WizardStep = 1 | 2 | 3 | 4 | 5;

interface FormData {
  utilityProvider: string;
  billAmount: string;
  isHomeowner: boolean | null;
  creditScore: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

// Tracking parameters from URL (hidden fields)
interface TrackingParams {
  gclid: string | null; // Google Click ID
  fbclid: string | null; // Facebook Click ID
  utm_source: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
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

const creditOptions = [
  { id: 'yes', label: 'Yes', sublabel: 'Above 650' },
  { id: 'no', label: 'No', sublabel: 'Below 650' },
  { id: 'unsure', label: "I'm Not Sure", sublabel: "We'll help verify" },
];

export function QualificationWizard() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  // Tracking parameters captured from URL on page load
  const [trackingParams, setTrackingParams] = useState<TrackingParams>({
    gclid: null,
    fbclid: null,
    utm_source: null,
    utm_campaign: null,
    utm_content: null,
  });

  // Capture URL parameters on mount (for ad tracking)
  useEffect(() => {
    setTrackingParams({
      gclid: searchParams.get('gclid'),
      fbclid: searchParams.get('fbclid'),
      utm_source: searchParams.get('utm_source'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_content: searchParams.get('utm_content'),
    });
  }, [searchParams]);

  const [formData, setFormData] = useState<FormData>({
    utilityProvider: '',
    billAmount: '',
    isHomeowner: null,
    creditScore: '',
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const updateFormData = (
    field: keyof FormData,
    value: string | boolean | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ✨ Google Places Autocomplete for address field
  const {
    ready: placesReady,
    value: placesValue,
    setValue: setPlacesValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'us' }, // US addresses only
    },
    debounce: 300,
  });

  // ✨ Phone number formatting with +1 prefix
  const formatPhoneNumber = (value: string): string => {
    // If already starts with +, don't format it (preserve international numbers)
    if (value.trim().startsWith('+')) {
      return value;
    }
    
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // If starts with 1, assume it's already +1 format
    if (digits.startsWith('1') && digits.length === 11) {
      const formatter = new AsYouType('US');
      return formatter.input(digits.substring(1)); // Format without leading 1
    }
    
    // Format as US number
    const formatter = new AsYouType('US');
    return formatter.input(digits);
  };

  const normalizePhoneNumber = (phone: string): string => {
    // If already starts with +, validate and return as-is (preserve international numbers)
    if (phone.trim().startsWith('+')) {
      const cleaned = phone.replace(/[^\d+]/g, '');
      // Must have + followed by country code and number (minimum 8 digits total after +)
      if (/^\+[1-9]\d{7,14}$/.test(cleaned)) {
        return cleaned;
      }
      // If invalid format, return original for validation error
      return phone;
    }
    
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // If already has country code (starts with 1), return with +
    if (digits.startsWith('1') && digits.length === 11) {
      return `+${digits}`;
    }
    
    // If 10 digits, add +1
    if (digits.length === 10) {
      return `+1${digits}`;
    }
    
    // If less than 10 digits, return as is (will be validated)
    return phone;
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as WizardStep);
    }
  };

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
    setIsSubmitting(true);

    try {
      // Parse name into first and last
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Get bill amount value
      const billOption = billAmounts.find((b) => b.id === formData.billAmount);
      const billValue = billOption?.value || 0;

      // ✨ CRITICAL FIX: Normalize phone number with +1 prefix
      const normalizedPhone = normalizePhoneNumber(formData.phone);
      
      // Validate phone number
      if (!isValidPhoneNumber(normalizedPhone, 'US')) {
        toast({
          title: 'Invalid Phone Number',
          description: 'Please enter a valid US phone number.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      await createLead({
        first_name: firstName,
        last_name: lastName,
        phone: normalizedPhone, // Send normalized phone with +1
        email: formData.email,
        address: formData.address,
        source: 'google_ads',
        type: 'hot',
        bill_amount: billValue,
        utility_provider: formData.utilityProvider,
        credit_score: formData.creditScore,
        // Tracking parameters (hidden fields)
        gclid: trackingParams.gclid,
        fbclid: trackingParams.fbclid,
        utm_source: trackingParams.utm_source,
        utm_campaign: trackingParams.utm_campaign,
        utm_content: trackingParams.utm_content,
      });

      setIsSuccess(true);
      toast({
        title: 'Application Submitted!',
        description:
          'We will contact you within 24 hours to discuss your savings.',
      });
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Disqualification Screen (Renter)
  if (isDisqualified) {
    return (
      <section id='qualify' className='py-16 bg-slate-100'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-8 min-h-[650px] flex flex-col items-center justify-center'>
            <div className='text-center max-w-md'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <XCircle className='h-8 w-8 text-amber-600' />
              </div>
              <h3 className='text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight'>
                Program Requires Homeownership
              </h3>
              <p className='text-slate-600 mb-6'>
                Unfortunately, the Rate Relief Program is only available to
                homeowners. However, we can help you find other ways to save on
                your energy bills.
              </p>
              <div className='bg-teal-50 rounded-lg p-4 mb-6 border border-teal-200'>
                <p className='text-sm text-teal-800'>
                  <strong>Know a homeowner who could save?</strong>
                  <br />
                  Refer them and earn up to $500 when they qualify!
                </p>
              </div>
              <Button
                onClick={() => {
                  setIsDisqualified(false);
                  setCurrentStep(1);
                  setFormData({
                    utilityProvider: '',
                    billAmount: '',
                    isHomeowner: null,
                    creditScore: '',
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                  });
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

  // Success Screen
  if (isSuccess) {
    return (
      <section id='qualify' className='py-16 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-8 min-h-[650px] flex flex-col justify-center'>
            <div className='w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <CheckCircle className='h-8 w-8 text-emerald-600' />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>
              You&apos;re Pre-Qualified!
            </h3>
            <p className='text-slate-600 mb-6'>
              Great news! Based on your answers, you may be eligible for
              significant savings on your monthly electric bill. Our team will
              contact you within 24 hours.
            </p>
            <div className='bg-emerald-50 rounded-lg p-4 mb-6 text-left'>
              <h4 className='font-semibold text-emerald-800 mb-2'>
                What Happens Next?
              </h4>
              <ul className='text-sm text-emerald-700 space-y-1'>
                <li>✓ We&apos;ll review your information</li>
                <li>✓ A specialist will call to confirm eligibility</li>
                <li>✓ We&apos;ll schedule a free home assessment</li>
                <li>✓ Get your personalized savings estimate</li>
              </ul>
            </div>
            <p className='text-xs text-slate-400'>
              Application ID: {Date.now().toString(36).toUpperCase()}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='qualify' className='py-16 bg-slate-100'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-5xl'>
          {/* Card Container */}
          <div className='bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-10 lg:p-12 min-h-[650px] relative'>
            {/* Back Button - Fixed top-left position for all steps */}
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className='absolute top-6 left-6 md:top-10 md:left-10 flex items-center text-slate-500 hover:text-slate-700 transition-colors z-10'
              >
                <ArrowLeft className='h-4 w-4 mr-2' />
                Back
              </button>
            )}

            {/* Step 1: Utility Provider */}
            {currentStep === 1 && (
              <div className='space-y-6'>
                <div className='text-center mb-8'>
                  <div className='w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Zap className='h-6 w-6 text-teal-600' />
                  </div>
                  <h3 className='text-3xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight'>
                    Who is your current electric provider?
                  </h3>
                  <p className='text-base text-muted-foreground font-medium'>
                    Select your utility company to check available programs
                  </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                  {utilityProviders.map((provider) => (
                    <button
                      key={provider.id}
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
                  <div className='w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <DollarSign className='h-6 w-6 text-teal-600' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight'>
                    What is your average monthly bill?
                  </h3>
                  <p className='text-base text-muted-foreground font-medium'>
                    This helps us estimate your potential savings
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-6 max-w-2xl mx-auto'>
                  {billAmounts.map((amount) => (
                    <button
                      key={amount.id}
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
                  <div className='w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Home className='h-6 w-6 text-teal-600' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight'>
                    Do you own your home?
                  </h3>
                  <p className='text-base text-muted-foreground font-medium'>
                    Homeownership is required for this program
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-6 max-w-2xl mx-auto'>
                  <button
                    onClick={() => handleHomeownerSelect(true)}
                    className='p-6 rounded-xl border-2 border-border bg-card hover:border-status-success hover:bg-status-success/5 transition-all duration-200'
                  >
                    <CheckCircle className='h-10 w-10 text-status-success mx-auto mb-3' />
                    <span className='block font-bold text-foreground'>
                      Yes, I own it
                    </span>
                  </button>
                  <button
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
                  <h3 className='text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight'>
                    Is your credit score above 650?
                  </h3>
                  <p className='text-base text-muted-foreground font-medium'>
                    This helps determine program eligibility
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
                  {creditOptions.map((option) => (
                    <button
                      key={option.id}
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
                  <h3 className='text-2xl md:text-2xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight'>
                    Great! We found potential savings for your area.
                  </h3>
                  <p className='text-lg md:text-xl text-muted-foreground font-medium'>
                    Enter your details to check your final eligibility
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className='space-y-6'
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5'>
                    <div className='space-y-3'>
                      <Label
                        htmlFor='name'
                        className='text-base font-bold text-foreground'
                      >
                        Full Name
                      </Label>
                      <div className='relative'>
                        <User className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
                        <Input
                          id='name'
                          type='text'
                          placeholder='John Smith'
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
                        <Phone className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
                        <Input
                          id='phone'
                          type='tel'
                          placeholder='(555) 123-4567'
                          value={formData.phone}
                          onChange={(e) => {
                            const formatted = formatPhoneNumber(e.target.value);
                            updateFormData('phone', formatted);
                          }}
                          required
                          className='pl-12 h-12 text-base border-2 border-border focus:border-primary transition-colors'
                        />
                      </div>
                      <p className='text-xs text-muted-foreground'>
                        Phone number will be automatically formatted with country code
                      </p>
                    </div>

                    <div className='space-y-3'>
                      <Label
                        htmlFor='email'
                        className='text-base font-bold text-foreground'
                      >
                        Email Address
                      </Label>
                      <div className='relative'>
                        <Mail className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
                        <Input
                          id='email'
                          type='email'
                          placeholder='john@example.com'
                          value={formData.email}
                          onChange={(e) =>
                            updateFormData('email', e.target.value)
                          }
                          required
                          className='pl-12 h-12 text-base border-2 border-border focus:border-primary transition-colors'
                        />
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <Label
                        htmlFor='address'
                        className='text-base font-bold text-foreground'
                      >
                        Home Address
                      </Label>
                      <div className='relative'>
                        <MapPin className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10' />
                        {placesReady ? (
                          <>
                            <Input
                              id='address'
                              type='text'
                              placeholder='123 Main St, City, CA 90210'
                              value={placesValue}
                              onChange={(e) => {
                                setPlacesValue(e.target.value);
                                updateFormData('address', e.target.value);
                              }}
                              required
                              className='pl-12 h-12 text-base border-2 border-border focus:border-primary transition-colors'
                              autoComplete='off'
                            />
                            {status === 'OK' && data.length > 0 && (
                              <div className='absolute z-50 w-full mt-1 bg-white border-2 border-border rounded-lg shadow-lg max-h-60 overflow-y-auto'>
                                {data.map(({ place_id, description }) => (
                                  <button
                                    key={place_id}
                                    type='button'
                                    onClick={async () => {
                                      setPlacesValue(description, false);
                                      updateFormData('address', description);
                                      clearSuggestions();
                                      
                                      // Get full address details
                                      try {
                                        const results = await getGeocode({ address: description });
                                        const { lat, lng } = await getLatLng(results[0]);
                                        // Store full address with coordinates if needed
                                        updateFormData('address', description);
                                      } catch (error) {
                                        console.error('Error getting address details:', error);
                                      }
                                    }}
                                    className='w-full text-left px-4 py-3 hover:bg-muted transition-colors border-b border-border last:border-b-0'
                                  >
                                    <p className='text-sm text-foreground'>{description}</p>
                                  </button>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Input
                            id='address'
                            type='text'
                            placeholder='123 Main St, City, CA 90210'
                            value={formData.address}
                            onChange={(e) =>
                              updateFormData('address', e.target.value)
                            }
                            required
                            className='pl-12 h-12 text-base border-2 border-border focus:border-primary transition-colors'
                          />
                        )}
                      </div>
                      <p className='text-xs text-muted-foreground'>
                        Start typing your address and select from suggestions
                      </p>
                    </div>
                  </div>

                  <div className='pt-2'>
                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      size='default'
                      className='w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 h-12'
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                          Checking Eligibility...
                        </>
                      ) : (
                        <>
                          Check My Eligibility
                          <ArrowRight className='ml-2 h-4 w-4' />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className='text-sm text-center text-foreground/70 leading-relaxed font-medium pt-2'>
                    By submitting, you agree to be contacted about the Rate
                    Relief Program. Your information is secure and will never be
                    sold.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Trust Badges */}
          <div className='mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-500'>
            <div className='flex items-center gap-1'>
              <CheckCircle className='h-4 w-4 text-emerald-500' />
              <span>SSL Secured</span>
            </div>
            <div className='flex items-center gap-1'>
              <CheckCircle className='h-4 w-4 text-emerald-500' />
              <span>CPUC Compliant</span>
            </div>
            <div className='flex items-center gap-1'>
              <CheckCircle className='h-4 w-4 text-emerald-500' />
              <span>BBB Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
