import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Award,
  AlertCircle,
  ExternalLink,
  Calendar,
  TrendingDown,
} from 'lucide-react';

// =============================================================================
// /compare/trimrx-vs-medvi  (KD 0, 600 vol — Tier A capturable SERP)
// =============================================================================
// TrimRx vs MEDVi: two mid-tier compounded GLP-1 telehealth providers with the
// highest organic brand-search volumes in our stack outside TMates/Embody.
// TrimRx: $179/mo entry (site-crawled, SPA-blocked catalog). Full verification
// pending manual screenshot. MEDVi: $179-$299 range Gronk-verified May 2026.
//
// Neither provider has an active affiliate program in our current stack (both
// pending). This page captures branded comparison searches while programs are
// approved; UTM links point to brand sites with tracking params.
// =============================================================================

export const metadata: Metadata = {
  title: 'TrimRx vs MEDVi 2026: Which Compounded GLP-1 Telehealth Is Better? | GLP1CompareHub',
  description:
    'TrimRx vs MEDVi compared head-to-head: pricing, medications, formats, and who should pick which. Verified pricing May 2026. Both offer compounded semaglutide starting at $179/mo.',
  alternates: { canonical: 'https://glp1comparehub.com/compare/trimrx-vs-medvi' },
  openGraph: {
    title: 'TrimRx vs MEDVi 2026: Compounded GLP-1 Head-to-Head',
    description:
      'Two of the highest brand-search-volume compounded GLP-1 providers compared on price, medications, and patient fit. Verified pricing, May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/trimrx-vs-medvi',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare Providers', item: 'https://glp1comparehub.com/compare' },
    { '@type': 'ListItem', position: 3, name: 'TrimRx vs MEDVi', item: 'https://glp1comparehub.com/compare/trimrx-vs-medvi' },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TrimRx vs MEDVi 2026: Which Compounded GLP-1 Telehealth Program Is Better?',
  description:
    'Head-to-head review of TrimRx and MEDVi — two mid-tier compounded GLP-1 telehealth providers with the highest organic brand-search volumes in our stack. Verified pricing, May 2026.',
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
    '@id': 'https://glp1comparehub.com/compare/trimrx-vs-medvi',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper, TrimRx or MEDVi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both start at approximately $179/mo for compounded semaglutide. MEDVi pricing is Gronk-verified at $179–$249/mo for semaglutide and $229–$299/mo for tirzepatide. TrimRx lists "from $179/mo" on its site (crawled May 2026) but its full catalog is rendered via JavaScript and requires manual verification — confirmed pricing tiers beyond the entry point are not yet available. For fully verified pricing tiers, MEDVi currently has more transparent published data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do both TrimRx and MEDVi offer compounded tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi offers compounded tirzepatide at $229–$299/mo (Gronk-verified May 2026). TrimRx\'s tirzepatide offering and pricing require manual verification — its SPA-based site prevents automated catalog extraction. If tirzepatide is your medication of interest, MEDVi is the better-verified option between these two.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has more brand recognition, TrimRx or MEDVi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi has significantly higher organic brand-search volume — approximately 33,000 monthly searches on "medvi" and 27,000+ on "medvi reviews" per Ahrefs data. TrimRx shows 2,700 monthly searches on "trimrx" and 3,000 on "trimrx reviews." Higher brand-search volume generally indicates a larger existing patient base and stronger word-of-mouth, both trust signals for prospective patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TrimRx or MEDVi a legitimate telehealth provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are legitimate telehealth weight-loss programs offering compounded GLP-1 medications through licensed providers. Compounded semaglutide and tirzepatide are legal to prescribe under 503A compounding pharmacy rules during shortage periods, though the FDA has increased enforcement scrutiny in 2025–2026. As with all GLP-1 telehealth programs, patients should verify current compliance status and consult a physician before starting any weight-loss medication.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do TrimRx and MEDVi compare to lower-cost alternatives like GobyMeds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GobyMeds offers compounded semaglutide starting at $99/mo — substantially below either TrimRx ($179+) or MEDVi ($179–$249). If lowest price is the primary decision factor and you qualify, GobyMeds or Strut Health ($99/mo) represent better entry points. TrimRx and MEDVi sit in the mid-tier of our verified stack and compete more on brand trust and program depth than raw price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which provider should I pick between TrimRx and MEDVi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEDVi is our editorial pick for this comparison. It offers Gronk-verified pricing tiers for both semaglutide and tirzepatide, has substantially higher brand-search volume (a proxy for patient base and trust), and carries an "Editor\'s Pick" designation in our provider database. TrimRx may be worth considering if its full catalog — once manually verified — reveals competitive pricing tiers, but the current data gap makes MEDVi the more transparent choice.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  trimrx: string;
  medvi: string;
  winner?: 'trimrx' | 'medvi' | 'tie';
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — entry price',
    trimrx: 'From $179/mo (catalog VERIFY)',
    medvi: '$179–$249/mo (Gronk-verified May 2026)',
    winner: 'medvi',
  },
  {
    label: 'Compounded Tirzepatide',
    trimrx: 'VERIFY (SPA-blocked catalog)',
    medvi: '$229–$299/mo (Gronk-verified May 2026)',
    winner: 'medvi',
  },
  {
    label: 'Pricing transparency',
    trimrx: 'SPA-rendered site limits public catalog access',
    medvi: 'Range published; full tier table requires live login',
    winner: 'medvi',
  },
  {
    label: 'Dose-escalation upcharge',
    trimrx: 'VERIFY',
    medvi: 'VERIFY (range-based pricing implies tiered)',
    winner: 'tie',
  },
  {
    label: 'Cancellation policy',
    trimrx: 'VERIFY',
    medvi: 'Anytime',
    winner: 'medvi',
  },
  {
    label: 'Includes physician consult',
    trimrx: 'Yes',
    medvi: 'Yes',
    winner: 'tie',
  },
  {
    label: 'Labs included',
    trimrx: 'VERIFY',
    medvi: 'Not included (standard for this tier)',
    winner: 'tie',
  },
  {
    label: 'Brand search volume (Ahrefs)',
    trimrx: '~2,700/mo on "trimrx"',
    medvi: '~33,000/mo on "medvi" — highest in our stack',
    winner: 'medvi',
  },
  {
    label: 'Active affiliate program',
    trimrx: 'Pending (Everflow direct)',
    medvi: 'Pending (Katalys)',
    winner: 'tie',
  },
  {
    label: 'Category / positioning',
    trimrx: 'Weight-loss program with GLP-1 medication',
    medvi: 'Reliable mid-tier compounded GLP-1',
    winner: 'tie',
  },
  {
    label: 'Editorial badge',
    trimrx: 'None currently assigned',
    medvi: "Editor's Pick (GLP1CompareHub)",
    winner: 'medvi',
  },
];

export default function TrimRxVsMedviPage() {
  const trimrxUrl = buildGlp1AffiliateUrl('trimrx', 'trimrx-vs-medvi');
  const medviUrl = buildGlp1AffiliateUrl('medvi', 'trimrx-vs-medvi');

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

      {/* CRO: sticky mobile CTA — routes to our editorial pick (MEDVi) */}
      <StickyMobileCTA
        href={medviUrl}
        brandName="MEDVi"
        pricePitch="Our pick — from $179/mo, sema + tirz"
      />

      {/* YMYL compliance: medical / FDA disclaimer banner */}
      <MedicalDisclaimerBanner />

      <main className="bg-glp1-cream">
        {/* ============ HERO ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
            <Link
              href="/providers"
              className="mb-4 inline-flex items-center gap-1.5 text-sm text-glp1-charcoal/70 hover:text-glp1-charcoal"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Providers
            </Link>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-orange">
              <Award className="h-3.5 w-3.5" /> Head-to-Head Comparison
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              TrimRx vs MEDVi 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Two of the highest-traffic compounded GLP-1 telehealth brands compared head-to-head. Both start at $179/mo — but the data tells a clear story on which one is better verified and more transparent.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <span>MEDVi pricing Gronk-verified May 2026</span>
              <span>TrimRx entry price site-crawled May 2026</span>
            </div>

            {/* Data caveat banner */}
            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <strong>Verification note:</strong> TrimRx's website renders product catalog via JavaScript — our crawler captures the entry price ($179/mo) but cannot extract the full dose/plan breakdown. Full TrimRx pricing details require manual login verification. MEDVi pricing is Gronk-verified. We flag unverified cells as <span className="font-semibold">VERIFY</span> in the comparison table below.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* MEDVi card — editorial pick */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">MEDVi</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Editor&rsquo;s Pick
                  </span>
                </div>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Best for patients who want a verified mid-tier provider with transparent pricing for both semaglutide and tirzepatide. Highest brand-search volume in our verified stack.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Semaglutide $179–$249/mo (Gronk-verified)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Tirzepatide $229–$299/mo (Gronk-verified)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>33,000 monthly brand searches — largest patient base signal</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Cancel anytime</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Physician-supervised program</span></li>
                </ul>
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit MEDVi <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* TrimRx card */}
              <div className="rounded-xl border-2 border-glp1-charcoal/15 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">TrimRx</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">
                    Pending Verification
                  </span>
                </div>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Entry-level pricing starts at $179/mo. Strong organic search traffic suggests real patient volume, but the full product catalog requires manual verification.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>From $179/mo entry (site-crawled May 2026)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>2,700+ monthly brand searches</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Physician-supervised program</span></li>
                  <li className="flex gap-2 opacity-60"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" /><span>Full dose/plan catalog requires manual verification</span></li>
                  <li className="flex gap-2 opacity-60"><AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" /><span>Tirzepatide availability/pricing unconfirmed</span></li>
                </ul>
                <a
                  href={trimrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit TrimRx <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DETAILED COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              MEDVi data is Gronk-verified (May 2026). TrimRx data is sourced from site crawl where possible; unverifiable fields are marked VERIFY.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">MEDVi</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">TrimRx</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td className={`px-4 py-3 ${row.winner === 'medvi' ? 'font-semibold text-green-700' : 'text-glp1-charcoal/80'}`}>
                        {row.medvi}
                      </td>
                      <td className={`px-4 py-3 ${row.winner === 'trimrx' ? 'font-semibold text-green-700' : row.trimrx.includes('VERIFY') ? 'italic text-yellow-700' : 'text-glp1-charcoal/80'}`}>
                        {row.trimrx}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ PRICING DEEP DIVE ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Pricing Deep Dive</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">MEDVi — Verified Range</h3>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  MEDVi pricing is Gronk-verified as of May 2026. They publish a price range; exact per-dose tier structure requires live account access.
                </p>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Compounded Semaglutide
                  </div>
                  <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                    <li>Range: <strong>$179–$249/mo</strong></li>
                    <li>All doses included in plan (no upcharge — VERIFY)</li>
                    <li>Physician consult included</li>
                  </ul>
                  <div className="mt-4 mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">
                    Compounded Tirzepatide
                  </div>
                  <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                    <li>Range: <strong>$229–$299/mo</strong></li>
                    <li>Full dose escalation schedule: VERIFY</li>
                    <li>Cancel anytime confirmed</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">TrimRx — Entry Data Only</h3>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  TrimRx's website is a JS-rendered SPA. Our crawler confirmed the entry-tier headline but cannot extract the full dose or plan catalog without a live authenticated session.
                </p>
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-yellow-800">
                    What We Can Confirm
                  </div>
                  <ul className="space-y-1.5 text-sm text-yellow-900">
                    <li>Entry price: <strong>from $179/mo</strong> (site meta, May 2026)</li>
                    <li>Physician consult: <strong>included</strong></li>
                    <li>Tirzepatide availability: <strong>unconfirmed</strong></li>
                    <li>Plan structure / tiers: <strong>VERIFY</strong></li>
                    <li>Dose-escalation upcharges: <strong>VERIFY</strong></li>
                  </ul>
                  <div className="mt-4 text-xs text-yellow-800">
                    If you need full pricing clarity before committing, visit trimrx.com directly and walk through the intake quiz.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-5">
              <div className="flex items-start gap-2">
                <TrendingDown className="h-5 w-5 text-glp1-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="mb-2 font-serif text-lg text-glp1-charcoal">
                    Looking for lower prices? Consider these alternatives.
                  </h4>
                  <p className="text-sm text-glp1-charcoal/85">
                    Both TrimRx and MEDVi sit in the $179–$299/mo mid-tier. If price is your primary driver, several providers in our verified stack offer lower entry points:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-glp1-charcoal/80">
                    <li><strong>Strut Health</strong> — $99/mo compounded semaglutide (Gronk-verified)</li>
                    <li><strong>GobyMeds</strong> — $99/mo entry (public affiliate program)</li>
                    <li><strong>TMates</strong> — $158/mo on 12-month plan (verified, #1 EPC in our Katalys stack)</li>
                  </ul>
                  <div className="mt-3 flex gap-3">
                    <Link
                      href="/best-compounded-semaglutide"
                      className="text-sm font-semibold text-glp1-orange hover:underline"
                    >
                      See our ranked list → Best Compounded Semaglutide 2026
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BRAND STRENGTH ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Brand Search Volume: What It Tells You
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              When patients search directly for a provider by name, it signals real-world patient volume — not just marketing spend. High brand search = more people have heard of it, used it, or been referred to it.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">MEDVi — 33K Monthly Brand Searches</h3>
                <p className="text-sm text-glp1-charcoal/80 mb-3">
                  MEDVi has the highest organic brand-search volume of any provider in our verified GLP-1 stack — approximately 33,000 monthly searches on &ldquo;medvi&rdquo; and 27,000+ on &ldquo;medvi reviews&rdquo; (Ahrefs May 2026). This is a meaningful trust proxy.
                </p>
                <p className="text-sm text-glp1-charcoal/70">
                  <strong>Implication:</strong> A large existing patient base suggests operational scale, a working prescription workflow, and enough satisfied patients to drive word-of-mouth. For prospective patients, it lowers the perceived risk of joining.
                </p>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">TrimRx — 2,700 Monthly Brand Searches</h3>
                <p className="text-sm text-glp1-charcoal/80 mb-3">
                  TrimRx shows 2,700 monthly searches on &ldquo;trimrx&rdquo; and 3,000 on &ldquo;trimrx reviews&rdquo; (Ahrefs May 2026). Meaningful but substantially smaller than MEDVi. The &ldquo;reviews&rdquo; search volume ratio (3,000 vs 2,700 brand) suggests patients actively seek social proof before committing.
                </p>
                <p className="text-sm text-glp1-charcoal/70">
                  <strong>Implication:</strong> Smaller brand footprint doesn&rsquo;t mean worse service — it may mean a newer or more narrowly-marketed provider. But it does mean less independent verification of patient outcomes is available online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHO SHOULD PICK WHICH ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Who Should Pick Which?</h2>

            <div className="space-y-6">
              <div className="rounded-lg border-l-4 border-glp1-orange bg-glp1-orange/5 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Pick MEDVi if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want a verified pricing range before starting the intake process — MEDVi publishes $179–$249 sema and $229–$299 tirz publicly.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want compounded tirzepatide — MEDVi pricing is confirmed; TrimRx availability is not.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You value a larger, more established patient community as a trust signal.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want &ldquo;cancel anytime&rdquo; confirmed explicitly — MEDVi states this publicly.</span></li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-glp1-charcoal bg-glp1-cream/40 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Consider TrimRx if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You&rsquo;ve seen positive reviews for TrimRx specifically from your network or community — word-of-mouth from known patients is strong signal.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You&rsquo;re willing to go through the intake quiz to get fully personalized pricing, and you find MEDVi&rsquo;s online UX less convenient.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>TrimRx&rsquo;s catalog turns out to be competitively priced once you complete their intake — our current data gap leaves this open.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ THE VERDICT ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">Our Verdict</h2>

            <div className="rounded-xl bg-white p-6 shadow-sm border border-glp1-charcoal/10">
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>MEDVi is our editorial pick for this comparison.</strong> With Gronk-verified pricing for both semaglutide ($179–$249/mo) and tirzepatide ($229–$299/mo), a published cancel-anytime policy, and the highest brand-search volume in our verified stack (33K monthly), MEDVi wins on data transparency and trust signal.
              </p>
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>TrimRx is a legitimate provider with real patient volume</strong> — the 2,700 monthly brand searches and high review search ratio confirm this. But its SPA-based site prevents us from verifying the full pricing catalog, tirzepatide availability, or dose-escalation policies. Until we can manually verify, we cannot make a confident recommendation on TrimRx pricing tiers.
              </p>
              <p className="text-lg text-glp1-charcoal/90">
                <strong>For patients comparing these two specifically:</strong> Start with MEDVi if you want confirmed pricing upfront. If you&rsquo;re curious about TrimRx, go through their intake quiz — the price you&rsquo;re quoted after the medical profile may be competitive with or below the MEDVi range, depending on your dose needs.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={medviUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit MEDVi <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={trimrxUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit TrimRx <ArrowRight className="h-4 w-4" />
                </a>
              </div>
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
                  href="/best-compounded-tirzepatide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Best Compounded Tirzepatide 2026 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/best-compounded-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Best Compounded Semaglutide 2026 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tirzepatide-vs-semaglutide"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
                >
                  Tirzepatide vs Semaglutide <ArrowRight className="h-4 w-4" />
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
