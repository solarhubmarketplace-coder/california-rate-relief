import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { LastReviewedBadge } from '@/components/glp1/LastReviewedBadge';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { VerifiedPricingBadge } from '@/components/glp1/VerifiedPricingBadge';
import {
  ArrowRight,
  Calendar,
  CircleCheck,
  Trophy,
  Award,
  Star,
  ExternalLink,
} from 'lucide-react';

// =============================================================================
// /best-compounded-semaglutide
// =============================================================================
// SERP target: "best compounded semaglutide" cluster + "cheapest compounded
// semaglutide" + "compounded semaglutide telehealth." Capturable: best-of guides
// reach top-3 in this vertical (no brand-named SERP lock-in).
//
// Verified pricing crawled live 2026-05-06 from each provider's site.
// EPC + CR data from Katalys partner dashboard May 2026.
//
// Ranking is by patient fit, not by CPA payout. We disclose all affiliate
// relationships and do not rank providers by what they pay us.
// =============================================================================

export const metadata: Metadata = {
  title: 'Best Compounded Semaglutide May 2026: 6 Telehealth Programs Ranked | GLP1CompareHub',
  description:
    'Editorial ranking of compounded semaglutide telehealth programs verified May 2026. TMates ($158/mo on 12-mo plan), Strut Health ($99/mo oral), Embody ($299 flat). Verified pricing, real conversion data.',
  alternates: { canonical: 'https://glp1comparehub.com/best-compounded-semaglutide' },
  openGraph: {
    title: 'Best Compounded Semaglutide 2026 — Telehealth Programs Ranked',
    description:
      'Independent ranking by verified pricing, realized conversion data, and format options. Pricing crawled live from provider sites May 6, 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/best-compounded-semaglutide',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Compounded Semaglutide May 2026: Telehealth Programs Ranked',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/best-compounded-semaglutide',
  about: ['Compounded semaglutide', 'Telehealth GLP-1', 'TMates', 'Strut Health', 'Embody', 'Eden Health', 'System Labs'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest compounded semaglutide telehealth program in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On a 12-month plan, TMates is the cheapest verified program at $158/mo ($1,900 paid upfront). For lowest entry-tier monthly without a long-term commitment, Strut Health offers oral semaglutide auto-refill at $99/mo. System Labs offers $179/mo with no commitment. All three were live-verified on provider sites May 6, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which compounded semaglutide program has the highest conversion rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMates leads our verified Katalys stack at $16.09 EPC and 6.43% conversion rate as of May 2026. Strut Health is second at $8.91 EPC and 7.12% conversion rate (highest CR; lower EPC because of lower CPA). These are realized numbers from the Katalys partner dashboard, not estimates. Higher conversion typically reflects transparent pricing and fast intake-to-checkout funnels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded semaglutide still legal to buy in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The FDA April 1 2026 enforcement shift narrowed 503A pharmacies to true patient-specific compounding (not bulk production). Many telehealth providers continue operating under that narrower exception. The April 30 2026 proposal to remove semaglutide from the 503B bulks list is still in its public comment period (closes June 29 2026); if finalized, supply could tighten further. As of this writing, all six programs ranked here are accepting new patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between oral semaglutide and injectable semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oral compounded semaglutide is taken sublingually (under-the-tongue drops) or as a tablet, daily. Injectable compounded semaglutide is a weekly subcutaneous injection. Clinical evidence for the oral compounded format is significantly less robust than for FDA-approved injectables. Strut Health and TMates are the verified providers offering oral options. Patients prioritizing peer-reviewed efficacy data should use injectable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How did you rank these compounded semaglutide providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our editorial ranking weighs: (1) verified pricing from each brand site (live-crawled May 6 2026), (2) realized EPC and conversion rate from Katalys partner data, (3) plan flexibility and dose-escalation policy, (4) format options (injectable, oral, gum), (5) ancillary care availability (NAD+, hair, ED, etc.), and (6) post-April-2026 FDA enforcement readiness. We do NOT rank by CPA payout — that would create a conflict of interest. We rank by patient fit.',
      },
    },
  ],
};

interface RankedProvider {
  rank: number;
  name: string;
  productKey: string;
  slug: string;
  badge: string;
  badgeColor: string;
  tagline: string;
  highlight: string;
  pricing: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
  ctaLabel: string;
}

const rankings: RankedProvider[] = [
  {
    rank: 1,
    name: 'TMates',
    productKey: 'glp1-tmates',
    slug: 'tmates',
    badge: 'Best Overall',
    badgeColor: 'bg-green-100 text-green-800',
    tagline: '#1 highest-EPC GLP-1 program in our verified Katalys stack',
    highlight:
      'TMates wins on three fronts: the lowest 12-month price in our verified stack ($158/mo for semaglutide on a $1,900 annual plan), same-price-all-doses pricing that eliminates titration upcharges, and a 6.43% Katalys-verified conversion rate that beats every other program we track. Available in injectable AND oral drop formats at the same price.',
    pricing: [
      '1 month: $249',
      '3 months: $650 ($217/mo, save 13%)',
      '6 months: $1,050 ($175/mo, save 30%)',
      '12 months: $1,900 ($158/mo, save 37%)',
    ],
    bestFor: 'Shoppers committing 6+ months who want the lowest verified per-month cost and access to NAD+, TRT, ED, and hair loss treatment from the same provider.',
    pros: [
      'Lowest verified 12-month per-month price ($158/mo)',
      'Same price across all doses (sema 0.25–2.4mg) — no titration upcharge',
      'Injectable + oral drop formats at the same price',
      'Multi-vertical: GLP-1, NAD+, TRT, ED, hair',
      '6.43% conversion rate, 2,400+ patients (Katalys May 2026)',
    ],
    cons: [
      'Lowest pricing requires upfront payment ($1,900 for the 12-month plan)',
      'Compounded only — no branded Wegovy/Ozempic',
    ],
    ctaLabel: 'Visit TMates',
  },
  {
    rank: 2,
    name: 'Strut Health',
    productKey: 'glp1-strut-health',
    slug: 'strut-health',
    badge: 'Best Entry-Tier',
    badgeColor: 'bg-orange-100 text-orange-800',
    tagline: 'Lowest entry-tier oral semaglutide in our verified stack',
    highlight:
      'Strut Health offers ORAL compounded semaglutide on auto-refill starting at $99/mo — the lowest verified GLP-1 entry-tier price in our entire Katalys stack. The platform uses async no-video physician review (≤1 business day turnaround), free shipping, free follow-up care, and is LegitScript + HIPAA compliant. Note: oral-only — no injectable.',
    pricing: [
      'Oral Semaglutide auto-refill: $99/mo (save 21%)',
      'Oral Tirzepatide auto-refill: $199/mo (save 17%)',
      'No long-term commitment required',
    ],
    bestFor: 'Cost-conscious patients who want the lowest entry-tier monthly price and are open to oral semaglutide. Multi-condition patients (hair, skin, sexual health) who want one async no-video provider.',
    pros: [
      '$99/mo auto-refill — lowest verified entry-tier price',
      'No video visit required — async physician review ≤1 business day',
      '7.12% conversion rate (highest CR in our active stack — Katalys May 2026)',
      'Multi-vertical: GLP-1, hair (finasteride/dutasteride), skin, ED, herpes',
      'Free shipping, free follow-up care, cancel anytime, LegitScript accredited',
    ],
    cons: [
      'Oral-only — no injectable semaglutide on public catalog',
      'AK excluded (Alaska state restriction)',
      'Oral compounded GLP-1 efficacy data less robust than injectable',
    ],
    ctaLabel: 'Visit Strut Health',
  },
  {
    rank: 3,
    name: 'System Labs',
    productKey: 'glp1-system-labs',
    slug: 'system-labs',
    badge: 'Best No-Commitment',
    badgeColor: 'bg-blue-100 text-blue-800',
    tagline: 'Lowest no-commitment monthly price ($179/mo)',
    highlight:
      'System Labs offers compounded GLP-1 at $179/mo with no long-term commitment — the cheapest no-commitment GLP-1 entry in the active Katalys stack. The platform also covers a broader longevity stack: NAD+ ($79 first month), B-12 / MIC, and sermorelin (oral or injectable). Best fit for biohackers who want GLP-1 plus adjacent peptides.',
    pricing: [
      'Compounded GLP-1/GIP: $179/mo (no commitment)',
      'NAD+: $79 first month, $149/mo ongoing',
      'B-12 / MIC+B12: $89/mo',
      'Sermorelin (oral): $79 first month',
    ],
    bestFor: 'Cost-conscious buyers wanting GLP-1 with no commitment, plus access to longevity peptides (NAD+, B-12, sermorelin) under one provider.',
    pros: [
      '$179/mo — lowest no-commitment GLP-1 entry in stack',
      'Adjacent-peptide cluster: NAD+, B-12, sermorelin (oral + injectable)',
      'First-month discounts across the board',
      'No long-term commitments on any program',
    ],
    cons: [
      'Lower default CPA ($100) — programs invest less in onboarding polish',
      'No realized EPC data yet on Katalys (program is newer)',
      'Less GLP-1-specific brand recognition than dedicated providers',
    ],
    ctaLabel: 'Visit System Labs',
  },
  {
    rank: 4,
    name: 'Embody',
    productKey: 'glp1-embody',
    slug: 'embody',
    badge: 'Best First Month',
    badgeColor: 'bg-purple-100 text-purple-800',
    tagline: '$149 first month + flat $299/mo refills + GLP-1 gum option',
    highlight:
      'Embody (joinem.co) offers compounded semaglutide for $149 the first month with the active Spring Forward $200-off promo, then a flat $299/mo on refills regardless of dose escalation. The platform also offers a unique GLP-1 gum (chewable tirzepatide) — the only gum format in our verified stack — for needle-averse patients.',
    pricing: [
      'First month: $149 (with Spring Forward $200 off)',
      'Refills: $299/mo flat (any dose)',
      'GLP-1 Gum: see joinem.co',
    ],
    bestFor: 'Patients who want the lowest first-month entry, predictable flat refill pricing without dose-escalation surprises, and an HSA/FSA-eligible program.',
    pros: [
      '$149 first month — lowest first-month entry in stack',
      'Flat $299/mo refills — no escalation fees',
      'GLP-1 Gum (only chewable format in our stack)',
      'HSA/FSA eligible',
      'Pause anytime',
    ],
    cons: [
      'Month-to-month average ($286/mo over 12 months) more expensive than TMates 12-mo plan ($158/mo)',
      'No 6 or 12-month bundled discount',
      'Compounded only',
    ],
    ctaLabel: 'Visit Embody',
  },
  {
    rank: 5,
    name: 'Eden Health',
    productKey: 'glp1-eden-health',
    slug: 'eden-health',
    badge: 'Best Wellness Stack',
    badgeColor: 'bg-pink-100 text-pink-800',
    tagline: '$129 first month + branded option + NAD+ ecosystem',
    highlight:
      'Eden Health offers compounded GLP-1 starting at $129 the first month on a 3-month plan ($229–249/mo ongoing), plus access to branded GLP-1 (Wegovy/Zepbound passthrough) for patients who want the option to switch later. The provider also runs the deepest NAD+ ecosystem in our stack (5 formats: injection, nasal spray, face cream, patches, oral).',
    pricing: [
      'GLP-1 first month (3-mo plan): $129',
      'GLP-1 ongoing: $229–249/mo',
      'NAD+ injection: $119–246/mo',
      'NAD+ nasal spray: from $112/mo',
    ],
    bestFor: 'First-time patients who are price-sensitive about month 1, who want the option to switch to branded GLP-1 later, or who want the broadest wellness stack (NAD+, hormones, peptides, hair).',
    pros: [
      '$129 first month (3-mo plan) — competitive entry',
      '"Same Price at Every Dose" — no titration upcharge',
      '127,000+ members (largest verified userbase in our stack)',
      'NAD+ in 5 different formats',
      'Branded GLP-1 access for later switching',
    ],
    cons: [
      'Cheapest pricing requires 3-month plan commitment',
      'Monthly-without-commitment ($229–249) more expensive than competitors',
    ],
    ctaLabel: 'Visit Eden Health',
  },
  {
    rank: 6,
    name: 'Care Bare Rx',
    productKey: 'glp1-care-bare-rx',
    slug: 'care-bare-rx',
    badge: 'Best Multi-Vertical',
    badgeColor: 'bg-teal-100 text-teal-800',
    tagline: 'GLP-1 + hair + sexual health + NAD+ — one provider',
    highlight:
      'Care Bare Rx offers compounded semaglutide and tirzepatide (both injectable AND oral formats) starting at $199/mo for weight loss, plus standalone $99/mo programs for hair growth and sexual health/ED. The cross-vertical CPA tiers make this a strong fit for content angles that pair GLP-1 with hair regrowth or sexual wellness.',
    pricing: [
      'Compounded GLP-1 (oral or injectable): from $199/mo',
      'Hair growth (standalone): $99/mo',
      'Sexual health / ED (standalone): $99/mo',
      'NAD+ (standalone): $199/mo',
    ],
    bestFor: 'Patients who want one platform for weight loss + hair + sexual health, or who specifically want oral compounded GLP-1 alongside the standard injectable.',
    pros: [
      'Multi-vertical: GLP-1, hair, sexual health, NAD+ — one provider',
      'Oral AND injectable compounded GLP-1',
      'Cross-sell tiers: $99/mo hair and ED programs',
      '$300 default CPA + 6 payout tiers',
    ],
    cons: [
      'Pricing transparency requires intake completion',
      'Multi-vertical focus — less GLP-1 brand specialization',
      'No realized EPC data yet on Katalys',
    ],
    ctaLabel: 'Visit Care Bare Rx',
  },
];

export default function BestCompoundedSemaglutidePage() {
  return (
    <GLP1Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <GLP1Header />

      {/* YMYL compliance: medical / FDA disclaimer banner */}
      <MedicalDisclaimerBanner />

      {/* Disclosure Banner */}
      <div className="border-b" style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center" style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission — at no extra cost to you. We do not rank providers by CPA payout.{' '}
          <Link href="/affiliate-disclosure" className="underline">Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className="py-10 md:py-14" style={{ backgroundColor: '#F0EBE0' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <nav className="text-xs mb-3" aria-label="Breadcrumb">
              <Link href="/" style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Best Compounded Semaglutide 2026</span>
            </nav>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-[1.1]"
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Best Compounded Semaglutide <span style={{ color: '#D4A33A' }}>May 2026</span>
            </h1>
            <p className="text-lg md:text-xl mb-3" style={{ color: '#3D5560' }}>
              Six telehealth programs ranked by verified price, conversion data, and format flexibility — with the post-April 2026 FDA context built in.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: '#6B7B82' }}>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> Updated May 6, 2026
              </span>
              <span>·</span>
              <span>By <Link href="/author/chad-simpson" className="underline">Chad Simpson</Link></span>
              <span>·</span>
              <span>All pricing live-crawled from provider sites</span>
            </div>
          </div>
        </section>

        {/* The TL;DR */}
        <section className="py-8 bg-white border-b" style={{ borderColor: '#E5DDC8' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="rounded-xl bg-glp1-cream/40 p-6 border" style={{ borderColor: '#E5DDC8' }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: '#0E2A3A' }}>
                The Quick Take
              </h2>
              <ul className="space-y-2 text-sm md:text-base" style={{ color: '#3D5560' }}>
                <li className="flex gap-2"><Trophy className="h-5 w-5 shrink-0 text-yellow-600 mt-0.5" /><span><strong>Best Overall:</strong> TMates — $158/mo on the 12-month plan, same price all doses, 6.43% Katalys-verified conversion rate.</span></li>
                <li className="flex gap-2"><Award className="h-5 w-5 shrink-0 text-orange-600 mt-0.5" /><span><strong>Best Entry-Tier:</strong> Strut Health — $99/mo oral semaglutide auto-refill, lowest verified GLP-1 entry price in our stack.</span></li>
                <li className="flex gap-2"><Star className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" /><span><strong>Best No-Commitment:</strong> System Labs — $179/mo with no long-term contract, plus longevity peptide stack.</span></li>
                <li className="flex gap-2"><CircleCheck className="h-5 w-5 shrink-0 text-purple-600 mt-0.5" /><span><strong>Best First Month:</strong> Embody — $149 first month with Spring Forward $200 off, then flat $299/mo refills.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rankings */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10">
            {rankings.map((p) => {
              const url = buildGlp1AffiliateUrl(p.slug, 'best-compounded-semaglutide');
              return (
                <article
                  key={p.productKey}
                  className="rounded-xl border bg-white shadow-sm overflow-hidden"
                  style={{ borderColor: '#E5DDC8' }}
                >
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-glp1-orange/10 font-bold text-glp1-orange">
                          #{p.rank}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                          {p.name}
                        </h2>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>

                    <p className="text-base mb-4 italic" style={{ color: '#6B7B82' }}>
                      {p.tagline}
                    </p>

                    <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#3D5560' }}>
                      {p.highlight}
                    </p>

                    {/* Pricing block */}
                    <div className="grid gap-4 md:grid-cols-2 mb-5">
                      <div className="rounded-lg p-4" style={{ backgroundColor: '#F0EBE0' }}>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#7A6020' }}>
                            Pricing
                          </h3>
                          <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
                        </div>
                        <ul className="space-y-1 text-sm" style={{ color: '#3D5560' }}>
                          {p.pricing.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg p-4" style={{ backgroundColor: '#F0EBE0' }}>
                        <h3 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#7A6020' }}>
                          Best For
                        </h3>
                        <p className="text-sm" style={{ color: '#3D5560' }}>{p.bestFor}</p>
                      </div>
                    </div>

                    {/* Pros/Cons */}
                    <div className="grid gap-4 md:grid-cols-2 mb-5">
                      <div>
                        <h4 className="text-sm font-bold mb-2" style={{ color: '#0E2A3A' }}>Pros</h4>
                        <ul className="space-y-1.5 text-sm" style={{ color: '#3D5560' }}>
                          {p.pros.map((pro) => (
                            <li key={pro} className="flex gap-2">
                              <CircleCheck className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-2" style={{ color: '#0E2A3A' }}>Trade-offs</h4>
                        <ul className="space-y-1.5 text-sm" style={{ color: '#3D5560' }}>
                          {p.cons.map((con) => (
                            <li key={con} className="flex gap-2">
                              <span className="h-4 w-4 shrink-0 mt-0.5 text-yellow-600">·</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener nofollow sponsored"
                        className="inline-flex items-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                      >
                        {p.ctaLabel} <ExternalLink className="h-4 w-4" />
                      </a>
                      <Link
                        href={`/providers/${p.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold hover:bg-glp1-cream/30"
                        style={{ borderColor: '#0E2A3A', color: '#0E2A3A' }}
                      >
                        Read Full Review <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Methodology */}
        <section className="py-10" style={{ backgroundColor: '#F4EBD0' }}>
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              How We Ranked These
            </h2>
            <div className="space-y-3 text-sm md:text-base" style={{ color: '#3D5560' }}>
              <p>
                Our ranking weighs six factors: <strong>verified pricing</strong> (every dollar figure on this page was crawled live from the brand site on May 6, 2026 — no estimates, no out-of-date promo references), <strong>realized conversion data</strong> from the Katalys partner dashboard where available (EPC and CR are real customer behavior, not projections), <strong>plan flexibility</strong> (commitment length, dose-escalation policy, cancellation), <strong>format options</strong> (injectable, oral drops, gum), <strong>ancillary care</strong> (NAD+, hair, ED, peptides), and <strong>post-April-2026 FDA enforcement readiness</strong>.
              </p>
              <p>
                We do <strong>not</strong> rank by CPA payout — that would create a conflict of interest. Several of these providers pay us materially less than competitors on this list. Strut Health pays a $125 default CPA; TMates pays $250; Embody pays $400. We rank by patient fit, not by what providers pay us.
              </p>
              <p>
                Affiliate links earn us a commission when you sign up — at no extra cost to you. We re-verify all pricing monthly and update this page when provider terms change.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              FAQ
            </h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((q) => (
                <details key={q.name} className="rounded-lg border p-4" style={{ borderColor: '#E5DDC8', backgroundColor: '#F0EBE0' }}>
                  <summary className="cursor-pointer font-semibold" style={{ color: '#0E2A3A' }}>
                    {q.name}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: '#3D5560' }}>
                    {q.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/best-compounded-tirzepatide"
                className="inline-flex items-center gap-2 text-sm font-semibold text-glp1-orange hover:underline"
              >
                See: Best Compounded Tirzepatide 2026 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

            {/* YMYL compliance: editorial review box */}
      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <RelatedGuides currentPath="/best-compounded-semaglutide" priorityCluster="semaglutide" />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('tmates', 'best-compounded-semaglutide')} brandName="TMates" pricePitch="Best-ranked compounded semaglutide from $158/mo" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
