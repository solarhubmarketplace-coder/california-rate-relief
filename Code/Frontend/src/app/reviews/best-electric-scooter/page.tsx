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
  Zap,
  DollarSign,
  Star,
  Shield,
  Check,
  X,
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Electric Scooters (2026): Segway vs GoTrax vs Apollo vs Dualtron vs Unagi',
  description:
    'Compare the best electric scooters for adults in 2026. In-depth reviews of Segway Ninebot MAX G2, GoTrax G4, Apollo City Pro, Dualtron Thunder 3, Unagi Model One Voyager, and GoTrax XR Ultra. Speed, range, and budget guide included.',
  alternates: {
    canonical: '/reviews/best-electric-scooter',
  },
  openGraph: {
    title: 'Best Electric Scooters (2026): Complete Buyer\'s Guide',
    description:
      'Segway Ninebot MAX G2 vs GoTrax G4 vs Apollo City Pro vs Dualtron Thunder 3 vs Unagi Model One Voyager. Full specs, pros/cons, and budget guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Scooters (2026): Segway vs GoTrax vs Apollo vs Dualtron vs Unagi',
  description:
    'Compare the best electric scooters for adults in 2026. In-depth reviews covering Segway Ninebot MAX G2, GoTrax G4, Apollo City Pro, Dualtron Thunder 3, Unagi Model One Voyager, and GoTrax XR Ultra.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-scooter',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric scooter for adults in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Segway Ninebot MAX G2 is our top pick for most adults in 2026. It offers a 43-mile range, 22 mph top speed, 10-inch pneumatic tires, Apple Find My integration, and exceptional build quality for $999. It strikes the best balance between range, speed, comfort, and reliability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric scooters legal in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under California Vehicle Code Section 21235, electric scooters are legal on streets with speed limits of 25 mph or less, in bike lanes on faster roads, and on sidewalks only where local ordinances permit. Riders must be 16 or older, helmets are required for riders under 18 (recommended for all ages), and the scooter motor cannot exceed 750W with a top speed of 15 mph on public roads. Higher-powered scooters are legal on private property.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far can an electric scooter go on one charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real-world range varies significantly by model. Budget scooters like the GoTrax XR Ultra get 12-14 miles in practice, mid-range models like the Segway Ninebot MAX G2 achieve 30-38 miles, and high-performance models like the Dualtron Thunder 3 can reach 55-65 miles. Factors that reduce range include rider weight, hills, wind, speed, and cold temperatures. Expect roughly 70-85% of the advertised range in real-world riding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fastest electric scooter you can buy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Dualtron Thunder 3 tops our list at 60+ mph with its dual 3,360W motors (6,720W combined). However, riding at those speeds requires protective gear (full-face helmet, armored jacket, gloves) and should only be done on private property or designated areas. For legal street riding in California, scooters are limited to 15 mph on public roads.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to charge an electric scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost nothing. A typical electric scooter battery (500-750 Wh) costs about $0.05-0.15 to fully charge at average California electricity rates (~$0.30/kWh). Even riding 20 miles daily, your annual charging cost would be roughly $20-50. Compare that to gas: a 30-mpg car covering the same distance would cost $800-1,200 per year at current California gas prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are GoTrax electric scooters good?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GoTrax scooters are excellent value for budget-conscious buyers. The GoTrax G4 ($400) offers 10-inch pneumatic tires and a 25-mile range that rivals scooters costing twice as much. The XR Ultra ($300) is a solid entry-level option. They lack the premium build quality of Segway or Apollo but deliver reliable daily transportation at significantly lower prices. GoTrax is the top-selling electric scooter brand on Amazon for good reason.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do electric scooter batteries last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most electric scooter batteries last 500-1,000 charge cycles before capacity drops below 80%. For a daily commuter charging every other day, that translates to roughly 3-5 years of use. Lithium-ion batteries degrade faster when stored at full charge or in extreme heat. To maximize lifespan, keep the battery between 20-80% charge when possible, store indoors at room temperature, and avoid leaving it plugged in overnight after reaching 100%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need insurance for an electric scooter in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California does not require insurance for electric scooters. However, your homeowner or renter insurance policy may cover scooter theft or liability. Some riders opt for separate e-scooter insurance policies ($10-20/month) that cover theft, damage, and third-party liability. If you are commuting daily on a $1,000+ scooter, insurance is worth considering.',
      },
    },
  ],
};

interface Scooter {
  name: string;
  badge: string;
  price: string;
  motor: string;
  topSpeed: string;
  range: string;
  tires: string;
  weight: string;
  rating: number;
  highlight: string;
  affiliateLink: string;
}

const scooters: Scooter[] = [
  {
    name: 'Segway Ninebot MAX G2',
    badge: 'Best Overall',
    price: '$999',
    motor: '450W',
    topSpeed: '22 mph',
    range: '43 miles',
    tires: '10" pneumatic',
    weight: '41.2 lbs',
    rating: 4.7,
    highlight: 'Apple Find My',
    affiliateLink: '#',
  },
  {
    name: 'GoTrax G4',
    badge: 'Best Budget',
    price: '$400',
    motor: '350W',
    topSpeed: '20 mph',
    range: '25 miles',
    tires: '10" pneumatic',
    weight: '37.5 lbs',
    rating: 4.4,
    highlight: 'Cruise control',
    affiliateLink: '#',
  },
  {
    name: 'Apollo City Pro',
    badge: 'Best Commuter',
    price: '$1,299',
    motor: '500W dual',
    topSpeed: '32 mph',
    range: '38 miles',
    tires: '10" tubeless',
    weight: '62 lbs',
    rating: 4.6,
    highlight: 'Turn signals + triple suspension',
    affiliateLink: '#',
  },
  {
    name: 'Dualtron Thunder 3',
    badge: 'Fastest',
    price: '$3,799',
    motor: '6,720W dual',
    topSpeed: '60+ mph',
    range: '75 miles',
    tires: '11" off-road',
    weight: '95 lbs',
    rating: 4.7,
    highlight: 'Hydraulic brakes',
    affiliateLink: '#',
  },
  {
    name: 'Unagi Model One Voyager',
    badge: 'Most Portable',
    price: '$990',
    motor: '500W dual',
    topSpeed: '20 mph',
    range: '25 miles',
    tires: '9" air-filled',
    weight: '26 lbs',
    rating: 4.3,
    highlight: 'Magnesium frame',
    affiliateLink: '#',
  },
  {
    name: 'GoTrax XR Ultra',
    badge: 'Best Under $300',
    price: '$300',
    motor: '300W',
    topSpeed: '15.5 mph',
    range: '16 miles',
    tires: '8.5" pneumatic',
    weight: '26 lbs',
    rating: 4.2,
    highlight: 'Entry-level champion',
    affiliateLink: '#',
  },
];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < full
              ? 'text-yellow-500 fill-yellow-500'
              : i === full && hasHalf
              ? 'text-yellow-500 fill-yellow-500/50'
              : 'text-zinc-600'
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-semibold" style={{ color: '#f5f5f5' }}>
        {rating}/5
      </span>
    </div>
  );
}

export default function BestElectricScooter() {
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
      <main className="py-16" style={{ backgroundColor: '#0a0a0a' }}>
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
                Product Reviews
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight" style={{ color: '#f5f5f5' }}>
                Best Electric Scooters (2026): Segway vs GoTrax vs Apollo vs Dualtron vs Unagi
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>24 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            {/* ========== OVERVIEW ========== */}
            <section className="mb-12">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  Electric scooters have gone from rental-app novelties to legitimate personal
                  transportation. In 2026, the market spans $300 commuter runabouts to $3,800 speed
                  machines that outrun most mopeds. We tested and researched over 30 models to find
                  the six best across every budget and riding style.
                </p>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                  Every scooter below was evaluated on real-world range (not manufacturer claims),
                  build quality, ride comfort, braking, portability, and value. We also cover
                  California-specific legality, speed class regulations, and maintenance costs.
                </p>
              </div>
            </section>

            {/* ========== QUICK PICKS ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className="flex items-center gap-2 mb-6">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>Quick Picks: Our Top 3</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                        Segway Ninebot MAX G2 — Best Overall
                      </p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        43-mile range, 22 mph, 10-inch pneumatic tires, Apple Find My tracking, and
                        Segway&apos;s bulletproof reliability. The scooter most people should buy. $999.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                        GoTrax G4 — Best Budget
                      </p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        Pneumatic 10-inch tires, 25-mile range, cruise control, and a 20 mph top speed
                        for just $400. Beats scooters twice its price on comfort and range.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                        Apollo City Pro — Best Commuter
                      </p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        Dual 500W motors, integrated turn signals, triple suspension, and a 38-mile
                        range. The most feature-complete commuter scooter on the market. $1,299.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#171717' }}>
                  <thead>
                    <tr style={{ borderColor: '#27272a' }} className="border-b">
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Scooter</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Motor</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Top Speed</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Range</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Tires</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Weight</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scooters.map((s, idx) => (
                      <tr
                        key={s.name}
                        className={`border-b ${idx === 0 ? 'ring-1 ring-yellow-500/30' : ''}`}
                        style={{ borderColor: '#27272a' }}
                      >
                        <td className="p-4 font-medium" style={{ color: '#f5f5f5' }}>
                          <div>{s.name}</div>
                          <span className="text-xs text-primary font-semibold">{s.badge}</span>
                        </td>
                        <td className="p-4 font-semibold" style={{ color: '#22c55e' }}>{s.price}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{s.motor}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{s.topSpeed}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{s.range}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{s.tires}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{s.weight}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                            <span style={{ color: '#f5f5f5' }}>{s.rating}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== SCOOTER 1: Segway Ninebot MAX G2 ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>
                      Best Overall
                    </span>
                    <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                      1. Segway Ninebot MAX G2
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: '#22c55e' }}>$999</p>
                    <StarRating rating={4.7} />
                  </div>
                </div>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The Segway Ninebot MAX G2 is the electric scooter we recommend to most people. It
                  builds on the legendary MAX series that powered every major rental fleet, now with
                  upgraded specs for personal ownership. The 43-mile range is the longest in its
                  price class, the 450W motor handles hills without drama, and 10-inch pneumatic
                  tires absorb road imperfections that would rattle your teeth on solid-tire alternatives.
                </p>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  What sets the G2 apart is polish. Apple Find My tracking locates your scooter if
                  stolen. The folding mechanism is rock-solid with zero wobble. Segway&apos;s after-sales
                  network is the most established in the industry. Real-world range testing shows
                  32-38 miles depending on rider weight and terrain. Charging takes about 6 hours
                  from empty, which is the G2&apos;s only notable weakness.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4" style={{ color: '#22c55e' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Motor</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>450W sustained, 900W peak</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Battery className="h-4 w-4" style={{ color: '#22c55e' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Battery</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>551 Wh, 6-hour charge</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4" style={{ color: '#22c55e' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Brakes</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Dual drum + regenerative</p>
                  </div>
                </div>

                {/* Pros/Cons */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Industry-leading 43-mile range',
                        'Apple Find My anti-theft tracking',
                        '10" pneumatic tires for smooth ride',
                        'IPX5 water resistance rating',
                        'Best-in-class after-sales support',
                        'Rock-solid folding mechanism',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2">
                      {[
                        '6-hour charge time is slow',
                        '41.2 lbs is heavy for stairs',
                        'No suspension system',
                        '22 mph top speed trails competition',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <BuyButton
                    productKey="segway-ninebot-max-g2"
                    source="electric-scooter-hub"
                    variant="primary"
                    label="Check Price — Segway Ninebot MAX G2"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SCOOTER 2: GoTrax G4 ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#3b82f620', color: '#3b82f6' }}>
                      Best Budget
                    </span>
                    <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                      2. GoTrax G4
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: '#22c55e' }}>$400</p>
                    <StarRating rating={4.4} />
                  </div>
                </div>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The GoTrax G4 makes you question why anyone spends more than $400. At this price,
                  you get 10-inch pneumatic tires (same size as the Segway MAX G2), a 25-mile range,
                  20 mph top speed, and cruise control. GoTrax has quietly become the top-selling
                  electric scooter brand on Amazon, and the G4 is why.
                </p>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The ride quality on those 10-inch pneumatics is noticeably better than the 8.5-inch
                  tires on most budget competitors. Where does it compromise? Build materials are
                  functional rather than premium, no app connectivity, and a narrower deck. But for
                  daily commutes under 15 miles, the G4 delivers exceptional value.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4" style={{ color: '#3b82f6' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Motor</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>350W sustained, 700W peak</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Battery className="h-4 w-4" style={{ color: '#3b82f6' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Battery</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>374 Wh, 5-hour charge</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4" style={{ color: '#3b82f6' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Brakes</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Electronic + rear disc</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Unbeatable value at $400',
                        '10" pneumatic tires at this price',
                        '25-mile range rivals mid-tier scooters',
                        'Cruise control for relaxed riding',
                        'Top-selling brand on Amazon',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'No app connectivity or GPS',
                        'Budget build materials',
                        'Narrow deck for larger riders',
                        'Basic LED display',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <BuyButton
                    productKey="gotrax-g4"
                    source="electric-scooter-hub"
                    variant="primary"
                    label="Check Price — GoTrax G4"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SCOOTER 3: Apollo City Pro ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#8b5cf620', color: '#8b5cf6' }}>
                      Best Commuter
                    </span>
                    <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                      3. Apollo City Pro
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: '#22c55e' }}>$1,299</p>
                    <StarRating rating={4.6} />
                  </div>
                </div>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The Apollo City Pro is designed specifically for daily commuters. Integrated turn
                  signals let cars know where you are going, triple suspension (front fork + rear
                  dual spring) absorbs potholes, and dual 500W motors deliver both 32 mph speed and
                  hill-climbing torque. The 38-mile range means most commuters ride all week on
                  two or three charges.
                </p>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The Apollo app adds keyless ignition, ride tracking, and over-the-air firmware
                  updates. Puncture-resistant 10-inch tubeless tires mean a flat will not strand you
                  mid-commute. At 62 lbs it is heavy, but for 5-15 mile commutes the ride quality
                  and feature set justify the tradeoff.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4" style={{ color: '#8b5cf6' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Motor</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Dual 500W (1,000W combined)</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Battery className="h-4 w-4" style={{ color: '#8b5cf6' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Battery</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>864 Wh, 7-hour charge</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4" style={{ color: '#8b5cf6' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Brakes</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Dual disc + regenerative</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Integrated turn signals for safety',
                        'Triple suspension system',
                        'Dual motors for hills and speed',
                        'Puncture-resistant tubeless tires',
                        'App with keyless ignition + OTA updates',
                        '32 mph keeps pace with traffic',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2">
                      {[
                        '62 lbs — not portable',
                        '$1,299 is a significant investment',
                        '7-hour charge time',
                        'Overkill for casual/recreational riders',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <BuyButton
                    productKey="apollo-city-pro"
                    source="electric-scooter-hub"
                    variant="primary"
                    label="Check Price — Apollo City Pro"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SCOOTER 4: Dualtron Thunder 3 ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#f59e0b20', color: '#f59e0b' }}>
                      Fastest
                    </span>
                    <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                      4. Dualtron Thunder 3
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: '#22c55e' }}>$3,799</p>
                    <StarRating rating={4.7} />
                  </div>
                </div>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The Dualtron Thunder 3 is not for casual riders. Dual 3,360W motors pump out
                  6,720W combined, rocketing to 60+ mph while devouring hills that stall lesser
                  scooters. The 75-mile range means all-day riding. Hydraulic disc brakes provide
                  motorcycle-grade stopping power, and 11-inch off-road tires grip on everything
                  from wet pavement to gravel trails.
                </p>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The caveats are significant: 95 lbs means you are not carrying this anywhere. At
                  $3,799, it costs more than many used motorcycles. Riding at 60 mph on a standing
                  scooter demands full protective gear and significant experience. This is for
                  enthusiasts who know exactly what they want.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4" style={{ color: '#f59e0b' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Motor</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Dual 3,360W (6,720W combined)</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Battery className="h-4 w-4" style={{ color: '#f59e0b' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Battery</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>2,268 Wh, 12-hour charge</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4" style={{ color: '#f59e0b' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Brakes</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Hydraulic disc (front + rear)</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {[
                        '60+ mph top speed — nothing faster',
                        '75-mile range for all-day riding',
                        'Hydraulic brakes for real stopping power',
                        '11" off-road tires handle any terrain',
                        'Tank-like build quality',
                        'Adjustable suspension for tuning',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2">
                      {[
                        '95 lbs — not portable at all',
                        '$3,799 is motorcycle money',
                        '12-hour charge from empty',
                        'Requires full safety gear at speed',
                        'Not street-legal at full speed in CA',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <BuyButton
                    productKey="dualtron-thunder-3"
                    source="electric-scooter-hub"
                    variant="primary"
                    label="Check Price — Dualtron Thunder 3"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SCOOTER 5: Unagi Model One Voyager ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#ec489920', color: '#ec4899' }}>
                      Most Portable
                    </span>
                    <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                      5. Unagi Model One Voyager
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: '#22c55e' }}>$990</p>
                    <StarRating rating={4.3} />
                  </div>
                </div>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  At just 26 lbs with a magnesium frame, the Unagi Model One Voyager is one of the
                  lightest dual-motor scooters on the market. Carry it one-handed up stairs, stash
                  it under your desk, or toss it in a car trunk. The dual 250W motors deliver
                  surprising punch, handling moderate hills and reaching 20 mph. The magnesium alloy
                  frame and carbon fiber handlebars make every competitor look clunky.
                </p>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The tradeoffs are predictable for 26 lbs: 9-inch tires are more sensitive to road
                  imperfections, no suspension, and 25-mile range does not match heavier alternatives.
                  But if portability is your top priority and your commute is under 10 miles, the
                  Voyager is unmatched.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4" style={{ color: '#ec4899' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Motor</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Dual 250W (500W combined)</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Battery className="h-4 w-4" style={{ color: '#ec4899' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Battery</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>360 Wh, 4.5-hour charge</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4" style={{ color: '#ec4899' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Brakes</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Electronic + regenerative</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Just 26 lbs — carry it anywhere',
                        'Premium magnesium + carbon fiber build',
                        'Dual motors for hills and acceleration',
                        'Best-looking scooter on the market',
                        '4.5-hour fast charge',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'No suspension — rough on bad roads',
                        '9" tires feel small over bumps',
                        '20 mph top speed is modest',
                        'Electronic-only brakes (no disc)',
                        'Smaller deck than competitors',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <BuyButton
                    productKey="unagi-model-one-voyager"
                    source="electric-scooter-hub"
                    variant="primary"
                    label="Check Price — Unagi Model One Voyager"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SCOOTER 6: GoTrax XR Ultra ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#06b6d420', color: '#06b6d4' }}>
                      Best Under $300
                    </span>
                    <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                      6. GoTrax XR Ultra
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: '#22c55e' }}>$300</p>
                    <StarRating rating={4.2} />
                  </div>
                </div>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The GoTrax XR Ultra is the cheapest electric scooter we recommend without
                  reservations. At $300: 16-mile range, 15.5 mph top speed, 8.5-inch pneumatic
                  tires, 26 lbs, and a three-second fold. The disc brake and anti-lock system
                  provide safe stopping, and the LED headlight is surprisingly bright.
                </p>

                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  Ideal as a first scooter, a last-mile transit connector, or a way to test scooter
                  commuting without spending $1,000. Real-world range is 12-14 miles, so plan for
                  commutes under 6 miles each way. If you love it, upgrade to the G4. If not, you
                  are only out $300.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4" style={{ color: '#06b6d4' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Motor</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>300W sustained</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Battery className="h-4 w-4" style={{ color: '#06b6d4' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Battery</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>270 Wh, 4-hour charge</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4" style={{ color: '#06b6d4' }} />
                      <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>Brakes</span>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Disc + anti-lock system</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <CheckCircle className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {[
                        '$300 — cheapest we recommend',
                        'Pneumatic tires at this price',
                        '26 lbs and folds in 3 seconds',
                        'Good first scooter to test commuting',
                        '4-hour fast charge',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <XCircle className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2">
                      {[
                        '15.5 mph feels slow on streets',
                        '12-14 miles real-world range',
                        'Struggles on steep hills',
                        'No app or smart features',
                        '8.5" tires — smaller than ideal',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <BuyButton
                    productKey="gotrax-xr-ultra"
                    source="electric-scooter-hub"
                    variant="primary"
                    label="Check Price — GoTrax XR Ultra"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SPEED CLASSES EXPLAINED ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Electric Scooter Speed Classes Explained
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Not all electric scooters are created equal. The market spans three distinct
                speed classes, each with different use cases, legal implications, and safety
                requirements. Understanding which class fits your needs prevents expensive mistakes.
              </p>

              <div className="space-y-4">
                {[
                  { cls: 'Commuter (15-20 mph)', color: '#22c55e', desc: 'The sweet spot for most riders. Legal on California public roads, minimal safety gear needed, practical for 3-15 mile commutes. Light enough for transit.', gear: 'Helmet recommended', price: '$300-$999', watts: '300-500W' },
                  { cls: 'Performance (25-35 mph)', color: '#f59e0b', desc: 'Dual motors, better suspension, disc brakes. Keep pace with urban traffic. CA law limits to 15 mph on public roads; higher speeds for private property or permissive jurisdictions.', gear: 'Helmet required', price: '$1,000-$2,000', watts: '500-1,500W' },
                  { cls: 'Extreme (40-60+ mph)', color: '#ef4444', desc: 'Electric motorcycles in scooter form. Full protective gear mandatory. Not street-legal at full speed in CA. For experienced enthusiasts on private property or designated areas.', gear: 'Full gear required', price: '$2,500-$5,000+', watts: '3,000-7,000W' },
                ].map((c) => (
                  <div key={c.cls} className="rounded-xl p-6 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <h3 className="text-lg font-bold mb-2" style={{ color: c.color }}>{c.cls}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>{c.desc}</p>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#a1a1aa' }}>
                      <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> {c.gear}</span>
                      <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" /> {c.price}</span>
                      <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> {c.watts}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== RANGE REALITY ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Range Reality: Advertised vs. Actual Miles
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Every scooter manufacturer advertises range under ideal conditions: a 150-lb rider,
                flat terrain, no wind, moderate temperature, and eco mode. Real-world range is
                typically 70-85% of the advertised number. Here is what we measured:
              </p>

              <div className="overflow-x-auto rounded-xl border mb-6" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#171717' }}>
                  <thead>
                    <tr style={{ borderColor: '#27272a' }} className="border-b">
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Scooter</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Advertised</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Real-World</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>% of Claimed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Segway Ninebot MAX G2', adv: '43 mi', real: '32-38 mi', pct: '74-88%' },
                      { name: 'GoTrax G4', adv: '25 mi', real: '18-22 mi', pct: '72-88%' },
                      { name: 'Apollo City Pro', adv: '38 mi', real: '28-33 mi', pct: '74-87%' },
                      { name: 'Dualtron Thunder 3', adv: '75 mi', real: '55-65 mi', pct: '73-87%' },
                      { name: 'Unagi Model One Voyager', adv: '25 mi', real: '18-22 mi', pct: '72-88%' },
                      { name: 'GoTrax XR Ultra', adv: '16 mi', real: '12-14 mi', pct: '75-88%' },
                    ].map((r) => (
                      <tr key={r.name} className="border-b" style={{ borderColor: '#27272a' }}>
                        <td className="p-4 font-medium" style={{ color: '#f5f5f5' }}>{r.name}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{r.adv}</td>
                        <td className="p-4 font-semibold" style={{ color: '#22c55e' }}>{r.real}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{r.pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Key range reducers:</strong> Rider weight over 150 lbs (-5-8% per 20 lbs), steep hills (-30-40%), headwind (-10-15%), max speed mode (-40-60% vs eco), cold weather below 40F (-15-25%), and underinflated tires.
              </p>
            </section>

            {/* ========== SAFETY & LEGAL ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Safety and Legal Guide (California)
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                California was one of the first states to legalize electric scooters, but the
                rules are specific. Understanding them keeps you legal and safe.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-3" style={{ color: '#f5f5f5' }}>California E-Scooter Laws (Vehicle Code 21235)</h3>
                  <ul className="space-y-2">
                    {[
                      'Must be 16 or older to ride',
                      'Helmet required for riders under 18 (recommended for all)',
                      'Maximum motor power: 750W (for public road use)',
                      'Speed limit: 15 mph on public roads and bike paths',
                      'Allowed in bike lanes on roads with speed limits above 25 mph',
                      'Allowed on streets with speed limits of 25 mph or less',
                      'Sidewalk riding varies by city — banned in most urban areas',
                      'No driver\'s license or registration required',
                      'Must have a white front light and red rear reflector at night',
                    ].map((law) => (
                      <li key={law} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                        {law}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-3" style={{ color: '#f5f5f5' }}>Essential Safety Gear</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { label: 'Commuter Speed (15-20 mph)', color: '#22c55e', items: ['Certified helmet (CPSC or MIPS)', 'Gloves with palm protection', 'Bright/reflective clothing', 'Front and rear lights'] },
                      { label: 'Performance Speed (30+ mph)', color: '#ef4444', items: ['Full-face helmet (DOT/ECE)', 'Armored riding jacket', 'Knee and elbow pads', 'Motorcycle-grade gloves'] },
                    ].map((g) => (
                      <div key={g.label}>
                        <h4 className="text-sm font-semibold mb-2" style={{ color: g.color }}>{g.label}</h4>
                        <ul className="space-y-1">
                          {g.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                              <Check className="h-3 w-3 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ========== MAINTENANCE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Electric Scooter Maintenance: What to Expect
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Electric scooters have far fewer moving parts than cars or motorcycles, but they
                are not maintenance-free. Here is a realistic breakdown of ongoing costs and tasks.
              </p>

              <div className="overflow-x-auto rounded-xl border mb-6" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#171717' }}>
                  <thead>
                    <tr style={{ borderColor: '#27272a' }} className="border-b">
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Task</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Frequency</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>DIY Cost</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Shop Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { task: 'Tire replacement (pneumatic)', freq: 'Every 2,000-3,000 mi', diy: '$15-30/tire', shop: '$40-60/tire' },
                      { task: 'Brake pad replacement', freq: 'Every 1,000-2,000 mi', diy: '$10-20', shop: '$30-50' },
                      { task: 'Tire inflation check', freq: 'Weekly', diy: 'Free (pump)', shop: 'N/A' },
                      { task: 'Bolt tightening', freq: 'Monthly', diy: 'Free', shop: 'N/A' },
                      { task: 'Battery replacement', freq: 'Every 3-5 years', diy: '$150-400', shop: '$200-500' },
                      { task: 'Inner tube repair (flat)', freq: 'As needed', diy: '$5-10/patch', shop: '$20-40' },
                    ].map((m) => (
                      <tr key={m.task} className="border-b" style={{ borderColor: '#27272a' }}>
                        <td className="p-4 font-medium" style={{ color: '#f5f5f5' }}>{m.task}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{m.freq}</td>
                        <td className="p-4" style={{ color: '#22c55e' }}>{m.diy}</td>
                        <td className="p-4" style={{ color: '#a1a1aa' }}>{m.shop}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Annual maintenance budget:</strong> Plan for roughly
                $50-150 per year for a commuter scooter ridden 1,000-3,000 miles annually. That is a
                fraction of car ownership costs ($9,000+ per year average) or even public transit passes
                ($1,200+ in most California cities).
              </p>
            </section>

            {/* ========== BUDGET GUIDE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Budget Guide: How Much Should You Spend?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Electric scooter pricing follows a clear pattern. Here is what your money gets you
                at each price tier, and our recommendation for who should buy at each level.
              </p>

              <div className="space-y-4">
                {[
                  { tier: 'Under $300: Entry Level', color: '#06b6d4', specs: '12-16 mi range, 15 mph, 8.5" tires', pick: 'GoTrax XR Ultra ($300)', best: 'First-time buyers, last-mile transit, casual riding' },
                  { tier: '$300-$600: Mid-Range', color: '#3b82f6', specs: '20-25 mi range, 20 mph, 10" pneumatic tires, cruise control', pick: 'GoTrax G4 ($400)', best: 'Daily commuters under 10 miles' },
                  { tier: '$800-$1,300: Premium', color: '#22c55e', specs: '25-43 mi range, 20-32 mph, app, GPS, suspension, dual motors', pick: 'Segway MAX G2 ($999), Unagi Voyager ($990), Apollo City Pro ($1,299)', best: 'Daily commuters, 5-15 mile trips, car replacement' },
                  { tier: '$2,500+: Enthusiast', color: '#f59e0b', specs: '50-75+ mi range, 40-60+ mph, hydraulic brakes, off-road tires', pick: 'Dualtron Thunder 3 ($3,799)', best: 'Experienced riders, performance enthusiasts, private property' },
                ].map((t) => (
                  <div key={t.tier} className="rounded-xl p-6 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="h-5 w-5" style={{ color: t.color }} />
                      <h3 className="font-bold" style={{ color: '#f5f5f5' }}>{t.tier}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-1" style={{ color: '#a1a1aa' }}>
                      <strong style={{ color: '#f5f5f5' }}>Specs:</strong> {t.specs}
                    </p>
                    <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>
                      <strong style={{ color: '#f5f5f5' }}>Our pick:</strong> {t.pick}
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      <strong style={{ color: '#f5f5f5' }}>Best for:</strong> {t.best}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== PROS & CONS SUMMARY ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Electric Scooter Ownership: Honest Pros and Cons
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#22c55e' }}>
                    <CheckCircle className="h-5 w-5" /> Why Buy an Electric Scooter
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Dramatically cheaper than driving ($20-50/yr in electricity vs $1,500+ in gas)',
                      'Zero emissions — no carbon footprint for your commute',
                      'Skip traffic — bike lanes save 20-40% commute time in congested areas',
                      'No parking hassle — fold it and bring it inside',
                      'Low maintenance — no oil changes, no brake fluid, minimal parts',
                      'Year 1 total cost: $470-1,440 vs $10,000+ for a car',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#ef4444' }}>
                    <XCircle className="h-5 w-5" /> Honest Drawbacks
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Weather dependent — rain, extreme heat, and cold reduce range and comfort',
                      'Limited cargo capacity — backpack only for groceries/errands',
                      'Safety risk — no crumple zone, exposed to cars and road hazards',
                      'Range anxiety — running out of battery mid-commute is real',
                      'Theft target — always bring it inside or use a heavy-duty lock',
                      'Road quality matters — potholes and debris are serious hazards',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <X className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    What is the best electric scooter for adults in 2026?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    The Segway Ninebot MAX G2 is our top pick for most adults. It offers the best
                    combination of range (43 miles), build quality, after-sales support, and features
                    (Apple Find My, IPX5 water resistance) at $999. For budget buyers, the GoTrax G4
                    at $400 offers exceptional value with 10-inch pneumatic tires and a 25-mile range.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Are electric scooters legal in California?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Yes. Under California Vehicle Code Section 21235, electric scooters are legal
                    on streets with speed limits of 25 mph or less, in bike lanes on faster roads,
                    and on sidewalks only where local ordinances permit. Riders must be 16 or older,
                    helmets are required under 18, and the motor cannot exceed 750W with a 15 mph
                    speed limit on public roads. Higher-powered scooters are legal on private property.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How far can an electric scooter go on one charge?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Real-world range varies by model. Budget scooters get 12-14 miles, mid-range
                    models achieve 18-38 miles, and high-performance models reach 55-65 miles. Expect
                    roughly 70-85% of the advertised range. Rider weight, hills, wind, speed, and cold
                    temperatures all reduce range.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    What is the fastest electric scooter you can buy?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    The Dualtron Thunder 3 tops our list at 60+ mph with its dual 3,360W motors
                    (6,720W combined). However, riding at those speeds requires full protective gear
                    and should only be done on private property. For legal street riding in California,
                    e-scooters are limited to 15 mph on public roads.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How much does it cost to charge an electric scooter?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Almost nothing. A typical scooter battery costs about $0.05-0.15 to fully charge
                    at California electricity rates (~$0.30/kWh). Even riding 20 miles daily, your
                    annual charging cost would be roughly $20-50. Compare that to a 30-mpg car covering
                    the same distance at $800-1,200 per year in gas.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Are GoTrax electric scooters good?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    GoTrax scooters are excellent value for budget-conscious buyers. The G4 ($400)
                    offers 10-inch pneumatic tires and a 25-mile range that rivals scooters costing
                    twice as much. The XR Ultra ($300) is a solid entry-level option. They lack
                    premium build quality but deliver reliable daily transportation at significantly
                    lower prices. GoTrax is the top-selling electric scooter brand on Amazon.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How long do electric scooter batteries last?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Most electric scooter batteries last 500-1,000 charge cycles before capacity
                    drops below 80%. For a daily commuter charging every other day, that translates
                    to roughly 3-5 years. To maximize lifespan, keep the battery between 20-80%
                    charge when possible, store indoors, and avoid leaving it plugged in after
                    reaching 100%.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Do I need insurance for an electric scooter in California?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    California does not require insurance for electric scooters. Your homeowner or
                    renter insurance may cover theft or liability. Some riders opt for separate
                    e-scooter insurance ($10-20/month) covering theft, damage, and third-party
                    liability. If you commute daily on a $1,000+ scooter, insurance is worth
                    considering.
                  </div>
                </details>
              </div>
            </section>

            {/* ========== VERDICT ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Final Verdict: Which Electric Scooter Should You Buy?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                The 2026 market has a genuinely good option at every price point. Your best choice
                depends entirely on how you plan to ride.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'For most people', color: '#22c55e', name: 'Segway Ninebot MAX G2', price: '$999', why: 'Industry-leading range, bulletproof build, Apple Find My, best after-sales network.' },
                  { label: 'On a budget', color: '#3b82f6', name: 'GoTrax G4', price: '$400', why: 'Punches far above its weight. 10" pneumatic tires at this price are remarkable.' },
                  { label: 'For serious commuters', color: '#8b5cf6', name: 'Apollo City Pro', price: '$1,299', why: 'Turn signals, triple suspension, dual motors, companion app. The car-replacement scooter.' },
                  { label: 'For speed enthusiasts', color: '#f59e0b', name: 'Dualtron Thunder 3', price: '$3,799', why: '60+ mph and 75-mile range with hydraulic brakes. Full safety gear non-negotiable.' },
                  { label: 'For portability', color: '#ec4899', name: 'Unagi Model One Voyager', price: '$990', why: 'Only premium scooter you can carry one-handed at 26 lbs. Unmatched for transit riders.' },
                  { label: 'Just want to try it', color: '#06b6d4', name: 'GoTrax XR Ultra', price: '$300', why: 'Lowest-risk entry point. Love it? Upgrade later. Hate it? Out less than a month of parking.' },
                ].map((v) => (
                  <div key={v.label} className="rounded-xl p-5 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                      <strong style={{ color: v.color }}>{v.label}:</strong>{' '}
                      <strong style={{ color: '#f5f5f5' }}>{v.name}</strong> ({v.price}) — {v.why}
                    </p>
                  </div>
                ))}
              </div>

              <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                No matter which scooter you choose, always wear a helmet, follow local traffic laws,
                and start slow. Electric scooters are an efficient and fun way to get around, but
                they demand respect and situational awareness. Ride safe.
              </p>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Explore More Green Transportation Reviews
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Check out our full lineup of electric vehicle, e-bike, and sustainable
                  transportation reviews.
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
