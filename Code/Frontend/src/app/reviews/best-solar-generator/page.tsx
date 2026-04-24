import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Battery,
  Check,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Shield,
  Star,
  Sun,
  X,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Solar Generators (2026): Top Portable Power Station + Panel Bundles Compared',
  description:
    'Compare the best solar generators for home backup and off-grid use in 2026. EcoFlow Delta Pro 3 + 400W, Bluetti AC200L + PV200, Jackery 2000 Plus + SolarSaga 200W, Goal Zero Yeti 1500X + Nomad 200, and Anker SOLIX F3800 + PS400 reviewed with specs, pros/cons, and sizing guide.',
  alternates: {
    canonical: '/reviews/best-solar-generator',
  },
  openGraph: {
    title: 'Best Solar Generators (2026): Portable Power Station + Panel Bundles',
    description:
      'EcoFlow vs Bluetti vs Jackery vs Goal Zero vs Anker solar generator bundles. Full specs, charging tests, and buyer guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Solar Generators (2026): Top Portable Power Station + Panel Bundles Compared',
  description:
    'Comprehensive comparison of the best solar generators in 2026. Reviews of EcoFlow Delta Pro 3, Bluetti AC200L, Jackery 2000 Plus, Goal Zero Yeti 1500X, and Anker SOLIX F3800 bundles with solar panels. Includes sizing guide, charging calculations, and FAQ.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/best-solar-generator',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best solar generator for home backup in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EcoFlow Delta Pro 3 paired with two EcoFlow 400W solar panels is our top pick for home backup in 2026. It delivers 4,096 Wh of LFP battery capacity, 4,000W continuous output, and up to 2,600W of solar input. With two 400W panels in California sun, you can harvest roughly 4,400-5,200 Wh per day, enough to fully recharge the station and keep essentials running indefinitely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to charge a solar generator with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Charging time depends on panel wattage, sunlight conditions, and the power station capacity. A 400W panel in full sun produces roughly 320-360W real output. For a 2,000 Wh power station with a single 400W panel, expect 6-7 hours of direct sunlight for a full charge. With 800W of panels, that drops to 3-4 hours. California averages 5.5-6.5 peak sun hours daily, making solar charging very viable year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a solar generator power a whole house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A solar generator can power essential circuits like a refrigerator, lights, router, phones, and a few small appliances. Units like the EcoFlow Delta Pro 3 (4,000W) and Anker SOLIX F3800 (6,000W) handle most essentials easily. However, high-draw appliances like central AC, electric water heaters, and electric ovens will exceed most portable solar generators. For whole-home backup including HVAC, a permanent solar-plus-battery system is better suited.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a solar generator and a portable power station?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A portable power station is the battery and inverter unit alone. A solar generator is a portable power station bundled with one or more solar panels, creating a self-contained system that can harvest, store, and deliver electricity without grid power. Some manufacturers sell bundles together; others sell panels separately. Either way, any portable power station with a solar input becomes a solar generator when paired with compatible panels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are solar generators worth it in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. California has 5.5-6.5 peak sun hours daily, frequent PSPS shutoffs (especially in fire-prone areas), and some of the highest electricity rates in the country (30-50 cents per kWh depending on utility and TOU period). A solar generator lets you harvest free energy during the day, power essentials during outages, and even offset TOU peak rates if you charge during off-peak solar hours and use stored power during peak billing periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many solar panels do I need for a portable power station?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on how fast you want to recharge and how much you consume daily. A good rule of thumb: divide your power station capacity by 5 to get the minimum panel wattage for a full charge in one sunny day. For a 2,000 Wh station, you want at least 400W of panels. For a 4,000 Wh station, 800W of panels. Always check your power station maximum solar input rating to avoid exceeding it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do solar generators qualify for tax credits or rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The federal Residential Clean Energy Credit for homeowners expired on December 31, 2025. Portable solar generators typically did not qualify anyway since the credit applied to permanently installed systems. However, California's SGIP (Self-Generation Incentive Program) may offer rebates of $150-$1,100 per kWh on qualifying battery storage systems, though eligibility criteria favor permanently installed setups. Check with your utility for current program availability.",
      },
    },
  ],
};

interface SolarGenerator {
  name: string;
  badge: string;
  bundlePrice: string;
  stationCapacity: string;
  stationOutput: string;
  panelWattage: string;
  panelType: string;
  maxSolarInput: string;
  batteryType: string;
  cycleLife: string;
  bundleWeight: string;
  affiliateLink: string;
}

const generators: SolarGenerator[] = [
  {
    name: 'EcoFlow Delta Pro 3 + 400W Panels',
    badge: 'Best Overall',
    bundlePrice: '$2,798',
    stationCapacity: '4,096 Wh',
    stationOutput: '4,000W',
    panelWattage: '2x 400W (800W)',
    panelType: 'Monocrystalline, bifacial',
    maxSolarInput: '2,600W',
    batteryType: 'LFP',
    cycleLife: '3,500+',
    bundleWeight: '~148 lbs total',
    affiliateLink: '#',
  },
  {
    name: 'Bluetti AC200L + PV200',
    badge: 'Best Mid-Range',
    bundlePrice: '$1,599',
    stationCapacity: '2,048 Wh',
    stationOutput: '2,400W',
    panelWattage: '1x 200W',
    panelType: 'Monocrystalline',
    maxSolarInput: '1,200W',
    batteryType: 'LFP',
    cycleLife: '3,000+',
    bundleWeight: '~77 lbs total',
    affiliateLink: '#',
  },
  {
    name: 'Jackery 2000 Plus + SolarSaga 200W',
    badge: 'Most Portable',
    bundlePrice: '$2,499',
    stationCapacity: '2,042 Wh',
    stationOutput: '3,000W',
    panelWattage: '2x 200W (400W)',
    panelType: 'Monocrystalline',
    maxSolarInput: '1,400W',
    batteryType: 'LFP',
    cycleLife: '4,000',
    bundleWeight: '~84 lbs total',
    affiliateLink: '#',
  },
  {
    name: 'Goal Zero Yeti 1500X + Nomad 200',
    badge: 'Best Ecosystem',
    bundlePrice: '$2,400',
    stationCapacity: '1,516 Wh',
    stationOutput: '2,000W',
    panelWattage: '1x 200W',
    panelType: 'Monocrystalline, foldable',
    maxSolarInput: '600W',
    batteryType: 'NMC',
    cycleLife: '500+',
    bundleWeight: '~93 lbs total',
    affiliateLink: '#',
  },
  {
    name: 'Anker SOLIX F3800 + PS400',
    badge: 'Best Heavy-Duty',
    bundlePrice: '$2,599',
    stationCapacity: '3,840 Wh',
    stationOutput: '6,000W',
    panelWattage: '1x 400W',
    panelType: 'Monocrystalline',
    maxSolarInput: '2,400W',
    batteryType: 'LFP',
    cycleLife: '3,000+',
    bundleWeight: '~155 lbs total',
    affiliateLink: '#',
  },
];

const specRows: { label: string; key: keyof SolarGenerator }[] = [
  { label: 'Bundle Price', key: 'bundlePrice' },
  { label: 'Station Capacity', key: 'stationCapacity' },
  { label: 'AC Output', key: 'stationOutput' },
  { label: 'Panel Wattage', key: 'panelWattage' },
  { label: 'Max Solar Input', key: 'maxSolarInput' },
  { label: 'Battery Type', key: 'batteryType' },
  { label: 'Cycle Life', key: 'cycleLife' },
  { label: 'Bundle Weight', key: 'bundleWeight' },
];

export default function BestSolarGenerator() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Reviews
              </Link>
            </nav>

            {/* Article Header */}
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                Comparison Guide
              </span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best Solar Generators (2026): Portable Power Station + Solar Panel Bundles Compared
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Sun className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span>20 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop' alt='Solar generator portable power' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                A solar generator combines a portable power station with solar panels to create a
                self-sustaining energy system that needs nothing but sunlight. No fuel, no fumes,
                no maintenance beyond wiping down the panels. For home backup, camping, off-grid
                living, or emergency preparedness, a solar generator is one of the most practical
                energy investments you can make in 2026.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We researched and compared dozens of power station and panel combinations to find the
                five best solar generator bundles on the market. This guide covers everything: head-to-head
                specs, real-world solar charging performance, sizing calculations, and honest pros
                and cons for each system.
              </p>
            </div>

            {/* Quick Verdict Box */}
            <div
              className="rounded-xl p-6 md:p-8 mb-12 border"
              style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                  Quick Verdict: Our Top 3 Picks
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#eab308', color: '#ffffff' }}>
                    1
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      EcoFlow Delta Pro 3 + 400W Panels — Best Overall Solar Generator
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      The most complete package. 4,096 Wh capacity, 4,000W output, and 800W of
                      bifacial panels that harvest 4,400-5,200 Wh per day in good sun. Enough to
                      power a home&apos;s essentials indefinitely with solar alone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#9ca3af', color: '#ffffff' }}>
                    2
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Bluetti AC200L + PV200 — Best Mid-Range Value
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      The sweet spot for most buyers. 2,048 Wh of LFP capacity, 2,400W output, and a
                      clean bundle price of $1,599. Add a second PV200 panel later to double your
                      solar harvest.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#92400e', color: '#ffffff' }}>
                    3
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Jackery 2000 Plus + SolarSaga 200W — Most Portable
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      At 61.5 lbs for the station alone, the Jackery 2000 Plus is the lightest
                      high-capacity option. 4,000-cycle LFP battery, clean 3,000W output, and
                      compact SolarSaga panels that fold down flat for transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Shield className="h-6 w-6 text-primary" />
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[800px] border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th
                        className="text-left p-3 font-semibold border-b-2"
                        style={{ color: '#f5f5f5', borderColor: '#27272a' }}
                      >
                        Spec
                      </th>
                      {generators.map((g) => (
                        <th
                          key={g.name}
                          className="text-left p-3 font-semibold border-b-2"
                          style={{ color: '#f5f5f5', borderColor: '#27272a' }}
                        >
                          <div className="text-xs leading-tight">{g.name}</div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1 inline-block">
                            {g.badge}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {specRows.map((row, i) => (
                      <tr
                        key={row.key}
                        className="border-b"
                        style={{
                          borderColor: '#27272a',
                          backgroundColor: i % 2 === 1 ? '#171717' : 'transparent',
                        }}
                      >
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                          {row.label}
                        </td>
                        {generators.map((g) => (
                          <td key={g.name} className="p-3" style={{ color: '#a1a1aa' }}>
                            {g[row.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Individual Reviews */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-8 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Battery className="h-6 w-6 text-primary" />
                In-Depth Reviews
              </h2>

              {/* 1. EcoFlow Delta Pro 3 + 400W */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    1. EcoFlow Delta Pro 3 + 400W Solar Panels
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    Best Overall
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  The EcoFlow Delta Pro 3 is the gold standard for portable home backup in 2026, and
                  pairing it with two EcoFlow 400W bifacial panels creates the most capable solar
                  generator system on the market. The station delivers 4,096 Wh of LFP capacity
                  (expandable to 12,288 Wh with extra batteries), 4,000W of continuous AC output, and
                  a staggering 2,600W maximum solar input.
                </p>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  With 800W of solar panels in California&apos;s 5.5-6.5 peak sun hours, you can harvest
                  roughly 4,400-5,200 Wh per day, more than enough to fully recharge the station from
                  zero and keep your essentials running indefinitely. The bifacial panels capture reflected
                  light from the back side, squeezing out an extra 10-25% in optimal conditions.
                </p>
                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  EcoFlow&apos;s X-Stream charging gets the station from 0 to 80% in 50 minutes via wall
                  outlet, which is useful when you need a fast top-off before a planned outage. The
                  Smart Home Panel integration lets you wire this into your home&apos;s circuit panel for
                  automatic switchover during outages.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Highest capacity in a single unit (4,096 Wh, expandable to 12,288 Wh)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        X-Stream fast charging: 0-80% in 50 minutes from wall outlet
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        2,600W max solar input handles large panel arrays
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Bifacial panels boost output 10-25% in reflective environments
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Smart Home Panel integration for whole-home backup
                      </li>
                    </ul>
                  </div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Heavy: station alone is 114 lbs, plus ~34 lbs of panels
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Bundle price is the highest on this list at ~$2,798
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        EcoFlow 400W panels are proprietary connectors (adapters available)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#27272a' }}>
                  <div>
                    <span className="text-sm font-medium" style={{ color: '#a1a1aa' }}>Bundle Price:</span>
                    <span className="ml-2 text-lg font-bold" style={{ color: '#22c55e' }}>~$2,798</span>
                  </div>
                  <BuyButton
                    productKey="ecoflow-delta-pro-3"
                    source="best-solar-generator"
                    variant="primary"
                    label="Check Price — EcoFlow Delta Pro 3 + 400W Solar Panels"
                    showPrice
                  />
                </div>
              </div>

              {/* 2. Bluetti AC200L + PV200 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    2. Bluetti AC200L + PV200 Solar Panel
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
                  >
                    Best Mid-Range
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  The Bluetti AC200L hits the sweet spot between capacity, output, and price. At $1,599
                  bundled with the PV200 panel, it offers 2,048 Wh of LFP capacity and a clean 2,400W
                  continuous output (3,600W surge). That&apos;s enough to run a fridge, lights, router,
                  laptops, and charge phones for well over a day on a single charge.
                </p>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  The PV200 is a 200W monocrystalline foldable panel that delivers roughly 160-180W of
                  real-world output in direct sun. In California, that translates to about 880-1,170 Wh
                  per day, enough to partially recharge the station daily. Add a second PV200 for $350
                  to double your solar harvest and achieve a full daily recharge in good conditions.
                </p>
                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  With 1,200W of maximum solar input, the AC200L has plenty of headroom to grow your
                  panel array over time. It supports both MC4 and Bluetti&apos;s proprietary connectors,
                  giving you flexibility in panel choice.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Best price-to-capacity ratio on this list ($0.78/Wh)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        2,400W continuous output handles most home essentials
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        1,200W max solar input allows easy panel upgrades
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        LFP battery with 3,000+ cycles — roughly 8 years of daily use
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Supports both MC4 and proprietary panel connectors
                      </li>
                    </ul>
                  </div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Single PV200 only partially recharges station per day
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        No home panel integration (standalone use only)
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Not expandable with extra battery packs (fixed 2,048 Wh)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#27272a' }}>
                  <div>
                    <span className="text-sm font-medium" style={{ color: '#a1a1aa' }}>Bundle Price:</span>
                    <span className="ml-2 text-lg font-bold" style={{ color: '#22c55e' }}>~$1,599</span>
                  </div>
                  <BuyButton
                    productKey="bluetti-ac200l"
                    source="best-solar-generator"
                    variant="primary"
                    label="Check Price — Bluetti AC200L + PV200 Solar Panel"
                    showPrice
                  />
                </div>
              </div>

              {/* 3. Jackery 2000 Plus + SolarSaga 200W */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    3. Jackery Explorer 2000 Plus + SolarSaga 200W Panels
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#f59e0b', color: '#0a0a0a' }}
                  >
                    Most Portable
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  If portability matters, the Jackery 2000 Plus wins hands down. At 61.5 lbs, it is
                  nearly half the weight of competitors with similar capacity. The station packs 2,042 Wh
                  of LFP battery with a best-in-class 4,000-cycle rating, meaning it should last roughly
                  11 years of daily cycling before dropping to 80% capacity.
                </p>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  Bundled with two SolarSaga 200W panels, you get 400W of folding solar input. In
                  California sun, that translates to roughly 2,200-2,600 Wh per day, enough for a full
                  daily recharge with some headroom. The SolarSaga panels are among the most portable on
                  the market, folding down to a compact carry case that fits in a car trunk easily.
                </p>
                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  The 3,000W output covers most essentials, and the station is expandable up to 12,000 Wh
                  with add-on battery packs. Jackery&apos;s app provides real-time monitoring of solar
                  input, battery level, and load draw from your phone.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Lightest in class: 61.5 lbs (station), ~22 lbs (panels)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Best cycle life: 4,000 cycles to 80% capacity
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Expandable to 12,000 Wh with add-on batteries
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        SolarSaga panels fold flat for easy transport
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Real-time app monitoring for solar input and loads
                      </li>
                    </ul>
                  </div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Bundle price of $2,499 is high relative to capacity
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        3,000W output may not handle multiple heavy appliances
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Proprietary SolarSaga connectors limit third-party panel options
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#27272a' }}>
                  <div>
                    <span className="text-sm font-medium" style={{ color: '#a1a1aa' }}>Bundle Price:</span>
                    <span className="ml-2 text-lg font-bold" style={{ color: '#22c55e' }}>~$2,499</span>
                  </div>
                  <BuyButton
                    productKey="jackery-explorer-2000-plus"
                    source="best-solar-generator"
                    variant="primary"
                    label="Check Price — Jackery Explorer 2000 Plus + SolarSaga 200W Panels"
                    showPrice
                  />
                </div>
              </div>

              {/* 4. Goal Zero Yeti 1500X + Nomad 200 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    4. Goal Zero Yeti 1500X + Nomad 200 Solar Panel
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#8b5cf6', color: '#ffffff' }}
                  >
                    Best Ecosystem
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  Goal Zero pioneered the portable solar generator category, and the Yeti 1500X
                  remains a solid option for those who value brand maturity and ecosystem depth. The
                  station packs 1,516 Wh of NMC battery with 2,000W continuous output (3,500W surge).
                  It&apos;s built like a tank, with a rugged aluminum chassis that&apos;s taken years of
                  abuse in field testing.
                </p>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  The Nomad 200 is a premium foldable panel that delivers consistent 160-180W in direct
                  sun. In California, expect roughly 880-1,170 Wh of daily solar harvest. That won&apos;t
                  fully recharge the 1,516 Wh station in a single day, so adding a second Nomad 200 is
                  recommended for full solar independence.
                </p>
                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  Where Goal Zero excels is ecosystem. Their app, accessories, chaining cables, and
                  compatibility across the entire Yeti line mean you can mix and match components. The
                  Link expansion module connects to your home panel for automatic backup, similar to
                  EcoFlow&apos;s Smart Home Panel.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Most mature ecosystem: accessories, Link module, app
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Rugged build quality with aluminum chassis
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Nomad panels are extremely durable and weather-resistant
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Home integration available via Link expansion module
                      </li>
                    </ul>
                  </div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        NMC battery: only 500+ cycles vs 3,000-4,000 for LFP competitors
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        600W max solar input severely limits panel scaling
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Smallest capacity on this list (1,516 Wh)
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Bundle price of $2,400 is poor value per Wh
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#27272a' }}>
                  <div>
                    <span className="text-sm font-medium" style={{ color: '#a1a1aa' }}>Bundle Price:</span>
                    <span className="ml-2 text-lg font-bold" style={{ color: '#22c55e' }}>~$2,400</span>
                  </div>
                  <BuyButton
                    productKey="goal-zero-yeti-1500x-nomad-200-solar-panel"
                    source="best-solar-generator"
                    variant="primary"
                    label="Check Price — Goal Zero Yeti 1500X + Nomad 200 Solar Panel"
                    showPrice
                  />
                </div>
              </div>

              {/* 5. Anker SOLIX F3800 + PS400 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    5. Anker SOLIX F3800 + PS400 Solar Panel
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#ef4444', color: '#ffffff' }}
                  >
                    Best Heavy-Duty
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  The Anker SOLIX F3800 is a powerhouse in every sense. With 3,840 Wh of LFP capacity
                  and a class-leading 6,000W continuous AC output (surge to 9,000W), it can handle
                  virtually any home appliance short of central air conditioning. Expandable to an
                  absurd 26,880 Wh with extra battery packs, this is the system to pick if raw power
                  and capacity matter most.
                </p>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  The PS400 is Anker&apos;s 400W monocrystalline panel, delivering roughly 320-360W in
                  real-world conditions. In California, a single panel harvests about 1,760-2,340 Wh per
                  day. That fills about half the station in a day. For full daily solar recharge, you&apos;d
                  want two PS400 panels (2,400W total solar input is the station&apos;s max).
                </p>
                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  The F3800 also works with Anker&apos;s home backup panel for automatic grid-failure
                  switchover. At the current promo price of $1,799 for the station alone (down from
                  $3,999), the value proposition is remarkable. Add a $800 PS400 panel and you have a
                  $2,599 solar generator with 3,840 Wh and 6,000W output.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Highest output on this list: 6,000W continuous (9,000W surge)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Expandable to 26,880 Wh (largest expansion of any portable system)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Station currently at massive discount ($1,799 vs $3,999 MSRP)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Home backup panel for automatic switchover
                      </li>
                    </ul>
                  </div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <p className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Heaviest bundle on this list (~155 lbs total)
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Single PS400 only covers ~50% daily recharge
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Promo pricing may not last — check current price
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Large footprint — not ideal for camping or vehicle use
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#27272a' }}>
                  <div>
                    <span className="text-sm font-medium" style={{ color: '#a1a1aa' }}>Bundle Price:</span>
                    <span className="ml-2 text-lg font-bold" style={{ color: '#22c55e' }}>~$2,599</span>
                  </div>
                  <BuyButton
                    productKey="anker-solix-f3800"
                    source="best-solar-generator"
                    variant="primary"
                    label="Check Price — Anker SOLIX F3800 + PS400 Solar Panel"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* Solar Charging Explainer */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Sun className="h-6 w-6 text-primary" />
                How Solar Charging Works (and Why It Matters)
              </h2>
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  A solar generator is only as useful as its ability to recharge from the sun. Here is
                  how the solar charging pipeline works and what affects real-world performance:
                </p>

                <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  The Solar Charging Pipeline
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                    >
                      1
                    </span>
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>Sunlight hits the panels</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        Solar panels convert photons into DC electricity. A 400W panel rated at STC
                        (Standard Test Conditions: 1,000 W/m2 irradiance, 25C) will produce 400W only
                        under lab-perfect conditions. Real-world output is typically 80-90% of rated
                        wattage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                    >
                      2
                    </span>
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>MPPT controller optimizes input</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        Every power station on this list uses an MPPT (Maximum Power Point Tracking)
                        charge controller. MPPT continuously adjusts voltage and current to extract the
                        maximum possible power from the panels, even as conditions change throughout the day.
                        MPPT is 20-30% more efficient than older PWM controllers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                    >
                      3
                    </span>
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>Energy stored in the battery</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        The DC power charges the internal battery. LFP (lithium iron phosphate) batteries
                        are the gold standard in 2026: 3,000-4,000+ cycle life, excellent thermal stability,
                        and no cobalt or nickel. The only unit on this list still using NMC is the Goal Zero
                        Yeti 1500X, which has significantly fewer cycle life.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                    >
                      4
                    </span>
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>Inverter converts DC to AC</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        When you plug in appliances, the built-in inverter converts stored DC energy to
                        standard 120V AC (or 240V on units like the F3800). Pure sine wave inverters on
                        all five units deliver clean power safe for sensitive electronics like laptops,
                        medical devices, and gaming consoles.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Real-World Solar Harvest Estimates
                </h3>
                <p className="mb-3 text-sm" style={{ color: '#a1a1aa' }}>
                  Based on 5.5-6.5 peak sun hours (California average) and 80-90% real-world panel efficiency:
                  1x 200W panel harvests ~880-1,170 Wh/day (supplemental). 2x 200W or 1x 400W harvests
                  ~1,760-2,340 Wh/day (full recharge of 2,000 Wh stations). 2x 400W panels harvest
                  ~3,520-4,680 Wh/day (full recharge of 4,000 Wh stations).
                </p>
              </div>
            </section>

            {/* Sizing Guide */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Zap className="h-6 w-6 text-primary" />
                Solar Generator Sizing Guide: What Size Do You Need?
              </h2>
              <p className="mb-6" style={{ color: '#d4d4d8' }}>
                Choosing the right solar generator depends on what you plan to power, how long you
                need it to last, and whether you want full solar recharge capability. Here is a
                practical sizing framework:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                    Light Use (1,000-1,500 Wh)
                  </h3>
                  <p className="text-sm mb-3" style={{ color: '#a1a1aa' }}>
                    Camping, tailgating, short outages
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Phone/tablet charging
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      LED lights
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Laptop charging
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Small fan
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      CPAP machine
                    </li>
                  </ul>
                  <p className="mt-3 text-xs" style={{ color: '#a1a1aa' }}>
                    Panel rec: 1x 200W (daily harvest: ~880-1,170 Wh)
                  </p>
                  <p className="text-sm font-semibold mt-2" style={{ color: '#22c55e' }}>
                    Pick: Goal Zero Yeti 1500X + Nomad 200
                  </p>
                </div>

                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                    Medium Use (2,000-3,000 Wh)
                  </h3>
                  <p className="text-sm mb-3" style={{ color: '#a1a1aa' }}>
                    Home backup essentials, 1-2 day outages
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Everything above, plus:
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Full-size refrigerator
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Wi-Fi router
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      TV/entertainment
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Small microwave (short runs)
                    </li>
                  </ul>
                  <p className="mt-3 text-xs" style={{ color: '#a1a1aa' }}>
                    Panel rec: 400W total (daily harvest: ~1,760-2,340 Wh)
                  </p>
                  <p className="text-sm font-semibold mt-2" style={{ color: '#22c55e' }}>
                    Pick: Bluetti AC200L + PV200 or Jackery 2000 Plus + SolarSaga
                  </p>
                </div>

                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                    Heavy Use (4,000+ Wh)
                  </h3>
                  <p className="text-sm mb-3" style={{ color: '#a1a1aa' }}>
                    Extended outages, PSPS events, off-grid
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Everything above, plus:
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Multiple circuits simultaneously
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Well pump
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Space heater (short runs)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Power tools
                    </li>
                  </ul>
                  <p className="mt-3 text-xs" style={{ color: '#a1a1aa' }}>
                    Panel rec: 800W+ total (daily harvest: ~3,520-4,680 Wh)
                  </p>
                  <p className="text-sm font-semibold mt-2" style={{ color: '#22c55e' }}>
                    Pick: EcoFlow Delta Pro 3 + 400W or Anker F3800 + PS400
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                  <DollarSign className="h-5 w-5 text-primary" />
                  Quick Sizing Formula
                </h3>
                <p className="mb-3" style={{ color: '#d4d4d8' }}>
                  To estimate the station capacity you need:
                </p>
                <ol className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                  <li><strong style={{ color: '#f5f5f5' }}>Step 1:</strong> List every appliance with wattage and daily hours of use.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Step 2:</strong> Multiply wattage by hours (e.g., 150W fridge x 8h = 1,200 Wh).</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Step 3:</strong> Sum all Wh values = daily energy consumption.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Step 4:</strong> Multiply by 1.2 for inverter/BMS overhead.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Step 5:</strong> Divide station capacity by 5 = minimum panel wattage for full daily recharge.</li>
                </ol>
                <p className="mt-4 text-sm" style={{ color: '#a1a1aa' }}>
                  <strong>Example:</strong> Fridge (1,200 Wh) + Router (120 Wh) + Lights (200 Wh) +
                  Phone charging (50 Wh) + Laptop (300 Wh) = 1,870 Wh/day x 1.2 = 2,244 Wh minimum
                  station capacity. Panel recommendation: 2,244 / 5 = ~450W of solar panels.
                </p>
              </div>
            </section>

            {/* Key Buying Factors */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Star className="h-6 w-6 text-primary" />
                What to Look for in a Solar Generator
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>Battery Capacity (Wh)</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    How much energy the station stores. A 2,000 Wh station powers a 200W load for 10 hours. For home backup, we recommend at least 2,000 Wh.
                  </p>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>AC Output (Watts)</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    Determines what you can run simultaneously. 2,000W handles essentials. 4,000W+ adds microwaves, tools, heaters. Always check continuous rating, not just surge.
                  </p>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>Max Solar Input (Watts)</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    Caps how fast solar can recharge your station. The Bluetti AC200L accepts 1,200W; the Anker F3800 handles 2,400W. Higher input means more panels and faster recharging.
                  </p>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>Battery Chemistry</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    LFP is the 2026 standard: 3,000-4,000+ cycles, excellent thermal stability. NMC offers slightly higher energy density but only 500-1,000 cycles. All picks here use LFP except Goal Zero.
                  </p>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>Panel Type</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    Folding panels are most portable. Bifacial panels capture reflected light for 10-25% extra output. For home backup, prioritize efficiency. For camping, prioritize compact folding designs.
                  </p>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>Expandability</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    EcoFlow Delta Pro 3 expands to 12,288 Wh, Jackery 2000 Plus to 12,000 Wh, Anker F3800 to 26,880 Wh. Start with one unit and scale later.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Shield className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-6 border"
                    style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                  >
                    <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                      {faq.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Verdict */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <CheckCircle className="h-6 w-6" style={{ color: '#22c55e' }} />
                Final Verdict: Which Solar Generator Should You Buy?
              </h2>
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="space-y-6">
                  <div>
                    <p className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                      For most people: EcoFlow Delta Pro 3 + 400W Panels
                    </p>
                    <p className="text-sm" style={{ color: '#d4d4d8' }}>
                      The most complete solar generator on the market. 4,096 Wh of LFP capacity,
                      4,000W output, 2,600W solar input, and Smart Home Panel integration make it the
                      best choice for homeowners who want serious backup capability. The bifacial panels
                      maximize solar harvest in any environment. Yes, it is the most expensive bundle at
                      $2,798, but you get a system that can genuinely run a home&apos;s essentials
                      indefinitely on solar power alone.
                    </p>
                  </div>

                  <div className="border-t pt-4" style={{ borderColor: '#27272a' }}>
                    <p className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                      Best value: Bluetti AC200L + PV200
                    </p>
                    <p className="text-sm" style={{ color: '#d4d4d8' }}>
                      At $1,599, the AC200L bundle offers the lowest cost per watt-hour on this list.
                      2,048 Wh and 2,400W output cover the essentials, and you can add a second PV200
                      panel later for $350 to double your solar harvest. The best entry point for
                      anyone building their first solar generator setup.
                    </p>
                  </div>

                  <div className="border-t pt-4" style={{ borderColor: '#27272a' }}>
                    <p className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                      For portability: Jackery 2000 Plus + SolarSaga 200W
                    </p>
                    <p className="text-sm" style={{ color: '#d4d4d8' }}>
                      The lightest high-capacity bundle on this list. At 61.5 lbs for the station and
                      compact folding panels, it is the best choice if you need to move the system
                      between locations: home backup during the week, camping on weekends. The 4,000-cycle
                      LFP battery means it will last over a decade.
                    </p>
                  </div>

                  <div className="border-t pt-4" style={{ borderColor: '#27272a' }}>
                    <p className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                      For maximum power: Anker SOLIX F3800 + PS400
                    </p>
                    <p className="text-sm" style={{ color: '#d4d4d8' }}>
                      If you need to power heavy appliances — well pumps, power tools, space heaters —
                      the F3800&apos;s 6,000W continuous output is unmatched. At the current promo
                      price, the bundle is a steal at $2,599. Just be prepared for the weight: this is
                      a stay-in-place system, not a grab-and-go.
                    </p>
                  </div>

                  <div className="border-t pt-4" style={{ borderColor: '#27272a' }}>
                    <p className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                      For brand loyalists: Goal Zero Yeti 1500X + Nomad 200
                    </p>
                    <p className="text-sm" style={{ color: '#d4d4d8' }}>
                      Goal Zero&apos;s ecosystem is the most mature in the industry, and the build
                      quality is outstanding. However, the NMC battery (500+ cycles vs 3,000-4,000 for
                      LFP), limited 600W solar input, and poor value per Wh make it hard to recommend
                      over the other four options unless you are already invested in the Goal Zero ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Reviews */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Related Reviews
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/reviews/best-portable-power-stations"
                  className="rounded-xl p-5 border flex items-center gap-3 transition-all hover:border-primary"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <Battery className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>
                      Best Portable Power Stations (2026)
                    </p>
                    <p className="text-xs" style={{ color: '#a1a1aa' }}>
                      In-depth reviews of EcoFlow, Anker, Bluetti, and Jackery stations
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto flex-shrink-0" style={{ color: '#a1a1aa' }} />
                </Link>
                <Link
                  href="/reviews/ecoflow-delta-pro-3-review"
                  className="rounded-xl p-5 border flex items-center gap-3 transition-all hover:border-primary"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>
                      EcoFlow Delta Pro 3 Review
                    </p>
                    <p className="text-xs" style={{ color: '#a1a1aa' }}>
                      Full review: 4,096 Wh, 4,000W output, X-Stream charging
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto flex-shrink-0" style={{ color: '#a1a1aa' }} />
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
