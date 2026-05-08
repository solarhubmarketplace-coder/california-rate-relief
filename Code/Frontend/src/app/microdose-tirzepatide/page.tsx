import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import {
  ArrowRight,
  Check,
  AlertCircle,
  ExternalLink,
  Syringe,
  Activity,
  Calculator,
} from 'lucide-react';

// =============================================================================
// /microdose-tirzepatide  (3,400 vol, KD 14, Tier B)
// =============================================================================
// Companion to /microdosing-tirzepatide. Different query intent:
// "microdose tirzepatide" = noun/verb ("what is a microdose", "how to microdose")
// vs "microdosing tirzepatide" = gerund/strategy ("microdosing as a practice")
//
// Focuses on: what a single tirzepatide microdose looks like, how to measure it
// from a compounded vial, common dose tiers, and where to get it.
// =============================================================================

export const metadata: Metadata = {
  title: 'How to Microdose Tirzepatide: Doses, Measurement, and Providers | GLP1CompareHub',
  description:
    'What a tirzepatide microdose looks like in practice: common starting doses (1.25mg, 2.5mg), how to measure from a compounded vial, and which providers support flexible dosing.',
  alternates: { canonical: 'https://glp1comparehub.com/microdose-tirzepatide' },
  openGraph: {
    title: 'How to Microdose Tirzepatide: Practical Guide to Lower Doses',
    description:
      'Tirzepatide microdoses (1.25–2.5mg) require compounded vials and a syringe — auto-injector pens don\'t allow sub-2.5mg dosing. Here\'s how it works and where to start.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/microdose-tirzepatide',
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
      name: 'Microdosing Tirzepatide',
      item: 'https://glp1comparehub.com/microdosing-tirzepatide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Microdose Tirzepatide',
      item: 'https://glp1comparehub.com/microdose-tirzepatide',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Microdose Tirzepatide: Practical Guide to Lower Doses',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/microdose-tirzepatide' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a tirzepatide microdose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tirzepatide microdose typically refers to a dose below the standard 2.5mg FDA starting dose — usually 1.0–1.25mg per week. Some patients also use "microdose" to describe maintaining at 2.5mg long-term rather than escalating. The practice requires compounded tirzepatide in a multi-dose vial, which allows precise measurement with a small syringe.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure a tirzepatide microdose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded tirzepatide is dispensed in multi-dose vials with a known concentration (e.g., 5mg/mL or 10mg/mL). To draw a 1.25mg microdose from a 5mg/mL vial, you would draw 0.25mL using a small insulin syringe. Your compounding pharmacy will provide specific instructions based on your vial\'s concentration. Never attempt to split or partial-dose a branded auto-injector pen — this is not safe or reliable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you microdose Mounjaro or Zepbound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Mounjaro and Zepbound come as single-use auto-injector pens in fixed doses starting at 2.5mg. You cannot draw a partial dose from an auto-injector pen. Tirzepatide microdosing is only possible with compounded tirzepatide dispensed in a multi-dose vial, which allows any dose to be drawn with precision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a tirzepatide microdose still cause weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clinical data supports dose-dependent weight loss with tirzepatide. The lowest dose studied in SURMOUNT trials was 5mg (showing ~15% weight loss at 72 weeks). No randomized trial has studied sub-2.5mg doses for full-course treatment. For some patients, especially those using microdoses for maintenance after reaching goal weight, even very low doses can help prevent regain — supported indirectly by SURMOUNT-4 data showing that any continued tirzepatide beats stopping entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of a tirzepatide microdose vs standard dose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primary benefits: significantly fewer GI side effects (nausea, vomiting, diarrhea), which are dose-dependent with tirzepatide. For patients who couldn\'t tolerate the standard 2.5mg starting dose, 1.0–1.25mg may allow them to stay on therapy rather than discontinuing. For patients in maintenance, lower doses support weight maintenance with less side effect burden compared to continuing at the peak dose (10–15mg).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which providers offer compounded tirzepatide for microdosing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ivim Health specializes in customized tirzepatide dosing protocols including microdosing. TMates, Eden Health, and MEDVi also offer compounded tirzepatide in vials that enable flexible dosing — discuss your preferred starting dose with their intake physicians. All compounded tirzepatide comes from 503A pharmacies and requires a valid prescription.',
      },
    },
  ],
};

export default function MicrodoseTirzepatidePage() {
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'microdose-tirzepatide');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'microdose-tirzepatide');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'microdose-tirzepatide');

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
      <RelatedGuides currentPath="/microdose-tirzepatide" priorityCluster="microdosing" />
      <StickyMobileCTA
        href={ivimUrl}
        brandName="Ivim Health"
        pricePitch="Compounded tirzepatide — flexible microdosing protocols"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/microdosing-tirzepatide" className="hover:underline text-blue-600">Microdosing Tirzepatide</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">How to Microdose</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-violet-100 text-violet-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Practical Dosing Guide
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            How to Microdose Tirzepatide: Doses, Measurement, and Getting Started
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A tirzepatide microdose is any dose below the standard 2.5mg starting prescription —
            typically 1.0–1.25mg/week. It requires compounded tirzepatide (auto-injector pens
            don&apos;t allow sub-2.5mg dosing) and physician oversight. Here&apos;s how it works in practice.
          </p>

          {/* Quick-answer box */}
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <Calculator className="text-violet-600 mt-0.5 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-violet-900 text-base mb-2">The microdose math</p>
                <div className="overflow-x-auto">
                  <table className="text-sm text-violet-800 w-full">
                    <thead>
                      <tr className="border-b border-violet-200">
                        <th className="text-left py-1 font-semibold">Target dose</th>
                        <th className="text-left py-1 font-semibold">Vial: 5mg/mL</th>
                        <th className="text-left py-1 font-semibold">Vial: 10mg/mL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-violet-100">
                      <tr><td className="py-1">0.5 mg</td><td className="py-1">0.10 mL</td><td className="py-1">0.05 mL</td></tr>
                      <tr><td className="py-1">1.0 mg</td><td className="py-1">0.20 mL</td><td className="py-1">0.10 mL</td></tr>
                      <tr><td className="py-1 font-semibold">1.25 mg</td><td className="py-1 font-semibold">0.25 mL</td><td className="py-1 font-semibold">0.125 mL</td></tr>
                      <tr><td className="py-1">2.5 mg (standard start)</td><td className="py-1">0.50 mL</td><td className="py-1">0.25 mL</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-violet-600 mt-2 italic">
                  Your pharmacy sets vial concentration — always use the instructions that come with
                  your specific prescription. These numbers are illustrative.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-amber-800">
                <strong>For the full strategy guide</strong> — including SURMOUNT-1 dose-response data,
                maintenance protocols, and when microdosing makes clinical sense — see our{' '}
                <Link href="/microdosing-tirzepatide" className="underline font-semibold">
                  comprehensive microdosing tirzepatide guide →
                </Link>
                This page focuses on the practical mechanics of measuring and starting a microdose.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why Compounded Is Required ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Microdosing Requires Compounded Tirzepatide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="border border-red-200 rounded-xl p-4 bg-red-50">
              <div className="flex items-center gap-2 mb-2">
                <Syringe className="text-red-500" size={16} />
                <span className="font-semibold text-red-900 text-sm">Mounjaro / Zepbound auto-pen</span>
              </div>
              <ul className="text-xs text-red-800 space-y-1.5">
                <li className="flex items-start gap-1.5"><span className="mt-0.5">✗</span><span>Single-use auto-injector — fixed dose only</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">✗</span><span>Lowest dose pen: 2.5mg (cannot go lower)</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">✗</span><span>Cannot draw a partial dose — mechanism not designed for it</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">✗</span><span>Dose splitting is not accurate or safe</span></li>
              </ul>
            </div>
            <div className="border-2 border-violet-200 rounded-xl p-4 bg-violet-50">
              <div className="flex items-center gap-2 mb-2">
                <Syringe className="text-violet-500" size={16} />
                <span className="font-semibold text-violet-900 text-sm">Compounded tirzepatide vial</span>
              </div>
              <ul className="text-xs text-violet-800 space-y-1.5">
                <li className="flex items-start gap-1.5"><span className="mt-0.5">✓</span><span>Multi-dose vial — any dose measurable</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">✓</span><span>Known concentration (e.g., 5mg/mL or 10mg/mL)</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">✓</span><span>Draw exact volume with insulin syringe</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">✓</span><span>Starting doses of 1.0–1.25mg fully practical</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Common Microdose Tiers ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Tirzepatide Microdose Tiers</h2>
          <div className="space-y-3">
            {[
              {
                dose: '0.5–0.75 mg/week',
                label: 'Ultra-microdose',
                use: 'Extreme GI sensitivity; physician-directed only. Very limited data on efficacy.',
                color: 'gray',
              },
              {
                dose: '1.0–1.25 mg/week',
                label: 'Standard microdose',
                use: 'Most common "microdose" — typically for patients with prior GLP-1 intolerance who want to re-start very slowly, or those in long-term maintenance.',
                color: 'violet',
              },
              {
                dose: '2.5 mg/week',
                label: 'Low-dose (FDA starting dose)',
                use: 'Some patients stay at this level rather than titrating up. Still below the therapeutic doses studied in SURMOUNT, but within the FDA-approved titration range.',
                color: 'blue',
              },
              {
                dose: '5 mg/week',
                label: 'Low-therapeutic dose',
                use: 'Lowest dose with substantial SURMOUNT-1 data (~15% weight loss). Sometimes used as a maintenance target after reaching goal weight on higher doses.',
                color: 'green',
              },
            ].map(({ dose, label, use, color }) => (
              <div key={dose} className={`border border-${color}-200 rounded-xl p-4 bg-${color}-50`}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className={`font-semibold text-${color}-900 text-sm`}>{label}</span>
                  <span className={`text-xs font-mono bg-white text-${color}-800 px-2 py-0.5 rounded border border-${color}-200 whitespace-nowrap`}>
                    {dose}
                  </span>
                </div>
                <p className={`text-xs text-${color}-800 leading-relaxed`}>{use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How to Administer ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Administer a Tirzepatide Microdose</h2>
          <ol className="space-y-3 mb-5">
            {[
              { step: '1', text: 'Confirm your vial concentration with your pharmacy (e.g., 5mg/mL). This is printed on the vial label.' },
              { step: '2', text: 'Calculate the volume for your prescribed dose (dose ÷ concentration = volume in mL).' },
              { step: '3', text: 'Draw the calculated volume into a small insulin syringe (U-100, typically 1mL capacity).' },
              { step: '4', text: 'Inject subcutaneously — abdomen, thigh, or upper arm are common sites. Rotate sites weekly.' },
              { step: '5', text: 'Store the vial refrigerated between uses. Do not freeze. Follow your pharmacy\'s specific storage guidance.' },
              { step: '6', text: 'Keep a log of doses and injection sites. Report any new side effects to your physician.' },
            ].map(({ step, text }) => (
              <li key={step} className="flex items-start gap-3">
                <span className="bg-violet-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step}
                </span>
                <span className="text-sm text-gray-700">{text}</span>
              </li>
            ))}
          </ol>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-amber-800">
                These are general guidelines. Always follow your prescribing physician&apos;s specific
                instructions for your dose, injection technique, and storage requirements.
              </p>
            </div>
          </div>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Get Compounded Tirzepatide for Microdosing</h2>
          <div className="space-y-4">
            {/* Ivim */}
            <div className="border-2 border-violet-200 rounded-xl p-5 bg-violet-50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Ivim Health</span>
                    <span className="bg-violet-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Best for Microdosing
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Ivim Health explicitly offers customized tirzepatide protocols including 1.25mg
                    starting doses. If microdosing is your goal, Ivim is the most direct fit.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> 1.25mg and lower starting doses available</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Individualized titration schedule</li>
                  </ul>
                </div>
                <a href={ivimUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
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
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">Top-Rated</span>
                  </div>
                  <p className="text-blue-700 font-semibold text-sm mb-1">From $167/month (tirzepatide, 12-mo plan)</p>
                  <p className="text-xs text-gray-600">
                    Compounded tirzepatide vials. Discuss preferred starting dose at intake — physicians can accommodate lower starting doses for GI-sensitive patients.
                  </p>
                </div>
                <a href={tmatesUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
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
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">Editor&apos;s Pick</span>
                  </div>
                  <p className="text-green-700 font-semibold text-sm mb-1">$179–$299/month</p>
                  <p className="text-xs text-gray-600">
                    Compounded tirzepatide with verified pricing. Discuss your dosing needs with their physician team at intake.
                  </p>
                </div>
                <a href={medviUrl} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  See Pricing <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">
            Affiliate disclosure: GLP1CompareHub earns a commission if you enroll.{' '}
            <Link href="/affiliate-disclosure" className="underline">See disclosure</Link>.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
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
              { href: '/microdosing-tirzepatide', label: 'Microdosing Tirzepatide: Full Strategy Guide' },
              { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide 2026: What to Know' },
              { href: '/best-compounded-tirzepatide', label: 'Best Compounded Tirzepatide Providers' },
              { href: '/tirzepatide-vs-semaglutide', label: 'Tirzepatide vs Semaglutide Comparison' },
              { href: '/cheapest-tirzepatide-online', label: 'Cheapest Tirzepatide Online 2026' },
            ].map(({ href, label }) => (
              <Link key={href} href={href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-sm text-gray-700">
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
