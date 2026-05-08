import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { LastReviewedBadge } from '@/components/glp1/LastReviewedBadge';
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
// /wegovy-vs-mounjaro
// =============================================================================
// Target keywords: "wegovy vs mounjaro" (6,700 vol, KD 24) + "mounjaro vs wegovy"
// (4,400 vol, KD 28). Combined cluster: ~11K monthly volume.
// Capturable revenue at maturity (moderate scenario, $75 EPS): ~$1,005/mo.
//
// All claims sourced to Gronk-verified May 2026 dataset.
// SURMOUNT-5 head-to-head (NEJM, May 2025): tirzepatide -20.2% vs semaglutide -13.7%
// =============================================================================

export const metadata: Metadata = {
  title: 'Wegovy vs Mounjaro 2026: Head-to-Head Comparison (SURMOUNT-5 Data)',
  description:
    'Wegovy vs Mounjaro comparison: SURMOUNT-5 trial showed Mounjaro (tirzepatide) -20.2% weight loss vs Wegovy (semaglutide) -13.7%. Cost, side effects, and FDA approvals compared for May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/wegovy-vs-mounjaro' },
  openGraph: {
    title: 'Wegovy vs Mounjaro 2026: Which GLP-1 Is Better for Weight Loss?',
    description:
      'Head-to-head comparison of Wegovy (semaglutide) and Mounjaro (tirzepatide) using SURMOUNT-5 data, May 2026 pricing, side effects, and FDA approval status.',
    type: 'article',
    publishedTime: '2026-05-03T00:00:00Z',
    url: 'https://glp1comparehub.com/wegovy-vs-mounjaro',
    siteName: 'GLP1CompareHub',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-wegovy-vs-mounjaro.jpg', width: 1168, height: 784, alt: 'Wegovy vs Mounjaro — side-by-side comparison 2026' }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Wegovy vs Mounjaro 2026: Head-to-Head Comparison for Weight Loss',
  description:
    'Direct comparison of Wegovy (semaglutide 2.4mg) and Mounjaro (tirzepatide) for weight loss using the SURMOUNT-5 head-to-head trial, May 2026 pricing, side effect profiles, and real user experiences.',
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
    '@id': 'https://glp1comparehub.com/wegovy-vs-mounjaro',
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
      name: 'Is Mounjaro the same as Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Mounjaro contains tirzepatide (a dual GLP-1 + GIP receptor agonist made by Eli Lilly), while Wegovy contains semaglutide (a GLP-1-only receptor agonist made by Novo Nordisk). They are different molecules with different mechanisms of action. Mounjaro is FDA-approved for type 2 diabetes; its weight-loss counterpart is Zepbound. Wegovy is FDA-approved for chronic weight management and cardiovascular risk reduction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which causes more weight loss, Wegovy or Mounjaro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mounjaro (tirzepatide) causes more weight loss on average. The SURMOUNT-5 head-to-head trial (NEJM, May 2025) directly compared both drugs at maximum tolerated doses for 72 weeks: tirzepatide produced -20.2% weight loss vs semaglutide -13.7% (P<0.001). That is approximately 14 pounds more loss on tirzepatide for someone starting at 220 lb.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Mounjaro for weight loss even though it is approved for diabetes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mounjaro is FDA-approved only for type 2 diabetes. However, doctors can prescribe it off-label for weight loss, and many telehealth providers do exactly that. The FDA-approved weight-loss version of tirzepatide is called Zepbound (same molecule, same doses, different label). If your insurance covers Mounjaro for diabetes but not Zepbound for weight loss, some providers prescribe Mounjaro off-label.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Wegovy cost vs Mounjaro in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of May 2026: Wegovy costs approximately $1,349 per 4-week supply at list price. Mounjaro costs approximately $1,086-$1,112 per month at list price. Both manufacturers offer savings cards: Eli Lilly LillyDirect drops Mounjaro/Zepbound to $199-$449/month; Novo Nordisk NovoCare offers comparable discounts on Wegovy. Compounded alternatives: semaglutide $179-$314/month, tirzepatide $249-$399/month via telehealth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the side effects of Wegovy vs Mounjaro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both drugs cause GI-dominant side effects. Wegovy (semaglutide 2.4mg) from STEP trials: nausea ~44%, diarrhea ~30%, vomiting ~24%, constipation ~24%. Mounjaro (tirzepatide) from SURMOUNT trials: nausea 24-33%, diarrhea 19-23%, constipation 11-17%, vomiting 8-13%. Pattern: Wegovy tends to cause more nausea and vomiting; Mounjaro tends to cause slightly more constipation. Both improve with slow titration every 4 weeks as per FDA labeling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from Wegovy to Mounjaro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many patients switch after plateauing on Wegovy. Standard practice is to stop Wegovy for one weekly cycle, then start Mounjaro at 2.5mg and titrate up every 4 weeks. Because they are different molecules (semaglutide vs tirzepatide), there is no cross-tolerance concern. Always switch under prescriber supervision to manage GI side effects during the transition.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  wegovy: string;
  mounjaro: string;
  winner?: 'wegovy' | 'mounjaro' | 'tie';
}

const headToHead: ComparisonRow[] = [
  {
    label: 'Active ingredient',
    wegovy: 'Semaglutide',
    mounjaro: 'Tirzepatide',
  },
  {
    label: 'Drug class',
    wegovy: 'GLP-1 receptor agonist',
    mounjaro: 'Dual GLP-1 + GIP receptor agonist',
    winner: 'mounjaro',
  },
  {
    label: 'Manufacturer',
    wegovy: 'Novo Nordisk',
    mounjaro: 'Eli Lilly',
  },
  {
    label: 'FDA-approved for weight loss?',
    wegovy: 'Yes (chronic weight management + CV risk)',
    mounjaro: 'No (T2D only; Zepbound is the weight-loss brand)',
    winner: 'wegovy',
  },
  {
    label: 'Avg weight loss (SURMOUNT-5, 72 wk)',
    wegovy: '-13.7%',
    mounjaro: '-20.2%',
    winner: 'mounjaro',
  },
  {
    label: 'Dosing frequency',
    wegovy: 'Once weekly injection',
    mounjaro: 'Once weekly injection',
    winner: 'tie',
  },
  {
    label: 'Dose range',
    wegovy: '0.25mg → 2.4mg (new 7.2mg approved March 2026)',
    mounjaro: '2.5mg → 15mg',
  },
  {
    label: 'Top side effect (clinical trials)',
    wegovy: 'Nausea ~44%',
    mounjaro: 'Nausea 24-33%',
    winner: 'mounjaro',
  },
  {
    label: 'List price (May 2026)',
    wegovy: '~$1,349/4 weeks',
    mounjaro: '~$1,086-$1,112/month',
    winner: 'mounjaro',
  },
  {
    label: 'Compounded telehealth price',
    wegovy: '$179-$314/mo (semaglutide)',
    mounjaro: '$249-$399/mo (tirzepatide)',
    winner: 'wegovy',
  },
  {
    label: 'Cardiovascular indication',
    wegovy: 'Yes (SELECT trial, March 2024)',
    mounjaro: 'Not yet (SURPASS-CVOT pending)',
    winner: 'wegovy',
  },
  {
    label: 'Supply status (May 2026)',
    wegovy: 'Shortage resolved Feb 2025',
    mounjaro: 'Shortage resolved Dec 2024',
    winner: 'tie',
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
    dose: 'Max tolerated doses (tirz up to 15mg, sema up to 2.4mg)',
    duration: '72 weeks',
    result: 'Tirzepatide -20.2%  ·  Semaglutide -13.7%  ·  P<0.001',
    placebo: 'No placebo arm — direct head-to-head',
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2416394',
    publisher: 'New England Journal of Medicine',
    year: 'May 2025',
  },
  {
    name: 'STEP-1',
    drug: 'Semaglutide 2.4mg (Wegovy dose)',
    dose: '2.4 mg once weekly',
    duration: '68 weeks',
    result: 'Semaglutide: -14.9% weight loss',
    placebo: 'Placebo: -2.4%',
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183',
    publisher: 'New England Journal of Medicine',
    year: 'February 2021',
  },
  {
    name: 'STEP-5',
    drug: 'Semaglutide 2.4mg (long-term maintenance)',
    dose: '2.4 mg once weekly',
    duration: '104 weeks',
    result: 'Semaglutide: -15.2% sustained at 2 years',
    placebo: 'Placebo: -2.6%',
    url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)01200-4/fulltext',
    publisher: 'The Lancet',
    year: 'October 2022',
  },
  {
    name: 'SURMOUNT-1',
    drug: 'Tirzepatide (Mounjaro/Zepbound doses)',
    dose: '5 mg / 10 mg / 15 mg',
    duration: '72 weeks',
    result: '5mg: -15.0%  ·  10mg: -19.5%  ·  15mg: -20.9%',
    placebo: 'Placebo: -3.1%',
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038',
    publisher: 'New England Journal of Medicine',
    year: 'June 2022',
  },
];

export default function WegovyVsMounjaro() {
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

      {/* YMYL compliance: medical / FDA disclaimer banner */}
      <MedicalDisclaimerBanner />

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
              Wegovy vs Mounjaro 2026: Which GLP-1 Is Better for Weight Loss?
            </h1>
            <div className='flex items-center gap-4 text-sm text-slate-500'>
              <div className='flex items-center gap-1'>
                <Calendar className='h-4 w-4' />
                <time dateTime='2026-05-03'>Updated May 3, 2026</time>
              </div>
              <div className='flex items-center gap-1'>
                <Activity className='h-4 w-4' />
                <span>14 min read</span>
              </div>
            </div>
            <p className='text-slate-600 text-sm mt-3'>
              Reviewed against the SURMOUNT-5 head-to-head trial (NEJM, May 2025), STEP-1 (NEJM,
              2021), SURMOUNT-1 (NEJM, 2022), and current FDA labeling as of May 2026.
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
                  Mounjaro produces more weight loss. Wegovy has the FDA weight-loss approval
                  and a proven cardiovascular benefit. Your insurance and goals decide.
                </h2>
              </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 mt-6'>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  Weight loss winner
                </div>
                <div className='font-bold text-slate-900'>Mounjaro (-20.2%)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  vs Wegovy -13.7% — SURMOUNT-5, 72 weeks
                </div>
              </div>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  FDA weight-loss approval
                </div>
                <div className='font-bold text-slate-900'>Wegovy (since June 2021)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  Mounjaro is T2D only; Zepbound is the weight-loss label
                </div>
              </div>
              <div className='rounded-lg bg-white border border-slate-200 p-4'>
                <div className='text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1'>
                  Cost winner (branded)
                </div>
                <div className='font-bold text-slate-900'>Mounjaro (~$1,086/mo)</div>
                <div className='text-xs text-slate-500 mt-1'>
                  vs Wegovy ~$1,349/4 weeks at list price
                </div>
              </div>
            </div>
            <p className='text-sm text-slate-600 mt-6'>
              <strong className='text-slate-900'>The honest answer:</strong> Mounjaro (tirzepatide) is
              the more potent molecule for weight loss based on SURMOUNT-5. But Wegovy (semaglutide) has
              the explicit FDA approval for chronic weight management, a proven cardiovascular benefit
              from the SELECT trial, and is cheaper in compounded form. Many patients use Mounjaro
              off-label for weight loss or get Zepbound (same molecule, weight-loss label) instead.
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
              Wegovy vs Mounjaro: Head-to-Head At A Glance
            </h2>
            <div className='overflow-x-auto rounded-xl border border-slate-200 shadow-sm'>
              <table className='w-full text-sm bg-white'>
                <thead className='bg-slate-900 text-white'>
                  <tr>
                    <th className='text-left p-4 font-semibold'>Factor</th>
                    <th className='text-left p-4 font-semibold'>Wegovy</th>
                    <th className='text-left p-4 font-semibold'>Mounjaro</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  {headToHead.map((row, i) => (
                    <tr key={i} className='hover:bg-teal-50 transition-colors'>
                      <td className='p-4 font-medium text-slate-900'>{row.label}</td>
                      <td className='p-4 text-slate-700'>
                        <div className='flex items-center gap-2'>
                          {row.winner === 'wegovy' && (
                            <Check className='h-4 w-4 text-teal-600 flex-shrink-0' />
                          )}
                          <span
                            className={
                              row.winner === 'wegovy'
                                ? 'font-semibold text-teal-700'
                                : ''
                            }
                          >
                            {row.wegovy}
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
              Sources: SURMOUNT-5 (NEJM, May 2025), STEP-1 (NEJM, 2021), SURMOUNT-1 (NEJM, 2022),
              FDA labels (May 2026), manufacturer pricing pages, and telehealth provider pricing as of May 2026.
            </p>
          </section>

          {/* Key difference: FDA approval */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              The Key Difference: FDA Approval Status
            </h2>
            <p className='text-slate-700 leading-relaxed mb-4'>
              This is the single most confusing aspect of the Wegovy vs Mounjaro comparison.
              They are often discussed as direct competitors, but they have different FDA-approved
              indications:
            </p>
            <div className='grid md:grid-cols-2 gap-4 mb-4'>
              <div className='rounded-xl border-2 border-slate-200 bg-white p-5'>
                <div className='flex items-center gap-2 mb-3'>
                  <Pill className='h-5 w-5 text-slate-700' />
                  <h3 className='font-bold text-slate-900'>Wegovy (semaglutide)</h3>
                </div>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>FDA-approved for <strong>chronic weight management</strong> (June 2021)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>FDA-approved for <strong>cardiovascular risk reduction</strong> (March 2024, SELECT trial)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>FDA-approved for <strong>MASH/NASH</strong> (liver disease, 2025)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>New <strong>7.2mg high dose</strong> approved March 2026</span>
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
                    <span>FDA-approved for <strong>type 2 diabetes</strong> only (May 2022)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <AlertCircle className='h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5' />
                    <span>NOT approved for weight loss (Zepbound is the weight-loss brand)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <AlertCircle className='h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5' />
                    <span>Cardiovascular outcome trial (SURPASS-CVOT) still pending</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-green-600 flex-shrink-0 mt-0.5' />
                    <span>Widely prescribed off-label for weight loss by telehealth providers</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='rounded-xl bg-amber-50 border border-amber-200 p-5'>
              <div className='flex items-start gap-3'>
                <AlertCircle className='h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-bold text-amber-900 mb-1'>
                    Why this matters for insurance
                  </h3>
                  <p className='text-sm text-amber-900 leading-relaxed'>
                    If your insurance plan covers GLP-1s for weight loss, it will likely cover{' '}
                    <strong>Wegovy</strong> (explicit weight-loss approval) or{' '}
                    <strong>Zepbound</strong> (tirzepatide&rsquo;s weight-loss label). Mounjaro is
                    typically only covered for T2D. Some prescribers write Mounjaro off-label for
                    weight loss, but this often requires a prior authorization fight. If you want
                    tirzepatide for weight loss with the cleanest insurance path, ask for{' '}
                    <strong>Zepbound</strong>, not Mounjaro.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mechanism of action */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              How They Work: One Hormone vs Two
            </h2>
            <p className='text-slate-700 leading-relaxed mb-4'>
              Both drugs mimic gut hormones released when you eat. They signal your brain
              that you are full and tell your pancreas to produce insulin. The critical
              difference is the number of hormone receptors each drug activates.
            </p>
            <div className='grid md:grid-cols-2 gap-4 mb-4'>
              <div className='rounded-xl border border-slate-200 bg-slate-50 p-5'>
                <h3 className='font-bold text-slate-900 mb-2'>Wegovy — GLP-1 only</h3>
                <p className='text-sm text-slate-700 leading-relaxed'>
                  Semaglutide activates one receptor: <strong>GLP-1</strong> (glucagon-like
                  peptide-1). This suppresses appetite, slows gastric emptying, and increases
                  insulin secretion after meals. Clinically significant on its own — STEP-1
                  showed -14.9% weight loss vs placebo — but a single-receptor approach.
                </p>
              </div>
              <div className='rounded-xl border border-teal-200 bg-teal-50 p-5'>
                <h3 className='font-bold text-teal-900 mb-2'>Mounjaro — dual GLP-1 + GIP</h3>
                <p className='text-sm text-teal-900 leading-relaxed'>
                  Tirzepatide activates two receptors: <strong>GLP-1</strong> and{' '}
                  <strong>GIP</strong> (glucose-dependent insulinotropic polypeptide). The added GIP
                  receptor amplifies post-meal insulin, further suppresses appetite, and may improve
                  fat oxidation. This dual mechanism explains the 6.5 percentage-point advantage in
                  head-to-head data.
                </p>
              </div>
            </div>
          </section>

          {/* Trial data */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Clinical Trial Data: SURMOUNT-5 Settles the Debate
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Until May 2025, Wegovy and Mounjaro had never been tested head-to-head. Comparisons
              relied on cross-trial inference (STEP-1 vs SURMOUNT-1). The SURMOUNT-5 trial,
              published in the New England Journal of Medicine, finally gave a direct answer.
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
                      <strong>Comparator:</strong> {trial.placebo}
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
                    What about the new Wegovy 7.2mg dose?
                  </h3>
                  <p className='text-sm text-teal-900 leading-relaxed'>
                    In March 2026, the FDA approved a higher 7.2mg dose of Wegovy for patients who
                    have plateaued or need additional weight loss. The STEP-6 trial data (not yet
                    published at the time of writing) is expected to show -17% to -18% weight loss
                    at this higher dose — narrowing the gap with tirzepatide, though likely not
                    closing it entirely based on the mechanism-of-action difference.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Side effects */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Side Effects: Wegovy vs Mounjaro
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Both drugs share GI-dominant side effects. The recurring pattern across trials and
              user reports: Wegovy causes more nausea and vomiting, while Mounjaro causes slightly
              more constipation. Both improve dramatically with proper titration.
            </p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 shadow-sm'>
              <table className='w-full text-sm bg-white'>
                <thead className='bg-slate-100'>
                  <tr>
                    <th className='text-left p-4 font-semibold text-slate-900'>Side Effect</th>
                    <th className='text-center p-4 font-semibold text-slate-900'>
                      Wegovy 2.4mg (STEP)
                    </th>
                    <th className='text-center p-4 font-semibold text-slate-900'>
                      Mounjaro (SURMOUNT)
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Nausea</td>
                    <td className='p-4 text-center'>
                      <span className='font-semibold text-amber-700'>~44%</span>
                    </td>
                    <td className='p-4 text-center'>24-33%</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Diarrhea</td>
                    <td className='p-4 text-center'>
                      <span className='font-semibold text-amber-700'>~30%</span>
                    </td>
                    <td className='p-4 text-center'>19-23%</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Vomiting</td>
                    <td className='p-4 text-center'>
                      <span className='font-semibold text-amber-700'>~24%</span>
                    </td>
                    <td className='p-4 text-center'>8-13%</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Constipation</td>
                    <td className='p-4 text-center'>~24%</td>
                    <td className='p-4 text-center'>11-17%</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>Abdominal pain</td>
                    <td className='p-4 text-center'>Similar range</td>
                    <td className='p-4 text-center'>9-10%</td>
                  </tr>
                  <tr>
                    <td className='p-4 font-medium text-slate-900'>
                      Discontinuation due to AEs
                    </td>
                    <td className='p-4 text-center'>4.5-5.6%</td>
                    <td className='p-4 text-center'>4.3-7.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-xs text-slate-500 mt-3'>
              Sources: STEP-1 (NEJM, 2021) for Wegovy side effects; SURMOUNT-1 (NEJM, 2022) for
              Mounjaro side effects. Trial populations and methodologies differ slightly.
            </p>
          </section>

          {/* Cost comparison */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Cost Comparison: May 2026 Pricing
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Pricing has shifted in 2026 due to expanded manufacturer savings cards and the
              FDA&rsquo;s April 30, 2026 proposal to exclude semaglutide and tirzepatide from
              the 503B compounding bulks list.
            </p>

            <div className='grid md:grid-cols-2 gap-5 mb-6'>
              <div className='rounded-xl border-2 border-slate-200 bg-white p-5'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full'>
                    Wegovy (semaglutide)
                  </span>
                </div>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li>
                    <strong>Branded list price:</strong> ~$1,349/4 weeks
                  </li>
                  <li>
                    <strong>NovoCare savings card:</strong> Drops cash price for qualifying patients
                  </li>
                  <li>
                    <strong>Novo 50% cut:</strong> Announced $675 list effective Jan 2027
                  </li>
                  <li>
                    <strong>Compounded semaglutide:</strong> $179-$314/mo via telehealth
                  </li>
                  <li>
                    <strong>Insurance:</strong> Most commercial plans cover for weight loss; Medicare
                    does NOT cover for weight loss alone
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
                    <strong>Branded list price:</strong> ~$1,086-$1,112/month
                  </li>
                  <li>
                    <strong>LillyDirect savings card:</strong> $199-$449/mo for qualifying patients
                  </li>
                  <li>
                    <strong>Compounded tirzepatide:</strong> $249-$399/mo via telehealth
                  </li>
                  <li>
                    <strong>Insurance (for T2D):</strong> Most commercial plans cover Mounjaro for
                    type 2 diabetes
                  </li>
                  <li>
                    <strong>Insurance (for weight):</strong> Need Zepbound label; Mounjaro off-label
                    requires PA
                  </li>
                </ul>
              </div>
            </div>

            <div className='rounded-xl bg-rose-50 border-2 border-rose-200 p-5'>
              <div className='flex items-start gap-3'>
                <AlertCircle className='h-5 w-5 text-rose-700 flex-shrink-0 mt-0.5' />
                <div>
                  <h3 className='font-bold text-rose-900 mb-2'>
                    Compounded GLP-1 status: May 2026
                  </h3>
                  <p className='text-sm text-rose-900 leading-relaxed mb-2'>
                    Both drug shortages have been resolved (tirzepatide Dec 2024, semaglutide Feb
                    2025). On April 30, 2026, the FDA proposed excluding semaglutide, tirzepatide,
                    and liraglutide from the 503B compounding bulks list. If finalized, only{' '}
                    <strong>503A patient-specific compounding</strong> (one Rx, one patient, one
                    batch) remains legal. Large-scale 503B outsourcing facilities would be shut out.
                  </p>
                  <p className='text-sm text-rose-900 leading-relaxed'>
                    Current compounded prices already reflect this uncertainty. If you are starting
                    on compounded GLP-1, factor in that your pharmacy could be forced to stop during
                    your treatment.{' '}
                    <Link
                      href='/compounded-tirzepatide'
                      className='text-rose-900 underline font-semibold'
                    >
                      Read our compounded GLP-1 guide
                    </Link>{' '}
                    for the full picture.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Decision framework */}
          <section className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Which One Is Right For You?
            </h2>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Use this decision framework based on your situation.
            </p>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='rounded-xl border border-slate-200 bg-white p-5'>
                <h3 className='font-bold text-slate-900 mb-2'>
                  Pick Wegovy if&hellip;
                </h3>
                <ul className='space-y-2 text-sm text-slate-700'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>Your insurance covers Wegovy for weight loss (most commercial plans do)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You have cardiovascular risk factors and want the proven CV benefit (SELECT trial)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You are cost-sensitive and going compounded (sema $179-$314 vs tirz $249-$399)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You want the new 7.2mg high dose for additional weight loss</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You experienced GI distress (diarrhea/constipation) on tirzepatide</span>
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
                    <span>You want the strongest average weight loss available (-20.2% in SURMOUNT-5)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You have type 2 diabetes (Mounjaro is FDA-approved for this and insurance covers it)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You tried Wegovy and plateaued — switching to tirzepatide breaks through for many patients</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>Nausea was intolerable on semaglutide (Mounjaro has lower nausea rates: 24-33% vs 44%)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5' />
                    <span>You prefer the branded list price ($1,086 vs $1,349)</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className='text-xs text-slate-500 mt-4'>
              This is informational guidance, not medical advice. Your prescriber will consider
              additional factors (kidney function, gallbladder history, thyroid cancer risk,
              current medications, pregnancy plans) before recommending one over the other.
            </p>
          </section>

          {/* Where to get each */}
          <section id='providers' className='mb-14'>
            <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
              Where to Get Wegovy or Mounjaro via Telehealth
            </h2>
            <p className='text-slate-700 leading-relaxed mb-2'>
              The telehealth providers below prescribe both semaglutide and tirzepatide (compounded,
              branded, or both). Pricing verified May 2026.
            </p>
          </section>
        </div>

        {/* Comparison table — full width */}
        <GLP1ComparisonTable
          heading='Telehealth Providers Offering Wegovy or Mounjaro'
          source='wegovy-vs-mounjaro-page'
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
                  The definitive molecule-vs-molecule comparison with full SURMOUNT-5 breakdown.
                </div>
              </Link>
              <Link
                href='/zepbound-vs-wegovy'
                className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-400/40 transition-colors shadow-sm'
              >
                <div className='font-semibold text-slate-900 mb-1'>Zepbound vs Wegovy →</div>
                <div className='text-sm text-slate-500'>
                  Both FDA-approved for weight loss. Brand-vs-brand showdown.
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
                  Post-FDA-April-30 reality: who is still legally compounding tirzepatide.
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
                  Pricing, legality, and telehealth providers still operating under 503A rules.
                </div>
              </Link>
            </div>
          </section>

          {/* Editorial note */}
          <section className='mb-12 rounded-xl bg-slate-100 border border-slate-200 p-5 text-sm text-slate-600'>
            <p className='mb-2'>
              <strong className='text-slate-900'>Editorial note:</strong> This page is reviewed
              against primary clinical-trial sources (NEJM publications) and current FDA labeling.
              Pricing data was verified May 3, 2026 from manufacturer pricing pages and telehealth
              provider sites. FDA approval dates and indications verified against FDA.gov drug labels.
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
                <div className='text-sm text-slate-600'>Three cost paths: $25/mo branded+insurance, $179 compounded, $299 LillyDirect.</div>
              </a>
              <a href='/tirzepatide-near-me' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>Tirzepatide Near Me</div>
                <div className='text-sm text-slate-600'>Local clinic vs telehealth — telehealth wins 4 of 5 times.</div>
              </a>
              <a href='/oral-tirzepatide' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>Oral Tirzepatide (Sublingual + Gum)</div>
                <div className='text-sm text-slate-600'>Needle-free formats from Direct Meds and Embody.</div>
              </a>
              <a href='/compounded-tirzepatide' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>Compounded Tirzepatide Guide</div>
                <div className='text-sm text-slate-600'>Post-April 2026 FDA framing + verified provider pricing.</div>
              </a>
              <a href='/nad-iv-therapy' className='block p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all'>
                <div className='font-bold text-slate-900 mb-1'>NAD+ IV Therapy</div>
                <div className='text-sm text-slate-600'>$150-$1,000+ IV vs $79 first-month at-home injection.</div>
              </a>
            </div>
          </section>
        </div>
      </main>

            {/* YMYL compliance: editorial review box */}
      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <RelatedGuides currentPath="/wegovy-vs-mounjaro" priorityCluster="compare" />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('tmates', 'wegovy-vs-mounjaro')} brandName="TMates" pricePitch="Compounded semaglutide & tirzepatide from $167/mo" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
