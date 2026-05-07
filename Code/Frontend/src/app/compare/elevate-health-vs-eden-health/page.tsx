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
import { ArrowRight, Check, X, Minus, ExternalLink, Award, AlertCircle } from 'lucide-react';

// =============================================================================
// /compare/elevate-health-vs-eden-health
// =============================================================================
// Elevate Health: all pricing VERIFY (no confirmed data)
// Eden Health: $229–$299/mo VERIFIED, metabolic bloodwork at intake, physician-
//   supervised, established brand, strong trust signals
// Clear winner: Eden Health. Verified pricing + bloodwork + clinical structure
// StickyMobileCTA → Eden Health
// =============================================================================

export const metadata: Metadata = {
  title: 'Elevate Health vs Eden Health 2026: Which GLP-1 Program Is Better? | GLP1CompareHub',
  description:
    'Elevate Health vs Eden Health compared: Eden Health wins with verified pricing ($229–$299/mo), metabolic bloodwork included at intake, and physician-supervised clinical structure. Elevate Health pricing requires direct verification.',
  alternates: { canonical: 'https://glp1comparehub.com/compare/elevate-health-vs-eden-health' },
  openGraph: {
    title: 'Elevate Health vs Eden Health 2026: Clear Winner',
    description:
      'Eden Health wins on every verifiable dimension: confirmed pricing, bloodwork at intake, and established clinical brand. Elevate Health pricing is unverified. Full breakdown.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/compare/elevate-health-vs-eden-health',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare Providers', item: 'https://glp1comparehub.com/compare' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Elevate Health vs Eden Health',
      item: 'https://glp1comparehub.com/compare/elevate-health-vs-eden-health',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Elevate Health vs Eden Health 2026: Which Compounded GLP-1 Program Is Better?',
  description:
    'Eden Health beats Elevate Health on every confirmed dimension: verified pricing at $229–$299/mo, metabolic bloodwork included at intake, physician-supervised program, and established clinical brand. Elevate Health pricing is unverified.',
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
    '@id': 'https://glp1comparehub.com/compare/elevate-health-vs-eden-health',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does Eden Health cost vs Elevate Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health compounded semaglutide costs $229–$249/mo and tirzepatide $249–$299/mo — both Gronk-verified May 2026. Elevate Health pricing has not been confirmed through our independent verification process. If cost is your primary consideration, Eden Health gives you a verified number to work with. You\'ll need to visit elevatehealth.com to get a direct quote and compare it against Eden\'s confirmed pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Eden Health include bloodwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health includes a comprehensive metabolic panel (bloodwork) at intake as part of their standard program. This is one of the key differentiators in this comparison — most compounded GLP-1 telehealth programs at similar price points do not include labs. Elevate Health\'s lab inclusion status requires direct verification. If metabolic bloodwork at intake matters to you, Eden Health is currently the clearest option in our stack for that feature.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Eden Health the editorial pick in this comparison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health wins this comparison for three reasons: (1) Verified pricing — $229–$299/mo confirmed through Gronk, so you know what you\'re paying before starting intake. (2) Metabolic bloodwork at intake — included in the standard program, a clinical safety step that differentiates Eden Health from most mid-tier providers. (3) Established brand — Eden Health is a well-recognized clinical telehealth brand with physician-supervised protocols. Elevate Health cannot be fairly compared without confirmed pricing and program details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Eden Health a legitimate company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health is an established telehealth company that has operated for several years in the clinical wellness and weight-loss space. Their GLP-1 program is physician-supervised and uses 503A compounding pharmacies. They are one of the more recognized names in the compounded GLP-1 telehealth space. As with any telehealth provider, verify their current licensed prescriber network in your state during intake.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Eden Health offer tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eden Health offers compounded tirzepatide at $249–$299/mo (Gronk-verified May 2026), in addition to compounded semaglutide at $229–$249/mo. This positions Eden Health as one of the more complete mid-tier options in our stack for patients considering either GLP-1 peptide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Elevate Health worth considering over Eden Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is possible — but we cannot make that case without confirmed Elevate Health pricing and program details. If Elevate Health comes in significantly cheaper than Eden\'s $229/mo entry point with comparable clinical supervision and included services, the value equation might shift. Get a direct quote from Elevate Health and compare it against Eden\'s confirmed $229/mo semaglutide rate. Until we have verified Elevate Health data, Eden Health is the stronger recommendation on the basis of transparent, confirmed pricing.',
      },
    },
  ],
};

interface ComparisonRow {
  label: string;
  elevate: string;
  eden: string;
  winner?: 'elevate' | 'eden' | 'tie';
  elevateVerify?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: 'Compounded Semaglutide — price',
    elevate: 'VERIFY (not confirmed as of May 2026)',
    eden: '$229–$249/mo (Gronk-verified)',
    winner: 'eden',
    elevateVerify: true,
  },
  {
    label: 'Compounded Tirzepatide — price',
    elevate: 'VERIFY (availability not confirmed)',
    eden: '$249–$299/mo (Gronk-verified)',
    winner: 'eden',
    elevateVerify: true,
  },
  {
    label: 'Metabolic bloodwork at intake',
    elevate: 'VERIFY (not confirmed)',
    eden: 'Yes — comprehensive metabolic panel included',
    winner: 'eden',
    elevateVerify: true,
  },
  {
    label: 'Physician consultation',
    elevate: 'VERIFY',
    eden: 'Yes — physician-supervised program',
    winner: 'eden',
    elevateVerify: true,
  },
  {
    label: 'Clinical supervision model',
    elevate: 'VERIFY',
    eden: 'Physician-supervised throughout program',
    winner: 'eden',
    elevateVerify: true,
  },
  {
    label: 'Cancel anytime',
    elevate: 'VERIFY',
    eden: 'Yes',
    winner: 'eden',
    elevateVerify: true,
  },
  {
    label: 'Brand establishment',
    elevate: 'Lower — limited brand data',
    eden: 'Established clinical telehealth brand, multi-year history',
    winner: 'eden',
  },
  {
    label: 'Pricing verification status',
    elevate: 'NOT VERIFIED — check elevatehealth.com directly',
    eden: 'Gronk-verified May 2026',
    winner: 'eden',
    elevateVerify: true,
  },
  {
    label: 'Editorial pick',
    elevate: 'No',
    eden: 'Yes — verified pricing + bloodwork + clinical structure',
    winner: 'eden',
  },
];

export default function ElevateHealthVsEdenHealthPage() {
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'compare-elevate-health-vs-eden-health');
  const elevateUrl = buildGlp1AffiliateUrl('elevate-health', 'compare-elevate-health-vs-eden-health');

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

      {/* Sticky mobile CTA — Eden Health is editorial pick */}
      <StickyMobileCTA
        href={edenUrl}
        brandName="Eden Health"
        pricePitch="Our pick — from $229/mo, bloodwork included"
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
                <li><Link href="/compare" className="hover:text-glp1-charcoal">Compare</Link></li>
                <li aria-hidden>/</li>
                <li className="text-glp1-charcoal/90">Elevate Health vs Eden Health</li>
              </ol>
            </nav>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-glp1-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-glp1-orange">
              <Award className="h-3.5 w-3.5" /> Head-to-Head Comparison
            </div>

            <h1 className="font-serif text-4xl leading-tight text-glp1-charcoal sm:text-5xl">
              Elevate Health vs Eden Health 2026
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-glp1-charcoal/80">
              Eden Health is the clear winner in this comparison. Verified pricing at $229–$299/mo,
              metabolic bloodwork included at intake, and a physician-supervised clinical structure
              that most mid-tier providers don&rsquo;t offer. Elevate Health pricing requires direct
              verification before a meaningful comparison is possible.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk (Eden Health)" />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-300 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                <Check className="h-3.5 w-3.5" /> Bloodwork included at intake
              </span>
            </div>

            <div className="mt-5 rounded-lg border border-glp1-orange/30 bg-glp1-orange/5 p-4 text-sm text-glp1-charcoal/90">
              <strong>Quick verdict:</strong> Eden Health wins this comparison cleanly. Gronk-verified
              pricing, bloodwork at intake, and an established clinical brand. Elevate Health cannot
              be fairly evaluated without confirmed pricing — visit their site for a direct quote and
              compare it against Eden&rsquo;s published $229/mo entry.
            </div>

            <div className="mt-4 text-xs text-glp1-charcoal/50">
              Updated May 6, 2026 &bull;{' '}
              <Link href="/affiliate-disclosure" className="underline hover:text-glp1-charcoal">Affiliate Disclosure</Link>
            </div>
          </div>
        </section>

        {/* ============ AT-A-GLANCE CARDS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">At a Glance</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Elevate Health */}
              <div className="rounded-xl border-2 border-yellow-300/60 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Elevate Health</h3>
                  <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                    Pricing — VERIFY
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">Best for: TBD pending pricing verification</p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Elevate Health is a compounded GLP-1 telehealth provider. Pricing, included
                  services, and clinical supervision details have not been independently verified by
                  our team. Visit elevatehealth.com for a current quote.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Telehealth-based GLP-1 program</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Pricing not confirmed — VERIFY at elevatehealth.com</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Bloodwork inclusion not confirmed</span>
                  </li>
                  <li className="flex gap-2 opacity-70">
                    <AlertCircle className="h-4 w-4 shrink-0 text-yellow-600" />
                    <span className="italic text-yellow-800">Clinical supervision model not confirmed</span>
                  </li>
                </ul>
                <a
                  href={elevateUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-charcoal-dark"
                >
                  Visit Elevate Health (verify pricing) <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Eden Health — editorial pick */}
              <div className="rounded-xl border-2 border-glp1-orange/30 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-glp1-charcoal">Eden Health</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                    Editor&rsquo;s Pick
                  </span>
                </div>
                <p className="mb-1 text-xs text-glp1-charcoal/60">
                  Best for: verified pricing + bloodwork at intake
                </p>
                <p className="mb-4 text-sm text-glp1-charcoal/70">
                  Eden Health is one of the most clinically complete options in the compounded GLP-1
                  telehealth space. Confirmed pricing, metabolic bloodwork included at intake, and a
                  physician-supervised model — three criteria that most mid-tier platforms can&rsquo;t
                  match simultaneously.
                </p>
                <ul className="mb-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Semaglutide <strong>$229–$249/mo</strong> (Gronk-verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Tirzepatide <strong>$249–$299/mo</strong> (Gronk-verified)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Comprehensive metabolic bloodwork <strong>included at intake</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Physician-supervised throughout program</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                    <span>Cancel anytime</span>
                  </li>
                </ul>
                <a
                  href={edenUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glp1-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-glp1-orange-dark"
                >
                  Visit Eden Health — from $229/mo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FULL COMPARISON TABLE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-2 font-serif text-3xl text-glp1-charcoal">Full Side-by-Side</h2>
            <p className="mb-4 text-sm text-glp1-charcoal/70">
              Eden Health data is Gronk-verified May 2026. Elevate Health cells marked{' '}
              <span className="italic text-yellow-700 font-semibold">VERIFY</span> require direct
              confirmation at elevatehealth.com.
            </p>
            <div className="mb-6">
              <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk (Eden Health)" variant="compact" />
            </div>

            <div className="overflow-x-auto rounded-lg border border-glp1-charcoal/10 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-glp1-charcoal/10 bg-glp1-cream/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Dimension</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Elevate Health</th>
                    <th className="px-4 py-3 text-left font-semibold text-glp1-charcoal">Eden Health</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glp1-charcoal/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-4 py-3 font-medium text-glp1-charcoal/90">{row.label}</td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'elevate'
                            ? 'font-semibold text-green-700'
                            : row.elevateVerify
                            ? 'italic text-yellow-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.elevate}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === 'eden'
                            ? 'font-semibold text-green-700'
                            : 'text-glp1-charcoal/80'
                        }`}
                      >
                        {row.eden}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ WHY EDEN WINS ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-4 font-serif text-3xl text-glp1-charcoal">
              Why Eden Health Wins This Comparison
            </h2>
            <p className="mb-6 max-w-3xl text-glp1-charcoal/80">
              Eden Health wins on three independent, verifiable criteria — any one of which would
              justify the recommendation alone.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: '01',
                  title: 'Verified pricing',
                  body: 'Eden Health pricing is Gronk-verified as of May 2026: semaglutide $229–$249/mo, tirzepatide $249–$299/mo. You know your monthly cost before starting intake. Elevate Health requires a direct quote.',
                },
                {
                  number: '02',
                  title: 'Bloodwork at intake',
                  body: 'Eden Health includes a comprehensive metabolic panel at program start. This is a meaningful clinical differentiator — baseline metabolic data informs your prescriber\'s dosing decisions and creates a safety baseline. Most mid-tier compounded GLP-1 programs skip this step.',
                },
                {
                  number: '03',
                  title: 'Established clinical brand',
                  body: 'Eden Health has an established track record as a clinical telehealth company — not just a prescription-forwarding service. Physician supervision is built into their model throughout the program, not just at intake.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-glp1-charcoal/10 bg-glp1-cream/40 p-5"
                >
                  <div className="mb-2 font-mono text-3xl font-bold text-glp1-orange/30">
                    {item.number}
                  </div>
                  <h3 className="mb-2 font-semibold text-glp1-charcoal">{item.title}</h3>
                  <p className="text-sm text-glp1-charcoal/80">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ EDEN PRICING DEEP DIVE ============ */}
        <section className="border-b border-glp1-cream-darker bg-glp1-cream">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">
              Eden Health Pricing — Verified
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Compounded Semaglutide</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Price Range</div>
                  <p className="mb-3 text-sm"><strong>$229–$249/mo</strong></p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Bloodwork</div>
                  <p className="mb-3 text-sm">Comprehensive metabolic panel — included at intake</p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Supervision</div>
                  <p className="mb-3 text-sm">Physician-supervised</p>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" />
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-glp1-charcoal">Compounded Tirzepatide</h3>
                <div className="rounded-lg border border-glp1-charcoal/10 bg-white p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Price Range</div>
                  <p className="mb-3 text-sm"><strong>$249–$299/mo</strong></p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Bloodwork</div>
                  <p className="mb-3 text-sm">Comprehensive metabolic panel — included at intake</p>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-glp1-charcoal/60">Supervision</div>
                  <p className="mb-3 text-sm">Physician-supervised</p>
                  <VerifiedPricingBadge verifiedDate="2026-05-06" source="Gronk" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-glp1-orange/20 bg-glp1-orange/5 p-4 text-sm">
              <AlertCircle className="h-4 w-4 shrink-0 text-glp1-orange mt-0.5" />
              <p className="text-glp1-charcoal/80">
                These prices are Gronk-verified as of May 2026. GLP-1 telehealth pricing can change.
                Confirm the current rate during Eden Health&rsquo;s intake process before enrolling.
              </p>
            </div>
          </div>
        </section>

        {/* ============ EDITORIAL REVIEW BOX ============ */}
        <section className="border-b border-glp1-cream-darker bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <EditorialReviewBox
              pick="Eden Health"
              reasoning="Eden Health wins this comparison on three independent, verified criteria: confirmed pricing ($229–$299/mo, Gronk-verified May 2026), metabolic bloodwork included at intake, and an established physician-supervised clinical structure. Elevate Health may offer a competitive option, but without confirmed pricing we cannot make a fair comparison. Use Eden Health's $229/mo entry as your benchmark when you get an Elevate Health quote."
              caveats={[
                'Elevate Health pricing has not been independently verified as of May 2026',
                'Eden pricing is Gronk-verified May 2026 — confirm current rate at intake',
                'Neither affiliate program is currently active — links are placeholder for network approval',
              ]}
            />
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
            <h2 className="mb-6 font-serif text-3xl text-glp1-charcoal">Related Comparisons</h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                { href: '/compare/ivim-health-vs-eden-health', label: 'Ivim Health vs Eden Health' },
                { href: '/compare/trimrx-vs-eden-health', label: 'TrimRx vs Eden Health' },
                { href: '/compare/skinnyrx-vs-eden-health', label: 'SkinnyRx vs Eden Health' },
                { href: '/compare/elevate-health-vs-skinnyrx', label: 'Elevate Health vs SkinnyRx' },
                { href: '/compounded-tirzepatide', label: 'Best Compounded Tirzepatide' },
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
