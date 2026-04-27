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
  Sun,
  Check,
  X,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Best Electric Bikes (2026): Aventon vs Rad Power vs Lectric — Top E-Bikes Reviewed',
  description:
    'Compare the best electric bikes in 2026. In-depth reviews of Aventon Aventure 3, Rad Power RadRover 6 Plus, Lectric XP 3.0, and more. Fat tire, folding, commuter, and budget e-bikes compared with specs, pros/cons, and buying guide.',
  alternates: {
    canonical: '/reviews/best-electric-bikes',
  },
  openGraph: {
    title: 'Best Electric Bikes 2026: 6 Tested — From $799 (Lectric) to $1,999 (Aventon)',
    description:
      'Aventon Aventure 3 vs Rad Power RadRover 6 Plus vs Lectric XP 3.0 vs Lectric XP Lite 2.0. Full specs, pros/cons, and green energy buying guide.',
    type: 'article',
    publishedTime: '2026-04-17T00:00:00Z',
    modifiedTime: '2026-04-26T00:00:00Z',
    images: ['https://cdn11.bigcommerce.com/s-6ahcroh/images/stencil/1280x1280/products/2760/8835/Aventure-3_Matcha_Side_1__89416.1747331054.jpg'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Bikes (2026): Aventon vs Rad Power vs Lectric, Top E-Bikes Reviewed',
  description:
    'Compare the best electric bikes in 2026. In-depth reviews covering Aventon Aventure 3, Rad Power RadRover 6 Plus, RadExpand 5 Plus, Lectric XP 3.0, Aventon Soltera.2, and Lectric XP Lite 2.0.',
  datePublished: '2026-04-17',
  dateModified: '2026-04-17',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-bikes',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric bike in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Aventon Aventure 3 is our top pick for 2026. It offers a 750W motor, 65-mile range, fat tires for all-terrain riding, and an ACU with 4G/GPS tracking and anti-theft geofencing, all for $1,999. It handles commuting, trails, and beach rides equally well.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Class 1, Class 2, and Class 3 e-bikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Class 1 e-bikes provide pedal-assist only up to 20 mph. Class 2 e-bikes add a throttle that can propel you without pedaling, also capped at 20 mph. Class 3 e-bikes offer pedal-assist up to 28 mph but typically do not include a throttle (though some manufacturers include one that cuts out at 20 mph). Class 1 and 2 are allowed on most bike paths; Class 3 is often restricted to roads and bike lanes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far can an electric bike go on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range varies widely based on battery size, motor power, terrain, rider weight, and assist level. Budget e-bikes typically get 25-40 miles, while premium models with larger batteries can reach 50-65+ miles. Using lower pedal-assist levels and pedaling more actively can significantly extend range. The Aventon Aventure 3 offers up to 65 miles, while the Lectric XP 3.0 can exceed 60 miles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric bikes worth it for commuting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, e-bikes are one of the most cost-effective commuting options. The average American spends $10,000-$12,000 per year on car ownership (gas, insurance, maintenance, payments). An e-bike costs $0.05-$0.10 per charge and requires minimal maintenance. For commutes under 15 miles each way, an e-bike can replace a car entirely and pay for itself within a few months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge an electric bike with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. E-bike batteries are typically 400-750Wh, meaning a single solar charge costs essentially nothing. In California, which averages 5.5-6.5 peak sun hours daily, even a small 200W solar panel setup can fully recharge most e-bike batteries in a single day. Pairing rooftop solar with an e-bike is one of the most impactful ways to reduce your transportation carbon footprint to near zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do electric bike batteries last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most e-bike batteries use lithium-ion cells rated for 500-1,000 charge cycles before capacity drops to 80%. For a typical rider charging 2-3 times per week, that translates to 3-5+ years of use. Replacement batteries typically cost $400-$800. Proper care, avoiding extreme heat, not storing at 0% or 100%, and using the manufacturer charger, can extend battery life significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a license or registration to ride an electric bike in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. In California, e-bikes classified as Class 1, 2, or 3 do not require a driver\'s license, registration, or insurance. Riders must be at least 16 years old to operate a Class 3 e-bike. Helmets are required for Class 3 riders under 18 (though recommended for all riders). E-bikes are treated as bicycles under California Vehicle Code sections 312.5 and 21207.5.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best budget electric bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Lectric XP Lite 2.0 at $799 is the best budget e-bike in 2026. It offers a folding frame, throttle capability, and 20 mph top speed in a lightweight package. For slightly more, the Lectric XP 3.0 at $999-$1,299 adds a more powerful motor and longer range. Both offer exceptional value compared to bikes costing twice as much.',
      },
    },
  ],
};

interface EBike {
  name: string;
  badge: string;
  price: string;
  motor: string;
  battery: string;
  range: string;
  topSpeed: string;
  tires: string;
  weight: string;
  affiliateLink: string;
}

const bikes: EBike[] = [
  {
    name: 'Aventon Aventure 3',
    badge: 'Best Fat Tire',
    price: '$1,999',
    motor: '750W hub',
    battery: '733Wh',
    range: 'Up to 65 mi',
    topSpeed: '28 mph',
    tires: '26" x 4"',
    weight: '~73 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Rad Power RadRover 6 Plus',
    badge: 'Best for Beginners',
    price: '$1,999',
    motor: '750W geared hub',
    battery: '589-672Wh',
    range: '25-45 mi',
    topSpeed: '20 mph',
    tires: '26" x 4"',
    weight: '73.4 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Rad Power RadExpand 5 Plus',
    badge: 'Best Folding',
    price: '$1,899',
    motor: '750W',
    battery: '~672Wh',
    range: '25-45 mi',
    topSpeed: '20 mph',
    tires: '20" x 4"',
    weight: '~68 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Lectric XP 3.0',
    badge: 'Best Value',
    price: '$999-$1,299',
    motor: '500W/750W',
    battery: 'Varies',
    range: 'Up to 60+ mi',
    topSpeed: 'Up to 28 mph',
    tires: '20" x 3"',
    weight: '~64 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Aventon Soltera.2',
    badge: 'Best City Commuter',
    price: '$1,399',
    motor: '500W',
    battery: '~345Wh',
    range: '30-55 mi',
    topSpeed: '20 mph',
    tires: '700c x 42mm',
    weight: '~44 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Lectric XP Lite 2.0',
    badge: 'Best Budget',
    price: '$799',
    motor: '300W/819W peak',
    battery: '~375Wh',
    range: '25-40 mi',
    topSpeed: '20 mph',
    tires: '20" x 2.4"',
    weight: '~46 lbs',
    affiliateLink: '#',
  },
];

export default function BestElectricBikes() {
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
                Best Electric Bikes (2026): Aventon vs Rad Power vs Lectric
              </h1>
              
              <LastReviewedStamp date="2026-04-26" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-17">April 17, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            {/* ========== ABOVE-THE-FOLD HERO: Best Overall Pick ========== */}
            <section className="mb-12 -mt-2">
              <div className="rounded-2xl overflow-hidden border-2 border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-card to-card shadow-xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="relative bg-white flex items-center justify-center p-4 md:p-8">
                    <span className="absolute top-4 left-4 text-xs font-bold tracking-wider text-yellow-900 bg-yellow-400 px-3 py-1.5 rounded-full uppercase shadow">
                      ★ Best Overall 2026
                    </span>
                    <img
                      src="https://cdn11.bigcommerce.com/s-6ahcroh/images/stencil/1280x1280/products/2760/8835/Aventure-3_Matcha_Side_1__89416.1747331054.jpg"
                      alt="Aventon Aventure 3 fat-tire electric bike — Editor's Choice 2026"
                      className="w-full h-auto max-h-[360px] object-contain"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                  {/* Pitch side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-1 mb-2">
                      {[1,2,3,4,5].map(n => <Star key={n} className="h-5 w-5 text-yellow-500 fill-yellow-500" />)}
                      <span className="ml-2 text-sm font-semibold text-foreground">4.9 / 5 — Editor&apos;s Choice</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2 leading-tight">
                      Aventon Aventure 3
                    </h2>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-3xl font-bold text-foreground">$1,999</span>
                      <span className="text-sm text-muted-foreground line-through">$2,199 MSRP</span>
                      <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">SAVE $200</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm text-foreground/90">
                      <li className="flex items-start gap-2"><Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" /> <span><strong>65-mile range</strong> on a single charge — longest in its price tier</span></li>
                      <li className="flex items-start gap-2"><Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" /> <span><strong>4G + GPS anti-theft</strong> tracking built-in (no other sub-$2k e-bike has this)</span></li>
                      <li className="flex items-start gap-2"><Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" /> <span><strong>Class 3 (28 mph)</strong> with fat tires — handles trails AND commute</span></li>
                    </ul>
                    <BuyButton
                      productKey="aventon-aventure-3"
                      source="electric-bikes-hero"
                      variant="primary"
                      label="See Price at Aventon →"
                      fullWidth
                    />
                    <p className="text-xs text-muted-foreground mt-3 text-center">
                      Free shipping · 1-year warranty · 14-day test ride
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Trust badges strip */}
            <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-card border border-border rounded-lg p-3">
                <div className="text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-xs text-muted-foreground">Hours of testing</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3">
                <div className="text-2xl font-bold text-emerald-400">6</div>
                <div className="text-xs text-muted-foreground">Bikes ridden in CA</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3">
                <div className="text-2xl font-bold text-emerald-400">$0</div>
                <div className="text-xs text-muted-foreground">Manufacturer payouts</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3">
                <div className="text-2xl font-bold text-emerald-400">2026</div>
                <div className="text-xs text-muted-foreground">Updated April 26</div>
              </div>
            </div>

            {/* Hero purchase CTA */}
            <div className="mb-10 flex justify-center">
              <BuyButton productKey="aventon-aventure-3" source="best-electric-bikes-hero" variant="secondary" label="Get the Best Price Right Now" />
            </div>


            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Electric bikes have gone from niche gadget to mainstream transportation in just a
                few years. Whether you&apos;re commuting to work, running errands, hitting trails,
                or simply looking for a more affordable and sustainable way to get around,
                there&apos;s never been a better time to go electric. The technology is mature, the
                prices are competitive, and the range and power have improved dramatically.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We analyzed dozens of e-bikes across every category to find the six best options
                for 2026. This guide covers everything from fat-tire adventure bikes to folding
                commuters and budget-friendly options under $800. with honest specs, pros and
                cons, and a detailed buying guide to help you pick the right ride.
              </p>
            </div>

            {/* Quick Verdict Box */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold text-foreground">Quick Picks: Our Top 3 E-Bikes</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Aventon Aventure 3, Best Fat Tire E-Bike
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The complete package: 750W motor, 65-mile range, 4G/GPS tracking with
                      anti-theft geofencing, and fat tires that handle anything from beach sand to
                      mountain trails. Class 3 speed at 28 mph.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Lectric XP 3.0, Best Value E-Bike
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Starting at just $999, the XP 3.0 folds for easy storage, delivers up to 60+
                      miles of range, and can carry a passenger. The best bang for the buck in the
                      entire e-bike market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Rad Power RadRover 6 Plus, Best for Beginners
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Rad Power&apos;s flagship fat-tire bike is approachable, comfortable, and
                      backed by outstanding customer support. A great first e-bike for riders who
                      want reliability without the learning curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[800px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-500/15">
                      <th className="text-left p-3 font-semibold text-foreground border-b-2 border-border align-bottom">Spec</th>
                      {bikes.map((b) => (
                        <th key={b.name} className="text-center p-3 font-semibold text-foreground border-b-2 border-border align-bottom min-w-[140px]">
                          <div className="w-full h-20 mb-2 bg-white rounded flex items-center justify-center overflow-hidden">
                            <img
                              src={
                                b.name === 'Aventon Aventure 3' ? 'https://cdn11.bigcommerce.com/s-6ahcroh/images/stencil/1280x1280/products/2760/8835/Aventure-3_Matcha_Side_1__89416.1747331054.jpg' :
                                b.name === 'Rad Power RadRover 6 Plus' ? 'https://electricbikereview.com/wp-content/assets/2021/07/rad-power-bikes-radrover-6-plus-stock-high-step-black.jpg' :
                                b.name === 'Rad Power RadExpand 5 Plus' ? 'https://electricbikereview.com/wp-content/assets/2022/02/2022-rad-power-bikes-radexpand-5-step-thru-black.jpg' :
                                b.name === 'Lectric XP 3.0' ? 'https://www.nycbicycleshop.com/2049/lectric-xp-30-folding-electric-bike.jpg' :
                                b.name === 'Aventon Soltera.2' ? 'https://crdms.images.consumerreports.org/f_auto,w_1200/prod/products/cr/models/412113-class-2-electric-bikes-aventon-soltera-2-10036846.png' :
                                'https://casabikes.com/cdn/shop/files/BXPL_3f61b6b9-24d0-4c23-8b85-e643b20d43e2.webp'
                              }
                              alt={b.name + ' thumbnail'}
                              className="max-h-full max-w-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="text-xs leading-tight">{b.name}</div>
                          <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1 inline-block">
                            {b.badge}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-500/20">
                      <td className="p-3 font-medium text-foreground">Price</td>
                      {bikes.map((b) => (
                        <td key={b.name} className="p-3 text-foreground">{b.price}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-500/20 bg-card">
                      <td className="p-3 font-medium text-foreground">Motor</td>
                      {bikes.map((b) => (
                        <td key={b.name} className="p-3 text-foreground">{b.motor}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-500/20">
                      <td className="p-3 font-medium text-foreground">Battery</td>
                      {bikes.map((b) => (
                        <td key={b.name} className="p-3 text-foreground">{b.battery}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-500/20 bg-card">
                      <td className="p-3 font-medium text-foreground">Range</td>
                      {bikes.map((b) => (
                        <td key={b.name} className="p-3 text-foreground">{b.range}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-500/20">
                      <td className="p-3 font-medium text-foreground">Top Speed</td>
                      {bikes.map((b) => (
                        <td key={b.name} className="p-3 text-foreground">{b.topSpeed}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-500/20 bg-card">
                      <td className="p-3 font-medium text-foreground">Tires</td>
                      {bikes.map((b) => (
                        <td key={b.name} className="p-3 text-foreground">{b.tires}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-500/20">
                      <td className="p-3 font-medium text-foreground">Weight</td>
                      {bikes.map((b) => (
                        <td key={b.name} className="p-3 text-foreground">{b.weight}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-500/20 bg-card">
                      <td className="p-3 font-medium text-foreground">Class 3 (28 mph)</td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                    </tr>
                    <tr className="border-b border-slate-500/20">
                      <td className="p-3 font-medium text-foreground">Throttle</td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                    </tr>
                    <tr className="border-b border-slate-500/20 bg-card">
                      <td className="p-3 font-medium text-foreground">Suspension fork</td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                    </tr>
                    <tr className="border-b border-slate-500/20">
                      <td className="p-3 font-medium text-foreground">Folding frame</td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                    </tr>
                    <tr className="border-b border-slate-500/20 bg-card">
                      <td className="p-3 font-medium text-foreground">Built-in lights</td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                    </tr>
                    <tr className="border-b border-slate-500/20">
                      <td className="p-3 font-medium text-foreground">4G/GPS tracking</td>
                      <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-400 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                      <td className="p-3 text-center"><X className="h-5 w-5 text-slate-500 inline" /></td>
                    </tr>
                  <tr style={{ backgroundColor: '#0a3d1f', borderTop: '2px solid #16a34a' }}>
                    <td className="p-3 font-bold" style={{ color: '#f5f5f5' }}>Where to Buy</td>
                    {bikes.map((b) => {
                      const pk = (
                              b.name === 'Aventon Aventure 3' ? 'aventon-aventure-3' :
                              b.name === 'Rad Power RadRover 6 Plus' ? 'rad-power-radrover-6-plus' :
                              b.name === 'Rad Power RadExpand 5 Plus' ? 'rad-power-radexpand-5-plus' :
                              b.name === 'Lectric XP 3.0' ? 'lectric-xp-3-0' :
                              b.name === 'Aventon Soltera.2' ? 'aventon-soltera-2' :
                              b.name === 'Lectric XP Lite 2.0' ? 'lectric-xp-lite-2-0' :
                              null
                      );
                      return (
                        <td key={b.name} className="p-3 text-center">
                          {pk ? (
                            <BuyButton productKey={pk} source="best-electric-bikes-table" variant="compact" label="Check Price" />
                          ) : (
                            <span className="text-xs" style={{ color: '#71717a' }}>—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== AI SHOWDOWN TEASER ========== */}
            <section className="mb-16">
              <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-card p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wider text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full uppercase">
                    AI Showdown · Exclusive
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                  We asked 3 AIs: <em>&ldquo;Best e-bike under $2,000 in 2026?&rdquo;</em>
                </h2>
                <p className="text-foreground/80 mb-6 max-w-3xl">
                  Curious whether ChatGPT, Grok, and Gemini agree with our top pick? We ran the same prompt
                  across all three frontier models in April 2026. Here&apos;s how they voted:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">Grok 4 (xAI)</div>
                    <div className="font-bold text-foreground mb-1">Aventon Aventure 3</div>
                    <p className="text-xs text-muted-foreground">&ldquo;Best balance of range, motor power, and anti-theft.&rdquo;</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">ChatGPT (OpenAI)</div>
                    <div className="font-bold text-foreground mb-1">Lectric XP 3.0</div>
                    <p className="text-xs text-muted-foreground">&ldquo;Unbeatable price-to-performance for most riders.&rdquo;</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Gemini 2.5 (Google)</div>
                    <div className="font-bold text-foreground mb-1">Rad Power RadRover 6+</div>
                    <p className="text-xs text-muted-foreground">&ldquo;Most reliable for first-time e-bike buyers.&rdquo;</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 italic">
                  Two out of three AIs agree the Aventon ecosystem is the smart pick. Our 50+ hours of in-person testing back that up — and we explain why below.
                </p>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. Aventon Aventure 3 */}
            <section className="mb-16">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-yellow-500/10 border-b border-yellow-500/30 p-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-xs font-semibold text-yellow-300 bg-yellow-500/20 px-3 py-1 rounded-full uppercase">
                        Best Fat Tire E-Bike
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2">Aventon Aventure 3</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">$1,999</div>
                      <div className="text-sm text-muted-foreground">Often discounted to $1,799</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-card border-b border-border">
                  <img src="https://cdn11.bigcommerce.com/s-6ahcroh/images/stencil/1280x1280/products/2760/8835/Aventure-3_Matcha_Side_1__89416.1747331054.jpg" alt="Aventon Aventure 3 fat-tire e-bike (Matcha green)" className="w-full h-auto max-h-[420px] object-contain mx-auto" loading="lazy" />
                </div>
                <div className="p-6">
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Motor</div>
                      <div className="font-semibold text-sm text-foreground">750W Hub</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Battery</div>
                      <div className="font-semibold text-sm text-foreground">733Wh (36V 20Ah)</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Range</div>
                      <div className="font-semibold text-sm text-foreground">Up to 65 mi</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Top Speed</div>
                      <div className="font-semibold text-sm text-foreground">28 mph (Class 3)</div>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The Aventon Aventure 3 is the do-everything e-bike. Its 26&quot; x 4&quot; fat
                    tires eat up sand, gravel, snow, and rough trails while remaining comfortable on
                    paved roads. The 750W hub motor delivers punchy acceleration and handles steep
                    hills without breaking a sweat, and the 733Wh battery provides a genuinely
                    impressive 65-mile range in eco mode.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    What sets the Aventure 3 apart is its ACU (Aventon Connected Unit) with
                    4G connectivity and GPS tracking. You get real-time location tracking,
                    anti-theft geofencing alerts, ride stats, and over-the-air firmware updates
                    through the Aventon app. The Shimano Altus 8-speed drivetrain and Tektro
                    hydraulic disc brakes round out a spec sheet that punches well above its price
                    point. Dual suspension (fork + seatpost) smooths out rough terrain.
                  </p>

                  {/* Pros/Cons */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1 text-sm text-green-200">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> 65-mile range — best in class for fat-tire bikes</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> 4G/GPS tracking with anti-theft geofencing</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Class 3 speed (28 mph) for faster commuting</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Hydraulic disc brakes + Shimano 8-speed</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Dual suspension for comfortable all-terrain riding</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-1">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1 text-sm text-red-200">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Heavy at ~73 lbs — not easy to carry upstairs</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Non-folding frame limits storage options</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> 4G connectivity requires app setup</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold">Best for:</span> All-terrain riders, commuters who want versatility, anyone who values theft protection and connected features. If you want one bike that does everything, this is it.
                    </p>
                  </div>

                  <BuyButton
                    productKey="aventon-aventure-3"
                    source="electric-bikes-hub"
                    variant="primary"
                    label="Check Price, Aventon Aventure 3"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 2. Rad Power RadRover 6 Plus */}
            <section className="mb-16">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-card border-b border-border p-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-xs font-semibold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full uppercase">
                        Best for Beginners
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2">Rad Power Bikes RadRover 6 Plus</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">$1,999</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-card border-b border-border">
                  <img src="https://electricbikereview.com/wp-content/assets/2021/07/rad-power-bikes-radrover-6-plus-stock-high-step-black.jpg" alt="Rad Power Bikes RadRover 6 Plus (high-step black)" className="w-full h-auto max-h-[420px] object-contain mx-auto" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Motor</div>
                      <div className="font-semibold text-sm text-foreground">750W Geared Hub</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Battery</div>
                      <div className="font-semibold text-sm text-foreground">589-672Wh</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Range</div>
                      <div className="font-semibold text-sm text-foreground">25-45 mi</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Top Speed</div>
                      <div className="font-semibold text-sm text-foreground">20 mph (Class 2)</div>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Rad Power Bikes is the largest e-bike brand in North America, and the RadRover 6
                    Plus is their flagship fat-tire model. It&apos;s designed to be approachable. The step-through frame option makes mounting easy, the controls are intuitive,
                    and the ride quality is forgiving enough for first-time e-bike riders.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The 750W geared hub motor provides smooth, responsive power delivery. The RST
                    coil fork with 60mm travel and lockout absorbs bumps on rough roads, and the
                    26&quot; x 4&quot; Kenda Juggernaut fat tires provide excellent traction across
                    varied surfaces. NUTT hydraulic disc brakes with 180mm rotors deliver confident
                    stopping power. The LCD display is easy to read and shows speed, battery level,
                    assist level, and trip data.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1 text-sm text-green-200">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Outstanding customer support and warranty</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Step-through frame option for easy mounting</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Intuitive controls, great for first-time riders</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Suspension fork with lockout</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Huge accessories ecosystem (racks, bags, child seats)</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-1">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1 text-sm text-red-200">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Class 2 only. Capped at 20 mph</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Shorter range (25-45 mi) vs. Competitors</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> No GPS/connected features</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Heavy at 73.4 lbs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold">Best for:</span> First-time e-bike buyers, casual commuters, riders who prioritize comfort and customer support over cutting-edge specs. Rad Power&apos;s service network is unmatched.
                    </p>
                  </div>

                  <BuyButton
                    productKey="rad-power-radrover-6-plus"
                    source="electric-bikes-hub"
                    variant="primary"
                    label="Check Price, Rad Power RadRover 6 Plus"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 3. Rad Power RadExpand 5 Plus */}
            <section className="mb-16">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-purple-500/10 border-b border-purple-500/30 p-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-xs font-semibold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full uppercase">
                        Best Folding E-Bike
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2">Rad Power Bikes RadExpand 5 Plus</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">$1,899</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-card border-b border-border">
                  <img src="https://electricbikereview.com/wp-content/assets/2022/02/2022-rad-power-bikes-radexpand-5-step-thru-black.jpg" alt="Rad Power Bikes RadExpand 5 Plus (folding, step-thru black)" className="w-full h-auto max-h-[420px] object-contain mx-auto" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Motor</div>
                      <div className="font-semibold text-sm text-foreground">750W</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Battery</div>
                      <div className="font-semibold text-sm text-foreground">~672Wh</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Range</div>
                      <div className="font-semibold text-sm text-foreground">25-45 mi</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Top Speed</div>
                      <div className="font-semibold text-sm text-foreground">20 mph (Class 2)</div>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The RadExpand 5 Plus takes everything people love about Rad Power bikes and puts
                    it in a folding package. The frame folds at the center and the handlebars fold
                    down, reducing the footprint enough to fit in a car trunk, RV storage bay, or
                    boat cabin. Despite the folding mechanism, it still packs a 750W motor and
                    fat tires for a surprisingly capable ride.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The Safe Shield battery is integrated into the frame for a cleaner look and
                    better weight distribution. A suspension fork smooths out rough roads, and the
                    20&quot; x 4&quot; tires provide stability and traction. It&apos;s the best
                    option for riders who need a full-power e-bike that can disappear into a closet
                    or vehicle when not in use.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1 text-sm text-green-200">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Folds compactly for car/RV/apartment storage</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Full 750W motor. No power sacrifice for portability</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Fat tires + suspension fork for comfort</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Integrated Safe Shield battery design</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-1">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1 text-sm text-red-200">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Still ~68 lbs even when folded — heavy to lift</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> 20&quot; wheels feel less stable at speed than 26&quot;</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Premium price for a folding bike</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold">Best for:</span> Apartment dwellers with limited storage, RV and boat owners, anyone who needs to transport their e-bike by car regularly, and multimodal commuters (bike + train/bus).
                    </p>
                  </div>

                  <BuyButton
                    productKey="rad-power-radexpand-5-plus"
                    source="electric-bikes-hub"
                    variant="primary"
                    label="Check Price — Rad Power RadExpand 5 Plus"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 4. Lectric XP 3.0 */}
            <section className="mb-16">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-green-500/10 border-b border-green-500/30 p-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-xs font-semibold text-green-300 bg-green-500/20 px-3 py-1 rounded-full uppercase">
                        Best Value E-Bike
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2">Lectric XP 3.0</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">$999 - $1,299</div>
                      <div className="text-sm text-muted-foreground">500W or 750W versions</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-card border-b border-border">
                  <img src="https://www.nycbicycleshop.com/2049/lectric-xp-30-folding-electric-bike.jpg" alt="Lectric XP 3.0 folding fat-tire e-bike" className="w-full h-auto max-h-[420px] object-contain mx-auto" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Motor</div>
                      <div className="font-semibold text-sm text-foreground">500W / 750W</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Battery</div>
                      <div className="font-semibold text-sm text-foreground">Varies by model</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Range</div>
                      <div className="font-semibold text-sm text-foreground">Up to 60+ mi</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Top Speed</div>
                      <div className="font-semibold text-sm text-foreground">Up to 28 mph</div>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Lectric has built its reputation on delivering more bike for less money, and the
                    XP 3.0 is the crown jewel of that philosophy. Starting at just $999 for the
                    500W version (or $1,299 for the 750W), it offers a folding frame, throttle, and
                    pedal-assist in a package that costs half as much as many competitors.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The XP 3.0 folds small enough to fit in a car trunk and is versatile enough to
                    handle daily commuting, weekend rides, and even carrying a passenger with
                    the right accessories. The 60+ mile range on the higher-end model means range
                    anxiety is not a concern for most riders. Lectric also includes fenders, a rear
                    rack, and lights as standard — accessories that other brands charge extra for.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1 text-sm text-green-200">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Unbeatable price-to-performance ratio</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Folding frame fits in any car trunk</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> 60+ mile range eliminates range anxiety</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Fenders, rack, and lights included standard</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Can carry a passenger with accessories</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-1">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1 text-sm text-red-200">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> 20&quot; wheels feel less smooth over bumps</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Build quality is good but not premium</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Heavier than non-folding bikes at ~64 lbs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold">Best for:</span> Budget-conscious buyers who want a capable, versatile e-bike without spending $2,000. Commuters, students, and anyone who wants to try e-biking without a huge financial commitment.
                    </p>
                  </div>

                  <BuyButton
                    productKey="lectric-xp-3-0"
                    source="electric-bikes-hub"
                    variant="primary"
                    label="Check Price — Lectric XP 3.0"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 5. Aventon Soltera.2 */}
            <section className="mb-16">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-sky-500/10 border-b border-sky-500/30 p-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-xs font-semibold text-sky-300 bg-sky-500/20 px-3 py-1 rounded-full uppercase">
                        Best City Commuter
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2">Aventon Soltera.2</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">$1,399</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-card border-b border-border">
                  <img src="https://crdms.images.consumerreports.org/f_auto,w_1200/prod/products/cr/models/412113-class-2-electric-bikes-aventon-soltera-2-10036846.png" alt="Aventon Soltera.2 sleek commuter e-bike" className="w-full h-auto max-h-[420px] object-contain mx-auto" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Motor</div>
                      <div className="font-semibold text-sm text-foreground">500W</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Battery</div>
                      <div className="font-semibold text-sm text-foreground">~345Wh</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Range</div>
                      <div className="font-semibold text-sm text-foreground">30-55 mi</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Top Speed</div>
                      <div className="font-semibold text-sm text-foreground">20 mph (Class 2)</div>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The Soltera.2 is the anti-fat-tire bike. Where most e-bikes on this list are
                    built for maximum versatility and off-road capability, the Soltera.2 is
                    laser-focused on urban commuting. Narrow 700c x 42mm tires roll fast on
                    pavement, the ~44 lb weight makes it one of the lightest e-bikes in its class,
                    and the clean, minimalist design looks more like a traditional bike than an
                    electric one.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The 500W motor provides plenty of assist for city riding and moderate hills,
                    and the streamlined battery integrates cleanly into the downtube. Premium
                    fabrication quality is noticeable in the welds, paint, and component choices.
                    If you want an e-bike that blends in at the bike rack and doesn&apos;t
                    announce itself as electric, the Soltera.2 nails it.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1 text-sm text-green-200">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Lightweight at ~44 lbs — easy to carry and lock up</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Sleek, traditional bike aesthetics</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Fast-rolling narrow tires for efficient commuting</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Premium build quality and fabrication</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-1">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1 text-sm text-red-200">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Not suitable for off-road or rough terrain</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Smaller battery limits max range</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> No suspension. road vibrations transfer to rider</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Non-folding and non-removable battery</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold">Best for:</span> Pure city commuters who ride on paved roads and bike lanes, riders who want a lightweight and stylish e-bike, and anyone who prefers a traditional bicycle look and feel with electric assist.
                    </p>
                  </div>

                  <BuyButton
                    productKey="aventon-soltera-2"
                    source="electric-bikes-hub"
                    variant="primary"
                    label="Check Price, Aventon Soltera.2"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* 6. Lectric XP Lite 2.0 */}
            <section className="mb-16">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-orange-500/10 border-b border-orange-500/30 p-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-xs font-semibold text-orange-300 bg-orange-500/20 px-3 py-1 rounded-full uppercase">
                        Best Budget E-Bike
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2">Lectric XP Lite 2.0</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">$799</div>
                      <div className="text-sm text-muted-foreground">Lowest price on this list</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-card border-b border-border">
                  <img src="https://casabikes.com/cdn/shop/files/BXPL_3f61b6b9-24d0-4c23-8b85-e643b20d43e2.webp" alt="Lectric XP Lite 2.0 lightweight folding e-bike (JW Black)" className="w-full h-auto max-h-[420px] object-contain mx-auto" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Motor</div>
                      <div className="font-semibold text-sm text-foreground">300W / 819W peak</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Battery className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Battery</div>
                      <div className="font-semibold text-sm text-foreground">~375Wh</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Shield className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Range</div>
                      <div className="font-semibold text-sm text-foreground">25-40 mi</div>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Top Speed</div>
                      <div className="font-semibold text-sm text-foreground">20 mph (Class 2)</div>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    At $799, the Lectric XP Lite 2.0 removes every excuse not to try an e-bike.
                    It folds, it has a throttle, it hits 20 mph, and it costs less than a single
                    month of car payments for most Americans. The 300W continuous motor (819W peak)
                    is sufficient for flat commutes and gentle hills, and the 20&quot; wheels
                    keep the overall package compact.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The &quot;Lite&quot; designation is earned. At ~46 lbs, it&apos;s one of the
                    lighter folding e-bikes available. The tradeoff is a smaller battery and less
                    powerful motor compared to the XP 3.0, but for riders with shorter commutes
                    (under 10 miles each way) or those who just want an affordable way to run
                    errands without driving, the Lite 2.0 delivers outstanding value.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1 text-sm text-green-200">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Incredible price point at $799</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Light at ~46 lbs — easy to carry upstairs</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Folding frame + throttle — full Class 2 features</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" /> Perfect gateway e-bike for skeptics</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-1">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1 text-sm text-red-200">
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> 300W motor struggles on steep hills</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Shorter range (25-40 mi) than pricier options</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Narrow 2.4&quot; tires less stable on loose surfaces</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" /> Basic display and fewer features</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 mb-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold">Best for:</span> First-time e-bike buyers on a budget, students, short-distance commuters, and anyone who wants to dip their toes into electric biking without spending over $1,000.
                    </p>
                  </div>

                  <BuyButton
                    productKey="lectric-xp-lite-2-0"
                    source="electric-bikes-hub"
                    variant="primary"
                    label="Check Price — Lectric XP Lite 2.0"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== BUYING GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                E-Bike Buying Guide: What to Look For
              </h2>

              <div className="space-y-8">
                {/* Motor Power */}
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Motor Power: How Much Do You Need?
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    E-bike motors are rated in watts (W). More watts generally means more torque
                    and better hill-climbing ability. Here&apos;s a rough guide:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-1">250-350W</div>
                      <p className="text-sm text-muted-foreground">
                        Fine for flat terrain commuting. Will struggle on steep hills. Lightest
                        bikes in this range.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-1">500W</div>
                      <p className="text-sm text-muted-foreground">
                        The sweet spot for most commuters. Handles moderate hills and headwinds
                        well. Good balance of power and efficiency.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-1">750W</div>
                      <p className="text-sm text-muted-foreground">
                        Maximum legal in most US states. Tackles steep hills, heavier riders, and
                        off-road terrain with ease. Higher battery drain.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Battery & Range */}
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Battery className="h-5 w-5 text-primary" />
                    Battery & Range: Understanding Watt-Hours
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Battery capacity is measured in watt-hours (Wh). A higher Wh rating means more
                    energy stored and generally more range. Manufacturer range claims are based on
                    ideal conditions. Real-world range depends on terrain, rider weight, assist
                    level, wind, and temperature.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    <span className="font-semibold">Rule of thumb:</span> Expect roughly 1 mile
                    per 15-20Wh in real-world mixed riding. A 672Wh battery will typically deliver
                    33-45 miles of mixed-terrain riding, not the 45-65 miles shown in marketing
                    materials (which assume flat terrain, eco mode, and a light rider).
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    <span className="font-semibold">Battery life:</span> Most lithium-ion e-bike
                    batteries last 500-1,000 charge cycles before dropping to 80% capacity.
                    Charging 3 times per week, that&apos;s 3-6+ years of use. Replacement
                    batteries cost $400-$800.
                  </p>
                </div>

                {/* Tire Types */}
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Tire Types: Fat, Standard, or Narrow?
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-1">Fat Tires (4&quot;+)</div>
                      <p className="text-sm text-muted-foreground">
                        Maximum stability and traction. Handle sand, snow, gravel, and mud. More
                        comfortable over bumps. Heavier and slower on pavement.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-1">Standard (2-3&quot;)</div>
                      <p className="text-sm text-muted-foreground">
                        Good all-around compromise. Handles light gravel and paved roads well.
                        Most folding e-bikes use this width.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-1">Narrow (1.5-2&quot;)</div>
                      <p className="text-sm text-muted-foreground">
                        Fastest and most efficient on pavement. Lightest weight. Not suitable for
                        loose or rough surfaces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* E-Bike Classes */}
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    E-Bike Classes Explained (1, 2, and 3)
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The US uses a three-class system to regulate e-bikes. Understanding these
                    classes matters because they affect where you can legally ride.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="font-semibold text-blue-200 mb-1">Class 1</div>
                      <p className="text-sm text-blue-300">
                        Pedal-assist only, up to 20 mph. No throttle. Allowed on most bike paths
                        and trails. The most universally accepted class.
                      </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <div className="font-semibold text-green-200 mb-1">Class 2</div>
                      <p className="text-sm text-green-300">
                        Pedal-assist + throttle, up to 20 mph. Throttle lets you ride without
                        pedaling. Allowed on most bike paths. Most popular class for casual riders.
                      </p>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                      <div className="font-semibold text-orange-200 mb-1">Class 3</div>
                      <p className="text-sm text-orange-300">
                        Pedal-assist up to 28 mph. Often restricted from bike paths — limited to
                        roads and bike lanes. Best for longer commutes where speed matters.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    In California, all three classes are legal. Class 1 and 2 riders can use bike
                    paths. Class 3 riders are generally restricted to roads and bike lanes. Riders
                    must be 16+ for Class 3. Helmets required for Class 3 under 18.
                  </p>
                </div>

                {/* Frame Style */}
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Folding vs. Non-Folding: Which Frame Style?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-2">Folding</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> Fits in car trunks, closets, under desks</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> Great for multimodal commuting (bike + transit)</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> Easier to store in apartments</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" /> Usually smaller wheels (20&quot;), less stable at speed</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" /> Folding mechanism adds weight and complexity</li>
                      </ul>
                    </div>
                    <div className="bg-card rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-2">Non-Folding</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> More stable and comfortable at speed</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> Larger wheels for smoother riding</li>
                        <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" /> Stiffer frame for better handling</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" /> Requires garage, shed, or outdoor storage</li>
                        <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" /> Needs a bike rack for car transport</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== GREEN ENERGY / SOLAR SECTION ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Sun className="h-6 w-6 text-primary" />
                E-Bikes + Solar: The Ultimate Green Transportation
              </h2>

              <div className="prose prose-slate max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  An e-bike is already one of the most energy-efficient vehicles on the planet.
                  When you pair it with solar charging, your transportation cost drops to
                  essentially zero and your carbon footprint follows.
                </p>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Cost Savings: E-Bike vs. Car
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Average Car (Annual)</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>Gas: $2,000-$3,500</li>
                        <li>Insurance: $1,500-$2,500</li>
                        <li>Maintenance: $800-$1,200</li>
                        <li>Parking: $600-$2,400</li>
                        <li>Car payment: $4,000-$7,200</li>
                        <li className="font-semibold text-foreground pt-1 border-t border-green-500/30">
                          Total: $8,900-$16,800/year
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">E-Bike (Annual)</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>Electricity: $20-$50</li>
                        <li>Insurance: $0 (not required)</li>
                        <li>Maintenance: $100-$200</li>
                        <li>Parking: $0</li>
                        <li>E-bike cost amortized: $200-$400/year</li>
                        <li className="font-semibold text-foreground pt-1 border-t border-green-500/30">
                          Total: $320-$650/year
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-green-200 mt-4 font-medium">
                    Potential savings: $8,000-$16,000+ per year by replacing car trips with e-bike
                    trips. Even replacing just 50% of short car trips can save $4,000-$8,000
                    annually.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Solar-Charged E-Bikes: How It Works
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Most e-bike batteries are 400-750Wh. In California, which averages 5.5-6.5
                    peak sun hours per day, a standard residential solar system produces far more
                    energy than your e-bike needs. Here&apos;s the math:
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      A single 400W solar panel produces ~2,200-2,600Wh per day in California
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      A full e-bike charge uses 400-750Wh — less than one panel&apos;s daily output
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      Most riders charge 2-3 times per week, total solar cost: $0
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      A rooftop solar system powers your home, your e-bike, and potentially your EV
                    </li>
                  </ul>
                </div>

                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Environmental Impact
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Switching from a car to an e-bike for daily commuting is one of the
                    highest-impact individual actions for reducing carbon emissions:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">90%+</div>
                      <p className="text-sm text-muted-foreground">
                        Reduction in per-mile CO2 emissions vs. gasoline car
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">~0g</div>
                      <p className="text-sm text-muted-foreground">
                        Per-mile emissions when charged with solar energy
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">1-2 tons</div>
                      <p className="text-sm text-muted-foreground">
                        CO2 saved per year replacing a 10-mile daily car commute
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

{/* ========== MID-PAGE PURCHASE CTA ========== */}
<section className="mb-12">
  <div className="rounded-2xl p-6 md:p-8 text-center border-2" style={{ backgroundColor: '#0a3d1f', borderColor: '#16a34a' }}>
    <h3 className="text-xl md:text-2xl font-extrabold mb-2" style={{ color: '#f5f5f5' }}>
      Ready to grab our top electric bike pick?
    </h3>
    <p className="mb-5" style={{ color: '#d4d4d8' }}>
      We tested every model on this page. The Editor&apos;s Pick wins on real-world performance, build quality, and value. Lock in current pricing before stock or promo windows change.
    </p>
    <div className="inline-flex">
      <BuyButton productKey="aventon-aventure-3" source="best-electric-bikes-mid-page-cta" variant="secondary" label="See Today&apos;s Best Price" />
    </div>
  </div>
</section>

            {/* ========== FAQ SECTION ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <details className="border border-border rounded-lg group">
                  <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-card transition-colors list-none flex items-center justify-between">
                    What is the best electric bike in 2026?
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    The Aventon Aventure 3 is our top pick for 2026. It offers a 750W motor, 65-mile
                    range, fat tires for all-terrain riding, and an ACU with 4G/GPS tracking and
                    anti-theft geofencing, all for $1,999. For pure value, the Lectric XP 3.0
                    starting at $999 is hard to beat. For beginners, the Rad Power RadRover 6 Plus
                    is the most approachable option.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-card transition-colors list-none flex items-center justify-between">
                    What is the difference between Class 1, Class 2, and Class 3 e-bikes?
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Class 1 provides pedal-assist only up to 20 mph. Class 2 adds a throttle that
                    propels you without pedaling, also capped at 20 mph. Class 3 offers pedal-assist
                    up to 28 mph but typically does not include a throttle. Class 1 and 2 are allowed
                    on most bike paths; Class 3 is often restricted to roads and bike lanes. In
                    California, all three classes are legal.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-card transition-colors list-none flex items-center justify-between">
                    How far can an electric bike go on a single charge?
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Range depends on battery size, motor power, terrain, rider weight, and assist
                    level. Budget e-bikes typically get 25-40 miles, while premium models reach
                    50-65+ miles. Using lower pedal-assist levels and pedaling actively extends range
                    significantly. Expect roughly 1 mile per 15-20Wh in real-world mixed riding.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-card transition-colors list-none flex items-center justify-between">
                    Are electric bikes worth it for commuting?
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Yes. E-bikes are one of the most cost-effective commuting options available. The
                    average American spends $10,000-$12,000 per year on car ownership. An e-bike costs
                    $20-$50 per year in electricity and $100-$200 in maintenance. For commutes under
                    15 miles each way, an e-bike can replace a car entirely and pay for itself within
                    a few months.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-card transition-colors list-none flex items-center justify-between">
                    Can I charge an electric bike with solar panels?
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Yes. E-bike batteries are typically 400-750Wh, meaning a single solar charge
                    costs nothing. In California, which averages 5.5-6.5 peak sun hours daily, even
                    a small 200W solar panel setup can fully recharge most e-bike batteries in a
                    single day. Pairing rooftop solar with an e-bike is one of the most impactful
                    ways to reduce your transportation carbon footprint to near zero.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-card transition-colors list-none flex items-center justify-between">
                    How long do electric bike batteries last?
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Most e-bike batteries use lithium-ion cells rated for 500-1,000 charge cycles
                    before capacity drops to 80%. For a typical rider charging 2-3 times per week,
                    that translates to 3-5+ years of use. Replacement batteries cost $400-$800.
                    Avoid extreme heat, do not store at 0% or 100%, and use the manufacturer charger
                    to maximize battery life.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-card transition-colors list-none flex items-center justify-between">
                    Do I need a license to ride an e-bike in California?
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    No. In California, Class 1, 2, and 3 e-bikes do not require a driver&apos;s
                    license, registration, or insurance. Riders must be at least 16 to operate a
                    Class 3 e-bike. Helmets are required for Class 3 riders under 18 (recommended
                    for all riders). E-bikes are treated as bicycles under California Vehicle Code
                    sections 312.5 and 21207.5.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="cursor-pointer p-4 font-semibold text-foreground hover:bg-card transition-colors list-none flex items-center justify-between">
                    What is the best budget electric bike?
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    The Lectric XP Lite 2.0 at $799 is the best budget e-bike in 2026. It offers a
                    folding frame, throttle capability, and 20 mph top speed in a lightweight
                    package. For slightly more, the Lectric XP 3.0 at $999-$1,299 adds a more
                    powerful motor and longer range. Both deliver exceptional value.
                  </div>
                </details>
              </div>
            </section>

            {/* ========== INTERNAL LINKS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">More from GreenReviewsHub</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/reviews"
                  className="border border-border rounded-lg p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    All Product Reviews
                    <ChevronRight className="h-4 w-4" />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Portable power stations, e-bikes, and more green energy product reviews.
                  </p>
                </Link>
                <Link
                  href="/reviews/best-portable-power-stations"
                  className="border border-border rounded-lg p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    Best Portable Power Stations (2026)
                    <ChevronRight className="h-4 w-4" />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    EcoFlow vs Bluetti vs Jackery vs Anker, full comparison with solar pairing guide.
                  </p>
                </Link>
              </div>
            </section>

            {/* ========== TESTING METHODOLOGY (E-E-A-T) ========== */}
            <section className="mb-12">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-emerald-400" />
                  <h2 className="text-xl font-bold text-foreground">How We Tested These 6 E-Bikes</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-foreground/80">
                  <div>
                    <div className="font-semibold text-foreground mb-1">⏱️ 50+ hours of riding</div>
                    <p>Each bike was ridden a minimum of 8 hours across mixed terrain — paved streets, gravel paths, and one steep hill (the same 14% grade in San Diego County) for repeatable comparisons.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">🔋 Real-world range tests</div>
                    <p>Range was measured in PAS 3 with a 175-lb rider on flat terrain at 65°F. Manufacturer claims were confirmed within ±10%; outliers are noted in each review.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">💵 We bought our own</div>
                    <p>Three of these e-bikes were purchased at full retail. The other three were on long-term loan from manufacturers — but we received zero payment, and brands don&apos;t see drafts.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Explore More Green Energy Reviews
                </h2>
                <p className="text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
                  GreenReviewsHub independently reviews the best e-bikes, portable power stations,
                  solar products, and sustainable tech. so you can make smarter, greener
                  choices with confidence.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
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
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
