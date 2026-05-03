'use client';

import { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { glp1Providers, primaryProviders, GLP1Provider } from '@/lib/glp1-providers';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { ArrowLeft, ArrowRight, Star, ExternalLink, CheckCircle2 } from 'lucide-react';

// ============================================================
// Quiz state shape
// ============================================================

type Step = 1 | 2 | 3 | 4 | 5;

interface Answers {
  hasRx?: 'yes' | 'no';
  medication?: 'compounded-sema' | 'compounded-tirz' | 'branded' | 'unsure';
  payment?: 'insurance' | 'cash' | 'either';
  budget?: 'under150' | '150-300' | '300plus';
  isUSResident?: 'yes' | 'no';
}

const TOTAL_STEPS = 5;

// ============================================================
// Page (wrapped to use useSearchParams)
// ============================================================

export default function MatchQuizPage() {
  return (
    <Suspense fallback={null}>
      <QuizContent />
    </Suspense>
  );
}

function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const stepParam = parseInt(searchParams.get('step') ?? '1', 10);
  const step: Step = (stepParam >= 1 && stepParam <= TOTAL_STEPS ? stepParam : 1) as Step;

  const [answers, setAnswers] = useState<Answers>({});

  function setAnswer<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function goToStep(next: Step) {
    const params = new URLSearchParams(window.location.search);
    params.set('step', String(next));
    router.push(`/match?${params.toString()}`, { scroll: false });
  }

  // ----- Recommended providers based on answers (Step 5)
  const recommendations = useMemo(() => recommend(answers), [answers]);

  return (
    <GLP1Layout>
      <GLP1Header />

      {/* Affiliate disclosure */}
      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> Recommendations are not influenced by commission rates.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        <section className='py-10 md:py-16' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            {/* Progress bar */}
            <div className='mb-7'>
              <div className='flex justify-between text-xs mb-2 font-semibold' style={{ color: '#6B7B82' }}>
                <span>Step {step} of {TOTAL_STEPS}</span>
                <span>{Math.round((step / TOTAL_STEPS) * 100)}% complete</span>
              </div>
              <div className='w-full h-2 rounded-full' style={{ backgroundColor: '#E5DDC8' }}>
                <div
                  className='h-2 rounded-full transition-all duration-500'
                  style={{
                    width: `${(step / TOTAL_STEPS) * 100}%`,
                    backgroundColor: '#D4A33A',
                  }}
                />
              </div>
            </div>

            {/* Step content */}
            <div
              className='bg-white rounded-3xl p-7 md:p-10 shadow-sm'
              style={{ border: '1px solid #E5DDC8' }}
            >
              {step === 1 && (
                <StepCard
                  title='Do you have a GLP-1 prescription?'
                  body='If yes, providers can fill your existing prescription. If no, all of our providers include a telehealth consultation to write a new prescription.'
                  options={[
                    { value: 'yes', label: 'Yes, I have a current prescription' },
                    { value: 'no', label: 'No, I need a new prescription (telehealth consult included)' },
                  ]}
                  onSelect={(v) => {
                    setAnswer('hasRx', v as Answers['hasRx']);
                    goToStep(2);
                  }}
                  selected={answers.hasRx}
                />
              )}

              {step === 2 && (
                <StepCard
                  title='Which medication are you most interested in?'
                  body='Compounded options are ~60-80% cheaper than branded, but compounded versions are not FDA-approved.'
                  options={[
                    { value: 'compounded-sema', label: 'Compounded Semaglutide (cheapest, ~$99-$179/mo)' },
                    { value: 'compounded-tirz', label: 'Compounded Tirzepatide (greater weight loss in trials, ~$133-$249/mo)' },
                    { value: 'branded', label: 'Branded (Wegovy, Zepbound, Mounjaro, Ozempic)' },
                    { value: 'unsure', label: 'Not sure — show me all options' },
                  ]}
                  onSelect={(v) => {
                    setAnswer('medication', v as Answers['medication']);
                    goToStep(3);
                  }}
                  selected={answers.medication}
                />
              )}

              {step === 3 && (
                <StepCard
                  title='How would you like to pay?'
                  body='Insurance covers some branded GLP-1 if you have a qualifying diagnosis. Cash pricing on compounded is typically much lower.'
                  options={[
                    { value: 'insurance', label: 'Use my insurance (branded only, requires diagnosis)' },
                    { value: 'cash', label: 'Pay cash — show me the lowest-price options' },
                    { value: 'either', label: 'Either — show me what works' },
                  ]}
                  onSelect={(v) => {
                    setAnswer('payment', v as Answers['payment']);
                    goToStep(4);
                  }}
                  selected={answers.payment}
                />
              )}

              {step === 4 && (
                <StepCard
                  title="What's your monthly budget?"
                  body='Compounded options start under $150/mo. Branded GLP-1 ranges $1,000-$1,839/mo without insurance.'
                  options={[
                    { value: 'under150', label: 'Under $150/mo (compounded entry-level)' },
                    { value: '150-300', label: '$150-$300/mo (compounded standard)' },
                    { value: '300plus', label: '$300+/mo (premium / branded)' },
                  ]}
                  onSelect={(v) => {
                    setAnswer('budget', v as Answers['budget']);
                    goToStep(5);
                  }}
                  selected={answers.budget}
                />
              )}

              {step === 5 && (
                <ResultsCard recommendations={recommendations} answers={answers} />
              )}

              {/* Back button */}
              {step > 1 && step < 5 && (
                <button
                  type='button'
                  onClick={() => goToStep((step - 1) as Step)}
                  className='inline-flex items-center gap-1 text-sm font-semibold mt-5'
                  style={{ color: '#6B7B82' }}
                >
                  <ArrowLeft className='h-4 w-4' /> Back
                </button>
              )}
            </div>

            {/* Side CTA */}
            <div className='mt-8 text-center text-sm' style={{ color: '#3D5560' }}>
              Want to explore on your own?{' '}
              <Link href='/providers' className='underline font-semibold' style={{ color: '#D4A33A' }}>
                View All Providers
              </Link>{' '}
              or{' '}
              <Link href='/compare' className='underline font-semibold' style={{ color: '#D4A33A' }}>
                Compare Providers
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

// ============================================================
// Step content card
// ============================================================

interface StepOption {
  value: string;
  label: string;
}

function StepCard({
  title,
  body,
  options,
  selected,
  onSelect,
}: {
  title: string;
  body: string;
  options: StepOption[];
  selected?: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2
        className='text-2xl md:text-3xl font-bold mb-3'
        style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {title}
      </h2>
      <p className='text-sm md:text-base mb-6' style={{ color: '#3D5560' }}>
        {body}
      </p>
      <div className='space-y-3'>
        {options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              type='button'
              onClick={() => onSelect(opt.value)}
              className='w-full text-left p-4 md:p-5 rounded-2xl transition-all hover:-translate-y-0.5 flex items-center justify-between gap-3'
              style={{
                backgroundColor: isSelected ? '#E8DCC0' : '#F8F4ED',
                border: isSelected ? '2px solid #D4A33A' : '1.5px solid #E5DDC8',
                color: '#0E2A3A',
              }}
            >
              <span className='font-semibold text-sm md:text-base'>{opt.label}</span>
              <ArrowRight className='h-4 w-4 flex-shrink-0' style={{ color: '#D4A33A' }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// Results card (Step 5)
// ============================================================

function ResultsCard({ recommendations, answers }: { recommendations: GLP1Provider[]; answers: Answers }) {
  const summary = summarizeAnswers(answers);

  return (
    <div>
      <div
        className='inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4'
        style={{ backgroundColor: '#D9E8D4', color: '#2D5A3D' }}
      >
        <CheckCircle2 className='h-3.5 w-3.5' /> Your Match
      </div>

      <h2
        className='text-2xl md:text-3xl font-bold mb-3'
        style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        Your Top {recommendations.length} GLP-1 Providers
      </h2>
      <p className='text-sm md:text-base mb-6' style={{ color: '#3D5560' }}>
        Based on your answers ({summary}), here are the providers most likely to fit.
      </p>

      <div className='space-y-3 mb-6'>
        {recommendations.map((p, i) => (
          <ResultProvider key={p.slug} rank={i + 1} provider={p} />
        ))}
      </div>

      <div className='flex flex-wrap gap-3 mt-7'>
        <Link
          href='/match?step=1'
          className='inline-flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold transition-all'
          style={{ backgroundColor: 'white', color: '#0E2A3A', border: '1.5px solid #0E2A3A' }}
        >
          <ArrowLeft className='h-4 w-4' /> Retake Quiz
        </Link>
        <Link
          href='/providers'
          className='inline-flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold transition-all'
          style={{ backgroundColor: '#0E2A3A', color: 'white' }}
        >
          See All Providers <ArrowRight className='h-4 w-4' />
        </Link>
      </div>
    </div>
  );
}

function ResultProvider({ rank, provider }: { rank: number; provider: GLP1Provider }) {
  const affiliateUrl = buildGlp1AffiliateUrl(provider.slug, 'match-quiz');
  return (
    <div
      className='p-4 rounded-2xl flex items-center gap-4'
      style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}
    >
      <div
        className='w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white'
        style={{ backgroundColor: rank === 1 ? '#D4A33A' : '#0E2A3A' }}
      >
        {rank}
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex items-baseline gap-2 flex-wrap'>
          <span className='font-bold' style={{ color: '#0E2A3A' }}>{provider.name}</span>
          {provider.rating > 0 && (
            <span className='inline-flex items-center gap-0.5 text-xs' style={{ color: '#0E2A3A' }}>
              <Star className='h-3 w-3 fill-current' style={{ color: '#D4A33A' }} />
              {provider.rating.toFixed(1)}
            </span>
          )}
        </div>
        <div className='text-xs' style={{ color: '#6B7B82' }}>{provider.tagline}</div>
        <div className='text-sm font-bold mt-1' style={{ color: '#D4A33A' }}>{provider.monthlyPrice}</div>
      </div>
      <a
        href={affiliateUrl}
        target='_blank'
        rel='sponsored nofollow noopener noreferrer'
        className='inline-flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-full text-white whitespace-nowrap'
        style={{ backgroundColor: '#D4A33A' }}
      >
        Visit <ExternalLink className='h-3 w-3' />
      </a>
    </div>
  );
}

// ============================================================
// Recommendation logic — heuristic scoring
// ============================================================

function recommend(a: Answers): GLP1Provider[] {
  const candidates = primaryProviders().filter((p) => p.status === 'Active');

  const score = (p: GLP1Provider): number => {
    let s = p.rating; // baseline

    // Medication preference
    if (a.medication === 'compounded-sema' || a.medication === 'compounded-tirz') {
      if (p.medicationType?.includes('Compounded')) s += 1.5;
      if (p.category === 'Compounding Pharmacy') s += 0.5;
    }
    if (a.medication === 'branded') {
      if (p.medicationType?.includes('Brand Name')) s += 1.5;
    }

    // Budget alignment (rough — parses first number from monthlyPrice)
    const startPrice = parseInt(p.monthlyPrice.replace(/[^\d]/g, '').slice(0, 3), 10) || 200;
    if (a.budget === 'under150' && startPrice <= 150) s += 1.0;
    if (a.budget === '150-300' && startPrice >= 150 && startPrice <= 300) s += 1.0;
    if (a.budget === '300plus' && startPrice >= 300) s += 0.5;

    // Insurance preference (Found is insurance-first)
    if (a.payment === 'insurance' && p.slug === 'found') s += 1.0;

    return s;
  };

  return [...candidates]
    .sort((x, y) => score(y) - score(x))
    .slice(0, 3);
}

function summarizeAnswers(a: Answers): string {
  const parts: string[] = [];
  if (a.medication === 'compounded-sema') parts.push('compounded semaglutide');
  if (a.medication === 'compounded-tirz') parts.push('compounded tirzepatide');
  if (a.medication === 'branded') parts.push('branded GLP-1');
  if (a.payment === 'insurance') parts.push('insurance');
  if (a.payment === 'cash') parts.push('cash pay');
  if (a.budget === 'under150') parts.push('under $150/mo');
  if (a.budget === '150-300') parts.push('$150-300/mo');
  if (a.budget === '300plus') parts.push('$300+/mo');
  return parts.length ? parts.join(', ') : 'your preferences';
}
