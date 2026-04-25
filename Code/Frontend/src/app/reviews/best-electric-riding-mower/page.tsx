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
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Best Electric Riding Mowers (2026): EGO vs Ryobi vs Greenworks vs Cub Cadet vs John Deere vs Husqvarna',
  description:
    'Compare the best electric riding lawn mowers in 2026. In-depth reviews of EGO Z6, Ryobi 80V, Greenworks CrossoverZ, Cub Cadet CC 30e, John Deere Z370R Electric, and Husqvarna Ceora. Battery runtime, zero-turn performance, and cost of ownership vs gas.',
  alternates: {
    canonical: '/reviews/best-electric-riding-mower',
  },
  openGraph: {
    title: 'Best Electric Riding Mowers (2026)',
    description:
      'EGO Z6 vs Ryobi 80V vs Greenworks CrossoverZ vs Cub Cadet vs John Deere vs Husqvarna. Full specs, pros/cons, and gas vs electric cost comparison.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Riding Mowers (2026): EGO vs Ryobi vs Greenworks vs Cub Cadet vs John Deere vs Husqvarna',
  description:
    'Compare the best electric riding lawn mowers for 2026. In-depth reviews of six top models including battery runtime, zero-turn vs lap bar steering, and long-term cost of ownership vs gas riding mowers.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-riding-mower',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric riding mower in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO Z6 Zero-Turn is our top pick for 2026. It delivers up to 2 acres of runtime per charge with its 56V ARC Lithium battery system, offers true zero-turn maneuverability with lap bars, and has a 42-inch fabricated steel cutting deck. Its compatibility with the broader EGO battery ecosystem is a major advantage for homeowners who already own EGO tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a battery riding mower last on one charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Battery runtime varies by model and terrain. The EGO Z6 handles up to 2 acres per charge, the Ryobi 80V covers about 3 acres, and the Greenworks CrossoverZ manages around 2 acres. Flat, well-maintained lawns yield the best runtime. Thick, tall, or wet grass can reduce runtime by 20-30%. Most models recharge in 3-4 hours with rapid chargers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an electric riding mower worth it compared to gas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For properties up to 2-3 acres, electric riding mowers are absolutely worth it. You eliminate gas costs ($200-400/year), oil changes, spark plug replacements, air filter swaps, and annual carburetor maintenance. Over 10 years, the total cost of ownership for an electric rider is typically $3,000-5,000 less than a comparable gas model. Electric mowers are also significantly quieter (75 dB vs 95+ dB for gas) and produce zero emissions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between zero-turn and lap bar steering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero-turn mowers use independent rear-wheel control via lap bars (two levers) to achieve a zero-degree turning radius, making them ideal for yards with obstacles, trees, and landscaping. Steering wheel models feel more like a car and are easier for beginners but have a wider turning radius. Most high-end electric riders in 2026 use lap bar zero-turn systems for maximum efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can electric riding mowers handle hills and slopes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most electric riding mowers handle moderate slopes of 15-20 degrees. The instant torque from electric motors actually provides better hill-climbing performance than many gas models at low speeds. However, battery consumption increases significantly on hilly terrain — expect 20-40% less runtime. The Ryobi 80V and EGO Z6 both have excellent traction on inclines. For slopes above 15 degrees, a walk-behind mower is generally safer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to charge an electric riding mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Charging costs are minimal. A full charge for a typical electric riding mower battery pack (3-6 kWh) costs between $0.45 and $1.20 depending on your electricity rate. At the national average of $0.16/kWh, a full charge costs roughly $0.80. Compare that to $5-10 per mow for a gas riding mower. Over a 30-week mowing season, you spend about $24-36 on electricity vs $150-300 on gas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do electric riding mower batteries last before replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern lithium-ion batteries in electric riding mowers typically last 500-1,000 charge cycles before significant degradation, which translates to roughly 8-15 years of normal residential use (30-40 mows per year). Most manufacturers offer 3-5 year battery warranties. Replacement battery packs cost $500-1,500 depending on the model, but battery prices continue to drop each year.',
      },
    },
  ],
};

interface Mower {
  name: string;
  badge: string;
  price: string;
  cuttingDeck: string;
  battery: string;
  runtime: string;
  steering: string;
  chargeTime: string;
  weight: string;
  affiliateLink: string;
}

const mowers: Mower[] = [
  {
    name: 'EGO Z6 Zero-Turn',
    badge: 'Best Overall',
    price: '$5,499',
    cuttingDeck: '42"',
    battery: '56V ARC Lithium (6x 10Ah)',
    runtime: 'Up to 2 acres',
    steering: 'Lap Bar Zero-Turn',
    chargeTime: '~3.5 hours',
    weight: '590 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Ryobi 80V Zero-Turn',
    badge: 'Best for Large Yards',
    price: '$4,999',
    cuttingDeck: '42"',
    battery: '80V (100Ah total)',
    runtime: 'Up to 3 acres',
    steering: 'Lap Bar Zero-Turn',
    chargeTime: '~4 hours',
    weight: '625 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Greenworks 60V CrossoverZ',
    badge: 'Best Value',
    price: '$4,199',
    cuttingDeck: '42"',
    battery: '60V (8x 8Ah)',
    runtime: 'Up to 2 acres',
    steering: 'Lap Bar Zero-Turn',
    chargeTime: '~3 hours',
    weight: '560 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Cub Cadet CC 30e',
    badge: 'Best for Beginners',
    price: '$2,999',
    cuttingDeck: '30"',
    battery: '56V Lithium-Ion',
    runtime: 'Up to 1 acre',
    steering: 'Steering Wheel',
    chargeTime: '~4 hours',
    weight: '430 lbs',
    affiliateLink: '#',
  },
  {
    name: 'John Deere Z370R Electric',
    badge: 'Best Brand Legacy',
    price: '$5,799',
    cuttingDeck: '42"',
    battery: '3.2 kWh Lithium-Ion',
    runtime: 'Up to 2 acres',
    steering: 'Lap Bar Zero-Turn',
    chargeTime: '~3.5 hours',
    weight: '610 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Husqvarna Ceora',
    badge: 'Best Autonomous',
    price: '$8,499+',
    cuttingDeck: '22" (robotic)',
    battery: 'Integrated Li-Ion',
    runtime: 'Up to 1.25 acres (autonomous)',
    steering: 'Autonomous GPS/RTK',
    chargeTime: 'Auto-docking',
    weight: '~65 lbs',
    affiliateLink: '#',
  },
];

export default function BestElectricRidingMower() {
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
                Best Electric Riding Mowers (2026): Zero-Turn Showdown
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div
                className="flex items-center gap-4 text-sm"
                style={{ color: '#a1a1aa' }}
              >
                <div className="flex items-center gap-1">
                  <Battery className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1200&q=80&auto=format&fit=crop' alt='Electric riding mower' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: '#a1a1aa' }}
              >
                Electric riding mowers have hit a tipping point. In 2026, battery
                technology has finally caught up with the demands of larger residential
                lawns, and every major manufacturer now offers at least one electric
                rider. No more pull cords, no more gas cans, no more oil changes &mdash;
                just push a button and mow.
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#a1a1aa' }}
              >
                We evaluated six of the top battery-powered riding mowers across runtime,
                cutting performance, build quality, noise levels, and long-term cost of
                ownership. Whether you have a half-acre suburban lot or a 3-acre property,
                this guide will help you find the right electric rider for your yard.
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
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      EGO Z6 Zero-Turn &mdash; Best Overall
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      The most refined electric riding mower available. Proven 56V battery
                      ecosystem, rock-solid lap bar controls, 42-inch fabricated steel deck,
                      and up to 2 acres of runtime. If you own any EGO tools, this is a
                      no-brainer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Ryobi 80V Zero-Turn &mdash; Best for Large Yards
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      With up to 3 acres of runtime on a single charge, the Ryobi 80V
                      leads the pack in battery endurance. The 80V platform delivers
                      serious torque for thick grass and moderate hills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-orange-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Greenworks 60V CrossoverZ &mdash; Best Value
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      At $4,199, the CrossoverZ undercuts the competition while still
                      delivering 42-inch zero-turn performance and 2 acres of runtime. A
                      strong choice for budget-conscious buyers who refuse to compromise on
                      cut quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #27272a' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Model</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Deck</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Runtime</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Steering</th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Charge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mowers.map((m, i) => (
                      <tr
                        key={m.name}
                        style={{
                          borderBottom: i < mowers.length - 1 ? '1px solid #27272a' : 'none',
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                        }}
                      >
                        <td className="p-4">
                          <div className="font-semibold" style={{ color: '#f5f5f5' }}>
                            {m.name}
                          </div>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                            style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                          >
                            {m.badge}
                          </span>
                        </td>
                        <td className="p-4 font-semibold" style={{ color: '#22c55e' }}>
                          {m.price}
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {m.cuttingDeck}
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {m.runtime}
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {m.steering}
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {m.chargeTime}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Battery Runtime by Acreage */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Battery Runtime by Acreage
              </h2>
              <p className="mb-6" style={{ color: '#a1a1aa' }}>
                One of the biggest concerns with electric riding mowers is whether the battery
                can handle your entire yard on a single charge. Here is how each model
                performs across different lot sizes under typical conditions (flat terrain,
                dry grass, moderate thickness):
              </p>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #27272a' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Model</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>0.5 Acre</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>1 Acre</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>1.5 Acres</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>2 Acres</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#f5f5f5' }}>3 Acres</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'EGO Z6', data: ['Easy', 'Easy', 'Comfortable', 'Tight', 'No'] },
                      { name: 'Ryobi 80V', data: ['Easy', 'Easy', 'Easy', 'Comfortable', 'Tight'] },
                      { name: 'Greenworks CrossoverZ', data: ['Easy', 'Easy', 'Comfortable', 'Tight', 'No'] },
                      { name: 'Cub Cadet CC 30e', data: ['Easy', 'Tight', 'No', 'No', 'No'] },
                      { name: 'John Deere Z370R', data: ['Easy', 'Easy', 'Comfortable', 'Tight', 'No'] },
                      { name: 'Husqvarna Ceora', data: ['Easy', 'Easy', 'Scheduled', 'Scheduled', 'No'] },
                    ].map((row, i) => (
                      <tr
                        key={row.name}
                        style={{
                          borderBottom: i < 5 ? '1px solid #27272a' : 'none',
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                        }}
                      >
                        <td className="p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                          {row.name}
                        </td>
                        {row.data.map((cell, j) => (
                          <td
                            key={j}
                            className="p-4 text-center"
                            style={{
                              color:
                                cell === 'Easy'
                                  ? '#22c55e'
                                  : cell === 'Comfortable'
                                  ? '#22c55e'
                                  : cell === 'Tight'
                                  ? '#eab308'
                                  : cell === 'Scheduled'
                                  ? '#60a5fa'
                                  : '#ef4444',
                            }}
                          >
                            {cell === 'No' ? (
                              <span className="flex items-center justify-center gap-1">
                                <X className="h-3 w-3" /> No
                              </span>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: '#a1a1aa' }}>
                &quot;Easy&quot; = finishes with 30%+ battery remaining. &quot;Comfortable&quot; = finishes with 10-30%.
                &quot;Tight&quot; = may finish with under 10%. &quot;Scheduled&quot; = autonomous mower handles via daily sessions. &quot;No&quot; = cannot complete on a single charge.
              </p>
            </section>

            {/* Zero-Turn vs Lap Bar vs Steering Wheel */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Zero-Turn vs Steering Wheel: Which Is Right for You?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                    <Zap className="h-5 w-5 inline mr-2" style={{ color: '#22c55e' }} />
                    Zero-Turn (Lap Bars)
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Zero-degree turning radius &mdash; navigate tight spaces easily
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Faster mowing &mdash; eliminates wide turns around obstacles
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Professional-grade control and precision
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Steeper learning curve for first-time users
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Can tear turf if operated too aggressively
                    </li>
                  </ul>
                  <p className="text-xs mt-4" style={{ color: '#a1a1aa' }}>
                    Best for: EGO Z6, Ryobi 80V, Greenworks CrossoverZ, John Deere Z370R
                  </p>
                </div>
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                    <Shield className="h-5 w-5 inline mr-2" style={{ color: '#60a5fa' }} />
                    Steering Wheel
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Familiar car-like feel &mdash; zero learning curve
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      More comfortable on straightaways and open areas
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Gentler on turf &mdash; less risk of tear marks
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Wider turning radius &mdash; less efficient around obstacles
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Slower overall mowing time
                    </li>
                  </ul>
                  <p className="text-xs mt-4" style={{ color: '#a1a1aa' }}>
                    Best for: Cub Cadet CC 30e
                  </p>
                </div>
              </div>
            </section>

            {/* Individual Reviews */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-8"
                style={{ color: '#f5f5f5' }}
              >
                Individual Reviews
              </h2>

              {/* EGO Z6 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    1. EGO Z6 Zero-Turn
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
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
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                    4.8 / 5
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  The EGO Z6 is the electric riding mower that finally made gas-loyalists
                  take notice. Built on EGO&apos;s proven 56V ARC Lithium platform, it pairs
                  six 10Ah batteries with a 42-inch fabricated steel deck that rivals any
                  gas zero-turn in its class. The cut quality is exceptional &mdash; clean,
                  even stripes without the ragged edges that plagued earlier electric models.
                </p>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  Runtime is the headline: up to 2 acres per charge under normal conditions.
                  The battery management system intelligently distributes load across all six
                  packs, and the batteries are cross-compatible with EGO&apos;s entire lineup
                  of trimmers, blowers, and chainsaws. That ecosystem advantage is hard to
                  overstate &mdash; one battery platform for your entire yard.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4 inline mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Industry-leading cut quality on a 42&quot; fabricated deck</li>
                      <li>Cross-compatible with 75+ EGO tools</li>
                      <li>Excellent lap bar responsiveness</li>
                      <li>LED headlights for early morning / evening mowing</li>
                      <li>Quiet operation at ~74 dB</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4 inline mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>$5,499 is a premium price point</li>
                      <li>2-acre runtime may be tight for larger properties</li>
                      <li>No mulch kit included (sold separately)</li>
                      <li>Heavier than some competitors at 590 lbs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="ego-z6-zero-turn"
                    source="electric-riding-mower-hub"
                    variant="primary"
                    label="Check Price, EGO Z6 Zero-Turn"
                    showPrice
                  />
                </div>
              </div>

              {/* Ryobi 80V */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    2. Ryobi 80V Zero-Turn
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
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
                      style={{ color: s <= 4 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 4 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                    4.5 / 5
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  If raw battery endurance is your top priority, the Ryobi 80V is the mower
                  to beat. Its 100Ah battery system delivers a class-leading 3 acres of
                  runtime &mdash; roughly 50% more than most competitors. The 80V platform
                  provides noticeably more torque than 56V and 60V systems, which translates
                  to better performance in thick, overgrown grass.
                </p>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  The 42-inch stamped steel deck handles standard residential mowing well,
                  though the cut quality is a half-step behind the EGO&apos;s fabricated deck.
                  The lap bar controls are smooth, and Ryobi has refined the drive system since
                  the first-generation model. At $4,999, it undercuts the EGO Z6 by $500 while
                  offering significantly more runtime.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4 inline mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Best-in-class 3-acre runtime</li>
                      <li>80V system provides excellent torque</li>
                      <li>$500 cheaper than EGO Z6</li>
                      <li>Strong Home Depot availability and support</li>
                      <li>Handles thick grass and moderate hills well</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4 inline mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Stamped deck not as durable as fabricated</li>
                      <li>Battery not cross-compatible with Ryobi 40V tools</li>
                      <li>Heavier at 625 lbs</li>
                      <li>Slightly louder than EGO at ~78 dB</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="ryobi-80v-zero-turn"
                    source="electric-riding-mower-hub"
                    variant="primary"
                    label="Check Price, Ryobi 80V Zero-Turn"
                    showPrice
                  />
                </div>
              </div>

              {/* Greenworks CrossoverZ */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    3. Greenworks 60V CrossoverZ
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
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
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                    4.4 / 5
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  The Greenworks CrossoverZ proves you don&apos;t need to spend $5,000+ for a
                  capable electric zero-turn. At $4,199, it delivers 42-inch zero-turn
                  performance with eight 8Ah batteries on the 60V platform. The cut quality
                  is solid, and Greenworks has earned a reputation for reliable brushless motors
                  across its outdoor power equipment line.
                </p>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  Runtime is competitive at 2 acres, matching the EGO Z6 and John Deere Z370R.
                  The 60V batteries charge faster than higher-voltage competitors (about 3 hours
                  total), and the mower is noticeably lighter at 560 lbs. Where the CrossoverZ
                  gives up ground is in build feel &mdash; the deck and frame feel slightly less
                  premium than the EGO or John Deere. But for the price, it is hard to complain.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4 inline mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Most affordable 42&quot; electric zero-turn</li>
                      <li>Fast 3-hour charge time</li>
                      <li>Lightest in the zero-turn category at 560 lbs</li>
                      <li>Reliable Greenworks brushless motor</li>
                      <li>Compatible with Greenworks 60V tool ecosystem</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4 inline mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Build quality feels a step below EGO and Deere</li>
                      <li>60V delivers less torque than 80V competitors</li>
                      <li>Smaller dealer/service network</li>
                      <li>No headlights on base model</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="greenworks-60v-crossoverz"
                    source="electric-riding-mower-hub"
                    variant="primary"
                    label="Check Price — Greenworks 60V CrossoverZ"
                    showPrice
                  />
                </div>
              </div>

              {/* Cub Cadet CC 30e */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    4. Cub Cadet CC 30e
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best for Beginners
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
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                    4.2 / 5
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  The Cub Cadet CC 30e is the entry point for electric riding mowers, and it
                  nails the fundamentals for smaller yards. At $2,999, it is the most affordable
                  electric rider by a wide margin. The traditional steering wheel design makes
                  it immediately familiar &mdash; if you can drive a car, you can drive this mower
                  without any learning curve.
                </p>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  The 30-inch cutting deck is smaller than the 42-inch zero-turns, which means
                  slower mowing on larger lawns but better maneuverability in tight spaces. Runtime
                  is about 1 acre per charge &mdash; perfectly adequate for suburban lots up to
                  3/4 acre. The Cub Cadet build quality is strong, backed by the brand&apos;s
                  century-long reputation in outdoor power equipment.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4 inline mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Most affordable electric rider at $2,999</li>
                      <li>Steering wheel &mdash; zero learning curve</li>
                      <li>Compact size fits in standard garage</li>
                      <li>Trusted Cub Cadet brand and dealer network</li>
                      <li>Lightest option at 430 lbs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4 inline mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>30&quot; deck is slow on larger properties</li>
                      <li>1-acre runtime limits yard size</li>
                      <li>Wider turning radius vs zero-turn models</li>
                      <li>No cross-compatibility with other tool batteries</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="cub-cadet-cc-30e"
                    source="electric-riding-mower-hub"
                    variant="primary"
                    label="Check Price, Cub Cadet CC 30e"
                    showPrice
                  />
                </div>
              </div>

              {/* John Deere Z370R Electric */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    5. John Deere Z370R Electric
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best Brand Legacy
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
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                    4.3 / 5
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  John Deere needs no introduction, and their entry into the electric riding
                  mower space carries the weight of that reputation. The Z370R Electric delivers
                  a 42-inch Accel Deep mower deck &mdash; the same deck design used on their
                  gas-powered Z300 series &mdash; paired with a 3.2 kWh lithium-ion battery
                  system that handles up to 2 acres per charge.
                </p>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  Build quality is top-tier. The frame, deck, and components feel overbuilt in
                  the best way. The lap bars are precise and smooth, and the overall mowing
                  experience is nearly indistinguishable from Deere&apos;s gas models. The
                  tradeoff is price: at $5,799, it is the most expensive non-autonomous option
                  on this list. You are paying for the Deere name, the dealer network, and the
                  long-term parts availability that comes with it.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4 inline mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Legendary Deere build quality and Accel Deep deck</li>
                      <li>Nationwide dealer network for service and parts</li>
                      <li>Premium lap bar feel &mdash; smooth and precise</li>
                      <li>3.2 kWh battery handles 2 acres comfortably</li>
                      <li>Strong resale value (it is a Deere)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4 inline mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Most expensive non-autonomous option at $5,799</li>
                      <li>Battery is proprietary &mdash; no tool ecosystem</li>
                      <li>Heaviest at 610 lbs</li>
                      <li>Limited electric-specific features (no app, no connectivity)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="john-deere-z370r-electric"
                    source="electric-riding-mower-hub"
                    variant="primary"
                    label="Check Price, John Deere Z370R Electric"
                    showPrice
                  />
                </div>
              </div>

              {/* Husqvarna Ceora */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    6. Husqvarna Ceora
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best Autonomous
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
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                    4.1 / 5
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  The Husqvarna Ceora is a different beast entirely. This is not a rider you
                  sit on &mdash; it is a fully autonomous robotic mower that handles up to
                  1.25 acres using EPOS (satellite-based GPS/RTK) navigation. No boundary
                  wires, no manual mowing sessions, no weekends spent riding laps. You set
                  up the virtual boundary map, schedule mowing times, and the Ceora does the
                  rest &mdash; every day, rain or shine.
                </p>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  At $8,499+, it is the most expensive option on this list, but the value
                  proposition is time. The Ceora mows autonomously in scheduled sessions,
                  returning to its docking station to recharge as needed. The 22-inch cutting
                  width is small, but because it mows daily, your lawn stays at a consistent
                  height. The result is a healthier, denser lawn with the fine mulch clippings
                  acting as natural fertilizer.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4 inline mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Fully autonomous &mdash; zero time spent mowing</li>
                      <li>EPOS navigation (no boundary wires)</li>
                      <li>Daily mowing produces a healthier lawn</li>
                      <li>Nearly silent operation (under 60 dB)</li>
                      <li>App-based scheduling and monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4 inline mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>$8,499+ price is steep (plus installation)</li>
                      <li>1.25-acre maximum may not suit larger properties</li>
                      <li>Professional installation recommended</li>
                      <li>Struggles with very uneven or heavily sloped terrain</li>
                      <li>No on-demand &quot;mow the whole yard right now&quot; option</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="husqvarna-ceora"
                    source="electric-riding-mower-hub"
                    variant="primary"
                    label="Check Price, Husqvarna Ceora"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* Cost of Ownership: Electric vs Gas */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: '#f5f5f5' }}
              >
                <DollarSign className="h-6 w-6 inline mr-2" style={{ color: '#22c55e' }} />
                10-Year Cost of Ownership: Electric vs Gas
              </h2>
              <p className="mb-6" style={{ color: '#a1a1aa' }}>
                The upfront cost of an electric riding mower is higher than a comparable gas
                model. But when you factor in fuel, maintenance, and repairs over a decade,
                the total cost story changes dramatically.
              </p>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #27272a' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>Cost Category</th>
                      <th className="text-right p-4 font-semibold" style={{ color: '#f5f5f5' }}>Gas Rider (10yr)</th>
                      <th className="text-right p-4 font-semibold" style={{ color: '#f5f5f5' }}>Electric Rider (10yr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: 'Purchase Price', gas: '$3,500 - $4,500', electric: '$4,199 - $5,799' },
                      { item: 'Fuel / Electricity', gas: '$2,000 - $4,000', electric: '$240 - $360' },
                      { item: 'Oil Changes (25-30 per decade)', gas: '$250 - $375', electric: '$0' },
                      { item: 'Air Filters, Spark Plugs', gas: '$100 - $200', electric: '$0' },
                      { item: 'Belt Replacement (2-3x)', gas: '$200 - $450', electric: '$0 - $150' },
                      { item: 'Carburetor / Fuel System', gas: '$150 - $400', electric: '$0' },
                      { item: 'Battery Replacement', gas: '$30 - $60 (starter)', electric: '$0 - $1,200' },
                      { item: 'Blade Sharpening / Replacement', gas: '$100 - $200', electric: '$100 - $200' },
                      { item: 'Annual Tune-Ups', gas: '$500 - $1,000', electric: '$0 - $200' },
                    ].map((row, i) => (
                      <tr
                        key={row.item}
                        style={{
                          borderBottom: i < 8 ? '1px solid #27272a' : 'none',
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                        }}
                      >
                        <td className="p-4" style={{ color: '#d4d4d8' }}>{row.item}</td>
                        <td className="p-4 text-right" style={{ color: '#a1a1aa' }}>{row.gas}</td>
                        <td className="p-4 text-right" style={{ color: '#22c55e' }}>{row.electric}</td>
                      </tr>
                    ))}
                    <tr style={{ borderTop: '2px solid #22c55e', backgroundColor: '#171717' }}>
                      <td className="p-4 font-bold" style={{ color: '#f5f5f5' }}>Total (Estimated)</td>
                      <td className="p-4 text-right font-bold" style={{ color: '#ef4444' }}>$6,830 - $11,185</td>
                      <td className="p-4 text-right font-bold" style={{ color: '#22c55e' }}>$4,539 - $7,909</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rounded-lg p-4 mt-4 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <p className="text-sm" style={{ color: '#a1a1aa' }}>
                  <CheckCircle className="h-4 w-4 inline mr-1" style={{ color: '#22c55e' }} />
                  <strong style={{ color: '#f5f5f5' }}>Bottom line:</strong> Over 10 years, an electric riding mower
                  saves approximately $2,000 - $3,500 compared to gas &mdash; even accounting for a potential
                  battery replacement at year 8-10. The savings increase further if your electricity rate
                  is below the national average or you charge with solar panels.
                </p>
              </div>
            </section>

            {/* What to Look for When Buying */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                What to Look for When Buying an Electric Riding Mower
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Battery className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    title: 'Battery Capacity & Runtime',
                    desc: 'Match the mower to your lot size. A 1-acre lawn needs at least 2 kWh of capacity. For 2+ acres, look for 3+ kWh or the Ryobi 80V system. Always add 20% buffer for hills, thick grass, and battery aging.',
                  },
                  {
                    icon: <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    title: 'Deck Size & Cut Quality',
                    desc: 'A 42-inch deck covers ground 40% faster than a 30-inch. Fabricated steel decks (EGO, Deere) hold up better and cut cleaner than stamped steel. Consider mulching, side discharge, and bagging options.',
                  },
                  {
                    icon: <Shield className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    title: 'Warranty & Support',
                    desc: 'Look for at least 3 years on the mower and battery. John Deere and Cub Cadet have the strongest dealer networks. EGO and Ryobi rely on big-box retail support. Factor in local service availability.',
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" style={{ color: '#22c55e' }} />,
                    title: 'Battery Ecosystem',
                    desc: 'If you already own battery-powered tools, choosing a mower on the same platform saves money. EGO and Greenworks have the broadest ecosystems. Ryobi 80V is separate from their 40V line.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-5 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {item.icon}
                      <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Noise Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                Noise Levels: Electric vs Gas
              </h2>
              <p className="mb-6" style={{ color: '#a1a1aa' }}>
                Noise is one of the most underrated advantages of electric riding mowers.
                Many HOAs restrict mowing to specific hours, and gas riders at 95+ dB make
                you unpopular with neighbors. Electric models operate at conversational
                volume or lower.
              </p>
              <div className="space-y-3">
                {[
                  { name: 'Husqvarna Ceora (Robotic)', db: '~58 dB', pct: 25, color: '#22c55e' },
                  { name: 'EGO Z6', db: '~74 dB', pct: 50, color: '#22c55e' },
                  { name: 'Greenworks CrossoverZ', db: '~75 dB', pct: 52, color: '#22c55e' },
                  { name: 'Cub Cadet CC 30e', db: '~76 dB', pct: 54, color: '#22c55e' },
                  { name: 'Ryobi 80V', db: '~78 dB', pct: 58, color: '#eab308' },
                  { name: 'John Deere Z370R', db: '~76 dB', pct: 54, color: '#22c55e' },
                  { name: 'Gas Riding Mower (avg)', db: '~95 dB', pct: 90, color: '#ef4444' },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: '#d4d4d8' }}>{item.name}</span>
                      <span style={{ color: item.color }}>{item.db}</span>
                    </div>
                    <div
                      className="h-3 rounded-full overflow-hidden"
                      style={{ backgroundColor: '#27272a' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3" style={{ color: '#a1a1aa' }}>
                For reference: 60 dB is a normal conversation, 75 dB is a vacuum cleaner, 95 dB is a lawn mower
                or motorcycle. Hearing protection recommended above 85 dB for extended exposure.
              </p>
            </section>

            {/* Who Should Buy Which */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Which Electric Riding Mower Is Right for You?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    profile: 'Suburban homeowner, 0.5 - 1 acre, wants simplicity',
                    pick: 'Cub Cadet CC 30e',
                    reason: 'Affordable, easy to drive, compact enough for any garage.',
                  },
                  {
                    profile: 'Homeowner with 1 - 2 acres who owns EGO tools',
                    pick: 'EGO Z6 Zero-Turn',
                    reason: 'Best overall performance, battery cross-compatibility is a massive perk.',
                  },
                  {
                    profile: 'Large property, 2 - 3 acres, needs maximum runtime',
                    pick: 'Ryobi 80V Zero-Turn',
                    reason: 'Only electric rider that can handle 3 acres without recharging.',
                  },
                  {
                    profile: 'Budget-conscious buyer who wants zero-turn performance',
                    pick: 'Greenworks 60V CrossoverZ',
                    reason: 'Gets you 42-inch zero-turn capability for $1,300 less than the EGO.',
                  },
                  {
                    profile: 'Brand loyalist who values resale and dealer support',
                    pick: 'John Deere Z370R Electric',
                    reason: 'Deere quality, Deere resale, Deere dealer network. Costs more, worth it to some.',
                  },
                  {
                    profile: 'Busy professional who never wants to mow again',
                    pick: 'Husqvarna Ceora',
                    reason: 'Set it up once, and it mows autonomously every day. Your weekends are free.',
                  },
                ].map((rec) => (
                  <div
                    key={rec.pick}
                    className="rounded-xl p-5 border flex items-start gap-4"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                    <div>
                      <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>
                        {rec.profile}
                      </p>
                      <p className="font-bold" style={{ color: '#f5f5f5' }}>
                        Our pick: {rec.pick}
                      </p>
                      <p className="text-sm" style={{ color: '#d4d4d8' }}>
                        {rec.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
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
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#22c55e40' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5" style={{ color: '#22c55e' }} fill="#22c55e" />
                  <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    Final Verdict
                  </h2>
                </div>
                <p className="mb-4" style={{ color: '#a1a1aa' }}>
                  Electric riding mowers are no longer a compromise &mdash; they are a
                  genuine upgrade for most homeowners. The <strong style={{ color: '#f5f5f5' }}>EGO Z6</strong> earns
                  our top recommendation for its exceptional cut quality, proven battery
                  ecosystem, and refined zero-turn controls. If you need more runtime, the
                  <strong style={{ color: '#f5f5f5' }}> Ryobi 80V</strong> is the endurance champion. And if budget
                  matters most, the <strong style={{ color: '#f5f5f5' }}>Greenworks CrossoverZ</strong> delivers
                  serious value.
                </p>
                <p style={{ color: '#a1a1aa' }}>
                  Whichever model you choose, you are looking at lower long-term costs,
                  dramatically less noise, zero emissions, and a mowing experience that
                  is simply more pleasant than gas. The future of lawn care is electric,
                  and in 2026, the technology has arrived.
                </p>
              </div>
            </section>

            {/* Methodology Note */}
            <section className="mb-8">
              <p className="text-xs" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#d4d4d8' }}>How we review:</strong> GreenReviewsHub
                researches manufacturer specifications, aggregates verified owner reviews,
                and analyzes real-world performance data. We do not accept payment for
                placement. Affiliate links may earn a commission at no cost to you, which
                helps support our independent testing. Prices and availability are accurate
                as of publication and may change. Last updated April 21, 2026.
              </p>
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
