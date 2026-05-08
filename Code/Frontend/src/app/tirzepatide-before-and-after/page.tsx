import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { primaryProviders } from '@/lib/glp1-providers';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, TrendingDown, Clock, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tirzepatide Before and After 2026: Trial Data, Realistic Timeline, and Honest Expectations | GLP1CompareHub',
  description:
    'Honest tirzepatide before-and-after framing — what published clinical trials show (SURMOUNT-1: 20.2% average weight loss at 72 weeks), how the timeline unfolds month by month, and why compounded versions may not match branded trial data. No fake testimonials.',
  alternates: { canonical: 'https://glp1comparehub.com/tirzepatide-before-and-after' },
  openGraph: {
    title: 'Tirzepatide Before and After — Trial Data + Realistic Timeline',
    description:
      'What clinical trials show vs marketing claims. Branded SURMOUNT-1 data, compounded efficacy caveats, and a realistic month-by-month dose-titration timeline.',
    url: 'https://glp1comparehub.com/tirzepatide-before-and-after',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-tirzepatide-before-and-after.jpg', width: 1168, height: 784, alt: 'Tirzepatide Before and After — what to realistically expect' }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tirzepatide Before and After: Trial Data, Realistic Timeline, and Honest Expectations',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/tirzepatide-before-and-after',
  about: ['Tirzepatide weight loss', 'SURMOUNT-1 trial', 'Branded Zepbound', 'Compounded tirzepatide'],
  citation: [
    { '@type': 'CreativeWork', name: 'SURMOUNT-1 (NEJM 2022)', url: 'https://www.nejm.org/doi/10.1056/NEJMoa2206038' },
    { '@type': 'CreativeWork', name: 'SURMOUNT-5 (NEJM 2025)', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2416394' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much weight do people lose on tirzepatide on average?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In SURMOUNT-1 (the registration trial for branded Zepbound published in NEJM 2022), participants on the highest 15mg dose lost an average of 20.2% of body weight at 72 weeks (about 17 months). The 10mg arm averaged 19.5% and the 5mg arm averaged 16.0%. Half of trial participants on the highest dose lost more than 22.5% of body weight; about 36% lost more than 25%. These are population averages — individual response varies substantially. Compounded tirzepatide does NOT have published trial data; the branded numbers should not be assumed to transfer directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results on tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients begin seeing weight loss within the first 4-8 weeks, but the most rapid loss typically occurs after dose escalation (months 3-6). The standard titration schedule starts at 2.5mg weekly for 4 weeks (a starter "tolerability" dose, not a full therapeutic dose), then increases to 5mg, 7.5mg, 10mg, 12.5mg, and 15mg in 4-week intervals if tolerated. SURMOUNT-1 measured at 72 weeks (~17 months) — that is the timeline at which the trial averages quoted in the literature were achieved.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the weight loss from compounded tirzepatide the same as branded Zepbound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No data exists to confirm that. Compounded tirzepatide is produced by 503A pharmacies under FDA exemptions and does NOT undergo the same pre-market efficacy testing as branded Zepbound. The SURMOUNT-1 trial efficacy figures (20.2% average weight loss at 72 weeks) apply specifically to Eli Lilly\'s branded tirzepatide formulation. Compounded versions may produce comparable, lower, or variable results depending on batch quality, dose accuracy, and stability. Many patients report comparable subjective results, but no controlled head-to-head data has been published.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are some tirzepatide before-and-after photos online unrealistic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three reasons. First, photos shared online are self-selected — patients with dramatic results post; patients with average or below-average results often don\'t. Second, marketing photos may use lighting, posing, or compression to exaggerate visible change. Third, trial averages (20.2% on the highest dose at 72 weeks) describe POPULATION distributions — individual results vary from 0% to 30%+. We do not publish patient before-and-after photos for these reasons. Trial percentages are the honest reference point.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I expect realistically in my first 6 months on tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Realistic expectations from trial averages: Weeks 0-4 (2.5mg starter): 1-3% body weight loss, primarily from reduced appetite and water shifts. Weeks 5-12 (5mg, 7.5mg titration): 4-8% body weight loss as therapeutic dose is reached. Months 4-6 (10mg, 12.5mg): 9-14% body weight loss for typical responders. Side effects (nausea, GI symptoms) are most common during first 4-8 weeks of each dose escalation. Individual response varies dramatically; about 10-15% of trial participants had minimal response. Lifestyle (diet, sleep, activity) substantially modifies outcomes.',
      },
    },
  ],
};

export default function TirzepatideBeforeAndAfterPage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('tmates', 'tirzepatide-before-and-after')} brandName="TMates" pricePitch="Compounded tirzepatide from $167/mo (12-mo plan)" />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links.{' '}
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
              <span style={{ color: '#0E2A3A' }}>Tirzepatide Before and After</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Tirzepatide <span style={{ color: '#D4A33A' }}>Before & After</span> — Trial Data + Realistic Timeline
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              The honest version: what published clinical trials show (SURMOUNT-1: 20.2% average weight loss at 72 weeks), how the timeline actually unfolds, and why compounded versions may not match branded trial data.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 5, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
            </div>
          </div>
        </section>

        {/* Editorial transparency notice — sets the tone */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#F4EBD0', border: '1px solid #D4A33A' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#7A6020' }} />
                <div className='text-sm font-bold' style={{ color: '#7A6020' }}>
                  Why we don&rsquo;t publish patient before-and-after photos
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                Three reasons. (1) Patient photos are self-selected — dramatic results post, average results don&rsquo;t.
                (2) FDA and FTC guidance restricts specific weight-loss claims tied to individual patient outcomes,
                particularly for non-FDA-approved compounded versions. (3) Trial averages from published, peer-reviewed
                studies are the honest reference point — they describe population distributions, not cherry-picked
                individuals. Below: what the actual data shows.
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR trial data */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-6 md:p-8' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
              <div className='flex items-start gap-3 mb-5'>
                <Trophy className='h-6 w-6 flex-shrink-0' style={{ color: '#D4A33A' }} />
                <h2
                  className='text-2xl md:text-3xl font-bold'
                  style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
                >
                  TL;DR — Trial-Reported Average Weight Loss
                </h2>
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <VerdictCol
                  rank='SURMOUNT-1, 5mg/wk'
                  result='16.0%'
                  detail='Average body weight loss at 72 weeks. Lower-dose arm. NEJM 2022.'
                />
                <VerdictCol
                  rank='SURMOUNT-1, 10mg/wk'
                  result='19.5%'
                  detail='Average body weight loss at 72 weeks. Mid-dose arm. NEJM 2022.'
                />
                <VerdictCol
                  rank='SURMOUNT-1, 15mg/wk'
                  result='20.2%'
                  detail='Average body weight loss at 72 weeks. Highest-dose arm — about 50% more than semaglutide head-to-head. NEJM 2022.'
                />
              </div>
              <p className='text-xs mt-5 italic' style={{ color: '#6B7B82' }}>
                Source: <a href='https://www.nejm.org/doi/10.1056/NEJMoa2206038' target='_blank' rel='noopener noreferrer' style={{ color: '#7A6020', textDecoration: 'underline' }}>SURMOUNT-1 (NEJM 2022)</a>.
                Branded tirzepatide (Zepbound). Population averages across 2,539 adults with obesity or overweight + comorbidity.
                Individual results varied — about 10-15% of participants had minimal response.
              </p>
            </div>
          </div>
        </section>

        {/* Realistic timeline */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Clock className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Realistic Month-by-Month Timeline
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Tirzepatide follows a standard titration schedule — the dose increases every 4 weeks if tolerated. The
              starter dose (2.5mg) is a tolerability dose, not a full therapeutic dose. Most weight loss occurs after the
              dose reaches 7.5–15mg. Here&rsquo;s the typical trajectory based on SURMOUNT-1 data and the standard
              dose-escalation protocol:
            </p>

            <div className='space-y-3'>
              <TimelineRow
                month='Month 1 (Weeks 1-4)'
                dose='2.5mg weekly'
                expected='1–3% body weight loss'
                notes='Tolerability dose. Side effects (nausea, fatigue, GI) most common. Appetite reduction begins. Water-weight shifts can produce visible scale change disproportionate to fat loss.'
              />
              <TimelineRow
                month='Month 2 (Weeks 5-8)'
                dose='5mg weekly'
                expected='3–5% body weight loss (cumulative)'
                notes='First therapeutic dose. Appetite suppression typically more pronounced. Side effects often improve as body adjusts. Weight loss may slow if dose escalation is delayed.'
              />
              <TimelineRow
                month='Month 3 (Weeks 9-12)'
                dose='7.5mg weekly'
                expected='5–8% body weight loss (cumulative)'
                notes='Steady-state therapeutic dose for many patients. Some patients see plateau and remain at this dose long-term if response is sufficient.'
              />
              <TimelineRow
                month='Month 4 (Weeks 13-16)'
                dose='10mg weekly'
                expected='8–11% body weight loss (cumulative)'
                notes='Standard escalation if response at 7.5mg is insufficient. Clinical trials show 10mg arm averaging 19.5% at 72 weeks — most rapid weight loss occurs in months 4-6.'
              />
              <TimelineRow
                month='Month 5 (Weeks 17-20)'
                dose='12.5mg weekly'
                expected='11–14% body weight loss (cumulative)'
                notes='Higher therapeutic dose for patients who require more aggressive titration. Side effects may re-emerge briefly during dose change.'
              />
              <TimelineRow
                month='Month 6 (Weeks 21-24)'
                dose='15mg weekly (max)'
                expected='12–17% body weight loss (cumulative)'
                notes='Maximum approved dose. Most patients who reach this dose continue through month 12+ to capture the full SURMOUNT-1 trajectory.'
              />
              <TimelineRow
                month='Months 7-18 (long-term)'
                dose='Maintenance dose'
                expected='15–22% body weight loss (cumulative average)'
                notes='SURMOUNT-1 measured at 72 weeks (~17 months). Highest-dose arm averaged 20.2% at this endpoint. Weight loss slows but typically continues through month 18; plateau is common at month 24+.'
              />
            </div>
            <p className='text-xs italic mt-4' style={{ color: '#6B7B82' }}>
              Timeline reflects standard titration on branded Zepbound. Compounded tirzepatide may follow different
              titration protocols depending on prescriber and provider. Individual response varies substantially —
              these ranges describe trial averages, not guarantees. Lifestyle, baseline weight, and adherence all
              modify outcomes.
            </p>
          </div>
        </section>

        {/* Distribution of results */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <TrendingDown className='h-6 w-6' style={{ color: '#D4A33A' }} />
              How Results Were Distributed in SURMOUNT-1
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              The 20.2% average weight loss number obscures meaningful variation. SURMOUNT-1 reported the proportion
              of participants who reached different weight-loss thresholds at 72 weeks on the 15mg dose:
            </p>

            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Weight Loss Threshold</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>15mg Tirzepatide</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Placebo (Trial Comparator)</th>
                  </tr>
                </thead>
                <tbody>
                  <DistRow threshold='≥ 5% body weight loss' tirz='91%' placebo='35%' />
                  <DistRow threshold='≥ 10% body weight loss' tirz='84%' placebo='19%' />
                  <DistRow threshold='≥ 15% body weight loss' tirz='71%' placebo='9%' />
                  <DistRow threshold='≥ 20% body weight loss' tirz='57%' placebo='3%' />
                  <DistRow threshold='≥ 25% body weight loss' tirz='36%' placebo='1.5%' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              Source: <a href='https://www.nejm.org/doi/10.1056/NEJMoa2206038' target='_blank' rel='noopener noreferrer' style={{ color: '#D4A33A', textDecoration: 'underline' }}>SURMOUNT-1 (NEJM 2022)</a>.
              Numbers represent percentages of trial participants reaching each threshold at 72 weeks.
              Approximately 9% of 15mg participants did not reach the 5% threshold — minimal response is real and
              not uncommon.
            </p>
          </div>
        </section>

        {/* What modifies results */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              What Substantially Modifies Your Result
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Why two patients on identical 15mg protocols can have wildly different outcomes:
            </p>
            <div className='space-y-3'>
              <ModifierRow
                title='Lifestyle (diet, activity, sleep)'
                body='Tirzepatide reduces appetite — patients who pair it with even modest dietary adjustments and activity tend to capture the higher percentile of trial outcomes. Patients who increase intake to "make up" for reduced appetite (a real pattern) tend to underperform trial averages.'
              />
              <ModifierRow
                title='Adherence to dose schedule'
                body='SURMOUNT-1 results assume consistent weekly dosing through 72 weeks. Missed doses, delayed escalations, or treatment gaps reduce cumulative weight loss. Some patients pause for side effects then never resume — these patients show below-average results.'
              />
              <ModifierRow
                title='Baseline weight and body composition'
                body='Higher baseline BMI patients tend to lose more absolute weight; relative percentage loss varies. Patients with higher muscle-mass ratio tend to preserve more muscle (with adequate protein intake) and lose more fat selectively.'
              />
              <ModifierRow
                title='Compounded vs branded'
                body='Branded Zepbound has standardized dosing and FDA-approved manufacturing. Compounded versions may have batch-to-batch variability in concentration, purity, and stability. Reputable LegitScript-accredited 503A pharmacies minimize this; lower-tier providers do not. Post-April 2026 FDA enforcement narrowed the 503A landscape — see our compounded tirzepatide guide for the regulatory deep-dive.'
              />
              <ModifierRow
                title='Stopping the medication'
                body='Roughly two-thirds of weight lost on tirzepatide is regained within 1-2 years of stopping, per the SURMOUNT-4 maintenance trial. Most prescribers consider tirzepatide a long-term metabolic treatment, not a short-term weight-loss aid.'
              />
            </div>
          </div>
        </section>

        {/* Compounded efficacy caveat — own section */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The Honest Read on Compounded Tirzepatide Results
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Most affordable tirzepatide programs marketed online ($179-$399/mo at telehealth providers) are
              <strong> compounded tirzepatide</strong>, not branded Zepbound. The SURMOUNT-1 efficacy data
              described above applies specifically to branded Zepbound from Eli Lilly — not to compounded versions
              produced by 503A pharmacies.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What we know:</strong> The active molecule (tirzepatide) is the same. The mechanism (dual GIP +
              GLP-1 receptor agonism) is the same.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What we don&rsquo;t know:</strong> Whether the compounded formulation matches branded Zepbound&rsquo;s
              bioavailability, potency, and stability. No published head-to-head clinical trial has compared
              compounded vs branded tirzepatide weight-loss outcomes. Reputable 503A pharmacies follow USP standards
              and produce consistent product, but the FDA does not validate this on a per-batch basis the way it does
              for FDA-approved drugs.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What patients report:</strong> Many patients on compounded tirzepatide report subjective results
              comparable to expectations from trial data. Some report less response than expected. The signal in
              patient communities is positive on average but variable.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Practical implication:</strong> Treat the SURMOUNT-1 numbers as a reasonable upper-bound
              expectation. Some compounded patients will match the trial averages; some will see less.
              The post-April 2026 FDA enforcement environment has narrowed which 503A pharmacies are still operating
              for routine telehealth-scale tirzepatide compounding — verifying your provider&rsquo;s compliance status
              and pharmacy accreditation (LegitScript, NABP) is more important than ever.
            </p>
            <p className='text-sm italic' style={{ color: '#6B7B82' }}>
              See our <Link href='/compounded-tirzepatide' className='underline' style={{ color: '#D4A33A' }}>full compounded tirzepatide guide</Link>{' '}
              for the regulatory landscape and verified provider stack.
            </p>
          </div>
        </section>

        {/* Provider table */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Verified Compounded Tirzepatide Programs (May 2026)
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              All providers ship to all 50 US states. Pricing verified May 5, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='tirzepatide-before-and-after'
              heading='Top Compounded Tirzepatide Providers'
            />
          </div>
        </section>

        {/* What to expect month 1 */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Realistic First-Month Setup (For New Patients)
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl' style={{ backgroundColor: '#F0EBE0', border: '1px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Weeks 1-2 — Adjustment
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Reduced appetite typically begins within 2-3 days of first injection
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Early side effects: mild nausea, fatigue, GI changes (constipation or diarrhea)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Hydration matters substantially during weeks 1-4 (low intake amplifies side effects)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Scale change in week 1 is usually water shifts, not fat loss
                  </li>
                </ul>
              </div>
              <div className='p-5 rounded-2xl' style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
                  Weeks 3-4 — Stabilization
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Most side effects start to improve as body adjusts
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Cumulative weight loss typically 1-3% by end of week 4
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Protein intake becomes important to preserve muscle as weight drops
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Dose escalation to 5mg typically scheduled at week 5 if tolerated
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <RelatedGuides currentPath="/tirzepatide-before-and-after" />

        {/* Final CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Ready to start? Get matched in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the verified provider that fits your timeline, format preference, and budget.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/best-compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Top 6 Compounded Programs
                </Link>
                <Link
                  href='/compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Full Compounded Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}

function VerdictCol({ rank, result, detail }: { rank: string; result: string; detail: string }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
        {rank}
      </div>
      <div className='text-4xl font-bold mb-2' style={{ color: '#D4A33A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
        {result}
      </div>
      <p className='text-xs leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function TimelineRow({ month, dose, expected, notes }: { month: string; dose: string; expected: string; notes: string }) {
  return (
    <div className='flex items-start gap-4 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex-shrink-0' style={{ minWidth: '160px' }}>
        <div className='font-bold text-sm' style={{ color: '#0E2A3A' }}>{month}</div>
        <div className='text-xs font-semibold mt-1' style={{ color: '#D4A33A' }}>{dose}</div>
      </div>
      <div className='flex-1'>
        <div className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{expected}</div>
        <div className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{notes}</div>
      </div>
    </div>
  );
}

function DistRow({ threshold, tirz, placebo }: { threshold: string; tirz: string; placebo: string }) {
  return (
    <tr className='border-t' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{threshold}</td>
      <td className='px-5 py-3 text-center font-bold text-base' style={{ color: '#D4A33A' }}>{tirz}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#6B7B82' }}>{placebo}</td>
    </tr>
  );
}

function ModifierRow({ title, body }: { title: string; body: string }) {
  return (
    <div className='flex items-start gap-3 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#7CA982' }} />
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{title}</h3>
        <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{body}</p>
      </div>
    </div>
  );
}
