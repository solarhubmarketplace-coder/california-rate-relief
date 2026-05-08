import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { VerifiedPricingBadge } from '@/components/glp1/VerifiedPricingBadge';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, Check, X, Minus, ExternalLink, Award, AlertCircle } from 'lucide-react';

// =============================================================================
// /sublingual-tirzepatide  (900 vol, KD 3)
// =============================================================================
// Compounded tirzepatide formulated as sublingual drops (under-the-tongue).
// Injectable tirzepatide bioavailability ~94% (gold standard).
// Sublingual tirzepatide claimed ~10-30% — limited data, no peer-reviewed RCTs.
// Tirzepatide peptide is larger than semaglutide; SNAC enhancer used in Rybelsus
// has no equivalent in compounded sublingual.
// Dose math: may need 2-5x more API than injectable equivalent (theoretical).
// No FDA-approved sublingual tirzepatide exists — 503A compounded only.
// StickyMobileCTA → TMates (confirmed sublingual-friendly provider)
// =============================================================================

export const metadata: Metadata = {
  title: 'Sublingual Tirzepatide 2026: Bioavailability, Dosing, and Where to Get It | GLP1CompareHub',
  description:
    'Sublingual tirzepatide is compounded tirzepatide taken under the tongue. Bioavailability is estimated at 10–30% vs injectable\'s ~94% — limited clinical data exists. No FDA-approved version exists. Full guide + provider options.',
  alternates: { canonical: 'https://glp1comparehub.com/sublingual-tirzepatide' },
  openGraph: {
    title: 'Sublingual Tirzepatide: What the Evidence Actually Shows',
    description:
      'Sublingual tirzepatide drops are compounded, not FDA-approved, and have very limited bioavailability data compared to injectable. Here\'s what you need to know before choosing this format.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/sublingual-tirzepatide',
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
      name: 'Compounded Tirzepatide',
      item: 'https://glp1comparehub.com/compounded-tirzepatide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Sublingual Tirzepatide',
      item: 'https://glp1comparehub.com/sublingual-tirzepatide',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sublingual Tirzepatide 2026: Bioavailability, Dosing, and Provider Options',
  description:
    'A clinically grounded guide to compounded sublingual tirzepatide — how it differs from injectable, what the limited bioavailability data shows, dose adjustment math, and which telehealth providers offer this format.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: {
    '@type': 'Person',
    name: 'Chad Simpson',
    url: 'https://glp1comparehub.com/author/chad-simpson',
  },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/sublingual-tirzepatide',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does sublingual tirzepatide mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sublingual tirzepatide is compounded tirzepatide API (active pharmaceutical ingredient) formulated as liquid drops intended to be held under the tongue (sublingually) and absorbed through the oral mucosa rather than injected subcutaneously. The sublingual route bypasses the digestive tract, unlike an oral capsule, but still delivers far less active compound into systemic circulation than a subcutaneous injection. No FDA-approved sublingual tirzepatide product exists — any sublingual tirzepatide available in 2026 is a 503A compounded preparation requiring a physician prescription.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the bioavailability of sublingual tirzepatide vs injectable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Injectable tirzepatide (Mounjaro/Zepbound) achieves approximately 94% bioavailability — essentially the full dose reaches systemic circulation. Sublingual tirzepatide bioavailability is estimated at roughly 10–30%, but this estimate comes from extrapolation and limited pharmacy-level data, not peer-reviewed randomized controlled trials. As of 2026, no published RCTs exist specifically for sublingual tirzepatide bioavailability in humans. The tirzepatide peptide is also a larger molecule than semaglutide, and the SNAC absorption enhancer used in Rybelsus (oral semaglutide) has no equivalent in compounded sublingual preparations — making direct analogy to oral semaglutide data unreliable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sublingual tirzepatide as effective as injectable tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no direct clinical comparison between sublingual and injectable compounded tirzepatide as of 2026. Based on the significant bioavailability gap (estimated ~10–30% sublingual vs ~94% injectable), a patient would theoretically need 2–5x more API in a sublingual dose to achieve equivalent systemic exposure. Whether this translates to equivalent clinical outcomes — in terms of GLP-1 receptor activation, weight loss, and glycemic benefit — has not been confirmed in peer-reviewed trials. Patients choosing sublingual should do so with full awareness that the evidence base is significantly thinner than for injectable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does sublingual tirzepatide compare to sublingual semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sublingual semaglutide and sublingual tirzepatide share the same delivery mechanism (under-tongue drops) and similar evidence limitations, but the molecules behave differently. Rybelsus — the only FDA-approved oral GLP-1 — uses SNAC (sodium N-[8-(2-hydroxybenzoyl)amino]caprylate) as an absorption enhancer to achieve roughly 1% oral bioavailability for semaglutide. Compounded sublingual semaglutide improves on that by bypassing stomach acid, but still lacks the SNAC system. Tirzepatide is a larger and more complex molecule than semaglutide (dual GIP/GLP-1 agonist), which may make sublingual absorption even more challenging. Neither has peer-reviewed sublingual-specific bioavailability data from RCTs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should consider sublingual tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sublingual tirzepatide may be worth considering for patients with significant needle aversion who are fully informed about the lower evidence base and potentially higher cost-per-effective-dose compared to injectable. It is not appropriate for patients who need verified efficacy comparable to Mounjaro/Zepbound, those who are insurance-dependent (sublingual compounded tirzepatide is not covered), or those making a primary clinical decision — that should be made with an injectable-first approach given the substantially stronger evidence base. Consult a physician who can explain the bioavailability trade-offs specific to your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sublingual compounded tirzepatide legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with appropriate caveats. Compounded sublingual tirzepatide prepared by a 503A compounding pharmacy under a valid physician prescription is legal under U.S. federal law, the same framework that governs compounded injectable tirzepatide. The 503A framework allows licensed compounding pharmacies to prepare non-commercially-available formulations for individual patients with a prescription. What it is not: FDA-approved, bioequivalence-tested against Mounjaro/Zepbound, or covered under standard insurance. The legality depends on a valid prescription from a licensed physician — not sourced from a gray-market provider.',
      },
    },
  ],
};

export default function SublingualTirzepatidePage() {
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'sublingual-tirzepatide');
  const ivimUrl = buildGlp1AffiliateUrl('ivim-health', 'sublingual-tirzepatide');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'sublingual-tirzepatide');

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

      {/* Sticky mobile CTA — TMates (confirmed sublingual-friendly) */}
      <RelatedGuides currentPath="/sublingual-tirzepatide" priorityCluster="format" />
      <StickyMobileCTA
        href={tmatesUrl}
        brandName="TMates"
        pricePitch="Sublingual-friendly provider — from $158/mo"
      />

      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-glp1-charcoal/60">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="hover:text-glp1-charcoal">Home</Link></li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/compounded-tirzepatide" className="hover:text-glp1-charcoal">
                    Compounded Tirzepatide
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-glp1-charcoal/90">Sublingual Tirzepatide</li>
              </ol>
            </nav>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Sublingual Tirzepatide
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Compounded tirzepatide in sublingual (under-the-tongue) drop form. The injectable
              version achieves ~94% bioavailability. Sublingual is estimated at 10–30% — but no
              peer-reviewed RCTs exist for this specific formulation as of 2026. Here&rsquo;s what
              you need to know before choosing this route.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-800">
                <AlertCircle className="h-3.5 w-3.5" /> No FDA-approved sublingual form exists
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-800">
                <AlertCircle className="h-3.5 w-3.5" /> Limited bioavailability data
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-300 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                <Check className="h-3.5 w-3.5" /> Legal under 503A with Rx
              </span>
            </div>

            <div className="mt-5 text-xs text-glp1-charcoal/50">
              Updated May 6, 2026 &bull;{' '}
              <Link href="/affiliate-disclosure" className="underline hover:text-glp1-charcoal">Affiliate Disclosure</Link>
            </div>
          </div>
        </section>

        {/* ============ WHAT IS SUBLINGUAL TIRZEPATIDE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              What Is Sublingual Tirzepatide?
            </h2>
            <div className="prose prose-sm max-w-3xl text-glp1-charcoal/85 space-y-4">
              <p>
                Sublingual tirzepatide is compounded tirzepatide API (active pharmaceutical
                ingredient) prepared as a liquid drop solution intended to be held under the tongue
                for 60–90 seconds and absorbed through the sublingual mucosa — the tissue on the
                underside of the tongue and floor of the mouth.
              </p>
              <p>
                The sublingual route exists as an alternative to subcutaneous injection for patients
                with significant needle aversion. Unlike oral capsules (which pass through the
                stomach and are largely broken down before absorption), sublingual preparations enter
                the bloodstream more directly through blood vessels under the tongue, partially
                bypassing first-pass hepatic metabolism.
              </p>
              <p>
                No FDA-approved sublingual tirzepatide product exists. Any sublingual tirzepatide
                available in 2026 is a <strong>503A compounded preparation</strong> — legal with a
                physician prescription from a licensed compounding pharmacy, but not bioequivalence-
                tested against Mounjaro or Zepbound.
              </p>
            </div>
          </div>
        </section>

        {/* ============ BIOAVAILABILITY COMPARISON ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Bioavailability: Sublingual vs Injectable vs Oral
            </h2>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Format</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Bioavailability</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Evidence Quality</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">FDA-Approved?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium text-glp1-charcoal">Injectable (subcutaneous)</td>
                    <td className="px-4 py-3 font-semibold text-green-700">~94%</td>
                    <td className="px-4 py-3 text-glp1-charcoal/80">Phase III RCTs (SURMOUNT series)</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">Yes (Mounjaro, Zepbound)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-glp1-charcoal">Sublingual drops</td>
                    <td className="px-4 py-3 font-semibold text-yellow-700">~10–30% (estimated)</td>
                    <td className="px-4 py-3 text-yellow-700 italic">Limited — no published RCTs as of 2026</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">No — 503A compounded only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-glp1-charcoal">Oral capsule (unenhanced)</td>
                    <td className="px-4 py-3 font-semibold text-red-600">~1%</td>
                    <td className="px-4 py-3 text-glp1-charcoal/80">Consistent with peptide oral absorption data</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-yellow-700" />
                <div>
                  <strong>Key limitation:</strong> The 10–30% sublingual bioavailability estimate
                  comes from pharmacy compounding literature and extrapolation, not from published
                  randomized controlled trials specifically evaluating sublingual tirzepatide in
                  humans. Treat this as a rough working estimate, not a clinical standard.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ HOW IT DIFFERS FROM SUBLINGUAL SEMAGLUTIDE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Key Distinction: Why Sublingual Tirzepatide Is Not Like Sublingual Semaglutide
            </h2>
            <div className="prose prose-sm max-w-3xl text-glp1-charcoal/85 space-y-4">
              <p>
                Rybelsus (oral semaglutide from Novo Nordisk) achieves approximately 1% oral
                bioavailability using <strong>SNAC</strong> — sodium N-[8-(2-hydroxybenzoyl)amino]
                caprylate, a proprietary absorption enhancer that protects the peptide from stomach
                acid and facilitates transcellular absorption in the stomach wall. This technology
                is patented and not present in any compounded sublingual formulation.
              </p>
              <p>
                Tirzepatide is a <strong>dual GIP/GLP-1 receptor agonist</strong> and is a larger
                and more structurally complex molecule than semaglutide. Its molecular weight and
                three-dimensional structure may make sublingual absorption even more challenging than
                it is for semaglutide, though this has not been directly compared in published studies.
              </p>
              <p>
                Bottom line: compounded sublingual tirzepatide has no equivalent to the SNAC
                absorption technology in Rybelsus, and the molecule itself is harder to absorb
                across mucosal membranes than semaglutide. The sublingual route likely improves over
                oral capsule absorption, but the gap between sublingual and injectable remains
                substantial.
              </p>
            </div>
          </div>
        </section>

        {/* ============ DOSE MATH ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Dose Adjustment Math (Theoretical)
            </h2>
            <p className="mb-5 text-sm text-glp1-charcoal/80 max-w-3xl">
              If injectable 5mg tirzepatide achieves ~94% bioavailability and sublingual achieves
              approximately 10–30%, here is the theoretical dose-equivalence range. These are{' '}
              <em>theoretical estimates only</em> — not clinical dosing guidelines. Your prescriber
              determines actual sublingual doses based on their clinical judgment and your response.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Injectable Dose</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Theoretical Sublingual Equivalent</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Cost Implication</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5 bg-white">
                  {[
                    { inj: '2.5mg', sub: '~8–25mg range', cost: 'Higher API per month vs injectable' },
                    { inj: '5mg', sub: '~16–50mg range', cost: 'Significantly higher API cost' },
                    { inj: '7.5mg', sub: '~25–75mg range', cost: 'Premium per effective mg' },
                    { inj: '10mg', sub: '~33–100mg range', cost: 'May offset convenience benefit' },
                  ].map((row) => (
                    <tr key={row.inj}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal">{row.inj}</td>
                      <td className="px-4 py-3 text-yellow-700 italic">{row.sub}</td>
                      <td className="px-4 py-3 text-glp1-charcoal/80">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-glp1-charcoal/60 italic">
              Calculations assume 10–30% sublingual bioavailability. Actual clinical effective dose
              varies by individual. No published clinical confirmation of these equivalences.
              Consult your prescriber before adjusting any GLP-1 dose.
            </p>
          </div>
        </section>

        {/* ============ WHO SHOULD CONSIDER IT ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Who Should (and Should Not) Consider Sublingual Tirzepatide
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-green-800">
                  <Check className="h-5 w-5 text-green-600" /> May be appropriate for
                </h3>
                <ul className="space-y-2 text-sm text-glp1-charcoal/85">
                  {[
                    'Patients with significant needle phobia who have tried and cannot tolerate self-injection',
                    'Those who understand and accept the lower evidence base and potentially higher cost per effective dose',
                    'Patients working with a provider who specifically supports and monitors alternative formulations',
                    'People exploring GLP-1 options who want to avoid injection before committing to it',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-red-800">
                  <X className="h-5 w-5 text-red-600" /> Not appropriate for
                </h3>
                <ul className="space-y-2 text-sm text-glp1-charcoal/85">
                  {[
                    'Patients who need verified efficacy equivalent to Mounjaro or Zepbound clinical trial results',
                    'Those using insurance coverage (sublingual compounded tirzepatide is not covered)',
                    'People making a first-line clinical weight-loss decision — injectable has a significantly stronger evidence base',
                    'Patients told by their physician that injectable tirzepatide is the appropriate treatment',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <X className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROVIDERS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Providers to Ask About Sublingual Tirzepatide
            </h2>
            <p className="mb-6 text-sm text-glp1-charcoal/80 max-w-3xl">
              Sublingual tirzepatide is not widely advertised by telehealth providers — ask directly
              during intake. The providers below are the most likely to offer this format based on
              their positioning or confirmed alternative formulation offerings.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              {/* TMates */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-glp1-cream/30 p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">TMates</h3>
                  <span className="rounded-full bg-glp1-orange/10 px-2 py-0.5 text-xs font-semibold text-glp1-orange">
                    Best Starting Point
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Sublingual semaglutide confirmed — ask about tirzepatide
                </p>
                <p className="mb-3 text-sm text-glp1-charcoal/75">
                  TMates has confirmed sublingual semaglutide for $158/mo — one of the few providers
                  where sublingual GLP-1 format is established. Ask specifically about sublingual
                  tirzepatide availability during intake.
                </p>
                <ul className="mb-4 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Sublingual semaglutide <strong>$158/mo confirmed</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Sublingual tirzepatide — VERIFY directly</span>
                  </li>
                </ul>
                <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk (sema only)" variant="compact" />
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-4 py-2.5 text-sm font-semibold text-white hover:bg-glp1-orange-dark"
                >
                  Ask TMates about sublingual tirz <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Ivim Health */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Ivim Health</h3>
                  <span className="rounded-full bg-glp1-charcoal/10 px-2 py-0.5 text-xs font-semibold text-glp1-charcoal/60">
                    Verify
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Alternative formulation specialist</p>
                <p className="mb-3 text-sm text-glp1-charcoal/75">
                  Ivim Health specializes in individualized and alternative GLP-1 formulations
                  including microdosing protocols. Their positioning suggests they may support
                  sublingual tirzepatide — verify directly during intake.
                </p>
                <ul className="mb-4 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Specializes in alternative GLP-1 formulations</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Sublingual tirzepatide availability — VERIFY</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Pricing — VERIFY directly</span>
                  </li>
                </ul>
                <a
                  href={ivimUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2.5 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Ask Ivim about sublingual tirz <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* MEDVi */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-glp1-cream/30 p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">MEDVi</h3>
                  <span className="rounded-full bg-glp1-charcoal/10 px-2 py-0.5 text-xs font-semibold text-glp1-charcoal/60">
                    Verify
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Verified pricing for injectable — ask about sublingual</p>
                <p className="mb-3 text-sm text-glp1-charcoal/75">
                  MEDVi offers Gronk-verified injectable compounded tirzepatide at $229–$299/mo. Ask
                  directly whether sublingual tirzepatide preparation is available through their
                  pharmacy network.
                </p>
                <ul className="mb-4 space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Injectable tirzepatide <strong>$229–$299/mo</strong> (verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Sublingual availability — VERIFY</span>
                  </li>
                </ul>
                <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk (injectable)" variant="compact" />
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2.5 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Ask MEDVi about sublingual tirz <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-8 font-serif text-3xl text-glp1-charcoal">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  className="rounded-lg border border-glp1-charcoal/10 bg-white p-5"
                >
                  <h3 className="mb-2 font-semibold text-glp1-charcoal">{faq.name}</h3>
                  <p className="text-sm text-glp1-charcoal/80">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RELATED LINKS ============ */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Related Pages</h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                { href: '/compounded-tirzepatide', label: 'Compounded Tirzepatide Guide' },
                { href: '/microdosing-tirzepatide', label: 'Microdosing Tirzepatide' },
                { href: '/sublingual-semaglutide', label: 'Sublingual Semaglutide' },
                { href: '/cheapest-compounded-tirzepatide', label: 'Cheapest Compounded Tirzepatide' },
                { href: '/oral-semaglutide-vs-injection', label: 'Oral Semaglutide vs Injection' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/40 px-4 py-3 text-sm font-medium text-glp1-charcoal hover:border-glp1-orange/30 hover:bg-glp1-orange/5"
                >
                  <ArrowRight className="h-4 w-4 shrink-0 text-glp1-orange" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
