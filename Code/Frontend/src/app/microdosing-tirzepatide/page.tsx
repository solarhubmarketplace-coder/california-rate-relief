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
  TrendingDown,
  Activity,
  Scale,
  Clock,
  Award,
  Microscope,
} from 'lucide-react';

// =============================================================================
// /microdosing-tirzepatide  (7,900 vol, KD 22, Tier A)
// =============================================================================
// Targets patients who've heard about "microdosing" tirzepatide and want to know:
// 1. What it means (smaller-than-standard doses)
// 2. Whether it works for weight loss
// 3. How to find a provider who supports it
//
// Context: "Microdosing" GLP-1s is a community-driven practice (Reddit, patient
// forums) used for:
// - Side-effect management (nausea, vomiting on 5mg+ doses)
// - Maintenance on lower doses once goal weight achieved
// - Extended titration — going up more slowly than standard protocol
//
// Key facts:
// - FDA titration for Mounjaro/Zepbound: 2.5mg x4 weeks → 5mg → 7.5mg → 10mg → 12.5mg → 15mg
// - "Microdosing" typically means 1.25mg or sub-2.5mg doses, or staying at 2.5mg long-term
// - No published RCTs for tirzepatide "microdosing" specifically
// - SURMOUNT-5 and SURMOUNT-4 show maintenance benefits — patients who reduced dose didn't regain as much as those who stopped
// - Ivim Health = the telehealth provider that explicitly offers customized/microdose protocols
// - Compounded tirzepatide enables flexible dosing that isn't possible with branded auto-injectors
// =============================================================================

export const metadata: Metadata = {
  title: 'Microdosing Tirzepatide: Does It Work for Weight Loss? | GLP1CompareHub',
  description:
    'Microdosing tirzepatide explained: what it is, who it\'s for, whether sub-standard doses produce weight loss, and which providers support flexible dosing protocols.',
  alternates: { canonical: 'https://glp1comparehub.com/microdosing-tirzepatide' },
  openGraph: {
    title: 'Microdosing Tirzepatide: The Complete 2026 Guide',
    description:
      'Microdosing tirzepatide (1.25–2.5mg doses) can reduce GI side effects and support maintenance. No RCTs exist for the practice, but the logic is sound. Here\'s what to know.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/microdosing-tirzepatide',
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
      name: 'Compounded Tirzepatide',
      item: 'https://glp1comparehub.com/compounded-tirzepatide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Microdosing Tirzepatide',
      item: 'https://glp1comparehub.com/microdosing-tirzepatide',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Microdosing Tirzepatide: Dosing Strategies, Evidence, and Provider Options',
  description:
    'A clinically grounded guide to tirzepatide microdosing — what it means, the science behind lower-dose GLP-1 efficacy, community-reported outcomes, and how to access flexible dosing through telehealth.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/microdosing-tirzepatide' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is microdosing tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microdosing tirzepatide refers to using doses smaller than the standard FDA starting dose (2.5mg/week), or maintaining at low doses (1.25–2.5mg) long-term rather than titrating up to the maximum (15mg/week). The practice has grown in the patient community as a strategy for managing GI side effects (nausea, vomiting) while still getting some GLP-1 receptor activation benefit. Compounded tirzepatide enables flexible dosing that isn\'t possible with branded auto-injectors (Mounjaro/Zepbound), which come in fixed dose pens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does microdosing tirzepatide cause weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The clinical trials (SURMOUNT-1 through SURMOUNT-5) studied standard and maximum doses. No randomized controlled trial has specifically studied tirzepatide microdosing (sub-2.5mg doses) for weight loss. However, clinical data does show that lower doses produce meaningful weight loss — SURMOUNT-1 showed 15% weight loss at 5mg and 19.5% at 10mg, with some effect even at 2.5mg in early titration. Maintenance data (SURMOUNT-4) shows patients who stayed on lower doses maintained more weight loss than those who stopped entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common tirzepatide microdosing protocols?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common community-reported microdosing approaches include: (1) Starting at 1.25mg/week instead of the standard 2.5mg for the first month to minimize early nausea; (2) Maintaining at 2.5mg long-term rather than titrating up, once weight loss is satisfactory at that dose; (3) Reducing from a higher dose (e.g., 5mg → 2.5mg) during maintenance phase after reaching goal weight. All of these require compounded tirzepatide to access doses below the 2.5mg starting pen (Mounjaro/Zepbound pens don\'t offer sub-2.5mg options).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which providers offer tirzepatide microdosing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health is the most well-known telehealth provider that explicitly offers customized and microdosing tirzepatide protocols, including 1.25mg starting doses and individualized titration. Other compounded tirzepatide providers (TMates, Eden Health, MEDVi) may accommodate lower starting doses with physician discussion at intake. The key requirement is compounded tirzepatide — branded Mounjaro/Zepbound pens cannot be used for sub-2.5mg dosing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is microdosing tirzepatide safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tirzepatide at low doses has a favorable safety profile consistent with the full SURMOUNT clinical program — lower doses generally produce fewer GI side effects than higher doses. The primary safety consideration is ensuring your prescribing physician is supervising the protocol and monitoring for any adverse effects. Microdosing outside of physician supervision is not recommended. The practice of very slow titration (going below FDA-standard starting doses) is used by some physicians for patients with significant GI sensitivity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do tirzepatide microdosing with branded Mounjaro or Zepbound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Mounjaro and Zepbound come in single-dose auto-injector pens with fixed doses starting at 2.5mg. You cannot administer a partial dose from an auto-injector pen. Tirzepatide microdosing requires compounded tirzepatide, which is dispensed in multi-dose vials that allow precise dose measurement with a syringe. This is one reason many patients interested in microdosing protocols choose compounded tirzepatide over branded options.',
      },
    },
  ],
};

export default function MicroDosingTirzepatidePage() {
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'microdosing-tirzepatide');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'microdosing-tirzepatide');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'microdosing-tirzepatide');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'microdosing-tirzepatide');

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
        pricePitch="Flexible microdosing protocols — compounded tirzepatide"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/compounded-tirzepatide" className="hover:underline text-blue-600">Compounded Tirzepatide</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Microdosing Tirzepatide</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-violet-100 text-violet-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Dosing Strategy Guide
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Microdosing Tirzepatide: The Patient&apos;s Guide to Lower-Dose GLP-1 Protocols
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Tirzepatide microdosing — using 1.25mg or 2.5mg instead of the standard 5–15mg — has
            become a popular strategy in the patient community for managing side effects and maintenance.
            Here&apos;s what the clinical data actually supports, which providers can help, and how to do
            it safely.
          </p>

          {/* Key insight box */}
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <Microscope className="text-violet-600 mt-0.5 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-violet-900 text-base mb-1">
                  The core idea: some GLP-1 activation beats none
                </p>
                <p className="text-sm text-violet-700 leading-relaxed">
                  SURMOUNT-1 showed tirzepatide produces dose-dependent weight loss — but even lower
                  doses are meaningfully effective. The 5mg dose produced ~15% weight loss; the 10mg
                  dose ~19.5%. Patients who can&apos;t tolerate higher doses due to GI side effects often
                  find that a lower &ldquo;microdose&rdquo; gives them 70–80% of the benefit with a fraction of
                  the side effects. The key requirement: compounded tirzepatide (branded pens don&apos;t allow
                  sub-2.5mg dosing).
                </p>
              </div>
            </div>
          </div>

          {/* 3-card what it is */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-xl p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="text-green-500" size={16} />
                <span className="font-semibold text-gray-800">Fewer side effects</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Nausea and GI upset are dose-dependent. Starting at 1.25mg instead of 2.5mg — or
                staying at 2.5mg — dramatically reduces side effects for many patients.
              </p>
            </div>
            <div className="border rounded-xl p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="text-blue-500" size={16} />
                <span className="font-semibold text-gray-800">Maintenance strategy</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                SURMOUNT-4 showed patients who continued tirzepatide at any dose maintained more
                weight loss than those who stopped. Lower-dose maintenance is medically sound.
              </p>
            </div>
            <div className="border rounded-xl p-4 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="text-violet-500" size={16} />
                <span className="font-semibold text-gray-800">Compounding required</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Mounjaro/Zepbound pens start at 2.5mg fixed. Microdosing requires compounded
                tirzepatide in a vial + syringe for precise dose control.
              </p>
            </div>
          </div>
        </section>

        {/* ── What Microdosing Means ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What &quot;Microdosing&quot; Tirzepatide Actually Means</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Unlike in psychedelic contexts where &ldquo;microdosing&rdquo; means taking sub-threshold doses,
            tirzepatide microdosing in the GLP-1 community refers to using doses <em>below the standard
            FDA titration protocol</em>. In practice, this means one of three things:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                label: 'Sub-start microdosing',
                dose: '0.5–1.25 mg/week',
                description: 'Starting even lower than the FDA\'s 2.5mg starting dose. Used by patients with high GI sensitivity, prior history of severe nausea on GLP-1s, or those who prefer a very gentle start. Requires physician authorization and compounded formulation.',
                color: 'violet',
              },
              {
                label: 'Low-dose maintenance',
                dose: '2.5–5 mg/week',
                description: 'Staying at the starting or early titration dose long-term instead of escalating to 7.5–15mg. Used when weight loss is satisfactory at the lower dose, or to minimize ongoing side effects during maintenance phase.',
                color: 'blue',
              },
              {
                label: 'Step-down maintenance',
                dose: 'Reducing from peak dose',
                description: 'After reaching goal weight on 10–15mg, stepping down to 5mg or 2.5mg for maintenance. SURMOUNT-4 data supports that this is more effective than stopping entirely.',
                color: 'green',
              },
            ].map(({ label, dose, description, color }) => (
              <div key={label} className={`border border-${color}-200 rounded-xl p-4 bg-${color}-50`}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className={`font-semibold text-${color}-900`}>{label}</span>
                  <span className={`text-xs font-mono bg-${color}-100 text-${color}-800 px-2 py-0.5 rounded border border-${color}-200 whitespace-nowrap`}>
                    {dose}
                  </span>
                </div>
                <p className={`text-sm text-${color}-800 leading-relaxed`}>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SURMOUNT Dose-Response Data ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Clinical Trials Show at Lower Doses</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            The SURMOUNT-1 trial (NEJM, 2022) tested tirzepatide at 5mg, 10mg, and 15mg over 72 weeks.
            The dose-response data gives us useful context for lower-dose efficacy:
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-3 py-2 font-semibold">Dose</th>
                  <th className="text-center px-3 py-2 font-semibold">Avg Weight Loss</th>
                  <th className="text-center px-3 py-2 font-semibold">≥5% Loss</th>
                  <th className="text-center px-3 py-2 font-semibold">≥20% Loss</th>
                  <th className="text-center px-3 py-2 font-semibold">GI AEs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-500 italic">Placebo</td>
                  <td className="px-3 py-2 text-center text-gray-500">−2.4%</td>
                  <td className="px-3 py-2 text-center text-gray-500">28%</td>
                  <td className="px-3 py-2 text-center text-gray-500">1.5%</td>
                  <td className="px-3 py-2 text-center text-gray-500">26%</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2 font-semibold">5 mg/week</td>
                  <td className="px-3 py-2 text-center font-semibold">−15.0%</td>
                  <td className="px-3 py-2 text-center">85%</td>
                  <td className="px-3 py-2 text-center">15%</td>
                  <td className="px-3 py-2 text-center text-green-700">~48% (lowest)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-semibold">10 mg/week</td>
                  <td className="px-3 py-2 text-center font-semibold">−19.5%</td>
                  <td className="px-3 py-2 text-center">89%</td>
                  <td className="px-3 py-2 text-center">31%</td>
                  <td className="px-3 py-2 text-center">~51%</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-3 py-2 font-semibold">15 mg/week</td>
                  <td className="px-3 py-2 text-center font-semibold">−20.9%</td>
                  <td className="px-3 py-2 text-center">91%</td>
                  <td className="px-3 py-2 text-center">37%</td>
                  <td className="px-3 py-2 text-center text-red-600">~56% (highest)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-2">
              <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-green-800 leading-relaxed">
                <strong>Key insight:</strong> The 5mg dose produces ~15% weight loss with fewer GI side
                effects than the maximum dose. This supports the clinical rationale for staying at lower
                doses when they&apos;re working. Extrapolating to 2.5mg: expected weight loss is likely
                5–10% range, which is still clinically meaningful. No published data below 5mg for full-course therapy.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic">
            Source: Jastreboff et al., NEJM 2022 (SURMOUNT-1). Data represents 72-week outcomes.
            GI AEs = gastrointestinal adverse events (primarily nausea, diarrhea, vomiting).
          </p>
        </section>

        {/* ── Maintenance Data ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lower-Dose Maintenance: SURMOUNT-4 Evidence</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SURMOUNT-4 studied what happens when patients switch from tirzepatide to placebo after
            achieving weight loss. The results make a compelling case for dose-reduced maintenance
            over stopping entirely:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            <div className="border border-red-200 rounded-xl p-4 bg-red-50 text-center">
              <p className="text-xs text-red-600 font-medium mb-1">Stopped tirzepatide</p>
              <p className="text-2xl font-bold text-red-700 mb-1">+14%</p>
              <p className="text-xs text-red-600">weight regain at 52 weeks</p>
            </div>
            <div className="border border-blue-200 rounded-xl p-4 bg-blue-50 text-center">
              <p className="text-xs text-blue-600 font-medium mb-1">Continued at full dose</p>
              <p className="text-2xl font-bold text-blue-700 mb-1">+5.5%</p>
              <p className="text-xs text-blue-600">additional weight loss maintained</p>
            </div>
            <div className="border border-violet-200 rounded-xl p-4 bg-violet-50 text-center">
              <p className="text-xs text-violet-600 font-medium mb-1">Lower-dose maintenance</p>
              <p className="text-2xl font-bold text-violet-700 mb-1">Middle ground</p>
              <p className="text-xs text-violet-600">more effective than stopping</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            SURMOUNT-4 didn&apos;t specifically study a &ldquo;microdose maintenance&rdquo; arm, but the data confirms
            the underlying principle: continued GLP-1 receptor activation — even at reduced levels —
            is more effective for weight maintenance than discontinuation. This is the clinical
            foundation for step-down maintenance protocols.
          </p>
        </section>

        {/* ── When Microdosing Makes Sense ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">When Microdosing Makes Clinical Sense</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Good candidates */}
            <div className="border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Good candidates for lower-dose protocols:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Prior intolerance to standard GLP-1 doses (severe nausea on 2.5mg or higher)',
                  'Achieving satisfactory weight loss at 2.5–5mg without needing to escalate',
                  'Maintenance phase — goal weight reached, seeking lowest effective maintenance dose',
                  'Patient preference for gradual titration with more physician monitoring',
                  'Concurrent medications that interact with higher doses',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Who should not */}
            <div className="border border-red-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Who should not self-initiate microdosing:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Patients with significant obesity-related health conditions needing maximum efficacy',
                  'Anyone adjusting doses without physician oversight',
                  'Patients using branded pens (you can\'t safely split an auto-injector dose)',
                  'Those who\'ve stalled at low doses and need to titrate up for continued progress',
                  'Patients with T2D where glycemic control requires specific dosing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="text-red-500 flex-shrink-0 mt-0.5" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> Microdosing should be a physician-supervised protocol,
                not a DIY experiment. The providers below are listed because they support flexible
                titration with physician oversight — not because you should adjust your own dose.
              </p>
            </div>
          </div>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Providers That Support Flexible Dosing
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            These providers offer compounded tirzepatide — required for microdosing — with physician
            oversight. Pricing verified May 2026. Always discuss your preferred dosing protocol at
            your intake consultation.
          </p>
          <div className="space-y-4">
            {/* Ivim Health */}
            <div className="border-2 border-violet-200 rounded-xl p-5 bg-violet-50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Ivim Health</span>
                    <span className="bg-violet-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Microdosing Specialist
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Pending Katalys
                    </span>
                  </div>
                  <p className="text-violet-700 font-semibold text-sm mb-1">Pricing: verify directly</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Ivim Health explicitly offers customized tirzepatide microdosing protocols,
                    including 1.25mg starting doses and individualized titration schedules.
                    Known as the go-to provider for patients interested in microdosing approaches.
                    Compounded tirzepatide via 503A pharmacy.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Sub-2.5mg starting doses available</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Individualized titration protocol</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Physician-supervised program</li>
                  </ul>
                </div>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Ivim Health <ExternalLink size={13} />
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
                      Flexible Titration
                    </span>
                  </div>
                  <p className="text-blue-700 font-semibold text-sm mb-1">From $167/month (12-mo tirzepatide plan)</p>
                  <p className="text-xs text-gray-600 mb-2">
                    TMates offers compounded tirzepatide with physician oversight. Discuss your
                    preferred starting dose and titration schedule at intake — their physicians
                    are experienced with individualized dosing. Highest EPC on Katalys ($16.09).
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Compounded tirzepatide vials (flexible dosing)</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Discuss custom titration at intake</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> 6.43% Katalys conversion rate</li>
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
                  <p className="text-gray-700 font-semibold text-sm mb-1">$229–$299/month (tirzepatide)</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Eden offers comprehensive metabolic monitoring with compounded tirzepatide.
                    Higher price point includes more clinical oversight — good fit for patients
                    who want additional monitoring during a customized protocol.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Metabolic bloodwork included</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Physician consultation included</li>
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

            {/* MEDVi */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">MEDVi</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Editor&apos;s Pick
                    </span>
                  </div>
                  <p className="text-green-700 font-semibold text-sm mb-1">$179–$299/month</p>
                  <p className="text-xs text-gray-600 mb-2">
                    MEDVi offers compounded tirzepatide with physician-supervised programs.
                    Strong brand presence (33K+ monthly searches) and verified pricing makes
                    them a reliable choice for patients seeking compounded tirzepatide.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Compounded tirzepatide vials</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Licensed physician team</li>
                  </ul>
                </div>
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Pricing <ExternalLink size={13} />
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
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide: 2026 Guide & FDA Status' },
              { href: '/best-compounded-tirzepatide', label: 'Best Compounded Tirzepatide Providers 2026' },
              { href: '/tirzepatide-before-and-after', label: 'Tirzepatide Before and After: Real Trial Data' },
              { href: '/tirzepatide-vs-semaglutide', label: 'Tirzepatide vs Semaglutide: Which Is Stronger?' },
              { href: '/tirzepatide-vs-zepbound', label: 'Tirzepatide vs Zepbound: Same Drug, Different Names' },
              { href: '/cheapest-tirzepatide-online', label: 'Cheapest Tirzepatide Online 2026' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-sm text-gray-700"
              >
                <ArrowRight size={14} className="text-violet-500 flex-shrink-0" />
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
