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
    'Best Electric Leaf Blowers (2026): EGO vs Ryobi vs Milwaukee vs DeWalt vs Greenworks',
  description:
    'Compare the best cordless leaf blowers for 2026. In-depth reviews of EGO LB6504, Milwaukee M18 FUEL, DeWalt 60V MAX, Ryobi 40V Whisper, Greenworks 80V, and more. CFM vs MPH explained, noise comparison, and battery platform guide.',
  alternates: {
    canonical: '/reviews/best-electric-leaf-blower',
  },
  openGraph: {
    title: 'Best Electric Leaf Blowers (2026): EGO vs Ryobi vs Milwaukee vs DeWalt',
    description:
      'EGO LB6504 vs Milwaukee M18 FUEL vs DeWalt 60V MAX vs Ryobi Whisper vs Greenworks 80V. Full specs, pros/cons, noise levels, and battery platform guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Leaf Blowers (2026): EGO vs Ryobi vs Milwaukee vs DeWalt vs Greenworks',
  description:
    'Compare the best cordless leaf blowers for 2026. In-depth reviews of EGO LB6504, Milwaukee M18 FUEL, DeWalt DCBL772X1, Ryobi 40V Whisper Series, Greenworks 80V, and EGO LB5804. CFM vs MPH explained, noise comparison, battery platform guide, and electric vs gas savings.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-leaf-blower',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best cordless leaf blower in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO LB6504 is our top pick. It delivers 650 CFM at 180 MPH, weighs 2.5 lbs tool only, and features a turbo button for wet leaves. The 56V platform shares batteries with mowers, trimmers, and chainsaws.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CFM or MPH more important for a leaf blower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CFM (air volume) is generally more important for moving leaves across lawns. MPH (air speed) matters more for dislodging stuck debris. The ideal blower has both high CFM (600+) and high MPH (160+). Think of CFM as broom width and MPH as push force.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric leaf blowers as powerful as gas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for residential use. The EGO LB6504 (650 CFM) and Greenworks 80V (730 CFM) match or exceed most handheld gas blowers (400-600 CFM). Only commercial gas backpack models (700-900+ CFM) still outperform electric.',
      },
    },
    {
      '@type': 'Question',
      name: 'How loud are electric leaf blowers compared to gas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cordless blowers operate at 59-64 dB vs 75-100+ dB for gas. A gas blower at 90 dB is roughly 8 times louder than an electric at 65 dB. The Ryobi Whisper Series at 59 dB is quieter than a conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a cordless leaf blower battery last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On low speed, 45-90 minutes. On turbo, 10-25 minutes. The Greenworks 80V leads at 70 minutes on variable speed. A spare battery eliminates downtime. Cells last 500-1,000+ charge cycles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the same battery for my leaf blower and lawn mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, within the same platform. EGO 56V batteries work across all EGO tools. Ryobi 40V shares across 85+ tools. Milwaukee M18 across 250+ tools. DeWalt FlexVolt is backward-compatible with 20V MAX. Platform buying saves hundreds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there noise ordinances for leaf blowers in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AB 1346 bans new gas small engines by 2028. Los Angeles, Beverly Hills, and Palo Alto already ban gas blowers. Electric blowers are exempt. Models under 65 dB keep you compliant statewide.',
      },
    },
  ],
};

interface Blower {
  name: string;
  badge: string;
  price: string;
  voltage: string;
  cfm: string;
  mph: string;
  weight: string;
  noise: string;
  rating: number;
  bestFor: string;
  affiliateLink: string;
}

const blowers: Blower[] = [
  {
    name: 'EGO LB6504 650 CFM',
    badge: 'Best Overall',
    price: '$299 w/battery',
    voltage: '56V',
    cfm: '650',
    mph: '180',
    weight: '2.5 lbs (tool)',
    noise: '~62 dB',
    rating: 4.7,
    bestFor: 'Most homeowners',
    affiliateLink: '#',
  },
  {
    name: 'Milwaukee M18 FUEL',
    badge: 'Best for Pros',
    price: '$249 tool only',
    voltage: '18V',
    cfm: '600',
    mph: '155',
    weight: '5.1 lbs',
    noise: '~60 dB',
    rating: 4.6,
    bestFor: 'Pros, M18 ecosystem',
    affiliateLink: '#',
  },
  {
    name: 'DeWalt DCBL772X1 60V MAX',
    badge: 'Most Powerful',
    price: '$329 w/battery',
    voltage: '60V',
    cfm: '600',
    mph: '175',
    weight: '9.8 lbs',
    noise: '~64 dB',
    rating: 4.5,
    bestFor: 'Heavy-duty clearing',
    affiliateLink: '#',
  },
  {
    name: 'Ryobi 40V Whisper Series',
    badge: 'Quietest',
    price: '$199 w/battery',
    voltage: '40V',
    cfm: '730',
    mph: '165',
    weight: '7.1 lbs',
    noise: '59 dB whisper',
    rating: 4.4,
    bestFor: 'Noise-sensitive areas',
    affiliateLink: '#',
  },
  {
    name: 'Greenworks 80V',
    badge: 'Best Runtime',
    price: '$279 w/battery',
    voltage: '80V',
    cfm: '730',
    mph: '170',
    weight: '9.4 lbs',
    noise: '~63 dB',
    rating: 4.4,
    bestFor: 'Large properties',
    affiliateLink: '#',
  },
  {
    name: 'EGO LB5804 580 CFM',
    badge: 'Best Value',
    price: '$199 w/battery',
    voltage: '56V',
    cfm: '580',
    mph: '168',
    weight: '5.0 lbs',
    noise: '~61 dB',
    rating: 4.5,
    bestFor: 'Budget-conscious buyers',
    affiliateLink: '#',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`h-4 w-4 ${
            s <= Math.floor(rating)
              ? 'text-yellow-500 fill-yellow-500'
              : s - 0.5 <= rating
              ? 'text-yellow-500 fill-yellow-500/50'
              : 'text-muted-foreground/30'
          }`}
        />
      ))}
      <span className="text-sm font-semibold text-foreground ml-1">{rating}/5</span>
    </div>
  );
}

export default function BestElectricLeafBlower() {
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
                Best Electric Leaf Blowers (2026): EGO vs Ryobi vs Milwaukee vs DeWalt
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span>14 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            {/* Intro / Overview */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Gas leaf blowers are on borrowed time in California. AB 1346 phases out gas small
                engines by 2028, and dozens of cities already ban them outright. Battery blowers
                in 2026 are lighter, quieter, and powerful enough for wet leaves, pine needles,
                grass clippings, and packed debris on hard surfaces.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We compared six top cordless blowers from EGO, Ryobi, Milwaukee, DeWalt, and
                Greenworks. Whether you need maximum airflow, whisper-quiet operation, or a
                pro-grade tool that shares batteries with your entire toolkit, there&apos;s a
                clear winner for every use case.
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
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap mt-0.5">
                    Best Overall
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      EGO LB6504 650 CFM &mdash; $299 w/battery
                    </p>
                    <p className="text-sm text-foreground/70">
                      56V, 650 CFM, 180 MPH, turbo button, variable speed trigger, just 2.5 lbs
                      tool only. The benchmark for cordless blowers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap mt-0.5">
                    Best for Pros
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Milwaukee M18 FUEL &mdash; $249 tool only
                    </p>
                    <p className="text-sm text-foreground/70">
                      18V, 600 CFM, 155 MPH, compact and light. Shares batteries with 250+
                      M18 tools. Built for daily professional use.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap mt-0.5">
                    Best Value
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Ryobi 40V Whisper Series &mdash; $199 w/battery
                    </p>
                    <p className="text-sm text-foreground/70">
                      730 CFM, 165 MPH, whisper mode at just 59 dB. Unbeatable price-to-performance
                      with battery included.
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
                      <th className="text-left p-3 font-semibold text-foreground">Blower</th>
                      <th className="text-left p-3 font-semibold text-foreground">Price</th>
                      <th className="text-left p-3 font-semibold text-foreground">Voltage</th>
                      <th className="text-center p-3 font-semibold text-foreground">CFM</th>
                      <th className="text-center p-3 font-semibold text-foreground">MPH</th>
                      <th className="text-left p-3 font-semibold text-foreground">Weight</th>
                      <th className="text-left p-3 font-semibold text-foreground">Noise</th>
                      <th className="text-center p-3 font-semibold text-foreground">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blowers.map((b, i) => (
                      <tr
                        key={b.name}
                        className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}
                      >
                        <td className="p-3 font-medium text-foreground">
                          <div className="flex flex-col gap-1">
                            <span>{b.name}</span>
                            <span className="text-xs text-primary font-semibold">{b.badge}</span>
                          </div>
                        </td>
                        <td className="p-3 text-foreground/80">{b.price}</td>
                        <td className="p-3 text-foreground/80">{b.voltage}</td>
                        <td className="p-3 text-center text-foreground/80">{b.cfm}</td>
                        <td className="p-3 text-center text-foreground/80">{b.mph}</td>
                        <td className="p-3 text-foreground/80">{b.weight}</td>
                        <td className="p-3 text-foreground/80">{b.noise}</td>
                        <td className="p-3 text-center">
                          <span className="text-yellow-500 font-semibold">{b.rating}</span>
                        </td>
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

              {/* === EGO LB6504 === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    Best Overall
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    EGO LB6504 650 CFM
                  </h3>
                </div>
                <div className="mb-4">
                  <StarRating rating={4.7} />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The EGO LB6504 made us forget gas exists. At just 2.5 pounds (tool only),
                  it&apos;s featherlight yet pushes 650 CFM at 180 MPH &mdash; more airflow
                  than most handheld gas blowers. The variable speed trigger gives fine control
                  for clearing flower beds without scattering mulch, while the turbo button
                  unleashes maximum force for stubborn wet leaves plastered to driveways.
                  EGO&apos;s 56V ARC Lithium platform means the included 5.0Ah battery also
                  powers their mowers, trimmers, and chainsaws. Build quality is excellent,
                  with a brushless motor rated for thousands of hours.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Battery className="h-4 w-4 text-primary" /> Specs
                    </h4>
                    <p className="text-foreground/80">56V | 650 CFM | 180 MPH | 2.5 lbs tool | $299 w/battery</p>
                    <p className="text-foreground/80 mt-1">Turbo button, variable speed, brushless motor</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="h-4 w-4" /> Pros</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Ultra-light at 2.5 lbs tool only</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />650 CFM rivals gas blowers</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Turbo for wet leaves</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />EGO 56V ecosystem</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="h-4 w-4" /> Cons</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Premium price vs Ryobi</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Turbo drains battery fast</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />No flat nozzle included</li>
                    </ul>
                  </div>
                </div>

                <BuyButton
                  productKey="ego-lb6504-650-cfm"
                  source="electric-leaf-blower-hub"
                  variant="primary"
                  label="Check Price — EGO LB6504 650 CFM"
                  showPrice
                  />
              </div>

              {/* === Milwaukee M18 FUEL === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
                    Best for Pros
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Milwaukee M18 FUEL Blower
                  </h3>
                </div>
                <div className="mb-4">
                  <StarRating rating={4.6} />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Milwaukee built the M18 FUEL for professionals who already own the platform.
                  At 18 volts, it punches well above its weight class &mdash; 600 CFM and 155
                  MPH from a compact 5.1-pound package. If you already own M18 drills, impact
                  drivers, saws, or any of Milwaukee&apos;s 250+ M18 tools, you likely have
                  batteries on the shelf that slot right in. The POWERSTATE brushless motor
                  survives daily commercial use, and the ergonomics are the best in this
                  roundup. Landscapers and contractors love this blower because it does double
                  duty as a jobsite cleanup tool and a yard maintenance workhorse.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Battery className="h-4 w-4 text-primary" /> Specs</h4>
                    <p className="text-foreground/80">18V | 600 CFM | 155 MPH | 5.1 lbs | $249 tool only</p>
                    <p className="text-foreground/80 mt-1">POWERSTATE brushless, compact, lock-on trigger</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="h-4 w-4" /> Pros</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />250+ M18 battery sharing</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Best ergonomics and balance</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Built for daily commercial use</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Compact for tight spaces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="h-4 w-4" /> Cons</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Tool-only, batteries add $80&ndash;$150</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Lower CFM/MPH than 56V/60V rivals</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />18V limits peak power</li>
                    </ul>
                  </div>
                </div>

                <BuyButton
                  productKey="milwaukee-m18-fuel-blower"
                  source="electric-leaf-blower-hub"
                  variant="primary"
                  label="Check Price — Milwaukee M18 FUEL Blower"
                  showPrice
                  />
              </div>

              {/* === DeWalt DCBL772X1 === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                    Most Powerful
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    DeWalt DCBL772X1 60V MAX FlexVolt
                  </h3>
                </div>
                <div className="mb-4">
                  <StarRating rating={4.5} />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The DeWalt 60V MAX is a brute. Its axial fan design delivers sustained 600 CFM
                  at 175 MPH with a flatter, wider airflow pattern that moves more material per
                  pass than radial designs. At 9.8 pounds, it&apos;s the heaviest blower on this
                  list &mdash; but that weight comes with a trade-off: the 60V FlexVolt system
                  delivers raw sustained power that doesn&apos;t fade as the battery drains.
                  FlexVolt batteries are backward-compatible with all DeWalt 20V MAX tools,
                  giving you access to one of the largest cordless tool ecosystems in existence.
                  If you need to clear heavy wet debris and don&apos;t mind the extra weight,
                  this is the blower to get.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Battery className="h-4 w-4 text-primary" /> Specs</h4>
                    <p className="text-foreground/80">60V FlexVolt | 600 CFM | 175 MPH | 9.8 lbs | $329 w/battery</p>
                    <p className="text-foreground/80 mt-1">Axial fan, variable speed, concentrator nozzle</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="h-4 w-4" /> Pros</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Sustained power under load</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Axial design moves more per pass</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Works with all 20V MAX tools</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Concentrator nozzle included</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="h-4 w-4" /> Cons</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Heaviest at 9.8 lbs</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Most expensive at $329</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Arm fatigue on long sessions</li>
                    </ul>
                  </div>
                </div>

                <BuyButton
                  productKey="dewalt-dcbl772x1-60v-max-flexvolt"
                  source="electric-leaf-blower-hub"
                  variant="primary"
                  label="Check Price — DeWalt DCBL772X1 60V MAX FlexVolt"
                  showPrice
                  />
              </div>

              {/* === Ryobi 40V Whisper === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                    Quietest
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Ryobi 40V Whisper Series
                  </h3>
                </div>
                <div className="mb-4">
                  <StarRating rating={4.4} />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Ryobi&apos;s Whisper Series is a revelation. At 730 CFM and 165 MPH, it
                  produces more raw airflow than the EGO or Milwaukee &mdash; yet in whisper
                  mode it operates at just 59 dB, quieter than a normal conversation. That
                  makes it the clear choice for homeowners in HOA communities, noise-restricted
                  neighborhoods, or anyone who wants to clear leaves at 7 AM without waking the
                  neighbors. The 40V platform is the most affordable ecosystem in this roundup,
                  with 85+ compatible tools available exclusively at Home Depot. At $199 with
                  battery included, the value is staggering.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Battery className="h-4 w-4 text-primary" /> Specs</h4>
                    <p className="text-foreground/80">40V | 730 CFM | 165 MPH | 7.1 lbs | $199 w/battery</p>
                    <p className="text-foreground/80 mt-1">59 dB whisper mode, variable speed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="h-4 w-4" /> Pros</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Quietest blower at 59 dB</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Highest CFM (730) in roundup</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Unbeatable price w/battery</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />85+ Ryobi 40V tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="h-4 w-4" /> Cons</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Heavier than EGO at 7.1 lbs</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Home Depot exclusive</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Build quality below EGO/Milwaukee</li>
                    </ul>
                  </div>
                </div>

                <BuyButton
                  productKey="ryobi-40v-whisper-series"
                  source="electric-leaf-blower-hub"
                  variant="primary"
                  label="Check Price — Ryobi 40V Whisper Series"
                  showPrice
                  />
              </div>

              {/* === Greenworks 80V === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                    Best Runtime
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Greenworks 80V Blower
                  </h3>
                </div>
                <div className="mb-4">
                  <StarRating rating={4.4} />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The Greenworks 80V is purpose-built for large properties. Its 80-volt system
                  delivers 730 CFM at 170 MPH &mdash; matching the Ryobi on airflow while
                  pushing harder on speed. The standout feature is runtime: up to 70 minutes on
                  variable speed with the included 2.5Ah battery. If you have a half-acre lot
                  with mature trees dumping leaves every fall, this blower clears the entire
                  property without swapping batteries. The 80V ecosystem includes mowers,
                  chainsaws, and trimmers for a unified outdoor power platform.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Battery className="h-4 w-4 text-primary" /> Specs</h4>
                    <p className="text-foreground/80">80V | 730 CFM | 170 MPH | 9.4 lbs | $279 w/battery</p>
                    <p className="text-foreground/80 mt-1">Up to 70 min runtime, variable speed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="h-4 w-4" /> Pros</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Best runtime (70 min)</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />730 CFM + 170 MPH</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Shares with 80V mowers/chainsaws</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Great value for the power</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="h-4 w-4" /> Cons</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Heavy at 9.4 lbs</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Smaller ecosystem</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Less refined trigger control</li>
                    </ul>
                  </div>
                </div>

                <BuyButton
                  productKey="greenworks-80v-blower"
                  source="electric-leaf-blower-hub"
                  variant="primary"
                  label="Check Price — Greenworks 80V Blower"
                  showPrice
                  />
              </div>

              {/* === EGO LB5804 === */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                    Best Value
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    EGO LB5804 580 CFM
                  </h3>
                </div>
                <div className="mb-4">
                  <StarRating rating={4.5} />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The LB5804 is the little sibling of our Best Overall pick and a fantastic entry
                  point into the EGO 56V ecosystem. At $199 with battery, it delivers 580 CFM
                  at 168 MPH &mdash; more than enough for standard suburban yards. You get the
                  same brushless motor reliability and EGO build quality as the premium LB6504,
                  just with slightly less peak airflow and speed. For most homeowners clearing
                  driveways, patios, and standard-size lawns, the difference between 580 CFM
                  and 650 CFM is barely noticeable in practice. If you want EGO quality without
                  the flagship price, this is the one.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Battery className="h-4 w-4 text-primary" /> Specs</h4>
                    <p className="text-foreground/80">56V | 580 CFM | 168 MPH | ~5.0 lbs | $199 w/battery</p>
                    <p className="text-foreground/80 mt-1">Variable speed, brushless, weather-resistant</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2"><Check className="h-4 w-4" /> Pros</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />EGO quality at budget price</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Full 56V ecosystem access</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />Lightweight and easy to handle</li>
                      <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />580 CFM plenty for standard use</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2"><X className="h-4 w-4" /> Cons</h4>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />No turbo button</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Smaller battery = less runtime</li>
                      <li className="flex items-start gap-2"><X className="h-3.5 w-3.5 text-red-400 mt-0.5 shrink-0" />Struggles with heavy wet leaves</li>
                    </ul>
                  </div>
                </div>

                <BuyButton
                  productKey="ego-lb5804-580-cfm"
                  source="electric-leaf-blower-hub"
                  variant="primary"
                  label="Check Price — EGO LB5804 580 CFM"
                  showPrice
                  />
              </div>
            </section>

            {/* ========== CFM vs MPH EXPLAINED ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                CFM vs MPH: What Actually Matters?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Every leaf blower spec sheet lists two numbers: CFM (cubic feet per minute) and
                MPH (miles per hour). Understanding the difference helps you pick the right tool
                for how you actually use a blower.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-foreground">CFM (Air Volume)</h3>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Total volume of air moved. Higher CFM = wider sweep, more leaves per pass.
                    Think of it as the <em>width</em> of a broom. Target 500+ for residential,
                    600+ for serious clearing. Best for open lawns, driveways, and large piles.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-foreground">MPH (Air Speed)</h3>
                  </div>
                  <p className="text-sm text-foreground/80">
                    How fast air exits the nozzle. Higher MPH = more force to dislodge stuck
                    debris. Think of it as how <em>hard</em> the broom pushes. Target 150+ for
                    residential, 170+ for heavy debris. Best for wet leaves and cracks.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  <strong>Bottom line:</strong> CFM matters more than MPH for most homeowners. All
                  six blowers here exceed 500 CFM and 150 MPH. The EGO LB6504 has the best
                  balance at 650 CFM / 180 MPH.
                </p>
              </div>
            </section>

            {/* ========== BATTERY PLATFORM COMPARISON ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Battery Platform Comparison: Which Ecosystem Should You Buy Into?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Buying a blower is really buying into a battery platform. The battery and charger
                often cost half as much as the tool, so choosing wisely saves hundreds over time.
              </p>

              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Platform</th>
                      <th className="text-center p-3 font-semibold text-foreground">Voltage</th>
                      <th className="text-center p-3 font-semibold text-foreground">Tools in Ecosystem</th>
                      <th className="text-left p-3 font-semibold text-foreground">Battery Cost</th>
                      <th className="text-left p-3 font-semibold text-foreground">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">EGO 56V</td>
                      <td className="p-3 text-center text-foreground/80">56V</td>
                      <td className="p-3 text-center text-foreground/80">50+</td>
                      <td className="p-3 text-foreground/80">$149&ndash;$299</td>
                      <td className="p-3 text-foreground/80">Homeowners wanting premium quality</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">Ryobi 40V</td>
                      <td className="p-3 text-center text-foreground/80">40V</td>
                      <td className="p-3 text-center text-foreground/80">85+</td>
                      <td className="p-3 text-foreground/80">$79&ndash;$179</td>
                      <td className="p-3 text-foreground/80">Budget-conscious, Home Depot shoppers</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">Milwaukee M18</td>
                      <td className="p-3 text-center text-foreground/80">18V</td>
                      <td className="p-3 text-center text-foreground/80">250+</td>
                      <td className="p-3 text-foreground/80">$79&ndash;$199</td>
                      <td className="p-3 text-foreground/80">Pros already in M18 ecosystem</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 font-medium text-foreground">DeWalt FlexVolt</td>
                      <td className="p-3 text-center text-foreground/80">60V / 20V</td>
                      <td className="p-3 text-center text-foreground/80">300+</td>
                      <td className="p-3 text-foreground/80">$139&ndash;$249</td>
                      <td className="p-3 text-foreground/80">Contractors in DeWalt 20V MAX ecosystem</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-3 font-medium text-foreground">Greenworks 80V</td>
                      <td className="p-3 text-center text-foreground/80">80V</td>
                      <td className="p-3 text-center text-foreground/80">20+</td>
                      <td className="p-3 text-foreground/80">$129&ndash;$229</td>
                      <td className="p-3 text-foreground/80">Large yards needing maximum power</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  <strong>Starting fresh?</strong> EGO 56V is the best residential platform.{' '}
                  <strong>On a budget?</strong> Ryobi 40V offers the most tools per dollar.{' '}
                  <strong>Already a pro?</strong> Milwaukee M18 or DeWalt 20V/60V &mdash; use the
                  batteries you already own.
                </p>
              </div>
            </section>

            {/* ========== NOISE COMPARISON ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Noise Level Comparison
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Noise is a top reason to switch from gas. Decibels are logarithmic: every 10 dB
                increase sounds roughly twice as loud.
              </p>

              <div className="space-y-2 mb-6">
                {([
                  ['Ryobi Whisper (whisper)', 59, 'bg-green-500', 'w-[39%]'],
                  ['Milwaukee M18 FUEL', 60, 'bg-green-500', 'w-[40%]'],
                  ['EGO LB5804', 61, 'bg-green-600', 'w-[41%]'],
                  ['EGO LB6504', 62, 'bg-green-600', 'w-[42%]'],
                  ['Greenworks 80V', 63, 'bg-yellow-500', 'w-[43%]'],
                  ['DeWalt 60V MAX', 64, 'bg-yellow-500', 'w-[44%]'],
                  ['Typical gas blower', 90, 'bg-red-500', 'w-[70%]'],
                  ['Commercial gas backpack', 100, 'bg-red-700', 'w-[80%]'],
                ] as const).map(([name, db, color, width]) => (
                  <div key={name} className="flex items-center gap-4">
                    <span className="text-sm text-foreground/80 w-52 shrink-0 text-right">{name}</span>
                    <div className="flex-1 bg-muted/30 rounded-full h-6 overflow-hidden">
                      <div className={`${color} ${width} h-full rounded-full flex items-center justify-end pr-2`}>
                        <span className="text-xs font-bold text-foreground">{db} dB</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  <strong>California context:</strong> AB 1346 phases out gas small engines by 2028.
                  LA, Beverly Hills, Palo Alto already ban gas blowers. All six electric blowers
                  here operate below typical noise ordinance limits (65&ndash;75 dB at property line).
                </p>
              </div>
            </section>

            {/* ========== ELECTRIC vs GAS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Electric vs Gas Leaf Blowers: The Full Comparison
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Here&apos;s how battery blowers stack up against gas in every category that matters.
              </p>

              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Category</th>
                      <th className="text-left p-3 font-semibold text-foreground">Electric</th>
                      <th className="text-left p-3 font-semibold text-foreground">Gas</th>
                      <th className="text-center p-3 font-semibold text-foreground">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {([
                      ['Power (CFM)', '580–730', '400–600', 'Electric'],
                      ['Air Speed', '155–180 MPH', '150–200 MPH', 'Tie'],
                      ['Weight', '2.5–9.8 lbs', '8–12 lbs', 'Electric'],
                      ['Noise', '59–64 dB', '75–100 dB', 'Electric'],
                      ['Runtime', '20–70 min', 'Unlimited', 'Gas'],
                      ['Annual Fuel', '$3–$8', '$30–$60', 'Electric'],
                      ['Maintenance', 'Near zero', 'Plugs, filters, carb', 'Electric'],
                      ['Emissions', 'Zero', '20+ lbs CO2/yr', 'Electric'],
                      ['Start-up', 'Pull trigger', 'Pull-cord + choke', 'Electric'],
                      ['CA Legal 2028', 'Compliant', 'Banned (new)', 'Electric'],
                    ] as const).map(([cat, elec, gas, winner], i) => (
                      <tr key={cat} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                        <td className="p-3 font-medium text-foreground">{cat}</td>
                        <td className="p-3 text-foreground/80">{elec}</td>
                        <td className="p-3 text-foreground/80">{gas}</td>
                        <td className="p-3 text-center">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            winner === 'Electric' ? 'bg-green-100 text-green-800' : winner === 'Gas' ? 'bg-red-100 text-red-800' : 'bg-muted text-foreground/70'
                          }`}>{winner}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  <strong>Score:</strong> Electric wins 8 of 10 categories. Gas only leads on
                  runtime, and a spare battery closes that gap. For California, gas blowers will
                  be illegal to buy new by 2028.
                </p>
              </div>
            </section>

            {/* ========== MAINTENANCE SAVINGS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Maintenance &amp; Operating Cost Savings
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold text-foreground">Electric: $3&ndash;$8/year</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Electricity: $3&ndash;$8/year ($0 with rooftop solar)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Maintenance: $0 &mdash; no oil, filters, or spark plugs
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="h-5 w-5 text-red-500" />
                    <h3 className="font-bold text-foreground">Gas: $45&ndash;$90/year</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      Gas + 2-stroke oil: $30&ndash;$60/year
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      Spark plug, air filter, carb: $15&ndash;$30/year
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="h-5 w-5 text-amber-600" />
                  <h3 className="font-bold text-foreground">5-Year Savings: $225&ndash;$450</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Over 5 years, a gas blower costs $225&ndash;$450 in fuel and maintenance. An
                  electric blower costs $15&ndash;$40 &mdash; or $0 with rooftop solar. That
                  savings covers a significant portion of the blower&apos;s purchase price, and
                  batteries shared across multiple tools make the economics even better.
                </p>
              </div>
            </section>

            {/* ========== SOLAR TIE-IN ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Charge From Solar: Zero-Cost Yard Cleanup
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                A cordless leaf blower battery uses roughly 0.1 to 0.3 kWh per full charge. At
                California&apos;s average utility rate, that&apos;s about $0.05&ndash;$0.10 per
                charge. With rooftop solar panels, the cost drops to zero. If you run your blower
                weekly for 10 months, that&apos;s roughly 40 charges per year &mdash; costing
                $2&ndash;$4 from the grid or $0 from solar.
              </p>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="h-5 w-5 text-amber-600" />
                  <h3 className="font-bold text-foreground">Solar-Powered Yard Math</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Blower charge: ~0.2 kWh = about $0.06&ndash;$0.09 at CA rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>40 charges/year = ~$3 from the grid, $0 from rooftop solar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Gas equivalent: $30&ndash;$60/year in fuel + 2-stroke oil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Combine with electric mower + trimmer: entire yard, zero fuel, zero emissions</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== OVERALL PROS / CONS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Pros &amp; Cons of Cordless Leaf Blowers in 2026
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" /> Advantages
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Dramatically quieter (59&ndash;64 dB vs 75&ndash;100 dB)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Zero emissions, fumes, and spilled fuel
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Instant start, near-zero maintenance
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Lighter than most gas models
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      Batteries shared across platform tools
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      CA noise/emissions compliant, free to run with solar
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                    <X className="h-5 w-5" /> Limitations
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      Limited turbo/max runtime (10&ndash;25 min)
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      Battery replacement after 3&ndash;5 years ($100&ndash;$250)
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      Higher upfront cost than budget gas models
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      Can&apos;t match commercial gas backpacks (800+ CFM)
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      Charge time between sessions (30&ndash;90 min)
                    </li>
                  </ul>
                </div>
              </div>
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

            {/* ========== VERDICT ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Final Verdict: Which Leaf Blower Should You Buy?
              </h2>
              <div className="space-y-4">
                {[
                  { badge: 'Best Overall', badgeClass: 'bg-yellow-400 text-yellow-900', name: 'EGO LB6504', desc: '2.5 lbs, 650 CFM, 180 MPH, turbo button. The 56V ecosystem is the strongest residential platform.', rec: 'Most homeowners who want one blower that does everything' },
                  { badge: 'Best for Pros', badgeClass: 'bg-red-100 text-red-800', name: 'Milwaukee M18 FUEL', desc: 'Battery sharing with 250+ M18 tools justifies the choice alone. Built for daily commercial use.', rec: 'Contractors, landscapers, and M18 platform owners' },
                  { badge: 'Quietest', badgeClass: 'bg-purple-100 text-purple-800', name: 'Ryobi 40V Whisper Series', desc: '$199 with battery, 730 CFM, 59 dB whisper mode. Unbeatable for noise-sensitive areas.', rec: 'HOA communities, early morning use, noise-restricted areas' },
                  { badge: 'Best Runtime', badgeClass: 'bg-emerald-100 text-emerald-800', name: 'Greenworks 80V', desc: '70 minutes of runtime, 730 CFM. Won\'t quit before you do on a half-acre lot.', rec: 'Half-acre+ lots, heavy leaf clearing, extended sessions' },
                  { badge: 'Best Value', badgeClass: 'bg-blue-100 text-blue-800', name: 'EGO LB5804', desc: '$199 for EGO quality and 56V ecosystem access. 580 CFM handles standard yards easily.', rec: 'Budget buyers who want premium build quality' },
                ].map((v) => (
                  <div key={v.name} className="bg-card border border-border rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`${v.badgeClass} text-xs font-bold px-3 py-1 rounded-full`}>
                        {v.badge}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 mb-2">
                      <strong>{v.name}</strong> &mdash; {v.desc}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      Best for: {v.rec}
                    </p>
                  </div>
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
