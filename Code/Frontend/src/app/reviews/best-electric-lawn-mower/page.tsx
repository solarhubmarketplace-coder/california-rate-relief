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
    'Best Electric Lawn Mowers (2026): EGO vs Greenworks vs Ryobi; Top Battery Mowers Compared',
  description:
    'Compare the best electric lawn mowers for 2026. In-depth reviews of EGO Power+ Select Cut XP, Greenworks 80V Pro, Ryobi 40V, and more. Battery platform guide, gas vs electric savings, and sizing recommendations included.',
  alternates: {
    canonical: '/reviews/best-electric-lawn-mower',
  },
  openGraph: {
    title: 'Best Electric Lawn Mowers (2026): EGO vs Greenworks vs Ryobi',
    description:
      'EGO Power+ Select Cut XP vs Greenworks 80V Pro vs Ryobi 40V. Full specs, pros/cons, battery platform guide, and electric vs gas cost comparison.',
    type: 'article',
    publishedTime: '2026-04-17T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Lawn Mowers (2026): EGO vs Greenworks vs Ryobi — Top Battery Mowers Compared',
  description:
    'Compare the best electric lawn mowers for 2026. In-depth reviews of EGO Power+ Select Cut XP, Greenworks 80V Pro, Ryobi 40V, and more. Battery platform guide, gas vs electric savings, and sizing recommendations.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-lawn-mower',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric lawn mower in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO Power+ Select Cut XP (LM2156SP) is our top pick for 2026. It delivers 8.3 ft-lbs of torque through a 56V system with a 21-inch steel deck, runs up to 75 minutes on a 10Ah battery, and features the Select Cut XP multi-blade system for superior cut quality in any grass type. It handles up to 3/4 acre per charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do electric lawn mower batteries last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most modern lithium-ion mower batteries last 45 to 75 minutes per charge depending on the model, battery capacity, and mowing conditions. Higher-voltage systems (56V and 80V) generally deliver longer runtime under load. Battery cells themselves typically last 500 to 1,000 charge cycles before noticeable degradation, which translates to roughly 5 to 8 years of regular use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an electric lawn mower handle thick grass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Premium electric mowers like the EGO Power+ Select Cut XP (8.3 ft-lbs torque) and Greenworks 80V Pro handle thick, tall, and even damp grass without stalling. The key is voltage and torque: 56V and 80V systems with brushless motors maintain blade speed through heavy grass just as well as gas mowers. Budget 40V models may struggle with very thick or wet conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an electric lawn mower cheaper than gas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, significantly over time. A gas mower costs roughly $50 to $100 per year in fuel plus $30 to $75 for maintenance (oil changes, spark plugs, air filters, winterization). An electric mower costs about $5 to $15 per year in electricity to charge. Over a 5-year period, an electric mower saves $300 to $700 in operating costs compared to gas. If you charge from rooftop solar panels, the electricity cost drops to zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size electric lawn mower do I need for my yard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For small yards under 1/4 acre, any 40V or 56V mower will work well. For medium yards of 1/4 to 1/2 acre, a 56V self-propelled mower like the EGO LM2114SP is ideal. For large yards of 1/2 to 3/4 acre, choose a 56V model with a high-capacity battery (10Ah+) like the EGO Select Cut XP. For yards approaching 1 acre, the Greenworks 80V platform offers the best combination of power and runtime.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge an electric lawn mower with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Standard electric lawn mower batteries charge from any household outlet, and if your home has rooftop solar panels, that electricity is generated from sunlight at no marginal cost. A typical mower battery uses about 0.5 to 1.5 kWh per full charge, which a modest solar system produces in well under an hour. This means zero fuel cost and zero emissions from mowing — truly carbon-neutral lawn care.',
      },
    },
  ],
};

interface Mower {
  name: string;
  badge: string;
  price: string;
  voltage: string;
  deck: string;
  runtime: string;
  selfPropelled: boolean;
  bestFor: string;
  affiliateLink: string;
}

const mowers: Mower[] = [
  {
    name: 'EGO Power+ Select Cut XP (LM2156SP)',
    badge: 'Best Overall',
    price: '$599–$699',
    voltage: '56V',
    deck: '21" Steel',
    runtime: 'Up to 75 min (10Ah)',
    selfPropelled: true,
    bestFor: 'Most homeowners, thick grass',
    affiliateLink: '#',
  },
  {
    name: 'EGO Power+ LM2114SP',
    badge: 'Best Mid-Range',
    price: '$449–$499',
    voltage: '56V',
    deck: '21"',
    runtime: 'Up to 60 min',
    selfPropelled: true,
    bestFor: 'Standard lawns, value-conscious buyers',
    affiliateLink: '#',
  },
  {
    name: 'Greenworks 80V Pro 21" (MO80L410)',
    badge: 'Best for Tough Grass',
    price: '$400–$600',
    voltage: '80V',
    deck: '21"',
    runtime: 'Up to 60 min',
    selfPropelled: false,
    bestFor: 'Large yards, thick/wet grass',
    affiliateLink: '#',
  },
  {
    name: 'Greenworks 80V 21" Self-Propelled',
    badge: 'Best Value for Large Yards',
    price: '~$400',
    voltage: '80V',
    deck: '21"',
    runtime: 'Up to 60 min (4.0Ah)',
    selfPropelled: true,
    bestFor: 'Budget buyers wanting maximum power',
    affiliateLink: '#',
  },
  {
    name: 'Ryobi 40V 21" Self-Propelled',
    badge: 'Best Budget',
    price: '$299–$349',
    voltage: '40V',
    deck: '21"',
    runtime: 'Up to 45 min',
    selfPropelled: true,
    bestFor: 'Budget buyers in Ryobi ecosystem',
    affiliateLink: '#',
  },
];

export default function BestElectricLawnMower() {
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Best Electric Lawn Mowers (2026): EGO vs Greenworks vs Ryobi
              </h1>
              
              <LastReviewedStamp date="2026-04-26" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <time dateTime="2026-04-17">April 17, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span>15 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='/img/products/lawn-mowers/hero-ego-power-21.jpg' alt='EGO Power+ 21" battery-powered lawn mower — top pick for 2026' className='w-full h-auto max-h-[480px] object-cover' loading='eager' fetchPriority='high' />
            </div>

            <AffiliateDisclosure compact />

            {/* Trust badges strip */}
            <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">5</div>
                <div className="text-xs text-muted-foreground">Mowers compared</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">$0</div>
                <div className="text-xs text-muted-foreground">Manufacturer payouts</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">2026</div>
                <div className="text-xs text-muted-foreground">Updated April 26</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">Plain</div>
                <div className="text-xs text-muted-foreground">English first, tech second</div>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Gas lawn mowers are loud, dirty, expensive to maintain, and terrible for the
                environment. In 2026, battery-powered electric mowers have finally caught up to
                gas in cutting performance &mdash; and they&apos;re far cheaper to run. If
                you&apos;re a California homeowner paying peak electricity rates, you already know
                every dollar counts. Switching from gas to electric (especially if you charge from
                solar panels) eliminates fuel costs entirely.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We compared every major battery lawn mower on the market and narrowed it down to
                five standout models across three price points. Whether you have a small patio
                lawn or a full 3/4-acre yard, there&apos;s an electric mower here that can handle
                it &mdash; and save you money every season.
              </p>
            </div>

            {/* ========== QUICK PICKS ========== */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold text-foreground">Quick Picks: Our Top 3</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="bg-yellow-400 text-yellow-200 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap mt-0.5">
                    Best Overall
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      EGO Power+ Select Cut XP (LM2156SP) &mdash; $599&ndash;$699
                    </p>
                    <p className="text-sm text-foreground/70">
                      56V, 21&quot; steel deck, 75 min runtime, 8.3 ft-lbs torque,
                      self-propelled. The benchmark for battery mowers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-500/15 text-green-300 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap mt-0.5">
                    Best for Tough Grass
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Greenworks 80V Pro 21&quot; (MO80L410) &mdash; $400&ndash;$600
                    </p>
                    <p className="text-sm text-foreground/70">
                      80V brushless motor, nearly 1 acre coverage, maintains blade speed through
                      thick and wet grass without stalling.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500/15 text-blue-300 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap mt-0.5">
                    Best Budget
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Ryobi 40V 21&quot; Self-Propelled &mdash; $299&ndash;$349
                    </p>
                    <p className="text-sm text-foreground/70">
                      Affordable self-propelled mower with massive battery ecosystem. Home Depot
                      exclusive. Great entry point for electric.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Mower</th>
                      <th className="text-left p-3 font-semibold text-foreground">Price</th>
                      <th className="text-left p-3 font-semibold text-foreground">Voltage</th>
                      <th className="text-left p-3 font-semibold text-foreground">Deck</th>
                      <th className="text-left p-3 font-semibold text-foreground">Runtime</th>
                      <th className="text-center p-3 font-semibold text-foreground">Self-Propelled</th>
                      <th className="text-left p-3 font-semibold text-foreground">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mowers.map((m, i) => (
                      <tr
                        key={m.name}
                        className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}
                      >
                        <td className="p-3 font-medium text-foreground">
                          <div className="flex flex-col gap-1">
                            <span>{m.name}</span>
                            <span className="text-xs text-primary font-semibold">{m.badge}</span>
                          </div>
                        </td>
                        <td className="p-3 text-foreground/80">{m.price}</td>
                        <td className="p-3 text-foreground/80">{m.voltage}</td>
                        <td className="p-3 text-foreground/80">{m.deck}</td>
                        <td className="p-3 text-foreground/80">{m.runtime}</td>
                        <td className="p-3 text-center">
                          {m.selfPropelled ? (
                            <Check className="h-4 w-4 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-4 w-4 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-3 text-foreground/80">{m.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== DETAILED REVIEWS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Detailed Reviews
              </h2>

              {/* === EGO Select Cut XP === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/lawn-mowers/ego-select-cut-xp.jpg" alt="EGO Power+ Select Cut XP self-propelled 21-inch mower — Best Overall pick" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-yellow-400 text-yellow-200 text-xs font-bold px-3 py-1 rounded-full">
                    Best Overall
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    EGO Power+ Select Cut XP (LM2156SP)
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The EGO Select Cut XP is the gold standard for battery-powered mowers in 2026.
                  Its 56V ARC Lithium system delivers 8.3 ft-lbs of cutting torque through a 21-inch
                  steel deck &mdash; numbers that rival mid-range gas mowers. The Select Cut XP
                  multi-blade system lets you swap between different blade configurations to optimize
                  for mulching, bagging, or side discharge. With a 10Ah battery, you get up to 75
                  minutes of runtime, enough to mow roughly 3/4 of an acre on a single charge.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Battery className="h-4 w-4 text-primary" /> Key Specs
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Voltage:</strong> 56V ARC Lithium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Deck:</strong> 21&quot; steel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Runtime:</strong> Up to 75 min with 10Ah battery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Torque:</strong> 8.3 ft-lbs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Drive:</strong> Self-propelled, variable speed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Coverage:</strong> Up to 3/4 acre per charge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span><strong>Price:</strong> $599&ndash;$699 with battery</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Best-in-class torque for a battery mower
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Multi-blade system adapts to any condition
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          75-minute runtime covers most residential lots
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Huge EGO 56V ecosystem (blower, trimmer, chainsaw)
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Steel deck for durability
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Premium price point
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Heavier than some competitors (~70 lbs)
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          10Ah battery takes ~2 hours to fully charge
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="ego-power-select-cut-xp"
                  source="electric-lawn-mower-hub"
                  variant="primary"
                  label="Check Price — EGO Power+ Select Cut XP"
                  showPrice
                  />
              </div>

              {/* === EGO LM2114SP === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/lawn-mowers/ego-lm2114sp.jpg" alt="EGO Power+ LM2114SP 21-inch self-propelled mower" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-purple-500/15 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
                    Best Mid-Range
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    EGO Power+ LM2114SP
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The LM2114SP is the sweet spot in EGO&apos;s lineup. You get the same proven
                  56V platform and 21-inch deck as the flagship Select Cut XP, but at a price
                  that&apos;s $100&ndash;$200 lower. It lacks the interchangeable multi-blade
                  system, but for standard suburban lawns with typical grass types, the single-blade
                  setup handles everything perfectly. The self-propelled drive system and variable
                  speed control make it a joy to operate, even on sloped yards.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Battery className="h-4 w-4 text-primary" /> Key Specs
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Voltage:</strong> 56V ARC Lithium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Deck:</strong> 21&quot;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Runtime:</strong> Up to 60 min</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Drive:</strong> Self-propelled</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span><strong>Price:</strong> $449&ndash;$499 with battery</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Same 56V platform as the flagship at a lower price
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Self-propelled with variable speed
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Batteries shared with entire EGO 56V ecosystem
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Excellent build quality and cut consistency
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          No multi-blade system
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Slightly less runtime than the 10Ah Select Cut XP
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          May struggle in very thick, overgrown conditions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="ego-power-lm2114sp"
                  source="electric-lawn-mower-hub"
                  variant="primary"
                  label="Check Price; EGO Power+ LM2114SP"
                  showPrice
                  />
              </div>

              {/* === Greenworks 80V Pro === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/lawn-mowers/greenworks-80v-lifestyle.jpg" alt="Greenworks 80V Pro 21-inch lawn mower in real-world use" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-green-500/15 text-green-300 text-xs font-bold px-3 py-1 rounded-full">
                    Best for Tough Grass
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Greenworks 80V Pro 21&quot; (MO80L410)
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Greenworks&apos; 80V platform is the highest-voltage consumer mower system on
                  the market, and it shows. The brushless motor delivers raw cutting power that
                  maintains blade speed through thick, damp grass without the bogging down that
                  plagues lower-voltage systems. With up to 60 minutes of runtime and nearly 1 acre
                  of coverage, this is the mower for homeowners who need serious cutting ability but
                  don&apos;t want to deal with gas engine maintenance. The 80V battery platform
                  extends to string trimmers, blowers, chainsaws, and more.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Battery className="h-4 w-4 text-primary" /> Key Specs
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Voltage:</strong> 80V brushless</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Deck:</strong> 21&quot;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Runtime:</strong> Up to 60 min</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Coverage:</strong> Nearly 1 acre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span><strong>Price:</strong> $400&ndash;$600</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Highest voltage = most raw cutting power
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Handles thick and wet grass without stalling
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Nearly 1 acre of coverage per charge
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Growing 80V tool ecosystem
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Push mower only (not self-propelled)
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Fewer retail locations than EGO or Ryobi
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          80V batteries not compatible with 40V/60V Greenworks tools
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="greenworks-80v-pro-21"
                  source="electric-lawn-mower-hub"
                  variant="primary"
                  label="Check Price — Greenworks 80V Pro 21"
                  showPrice
                  />
              </div>

              {/* === Greenworks 80V Self-Propelled === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/lawn-mowers/greenworks-80v-lifestyle.jpg" alt="Greenworks 80V 21-inch self-propelled lawn mower" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-teal-500/15 text-teal-300 text-xs font-bold px-3 py-1 rounded-full">
                    Best Value for Large Yards
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Greenworks 80V 21&quot; Self-Propelled
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  If you want the raw 80V cutting power of the Greenworks Pro platform but also
                  need self-propelled drive, this is the model to get. At roughly $400 with a
                  4.0Ah battery included, it&apos;s competitively priced against the EGO mid-range
                  while delivering more voltage. This is the best value option for homeowners with
                  large, flat-to-moderate yards who want maximum cutting power without the premium
                  price tag. The self-propelled feature makes a real difference on larger lots
                  where push mowing gets exhausting.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Battery className="h-4 w-4 text-primary" /> Key Specs
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Voltage:</strong> 80V brushless</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Deck:</strong> 21&quot;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Runtime:</strong> Up to 60 min (4.0Ah)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Drive:</strong> Self-propelled</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span><strong>Price:</strong> ~$400 with 4.0Ah battery</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          80V power at a mid-range price
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Self-propelled drive included
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Excellent value per dollar
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Battery included in purchase price
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          4.0Ah battery is smaller than EGO&apos;s 10Ah option
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Less retail availability than EGO
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Smaller 80V tool ecosystem compared to EGO 56V
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="greenworks-80v-21-self-propelled"
                  source="electric-lawn-mower-hub"
                  variant="primary"
                  label="Check Price, Greenworks 80V 21 Self-Propelled"
                  showPrice
                  />
              </div>

              {/* === Ryobi 40V === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-b from-white via-white to-card aspect-[16/9] flex items-center justify-center" style={{maskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)', WebkitMaskImage:'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'}}>
                  <img src="/img/products/lawn-mowers/ryobi-40v-awd.jpg" alt="Ryobi 40V HP 21-inch AWD self-propelled lawn mower" className="w-full h-full object-contain p-4" loading="lazy" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-blue-500/15 text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
                    Best Budget
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Ryobi 40V 21&quot; Self-Propelled
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The Ryobi 40V is the entry point into electric mowing without compromising on
                  features. At $299&ndash;$349, you still get a self-propelled 21-inch mower with
                  mulching, bagging, and side discharge capabilities. The 40V platform is the
                  backbone of Ryobi&apos;s massive ONE+ HP ecosystem &mdash; the largest battery
                  tool ecosystem available, with over 300 tools that share the same batteries.
                  Available exclusively at Home Depot, the Ryobi is easy to find and well-supported.
                  It&apos;s best suited for small to medium yards with standard grass types.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Battery className="h-4 w-4 text-primary" /> Key Specs
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Voltage:</strong> 40V ONE+ HP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Deck:</strong> 21&quot;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Runtime:</strong> Up to 45 min</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span><strong>Drive:</strong> Self-propelled</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span><strong>Price:</strong> $299&ndash;$349</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                        <Check className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Most affordable self-propelled electric mower
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Largest battery tool ecosystem (300+ tools)
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Widely available at Home Depot
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          Great for small to medium yards
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                        <X className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          40V delivers less power than 56V/80V systems
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Shorter runtime (~45 min)
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Can struggle with very thick or wet grass
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />
                          Home Depot exclusive limits shopping options
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <BuyButton
                  productKey="ryobi-40v-21-self-propelled"
                  source="electric-lawn-mower-hub"
                  variant="primary"
                  label="Check Price, Ryobi 40V 21 Self-Propelled"
                  showPrice
                  />
              </div>
            </section>

            {/* ========== BATTERY PLATFORM GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Choose Your Ecosystem: Battery Platform Guide
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The mower is just the beginning. Most homeowners eventually add a string trimmer,
                leaf blower, and chainsaw. Choosing a battery platform is a long-term decision
                &mdash; all your tools will share the same batteries. Here&apos;s how the major
                platforms compare:
              </p>

              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Battery className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-foreground">EGO 56V ARC Lithium</h3>
                    <span className="text-xs bg-yellow-500/15 text-yellow-300 px-2 py-0.5 rounded-full font-semibold">
                      Best All-Around
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Premium ecosystem with the widest range of high-performance outdoor power
                    tools. All batteries are interchangeable across mowers, blowers, trimmers,
                    chainsaws, snow blowers, and more. Available at Lowe&apos;s, Ace Hardware, and
                    online retailers. The 56V platform strikes the ideal balance between power and
                    battery weight.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold text-foreground">Greenworks 80V</h3>
                    <span className="text-xs bg-green-500/15 text-green-300 px-2 py-0.5 rounded-full font-semibold">
                      Most Powerful
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Highest voltage in the consumer space. The 80V platform delivers the most raw
                    cutting and blowing power, ideal for large properties and tough conditions.
                    Growing tool lineup includes mowers, blowers, trimmers, and chainsaws. Note:
                    80V batteries are NOT compatible with Greenworks 40V or 60V tools &mdash;
                    they&apos;re separate platforms.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold text-foreground">Ryobi 40V ONE+ HP</h3>
                    <span className="text-xs bg-blue-500/15 text-blue-300 px-2 py-0.5 rounded-full font-semibold">
                      Biggest Ecosystem
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80">
                    The largest battery tool ecosystem in the world with 300+ tools sharing the
                    same batteries. From mowers and blowers to pressure washers and generators.
                    Home Depot exclusive. Best for homeowners who want a single battery platform
                    for everything. Lower voltage means less raw power, but adequate for standard
                    residential use.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    <h3 className="font-bold text-foreground">Milwaukee M18</h3>
                    <span className="text-xs bg-red-500/15 text-red-300 px-2 py-0.5 rounded-full font-semibold">
                      Pro-Grade
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Professional-grade tools built for contractors. The M18 platform is legendary
                    in the power tool world, but its outdoor/lawn tool lineup is still growing.
                    Best for homeowners who already own Milwaukee M18 power tools and want to share
                    batteries. Fewer mower options than EGO or Greenworks.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5 text-yellow-600" />
                    <h3 className="font-bold text-foreground">DeWalt 60V MAX</h3>
                    <span className="text-xs bg-yellow-500/15 text-yellow-300 px-2 py-0.5 rounded-full font-semibold">
                      Contractor-Focused
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80">
                    DeWalt&apos;s 60V MAX FLEXVOLT batteries are backward-compatible with 20V MAX
                    tools, making it appealing for homeowners already in the DeWalt ecosystem.
                    Mower lineup is limited compared to dedicated outdoor brands, but the tools
                    that exist are built to a high standard. Best for existing DeWalt users.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== ELECTRIC VS GAS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Electric vs Gas Lawn Mowers: The Full Breakdown
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Still on the fence about switching from gas? Here&apos;s how the two technologies
                compare across every metric that matters:
              </p>

              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Category</th>
                      <th className="text-left p-3 font-semibold text-foreground">Electric (Battery)</th>
                      <th className="text-left p-3 font-semibold text-foreground">Gas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">Annual Fuel/Energy Cost</td>
                      <td className="p-3 text-foreground/80">$5&ndash;$15/year in electricity</td>
                      <td className="p-3 text-foreground/80">$50&ndash;$100/year in gas</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">Maintenance</td>
                      <td className="p-3 text-foreground/80">Sharpen blade once/year. No oil, spark plugs, or filters.</td>
                      <td className="p-3 text-foreground/80">Oil changes, spark plugs, air filter, carburetor cleaning, winterization</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">Annual Maintenance Cost</td>
                      <td className="p-3 text-foreground/80">~$15&ndash;$25</td>
                      <td className="p-3 text-foreground/80">$30&ndash;$75+</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">Noise Level</td>
                      <td className="p-3 text-foreground/80">65&ndash;75 dB (normal conversation level)</td>
                      <td className="p-3 text-foreground/80">85&ndash;95 dB (hearing protection recommended)</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">Emissions</td>
                      <td className="p-3 text-foreground/80">Zero direct emissions</td>
                      <td className="p-3 text-foreground/80">EPA: 1 hour of mowing = driving a car 300+ miles</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">Starting</td>
                      <td className="p-3 text-foreground/80">Push-button, instant start every time</td>
                      <td className="p-3 text-foreground/80">Pull-cord, may require priming and choke</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">Runtime</td>
                      <td className="p-3 text-foreground/80">45&ndash;75 min per charge (model dependent)</td>
                      <td className="p-3 text-foreground/80">Unlimited (refuel as needed)</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">5-Year Operating Cost</td>
                      <td className="p-3 text-foreground/80">$100&ndash;$200 total</td>
                      <td className="p-3 text-foreground/80">$400&ndash;$875 total</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h3 className="font-bold text-foreground">Bottom Line on Electric vs Gas</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  For yards under 3/4 acre, a battery mower in 2026 matches or exceeds gas
                  performance while costing significantly less to operate. The only scenario where
                  gas still has an edge is for very large properties (1+ acre) where unlimited
                  runtime matters more than operating costs. Even then, the Greenworks 80V with a
                  spare battery covers close to 2 acres on two charges.
                </p>
              </div>
            </section>

            {/* ========== SIZING GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Sizing Guide: Which Mower for Your Yard?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Yard size is the single biggest factor in choosing the right electric mower.
                Here&apos;s our recommendation by lot size:
              </p>

              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-500/15 text-green-300 text-xs font-bold px-3 py-1 rounded-full">
                      Small Yard
                    </div>
                    <span className="text-sm text-foreground/60">Under 1/4 acre</span>
                  </div>
                  <p className="text-sm text-foreground/80 mb-2">
                    Any mower on this list will work. At this size, you can save money with the
                    Ryobi 40V ($299) and finish your entire lawn in 15&ndash;25 minutes with
                    battery to spare.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    Recommended: Ryobi 40V 21&quot; Self-Propelled
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-500/15 text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
                      Medium Yard
                    </div>
                    <span className="text-sm text-foreground/60">1/4 to 1/2 acre</span>
                  </div>
                  <p className="text-sm text-foreground/80 mb-2">
                    This is where the 56V and 80V systems shine. The EGO LM2114SP at $449&ndash;$499
                    offers the best balance of power, runtime, and value. Self-propelled drive
                    makes the job effortless.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    Recommended: EGO Power+ LM2114SP
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-500/15 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
                      Large Yard
                    </div>
                    <span className="text-sm text-foreground/60">1/2 to 3/4 acre</span>
                  </div>
                  <p className="text-sm text-foreground/80 mb-2">
                    You need maximum runtime and cutting power. The EGO Select Cut XP with a
                    10Ah battery gives you 75 minutes and 8.3 ft-lbs of torque &mdash; enough
                    for thick grass on a large lot in a single charge.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    Recommended: EGO Power+ Select Cut XP (LM2156SP)
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-orange-500/15 text-orange-300 text-xs font-bold px-3 py-1 rounded-full">
                      Extra Large Yard
                    </div>
                    <span className="text-sm text-foreground/60">3/4 acre to 1 acre</span>
                  </div>
                  <p className="text-sm text-foreground/80 mb-2">
                    The Greenworks 80V Pro covers nearly 1 acre per charge. For self-propelled,
                    the Greenworks 80V Self-Propelled with a spare battery can handle even larger
                    lots. At this size, consider a second battery for uninterrupted mowing.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    Recommended: Greenworks 80V Pro 21&quot; (MO80L410)
                  </p>
                </div>
              </div>
            </section>

            {/* ========== SOLAR TIE-IN ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Charge From Solar: Zero-Cost, Zero-Emission Lawn Care
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                One of the most compelling advantages of switching to an electric mower is the
                ability to charge it from your own rooftop solar panels. A typical mower battery
                uses 0.5 to 1.5 kWh per full charge. With California averaging 5.5&ndash;6.5 peak
                sun hours per day, even a small rooftop solar system generates far more energy than
                you&apos;d ever need to keep your mower running all season.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="h-5 w-5 text-amber-600" />
                  <h3 className="font-bold text-foreground">The Math on Solar-Powered Mowing</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Average mower charge: ~1 kWh = roughly $0.30&ndash;$0.45 at California utility rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Mowing weekly for 8 months = ~35 charges/year = ~$10&ndash;$16/year from the grid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>With rooftop solar: that same 35 kWh/year costs $0 &mdash; your panels generate it for free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>A gas mower burning the same amount costs $50&ndash;$100/year in fuel alone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Over 10 years: $500&ndash;$1,000+ saved on fuel by going electric + solar</span>
                  </li>
                </ul>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                When you combine rooftop solar with battery-powered lawn equipment, you achieve
                truly carbon-neutral yard maintenance. No gas, no oil, no emissions, no fuel costs.
                Every charge comes from sunlight hitting your roof. It&apos;s the complete package
                for homeowners who care about both savings and sustainability.
              </p>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <details
                    key={i}
                    className="group border border-border rounded-lg overflow-hidden"
                    {...(i === 0 ? { open: true } : {})}
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-card hover:bg-muted/30 transition-colors">
                      <span className="font-semibold text-foreground pr-4">
                        {faq.name}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
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
                  GreenReviewsHub reviews the best clean energy products so you can make informed
                  decisions. From portable power stations to e-bikes and smart home tech, we test
                  and compare so you don&apos;t have to. Browse all our in-depth reviews and
                  comparison guides.
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
      <section className="container mx-auto px-4 max-w-3xl mb-12">
        <div className="rounded-xl p-6 text-center border-2" style={{ backgroundColor: '#0a3d1f', borderColor: '#16a34a' }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#f5f5f5' }}>Ready to lock in our top pick?</h3>
          <p className="mb-4" style={{ color: '#d4d4d8' }}>The Editor&apos;s Pick electric lawn mower is sitting at our recommended price right now — lock it in before promo windows shift.</p>
          <BuyButton productKey="ego-power-select-cut-xp" source="best-electric-lawn-mower-final-cta" variant="secondary" label="See Today&apos;s Best Price" />
        </div>
      </section>
      <ReviewFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
