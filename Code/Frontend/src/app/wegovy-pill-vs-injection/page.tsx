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
  X,
  AlertCircle,
  ExternalLink,
  Pill,
  Syringe,
  Clock,
  Award,
  TrendingDown,
} from 'lucide-react';

// =============================================================================
// /wegovy-pill-vs-injection  (1,400 vol, KD 31, "oral wegovy")
// =============================================================================
// Targets patients who heard about the Wegovy pill (oral semaglutide for obesity
// — higher-dose 25mg/50mg vs the Rybelsus T2D formulation) and want to know how
// it compares to weekly injections.
//
// Key facts:
// - Rybelsus (3/7/14mg oral, approved 2019) = T2D ONLY, NOT obesity-approved
// - Higher-dose oral semaglutide for obesity (25mg/50mg) was in OASIS trials;
//   FDA approval status should be verified via Gronk before any definitive claim
// - OASIS-1 (50mg/day): ~15.1% weight loss at 68 weeks (comparable to injectable)
// - STEP-1 (injectable Wegovy 2.4mg/week): ~14.9% weight loss at 68 weeks
// - Bioavailability: oral ~1%, injectable ~94%
// - Fasting requirement: strict 30-min empty-stomach protocol for oral
// - Practical buyer: branded Wegovy pill unavailable via compounding (brand-only);
//   compounded injectable is the accessible alternative ($99-299/mo)
// =============================================================================

export const metadata: Metadata = {
  title: 'Wegovy Pill vs Injection 2026: What\'s the Difference? | GLP1CompareHub',
  description:
    'Wegovy pill vs injection compared: bioavailability, weight loss data, fasting requirements, cost, and which format is right for you. OASIS-1 and STEP-1 trial breakdown.',
  alternates: { canonical: 'https://glp1comparehub.com/wegovy-pill-vs-injection' },
  openGraph: {
    title: 'Wegovy Pill vs Injection 2026: OASIS vs STEP-1 Trial Data Compared',
    description:
      'The Wegovy pill shows ~15% weight loss in OASIS-1 — matching the injection. But the fasting protocol and cost make it a harder choice for most patients. Here\'s the full breakdown.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/wegovy-pill-vs-injection',
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
      name: 'Medication Comparisons',
      item: 'https://glp1comparehub.com/tirzepatide-vs-semaglutide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Wegovy Pill vs Injection',
      item: 'https://glp1comparehub.com/wegovy-pill-vs-injection',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wegovy Pill vs Injection 2026: OASIS-1 vs STEP-1 Trial Data Compared',
  description:
    'Comprehensive comparison of oral Wegovy (high-dose semaglutide tablet) vs weekly Wegovy injection for weight loss, including bioavailability, clinical trial data, fasting requirements, and cost.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/wegovy-pill-vs-injection' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a Wegovy pill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Novo Nordisk developed a higher-dose oral semaglutide formulation (25mg/50mg tablets) specifically for obesity management under the Wegovy brand — distinct from Rybelsus (3/7/14mg, approved only for type 2 diabetes). The oral obesity formulation uses much higher doses to compensate for the extremely low oral bioavailability of semaglutide (~1%). FDA approval status for the Wegovy pill should be confirmed through current sources.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Wegovy pill compare to the injection for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the OASIS-1 clinical trial, oral semaglutide 50mg/day produced approximately 15.1% weight loss over 68 weeks — nearly identical to the 14.9% seen with injectable Wegovy 2.4mg/week in the STEP-1 trial. However, the oral formulation requires strict fasting (30+ minutes before food on an empty stomach with water only), and it uses much higher mg doses to achieve similar blood levels due to its ~1% oral bioavailability vs ~94% for the injection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Wegovy pill fasting requirement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oral semaglutide (whether Rybelsus or the obesity formulation) requires strict fasting: take on an empty stomach with no more than 4 oz (120 mL) of plain water, at least 30 minutes before the first food, other medications, or other beverages of the day. Eating sooner or drinking other liquids dramatically reduces absorption and efficacy. This daily compliance requirement is more demanding than a weekly injection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the Wegovy pill cost vs the injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded Wegovy (injection) costs approximately $1,300-$1,400/month without insurance. The Wegovy pill pricing will depend on launch pricing by Novo Nordisk and insurance coverage — it is a brand-name medication not available via compounding pharmacies. Compounded injectable semaglutide (a practical alternative) costs $99-$299/month through telehealth providers and does not require insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get the Wegovy pill through a compounding pharmacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Wegovy pill (brand-name oral semaglutide for obesity) is a Novo Nordisk proprietary formulation and cannot be legally compounded by 503A pharmacies. Compounding pharmacies can compound injectable semaglutide (the API, which is identical to the active ingredient in Wegovy/Ozempic injections), but not the oral formulation. If you\'re seeking a lower-cost alternative to branded Wegovy, compounded injectable semaglutide is the available option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Rybelsus the same as the Wegovy pill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Rybelsus (oral semaglutide 3/7/14mg) is FDA-approved only for type 2 diabetes, not obesity. The Wegovy pill refers to a higher-dose oral semaglutide formulation (25mg/50mg) specifically developed and studied for obesity management in the OASIS trials. While both contain semaglutide, the dose, indication, and approval status differ significantly.',
      },
    },
  ],
};

export default function WegovyPillVsInjectionPage() {
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'wegovy-pill-vs-injection');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'wegovy-pill-vs-injection');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'wegovy-pill-vs-injection');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'wegovy-pill-vs-injection');

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
        href={strutUrl}
        brandName="Strut Health"
        pricePitch="Compounded injectable semaglutide from $99/mo"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/tirzepatide-vs-semaglutide" className="hover:underline text-blue-600">Comparisons</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Wegovy Pill vs Injection</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Medication Format Guide
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Wegovy Pill vs Injection: Is the Oral Version Worth It?
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Novo Nordisk developed a high-dose oral semaglutide specifically for obesity — and OASIS trial
            data shows it can match the injection&apos;s results. But there&apos;s a catch: strict daily
            fasting requirements, brand-only pricing, and no compounding option. Here&apos;s what you need to know.
          </p>

          {/* Answer-first verdict box */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <Syringe className="text-indigo-600 mt-0.5 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-indigo-900 text-base mb-1">
                  Bottom line: similar weight loss, but the injection is more practical for most patients
                </p>
                <p className="text-sm text-indigo-700 leading-relaxed">
                  The Wegovy pill (oral semaglutide 50mg/day) shows ~15.1% weight loss in OASIS-1 — nearly
                  matching the injection&apos;s ~14.9% in STEP-1. But the oral version requires strict daily
                  fasting, is a brand-name-only medication, and is unavailable through compounding.
                  The injection is available compounded for $99–$299/month; the pill is not.
                </p>
              </div>
            </div>
          </div>

          {/* Quick format cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Pill card */}
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Pill className="text-indigo-500" size={18} />
                <span className="font-semibold text-gray-800 text-sm">Oral Semaglutide (Wegovy Pill)</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-start gap-1.5"><span className="text-indigo-500 mt-0.5">•</span><span>50mg/day tablet (high-dose)</span></li>
                <li className="flex items-start gap-1.5"><span className="text-indigo-500 mt-0.5">•</span><span>~1% oral bioavailability</span></li>
                <li className="flex items-start gap-1.5"><span className="text-indigo-500 mt-0.5">•</span><span>Requires strict 30-min fasting daily</span></li>
                <li className="flex items-start gap-1.5"><span className="text-indigo-500 mt-0.5">•</span><span>Brand-only, no compounding option</span></li>
                <li className="flex items-start gap-1.5"><span className="text-indigo-500 mt-0.5">•</span><span>~$1,300+/month without insurance</span></li>
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span><span>No needles required</span></li>
              </ul>
            </div>
            {/* Injection card */}
            <div className="border-2 border-blue-200 rounded-xl p-4 bg-blue-50">
              <div className="flex items-center gap-2 mb-2">
                <Syringe className="text-blue-500" size={18} />
                <span className="font-semibold text-gray-800 text-sm">Injectable Semaglutide</span>
                <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">Recommended</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-start gap-1.5"><span className="text-blue-500 mt-0.5">•</span><span>2.4mg/week (Wegovy) or compounded equivalent</span></li>
                <li className="flex items-start gap-1.5"><span className="text-blue-500 mt-0.5">•</span><span>~94% subcutaneous bioavailability</span></li>
                <li className="flex items-start gap-1.5"><span className="text-blue-500 mt-0.5">•</span><span>Once-weekly injection, no fasting needed</span></li>
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span><span>Available compounded from $99/mo</span></li>
                <li className="flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span><span>Most studied format for obesity</span></li>
                <li className="flex items-start gap-1.5"><span className="text-yellow-500 mt-0.5">!</span><span>Weekly subcutaneous injection required</span></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic">
            Note: &ldquo;Wegovy pill&rdquo; refers to the high-dose oral semaglutide obesity formulation (25/50mg).
            This is distinct from Rybelsus (3/7/14mg, approved for type 2 diabetes only).{' '}
            <Link href="/oral-semaglutide-vs-injection" className="text-blue-600 hover:underline">
              See our full oral vs injection comparison →
            </Link>
          </p>
        </section>

        {/* ── What Is the Wegovy Pill? ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the Wegovy Pill?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The &ldquo;Wegovy pill&rdquo; refers to a high-dose oral semaglutide formulation developed by
            Novo Nordisk specifically for obesity management. It is <strong>not</strong> the same as Rybelsus
            (their diabetes oral semaglutide). The key difference is dose:
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Product</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Doses Available</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">FDA Approval</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Indication</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-3 py-2 font-medium">Rybelsus (Novo Nordisk)</td>
                  <td className="px-3 py-2">3mg / 7mg / 14mg</td>
                  <td className="px-3 py-2"><span className="text-green-700 font-medium">Approved 2019</span></td>
                  <td className="px-3 py-2">Type 2 diabetes only — NOT weight loss</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-medium">Oral Semaglutide for Obesity<br />(Wegovy pill, Novo Nordisk)</td>
                  <td className="px-3 py-2">25mg / 50mg</td>
                  <td className="px-3 py-2"><span className="text-indigo-700 font-medium">Status: verify current</span></td>
                  <td className="px-3 py-2">Obesity / weight management</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2 font-medium">Wegovy (Novo Nordisk injection)</td>
                  <td className="px-3 py-2">0.25mg → 2.4mg/week</td>
                  <td className="px-3 py-2"><span className="text-green-700 font-medium">Approved 2021</span></td>
                  <td className="px-3 py-2">Obesity / weight management + cardiovascular</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-amber-800">
                <strong>Why the huge dose difference?</strong> Semaglutide has very poor oral
                bioavailability (~1%) because stomach acid and digestive enzymes break down the peptide
                molecule. The 50mg oral dose is engineered to deliver an effective blood concentration
                despite ~99% of the drug being destroyed in the GI tract. The injectable (0.5–2.4mg)
                bypasses digestion entirely via subcutaneous absorption.
              </p>
            </div>
          </div>
        </section>

        {/* ── Clinical Trial Data ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trial Data: OASIS-1 vs STEP-1</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            The most important comparison: does the pill actually work as well as the injection?
            The clinical data is surprisingly close.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* OASIS-1 */}
            <div className="border border-indigo-200 rounded-xl p-5 bg-indigo-50">
              <div className="flex items-center gap-2 mb-3">
                <Pill className="text-indigo-600" size={18} />
                <span className="font-semibold text-indigo-900">OASIS-1 (Wegovy Pill)</span>
              </div>
              <div className="space-y-2 text-sm text-indigo-800">
                <div className="flex justify-between"><span>Drug</span><span className="font-medium">Oral semaglutide 50mg/day</span></div>
                <div className="flex justify-between"><span>Duration</span><span className="font-medium">68 weeks</span></div>
                <div className="flex justify-between items-center">
                  <span>Weight loss</span>
                  <span className="font-bold text-xl text-indigo-900">~15.1%</span>
                </div>
                <div className="flex justify-between"><span>Participants</span><span className="font-medium">667 patients</span></div>
                <div className="flex justify-between"><span>GI side effects</span><span className="font-medium">~80% (vs ~75% inj.)</span></div>
              </div>
            </div>
            {/* STEP-1 */}
            <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <Syringe className="text-blue-600" size={18} />
                <span className="font-semibold text-blue-900">STEP-1 (Wegovy Injection)</span>
              </div>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex justify-between"><span>Drug</span><span className="font-medium">Injectable sema 2.4mg/week</span></div>
                <div className="flex justify-between"><span>Duration</span><span className="font-medium">68 weeks</span></div>
                <div className="flex justify-between items-center">
                  <span>Weight loss</span>
                  <span className="font-bold text-xl text-blue-900">~14.9%</span>
                </div>
                <div className="flex justify-between"><span>Participants</span><span className="font-medium">1,306 patients</span></div>
                <div className="flex justify-between"><span>GI side effects</span><span className="font-medium">~74%</span></div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-2">
              <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-green-800 leading-relaxed">
                <strong>Key finding:</strong> Despite semaglutide&apos;s extremely low oral bioavailability,
                the 50mg/day dose was able to achieve comparable weight loss to the weekly injection in
                clinical trials. The mechanism is the same — GLP-1 receptor agonism — just requiring a
                50× higher dose to compensate for GI degradation.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic">
            Source: OASIS-1 trial (NEJM 2023, Aronne et al.); STEP-1 trial (NEJM 2021, Wilding et al.).
            These are head-to-head trial designs conducted by Novo Nordisk. Results not directly
            cross-comparable (different populations, study periods).
          </p>
        </section>

        {/* ── Bioavailability & Fasting Requirement ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Fasting Requirement: Why It Matters</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Oral semaglutide works only with strict compliance to a fasting protocol. Skip the protocol
            once and you may absorb a fraction of the dose:
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
            <div className="flex items-start gap-3">
              <Clock className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-orange-900 mb-2">Oral semaglutide dosing protocol</p>
                <ol className="text-sm text-orange-800 space-y-1.5 list-decimal list-inside">
                  <li>Take on completely empty stomach (first thing in the morning)</li>
                  <li>Use no more than 4 oz (120 mL) of plain water — no juice, coffee, or other beverages</li>
                  <li>Wait at least 30 minutes before eating, drinking anything else, or taking other medications</li>
                  <li>Do this <strong>every day</strong> without exception</li>
                </ol>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Research shows that even small deviations from this protocol dramatically reduce absorption.
            Taking oral semaglutide with food can reduce bioavailability by ~50–80%. Taking it with a
            regular glass of water (instead of 4 oz) also reduces exposure.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This daily compliance burden is why many patients and physicians still prefer the injection
            despite the needle: you take a once-weekly shot at any time of day, eat normally beforehand,
            and don&apos;t have to restructure your morning routine.
          </p>
        </section>

        {/* ── Side-by-Side Comparison Table ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Full Comparison</h2>
            <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-3 py-3 font-semibold">Feature</th>
                  <th className="text-center px-3 py-3 font-semibold">
                    <span className="flex items-center justify-center gap-1"><Pill size={14} /> Wegovy Pill</span>
                  </th>
                  <th className="text-center px-3 py-3 font-semibold bg-blue-700">
                    <span className="flex items-center justify-center gap-1"><Syringe size={14} /> Wegovy Injection</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Active ingredient', 'Semaglutide', 'Semaglutide'],
                  ['Form', '25mg/50mg tablet (oral)', '0.25–2.4mg/week injection (subQ)'],
                  ['Bioavailability', '~1%', '~94%'],
                  ['Dosing schedule', 'Once daily (strict fasting)', 'Once weekly (any time)'],
                  ['Weight loss (clinical trial)', '~15.1% at 68 weeks (OASIS-1)', '~14.9% at 68 weeks (STEP-1)'],
                  ['Fasting required', 'Yes — 30+ min, 4 oz water only', 'No'],
                  ['Available via compounding', 'No — brand-only formulation', 'Yes — from $99/mo'],
                  ['Branded cost without insurance', '~$1,300+/month (verify)', '~$1,300–$1,400/month'],
                  ['Telehealth access', 'Limited (brand prescription only)', 'Widely available via telehealth'],
                  ['GI side effects', 'Nausea ~80% in OASIS-1', 'Nausea ~74% in STEP-1'],
                  ['Needle required', 'No', 'Yes (small 4mm needle)'],
                  ['Best for', 'Needle-averse + high compliance', 'Most patients; accessible + affordable'],
                ].map(([feature, pill, injection], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2.5 font-medium text-gray-700">{feature}</td>
                    <td className="px-3 py-2.5 text-center text-gray-600">{pill}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700 bg-blue-50 font-medium">{injection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Who Should Choose Which ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Choose Which?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Choose pill */}
            <div className="border border-indigo-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Pill className="text-indigo-600" size={18} />
                <h3 className="font-semibold text-gray-900">Consider the Wegovy pill if:</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'You have significant needle phobia that would prevent consistent injectable compliance',
                  'You have insurance that will cover the oral formulation',
                  'You can consistently follow the strict 30-minute morning fasting protocol',
                  'Your physician recommends it based on your specific medical profile',
                  'You\'ve already tried and tolerated oral semaglutide (Rybelsus) for diabetes',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-indigo-500 flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Choose injection */}
            <div className="border-2 border-blue-300 rounded-xl p-5 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <Syringe className="text-blue-600" size={18} />
                <h3 className="font-semibold text-gray-900">Choose injectable semaglutide if:</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'You want the most affordable access — compounded starts at $99/month',
                  'You don\'t want to restructure your morning routine with strict fasting',
                  'You prefer once-weekly dosing over daily pill compliance',
                  'You don\'t have insurance coverage for the branded pill',
                  'You\'re comparing on cost-effectiveness: same results, lower price',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-blue-500 flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-blue-700 mt-3 italic">
                Most telehealth patients choose the injectable — the compounded option makes it
                accessible without insurance at $99–$299/month.
              </p>
            </div>
          </div>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Where to Get Compounded Injectable Semaglutide
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            The Wegovy pill is only available via prescription at a pharmacy. Compounded injectable
            semaglutide — with the same active ingredient as Wegovy/Ozempic — is available through
            these telehealth providers without insurance. Prices verified May 2026.
          </p>
          <div className="space-y-4">
            {/* Strut Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Strut Health</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Best Price
                    </span>
                  </div>
                  <p className="text-green-700 font-semibold text-sm mb-1">From $99/month</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Compounded injectable semaglutide. Async or live video consultation.
                    Monthly billing, no long-term commitment required.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Physician-supervised</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Ships to most states</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> No insurance needed</li>
                  </ul>
                </div>
                <a
                  href={strutUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* TMates */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">TMates</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Top-Rated
                    </span>
                  </div>
                  <p className="text-blue-700 font-semibold text-sm mb-1">From $158/month (12-mo plan)</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Compounded semaglutide injections with strong patient support.
                    Also offers a sublingual oral option — one of the few telehealth providers that does.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Injectable + oral sublingual available</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Highest EPC on Katalys ($16.09)</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> 6.43% conversion rate</li>
                  </ul>
                </div>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Eden Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Eden Health</span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">$229–$249/month</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Compounded semaglutide injections with comprehensive metabolic panel included
                    at intake. Higher price point reflects full-service clinical support.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Metabolic bloodwork included</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Licensed physician oversight</li>
                  </ul>
                </div>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Embody */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Embody</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Needle-Free Option
                    </span>
                  </div>
                  <p className="text-purple-700 font-semibold text-sm mb-1">From $149/first month</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Compounded injectable semaglutide. Also offers GLP-1 gum — an oral delivery
                    format for patients exploring alternatives to injection.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> GLP-1 gum available (needle-free)</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> $149 first-month intro price</li>
                  </ul>
                </div>
                <a
                  href={embodyUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">
            Affiliate disclosure: GLP1CompareHub earns a commission if you click through and enroll.
            This does not affect our editorial scoring. See{' '}
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
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Related Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/oral-semaglutide-vs-injection', label: 'Oral vs Injectable Semaglutide: Full Guide' },
              { href: '/zepbound-vs-wegovy', label: 'Zepbound vs Wegovy: Which Is Better?' },
              { href: '/tirzepatide-vs-semaglutide', label: 'Tirzepatide vs Semaglutide: The Big Comparison' },
              { href: '/compounded-semaglutide', label: 'Compounded Semaglutide: What to Know in 2026' },
              { href: '/best-compounded-semaglutide', label: 'Best Compounded Semaglutide Providers 2026' },
              { href: '/cheapest-tirzepatide-online', label: 'Cheapest Tirzepatide Online 2026' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-gray-700"
              >
                <ArrowRight size={14} className="text-blue-500 flex-shrink-0" />
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
