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
  Calendar,
  DollarSign,
  Shield,
  TrendingDown,
  Info,
} from 'lucide-react';

// =============================================================================
// /tirzepatide-vs-zepbound  (1,500 vol, KD 9 — Tier B med-vs-med clarification)
// =============================================================================
// The query "tirzepatide vs zepbound" is driven by patient confusion: people
// searching this often don't know that tirzepatide IS Zepbound (same API).
// The real comparison is branded Zepbound (~$1,086/mo cash) vs compounded
// tirzepatide ($167-299/mo). This page clarifies the naming, explains the
// cost tradeoff, covers FDA compliance status, and routes to our compounded
// provider stack.
//
// Pricing verified May 2026 via Gronk. FDA enforcement timeline accurate as of
// May 6, 2026 per CLAUDE.md data verification protocol.
// =============================================================================

export const metadata: Metadata = {
  title: 'Tirzepatide vs Zepbound 2026: Are They the Same Drug? | GLP1CompareHub',
  description:
    'Tirzepatide IS Zepbound — same molecule, different names. The real comparison is branded Zepbound (~$1,086/mo) vs compounded tirzepatide ($167–$299/mo). Full breakdown May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/tirzepatide-vs-zepbound' },
  openGraph: {
    title: 'Tirzepatide vs Zepbound 2026: Same Drug, Very Different Prices',
    description:
      'Tirzepatide is the active compound. Zepbound is the brand name. Here\'s what that means for your wallet — and whether compounded is still legal in 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/tirzepatide-vs-zepbound',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Tirzepatide vs Zepbound', item: 'https://glp1comparehub.com/tirzepatide-vs-zepbound' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tirzepatide vs Zepbound 2026: Are They the Same Drug? (Yes — Here\'s the Full Breakdown)',
  description:
    'Tirzepatide is the active pharmaceutical ingredient. Zepbound is Eli Lilly\'s brand name. This page explains the naming difference, cost gap between branded and compounded, and whether compounded tirzepatide is still legal in May 2026.',
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
    '@id': 'https://glp1comparehub.com/tirzepatide-vs-zepbound',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is tirzepatide the same as Zepbound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tirzepatide is the International Nonproprietary Name (INN) — the generic name of the active drug molecule. Zepbound is Eli Lilly\'s brand name for tirzepatide when prescribed for chronic weight management. Mounjaro is Eli Lilly\'s brand name for the same molecule when prescribed for Type 2 diabetes. The chemistry is identical: all are once-weekly subcutaneous injections of the same dual GLP-1/GIP receptor agonist. The difference is the indication (weight vs. diabetes), dosing/titration schedule on the packaging, and regulatory label — not the drug itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Zepbound cost vs compounded tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded Zepbound costs approximately $1,086/month at full retail cash price as of May 2026. Eli Lilly\'s Zepbound savings card can reduce that to roughly $399/month for commercially-insured patients who qualify. Compounded tirzepatide from verified telehealth providers ranges from $167–$299/month depending on plan length and provider. The gap between compounded and branded is $700–$900/month for most cash-paying patients — approximately $8,400–$10,800 per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide still legal in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The legal status has changed significantly in 2025–2026. The FDA declared the tirzepatide shortage resolved on March 5, 2025. For 503A pharmacies (patient-specific compounders), enforcement of the shortage-based compounding allowance ramped up starting April 1, 2025. For 503B outsourcing facilities, FDA published a proposal on April 30, 2026 to remove tirzepatide from the "bulks list" — meaning 503B compounders would no longer be able to produce it after the comment period closes (June 29, 2026). As of May 2026, 503A compounding remains legal under clinical necessity carve-outs; the regulatory landscape continues to evolve.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is branded Zepbound more effective than compounded tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The active molecule is the same — tirzepatide in both cases. Branded Zepbound is produced under FDA-regulated GMP manufacturing with rigorous quality controls. Compounded tirzepatide is produced by pharmacy compounders under different oversight frameworks (503A or 503B). There are no head-to-head clinical trials comparing compounded vs. branded tirzepatide efficacy, because they are legally different products (compounded drugs are not FDA-approved as such). If manufacturing quality and regulatory certainty are your primary concerns, branded Zepbound is the safer choice. If cost is the primary concern and you are working with a licensed prescriber, compounded is significantly less expensive.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Zepbound and Mounjaro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zepbound and Mounjaro are both brand names for tirzepatide manufactured by Eli Lilly — the same molecule. The difference is the FDA approval indication: Mounjaro is FDA-approved for Type 2 diabetes management; Zepbound is FDA-approved for chronic weight management in adults with BMI ≥30 (or ≥27 with a weight-related condition). Dosing auto-injector pens are physically identical. Some patients who have Mounjaro covered for T2D may also receive weight-loss benefit, but prescribing off-label for weight loss (Mounjaro for non-diabetics) depends on prescriber judgment and insurer policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get compounded tirzepatide through telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — as of May 2026, several telehealth providers offer compounded tirzepatide with a valid prescription from a licensed prescriber. Verified options in our stack include TMates ($167–$297/mo depending on plan), MEDVi ($229–$299/mo, Gronk-verified), Eden Health ($229–$249/mo), and Embody ($299/mo flat). All require a brief medical intake and prescriber review. See our Best Compounded Tirzepatide page for a full ranked comparison.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  branded: string;
  compounded: string;
  winner?: 'branded' | 'compounded' | 'tie';
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Active molecule',
    branded: 'Tirzepatide (Eli Lilly, GMP-manufactured)',
    compounded: 'Tirzepatide (503A or 503B pharmacy)',
    winner: 'tie',
  },
  {
    label: 'Brand name',
    branded: 'Zepbound (weight) / Mounjaro (T2D)',
    compounded: 'No brand name — dispensed as "compounded tirzepatide"',
    winner: 'tie',
  },
  {
    label: 'FDA approval status',
    branded: 'FDA-approved for weight management (Zepbound, 2023)',
    compounded: 'Not FDA-approved (compounded under 503A/503B)',
    winner: 'branded',
  },
  {
    label: 'Cash price (May 2026)',
    branded: '~$1,086/mo full retail; ~$399/mo with Lilly savings card',
    compounded: '$167–$299/mo via verified telehealth providers',
    winner: 'compounded',
  },
  {
    label: 'Insurance coverage',
    branded: 'Some commercial plans cover Zepbound; Medicare generally excludes',
    compounded: 'Not covered by insurance (out-of-pocket only)',
    winner: 'branded',
  },
  {
    label: 'Manufacturing oversight',
    branded: 'FDA-regulated GMP facilities (Eli Lilly)',
    compounded: '503A/503B compounding pharmacy oversight',
    winner: 'branded',
  },
  {
    label: 'Dosing flexibility',
    branded: 'Fixed titration pens: 2.5, 5, 7.5, 10, 12.5, 15 mg',
    compounded: 'Custom dosing possible (microdosing, faster titration)',
    winner: 'compounded',
  },
  {
    label: 'Availability as of May 2026',
    branded: 'Available nationally at retail pharmacies',
    compounded: 'Available through licensed telehealth providers; regulatory status evolving',
    winner: 'branded',
  },
  {
    label: 'Regulatory certainty (2026)',
    branded: 'Stable — FDA-approved with full legal status',
    compounded: 'Uncertain — FDA enforcement active since April 2025; 503B proposal April 30, 2026',
    winner: 'branded',
  },
  {
    label: 'Prescription required',
    branded: 'Yes',
    compounded: 'Yes',
    winner: 'tie',
  },
  {
    label: 'Telehealth access',
    branded: 'Limited (most pharmacies require local pick-up)',
    compounded: 'Available via telehealth + mail-order from providers like TMates, MEDVi, Eden Health',
    winner: 'compounded',
  },
  {
    label: '12-month cost (no insurance)',
    branded: '~$13,032 full retail (~$4,788 with Lilly card)',
    compounded: '~$2,004–$3,588 depending on provider and plan',
    winner: 'compounded',
  },
];

export default function TirzepatideVsZepboundPage() {
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'tirzepatide-vs-zepbound');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'tirzepatide-vs-zepbound');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'tirzepatide-vs-zepbound');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'tirzepatide-vs-zepbound');

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

      {/* CRO: sticky mobile CTA — routes to TMates (best compounded price) */}
      <StickyMobileCTA
        href={tmatesUrl}
        brandName="TMates"
        pricePitch="Compounded tirzepatide from $167/mo"
      />

      {/* YMYL compliance: medical / FDA disclaimer banner */}
      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">

            {/* Answer-first box — directly addresses the search intent */}
            <div className="mb-8 rounded-xl border-2 border-glp1-orange/40 bg-glp1-orange/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-glp1-orange">
                <Info className="h-4 w-4" /> Quick Answer
              </div>
              <p className="text-lg font-semibold text-glp1-charcoal">
                Tirzepatide <em>is</em> Zepbound. They&rsquo;re the same drug — tirzepatide is the molecule name; Zepbound is Eli Lilly&rsquo;s brand name for it.
              </p>
              <p className="mt-2 text-sm text-glp1-charcoal/80">
                The real comparison is <strong>branded Zepbound (~$1,086/mo)</strong> versus <strong>compounded tirzepatide ($167–$299/mo)</strong> from telehealth providers. Scroll down for the full cost breakdown, FDA compliance status, and provider options.
              </p>
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Tirzepatide vs Zepbound 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Same molecule. Dramatically different prices. Here&rsquo;s the full breakdown on branded vs compounded tirzepatide — and whether compounded is still legal in 2026.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <span>Pricing Gronk-verified May 2026</span>
              <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
            </div>
          </div>
        </section>

        {/* ============ NAMING EXPLAINER ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Why the Confusion? Tirzepatide, Zepbound, and Mounjaro Explained
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">The Molecule</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Tirzepatide</h3>
                <p className="text-sm text-glp1-charcoal/80">
                  The active pharmaceutical ingredient (API). A dual GLP-1/GIP receptor agonist developed by Eli Lilly. This is what all versions — branded and compounded — actually contain.
                </p>
                <div className="mt-3 text-xs text-glp1-charcoal/60">Generic/INN name</div>
              </div>

              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-orange">Brand Name #1</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Zepbound</h3>
                <p className="text-sm text-glp1-charcoal/80">
                  Eli Lilly&rsquo;s brand name for tirzepatide, FDA-approved in November 2023 specifically for <strong>chronic weight management</strong> in adults with BMI ≥30 or ≥27 with a weight-related condition.
                </p>
                <div className="mt-3 text-xs text-glp1-charcoal/60">Retail: ~$1,086/mo cash</div>
              </div>

              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Brand Name #2</div>
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Mounjaro</h3>
                <p className="text-sm text-glp1-charcoal/80">
                  Eli Lilly&rsquo;s brand name for the same tirzepatide molecule, FDA-approved in May 2022 for <strong>Type 2 diabetes</strong> management. Same drug, different indication.
                </p>
                <div className="mt-3 text-xs text-glp1-charcoal/60">Retail: ~$1,086/mo cash</div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-glp1-charcoal/10 bg-white p-5">
              <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Where Does Compounded Tirzepatide Fit?</h3>
              <p className="text-sm text-glp1-charcoal/80 mb-3">
                During the 2023–2025 national shortage of tirzepatide, FDA regulations allowed 503A and 503B compounding pharmacies to produce tirzepatide as a patient-specific alternative. This is what compounded telehealth providers (TMates, MEDVi, Eden Health, Embody) dispense — the same active molecule, produced by licensed compounders rather than Lilly.
              </p>
              <p className="text-sm text-glp1-charcoal/80">
                The shortage was declared resolved by the FDA in March 2025. Enforcement has been ramping up since, creating regulatory uncertainty for compounded tirzepatide that did not exist in 2023–2024.
              </p>
            </div>
          </div>
        </section>

        {/* ============ COST COMPARISON ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-3xl text-glp1-charcoal">The Cost Gap</h2>
              <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Branded cost */}
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Branded Zepbound (Eli Lilly)</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <ul className="space-y-2 text-sm text-glp1-charcoal/85">
                    <li className="flex justify-between">
                      <span>Full retail (no insurance)</span>
                      <strong>~$1,086/mo</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>With Lilly savings card (insured)</span>
                      <strong>~$399/mo</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>With commercial insurance (if covered)</span>
                      <strong>$25–$100+ copay</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Medicare Part D</span>
                      <strong>Generally not covered</strong>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs text-glp1-charcoal/60">
                    12-month total (no savings card): ~$13,032
                  </div>
                </div>

                <div className="mt-3 rounded-lg bg-blue-50 border border-blue-200 p-3 text-xs text-blue-900">
                  <strong>Lilly Savings Card:</strong> Available to commercially-insured patients who are not on government insurance (Medicare/Medicaid). Reduces cost to ~$399/mo for qualifying patients. The card does not eliminate the need for insurance — it supplements it.
                </div>
              </div>

              {/* Compounded cost */}
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Compounded Tirzepatide (Telehealth)</h3>
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-green-800">
                    Verified Provider Pricing — May 2026
                  </div>
                  <ul className="space-y-2 text-sm text-green-900">
                    <li className="flex justify-between">
                      <span>TMates (12-month plan)</span>
                      <strong>$167/mo</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>TMates (1-month)</span>
                      <strong>$297/mo</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Eden Health</span>
                      <strong>$229–$249/mo</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>MEDVi</span>
                      <strong>$229–$299/mo</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Embody (flat)</span>
                      <strong>$299/mo</strong>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs text-green-800">
                    12-month total (TMates plan): ~$2,004 — saves ~$11,028 vs Zepbound retail
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-glp1-orange/30 bg-glp1-orange/5 p-5">
              <div className="flex items-start gap-3">
                <DollarSign className="h-6 w-6 text-glp1-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="mb-2 font-serif text-lg text-glp1-charcoal">Annual Savings Summary</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-glp1-charcoal">$11,028</div>
                      <div className="text-xs text-glp1-charcoal/60">Saved vs Zepbound retail (TMates 12-mo)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-glp1-charcoal">$2,784</div>
                      <div className="text-xs text-glp1-charcoal/60">Saved vs Zepbound with savings card (TMates 12-mo)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-glp1-charcoal">84%</div>
                      <div className="text-xs text-glp1-charcoal/60">Cheaper than Zepbound retail at TMates lowest price</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FDA / REGULATORY STATUS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Is Compounded Tirzepatide Still Legal? (May 2026)
            </h2>

            <div className="space-y-4">
              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-glp1-charcoal/30"></div>
                <div className="text-sm font-semibold text-glp1-charcoal">March 5, 2025 — FDA Declares Tirzepatide Shortage Resolved</div>
                <p className="mt-1 text-sm text-glp1-charcoal/75">
                  The FDA removed tirzepatide from its drug shortage database, ending the shortage-based compounding allowance for 503A pharmacies under 21 U.S.C. § 503A.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="text-sm font-semibold text-glp1-charcoal">April 1, 2025 — 503A Enforcement Begins</div>
                <p className="mt-1 text-sm text-glp1-charcoal/75">
                  FDA began formal enforcement against 503A compounders producing tirzepatide without a patient-specific clinical necessity justification. Providers relying solely on the shortage exception faced risk of FDA action.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="text-sm font-semibold text-glp1-charcoal">April 30, 2026 — FDA Proposes Removing Tirzepatide from 503B Bulks List</div>
                <p className="mt-1 text-sm text-glp1-charcoal/75">
                  FDA published a proposal to remove tirzepatide from the list of bulk substances that 503B outsourcing facilities may compound. If finalized, 503B pharmacies would no longer be permitted to produce compounded tirzepatide at scale.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-red-400"></div>
                <div className="text-sm font-semibold text-glp1-charcoal">June 29, 2026 — Public Comment Deadline on 503B Proposal</div>
                <p className="mt-1 text-sm text-glp1-charcoal/75">
                  The FDA comment period closes. After this date, the agency may finalize the rule, potentially ending 503B compounding of tirzepatide entirely.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-5 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-1">Bottom line as of May 2026:</strong>
                  Compounded tirzepatide is available through licensed telehealth providers but exists in a contested regulatory environment. Patients who start compounded tirzepatide should understand the supply may be disrupted if the FDA finalizes the 503B removal proposal. Branded Zepbound is the stable alternative but costs significantly more. We recommend patients discuss regulatory risk with their prescriber before committing to a long compounded tirzepatide program.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">
              Zepbound vs Compounded Tirzepatide: Full Side-by-Side
            </h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              Pricing verified May 2026. Regulatory information current as of May 6, 2026.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Branded Zepbound</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Compounded Tirzepatide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td className={`px-4 py-3 ${row.winner === 'branded' ? 'font-semibold text-green-700' : 'text-glp1-charcoal/80'}`}>
                        {row.branded}
                      </td>
                      <td className={`px-4 py-3 ${row.winner === 'compounded' ? 'font-semibold text-green-700' : 'text-glp1-charcoal/80'}`}>
                        {row.compounded}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ WHO SHOULD PICK WHICH ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Branded Zepbound or Compounded Tirzepatide?
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="font-serif text-xl text-glp1-charcoal">Choose Branded Zepbound if:</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You have commercial insurance that covers Zepbound — even partial coverage dramatically reduces your out-of-pocket cost.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>Regulatory certainty matters to you — FDA-approved manufacturing, stable supply, full quality oversight.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You qualify for and receive the Lilly savings card (~$399/mo) — the cost gap narrows substantially.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>Your prescriber or insurer requires the FDA-approved product specifically.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want local pharmacy pick-up and in-person prescriber support.</span></li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-glp1-orange bg-glp1-orange/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="h-5 w-5 text-glp1-orange" />
                  <h3 className="font-serif text-xl text-glp1-charcoal">Choose Compounded Tirzepatide if:</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You&rsquo;re paying cash with no insurance coverage — the price gap ($167 vs $1,086/mo) is too large to ignore.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want telehealth-only access with mail-order delivery — all of our verified compounded providers are fully telemedicine-based.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You understand and accept the current regulatory uncertainty and want to proceed under physician supervision.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want the flexibility of custom dosing or faster titration schedules not available with fixed Lilly pens.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want access to a broader telehealth wellness menu (NAD+, TRT, etc.) from the same provider — TMates offers this.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROVIDER OPTIONS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Where to Get Compounded Tirzepatide
            </h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              All providers below offer compounded tirzepatide via telehealth with licensed prescribers. Pricing Gronk-verified May 2026.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {/* TMates */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">TMates</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">Best Price (12-mo)</span>
                </div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  $167/mo on 12-month plan ($1,999 upfront). $297/mo month-to-month. Same-price-all-doses. Also offers NAD+, TRT, and ED treatment.
                </p>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-orange-dark"
                >
                  Visit TMates <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Eden Health */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">NAD+ Ecosystem</span>
                </div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  $229–$249/mo for compounded tirzepatide. Strong NAD+ stack integration. Verified Katalys-active program.
                </p>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit Eden Health <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* MEDVi */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">MEDVi</h3>
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-800">Editor&rsquo;s Pick</span>
                </div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  $229–$299/mo (Gronk-verified). Highest brand-search volume in our stack (33K/mo) — largest verified patient base signal.
                </p>
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit MEDVi <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Embody */}
              <div className="rounded-xl border border-glp1-charcoal/10 bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-glp1-charcoal">Embody</h3>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Lowest First Month</span>
                </div>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  $149 first month (Spring Forward promo), then $299/mo flat. Also offers GLP-1 gum (chewable tirzepatide) — unique format.
                </p>
                <a
                  href={embodyUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-glp1-charcoal-dark"
                >
                  Visit Embody <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/best-compounded-tirzepatide"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
              >
                See the full ranked list → Best Compounded Tirzepatide 2026 <ArrowRight className="h-4 w-4" />
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
                  <summary className="cursor-pointer font-semibold text-glp1-charcoal">
                    {q.name}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-glp1-charcoal/85">
                    {q.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-8 border-t border-glp1-charcoal/10 pt-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/tirzepatide-vs-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Tirzepatide vs Semaglutide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compounded-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Compounded Tirzepatide Guide <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/zepbound-vs-wegovy"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Zepbound vs Wegovy <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* YMYL compliance: editorial review box */}
      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />

      <GLP1Footer />
    </GLP1Layout>
  );
}
