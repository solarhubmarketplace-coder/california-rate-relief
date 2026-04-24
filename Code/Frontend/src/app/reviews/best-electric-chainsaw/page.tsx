import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  ArrowRight,
  Battery,
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Search,
  Shield,
  Star,
  Sun,
  X,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Electric Chainsaws (2026): DeWalt vs EGO vs Ryobi vs Makita vs Stihl — Top Battery Chainsaws Compared',
  description:
    'Compare the best electric chainsaws for 2026. In-depth reviews of EGO CS1804, DeWalt DCCS670X1, Milwaukee M18 FUEL, Ryobi 40V HP, Stihl MSA 220 C-B, and Makita XCU11SM1. Bar length guide, battery platform comparison, and electric vs gas breakdown included.',
  alternates: {
    canonical: '/reviews/best-electric-chainsaw',
  },
  openGraph: {
    title: 'Best Electric Chainsaws (2026): DeWalt vs EGO vs Ryobi vs Stihl',
    description:
      'EGO CS1804 vs DeWalt DCCS670X1 vs Milwaukee M18 FUEL vs Ryobi 40V HP vs Stihl MSA 220 vs Makita XCU11SM1. Full specs, pros/cons, and buyer guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Chainsaws (2026): DeWalt vs EGO vs Ryobi vs Makita vs Stihl — Top Battery Chainsaws Compared',
  description:
    'Compare the best electric chainsaws for 2026. In-depth reviews covering EGO CS1804, DeWalt DCCS670X1, Milwaukee M18 FUEL, Ryobi 40V HP, Stihl MSA 220 C-B, and Makita XCU11SM1. Bar length guide, battery platform comparison, and electric vs gas breakdown.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-chainsaw',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric chainsaw in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO CS1804 18-inch is our top pick for 2026. It delivers 6,800 FPM chain speed through a 56V ARC Lithium system, features tool-less chain tensioning and an automatic oiler, and handles everything from storm cleanup to firewood processing. At $349 with a battery, it offers the best balance of power, bar length, and value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an electric chainsaw replace a gas chainsaw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most homeowners, yes. Modern 56V-60V battery chainsaws like the EGO CS1804 and DeWalt DCCS670X1 can cut through 12-inch hardwood logs with ease. They handle storm cleanup, firewood, limbing, and pruning without the noise, fumes, or maintenance of gas. Professional loggers working all day may still prefer gas for unlimited runtime, but for residential use, electric has fully caught up.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size bar do I need on a chainsaw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For pruning and light limbing, a 10-12 inch bar is sufficient. For general homeowner tasks like storm cleanup, firewood cutting, and medium tree felling, a 14-16 inch bar covers most needs. For large tree felling and heavy-duty work, an 18-inch or larger bar is recommended. A good rule of thumb: your bar should be at least 2 inches longer than the diameter of the wood you plan to cut regularly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a battery chainsaw last on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Runtime varies significantly based on battery capacity and cutting intensity. With a 5Ah battery, expect roughly 30-45 minutes of intermittent cutting. Larger batteries (7.5-10Ah) can extend that to 60-90 minutes. Constant full-throttle cutting drains batteries faster than intermittent limbing and pruning. Most homeowners find one battery sufficient for typical weekend tasks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is DeWalt or EGO better for chainsaws?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are excellent choices. The EGO CS1804 wins on bar length (18 inches vs 16 inches) and chain speed (6,800 FPM), making it better for larger cuts. The DeWalt DCCS670X1 wins on raw voltage (60V FLEXVOLT) and integrates with the massive DeWalt 20V/60V tool ecosystem. If you already own DeWalt tools, the DCCS670X1 is the smarter buy. Starting fresh, the EGO CS1804 offers more cutting capacity for less money.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Stihl battery chainsaws worth the premium price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stihl battery chainsaws like the MSA 220 C-B are built to professional standards with superior chain quality, vibration dampening, and build materials. At $550 for the tool only (battery extra), they cost significantly more than competitors. They are worth it for arborists and professionals who use a chainsaw daily and value Stihl dealer service networks. For weekend homeowner use, models from EGO, DeWalt, or Ryobi deliver comparable cutting performance at a fraction of the cost.',
      },
    },
  ],
};

interface Chainsaw {
  name: string;
  badge: string;
  price: string;
  voltage: string;
  barLength: string;
  chainSpeed: string;
  weight: string;
  bestFor: string;
  rating: number;
  affiliateLink: string;
}

const chainsaws: Chainsaw[] = [
  {
    name: 'EGO CS1804 18"',
    badge: 'Best Overall',
    price: '$349',
    voltage: '56V',
    barLength: '18"',
    chainSpeed: '6,800 FPM',
    weight: '14.4 lbs',
    bestFor: 'Most homeowners, firewood, storm cleanup',
    rating: 4.7,
    affiliateLink: '#',
  },
  {
    name: 'DeWalt DCCS670X1 60V MAX 16"',
    badge: 'Best Power',
    price: '$329',
    voltage: '60V',
    barLength: '16"',
    chainSpeed: 'High-efficiency brushless',
    weight: '13.6 lbs',
    bestFor: 'DeWalt platform owners, heavy cutting',
    rating: 4.5,
    affiliateLink: '#',
  },
  {
    name: 'Milwaukee M18 FUEL 16"',
    badge: 'Best for Pros',
    price: '$549',
    voltage: '18V',
    barLength: '16"',
    chainSpeed: '6,600 RPM',
    weight: '13.8 lbs',
    bestFor: 'Professionals, M18 ecosystem users',
    rating: 4.6,
    affiliateLink: '#',
  },
  {
    name: 'Ryobi 40V HP 18"',
    badge: 'Best Budget',
    price: '$229',
    voltage: '40V',
    barLength: '18"',
    chainSpeed: 'Brushless motor',
    weight: '12.5 lbs',
    bestFor: 'Budget buyers, Ryobi ecosystem users',
    rating: 4.3,
    affiliateLink: '#',
  },
  {
    name: 'Stihl MSA 220 C-B 14"',
    badge: 'Premium Pick',
    price: '$550 (tool only)',
    voltage: '36V',
    barLength: '14"',
    chainSpeed: 'Pro-grade',
    weight: '8.6 lbs',
    bestFor: 'Arborists, professionals, Stihl loyalists',
    rating: 4.6,
    affiliateLink: '#',
  },
  {
    name: 'Makita XCU11SM1 14"',
    badge: 'Most Compact',
    price: '$329',
    voltage: '40V',
    barLength: '14"',
    chainSpeed: 'Variable speed',
    weight: '8.6 lbs',
    bestFor: 'Pruning, limbing, compact storage',
    rating: 4.4,
    affiliateLink: '#',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.floor(rating)
              ? 'text-yellow-500 fill-yellow-500'
              : star <= rating
                ? 'text-yellow-500 fill-yellow-500/50'
                : 'text-muted-foreground/30'
          }`}
        />
      ))}
      <span className="text-sm font-semibold text-foreground ml-1">{rating}/5</span>
    </div>
  );
}

export default function BestElectricChainsaw() {
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
                Best Electric Chainsaws (2026): DeWalt vs EGO vs Ryobi vs Stihl
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=1200&q=80&auto=format&fit=crop' alt='Electric chainsaw cutting wood' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* ========== OVERVIEW ========== */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Gas chainsaws are heavy, loud, and require constant maintenance &mdash; mixing fuel,
                cleaning carburetors, pulling starter cords that refuse to cooperate. In 2026, battery-powered
                electric chainsaws have reached a tipping point where most homeowners never need gas again.
                Modern brushless motors paired with high-voltage lithium batteries deliver enough cutting
                power for firewood, storm cleanup, tree felling, and everything in between.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We compared six top electric chainsaws across cutting power, bar length, battery platform
                value, and price. Whether you need an 18-inch bar for large logs or a compact 14-inch
                model for pruning, this guide has you covered. If you charge from solar panels, your
                fuel cost is effectively zero.
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
                      EGO CS1804 18&quot; &mdash; $349 w/battery
                    </p>
                    <p className="text-sm text-foreground/70">
                      56V, 18&quot; bar, 6,800 FPM chain speed, tool-less tensioning, auto-oiler.
                      The best all-around battery chainsaw for homeowners. Handles everything from
                      limbing to firewood.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-500/15 text-green-300 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap mt-0.5">
                    Best Budget
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Ryobi 40V HP 18&quot; &mdash; $229 w/battery
                    </p>
                    <p className="text-sm text-foreground/70">
                      Full 18&quot; bar at the lowest price in our lineup. Brushless motor, side-access
                      tensioning, and fits the massive Ryobi 40V ecosystem (100+ tools).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500/15 text-blue-300 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap mt-0.5">
                    Best Power
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      DeWalt DCCS670X1 60V MAX 16&quot; &mdash; $329 w/battery
                    </p>
                    <p className="text-sm text-foreground/70">
                      60V FLEXVOLT delivers raw cutting force. Low kickback bar, auto-oiler, and
                      backward compatible with DeWalt&apos;s entire 20V MAX lineup.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== FULL COMPARISON TABLE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Chainsaw</th>
                      <th className="text-left p-3 font-semibold text-foreground">Price</th>
                      <th className="text-left p-3 font-semibold text-foreground">Voltage</th>
                      <th className="text-left p-3 font-semibold text-foreground">Bar</th>
                      <th className="text-left p-3 font-semibold text-foreground">Speed</th>
                      <th className="text-left p-3 font-semibold text-foreground">Weight</th>
                      <th className="text-left p-3 font-semibold text-foreground">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chainsaws.map((saw, idx) => (
                      <tr
                        key={saw.name}
                        className={idx % 2 === 0 ? 'bg-card' : 'bg-muted/20'}
                      >
                        <td className="p-3">
                          <div className="font-medium text-foreground">{saw.name}</div>
                          <span className="text-xs text-primary font-semibold">{saw.badge}</span>
                        </td>
                        <td className="p-3 text-foreground font-medium">{saw.price}</td>
                        <td className="p-3 text-foreground">{saw.voltage}</td>
                        <td className="p-3 text-foreground">{saw.barLength}</td>
                        <td className="p-3 text-foreground">{saw.chainSpeed}</td>
                        <td className="p-3 text-foreground">{saw.weight}</td>
                        <td className="p-3">
                          <StarRating rating={saw.rating} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. EGO CS1804 */}
            <section className="mb-16">
              <div className="border-l-4 border-yellow-500 pl-6 mb-6">
                <span className="text-xs font-bold text-yellow-500 uppercase tracking-wide">
                  Best Overall
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  EGO CS1804 18&quot; &mdash; The Homeowner&apos;s Champion
                </h2>
                <StarRating rating={4.7} />
              </div>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Price</span>
                    <span className="text-foreground font-semibold">$349 w/battery</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Voltage</span>
                    <span className="text-foreground font-semibold">56V ARC Lithium</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Bar Length</span>
                    <span className="text-foreground font-semibold">18&quot;</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Chain Speed</span>
                    <span className="text-foreground font-semibold">6,800 FPM</span>
                  </div>
                </div>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The EGO CS1804 is the electric chainsaw that finally made gas obsolete for
                  residential use. Its 56V brushless motor pushes the chain at 6,800 feet per
                  minute &mdash; fast enough to rip through hardwood logs without bogging down.
                  The 18-inch Oregon bar handles trees up to 16 inches in a single pass.
                  Tool-less chain tensioning and an automatic oiler keep things simple in the field.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  At $349 with a 5.0Ah battery and charger, the CS1804 undercuts comparable gas
                  saws when you factor in zero fuel costs and zero tune-ups. EGO&apos;s
                  weather-resistant construction handles cutting in light rain &mdash; exactly
                  when storm cleanup happens. Batteries are fully interchangeable with EGO&apos;s
                  56V mowers, blowers, and trimmers.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      18&quot; bar with 6,800 FPM chain speed rivals gas
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Tool-less tensioning and automatic oiler
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Shares batteries with entire EGO 56V lineup
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Excellent price-to-performance ratio
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <X className="h-4 w-4 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Heavier than 14&quot; models at 14.4 lbs
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Runtime drops under constant heavy cutting
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      EGO battery ecosystem smaller than DeWalt/Milwaukee
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <BuyButton
                  productKey="ego-cs1804"
                  source="electric-chainsaw-hub"
                  variant="primary"
                  label="Check Price — EGO CS1804"
                  showPrice
                />
              </div>
            </section>

            {/* 2. DeWalt DCCS670X1 */}
            <section className="mb-16">
              <div className="border-l-4 border-yellow-600 pl-6 mb-6">
                <span className="text-xs font-bold text-yellow-600 uppercase tracking-wide">
                  Best Power
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  DeWalt DCCS670X1 60V MAX 16&quot; &mdash; Maximum Cutting Force
                </h2>
                <StarRating rating={4.5} />
              </div>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Price</span>
                    <span className="text-foreground font-semibold">$329 w/battery</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Voltage</span>
                    <span className="text-foreground font-semibold">60V MAX FLEXVOLT</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Bar Length</span>
                    <span className="text-foreground font-semibold">16&quot;</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Weight</span>
                    <span className="text-foreground font-semibold">13.6 lbs</span>
                  </div>
                </div>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  DeWalt&apos;s DCCS670X1 runs on the FLEXVOLT platform &mdash; 60 volts for
                  high-demand tools, backward-compatible with all 20V MAX tools. One battery
                  platform covers your chainsaw, drill, impact driver, circular saw, and 300+
                  tools total. The 16-inch low-kickback Oregon bar paired with a brushless motor
                  squeezes maximum runtime from every charge.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Auto-oiler, tool-less chain tensioning, and tank-like build quality round out
                  the package. At $329 with a 3Ah FLEXVOLT battery and charger, it&apos;s the
                  most platform-efficient chainsaw here. If you already own DeWalt cordless
                  tools, this is the obvious choice.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      60V FLEXVOLT delivers serious cutting power
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Compatible with 300+ DeWalt 20V/60V tools
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Low kickback bar for safer operation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Tank-like build quality
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <X className="h-4 w-4 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      16&quot; bar limits max cut diameter vs 18&quot; models
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Included 3Ah battery gives shorter runtime than 5Ah options
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      FLEXVOLT batteries are expensive to add ($150+)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <BuyButton
                  productKey="dewalt-dccs670x1"
                  source="electric-chainsaw-hub"
                  variant="primary"
                  label="Check Price — DeWalt DCCS670X1"
                  showPrice
                />
              </div>
            </section>

            {/* 3. Milwaukee M18 FUEL */}
            <section className="mb-16">
              <div className="border-l-4 border-red-500 pl-6 mb-6">
                <span className="text-xs font-bold text-red-500 uppercase tracking-wide">
                  Best for Pros
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  Milwaukee M18 FUEL 16&quot; &mdash; Professional-Grade Power
                </h2>
                <StarRating rating={4.6} />
              </div>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Price</span>
                    <span className="text-foreground font-semibold">$549 w/battery</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Voltage</span>
                    <span className="text-foreground font-semibold">18V (M18 Platform)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Bar Length</span>
                    <span className="text-foreground font-semibold">16&quot;</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Chain Speed</span>
                    <span className="text-foreground font-semibold">6,600 RPM</span>
                  </div>
                </div>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Milwaukee proves that voltage numbers don&apos;t tell the whole story. Despite
                  running on an 18V platform, the M18 FUEL chainsaw uses advanced POWERSTATE
                  brushless motor technology and high-output batteries (12.0Ah) to deliver cutting
                  performance that competes with 40V-60V rivals. The 6,600 RPM chain speed tears
                  through hardwood without hesitation. REDLINK PLUS intelligence protects against
                  overload, overheating, and over-discharge.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The real advantage is the M18 ecosystem &mdash; over 250 tools on the same
                  battery platform. At $549, it&apos;s the priciest option for occasional homeowner
                  use. But for contractors and landscapers already invested in Milwaukee, the
                  chainsaw slides into their existing kit without buying new batteries or chargers.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      M18 platform with 250+ compatible tools
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Professional-grade build and durability
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      REDLINK PLUS overload protection
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Outstanding high-output battery life with 12.0Ah packs
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <X className="h-4 w-4 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Most expensive option at $549
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Only 16&quot; bar (no 18&quot; option in the M18 lineup)
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Overkill for occasional homeowner use
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <BuyButton
                  productKey="milwaukee-m18-fuel"
                  source="electric-chainsaw-hub"
                  variant="primary"
                  label="Check Price — Milwaukee M18 FUEL"
                  showPrice
                />
              </div>
            </section>

            {/* 4. Ryobi 40V HP */}
            <section className="mb-16">
              <div className="border-l-4 border-green-500 pl-6 mb-6">
                <span className="text-xs font-bold text-green-500 uppercase tracking-wide">
                  Best Budget
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  Ryobi 40V HP 18&quot; &mdash; Unbeatable Value
                </h2>
                <StarRating rating={4.3} />
              </div>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Price</span>
                    <span className="text-foreground font-semibold">$229 w/battery</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Voltage</span>
                    <span className="text-foreground font-semibold">40V HP</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Bar Length</span>
                    <span className="text-foreground font-semibold">18&quot;</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Weight</span>
                    <span className="text-foreground font-semibold">12.5 lbs</span>
                  </div>
                </div>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  At $229 with a battery and charger, the Ryobi 40V HP 18&quot; is the price-to-bar-length
                  champion. You get the same 18-inch cutting capacity as the EGO CS1804 for $120 less.
                  The brushless motor runs more efficiently than brushed alternatives, extracting more
                  cuts per charge. Side-access chain tensioning requires a scrench (included) instead of
                  a tool-less knob, but you only adjust tension once or twice per session.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Ryobi 40V platform is Home Depot&apos;s powerhouse ecosystem with over 100
                  outdoor and indoor tools. If you own a Ryobi mower, blower, or trimmer, your
                  existing batteries slide right in. For homeowners who cut firewood a few times a
                  year and handle the occasional storm cleanup, the Ryobi delivers more than enough
                  performance at the right price.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Lowest price for an 18&quot; battery chainsaw
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Brushless motor for efficient runtime
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Massive 40V ecosystem (100+ tools at Home Depot)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Lightweight at 12.5 lbs
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <X className="h-4 w-4 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Side-access tensioning requires a tool
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      40V delivers less torque than 56V-60V competitors
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Chain quality out of the box is mediocre &mdash; upgrade recommended
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <BuyButton
                  productKey="ryobi-40v-hp"
                  source="electric-chainsaw-hub"
                  variant="primary"
                  label="Check Price — Ryobi 40V HP"
                  showPrice
                />
              </div>
            </section>

            {/* 5. Stihl MSA 220 C-B */}
            <section className="mb-16">
              <div className="border-l-4 border-orange-500 pl-6 mb-6">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wide">
                  Premium Pick
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  Stihl MSA 220 C-B 14&quot; &mdash; Pro-Grade Heritage
                </h2>
                <StarRating rating={4.6} />
              </div>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Price</span>
                    <span className="text-foreground font-semibold">$550 (tool only)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Voltage</span>
                    <span className="text-foreground font-semibold">36V (AP system)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Bar Length</span>
                    <span className="text-foreground font-semibold">14&quot;</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Weight</span>
                    <span className="text-foreground font-semibold">8.6 lbs (bare)</span>
                  </div>
                </div>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Stihl is the name professional arborists trust above all others, and the MSA 220 C-B
                  brings that pedigree to the battery world. Captive bar nuts that won&apos;t get lost
                  in the field, Stihl Oilomatic chain that stays sharp longer than aftermarket options,
                  and an anti-vibration system that reduces fatigue during extended cuts. At 8.6 pounds
                  bare, it&apos;s the lightest saw here with serious cutting power.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The catch? At $550 tool only (batteries $200-$400 extra), the total investment can
                  exceed $750. Stihl sells exclusively through authorized dealers. This makes sense for
                  professionals who need dealer service and daily-use durability. For weekend homeowners,
                  the EGO or DeWalt deliver comparable performance at half the price.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Professional-grade build quality and Oilomatic chain
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Lightest in class at 8.6 lbs with anti-vibration system
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Captive bar nuts prevent loss in the field
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Authorized dealer service network
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <X className="h-4 w-4 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      $550 tool only &mdash; batteries extra ($200-$400)
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Only 14&quot; bar limits cutting diameter
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Dealers only &mdash; not at big-box stores
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <BuyButton
                  productKey="stihl-msa-220-c-b"
                  source="electric-chainsaw-hub"
                  variant="primary"
                  label="Check Price — Stihl MSA 220 C-B"
                  showPrice
                />
              </div>
            </section>

            {/* 6. Makita XCU11SM1 */}
            <section className="mb-16">
              <div className="border-l-4 border-teal-500 pl-6 mb-6">
                <span className="text-xs font-bold text-teal-500 uppercase tracking-wide">
                  Most Compact
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  Makita XCU11SM1 14&quot; &mdash; Lightweight Precision
                </h2>
                <StarRating rating={4.4} />
              </div>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Price</span>
                    <span className="text-foreground font-semibold">$329 w/battery</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Voltage</span>
                    <span className="text-foreground font-semibold">40V max XGT</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Bar Length</span>
                    <span className="text-foreground font-semibold">14&quot;</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Weight</span>
                    <span className="text-foreground font-semibold">8.6 lbs</span>
                  </div>
                </div>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Makita XCU11SM1 is built for people who want a chainsaw they can grab
                  one-handed off a shelf and use for 30 minutes without arm fatigue. At 8.6
                  pounds with battery, it matches the Stihl for lightest in our lineup &mdash;
                  but comes with battery and charger included at $329. Variable speed control
                  lets you feather the trigger for delicate pruning or go full-throttle for firewood.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The 14-inch bar handles pruning, limbing, and small-to-medium firewood. If you
                  regularly tackle logs over 12 inches, you&apos;ll want the EGO or Ryobi. But
                  for fruit trees, hedgerows, and occasional cleanup, the Makita&apos;s compact
                  size makes it the most enjoyable chainsaw to actually use. The 40V max XGT
                  platform is growing rapidly with 80+ tools and counting.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Ultra-light 8.6 lbs with battery
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Variable speed trigger for precision cuts
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Tool-less chain adjustment
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      Battery and charger included at $329
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <X className="h-4 w-4 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      14&quot; bar not suited for large trees
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      XGT platform has fewer tools than DeWalt/Milwaukee
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      Less cutting power than 56V-60V competitors
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <BuyButton
                  productKey="makita-xcu11sm1"
                  source="electric-chainsaw-hub"
                  variant="primary"
                  label="Check Price — Makita XCU11SM1"
                  showPrice
                />
              </div>
            </section>

            {/* ========== BAR LENGTH GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Search className="h-6 w-6 text-primary" />
                Bar Length Guide: Which Size Do You Need?
              </h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">10&ndash;12 Inch Bars</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    <strong>Best for:</strong> Pruning, light limbing, small branches (up to 10&quot; diameter).
                    Essentially powered pruning tools &mdash; great for fruit trees and shrubs.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">14 Inch Bars</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    <strong>Best for:</strong> Limbing, pruning, medium firewood, trees up to 12&quot; diameter.
                    The Stihl MSA 220 and Makita XCU11SM1 both use 14&quot; bars. Ideal when you
                    prioritize maneuverability over max cutting capacity.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">16 Inch Bars</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    <strong>Best for:</strong> General homeowner use, firewood, storm cleanup, trees up to 14&quot; diameter.
                    The DeWalt DCCS670X1 and Milwaukee M18 FUEL both run 16&quot; bars &mdash; the most
                    versatile size for residential use.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">18 Inch Bars</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    <strong>Best for:</strong> Large firewood, tree felling, heavy storm cleanup, logs up to 16&quot; diameter.
                    The EGO CS1804 and Ryobi 40V HP both offer 18&quot; bars &mdash; maximum cutting
                    capacity in the battery chainsaw world.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== BATTERY PLATFORM COMPARISON ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Battery className="h-6 w-6 text-primary" />
                Battery Platform Comparison
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Choosing a battery platform is often more important than choosing a single tool.
                Here&apos;s how they stack up:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Platform</th>
                      <th className="text-left p-3 font-semibold text-foreground">Tools</th>
                      <th className="text-left p-3 font-semibold text-foreground">Battery Cost</th>
                      <th className="text-left p-3 font-semibold text-foreground">Where to Buy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card">
                      <td className="p-3 font-medium text-foreground">EGO 56V</td>
                      <td className="p-3 text-foreground">50+ outdoor</td>
                      <td className="p-3 text-foreground">$149&ndash;$299</td>
                      <td className="p-3 text-foreground">Lowe&apos;s, Ace</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">DeWalt 20V/60V FLEXVOLT</td>
                      <td className="p-3 text-foreground">300+ total</td>
                      <td className="p-3 text-foreground">$99&ndash;$199</td>
                      <td className="p-3 text-foreground">Everywhere</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="p-3 font-medium text-foreground">Milwaukee M18</td>
                      <td className="p-3 text-foreground">250+ total</td>
                      <td className="p-3 text-foreground">$99&ndash;$249</td>
                      <td className="p-3 text-foreground">Home Depot</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">Ryobi 40V</td>
                      <td className="p-3 text-foreground">100+ outdoor</td>
                      <td className="p-3 text-foreground">$79&ndash;$179</td>
                      <td className="p-3 text-foreground">Home Depot</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="p-3 font-medium text-foreground">Stihl AP (36V)</td>
                      <td className="p-3 text-foreground">20+ pro</td>
                      <td className="p-3 text-foreground">$199&ndash;$399</td>
                      <td className="p-3 text-foreground">Dealers only</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">Makita XGT (40V)</td>
                      <td className="p-3 text-foreground">80+ total</td>
                      <td className="p-3 text-foreground">$119&ndash;$229</td>
                      <td className="p-3 text-foreground">HD, pro dealers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
                <p className="text-sm text-foreground/80">
                  <strong className="text-foreground">Platform tip:</strong> If you already own cordless
                  tools from one brand, buy the chainsaw from the same platform. A $150 battery you
                  already own is $150 saved.
                </p>
              </div>
            </section>

            {/* ========== ELECTRIC VS GAS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Electric vs Gas Chainsaws: The Full Breakdown
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Battery className="h-5 w-5 text-green-500" />
                    Electric (Battery) Advantages
                  </h3>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Instant start</strong> &mdash; pull the trigger, it cuts. No pull-starting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Zero emissions, 60-70% quieter</strong> &mdash; no fumes, minimal noise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Near-zero maintenance</strong> &mdash; no spark plugs, carburetors, or fuel lines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>$0 fuel cost</strong> &mdash; pennies per charge (free with solar)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Sun className="h-5 w-5 text-orange-500" />
                    Gas Advantages (Where Electric Falls Short)
                  </h3>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                      <span><strong>Unlimited runtime</strong> &mdash; refuel in seconds, keep cutting all day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                      <span><strong>Longer bars (20&quot;+) and higher peak torque</strong> for professional felling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                      <span><strong>Lower upfront cost</strong> &mdash; entry-level gas saws start under $200</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                      <span><strong>Remote location use</strong> &mdash; no outlets or charged batteries needed</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 mt-6">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  5-Year Cost Comparison
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm mt-2">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-semibold text-foreground">Cost</th>
                        <th className="text-left p-3 font-semibold text-foreground">Electric (EGO CS1804)</th>
                        <th className="text-left p-3 font-semibold text-foreground">Gas (Comparable 18&quot;)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-card">
                        <td className="p-3 text-foreground">Purchase</td>
                        <td className="p-3 text-foreground">$349</td>
                        <td className="p-3 text-foreground">$250&ndash;$350</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="p-3 text-foreground">Fuel + maintenance (5yr)</td>
                        <td className="p-3 text-foreground">$25&ndash;$45</td>
                        <td className="p-3 text-foreground">$175&ndash;$350</td>
                      </tr>
                      <tr className="bg-card font-semibold">
                        <td className="p-3 text-foreground">Total 5-year cost</td>
                        <td className="p-3 text-green-500">$374&ndash;$543*</td>
                        <td className="p-3 text-foreground">$425&ndash;$700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  *Includes potential $149 battery replacement after 3+ years. Based on typical homeowner
                  usage (20-30 hours/year). Solar-powered homes pay $0 for charging.
                </p>
              </div>
            </section>

            {/* ========== SAFETY FEATURES ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Safety Features to Look For
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Chainsaws are inherently dangerous. Every model here includes essential safety
                features, but here&apos;s what to prioritize:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">Chain Brake</h3>
                  <p className="text-sm text-foreground/80">
                    Stops the chain in milliseconds during kickback. All six here include one. Non-negotiable.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">Low-Kickback Bar</h3>
                  <p className="text-sm text-foreground/80">
                    Reduces tip-catch kickback. The DeWalt DCCS670X1 specifically uses one &mdash; safest for beginners.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">Hand Guards</h3>
                  <p className="text-sm text-foreground/80">
                    Front and rear guards protect from debris. Look for wrap-around designs.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">Overload Protection</h3>
                  <p className="text-sm text-foreground/80">
                    Detects motor overload and reduces power. Milwaukee&apos;s REDLINK PLUS is the most advanced.
                  </p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
                <p className="text-sm text-foreground/80">
                  <strong className="text-foreground">Always wear:</strong> Safety chaps, steel-toe
                  boots, eye protection, hearing protection, and gloves. The chain is just as sharp
                  and dangerous as a gas saw.
                </p>
              </div>
            </section>

            {/* ========== MAINTENANCE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Electric Chainsaw Maintenance Guide
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                No fuel mixing, no carburetor cleaning, no spark plug swaps. But electric chainsaws
                aren&apos;t zero-maintenance:
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <ul className="space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-foreground">Check chain tension before every use.</strong> A loose
                      chain can derail. Pull at the bar bottom &mdash; it should snap back with no sag.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-foreground">Keep bar oil reservoir full.</strong> Running dry
                      causes expensive chain and bar wear. Check before every session.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-foreground">Sharpen the chain every 3&ndash;5 uses.</strong> A dull
                      chain strains the motor and increases kickback risk. Replace after 3&ndash;5 sharpenings.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-foreground">Store batteries at 40&ndash;60% charge.</strong> Lithium
                      cells degrade faster at full or empty. Cool, dry storage extends life.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq, idx) => (
                  <details
                    key={idx}
                    className="bg-card border border-border rounded-xl group"
                  >
                    <summary className="p-4 cursor-pointer font-semibold text-foreground hover:text-primary transition-colors list-none flex items-center justify-between">
                      {faq.name}
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-4 pb-4 text-foreground/80 text-sm leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ========== VERDICT ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                Our Verdict
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For most homeowners, the <strong className="text-foreground">EGO CS1804</strong> is the
                  chainsaw to buy. Its 18-inch bar, 6,800 FPM chain speed, tool-less tensioning, and
                  $349 price point hit the perfect balance of capability and value.
                  On a budget? The <strong className="text-foreground">Ryobi 40V HP</strong> at
                  $229 gets you the same 18-inch bar at the lowest price and plugs into the Ryobi 40V ecosystem.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Already own DeWalt or Milwaukee tools? Buy from your platform. The <strong className="text-foreground">DeWalt
                  DCCS670X1</strong> ($329) and <strong className="text-foreground">Milwaukee M18 FUEL</strong> ($549)
                  deliver excellent performance without new battery investments. For arborists, the
                  <strong className="text-foreground"> Stihl MSA 220 C-B</strong> brings unmatched build quality. For
                  lightweight pruning, the <strong className="text-foreground">Makita XCU11SM1</strong> at 8.6 lbs
                  is the most comfortable saw to wield all afternoon.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Whichever you choose: instant start, quiet operation, pennies to run, zero carburetor
                  rebuilds. For residential use in 2026, electric has won.
                </p>
              </div>
            </section>

            {/* ========== RELATED + FINAL CTA ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Reviews</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Link
                  href="/reviews/best-electric-lawn-mower"
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group"
                >
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    Best Electric Lawn Mowers (2026)
                  </h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    EGO vs Greenworks vs Ryobi &mdash; top battery mowers compared.
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2">
                    Read Review <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/reviews"
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group"
                >
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    Browse All GreenReviewsHub Reviews
                  </h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    Power stations, e-bikes, smart home tech, and more.
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2">
                    View All <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
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
                  decisions. Browse all our in-depth reviews and comparison guides.
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
    </ReviewLayout>
  );
}
