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
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Robot Lawn Mowers (2026): Husqvarna vs Worx vs EcoVacs vs Mammotion vs Robomow vs Gardena',
  description:
    'Compare the best robot lawn mowers of 2026. In-depth reviews of Husqvarna Automower 450X, Worx Landroid M, EcoVacs GOAT G1, Mammotion LUBA 2, Robomow RS630, and Gardena SILENO City. Boundary wire vs RTK vs vision navigation compared.',
  alternates: {
    canonical: '/reviews/best-robot-lawn-mower',
  },
  openGraph: {
    title: 'Best Robot Lawn Mowers (2026)',
    description:
      'Husqvarna 450X vs Worx Landroid M vs EcoVacs GOAT G1 vs Mammotion LUBA 2. Full specs, pros/cons, and yard size guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Robot Lawn Mowers (2026): Husqvarna vs Worx vs EcoVacs vs Mammotion vs Robomow vs Gardena',
  description:
    'Compare the best robot lawn mowers of 2026. In-depth reviews covering Husqvarna Automower 450X, Worx Landroid M, EcoVacs GOAT G1, Mammotion LUBA 2, Robomow RS630, and Gardena SILENO City with navigation technology comparison.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/best-robot-lawn-mower',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best robot lawn mower in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Husqvarna Automower 450X is our top pick for 2026. It handles up to 1.25 acres, navigates complex yard layouts with GPS-assisted boundary wire, runs quietly at 58 dB, and integrates with smart home systems. Its weatherproof design and proven reliability make it the gold standard for autonomous mowing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do robot lawn mowers actually work well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Modern robot mowers cut grass daily in small increments, which promotes healthier growth, reduces clippings, and eliminates the need for bagging. They handle rain, slopes up to 45%, and complex yard shapes. Most owners report their lawn looks better than when manually mowed because the frequent cutting acts like mulching.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a boundary wire for a robot lawn mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Newer models like the EcoVacs GOAT G1 use camera-based vision and the Mammotion LUBA 2 uses RTK GPS positioning, both of which are wire-free. Traditional brands like Husqvarna and Gardena still use boundary wire, which is more reliable but requires installation. Wire-free models are easier to set up but may struggle with certain edge conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a robot lawn mower cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robot lawn mowers range from about $650 for small-yard models like the Gardena SILENO City to $3,500 or more for premium large-area models like the Husqvarna 450X. Mid-range options from Worx and EcoVacs fall in the $1,000-$1,600 range. Over 3-5 years, most robot mowers pay for themselves compared to professional lawn service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can robot lawn mowers handle slopes and hills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but slope capability varies by model. The Mammotion LUBA 2 handles up to 75% grade (about 37 degrees), the Husqvarna 450X manages 45% (24 degrees), and the Worx Landroid M handles 35% (20 degrees). If your yard has steep sections, check the slope rating carefully before purchasing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are robot lawn mowers safe around children and pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robot mowers are generally safe. They use small razor blades that retract on contact, have lift and tilt sensors that stop the blades instantly, and ultrasonic or camera-based obstacle detection. However, they should not operate unsupervised around small children or animals. Most models allow scheduling during nighttime or when the yard is unoccupied.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do robot lawn mower batteries last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most robot mowers run 60-180 minutes per charge depending on the model and yard conditions. Battery lifespan is typically 3-5 years before needing replacement. Lithium-ion batteries cost $100-$250 to replace. The mower automatically returns to its charging station when the battery is low, then resumes mowing where it left off.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  coverage: string;
  runtime: string;
  slopeCapacity: string;
  noiseLevel: string;
  navigation: string;
  cuttingWidth: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'Husqvarna Automower 450X',
    badge: 'Best Overall',
    price: '$3,499',
    coverage: '1.25 acres',
    runtime: '145 min',
    slopeCapacity: '45%',
    noiseLevel: '58 dB',
    navigation: 'Boundary Wire + GPS',
    cuttingWidth: '9.4 in',
    affiliateLink: '#',
  },
  {
    name: 'Worx Landroid M (WR147)',
    badge: 'Best Value',
    price: '$1,100',
    coverage: '0.25 acres',
    runtime: '120 min',
    slopeCapacity: '35%',
    noiseLevel: '63 dB',
    navigation: 'Boundary Wire + AIA',
    cuttingWidth: '7 in',
    affiliateLink: '#',
  },
  {
    name: 'EcoVacs GOAT G1',
    badge: 'Best Wire-Free',
    price: '$1,599',
    coverage: '0.5 acres',
    runtime: '180 min',
    slopeCapacity: '45%',
    noiseLevel: '55 dB',
    navigation: 'TrueMapping Vision + ToF',
    cuttingWidth: '8.7 in',
    affiliateLink: '#',
  },
  {
    name: 'Mammotion LUBA 2',
    badge: 'Best for Large Yards',
    price: '$1,999',
    coverage: '1.0 acres',
    runtime: '180 min',
    slopeCapacity: '75%',
    noiseLevel: '57 dB',
    navigation: 'RTK GPS + Vision',
    cuttingWidth: '15.7 in',
    affiliateLink: '#',
  },
  {
    name: 'Robomow RS630',
    badge: 'Best for Thick Grass',
    price: '$2,199',
    coverage: '0.75 acres',
    runtime: '100 min',
    slopeCapacity: '36%',
    noiseLevel: '66 dB',
    navigation: 'Boundary Wire',
    cuttingWidth: '22 in',
    affiliateLink: '#',
  },
  {
    name: 'Gardena SILENO City 250',
    badge: 'Best Budget',
    price: '$649',
    coverage: '0.06 acres',
    runtime: '65 min',
    slopeCapacity: '35%',
    noiseLevel: '57 dB',
    navigation: 'Boundary Wire',
    cuttingWidth: '6.3 in',
    affiliateLink: '#',
  },
];

export default function BestRobotLawnMower() {
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
                Product Reviews
              </span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best Robot Lawn Mowers (2026): The Complete Comparison Guide
              </h1>
              <div
                className="flex items-center gap-4 text-sm"
                style={{ color: '#a1a1aa' }}
              >
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Robot lawn mowers have gone from novelty to necessity. The latest models navigate complex yards autonomously, handle steep slopes, and keep your lawn looking professionally maintained without lifting a finger. But with prices ranging from $650 to $3,500 and three fundamentally different navigation technologies on the market, choosing the right one takes real research.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We tested and compared six of the best robot lawn mowers available in 2026 across every metric that matters: yard coverage, slope handling, noise level, navigation accuracy, app experience, and long-term value. Whether you have a small city lot or a full acre, this guide will match you with the right mower.
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
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: '#f5f5f5' }}
                    >
                      Husqvarna Automower 450X — Best Overall
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      The industry benchmark. Handles 1.25 acres, navigates
                      narrow passages, runs whisper-quiet at 58 dB, and its
                      GPS-assisted navigation learns your yard over time for
                      increasingly efficient coverage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: '#f5f5f5' }}
                    >
                      Mammotion LUBA 2 — Best for Large Yards
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Wire-free RTK GPS navigation covers a full acre with
                      centimeter-level precision. Handles slopes up to 75% grade
                      and its 15.7-inch cutting width finishes faster than any
                      competitor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-orange-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: '#f5f5f5' }}
                    >
                      Worx Landroid M — Best Value
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      At $1,100, the Landroid M delivers reliable automated
                      mowing for quarter-acre yards with a modular accessory
                      system. AIA obstacle avoidance and OTA updates keep it
                      improving over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div
              className="rounded-xl p-6 mb-12 border"
              style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
            >
              <h2
                className="text-lg font-bold mb-4"
                style={{ color: '#f5f5f5' }}
              >
                What&apos;s in This Guide
              </h2>
              <nav className="space-y-2">
                {[
                  ['Comparison Table', '#comparison-table'],
                  ['Navigation Technology Explained', '#navigation-tech'],
                  ['Husqvarna Automower 450X Review', '#husqvarna-450x'],
                  ['Worx Landroid M Review', '#worx-landroid-m'],
                  ['EcoVacs GOAT G1 Review', '#ecovacs-goat-g1'],
                  ['Mammotion LUBA 2 Review', '#mammotion-luba-2'],
                  ['Robomow RS630 Review', '#robomow-rs630'],
                  ['Gardena SILENO City Review', '#gardena-sileno-city'],
                  ['Yard Size Guide', '#yard-size-guide'],
                  ['FAQ', '#faq'],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center gap-2 text-sm hover:underline"
                    style={{ color: '#22c55e' }}
                  >
                    <ChevronRight className="h-3 w-3" />
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Comparison Table */}
            <section id="comparison-table" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Robot Lawn Mower Comparison Table (2026)
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717', borderBottom: '1px solid #27272a' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Model</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Coverage</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Runtime</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Slope</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Noise</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Navigation</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Cut Width</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, i) => (
                      <tr
                        key={p.name}
                        style={{
                          borderBottom: i < products.length - 1 ? '1px solid #27272a' : 'none',
                        }}
                      >
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                          <div>{p.name}</div>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full mt-1 inline-block"
                            style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                          >
                            {p.badge}
                          </span>
                        </td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.price}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.coverage}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.runtime}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.slopeCapacity}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.noiseLevel}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.navigation}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{p.cuttingWidth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Navigation Technology Comparison */}
            <section id="navigation-tech" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: '#f5f5f5' }}
              >
                Boundary Wire vs RTK GPS vs Vision: Which Navigation Is Best?
              </h2>
              <p className="mb-6" style={{ color: '#a1a1aa' }}>
                The single biggest decision when choosing a robot mower is the navigation technology. Each approach has real tradeoffs that affect installation effort, accuracy, and which yard layouts they can handle.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {/* Boundary Wire */}
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      Boundary Wire
                    </h3>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#a1a1aa' }}>
                    A physical wire buried 1-2 inches underground (or pegged on
                    the surface) defines the mowing area. The mower detects the
                    wire&apos;s signal and stays within bounds.
                  </p>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Models: Husqvarna, Worx, Robomow, Gardena
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>Most reliable boundary detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>Works in any weather</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>Proven technology, decades of use</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <X className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span style={{ color: '#d4d4d8' }}>Installation takes 2-6 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <X className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span style={{ color: '#d4d4d8' }}>Wire breaks cause downtime</span>
                    </div>
                  </div>
                </div>

                {/* RTK GPS */}
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      RTK GPS
                    </h3>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#a1a1aa' }}>
                    A reference station provides centimeter-level GPS
                    positioning. The mower follows a virtual boundary defined in
                    the app with no physical wire needed.
                  </p>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Models: Mammotion LUBA 2
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>No wire installation needed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>Centimeter-level precision</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>Easy to adjust mowing zones</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <X className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span style={{ color: '#d4d4d8' }}>Requires clear sky view for signal</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <X className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span style={{ color: '#d4d4d8' }}>Reference station needs mounting</span>
                    </div>
                  </div>
                </div>

                {/* Vision / Camera */}
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      Vision / Camera
                    </h3>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#a1a1aa' }}>
                    Onboard cameras and sensors (ToF, LiDAR) map the yard
                    visually. The mower builds a map during initial runs, then
                    navigates by recognizing landmarks.
                  </p>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Models: EcoVacs GOAT G1
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>No wire, no reference station</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>Best obstacle detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span style={{ color: '#d4d4d8' }}>Fastest setup time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <X className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span style={{ color: '#d4d4d8' }}>Can struggle at property edges</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <X className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span style={{ color: '#d4d4d8' }}>Newer tech, less field-proven</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                  GreenVerdict Take
                </p>
                <p className="text-sm" style={{ color: '#d4d4d8' }}>
                  For most homeowners, <strong style={{ color: '#f5f5f5' }}>boundary wire</strong> is
                  still the most reliable choice. It is a one-time installation that works rain or
                  shine without GPS signal issues. If you want the simplest setup and have a
                  straightforward yard, <strong style={{ color: '#f5f5f5' }}>vision-based</strong>{' '}
                  mowers like the EcoVacs GOAT G1 are the future. For large, open yards where wire
                  installation would be impractical, <strong style={{ color: '#f5f5f5' }}>RTK GPS</strong>{' '}
                  (Mammotion LUBA 2) is the best wire-free option available.
                </p>
              </div>
            </section>

            {/* Individual Reviews */}
            {/* 1. Husqvarna Automower 450X */}
            <section id="husqvarna-450x" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    1. Husqvarna Automower 450X
                  </h2>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best Overall
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 5 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 5 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>
                    4.8 / 5
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    ['Price', '$3,499'],
                    ['Coverage', '1.25 acres'],
                    ['Runtime', '145 min'],
                    ['Slope', '45% (24 deg)'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: '#0a0a0a' }}
                    >
                      <p className="text-xs" style={{ color: '#a1a1aa' }}>{label}</p>
                      <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>{value}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  The Husqvarna Automower 450X is the robot mower that professionals and serious homeowners trust. Its GPS-assisted navigation learns your yard&apos;s layout over time, systematically covering every inch while avoiding obstacles. The 450X handles complex yards with multiple zones, narrow passages down to 24 inches, and slopes up to 45%. At just 58 dB, it is quieter than a conversation. Where Husqvarna separates itself is build quality: the weather-resistant design handles rain, heat, and cold without issue. Husqvarna Connect gives you full remote control, scheduling, GPS tracking, and theft protection. Yes, you need a boundary wire, but once installed, this mower simply works season after season.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'GPS-assisted navigation learns optimal paths',
                        'Whisper-quiet 58 dB operation',
                        'Handles complex yards, narrow passages, multi-zones',
                        'Built-in GPS tracking and theft alarm',
                        'Proven reliability over thousands of units deployed',
                        'Excellent app with remote scheduling and diagnostics',
                      ].map((pro) => (
                        <div key={pro} className="flex items-start gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          <span style={{ color: '#d4d4d8' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Most expensive model in our lineup at $3,499',
                        'Boundary wire installation is time-consuming',
                        'Narrow 9.4-inch cutting width means longer mow times',
                        'No built-in camera for obstacle avoidance',
                      ].map((con) => (
                        <div key={con} className="flex items-start gap-2 text-sm">
                          <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          <span style={{ color: '#d4d4d8' }}>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="husqvarna-automower-450x"
                  source="best-robot-lawn-mower"
                  variant="primary"
                  label="Check Price — Husqvarna Automower 450X"
                  showPrice
                />
              </div>
            </section>

            {/* 2. Worx Landroid M */}
            <section id="worx-landroid-m" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    2. Worx Landroid M (WR147)
                  </h2>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best Value
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 4 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 4 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>
                    4.4 / 5
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    ['Price', '$1,100'],
                    ['Coverage', '0.25 acres'],
                    ['Runtime', '120 min'],
                    ['Slope', '35% (20 deg)'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: '#0a0a0a' }}
                    >
                      <p className="text-xs" style={{ color: '#a1a1aa' }}>{label}</p>
                      <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>{value}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  The Worx Landroid M hits the sweet spot between price and performance. At $1,100, it is the most affordable quality robot mower for typical suburban yards up to a quarter acre. AIA navigation optimizes mowing patterns and avoids obstacles, while the modular accessory system lets you add GPS, voice control, or an off-road kit as needed. Worx regularly pushes OTA firmware updates, so the mower genuinely improves over time. Cut-to-edge technology mows right up to the boundary line, and the rain sensor pauses mowing automatically.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Best price-to-performance ratio at $1,100',
                        'Modular accessory system (GPS, voice, off-road)',
                        'OTA updates continuously improve performance',
                        'Cut-to-edge reduces manual trimming',
                        'Compact and lightweight for easy handling',
                        'Rain sensor with auto-resume',
                      ].map((pro) => (
                        <div key={pro} className="flex items-start gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          <span style={{ color: '#d4d4d8' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Limited to 0.25 acres (larger models available)',
                        'Boundary wire still required',
                        'Narrower 7-inch cutting width is slow on larger areas',
                        'Obstacle avoidance not as advanced as camera systems',
                      ].map((con) => (
                        <div key={con} className="flex items-start gap-2 text-sm">
                          <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          <span style={{ color: '#d4d4d8' }}>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="worx-landroid-m-wr147"
                  source="best-robot-lawn-mower"
                  variant="primary"
                  label="Check Price — Worx Landroid M (WR147)"
                  showPrice
                />
              </div>
            </section>

            {/* 3. EcoVacs GOAT G1 */}
            <section id="ecovacs-goat-g1" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    3. EcoVacs GOAT G1
                  </h2>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best Wire-Free
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 4 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 4 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>
                    4.5 / 5
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    ['Price', '$1,599'],
                    ['Coverage', '0.5 acres'],
                    ['Runtime', '180 min'],
                    ['Slope', '45% (24 deg)'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: '#0a0a0a' }}
                    >
                      <p className="text-xs" style={{ color: '#a1a1aa' }}>{label}</p>
                      <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>{value}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  EcoVacs brought its robot vacuum expertise outdoors with the GOAT G1, and the result is the most advanced wire-free mowing experience available. TrueMapping technology combines dual cameras with Time-of-Flight sensors to create a detailed 3D map of your yard. No wire, no reference station, no GPS dependency. It excels at obstacle avoidance, detecting objects as small as a tennis ball. With 180 minutes of runtime, a polished app for zone management and scheduling, and whisper-quiet 55 dB operation, it is the most user-friendly mower we tested.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Truly wire-free with no reference station needed',
                        'Best-in-class obstacle avoidance with 3D mapping',
                        'Quietest mower tested at 55 dB',
                        'Excellent app with zone management',
                        'Handles slopes up to 45%',
                        '180 min runtime is the longest in its class',
                      ].map((pro) => (
                        <div key={pro} className="flex items-start gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          <span style={{ color: '#d4d4d8' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Edge cutting less precise than wire-guided mowers',
                        'Camera-based navigation can drift in heavy rain',
                        'Limited to 0.5 acres (no expansion packs)',
                        'Newer brand in outdoor robotics, less track record',
                      ].map((con) => (
                        <div key={con} className="flex items-start gap-2 text-sm">
                          <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          <span style={{ color: '#d4d4d8' }}>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="ecovacs-goat-g1"
                  source="best-robot-lawn-mower"
                  variant="primary"
                  label="Check Price — EcoVacs GOAT G1"
                  showPrice
                />
              </div>
            </section>

            {/* 4. Mammotion LUBA 2 */}
            <section id="mammotion-luba-2" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    4. Mammotion LUBA 2
                  </h2>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best for Large Yards
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 5 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 5 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>
                    4.6 / 5
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    ['Price', '$1,999'],
                    ['Coverage', '1.0 acres'],
                    ['Runtime', '180 min'],
                    ['Slope', '75% (37 deg)'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: '#0a0a0a' }}
                    >
                      <p className="text-xs" style={{ color: '#a1a1aa' }}>{label}</p>
                      <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>{value}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  The Mammotion LUBA 2 is the most capable wire-free mower for large yards. Its RTK GPS system achieves centimeter-level positioning, mowing in precise parallel lines rather than random patterns. The 75% slope capability and 15.7-inch cutting width (widest in our lineup) mean it finishes a full acre significantly faster than narrow-blade competitors. The all-wheel-drive system grips slopes that would stall other mowers. Setup is straightforward: mount the reference station, drive the mower around your perimeter via the app, and it memorizes the boundary.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'RTK GPS gives centimeter-level precision without wire',
                        'Industry-leading 75% slope capability',
                        'Widest cutting width at 15.7 inches',
                        'All-wheel drive for superior traction',
                        'Efficient parallel mowing patterns',
                        'Multi-zone support with app-defined boundaries',
                      ].map((pro) => (
                        <div key={pro} className="flex items-start gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          <span style={{ color: '#d4d4d8' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Reference station requires mounting with clear sky view',
                        'Struggles under heavy tree canopy (GPS signal blocked)',
                        'Larger and heavier than most competitors',
                        'Edge trimming less precise than wire-based systems',
                      ].map((con) => (
                        <div key={con} className="flex items-start gap-2 text-sm">
                          <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          <span style={{ color: '#d4d4d8' }}>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="mammotion-luba-2"
                  source="best-robot-lawn-mower"
                  variant="primary"
                  label="Check Price — Mammotion LUBA 2"
                  showPrice
                />
              </div>
            </section>

            {/* 5. Robomow RS630 */}
            <section id="robomow-rs630" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    5. Robomow RS630
                  </h2>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best for Thick Grass
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 4 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 4 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>
                    4.2 / 5
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    ['Price', '$2,199'],
                    ['Coverage', '0.75 acres'],
                    ['Runtime', '100 min'],
                    ['Slope', '36% (20 deg)'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: '#0a0a0a' }}
                    >
                      <p className="text-xs" style={{ color: '#a1a1aa' }}>{label}</p>
                      <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>{value}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  If your lawn features thick, fast-growing grass like Bermuda or St. Augustine, the Robomow RS630 is built for the job. Its 22-inch dual-blade cutting deck is the widest of any consumer robot mower, chewing through dense grass that would bog down smaller machines. It covers up to 0.75 acres with a dedicated edge-mowing mode. The tradeoff for that cutting power is noise: at 66 dB, it is the loudest model we reviewed, and its 100-minute runtime is the shortest.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Widest cutting deck at 22 inches for fast coverage',
                        'Handles thick, dense grass types effortlessly',
                        'Dedicated edge-cutting mode',
                        'Multi-zone support with scheduling',
                      ].map((pro) => (
                        <div key={pro} className="flex items-start gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          <span style={{ color: '#d4d4d8' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Loudest model at 66 dB (noticeable from indoors)',
                        'Shortest runtime at 100 minutes per charge',
                        'Boundary wire required with complex setup',
                        'Less advanced navigation than GPS or vision models',
                        'Premium price for a wire-based system',
                      ].map((con) => (
                        <div key={con} className="flex items-start gap-2 text-sm">
                          <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          <span style={{ color: '#d4d4d8' }}>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="robomow-rs630"
                  source="best-robot-lawn-mower"
                  variant="primary"
                  label="Check Price — Robomow RS630"
                  showPrice
                />
              </div>
            </section>

            {/* 6. Gardena SILENO City */}
            <section id="gardena-sileno-city" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    6. Gardena SILENO City 250
                  </h2>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best Budget
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 4 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 4 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>
                    4.1 / 5
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    ['Price', '$649'],
                    ['Coverage', '2,700 sq ft'],
                    ['Runtime', '65 min'],
                    ['Slope', '35% (19 deg)'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: '#0a0a0a' }}
                    >
                      <p className="text-xs" style={{ color: '#a1a1aa' }}>{label}</p>
                      <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>{value}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-6" style={{ color: '#d4d4d8' }}>
                  The Gardena SILENO City 250 proves that robot mowing does not have to be expensive. At $649, it is the most affordable quality option for small urban yards up to 2,700 square feet. Gardena is owned by Husqvarna Group, so the underlying technology is proven. At 57 dB and under 17 lbs, it handles narrow passages down to 24 inches. No GPS, no camera, no advanced mapping, but for a small yard that just needs regular maintenance, it delivers exactly what you need at a fraction of the cost.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Most affordable at $649',
                        'Ultra-quiet 57 dB operation',
                        'Lightweight at under 17 lbs',
                        'Husqvarna Group engineering and reliability',
                        'Handles narrow passages and tight spaces',
                        'Simple setup and intuitive app',
                      ].map((pro) => (
                        <div key={pro} className="flex items-start gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          <span style={{ color: '#d4d4d8' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </p>
                    <div className="space-y-1.5">
                      {[
                        'Very limited coverage area (2,700 sq ft)',
                        'Only 65 minutes of runtime per charge',
                        'No GPS tracking or advanced navigation',
                        'Bluetooth-only app (no Wi-Fi remote access)',
                        'Boundary wire installation still required',
                      ].map((con) => (
                        <div key={con} className="flex items-start gap-2 text-sm">
                          <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          <span style={{ color: '#d4d4d8' }}>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="gardena-sileno-city-250"
                  source="best-robot-lawn-mower"
                  variant="primary"
                  label="Check Price — Gardena SILENO City 250"
                  showPrice
                />
              </div>
            </section>

            {/* Yard Size Guide */}
            <section id="yard-size-guide" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: '#f5f5f5' }}
              >
                Which Robot Mower Fits Your Yard?
              </h2>
              <p className="mb-6" style={{ color: '#a1a1aa' }}>
                Yard size is the most important factor in choosing a robot mower. Here is a quick guide based on common lot sizes.
              </p>

              <div className="space-y-4">
                {[
                  {
                    size: 'Small Yard (under 3,000 sq ft)',
                    icon: <CheckCircle className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    pick: 'Gardena SILENO City 250 ($649)',
                    note: 'Perfect for townhome lawns, small front yards, or courtyard areas. The SILENO City covers up to 2,700 sq ft and its compact size navigates tight spaces easily.',
                  },
                  {
                    size: 'Medium Yard (3,000 - 10,000 sq ft)',
                    icon: <CheckCircle className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    pick: 'Worx Landroid M ($1,100) or EcoVacs GOAT G1 ($1,599)',
                    note: 'The typical suburban yard. The Landroid M is the value pick with reliable wire-based navigation. The GOAT G1 costs more but eliminates wire installation entirely.',
                  },
                  {
                    size: 'Large Yard (10,000 - 30,000 sq ft)',
                    icon: <CheckCircle className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    pick: 'Robomow RS630 ($2,199) or Mammotion LUBA 2 ($1,999)',
                    note: 'For half-acre to three-quarter-acre properties. The RS630 is better for thick grass; the LUBA 2 is better for open yards where wire-free setup matters.',
                  },
                  {
                    size: 'Extra Large Yard (30,000+ sq ft)',
                    icon: <CheckCircle className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    pick: 'Husqvarna Automower 450X ($3,499) or Mammotion LUBA 2 ($1,999)',
                    note: 'For full-acre properties. The 450X is the gold standard for reliability and complex layouts. The LUBA 2 covers a full acre wire-free and finishes faster with its wider blade.',
                  },
                ].map((tier) => (
                  <div
                    key={tier.size}
                    className="rounded-xl p-5 border"
                    style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {tier.icon}
                      <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                        {tier.size}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#22c55e' }}>
                      Our pick: {tier.pick}
                    </p>
                    <p className="text-sm" style={{ color: '#d4d4d8' }}>
                      {tier.note}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-5 border mt-6"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5" style={{ color: '#22c55e' }} />
                  <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                    Cost vs. Lawn Service: The Math
                  </h3>
                </div>
                <p className="text-sm mb-3" style={{ color: '#d4d4d8' }}>
                  Professional lawn mowing typically costs $30-$80 per visit, or roughly $120-$320/month during the growing season. That is $960-$2,560 per year.
                </p>
                <p className="text-sm" style={{ color: '#d4d4d8' }}>
                  A mid-range robot mower like the Worx Landroid M ($1,100) pays for itself within 1-2 years. Even the Husqvarna 450X at $3,499 breaks even within 2-3 years against professional service, and it mows daily for a consistently better-looking lawn.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Robot Lawn Mower FAQ
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border"
                    style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                  >
                    <h3 className="font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      {faq.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Line */}
            <section className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5" style={{ color: '#22c55e' }} />
                  <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    The GreenVerdict Bottom Line
                  </h2>
                </div>
                <p className="mb-4" style={{ color: '#d4d4d8' }}>
                  The robot lawn mower market in 2026 is mature enough that there is no bad choice on this list. Every model here will keep your lawn maintained with minimal effort. The real question is which tradeoffs matter most to you.
                </p>
                <div className="space-y-3">
                  <p className="text-sm" style={{ color: '#d4d4d8' }}>
                    <strong style={{ color: '#f5f5f5' }}>Want proven reliability and the best navigation?</strong>{' '}
                    Get the <strong style={{ color: '#22c55e' }}>Husqvarna 450X</strong>.
                  </p>
                  <p className="text-sm" style={{ color: '#d4d4d8' }}>
                    <strong style={{ color: '#f5f5f5' }}>Want the best value for a typical yard?</strong>{' '}
                    Get the <strong style={{ color: '#22c55e' }}>Worx Landroid M</strong>.
                  </p>
                  <p className="text-sm" style={{ color: '#d4d4d8' }}>
                    <strong style={{ color: '#f5f5f5' }}>Want wire-free with the easiest setup?</strong>{' '}
                    Get the <strong style={{ color: '#22c55e' }}>EcoVacs GOAT G1</strong>.
                  </p>
                  <p className="text-sm" style={{ color: '#d4d4d8' }}>
                    <strong style={{ color: '#f5f5f5' }}>Have a large, open yard with slopes?</strong>{' '}
                    Get the <strong style={{ color: '#22c55e' }}>Mammotion LUBA 2</strong>.
                  </p>
                  <p className="text-sm" style={{ color: '#d4d4d8' }}>
                    <strong style={{ color: '#f5f5f5' }}>Have thick grass that kills other mowers?</strong>{' '}
                    Get the <strong style={{ color: '#22c55e' }}>Robomow RS630</strong>.
                  </p>
                  <p className="text-sm" style={{ color: '#d4d4d8' }}>
                    <strong style={{ color: '#f5f5f5' }}>Have a tiny yard and a tight budget?</strong>{' '}
                    Get the <strong style={{ color: '#22c55e' }}>Gardena SILENO City</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Methodology */}
            <section className="mb-12">
              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5" style={{ color: '#a1a1aa' }} />
                  <h3 className="font-semibold" style={{ color: '#f5f5f5' }}>
                    How We Test and Review
                  </h3>
                </div>
                <p className="text-sm" style={{ color: '#a1a1aa' }}>
                  GreenVerdict reviews are based on hands-on testing, manufacturer specifications, verified owner feedback, and long-term reliability data. We evaluate robot mowers on navigation accuracy, cutting quality, slope handling, noise level, app experience, and total cost of ownership. Our recommendations are independent. If you purchase through our links, we may earn a commission at no extra cost to you.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
