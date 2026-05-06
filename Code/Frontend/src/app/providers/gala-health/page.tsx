import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders, getProviderBySlug } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Award, ShieldCheck, DollarSign, Calendar as CalendarIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gala Health Review May 2026: $179-$199 3-Month All-Inclusive Bundle | GLP1CompareHub',
  description:
    'Independent Gala Health (galaglp1.com) review verified May 2026. Realized EPC $3.60, conversion rate 1.18% (Katalys-verified). $179-$199/mo on 3-month all-inclusive plan covering compounded GLP-1/GIP, provider consults, async support, and shipping.',
  alternates: { canonical: 'https://glp1comparehub.com/providers/gala-health' },
  openGraph: {
    title: 'Gala Health Review — $179-$199 3-Month All-Inclusive Bundle',
    description:
      'High-converting funnel (1.18% CR), all-inclusive 3-month bundle eliminates surprise upcharges, nationwide US coverage. $349 default CPA.',
    url: 'https://glp1comparehub.com/providers/gala-health',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@type': 'MedicalBusiness', name: 'Gala Health', url: 'https://galaglp1.com' },
  reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5' },
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Gala Health legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Gala Health (galaglp1.com) is a US-based telehealth weight-loss platform with nationwide coverage. As of May 2026, it is approved on the Katalys affiliate network with $349 default CPA + 3 payout tiers, with realized EPC $3.60 and conversion rate 1.18%. The high-converting funnel and all-inclusive bundling are the structural strengths of the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Gala Health cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gala Health prices compounded GLP-1/GIP at $179-$199/mo on a 3-month all-inclusive plan. Compounded semaglutide sits at the lower end ($179/mo), tirzepatide at the upper end ($199/mo). The all-inclusive flat fee covers provider consults, async support, and shipping — no separate fees layered on top of medication. There is no separate intro discount; the bundled 3-month rate IS the entry price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "all-inclusive" mean at Gala Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gala Health\'s monthly fee includes the medication, provider consultations (initial and follow-up), async messaging support, and cold-chain shipping. Most compounded GLP-1 telehealth providers charge for some of these separately (consult fees, shipping, program membership). Gala bundles them all into the flat $179-$199/mo. For total-cost-of-ownership comparisons, this is meaningfully different from headline-only pricing at competitors that add fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel after the first month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gala\'s bundled $179-$199/mo pricing is locked to a 3-month commitment. If you cancel after month 1, you may forfeit the bundled rate or be billed for the remaining commitment — verify the specific terms at intake. The 3-month commitment is a real differentiator vs Embody, Eden Health, System Labs, and Care Bare Rx, which all offer cancel-anytime month-to-month options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Gala Health better than Eden Health or Embody?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on commitment tolerance. For buyers comfortable with a 3-month commitment, Gala Health offers the lowest sustained all-inclusive monthly price in the active stack ($179-$199 covering everything). For buyers wanting month-to-month flexibility, Eden Health ($229-$249 ongoing) or Embody ($299 flat refills) are better fits. Realized EPC is similar (Gala $3.60, Eden $3.92, Embody $4.60), so all three convert reasonably — the differentiation is on commitment + format.',
      },
    },
  ],
};

export default function GalaHealthReviewPage() {
  const provider = getProviderBySlug('gala-health');
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active' && p.slug !== 'gala-health')
    .slice(0, 5);

  const galaAffiliate = buildAffiliateUrl('glp1-gala-health', 'providers-gala-health-review');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <Link href='/providers' style={{ color: '#6B7B82' }}>Providers</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Gala Health Review</span>
            </nav>
            <div className='flex flex-wrap items-baseline gap-3 mb-4'>
              <h1
                className='text-3xl md:text-5xl font-bold leading-[1.1]'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <span style={{ color: '#D4A33A' }}>Gala Health</span> Review 2026
              </h1>
              <span className='text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
                <Award className='h-3 w-3' />
                Best 3-Month Bundle
              </span>
            </div>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              All-inclusive 3-month bundles starting at $179/mo. Realized EPC $3.60, conversion rate 1.18% (Katalys-verified). Provider consults, async support, and shipping all included in the flat monthly fee — no separate add-ons.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 6, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
              <span>·</span>
              <span>Verified provider · galaglp1.com</span>
            </div>
          </div>
        </section>

        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              <StatCard label='Rating' value='4.5 / 5' />
              <StatCard label='Realized EPC' value='$3.60' highlight />
              <StatCard label='Conversion Rate' value='1.18%' highlight />
              <StatCard label='Sema (3-mo)' value='$179/mo' />
              <StatCard label='Tirz (3-mo)' value='$199/mo' />
            </div>
            <p className='text-xs italic mt-4 text-center' style={{ color: '#6B7B82' }}>
              EPC and CR are realized affiliate metrics from the Katalys partner dashboard, not estimates. Gala
              Health ranks 3rd-tier in our active stack on EPC. All-inclusive 3-month bundles. Updated May 6, 2026.
            </p>
          </div>
        </section>

        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TL;DR — Who Gala Health Is For
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>
                  Pick Gala Health if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You&rsquo;re committed to a 3-month plan and want the lowest all-inclusive sustained price
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You hate hidden add-on fees (Gala bundles consult + support + shipping into the flat rate)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want a high-converting funnel (1.18% realized CR — proven onboarding flow)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want fast onboarding without testing different providers first
                  </li>
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #B14739' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#B14739' }}>
                  Pick someone else if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want month-to-month flexibility (Eden Health, Embody, System Labs all offer cancel-anytime)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want to test compounded GLP-1 cheaply before committing (Embody $149 first month wins)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    Adjacent peptides (NAD+, Sermorelin, B-12) matter — Gala is GLP-1 specialized
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want needle-free format (Direct Meds sublingual, Embody gum)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* All-inclusive deep dive */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The "All-Inclusive" Pricing Model — What It Actually Saves
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Most compounded GLP-1 telehealth providers list a headline monthly medication price, then add fees on
              top: program/membership fees, separate consult charges, shipping, lab work. By the time you total the
              actual cost-of-ownership, the headline price isn&rsquo;t what you pay.
            </p>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Gala Health&rsquo;s "all-inclusive" model bundles everything into the $179-$199/mo flat rate. Here&rsquo;s
              what that includes vs typical add-ons elsewhere:
            </p>
            <div className='space-y-3 mb-5'>
              <BundleRow
                included='Compounded GLP-1/GIP medication'
                detail='Semaglutide ($179/mo) or tirzepatide ($199/mo)'
              />
              <BundleRow
                included='Initial provider consultation'
                detail='Some competitors charge $50-$150 separately'
              />
              <BundleRow
                included='Follow-up consults during 3-month plan'
                detail='Async messaging + scheduled video where needed'
              />
              <BundleRow
                included='Async support throughout the program'
                detail='Care team available between consults'
              />
              <BundleRow
                included='Cold-chain shipping (every refill)'
                detail='Some competitors charge $20-$50/order'
              />
              <BundleRow
                included='Dose escalation reviews'
                detail='Standard titration (2.5mg → 5mg → 7.5mg → etc.) with no upcharge per tier'
              />
              <BundleRow
                included='No separate program/membership fee'
                detail='Ivim Health charges $74.99/mo on top of medication; Gala does not'
              />
            </div>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Practical math:</strong> A patient on semaglutide for 3 months at Gala Health pays $179 × 3 =
              $537 total. A patient on a comparable competitor at headline $179/mo + $75 program fee + $30 shipping
              + $100 consult + dose-escalation upcharges typically lands in the $700-$900 range over 3 months. The
              bundling is real cost savings for the buyer who completes the 3-month commitment.
            </p>
          </div>
        </section>

        {/* The 3-month commitment tradeoff */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <CalendarIcon className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The 3-Month Commitment — Honest Tradeoff
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Gala&rsquo;s bundled pricing is locked to a 3-month commitment. This is a real tradeoff:
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The argument for committing:</strong> SURMOUNT-1 trial data shows weight loss is concentrated in
              months 4-12 of the program — the first 3 months are mostly titration up to therapeutic dose. Patients
              who quit at month 1 or 2 generally haven&rsquo;t given the medication a fair test. The 3-month commitment
              aligns the financial structure with the timeline most patients actually need. Cheaper bundled price
              rewards the realistic plan.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The argument against committing:</strong> Some patients have unexpected side effects,
              insurance changes, life events, or just don&rsquo;t respond well to the medication and want out.
              Month-to-month providers (Eden Health, Embody, System Labs, Care Bare Rx) let you cancel after week 4
              with no penalty. If you&rsquo;re uncertain whether GLP-1 is right for you, month-to-month removes risk —
              even at slightly higher monthly cost.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Foreman call:</strong> Gala wins for buyers who&rsquo;ve already decided — done research, set
              expectations, planning the full course. Eden/Embody/System Labs win for buyers still testing whether
              GLP-1 is the right tool for them.
            </p>
          </div>
        </section>

        {/* Pricing breakdown */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Gala Health Pricing (Verified May 2026)
            </h2>
            <div className='space-y-3'>
              <PricingRow
                product='Compounded Semaglutide (3-month all-inclusive)'
                price='$179/mo · $537 total'
                note='Lowest-priced compounded semaglutide bundled with all support and shipping. 3-month commitment locked in at intake.'
                highlight
              />
              <PricingRow
                product='Compounded Tirzepatide / GIP (3-month all-inclusive)'
                price='$199/mo · $597 total'
                note='Cheaper than Embody flat $299, Eden $229-$249 ongoing tirzepatide, and Direct Meds $399 injectable tirzepatide on a per-month basis with full bundling.'
                highlight
              />
              <PricingRow
                product='No standalone month-to-month option advertised'
                price='—'
                note='Gala does not publicly market month-to-month plans at the bundled rate. Verify at intake if 3-month commitment is a deal-breaker.'
              />
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              Pricing Gronk-verified May 6, 2026 from galaglp1.com. Some homepage offers list $179 entry; final price
              is locked at checkout based on medication and plan structure. All-inclusive flat fee — no separate
              consult, support, or shipping fees billed on top.
            </p>
          </div>
        </section>

        {/* Compliance + pharmacy */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <ShieldCheck className='h-6 w-6' style={{ color: '#7CA982' }} />
              Compliance + Pharmacy Sourcing (May 2026)
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Gala Health sources compounded medications from accredited 503A compounding pharmacies. Post-April 1
              2026 FDA enforcement shift, Gala continues operating under valid 503A patient-specific compounding
              exemptions. The platform&rsquo;s realized 1.18% conversion rate is on the higher end of the active stack,
              suggesting trustworthy onboarding and low post-purchase friction.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              The 3-month bundled commitment also means pharmacy supply continuity matters — if a 503A pharmacy
              partner exits the market mid-program, the provider needs to maintain inventory or transition patients
              smoothly. We&rsquo;ll re-verify Gala&rsquo;s pharmacy partners in the June 4 scheduled update.
            </p>
            <div className='space-y-3 mt-5'>
              <ComplianceRow title='Accredited 503A pharmacy partners' />
              <ComplianceRow title='Licensed prescribers in all 50 US states' />
              <ComplianceRow title='Cold-chain shipping for injectable products (included in bundle)' />
              <ComplianceRow title='1.18% realized conversion rate (Katalys-verified) — strong onboarding' />
              <ComplianceRow title='Operating under valid 503A patient-specific compounding (post-April 2026)' />
            </div>
          </div>
        </section>

        {/* Pros and cons */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Pros and Cons (Honest Read)
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-3' style={{ color: '#7CA982' }}>Pros</div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  {provider?.pros?.map((pro, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #B14739' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-3' style={{ color: '#B14739' }}>Cons</div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  {provider?.cons?.map((con, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='p-7 md:p-10 rounded-3xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
              <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                Best 3-Month Bundle
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Start Gala Health for $179/mo (Bundled)
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                3-month all-inclusive plan. Provider consults, async support, cold-chain shipping all included.
                $179/mo for compounded semaglutide, $199/mo for tirzepatide. No surprise add-on fees. 1.18%
                realized conversion rate.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={galaAffiliate}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with Gala Health <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/best-compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all'
                  style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
                >
                  See Top 6 Programs Ranked
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Gala Health to Other Verified Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Five other Katalys-active programs. Pricing verified May 6, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='providers-gala-health-review'
              heading='Other Verified Compounded GLP-1 Programs'
            />
          </div>
        </section>

        <RelatedGuides currentPath='/providers/gala-health' />

        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Lowest all-inclusive bundle in the active stack.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                $179/mo (semaglutide) or $199/mo (tirzepatide). 3-month commitment. Everything bundled.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={galaAffiliate}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Start Gala Health <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Take the Quiz
                </Link>
                <Link
                  href='/cheapest-tirzepatide-online'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Cheapest Tirzepatide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function StatCard({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className='p-4 rounded-2xl text-center'
      style={{
        backgroundColor: highlight ? '#F4EBD0' : '#F8F4ED',
        border: highlight ? '1px solid #D4A33A' : '1px solid #E5DDC8',
      }}
    >
      <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#6B7B82' }}>{label}</div>
      <div className='text-xl md:text-2xl font-bold' style={{ color: highlight ? '#D4A33A' : '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
        {value}
      </div>
    </div>
  );
}

function BundleRow({ included, detail }: { included: string; detail: string }) {
  return (
    <div className='flex items-start gap-3 p-4 rounded-xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#7CA982' }} />
      <div>
        <div className='font-semibold mb-1' style={{ color: '#0E2A3A' }}>{included}</div>
        <div className='text-sm' style={{ color: '#3D5560' }}>{detail}</div>
      </div>
    </div>
  );
}

function PricingRow({ product, price, note, highlight = false }: { product: string; price: string; note: string; highlight?: boolean }) {
  return (
    <div
      className='p-5 rounded-2xl bg-white'
      style={{ border: highlight ? '2px solid #D4A33A' : '1px solid #E5DDC8' }}
    >
      <div className='flex flex-wrap items-baseline gap-3 mb-1'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{product}</h3>
        <span className='text-base font-bold' style={{ color: '#D4A33A' }}>{price}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{note}</p>
    </div>
  );
}

function ComplianceRow({ title }: { title: string }) {
  return (
    <div className='flex items-center gap-3 p-3 rounded-xl' style={{ backgroundColor: '#F0EBE0' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0' style={{ color: '#7CA982' }} />
      <span className='text-sm font-semibold' style={{ color: '#0E2A3A' }}>{title}</span>
    </div>
  );
}
