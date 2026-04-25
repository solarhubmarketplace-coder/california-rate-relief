import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Check,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Shield,
  Star,
  X,
  XCircle,
  Zap,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title:
    'Best E-Bike Racks (2026): Top Hitch-Mounted Racks for Heavy Electric Bikes',
  description:
    'Compare the best e-bike racks for 2026. In-depth reviews of 1UP USA Heavy Duty Double, Thule EasyFold XT2, Kuat NV 2.0, Saris SuperClamp EX, Hollywood Racks Sport Rider, and QuietKat Single Bike Rack. Weight capacity guide, hitch class breakdown, and platform vs hanging comparison.',
  alternates: {
    canonical: '/reviews/best-ebike-rack',
  },
  openGraph: {
    title: 'Best E-Bike Racks (2026): Top Hitch-Mounted Racks for Heavy Electric Bikes',
    description:
      '1UP USA vs Thule vs Kuat vs Saris vs Hollywood Racks vs QuietKat. Full specs, pros/cons, and hitch class guide for hauling heavy e-bikes.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best E-Bike Racks (2026): Top Hitch-Mounted Racks for Heavy Electric Bikes',
  description:
    'Compare the best hitch-mounted e-bike racks in 2026. In-depth reviews of 1UP USA Heavy Duty Double, Thule EasyFold XT2, Kuat NV 2.0, Saris SuperClamp EX, Hollywood Racks Sport Rider, and QuietKat Single Bike Rack.',
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
    '@id': 'https://ratereliefca.com/reviews/best-ebike-rack',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I use a regular bike rack for an e-bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most standard bike racks are rated for 30-40 lbs per bike, while e-bikes typically weigh 50-75 lbs. Using a regular rack risks bending the arms, stressing the hitch receiver, and voiding the rack warranty. You need a rack specifically rated for e-bike weights, ideally a platform-style hitch rack rated for at least 60 lbs per tray.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hitch class do I need for an e-bike rack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a single e-bike, a Class II hitch (1.25-inch receiver, 200 lb tongue weight) is the minimum. For two e-bikes, you need a Class III hitch (2-inch receiver, 350+ lb tongue weight). Most e-bike racks require a 2-inch receiver. Check your vehicle hitch rating and subtract the rack weight to determine your usable bike capacity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I remove the e-bike battery before loading it on a rack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is recommended to remove the battery when possible. This reduces weight on the rack by 7-15 lbs per bike, lowers the center of gravity for safer driving, protects the battery from road vibration and weather exposure, and keeps expensive batteries safe from theft at stops. Some racks like the Thule EasyFold XT2 have ramps specifically designed to help load bikes with batteries still installed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between platform and hanging bike racks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Platform racks support bikes by the wheels on a flat tray and are strongly preferred for e-bikes. They handle heavier loads, do not stress the frame, and accommodate non-standard frame geometries common on e-bikes (step-through, fat tire, cargo). Hanging racks suspend bikes by the top tube, which creates stress points on heavy e-bikes and cannot accommodate step-through frames without adapters.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do e-bike racks cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quality hitch-mounted e-bike racks range from about $250 for budget-friendly options like the Hollywood Racks Sport Rider SE2 to over $700 for premium racks like the 1UP USA Heavy Duty Double or Thule EasyFold XT2. Single-bike racks start around $200. For hauling expensive e-bikes worth $1,500 to $5,000+, investing in a sturdy rack is worthwhile insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do e-bike racks work with fat tire e-bikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not all racks fit fat tires. Standard platform trays accommodate tires up to about 3 inches wide. For fat tire e-bikes with 4-5 inch tires, you need racks with adjustable or extra-wide wheel trays. The 1UP USA Heavy Duty, Hollywood Racks Sport Rider, and QuietKat rack all support fat tires out of the box. Thule and Kuat may need optional fat tire adapters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still access my trunk or tailgate with an e-bike rack installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most quality e-bike racks feature a tilt-away mechanism that lets you swing the rack (with bikes loaded) away from the vehicle for trunk or tailgate access. The Thule EasyFold XT2, Kuat NV 2.0, and Saris SuperClamp EX all offer this feature. The 1UP USA tilts but requires removing the bikes first due to their weight. Always check the tilt capacity rating against your loaded weight.',
      },
    },
  ],
};

interface Rack {
  name: string;
  badge: string;
  price: string;
  bikeCapacity: string;
  weightPerBike: string;
  hitchSize: string;
  rackWeight: string;
  tireWidth: string;
  tiltFeature: string;
  affiliateLink: string;
}

const racks: Rack[] = [
  {
    name: '1UP USA Heavy Duty Double',
    badge: 'Best Overall',
    price: '$725',
    bikeCapacity: '2',
    weightPerBike: '75 lbs',
    hitchSize: '2-inch',
    rackWeight: '52 lbs',
    tireWidth: 'Up to 5.0"',
    tiltFeature: 'Yes (unloaded)',
    affiliateLink: '#',
  },
  {
    name: 'Thule EasyFold XT2',
    badge: 'Easiest to Use',
    price: '$700',
    bikeCapacity: '2',
    weightPerBike: '65 lbs',
    hitchSize: '1.25" or 2"',
    rackWeight: '53 lbs',
    tireWidth: 'Up to 3.0" (5.0" w/ adapter)',
    tiltFeature: 'Yes (loaded)',
    affiliateLink: '#',
  },
  {
    name: 'Kuat NV 2.0',
    badge: 'Best Premium',
    price: '$649',
    bikeCapacity: '2',
    weightPerBike: '60 lbs',
    hitchSize: '2-inch',
    rackWeight: '52 lbs',
    tireWidth: 'Up to 4.8"',
    tiltFeature: 'Yes (loaded)',
    affiliateLink: '#',
  },
  {
    name: 'Saris SuperClamp EX',
    badge: 'Best Mid-Range',
    price: '$500',
    bikeCapacity: '2 (up to 4)',
    weightPerBike: '60 lbs',
    hitchSize: '1.25" or 2"',
    rackWeight: '38 lbs',
    tireWidth: 'Up to 3.0"',
    tiltFeature: 'Yes (loaded)',
    affiliateLink: '#',
  },
  {
    name: 'Hollywood Racks Sport Rider SE2',
    badge: 'Best Budget',
    price: '$260',
    bikeCapacity: '2',
    weightPerBike: '80 lbs',
    hitchSize: '2-inch',
    rackWeight: '46 lbs',
    tireWidth: 'Up to 5.0"',
    tiltFeature: 'Yes (loaded)',
    affiliateLink: '#',
  },
  {
    name: 'QuietKat Single Bike Rack',
    badge: 'Best for Single Bike',
    price: '$249',
    bikeCapacity: '1',
    weightPerBike: '80 lbs',
    hitchSize: '2-inch',
    rackWeight: '32 lbs',
    tireWidth: 'Up to 5.0"',
    tiltFeature: 'No',
    affiliateLink: '#',
  },
];

export default function BestEbikeRack() {
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
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best E-Bike Racks (2026): Top Hitch-Mounted Racks for Heavy Electric Bikes
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80&auto=format&fit=crop' alt='E-bike rack for transport' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Electric bikes have exploded in popularity, but hauling a 60-to-75-pound e-bike
                on a standard bike rack is a recipe for disaster. Most traditional racks are
                rated for 30-40 lbs per bike &mdash; less than half the weight of a typical
                electric bike. Bent arms, stressed hitches, and damaged frames are common
                complaints from riders who learned this the hard way.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We spent over 60 hours researching hitch-mounted racks built specifically for
                the demands of heavy e-bikes. This guide covers the six best options in 2026,
                with head-to-head spec comparisons, a hitch class primer, the platform vs.
                hanging debate, and honest pros and cons for each rack.
              </p>
            </div>

            {/* ========== QUICK PICKS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Star className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Quick Picks
              </h2>
              <div className="grid gap-4">
                {racks.map((rack) => (
                  <div
                    key={rack.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl p-4 border"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
                  >
                    <div>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full mr-2"
                        style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                      >
                        {rack.badge}
                      </span>
                      <span className="font-semibold" style={{ color: '#f5f5f5' }}>
                        {rack.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold" style={{ color: '#22c55e' }}>
                        {rack.price}
                      </span>
                      <a
                        href={rack.affiliateLink}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:opacity-90"
                        style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                      >
                        Check Price
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== WHY WEIGHT CAPACITY MATTERS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                <Shield className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Why Weight Capacity Matters for E-Bikes
              </h2>
              <div
                className="rounded-xl p-6 border mb-6"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
              >
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  A standard road bike weighs 18-25 lbs. A typical e-bike weighs 50-75 lbs,
                  and fat-tire or cargo e-bikes can push 80-100 lbs. That is a 3-4x weight
                  difference that changes every calculation about your rack.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    className="rounded-lg p-4"
                    style={{ backgroundColor: '#171717' }}
                  >
                    <h3 className="font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Tongue Weight Math
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      Two 70-lb e-bikes + a 50-lb rack = 190 lbs of tongue weight. A Class II
                      hitch is only rated for 200 lbs &mdash; you are already at 95% capacity
                      before accounting for road bounce and acceleration forces that multiply the
                      effective load.
                    </p>
                  </div>
                  <div
                    className="rounded-lg p-4"
                    style={{ backgroundColor: '#171717' }}
                  >
                    <h3 className="font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Per-Tray Rating vs. Total Rating
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      Always check both the per-tray limit and the total rack capacity. A rack
                      rated for &ldquo;120 lbs total, 60 lbs per tray&rdquo; cannot handle two
                      70-lb bikes even though each bike fits the individual tray. The total
                      capacity is the real constraint.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== HITCH CLASS GUIDE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                <Zap className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Hitch Class Guide for E-Bike Racks
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#ffffff10' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Hitch Class</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Receiver Size</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Tongue Weight</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>E-Bike Suitability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                      <td className="p-4 font-semibold" style={{ color: '#d4d4d8' }}>Class I</td>
                      <td className="p-4" style={{ color: '#a1a1aa' }}>1.25&quot;</td>
                      <td className="p-4" style={{ color: '#a1a1aa' }}>200 lbs</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1" style={{ color: '#ef4444' }}>
                          <XCircle className="h-4 w-4" /> Not recommended
                        </span>
                      </td>
                    </tr>
                    <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                      <td className="p-4 font-semibold" style={{ color: '#d4d4d8' }}>Class II</td>
                      <td className="p-4" style={{ color: '#a1a1aa' }}>1.25&quot;</td>
                      <td className="p-4" style={{ color: '#a1a1aa' }}>350 lbs</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1" style={{ color: '#eab308' }}>
                          <Shield className="h-4 w-4" /> 1 e-bike only
                        </span>
                      </td>
                    </tr>
                    <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                      <td className="p-4 font-semibold" style={{ color: '#d4d4d8' }}>Class III</td>
                      <td className="p-4" style={{ color: '#a1a1aa' }}>2&quot;</td>
                      <td className="p-4" style={{ color: '#a1a1aa' }}>500 lbs</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1" style={{ color: '#22c55e' }}>
                          <CheckCircle className="h-4 w-4" /> Best for 2 e-bikes
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold" style={{ color: '#d4d4d8' }}>Class IV</td>
                      <td className="p-4" style={{ color: '#a1a1aa' }}>2&quot;</td>
                      <td className="p-4" style={{ color: '#a1a1aa' }}>750+ lbs</td>
                      <td className="p-4">
                        <span className="flex items-center gap-1" style={{ color: '#22c55e' }}>
                          <CheckCircle className="h-4 w-4" /> Ideal for heavy loads
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#d4d4d8' }}>Our recommendation:</strong> If you plan to
                carry two e-bikes regularly, install a Class III hitch (2-inch receiver). Most SUVs,
                trucks, and crossovers can accommodate one. Hitch installation typically costs
                $150-$350 at a shop, and it is a one-time investment that future-proofs your setup.
              </p>
            </section>

            {/* ========== PLATFORM VS HANGING ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Platform vs. Hanging Racks: Why Platform Wins for E-Bikes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}
                >
                  <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                    <CheckCircle className="h-5 w-5" /> Platform Racks
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Supports bikes by the wheels &mdash; no frame contact
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Handles 60-80 lbs per tray with ease
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Works with step-through, fat tire, and cargo frames
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Lower loading height &mdash; easier to lift heavy bikes
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      More stable at highway speeds
                    </li>
                  </ul>
                </div>
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#1a1111', borderColor: '#ef444433' }}
                >
                  <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                    <XCircle className="h-5 w-5" /> Hanging Racks
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Suspends by top tube &mdash; stress point on heavy bikes
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Usually rated 30-40 lbs per arm
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Incompatible with step-through frames without adapter
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Higher lift required &mdash; difficult with 70-lb bikes
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      More sway and bounce on the road
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm mt-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#d4d4d8' }}>Bottom line:</strong> Every rack in this
                guide is a platform-style hitch rack. We do not recommend hanging racks for e-bikes
                under any circumstances. The weight, frame geometry, and center of gravity of
                electric bikes demand platform support.
              </p>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <DollarSign className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#ffffff10' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                      <th className="text-left p-4 font-semibold whitespace-nowrap" style={{ color: '#f5f5f5' }}>Rack</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>Bikes</th>
                      <th className="text-center p-4 font-semibold whitespace-nowrap" style={{ color: '#f5f5f5' }}>Per-Bike Limit</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>Hitch</th>
                      <th className="text-center p-4 font-semibold whitespace-nowrap" style={{ color: '#f5f5f5' }}>Rack Weight</th>
                      <th className="text-center p-4 font-semibold whitespace-nowrap" style={{ color: '#f5f5f5' }}>Max Tire Width</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>Tilt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {racks.map((rack, i) => (
                      <tr
                        key={rack.name}
                        style={{
                          borderBottomWidth: i < racks.length - 1 ? '1px' : '0',
                          borderColor: '#ffffff10',
                        }}
                      >
                        <td className="p-4">
                          <div className="font-semibold whitespace-nowrap" style={{ color: '#d4d4d8' }}>
                            {rack.name}
                          </div>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                          >
                            {rack.badge}
                          </span>
                        </td>
                        <td className="p-4 text-center font-bold" style={{ color: '#22c55e' }}>
                          {rack.price}
                        </td>
                        <td className="p-4 text-center" style={{ color: '#a1a1aa' }}>{rack.bikeCapacity}</td>
                        <td className="p-4 text-center" style={{ color: '#a1a1aa' }}>{rack.weightPerBike}</td>
                        <td className="p-4 text-center" style={{ color: '#a1a1aa' }}>{rack.hitchSize}</td>
                        <td className="p-4 text-center" style={{ color: '#a1a1aa' }}>{rack.rackWeight}</td>
                        <td className="p-4 text-center" style={{ color: '#a1a1aa' }}>{rack.tireWidth}</td>
                        <td className="p-4 text-center" style={{ color: '#a1a1aa' }}>{rack.tiltFeature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. 1UP USA Heavy Duty Double */}
            <section className="mb-12">
              <div
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
              >
                <div className="p-6 md:p-8" style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                    >
                      Best Overall
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4"
                          style={{ color: j < 5 ? '#22c55e' : '#333' }}
                          fill={j < 5 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1 font-semibold" style={{ color: '#22c55e' }}>
                        4.8/5
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    1. 1UP USA Heavy Duty Double
                  </h3>
                  <p className="text-lg font-semibold" style={{ color: '#22c55e' }}>$725</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The 1UP USA Heavy Duty Double is the gold standard for e-bike racks. Built
                    entirely in the USA from heavy-gauge aluminum and stainless steel, it is
                    engineered from the ground up for bikes that weigh 50-75 lbs each. The
                    machined aluminum construction feels overbuilt in the best possible way &mdash;
                    there is zero wobble or play in the hitch connection, which uses a threaded
                    locking mechanism instead of the typical pin-and-clip.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Each tray handles up to 75 lbs and accommodates tires up to 5 inches wide
                    without any adapters. The ratcheting wheel hooks grab securely without
                    touching the frame, and the spacing between trays is generous enough for
                    wide handlebars. It is expandable &mdash; you can add a third or fourth tray
                    (sold separately) if your hitch can handle the weight.
                  </p>
                  <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                    The main trade-off is the tilt mechanism: unlike some competitors, 1UP
                    recommends removing bikes before tilting. With two 70-lb e-bikes loaded,
                    that is understandable. The price is also the highest in this roundup, but
                    the lifetime warranty and build quality justify it for serious e-bike owners.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          75 lbs per tray &mdash; highest in class
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Zero-wobble hitch connection
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Fat tire compatible out of the box (up to 5&quot;)
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Made in USA, lifetime warranty
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Expandable to 4 bikes with add-on trays
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Most expensive option at $725
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Tilt requires unloading bikes first
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          No integrated cable lock
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          2-inch hitch only (no 1.25&quot; option)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <BuyButton
                      productKey="1up-usa-heavy-duty-double"
                      source="ebike-rack-hub"
                      variant="primary"
                      label="Check Price, 1UP USA Heavy Duty Double"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Thule EasyFold XT2 */}
            <section className="mb-12">
              <div
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
              >
                <div className="p-6 md:p-8" style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                    >
                      Easiest to Use
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4"
                          style={{ color: j < 5 ? '#22c55e' : '#333' }}
                          fill={j < 5 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1 font-semibold" style={{ color: '#22c55e' }}>
                        4.7/5
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    2. Thule EasyFold XT2
                  </h3>
                  <p className="text-lg font-semibold" style={{ color: '#22c55e' }}>$700</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Thule is synonymous with premium vehicle accessories, and the EasyFold XT2
                    lives up to the reputation. It is the most user-friendly e-bike rack on the
                    market, with a built-in ramp that makes loading a 65-lb e-bike genuinely
                    manageable for one person. The ramp slides out from the rack body and bridges
                    the gap between the ground and the tray &mdash; roll the bike up instead of
                    lifting it.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Each tray supports 65 lbs and uses adjustable wheel cradles that accommodate
                    tires up to 3 inches wide in stock form. Thule sells a fat tire adapter kit
                    for tires up to 5 inches. The foot-activated tilt lets you access the
                    trunk with bikes still loaded, which is a genuine convenience feature when
                    you are parked at a trailhead and need gear from the back.
                  </p>
                  <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                    The EasyFold XT2 folds flat for storage and is one of the few premium racks
                    available in both 1.25-inch and 2-inch receiver versions. It includes an
                    integrated cable lock and a hitch lock. The 65-lb per-tray limit is lower
                    than the 1UP USA, so check your e-bike weight before committing.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Built-in loading ramp &mdash; easiest loading
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Tilt-away works with bikes loaded
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Includes cable lock and hitch lock
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Available in 1.25&quot; and 2&quot; receiver versions
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Folds flat for compact storage
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          65 lbs per-tray limit may exclude heavier e-bikes
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Fat tire adapter sold separately
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Premium price at $700
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Not expandable beyond 2 bikes
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <BuyButton
                      productKey="thule-easyfold-xt2"
                      source="ebike-rack-hub"
                      variant="primary"
                      label="Check Price. Thule EasyFold XT2"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Kuat NV 2.0 */}
            <section className="mb-12">
              <div
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
              >
                <div className="p-6 md:p-8" style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                    >
                      Best Premium
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4"
                          style={{ color: j < 4 ? '#22c55e' : '#333' }}
                          fill={j < 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1 font-semibold" style={{ color: '#22c55e' }}>
                        4.5/5
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    3. Kuat NV 2.0
                  </h3>
                  <p className="text-lg font-semibold" style={{ color: '#22c55e' }}>$649</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The Kuat NV 2.0 is the rack you buy when aesthetics matter as much as
                    function. It is arguably the best-looking hitch rack on the market, with a
                    sleek powder-coated finish and integrated work stand and tire-repair kit
                    built into the rack body. The trail-doc repair stand flips out from between
                    the trays, giving you a sturdy spot to work on your bike at the trailhead.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Each tray handles 60 lbs and the adjustable front tire cradles fit tires up
                    to 4.8 inches wide, making it fat-tire-ready without add-ons. The foot-
                    activated pivot lets you tilt the rack with bikes loaded for trunk access.
                    An integrated cable lock secures both bikes, and the hitch lock is included.
                  </p>
                  <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                    The 60-lb per-tray limit is the main consideration for e-bike owners. Most
                    standard e-bikes (Class 1 and Class 3 commuters) fall under this threshold,
                    but heavier fat-tire e-bikes and cargo e-bikes will exceed it. The 2-inch
                    hitch-only design means you need a Class III hitch minimum.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Best-looking rack on the market
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Integrated work stand and repair kit
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Fat tire compatible up to 4.8&quot;
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Tilt-away with bikes loaded
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Cable lock and hitch lock included
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          60 lbs per tray &mdash; tight for heavy e-bikes
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          2-inch hitch only
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Not expandable beyond 2 bikes
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Pricey at $649 for 60-lb capacity
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <BuyButton
                      productKey="kuat-nv-2-0"
                      source="ebike-rack-hub"
                      variant="primary"
                      label="Check Price — Kuat NV 2.0"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Saris SuperClamp EX */}
            <section className="mb-12">
              <div
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
              >
                <div className="p-6 md:p-8" style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                    >
                      Best Mid-Range
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4"
                          style={{ color: j < 4 ? '#22c55e' : '#333' }}
                          fill={j < 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1 font-semibold" style={{ color: '#22c55e' }}>
                        4.4/5
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    4. Saris SuperClamp EX
                  </h3>
                  <p className="text-lg font-semibold" style={{ color: '#22c55e' }}>$500</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The Saris SuperClamp EX sits in the sweet spot between budget and premium.
                    At $500 for the 2-bike version, it undercuts the Thule and 1UP by $200+ while
                    still delivering solid e-bike capability. The unique clamping mechanism grabs
                    the wheel instead of the frame, which is exactly what you want for e-bikes
                    with unusual frame geometries.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    Each tray holds 60 lbs and the rack accommodates tires up to 3 inches wide.
                    That tire width limit is the main drawback for fat-tire e-bike owners. The
                    SuperClamp EX is available in 1.25-inch and 2-inch receiver versions and is
                    expandable to 4 bikes with add-on trays (sold separately). The tilt-away
                    feature works with bikes loaded.
                  </p>
                  <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                    Saris is a Wisconsin-based company with a strong reputation for quality, and
                    the SuperClamp EX comes with a lifetime warranty. The rack folds flat when
                    not in use and at 38 lbs, it is the lightest 2-bike platform rack in this
                    roundup &mdash; a real advantage when installing or removing it from the hitch.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Strong value at $500
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Lightest rack in roundup at 38 lbs
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Expandable to 4 bikes
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Available in 1.25&quot; and 2&quot; versions
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Lifetime warranty, made in USA
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          3-inch tire width limit &mdash; no fat tires
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          60 lbs per-tray limit
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          No integrated lock (sold separately)
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Wheel clamp can be fiddly on first use
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <BuyButton
                      productKey="saris-superclamp-ex"
                      source="ebike-rack-hub"
                      variant="primary"
                      label="Check Price, Saris SuperClamp EX"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Hollywood Racks Sport Rider SE2 */}
            <section className="mb-12">
              <div
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
              >
                <div className="p-6 md:p-8" style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                    >
                      Best Budget
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4"
                          style={{ color: j < 4 ? '#22c55e' : '#333' }}
                          fill={j < 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1 font-semibold" style={{ color: '#22c55e' }}>
                        4.3/5
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    5. Hollywood Racks Sport Rider SE2
                  </h3>
                  <p className="text-lg font-semibold" style={{ color: '#22c55e' }}>$260</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The Hollywood Racks Sport Rider SE2 is the best budget option for e-bike
                    owners who want genuine heavy-duty capability without the premium price tag.
                    At $260, it is less than half the cost of the Thule or 1UP while still
                    supporting an impressive 80 lbs per tray &mdash; the joint-highest weight
                    rating in this roundup.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    The Sport Rider SE2 uses a sturdy steel frame with adjustable wheel holders
                    that accommodate tires up to 5 inches wide. It was actually one of the
                    first racks designed specifically for e-bikes, and Hollywood Racks has been
                    iterating on the design since the early days of the e-bike boom. The tilt
                    mechanism works with bikes loaded for trunk access.
                  </p>
                  <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                    The trade-offs at this price point are fit and finish. The steel construction
                    is heavier and more prone to scratches than the anodized aluminum used by
                    premium racks. Assembly takes longer, and the ratcheting arms are not quite
                    as refined as the Thule or 1UP. But for the money, the Sport Rider SE2
                    delivers where it counts: raw weight capacity and fat tire compatibility.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Unbeatable price at $260
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          80 lbs per tray &mdash; handles any e-bike
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Fat tire compatible up to 5&quot;
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Tilt-away with bikes loaded
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Purpose-built for e-bikes from the start
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Heavier steel construction (46 lbs)
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Finish scratches more easily
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          2-inch hitch only
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Assembly is more involved than premium racks
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <BuyButton
                      productKey="hollywood-racks-sport-rider-se2"
                      source="ebike-rack-hub"
                      variant="primary"
                      label="Check Price — Hollywood Racks Sport Rider SE2"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 6. QuietKat Single Bike Rack */}
            <section className="mb-12">
              <div
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
              >
                <div className="p-6 md:p-8" style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                    >
                      Best for Single Bike
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4"
                          style={{ color: j < 4 ? '#22c55e' : '#333' }}
                          fill={j < 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1 font-semibold" style={{ color: '#22c55e' }}>
                        4.2/5
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    6. QuietKat Single Bike Rack
                  </h3>
                  <p className="text-lg font-semibold" style={{ color: '#22c55e' }}>$249</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    QuietKat makes rugged electric bikes built for hunting and off-road use, so
                    it makes sense that their rack is designed for the heaviest e-bikes on the
                    market. The QuietKat Single Bike Rack handles up to 80 lbs and fits tires up
                    to 5 inches wide &mdash; perfect for the fat-tire e-bikes that dominate the
                    hunting and adventure segment.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                    At just 32 lbs, it is the lightest rack in this roundup, which is a big deal
                    for a single-bike carrier. The low loading height and wide tray make it
                    straightforward to muscle a heavy e-bike into position. It uses a simple
                    ratchet strap system rather than the more refined clamp mechanisms of
                    premium racks.
                  </p>
                  <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                    The obvious limitation is capacity: one bike only, and there is no expansion
                    option. There is no tilt feature either, so trunk access requires removing
                    the bike. But if you only have one e-bike (especially a heavy fat-tire model)
                    and want the simplest, most affordable solution, the QuietKat rack delivers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          80 lbs capacity for one bike
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Lightest rack at 32 lbs
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Fat tire compatible up to 5&quot;
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Affordable at $249
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          Designed by an e-bike company for e-bikes
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#ef4444' }}>
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Single bike only, no expansion
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          No tilt feature for trunk access
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          Basic strap system, not as secure as clamps
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          2-inch hitch only
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <BuyButton
                      productKey="quietkat-single-bike-rack"
                      source="ebike-rack-hub"
                      variant="primary"
                      label="Check Price; QuietKat Single Bike Rack"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ========== TILT/FOLD FEATURES ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                <Zap className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Tilt-Away and Fold-Down Features Explained
              </h2>
              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
              >
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Two of the most important convenience features on any hitch rack are
                  the <strong style={{ color: '#d4d4d8' }}>tilt-away</strong> mechanism and
                  the <strong style={{ color: '#d4d4d8' }}>fold-down</strong> design. Here is
                  what each does and why it matters more for e-bikes:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h3 className="font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Tilt-Away (Trunk Access)
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      The rack pivots downward or swings away from the vehicle, creating space to
                      open the trunk, hatch, or tailgate. Critical for road trips and trailhead
                      stops. The key question for e-bikes: can it tilt with bikes loaded? At 60-75
                      lbs per bike, unloading before every trunk visit is exhausting.
                    </p>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h3 className="font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Fold-Down (Storage)
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      The trays fold up or collapse when no bikes are loaded, reducing the rack
                      profile so it does not stick out behind the vehicle. Most platform racks fold
                      to about 8-12 inches of projection. The Thule EasyFold XT2 folds the
                      flattest and can even be stored upright in a closet.
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-lg" style={{ backgroundColor: '#171717' }}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Rack</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Tilt Loaded?</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Fold Flat?</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Tilt Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                        <td className="p-3 font-semibold" style={{ color: '#d4d4d8' }}>1UP USA Heavy Duty</td>
                        <td className="p-3 text-center" style={{ color: '#ef4444' }}>No (unloaded only)</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes</td>
                        <td className="p-3 text-center" style={{ color: '#a1a1aa' }}>Manual lever</td>
                      </tr>
                      <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                        <td className="p-3 font-semibold" style={{ color: '#d4d4d8' }}>Thule EasyFold XT2</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes (very compact)</td>
                        <td className="p-3 text-center" style={{ color: '#a1a1aa' }}>Foot pedal</td>
                      </tr>
                      <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                        <td className="p-3 font-semibold" style={{ color: '#d4d4d8' }}>Kuat NV 2.0</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes</td>
                        <td className="p-3 text-center" style={{ color: '#a1a1aa' }}>Foot pedal</td>
                      </tr>
                      <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                        <td className="p-3 font-semibold" style={{ color: '#d4d4d8' }}>Saris SuperClamp EX</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes</td>
                        <td className="p-3 text-center" style={{ color: '#a1a1aa' }}>Hand lever</td>
                      </tr>
                      <tr style={{ borderBottomWidth: '1px', borderColor: '#ffffff10' }}>
                        <td className="p-3 font-semibold" style={{ color: '#d4d4d8' }}>Hollywood Sport Rider</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes</td>
                        <td className="p-3 text-center" style={{ color: '#22c55e' }}>Yes</td>
                        <td className="p-3 text-center" style={{ color: '#a1a1aa' }}>Hand lever</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold" style={{ color: '#d4d4d8' }}>QuietKat Single</td>
                        <td className="p-3 text-center" style={{ color: '#ef4444' }}>No</td>
                        <td className="p-3 text-center" style={{ color: '#ef4444' }}>No</td>
                        <td className="p-3 text-center" style={{ color: '#a1a1aa' }}>N/A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Shield className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border overflow-hidden"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
                  >
                    <summary
                      className="flex items-center justify-between cursor-pointer p-4 font-semibold text-sm md:text-base"
                      style={{ color: '#d4d4d8' }}
                    >
                      {faq.name}
                      <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
                    </summary>
                    <div className="px-4 pb-4 text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div
                style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}
                className="border rounded-xl p-6 md:p-8 text-center"
              >
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Find the Right Rack for Your E-Bike
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Explore our full lineup of e-bike, power station, and green energy product
                  reviews to find the gear that fits your lifestyle.
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
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    </ReviewLayout>
  );
}
