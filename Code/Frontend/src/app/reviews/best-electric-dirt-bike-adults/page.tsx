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
    'Best Electric Dirt Bikes for Adults (2026): Sur-Ron vs KTM vs Stark Varg vs Zero — Top 6 Reviewed',
  description:
    'Compare the best electric dirt bikes for adults in 2026. In-depth reviews of Sur-Ron Light Bee X, KTM Freeride E-XC, Stark Varg, Cake Kalk OR, Segway X260, and Zero FX. Specs, range, street legal options, and buying guide.',
  alternates: {
    canonical: '/reviews/best-electric-dirt-bike-adults',
  },
  openGraph: {
    title: 'Best Electric Dirt Bikes for Adults (2026): Top 6 Reviewed',
    description:
      'Sur-Ron Light Bee X vs KTM Freeride E-XC vs Stark Varg vs Cake Kalk OR vs Segway X260 vs Zero FX. Full specs, pros/cons, electric vs gas comparison, and buying guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Dirt Bikes for Adults (2026): Sur-Ron vs KTM vs Stark Varg vs Zero — Top 6 Reviewed',
  description:
    'Compare the best electric dirt bikes for adults in 2026. In-depth reviews covering Sur-Ron Light Bee X, KTM Freeride E-XC, Stark Varg, Cake Kalk OR, Segway X260, and Zero FX with specs, range data, and buying guide.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-dirt-bike-adults',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric dirt bike for adults in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Sur-Ron Light Bee X is the most popular electric dirt bike for adults in 2026. At $4,500 with a 6kW peak motor, 60 mph top speed, 60-mile range, and a removable battery at just 70 lbs, it delivers an outstanding balance of performance, range, and value. For serious motocross riders, the Stark Varg at $11,900 with 80hp and full MX capability is the performance king.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric dirt bikes street legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some electric dirt bikes are street legal and some are off-road only. The Cake Kalk OR and Zero FX come street legal from the factory with DOT-approved lights, mirrors, turn signals, and registration. The Sur-Ron Light Bee X, KTM Freeride E-XC, Stark Varg, and Segway X260 are off-road only in stock form, though aftermarket street-legal kits exist for some models. Laws vary by state, so check your local regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far can an electric dirt bike go on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range varies dramatically based on riding style and terrain. Trail riding at moderate speeds yields the best range: the Segway X260 can reach 75 miles, the Sur-Ron Light Bee X about 60 miles, and the Cake Kalk OR around 50 miles. Aggressive motocross riding cuts range significantly — the KTM Freeride E-XC gets about 1.5 hours of hard trail riding. The Stark Varg claims up to 6 hours in eco mode.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to charge an electric dirt bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Charging an electric dirt bike costs between $0.15 and $0.60 per full charge depending on battery size and your local electricity rate. At the national average of $0.16/kWh, a Sur-Ron Light Bee X with a 2.7 kWh battery costs about $0.43 per charge. Compare that to $8-$15 worth of gas per ride on a traditional dirt bike, and the savings add up fast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric dirt bikes as fast as gas dirt bikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top electric dirt bikes now match or exceed gas bikes in acceleration and peak power. The Stark Varg produces 80 hp and can hit 80+ mph, rivaling 450cc gas motocross bikes. Electric motors deliver instant torque from zero RPM, meaning quicker off-the-line acceleration than gas bikes. However, gas bikes still win on sustained high-speed endurance riding where quick refueling matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much maintenance does an electric dirt bike need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Significantly less than a gas dirt bike. Electric dirt bikes have no engine oil, air filters, spark plugs, clutch plates, or valve adjustments to worry about. Maintenance is limited to brakes, tires, chain/belt, suspension servicing, and keeping the battery healthy. Owners typically save $500-$1,500 per year on maintenance compared to a gas dirt bike.',
      },
    },
  ],
};

interface DirtBike {
  name: string;
  badge: string;
  price: string;
  motor: string;
  topSpeed: string;
  range: string;
  weight: string;
  battery: string;
  streetLegal: boolean;
  rating: number;
  affiliateLink: string;
}

const bikes: DirtBike[] = [
  {
    name: 'Sur-Ron Light Bee X',
    badge: 'Most Popular',
    price: '$4,500',
    motor: '6kW peak',
    topSpeed: '60 mph',
    range: '60 miles',
    weight: '70 lbs',
    battery: 'Removable 60V 32Ah',
    streetLegal: false,
    rating: 4.6,
    affiliateLink: '#',
  },
  {
    name: 'KTM Freeride E-XC',
    badge: 'Premium Pick',
    price: '$11,699',
    motor: '18kW',
    topSpeed: '50 mph',
    range: '1.5 hr ride time',
    weight: '~238 lbs',
    battery: 'Removable 3.9 kWh',
    streetLegal: false,
    rating: 4.7,
    affiliateLink: '#',
  },
  {
    name: 'Stark Varg',
    badge: 'Performance King',
    price: '$11,900',
    motor: '80 hp',
    topSpeed: '80+ mph',
    range: '6 hr (eco mode)',
    weight: '~243 lbs',
    battery: '6 kWh',
    streetLegal: false,
    rating: 4.8,
    affiliateLink: '#',
  },
  {
    name: 'Cake Kalk OR',
    badge: 'Street Legal',
    price: '$8,500',
    motor: '11kW',
    topSpeed: '56 mph',
    range: '50 miles',
    weight: '~176 lbs',
    battery: '2.6 kWh',
    streetLegal: true,
    rating: 4.4,
    affiliateLink: '#',
  },
  {
    name: 'Segway X260',
    badge: 'Best Value',
    price: '$4,999',
    motor: '5kW',
    topSpeed: '46 mph',
    range: '75 miles',
    weight: '~121 lbs',
    battery: '74V 31.2Ah',
    streetLegal: false,
    rating: 4.3,
    affiliateLink: '#',
  },
  {
    name: 'Zero FX',
    badge: 'Best All-Around',
    price: '$8,995',
    motor: '46 hp',
    topSpeed: '85 mph',
    range: '91 mi (city) / 39 mi (hwy)',
    weight: '~289 lbs',
    battery: '7.2 kWh ZF',
    streetLegal: true,
    rating: 4.5,
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

export default function BestElectricDirtBikeAdults() {
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
                Best Electric Dirt Bikes for Adults (2026)
              </h1>
              <p className="text-lg text-muted-foreground mb-3">
                Sur-Ron vs KTM vs Stark Varg vs Cake vs Segway vs Zero
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>22 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80&auto=format&fit=crop' alt='Electric dirt bike for adults' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Overview / Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Electric dirt bikes have arrived. What started as a quiet curiosity in the off-road
                world has become a legitimate performance category, with machines trading blows with
                450cc gas bikes on a motocross track. Whether you want a lightweight trail bike, a
                street-legal dual-sport, or a full-blown MX weapon, there is an electric dirt bike
                built for you in 2026.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Instant torque from zero RPM, near-silent operation that opens up noise-restricted
                trails, dramatically lower maintenance, and no more mixing fuel. We researched the
                six best electric dirt bikes for adults across every category. Here is what we found.
              </p>
            </div>

            {/* ========== QUICK PICKS ========== */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold text-foreground">Quick Picks by Category</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Sur-Ron Light Bee X — Most Popular / Best Entry Point
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The electric dirt bike that started the movement. At $4,500 and just 70 lbs with
                      a removable battery, 60 mph top speed, and 60-mile range, it is the gateway bike
                      for most adult riders. Massive aftermarket support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Stark Varg — Performance King / Best for MX
                    </p>
                    <p className="text-sm text-muted-foreground">
                      80 horsepower, 80+ mph, full motocross capability, and up to 6 hours of ride time
                      in eco mode. The Stark Varg is the electric bike that made gas-bike riders pay
                      attention. Premium price, premium performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Zero FX — Best All-Around / Street Legal
                    </p>
                    <p className="text-sm text-muted-foreground">
                      85 mph, 91 miles of city range, street legal out of the box, and capable on trails
                      too. The Zero FX bridges the gap between dirt bike and daily rider better than
                      anything else on the market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-primary/80 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Segway X260 — Best Value for the Money
                    </p>
                    <p className="text-sm text-muted-foreground">
                      75-mile range, reliable Segway backing, and sub-$5,000 price. If you want maximum
                      range per dollar spent on a capable trail bike, the X260 is hard to beat.
                    </p>
                  </div>
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
                      <th className="text-left p-3 font-semibold text-foreground">Bike</th>
                      <th className="text-left p-3 font-semibold text-foreground">Price</th>
                      <th className="text-left p-3 font-semibold text-foreground">Motor</th>
                      <th className="text-left p-3 font-semibold text-foreground">Top Speed</th>
                      <th className="text-left p-3 font-semibold text-foreground">Range</th>
                      <th className="text-left p-3 font-semibold text-foreground">Weight</th>
                      <th className="text-left p-3 font-semibold text-foreground">Street Legal</th>
                      <th className="text-left p-3 font-semibold text-foreground">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bikes.map((bike, idx) => (
                      <tr
                        key={bike.name}
                        className={idx % 2 === 0 ? 'bg-card/50' : 'bg-card/30'}
                      >
                        <td className="p-3 font-semibold text-foreground whitespace-nowrap">
                          {bike.name}
                          <span className="block text-xs text-primary">{bike.badge}</span>
                        </td>
                        <td className="p-3 text-foreground">{bike.price}</td>
                        <td className="p-3 text-muted-foreground">{bike.motor}</td>
                        <td className="p-3 text-muted-foreground">{bike.topSpeed}</td>
                        <td className="p-3 text-muted-foreground">{bike.range}</td>
                        <td className="p-3 text-muted-foreground">{bike.weight}</td>
                        <td className="p-3">
                          {bike.streetLegal ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-muted-foreground/40" />
                          )}
                        </td>
                        <td className="p-3">
                          <StarRating rating={bike.rating} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL BIKE BREAKDOWNS ========== */}

            {/* 1. Sur-Ron Light Bee X */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">1. Sur-Ron Light Bee X</h2>
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
                <StarRating rating={4.6} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$4,500</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">6kW peak</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">60 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Weight</p>
                    <p className="font-bold text-foreground">70 lbs</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Sur-Ron Light Bee X is the electric dirt bike that kicked off the revolution. It
                  is the best-selling electric off-road bike in the world for good reason: at just 70
                  pounds with a removable battery, it is lighter than most mountain bikes with a motor.
                  The 6kW peak motor pushes it to 60 mph, and the 60V 32Ah battery delivers a genuine
                  60-mile range at moderate trail speeds.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  What makes the Sur-Ron special is the ecosystem. The aftermarket support is enormous —
                  upgraded controllers, batteries, suspension kits, and street-legal conversion kits are
                  all readily available. The stock suspension and brakes are basic, but even with $500-$1,000
                  in upgrades, the total cost is still far below premium competitors.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Incredibly lightweight at 70 lbs</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Removable battery — swap in seconds</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Massive aftermarket parts ecosystem</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Best price-to-performance ratio</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> 60-mile range is class-leading at this price</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <X className="h-4 w-4 text-red-500" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Stock suspension needs upgrading for aggressive riding</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Not street legal without aftermarket kit</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Brakes are adequate, not premium</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Customer support can be inconsistent</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="sur-ron-light-bee-x"
                    source="electric-dirt-bike-adults-hub"
                    variant="primary"
                    label="Check Price — Sur-Ron Light Bee X"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 2. KTM Freeride E-XC */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">2. KTM Freeride E-XC</h2>
                  <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Premium Pick
                  </span>
                </div>
                <StarRating rating={4.7} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$11,699</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">18kW</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Ride Time</p>
                    <p className="font-bold text-foreground">1.5 hours</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">50 mph</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  KTM does not make half-hearted motorcycles, and the Freeride E-XC is no exception.
                  This is a proper enduro bike from a manufacturer with decades of off-road racing DNA.
                  The 18kW motor delivers smooth, controllable power through a chassis that feels like a
                  real motorcycle — because it is one.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The WP XPLOR suspension and Brembo brakes are the same components found on KTM&apos;s
                  gas enduro bikes. The removable 3.9 kWh battery swaps in about a minute, with an
                  optional fast charger for 80-minute refills. The main limitation is ride time — about
                  1.5 hours of aggressive trail riding per charge. For riders who can live with that (or
                  buy a second battery), this is the most polished electric enduro experience money can buy.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Pro-grade WP XPLOR suspension</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Brembo brakes — the gold standard</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> KTM dealer network for parts and service</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Removable battery with fast charge option</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Real motorcycle feel and build quality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <X className="h-4 w-4 text-red-500" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Limited to 1.5 hours of hard riding</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Premium price at $11,699</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> 50 mph top speed is modest for the price</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Not street legal</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="ktm-freeride-e-xc"
                    source="electric-dirt-bike-adults-hub"
                    variant="primary"
                    label="Check Price — KTM Freeride E-XC"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 3. Stark Varg */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">3. Stark Varg</h2>
                  <span className="text-xs font-semibold text-red-400 bg-red-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Performance King
                  </span>
                </div>
                <StarRating rating={4.8} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$11,900</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">80 hp</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Ride Time</p>
                    <p className="font-bold text-foreground">Up to 6 hr</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">80+ mph</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Stark Varg is the bike that proved electric motocross is not just viable — it is
                  the future. With 80 horsepower from its motor, the Varg matches the output of a
                  450cc gas motocross bike. It hits 80+ mph and can rip through a full MX track with
                  power to spare.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The 6 kWh battery — the largest in any electric dirt bike — delivers up to 6 hours in
                  eco mode. In full-attack MX mode, expect 25-35 minutes of track time per charge, enough
                  for a full moto. The app offers 100+ customizable power maps. This is not a novelty — it
                  is a race-ready machine with purpose-built MX suspension, geometry, and ergonomics.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> 80 hp rivals 450cc gas MX bikes</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> 6 kWh battery — largest in class</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> 100+ customizable power maps via app</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Full MX-grade suspension and chassis</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Eco mode extends ride time to 6 hours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <X className="h-4 w-4 text-red-500" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> $11,900 is a significant investment</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> 243 lbs is heavy for an MX bike</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Limited dealer network (direct sales)</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Off-road only — not street legal</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="stark-varg"
                    source="electric-dirt-bike-adults-hub"
                    variant="primary"
                    label="Check Price — Stark Varg"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 4. Cake Kalk OR */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">4. Cake Kalk OR</h2>
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Street Legal
                  </span>
                </div>
                <StarRating rating={4.4} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$8,500</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">11kW</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">50 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">56 mph</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Cake Kalk OR is the Swedish design statement of the electric dirt bike world.
                  Its minimalist aesthetic — exposed frame, clean lines, no unnecessary graphics — has
                  won design awards and turned heads at motorcycle shows worldwide. But it is more than
                  looks: the Kalk OR is street legal from the factory.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  DOT-approved lighting, mirrors, turn signals, and a registerable VIN mean you can ride
                  to the trailhead, hit the dirt, and ride home — no trailer needed. At 11kW, the Kalk OR
                  is not trying to compete with MX bikes. It is a trail explorer and urban runabout at
                  176 lbs that happens to look stunning doing both.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Street legal out of the box</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Award-winning minimalist design</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> True dual-sport capability</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Quiet enough for residential neighborhoods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <X className="h-4 w-4 text-red-500" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> $8,500 is steep for the power output</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Not enough power for aggressive trail riding</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> 50-mile range is moderate</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Limited service network outside major cities</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="cake-kalk-or"
                    source="electric-dirt-bike-adults-hub"
                    variant="primary"
                    label="Check Price — Cake Kalk OR"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 5. Segway X260 */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">5. Segway X260</h2>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Value
                  </span>
                </div>
                <StarRating rating={4.3} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$4,999</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">5kW</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">75 miles</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">46 mph</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Segway — yes, that Segway — entered the electric dirt bike market with the X260, and
                  the result is surprisingly capable. Backed by the resources and reliability standards
                  of a major consumer electronics brand, the X260 offers the longest range in this
                  roundup at 75 miles, all for under $5,000.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The 5kW motor will not win drag races, but 46 mph is more than enough for trail riding.
                  At 121 lbs it sits in a comfortable middle ground, and Segway&apos;s warranty and parts
                  availability give peace of mind. The X260 is the sensible choice — if range per dollar
                  is your priority, nothing else comes close.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Best range in this roundup at 75 miles</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Under $5,000 — excellent value</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Segway brand reliability and warranty</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Solid build quality for the price</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <X className="h-4 w-4 text-red-500" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> 46 mph top speed is the lowest here</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> 5kW motor lacks punch for steep hills</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Limited aftermarket parts ecosystem</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Not street legal</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="segway-x260"
                    source="electric-dirt-bike-adults-hub"
                    variant="primary"
                    label="Check Price — Segway X260"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 6. Zero FX */}
            <section className="mb-16">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold text-foreground">6. Zero FX</h2>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    Best All-Around
                  </span>
                </div>
                <StarRating rating={4.5} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-bold text-foreground">$8,995</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Motor</p>
                    <p className="font-bold text-foreground">46 hp</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Range</p>
                    <p className="font-bold text-foreground">91 mi city</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-3 text-center">
                    <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Top Speed</p>
                    <p className="font-bold text-foreground">85 mph</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Zero FX is the Swiss Army knife of electric dirt bikes. Street legal, highway
                  capable at 85 mph, 91 miles of city range, and still genuinely fun on trails — it does
                  everything well. Zero Motorcycles has been building electric bikes since 2006, making
                  them the most experienced manufacturer in this roundup by a wide margin.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The 7.2 kWh ZF battery is the largest here, delivering 46 hp with 78 ft-lbs of torque.
                  On the street it accelerates like a sportbike; on dirt, the torque control makes it
                  surprisingly capable despite 289 lbs. If you want one bike that can commute, hit fire
                  roads on weekends, and blast through single track, the Zero FX is the only one here
                  that does all three from the factory.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Street legal with 85 mph top speed</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> 91-mile city range — best in class</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Zero has 20+ years of electric moto experience</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> True dual-sport: commute and trail ride</li>
                      <li className="flex items-start gap-2"><Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" /> Optional fast charging via Charge Tank</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1">
                      <X className="h-4 w-4 text-red-500" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> 289 lbs is heavy for dirt riding</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Highway range drops to 39 miles</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Charge Tank fast charger is an expensive add-on</li>
                      <li className="flex items-start gap-2"><X className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" /> Not competitive with dedicated MX bikes on a track</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="zero-fx"
                    source="electric-dirt-bike-adults-hub"
                    variant="primary"
                    label="Check Price — Zero FX"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== ELECTRIC VS GAS DIRT BIKE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Electric vs Gas Dirt Bikes: The Full Breakdown
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                An honest comparison of the real performance and practical differences.
              </p>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-card">
                      <th className="text-left p-3 font-semibold text-foreground">Category</th>
                      <th className="text-left p-3 font-semibold text-foreground">Electric</th>
                      <th className="text-left p-3 font-semibold text-foreground">Gas (250cc-450cc)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">Torque Delivery</td>
                      <td className="p-3 text-muted-foreground">Instant from 0 RPM — no clutch, no rev matching</td>
                      <td className="p-3 text-muted-foreground">Builds through RPM range; requires clutch skill</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Noise Level</td>
                      <td className="p-3 text-muted-foreground">Near-silent — ride in noise-restricted areas</td>
                      <td className="p-3 text-muted-foreground">80-110 dB — requires earplugs, angers neighbors</td>
                    </tr>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">Maintenance</td>
                      <td className="p-3 text-muted-foreground">Brakes, tires, chain, suspension only</td>
                      <td className="p-3 text-muted-foreground">Oil, filters, valves, spark plugs, clutch, carb</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Fuel / Charge Cost</td>
                      <td className="p-3 text-muted-foreground">$0.15-$0.60 per full charge</td>
                      <td className="p-3 text-muted-foreground">$8-$15 per ride in premium gas</td>
                    </tr>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">Range / Ride Time</td>
                      <td className="p-3 text-muted-foreground">40-90 miles trail; 25-45 min aggressive MX</td>
                      <td className="p-3 text-muted-foreground">60-100+ miles; refuel in 2 minutes</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Weight</td>
                      <td className="p-3 text-muted-foreground">70-290 lbs (huge variance)</td>
                      <td className="p-3 text-muted-foreground">220-260 lbs (more consistent)</td>
                    </tr>
                    <tr className="bg-card/50">
                      <td className="p-3 font-semibold text-foreground">Learning Curve</td>
                      <td className="p-3 text-muted-foreground">No clutch, no stalling — beginner-friendly</td>
                      <td className="p-3 text-muted-foreground">Clutch, shifting, kick-starting to learn</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="p-3 font-semibold text-foreground">Refuel / Recharge</td>
                      <td className="p-3 text-muted-foreground">1-8 hours depending on charger</td>
                      <td className="p-3 text-muted-foreground">2 minutes at any gas station</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Electric wins on maintenance, noise, power delivery, and accessibility. Gas wins on
                range and refueling speed. For trail riding, electric is already better for most adults.
              </p>
            </section>

            {/* ========== RANGE & BATTERY REALITY CHECK ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Battery className="h-6 w-6 text-primary" />
                Range and Battery: The Reality Check
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Manufacturer range claims assume ideal conditions. Real-world range depends on throttle
                aggression (can cut range 40-60%), terrain steepness, rider weight (ratings assume
                150-170 lbs), and temperature (cold weather cuts capacity 15-25%). Here is what to
                actually expect.
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Real-World Range Estimates</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 font-semibold text-foreground">Bike</th>
                        <th className="text-left p-2 font-semibold text-foreground">Claimed Range</th>
                        <th className="text-left p-2 font-semibold text-foreground">Trail (moderate)</th>
                        <th className="text-left p-2 font-semibold text-foreground">Aggressive MX</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Sur-Ron Light Bee X</td>
                        <td className="p-2 text-muted-foreground">60 mi</td>
                        <td className="p-2 text-muted-foreground">35-45 mi</td>
                        <td className="p-2 text-muted-foreground">15-25 mi</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">KTM Freeride E-XC</td>
                        <td className="p-2 text-muted-foreground">1.5 hr</td>
                        <td className="p-2 text-muted-foreground">1-1.5 hr</td>
                        <td className="p-2 text-muted-foreground">30-45 min</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Stark Varg</td>
                        <td className="p-2 text-muted-foreground">6 hr (eco)</td>
                        <td className="p-2 text-muted-foreground">2-4 hr</td>
                        <td className="p-2 text-muted-foreground">25-40 min</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Cake Kalk OR</td>
                        <td className="p-2 text-muted-foreground">50 mi</td>
                        <td className="p-2 text-muted-foreground">30-40 mi</td>
                        <td className="p-2 text-muted-foreground">15-20 mi</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Segway X260</td>
                        <td className="p-2 text-muted-foreground">75 mi</td>
                        <td className="p-2 text-muted-foreground">45-60 mi</td>
                        <td className="p-2 text-muted-foreground">20-30 mi</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-foreground">Zero FX</td>
                        <td className="p-2 text-muted-foreground">91 mi (city)</td>
                        <td className="p-2 text-muted-foreground">40-60 mi</td>
                        <td className="p-2 text-muted-foreground">20-30 mi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ========== MAINTENANCE SAVINGS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Maintenance Savings: Electric vs Gas Over 3 Years
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                No oil changes, no air filters, no valve adjustments, no spark plugs, no clutch
                plates. Here is what the savings look like over three years of regular riding.
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 font-semibold text-foreground">Expense</th>
                        <th className="text-left p-2 font-semibold text-foreground">Gas Dirt Bike (3 yr)</th>
                        <th className="text-left p-2 font-semibold text-foreground">Electric Dirt Bike (3 yr)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Oil changes</td>
                        <td className="p-2 text-muted-foreground">$450-$900</td>
                        <td className="p-2 text-muted-foreground">$0</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Air filters</td>
                        <td className="p-2 text-muted-foreground">$150-$300</td>
                        <td className="p-2 text-muted-foreground">$0</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Plugs, valves, clutch</td>
                        <td className="p-2 text-muted-foreground">$510-$1,020</td>
                        <td className="p-2 text-muted-foreground">$0</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Fuel cost (100 rides)</td>
                        <td className="p-2 text-muted-foreground">$800-$1,500</td>
                        <td className="p-2 text-muted-foreground">$15-$60</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Brakes, tires, chain</td>
                        <td className="p-2 text-muted-foreground">$400-$800</td>
                        <td className="p-2 text-muted-foreground">$400-$800</td>
                      </tr>
                      <tr className="bg-card/80">
                        <td className="p-2 font-bold text-foreground">3-Year Total</td>
                        <td className="p-2 font-bold text-foreground">$2,310-$4,520</td>
                        <td className="p-2 font-bold text-primary">$415-$860</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  That is $1,900 to $3,660 in savings over three years — and the gap widens if you
                  factor in shop labor for gas bike maintenance.
                </p>
              </div>
            </section>

            {/* ========== LEGAL CONSIDERATIONS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Legal Considerations: Street Legal vs Off-Road Only
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Not all electric dirt bikes can be ridden on public roads. Here is the breakdown.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Street Legal from Factory
                  </h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Cake Kalk OR:</strong> DOT lights, mirrors, turn signals, VIN plate. Register, insure, and ride on public roads.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Zero FX:</strong> Fully street legal. License plate, insurance, and motorcycle endorsement required in most states.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    Off-Road Only (Stock)
                  </h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Sur-Ron Light Bee X:</strong> Off-road only. Aftermarket street kits available in some states.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>KTM Freeride E-XC:</strong> Designed for trails and enduro. No street equipment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Stark Varg:</strong> MX-focused. No street-legal version exists.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                      <span><strong>Segway X260:</strong> Off-road only. No street kit currently available.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Key Legal Points to Know</h3>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Street-legal electric motorcycles require a motorcycle license, registration, and insurance — just like gas bikes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Some states classify lower-power electrics (under 2kW) as motorized bicycles. The Sur-Ron exists in a gray area in some jurisdictions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Electric dirt bikes are allowed on many trails where gas bikes are banned due to noise. Check with local land management agencies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Laws vary by state. Always check your local DMV and OHV regulations before buying.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== CHARGING GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Charging: Times, Costs, and Tips
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Charging requires the most adjustment coming from gas. Here is what to expect.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Charge Times by Bike</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 font-semibold text-foreground">Bike</th>
                        <th className="text-left p-2 font-semibold text-foreground">Battery Size</th>
                        <th className="text-left p-2 font-semibold text-foreground">Standard Charge</th>
                        <th className="text-left p-2 font-semibold text-foreground">Fast Charge</th>
                        <th className="text-left p-2 font-semibold text-foreground">Cost per Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Sur-Ron Light Bee X</td>
                        <td className="p-2 text-muted-foreground">2.7 kWh</td>
                        <td className="p-2 text-muted-foreground">3-4 hours</td>
                        <td className="p-2 text-muted-foreground">N/A (swap battery)</td>
                        <td className="p-2 text-muted-foreground">~$0.43</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">KTM Freeride E-XC</td>
                        <td className="p-2 text-muted-foreground">3.9 kWh</td>
                        <td className="p-2 text-muted-foreground">3-4 hours</td>
                        <td className="p-2 text-muted-foreground">80 min (KTM charger)</td>
                        <td className="p-2 text-muted-foreground">~$0.62</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Stark Varg</td>
                        <td className="p-2 text-muted-foreground">6.0 kWh</td>
                        <td className="p-2 text-muted-foreground">4-5 hours</td>
                        <td className="p-2 text-muted-foreground">1-2 hours</td>
                        <td className="p-2 text-muted-foreground">~$0.96</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Cake Kalk OR</td>
                        <td className="p-2 text-muted-foreground">2.6 kWh</td>
                        <td className="p-2 text-muted-foreground">3-4 hours</td>
                        <td className="p-2 text-muted-foreground">N/A</td>
                        <td className="p-2 text-muted-foreground">~$0.42</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 text-foreground">Segway X260</td>
                        <td className="p-2 text-muted-foreground">~3.2 kWh</td>
                        <td className="p-2 text-muted-foreground">4-5 hours</td>
                        <td className="p-2 text-muted-foreground">N/A</td>
                        <td className="p-2 text-muted-foreground">~$0.51</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-foreground">Zero FX</td>
                        <td className="p-2 text-muted-foreground">7.2 kWh</td>
                        <td className="p-2 text-muted-foreground">8-9 hours</td>
                        <td className="p-2 text-muted-foreground">2-3 hr (Charge Tank)</td>
                        <td className="p-2 text-muted-foreground">~$1.15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  * Cost per charge calculated at the national average of $0.16/kWh. California rates
                  average $0.28-$0.35/kWh, which roughly doubles these costs — still far cheaper than gas.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Charging Tips</h3>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Keep batteries between 20-80% charge for maximum lifespan. Charge after every ride.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>For removable-battery bikes (Sur-Ron, KTM), buy a second battery for all-day riding.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>A standard 120V household outlet works for all of these bikes. No special wiring needed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>If you have solar panels, charge during peak production hours to ride for free.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== PROS AND CONS OF ELECTRIC ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                Pros and Cons of Electric Dirt Bikes for Adults
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Advantages
                  </h3>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Instant torque</strong> from zero RPM — no powerband wait</span></li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Near-silent</strong> — ride noise-restricted areas</span></li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Minimal maintenance</strong> — no oil, filters, valves, plugs</span></li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Pennies per charge</strong> vs dollars per tank</span></li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Beginner-friendly</strong> — no clutch, no stalling</span></li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Trail access</strong> where gas engines are banned</span></li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>Zero emissions</strong> and <strong>customizable power</strong> via app</span></li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    Drawbacks
                  </h3>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Limited range</strong> under aggressive riding</span></li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>3-9 hour charge times</strong> vs 2-min gas fill</span></li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Higher upfront cost</strong> than gas equivalents</span></li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Battery degradation</strong> — 80% capacity after 500-1,000 cycles</span></li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Weight penalty</strong> on full-size electrics</span></li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Fewer mechanics</strong> trained on electric drivetrains</span></li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>No engine sound</strong> — a real adjustment for some</span></li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Resale value</strong> still uncertain in a maturing market</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="font-bold text-foreground mb-2">{faq.name}</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== VERDICT ========== */}
            <section className="mb-16">
              <div className="bg-card border border-primary/30 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                  The Verdict
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our final recommendation by use case:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      <strong className="text-foreground">Best entry point / most popular:</strong>{' '}
                      The <strong>Sur-Ron Light Bee X</strong> at $4,500 is the Honda Civic of electric
                      dirt bikes — affordable, proven, and endlessly customizable. Start here if you are
                      new to electric off-road.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      <strong className="text-foreground">Best for serious motocross:</strong>{' '}
                      The <strong>Stark Varg</strong> at $11,900 is the only electric bike that can
                      genuinely compete with 450cc gas MX bikes. If you race or ride hard, this is it.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      <strong className="text-foreground">Best street-legal all-rounder:</strong>{' '}
                      The <strong>Zero FX</strong> at $8,995 does everything — commute, trail ride, and
                      highway — from one machine. Unmatched versatility.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      <strong className="text-foreground">Best value for range:</strong>{' '}
                      The <strong>Segway X260</strong> at $4,999 delivers 75 miles of range with Segway
                      reliability. Maximum trail time per dollar.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      <strong className="text-foreground">Best premium enduro:</strong>{' '}
                      The <strong>KTM Freeride E-XC</strong> at $11,699 is a proper enduro bike from the
                      world&apos;s premier off-road manufacturer. Nothing matches its chassis and
                      suspension quality.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">
                      <strong className="text-foreground">Best design / street-legal dual-sport:</strong>{' '}
                      The <strong>Cake Kalk OR</strong> at $8,500 turns heads everywhere and rides to
                      the trailhead on public roads. Form meets function.
                    </p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Electric dirt bikes are no longer a compromise. Instant torque, silent running,
                  minimal maintenance, and access to trails where gas cannot go. The only question
                  is which one fits your riding style and budget.
                </p>
              </div>
            </section>

            {/* ========== CTA / RELATED ========== */}
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
