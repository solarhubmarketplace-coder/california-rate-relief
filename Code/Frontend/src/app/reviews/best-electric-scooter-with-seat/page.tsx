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
  Sun,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Electric Scooter with Seat (2026): Segway vs NIU vs Hiboy vs EMOVE vs Razor — Top 5 Reviewed',
  description:
    'Compare the best electric scooters with seats in 2026. In-depth reviews of Segway Ninebot P100S, NIU KQi3 Sport, Hiboy S2 Pro, EMOVE Cruiser, and Razor EcoSmart Metro. Range, speed, comfort, and buying guide.',
  alternates: {
    canonical: '/reviews/best-electric-scooter-with-seat',
  },
  openGraph: {
    title: 'Best Electric Scooter with Seat (2026): Top 5 Reviewed',
    description:
      'Segway Ninebot P100S vs NIU KQi3 Sport vs Hiboy S2 Pro vs EMOVE Cruiser vs Razor EcoSmart Metro. Full specs, pros/cons, seated vs standing comparison, and buying guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Scooter with Seat (2026): Segway vs NIU vs Hiboy vs EMOVE vs Razor — Top 5 Reviewed',
  description:
    'Compare the best electric scooters with seats in 2026. In-depth reviews covering Segway Ninebot P100S, NIU KQi3 Sport, Hiboy S2 Pro, EMOVE Cruiser, and Razor EcoSmart Metro with specs, range data, and buying guide.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-scooter-with-seat',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric scooter with a seat in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Segway Ninebot P100S is the best overall at $1,100 with 60-mile range, 25 mph, detachable seat, and 10-inch pneumatic tires. For max range, the EMOVE Cruiser offers 62 miles with a 1,000W motor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it worth adding a seat to an electric scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for rides over 3-5 miles. Seated riding reduces leg fatigue, lowers center of gravity for stability, and helps riders with back or knee issues. The tradeoff is more weight and a larger folded footprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast do electric scooters with seats go?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically 18-33 mph. Budget models top out at 18 mph, mid-range at 19-25 mph, and the EMOVE Cruiser hits 33 mph. Most cities limit legal speed to 15-25 mph.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far can an electric scooter with a seat go on one charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range varies from 12 to 62 miles. The EMOVE Cruiser leads at 62 miles, Segway P100S at 60 miles, NIU KQi3 at 31 miles, Hiboy S2 Pro at 25 miles, Razor EcoSmart at 12 miles. Real-world range is 70-80% of claimed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric scooters with seats legal to ride on the street?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laws vary by state and city. In California, scooters under 750W and 15 mph can use bike lanes without a license. Faster models may require registration. Adding a seat may reclassify the scooter as a moped in some jurisdictions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you ride an electric scooter with a seat in the rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on the model. EMOVE Cruiser (IPX6) handles rain well. Segway P100S (IPX5) handles light rain. Hiboy S2 Pro (IP54) manages light moisture. Razor EcoSmart Metro is not rain-rated. Ride cautiously on wet roads.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to charge an electric scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Between $0.05 and $0.25 per full charge. A typical 500Wh battery costs about $0.08 at $0.16/kWh. Annual commuting electricity cost is typically $15-$50.',
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
  seatType: string;
  rating: number;
  affiliateLink: string;
}

const scooters: Scooter[] = [
  {
    name: 'Segway Ninebot P100S',
    badge: 'Best Overall',
    price: '$1,100',
    motor: '450W',
    topSpeed: '25 mph',
    range: '60 miles',
    tires: '10" pneumatic',
    seatType: 'Detachable',
    rating: 4.6,
    affiliateLink: '#',
  },
  {
    name: 'NIU KQi3 Sport',
    badge: 'Best Commuter',
    price: '$600',
    motor: '350W',
    topSpeed: '20 mph',
    range: '31 miles',
    tires: '9.5" pneumatic',
    seatType: 'Accessory',
    rating: 4.4,
    affiliateLink: '#',
  },
  {
    name: 'Hiboy S2 Pro',
    badge: 'Best Budget',
    price: '$460',
    motor: '350W',
    topSpeed: '19 mph',
    range: '25 miles',
    tires: '10" solid',
    seatType: 'Removable',
    rating: 4.3,
    affiliateLink: '#',
  },
  {
    name: 'EMOVE Cruiser',
    badge: 'Best Range',
    price: '$1,399',
    motor: '1,000W',
    topSpeed: '33 mph',
    range: '62 miles',
    tires: '10" pneumatic',
    seatType: 'Included',
    rating: 4.5,
    affiliateLink: '#',
  },
  {
    name: 'Razor EcoSmart Metro',
    badge: 'Most Affordable',
    price: '$450',
    motor: '500W',
    topSpeed: '18 mph',
    range: '12 miles',
    tires: '16" pneumatic',
    seatType: 'Built-in',
    rating: 4.1,
    affiliateLink: '#',
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < fullStars
              ? 'text-yellow-500 fill-yellow-500'
              : i === fullStars && hasHalf
                ? 'text-yellow-500 fill-yellow-500/50'
                : 'text-muted-foreground/30'
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-semibold text-foreground">{rating}</span>
    </div>
  );
}

export default function BestElectricScooterWithSeat() {
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
                Comparison Guide
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Best Electric Scooter with Seat (2026)
              </h1>
              <p className="text-lg text-muted-foreground mb-3">
                Segway vs NIU vs Hiboy vs EMOVE vs Razor
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            {/* Overview / Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Standing on an electric scooter for 30 minutes gets old fast. Your legs ache, your
                back tightens up, and every crack in the pavement jolts through your spine. Seated
                electric scooters fix all of that — turning a novelty ride into a genuine daily
                commuting tool.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Most seated scooters are either underpowered toys or overpriced tanks. We researched
                the five best across every price point. Here is what is actually worth buying in 2026.
              </p>
            </div>

            {/* ========== QUICK PICKS ========== */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold text-foreground">Quick Picks by Category</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Segway Ninebot P100S — Best Overall:</strong> 60-mile range, 25 mph, detachable seat, Segway build quality. $1,100.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">NIU KQi3 Sport — Best Commuter:</strong> Regenerative braking, 31-mile range, polished app, self-healing tires. $600.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">EMOVE Cruiser — Best Range:</strong> 62 miles, 1,000W motor, 33 mph, hydraulic suspension, seat included. $1,399.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Hiboy S2 Pro — Best Budget:</strong> Under $500, removable seat, solid flat-proof tires, 25-mile range. $460.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-muted-foreground/30 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Razor EcoSmart Metro — Most Affordable:</strong> Bamboo deck, built-in seat, rear basket, 12-mile range. $450.</p>
                </div>
              </div>
            </div>

            {/* ========== FULL COMPARISON TABLE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Battery className="h-6 w-6 text-primary" />
                Full Comparison Table
              </h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-card">
                      <th className="text-left p-3 font-semibold text-foreground">Scooter</th>
                      <th className="text-left p-3 font-semibold text-foreground">Price</th>
                      <th className="text-left p-3 font-semibold text-foreground">Motor</th>
                      <th className="text-left p-3 font-semibold text-foreground">Top Speed</th>
                      <th className="text-left p-3 font-semibold text-foreground">Range</th>
                      <th className="text-left p-3 font-semibold text-foreground">Tires</th>
                      <th className="text-left p-3 font-semibold text-foreground">Seat</th>
                      <th className="text-left p-3 font-semibold text-foreground">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scooters.map((scooter, idx) => (
                      <tr
                        key={scooter.name}
                        className={idx % 2 === 0 ? 'bg-card/50' : 'bg-card/30'}
                      >
                        <td className="p-3 font-semibold text-foreground whitespace-nowrap">
                          {scooter.name}
                          <span className="block text-xs text-primary">{scooter.badge}</span>
                        </td>
                        <td className="p-3 text-foreground">{scooter.price}</td>
                        <td className="p-3 text-muted-foreground">{scooter.motor}</td>
                        <td className="p-3 text-muted-foreground">{scooter.topSpeed}</td>
                        <td className="p-3 text-muted-foreground">{scooter.range}</td>
                        <td className="p-3 text-muted-foreground">{scooter.tires}</td>
                        <td className="p-3 text-muted-foreground">{scooter.seatType}</td>
                        <td className="p-3">
                          <StarRating rating={scooter.rating} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL SCOOTER BREAKDOWNS ========== */}

            {/* 1. Segway Ninebot P100S */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">1. Segway Ninebot P100S</h2>
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Overall
                  </span>
                </div>
                <StarRating rating={4.6} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$1,100</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">450W</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">60 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">25 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Segway does not make flashy products. They make reliable ones. The P100S delivers
                    a 450W motor, 10-inch pneumatic tires, and a 60-mile range that means weekly
                    charging for most riders. The detachable seat pulls off in seconds, turning it
                    into a standard standing scooter. Height-adjustable and padded for rides over an
                    hour.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    At 25 mph, it stays in the legal comfort zone. Drum brakes plus regenerative
                    braking give consistent stops. IPX5 water resistance handles light rain. The
                    Segway app tracks rides, adjusts speed modes, and manages firmware.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        60-mile range — charge once or twice a week
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Detachable seat for seated/standing flexibility
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Segway reliability, 10" pneumatic tires, IPX5
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        55 lbs, seat sold separately ($80-100 extra)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        25 mph may feel slow for experienced riders
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="segway-ninebot-p100s"
                    source="electric-scooter-with-seat-hub"
                    variant="primary"
                    label="Check Price — Segway Ninebot P100S"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 2. NIU KQi3 Sport */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">2. NIU KQi3 Sport</h2>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Commuter
                  </span>
                </div>
                <StarRating rating={4.4} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$600</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">350W</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">31 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">20 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    NIU is the largest electric two-wheeler company in China, selling millions
                    annually. The KQi3 Sport brings that mass-market refinement to the U.S. —
                    polished in a way most sub-$700 scooters are not. Regenerative braking recaptures
                    energy on every stop, extending real-world range on hilly commutes. The 9.5-inch
                    self-healing pneumatic tires resist punctures better than standard tubes.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The seat is sold as an accessory, keeping the base price low. Once mounted, it
                    transforms the KQi3 into a comfortable commuter for rides up to 10 miles each
                    way. At 40 lbs, it is one of the lighter options — manageable for a short flight
                    of stairs. The NIU app offers ride tracking and battery health monitoring.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Regenerative braking extends range on hills
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Self-healing tires, polished app, 40 lbs light
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Strong build quality from major manufacturer
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Seat sold separately; 20 mph max
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        No suspension — rough pavement transfers
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="niu-kqi3-sport"
                    source="electric-scooter-with-seat-hub"
                    variant="primary"
                    label="Check Price — NIU KQi3 Sport"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 3. Hiboy S2 Pro */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">3. Hiboy S2 Pro</h2>
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Budget
                  </span>
                </div>
                <StarRating rating={4.3} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$460</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">350W</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">25 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">19 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The Hiboy S2 Pro has quietly become one of the best-selling electric scooters on
                    Amazon: it works, it is cheap, and the seat fits well. At $460 with a removable
                    seat included, you get a functional seated scooter for less than most standing-only
                    competitors.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The 10-inch solid tires are love-it-or-hate-it. Zero flats ever — no tubes, no
                    air. The tradeoff is a harsher ride on rough pavement. On smooth paths, it is a
                    non-issue. The 350W motor handles flat terrain and gentle inclines. Steep hills
                    slow you to 10-12 mph. Range is realistic at moderate speeds; push max speed
                    consistently and expect 18-20 miles instead of the claimed 25.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Under $500 with seat included
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Solid 10" tires — zero flats, zero maintenance
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Removable seat for standing or seated
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Harsher ride on rough roads (solid tires, no suspension)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Struggles on steep hills; IP54 — avoid heavy rain
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="hiboy-s2-pro"
                    source="electric-scooter-with-seat-hub"
                    variant="primary"
                    label="Check Price — Hiboy S2 Pro"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 4. EMOVE Cruiser */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">4. EMOVE Cruiser</h2>
                  <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Range
                  </span>
                </div>
                <StarRating rating={4.5} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$1,399</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">1,000W</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">62 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">33 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The EMOVE Cruiser is the scooter you buy when you are done compromising. 1,000W
                    motor, 62-mile range, 33 mph, hydraulic suspension, IPX6 water resistance — it
                    handles 15-mile commutes and rainy weekend rides without blinking. The hydraulic
                    suspension absorbs potholes and gravel without jarring your spine. Combined with
                    the included seat, riders regularly report 20+ mile rides without fatigue.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The 1,560Wh battery is massive — nearly 3x the Segway P100S. The tradeoff is a
                    9-hour charge time on the standard charger (4-5 hours with optional fast charger).
                    At 52 lbs, it is reasonable for its capability. Front and rear disc brakes with
                    ABS provide confident stopping power even at 33 mph.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        62-mile range — longest on this list
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Hydraulic suspension, seat included, IPX6
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        33 mph handles any city road
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        9-hour charge; $1,399 price tag
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        33 mph may exceed legal limits in some areas
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="emove-cruiser"
                    source="electric-scooter-with-seat-hub"
                    variant="primary"
                    label="Check Price — EMOVE Cruiser"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 5. Razor EcoSmart Metro */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">5. Razor EcoSmart Metro</h2>
                  <span className="text-xs font-semibold text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Affordable
                  </span>
                </div>
                <StarRating rating={4.1} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$450</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">500W</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">12 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">18 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The EcoSmart Metro is a neighborhood cruiser, not a commuter. Bamboo deck, built-in
                    padded seat with a moped-like position, rear basket for groceries, and 16-inch
                    pneumatic tires that absorb bumps better than any 10-inch wheel on this list.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The tradeoff: 12-mile range from a lead-acid battery (not lithium-ion), 68 lbs,
                    and slow charging. If your round trip is under 10 miles, it works. Beyond that,
                    look at the other options here.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Bamboo deck, 16" tires — smoothest ride here
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Rear basket included — practical for errands
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        $450 with seat and basket
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        12-mile range, 18 mph — neighborhood only
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        68 lbs (lead-acid), does not fold, slow charge
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="razor-ecosmart-metro"
                    source="electric-scooter-with-seat-hub"
                    variant="primary"
                    label="Check Price — Razor EcoSmart Metro"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SEAT VS STANDING COMPARISON ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Sun className="h-6 w-6 text-primary" />
                Seated vs Standing: Which Is Better?
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card/50 border border-border rounded-lg p-5">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Choose a Seat When...
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Commute is longer than 3-5 miles each way
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        You have back, knee, or joint issues
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        You want stability at higher speeds
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-5">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Choose Standing When...
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        Trips are under 2-3 miles
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        You fold and carry onto transit
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        Portability and light weight are top priorities
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mt-6">
                  Best of both worlds: a scooter with a detachable seat (Segway P100S or Hiboy S2 Pro) lets you switch modes depending on the ride.
                </p>
              </div>
            </section>

            {/* ========== RANGE & BATTERY REALITY ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Battery className="h-6 w-6 text-primary" />
                Range and Battery Reality
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Manufacturers inflate range numbers. Here is what to actually expect.
                </p>
                <div className="overflow-x-auto -mx-4 px-4 mb-6">
                  <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-card">
                        <th className="text-left p-3 font-semibold text-foreground">Scooter</th>
                        <th className="text-left p-3 font-semibold text-foreground">Claimed</th>
                        <th className="text-left p-3 font-semibold text-foreground">Real-World</th>
                        <th className="text-left p-3 font-semibold text-foreground">Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-card/50">
                        <td className="p-3 font-semibold text-foreground">Segway P100S</td>
                        <td className="p-3 text-muted-foreground">60 mi</td>
                        <td className="p-3 text-foreground">42-50 mi</td>
                        <td className="p-3 text-muted-foreground">6-7 hrs</td>
                      </tr>
                      <tr className="bg-card/30">
                        <td className="p-3 font-semibold text-foreground">NIU KQi3</td>
                        <td className="p-3 text-muted-foreground">31 mi</td>
                        <td className="p-3 text-foreground">22-26 mi</td>
                        <td className="p-3 text-muted-foreground">5-6 hrs</td>
                      </tr>
                      <tr className="bg-card/50">
                        <td className="p-3 font-semibold text-foreground">Hiboy S2 Pro</td>
                        <td className="p-3 text-muted-foreground">25 mi</td>
                        <td className="p-3 text-foreground">18-22 mi</td>
                        <td className="p-3 text-muted-foreground">4-6 hrs</td>
                      </tr>
                      <tr className="bg-card/30">
                        <td className="p-3 font-semibold text-foreground">EMOVE Cruiser</td>
                        <td className="p-3 text-muted-foreground">62 mi</td>
                        <td className="p-3 text-foreground">45-55 mi</td>
                        <td className="p-3 text-muted-foreground">9 hrs</td>
                      </tr>
                      <tr className="bg-card/50">
                        <td className="p-3 font-semibold text-foreground">Razor Metro</td>
                        <td className="p-3 text-muted-foreground">12 mi</td>
                        <td className="p-3 text-foreground">8-10 mi</td>
                        <td className="p-3 text-muted-foreground">8-12 hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="font-bold text-foreground mb-3">What Kills Your Range</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Rider weight:</strong> Every 25 lbs above test weight reduces range ~5-8%
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Hills:</strong> A 10% grade can double motor power draw vs flat ground
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Speed:</strong> Max speed uses 30-50% more battery than cruising at 70%
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Cold weather:</strong> Below 40F reduces lithium-ion output by 15-25%
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Rule of thumb: expect 70-80% of manufacturer&apos;s claimed range under real conditions.
                </p>
              </div>
            </section>

            {/* ========== LEGAL CONSIDERATIONS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                E-Scooter Laws: What You Need to Know
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  E-scooter laws vary by state and city. Key points:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">California (AB 1096):</strong> Scooters under 750W/15 mph can use bike lanes without a license. 16+ age requirement. Helmets required under 18. No sidewalk riding. Higher-power models may be classified as mopeds.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">New York:</strong> E-scooters capped at 15 mph on streets and bike lanes. Helmets under 18. No sidewalk riding in NYC.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Florida:</strong> E-scooters treated like bicycles — bike lanes, sidewalks, and roads. No license needed.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Key rule:</strong> Adding a seat may reclassify your scooter as a moped in some jurisdictions, requiring registration and insurance. Always check local laws.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== SAFETY ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Safety Tips for Seated Scooter Riding
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Helmet:</strong> Non-negotiable. Bike helmet for under 20 mph, DOT-rated half helmet for faster scooters.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Gloves and lights:</strong> Protect palms in a fall and stay visible at dusk. Aftermarket lights are brighter than built-in.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Start in the lowest speed mode and work up as you build confidence seated.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Brake earlier than you think — seated riding reduces your ability to shift weight for emergency stops.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Avoid wet metal surfaces (manhole covers, rail tracks, painted markings) — extremely slippery.
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== WHO SHOULD BUY ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                Who Should Buy an Electric Scooter with a Seat?
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Daily commuters (3-15 miles each way):</strong> Arrive comfortable instead of sweaty and fatigued.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Riders with back or joint issues:</strong> A seat eliminates the constant strain standing puts on your lower back and knees.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Last-mile transit connectors:</strong> Train station to office, 2-5 miles, comfortable every time.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Older or new riders:</strong> Lower center of gravity and increased stability make seated riding feel more natural and secure.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Skip if:</strong> You only ride 1-2 miles occasionally or need to carry the scooter up multiple flights daily — a lighter standing scooter is better.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== OVERALL PROS & CONS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Seated Scooters: Overall Pros and Cons
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" /> Pros
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Far more comfortable for rides over 3 miles</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Lower center of gravity, better stability</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Accessible for riders with mobility limitations</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />$0.05-0.25 per charge vs $4+ for gas</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" /> Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Heavier (40-68 lbs vs 25-35 lbs standing)</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />Larger folded footprint, harder to store</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />May be classified as moped in some areas</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />4-12 hour charge times</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    What is the best electric scooter with a seat in 2026?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Segway Ninebot P100S ($1,100) is the best overall with 60-mile range and a detachable seat. For max range, the EMOVE Cruiser ($1,399) offers 62 miles. For budget, the Hiboy S2 Pro ($460) includes a seat.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    Is it worth adding a seat to an electric scooter?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, if rides are over 3-5 miles. A seat reduces leg fatigue, improves stability, and helps riders with back or knee issues. Choose a removable seat model for flexibility.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    How fast do electric scooters with seats go?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    18-33 mph depending on model. Budget models top out at 18 mph, mid-range hit 19-25 mph, and the EMOVE Cruiser reaches 33 mph. Many cities cap legal speed at 15-25 mph.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    How far can an electric scooter with a seat go on one charge?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    12 miles (Razor EcoSmart) to 62 miles (EMOVE Cruiser). Real-world range is 70-80% of claimed. For 20+ mile round trips, choose the Segway P100S, NIU KQi3, or EMOVE Cruiser.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    Are electric scooters with seats legal to ride on the street?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In most states, yes. In California, scooters under 750W and 15 mph can use bike
                    lanes freely. Adding a seat may reclassify your scooter as a moped in some
                    jurisdictions, requiring registration and insurance. Always check local laws.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    Can you ride an electric scooter with a seat in the rain?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Depends on the model. The EMOVE Cruiser (IPX6) handles rain well. The Segway
                    P100S (IPX5) handles light rain. The Hiboy S2 Pro (IP54) can manage light
                    moisture. The Razor EcoSmart Metro is not rain-rated. Even with water-resistant
                    models, ride cautiously on wet roads.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    How much does it cost to charge an electric scooter?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Between $0.05 and $0.25 per full charge. At the national average of $0.16/kWh,
                    a typical 500Wh battery costs about $0.08 per charge. Over a year of daily
                    commuting, total electricity cost is usually $15-$50.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== VERDICT ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                The Verdict
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-foreground/80 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Best for most people:</strong> Segway Ninebot P100S ($1,100) — 60-mile range, detachable seat, Segway reliability.</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Best for long commutes:</strong> EMOVE Cruiser ($1,399) — 62 miles, hydraulic suspension, 1,000W motor.</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Best on a budget:</strong> Hiboy S2 Pro ($460) — flat-proof tires, seat included, 25-mile range.</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Best commuter polish:</strong> NIU KQi3 Sport ($600) — regen braking, self-healing tires, refined app.</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Best for errands:</strong> Razor EcoSmart Metro ($450) — bamboo deck, built-in seat, rear basket.</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  Pennies per charge, zero emissions, no parking hassles. The only question is how far you need to go.
                </p>
              </div>
            </section>

            {/* ========== CONTINUE READING ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Continue Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/reviews/best-electric-bikes"
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
                >
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Comparison Guide
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    Best Electric Bikes (2026)
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Top e-bikes for commuting, adventure, and budget riders. Fat tire, folding, and city models compared.
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                    Read guide <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/reviews"
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
                >
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    All Reviews
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    GreenReviewsHub Review Hub
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Power stations, e-bikes, lawn equipment, smart home, and more — all reviewed with honest specs and real data.
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                    Browse all reviews <ChevronRight className="h-4 w-4" />
                  </span>
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
