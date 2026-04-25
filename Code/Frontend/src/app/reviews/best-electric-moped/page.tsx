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
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Best Electric Moped (2026): NIU vs Super Soco vs CSC vs Vespa vs GenZe — Top 5 Reviewed',
  description:
    'Compare the best electric mopeds in 2026. In-depth reviews of NIU NQi GTS Sport, Super Soco CPx, CSC Monterey, Vespa Elettrica, and GenZe 200. Range, speed, licensing, insurance, and buying guide.',
  alternates: {
    canonical: '/reviews/best-electric-moped',
  },
  openGraph: {
    title: 'Best Electric Moped (2026): Top 5 Reviewed',
    description:
      'NIU NQi GTS Sport vs Super Soco CPx vs CSC Monterey vs Vespa Elettrica vs GenZe 200. Full specs, pros/cons, licensing guide, and moped vs e-bike comparison.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Moped (2026): NIU vs Super Soco vs CSC vs Vespa vs GenZe. Top 5 Reviewed',
  description:
    'Compare the best electric mopeds in 2026. In-depth reviews covering NIU NQi GTS Sport, Super Soco CPx, CSC Monterey, Vespa Elettrica, and GenZe 200 with specs, range data, licensing requirements, and buying guide.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-moped',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric moped in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The NIU NQi GTS Sport is the best overall electric moped in 2026. It offers a 3.1kW motor, 37 mph top speed, 62-mile range with dual batteries, GPS tracking, and a companion app for $3,599.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a license to ride an electric moped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most US states, yes. Electric mopeds that exceed 20 mph or 750W typically require at minimum a moped license or standard driver\'s license. In California, mopeds under 30 mph need an M1 or M2 motorcycle license and registration. Requirements vary by state — always check local DMV regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far can an electric moped go on one charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electric moped range varies from 30 to 87 miles depending on the model. The Super Soco CPx leads at 87 miles with dual batteries. The NIU NQi GTS Sport and Vespa Elettrica each deliver around 62 miles. Real-world range is typically 70-85% of manufacturer claims depending on speed, terrain, and rider weight.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to charge an electric moped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Between $0.15 and $0.40 per full charge depending on battery size and local electricity rates. A typical 2-3 kWh battery costs about $0.30 at the US average of $0.16/kWh. Annual charging costs for daily commuting are typically $50-$120, compared to $1,200-$2,000 for gas on a traditional scooter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do electric mopeds require insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most states, yes. Since electric mopeds are classified as motor vehicles, liability insurance is typically required for street-legal operation. In California, moped insurance averages $100-$300 per year. Some states with lower speed limits may exempt certain moped classes from insurance requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an electric moped and an electric scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electric mopeds have a seated riding position with a step-through frame, larger wheels (12-16 inches), higher top speeds (25-56 mph), and require licensing/registration. Electric kick scooters are standing-only, have smaller wheels (8-10 inches), lower speeds (15-30 mph), and often don\'t require a license. Mopeds are better for longer commutes; scooters are better for last-mile trips.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do electric moped batteries last before replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most electric moped batteries last 3-5 years or 500-1,000 charge cycles before capacity drops below 80%. Lithium-ion batteries in premium models like NIU and Super Soco typically reach 800+ cycles. Replacement batteries cost $500-$1,500 depending on the model. Proper charging habits, avoiding full depletion and extreme heat, extend battery life significantly.',
      },
    },
  ],
};

interface Moped {
  name: string;
  badge: string;
  price: string;
  motor: string;
  topSpeed: string;
  range: string;
  battery: string;
  weight: string;
  rating: number;
  affiliateLink: string;
}

const mopeds: Moped[] = [
  {
    name: 'NIU NQi GTS Sport',
    badge: 'Best Overall',
    price: '$3,599',
    motor: '3.1kW',
    topSpeed: '37 mph',
    range: '62 miles',
    battery: 'Dual lithium-ion',
    weight: '220 lbs',
    rating: 4.6,
    affiliateLink: '#',
  },
  {
    name: 'Super Soco CPx',
    badge: 'Best Commuter',
    price: '$3,999',
    motor: '4kW',
    topSpeed: '56 mph',
    range: '87 miles',
    battery: 'Dual removable',
    weight: '242 lbs',
    rating: 4.5,
    affiliateLink: '#',
  },
  {
    name: 'CSC Monterey',
    badge: 'Best Value',
    price: '$2,495',
    motor: '2kW',
    topSpeed: '30 mph',
    range: '50 miles',
    battery: 'Removable lithium',
    weight: '176 lbs',
    rating: 4.3,
    affiliateLink: '#',
  },
  {
    name: 'Vespa Elettrica',
    badge: 'Premium Pick',
    price: '$7,499',
    motor: '3.9kW',
    topSpeed: '30 mph',
    range: '62 miles',
    battery: 'Integrated lithium',
    weight: '287 lbs',
    rating: 4.4,
    affiliateLink: '#',
  },
  {
    name: 'GenZe 200',
    badge: 'Most Practical',
    price: '$2,999',
    motor: '2kW',
    topSpeed: '30 mph',
    range: '30 miles',
    battery: 'Removable lithium',
    weight: '233 lbs',
    rating: 4.2,
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

export default function BestElectricMoped() {
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
                Best Electric Moped (2026)
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<p className="text-lg text-muted-foreground mb-3">
                NIU vs Super Soco vs CSC vs Vespa vs GenZe
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>20 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1558981420-87aa9dad1c89?w=1200&q=80&auto=format&fit=crop' alt='Electric moped' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Overview / Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Electric mopeds sit in a sweet spot that e-bikes and kick scooters cannot reach.
                They are fast enough to keep up with city traffic, practical enough for daily
                commuting, and cheap enough to charge that your fuel costs essentially disappear.
                No gas, no oil changes, no emissions inspections.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                The market has matured significantly. You can now buy a legitimate, street-legal
                electric moped with 50+ miles of range for under $4,000. Some models hit highway
                speeds. Others prioritize cargo capacity and all-weather reliability. The question
                is not whether electric mopeds are ready, it is which one fits your commute.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We tested five of the best electric mopeds available in the US in 2026. Here is
                how they stack up across range, speed, build quality, and real-world usability.
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
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">NIU NQi GTS Sport, Best Overall:</strong> 3.1kW motor, 37 mph, 62-mile range, GPS tracking, dual battery, connected app. $3,599.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Super Soco CPx, Best Commuter:</strong> 4kW motor, 56 mph, 87-mile range with dual battery, CBS braking. $3,999.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">CSC Monterey, Best Value:</strong> Retro styling, 30 mph, 50-mile range, street legal, under $2,500. $2,495.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Vespa Elettrica — Premium Pick:</strong> Italian design, TFT display, 3.9kW motor, 62-mile range, riding modes. $7,499.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-muted-foreground/30 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">GenZe 200, Most Practical:</strong> Built-in cargo, weather resistant, 30 mph, fleet-proven reliability. $2,999.</p>
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
                      <th className="text-left p-3 font-semibold text-foreground">Moped</th>
                      <th className="text-left p-3 font-semibold text-foreground">Price</th>
                      <th className="text-left p-3 font-semibold text-foreground">Motor</th>
                      <th className="text-left p-3 font-semibold text-foreground">Top Speed</th>
                      <th className="text-left p-3 font-semibold text-foreground">Range</th>
                      <th className="text-left p-3 font-semibold text-foreground">Battery</th>
                      <th className="text-left p-3 font-semibold text-foreground">Weight</th>
                      <th className="text-left p-3 font-semibold text-foreground">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mopeds.map((moped, idx) => (
                      <tr
                        key={moped.name}
                        className={idx % 2 === 0 ? 'bg-card/50' : 'bg-card/30'}
                      >
                        <td className="p-3 font-semibold text-foreground whitespace-nowrap">
                          {moped.name}
                          <span className="block text-xs text-primary">{moped.badge}</span>
                        </td>
                        <td className="p-3 text-foreground">{moped.price}</td>
                        <td className="p-3 text-muted-foreground">{moped.motor}</td>
                        <td className="p-3 text-muted-foreground">{moped.topSpeed}</td>
                        <td className="p-3 text-muted-foreground">{moped.range}</td>
                        <td className="p-3 text-muted-foreground">{moped.battery}</td>
                        <td className="p-3 text-muted-foreground">{moped.weight}</td>
                        <td className="p-3">
                          <StarRating rating={moped.rating} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL MOPED BREAKDOWNS ========== */}

            {/* 1. NIU NQi GTS Sport */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">1. NIU NQi GTS Sport</h2>
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Overall
                  </span>
                </div>
                <StarRating rating={4.6} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$3,599</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">3.1kW</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">62 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">37 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    NIU is the world&apos;s largest electric two-wheeler company by volume, and the
                    NQi GTS Sport is the reason why. This is not a novelty. It is a commuting
                    appliance built by a company that has shipped over 10 million units. The 3.1kW
                    Bosch motor delivers smooth, predictable power up to 37 mph, fast enough for
                    urban arterials without feeling sketchy.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The dual-battery configuration is the standout feature. Each lithium-ion pack
                    delivers roughly 31 miles independently, combining for a real-world range of
                    about 55-62 miles. Both batteries are removable for indoor charging, which
                    matters if you live in an apartment without garage access. Pull each one out,
                    carry it upstairs, plug it in.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    GPS tracking and the NIU app round out the package. You get real-time location
                    tracking, battery status, ride history, and over-the-air firmware updates. If
                    someone moves your moped, you get an alert. The regenerative braking system
                    feeds energy back during deceleration, adding incremental range on hilly routes.
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
                        62-mile dual-battery range, both removable for indoor charging
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        GPS tracking, anti-theft alerts, connected app with OTA updates
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Bosch motor with regenerative braking, proven reliability
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        37 mph handles urban roads comfortably
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
                        Not highway legal; 37 mph limits it to city and suburban roads
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        220 lbs is heavy if you need to maneuver it up stairs or ramps
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Limited US dealer network compared to Vespa
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="niu-nqi-gts-sport"
                    source="electric-moped-hub"
                    variant="primary"
                    label="Check Price — NIU NQi GTS Sport"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 2. Super Soco CPx */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">2. Super Soco CPx</h2>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Commuter
                  </span>
                </div>
                <StarRating rating={4.5} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$3,999</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">4kW</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">87 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">56 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The Super Soco CPx is the electric moped you buy when kick scooters and Class 2
                    mopeds are not fast enough. At 56 mph with a 4kW motor, this sits in genuine
                    motorcycle territory. It will keep up with suburban traffic on 45 mph roads without
                    breaking a sweat. That speed bump in capability changes what routes are available
                    to you.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Range is equally impressive. The single-battery configuration delivers about 43
                    miles. Add the second battery for the dual-battery setup and you are looking at a
                    real-world 75-87 miles — enough for a 35-mile round-trip commute with reserves
                    to spare. Both batteries are removable and weigh about 25 lbs each.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The CBS (Combined Braking System) links front and rear brakes so squeezing one
                    lever activates both proportionally. It is a genuine safety feature that prevents
                    the front-wheel lockup that sends riders over handlebars. The digital dashboard
                    shows speed, battery percentage, range estimate, and ride mode. Three riding
                    modes let you prioritize range or performance.
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
                        56 mph top speed; handles suburban arterials and multi-lane roads
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        87-mile dual-battery range, best in class
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        CBS braking for safer, more predictable stops
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Removable batteries for apartment-friendly charging
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
                        $3,999 is the highest price in this roundup (excluding Vespa)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        242 lbs, heavier than most competitors
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Higher speed likely requires motorcycle license in most states
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="super-soco-cpx"
                    source="electric-moped-hub"
                    variant="primary"
                    label="Check Price, Super Soco CPx"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 3. CSC Monterey */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">3. CSC Monterey</h2>
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Value
                  </span>
                </div>
                <StarRating rating={4.3} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$2,495</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">2kW</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">50 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">30 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    CSC Motorcycles is a US-based company out of Azusa, California that has been
                    selling affordable motorcycles and mopeds for years. The Monterey is their
                    electric moped entry, and it delivers exactly what a first-time buyer needs:
                    simple, reliable, street-legal transportation at the lowest price on this list.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The retro styling is a genuine selling point. It looks like a classic Italian
                    scooter, not a piece of tech equipment. The 2kW motor tops out at 30 mph, which
                    keeps it firmly in the moped licensing category in most states. The removable
                    lithium battery delivers about 40-50 miles of real-world range depending on
                    terrain and rider weight.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    At 176 lbs, it is the lightest moped in this roundup by a significant margin.
                    That matters for apartment dwellers, riders who need to maneuver in tight
                    parking spots, and anyone who values nimble handling over raw power. CSC also
                    ships the Monterey fully assembled to your door and provides US-based customer
                    support, not a call center overseas.
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
                        $2,495, lowest price on this list by $500+
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        176 lbs, lightest and most maneuverable
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Retro styling, ships fully assembled, US-based support
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Street legal, 30 mph keeps licensing requirements minimal
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
                        30 mph top speed may feel slow on busy roads
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        No GPS tracking, no connected app
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Basic instrumentation, no TFT display
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="csc-monterey"
                    source="electric-moped-hub"
                    variant="primary"
                    label="Check Price, CSC Monterey"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 4. Vespa Elettrica */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">4. Vespa Elettrica</h2>
                  <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Premium Pick
                  </span>
                </div>
                <StarRating rating={4.4} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$7,499</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">3.9kW</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">62 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">30 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The Vespa Elettrica is the electric moped you buy when the moped itself is part
                    of the experience, not just the transportation. This is a Vespa. The steel
                    monocoque body, the curves, the Italian design heritage going back to 1946, it
                    all carries over to the electric version. You will get compliments. People will
                    stop you to ask about it.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The 3.9kW motor is powerful, more powerful than the NIU — but Vespa
                    electronically limits it to 30 mph for the standard Elettrica model. That
                    limitation keeps it in the moped licensing category. The 4.2 kWh battery
                    delivers about 55-62 miles of real-world range. Charge time is about 4 hours on
                    a standard outlet.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The TFT color display is the best screen in this roundup. It shows speed,
                    range, battery level, riding mode, and pairs with the Vespa app via Bluetooth
                    for navigation, call management, and music control. Two riding modes, Eco and
                    Power — let you choose between maximum range and full torque. The ride quality
                    is superb. The single-sided front suspension and link-type rear suspension
                    smooth out rough pavement better than any competitor here.
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
                        Iconic Italian design, best build quality in class
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        TFT display with smartphone integration, best dashboard
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Superior ride quality, excellent suspension
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Extensive dealer network for service and parts
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
                        $7,499, double the price of the NIU for similar specs
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        30 mph top speed despite 3.9kW motor (electronically limited)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        287 lbs — heaviest in roundup, battery is not removable
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="vespa-elettrica"
                    source="electric-moped-hub"
                    variant="primary"
                    label="Check Price; Vespa Elettrica"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 5. GenZe 200 */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">5. GenZe 200</h2>
                  <span className="text-xs font-semibold text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Practical
                  </span>
                </div>
                <StarRating rating={4.2} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$2,999</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">2kW</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">30 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">30 mph</p>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The GenZe 200 was designed for delivery fleets and courier services before
                    becoming available to consumers. That commercial DNA shows in every design
                    decision. The built-in cargo compartment under the seat is genuinely useful — it
                    fits a full bag of groceries, a laptop bag, or a delivery box without needing
                    aftermarket accessories.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Weather resistance is another fleet-proven feature. The electrical components
                    are sealed and rated for rain operation, unlike most consumer mopeds that
                    recommend avoiding wet conditions. If you commute rain or shine, the GenZe 200
                    handles it. The removable battery charges in about 3.5 hours on a standard
                    household outlet.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The tradeoff is range. At 30 miles per charge, the GenZe 200 has the shortest
                    range in this roundup. That is fine for a 10-15 mile round-trip commute or
                    neighborhood errands, but it rules out longer suburban rides. If your daily
                    route is under 25 miles total, the GenZe is a workhorse. Beyond that, look at
                    the NIU or Super Soco.
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
                        Built-in cargo storage — carries groceries, bags, or packages
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Weather resistant, fleet-proven reliability
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Removable battery, 3.5-hour charge time
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Practical design over flashy aesthetics
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
                        30-mile range is the shortest in this roundup
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Utilitarian design. not the most visually appealing
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Limited dealer/service options compared to Vespa or NIU
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="genze-200"
                    source="electric-moped-hub"
                    variant="primary"
                    label="Check Price. GenZe 200"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== MOPED VS E-BIKE VS SCOOTER ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Electric Moped vs E-Bike vs Electric Scooter
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                These three categories overlap just enough to cause confusion. Here is how they
                actually differ and which one fits your situation.
              </p>
              <div className="overflow-x-auto -mx-4 px-4 mb-6">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-card">
                      <th className="text-left p-3 font-semibold text-foreground">Feature</th>
                      <th className="text-left p-3 font-semibold text-foreground">Electric Moped</th>
                      <th className="text-left p-3 font-semibold text-foreground">E-Bike</th>
                      <th className="text-left p-3 font-semibold text-foreground">Electric Scooter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">Top Speed</td>
                      <td className="p-3 text-muted-foreground">25-56 mph</td>
                      <td className="p-3 text-muted-foreground">20-28 mph</td>
                      <td className="p-3 text-muted-foreground">15-33 mph</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Range</td>
                      <td className="p-3 text-muted-foreground">30-87 miles</td>
                      <td className="p-3 text-muted-foreground">25-80 miles</td>
                      <td className="p-3 text-muted-foreground">12-62 miles</td>
                    </tr>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">License Required</td>
                      <td className="p-3 text-muted-foreground">Yes (most states)</td>
                      <td className="p-3 text-muted-foreground">No (Class 1-3)</td>
                      <td className="p-3 text-muted-foreground">Varies by speed</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Insurance</td>
                      <td className="p-3 text-muted-foreground">Required</td>
                      <td className="p-3 text-muted-foreground">Not required</td>
                      <td className="p-3 text-muted-foreground">Varies</td>
                    </tr>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">Registration</td>
                      <td className="p-3 text-muted-foreground">Required (DMV)</td>
                      <td className="p-3 text-muted-foreground">Not required</td>
                      <td className="p-3 text-muted-foreground">Varies</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Riding Position</td>
                      <td className="p-3 text-muted-foreground">Seated, step-through</td>
                      <td className="p-3 text-muted-foreground">Seated, pedal-assist</td>
                      <td className="p-3 text-muted-foreground">Standing or seated</td>
                    </tr>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">Price Range</td>
                      <td className="p-3 text-muted-foreground">$2,000-$8,000</td>
                      <td className="p-3 text-muted-foreground">$1,000-$5,000</td>
                      <td className="p-3 text-muted-foreground">$300-$1,500</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Best For</td>
                      <td className="p-3 text-muted-foreground">5-30 mile commutes</td>
                      <td className="p-3 text-muted-foreground">Exercise + commute</td>
                      <td className="p-3 text-muted-foreground">Last-mile, 1-5 miles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong className="text-foreground">Choose a moped if:</strong> Your commute is
                  5-30 miles each way, you need to keep up with 35+ mph traffic, you want a
                  step-through seated position, and you are comfortable with licensing and
                  registration requirements.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong className="text-foreground">Choose an e-bike if:</strong> You want
                  exercise alongside your commute, your route uses bike lanes, you want zero
                  licensing hassle, and your speed needs stay under 28 mph. See our{' '}
                  <Link href="/reviews/best-electric-bikes" className="text-primary hover:underline">
                    best electric bikes guide
                  </Link>{' '}
                  for top picks.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong className="text-foreground">Choose an electric scooter if:</strong> Your
                  trips are under 5 miles, you need to fold it up and carry it inside, or you want
                  the cheapest electric option for short errands.
                </p>
              </div>
            </section>

            {/* ========== LICENSING REQUIREMENTS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Licensing Requirements by State
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Electric moped licensing varies significantly by state. The key factors are
                motor wattage and top speed. Here is a general breakdown, always verify with
                your local DMV.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">California</p>
                    <p className="text-sm text-muted-foreground">Mopeds under 30 mph require an M1 or M2 motorcycle license. Registration required. No freeway access. Helmet required for all riders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">New York</p>
                    <p className="text-sm text-muted-foreground">Class C limited-use motorcycles (under 30 mph) need a standard driver&apos;s license. Registration and insurance required. No highway access.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Florida</p>
                    <p className="text-sm text-muted-foreground">Motorized scooters under 30 mph need a regular driver&apos;s license. Registration required. No motorcycle endorsement needed for mopeds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Texas</p>
                    <p className="text-sm text-muted-foreground">Mopeds under 30 mph need a Class C driver&apos;s license. Registration and liability insurance required. Helmet required under age 21.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Important Note</p>
                    <p className="text-sm text-muted-foreground">Models exceeding 30 mph (like the Super Soco CPx at 56 mph) are often classified as motorcycles, requiring a full motorcycle license. Always check your state&apos;s specific thresholds for motor wattage and top speed.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== RANGE REALITY ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Battery className="h-6 w-6 text-primary" />
                Range Reality: Claimed vs Actual
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Every manufacturer tests range under ideal conditions, flat roads, moderate speed,
                lightweight rider, no wind. Real-world range is typically 70-85% of the claimed
                figure. Here is what to actually expect.
              </p>
              <div className="overflow-x-auto -mx-4 px-4 mb-6">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-card">
                      <th className="text-left p-3 font-semibold text-foreground">Model</th>
                      <th className="text-left p-3 font-semibold text-foreground">Claimed Range</th>
                      <th className="text-left p-3 font-semibold text-foreground">Real-World Estimate</th>
                      <th className="text-left p-3 font-semibold text-foreground">Charge Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">NIU NQi GTS Sport</td>
                      <td className="p-3 text-muted-foreground">62 miles</td>
                      <td className="p-3 text-muted-foreground">48-55 miles</td>
                      <td className="p-3 text-muted-foreground">3.5 hours (each battery)</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Super Soco CPx</td>
                      <td className="p-3 text-muted-foreground">87 miles</td>
                      <td className="p-3 text-muted-foreground">65-75 miles</td>
                      <td className="p-3 text-muted-foreground">3.5 hours (each battery)</td>
                    </tr>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">CSC Monterey</td>
                      <td className="p-3 text-muted-foreground">50 miles</td>
                      <td className="p-3 text-muted-foreground">38-45 miles</td>
                      <td className="p-3 text-muted-foreground">4-5 hours</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Vespa Elettrica</td>
                      <td className="p-3 text-muted-foreground">62 miles</td>
                      <td className="p-3 text-muted-foreground">48-55 miles</td>
                      <td className="p-3 text-muted-foreground">4 hours</td>
                    </tr>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">GenZe 200</td>
                      <td className="p-3 text-muted-foreground">30 miles</td>
                      <td className="p-3 text-muted-foreground">22-26 miles</td>
                      <td className="p-3 text-muted-foreground">3.5 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">Factors That Reduce Range</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Speed:</strong> Riding at max speed vs eco mode can cut range by 30-40%
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Hills:</strong> Steep inclines draw significantly more power from the motor
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Rider weight:</strong> A 200 lb rider will get 10-15% less range than a 150 lb rider
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Temperature:</strong> Cold weather (below 40 F) reduces lithium battery output by 15-25%
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <strong className="text-foreground">Headwind:</strong> A 15+ mph headwind can reduce range by 10-20%
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== CHARGING ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Charging Costs and Practicalities
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Every electric moped on this list charges from a standard 110V household outlet.
                No special charging station required. Plug it into the same outlet you charge your
                phone with.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Cost Per Charge</p>
                    <p className="text-sm text-muted-foreground">$0.15-$0.40 per full charge at the US national average of $0.16/kWh. A daily commuter charging 5 times per week spends $40-$100 per year on electricity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Battery className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Removable vs Fixed Batteries</p>
                    <p className="text-sm text-muted-foreground">The NIU, Super Soco, CSC, and GenZe all have removable batteries you can carry inside to charge. The Vespa Elettrica battery is integrated — you must bring the moped to the outlet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Charge Timing Strategy</p>
                    <p className="text-sm text-muted-foreground">Most batteries charge in 3.5-5 hours. Plug in when you get home, and the moped is ready by morning. If you have time-of-use electricity pricing, charge overnight when rates drop to off-peak levels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Battery Longevity Tips</p>
                    <p className="text-sm text-muted-foreground">Avoid fully depleting the battery regularly. Keep the charge between 20-80% for daily use. Store at 50-60% charge if not riding for weeks. Avoid charging in extreme heat or cold. These habits can extend battery life by 30-50%.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== INSURANCE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Insurance: What You Need and What It Costs
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Since electric mopeds are classified as motor vehicles in most states, liability
                insurance is required for street-legal operation. Here is what to expect.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Typical Costs</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Liability only: $100-$200/year
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Comprehensive: $200-$400/year
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Theft coverage (recommended): +$50-$100/year
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Who Insures Mopeds</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Progressive, GEICO, and State Farm all offer moped policies
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Specialty insurers: Markel, Dairyland
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Some homeowner policies cover low-speed mopeds
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== OVERALL PROS AND CONS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                Electric Moped Pros and Cons
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Advantages
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Fuel costs near zero. $40-$100/year in electricity vs $1,200-$2,000/year for gas
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      No oil changes, no engine maintenance, no emissions inspections
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Quiet operation — no exhaust noise, no disturbing neighbors
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Instant torque from electric motors, smooth acceleration
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Easy parking, lower insurance costs than cars or motorcycles
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Charge at home from a standard outlet. No gas station trips
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Range anxiety on longer trips, no quick refueling option
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Licensing and registration required in most states
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Battery replacement costs $500-$1,500 after 3-5 years
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Not highway legal — top speeds limit route options
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Limited dealer networks for some brands (NIU, Super Soco)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Weather exposure, no cabin protection in rain or cold
                    </li>
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
                {faqSchema.mainEntity.map((faq, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== VERDICT ========== */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  Final Verdict
                </h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The <strong className="text-foreground">NIU NQi GTS Sport ($3,599)</strong> is
                    the best electric moped for most buyers. It balances range, speed, connected
                    features, and price better than anything else on the market. The dual removable
                    batteries solve the apartment-charging problem that kills many electric vehicle
                    purchases. GPS tracking adds genuine peace of mind for a vehicle you park on the
                    street.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    If your commute involves 40+ mph roads, the{' '}
                    <strong className="text-foreground">Super Soco CPx ($3,999)</strong> is the only
                    choice here. Its 56 mph top speed and 87-mile dual-battery range put it in a
                    different performance category. You will need a motorcycle license in most states,
                    but you will also have access to roads the other mopeds cannot legally ride.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    For budget buyers, the{' '}
                    <strong className="text-foreground">CSC Monterey ($2,495)</strong> delivers
                    everything you need at the lowest price. US-based company, ships assembled, looks
                    great. It will not win any speed contests, but it will reliably get you to work and
                    back for pennies a day.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The <strong className="text-foreground">Vespa Elettrica ($7,499)</strong> is for
                    riders who want the Vespa experience specifically. It is beautifully made, rides
                    superbly, and has the best dealer network. But at double the price of the NIU with
                    similar range and lower top speed, it is a premium you pay for the brand and build
                    quality, not performance.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    The <strong className="text-foreground">GenZe 200 ($2,999)</strong> is the utility
                    pick. If you need built-in cargo space and all-weather reliability more than range
                    or speed, it was literally designed for that use case.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== RELATED CONTENT CTAs ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/reviews/best-electric-bikes"
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    Best Electric Bikes (2026)
                    <ChevronRight className="h-4 w-4" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer pedal-assist over throttle-only? Our e-bike comparison covers the top
                    picks for commuting, off-road, and cargo hauling.
                  </p>
                </Link>
                <Link
                  href="/reviews"
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    All Product Reviews
                    <ChevronRight className="h-4 w-4" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Browse all GreenReviewsHub reviews, portable power stations, e-bikes, lawn
                    equipment, smart home tech, and more.
                  </p>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
