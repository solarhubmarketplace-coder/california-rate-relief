import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import {
  ArrowLeft,
  Battery,
  Check,
  ChevronRight,
  Clock,
  Shield,
  Star,
  X,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Electric Skateboards in 2026: Boosted vs Evolve vs Meepo vs WowGo vs Exway vs Backfire',
  description:
    'Compare the best electric skateboards of 2026. In-depth reviews of Boosted Stealth, Evolve GTR, Meepo Hurricane, WowGo 2S Max, Exway X1 Max, and Backfire Zealot S2. Board types, safety tips, and buying guide included.',
  alternates: {
    canonical: '/reviews/best-electric-skateboard',
  },
  openGraph: {
    title: 'Best Electric Skateboards in 2026',
    description:
      'Boosted Stealth vs Evolve GTR vs Meepo Hurricane vs WowGo 2S Max vs Exway X1 Max vs Backfire Zealot S2. Full specs, pros/cons, and buyer guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Skateboards in 2026: Boosted vs Evolve vs Meepo vs WowGo vs Exway vs Backfire',
  description:
    'Compare the best electric skateboards of 2026. In-depth reviews covering Boosted Stealth, Evolve GTR, Meepo Hurricane, WowGo 2S Max, Exway X1 Max, and Backfire Zealot S2 with specs, pros, cons, and buying guide.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-skateboard',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric skateboard in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Boosted Stealth is our top overall pick for 2026. It delivers a refined ride with a 24 mph top speed, 14-mile range, and best-in-class build quality. For budget riders, the WowGo 2S Max offers exceptional value at under $500 with a 28 mph top speed and 14-mile range.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast do electric skateboards go?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most electric skateboards have top speeds between 22 and 35 mph. Budget boards typically top out around 25-28 mph, mid-range boards at 28-32 mph, and premium boards like the Evolve GTR can reach 26 mph with all-terrain capability. The Meepo Hurricane is one of the fastest at 35 mph.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far can an electric skateboard go on one charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range varies significantly by board. Entry-level boards offer 10-14 miles per charge, while premium boards like the Evolve GTR and Meepo Hurricane deliver 20-31 miles. Real-world range depends on rider weight, terrain, speed, and temperature. Hill climbing and headwinds can reduce range by 20-40%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric skateboards legal to ride on public roads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laws vary by state and city. In California, electric skateboards are legal on roads with speed limits under 35 mph and on bike paths, but riders must be 16+ and wear a helmet. Many states have no specific e-skateboard laws, so they fall under general vehicle or pedestrian codes. Always check your local regulations before riding.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do electric skateboard batteries last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most electric skateboard batteries last 300 to 1,000 charge cycles before significant capacity degradation. With average use (charging 3-4 times per week), that translates to roughly 2-5 years of useful battery life. Lithium-ion batteries retain about 80% capacity after 300-500 cycles. Proper care (avoiding full discharges and extreme temperatures) extends lifespan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a hub motor or belt-drive electric skateboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hub motors are quieter, lighter, require less maintenance, and allow the board to roll freely when unpowered. Belt drives deliver more torque, better hill climbing, and smoother braking. Budget riders and commuters often prefer hub motors (WowGo, Meepo), while performance riders favor belt drives (Boosted, Evolve). All-terrain boards typically use belt drives for the extra torque.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a good electric skateboard cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget electric skateboards with solid performance start around $400-600 (WowGo 2S Max, Backfire Zealot S2). Mid-range boards with premium features cost $700-1,200 (Exway X1 Max, Meepo Hurricane). High-end boards from Boosted and Evolve range from $1,400-2,000+. For most riders, the $400-800 range offers the best value.',
      },
    },
  ],
};

interface Board {
  name: string;
  badge: string;
  price: string;
  topSpeed: string;
  range: string;
  weight: string;
  motor: string;
  battery: string;
  hillClimb: string;
  affiliateLink: string;
}

const boards: Board[] = [
  {
    name: 'Boosted Stealth',
    badge: 'Best Overall',
    price: '$1,599',
    topSpeed: '24 mph',
    range: '14 miles',
    weight: '17 lbs',
    motor: 'Dual Belt',
    battery: '199 Wh',
    hillClimb: '25%',
    affiliateLink: '#',
  },
  {
    name: 'Evolve GTR',
    badge: 'Best All-Terrain',
    price: '$1,899',
    topSpeed: '26 mph',
    range: '20 miles',
    weight: '22.5 lbs',
    motor: 'Dual Belt',
    battery: '504 Wh',
    hillClimb: '30%',
    affiliateLink: '#',
  },
  {
    name: 'Meepo Hurricane',
    badge: 'Best Performance',
    price: '$999',
    topSpeed: '35 mph',
    range: '31 miles',
    weight: '28.6 lbs',
    motor: 'Dual Belt',
    battery: '720 Wh',
    hillClimb: '35%',
    affiliateLink: '#',
  },
  {
    name: 'WowGo 2S Max',
    badge: 'Best Budget',
    price: '$449',
    topSpeed: '28 mph',
    range: '14 miles',
    weight: '17.2 lbs',
    motor: 'Dual Hub',
    battery: '216 Wh',
    hillClimb: '20%',
    affiliateLink: '#',
  },
  {
    name: 'Exway X1 Max',
    badge: 'Best Commuter',
    price: '$799',
    topSpeed: '29 mph',
    range: '16 miles',
    weight: '16.3 lbs',
    motor: 'Dual Hub',
    battery: '259 Wh',
    hillClimb: '30%',
    affiliateLink: '#',
  },
  {
    name: 'Backfire Zealot S2',
    badge: 'Best Mid-Range',
    price: '$549',
    topSpeed: '29 mph',
    range: '15 miles',
    weight: '17.6 lbs',
    motor: 'Dual Belt',
    battery: '346 Wh',
    hillClimb: '25%',
    affiliateLink: '#',
  },
];

export default function BestElectricSkateboard() {
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
                Best Electric Skateboards in 2026: Boosted vs Evolve vs Meepo vs WowGo vs Exway vs Backfire
              </h1>
              <div
                className="flex items-center gap-4 text-sm"
                style={{ color: '#a1a1aa' }}
              >
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: '#d4d4d8' }}
              >
                Electric skateboards have exploded in popularity as a green, thrilling last-mile
                commute option. We tested six of the top-selling motorized skateboards of 2026
                across range, speed, hill climbing, ride comfort, and build quality.
              </p>
            </header>

            {/* ========== TABLE OF CONTENTS ========== */}
            <section className="mb-12">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#141414' }}
              >
                <h2 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>Table of Contents</h2>
                <nav>
                  <ul className="space-y-2">
                    {[
                      ['#top-picks', 'Our Top Picks at a Glance'],
                      ['#comparison', 'Spec Comparison Table'],
                      ['#boosted-stealth', '1. Boosted Stealth Review'],
                      ['#evolve-gtr', '2. Evolve GTR Review'],
                      ['#meepo-hurricane', '3. Meepo Hurricane Review'],
                      ['#wowgo-2s-max', '4. WowGo 2S Max Review'],
                      ['#exway-x1-max', '5. Exway X1 Max Review'],
                      ['#backfire-zealot-s2', '6. Backfire Zealot S2 Review'],
                      ['#board-types', 'Electric Skateboard Types Guide'],
                      ['#safety', 'Safety Tips'],
                      ['#faq', 'FAQ'],
                      ['#verdict', 'Final Verdict'],
                    ].map(([href, label]) => (
                      <li key={href}>
                        <a href={href} className="flex items-center gap-2 hover:underline text-sm" style={{ color: '#22c55e' }}>
                          <ChevronRight className="h-3 w-3 flex-shrink-0" />{label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </section>

            {/* ========== TOP PICKS AT A GLANCE ========== */}
            <section id="top-picks" className="mb-14">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Our Top Picks at a Glance
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {boards.map((board) => (
                  <div
                    key={board.name}
                    className="rounded-xl p-5 border transition-all hover:border-opacity-60"
                    style={{
                      backgroundColor: '#141414',
                      borderColor: board.badge === 'Best Overall' ? '#22c55e' : '#333',
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: '#22c55e22',
                          color: '#22c55e',
                        }}
                      >
                        {board.badge}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: '#22c55e' }}
                      >
                        {board.price}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: '#f5f5f5' }}
                    >
                      {board.name}
                    </h3>
                    <div
                      className="grid grid-cols-2 gap-2 text-sm mb-4"
                      style={{ color: '#a1a1aa' }}
                    >
                      <div className="flex items-center gap-1">
                        <Zap className="h-3 w-3" style={{ color: '#22c55e' }} />
                        {board.topSpeed}
                      </div>
                      <div className="flex items-center gap-1">
                        <Battery className="h-3 w-3" style={{ color: '#22c55e' }} />
                        {board.range}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" style={{ color: '#22c55e' }} />
                        {board.motor}
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3" style={{ color: '#22c55e' }} />
                        {board.hillClimb} grade
                      </div>
                    </div>
                    <a
                      href={board.affiliateLink}
                      className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                      style={{ color: '#22c55e' }}
                    >
                      Check Price <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section id="comparison" className="mb-14">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Electric Skateboard Comparison Table
              </h2>
              <div className="overflow-x-auto rounded-xl" style={{ backgroundColor: '#141414' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      {['Board', 'Price', 'Top Speed', 'Range', 'Weight', 'Motor', 'Battery', 'Hill Climb'].map(
                        (header) => (
                          <th
                            key={header}
                            className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide"
                            style={{ color: '#a1a1aa' }}
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {boards.map((board, index) => (
                      <tr
                        key={board.name}
                        style={{
                          borderBottom: index < boards.length - 1 ? '1px solid #222' : 'none',
                        }}
                      >
                        <td className="px-4 py-3 font-semibold" style={{ color: '#f5f5f5' }}>
                          {board.name}
                        </td>
                        <td className="px-4 py-3 font-bold" style={{ color: '#22c55e' }}>
                          {board.price}
                        </td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>
                          {board.topSpeed}
                        </td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>
                          {board.range}
                        </td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>
                          {board.weight}
                        </td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>
                          {board.motor}
                        </td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>
                          {board.battery}
                        </td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>
                          {board.hillClimb}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. Boosted Stealth */}
            <section id="boosted-stealth" className="mb-14">
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Overall
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold mt-2"
                      style={{ color: '#f5f5f5' }}
                    >
                      1. Boosted Stealth
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>
                      $1,599
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                        4.5/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The Boosted Stealth remains the gold standard for premium electric skateboards.
                  Its Super Flex composite deck absorbs road vibrations beautifully, delivering the
                  smoothest ride of any board we tested. The dual belt-drive system punches hard off
                  the line with 2,100W of peak power, and the refined braking feel is unmatched.
                  Boosted&apos;s companion app lets you fine-tune acceleration curves, toggle ride
                  modes (Eco/Expert/Hyper), and monitor battery health in real time.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  At 24 mph, it is not the fastest board on this list, but the combination of
                  predictable power delivery, excellent build quality, and a proven track record
                  makes it hard to beat for daily commuting. The swappable battery system means
                  you can carry a spare for longer rides. The Stealth&apos;s biggest drawback is
                  price: at $1,599, it costs three times as much as budget boards with comparable
                  speed. But if ride feel and reliability matter most, nothing else comes close.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#22c55e' }}
                    >
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Best-in-class ride feel and deck flex
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Smooth, predictable braking
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Swappable battery design
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Proven reliability and strong community
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Excellent companion app with ride modes
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#ef4444' }}
                    >
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Premium price ($1,599)
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        24 mph top speed slower than budget rivals
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Belt drive requires periodic maintenance
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Not water-resistant
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    Check Price <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* 2. Evolve GTR */}
            <section id="evolve-gtr" className="mb-14">
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best All-Terrain
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold mt-2"
                      style={{ color: '#f5f5f5' }}
                    >
                      2. Evolve GTR
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>
                      $1,899
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                        4.3/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The Evolve GTR is the Swiss Army knife of electric skateboards. It ships with both
                  street and all-terrain wheel kits, so you can swap between 97mm urethane street
                  wheels and 7-inch pneumatic AT tires in about 10 minutes. That versatility is
                  unmatched at any price. The 504 Wh battery is one of the largest in the longboard
                  category, delivering up to 20 miles on street wheels and 12-15 miles on all-terrain.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  The dual 1,500W belt motors handle 30% inclines with ease, and the Bluetooth
                  remote includes an LCD screen for speed, battery, and trip data. Eco and Slow
                  modes are great for beginners. At $1,899, the GTR is the priciest board here,
                  and the 22.5 lb weight makes it less ideal for transit carrying.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#22c55e' }}
                    >
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Dual wheel kits (street + all-terrain) included
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Largest battery capacity in category (504 Wh)
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Strong hill climbing (30% grade)
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        LCD remote with ride data
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#ef4444' }}
                    >
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Most expensive board tested ($1,899)
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Heavy at 22.5 lbs
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Historical ESC braking issues (firmware updates available)
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        AT range drops significantly (12-15 miles)
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* 3. Meepo Hurricane */}
            <section id="meepo-hurricane" className="mb-14">
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Performance
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold mt-2"
                      style={{ color: '#f5f5f5' }}
                    >
                      3. Meepo Hurricane
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>
                      $999
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                        4.4/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The Meepo Hurricane is a beast. With a 35 mph top speed and 31-mile range, it
                  dominates every performance metric on this list and does it for under $1,000. The
                  dual belt-drive system generates 3,400W of peak power, letting you blast up 35%
                  grades without breaking a sweat. It uses a bamboo-fiberglass composite deck that
                  flexes just enough to absorb road imperfections while staying stable at speed.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  The massive 720 Wh battery pack is the real story. Most boards in this price
                  range offer 200-350 Wh, so the Hurricane nearly doubles the competition for
                  25+ miles of real-world range. The trade-off is weight: at 28.6 lbs, it is not
                  something you want to carry up stairs. But if raw performance per dollar is your
                  priority, nothing else comes close in 2026.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#22c55e' }}
                    >
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Best performance-to-price ratio
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        35 mph top speed and 31-mile range
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Massive 720 Wh battery pack
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        35% hill climb capability
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Bamboo-fiberglass composite deck
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#ef4444' }}
                    >
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Very heavy at 28.6 lbs
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Large footprint, hard to store
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        4-hour charge time
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Not beginner-friendly at top speed
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* 4. WowGo 2S Max */}
            <section id="wowgo-2s-max" className="mb-14">
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Budget
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold mt-2"
                      style={{ color: '#f5f5f5' }}
                    >
                      4. WowGo 2S Max
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>
                      $449
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                        4.2/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The WowGo 2S Max might be the best value in the electric skateboard market in
                  2026. At $449, it delivers 28 mph top speed and 14 miles of range with a dual
                  hub motor setup. That is comparable performance to boards costing three times as
                  much. The flexible bamboo-maple deck rides comfortably over rough pavement, and
                  the 90mm wheels provide a reasonable balance between speed and cushion.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  Hub motors mean near-silent operation and kick-push capability when the battery
                  dies. The Hobbywing ESC provides four speed modes and smooth braking. Where the
                  2S Max falls short is hill climbing (20% grade), which will struggle on steep
                  San Francisco-style hills. But at this price, those are easy compromises. If you
                  are new to electric skateboarding, this is where to start.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#22c55e' }}
                    >
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Incredible value at $449
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        28 mph top speed rivals premium boards
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Silent hub motors with kick-push capability
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Lightweight at 17.2 lbs
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Smooth Hobbywing ESC with 4 speed modes
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#ef4444' }}
                    >
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Weak hill climbing (20% grade)
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Hub motors have less torque than belt drives
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Smaller 90mm wheels feel bumps more
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        No companion app
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* 5. Exway X1 Max */}
            <section id="exway-x1-max" className="mb-14">
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Commuter
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold mt-2"
                      style={{ color: '#f5f5f5' }}
                    >
                      5. Exway X1 Max
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>
                      $799
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                        4.3/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The Exway X1 Max is engineered for the daily commuter. Its sleek, low-profile
                  design looks more like a premium regular longboard than an e-board. At 16.3 lbs
                  it is the lightest board on this list, making it easy to carry onto trains, buses,
                  or into the office. The Trist remote is one of the best we have used, with a
                  comfortable ergonomic grip and precise thumb-wheel acceleration control.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  The dual hub motors deliver 29 mph and tackle 30% hills, with smart turn signals
                  and integrated tail lights for urban safety. The 259 Wh battery provides 16 miles
                  with a 2-hour fast charge. The Exway app lets you customize acceleration curves,
                  braking intensity, and speed limits. The stiff carbon fiber deck does transmit
                  road vibration, though cloudwheel adapters ($99) help significantly.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#22c55e' }}
                    >
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Lightest board tested (16.3 lbs)
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Best companion app with deep customization
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Integrated tail lights and smart turn signals
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        30% hill climb from hub motors
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        2-hour fast charge
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#ef4444' }}
                    >
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Stiff deck transmits road vibrations
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Cloudwheel adapters recommended but cost extra ($99)
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Hub motor urethane sleeves wear over time
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Limited customer support outside Asia
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* 6. Backfire Zealot S2 */}
            <section id="backfire-zealot-s2" className="mb-14">
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      Best Mid-Range
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold mt-2"
                      style={{ color: '#f5f5f5' }}
                    >
                      6. Backfire Zealot S2
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>
                      $549
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4"
                          style={{ color: s <= 4 ? '#22c55e' : '#333' }}
                          fill={s <= 4 ? '#22c55e' : 'none'}
                        />
                      ))}
                      <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                        4.2/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  The Backfire Zealot S2 sits right in the sweet spot between budget and premium.
                  At $549, it offers a belt-drive system (a rarity below $600), giving you better
                  torque, braking, and hill climbing than hub-motor boards at the same price. The
                  29 mph top speed and 15-mile range are competitive with boards costing $200-400
                  more.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  The flexible bamboo deck rides comfortably, and 96mm Turbo wheels smooth out road
                  imperfections. The 346 Wh battery and dual belt motors handle 25% grades without
                  issue. It lacks a companion app and customizable acceleration curves, and belts
                  need replacing every 500-1,000 miles. But for riders who want belt-drive
                  performance without Boosted prices, the Zealot S2 is an outstanding choice.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#22c55e' }}
                    >
                      <Check className="h-4 w-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Belt drive at a budget price ($549)
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        29 mph top speed with strong torque
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        Comfortable bamboo deck flex
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        96mm Turbo wheels for smoother rides
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        US-based warehouse (fast shipping)
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                    <h4
                      className="text-sm font-semibold mb-3 flex items-center gap-2"
                      style={{ color: '#ef4444' }}
                    >
                      <X className="h-4 w-4" /> Cons
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Belt drive needs periodic maintenance
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        No companion app
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Noisier than hub motor boards
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        Cannot roll freely when unpowered
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* ========== BOARD TYPES GUIDE ========== */}
            <section id="board-types" className="mb-14">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Electric Skateboard Types: Which One Is Right for You?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                Electric skateboards come in three main form factors. Understanding the differences
                helps you pick the right board.
              </p>

              <div className="grid gap-4">
                {[
                  {
                    icon: 'zap',
                    title: 'Shortboard (Mini / Penny Style)',
                    desc: 'Compact boards (under 30 inches) designed for portability and last-mile commuting. They fit in backpacks and under desks. Typically 8-12 lbs with 5-10 mile range and 15-22 mph top speed. Best for campus riders and short commutes.',
                    stats: ['8-12 lbs', '5-10 mi', '15-22 mph', '$200-$500'],
                  },
                  {
                    icon: 'battery',
                    title: 'Longboard (Street / Commuter)',
                    desc: 'The most popular category. Longboards (36-42 inches) balance stability, range, and speed. Most boards in our top 6 fall here. Ideal for daily commuters and recreational riders who want the best all-around experience.',
                    stats: ['15-22 lbs', '12-25 mi', '24-35 mph', '$400-$2,000'],
                  },
                  {
                    icon: 'shield',
                    title: 'All-Terrain (Off-Road / Mountain)',
                    desc: 'Built for going beyond paved roads with large pneumatic tires (6-8 inches) that handle gravel, dirt, and grass. Heavier and shorter-range but opens up new riding possibilities. The Evolve GTR is a standout example.',
                    stats: ['22-35 lbs', '10-20 mi', '20-28 mph', '$800-$3,000'],
                  },
                ].map((type) => (
                  <div key={type.title} className="rounded-xl p-6" style={{ backgroundColor: '#141414' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#22c55e22' }}>
                        {type.icon === 'zap' && <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />}
                        {type.icon === 'battery' && <Battery className="h-5 w-5" style={{ color: '#22c55e' }} />}
                        {type.icon === 'shield' && <Shield className="h-5 w-5" style={{ color: '#22c55e' }} />}
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>{type.title}</h3>
                    </div>
                    <p className="leading-relaxed mb-4 text-sm" style={{ color: '#d4d4d8' }}>{type.desc}</p>
                    <div className="grid grid-cols-4 gap-3 text-sm">
                      {['Weight', 'Range', 'Speed', 'Price'].map((label, i) => (
                        <div key={label} className="rounded-lg p-2 text-center" style={{ backgroundColor: '#171717' }}>
                          <div className="font-semibold text-xs" style={{ color: '#22c55e' }}>{label}</div>
                          <div style={{ color: '#d4d4d8' }}>{type.stats[i]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== SAFETY SECTION ========== */}
            <section id="safety" className="mb-14">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Electric Skateboard Safety: What Every Rider Needs to Know
              </h2>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  Electric skateboards are faster and heavier than traditional boards. Crashes at
                  25+ mph can cause serious injury. These safety practices are non-negotiable.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { title: 'Always Wear a Helmet', text: 'CPSC or MIPS certified. Full-face recommended above 30 mph.' },
                    { title: 'Start in Beginner Mode', text: 'Spend 10-20 hours at the lowest speed setting before moving up.' },
                    { title: 'Wear Slide Gloves and Pads', text: 'Wrist injuries are the most common. Slide gloves and knee pads are essential.' },
                    { title: 'Inspect Before Every Ride', text: 'Check trucks, wheels, belts, battery, and remote connection before riding.' },
                    { title: 'Ride Defensively', text: 'Assume drivers cannot see you. Use bike lanes, signal turns, avoid night rides without lights.' },
                    { title: 'Know Your Local Laws', text: 'In California, legal on roads under 35 mph for riders 16+. Helmet required. Laws vary by state.' },
                  ].map((tip) => (
                    <div key={tip.title} className="rounded-lg p-4" style={{ backgroundColor: '#171717' }}>
                      <h3 className="font-semibold mb-1 flex items-center gap-2 text-sm" style={{ color: '#f5f5f5' }}>
                        <Shield className="h-4 w-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {tip.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>{tip.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section id="faq" className="mb-14">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((item, index) => (
                  <details
                    key={index}
                    className="group rounded-xl border"
                    style={{ backgroundColor: '#141414', borderColor: '#333' }}
                  >
                    <summary
                      className="cursor-pointer px-4 py-4 font-semibold flex items-center justify-between text-sm md:text-base"
                      style={{ color: '#f5f5f5' }}
                    >
                      {item.name}
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
                    </summary>
                    <div
                      className="px-4 pb-4 leading-relaxed text-sm md:text-base"
                      style={{ color: '#a1a1aa' }}
                    >
                      {item.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ========== FINAL VERDICT ========== */}
            <section id="verdict" className="mb-14">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Final Verdict: Which Electric Skateboard Should You Buy?
              </h2>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#141414' }}>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      label: 'Best Overall',
                      board: 'Boosted Stealth ($1,599)',
                      reason:
                        'Unmatched ride quality, smooth braking, proven reliability. If you can afford the premium, it is the most satisfying board to ride every day.',
                    },
                    {
                      label: 'Best for Off-Road',
                      board: 'Evolve GTR ($1,899)',
                      reason:
                        'The only board with interchangeable street and all-terrain wheel kits. Biggest battery in category. Worth the price if you want maximum versatility.',
                    },
                    {
                      label: 'Best Performance',
                      board: 'Meepo Hurricane ($999)',
                      reason:
                        'Fastest top speed (35 mph), longest range (31 mi), strongest hill climbing (35%). Unbeatable performance per dollar but heavy at 28.6 lbs.',
                    },
                    {
                      label: 'Best Budget',
                      board: 'WowGo 2S Max ($449)',
                      reason:
                        'The best entry point into electric skateboarding. 28 mph and 14-mile range for under $450. Perfect for first-time riders.',
                    },
                    {
                      label: 'Best Commuter',
                      board: 'Exway X1 Max ($799)',
                      reason:
                        'Lightest board, best app, integrated lights. Designed from the ground up for urban daily commuting.',
                    },
                    {
                      label: 'Best Mid-Range',
                      board: 'Backfire Zealot S2 ($549)',
                      reason:
                        'Belt-drive performance at a budget price. The sweet spot for riders who want more torque and hill power than hub motors offer.',
                    },
                  ].map((pick) => (
                    <div
                      key={pick.label}
                      className="flex gap-4 items-start rounded-lg p-4"
                      style={{ backgroundColor: '#171717' }}
                    >
                      <div
                        className="text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap mt-0.5"
                        style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                      >
                        {pick.label}
                      </div>
                      <div>
                        <div className="font-bold mb-1" style={{ color: '#f5f5f5' }}>
                          {pick.board}
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                          {pick.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                  For most riders, we recommend the <strong style={{ color: '#f5f5f5' }}>WowGo 2S Max</strong> (budget) or the <strong style={{ color: '#f5f5f5' }}>Backfire Zealot S2</strong> (belt-drive value). If money is no object, the <strong style={{ color: '#f5f5f5' }}>Boosted Stealth</strong> remains the board to beat.
                </p>
                <p className="leading-relaxed text-xs" style={{ color: '#a1a1aa' }}>
                  Prices accurate as of April 2026. GreenVerdict may earn a commission from affiliate links. This does not influence our ratings.
                </p>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>Ready to Ride Electric?</h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>Explore our full lineup of electric vehicle reviews and green transportation guides.</p>
                <Link href="/reviews" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:opacity-90" style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}>
                  Browse All Reviews <ChevronRight className="h-5 w-5" />
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
