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
  Syringe,
  Zap,
  Microscope,
  Clock,
  TrendingUp,
} from 'lucide-react';

// =============================================================================
// /nad-injection  (2,300 vol, KD 15, Tier B — peptide cluster)
// =============================================================================
// Targets patients researching NAD+ subcutaneous injections as an at-home
// alternative to IV therapy. Companion to /nad-iv-therapy and /nad-nasal-spray.
//
// Key facts:
// - NAD+ (nicotinamide adenine dinucleotide) = coenzyme in energy metabolism
// - At-home injectable NAD+ = subcutaneous injections from telehealth/compounders
// - Alternative to IV NAD+ (clinic-based, slow drip, $200-800/session)
// - IV bioavailability near-100% vs subQ ~50-70% (estimated; limited human PK data)
// - Used in longevity/wellness protocols, GLP-1 stacks for lean mass preservation
// - Eden Health offers at-home NAD+ injections as part of their wellness menu
// - No FDA-approved injectable NAD+ product; all compounded
// - Primary use cases: energy/fatigue, muscle recovery, cognitive function, GLP-1 stack
// =============================================================================

export const metadata: Metadata = {
  title: 'NAD+ Injections 2026: At-Home Subcutaneous vs IV Therapy | GLP1CompareHub',
  description:
    'NAD+ injections compared to IV therapy: bioavailability, cost, who offers at-home subQ NAD+, and how it fits into a GLP-1 weight loss protocol for lean mass preservation.',
  alternates: { canonical: 'https://glp1comparehub.com/nad-injection' },
  openGraph: {
    title: 'NAD+ Injection vs IV: Which Is Worth It in 2026?',
    description:
      'At-home NAD+ subcutaneous injections are 80-90% cheaper than IV therapy with reasonable bioavailability. Here\'s the breakdown for GLP-1 users and longevity stackers.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/nad-injection',
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
      name: 'Peptides & Stacks',
      item: 'https://glp1comparehub.com/nad-iv-therapy',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'NAD+ Injections',
      item: 'https://glp1comparehub.com/nad-injection',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NAD+ Injections 2026: At-Home SubQ vs IV Therapy for Longevity and GLP-1 Stacking',
  description:
    'Complete guide to NAD+ subcutaneous injections: bioavailability comparison vs IV, cost breakdown, GLP-1 stack protocols, and telehealth providers offering at-home NAD+.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/nad-injection' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a NAD+ injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A NAD+ injection is a subcutaneous (under the skin) or intramuscular injection of nicotinamide adenine dinucleotide (NAD+), a coenzyme involved in cellular energy production, DNA repair, and hundreds of metabolic processes. At-home NAD+ injections are compounded preparations (not FDA-approved) dispensed through telehealth providers. They are used as a more affordable, convenient alternative to IV NAD+ therapy for patients pursuing longevity, energy, or recovery protocols.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does NAD+ injection compare to IV NAD+ therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IV NAD+ delivers near-100% bioavailability directly into the bloodstream but requires a clinic visit, costs $200–$800/session, and infusions take 1–4 hours. Subcutaneous NAD+ injections are administered at home in minutes, cost $50–$150/month for a maintenance protocol, and offer estimated 50–70% bioavailability (though direct human pharmacokinetic comparisons are limited). For maintenance dosing and convenience, injectable NAD+ is generally preferred by patients using it long-term.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why combine NAD+ with a GLP-1 medication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GLP-1 medications like semaglutide and tirzepatide cause both fat loss and some muscle mass loss due to caloric restriction. NAD+ supports mitochondrial function and cellular energy production — a concern during rapid weight loss when cellular energy demands change. Some longevity-focused protocols pair NAD+ with GLP-1 therapy to support energy levels, lean mass preservation, and overall cellular health during weight loss. There are no published RCTs studying this specific combination.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do you take NAD+ injections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At-home NAD+ injection protocols typically involve daily or several-times-weekly subcutaneous injections, especially during an initial loading phase. Maintenance protocols may taper to 2–3 times per week. Specific protocols vary by provider and individual response. Your prescribing physician will set the appropriate schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are NAD+ injections FDA approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. There is no FDA-approved NAD+ injection product. At-home NAD+ injections are compounded preparations made by 503A pharmacies under a physician prescription. IV NAD+ infusions administered in clinics are also compounded preparations, not FDA-approved drugs. The safety and efficacy data for NAD+ supplementation (in any form) is based primarily on preclinical studies and small human trials; large-scale randomized controlled trials are limited.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which telehealth providers offer at-home NAD+ injections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health is among the telehealth providers offering at-home NAD+ injections as part of their comprehensive wellness menu. System Labs (a compounding-focused provider) also offers NAD+ injectable protocols. Availability varies by state — check with your provider to confirm they can prescribe in your location.',
      },
    },
  ],
};

export default function NadInjectionPage() {
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'nad-injection');
  const systemLabsUrl = buildGlp1AffiliateUrl('system-labs', 'nad-injection');
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'nad-injection');

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
        href={edenUrl}
        brandName="Eden Health"
        pricePitch="At-home NAD+ injections — comprehensive wellness menu"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/nad-iv-therapy" className="hover:underline text-blue-600">NAD+ IV Therapy</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">NAD+ Injections</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Peptide & Longevity Guide
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            NAD+ Injections: At-Home SubQ vs IV Therapy in 2026
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            At-home NAD+ subcutaneous injections have become the practical alternative to expensive
            clinic IV drips. Lower cost, no clinic appointment, and reasonable bioavailability —
            especially for patients maintaining a GLP-1 protocol who want cellular energy support
            during rapid weight loss.
          </p>

          {/* Three-way comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <div className="flex items-center gap-2 mb-2">
                <Syringe className="text-gray-500" size={16} />
                <span className="font-semibold text-gray-700 text-sm">SubQ Injection</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5">
                <li className="flex items-start gap-1"><span className="text-green-500 mt-0.5">✓</span><span>At home in minutes</span></li>
                <li className="flex items-start gap-1"><span className="text-green-500 mt-0.5">✓</span><span>~$50–150/month</span></li>
                <li className="flex items-start gap-1"><span className="text-green-500 mt-0.5">✓</span><span>~50–70% bioavailability</span></li>
                <li className="flex items-start gap-1"><span className="text-yellow-500 mt-0.5">!</span><span>Daily/frequent dosing</span></li>
              </ul>
            </div>
            <div className="border-2 border-yellow-200 rounded-xl p-4 bg-yellow-50">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="text-yellow-600" size={16} />
                <span className="font-semibold text-yellow-900 text-sm">IV Therapy (Clinic)</span>
              </div>
              <ul className="text-xs text-yellow-800 space-y-1.5">
                <li className="flex items-start gap-1"><span className="text-green-500 mt-0.5">✓</span><span>~100% bioavailability</span></li>
                <li className="flex items-start gap-1"><span className="text-green-500 mt-0.5">✓</span><span>High dose in one session</span></li>
                <li className="flex items-start gap-1"><span className="text-red-500 mt-0.5">✗</span><span>$200–800/session</span></li>
                <li className="flex items-start gap-1"><span className="text-red-500 mt-0.5">✗</span><span>Clinic visit required, 1–4 hrs</span></li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <div className="flex items-center gap-2 mb-2">
                <Microscope className="text-purple-500" size={16} />
                <span className="font-semibold text-gray-700 text-sm">Nasal Spray</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5">
                <li className="flex items-start gap-1"><span className="text-green-500 mt-0.5">✓</span><span>No needles</span></li>
                <li className="flex items-start gap-1"><span className="text-green-500 mt-0.5">✓</span><span>Quick, convenient</span></li>
                <li className="flex items-start gap-1"><span className="text-yellow-500 mt-0.5">!</span><span>Lower/variable absorption</span></li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-500 mt-0.5">→</span>
                  <Link href="/nad-nasal-spray" className="underline hover:text-blue-700">See nasal spray guide</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── What Is NAD+ ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is NAD+ and Why Inject It?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every cell in the human
            body. It plays a central role in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              { icon: '⚡', label: 'Energy metabolism', desc: 'Required for cellular ATP production in the mitochondria via the electron transport chain' },
              { icon: '🔧', label: 'DNA repair', desc: 'Activates PARP enzymes involved in repairing DNA strand breaks — relevant to aging and cellular health' },
              { icon: '🧬', label: 'Sirtuin activation', desc: 'Sirtuins (SIRT1-7) are NAD+-dependent enzymes linked to longevity, inflammation regulation, and metabolism' },
              { icon: '🧠', label: 'Neurological function', desc: 'High concentration in brain tissue; NAD+ depletion linked to cognitive decline and neurodegeneration in animal models' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{icon}</span>
                  <span className="font-semibold text-gray-800 text-sm">{label}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-3 leading-relaxed">
            NAD+ levels decline with age — by approximately 50% between ages 40 and 60 in animal
            models. The premise behind NAD+ supplementation is that restoring younger-level NAD+
            concentrations may support cellular function, energy, and potentially aging biomarkers.
            The clinical evidence in humans is promising but preliminary.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-sm text-amber-800">
                <strong>Evidence status:</strong> Robust animal model data supports NAD+ interventions.
                Human clinical trials are small and largely focused on safety and pharmacokinetics.
                Large randomized controlled trials for specific clinical outcomes are limited.
                NAD+ supplementation is a longevity-focused intervention with a plausible biological
                basis — not a proven treatment for any specific disease.
              </p>
            </div>
          </div>
        </section>

        {/* ── Delivery Comparison Table ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">SubQ vs IV: Full Comparison</h2>
            <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-3 py-3 font-semibold">Feature</th>
                  <th className="text-center px-3 py-3 font-semibold bg-yellow-700">SubQ Injection</th>
                  <th className="text-center px-3 py-3 font-semibold">IV Therapy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Administration', 'Self-inject at home', 'Clinic or med spa (professional)'],
                  ['Session time', '2–5 minutes', '1–4 hours (slow drip required)'],
                  ['Bioavailability', '~50–70% (estimated)', '~100% (direct bloodstream)'],
                  ['Dosing flexibility', 'Daily or as directed', 'Periodic sessions (weekly–monthly)'],
                  ['Cost per month', '~$50–150', '~$800–3,200 (4× $200–$800/session)'],
                  ['Needle required', 'Yes (small subQ needle)', 'Yes (IV catheter)'],
                  ['Prescription required', 'Yes (telehealth or clinic)', 'Yes (or wellness clinic on-demand)'],
                  ['Best for', 'Long-term maintenance, cost-conscious', 'Loading phase, maximum dose, convenience of delegation'],
                ].map(([feature, subq, iv], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-yellow-50' : 'bg-white'}>
                    <td className="px-3 py-2.5 font-medium text-gray-700">{feature}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700 font-medium">{subq}</td>
                    <td className="px-3 py-2.5 text-center text-gray-600">{iv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── GLP-1 Stack Rationale ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NAD+ + GLP-1: The Stack Rationale</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A growing number of longevity-focused patients combine NAD+ injections with GLP-1
            therapy (semaglutide or tirzepatide). The clinical rationale:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                title: 'GLP-1 causes caloric restriction',
                text: 'Reduced appetite and caloric intake create cellular energy demand changes — the body must optimize mitochondrial efficiency during caloric deficit.',
              },
              {
                title: 'Lean mass risk during weight loss',
                text: 'Rapid weight loss can include lean muscle mass. NAD+ supports mitochondrial function in muscle cells, potentially reducing muscle energy deficits during the weight loss phase.',
              },
              {
                title: 'Sirtuin activation during caloric restriction',
                text: 'Caloric restriction and NAD+ supplementation both activate sirtuins — enzymes associated with longevity. The combination is theoretically synergistic for metabolic health.',
              },
              {
                title: 'Fatigue management',
                text: 'Some patients on GLP-1 therapy report fatigue, particularly early in treatment. NAD+ is frequently used to address perceived energy deficits during rapid weight loss.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <TrendingUp className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 italic">
            No published randomized controlled trials exist for the GLP-1 + NAD+ combination specifically.
            The stack is based on the complementary mechanisms of each intervention. Discuss with
            your physician before combining.
          </p>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Get At-Home NAD+ Injections</h2>
          <div className="space-y-4">
            {/* Eden Health */}
            <div className="border-2 border-yellow-200 rounded-xl p-5 bg-yellow-50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Eden Health</span>
                    <span className="bg-yellow-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Editor&apos;s Pick (NAD+)
                    </span>
                  </div>
                  <p className="text-yellow-700 font-semibold text-sm mb-1">Pricing: verify directly</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Eden Health offers one of the most comprehensive NAD+ menus among telehealth providers —
                    IV, injectable, nasal spray, and oral NMN/NR. Ideal for patients who want to choose
                    or combine delivery formats, or who want NAD+ alongside their GLP-1 protocol.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Multiple NAD+ delivery formats</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> GLP-1 + NAD+ stacking available</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Metabolic bloodwork included at intake</li>
                  </ul>
                </div>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Eden Health <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* System Labs */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">System Labs</span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">Peptide-focused protocols</p>
                  <p className="text-xs text-gray-600 mb-2">
                    System Labs specializes in peptide and longevity protocols including NAD+.
                    Compounding-focused approach with injectable formats available.
                    Verify current NAD+ injection availability at intake.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> Peptide and longevity focus</li>
                    <li className="flex items-center gap-1"><Check size={10} className="text-green-500" /> GLP-1 + peptide stacking</li>
                  </ul>
                </div>
                <a
                  href={systemLabsUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See System Labs <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Ivim Health */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">Ivim Health</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Verify Availability
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-sm mb-1">GLP-1 + peptide specialist</p>
                  <p className="text-xs text-gray-600 mb-2">
                    Ivim Health offers customized GLP-1 protocols and a range of adjunct peptides.
                    Verify current NAD+ injectable availability — their formulary includes multiple
                    longevity-adjacent compounds.
                  </p>
                </div>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  See Ivim Health <ExternalLink size={13} />
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
          <div className="space-y-5">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related ── */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Related NAD+ and Peptide Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/nad-iv-therapy', label: 'NAD+ IV Therapy: Clinic vs At-Home Comparison' },
              { href: '/nad-nasal-spray', label: 'NAD+ Nasal Spray: Needle-Free Option' },
              { href: '/lipotropic-injections', label: 'Lipotropic Injections: MIC+B12 for Weight Loss' },
              { href: '/glutathione-injection', label: 'Glutathione Injections: Evidence and Providers' },
              { href: '/sermorelin-for-weight-loss', label: 'Sermorelin: Growth Hormone Stack Guide' },
              { href: '/tirzepatide-with-b12', label: 'Tirzepatide with B12: Stack Guide' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-yellow-300 hover:bg-yellow-50 transition-colors text-sm text-gray-700"
              >
                <ArrowRight size={14} className="text-yellow-500 flex-shrink-0" />
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
