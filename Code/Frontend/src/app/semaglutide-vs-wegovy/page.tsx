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
import { ArrowRight, Check, X, AlertCircle, ExternalLink, Award } from 'lucide-react';

// =============================================================================
// /semaglutide-vs-wegovy  (Tier B — naming clarity page)
// =============================================================================
// "Semaglutide vs Wegovy" searchers are confused between the generic drug name
// and the brand name, OR they're looking for compounded semaglutide as an
// alternative to branded Wegovy. The real comparison is:
//   - Wegovy (branded, ~$1,300-1,400/mo) vs compounded semaglutide ($99-249/mo)
// Mirrors the structure of /tirzepatide-vs-zepbound (already live).
//
// StickyMobileCTA: Strut Health ($99/mo — lowest compounded sema price).
// =============================================================================

export const metadata: Metadata = {
  title: 'Semaglutide vs Wegovy 2026: Same Drug, Very Different Prices | GLP1CompareHub',
  description:
    'Semaglutide IS the active ingredient in Wegovy — they are the same molecule. The real comparison is branded Wegovy (~$1,300/mo) vs compounded semaglutide ($99–249/mo). Full breakdown.',
  alternates: { canonical: 'https://glp1comparehub.com/semaglutide-vs-wegovy' },
  openGraph: {
    title: 'Semaglutide vs Wegovy 2026: Same Drug, Very Different Prices',
    description:
      'Semaglutide is the molecule. Wegovy is the brand name. Here\'s what that means — and how compounded semaglutide compares to branded Wegovy, Ozempic, and Rybelsus.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/semaglutide-vs-wegovy',
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
      name: 'Semaglutide',
      item: 'https://glp1comparehub.com/compounded-semaglutide',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Semaglutide vs Wegovy',
      item: 'https://glp1comparehub.com/semaglutide-vs-wegovy',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Semaglutide vs Wegovy 2026: Same Molecule, Very Different Prices — Full Breakdown',
  description:
    'Semaglutide is the active pharmaceutical ingredient; Wegovy is Novo Nordisk\'s brand name for semaglutide indicated for weight management. This page explains the naming confusion, all four semaglutide formulations (Wegovy, Ozempic, Rybelsus, compounded), and the full cost comparison.',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://glp1comparehub.com/semaglutide-vs-wegovy',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is semaglutide the same as Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Semaglutide is the International Nonproprietary Name (INN) — the official generic name of the active drug molecule. Wegovy is Novo Nordisk\'s brand name for semaglutide when prescribed and indicated for chronic weight management in adults with obesity or overweight. They are the same molecule. Calling it "semaglutide vs Wegovy" is like saying "ibuprofen vs Advil" — one is the generic name, one is the brand name of the same drug.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is compounded semaglutide cheaper than Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Branded Wegovy costs ~$1,300–$1,400/month at full retail because the price includes Novo Nordisk\'s R&D cost recovery, brand marketing, the proprietary auto-injector pen device, GMP manufacturing overhead, and regulatory approval costs. Compounded semaglutide is produced by licensed 503A pharmacy compounders who source the active ingredient and mix it without the brand markup, device engineering, or pharmaceutical pricing structure. The active molecule is the same; the price reflects everything around it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ozempic the same as Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — both Ozempic and Wegovy contain semaglutide as the active ingredient. The difference is the FDA-approved indication and maximum dose: Ozempic is approved for Type 2 diabetes management (doses up to 2mg weekly); Wegovy is approved for chronic weight management in adults with obesity or overweight (doses up to 2.4mg weekly). Ozempic is sometimes prescribed off-label for weight loss, but its maximum approved dose (2mg) is slightly lower than Wegovy\'s maximum (2.4mg).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Ozempic for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ozempic is not FDA-approved for weight loss — it\'s approved for Type 2 diabetes. However, it contains the same active ingredient (semaglutide) that produces weight loss. Some physicians prescribe it off-label for weight management in patients without diabetes, particularly when Wegovy is unavailable or unaffordable. Off-label prescribing is legal and at the physician\'s clinical judgment. Wegovy is the FDA-approved weight-loss version of semaglutide; Ozempic is the diabetes version.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between Wegovy and Rybelsus?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both Wegovy and Rybelsus contain semaglutide, but they are different formulations for different routes of administration. Wegovy is a once-weekly subcutaneous injection (the same route as Ozempic) at doses up to 2.4mg, FDA-approved for weight management. Rybelsus is a once-daily oral tablet at doses of 3mg, 7mg, or 14mg, FDA-approved for Type 2 diabetes. The oral bioavailability of semaglutide is much lower than injection — the 14mg daily oral dose is roughly equivalent in effect to lower injectable doses. Rybelsus is not approved for weight loss.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded semaglutide as effective as Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The active molecule is identical — semaglutide in both cases. There are no head-to-head clinical trials comparing compounded and branded semaglutide efficacy because they are legally distinct products (compounded drugs are not FDA-approved as such). Branded Wegovy is manufactured under FDA-regulated GMP facilities with rigorous quality controls. Compounded semaglutide is produced by 503A pharmacy compounders under different oversight standards. If manufacturing certainty and regulatory status are primary concerns, branded Wegovy provides those guarantees. If cost is the primary driver, compounded semaglutide from a licensed 503A pharmacy offers the same active ingredient at a fraction of the price.',
      },
    },
  ],
};

// All 4 semaglutide formulations comparison
interface SemaFormulation {
  product: string;
  manufacturer: string;
  indication: string;
  maxDose: string;
  route: string;
  cashPrice: string;
  fdaApproved: boolean;
  highlight?: boolean;
}

const formulations: SemaFormulation[] = [
  {
    product: 'Wegovy',
    manufacturer: 'Novo Nordisk',
    indication: 'Obesity / weight management',
    maxDose: '2.4 mg weekly',
    route: 'SubQ injection',
    cashPrice: '~$1,300–$1,400/mo',
    fdaApproved: true,
  },
  {
    product: 'Ozempic',
    manufacturer: 'Novo Nordisk',
    indication: 'Type 2 diabetes (off-label: weight loss)',
    maxDose: '2 mg weekly',
    route: 'SubQ injection',
    cashPrice: '~$900–$1,000/mo',
    fdaApproved: true,
  },
  {
    product: 'Rybelsus',
    manufacturer: 'Novo Nordisk',
    indication: 'Type 2 diabetes',
    maxDose: '14 mg daily',
    route: 'Oral tablet',
    cashPrice: '~$900–$1,000/mo',
    fdaApproved: true,
  },
  {
    product: 'Compounded semaglutide',
    manufacturer: '503A pharmacy (via telehealth)',
    indication: 'Weight loss / obesity (with prescription)',
    maxDose: 'Flexible (custom)',
    route: 'SubQ injection (vial)',
    cashPrice: '$99–$249/mo',
    fdaApproved: false,
    highlight: true,
  },
];

// Providers
interface ProviderCard {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
  slug: string;
}

const providers: ProviderCard[] = [
  {
    name: 'Strut Health',
    price: '$99/mo',
    highlight: true,
    slug: 'strut-health',
    features: [
      'Compounded injectable semaglutide from $99/mo',
      'Vial format — custom dose flexibility',
      'Physician review included',
    ],
  },
  {
    name: 'TMates',
    price: '$158/mo',
    slug: 'tmates',
    features: [
      'Compounded semaglutide from $158/mo',
      'Physician-supervised titration',
      'Ongoing provider access for adjustments',
    ],
  },
  {
    name: 'Embody Health',
    price: '$149 first month',
    slug: 'embody',
    features: [
      '$149 first month promotional pricing',
      'Compounded injectable semaglutide',
      'Physician review and prescription included',
    ],
  },
  {
    name: 'Eden Health',
    price: '$229–$249/mo',
    slug: 'eden-health',
    features: [
      'Compounded semaglutide from $229/mo',
      'Established telehealth provider',
      'Physician-supervised weight management program',
    ],
  },
];

export default function SemaglutideVsWegovyPage() {
  const strutUrl = buildGlp1AffiliateUrl('strut-health', 'semaglutide-vs-wegovy');
  const tmatesUrl = buildGlp1AffiliateUrl('tmates', 'semaglutide-vs-wegovy');
  const embodyUrl = buildGlp1AffiliateUrl('embody', 'semaglutide-vs-wegovy');
  const edenUrl = buildGlp1AffiliateUrl('eden-health', 'semaglutide-vs-wegovy');

  const providerUrls: Record<string, string> = {
    'strut-health': strutUrl,
    tmates: tmatesUrl,
    embody: embodyUrl,
    'eden-health': edenUrl,
  };

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
      <RelatedGuides currentPath="/semaglutide-vs-wegovy" priorityCluster="compare" />
      <StickyMobileCTA
        href={strutUrl}
        brandName="Strut Health"
        pricePitch="Compounded semaglutide from $99/mo — same molecule, fraction of the price"
      />

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* ── Breadcrumb ── */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/compounded-semaglutide" className="hover:underline text-blue-600">Semaglutide</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Semaglutide vs Wegovy</li>
          </ol>
        </nav>

        {/* ── Answer-First Hero ── */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Naming Clarity
            </span>
            <span className="text-gray-400 text-xs">Updated May 2026</span>
          </div>

          {/* Answer-first box */}
          <div className="mb-6 rounded-xl border-2 border-purple-200 bg-purple-50 p-5">
            <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-2">
              Quick Answer
            </p>
            <p className="text-lg font-bold text-gray-900 leading-snug">
              Semaglutide <em>is</em> Wegovy. They are the same molecule.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              &ldquo;Semaglutide vs Wegovy&rdquo; is like &ldquo;ibuprofen vs Advil.&rdquo; Semaglutide is the
              generic drug name; Wegovy is Novo Nordisk&apos;s brand name for it. The real comparison
              most people are searching for is <strong>branded Wegovy (~$1,300–$1,400/mo)</strong> versus{' '}
              <strong>compounded semaglutide ($99–$249/mo)</strong> from telehealth providers.
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Semaglutide vs Wegovy 2026: Same Drug, Very Different Prices
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Wegovy, Ozempic, Rybelsus, and compounded semaglutide all contain the same active
            molecule: semaglutide. Here&apos;s what separates them — indications, dosing, formulation,
            cost, and why compounded is dramatically cheaper.
          </p>

          {/* 3-stat summary */}
          <div className="grid grid-cols-3 gap-3 text-center text-sm mb-4">
            <div className="border rounded-xl p-3 bg-white">
              <p className="text-2xl font-bold text-purple-700">4</p>
              <p className="text-xs text-gray-500 mt-1">Semaglutide products on the market</p>
            </div>
            <div className="border rounded-xl p-3 bg-white">
              <p className="text-2xl font-bold text-red-600">~$1,350</p>
              <p className="text-xs text-gray-500 mt-1">Avg. monthly cost of branded Wegovy</p>
            </div>
            <div className="border rounded-xl p-3 bg-white">
              <p className="text-2xl font-bold text-green-600">$99</p>
              <p className="text-xs text-gray-500 mt-1">Starting price for compounded semaglutide</p>
            </div>
          </div>
        </section>

        {/* ── Why People Search This ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Do People Search &ldquo;Semaglutide vs Wegovy&rdquo;?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm">
            There are two main reasons:
          </p>
          <div className="space-y-3">
            <div className="border rounded-xl p-4 bg-white">
              <p className="font-semibold text-gray-800 mb-1 text-sm">1. Naming confusion</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Patients see &ldquo;semaglutide&rdquo; on generic drug information sites and &ldquo;Wegovy&rdquo; on
                insurance forms and ads. They&apos;re not sure if they&apos;re the same thing. They are.
                Semaglutide is the molecule; Wegovy is one of the four branded products containing it.
              </p>
            </div>
            <div className="border rounded-xl p-4 bg-white">
              <p className="font-semibold text-gray-800 mb-1 text-sm">2. Searching for a cheaper alternative to Wegovy</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Many patients find out that branded Wegovy costs $1,300+ per month without insurance
                and start searching for alternatives. &ldquo;Semaglutide&rdquo; in search context often means
                &ldquo;compounded semaglutide,&rdquo; which is the same active ingredient at a fraction of the
                cost through licensed telehealth providers.
              </p>
            </div>
          </div>
        </section>

        {/* ── All Semaglutide Products Table ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            All Semaglutide Products Compared
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            All four are semaglutide. What differs: indication, formulation, dose, and price.
            Pricing verified May 2026.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-700">Product</th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-700">Indication</th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-700">Max dose</th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-700">Route</th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-700">Price (no ins.)</th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold text-gray-700">FDA-approved</th>
                </tr>
              </thead>
              <tbody>
                {formulations.map((f, i) => (
                  <tr
                    key={i}
                    className={`${f.highlight ? 'bg-green-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-900">
                      {f.product}
                      {f.highlight && (
                        <span className="ml-1.5 text-xs text-green-700 font-normal">(best value)</span>
                      )}
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-600">{f.indication}</td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-600">{f.maxDose}</td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-600">{f.route}</td>
                    <td className={`border border-gray-200 px-3 py-2 font-semibold ${f.highlight ? 'text-green-700' : 'text-gray-700'}`}>
                      {f.cashPrice}
                    </td>
                    <td className="border border-gray-200 px-3 py-2">
                      {f.fdaApproved ? (
                        <span className="inline-flex items-center gap-1 text-green-700 text-xs">
                          <Check className="h-3.5 w-3.5" /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-amber-700 text-xs">
                          <AlertCircle className="h-3.5 w-3.5" /> No (503A compounded)
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Branded prices are full retail cash prices without insurance or manufacturer savings
            programs. Compounded pricing is through verified telehealth providers.
          </p>
        </section>

        {/* ── Why Compounded Is Cheaper ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Is Compounded Semaglutide So Much Cheaper Than Wegovy?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm">
            The branded Wegovy price (~$1,350/mo) includes:
          </p>
          <ul className="space-y-2 mb-5">
            {[
              'Novo Nordisk\'s multi-billion dollar R&D cost recovery (STEP trials alone cost hundreds of millions)',
              'The proprietary FlexTouch auto-injector pen device',
              'Brand marketing, sales force, and direct-to-consumer advertising',
              'FDA-regulated GMP manufacturing at Novo Nordisk facilities',
              'The regulatory approval infrastructure and ongoing post-market studies',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm">
            Compounded semaglutide from a licensed 503A pharmacy includes:
          </p>
          <ul className="space-y-2 mb-5">
            {[
              'The active ingredient: semaglutide',
              'A sterile bacteriostatic water or saline diluent',
              'Standard pharmacy compounding overhead',
              'Telehealth provider markup and physician review',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important:</strong> Compounded semaglutide is not FDA-approved as a finished
                drug product. It&apos;s produced under the 503A pharmacy compounding exemption, which
                allows licensed pharmacies to compound drugs for specific patients with a valid
                prescription. The active molecule is the same; the manufacturing oversight framework
                is different from branded Wegovy.
              </p>
            </div>
          </div>
        </section>

        {/* ── Provider Cards ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Compounded Semaglutide Providers: What Wegovy Costs vs. Alternatives
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Pricing verified May 2026. All require a valid prescription from a licensed prescriber.
          </p>

          {/* Cost comparison callout */}
          <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 mb-6 text-sm">
            <p className="font-semibold text-green-900 mb-2">12-month cost comparison</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-red-600 text-lg">$16,200</p>
                <p className="text-xs text-gray-500">Branded Wegovy<br />(full retail/yr)</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-green-700 text-lg">$1,188</p>
                <p className="text-xs text-gray-500">Strut Health<br />($99/mo × 12)</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-green-700 text-lg">$1,896</p>
                <p className="text-xs text-gray-500">TMates<br />($158/mo × 12)</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-green-700 text-lg">$2,748</p>
                <p className="text-xs text-gray-500">Eden Health<br />($229/mo × 12)</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Savings vs. branded Wegovy: $15,012 – $14,304/year depending on provider.
            </p>
          </div>

          <div className="space-y-4">
            {providers.map((provider) => (
              <div
                key={provider.slug}
                className={`rounded-xl p-5 bg-white ${provider.highlight ? 'border-2 border-green-200' : 'border border-gray-200'}`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    {provider.highlight && (
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                          Best Value
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{provider.name}</h3>
                    <VerifiedPricingBadge price={provider.price} verifiedDate="May 2026" />
                    <ul className="space-y-1 text-sm text-gray-700 mt-3">
                      {provider.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={providerUrls[provider.slug]}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors ${provider.highlight ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-800 hover:bg-gray-900'}`}
                  >
                    {provider.highlight ? 'Start at Strut' : `Visit ${provider.name.split(' ')[0]}`}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Editorial Review Box ── */}
        <EditorialReviewBox
          reviewDate="May 6, 2026"
          reviewerName="GLP1CompareHub Editorial Team"
          summary="This page clarifies the generic/brand naming relationship between semaglutide and Wegovy. All branded product pricing reflects full retail cash prices as of May 2026 — insurance coverage and manufacturer savings programs can significantly reduce out-of-pocket costs for branded options. Compounded semaglutide pricing verified through provider sites. This is not medical advice."
        />

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="border rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Pages ── */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/compounded-semaglutide', label: 'Compounded Semaglutide: Complete Guide' },
              { href: '/cheapest-semaglutide-online', label: 'Cheapest Compounded Semaglutide Online' },
              { href: '/best-compounded-semaglutide', label: 'Best Compounded Semaglutide Providers 2026' },
              { href: '/wegovy-pill-vs-injection', label: 'Wegovy Pill vs Injection: Rybelsus vs Wegovy' },
              { href: '/oral-semaglutide-vs-injection', label: 'Oral Semaglutide vs Injection: Full Comparison' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="inline-flex items-center gap-1.5 text-blue-600 hover:underline">
                  {label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
