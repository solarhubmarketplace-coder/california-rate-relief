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
import { ArrowRight, Check, X, AlertCircle, ExternalLink, Award } from 'lucide-react';

// =============================================================================
// /microdosing-semaglutide  (3,500 vol, KD 30, Tier A)
// =============================================================================
// Strategy guide companion to the tirzepatide microdosing pages already live.
// Targets patients who want to understand sub-standard or sub-therapeutic
// semaglutide dosing — for side-effect management, maintenance, or titration.
//
// Key facts:
// - STEP trials dose ladder: 0.25mg → 0.5mg → 1.0mg → 1.7mg → 2.4mg (4-wk holds)
// - No dedicated RCTs for "microdosing" (sub-0.25mg) specifically
// - Dose-response data from STEP: 0.5mg ~5.9% loss, 1.0mg ~9.3%, 2.4mg ~14.9% at 68wks
// - Compounded semaglutide vials enable flexible dosing; branded pens do not
// - Ivim Health = explicit microdosing specialist for semaglutide
// - Strut Health ($99/mo) = most flexible for custom vial dosing
// =============================================================================

export const metadata: Metadata = {
  title: 'Microdosing Semaglutide 2026: Doses, Evidence & How to Start | GLP1CompareHub',
  description:
    'Microdosing semaglutide explained — using sub-standard doses for side-effect management, ultra-slow titration, or maintenance coasting. STEP trial evidence, dose math tables, and provider options.',
  alternates: { canonical: 'https://glp1comparehub.com/microdosing-semaglutide' },
  openGraph: {
    title: 'Microdosing Semaglutide 2026: Sub-Standard Doses, Evidence & Providers',
    description:
      'Starting below 0.25mg or staying at sub-therapeutic doses of semaglutide for side-effect management or maintenance. What the STEP trials show, how to dose, and which providers support it.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/microdosing-semaglutide',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'GLP-1 Resources',
      item: 'https://glp1comparehub.com/compounded-semaglutide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Microdosing Semaglutide',
      item: 'https://glp1comparehub.com/microdosing-semaglutide',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Microdosing Semaglutide 2026: Sub-Standard Doses, STEP Trial Evidence & How to Start',
  description:
    'A clinically grounded guide to semaglutide microdosing — what it means, dose-response evidence from the STEP trials, the compounded semaglutide advantage for flexible dosing, maintenance protocols, and provider options.',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/microdosing-semaglutide',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is microdosing semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microdosing semaglutide refers to intentionally using doses below the standard FDA-approved starting dose of 0.25mg/week, or maintaining at sub-therapeutic doses (0.25–0.5mg) long-term rather than titrating to the maximum 2.4mg/week. Patients use this approach to minimize nausea during initial titration, coast on a minimal effective maintenance dose after reaching goal weight, or manage tolerability when standard doses cause significant side effects. It requires compounded semaglutide in a multi-dose vial — branded Ozempic and Wegovy pens use fixed doses and cannot be partially administered.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much weight loss does microdosing semaglutide produce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The STEP clinical trials show a clear dose-response relationship: 0.5mg/week produced approximately 5.9% body weight loss at 68 weeks, 1.0mg/week produced approximately 9.3%, and the full 2.4mg/week dose produced approximately 14.9%. No dedicated randomized controlled trials exist for sub-0.25mg doses ("true microdosing"). The evidence for maintenance microdosing is stronger — patients who find a minimum effective dose and stay on it long-term can sustain their weight loss results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is compounded semaglutide better for microdosing than Ozempic or Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded Ozempic comes in fixed auto-injector pens (0.25mg, 0.5mg, 1mg, 2mg); Wegovy pens are similarly fixed (0.25mg, 0.5mg, 1mg, 1.7mg, 2.4mg). You cannot administer a partial dose from these pens. Compounded semaglutide is dispensed in multi-dose vials (typically 2.5mg/mL or 5mg/mL), allowing precise dose measurement with an insulin syringe. This means you can dose 0.1mg, 0.125mg, or any custom amount — which is why microdosing protocols require the compounded formulation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum effective maintenance dose for semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single minimum effective dose — it varies by individual. Some patients maintain their goal weight at 0.5mg/week; others require 1.0mg or higher. The clinical approach is to step down by one dose tier every 8–12 weeks after reaching goal weight and monitor for weight regain. If weight rebounds by more than 3–5 lbs, stepping back up to the previous dose is typically recommended. This protocol is individualized and should be supervised by a prescribing physician.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which providers offer semaglutide microdosing protocols?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health is the most well-known telehealth provider offering explicit semaglutide microdosing and customized titration protocols. Strut Health ($99/mo for injectable compounded semaglutide) is notable for dosing flexibility with vial-based delivery. TMates ($158/mo) also offers compounded semaglutide with physician-supervised protocols. All require a brief medical intake and valid prescription from a licensed prescriber.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ultra-slow titration the same as microdosing semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They overlap but are not identical. Ultra-slow titration means holding at each dose level for 8–12 weeks instead of the standard 4 weeks before moving up. You may still start at 0.25mg and eventually reach the therapeutic maximum — the pace is just slower. True microdosing (in the GLP-1 patient community sense) means intentionally staying at sub-therapeutic doses either indefinitely (maintenance strategy) or starting below 0.25mg. Both require compounded semaglutide for maximum flexibility.',
      },
    },
  ],
};

// Dose math table rows
interface DoseMathRow {
  dose: string;
  vial2_5: string;
  vial5: string;
}

const doseMathRows: DoseMathRow[] = [
  { dose: '0.05mg', vial2_5: '0.02 mL', vial5: '0.01 mL' },
  { dose: '0.1mg', vial2_5: '0.04 mL', vial5: '0.02 mL' },
  { dose: '0.125mg', vial2_5: '0.05 mL', vial5: '0.025 mL' },
  { dose: '0.25mg (standard start)', vial2_5: '0.10 mL', vial5: '0.05 mL' },
  { dose: '0.5mg', vial2_5: '0.20 mL', vial5: '0.10 mL' },
  { dose: '1.0mg', vial2_5: '0.40 mL', vial5: '0.20 mL' },
  { dose: '1.7mg', vial2_5: '0.68 mL', vial5: '0.34 mL' },
  { dose: '2.4mg', vial2_5: '0.96 mL', vial5: '0.48 mL' },
];

// Who uses microdosing
const useCases = [
  {
    title: 'Side-effect management',
    description:
      'Patients who experience significant nausea or GI upset at 0.25mg use sub-threshold starting doses (0.1–0.125mg) to allow gut adaptation before stepping up.',
    icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
  },
  {
    title: 'Maintenance coasting',
    description:
      'Patients who reached their goal weight at a lower dose intentionally stay there rather than pushing to maximum. Some maintain at 0.5mg indefinitely.',
    icon: <Check className="h-5 w-5 text-green-500" />,
  },
  {
    title: 'Tolerability ceiling',
    description:
      "Patients who can't tolerate therapeutic doses (1.0mg+) due to chronic nausea or other side effects stabilize at whatever dose they can handle and get partial benefit.",
    icon: <AlertCircle className="h-5 w-5 text-red-500" />,
  },
  {
    title: 'Ultra-slow titration',
    description:
      'Some physicians use 8–12 week holds at each dose tier instead of the standard 4-week protocol — slower onset, reduced side-effect burden, same eventual destination.',
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
];

export default function MicroDosingSemaglutiePage() {
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'microdosing-semaglutide');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'microdosing-semaglutide');
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'microdosing-semaglutide');

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
        pricePitch="Microdosing specialist — custom semaglutide protocols"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/compounded-semaglutide" className="hover:underline text-blue-600">GLP-1 Resources</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Microdosing Semaglutide</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Dosing Strategy Guide
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Microdosing Semaglutide: Sub-Standard Doses, STEP Evidence &amp; How to Start
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Semaglutide microdosing — using doses below the standard 0.25mg starting point, or
            intentionally staying at sub-therapeutic levels for maintenance — has grown into a
            widespread patient practice. Here&apos;s what the STEP clinical trials actually support,
            the dose math for compounded vials, and which providers offer flexible dosing protocols.
          </p>

          {/* Key evidence callout */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
            <p className="font-semibold text-blue-900 text-sm mb-2 uppercase tracking-wide">
              STEP Trial Dose-Response Data
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white rounded-lg p-3">
                <p className="text-2xl font-bold text-blue-700">~5.9%</p>
                <p className="text-xs text-gray-500 mt-1">Weight loss at 0.5mg/week (68 wks)</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-2xl font-bold text-blue-700">~9.3%</p>
                <p className="text-xs text-gray-500 mt-1">Weight loss at 1.0mg/week (68 wks)</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-2xl font-bold text-blue-700">~14.9%</p>
                <p className="text-xs text-gray-500 mt-1">Weight loss at 2.4mg/week (68 wks)</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Source: STEP 1–4 trials. No dedicated RCTs exist for sub-0.25mg &ldquo;true microdosing.&rdquo;
            </p>
          </div>

          {/* 3 key points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-xl p-4 bg-white">
              <p className="font-semibold text-gray-800 mb-1">Lower doses still work</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                0.5mg produces ~40% of the weight loss of the max dose. Meaningful results without maximum side effects.
              </p>
            </div>
            <div className="border rounded-xl p-4 bg-white">
              <p className="font-semibold text-gray-800 mb-1">Compounded vials required</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Ozempic and Wegovy pens have fixed doses. Only compounded semaglutide allows sub-0.25mg
                custom dosing via syringe.
              </p>
            </div>
            <div className="border rounded-xl p-4 bg-white">
              <p className="font-semibold text-gray-800 mb-1">Physician supervision essential</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Microdosing protocols are individualized. A prescribing physician should monitor
                weight, side effects, and dose progression.
              </p>
            </div>
          </div>
        </section>

        {/* ── What Microdosing Means ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What &ldquo;Microdosing Semaglutide&rdquo; Actually Means
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In the GLP-1 patient community, &ldquo;microdosing&rdquo; refers to one of two distinct practices:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Sub-threshold starting doses:</strong> Beginning below the FDA-standard 0.25mg/week
              starting dose — for example, 0.1mg or 0.125mg — to allow gut adaptation and minimize early
              nausea. The patient may then titrate up on the standard schedule from a lower baseline.
            </li>
            <li>
              <strong>Intentional maintenance at sub-therapeutic levels:</strong> Staying at 0.25–0.5mg/week
              indefinitely after reaching goal weight, rather than titrating to the maximum 2.4mg. The
              goal is the &ldquo;minimum effective dose&rdquo; for weight maintenance.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed">
            Unlike tirzepatide microdosing (where the FDA starting dose is 2.5mg and &ldquo;micro&rdquo; means
            going below that), semaglutide&apos;s standard STEP trial titration already starts at 0.25mg —
            so the concept of microdosing overlaps with the early titration steps. The key distinction
            is intentionality: microdosing means staying at lower doses purposefully, not just being
            in the early titration phase.
          </p>
        </section>

        {/* ── Who Uses It ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Four Reasons Patients Choose Semaglutide Microdosing
          </h2>
          <div className="space-y-4">
            {useCases.map((uc, i) => (
              <div key={i} className="flex items-start gap-4 border rounded-xl p-4 bg-white">
                <div className="mt-0.5 flex-shrink-0">{uc.icon}</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{uc.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Not recommended without physician guidance:</strong> Combining semaglutide with
                another GLP-1 simultaneously (stacking) is not an established protocol and carries risk.
                All microdosing approaches should be supervised by a licensed prescriber.
              </p>
            </div>
          </div>
        </section>

        {/* ── Evidence Base ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Evidence Base: What the STEP Trials Tell Us
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The STEP trial program studied once-weekly subcutaneous semaglutide at doses from 0.25mg
            (the starting dose) up to 2.4mg (the maximum approved weight-loss dose). The 4-week titration
            schedule was: <strong>0.25mg → 0.5mg → 1.0mg → 1.7mg → 2.4mg</strong>, with 4-week holds
            at each level.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Dose</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Approx. Weight Loss at 68 Weeks</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Sub-0.25mg</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-500">No clinical data</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-500">No dedicated RCTs; used empirically for side-effect management</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">0.5mg/week</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-blue-700">~5.9%</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Meaningful loss; ~40% of max-dose benefit</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1.0mg/week</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-blue-700">~9.3%</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">~62% of max-dose benefit; strong mid-range option</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">1.7mg/week</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-blue-700">~12.4%</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">~83% of max-dose benefit</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">2.4mg/week (max)</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-green-700">~14.9%</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">FDA-approved max dose for weight management</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed text-sm bg-gray-50 rounded-xl border p-4">
            <strong>Key takeaway:</strong> Moving from 0.5mg to 2.4mg adds roughly 9 percentage points of weight
            loss — meaningful, but not transformative. For patients who can&apos;t tolerate higher doses, the
            0.5–1.0mg range still produces clinically significant results. There is no published data on
            sub-0.25mg dosing; any patient-reported benefit at that level is empirical, not trial-validated.
          </p>
        </section>

        {/* ── Compounded Advantage ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Compounded Semaglutide Enables Microdosing (Branded Pens Don&apos;t)
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Branded Ozempic pens come in four fixed dose strengths: 0.25mg, 0.5mg, 1mg, and 2mg —
            administered via a dialed auto-injector. Wegovy pens are fixed at 0.25mg, 0.5mg, 1mg,
            1.7mg, and 2.4mg. You cannot draw a partial or custom dose from an auto-injector pen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Compounded semaglutide is dispensed in multi-dose vials at a specified concentration
            (typically 2.5mg/mL or 5mg/mL). You draw your dose using an insulin syringe, which
            allows precise measurement of any volume — enabling 0.1mg, 0.125mg, or any custom
            incremental dose.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This is the core reason microdosing protocols require compounded semaglutide. The{' '}
            <Link href="/how-to-microdose-semaglutide" className="text-blue-600 hover:underline">
              how-to guide for measuring and injecting a microdose
            </Link>{' '}
            covers the equipment and technique in detail.
          </p>
        </section>

        {/* ── Dose Math Table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Dose Math: How to Measure Any Semaglutide Dose from a Vial
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Always confirm concentration with your pharmacy — vials vary. These calculations assume
            standard 2.5mg/mL and 5mg/mL concentrations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Target Dose</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">2.5 mg/mL vial — draw volume</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">5 mg/mL vial — draw volume</th>
                </tr>
              </thead>
              <tbody>
                {doseMathRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-800">{row.dose}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">{row.vial2_5}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">{row.vial5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Note: Sub-0.25mg draw volumes (0.02–0.05 mL) require a 1mL insulin syringe with clear
            0.01mL markings. Confirm with your provider before attempting very small volumes.
          </p>
        </section>

        {/* ── Maintenance Protocol ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Maintenance Microdosing Protocol: Stepping Down After Goal Weight
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            After reaching goal weight on a therapeutic dose (1.0–2.4mg), some patients and physicians
            use a step-down protocol to find the minimum dose needed to maintain results:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Hold at current therapeutic dose for 4–8 weeks</strong> after reaching goal weight
              to confirm stability.
            </li>
            <li>
              <strong>Step down by one tier</strong> (e.g., 2.4mg → 1.7mg → 1.0mg → 0.5mg), holding
              8–12 weeks at each level — longer than the titration-up schedule to allow metabolic
              adaptation.
            </li>
            <li>
              <strong>Monitor weekly weight.</strong> If weight rebounds more than 3–5 lbs above goal,
              step back up to the previous dose.
            </li>
            <li>
              <strong>The floor is individual.</strong> Some patients maintain at 0.5mg indefinitely;
              others find they need 1.0mg or higher. There is no universal maintenance dose.
            </li>
          </ol>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            <p>
              <strong>Clinical note:</strong> The STEP extension data and real-world evidence consistently
              show that weight regain accelerates rapidly when semaglutide is discontinued entirely.
              A maintenance microdose — even 0.5mg — is meaningfully better than stopping.
            </p>
          </div>
        </section>

        {/* ── Ultra-Slow Titration ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ultra-Slow Titration: Reducing GI Side Effects at the Cost of Slower Onset
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The standard STEP titration schedule uses 4-week holds at each dose. Ultra-slow titration
            extends those holds to 8–12 weeks:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Dose</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Standard Hold (STEP)</th>
                  <th className="border border-gray-200 px-4 py-2 font-semibold text-gray-700">Ultra-Slow Hold</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0.25mg', '4 weeks', '8–12 weeks'],
                  ['0.5mg', '4 weeks', '8–12 weeks'],
                  ['1.0mg', '4 weeks', '8–12 weeks'],
                  ['1.7mg', '4 weeks', '8–12 weeks'],
                  ['2.4mg', 'Maintenance', 'Maintenance'],
                ].map(([dose, std, slow], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-800">{dose}</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-600">{std}</td>
                    <td className="border border-gray-200 px-4 py-2 text-blue-700 font-medium">{slow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            The tradeoff: ultra-slow titration dramatically reduces nausea and GI distress but delays
            reaching therapeutic doses by months. Total time to reach 2.4mg on ultra-slow protocol:
            approximately 40–48 weeks vs. the standard 16 weeks. Many patients find this acceptable
            trade-off if standard titration was intolerable.
          </p>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Providers That Support Semaglutide Microdosing
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            All require a valid prescription from a licensed prescriber. Pricing verified May 2026.
          </p>
          <div className="space-y-4">

            {/* Ivim Health */}
            <div className="rounded-xl border-2 border-blue-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                      Microdosing Specialist
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ivim Health</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    Explicitly offers customized titration and microdosing semaglutide protocols.
                    Known in the patient community for physician-supervised flexible dosing approaches
                    that aren&apos;t available through standard telehealth providers. Pricing: verify
                    current rates on their site.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Custom microdosing protocols available</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Physician-supervised titration adjustments</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Compounded injectable semaglutide</li>
                  </ul>
                </div>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                >
                  Check Ivim <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Strut Health */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Strut Health</h3>
                  <VerifiedPricingBadge price="$99/mo" verifiedDate="May 2026" />
                  <p className="text-sm text-gray-600 mb-3 mt-2 leading-relaxed">
                    Most affordable compounded injectable semaglutide option. Vial-based delivery
                    offers maximum dosing flexibility for patients who want to use precise sub-0.25mg
                    doses. Good choice for patients who already understand the microdosing protocol
                    and want the lowest cost access point.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Compounded injectable semaglutide from $99/mo</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Vial + syringe — custom dose measurement possible</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Physician review included</li>
                  </ul>
                </div>
                <a
                  href={strutUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                >
                  Visit Strut <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* TMates */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">TMates</h3>
                  <VerifiedPricingBadge price="$158/mo" verifiedDate="May 2026" />
                  <p className="text-sm text-gray-600 mb-3 mt-2 leading-relaxed">
                    Established compounded semaglutide provider with physician-supervised programs.
                    Physician-managed titration means microdosing requests can be accommodated during
                    the intake consultation. Monthly subscription model with ongoing provider access.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Compounded injectable semaglutide from $158/mo</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Ongoing provider access for dose adjustments</li>
                    <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-green-500" /> Physician-supervised titration</li>
                  </ul>
                </div>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                >
                  Visit TMates <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── Editorial Review Box ── */}
        <EditorialReviewBox
          reviewDate="May 6, 2026"
          reviewerName="GLP1CompareHub Editorial Team"
          summary="This page synthesizes dose-response data from the STEP clinical trial program. No clinical data exists for sub-0.25mg semaglutide doses specifically. All dosing decisions should be made with a licensed prescribing physician. Provider pricing verified May 2026."
        />

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="border rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Pages ── */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/microdosing-tirzepatide', label: 'Microdosing Tirzepatide: The Patient Guide' },
              { href: '/microdose-tirzepatide', label: 'Microdose Tirzepatide: Doses &amp; How-To' },
              { href: '/microdosing-glp-1-schedule', label: 'GLP-1 Microdosing Schedule Guide' },
              { href: '/how-to-microdose-semaglutide', label: 'How to Microdose Semaglutide (Step-by-Step Injection Guide)' },
              { href: '/compounded-semaglutide', label: 'Compounded Semaglutide: Complete Guide' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:underline"
                  dangerouslySetInnerHTML={{ __html: `${label} <span>→</span>` }}
                />
              </li>
            ))}
          </ul>
        </section>

      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
