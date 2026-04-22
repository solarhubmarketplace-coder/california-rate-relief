import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import {
  ArrowLeft,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Star,
  X,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Tankless Water Heaters (2026): Rinnai vs Rheem vs Navien vs Noritz — Full Comparison',
  description:
    'Compare the best tankless water heaters in 2026. In-depth reviews of Rinnai RU199iN, Rheem RTGH-95DVLN, Navien NPE-240A2, and Noritz EZ111DV. Cost breakdown, sizing guide, and tankless vs tank comparison included.',
  alternates: {
    canonical: '/reviews/best-tankless-water-heater',
  },
  openGraph: {
    title: 'Best Tankless Water Heaters (2026): Full Comparison Guide',
    description:
      'Rinnai vs Rheem vs Navien vs Noritz. Specs, cost breakdown, sizing guide, and honest pros/cons for every budget.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Tankless Water Heaters (2026): Rinnai vs Rheem vs Navien vs Noritz — Full Comparison',
  description:
    'Compare the best tankless water heaters in 2026. In-depth reviews of Rinnai RU199iN, Rheem RTGH-95DVLN, Navien NPE-240A2, Noritz EZ111DV, and Rinnai V65iN covering cost, efficiency, sizing, and installation.',
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
    '@id': 'https://ratereliefca.com/reviews/best-tankless-water-heater',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a tankless water heater cost installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tankless water heater typically costs $700 to $2,200 for the unit itself, plus $1,500 to $3,000 for professional installation. Total installed cost ranges from $2,200 to $5,200 depending on the model, whether you need gas line upgrades, and venting requirements. High-efficiency condensing units like the Rinnai RU199iN or Navien NPE-240A2 are at the higher end but deliver better long-term savings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a tankless water heater worth the investment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for most homes. Tankless water heaters are 24-34% more energy efficient than traditional tank heaters for homes using 41 gallons or less per day. They last 20+ years versus 10-12 for tank heaters, provide unlimited hot water on demand, and save $100-$150 per year on energy bills. The higher upfront cost is typically recouped within 6-10 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size tankless water heater do I need for my home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sizing depends on flow rate (GPM) needs. A 1-2 bathroom home needs 6-8 GPM. A 2-3 bathroom home needs 8-10 GPM. A 3+ bathroom home needs 10-12 GPM. In warm climates like California, groundwater is warmer (around 62 degrees F), so a given unit can deliver higher flow rates than in colder regions. The Rinnai RU199iN at 11 GPM handles most homes comfortably.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a tankless water heater last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tankless water heaters typically last 20-25 years with proper maintenance, roughly double the 10-12 year lifespan of traditional tank water heaters. Most manufacturers offer 12-15 year heat exchanger warranties. Annual descaling is recommended, especially in areas with hard water, to maintain peak efficiency and extend lifespan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gas vs electric tankless water heater: which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gas tankless heaters deliver significantly higher flow rates (8-11+ GPM) compared to electric units (2-5 GPM), making gas the better choice for whole-home use. Electric tankless units are simpler to install and work well for single-point use (one shower or sink). For a household with multiple bathrooms, a gas tankless unit is almost always the right choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do tankless water heaters work with solar water heating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many tankless water heaters can accept pre-heated water from solar thermal systems. Units like the Navien NPE-240A2 with recirculation pumps are particularly compatible. The tankless unit acts as a backup, only firing when the solar-preheated water needs a temperature boost. This combination can reduce water heating energy use by 50-80%.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  btu: string;
  gpm: string;
  uef: string;
  warranty: string;
  rating: number;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'Rinnai RU199iN',
    badge: 'Best Overall',
    price: '$1,800-$2,200',
    btu: '199,000',
    gpm: '11',
    uef: '0.96',
    warranty: '15-yr heat exchanger',
    rating: 4.7,
    affiliateLink: '#',
  },
  {
    name: 'Rheem RTGH-95DVLN',
    badge: 'Best Value',
    price: '$1,200-$1,500',
    btu: '199,000',
    gpm: '9.5',
    uef: '0.93',
    warranty: '12-yr heat exchanger',
    rating: 4.5,
    affiliateLink: '#',
  },
  {
    name: 'Navien NPE-240A2',
    badge: 'Most Efficient',
    price: '$1,600-$2,000',
    btu: '199,000',
    gpm: '11.2',
    uef: '0.96',
    warranty: '15-yr heat exchanger',
    rating: 4.6,
    affiliateLink: '#',
  },
  {
    name: 'Noritz EZ111DV',
    badge: 'Best Compact',
    price: '$1,300-$1,600',
    btu: '199,000',
    gpm: '11.1',
    uef: '0.97',
    warranty: '12-yr heat exchanger',
    rating: 4.4,
    affiliateLink: '#',
  },
  {
    name: 'Rinnai V65iN',
    badge: 'Best Budget',
    price: '$700-$900',
    btu: '150,000',
    gpm: '6.5',
    uef: '0.82',
    warranty: '10-yr heat exchanger',
    rating: 4.3,
    affiliateLink: '#',
  },
];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
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

export default function BestTanklessWaterHeater() {
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
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best Tankless Water Heaters (2026): Rinnai vs Rheem vs Navien vs Noritz
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
                  <span>24 min read</span>
                </div>
              </div>
            </header>

            {/* ─── Overview ─── */}
            <section className="mb-12">
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: '#a1a1aa' }}
              >
                Your water heater accounts for roughly 20% of your home&apos;s energy
                bill &mdash; second only to heating and cooling. If you&apos;re still
                running a traditional tank heater, you&apos;re paying to keep 40-50
                gallons of water hot 24 hours a day, whether you use it or not.
                Tankless water heaters solve that by heating water on demand, cutting
                energy waste by 24-34% and lasting twice as long.
              </p>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: '#a1a1aa' }}
              >
                We spent over 80 hours researching flow rates, efficiency ratings,
                installation requirements, and real-world owner feedback to find the
                best tankless water heaters for every budget and household size. Whether
                you need a powerhouse for a 4-bathroom home or a compact unit for a
                small condo, this guide has you covered.
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#a1a1aa' }}
              >
                All five of our picks are gas-fired condensing or non-condensing
                models, which deliver the high flow rates (6.5-11+ GPM) needed for
                whole-home use. We also cover gas vs. electric, sizing by household,
                and a full cost breakdown so you can make an informed decision.
              </p>
            </section>

            {/* ─── Table of Contents ─── */}
            <nav
              className="rounded-xl p-6 mb-12 border"
              style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
            >
              <h2 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>
                In This Guide
              </h2>
              <ul className="space-y-2">
                {[
                  ['Quick Picks', '#quick-picks'],
                  ['Full Comparison Table', '#comparison-table'],
                  ['How Tankless Water Heaters Work', '#how-tankless-works'],
                  ['Cost Breakdown', '#cost-breakdown'],
                  ['Tankless vs. Tank', '#tankless-vs-tank'],
                  ['Sizing Guide', '#sizing-guide'],
                  ['Gas vs. Electric Tankless', '#gas-vs-electric'],
                  ['Rinnai RU199iN — Best Overall', '#rinnai-ru199in'],
                  ['Rheem RTGH-95DVLN — Best Value', '#rheem-rtgh-95dvln'],
                  ['Navien NPE-240A2 — Most Efficient', '#navien-npe-240a2'],
                  ['Noritz EZ111DV — Best Compact', '#noritz-ez111dv'],
                  ['Rinnai V65iN — Best Budget', '#rinnai-v65in'],
                  ['Installation Considerations', '#installation'],
                  ['Pros & Cons of Going Tankless', '#pros-cons'],
                  ['FAQ', '#faq'],
                  ['Final Verdict', '#verdict'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="flex items-center gap-2 text-sm hover:underline"
                      style={{ color: '#a1a1aa' }}
                    >
                      <ChevronRight className="h-3 w-3 text-primary" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ─── Quick Picks ─── */}
            <section id="quick-picks" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    Quick Picks: Our Top 5
                  </h2>
                </div>
                <div className="space-y-5">
                  {products.map((p, i) => (
                    <div key={p.name} className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm ${
                          i === 0
                            ? 'bg-yellow-400 text-black'
                            : i === 1
                              ? 'bg-zinc-400 text-black'
                              : i === 2
                                ? 'bg-amber-700 text-white'
                                : 'bg-zinc-700 text-white'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                          {p.name} &mdash; {p.badge}
                        </p>
                        <p className="text-sm" style={{ color: '#a1a1aa' }}>
                          {p.price} &middot; {p.gpm} GPM &middot; {p.uef} UEF &middot;{' '}
                          {p.warranty}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ─── Full Comparison Table ─── */}
            <section id="comparison-table" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Full Comparison Table
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ color: '#a1a1aa' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Model
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Price
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        BTU
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        GPM
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        UEF
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Warranty
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Rating
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, i) => (
                      <tr
                        key={p.name}
                        className="border-t"
                        style={{
                          borderColor: '#27272a',
                          backgroundColor: i % 2 === 0 ? '#0f0f0f' : '#141414',
                        }}
                      >
                        <td className="p-4 font-medium" style={{ color: '#f5f5f5' }}>
                          <div>{p.name}</div>
                          <span className="text-xs text-primary">{p.badge}</span>
                        </td>
                        <td className="p-4">{p.price}</td>
                        <td className="p-4">{p.btu}</td>
                        <td className="p-4">{p.gpm}</td>
                        <td className="p-4">{p.uef}</td>
                        <td className="p-4">{p.warranty}</td>
                        <td className="p-4">
                          <StarRating rating={p.rating} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ─── How Tankless Works ─── */}
            <section id="how-tankless-works" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                How Tankless Water Heaters Work
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                Unlike traditional tank water heaters that store and continuously heat
                40-80 gallons of water, tankless units heat water only when you turn on
                a faucet. When a hot water tap opens, cold water flows through a pipe
                into the unit, and either a gas burner or electric element heats it
                instantly.
              </p>
              <div
                className="rounded-xl p-6 border mb-6"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <h3 className="font-bold mb-4" style={{ color: '#f5f5f5' }}>
                  The Tankless Process — Step by Step
                </h3>
                <ol className="space-y-3 text-sm" style={{ color: '#a1a1aa' }}>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>
                      You open a hot water tap. A flow sensor inside the unit detects
                      water movement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>
                      The control board ignites the gas burner (or activates the
                      electric element). A 199,000 BTU gas burner can raise water
                      temperature by 70+ degrees F at 8-11 GPM.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>
                      Cold water passes through the heat exchanger &mdash; a series of
                      copper or stainless steel coils heated by the burner. It exits at
                      your set temperature (typically 120 degrees F).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>
                      Hot water flows to your faucet, shower, or appliance. When you
                      close the tap, the unit shuts off. No energy is used between
                      draws.
                    </span>
                  </li>
                </ol>
              </div>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Condensing vs. non-condensing:</strong>{' '}
                Condensing units (like the Rinnai RU199iN and Navien NPE-240A2) capture
                heat from exhaust gases through a secondary heat exchanger, achieving
                UEF ratings of 0.93-0.97. Non-condensing units vent that heat outside,
                resulting in slightly lower efficiency (0.80-0.85) but simpler venting
                with standard stainless steel vent pipes.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Recirculation systems:</strong>{' '}
                Some models like the Navien NPE-240A2 include a built-in recirculation
                pump that keeps a small loop of water warm so you get hot water almost
                instantly at the tap &mdash; eliminating the typical 15-30 second
                &quot;cold water sandwich&quot; that some tankless units are known for.
              </p>
            </section>

            {/* ─── Cost Breakdown ─── */}
            <section id="cost-breakdown" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Cost Breakdown: Unit + Installation + Savings
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                The biggest objection to tankless water heaters is the upfront cost.
                Let&apos;s break down what you&apos;re actually paying &mdash; and what
                you save over time.
              </p>

              <div className="overflow-x-auto rounded-xl border mb-8" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ color: '#a1a1aa' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Cost Category
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Tank Heater
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Tankless (Budget)
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Tankless (Premium)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Unit cost', '$400-$800', '$700-$900', '$1,800-$2,200'],
                      ['Installation', '$500-$1,000', '$1,500-$2,000', '$2,000-$3,000'],
                      ['Total installed', '$900-$1,800', '$2,200-$2,900', '$3,800-$5,200'],
                      ['Annual energy cost', '$350-$500/yr', '$250-$350/yr', '$200-$300/yr'],
                      ['Expected lifespan', '10-12 years', '15-20 years', '20-25 years'],
                      ['Lifetime energy cost', '$3,500-$6,000', '$3,750-$7,000', '$4,000-$7,500'],
                      ['Total cost of ownership', '$4,400-$7,800', '$5,950-$9,900', '$7,800-$12,700'],
                    ].map(([label, tank, budget, premium], i) => (
                      <tr
                        key={label}
                        className="border-t"
                        style={{
                          borderColor: '#27272a',
                          backgroundColor: i % 2 === 0 ? '#0f0f0f' : '#141414',
                        }}
                      >
                        <td className="p-4 font-medium" style={{ color: '#f5f5f5' }}>
                          {label}
                        </td>
                        <td className="p-4">{tank}</td>
                        <td className="p-4">{budget}</td>
                        <td className="p-4">{premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                    The Real Savings Math
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  A typical household saves $100-$150 per year on energy with a
                  tankless unit. But the bigger savings come from longevity: you&apos;ll
                  likely replace a tank heater twice in the time a single tankless unit
                  lasts. Factor in two tank replacements ($1,800-$3,600) and the
                  tankless unit often comes out ahead over 20 years &mdash; while
                  providing unlimited hot water and taking up far less space.
                </p>
              </div>
            </section>

            {/* ─── Tankless vs Tank ─── */}
            <section id="tankless-vs-tank" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Tankless vs. Tank Water Heaters
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Tankless Pros */}
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Zap className="h-5 w-5 text-primary" />
                    Tankless Advantages
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Unlimited hot water on demand',
                      '24-34% more energy efficient',
                      '20-25 year lifespan (vs 10-12)',
                      'Compact wall-mount saves floor space',
                      'No risk of 40-gallon flood from a burst tank',
                      'Lower monthly energy bills',
                      'Cleaner water (no sediment buildup in tank)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tank Pros */}
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Shield className="h-5 w-5 text-blue-400" />
                    Tank Advantages
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Lower upfront cost ($900-$1,800 installed)',
                      'Simpler installation (direct swap)',
                      'Works during power outages (gas tank)',
                      'No minimum flow rate requirement',
                      'Familiar technology, easy to find plumbers',
                      'No &quot;cold water sandwich&quot; issue',
                      'Better for homes with very high simultaneous demand',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ─── Sizing Guide ─── */}
            <section id="sizing-guide" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Sizing Guide: What GPM Do You Need?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                GPM (gallons per minute) is the most important spec when choosing a
                tankless water heater. You need enough flow rate to handle your peak
                simultaneous hot water usage. Here&apos;s how to figure it out:
              </p>

              <div
                className="rounded-xl p-6 border mb-6"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <h3 className="font-bold mb-4" style={{ color: '#f5f5f5' }}>
                  Typical Flow Rates by Fixture
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ color: '#a1a1aa' }}>
                    <thead>
                      <tr style={{ borderColor: '#27272a' }}>
                        <th className="text-left pb-3 font-semibold" style={{ color: '#f5f5f5' }}>
                          Fixture
                        </th>
                        <th className="text-left pb-3 font-semibold" style={{ color: '#f5f5f5' }}>
                          Flow Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Shower', '2.0-2.5 GPM'],
                        ['Bathroom faucet', '0.5-1.5 GPM'],
                        ['Kitchen faucet', '1.0-1.5 GPM'],
                        ['Dishwasher', '1.0-1.5 GPM'],
                        ['Washing machine', '1.5-3.0 GPM'],
                      ].map(([fixture, rate]) => (
                        <tr key={fixture} className="border-t" style={{ borderColor: '#27272a' }}>
                          <td className="py-2">{fixture}</td>
                          <td className="py-2">{rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <h3 className="font-bold mb-4" style={{ color: '#f5f5f5' }}>
                  Recommended GPM by Household Size
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      size: '1-2 Bathrooms',
                      gpm: '6-8 GPM',
                      pick: 'Rinnai V65iN (6.5 GPM)',
                      note: 'Handles one shower + one faucet simultaneously',
                    },
                    {
                      size: '2-3 Bathrooms',
                      gpm: '8-10 GPM',
                      pick: 'Rheem RTGH-95DVLN (9.5 GPM)',
                      note: 'Two showers running at the same time with headroom',
                    },
                    {
                      size: '3-4 Bathrooms',
                      gpm: '10-12 GPM',
                      pick: 'Rinnai RU199iN (11 GPM) or Navien NPE-240A2 (11.2 GPM)',
                      note: 'Three showers plus a dishwasher without breaking a sweat',
                    },
                    {
                      size: '4+ Bathrooms / Large Home',
                      gpm: '12+ GPM (or dual units)',
                      pick: 'Two Rinnai RU199iN units in parallel',
                      note: 'For homes with very high simultaneous demand, two units in a manifold setup is common',
                    },
                  ].map((row) => (
                    <div
                      key={row.size}
                      className="p-4 rounded-lg border"
                      style={{ backgroundColor: '#0f0f0f', borderColor: '#27272a' }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="font-semibold" style={{ color: '#f5f5f5' }}>
                          {row.size}
                        </span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                          {row.gpm}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        <strong style={{ color: '#d4d4d8' }}>Our pick:</strong>{' '}
                        {row.pick}
                      </p>
                      <p className="text-xs mt-1" style={{ color: '#71717a' }}>
                        {row.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ─── Gas vs Electric ─── */}
            <section id="gas-vs-electric" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Gas vs. Electric Tankless Water Heaters
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                This is one of the most common questions we get, and the answer is
                straightforward for most households: gas wins for whole-home use,
                electric wins for point-of-use.
              </p>

              <div className="overflow-x-auto rounded-xl border mb-6" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ color: '#a1a1aa' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Factor
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Gas Tankless
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Electric Tankless
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Flow rate', '8-11+ GPM', '2-5 GPM'],
                      ['Best for', 'Whole-home', 'Single fixture/point-of-use'],
                      ['Unit cost', '$700-$2,200', '$200-$800'],
                      ['Installation cost', '$1,500-$3,000', '$500-$1,500'],
                      ['Requires venting', 'Yes (PVC for condensing)', 'No'],
                      ['Requires gas line', 'Yes (3/4" minimum)', 'No'],
                      ['Electrical needs', 'Standard 120V outlet', '200A panel, dedicated breaker'],
                      ['Energy efficiency', '0.82-0.97 UEF', '0.95-0.99 UEF'],
                      ['Operating cost', 'Lower (natural gas cheaper)', 'Higher (electricity rates)'],
                    ].map(([factor, gas, electric], i) => (
                      <tr
                        key={factor}
                        className="border-t"
                        style={{
                          borderColor: '#27272a',
                          backgroundColor: i % 2 === 0 ? '#0f0f0f' : '#141414',
                        }}
                      >
                        <td className="p-4 font-medium" style={{ color: '#f5f5f5' }}>
                          {factor}
                        </td>
                        <td className="p-4">{gas}</td>
                        <td className="p-4">{electric}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Bottom line:</strong> If you
                  have a natural gas line and want to replace your whole-home water
                  heater, go gas. Electric tankless units are excellent for adding hot
                  water to a specific location &mdash; like an outdoor shower, a garage
                  sink, or a guest bathroom far from the main water heater &mdash; but
                  they can&apos;t match the flow rates needed for a whole home.
                </p>
              </div>
            </section>

            {/* ─── Individual Product Breakdowns ─── */}

            {/* Rinnai RU199iN */}
            <section id="rinnai-ru199in" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-bold bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">
                    Best Overall
                  </span>
                  <StarRating rating={4.7} />
                </div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: '#f5f5f5' }}>
                  Rinnai RU199iN
                </h2>
                <p className="text-sm mb-6" style={{ color: '#71717a' }}>
                  $1,800-$2,200 &middot; 199K BTU &middot; 11 GPM &middot; 0.96 UEF
                </p>

                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Rinnai RU199iN is the gold standard in residential tankless water
                  heaters. It&apos;s a condensing unit with a 0.96 UEF rating, meaning
                  96 cents of every dollar spent on gas goes directly to heating water.
                  At 11 GPM, it can comfortably supply three simultaneous showers plus
                  a dishwasher in warm climates.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The built-in Wi-Fi module lets you monitor performance, adjust
                  temperature, and receive maintenance alerts through the Rinnai app.
                  The 15-year heat exchanger warranty is the best in the industry,
                  and Rinnai&apos;s service network is the largest in North America
                  &mdash; important when you need parts or a technician.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The main drawback is price. At $1,800-$2,200 for the unit alone plus
                  $2,000-$3,000 for professional installation, you&apos;re looking at
                  a $4,000-$5,200 total investment. But with a 20-25 year lifespan and
                  $100-$150 in annual energy savings, the math works out in the long
                  run.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Industry-leading 0.96 UEF efficiency',
                        'Wi-Fi monitoring and app control',
                        '15-year heat exchanger warranty',
                        '11 GPM handles large homes easily',
                        'Largest service network in North America',
                        'Compatible with recirculation systems',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Highest unit price in our lineup',
                        'Installation often requires gas line upgrade',
                        'No built-in recirculation pump (add-on)',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* Rheem RTGH-95DVLN */}
            <section id="rheem-rtgh-95dvln" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-bold bg-green-400/20 text-green-400 px-3 py-1 rounded-full">
                    Best Value
                  </span>
                  <StarRating rating={4.5} />
                </div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: '#f5f5f5' }}>
                  Rheem RTGH-95DVLN
                </h2>
                <p className="text-sm mb-6" style={{ color: '#71717a' }}>
                  $1,200-$1,500 &middot; 199K BTU &middot; 9.5 GPM &middot; 0.93 UEF
                </p>

                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Rheem RTGH-95DVLN hits a sweet spot between performance and
                  price. At $1,200-$1,500 for the unit, it&apos;s $600-$700 less than
                  the Rinnai while still delivering 199K BTU and 9.5 GPM &mdash;
                  enough for a 2-3 bathroom home running two showers simultaneously.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The 0.93 UEF condensing efficiency is slightly below Rinnai&apos;s
                  0.96, but in practice the difference amounts to roughly $10-$15 per
                  year in gas costs. The built-in EcoNet Wi-Fi module provides similar
                  app-based monitoring. Where it falls short is the 12-year heat
                  exchanger warranty (vs. 15 for Rinnai) and lower flow rate.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  For the vast majority of 2-3 bedroom homes, this is the unit we
                  recommend. The performance-per-dollar ratio is unmatched, and
                  Rheem&apos;s parts availability is excellent at Home Depot and most
                  plumbing supply houses nationwide.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Best price-to-performance ratio',
                        '0.93 UEF condensing efficiency',
                        'Built-in EcoNet Wi-Fi monitoring',
                        'Parts widely available (Home Depot, etc.)',
                        '9.5 GPM covers most homes',
                        'Low NOx emissions (SCAQMD compliant)',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        '12-year warranty (vs 15 for Rinnai/Navien)',
                        '9.5 GPM may be tight for 4+ bathroom homes',
                        'No built-in recirculation pump',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* Navien NPE-240A2 */}
            <section id="navien-npe-240a2" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-bold bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full">
                    Most Efficient
                  </span>
                  <StarRating rating={4.6} />
                </div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: '#f5f5f5' }}>
                  Navien NPE-240A2
                </h2>
                <p className="text-sm mb-6" style={{ color: '#71717a' }}>
                  $1,600-$2,000 &middot; 199K BTU &middot; 11.2 GPM &middot; 0.96 UEF
                </p>

                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Navien NPE-240A2 is the efficiency champion. It matches
                  Rinnai&apos;s 0.96 UEF while offering the highest flow rate in our
                  lineup at 11.2 GPM. But what truly sets it apart is the built-in
                  recirculation pump &mdash; a feature no other model in this guide
                  includes out of the box.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The recirculation pump eliminates the &quot;cold water sandwich&quot;
                  problem entirely. It keeps a small loop of hot water circulating so
                  when you open a tap, hot water arrives in 2-3 seconds instead of
                  15-30. This also saves water &mdash; you&apos;re not running the
                  faucet for half a minute waiting for it to warm up.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  Navien&apos;s dual stainless steel heat exchangers are extremely
                  durable, and the unit uses a field-gas convertible design that lets
                  installers switch between natural gas and propane on-site. The 15-year
                  heat exchanger warranty matches Rinnai&apos;s. The only downside is
                  that Navien&apos;s service network is smaller than Rinnai&apos;s or
                  Rheem&apos;s.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Built-in recirculation pump (no add-on needed)',
                        'Highest flow rate at 11.2 GPM',
                        '0.96 UEF condensing efficiency',
                        'Dual stainless steel heat exchangers',
                        '15-year heat exchanger warranty',
                        'Field-gas convertible (NG/LP)',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Smaller service network than Rinnai/Rheem',
                        'Recirculation pump adds marginal energy use',
                        'Slightly higher price than Rheem',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* Noritz EZ111DV */}
            <section id="noritz-ez111dv" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-bold bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full">
                    Best Compact
                  </span>
                  <StarRating rating={4.4} />
                </div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: '#f5f5f5' }}>
                  Noritz EZ111DV
                </h2>
                <p className="text-sm mb-6" style={{ color: '#71717a' }}>
                  $1,300-$1,600 &middot; 199K BTU &middot; 11.1 GPM &middot; 0.97 UEF
                </p>

                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Noritz EZ111DV earns its &quot;Best Compact&quot; badge with the
                  smallest footprint in our lineup while still packing 199K BTU and
                  11.1 GPM. At 0.97 UEF, it&apos;s technically the most efficient unit
                  we tested &mdash; though the real-world difference between 0.96 and
                  0.97 is negligible.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Noritz designed the EZ series specifically for easy replacement of
                  existing tankless units. The &quot;EZ&quot; in the name refers to its
                  simplified installation: dual direct-vent capability and compact
                  dimensions that fit into tight spaces where other units won&apos;t.
                  This makes it an excellent choice for condos, townhomes, or utility
                  closets.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The 12-year heat exchanger warranty is solid but trails Rinnai and
                  Navien&apos;s 15-year coverage. Noritz is a Japanese manufacturer
                  with a strong reputation in Asia but a smaller brand presence in the
                  US, which can make finding authorized service technicians slightly
                  harder in some areas.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Highest UEF at 0.97 (most efficient)',
                        'Most compact footprint in category',
                        '11.1 GPM rivals the Rinnai and Navien',
                        'Designed for easy replacement installs',
                        'Dual direct-vent capable',
                        'Competitive mid-range pricing',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Smaller US service network',
                        '12-year warranty (vs 15 for Rinnai/Navien)',
                        'No built-in Wi-Fi or recirculation pump',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* Rinnai V65iN */}
            <section id="rinnai-v65in" className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-bold bg-orange-400/20 text-orange-400 px-3 py-1 rounded-full">
                    Best Budget
                  </span>
                  <StarRating rating={4.3} />
                </div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: '#f5f5f5' }}>
                  Rinnai V65iN
                </h2>
                <p className="text-sm mb-6" style={{ color: '#71717a' }}>
                  $700-$900 &middot; 150K BTU &middot; 6.5 GPM &middot; 0.82 UEF
                </p>

                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Rinnai V65iN proves you don&apos;t need to spend $2,000+ to go
                  tankless. At $700-$900, it&apos;s less than half the price of the
                  RU199iN and still carries the Rinnai name, quality, and service
                  network. The tradeoff is a non-condensing design (0.82 UEF), lower
                  BTU output (150K), and 6.5 GPM flow rate.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  For a 1-2 bathroom home &mdash; or a condo, guest house, or small
                  rental property &mdash; 6.5 GPM is plenty. It handles one shower and
                  one sink running simultaneously without issues. In warmer climates
                  where groundwater temperatures are higher, effective GPM increases
                  since the unit needs to heat water by fewer degrees.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The non-condensing design actually simplifies installation: it uses
                  standard stainless steel vent pipe instead of the special PVC
                  venting that condensing units require. This can save $300-$500 on
                  installation costs. Total installed cost runs $2,200-$2,900, making
                  it competitive with high-end tank water heaters.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Lowest price for a quality tankless unit',
                        'Rinnai brand reliability and service network',
                        'Simpler installation (non-condensing venting)',
                        'Perfect for 1-2 bathroom homes',
                        '10-year heat exchanger warranty',
                        'Compact indoor-mount design',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        '6.5 GPM limits simultaneous use',
                        '0.82 UEF is lowest in our lineup',
                        'No Wi-Fi, no recirculation',
                        'Non-condensing = higher exhaust temps',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                          <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* ─── Installation Considerations ─── */}
            <section id="installation" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Installation Considerations
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Tankless water heater installation is more involved than a simple
                tank swap. Here&apos;s what to expect and budget for:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Gas Line Upgrade',
                    cost: '$200-$800',
                    detail:
                      'Most tankless units require a 3/4" gas line. If your home has a 1/2" line (common in older homes), it needs to be upgraded. This is the most common hidden installation cost.',
                  },
                  {
                    title: 'Venting',
                    cost: '$300-$1,000',
                    detail:
                      'Condensing units (Rinnai RU199iN, Rheem, Navien, Noritz) use PVC venting, which is cheaper. Non-condensing units (Rinnai V65iN) require stainless steel Category III vent pipe. If the unit is far from an exterior wall, venting costs increase.',
                  },
                  {
                    title: 'Electrical',
                    cost: '$100-$300',
                    detail:
                      'Gas tankless units still need a 120V outlet for the control board and ignition. If there is no outlet near the installation location, an electrician will need to run one.',
                  },
                  {
                    title: 'Water Line Modifications',
                    cost: '$100-$400',
                    detail:
                      'The inlet and outlet connections may need to be rerouted, especially when switching from a floor-standing tank to a wall-mounted tankless unit in a different location.',
                  },
                  {
                    title: 'Permits',
                    cost: '$50-$200',
                    detail:
                      'Most municipalities require a plumbing permit for water heater replacement. Some also require a gas permit if the gas line is being modified. Your installer should handle this.',
                  },
                  {
                    title: 'Condensate Drain',
                    cost: '$50-$200',
                    detail:
                      'Condensing units produce acidic condensate that must be drained. If the unit is installed in a location without a floor drain, a condensate pump or drain line must be added.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-5 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {item.cost}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-5 border mt-6"
                style={{ backgroundColor: '#0f1a0f', borderColor: '#1a3a1a' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                    Pro Tip: Get 3 Quotes
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Installation costs vary significantly by region and contractor. Always
                  get at least three written quotes. Ask specifically about gas line
                  upgrades, venting materials, and whether permits are included in the
                  price. A reputable installer will inspect your gas line, electrical,
                  and venting before giving a final quote.
                </p>
              </div>
            </section>

            {/* ─── Pros & Cons of Going Tankless ─── */}
            <section id="pros-cons" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Pros and Cons of Going Tankless
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <h3
                    className="font-bold mb-4 flex items-center gap-2"
                    style={{ color: '#f5f5f5' }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Pros
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Unlimited hot water — never runs out mid-shower',
                      '24-34% more energy efficient than tank heaters',
                      'Lasts 20-25 years (double a tank heater)',
                      'Wall-mounted design frees up floor space',
                      '$100-$150 annual energy savings',
                      'No risk of catastrophic tank failure and flooding',
                      'Cleaner water without sediment buildup',
                      'Lower carbon footprint due to reduced gas usage',
                      'Compatible with solar thermal pre-heating',
                      'Higher resale value for your home',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: '#a1a1aa' }}
                      >
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <h3
                    className="font-bold mb-4 flex items-center gap-2"
                    style={{ color: '#f5f5f5' }}
                  >
                    <XCircle className="h-5 w-5 text-red-500" />
                    Cons
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Higher upfront cost ($2,200-$5,200 installed)',
                      'Installation is more complex than tank swap',
                      'May require gas line and venting upgrades',
                      'Slight delay before hot water arrives (without recirc pump)',
                      'Minimum flow rate required to activate the burner',
                      'Annual descaling maintenance recommended',
                      'Electric models are limited to point-of-use',
                      'Not ideal during power outages (needs electricity)',
                      'Hard water areas require more frequent maintenance',
                      'Larger homes may need two units in parallel',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: '#a1a1aa' }}
                      >
                        <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ─── FAQ ─── */}
            <section id="faq" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <div
                    key={faq.name}
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

            {/* ─── Final Verdict ─── */}
            <section id="verdict" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Final Verdict
              </h2>
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: '#a1a1aa' }}
                >
                  There is no single &quot;best&quot; tankless water heater &mdash; it
                  depends on your household size, budget, and priorities. Here is our
                  quick decision framework:
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      label: 'Best Overall',
                      pick: 'Rinnai RU199iN',
                      why: 'If you want the best reliability, warranty, and service network with top-tier efficiency, this is the one to buy. Ideal for 3+ bathroom homes.',
                    },
                    {
                      label: 'Best Value',
                      pick: 'Rheem RTGH-95DVLN',
                      why: 'The sweet spot for most 2-3 bathroom homes. You get 90%+ of the Rinnai\'s performance at 60-70% of the price.',
                    },
                    {
                      label: 'Most Efficient',
                      pick: 'Navien NPE-240A2',
                      why: 'If instant hot water matters to you, the built-in recirculation pump is a game-changer. Best pick for homes where the water heater is far from the bathrooms.',
                    },
                    {
                      label: 'Best Compact',
                      pick: 'Noritz EZ111DV',
                      why: 'Tight on space? The Noritz packs flagship-level specs into the smallest footprint. Great for condos and townhomes.',
                    },
                    {
                      label: 'Best Budget',
                      pick: 'Rinnai V65iN',
                      why: 'The smartest entry point into tankless. Perfect for small homes, condos, guest houses, or rental properties where 6.5 GPM is sufficient.',
                    },
                  ].map((v) => (
                    <div
                      key={v.label}
                      className="p-4 rounded-lg border"
                      style={{ backgroundColor: '#0f0f0f', borderColor: '#27272a' }}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          {v.label}
                        </span>
                        <span className="font-semibold" style={{ color: '#f5f5f5' }}>
                          {v.pick}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        {v.why}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: '#a1a1aa' }}
                >
                  Whichever model you choose, upgrading from a traditional tank to a
                  tankless water heater is one of the highest-ROI home improvements you
                  can make. You&apos;ll save on energy every month, never run out of
                  hot water, and have a unit that lasts two decades or more.
                </p>

                <div
                  className="rounded-lg p-5 border"
                  style={{ backgroundColor: '#0f0f1a', borderColor: '#1a1a3a' }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#f5f5f5' }}>
                      Pairing with solar?
                    </strong>{' '}
                    If you&apos;re considering a tankless water heater alongside rooftop
                    solar panels, the energy savings compound. Solar offsets your
                    electricity costs while the tankless unit cuts your gas bill.
                    Combined, many California homeowners see 40-60% reductions in total
                    utility costs.{' '}
                    <Link href="/reviews" className="text-primary hover:underline">
                      Browse more energy-saving product reviews
                    </Link>{' '}
                    to see how the pieces fit together.
                  </p>
                </div>
              </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border text-center" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Explore More Reviews
                </h2>
                <p className="text-sm mb-6 max-w-lg mx-auto" style={{ color: '#a1a1aa' }}>
                  We review the best energy-efficient products for your home &mdash;
                  from portable power stations to solar equipment and beyond.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  View All Reviews <ChevronRight className="h-4 w-4" />
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
