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
  Clock,
  DollarSign,
  Shield,
  Star,
  Sun,
  X,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Portable Heaters (2026): Propane & Electric Compared | GreenReviewsHub',
  description:
    'Compare the best portable heaters for 2026 including propane and electric models. In-depth reviews of Mr. Heater Buddy, DeWalt DXH12B, Sengoku HeatMate, Lasko 755320, Dr. Infrared DR-218, and Campy Gear Chubby. BTU guide, safety tips, and buyer FAQ.',
  alternates: {
    canonical: '/reviews/best-portable-heater',
  },
  openGraph: {
    title: 'Best Portable Heaters (2026): Propane & Electric Compared',
    description:
      'Mr. Heater Buddy vs DeWalt DXH12B vs Sengoku HeatMate vs Lasko 755320 vs Dr. Infrared DR-218 vs Campy Gear Chubby. Full specs, pros/cons, and safety guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Portable Heaters (2026): Propane & Electric Compared',
  description:
    'Compare the best portable heaters for 2026 including propane and electric models. In-depth reviews covering Mr. Heater Buddy, DeWalt DXH12B, Sengoku HeatMate, Lasko 755320, Dr. Infrared DR-218, and Campy Gear Chubby 2-in-1.',
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
    '@id': 'https://ratereliefca.com/reviews/best-portable-heater',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to use a propane heater indoors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some propane heaters are rated for indoor use, such as the Mr. Heater Buddy which includes an ODS (Oxygen Depletion Sensor) and tip-over shutoff. However, you must ensure adequate ventilation -- crack a window or door -- and always use a standalone CO detector nearby. Never use outdoor-only forced-air or construction propane heaters inside enclosed spaces.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many BTUs do I need to heat my space?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common rule of thumb is 20 BTUs per square foot for moderately insulated rooms. A 200 sq ft room needs roughly 4,000 BTU; a 400 sq ft room needs about 8,000 BTU. For poorly insulated garages or workshops, bump the estimate up by 25-50%. Electric heaters are typically rated in watts -- multiply watts by 3.41 to convert to BTU/hr.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a portable heater while camping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but choose one designed for tent or enclosed-space use. The Mr. Heater Buddy and Campy Gear Chubby are popular camping heaters because they run on small 1 lb propane canisters and have built-in safety shutoffs. Always ventilate your tent and keep the heater on a stable, level surface away from flammable materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Propane vs electric heater: which costs less to run?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your local propane and electricity prices. At average 2026 U.S. rates, propane typically costs $1.50-2.50 per hour for a 9,000 BTU heater, while a 1,500W electric heater costs $0.20-0.35 per hour at $0.15-0.25/kWh. Electric heaters are usually cheaper to operate per hour, but propane heaters produce more BTUs and work during power outages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do portable electric heaters use a lot of electricity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most portable electric heaters draw 1,500 watts on their highest setting, which is the maximum a standard 15-amp household circuit can handle. Running one for 8 hours a day at $0.20/kWh costs about $2.40 per day or roughly $72 per month. Models with thermostats and eco modes, like the Lasko 755320, cycle on and off to reduce actual consumption.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run a portable heater off a solar generator or power station?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can, but a 1,500W electric heater will drain a portable power station quickly. A 2,000 Wh battery would last only about 1.2 hours at full draw. If off-grid heating is your goal, propane heaters are far more practical since they need no electricity. Alternatively, pair a smaller 750W ceramic heater with a large-capacity power station for shorter supplemental use.',
      },
    },
    {
      '@type': 'Question',
      name: 'What safety features should I look for in a portable heater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential safety features include tip-over automatic shutoff, overheat protection, and cool-touch housing for electric models. For propane heaters, look for an ODS (Oxygen Depletion Sensor) that shuts the unit off when oxygen drops below safe levels. A built-in CO detector is a bonus but should not replace a standalone carbon monoxide alarm in the room.',
      },
    },
  ],
};

interface Heater {
  name: string;
  badge: string;
  type: string;
  price: string;
  btu: string;
  fuelSource: string;
  runtime: string;
  weight: string;
  bestFor: string;
  affiliateLink: string;
}

const heaters: Heater[] = [
  {
    name: 'Mr. Heater Buddy',
    badge: 'Best Overall',
    type: 'Propane',
    price: '$112',
    btu: '4,000-9,000',
    fuelSource: '1 lb propane canister',
    runtime: '3-6 hours',
    weight: '9 lbs',
    bestFor: 'Camping, garages, emergency backup',
    affiliateLink: '#',
  },
  {
    name: 'DeWalt DXH12B',
    badge: 'Best Forced Air',
    type: 'Propane',
    price: '$165',
    btu: '6,000-12,000',
    fuelSource: '1 lb or 20 lb propane tank',
    runtime: '4-14 hours (20 lb)',
    weight: '10 lbs',
    bestFor: 'Job sites, workshops, garages',
    affiliateLink: '#',
  },
  {
    name: 'Sengoku HeatMate',
    badge: 'Best Kerosene/Propane',
    type: 'Radiant',
    price: '$185',
    btu: '10,000',
    fuelSource: 'Kerosene (1.2 gal tank)',
    runtime: '14-16 hours',
    weight: '13 lbs',
    bestFor: 'Extended outages, off-grid cabins',
    affiliateLink: '#',
  },
  {
    name: 'Lasko 755320',
    badge: 'Best Electric',
    type: 'Electric Ceramic',
    price: '$60',
    btu: '5,118 (1,500W)',
    fuelSource: '120V outlet',
    runtime: 'Unlimited (plugged in)',
    weight: '8.3 lbs',
    bestFor: 'Bedrooms, offices, daily use',
    affiliateLink: '#',
  },
  {
    name: 'Dr. Infrared DR-218',
    badge: 'Best Garage Electric',
    type: 'Electric Infrared',
    price: '$95',
    btu: '5,118 (1,500W)',
    fuelSource: '120V outlet',
    runtime: 'Unlimited (plugged in)',
    weight: '14.5 lbs',
    bestFor: 'Garages, workshops, patios',
    affiliateLink: '#',
  },
  {
    name: 'Campy Gear Chubby 2-in-1',
    badge: 'Best Ultralight',
    type: 'Propane',
    price: '$70',
    btu: '9,000',
    fuelSource: '1 lb propane canister',
    runtime: '3-4 hours',
    weight: '3.3 lbs',
    bestFor: 'Backpacking, tent camping, tailgating',
    affiliateLink: '#',
  },
];

export default function BestPortableHeater() {
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
      <main className="min-h-screen py-16" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container mx-auto px-4">
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight" style={{ color: '#f5f5f5' }}>
                Best Portable Heaters (2026): Propane & Electric Compared
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Sun className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop' alt='Portable heater in home' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Whether you&apos;re heating a tent at 10,000 feet, keeping a garage workshop
                comfortable in January, or bracing for a winter power outage, the right portable
                heater can be a lifesaver. The market splits into two major camps: <strong style={{ color: '#f5f5f5' }}>propane/fuel-burning</strong> models
                that work off-grid and <strong style={{ color: '#f5f5f5' }}>electric</strong> models that plug into a wall
                outlet for convenient, fume-free warmth.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                We tested and researched six standout portable heaters across both categories to help
                you find the best match for your budget, use case, and safety requirements. Every
                pick below was evaluated on heat output (BTU), runtime, portability, safety features,
                and real-world value.
              </p>
            </div>

            {/* Quick Picks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Star className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Quick Picks at a Glance
              </h2>
              <div className="grid gap-4">
                {heaters.map((h) => (
                  <div
                    key={h.name}
                    className="rounded-xl border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    style={{ backgroundColor: '#141414', borderColor: '#262626' }}
                  >
                    <div>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full mr-2"
                        style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                      >
                        {h.badge}
                      </span>
                      <span className="font-bold" style={{ color: '#f5f5f5' }}>{h.name}</span>
                      <span className="ml-2 text-sm" style={{ color: '#a1a1aa' }}>
                        {h.btu} BTU &middot; {h.type} &middot; {h.price}
                      </span>
                    </div>
                    <a
                      href={h.affiliateLink}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:opacity-90 whitespace-nowrap"
                      style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                    >
                      Check Price <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Full Comparison Table
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#262626' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Heater</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Type</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>BTU</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Runtime</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Weight</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {heaters.map((h, i) => (
                      <tr
                        key={h.name}
                        style={{
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                          borderTop: '1px solid #262626',
                        }}
                      >
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{h.name}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{h.type}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{h.btu}</td>
                        <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>{h.price}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{h.runtime}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{h.weight}</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>{h.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. Mr. Heater Buddy */}
            <section className="mb-12">
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}>
                    Best Overall
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>Propane</span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  1. Mr. Heater Buddy (MH9BX) -- 4,000-9,000 BTU
                </h3>
                <p className="mb-4 text-sm font-semibold" style={{ color: '#22c55e' }}>$112</p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Mr. Heater Buddy is the gold standard for portable propane heating and has been
                  for over a decade. Its combination of indoor-rated safety features, simple 1 lb canister
                  operation, and adjustable heat output (4,000-9,000 BTU) makes it the go-to choice for
                  campers, ice fishers, and emergency preppers alike. The radiant heat design warms
                  spaces up to 225 sq ft quickly, and the piezo ignition means no batteries or matches
                  needed.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The built-in ODS (Oxygen Depletion Sensor) automatically shuts the unit off if oxygen
                  levels drop too low, and the tip-over safety switch adds another layer of protection.
                  At just 9 lbs and with a fold-down handle, it slides easily into a camping pack or
                  truck bed.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Indoor-rated with ODS and tip-over shutoff</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Affordable at ~$112 (heater only)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> No electricity, batteries, or matches needed</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Adjustable output (low 4K / high 9K BTU)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Millions sold -- proven reliability track record</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Only 3-6 hours on a 1 lb canister</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Needs adapter hose for 20 lb tank</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> No thermostat or auto-cycling</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Not suited for spaces larger than ~225 sq ft</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="mr-heater-buddy-mh9bx-4000-9000-btu"
                  source="best-portable-heater"
                  variant="primary"
                  label="Check Price — Mr. Heater Buddy (MH9BX) -- 4,000-9,000 BTU"
                  showPrice
                />
              </div>
            </section>

            {/* 2. DeWalt DXH12B */}
            <section className="mb-12">
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#f59e0b', color: '#0a0a0a' }}>
                    Best Forced Air
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>Propane</span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  2. DeWalt DXH12B -- 6,000-12,000 BTU
                </h3>
                <p className="mb-4 text-sm font-semibold" style={{ color: '#22c55e' }}>$165</p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The DeWalt DXH12B is a forced-air propane heater designed for job sites, workshops,
                  and garages where you need warm air circulated quickly across a larger area. Unlike
                  radiant heaters that warm objects in their line of sight, the DXH12B uses a built-in
                  fan to push heated air throughout spaces up to 300 sq ft. It connects to either a 1 lb
                  disposable canister or a 20 lb bulk tank with the included hose and regulator.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  With variable output from 6,000 to 12,000 BTU, it heats a two-car garage noticeably
                  within 15-20 minutes. The Quiet Burner Technology keeps noise manageable for a forced-air
                  unit. Note: the fan requires 4 D-cell batteries, so it works during power outages without
                  needing a generator.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Forced air heats large spaces fast</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Works with 1 lb or 20 lb propane tanks</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Battery-powered fan -- no outlet needed</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> DeWalt build quality and durability</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Quiet Burner Technology reduces noise</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Requires 4 D-cell batteries for the fan</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Outdoor/well-ventilated use only</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Pricier than basic radiant propane heaters</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Burns through propane faster at 12K BTU</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="dewalt-dxh12b-6000-12000-btu"
                  source="best-portable-heater"
                  variant="primary"
                  label="Check Price — DeWalt DXH12B -- 6,000-12,000 BTU"
                  showPrice
                />
              </div>
            </section>

            {/* 3. Sengoku HeatMate */}
            <section className="mb-12">
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#8b5cf6', color: '#ffffff' }}>
                    Best Kerosene
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>Radiant</span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  3. Sengoku HeatMate (OR-77) -- 10,000 BTU
                </h3>
                <p className="mb-4 text-sm font-semibold" style={{ color: '#22c55e' }}>$185</p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Sengoku HeatMate is a kerosene radiant heater that shines in extended off-grid
                  scenarios. Where propane heaters burn through small canisters in 3-6 hours, the
                  HeatMate&apos;s 1.2-gallon kerosene tank delivers a remarkable 14-16 hours of continuous
                  heat at 10,000 BTU. That makes it ideal for cabins without electricity, long power
                  outages, or any situation where refueling every few hours is impractical.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The radiant design heats objects and people directly rather than warming the air, so
                  it feels effective even in drafty spaces. An automatic shutoff engages if the unit is
                  tipped or bumped. The trade-off is the typical kerosene odor during startup and shutdown,
                  and you must store kerosene fuel separately.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> 14-16 hours runtime per fill -- best in class</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> 10,000 BTU heats up to 380 sq ft</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Completely electricity-free operation</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Tip-over automatic safety shutoff</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Can also heat water/food on top surface</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Kerosene odor during startup/shutdown</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Requires storing kerosene fuel</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Heavier at 13 lbs</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Needs ventilation -- not fully sealed-room safe</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="sengoku-heatmate-or-77-10000-btu"
                  source="best-portable-heater"
                  variant="primary"
                  label="Check Price — Sengoku HeatMate (OR-77) -- 10,000 BTU"
                  showPrice
                />
              </div>
            </section>

            {/* 4. Lasko 755320 */}
            <section className="mb-12">
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}>
                    Best Electric
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#3b82f622', color: '#3b82f6' }}>Electric Ceramic</span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  4. Lasko 755320 Ceramic Tower -- 1,500W (5,118 BTU)
                </h3>
                <p className="mb-4 text-sm font-semibold" style={{ color: '#22c55e' }}>$60</p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Lasko 755320 is the bestselling electric space heater in America for good reason.
                  Its slim ceramic tower design packs 1,500 watts of heating power into a unit that
                  barely takes up a square foot of floor space. The built-in thermostat and two heat
                  settings let you dial in comfort while the auto-eco mode cycles the heater on and off
                  to maintain your target temperature -- reducing electricity costs compared to units
                  that run full-blast continuously.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  With a widespread oscillation feature, cool-touch exterior, overheat protection, and
                  a self-regulating ceramic element, the 755320 is one of the safest electric heaters
                  you can leave running in a bedroom or office. The remote control is a nice bonus for
                  bedside use. The only downside: it requires a wall outlet, so it&apos;s useless during
                  a power outage unless paired with a generator or power station.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Budget-friendly at $60</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Built-in thermostat with eco mode saves energy</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> No fumes, no fuel, no CO risk</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Remote control and oscillation</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Cool-touch housing, overheat shutoff</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Requires wall outlet -- useless during outages</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Max 1,500W limited by household circuit</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Only effective for rooms up to ~300 sq ft</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Plastic build feels less rugged than metal models</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="lasko-755320-ceramic-tower-1500w-5118-btu"
                  source="best-portable-heater"
                  variant="primary"
                  label="Check Price — Lasko 755320 Ceramic Tower -- 1,500W (5,118 BTU)"
                  showPrice
                />
              </div>
            </section>

            {/* 5. Dr. Infrared DR-218 */}
            <section className="mb-12">
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#f97316', color: '#0a0a0a' }}>
                    Best Garage Electric
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#3b82f622', color: '#3b82f6' }}>Electric Infrared</span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  5. Dr. Infrared DR-218 -- 1,500W (5,118 BTU)
                </h3>
                <p className="mb-4 text-sm font-semibold" style={{ color: '#22c55e' }}>$95</p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Dr. Infrared DR-218 is purpose-built for garages, workshops, and semi-outdoor
                  spaces. Unlike ceramic heaters that warm the air, the DR-218 uses infrared technology
                  to directly heat objects and people in its path -- similar to how sunlight warms you
                  on a cold day. This makes it highly effective in drafty, open-door environments where
                  conventional heaters struggle.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The wall/ceiling mount design keeps it off the floor and out of the way, and the
                  industrial-grade heating element is built to withstand dust, vibration, and temperature
                  swings. At 1,500W on a standard 120V outlet, it stays within household circuit limits.
                  For larger garage spaces, some users pair two units on separate circuits.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Infrared heats you directly, not just the air</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Wall/ceiling mount keeps floor clear</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Industrial-grade build for tough environments</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> No fumes, quiet operation</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Works in drafty/open-door spaces</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Requires mounting hardware/installation</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Only heats objects in direct line of sight</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> No thermostat -- manual on/off only</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> At 14.5 lbs, heavier than most portable electrics</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="dr-infrared-dr-218-1500w-5118-btu"
                  source="best-portable-heater"
                  variant="primary"
                  label="Check Price — Dr. Infrared DR-218 -- 1,500W (5,118 BTU)"
                  showPrice
                />
              </div>
            </section>

            {/* 6. Campy Gear Chubby 2-in-1 */}
            <section className="mb-12">
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#06b6d4', color: '#0a0a0a' }}>
                    Best Ultralight
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>Propane</span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  6. Campy Gear Chubby 2-in-1 -- 9,000 BTU
                </h3>
                <p className="mb-4 text-sm font-semibold" style={{ color: '#22c55e' }}>$70</p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Campy Gear Chubby is a clever 2-in-1 device that functions as both a portable
                  propane heater and a camping stove. At just 3.3 lbs, it is the lightest heater in
                  this roundup by a wide margin, making it a favorite among backpackers, tailgaters, and
                  car campers who want heat without hauling a heavy unit. The flip-top design converts
                  from heater mode (radiant ceramic burner) to stove mode (open flame for cooking)
                  in seconds.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  At 9,000 BTU, the Chubby punches well above its weight class for raw heat output. The
                  built-in tip-over protection and pressure-sensitive fuel cutoff add essential safety
                  features. The downside is a shorter 3-4 hour runtime per 1 lb canister and no ODS
                  sensor, so it should be used with ventilation and a separate CO detector when in
                  enclosed spaces.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Ultra-light at 3.3 lbs -- backpack-friendly</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> 2-in-1: heater + camping stove</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Strong 9,000 BTU output for its size</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Very affordable at $70</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Tip-over safety and fuel cutoff</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> No ODS sensor -- need external CO detector</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Shorter 3-4 hour runtime per canister</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Not designed for large spaces</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Less stable base than larger heaters</li>
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="campy-gear-chubby-2-in-1-9000-btu"
                  source="best-portable-heater"
                  variant="primary"
                  label="Check Price — Campy Gear Chubby 2-in-1 -- 9,000 BTU"
                  showPrice
                />
              </div>
            </section>

            {/* ========== PROPANE VS ELECTRIC ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Zap className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Propane vs Electric Heaters: Which Is Right for You?
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#262626' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Factor</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Propane</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Electric</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Heat Output', 'Higher BTU capacity (4K-12K+ BTU)', 'Capped at ~5,118 BTU (1,500W)'],
                      ['Off-Grid Use', 'Yes -- works without electricity', 'No -- requires wall outlet or generator'],
                      ['Indoor Safety', 'Requires ventilation and CO monitor', 'No fumes, no CO risk'],
                      ['Operating Cost', '$1.50-2.50/hr at high output', '$0.20-0.35/hr at 1,500W'],
                      ['Portability', 'Moderate (fuel canisters add weight)', 'Light and cord-dependent'],
                      ['Best For', 'Camping, outages, garages, off-grid', 'Bedrooms, offices, daily home use'],
                      ['Noise Level', 'Silent (radiant) to moderate (forced-air)', 'Silent to low fan hum'],
                      ['Maintenance', 'Wick/burner cleaning, fuel storage', 'Virtually zero maintenance'],
                    ].map(([factor, propane, electric], i) => (
                      <tr
                        key={factor}
                        style={{
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                          borderTop: '1px solid #262626',
                        }}
                      >
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{factor}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{propane}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{electric}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                  <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Zap className="h-4 w-4" style={{ color: '#f59e0b' }} /> Choose Propane If...
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You camp, hunt, or fish in cold weather</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You need heat during power outages</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You heat a garage, workshop, or open-air space</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You need high BTU output (8,000+)</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You live in a region prone to winter storms or PSPS events</li>
                  </ul>
                </div>
                <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                  <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Zap className="h-4 w-4" style={{ color: '#3b82f6' }} /> Choose Electric If...
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You want safe, fume-free bedroom/office heat</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You have reliable grid power</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You want the lowest operating cost per hour</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You have kids or pets and need cool-touch safety</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> You prefer set-and-forget thermostat operation</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Bottom line:</strong> If you need heat during power
                outages or in off-grid settings, propane is the clear winner. For everyday indoor
                supplemental heating with zero fuss, electric is safer and cheaper to run. Many
                households benefit from owning one of each -- a propane heater stored for emergencies
                and an electric heater for daily comfort.
              </p>
            </section>

            {/* ========== INDOOR SAFETY / CO / VENTILATION ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Shield className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Indoor Safety: Carbon Monoxide & Ventilation Guide
              </h2>
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Carbon monoxide (CO) is an odorless, colorless gas produced whenever fuel is burned.
                  Every year, accidental CO poisoning from portable heaters and generators kills hundreds
                  of people in the United States. Following these rules can save your life:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>Always use a standalone CO detector</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>Place a battery-operated CO alarm at sleeping height in any room where a fuel-burning heater is used. Replace batteries annually.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>Ventilate, ventilate, ventilate</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>Crack a window or door at least 1-2 inches when running any propane or kerosene heater indoors. Cross-ventilation (two openings on opposite sides) is even better.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>Only use indoor-rated heaters indoors</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>Heaters with an ODS (like the Mr. Heater Buddy) are designed for indoor use. Forced-air construction heaters and outdoor patio heaters should never be used in enclosed spaces.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>Keep 3 feet of clearance around the heater</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>Keep curtains, bedding, clothing, and other flammable materials at least 3 feet from any heater. Place heaters on flat, stable, non-flammable surfaces.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>Never leave a fuel-burning heater unattended overnight</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>If you need overnight heat, use an electric heater with a thermostat and overheat shutoff. Propane and kerosene heaters should be turned off before sleeping.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-4 mt-2" style={{ backgroundColor: '#0a0a0a', borderLeft: '3px solid #ef4444' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                    Warning: Never use outdoor-only heaters, charcoal grills, gas stoves, or generators
                    inside your home, tent, or vehicle for heat. These produce lethal levels of CO in
                    enclosed spaces.
                  </p>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    According to the CDC, more than 400 Americans die from unintentional CO poisoning
                    each year, with portable heaters and generators among the leading sources during
                    winter months. Symptoms of CO poisoning include headache, dizziness, nausea, and
                    confusion. If your CO alarm sounds, immediately move to fresh air and call 911.
                  </p>
                </div>
                <div className="mt-6 rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                  <h4 className="font-semibold mb-3" style={{ color: '#f5f5f5' }}>
                    <Shield className="inline h-4 w-4 mr-1" style={{ color: '#22c55e' }} />
                    Electric Heater Safety Reminders
                  </h4>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                    While electric heaters eliminate CO risk, they are still the cause of approximately
                    one-third of home heating fires. Follow these additional precautions:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Plug directly into a wall outlet -- never use extension cords or power strips
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Do not run the cord under rugs or furniture where heat can build up
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Keep at least 3 feet of clearance from curtains, bedding, and furniture
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Choose models with tip-over shutoff and overheat protection
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Turn off and unplug when leaving the room or going to sleep
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ========== BTU GUIDE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Battery className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                BTU Sizing Guide: How Much Heat Do You Need?
              </h2>
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  BTU (British Thermal Unit) measures heating output. The general rule for moderately
                  insulated spaces is <strong style={{ color: '#f5f5f5' }}>20 BTU per square foot</strong>.
                  Poorly insulated garages, basements, or spaces with high ceilings need 25-30 BTU/sq ft.
                  Here is a quick reference:
                </p>
                <div className="overflow-x-auto rounded-lg">
                  <table className="w-full text-sm" style={{ backgroundColor: '#0a0a0a' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Room Size</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Standard (20 BTU/sqft)</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Poorly Insulated (30 BTU/sqft)</th>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Recommended Heater</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['100 sq ft (tent/small office)', '2,000 BTU', '3,000 BTU', 'Campy Gear Chubby'],
                        ['200 sq ft (bedroom)', '4,000 BTU', '6,000 BTU', 'Mr. Heater Buddy (low)'],
                        ['300 sq ft (living room)', '6,000 BTU', '9,000 BTU', 'Mr. Heater Buddy (high) or Lasko 755320'],
                        ['400 sq ft (large room)', '8,000 BTU', '12,000 BTU', 'DeWalt DXH12B or Sengoku HeatMate'],
                        ['500+ sq ft (garage)', '10,000+ BTU', '15,000+ BTU', 'DeWalt DXH12B (high) + supplement'],
                      ].map(([size, standard, poor, rec], i) => (
                        <tr
                          key={size}
                          style={{
                            backgroundColor: i % 2 === 0 ? '#0a0a0a' : '#141414',
                            borderTop: '1px solid #262626',
                          }}
                        >
                          <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{size}</td>
                          <td className="p-3" style={{ color: '#d4d4d8' }}>{standard}</td>
                          <td className="p-3" style={{ color: '#d4d4d8' }}>{poor}</td>
                          <td className="p-3" style={{ color: '#22c55e' }}>{rec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Electric conversion:</strong> 1 watt = 3.41 BTU/hr.
                  A 1,500W electric heater produces approximately 5,118 BTU/hr, which comfortably heats
                  a well-insulated 250 sq ft room.
                </p>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl border p-5"
                    style={{ backgroundColor: '#141414', borderColor: '#262626' }}
                  >
                    <h3 className="font-semibold mb-2 flex items-start gap-2" style={{ color: '#f5f5f5' }}>
                      <Star className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#22c55e' }} />
                      {faq.name}
                    </h3>
                    <p className="text-sm leading-relaxed pl-6" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== FINAL VERDICT ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <DollarSign className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Final Verdict
              </h2>
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#262626' }}>
                <div className="space-y-4" style={{ color: '#a1a1aa' }}>
                  <p className="leading-relaxed">
                    <strong style={{ color: '#22c55e' }}>Best all-around portable heater:</strong>{' '}
                    The <strong style={{ color: '#f5f5f5' }}>Mr. Heater Buddy</strong> remains the king
                    of portable propane heaters. Its indoor-safety credentials (ODS + tip-over shutoff),
                    adjustable output, and decade-plus track record make it the single most versatile pick
                    for camping, emergency backup, and garage use.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: '#22c55e' }}>Best for job sites and big garages:</strong>{' '}
                    The <strong style={{ color: '#f5f5f5' }}>DeWalt DXH12B</strong> forced-air design
                    pushes warm air throughout large spaces quickly -- and the battery-powered fan means
                    it works during outages.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: '#22c55e' }}>Best for extended off-grid heat:</strong>{' '}
                    The <strong style={{ color: '#f5f5f5' }}>Sengoku HeatMate</strong> with its 14-16 hour
                    runtime is unmatched for cabin stays and multi-day power outages.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: '#22c55e' }}>Best electric for daily use:</strong>{' '}
                    The <strong style={{ color: '#f5f5f5' }}>Lasko 755320</strong> is safe, cheap, and
                    smart enough (thermostat + eco mode) to run all winter without running up a huge
                    electric bill.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: '#22c55e' }}>Best electric for garages:</strong>{' '}
                    The <strong style={{ color: '#f5f5f5' }}>Dr. Infrared DR-218</strong> mounts overhead
                    and delivers targeted infrared warmth even in drafty, open-door environments.
                  </p>
                  <p className="leading-relaxed">
                    <strong style={{ color: '#22c55e' }}>Best ultralight for camping:</strong>{' '}
                    The <strong style={{ color: '#f5f5f5' }}>Campy Gear Chubby 2-in-1</strong> at 3.3 lbs
                    doubles as a stove and is the most packable heater we tested.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Stay Warm Anywhere
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Explore our full lineup of energy-efficient product reviews, portable power stations,
                  and off-grid gear guides.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Browse All Reviews
                  <ChevronRight className="h-5 w-5" />
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
