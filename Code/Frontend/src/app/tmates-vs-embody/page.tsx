import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Award,
  TrendingDown,
  AlertCircle,
  ExternalLink,
  Calendar,
} from 'lucide-react';

// =============================================================================
// /tmates-vs-embody
// =============================================================================
// Head-to-head between the #1 highest-EPC ($16.09) and #3 highest-EPC ($4.72)
// programs in our verified Katalys stack. Both compounded-only, both active,
// both Katalys-tracked. Capturable SERP — neither brand has high own-name
// search competition, so an affiliate site can legitimately reach top-3.
//
// Pricing verified live at tmates.com + joinem.co on 2026-05-06.
// =============================================================================

export const metadata: Metadata = {
  title: 'TMates vs Embody 2026: Which Compounded GLP-1 Telehealth Wins? | GLP1CompareHub',
  description:
    'TMates ($158-$297/mo same price all doses) vs Embody ($149 first month, $299 flat refills) compared head-to-head. Pricing, formats, conversion data, and who should pick which.',
  alternates: { canonical: 'https://glp1comparehub.com/tmates-vs-embody' },
  openGraph: {
    title: 'TMates vs Embody 2026: Compounded GLP-1 Head-to-Head',
    description:
      'Two top-rated compounded GLP-1 telehealth providers compared on price, formats, dosing flexibility, and customer experience. Verified pricing, May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/tmates-vs-embody',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TMates vs Embody 2026: Which Compounded GLP-1 Telehealth Program Wins?',
  description:
    'Head-to-head review of TMates and Embody — two compounded GLP-1 telehealth providers. Pricing, dosing structure, format options (injectable + oral + gum), and a verdict on who should pick which.',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/tmates-vs-embody',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper for compounded semaglutide, TMates or Embody?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on commitment length. Embody costs $149 the first month (with the Spring Forward $200-off promo) and then $299/month flat for refills. TMates starts at $249 for a single month but drops to $158/month on a 12-month plan. Crossover: month-to-month is cheaper at Embody ($299 vs $249); 6-month is roughly equivalent ($299 vs $175); 12-month is dramatically cheaper at TMates ($158 vs $299 — a $1,692/year difference).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TMates or Embody have a needle-free GLP-1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. TMates offers oral semaglutide and oral tirzepatide (alongside injectables) at the same price as the injectable — a unique value proposition. Embody offers a GLP-1 chewing gum format (oral chewable tirzepatide), which is unique to Embody and the only gum-format GLP-1 in our verified Katalys stack. Patients with strong needle aversion may prefer the gum format; patients wanting traditional oral drops should look at TMates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has better customer conversion data, TMates or Embody?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMates has the higher EPC ($16.09 vs $4.72) and higher conversion rate (6.43% vs 1.38%) in our Katalys partner data as of May 2026. Both are real, paying customer programs — these are not estimates. The gap suggests TMates has a more compelling intake-to-purchase funnel (likely driven by transparent same-price-all-doses pricing and the visible 1/3/6/12-month plan structure).',
      },
    },
    {
      '@type': 'Question',
      name: 'Are TMates and Embody both compounded or branded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are compounded-only telehealth providers. Neither carries branded Wegovy, Zepbound, Mounjaro, or Ozempic. Compounded semaglutide and tirzepatide are produced by 503A or 503B compounding pharmacies and are typically 60-90% cheaper than branded equivalents. Patients who specifically want FDA-approved branded GLP-1 should look at Eden Health, Ivim Health, or Ro instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TMates or Embody charge dose-escalation fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither. Both providers charge a flat price regardless of dose. TMates explicitly markets "Same Price All Doses" across semaglutide (0.25mg–2.4mg) and tirzepatide (2.5mg–15mg). Embody uses a flat $299/month refill price after the first month. This is a meaningful differentiator vs providers that charge more as patients titrate up — a common GLP-1 compounded-telehealth pricing gotcha.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  tmates: string;
  embody: string;
  winner?: 'tmates' | 'embody' | 'tie';
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — entry price',
    tmates: '$249/mo (1-month plan, any dose)',
    embody: '$149 first month, then $299/mo flat',
    winner: 'embody',
  },
  {
    label: 'Compounded Semaglutide — 12-month price',
    tmates: '$158/mo ($1,900 paid upfront, save 37%)',
    embody: '$299/mo (no long-term discount)',
    winner: 'tmates',
  },
  {
    label: 'Compounded Tirzepatide — entry price',
    tmates: '$297/mo (1-month plan)',
    embody: '$299/mo flat (after $149 first month)',
    winner: 'tie',
  },
  {
    label: 'Compounded Tirzepatide — 12-month price',
    tmates: '$167/mo ($1,999 upfront, save 44%)',
    embody: '$299/mo flat (no long-term discount)',
    winner: 'tmates',
  },
  {
    label: 'Dose-escalation upcharge?',
    tmates: 'No — same price all doses',
    embody: 'No — flat $299/mo refills',
    winner: 'tie',
  },
  {
    label: 'Available formats',
    tmates: 'Injectable + Oral (drops)',
    embody: 'Injectable + GLP-1 Gum (chewable)',
    winner: 'tie',
  },
  {
    label: 'Plan length flexibility',
    tmates: '1, 3, 6, or 12 months',
    embody: 'Monthly subscription only',
    winner: 'tmates',
  },
  {
    label: 'Other treatments offered',
    tmates: 'NAD+, TRT, ED, Skin, Hair Loss',
    embody: 'GLP-1 only (focused)',
    winner: 'tmates',
  },
  {
    label: 'Active promo (May 2026)',
    tmates: 'No standalone promo — discount built into longer plans',
    embody: 'Spring Forward: $200 off first month + free expedited shipping',
    winner: 'embody',
  },
  {
    label: 'Cancellation',
    tmates: 'Cancel anytime',
    embody: 'Pause anytime',
    winner: 'tie',
  },
  {
    label: 'HSA/FSA eligible',
    tmates: 'Verify on tmates.com',
    embody: 'Yes (eligible)',
    winner: 'embody',
  },
  {
    label: 'Customer base size',
    tmates: '2,400+ patients',
    embody: 'Not publicly disclosed',
    winner: 'tmates',
  },
  {
    label: 'Realized EPC (Katalys May 2026)',
    tmates: '$16.09 — #1 highest in our entire Katalys account',
    embody: '$4.72',
    winner: 'tmates',
  },
  {
    label: 'Realized conversion rate (Katalys May 2026)',
    tmates: '6.43%',
    embody: '1.38%',
    winner: 'tmates',
  },
];

export default function TMatesVsEmbodyPage() {
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'tmates-vs-embody');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'tmates-vs-embody');

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
              TMates vs Embody 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Two compounded GLP-1 telehealth programs with different pricing philosophies. Same-price-all-doses month-to-month vs flat refill pricing — and the data on which one converts better.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-glp1-charcoal/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Updated May 6, 2026
              </span>
              <span>Pricing crawled live from tmates.com + joinem.co</span>
              <span>Conversion data from Katalys partner dashboard</span>
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              At a Glance
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* TMates card */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">TMates</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Best Overall
                  </span>
                </div>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Best for shoppers committing 6+ months. Same price across all doses. Multi-vertical: also offers NAD+, TRT, ED, hair loss.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Semaglutide $158–$249/mo (12-mo plan = lowest)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Tirzepatide $167–$297/mo (12-mo plan = lowest)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Same price all doses (no titration upcharge)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Injectable + oral formats</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>2,400+ patients, free shipping, cancel anytime</span></li>
                </ul>
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit TMates <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Embody card */}
              <div className="rounded-xl border-2 border-glp1-charcoal/15 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Embody</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">
                    Best for First Month
                  </span>
                </div>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Best for patients who want flat refill pricing and a needle-free GLP-1 gum option. No long-term commitment required.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>$149 first month (Spring Forward $200 off)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Flat $299/mo refills (no escalation fees)</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>GLP-1 Gum (oral chewable tirzepatide) — unique</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>HSA/FSA eligible</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600" /><span>Pause anytime</span></li>
                </ul>
                <a
                  href={embodyUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit Embody <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DETAILED COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">
              The Full Side-by-Side
            </h2>
            <p className="mb-6 text-sm text-glp1-charcoal/70">
              Every claim in this table is sourced to either a live brand-site crawl (May 6, 2026) or our Katalys partner dashboard. No estimates.
            </p>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">TMates</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Embody</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td className={`px-4 py-3 ${row.winner === 'tmates' ? 'font-semibold text-green-700' : 'text-glp1-charcoal/80'}`}>
                        {row.tmates}
                      </td>
                      <td className={`px-4 py-3 ${row.winner === 'embody' ? 'font-semibold text-green-700' : 'text-glp1-charcoal/80'}`}>
                        {row.embody}
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
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">TMates Tiered Plans</h3>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  TMates uses commitment-based discounts: the longer you commit upfront, the lower your effective monthly price. All dosages are the same price within a plan.
                </p>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Compounded Semaglutide</div>
                  <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                    <li>1 month — <strong>$249</strong></li>
                    <li>3 months — <strong>$650</strong> ($217/mo, save 13%)</li>
                    <li>6 months — <strong>$1,050</strong> ($175/mo, save 30%)</li>
                    <li>12 months — <strong>$1,900</strong> ($158/mo, save 37%)</li>
                  </ul>
                  <div className="mt-4 mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Compounded Tirzepatide</div>
                  <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                    <li>1 month — <strong>$297</strong></li>
                    <li>3 months — <strong>$800</strong> ($267/mo, save 10%)</li>
                    <li>6 months — <strong>$1,299</strong> ($217/mo, save 27%)</li>
                    <li>12 months — <strong>$1,999</strong> ($167/mo, save 44%)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Embody Flat Pricing</h3>
                <p className="mb-3 text-sm text-glp1-charcoal/70">
                  Embody uses simple two-tier pricing: discounted first month, then flat refills regardless of dose escalation. No long-term commitment required.
                </p>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/30 p-4">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Both Sema + Tirz (Compounded)</div>
                  <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                    <li>First month — <strong>$149</strong> (with Spring Forward $200 off)</li>
                    <li>All refills — <strong>$299/mo flat</strong></li>
                    <li>GLP-1 Gum (chewable tirz) — verify on joinem.co</li>
                  </ul>
                  <div className="mt-4 rounded bg-yellow-50 p-3 text-xs text-yellow-900">
                    <strong>Trade-off:</strong> Lowest first-month entry in stack ($149), but month-to-month pricing is more expensive long-term than TMates 12-month plan.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-5">
              <h4 className="mb-2 font-serif text-lg text-glp1-charcoal">12-Month Cost Comparison</h4>
              <p className="text-sm text-glp1-charcoal/85">
                If you commit to a full year of compounded semaglutide:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-glp1-charcoal/85">
                <li><strong>TMates 12-month plan:</strong> $1,900 total ($158/mo)</li>
                <li><strong>Embody monthly:</strong> $149 + ($299 × 11) = $3,438 total ($286/mo average)</li>
                <li><strong>Difference:</strong> $1,538 saved on TMates over 12 months</li>
              </ul>
              <p className="mt-3 text-xs text-glp1-charcoal/60">
                Trade-off: TMates requires the full $1,900 upfront. Embody is $149 to start with no long-term commitment.
              </p>
            </div>
          </div>
        </section>

        {/* ============ FORMAT OPTIONS ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Format Options: Injection, Oral, or Gum
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              Both providers go beyond standard injectable GLP-1, but in different directions:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">TMates: Injectable + Oral Drops</h3>
                <p className="text-sm text-glp1-charcoal/80">
                  TMates offers the same medication (semaglutide or tirzepatide) in <strong>both injectable and oral drop formats at the same price</strong>. Patients can switch between formats month-to-month. The oral drop format is taken sublingually (under the tongue).
                </p>
                <p className="mt-3 text-sm text-glp1-charcoal/70">
                  <strong>Best for:</strong> Patients with mild-to-moderate needle aversion who still want a familiar drop-format alternative; patients who want the option to switch formats.
                </p>
              </div>

              <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Embody: Injectable + GLP-1 Gum</h3>
                <p className="text-sm text-glp1-charcoal/80">
                  Embody is the only verified provider in our stack offering <strong>compounded tirzepatide in a chewable gum format</strong>. The gum is a daily oral alternative to weekly injections — meant for patients with strong needle aversion.
                </p>
                <p className="mt-3 text-sm text-glp1-charcoal/70">
                  <strong>Best for:</strong> Patients with severe needle aversion who want a needle-free GLP-1 option, even if absorption efficiency may differ from injectable.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
              <div className="mb-1 flex items-center gap-1.5 font-semibold">
                <AlertCircle className="h-4 w-4" /> Important caveat on non-injectable GLP-1
              </div>
              Clinical evidence for compounded oral and gum formats of GLP-1 medications is significantly less robust than for FDA-approved injectables. Bioavailability and dose-response data for these alternative formats are largely from manufacturer claims rather than peer-reviewed trials. If clinically-proven efficacy is your priority, injectable remains the gold standard.
            </div>
          </div>
        </section>

        {/* ============ WHO SHOULD PICK WHICH ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Who Should Pick Which?</h2>

            <div className="space-y-6">
              <div className="rounded-lg border-l-4 border-glp1-orange bg-glp1-orange/5 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Pick TMates if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You're committed to compounded GLP-1 long-term and can pay $1,900 upfront for the 12-month plan ($158/mo average — among the lowest verified rates).</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want oral drop format alongside injectable at the same price.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want one provider for GLP-1 + NAD+, TRT, ED, or hair loss (multi-vertical).</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You're titrating up and want to avoid dose-escalation upcharges.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You value being on the highest-converting funnel in the verified stack (6.43% CR — Katalys data).</span></li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-glp1-charcoal bg-glp1-cream/40 p-5">
                <h3 className="mb-2 font-serif text-xl text-glp1-charcoal">Pick Embody if:</h3>
                <ul className="space-y-1.5 text-sm text-glp1-charcoal/85">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want the lowest first-month entry price ($149 with Spring Forward $200 off).</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You don't want to commit to a multi-month plan upfront.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You have severe needle aversion and want to try the GLP-1 gum format.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>You want predictable flat $299/mo refill pricing without dose-escalation surprises.</span></li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-green-600 mt-0.5" /><span>HSA/FSA eligibility is important to you (Embody confirms; TMates verify).</span></li>
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
                <strong>For most shoppers, TMates is our top pick</strong> — the 12-month plan delivers $158/mo semaglutide and $167/mo tirzepatide (among the lowest verified GLP-1 prices in our entire stack), the same-price-all-doses pricing eliminates titration upcharges, and the multi-vertical menu (NAD+, TRT, ED, hair) means one provider for several conditions.
              </p>
              <p className="mb-4 text-lg text-glp1-charcoal/90">
                <strong>Embody wins on first-month entry and needle-free options.</strong> The $149 first-month price with Spring Forward is the lowest entry in our verified stack, the GLP-1 gum is a genuinely unique format for needle-averse patients, and the flat $299 refill pricing is honest and simple.
              </p>
              <p className="text-lg text-glp1-charcoal/90">
                <strong>The data also tells a story:</strong> TMates' 6.43% conversion rate vs Embody's 1.38% (Katalys May 2026) suggests TMates' transparent tiered-pricing funnel converts better than Embody's promo-driven first-month hook. Real customer behavior is voting with checkout completions.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={tmatesUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit TMates <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={embodyUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-3 font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit Embody <ArrowRight className="h-4 w-4" />
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

            <div className="mt-8 border-t border-glp1-charcoal/10 pt-6 text-center">
              <Link
                href="/providers"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-glp1-orange hover:underline"
              >
                See all GLP-1 providers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
