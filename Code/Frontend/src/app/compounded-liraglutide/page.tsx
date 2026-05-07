import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { VerifiedPricingBadge } from '@/components/glp1/VerifiedPricingBadge';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import {
  ArrowRight,
  Check,
  AlertCircle,
  ExternalLink,
  Syringe,
  Calendar,
  TrendingDown,
  Award,
  ShieldCheck,
} from 'lucide-react';

// =============================================================================
// /compounded-liraglutide  (600 vol, KD 0, Tier A — VIRGIN SERP)
// =============================================================================
// Liraglutide (Victoza/Saxenda) = GLP-1 receptor agonist, older than semaglutide.
// Saxenda = 3mg/day obesity indication. Victoza = 1.2/1.8mg/day T2D indication.
// Shortage interest + transition patients from branded to compounded.
//
// Key facts:
// - Liraglutide is a GLP-1 RA, first approved for obesity in 2014 (Saxenda)
// - SCALE trial: ~8% weight loss at 56 weeks (vs Wegovy's ~15% in STEP-1)
// - Daily subcutaneous injection (vs weekly for semaglutide/tirzepatide)
// - Compounded liraglutide = 503A compounding pharmacy preparation
// - Ivim Health offers compounded liraglutide — one of few telehealth providers
// - FDA shortage: Saxenda was on shortage list; compounding interest driven partly by shortage
//   and partly by patients wanting branded Saxenda access at lower cost
// - Why someone would choose liraglutide: prior response to Saxenda, insurance coverage for branded,
//   specific medical contraindications to sema/tirz, physician preference
// =============================================================================

export const metadata: Metadata = {
  title: 'Compounded Liraglutide 2026: What It Is, Who Offers It, and How It Compares | GLP1CompareHub',
  description:
    'Compounded liraglutide (generic Saxenda) explained: daily GLP-1 injection, ~8% weight loss in SCALE trial, FDA status, and which providers offer it. How does it compare to semaglutide?',
  alternates: { canonical: 'https://glp1comparehub.com/compounded-liraglutide' },
  openGraph: {
    title: 'Compounded Liraglutide 2026: The Older GLP-1 Still Worth Considering',
    description:
      'Liraglutide (Saxenda) was the first GLP-1 approved for obesity. Compounded versions are now available through select telehealth providers. Here\'s how it compares to semaglutide and tirzepatide.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compounded-liraglutide',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'GLP-1 Medications',
      item: 'https://glp1comparehub.com/tirzepatide-vs-semaglutide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Compounded Liraglutide',
      item: 'https://glp1comparehub.com/compounded-liraglutide',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Compounded Liraglutide 2026: The Older GLP-1 for Obesity',
  description:
    'Compounded liraglutide compared to branded Saxenda, semaglutide, and tirzepatide. Clinical data, FDA regulatory status, available providers, and who liraglutide is appropriate for.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: {
    '@type': 'Person',
    name: 'Chad Simpson',
    url: 'https://glp1comparehub.com/author/chad-simpson',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/compounded-liraglutide' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is compounded liraglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded liraglutide is a 503A compounding pharmacy preparation of liraglutide — the active ingredient in Saxenda (obesity) and Victoza (type 2 diabetes). It contains the same active peptide as the branded products but is prepared by a licensed compounding pharmacy and dispensed with a physician prescription. Compounded liraglutide is not FDA-approved but is legal under 503A pharmacy regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much weight loss does liraglutide produce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the SCALE Obesity and Prediabetes trial (published NEJM 2015), liraglutide 3mg daily produced approximately 8% weight loss at 56 weeks compared to ~2.6% with placebo. About 63% of patients lost at least 5% of body weight. This is substantially lower than what newer GLP-1 agents show: semaglutide (Wegovy) produces ~14.9% at 68 weeks (STEP-1), and tirzepatide produces ~20.9% at 72 weeks (SURMOUNT-1).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does liraglutide compare to semaglutide for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Liraglutide (Saxenda 3mg/day) produces approximately 8% weight loss in clinical trials vs approximately 14.9% for semaglutide 2.4mg/week (Wegovy). Both are GLP-1 receptor agonists, but semaglutide has a longer half-life (weekly injection vs daily for liraglutide) and higher receptor binding affinity. Semaglutide and tirzepatide are generally preferred for obesity treatment today due to their superior efficacy and more convenient dosing schedules.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should consider compounded liraglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Liraglutide may be appropriate for patients who: (1) previously responded well to Saxenda and want continued access at lower cost; (2) have specific contraindications to semaglutide or tirzepatide based on their physician\'s assessment; (3) prefer a shorter-acting daily injection for flexibility in dosing management; or (4) are in a transition period from branded Saxenda. Most new patients will be directed to semaglutide or tirzepatide given their superior efficacy profiles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is liraglutide a daily injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Liraglutide (both Saxenda and Victoza) requires a daily subcutaneous injection. This contrasts with semaglutide (Ozempic/Wegovy), which is injected once weekly, and tirzepatide (Mounjaro/Zepbound), which is also once weekly. For patients who find daily injections burdensome, weekly semaglutide or tirzepatide may be more suitable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which telehealth providers offer compounded liraglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health is among the few telehealth providers that explicitly includes compounded liraglutide in their formulary. Most telehealth providers focus on compounded semaglutide and tirzepatide given their superior efficacy — liraglutide is a more niche offering. Verify availability directly with any provider, as formularies change.',
      },
    },
  ],
};

export default function CompoundedLiraglutidePage() {
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'compounded-liraglutide');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'compounded-liraglutide');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'compounded-liraglutide');

  return (
    <GLP1Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA
        href={ivimUrl}
        brandName="Ivim Health"
        pricePitch="Compounded liraglutide — one of few telehealth providers offering it"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/tirzepatide-vs-semaglutide" className="hover:underline text-blue-600">GLP-1 Comparisons</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Compounded Liraglutide</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              GLP-1 Medication Guide
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Compounded Liraglutide: The Original GLP-1 for Obesity, Now Available Through Telehealth
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Liraglutide (Saxenda) was the first GLP-1 receptor agonist approved for obesity in 2014 —
            five years before semaglutide. It still works, but newer agents have surpassed it on efficacy.
            Compounded liraglutide is now available through select telehealth providers for patients
            who need or prefer it.
          </p>

          {/* Key data box */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <TrendingDown className="text-orange-600 mt-0.5 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-orange-900 text-base mb-2">Quick reference</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {[
                    { label: 'Drug class', value: 'GLP-1 RA' },
                    { label: 'Weight loss (SCALE)', value: '~8% at 56 wks' },
                    { label: 'Dosing schedule', value: 'Daily injection' },
                    { label: 'Max dose (Saxenda)', value: '3.0 mg/day' },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white rounded-lg p-2 border border-orange-100">
                      <p className="text-orange-600 font-medium mb-0.5">{label}</p>
                      <p className="text-orange-900 font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Context note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-blue-800">
                <strong>Context:</strong> Most new patients today are prescribed semaglutide or
                tirzepatide due to their superior efficacy (~15–21% weight loss vs ~8% for liraglutide).
                Compounded liraglutide is most relevant for patients transitioning from branded Saxenda
                or with specific clinical reasons to use liraglutide over newer agents. If you&apos;re
                starting fresh,{' '}
                <Link href="/tirzepatide-vs-semaglutide" className="underline">see our tirzepatide vs semaglutide comparison first →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── What Is Liraglutide ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Liraglutide?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Liraglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist — the same drug class
            as semaglutide and tirzepatide, but an older molecule. Novo Nordisk developed two
            branded liraglutide products:
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Brand</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Indication</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Doses</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">FDA Approval</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-3 py-2 font-medium">Victoza</td>
                  <td className="px-3 py-2">Type 2 diabetes</td>
                  <td className="px-3 py-2">1.2mg, 1.8mg daily</td>
                  <td className="px-3 py-2">Approved 2010</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-medium">Saxenda</td>
                  <td className="px-3 py-2">Obesity / weight management</td>
                  <td className="px-3 py-2">Up to 3.0mg daily</td>
                  <td className="px-3 py-2">Approved 2014</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Liraglutide has a shorter half-life than semaglutide (~13 hours vs ~1 week), which is why
            it requires daily injection versus once-weekly for semaglutide. The shorter half-life also
            means less stable drug exposure between doses, which may contribute to its lower efficacy
            compared to longer-acting agents.
          </p>
        </section>

        {/* ── Clinical Data Comparison ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Liraglutide Compares to Newer GLP-1 Agents</h2>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-3 py-3 font-semibold">Medication</th>
                  <th className="text-center px-3 py-3 font-semibold">Weight Loss (Trial)</th>
                  <th className="text-center px-3 py-3 font-semibold">Dosing</th>
                  <th className="text-center px-3 py-3 font-semibold">Class</th>
                  <th className="text-center px-3 py-3 font-semibold">FDA Approved (Obesity)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-orange-50">
                  <td className="px-3 py-2.5 font-semibold">Liraglutide (Saxenda)</td>
                  <td className="px-3 py-2.5 text-center">~8% (SCALE, 56 wks)</td>
                  <td className="px-3 py-2.5 text-center">Daily injection</td>
                  <td className="px-3 py-2.5 text-center">GLP-1 RA</td>
                  <td className="px-3 py-2.5 text-center"><Check size={14} className="text-green-500 inline" /> 2014</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2.5 font-semibold">Semaglutide (Wegovy)</td>
                  <td className="px-3 py-2.5 text-center font-semibold">~14.9% (STEP-1, 68 wks)</td>
                  <td className="px-3 py-2.5 text-center">Once weekly</td>
                  <td className="px-3 py-2.5 text-center">GLP-1 RA</td>
                  <td className="px-3 py-2.5 text-center"><Check size={14} className="text-green-500 inline" /> 2021</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2.5 font-semibold">Tirzepatide (Zepbound)</td>
                  <td className="px-3 py-2.5 text-center font-semibold">~20.9% (SURMOUNT-1, 72 wks)</td>
                  <td className="px-3 py-2.5 text-center">Once weekly</td>
                  <td className="px-3 py-2.5 text-center">GLP-1 + GIP RA</td>
                  <td className="px-3 py-2.5 text-center"><Check size={14} className="text-green-500 inline" /> 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic">
            Sources: SCALE Obesity and Prediabetes (Pi-Sunyer et al., NEJM 2015); STEP-1 (Wilding et al.,
            NEJM 2021); SURMOUNT-1 (Jastreboff et al., NEJM 2022). Not directly cross-comparable —
            different populations, trial durations, and endpoints.
          </p>
        </section>

        {/* ── Who Should Consider Liraglutide ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Who Should Consider Compounded Liraglutide?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Good candidates:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Previously responded well to branded Saxenda and need continued access',
                  'Physician has clinical reason to prefer liraglutide based on your medical history',
                  'Insurance covers liraglutide but not semaglutide/tirzepatide (rare but possible)',
                  'Transitioning from branded Saxenda to compounded version for cost savings',
                  'Part of a structured metabolic protocol where liraglutide is indicated',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
              <h3 className="font-semibold text-gray-900 mb-3">Consider semaglutide or tirzepatide instead if:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Starting GLP-1 therapy fresh with no prior liraglutide experience',
                  'Maximum weight loss is the primary goal',
                  'You want once-weekly injection rather than daily',
                  'Your physician has no specific reason to recommend liraglutide over newer agents',
                  'Cost is a major factor — compounded semaglutide starts at $99/mo',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-blue-500 flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Regulatory Status ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Status of Compounded Liraglutide</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <ShieldCheck className="text-gray-500 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">503A compounding pharmacy preparation</p>
                <p className="text-sm text-gray-600">
                  Compounded liraglutide is legal under 503A pharmacy regulations when prepared with
                  a valid patient-specific prescription. It is not FDA-approved but is not prohibited.
                  Unlike compounded tirzepatide (which faced 503B restrictions in 2025 as the shortage
                  was resolved), liraglutide&apos;s regulatory environment has been more stable.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
              <Calendar className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-semibold text-green-900 text-sm mb-1">Saxenda shortage history</p>
                <p className="text-sm text-green-800">
                  Saxenda experienced periodic supply shortages during the GLP-1 demand surge of
                  2022–2024. Compounding interest was partly driven by these shortages. Current branded
                  availability should be verified with your pharmacy. Compounded liraglutide provides
                  an alternative when branded supply is limited.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Providers Offering Compounded Liraglutide</h2>
            <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
          </div>
          <p className="text-gray-600 mb-5 text-sm">
            Very few telehealth providers currently offer compounded liraglutide.
            Verify availability directly — formularies can change.
          </p>
          <div className="space-y-4">
            {/* Ivim — primary */}
            <div className="border-2 border-orange-200 rounded-xl p-5 bg-orange-50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Ivim Health</span>
                    <span className="bg-orange-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Confirmed Liraglutide
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Pending Katalys
                    </span>
                  </div>
                  <p className="text-orange-700 font-semibold text-sm mb-1">Pricing: verify directly</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Ivim Health explicitly offers compounded liraglutide as part of their GLP-1
                    formulary — making them one of the few telehealth providers to do so. Also
                    known for customized microdosing protocols across their full GLP-1 lineup.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Liraglutide in formulary (verify at intake)</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Customized dosing protocols</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Physician-supervised program</li>
                  </ul>
                </div>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Ivim Health <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* TMates — inquire */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">TMates</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Inquire at Intake
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">Primarily semaglutide/tirzepatide</p>
                  <p className="text-xs text-gray-600 mb-2">
                    TMates focuses on compounded semaglutide and tirzepatide. If you specifically
                    need liraglutide, ask about availability during your intake consultation —
                    formulary options can be discussed with their physician team.
                  </p>
                </div>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See TMates <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Eden Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Eden Health</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Inquire at Intake
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">Metabolic panel + physician oversight</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Eden Health offers comprehensive metabolic monitoring. Ask about liraglutide
                    availability at intake if you have specific clinical reasons for needing it
                    over semaglutide or tirzepatide.
                  </p>
                </div>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Eden Health <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">
            Affiliate disclosure: GLP1CompareHub earns a commission if you click through and enroll.
            See{' '}
            <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link>.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Links ── */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Compare GLP-1 Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/tirzepatide-vs-semaglutide', label: 'Tirzepatide vs Semaglutide: The Full Comparison' },
              { href: '/compounded-semaglutide', label: 'Compounded Semaglutide 2026: What to Know' },
              { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide: Guide & FDA Status' },
              { href: '/zepbound-vs-wegovy', label: 'Zepbound vs Wegovy: Which Is More Effective?' },
              { href: '/best-compounded-semaglutide', label: 'Best Compounded Semaglutide Providers 2026' },
              { href: '/best-compounded-tirzepatide', label: 'Best Compounded Tirzepatide Providers 2026' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-colors text-sm text-gray-700"
              >
                <ArrowRight size={14} className="text-orange-500 flex-shrink-0" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <EditorialReviewBox />
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
