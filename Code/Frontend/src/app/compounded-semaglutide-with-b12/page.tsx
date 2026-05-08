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
  Calendar,
  Info,
  Beaker,
  DollarSign,
} from 'lucide-react';

// =============================================================================
// /compounded-semaglutide-with-b12  (1,600 vol, KD 23 — Tier B peptide stack)
// =============================================================================
// Distinct from /semaglutide-with-b12 — the "compounded" modifier signals
// stronger commercial intent: this searcher already knows they want compounded
// sema (not Wegovy/Ozempic), and specifically wants to understand the B12
// formulation. Higher purchase probability than the generic query.
//
// Key differentiator from /semaglutide-with-b12: this page adds compounded-
// specific context — 503A regulatory status, why compounders specifically
// add B12 (vs why you would add it if you were on branded), and a
// compounded-tier pricing table that links into the provider grid.
// =============================================================================

export const metadata: Metadata = {
  title: 'Compounded Semaglutide with B12 2026: Pricing, Providers, What B12 Does | GLP1CompareHub',
  description:
    'Compounded semaglutide with B12 costs $99–$249/mo from verified telehealth providers. Here\'s what B12 adds to compounded sema, who offers it, and whether it\'s worth looking for specifically.',
  alternates: { canonical: 'https://glp1comparehub.com/compounded-semaglutide-with-b12' },
  openGraph: {
    title: 'Compounded Semaglutide with B12 2026: What It Is, Who Offers It',
    description:
      'Compounded sema + B12 pricing from $99/mo. We explain what B12 does in the formulation and which providers include it — verified May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compounded-semaglutide-with-b12',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compounded Semaglutide', item: 'https://glp1comparehub.com/compounded-semaglutide' },
    { '@type': 'ListItem', position: 3, name: 'Compounded Semaglutide with B12', item: 'https://glp1comparehub.com/compounded-semaglutide-with-b12' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Compounded Semaglutide with B12 2026: What B12 Adds, Who Offers It, and Verified Pricing',
  description:
    'Complete guide to compounded semaglutide with B12 — what the B12 component does, why telehealth compounders include it, pricing from $99/mo, and which providers to consider.',
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
    '@id': 'https://glp1comparehub.com/compounded-semaglutide-with-b12',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is compounded semaglutide with B12?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide with B12 is a formulation produced by 503A or 503B compounding pharmacies that combines semaglutide (a GLP-1 receptor agonist) with vitamin B12 (cyanocobalamin or methylcobalamin) in the same vial. It is available exclusively through telehealth providers and compounding pharmacies — branded Wegovy and Ozempic by Novo Nordisk do not contain B12.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does compounded semaglutide with B12 cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide pricing ranges from $99/mo (Strut Health, GobyMeds) at the entry tier to $158–$249/mo (TMates) to $229–$249/mo (Eden Health) as of May 2026. In most cases, B12 is included in the standard compounded formulation at no additional cost — the material cost of adding B12 to a compound is minimal. Providers that charge a meaningful premium specifically for B12 should be questioned about the price justification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does compounded semaglutide with B12 work better than semaglutide alone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'B12 does not enhance semaglutide\'s weight-loss mechanism. There are no published clinical trials comparing compounded semaglutide + B12 vs compounded semaglutide alone for weight-loss outcomes. B12 is a nutrient support additive — not an efficacy booster. Its value is in preventing or correcting B12 deficiency that can develop during sustained GLP-1 therapy (from reduced food intake and altered gut motility), which can cause fatigue, peripheral neuropathy, and brain fog if left unaddressed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded semaglutide with B12 still available in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of May 2026, compounded semaglutide continues to be available through licensed 503A telehealth providers under clinical necessity provisions, though the regulatory environment has tightened significantly since the FDA declared the semaglutide shortage resolved in early 2025. The FDA also proposed removing semaglutide from the 503B bulks list (April 30, 2026 proposal, comment deadline June 29, 2026). Patients starting a compounded semaglutide program should understand this regulatory uncertainty and have a conversation with their provider about contingency options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I specifically look for a provider that includes B12 in their semaglutide compound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'B12 inclusion is a nice-to-have, not a must-have. If a provider you prefer doesn\'t include B12 in their standard sema formulation, you can supplement with a separate oral B12 supplement or ask about a B12 add-on. Do not choose a provider based primarily on B12 inclusion — price, clinical support, program quality, and regulatory compliance posture should rank higher in your decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does compounded semaglutide with B12 compare to compounded semaglutide with B6?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some compounders use B6 (pyridoxine) as an anti-nausea additive instead of or alongside B12. B6 has evidence for reducing nausea (it\'s used in pregnancy morning sickness treatment at higher doses), which makes it clinically relevant for GLP-1 users who experience significant nausea during dose titration. B12 addresses a different issue (nutrient deficiency from reduced intake). Some compounders offer semaglutide with both B6 and B12. Neither changes the weight-loss efficacy of semaglutide.',
      },
    },
  ],
};

export default function CompoundedSemaglutideWithB12Page() {
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'compounded-semaglutide-with-b12');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'compounded-semaglutide-with-b12');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'compounded-semaglutide-with-b12');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'compounded-semaglutide-with-b12');

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

      {/* CRO: sticky mobile CTA — Strut Health cheapest entry */}
      <StickyMobileCTA
        href={strutUrl}
        brandName="Strut Health"
        pricePitch="Compounded semaglutide from $99/mo"
      />

      {/* YMYL compliance: medical / FDA disclaimer banner */}
      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">

            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-glp1-charcoal/60">
              <Link href="/compounded-semaglutide" className="hover:text-glp1-charcoal">Compounded Semaglutide</Link>
              <span className="mx-2">›</span>
              <span className="text-glp1-charcoal">With B12</span>
            </nav>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-teal">
              <Beaker className="h-3.5 w-3.5" /> Compounded Formula Guide
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Compounded Semaglutide with B12
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Many compounding pharmacies include vitamin B12 in their semaglutide formulation. Here&rsquo;s what B12 does, whether it matters, pricing from verified providers, and which compounders include it.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
            </div>

            {/* Pricing summary box */}
            <div className="mt-8 rounded-xl border border-glp1-charcoal/10 bg-white shadow-sm p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                <DollarSign className="h-4 w-4" /> Verified Compounded Sema Pricing — May 2026
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                <div className="text-center rounded-lg bg-green-50 p-3">
                  <div className="font-bold text-xl text-green-800">$99/mo</div>
                  <div className="text-xs text-green-700 mt-1">Strut Health · GobyMeds (entry)</div>
                </div>
                <div className="text-center rounded-lg bg-glp1-cream/60 p-3">
                  <div className="font-bold text-xl text-glp1-charcoal">$158/mo</div>
                  <div className="text-xs text-glp1-charcoal/60 mt-1">TMates (12-month plan)</div>
                </div>
                <div className="text-center rounded-lg bg-glp1-cream/60 p-3">
                  <div className="font-bold text-xl text-glp1-charcoal">$229–$249/mo</div>
                  <div className="text-xs text-glp1-charcoal/60 mt-1">Eden Health · MEDVi</div>
                </div>
                <div className="text-center rounded-lg bg-glp1-cream/60 p-3">
                  <div className="font-bold text-xl text-glp1-charcoal">$299/mo</div>
                  <div className="text-xs text-glp1-charcoal/60 mt-1">Embody (flat refills)</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-glp1-charcoal/50 text-center">
                B12 inclusion varies by provider — verify before selecting. Price typically unchanged vs sema without B12.
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT IS IT ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              What Is Compounded Semaglutide with B12?
            </h2>
            <p className="mb-6 max-w-3xl text-sm text-glp1-charcoal/80 leading-relaxed">
              It&rsquo;s compounded semaglutide (the same active molecule as Wegovy/Ozempic, produced by a 503A pharmacy) with vitamin B12 added to the same vial. The combination is dispensed by telehealth providers as a single weekly subcutaneous injection.
            </p>

            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900 mb-6">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong>Not available in branded versions.</strong> Wegovy and Ozempic (manufactured by Novo Nordisk) do not contain B12. The B12 combination is exclusive to compounded formulations produced by 503A or 503B compounding pharmacies.
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5 text-center">
                <div className="text-3xl font-bold text-glp1-charcoal mb-2">GLP-1</div>
                <div className="text-sm font-semibold text-glp1-charcoal mb-1">Semaglutide</div>
                <p className="text-xs text-glp1-charcoal/70">The active medication. GLP-1 receptor agonist. Suppresses appetite, slows gastric emptying, regulates blood sugar.</p>
              </div>
              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5 text-center">
                <div className="text-3xl font-bold text-glp1-teal mb-2">B12</div>
                <div className="text-sm font-semibold text-glp1-charcoal mb-1">Vitamin B12</div>
                <p className="text-xs text-glp1-charcoal/70">Nutrient supplement. Cyanocobalamin or methylcobalamin. Supports nerve function, energy, red blood cells.</p>
              </div>
              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5 text-center">
                <div className="text-3xl font-bold text-glp1-orange mb-2">503A</div>
                <div className="text-sm font-semibold text-glp1-charcoal mb-1">Compounding Pharmacy</div>
                <p className="text-xs text-glp1-charcoal/70">Patient-specific compounding. Not FDA-approved as a drug product. Legal under clinical necessity provisions (verify current status).</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHY B12 SPECIFICALLY IN COMPOUNDED ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Why Do Compounders Add B12 — and Should You Care?
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <div className="mt-1 h-7 w-7 rounded-full bg-glp1-orange/20 flex items-center justify-center shrink-0 text-sm font-bold text-glp1-orange">1</div>
                <div>
                  <h3 className="font-semibold text-glp1-charcoal mb-1">Reduced food intake depletes B12</h3>
                  <p className="text-sm text-glp1-charcoal/80">Compounded semaglutide patients often reduce food intake by 30–50%. Sustained caloric restriction on GLP-1 therapy creates real B12 deficiency risk — symptoms include fatigue, peripheral numbness, and cognitive fog. Proactive supplementation prevents this.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-7 w-7 rounded-full bg-glp1-orange/20 flex items-center justify-center shrink-0 text-sm font-bold text-glp1-orange">2</div>
                <div>
                  <h3 className="font-semibold text-glp1-charcoal mb-1">Subcutaneous = nearly 100% absorption</h3>
                  <p className="text-sm text-glp1-charcoal/80">Oral B12 supplements absorb at 1–3% for large doses. When B12 is co-administered subcutaneously with semaglutide, absorption is essentially complete — more effective than any oral supplement, at no additional injection.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-7 w-7 rounded-full bg-glp1-orange/20 flex items-center justify-center shrink-0 text-sm font-bold text-glp1-orange">3</div>
                <div>
                  <h3 className="font-semibold text-glp1-charcoal mb-1">B12 does NOT boost weight loss (honest answer)</h3>
                  <p className="text-sm text-glp1-charcoal/80">There are no clinical trials showing B12 addition improves weight-loss outcomes compared to semaglutide alone. It&rsquo;s a nutrient additive — the benefit is preventing a deficiency that would make you feel worse, not augmenting fat metabolism. Don&rsquo;t choose a provider based on B12 inclusion alone.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-7 w-7 rounded-full bg-glp1-orange/20 flex items-center justify-center shrink-0 text-sm font-bold text-glp1-orange">4</div>
                <div>
                  <h3 className="font-semibold text-glp1-charcoal mb-1">B12 vs B6 — different roles</h3>
                  <p className="text-sm text-glp1-charcoal/80">Some compounders use B6 (pyridoxine) instead — B6 has anti-nausea properties relevant during GLP-1 titration. B12 addresses nutrient deficiency; B6 addresses GI side effects. Some compounders include both. Neither changes semaglutide&rsquo;s weight-loss effect.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4 text-sm text-glp1-charcoal/80">
              <strong>Our take:</strong> B12 in a compounded semaglutide formulation is medically justified and adds practical value for long-term GLP-1 patients. It&rsquo;s not a deciding factor when choosing a provider, but it is a reasonable sign that the compounding pharmacy is thinking about the full nutritional picture of GLP-1 therapy.
            </div>
          </div>
        </section>

        {/* ============ REGULATORY STATUS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Regulatory Status (May 2026)
            </h2>

            <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-5 text-sm text-yellow-900 mb-6">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-2">Compounded semaglutide exists in a contested regulatory environment:</strong>
                  <ul className="space-y-1.5">
                    <li>• FDA declared semaglutide shortage resolved (early 2025) — ending the primary compounding allowance</li>
                    <li>• 503A enforcement ramped up starting April 2025 for shortage-based compounding</li>
                    <li>• FDA proposed removing semaglutide from 503B bulks list (April 30, 2026)</li>
                    <li>• Public comment deadline: June 29, 2026 — after which FDA may finalize</li>
                    <li>• 503A compounding under clinical necessity carve-outs continues as of May 2026</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Bottom line:</strong> Compounded semaglutide with B12 is currently available but the supply may be disrupted if FDA finalizes the 503B removal proposal. Discuss regulatory risk with your prescribing provider before committing to a long program.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/compounded-semaglutide"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
              >
                Full Compounded Semaglutide FDA Compliance Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ PROVIDERS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-3xl text-glp1-charcoal">Verified Providers</h2>
              <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
            </div>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              All providers below offer compounded semaglutide. B12 inclusion in the standard formulation varies — contact each provider to confirm. Pricing Gronk-verified May 2026.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Strut Health */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Strut Health</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">Lowest Price</span>
                </div>
                <div className="mb-1 text-xl font-bold" style={{ color: '#D4A33A' }}>$99/mo</div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">Compounded semaglutide. 503A compliance focus. Oral tirzepatide also available.</p>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12: <strong>Verify directly with Strut Health before ordering</strong>
                </div>
                <a href={strutUrl} target="_blank" rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-orange-dark">
                  Visit Strut Health <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* TMates */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">TMates</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">Best Value (Annual)</span>
                </div>
                <div className="mb-1 text-xl font-bold" style={{ color: '#D4A33A' }}>$158–$249/mo</div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">12-month plan = $158/mo ($1,900 upfront). Same-price-all-doses. NAD+, TRT also available.</p>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12: <strong>Verify directly with TMates before ordering</strong>
                </div>
                <a href={tmatesUrl} target="_blank" rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark">
                  Visit TMates <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Eden Health */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-800">NAD+ Stack</span>
                </div>
                <div className="mb-1 text-xl font-bold" style={{ color: '#D4A33A' }}>$229–$249/mo</div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">Strong peptide ecosystem. NAD+ integration. Katalys-active affiliate program (verified).</p>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12: <strong>Verify directly with Eden Health before ordering</strong>
                </div>
                <a href={edenUrl} target="_blank" rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark">
                  Visit Eden Health <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Embody */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Embody</h3>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Lowest First Month</span>
                </div>
                <div className="mb-1 text-xl font-bold" style={{ color: '#D4A33A' }}>$149 first, then $299/mo</div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">Spring Forward promo. GLP-1 gum (chewable tirzepatide) also available. HSA/FSA eligible.</p>
                <div className="mb-3 rounded bg-glp1-cream/60 px-3 py-2 text-xs text-glp1-charcoal/70">
                  B12: <strong>Verify directly with Embody before ordering</strong>
                </div>
                <a href={embodyUrl} target="_blank" rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark">
                  Visit Embody <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/best-compounded-semaglutide"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline">
                Full ranked list → Best Compounded Semaglutide 2026 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">FAQ</h2>

            <div className="space-y-5">
              {faqSchema.mainEntity.map((q) => (
                <details key={q.name} className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <summary className="cursor-pointer font-semibold text-glp1-charcoal">{q.name}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-glp1-charcoal/85">{q.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 border-t border-glp1-charcoal/10 pt-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/compounded-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline">
                  Compounded Semaglutide Guide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/semaglutide-with-b12"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline">
                  Semaglutide with B12 (general) <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/tirzepatide-with-b12"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline">
                  Tirzepatide with B12 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
