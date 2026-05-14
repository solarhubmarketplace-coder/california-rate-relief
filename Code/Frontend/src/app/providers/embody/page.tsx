import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders, getProviderBySlug } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Award, ShieldCheck, Zap, DollarSign, Pill } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Embody Review May 2026: $149 First Month, $299 Flat Refills, GLP-1 Gum | GLP1CompareHub',
  description:
    'Independent Embody (joinem.co) review verified May 2026. Highest realized EPC ($4.60) and conversion rate (1.31%) in our active stack. $149 first month with Spring Forward $200-off promo, then flat $299/mo refills with no dose-escalation upcharges. GLP-1 gum format available.',
  alternates: { canonical: 'https://glp1comparehub.com/providers/embody' },
  openGraph: {
    title: 'Embody Review — $149 First Month / $299 Flat Refills + GLP-1 Gum',
    description:
      'Highest realized EPC in our active stack. Flat refill pricing, Spring Forward $200 off, and the only GLP-1 gum format available.',
    url: 'https://glp1comparehub.com/providers/embody',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'MedicalBusiness',
    name: 'Embody',
    url: 'https://joinem.co',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.7',
    bestRating: '5',
  },
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Embody legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Embody (joinem.co) is a US-based telehealth platform offering compounded GLP-1 weight-loss medication through licensed prescribers and LegitScript-accredited 503A compounding pharmacies. As of May 2026, Embody has the highest realized earnings-per-click ($4.60) and conversion rate (1.31%) in our active affiliate stack — both metrics indicate trustworthy onboarding and patient satisfaction. It is approved on the Katalys affiliate network with $400 default CPA payouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Embody cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Embody is $149 for the first month (with the active Spring Forward promo: $200 off + free expedited shipping). Refills are flat $299/mo regardless of dose — uncommon in compounded telehealth where most providers raise prices as your dose escalates from 2.5mg to 15mg. The first-month price includes physician review, personalized dosing plan, 1:1 guidance, metabolic report, medication, and free shipping. HSA/FSA eligible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Embody\'s GLP-1 gum format?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Embody is the only verified provider in our active May 2026 stack offering compounded GLP-1 in a chewable gum format — a daily oral chewable alternative to weekly injection. The gum is designed to release the active compound through buccal (cheek) absorption when chewed. Bioavailability via buccal absorption has not been independently verified against injection in published trials, so patients should expect possibly reduced efficacy. The format is real and unique among active providers; it is not FDA-approved.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Embody offer sermorelin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sermorelin is NOT offered in Embody\'s core GLP-1 program (Gronk-verified May 2026). It may be available as a cross-sell or upsell to existing customers but is not part of the advertised intake flow. If sermorelin is a primary need, see System Labs (oral $79 first month, injectable $109 first month) or Direct Meds (compounded sermorelin $299.99/mo).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel Embody anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Embody allows you to pause or cancel anytime — no long-term commitment. The $149 first-month / $299 flat-refill pricing applies on a month-to-month basis. This flexibility is a real differentiator vs providers like Gala Health (3-month commitment for bundled pricing) and Calibrate (3-month minimum).',
      },
    },
  ],
};

export default function EmbodyReviewPage() {
  const provider = getProviderBySlug('embody');
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active' && p.slug !== 'embody')
    .slice(0, 5);

  const embodyAffiliate = buildAffiliateUrl('glp1-embody', 'providers-embody-review');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission — at no extra cost to you.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <Link href='/providers' style={{ color: '#6B7B82' }}>Providers</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Embody Review</span>
            </nav>
            <div className='flex flex-wrap items-baseline gap-3 mb-4'>
              <h1
                className='text-3xl md:text-5xl font-bold leading-[1.1]'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <span style={{ color: '#D4A33A' }}>Embody</span> Review 2026
              </h1>
              <span className='text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
                <Award className='h-3 w-3' />
                Best Overall
              </span>
            </div>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Highest realized EPC ($4.60) and conversion rate (1.31%) in our active May 2026 stack. Flat $299/mo refills, GLP-1 gum format, $200-off intro promo. The data leader on joinem.co.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 5, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
              <span>·</span>
              <span>Verified provider · joinem.co</span>
            </div>
          </div>
        </section>

        {/* Quick stats card */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              <StatCard label='Rating' value='4.7 / 5' />
              <StatCard label='Realized EPC' value='$4.60' highlight />
              <StatCard label='Conversion Rate' value='1.31%' highlight />
              <StatCard label='First Month' value='$149' />
              <StatCard label='Flat Refill' value='$299/mo' />
            </div>
            <p className='text-xs italic mt-4 text-center' style={{ color: '#6B7B82' }}>
              EPC and CR are realized affiliate metrics from the Katalys partner dashboard, not estimates. Higher
              numbers indicate stronger website conversion design and trustworthy patient onboarding. Updated May 5, 2026.
            </p>
          </div>
        </section>

        {/* Active promo banner */}
        <section className='py-4' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-4 flex items-start gap-3' style={{ backgroundColor: '#F4EBD0', border: '1px solid #D4A33A' }}>
              <Award className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#7A6020' }} />
              <div className='flex-1'>
                <div className='text-sm font-bold mb-1' style={{ color: '#7A6020' }}>
                  🌟 Active Spring Forward Promo (May 2026)
                </div>
                <div className='text-sm' style={{ color: '#3D5560' }}>
                  $200 off your first order + free expedited shipping. Locks the first month at $149 (regularly $349
                  before the promo). Promo applies on initial intake; refills follow standard $299/mo flat pricing.
                </div>
              </div>
              <a
                href={embodyAffiliate}
                target='_blank'
                rel='sponsored nofollow noopener noreferrer'
                className='hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white text-sm flex-shrink-0'
                style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
              >
                Claim Promo <ArrowRight className='h-3 w-3' />
              </a>
            </div>
          </div>
        </section>

        {/* TL;DR */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TL;DR — Who Embody Is For
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>
                  Pick Embody if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want flat-rate pricing immune to dose escalation ($299/mo at any dose)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want to test compounded GLP-1 cheaply (Spring Forward $200 off = $149 first month)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You&rsquo;re needle-averse and curious about GLP-1 gum
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want fast onboarding (2-minute intake) with HSA/FSA eligibility
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
                    You want the absolute lowest sustained price (System Labs at $179/mo wins)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    Sermorelin is a primary need (Embody doesn&rsquo;t offer it in the core program)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want branded Wegovy or Zepbound (Embody is compounded only)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    Lab work bundled into the monthly fee matters (not included at Embody)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing deep dive */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Pricing Deep Dive — The Flat-Refill Model
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Most compounded GLP-1 telehealth providers raise prices as your dose escalates — typical pattern is
              $179/mo at 2.5mg, $229/mo at 5mg, $279/mo at 7.5mg, $329/mo at 10mg, etc. By the time you reach the
              therapeutic 10mg–15mg dose where SURMOUNT-1 measured 19.5–20.2% weight loss, you&rsquo;re paying $300+
              per month at most providers.
            </p>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Embody&rsquo;s differentiator:</strong> $299/mo flat across every dose tier. Whether you&rsquo;re
              titrating up at 2.5mg or maintaining at 15mg, the refill price is the same. This makes Embody
              meaningfully cheaper for long-term users who reach higher therapeutic doses, and it eliminates the
              "oh wait, my next refill jumped $50" surprise that other providers create at each escalation step.
            </p>

            <div className='overflow-x-auto rounded-2xl mb-5' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Dose Tier</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Embody (Flat)</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Typical Compounded Provider</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Embody Saves</th>
                  </tr>
                </thead>
                <tbody>
                  <DoseRow tier='2.5mg starter' embody='$299/mo' typical='$179/mo' diff='-$120' />
                  <DoseRow tier='5mg' embody='$299/mo' typical='$229/mo' diff='-$70' />
                  <DoseRow tier='7.5mg' embody='$299/mo' typical='$279/mo' diff='-$20' />
                  <DoseRow tier='10mg' embody='$299/mo' typical='$329/mo' diff='+$30 saved' positive />
                  <DoseRow tier='12.5mg' embody='$299/mo' typical='$379/mo' diff='+$80 saved' positive />
                  <DoseRow tier='15mg (max)' embody='$299/mo' typical='$429/mo' diff='+$130 saved' positive />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic' style={{ color: '#6B7B82' }}>
              Comparison rows reflect typical compounded telehealth dose-escalation pricing (industry-average pattern).
              Specific competitor pricing varies — see our{' '}
              <Link href='/best-compounded-tirzepatide' className='underline' style={{ color: '#D4A33A' }}>full provider comparison</Link>.
              Embody is more expensive at low doses, becomes competitive at 7.5mg, and meaningfully cheaper at the
              therapeutic 10mg+ tier where most patients land long-term.
            </p>
          </div>
        </section>

        {/* GLP-1 gum differentiator */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Pill className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The GLP-1 Gum — Embody&rsquo;s Unique Format
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Embody is the only verified provider in our active May 2026 stack offering compounded GLP-1 in a
              chewable gum format. The gum is designed to deliver the active compound via buccal (cheek-side) absorption
              when chewed daily. For patients with strong needle aversion who would otherwise not start (or would
              discontinue) injectable therapy, this is a real option.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Honest read on the gum:</strong> No published clinical trial has compared Embody&rsquo;s GLP-1
              gum format to injection in head-to-head efficacy testing. Bioavailability of peptides via buccal
              absorption is generally lower than subcutaneous injection. Patients should reasonably expect possibly
              reduced weight-loss response compared to the SURMOUNT-1 trial averages (which were measured on branded
              injectable Zepbound, not on compounded gum). The format is real, the convenience is real, but the
              efficacy data is not equivalent.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              For the deeper read on bioavailability and the competing sublingual format from Direct Meds, see our{' '}
              <Link href='/oral-tirzepatide' className='underline' style={{ color: '#D4A33A' }}>oral tirzepatide guide</Link>.
            </p>
          </div>
        </section>

        {/* Embody vs the field */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Embody vs the Field — Where It Wins and Loses
            </h2>
            <div className='space-y-4'>
              <CompetitorRow
                competitor='vs System Labs ($179/mo)'
                winner='System Labs on price'
                analysis='System Labs wins on lowest sustained monthly price ($179 vs Embody $299). Embody wins on conversion data (1.31% CR vs unknown), needle-free option (gum vs injection only), and brand recognition. Pick System Labs if cheapest matters most; pick Embody if data + format flexibility matters more.'
              />
              <CompetitorRow
                competitor='vs Eden Health ($149 intro / $229-249)'
                winner='Eden on intro pricing comparable'
                analysis={`Eden's intro is also $149 like Embody's (without promo) and ongoing $229-249 is cheaper than Embody's $299. But Eden has dose-tier pricing variation, while Embody is genuinely flat. Eden has slightly lower realized EPC ($3.92 vs $4.60). Long-term cost: roughly tied at the therapeutic dose; Eden cheaper at lower doses.`}
              />
              <CompetitorRow
                competitor='vs Direct Meds (sublingual $224.10)'
                winner='Embody on conversion + injection option'
                analysis='Direct Meds offers compounded sublingual drops as a needle-free format. Embody offers compounded GLP-1 gum. Both formats lack head-to-head bioavailability data vs injection. Embody has higher realized conversion rates and offers both injection AND gum. Direct Meds wins if you specifically prefer drops over gum.'
              />
              <CompetitorRow
                competitor='vs Gala Health ($179-199 3-mo plan)'
                winner='Gala on bundled price; Embody on flexibility'
                analysis={`Gala is cheaper IF you commit to 3 months ($179-199/mo all-inclusive). Embody is more expensive on monthly basis but cancel-anytime — meaningful for patients who want to test the medication first. Gala's realized EPC ($3.60) is lower than Embody's ($4.60), suggesting Embody's funnel converts harder.`}
              />
              <CompetitorRow
                competitor='vs Care Bare Rx ($199+ multi-vertical)'
                winner='Care Bare on multi-vertical; Embody on GLP-1 specialty'
                analysis='Care Bare bundles weight loss + hair regrowth + sexual health + NAD+ under one provider. Embody is GLP-1-specialized. Pick Care Bare if you want one platform for multi-vertical care; pick Embody if GLP-1 is the primary need and conversion data matters.'
              />
            </div>
          </div>
        </section>

        {/* How to sign up */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Zap className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The Embody Intake — 2 Minutes to Provider Review
            </h2>
            <div className='space-y-3'>
              <StepRow
                num='1'
                title='Online intake'
                body='Brief 2-minute medical questionnaire on joinem.co. Covers basic medical history, current medications, weight loss goals, and contraindications. No labs required upfront for most patients.'
              />
              <StepRow
                num='2'
                title='Provider review'
                body='Licensed prescriber reviews your intake (typically same-day or within 24 hours). May request additional information; may approve, request modifications, or decline. Decline is rare for healthy adults meeting BMI eligibility.'
              />
              <StepRow
                num='3'
                title='Personalized plan + metabolic report'
                body='Approved patients receive a personalized dosing plan and metabolic report. The plan is based on your inputs and prescriber assessment.'
              />
              <StepRow
                num='4'
                title='Cold-chain shipping'
                body='Compounded medication ships from a LegitScript-accredited 503A pharmacy with cold packs. Free expedited shipping on first order with the Spring Forward promo. Refills auto-ship monthly unless paused.'
              />
              <StepRow
                num='5'
                title='1:1 guidance + ongoing support'
                body='Async messaging with care team. Pause anytime. Cancel anytime. Each refill is $299/mo flat regardless of dose escalation.'
              />
            </div>
          </div>
        </section>

        {/* Compliance + pharmacy */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <ShieldCheck className='h-6 w-6' style={{ color: '#7CA982' }} />
              Compliance + Pharmacy Sourcing (May 2026)
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Embody sources from LegitScript-accredited 503A compounding pharmacies. The April 1, 2026 FDA enforcement
              shift restricted 503A pharmacies to true patient-specific compounding (documented allergies, custom
              strengths) rather than routine telehealth-scale production. Embody continues operating under valid
              503A patient-specific compounding exemptions as of May 5, 2026.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>FDA April 30 503B exclusion proposal:</strong> The proposal targets 503B outsourcing facilities,
              not 503A. If finalized after the June 29 comment period, Embody&rsquo;s 503A supply chain would not be
              directly affected. However, the broader compounded GLP-1 landscape may tighten further. We re-verify
              provider operating status monthly. See our{' '}
              <Link href='/compounded-tirzepatide' className='underline' style={{ color: '#D4A33A' }}>compounded tirzepatide regulatory deep-dive</Link>{' '}
              for the full context.
            </p>
            <div className='space-y-3 mt-5'>
              <ComplianceRow title='LegitScript-accredited pharmacy partners' />
              <ComplianceRow title='Cold-chain shipping (medication arrives refrigerated)' />
              <ComplianceRow title='Licensed prescribers in all 50 US states' />
              <ComplianceRow title='HSA/FSA eligible' />
              <ComplianceRow title='Pause or cancel anytime — no long-term commitment' />
              <ComplianceRow title='Operating under valid 503A patient-specific compounding (post-April 2026)' />
            </div>
          </div>
        </section>

        {/* Pros and cons */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
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
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='p-7 md:p-10 rounded-3xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
              <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                Editor&rsquo;s Pick · Best Overall
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Start Embody for $149 (Spring Forward Promo)
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                $149 first month with the active $200-off promo + free expedited shipping. Then flat $299/mo refills
                regardless of dose. GLP-1 gum format available for needle-averse patients. Pause or cancel anytime.
                LegitScript-accredited 503A pharmacy supply.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={embodyAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with Embody <ArrowRight className='h-4 w-4' />
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

        {/* Compare to other providers */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Embody to Other Verified Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Five other Katalys-active programs. Pricing verified May 5, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='providers-embody-review'
              heading='Other Verified Compounded Tirzepatide Programs'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/providers/embody" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Ready to start? Claim the Spring Forward promo.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                $149 first month + free expedited shipping. Flat $299/mo refills. Cancel anytime.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={embodyAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Start Embody <ArrowRight className='h-4 w-4' />
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
                  Compare Cheapest Options
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

function DoseRow({ tier, embody, typical, diff, positive = false }: { tier: string; embody: string; typical: string; diff: string; positive?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{tier}</td>
      <td className='px-5 py-3 text-center font-bold' style={{ color: '#D4A33A' }}>{embody}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{typical}</td>
      <td className='px-5 py-3 text-right text-sm font-semibold' style={{ color: positive ? '#7CA982' : '#6B7B82' }}>
        {diff}
      </td>
    </tr>
  );
}

function CompetitorRow({ competitor, winner, analysis }: { competitor: string; winner: string; analysis: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex flex-wrap items-baseline gap-3 mb-2'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{competitor}</h3>
        <span className='text-xs font-semibold' style={{ color: '#D4A33A' }}>→ {winner}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{analysis}</p>
    </div>
  );
}

function StepRow({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className='flex items-start gap-4 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div
        className='flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold'
        style={{ backgroundColor: '#D4A33A', color: 'white', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {num}
      </div>
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{title}</h3>
        <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{body}</p>
      </div>
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
