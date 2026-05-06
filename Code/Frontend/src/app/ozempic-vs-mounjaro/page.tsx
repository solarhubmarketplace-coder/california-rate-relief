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
  TrendingDown,
  AlertCircle,
  ExternalLink,
  Award,
  Pill,
} from 'lucide-react';

// =============================================================================
// /ozempic-vs-mounjaro
// =============================================================================
// Target keywords: "ozempic vs mounjaro" (21K vol, KD 54) + long-tail variants.
// Combined cluster: ~25K+ monthly volume.
//
// KEY DISTINCTION: This is a T2D-vs-T2D comparison. Both Ozempic and Mounjaro
// are FDA-approved for type 2 diabetes. Weight loss is a secondary benefit for
// Ozempic (SUSTAIN trials) vs a demonstrated superior outcome for Mounjaro
// (SURMOUNT trials). The SURMOUNT-5 head-to-head used Wegovy (2.4mg) doses,
// NOT Ozempic (max 2mg) doses — this must be made clear.
//
// All claims sourced to Gronk-verified May 2026 dataset (449 sources).
// =============================================================================

export const metadata: Metadata = {
  title: 'Ozempic vs Mounjaro 2026: Complete Comparison for Diabetes & Weight Loss',
  description:
    'Ozempic vs Mounjaro: both FDA-approved for type 2 diabetes but Mounjaro (tirzepatide) shows superior weight loss. SURMOUNT-5 data, May 2026 pricing ($997 vs $1,080/mo), side effects, and insurance coverage compared.',
  alternates: { canonical: '/ozempic-vs-mounjaro' },
  openGraph: {
    title: 'Ozempic vs Mounjaro 2026: Which Is Better for T2D & Weight Loss?',
    description:
      'Head-to-head comparison of Ozempic (semaglutide) and Mounjaro (tirzepatide) — both T2D drugs with weight-loss benefits. SUSTAIN vs SURMOUNT trial data, May 2026 pricing, and insurance coverage.',
    type: 'article',
    publishedTime: '2026-05-03T00:00:00Z',
    siteName: 'GLP1CompareHub',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Ozempic vs Mounjaro 2026: Complete Comparison for Type 2 Diabetes and Weight Loss',
  description:
    'Direct comparison of Ozempic (semaglutide, T2D) and Mounjaro (tirzepatide, T2D) covering clinical trial data from SUSTAIN and SURMOUNT programs, May 2026 pricing, side effect profiles, insurance coverage, and off-label weight loss use.',
  datePublished: '2026-05-03',
  dateModified: '2026-05-03',
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
    '@id': 'https://glp1comparehub.com/ozempic-vs-mounjaro',
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
      name: 'SUSTAIN-6: Cardiovascular Outcomes with Semaglutide in T2D',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1607141',
      datePublished: '2016-11-10',
      publisher: { '@type': 'Organization', name: 'New England Journal of Medicine' },
    },
    {
      '@type': 'CreativeWork',
      name: 'SURMOUNT-1: Tirzepatide Once Weekly for the Treatment of Obesity',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038',
      datePublished: '2022-06-04',
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
      name: 'Is Ozempic the same as Mounjaro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Ozempic contains semaglutide (a GLP-1 receptor agonist made by Novo Nordisk), while Mounjaro contains tirzepatide (a dual GLP-1 + GIP receptor agonist made by Eli Lilly). They are different molecules from different manufacturers with different mechanisms of action. Both are FDA-approved for type 2 diabetes but are not interchangeable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which causes more weight loss, Ozempic or Mounjaro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mounjaro causes significantly more weight loss. In the SURMOUNT-5 head-to-head trial (NEJM, May 2025), tirzepatide (Mounjaro\'s molecule) at max doses produced -20.2% weight loss vs semaglutide\'s -13.7% over 72 weeks. Note: this trial used Wegovy-level doses (2.4mg semaglutide), not the lower Ozempic doses (max 2mg). Ozempic at its approved doses produces more modest weight loss of approximately 4-7% in SUSTAIN trials, as weight loss was only a secondary endpoint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use Ozempic for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ozempic is FDA-approved only for type 2 diabetes, not weight loss. However, 20-40% of Ozempic prescriptions have historically been written off-label for weight loss. If you want semaglutide specifically for weight loss, Wegovy (same molecule, higher dose of 2.4mg) is the FDA-approved option. By 2026, off-label Ozempic use for weight loss is declining as Wegovy availability has improved.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Ozempic cost vs Mounjaro in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of May 2026: Ozempic list price is approximately $997-$1,027 per month. Mounjaro list price is approximately $1,080-$1,112 per month. Both offer manufacturer savings cards: with commercial insurance, copays as low as $25/month for either drug. Self-pay: Ozempic offers $199/month for first 2 fills, then $349-$499/month depending on dose. Mounjaro has comparable self-pay savings. Overall, Ozempic is roughly 5-10% cheaper at list price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover Ozempic and Mounjaro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, both are generally well-covered for type 2 diabetes. Since both are FDA-approved for T2D, they typically receive Tier 2-3 formulary placement with lower copays and easier prior authorization. Coverage for weight loss is more restrictive — if you want GLP-1s for weight loss, you would need the weight-loss branded versions (Wegovy for semaglutide, Zepbound for tirzepatide), which face higher copays and stricter requirements. A new Medicare GLP-1 Bridge program (July 2026-Dec 2027) offers a $50 flat copay for eligible seniors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the side effects of Ozempic vs Mounjaro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both cause primarily GI side effects. Ozempic (from SUSTAIN trials): nausea 16-20%, diarrhea ~9%, vomiting 5-9%, constipation 3-5%. Mounjaro (from SURMOUNT/SURPASS trials): nausea 17-22%, diarrhea 12-17%, vomiting ~5-10%. Discontinuation rates due to GI events are low for both (~3-7%). The main difference: Mounjaro tends to cause slightly more diarrhea, while rates are otherwise comparable. Both improve with slow dose titration.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  ozempic: string;
  mounjaro: string;
  winner?: 'ozempic' | 'mounjaro' | 'tie';
}

const headToHead: ComparisonRow[] = [
  {
    label: 'Active ingredient',
    ozempic: 'Semaglutide',
    mounjaro: 'Tirzepatide',
  },
  {
    label: 'Drug class',
    ozempic: 'GLP-1 receptor agonist',
    mounjaro: 'Dual GLP-1 + GIP receptor agonist',
    winner: 'mounjaro',
  },
  {
    label: 'Manufacturer',
    ozempic: 'Novo Nordisk',
    mounjaro: 'Eli Lilly',
  },
  {
    label: 'FDA-approved for',
    ozempic: 'T2D, CV risk reduction, CKD',
    mounjaro: 'T2D only',
    winner: 'ozempic',
  },
  {
    label: 'FDA-approved for weight loss?',
    ozempic: 'No (Wegovy is the weight-loss brand)',
    mounjaro: 'No (Zepbound is the weight-loss brand)',
    winner: 'tie',
  },
  {
    label: 'Dose range',
    ozempic: '0.5mg, 1mg, 2mg weekly injection',
    mounjaro: '2.5mg → 15mg weekly injection',
  },
  {
    label: 'Weight loss (own trials)',
    ozempic: '~4-7% (SUSTAIN, secondary endpoint)',
    mounjaro: '~15-21% (SURMOUNT, primary endpoint)',
    winner: 'mounjaro',
  },
  {
    label: 'Nausea rate (trials)',
    ozempic: '16-20%',
    mounjaro: '17-22%',
    winner: 'tie',
  },
  {
    label: 'List price (May 2026)',
    ozempic: '~$997-$1,027/mo',
    mounjaro: '~$1,080-$1,112/mo',
    winner: 'ozempic',
  },
  {
    label: 'Insurance copay with savings card',
    ozempic: 'As low as $25/mo',
    mounjaro: 'As low as $25/mo',
    winner: 'tie',
  },
  {
    label: 'Oral formulation available?',
    ozempic: 'Yes — new tablets May 4, 2026 (1.5/4/9mg)',
    mounjaro: 'No (injection only)',
    winner: 'ozempic',
  },
  {
    label: 'CV outcome data',
    ozempic: 'SUSTAIN-6 + SELECT (via Wegovy)',
    mounjaro: 'SURPASS-CVOT pending',
    winner: 'ozempic',
  },
  {
    label: 'Supply status (May 2026)',
    ozempic: 'Shortage resolved early 2025',
    mounjaro: 'Shortage resolved late 2024',
    winner: 'tie',
  },
];

export default function OzempicVsMounjaro() {
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

      {/* Affiliate disclosure */}
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
              Ozempic vs Mounjaro 2026: Which Is Better for Diabetes &amp; Weight Loss?
            </h1>
            <div className='flex items-center gap-4 text-sm text-slate-500'>
              <div className='flex items-center gap-1'>
                <Calendar className='h-4 w-4' />
                <time dateTime='2026-05-03'>Updated May 3, 2026</time>
              </div>
              <div className='flex items-center gap-1'>
                <Activity className='h-4 w-4' />
                <span>15 min read</span>
              </div>
            </div>
            <p className='text-slate-600 text-sm mt-3'>
              Reviewed against the SUSTAIN program (Ozempic), SURMOUNT program (Mounjaro/Zepbound),
              SURMOUNT-5 head-to-head (NEJM, May 2025), and current FDA labeling as of May 2026.
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
                  Both are FDA-approved for type 2 diabetes. Mounjaro produces dramatically more
                  weight loss. Ozempic has more FDA indications and a new oral option.
                </h2>
              </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 mt-6'>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  Weight loss winner
                </div>
                <div className='font-bold text-slate-900'>Mounjaro (by a wide margin)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  ~15-21% (SURMOUNT) vs ~4-7% (SUSTAIN)
                </div>
              </div>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  More FDA indications
                </div>
                <div className='font-bold text-slate-900'>Ozempic (T2D + CV + CKD)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  Plus new oral tablets launched May 2026
                </div>
              </div>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  Cost winner (list price)
                </div>
                <div className='font-bold text-slate-900'>Ozempic (~$997-$1,027/mo)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  vs Mounjaro ~$1,080-$1,112/mo (5-10% less)
                </div>
              </div>
            </div>
            <p className='text-sm text-slate-600 mt-6'>
              <strong className='text-slate-900'>The honest answer:</strong> If your primary goal
              is weight loss and you have T2D, Mounjaro (tirzepatide) is the stronger molecule. If
              you need the broadest range of FDA-approved protections (heart, kidneys, diabetes) or
              want an oral option, Ozempic (semaglutide) has more indications. Both are effective
              diabetes drugs. Insurance coverage is comparable for T2D use.
            </p>
            <div className='mt-6'>
              <Link
                href='#providers'
                className='inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md'
              >
                See telehealth providers offering each
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </section>

          {/* Head-to-head comparison table */}
          <section className='mb-12'>
            <h2 className='text-2xl md:text-3xl font-semibold text-slate-900 mb-6'>
              Ozempic vs Mounjaro: Head-to-Head At A Glance
            </h2>
            <div className='overflow-x-auto rounded-xl border border-slate-200 shadow-sm'>
              <table className='w-full text-sm bg-white'>
                <thead className='bg-slate-900 text-white'>
                  <tr>
                    <th className='text-left p-4 font-semibold'>Factor</th>
                    <th className='text-left p-4 font-semibold'>Ozempic</th>
                    <th className='text-left p-4 font-semibold'>Mounjaro</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  {headToHead.map((row, i) => (
                    <tr key={i} className='hover:bg-teal-50 transition-colors'>
                      <td className='p-4 font-medium text-slate-900'>{row.label}</td>
                      <td className='p-4 text-slate-700'>
                        <div className='flex items-center gap-2'>
                          {row.winner === 'ozempic' && (
                            <Check className='h-4 w-4 text-teal-600 flex-shrink-0' />
                          )}
                          <span
                            className={
                              row.winner === 'ozempic'
                                ? 'font-semibold text-teal-700'
                                : ''
                            }
                          >
                            {row.ozempic}
                          </span>
                        </div>
                      </td>
                      <td className='p-4 text-slate-700'>
                        <div className='flex items-center gap-2'>
                          {row.winner === 'mounjaro' && (
                            <Check className='h-4 w-4 text-teal-600 flex-shrink-0' />
                          )}
                          <span
                            className={
                              row.winner === 'mounjaro'
                                ? 'font-semibold text-teal-700'
                                : ''
                            }
                          >
                            {row.mounjaro}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='text-xs text-slate-500 mt-3'>
              Sources: SUSTAIN program (NEJM, 2016-2022), SURMOUNT-5 (NEJM, May 2025), SURMOUNT-1
              (NEJM, 2022), FDA labels (May 2026), manufacturer pricing pages.
            </p>
          </section>

          {/* Critical distinction */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              The Critical Distinction: Both Are Diabetes Drugs
            </h2>
            <p className='text-slate-700 leading-relaxed mb-4'>
              Unlike the Wegovy vs Mounjaro or Zepbound vs Wegovy comparisons, this is a
              diabetes-drug-vs-diabetes-drug matchup. Neither Ozempic nor Mounjaro is FDA-approved
              for weight loss. Their weight-loss counterparts are separate products:
            </p>
            <div className='grid md:grid-cols-2 gap-4 mb-4'>
              <div className='rounded-xl border-2 border-slate-200 bg-white p-5'>
                <div className='flex items-center gap-2 mb-3'>
                  <Pill className='h-5 w-5 text-slate-700' />
                  <h3 className='font-bold text-slate-900'>Ozempic (semaglutide)</h3>
                </div>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>FDA: <strong>Type 2 diabetes</strong></span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>FDA: <strong>CV risk reduction</strong> (SUSTAIN-6)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>FDA: <strong>CKD/kidney protection</strong> (Jan 2025)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>New <strong>oral tablets</strong> launched May 4, 2026</span>
                  </li>
                  <li className='text-xs text-slate-500 mt-2'>
                    Weight-loss version: <strong>Wegovy</strong> (same molecule, higher dose up to 2.4mg)
                  </li>
                </ul>
              </div>
              <div className='rounded-xl border-2 border-teal-200 bg-teal-50/50 p-5'>
                <div className='flex items-center gap-2 mb-3'>
                  <Pill className='h-5 w-5 text-teal-700' />
                  <h3 className='font-bold text-teal-900'>Mounjaro (tirzepatide)</h3>
                </div>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>FDA: <strong>Type 2 diabetes</strong> only (May 2022)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <AlertCircle className='h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5' />
                    <span>CV outcome trial (SURPASS-CVOT) still pending</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <AlertCircle className='h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5' />
                    <span>No kidney/CKD indication yet</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <AlertCircle className='h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5' />
                    <span>Injection only (no oral formulation)</span>
                  </li>
                  <li className='text-xs text-slate-500 mt-2'>
                    Weight-loss version: <strong>Zepbound</strong> (same molecule, weight-loss label)
                  </li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-amber-50 border border-amber-200 p-5'>
              <div className='flex items-start gap-3'>
                <AlertCircle className='h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-bold text-amber-900 mb-1'>
                    Why the SURMOUNT-5 comparison needs context
                  </h3>
                  <p className='text-sm text-amber-900 leading-relaxed'>
                    The SURMOUNT-5 head-to-head trial (NEJM, May 2025) compared tirzepatide at
                    10-15mg vs semaglutide at <strong>1.7-2.4mg (Wegovy doses)</strong>, not at
                    Ozempic&rsquo;s max dose of 2mg. If you are on Ozempic 0.5-2mg for diabetes,
                    your weight-loss results will be lower than the -13.7% shown in SURMOUNT-5,
                    because that trial used higher doses. Ozempic&rsquo;s own SUSTAIN program showed
                    4-7% weight loss at approved doses — still meaningful, but not in the same range
                    as the obesity-focused trials.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mechanism of action */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              How They Work: One Receptor vs Two
            </h2>
            <div className='grid md:grid-cols-2 gap-4 mb-4'>
              <div className='rounded-xl border border-slate-200 bg-slate-50 p-5'>
                <h3 className='font-bold text-slate-900 mb-2'>Ozempic — GLP-1 only</h3>
                <p className='text-sm text-slate-700 leading-relaxed'>
                  Semaglutide activates the <strong>GLP-1</strong> receptor. This slows gastric
                  emptying, enhances glucose-dependent insulin secretion, suppresses glucagon, and
                  reduces appetite. Effective for blood sugar control and produces moderate weight
                  loss as a secondary benefit.
                </p>
              </div>
              <div className='rounded-xl border border-teal-200 bg-teal-50 p-5'>
                <h3 className='font-bold text-teal-900 mb-2'>Mounjaro — dual GLP-1 + GIP</h3>
                <p className='text-sm text-teal-900 leading-relaxed'>
                  Tirzepatide activates two receptors: <strong>GLP-1</strong> and{' '}
                  <strong>GIP</strong> (glucose-dependent insulinotropic polypeptide). The dual
                  mechanism amplifies insulin secretion, further suppresses appetite, and may
                  improve fat oxidation. This explains the substantially greater weight loss seen
                  in clinical trials compared to GLP-1-only drugs.
                </p>
              </div>
            </div>
          </section>

          {/* Weight loss data — the key comparison */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Weight Loss: SUSTAIN vs SURMOUNT
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              The weight-loss gap between these two drugs is substantial, but the context matters.
              Ozempic&rsquo;s SUSTAIN trials measured weight loss as a secondary endpoint in T2D
              patients. Mounjaro&rsquo;s SURMOUNT trials were designed for obesity and measured
              weight loss as the primary endpoint.
            </p>

            <div className='grid md:grid-cols-2 gap-5 mb-6'>
              <div className='rounded-xl border-2 border-slate-200 bg-white p-5'>
                <h3 className='font-bold text-slate-900 mb-3'>Ozempic (SUSTAIN program)</h3>
                <p className='text-xs text-slate-500 mb-3'>T2D patients, weight loss was secondary</p>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li>
                    <strong>0.5mg:</strong> ~3-4 kg (~4% of body weight)
                  </li>
                  <li>
                    <strong>1mg:</strong> ~4.5-6 kg (~5-7% of body weight)
                  </li>
                  <li>
                    <strong>2mg:</strong> ~6-7 kg (additional ~1 kg vs 1mg)
                  </li>
                </ul>
                <p className='text-xs text-slate-500 mt-3'>
                  Source: SUSTAIN-1 through SUSTAIN-6 (NEJM, 2016-2022). Baseline weight ~90-95 kg.
                </p>
              </div>

              <div className='rounded-xl border-2 border-teal-200 bg-white p-5'>
                <h3 className='font-bold text-teal-900 mb-3'>Mounjaro (SURMOUNT program)</h3>
                <p className='text-xs text-slate-500 mb-3'>Obesity patients, weight loss was primary</p>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li>
                    <strong>5mg:</strong> -15.0% body weight
                  </li>
                  <li>
                    <strong>10mg:</strong> -19.5% body weight
                  </li>
                  <li>
                    <strong>15mg:</strong> -20.9% body weight
                  </li>
                </ul>
                <p className='text-xs text-slate-500 mt-3'>
                  Source: SURMOUNT-1 (NEJM, June 2022). 72-week duration.
                </p>
              </div>
            </div>

            <div className='rounded-xl bg-teal-50 border border-teal-200 p-5'>
              <div className='flex items-start gap-3'>
                <TrendingDown className='h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-bold text-teal-900 mb-1'>
                    SURMOUNT-5: The definitive head-to-head
                  </h3>
                  <p className='text-sm text-teal-900 leading-relaxed'>
                    In the SURMOUNT-5 trial (NEJM, May 2025), tirzepatide at max tolerated doses
                    (10-15mg) produced <strong>-20.2% weight loss</strong> vs semaglutide at
                    1.7-2.4mg (Wegovy doses) which produced <strong>-13.7%</strong> over 72 weeks
                    (P&lt;0.001). This confirms tirzepatide&rsquo;s superiority even when
                    semaglutide is dosed at its highest approved levels for weight loss — above
                    what Ozempic delivers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Side effects */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Side Effects: Comparable Overall
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Unlike the Wegovy-dose comparisons where semaglutide shows significantly higher
              nausea rates (~44%), Ozempic at its lower T2D doses has a milder side-effect profile.
              The comparison with Mounjaro is closer than most people expect.
            </p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 shadow-sm'>
              <table className='w-full text-sm bg-white'>
                <thead className='bg-slate-100'>
                  <tr>
                    <th className='text-left p-4 font-semibold text-slate-900'>Side Effect</th>
                    <th className='text-center p-4 font-semibold text-slate-900'>
                      Ozempic (SUSTAIN)
                    </th>
                    <th className='text-center p-4 font-semibold text-slate-900'>
                      Mounjaro (SURMOUNT/SURPASS)
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Nausea</td>
                    <td className='p-4 text-center'>16-20%</td>
                    <td className='p-4 text-center'>17-22%</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Diarrhea</td>
                    <td className='p-4 text-center'>~9%</td>
                    <td className='p-4 text-center'>
                      <span className='font-semibold text-amber-700'>12-17%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Vomiting</td>
                    <td className='p-4 text-center'>5-9%</td>
                    <td className='p-4 text-center'>~5-10%</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Constipation</td>
                    <td className='p-4 text-center'>3-5%</td>
                    <td className='p-4 text-center'>Similar range</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>
                      Discontinuation due to GI events
                    </td>
                    <td className='p-4 text-center'>~3-7%</td>
                    <td className='p-4 text-center'>~3-7%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-xs text-slate-500 mt-3'>
              Sources: SUSTAIN program (NEJM, 2016-2022) for Ozempic; SURMOUNT-1 (NEJM, 2022) and
              SURPASS-2 (NEJM, 2021) for Mounjaro. Side-effect rates are lower at Ozempic doses
              than at Wegovy doses because the max dose is lower (2mg vs 2.4mg).
            </p>
          </section>

          {/* Cost comparison */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Cost Comparison: May 2026 Pricing
            </h2>
            <div className='grid md:grid-cols-2 gap-5 mb-6'>
              <div className='rounded-xl border-2 border-slate-200 bg-white p-5'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full'>
                    Ozempic (semaglutide)
                  </span>
                </div>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li>
                    <strong>List price:</strong> ~$997-$1,027/month (injectable)
                  </li>
                  <li>
                    <strong>With insurance + savings card:</strong> As low as $25/month
                  </li>
                  <li>
                    <strong>Self-pay savings:</strong> $199/mo first 2 fills, then $349-$499/mo by dose
                  </li>
                  <li>
                    <strong>New oral tablets:</strong> Pricing TBD (launched May 4, 2026)
                  </li>
                  <li>
                    <strong>Generic:</strong> Tentative approval for injectable in 2026
                  </li>
                </ul>
              </div>

              <div className='rounded-xl border-2 border-teal-200 bg-white p-5'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full'>
                    Mounjaro (tirzepatide)
                  </span>
                </div>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li>
                    <strong>List price:</strong> ~$1,080-$1,112/month
                  </li>
                  <li>
                    <strong>With insurance + savings card:</strong> As low as $25/month
                  </li>
                  <li>
                    <strong>Self-pay savings:</strong> $150-$450/fill max savings via LillyDirect
                  </li>
                  <li>
                    <strong>No oral formulation</strong>
                  </li>
                  <li>
                    <strong>No generic</strong> expected near-term
                  </li>
                </ul>
              </div>
            </div>

            <div className='rounded-xl bg-slate-50 border border-slate-200 p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Insurance coverage for T2D is strong for both</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Since both Ozempic and Mounjaro are FDA-approved for type 2 diabetes, they
                typically receive <strong>Tier 2-3 formulary placement</strong> with commercial
                insurance. Prior authorization is common but usually straightforward for T2D. The
                new Medicare GLP-1 Bridge program (July 2026-Dec 2027) offers a{' '}
                <strong>$50 flat copay</strong> for eligible seniors on approved weight-loss GLP-1s,
                but T2D versions like Ozempic and Mounjaro are already covered under Part D for
                diabetes indications.
              </p>
            </div>
          </section>

          {/* Off-label weight loss section */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Off-Label Ozempic for Weight Loss: The Elephant in the Room
            </h2>
            <p className='text-slate-700 leading-relaxed mb-4'>
              A significant portion of people comparing Ozempic to Mounjaro are actually interested
              in weight loss, not diabetes management. The reality: 20-40% of Ozempic prescriptions
              have historically been written off-label for weight loss, particularly during the
              2023-2024 Wegovy shortage.
            </p>
            <div className='rounded-xl bg-amber-50 border border-amber-200 p-5'>
              <div className='flex items-start gap-3'>
                <AlertCircle className='h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-bold text-amber-900 mb-1'>
                    If weight loss is your primary goal
                  </h3>
                  <p className='text-sm text-amber-900 leading-relaxed'>
                    You should be comparing <strong>Wegovy vs Zepbound</strong> (the weight-loss
                    versions), not Ozempic vs Mounjaro. Ozempic maxes out at 2mg; Wegovy goes to
                    2.4mg (with a new 7.2mg dose approved March 2026). Mounjaro is prescribed
                    off-label for weight loss, but Zepbound (same molecule) has the explicit
                    FDA approval. By 2026, Wegovy and Zepbound shortages have resolved, so the
                    supply-driven reason for using T2D versions off-label is largely gone.
                  </p>
                  <div className='mt-3'>
                    <Link
                      href='/wegovy-vs-mounjaro'
                      className='text-amber-900 underline font-semibold text-sm'
                    >
                      Read our Wegovy vs Mounjaro comparison →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Decision framework */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Which One Is Right For You?
            </h2>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='rounded-xl border border-slate-200 bg-white p-5'>
                <h3 className='font-bold text-slate-900 mb-2'>
                  Pick Ozempic if&hellip;
                </h3>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You have T2D and want the broadest FDA protections (diabetes + heart + kidneys)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You prefer an oral tablet option (new May 2026 Ozempic tablets)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>Your insurance formulary favors Ozempic over Mounjaro</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You want the slightly lower list price (~$997 vs ~$1,080)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>Moderate weight loss (4-7%) alongside diabetes control is sufficient</span>
                  </li>
                </ul>
              </div>
              <div className='rounded-xl border border-slate-200 bg-white p-5'>
                <h3 className='font-bold text-slate-900 mb-2'>
                  Pick Mounjaro if&hellip;
                </h3>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You have T2D and want the maximum weight loss alongside diabetes control</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You have tried Ozempic and plateaued on weight loss</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>Your prescriber recommends the dual GLP-1/GIP mechanism for your profile</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You are comfortable with injection-only administration</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You want access to higher doses (up to 15mg vs Ozempic max 2mg)</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className='text-xs text-slate-500 mt-4'>
              This is informational guidance, not medical advice. Your endocrinologist or prescriber
              will consider A1C levels, kidney function, cardiovascular risk, current medications,
              and your weight-loss goals before recommending one over the other.
            </p>
          </section>

          {/* Where to get each */}
          <section id='providers' className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Where to Get Ozempic or Mounjaro via Telehealth
            </h2>
            <p className='text-slate-700 leading-relaxed mb-2'>
              The telehealth providers below prescribe both semaglutide and tirzepatide. Pricing
              verified May 2026.
            </p>
          </section>
        </div>

        {/* Comparison table — full width */}
        <GLP1ComparisonTable
          heading='Telehealth Providers Offering Ozempic or Mounjaro'
          source='ozempic-vs-mounjaro-page'
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

          {/* Related guides */}
          <section className='mb-12 rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8'>
            <h2 className='text-xl md:text-2xl font-bold text-slate-900 mb-4'>
              Related Comparison Guides
            </h2>
            <div className='grid md:grid-cols-2 gap-3'>
              <Link
                href='/tirzepatide-vs-semaglutide'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>Tirzepatide vs Semaglutide →</div>
                <div className='text-sm text-slate-500'>
                  The definitive molecule-vs-molecule comparison with full SURMOUNT-5 data.
                </div>
              </Link>
              <Link
                href='/wegovy-vs-mounjaro'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>Wegovy vs Mounjaro →</div>
                <div className='text-sm text-slate-500'>
                  The weight-loss-focused comparison if that&rsquo;s your primary goal.
                </div>
              </Link>
              <Link
                href='/zepbound-vs-wegovy'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>Zepbound vs Wegovy →</div>
                <div className='text-sm text-slate-500'>
                  Both FDA-approved for weight loss — the brand-vs-brand showdown.
                </div>
              </Link>
              <Link
                href='/compounded-tirzepatide'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>
                  Compounded Tirzepatide Guide →
                </div>
                <div className='text-sm text-slate-500'>
                  Post-FDA-April-30 reality for compounded GLP-1 medications.
                </div>
              </Link>
            </div>
          </section>

          {/* Editorial note */}
          <section className='mb-12 rounded-xl bg-slate-100 border border-slate-200 p-5 text-sm text-slate-600'>
            <p className='mb-2'>
              <strong className='text-slate-900'>Editorial note:</strong> This page is reviewed
              against primary sources: SUSTAIN program (NEJM, 2016-2022), SURMOUNT-1 (NEJM, 2022),
              SURMOUNT-5 (NEJM, May 2025), and current FDA labeling. Pricing verified May 3, 2026
              from manufacturer pricing pages, NovoCare, and GoodRx. FDA approval dates and
              indications verified against FDA.gov drug labels.
            </p>
            <p>
              <strong className='text-slate-900'>Not medical advice.</strong> Always consult a
              licensed prescriber before starting, switching, or stopping any GLP-1 medication.
            </p>
          </section>

          {/* Related guides — internal link sweep */}
          <section className='mt-12 mb-8'>
            <h2 className='text-2xl font-bold mb-4 text-slate-900'>Related Guides</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              <a href='/best-compounded-tirzepatide' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>Best Compounded Tirzepatide 2026</div>
                <div className='text-sm text-slate-600'>6 verified telehealth programs ranked by EPC and value.</div>
              </a>
              <a href='/cheapest-tirzepatide-online' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>Cheapest Tirzepatide Online</div>
                <div className='text-sm text-slate-600'>Three cost paths: branded+insurance, compounded, LillyDirect.</div>
              </a>
              <a href='/zepbound-vs-wegovy' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>Zepbound vs Wegovy</div>
                <div className='text-sm text-slate-600'>Trial data, cost paths, and the insurance loophole.</div>
              </a>
              <a href='/tirzepatide-near-me' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>Tirzepatide Near Me</div>
                <div className='text-sm text-slate-600'>Local clinic vs telehealth — telehealth wins 4 of 5 times.</div>
              </a>
              <a href='/oral-tirzepatide' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>Oral Tirzepatide (Sublingual + Gum)</div>
                <div className='text-sm text-slate-600'>Needle-free formats from Direct Meds and Embody.</div>
              </a>
              <a href='/nad-iv-therapy' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>NAD+ IV Therapy</div>
                <div className='text-sm text-slate-600'>$150-$1,000+ IV vs $79 first-month at-home injection.</div>
              </a>
            </div>
          </section>
        </div>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
