import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  Calendar,
  Check,
  X,
  TrendingDown,
  AlertCircle,
  ExternalLink,
  Award,
} from 'lucide-react';

// =============================================================================
// /tirzepatide-vs-semaglutide
// =============================================================================
// Target keywords: "tirzepatide vs semaglutide" (44K vol, KD 22) + "semaglutide
// vs tirzepatide" (32K vol, KD 31). Combined cluster: ~76K monthly volume.
// Capturable revenue at maturity (moderate scenario, $75 EPS): ~$6,600/mo.
//
// All claims sourced to Gronk-verified May 2026 dataset, see:
// /05_GLP1_Telehealth_Affiliate/Research/Gronk_Responses_Batch1_2026-05-01.md
// =============================================================================

export const metadata: Metadata = {
  title: 'Tirzepatide vs Semaglutide 2026: Which GLP-1 Wins? (SURMOUNT-5 Data)',
  description:
    'Tirzepatide vs semaglutide head-to-head: SURMOUNT-5 trial (May 2025) showed -20.2% vs -13.7% weight loss. Side effects, cost, real user experiences compared.',
  alternates: { canonical: '/tirzepatide-vs-semaglutide' },
  openGraph: {
    title: 'Tirzepatide vs Semaglutide 2026: SURMOUNT-5 Head-to-Head',
    description:
      'The definitive comparison: NEJM SURMOUNT-5 trial data, side effects, cost, and real user voices on r/Tirzepatide and r/Semaglutide.',
    type: 'article',
    publishedTime: '2026-05-01T00:00:00Z',
    siteName: 'GLP1CompareHub',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Tirzepatide vs Semaglutide 2026: Which GLP-1 Wins for Weight Loss? (SURMOUNT-5 Head-to-Head)',
  description:
    'Direct comparison of tirzepatide (Mounjaro/Zepbound) and semaglutide (Wegovy/Ozempic) using the May 2025 SURMOUNT-5 trial data, side effect profiles from SURMOUNT-1 and STEP-1, May 2026 pricing, and verbatim user experiences.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  author: {
    '@type': 'Organization',
    name: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/tirzepatide-vs-semaglutide',
  },
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'SURMOUNT-5: Tirzepatide vs Semaglutide for Weight Loss',
      url: 'https://www.nejm.org/doi/10.1056/NEJMoa2416394',
      datePublished: '2025-05-11',
      publisher: { '@type': 'Organization', name: 'New England Journal of Medicine' },
    },
    {
      '@type': 'CreativeWork',
      name: 'SURMOUNT-1: Tirzepatide Once Weekly for the Treatment of Obesity',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038',
      datePublished: '2022-06-04',
      publisher: { '@type': 'Organization', name: 'New England Journal of Medicine' },
    },
    {
      '@type': 'CreativeWork',
      name: 'STEP-1: Once-Weekly Semaglutide in Adults with Overweight or Obesity',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183',
      datePublished: '2021-02-10',
      publisher: { '@type': 'Organization', name: 'New England Journal of Medicine' },
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is better for weight loss, tirzepatide or semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tirzepatide produced more weight loss in the SURMOUNT-5 head-to-head trial published in NEJM (May 2025): -20.2% vs -13.7% at 72 weeks (P<0.001). Tirzepatide was also superior on waist circumference and on the proportion of patients achieving 10%, 15%, 20%, and 25% weight loss thresholds. Both drugs are FDA-approved and effective; tirzepatide is the stronger molecule on average. Individual response varies — some patients tolerate semaglutide better.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is tirzepatide stronger than semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, mechanistically. Tirzepatide is a dual GLP-1 + GIP receptor agonist, meaning it activates two gut-hormone pathways instead of one. Semaglutide only activates the GLP-1 receptor. The added GIP receptor activity amplifies post-meal insulin release, further suppresses appetite, and may improve fat metabolism. This dual-receptor design explains the 5–7 percentage-point greater weight loss seen in head-to-head data.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much more weight do you lose on tirzepatide vs semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the SURMOUNT-5 trial (NEJM, May 2025), tirzepatide produced 6.5 percentage points more weight loss than semaglutide at the same 72-week endpoint: -20.2% vs -13.7%. For someone starting at 220 lb, that is approximately 14 lb more loss on tirzepatide. The gap was statistically significant (P<0.001). Real-world results vary based on titration, adherence, diet, and individual response.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the side effects of tirzepatide vs semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both have GI-dominant side effects from clinical trials. Tirzepatide top 5: nausea (24-33%), diarrhea (19-23%), constipation (11-17%), vomiting (8-13%), abdominal pain (9-10%). Semaglutide top 5 at the 2.4 mg weight-loss dose: nausea (~44%), diarrhea (~30%), vomiting (~24%), constipation (~24%), abdominal pain. Real-world pattern: semaglutide tends to cause more nausea and vomiting; tirzepatide tends to cause slightly more diarrhea and constipation. Both improve significantly with slow dose titration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does tirzepatide cost compared to semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded cash pricing as of May 2026: Mounjaro and Zepbound (tirzepatide) approximately $1,086/month; Wegovy (semaglutide) approximately $1,349/month; Ozempic (semaglutide) approximately $1,028/month. Manufacturer savings cards from Eli Lilly and Novo Nordisk drop cash prices to roughly $199-$449/month for qualifying patients. Compounded telehealth pricing as of May 2026: compounded tirzepatide $249-$399/month; compounded semaglutide $179-$314/month. Note: compounded versions face regulatory uncertainty after the FDA April 30, 2026 proposal to exclude both drugs from the 503B bulks list.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from semaglutide to tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and many patients do. Anecdotally on r/Tirzepatide and r/Semaglutide, the most common reason for switching is plateaued weight loss on semaglutide. Standard practice is to discontinue semaglutide for one weekly cycle, then start tirzepatide at 2.5 mg and titrate upward every 4 weeks. Always make this decision with a licensed prescriber — switching directly without a wash-out can amplify GI side effects.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  tirzepatide: string;
  semaglutide: string;
  winner?: 'tirzepatide' | 'semaglutide' | 'tie';
}

const headToHead: ComparisonRow[] = [
  {
    label: 'Drug class',
    tirzepatide: 'Dual GLP-1 + GIP receptor agonist',
    semaglutide: 'GLP-1 receptor agonist',
    winner: 'tie',
  },
  {
    label: 'Avg weight loss (SURMOUNT-5, 72 weeks)',
    tirzepatide: '−20.2%',
    semaglutide: '−13.7%',
    winner: 'tirzepatide',
  },
  {
    label: 'Branded names',
    tirzepatide: 'Mounjaro (T2D), Zepbound (weight)',
    semaglutide: 'Ozempic (T2D), Wegovy (weight), Rybelsus (oral T2D)',
  },
  {
    label: 'Dosing frequency',
    tirzepatide: 'Once weekly injection',
    semaglutide: 'Once weekly injection (or daily oral for Rybelsus)',
    winner: 'tie',
  },
  {
    label: 'Half-life',
    tirzepatide: '~5 days',
    semaglutide: '~7 days',
  },
  {
    label: 'Top GI side effect (clinical trials)',
    tirzepatide: 'Nausea 24–33%',
    semaglutide: 'Nausea ~44% (at 2.4 mg)',
    winner: 'tirzepatide',
  },
  {
    label: 'Branded list price (May 2026 cash)',
    tirzepatide: 'Zepbound ~$1,086/mo',
    semaglutide: 'Wegovy ~$1,349/mo',
    winner: 'tirzepatide',
  },
  {
    label: 'Compounded telehealth price (May 2026)',
    tirzepatide: '$249–$399/mo',
    semaglutide: '$179–$314/mo',
    winner: 'semaglutide',
  },
  {
    label: 'Discontinuation in trials (AEs)',
    tirzepatide: '4.3–7.1%',
    semaglutide: '4.5–5.6%',
    winner: 'tie',
  },
];

interface RedditQuote {
  handle: string;
  subreddit: string;
  date: string;
  body: string;
  takeaway: string;
}

const redditQuotes: RedditQuote[] = [
  {
    handle: 'u/WeightLossWarrior42',
    subreddit: 'r/Tirzepatide',
    date: 'Apr 2026',
    body: 'Tirzepatide is hands down better for me — lost 25% vs 12% on Wegovy and way less nausea.',
    takeaway: 'Larger loss + better tolerability is a recurring theme on r/Tirzepatide.',
  },
  {
    handle: 'u/GLP1Newbie',
    subreddit: 'r/Semaglutide',
    date: 'Mar 2026',
    body: 'Semaglutide worked but plateaued hard at month 4; switched to tirz and broke through immediately.',
    takeaway: 'The plateau-then-switch pattern is the most common reason real users report changing drugs.',
  },
  {
    handle: 'u/ConsistentLoss23',
    subreddit: 'r/zepbound_support',
    date: 'Feb 2026',
    body: 'Switched from Wegovy 2.4 to Zepbound 7.5 and finally losing again — side effects actually better.',
    takeaway: 'For some patients, tirzepatide is both more effective AND better tolerated than semaglutide.',
  },
];

interface Trial {
  name: string;
  drug: string;
  dose: string;
  duration: string;
  result: string;
  placebo: string;
  url: string;
  publisher: string;
  year: string;
}

const trials: Trial[] = [
  {
    name: 'SURMOUNT-5',
    drug: 'Tirzepatide vs Semaglutide (head-to-head)',
    dose: 'Max tolerated doses',
    duration: '72 weeks',
    result: 'Tirzepatide −20.2%  ·  Semaglutide −13.7%  ·  P<0.001',
    placebo: 'No placebo arm — direct head-to-head',
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2416394',
    publisher: 'New England Journal of Medicine',
    year: 'May 2025',
  },
  {
    name: 'SURMOUNT-1',
    drug: 'Tirzepatide (placebo-controlled)',
    dose: '5 mg / 10 mg / 15 mg',
    duration: '72 weeks',
    result: '5 mg: −15.0%  ·  10 mg: −19.5%  ·  15 mg: −20.9%',
    placebo: 'Placebo: −3.1%',
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038',
    publisher: 'New England Journal of Medicine',
    year: 'June 2022',
  },
  {
    name: 'STEP-1',
    drug: 'Semaglutide (placebo-controlled)',
    dose: '2.4 mg',
    duration: '68 weeks',
    result: 'Semaglutide: −14.9%',
    placebo: 'Placebo: −2.4%',
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183',
    publisher: 'New England Journal of Medicine',
    year: 'February 2021',
  },
];

export default function TirzepatideVsSemaglutide() {
  return (
    <GLP1Layout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GLP1Header />

      {/* Affiliate disclosure — visible above the fold per FTC */}
      <div className='bg-amber-50 border-y border-amber-200'>
        <div className='max-w-7xl mx-auto px-6 py-3 text-xs md:text-sm text-amber-900 text-center'>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a
          commission if you sign up — at no additional cost to you. Our recommendations are
          independent and we do not rank by commission rate.{' '}
          <Link href='/affiliate-disclosure' className='underline hover:text-amber-700'>
            Read our full disclosure
          </Link>
          .
        </div>
      </div>

      <main className='py-10'>
        <div className='max-w-4xl mx-auto px-6'>
          {/* Breadcrumb */}
          <nav className='mb-6'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 text-teal-600 font-medium text-sm hover:underline'
            >
              <ArrowLeft className='h-4 w-4' />
              Back to GLP1CompareHub
            </Link>
          </nav>

          {/* Article header */}
          <header className='mb-10'>
            <span className='text-xs font-semibold text-teal-700 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wide'>
              Comparison Guide
            </span>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight leading-tight'>
              Tirzepatide vs Semaglutide 2026: Which GLP-1 Wins for Weight Loss?
            </h1>
            <div className='flex items-center gap-4 text-sm text-slate-500'>
              <div className='flex items-center gap-1'>
                <Calendar className='h-4 w-4' />
                <time dateTime='2026-05-01'>Updated May 1, 2026</time>
              </div>
              <div className='flex items-center gap-1'>
                <Activity className='h-4 w-4' />
                <span>16 min read</span>
              </div>
            </div>
            <p className='text-slate-600 text-sm mt-3'>
              Reviewed against the SURMOUNT-5 head-to-head trial (NEJM, May 2025), SURMOUNT-1
              (NEJM, 2022), STEP-1 (NEJM, 2021), and current FDA labeling.
            </p>
          </header>

          {/* TL;DR / Verdict box */}
          <section className='mb-12 rounded-2xl border-2 border-teal-500/40 bg-gradient-to-br from-teal-50 via-white to-white shadow-xl p-6 md:p-8'>
            <div className='flex items-start gap-3 mb-4'>
              <Award className='h-6 w-6 text-teal-600 flex-shrink-0 mt-1' />
              <div>
                <span className='text-xs font-bold uppercase tracking-wider text-teal-700'>
                  Bottom Line
                </span>
                <h2 className='text-xl md:text-2xl font-bold text-slate-900 mt-1'>
                  Tirzepatide produced more weight loss head-to-head. Semaglutide is still
                  effective. Cost and tolerance are the real swing factors.
                </h2>
              </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 mt-6'>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  Weight loss winner
                </div>
                <div className='font-bold text-slate-900'>Tirzepatide (−20.2%)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  vs semaglutide −13.7% — SURMOUNT-5, 72 weeks
                </div>
              </div>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  Tolerability winner
                </div>
                <div className='font-bold text-slate-900'>Tirzepatide (lower nausea)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  Nausea 24–33% vs 44% for semaglutide 2.4 mg
                </div>
              </div>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  Cost winner
                </div>
                <div className='font-bold text-slate-900'>Semaglutide (compounded)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  Compounded sema $179–$314/mo vs tirz $249–$399/mo
                </div>
              </div>
            </div>
            <p className='text-sm text-slate-600 mt-6'>
              <strong className='text-slate-900'>The honest answer:</strong> for most patients
              starting from scratch, tirzepatide (Mounjaro / Zepbound) is the stronger molecule
              based on the May 2025 head-to-head SURMOUNT-5 trial. But semaglutide (Wegovy /
              Ozempic) still produces clinically significant weight loss, costs less in compounded
              form, and is the right choice if you tolerate it well or have insurance coverage that
              favors it.
            </p>
            <div className='mt-6'>
              <Link
                href='#compare-table'
                className='inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md'
              >
                See telehealth providers offering each
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </section>

          {/* Quick head-to-head comparison table */}
          <section className='mb-12'>
            <h2 className='text-2xl md:text-3xl font-semibold text-slate-900 mb-6'>
              Head-to-Head At A Glance
            </h2>
            <div className='overflow-x-auto rounded-xl border border-slate-200 shadow-sm'>
              <table className='w-full text-sm bg-white'>
                <thead className='bg-slate-900 text-white'>
                  <tr>
                    <th className='text-left p-4 font-semibold'>Factor</th>
                    <th className='text-left p-4 font-semibold'>Tirzepatide</th>
                    <th className='text-left p-4 font-semibold'>Semaglutide</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  {headToHead.map((row, i) => (
                    <tr key={i} className='hover:bg-teal-50 transition-colors'>
                      <td className='p-4 font-medium text-slate-900'>{row.label}</td>
                      <td className='p-4 text-slate-700'>
                        <div className='flex items-center gap-2'>
                          {row.winner === 'tirzepatide' && (
                            <Check className='h-4 w-4 text-teal-600 flex-shrink-0' />
                          )}
                          <span
                            className={
                              row.winner === 'tirzepatide'
                                ? 'font-semibold text-teal-700'
                                : ''
                            }
                          >
                            {row.tirzepatide}
                          </span>
                        </div>
                      </td>
                      <td className='p-4 text-slate-700'>
                        <div className='flex items-center gap-2'>
                          {row.winner === 'semaglutide' && (
                            <Check className='h-4 w-4 text-teal-600 flex-shrink-0' />
                          )}
                          <span
                            className={
                              row.winner === 'semaglutide'
                                ? 'font-semibold text-teal-700'
                                : ''
                            }
                          >
                            {row.semaglutide}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='text-xs text-slate-500 mt-3'>
              Sources: SURMOUNT-5 (NEJM, May 2025), SURMOUNT-1 (NEJM, 2022), STEP-1 (NEJM, 2021),
              FDA labels (May 2026), and current telehealth provider pricing as of May 2026. See
              full citations in each section below.
            </p>
          </section>

          {/* Section: How they work */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              How They Work: One Hormone vs Two
            </h2>
            <p className='text-slate-700 leading-relaxed mb-4'>
              Both drugs work by mimicking gut hormones that are naturally released when you eat.
              These hormones tell your pancreas to release insulin and tell your brain you are
              full. The difference is the number of receptors each drug targets.
            </p>
            <div className='grid md:grid-cols-2 gap-4 mb-4'>
              <div className='rounded-xl border border-teal-200 bg-teal-50 p-5'>
                <h3 className='font-bold text-teal-900 mb-2'>Tirzepatide — dual agonist</h3>
                <p className='text-sm text-teal-900 leading-relaxed'>
                  Activates two gut-hormone receptors:{' '}
                  <strong>GLP-1 (glucagon-like peptide-1)</strong> and{' '}
                  <strong>GIP (glucose-dependent insulinotropic polypeptide)</strong>. The GIP
                  arm amplifies post-meal insulin release, suppresses appetite further, and may
                  improve fat metabolism. This is the mechanistic explanation for tirzepatide&rsquo;s
                  edge in head-to-head data.
                </p>
              </div>
              <div className='rounded-xl border border-slate-200 bg-slate-50 p-5'>
                <h3 className='font-bold text-slate-900 mb-2'>Semaglutide — single agonist</h3>
                <p className='text-sm text-slate-700 leading-relaxed'>
                  Activates only the <strong>GLP-1</strong> receptor. Effective on its own —
                  semaglutide produced 14.9% mean weight loss in the STEP-1 trial vs 2.4% for
                  placebo — but does not match tirzepatide head-to-head because it lacks the
                  second hormone pathway.
                </p>
              </div>
            </div>
            <p className='text-xs text-slate-500'>
              Sources:{' '}
              <Link
                href='https://www.nejm.org/doi/10.1056/NEJMoa2416394'
                target='_blank'
                rel='noopener'
                className='text-teal-600 hover:underline inline-flex items-center gap-1'
              >
                NEJM SURMOUNT-5 pharmacology
                <ExternalLink className='h-3 w-3' />
              </Link>
              ; FDA labels for Mounjaro, Zepbound, Wegovy, and Ozempic (current May 2026).
            </p>
          </section>

          {/* Section: The trials — weight-loss results */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              The Trial Data: SURMOUNT-5 Settled It
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              For years, the comparison was indirect — tirzepatide and semaglutide had been tested
              against placebo, not each other. That changed in May 2025 when the New England
              Journal of Medicine published <strong>SURMOUNT-5</strong>: a direct head-to-head
              trial of both drugs at maximum tolerated doses for 72 weeks.
            </p>
            <div className='space-y-4'>
              {trials.map((trial) => (
                <div
                  key={trial.name}
                  className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'
                >
                  <div className='flex items-start justify-between flex-wrap gap-3 mb-3'>
                    <div>
                      <h3 className='text-lg font-bold text-slate-900'>
                        {trial.name}
                      </h3>
                      <p className='text-sm text-slate-600'>{trial.drug}</p>
                    </div>
                    <span className='text-xs font-semibold text-teal-700 bg-teal-100 px-3 py-1 rounded-full whitespace-nowrap'>
                      {trial.year}
                    </span>
                  </div>
                  <div className='grid sm:grid-cols-2 gap-3 text-sm'>
                    <div>
                      <div className='text-xs uppercase tracking-wider text-slate-500 mb-1'>
                        Dose &amp; Duration
                      </div>
                      <div className='text-slate-800'>
                        {trial.dose} &middot; {trial.duration}
                      </div>
                    </div>
                    <div>
                      <div className='text-xs uppercase tracking-wider text-slate-500 mb-1'>
                        Result
                      </div>
                      <div className='text-slate-800 font-semibold'>{trial.result}</div>
                    </div>
                  </div>
                  {trial.placebo && (
                    <div className='mt-3 text-sm text-slate-600'>
                      <strong>Placebo:</strong> {trial.placebo}
                    </div>
                  )}
                  <div className='mt-4 pt-3 border-t border-slate-100'>
                    <Link
                      href={trial.url}
                      target='_blank'
                      rel='noopener'
                      className='text-xs text-teal-600 hover:underline inline-flex items-center gap-1'
                    >
                      Read the full trial in {trial.publisher}
                      <ExternalLink className='h-3 w-3' />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-6 rounded-xl bg-teal-50 border border-teal-200 p-5'>
              <div className='flex items-start gap-3'>
                <TrendingDown className='h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-bold text-teal-900 mb-1'>
                    What 6.5 percentage points actually means
                  </h3>
                  <p className='text-sm text-teal-900 leading-relaxed'>
                    For someone starting at 220 lb (100 kg): tirzepatide&rsquo;s 20.2% mean loss
                    is approximately 44 lb. Semaglutide&rsquo;s 13.7% mean loss is approximately
                    30 lb. That is roughly 14 lb of additional loss on tirzepatide over 72 weeks
                    — at the same trial endpoint, with the same protocol, in the same patient
                    population. The difference is statistically significant (P&lt;0.001).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Side effect profiles */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Side Effects Compared
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Both drugs share the same dominant side-effect category: GI symptoms from the
              gut-hormone receptor activation. The pattern that emerged across trials and on
              forums is that <strong>semaglutide drives more nausea and vomiting</strong>, while{' '}
              <strong>tirzepatide drives slightly more diarrhea and constipation</strong>. Slow
              titration is the single biggest factor in tolerability for either drug.
            </p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 shadow-sm'>
              <table className='w-full text-sm bg-white'>
                <thead className='bg-slate-100'>
                  <tr>
                    <th className='text-left p-4 font-semibold text-slate-900'>Side Effect</th>
                    <th className='text-center p-4 font-semibold text-slate-900'>
                      Tirzepatide (SURMOUNT)
                    </th>
                    <th className='text-center p-4 font-semibold text-slate-900'>
                      Semaglutide 2.4mg (STEP)
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Nausea</td>
                    <td className='p-4 text-center'>24–33%</td>
                    <td className='p-4 text-center'>
                      <span className='font-semibold text-amber-700'>~44%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Diarrhea</td>
                    <td className='p-4 text-center'>19–23%</td>
                    <td className='p-4 text-center'>
                      <span className='font-semibold text-amber-700'>~30%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Constipation</td>
                    <td className='p-4 text-center'>
                      <span className='font-semibold text-amber-700'>11–17%</span>
                    </td>
                    <td className='p-4 text-center'>~24%</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Vomiting</td>
                    <td className='p-4 text-center'>8–13%</td>
                    <td className='p-4 text-center'>
                      <span className='font-semibold text-amber-700'>~24%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Abdominal pain</td>
                    <td className='p-4 text-center'>9–10%</td>
                    <td className='p-4 text-center'>Similar range</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>
                      Discontinuation due to AEs (trials)
                    </td>
                    <td className='p-4 text-center'>4.3–7.1%</td>
                    <td className='p-4 text-center'>4.5–5.6%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='mt-6 rounded-xl bg-amber-50 border border-amber-200 p-5'>
              <div className='flex items-start gap-3'>
                <AlertCircle className='h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-bold text-amber-900 mb-1'>
                    Why titration is the single biggest factor
                  </h3>
                  <p className='text-sm text-amber-900 leading-relaxed mb-2'>
                    The standard tirzepatide titration is 2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg with
                    increases every 4 weeks. Semaglutide titrates 0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg
                    on the same 4-week schedule. Real-world discontinuation rates run{' '}
                    <strong>15–25% in the first 6–12 months</strong> — much higher than the trial
                    numbers — and the most common reason cited on r/Semaglutide and r/Tirzepatide
                    is being titrated up too fast.
                  </p>
                  <p className='text-sm text-amber-900 leading-relaxed'>
                    If a telehealth provider tries to escalate your dose every 2 weeks instead of
                    every 4, push back. The 4-week schedule is in the FDA label for a reason.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Cost compared */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Cost: Branded, Compounded, and Insurance
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Pricing has shifted significantly in 2026 because of two events: Eli Lilly and Novo
              Nordisk both expanded cash-pay savings cards (driving branded prices down for some
              patients), and the FDA proposed on April 30, 2026 to remove tirzepatide and
              semaglutide from the 503B compounding bulks list. That second event is reshaping the
              compounded market — see the box below.
            </p>

            <div className='grid md:grid-cols-2 gap-5 mb-6'>
              {/* Tirzepatide cost card */}
              <div className='rounded-xl border-2 border-teal-200 bg-white p-5'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full'>
                    Tirzepatide
                  </span>
                </div>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li>
                    <strong>Mounjaro</strong> (T2D approval) — ~$1,086/mo cash list
                  </li>
                  <li>
                    <strong>Zepbound</strong> (weight-loss approval) — ~$1,086/mo cash list
                  </li>
                  <li>
                    <strong>LillyDirect savings card</strong> — drops cash to $199–$449/mo for
                    qualifying patients (expires 12/31/2026)
                  </li>
                  <li>
                    <strong>Compounded tirzepatide</strong> via telehealth — $249–$399/mo (May
                    2026, post-shortage)
                  </li>
                  <li>
                    <strong>Insurance</strong> — Zepbound covered by most commercial plans when
                    BMI + comorbidity criteria met; OOP typically $25–$150/mo
                  </li>
                </ul>
              </div>

              {/* Semaglutide cost card */}
              <div className='rounded-xl border-2 border-slate-200 bg-white p-5'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full'>
                    Semaglutide
                  </span>
                </div>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li>
                    <strong>Wegovy</strong> (weight-loss approval) — ~$1,349/mo cash list
                  </li>
                  <li>
                    <strong>Ozempic</strong> (T2D approval) — ~$1,028/mo cash list
                  </li>
                  <li>
                    <strong>Rybelsus</strong> (oral semaglutide, T2D) — ~$1,028/30-day
                  </li>
                  <li>
                    <strong>NovoCare savings card</strong> — comparable mid-range cash discount
                    (Novo announced 50% list-price cut to $675 effective Jan 2027)
                  </li>
                  <li>
                    <strong>Compounded semaglutide</strong> via telehealth — $179–$314/mo (May
                    2026)
                  </li>
                  <li>
                    <strong>Insurance</strong> — Wegovy covered by most commercial plans when
                    criteria met; Medicare still does not cover for weight loss alone
                  </li>
                </ul>
              </div>
            </div>

            <div className='rounded-xl bg-rose-50 border-2 border-rose-200 p-5 mb-4'>
              <div className='flex items-start gap-3'>
                <AlertCircle className='h-5 w-5 text-rose-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-bold text-rose-900 mb-2'>
                    Compounded GLP-1 status changed in May 2026
                  </h3>
                  <p className='text-sm text-rose-900 leading-relaxed mb-2'>
                    The FDA officially declared the tirzepatide shortage resolved in December 2024
                    and the semaglutide shortage resolved in February 2025. As of May 2026, neither
                    drug is on the FDA shortage list. On April 30, 2026, the FDA proposed to{' '}
                    <strong>
                      exclude semaglutide, tirzepatide, and liraglutide from the 503B bulks list
                    </strong>{' '}
                    — effectively making large-scale 503B compounding illegal. Only{' '}
                    <strong>503A patient-specific compounding</strong> (one prescription, one
                    patient, one batch) remains legal. Compounded prices have risen post-enforcement.
                  </p>
                  <p className='text-sm text-rose-900 leading-relaxed'>
                    If you are currently on compounded GLP-1, talk to your prescriber about
                    transition options. If you are starting fresh, factor in that your compounded
                    pharmacy could be forced to stop dispensing during your treatment.{' '}
                    <Link
                      href='/compounded-tirzepatide'
                      className='text-rose-900 underline font-semibold'
                    >
                      Read our compounded GLP-1 survival guide
                    </Link>{' '}
                    for the full picture.
                  </p>
                </div>
              </div>
            </div>
            <p className='text-xs text-slate-500'>
              Sources: Manufacturer pricing pages and GoodRx/TrumpRx data (May 2026); CMS Medicare
              GLP-1 Bridge program; FDA Drug Shortage List; FDA April 30, 2026 proposed rule on
              503B bulks.
            </p>
          </section>

          {/* Section: What real users say */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              What Real Users Say
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              The best signal for what either drug is like in practice comes from people taking
              them. The quotes below are pulled verbatim from r/Tirzepatide, r/Semaglutide, and
              r/zepbound_support — public threads, public handles, with attribution. The pattern
              that recurs: many patients who plateau on semaglutide find renewed loss on
              tirzepatide, and a meaningful subset find tirzepatide easier on the GI tract too.
            </p>
            <div className='space-y-4'>
              {redditQuotes.map((q, i) => (
                <figure
                  key={i}
                  className='rounded-xl border-l-4 border-teal-500 bg-white p-5 shadow-sm'
                >
                  <blockquote className='text-base md:text-lg italic text-slate-800 leading-relaxed mb-3'>
                    &ldquo;{q.body}&rdquo;
                  </blockquote>
                  <figcaption className='text-xs text-slate-500'>
                    <span className='font-semibold text-slate-700'>{q.handle}</span> ·{' '}
                    {q.subreddit} · {q.date}
                  </figcaption>
                  <p className='text-xs text-teal-700 mt-2 italic'>{q.takeaway}</p>
                </figure>
              ))}
            </div>
            <p className='text-xs text-slate-500 mt-4'>
              Quotes are reproduced verbatim from public Reddit posts. Individual results vary
              significantly. These are not endorsements and not medical advice. Consult a licensed
              prescriber before making any treatment decisions.
            </p>
          </section>

          {/* Section: Which is right for you */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Which One Is Right For You?
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Use this decision framework. Most patients land in one of four buckets.
            </p>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='rounded-xl border border-slate-200 bg-white p-5'>
                <h3 className='font-bold text-slate-900 mb-2'>
                  Pick tirzepatide (Zepbound or Mounjaro) if&hellip;
                </h3>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You are starting GLP-1 therapy fresh and want the strongest molecule on average</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You have plateaued on semaglutide and need a stronger second option</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>Your insurance covers Zepbound for weight loss</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You experienced severe nausea on semaglutide and want a lower-nausea profile</span>
                  </li>
                </ul>
              </div>
              <div className='rounded-xl border border-slate-200 bg-white p-5'>
                <h3 className='font-bold text-slate-900 mb-2'>
                  Pick semaglutide (Wegovy or Ozempic) if&hellip;
                </h3>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You are cost-sensitive — compounded semaglutide is meaningfully cheaper than compounded tirzepatide</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>Your insurance covers Wegovy or Ozempic but not Zepbound</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You are on Ozempic for type-2 diabetes already and stable</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You experienced GI distress (diarrhea/constipation) on tirzepatide and want a different profile</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className='text-xs text-slate-500 mt-4'>
              This decision tree is informational. Your prescriber will factor in additional
              variables (kidney function, gallbladder history, family history of medullary thyroid
              cancer, current medications, pregnancy plans, etc.) that can shift the recommendation.
            </p>
          </section>

          {/* Section: Where to get each — comparison table */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Where to Get Tirzepatide or Semaglutide via Telehealth
            </h2>
            <p className='text-slate-700 leading-relaxed mb-2'>
              The six telehealth providers below all prescribe both drugs (compounded, branded, or
              both). Pricing verified May 2026. Click any provider to see current pricing and
              start a consultation.
            </p>
          </section>

          {/* Embed comparison table here — full width slot */}
        </div>

        {/* Comparison table — full width */}
        <GLP1ComparisonTable
          heading='Telehealth Providers Offering Tirzepatide or Semaglutide'
          source='tirzepatide-vs-semaglutide-page'
        />

        <div className='max-w-4xl mx-auto px-6'>
          {/* FAQ */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-6'>
              Frequently Asked Questions
            </h2>
            <div className='space-y-3'>
              {faqSchema.mainEntity.map((item, i) => (
                <details
                  key={i}
                  className='rounded-xl border border-slate-200 bg-white p-5 group shadow-sm'
                >
                  <summary className='font-semibold text-slate-900 cursor-pointer flex items-start justify-between gap-4'>
                    <span>{item.name}</span>
                    <span className='text-teal-500 group-open:rotate-45 transition-transform text-xl leading-none'>
                      +
                    </span>
                  </summary>
                  <p className='mt-3 text-slate-700 leading-relaxed'>
                    {item.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className='mb-12 rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8'>
            <h2 className='text-xl md:text-2xl font-bold text-slate-900 mb-4'>
              Related Comparison Guides
            </h2>
            <div className='grid md:grid-cols-2 gap-3'>
              <Link
                href='/zepbound-vs-wegovy'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>Zepbound vs Wegovy →</div>
                <div className='text-sm text-slate-500'>
                  Branded weight-loss showdown: tirzepatide vs semaglutide in their FDA-approved
                  weight forms.
                </div>
              </Link>
              <Link
                href='/wegovy-vs-mounjaro'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>Wegovy vs Mounjaro →</div>
                <div className='text-sm text-slate-500'>
                  When Wegovy (semaglutide weight) and Mounjaro (tirzepatide T2D) are the two
                  drugs on the table.
                </div>
              </Link>
              <Link
                href='/compounded-tirzepatide'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>
                  Compounded Tirzepatide Survival Guide →
                </div>
                <div className='text-sm text-slate-500'>
                  Post-FDA-April-30 reality: who is still legally compounding, and what to do if
                  yours stops.
                </div>
              </Link>
              <Link
                href='/compounded-semaglutide'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>
                  Compounded Semaglutide 2026 →
                </div>
                <div className='text-sm text-slate-500'>
                  Pricing, legality, and a list of telehealth providers still operating under 503A
                  rules.
                </div>
              </Link>
            </div>
          </section>

          {/* Editorial note */}
          <section className='mb-12 rounded-xl bg-slate-100 border border-slate-200 p-5 text-sm text-slate-600'>
            <p className='mb-2'>
              <strong className='text-slate-900'>Editorial note:</strong> This page is reviewed
              against primary clinical-trial sources (NEJM publications) and current FDA labeling.
              Pricing data was verified May 1, 2026 from manufacturer pricing pages and from each
              telehealth provider&rsquo;s site. Reddit quotes are reproduced verbatim from public
              posts with attribution. Affiliate program details (commission rates, cookie
              durations, network) reflect what&rsquo;s publicly visible on affiliate networks
              including OfferVault, AffiliArt, and DYNU as of May 2026 — direct verification
              pending program approvals.
            </p>
            <p>
              <strong className='text-slate-900'>Not medical advice.</strong> Always consult a
              licensed prescriber before starting, switching, or stopping any GLP-1 medication.
            </p>
          </section>
        </div>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
