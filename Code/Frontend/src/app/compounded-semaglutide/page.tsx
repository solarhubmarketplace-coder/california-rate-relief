import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { LastReviewedBadge } from '@/components/glp1/LastReviewedBadge';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { VerifiedPricingBadge } from '@/components/glp1/VerifiedPricingBadge';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, ShieldCheck, AlertCircle, CircleCheck, Calendar, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compounded Semaglutide 2026: Legal Status, Cost & Verified Providers',
  description:
    'Compounded semaglutide 2026: FDA shortage ended March 2025. 503A still available under narrow exceptions. Verified pricing $99–$249/mo. Updated May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/compounded-semaglutide' },
  openGraph: {
    title: 'Compounded Semaglutide 2026 — Post-FDA-Enforcement Status + Pricing',
    description:
      'Shortage ended March 2025. April 1 enforcement shift. Where compounded sema still stands, 503A narrow exceptions, and current pricing from $99/mo.',
    url: 'https://glp1comparehub.com/compounded-semaglutide',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630, alt: 'Compounded Semaglutide 2026 — GLP1CompareHub' }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Compounded Semaglutide 2026: FDA Status, Cost, and Verified Providers',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/compounded-semaglutide',
  about: ['Compounded semaglutide', 'Semaglutide', 'Ozempic', 'Wegovy', '503A compounding pharmacy', 'FDA enforcement', 'GLP-1 weight loss'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is compounded semaglutide still legal in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide is in a more restricted position than compounded tirzepatide in 2026. The FDA officially declared the semaglutide shortage resolved in March 2025 — earlier than tirzepatide. This triggered a tighter enforcement timeline. As of April 1, 2026, FDA enforcement discretion for 503A pharmacies compounding copies of branded semaglutide (Ozempic, Wegovy) at telehealth scale has ended. 503A pharmacies may still compound patient-specific formulations with a documented clinical justification (allergy, custom strength, or other PCAB criterion). Personalized compounded semaglutide with unique clinical rationale may still be available. 503B outsourcing facilities are the subject of a separate FDA proposal (April 30, 2026) that would restrict bulk semaglutide use. Always confirm current status with the specific telehealth provider before prescribing or ordering.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does compounded semaglutide cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verified pricing across active providers as of May 2026: Strut Health offers oral compounded semaglutide from $99/mo on auto-refill (lowest verified entry tier). TMates offers injectable + oral semaglutide from $158/mo on a 12-month plan ($249 month-to-month). Embody offers a GLP-1 gum format at $149 first month / $299 flat refills. Eden Health offers compounded semaglutide at $229–$249/mo. These prices are for compounded semaglutide, not branded Ozempic or Wegovy, which typically cost $800–$1,400+/mo without insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between compounded semaglutide and Ozempic or Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ozempic and Wegovy are FDA-approved brand-name drugs manufactured by Novo Nordisk. Compounded semaglutide is produced by state-licensed compounding pharmacies under FDA exemptions — it is NOT FDA-approved. Compounded semaglutide may use the same active ingredient (semaglutide) but differs in formulation, manufacturing oversight, excipients, and quality controls. Branded products undergo rigorous clinical trials and manufacturing audits; compounded products do not. Branded GLP-1s are the clinical standard. Compounded versions are typically chosen for cost reasons. This distinction matters clinically — discuss with your physician.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened to compounded semaglutide after the FDA shortage ended?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In March 2025, the FDA formally declared the semaglutide shortage resolved, removing the primary legal basis for 503A pharmacies to compound copies at scale. Unlike tirzepatide (shortage resolved October 2024 with a longer enforcement runway), semaglutide had a shorter transition window. By April 1, 2026, general telehealth-scale compounding of semaglutide copies has become enforcement-risk territory for 503A pharmacies. Providers still operating in this space are relying on narrow clinical exception pathways. Confirm the specific legal basis with your provider before ordering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still get compounded semaglutide through a telehealth provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of May 2026, several telehealth providers in our active stack are still offering compounded semaglutide programs. Strut Health ($99/mo), TMates ($158/mo annual), Embody ($149 intro), and Eden Health ($229–$249/mo) all offer compounded or low-cost semaglutide options. Legal availability varies by state, pharmacy, and the specific clinical justification pathway. Always ask the provider directly about the regulatory basis for their compounded GLP-1 program before enrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is oral (sublingual) compounded semaglutide as effective as injectable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no published head-to-head randomized controlled trials comparing oral compounded semaglutide to FDA-approved injectable semaglutide (Ozempic/Wegovy). Oral bioavailability of peptides is generally lower than subcutaneous injection. The FDA-approved oral semaglutide (Rybelsus) is formulated with a specific absorption enhancer (SNAC) at carefully calibrated doses — this formulation is proprietary. Compounded oral semaglutide preparations are not equivalent and have not been tested for equivalent efficacy. Discuss the format with your prescribing physician.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Compounded Semaglutide', item: 'https://glp1comparehub.com/compounded-semaglutide' },
  ],
};

// Verified provider data — May 6, 2026
const PROVIDERS = [
  {
    slug: 'strut-health',
    name: 'Strut Health',
    badge: 'Lowest Entry Price',
    badgeColor: 'bg-green-100 text-green-800',
    monthlyPrice: '$99/mo (oral auto-refill)',
    fullPricing: '$99/mo auto-refill · $119/mo month-to-month',
    highlight: 'Oral compounded semaglutide at the lowest verified entry price in our Katalys stack. Async no-video physician review, LegitScript + HIPAA compliant, 2-day shipping. Best for cost-sensitive patients open to oral format.',
    format: 'Oral (sublingual drops or capsule)',
    availability: 'All US states except AK',
    notableFor: ['$99/mo lowest verified entry price', 'No video visit — async physician review', 'Multi-vertical (hair, skin, ED)', 'Free shipping + follow-up'],
    watchFor: ['Oral-only — no injectable option', 'CR 7.12% but lower absolute volume than TMates'],
  },
  {
    slug: 'tmates',
    name: 'TMates',
    badge: '#1 EPC in Stack',
    badgeColor: 'bg-yellow-100 text-yellow-800',
    monthlyPrice: '$158/mo (12-month plan)',
    fullPricing: '$249/mo · 3 mo $217/mo · 6 mo $175/mo · 12 mo $158/mo',
    highlight: 'Highest EPC ($16.09) and conversion rate (6.43%) in our entire Katalys account. Same price across all doses — no titration upcharge. Available in both injectable and oral drop formats. The #1 overall pick for affiliate performance.',
    format: 'Injectable + oral drops',
    availability: 'United States',
    notableFor: ['$16.09 EPC — #1 in entire Katalys account', '6.43% conversion rate', 'Same price all doses (0.25–2.4mg)', 'Injectable + oral options'],
    watchFor: ['Best per-month pricing requires 12-month commitment', 'No branded Wegovy/Ozempic'],
  },
  {
    slug: 'embody',
    name: 'Embody',
    badge: 'GLP-1 Gum Unique Format',
    badgeColor: 'bg-blue-100 text-blue-800',
    monthlyPrice: '$149 first month / $299 flat',
    fullPricing: '$149 intro month · $299/mo flat ongoing (any dose)',
    highlight: 'The only provider in our stack offering GLP-1 in gum format — a needle-free daily chew. Also offers traditional injections at flat $299/mo with no titration upcharge. Second-highest EPC ($4.60) in our Katalys stack.',
    format: 'GLP-1 gum + injectable',
    availability: 'United States',
    notableFor: ['Unique GLP-1 gum format (no needle)', 'Flat-rate $299/mo — no dose upcharges', '$4.60 EPC #2 in stack', '1.31% conversion rate'],
    watchFor: ['Month-to-month price ($299) higher than TMates annual ($158)', 'Gum format not clinically equivalent to injectable'],
  },
  {
    slug: 'eden-health',
    name: 'Eden Health',
    badge: 'Widest Medication Menu',
    badgeColor: 'bg-purple-100 text-purple-800',
    monthlyPrice: '$229–$249/mo compounded sema',
    fullPricing: 'Compounded sema $229–$249/mo · Branded Ozempic/Wegovy + compounded depending on insurance',
    highlight: 'Eden is the only provider in our stack offering both branded GLP-1 (Ozempic, Wegovy, Mounjaro, Zepbound) alongside compounded options — useful for patients who want to start compounded and may switch to branded. Also has the broadest wellness stack (NAD+ 5-format menu, peptides, hormones).',
    format: 'Injectable (compounded + branded)',
    availability: 'United States',
    notableFor: ['Only provider offering branded + compounded side-by-side', 'Broadest wellness menu (NAD+, peptides, hormones)', 'Insurance pathways for branded GLP-1'],
    watchFor: ['Compounded sema at $229–$249/mo — higher than TMates/Strut', 'Lower affiliate EPC than TMates'],
  },
];

export default function CompoundedSemaglutidePage() {
  const tMatesUrl = buildGlp1AffiliateUrl('tmates', 'compounded-semaglutide');
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'compounded-semaglutide');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'compounded-semaglutide');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'compounded-semaglutide');

  return (
    <GLP1Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <StickyMobileCTA href={tMatesUrl} brandName="TMates" pricePitch="Semaglutide from $158/mo · Same price all doses" />

      <GLP1Header />
      <MedicalDisclaimerBanner />

      {/* Affiliate disclosure bar */}
      <div className="border-b" style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-2 text-xs text-center" style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission if you sign up — at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="underline">Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Hero */}
        <section className="py-10 md:py-14" style={{ backgroundColor: '#F0EBE0' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <nav className="text-xs mb-4" aria-label="Breadcrumb">
              <Link href="/" style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Compounded Semaglutide</span>
            </nav>

            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-[1.1]"
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded Semaglutide <span style={{ color: '#D4A33A' }}>2026</span>
            </h1>
            <p className="text-lg md:text-xl mb-3" style={{ color: '#3D5560' }}>
              Is it still legal? What did the FDA enforcement shift actually change? Where can you still get it — and at what price?
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs mb-4" style={{ color: '#6B7B82' }}>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> Updated May 6, 2026
              </span>
              <span>·</span>
              <span>By <Link href="/author/chad-simpson" className="underline">Chad Simpson</Link></span>
              <span>·</span>
              <LastReviewedBadge lastReviewed="2026-05-06" />
            </div>
          </div>
        </section>

        {/* FDA enforcement banner */}
        <section className="py-6" style={{ backgroundColor: '#F8F4ED' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="rounded-2xl p-5" style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#B14739' }} />
                <p className="text-sm font-bold" style={{ color: '#B14739' }}>
                  FDA Enforcement Update — Semaglutide is more restricted than tirzepatide in 2026
                </p>
              </div>
              <ul className="text-sm space-y-1 pl-8" style={{ color: '#7A1010' }}>
                <li>• <strong>March 2025:</strong> FDA declared semaglutide shortage officially resolved — removing the primary legal basis for 503A scale compounding</li>
                <li>• <strong>April 1, 2026:</strong> FDA ended enforcement discretion for 503A pharmacies compounding semaglutide copies at telehealth scale</li>
                <li>• <strong>April 30, 2026:</strong> FDA proposed removing semaglutide, tirzepatide, and liraglutide from the 503B bulks list</li>
                <li>• <strong>June 29, 2026:</strong> Public comment deadline on the April 30 proposal</li>
                <li>• <strong>What still may be available:</strong> Patient-specific 503A compounding with documented clinical justification (allergy, custom strength, or other criterion)</li>
              </ul>
              <p className="text-xs mt-3 pl-8" style={{ color: '#7A1010' }}>
                Sources: <a href="https://www.fda.gov" target="_blank" rel="noopener noreferrer" className="underline">FDA.gov</a> official guidance and Federal Register notices. Always confirm current availability with your telehealth provider.
              </p>
            </div>
          </div>
        </section>

        {/* What is compounded semaglutide */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              What Is Compounded Semaglutide?
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#3D5560' }}>
              Semaglutide is the active ingredient in Ozempic (diabetes) and Wegovy (obesity) — FDA-approved GLP-1 receptor agonists manufactured by Novo Nordisk. Compounded semaglutide is a version of the same active ingredient produced by state-licensed compounding pharmacies operating under FDA exemptions, rather than manufactured through Novo Nordisk&apos;s regulated process.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#3D5560' }}>
              <strong>Compounded semaglutide is NOT FDA-approved.</strong> It is produced under either 503A (patient-specific, prescription-based) or 503B (outsourcing facility, batch-scale) frameworks. Neither is equivalent to the FDA approval process for branded drugs.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
                <h3 className="font-bold text-sm mb-3" style={{ color: '#0E2A3A' }}>Compounded Semaglutide</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3D5560' }}>
                  <li className="flex gap-2"><CircleCheck className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#0E6E5A' }} /><span>Typically 70–90% cheaper than branded Ozempic/Wegovy</span></li>
                  <li className="flex gap-2"><CircleCheck className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#0E6E5A' }} /><span>Available via telehealth without prior insurance authorization</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#B14739' }} /><span>NOT FDA-approved — different manufacturing standards</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#B14739' }} /><span>Legal basis has narrowed significantly since March 2025</span></li>
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
                <h3 className="font-bold text-sm mb-3" style={{ color: '#0E2A3A' }}>Branded Ozempic / Wegovy</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3D5560' }}>
                  <li className="flex gap-2"><CircleCheck className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#0E6E5A' }} /><span>FDA-approved with rigorous clinical trial data (STEP-1 through STEP-8)</span></li>
                  <li className="flex gap-2"><CircleCheck className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#0E6E5A' }} /><span>Consistent formulation, pharmacokinetics, and QC standards</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#B14739' }} /><span>$800–$1,400+/mo without insurance (retail list price)</span></li>
                  <li className="flex gap-2"><AlertCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#B14739' }} /><span>Requires insurance prior authorization for most plans</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing table */}
        <section className="py-10" style={{ backgroundColor: '#F8F4ED' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Verified Pricing — Active Providers
              </h2>
              <VerifiedPricingBadge verifiedDate="2026-05-06" />
            </div>

            <div className="space-y-4">
              {PROVIDERS.map((p) => {
                const url = p.slug === 'tmates' ? tMatesUrl
                  : p.slug === 'strut-health' ? strutUrl
                  : p.slug === 'embody' ? embodyUrl
                  : edenUrl;
                return (
                  <div key={p.slug} className="rounded-2xl p-5 bg-white" style={{ border: '1px solid #E5DDC8' }}>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold" style={{ color: '#0E2A3A' }}>{p.name}</h3>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold" style={{ color: '#D4A33A' }}>{p.monthlyPrice}</span>
                          <VerifiedPricingBadge verifiedDate="2026-05-06" variant="compact" />
                        </div>
                        <p className="text-xs mt-0.5" style={{ color: '#6B7B82' }}>{p.fullPricing}</p>
                      </div>
                      <a
                        href={url}
                        target="_blank"
                        rel="sponsored nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap flex-shrink-0"
                        style={{ backgroundColor: '#0E2A3A', color: '#F0EBE0' }}
                      >
                        Visit <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    <p className="text-sm mb-3" style={{ color: '#3D5560' }}>{p.highlight}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-semibold mb-1" style={{ color: '#0E6E5A' }}>Notable for</p>
                        <ul className="space-y-1">
                          {p.notableFor.map((item) => (
                            <li key={item} className="flex gap-1.5 text-xs" style={{ color: '#3D5560' }}>
                              <CircleCheck className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: '#0E6E5A' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1" style={{ color: '#B14739' }}>Watch for</p>
                        <ul className="space-y-1">
                          {p.watchFor.map((item) => (
                            <li key={item} className="flex gap-1.5 text-xs" style={{ color: '#3D5560' }}>
                              <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: '#B14739' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compounded vs branded decision guide */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded vs Branded Semaglutide: How to Choose
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#3D5560' }}>
              This is a clinical decision between you and your prescriber. The table below summarizes the tradeoffs — not a recommendation for either path.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: '#0E2A3A', color: '#F0EBE0' }}>
                    <th className="text-left p-3 font-semibold rounded-tl-xl">Factor</th>
                    <th className="text-left p-3 font-semibold">Compounded Semaglutide</th>
                    <th className="text-left p-3 font-semibold rounded-tr-xl">Branded Ozempic / Wegovy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Monthly cost', '$99–$249/mo (verified)', '$800–$1,400+/mo (retail, without insurance)'],
                    ['FDA approval status', 'NOT FDA-approved', 'FDA-approved (STEP-1 through STEP-8 trials)'],
                    ['Clinical evidence', 'No head-to-head vs branded', 'Robust RCT data — 15–17% avg weight loss in trials'],
                    ['Legal availability', 'Narrowed since March 2025 / April 2026', 'Always available with prescription'],
                    ['Insurance coverage', 'Typically not covered', 'Coverage varies — prior auth often required'],
                    ['Manufacturing oversight', '503A/503B pharmacy standards', 'FDA-regulated GMP manufacturing'],
                    ['Format options', 'Injectable + oral (sublingual/gum)', 'Auto-injector pen only'],
                    ['Switching to branded later', 'Possible — ask provider', 'Always available'],
                  ].map(([factor, comp, branded], i) => (
                    <tr key={factor} style={{ backgroundColor: i % 2 === 0 ? '#F8F4ED' : 'white' }}>
                      <td className="p-3 font-medium" style={{ color: '#0E2A3A' }}>{factor}</td>
                      <td className="p-3" style={{ color: '#3D5560' }}>{comp}</td>
                      <td className="p-3" style={{ color: '#3D5560' }}>{branded}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl p-4" style={{ backgroundColor: '#FFF8E1', border: '1px solid #D4A33A' }}>
              <p className="text-sm" style={{ color: '#7A4F00' }}>
                <strong>Important:</strong> This comparison is for informational purposes only and does not constitute medical advice. The right choice depends on your health history, insurance status, and prescriber recommendation. See our <Link href="/medical-disclaimer" className="underline">medical disclaimer</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Semaglutide vs tirzepatide */}
        <section className="py-10" style={{ backgroundColor: '#F8F4ED' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-5">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded Semaglutide vs Compounded Tirzepatide
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#3D5560' }}>
              Tirzepatide (Mounjaro/Zepbound&apos;s active ingredient) outperformed semaglutide on average weight loss in the SURMOUNT-5 head-to-head trial (NEJM, 2025) — 20.2% vs 13.7% at 72 weeks in adults with obesity without diabetes. However, regulatory positions differ: compounded tirzepatide&apos;s shortage ended October 2024 with a longer enforcement runway than semaglutide (shortage resolved March 2025 with tighter timeline). Both are restricted as of April 2026, but the specific pathways and risk profiles differ.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tirzepatide-vs-semaglutide"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ backgroundColor: '#0E2A3A', color: '#F0EBE0' }}
              >
                Full Tirzepatide vs Semaglutide Guide <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/compounded-tirzepatide"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ backgroundColor: '#F0EBE0', color: '#0E2A3A', border: '1px solid #E5DDC8' }}
              >
                Compounded Tirzepatide Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="rounded-xl p-5" style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
                  <h3 className="font-bold mb-2 text-base" style={{ color: '#0E2A3A' }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3D5560' }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-10" style={{ backgroundColor: '#0E2A3A' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: '#D4A33A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Ready to Compare Programs?
            </h2>
            <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: 'rgba(240,235,224,0.85)' }}>
              Our verified stack has programs from $99/mo. Check eligibility and pricing in minutes — no video visit required at most providers.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={strutUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
                style={{ backgroundColor: '#D4A33A', color: '#0E2A3A' }}
              >
                Strut Health — from $99/mo <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={tMatesUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#F0EBE0', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                TMates — from $158/mo <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/best-compounded-semaglutide"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#F0EBE0', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                See Full Rankings <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <RelatedGuides currentPath="/compounded-semaglutide" priorityCluster="semaglutide" />
      <GLP1Footer />
    </GLP1Layout>
  );
}
