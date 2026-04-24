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
  Calendar,
  Clock,
  Star,
  Zap,
  Battery,
  Shield,
  ChevronRight,
  Check,
  X,
  Sun,
  DollarSign,
  CheckCircle,
  XCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Mini Split AC & Heat Pumps (2026): MrCool DIY vs Easy Pro vs Advantage — Complete Guide',
  description:
    'Compare the best mini split AC systems for 2026. In-depth reviews of MrCool DIY 4th Gen, DIY 5th Gen, Easy Pro, and Advantage. DIY installation guide, energy savings math, and California solar pairing tips.',
  alternates: {
    canonical: '/reviews/best-mini-split-ac',
  },
  openGraph: {
    title:
      'Best Mini Split AC & Heat Pumps (2026): MrCool DIY vs Easy Pro vs Advantage',
    description:
      'MrCool DIY 4th Gen vs 5th Gen vs Easy Pro vs Advantage. Full specs, DIY install guide, energy savings calculator, and California solar pairing strategies.',
    type: 'article',
    publishedTime: '2026-04-17T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Mini Split AC & Heat Pumps (2026): MrCool DIY vs Easy Pro vs Advantage — Complete Guide',
  description:
    'Compare the best ductless mini split heat pumps for 2026. In-depth reviews covering MrCool DIY 4th Gen, DIY 5th Gen, Easy Pro, and Advantage models with DIY installation guide, energy savings analysis, and California solar pairing strategies.',
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
    '@id': 'https://ratereliefca.com/reviews/best-mini-split-ac',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I really install a mini split myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with the MrCool DIY line. Their pre-charged QuickConnect line sets eliminate the need for an HVAC vacuum pump, manifold gauges, or EPA Section 608 certification. You need a drill, level, hole saw, and basic tools. Most homeowners complete the installation in about 4.5 hours. The DIY 4th Gen and 5th Gen both use this system. The Advantage line requires professional installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will I save with a mini split vs central AC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 22.7 SEER2 mini split uses roughly 1,058 kWh over a summer cooling season compared to approximately 1,841 kWh for a 20 SEER central system — that is a 42% reduction in energy consumption. At California electricity rates of $0.30-$0.45/kWh, that translates to $235-$350 in annual cooling savings. Combined with heating efficiency gains, total annual savings can reach up to 26% on energy costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between MrCool DIY 4th Gen and 5th Gen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 5th Gen uses R-454B refrigerant with lower global warming potential (GWP) compared to the 4th Gen R-410A. The 5th Gen achieves slightly higher efficiency at up to 22.7 SEER2 versus 22 SEER2 for the 4th Gen. Both use the same QuickConnect DIY installation system. The 4th Gen is more widely available and has more size options, while the 5th Gen is currently available as a 12K BTU unit at Costco.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a mini split last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With proper maintenance, a mini split system lasts 12-20 years. MrCool units come with a 7-year compressor warranty and 5-year parts warranty. Regular maintenance includes cleaning filters monthly during heavy use and having the outdoor unit inspected annually. The inverter compressor technology in modern mini splits reduces wear compared to traditional on/off cycling systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do mini splits work in cold weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The MrCool DIY 4th Gen operates in heating mode down to -4 degrees Fahrenheit. Mini split heat pumps are significantly more efficient than traditional resistance heating — they move heat rather than generate it, delivering 2-3 times more energy than they consume. In mild California winters, a mini split heat pump can handle 100% of heating needs for most homes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pair a mini split with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely, and this is one of the best combinations for California homeowners. A mini split running on solar-generated electricity effectively provides free cooling and heating during peak sun hours — which aligns with the hottest part of the day when you need AC most. Under NEM 3.0, using solar power directly for your mini split during peak TOU hours avoids the highest electricity rates ($0.40-$0.67/kWh for PG&E peak).',
      },
    },
  ],
};

interface MiniSplitModel {
  name: string;
  badge: string;
  price: string;
  seer2: string;
  btuRange: string;
  heatingMin: string;
  refrigerant: string;
  install: string;
  warranty: string;
  multiZone: string;
  affiliateLink: string;
}

const models: MiniSplitModel[] = [
  {
    name: 'MrCool DIY 4th Gen',
    badge: 'Best DIY Install',
    price: '$1,549 - $3,329',
    seer2: '22 SEER2',
    btuRange: '12K - 36K BTU',
    heatingMin: '-4\u00B0F',
    refrigerant: 'R-410A',
    install: 'DIY (QuickConnect)',
    warranty: '7yr compressor / 5yr parts',
    multiZone: 'Up to 6 zones ($7,300)',
    affiliateLink: '#',
  },
  {
    name: 'MrCool DIY 5th Gen',
    badge: 'Newest Model',
    price: 'From ~$1,600',
    seer2: '22.7 SEER2',
    btuRange: '12K BTU',
    heatingMin: '-4\u00B0F',
    refrigerant: 'R-454B (low GWP)',
    install: 'DIY (QuickConnect)',
    warranty: '7yr compressor / 5yr parts',
    multiZone: 'TBD',
    affiliateLink: '#',
  },
  {
    name: 'MrCool Easy Pro',
    badge: 'Best Performance',
    price: '~40% more than DIY',
    seer2: 'Highest in lineup',
    btuRange: '12K - 36K BTU',
    heatingMin: '-4\u00B0F',
    refrigerant: 'R-410A',
    install: 'DIY-adjacent / Pro',
    warranty: '7yr compressor / 5yr parts',
    multiZone: 'Up to 5 zones',
    affiliateLink: '#',
  },
  {
    name: 'MrCool Advantage',
    badge: 'Best Budget',
    price: 'Lowest in lineup',
    seer2: 'Up to 20 SEER2',
    btuRange: '12K - 36K BTU',
    heatingMin: '5\u00B0F',
    refrigerant: 'R-410A',
    install: 'Professional required',
    warranty: '7yr compressor / 5yr parts',
    multiZone: 'Up to 5 zones',
    affiliateLink: '#',
  },
];

export default function BestMiniSplitACPage() {
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
      <main className="min-h-screen py-12 px-4" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto">
          <article>

            {/* ========== BREADCRUMB ========== */}
            <nav className="flex items-center gap-2 text-sm text-foreground/60 mb-8">
              <Link href="/reviews" className="hover:text-primary transition-colors flex items-center gap-1">
                <ArrowLeft className="h-3 w-3" />
                Reviews
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground/80">Best Mini Split AC</span>
            </nav>

            {/* ========== HEADER ========== */}
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-blue-500/15 text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  <Star className="h-3 w-3" />
                  Comparison Guide
                </span>
                <span className="inline-flex items-center gap-1 bg-green-500/15 text-green-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  <Shield className="h-3 w-3" />
                  Independently Reviewed
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Best Mini Split AC &amp; Heat Pumps (2026): MrCool DIY vs Easy Pro vs Advantage
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Ductless mini splits are the most efficient way to heat and cool your home — and with
                the MrCool DIY line, you can install one yourself in under 5 hours, saving $3,000-$8,000
                in labor costs. We break down every model to help you pick the right one.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Updated April 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  14 min read
                </span>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80&auto=format&fit=crop' alt='Mini-split AC unit' className='w-full h-64 object-cover' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* ========== QUICK PICKS ========== */}
            <section className="mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Quick Picks
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Best DIY Install</span>
                    <h3 className="font-bold text-foreground mt-1">MrCool DIY 4th Gen</h3>
                    <p className="text-sm text-foreground/70 mt-1">From $1,549. No HVAC tools or certification needed. Pre-charged QuickConnect line sets.</p>
                    <Link href="#mrcool-diy-4th-gen" className="text-sm text-primary font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                      Read review <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Newest Model</span>
                    <h3 className="font-bold text-foreground mt-1">MrCool DIY 5th Gen</h3>
                    <p className="text-sm text-foreground/70 mt-1">Low-GWP R-454B refrigerant. Up to 22.7 SEER2. Same easy DIY install.</p>
                    <Link href="#mrcool-diy-5th-gen" className="text-sm text-primary font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                      Read review <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Best Performance</span>
                    <h3 className="font-bold text-foreground mt-1">MrCool Easy Pro</h3>
                    <p className="text-sm text-foreground/70 mt-1">Top efficiency in the lineup. Outperforms DIY and Advantage in cooling tests.</p>
                    <Link href="#mrcool-easy-pro" className="text-sm text-primary font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                      Read review <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Best Budget</span>
                    <h3 className="font-bold text-foreground mt-1">MrCool Advantage</h3>
                    <p className="text-sm text-foreground/70 mt-1">Lowest price in the lineup. Requires professional install but great value.</p>
                    <Link href="#mrcool-advantage" className="text-sm text-primary font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                      Read review <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== WHY MINI SPLITS ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why Mini Splits Are Taking Over California Homes
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Traditional central HVAC systems cost $8,000-$15,000 installed and waste energy
                pushing conditioned air through leaky ductwork. Ductless mini splits eliminate
                that waste entirely. They mount directly on your wall, connect to an outdoor
                compressor via a small conduit, and let you control the temperature in each
                room independently.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The efficiency difference is dramatic. A high-efficiency mini split rated at
                22.7 SEER2 uses roughly 1,058 kWh over a summer cooling season, compared to
                approximately 1,841 kWh for a 20 SEER central system. That is a 42% reduction
                in cooling energy consumption. At California electricity rates, that gap
                translates to hundreds of dollars every year.
              </p>
              <div className="bg-card border border-border rounded-lg p-4 mb-4">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  <strong className="text-amber-300">The math:</strong> With PG&amp;E peak TOU rates
                  at $0.40-$0.48/kWh, those 783 saved kWh equal <strong>$313-$376 in annual
                  cooling savings alone</strong>. Add heating season savings and the total can
                  reach up to 26% off your energy bill.
                </p>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                And here is the game changer: with MrCool&apos;s DIY line, you can install a
                mini split yourself in about 4.5 hours — no HVAC license, no vacuum pump, no
                EPA certification. That saves $3,000-$8,000 in professional installation costs,
                bringing the total cost of a ductless system to $1,549-$3,329 depending on
                size.
              </p>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-500/15">
                      <th className="text-left p-3 font-semibold text-foreground">Spec</th>
                      {models.map((m) => (
                        <th key={m.name} className="text-left p-3 font-semibold text-foreground">
                          <div>{m.name}</div>
                          <span className="text-xs font-medium text-primary">{m.badge}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Price</td>
                      {models.map((m) => (
                        <td key={m.name} className="p-3 text-foreground/80">{m.price}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-border bg-card">
                      <td className="p-3 font-medium text-foreground">Efficiency</td>
                      {models.map((m) => (
                        <td key={m.name} className="p-3 text-foreground/80">{m.seer2}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">BTU Range</td>
                      {models.map((m) => (
                        <td key={m.name} className="p-3 text-foreground/80">{m.btuRange}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-border bg-card">
                      <td className="p-3 font-medium text-foreground">Heating Min Temp</td>
                      {models.map((m) => (
                        <td key={m.name} className="p-3 text-foreground/80">{m.heatingMin}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Refrigerant</td>
                      {models.map((m) => (
                        <td key={m.name} className="p-3 text-foreground/80">{m.refrigerant}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-border bg-card">
                      <td className="p-3 font-medium text-foreground">Installation</td>
                      {models.map((m) => (
                        <td key={m.name} className="p-3 text-foreground/80">{m.install}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Warranty</td>
                      {models.map((m) => (
                        <td key={m.name} className="p-3 text-foreground/80">{m.warranty}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-border bg-card">
                      <td className="p-3 font-medium text-foreground">Multi-Zone</td>
                      {models.map((m) => (
                        <td key={m.name} className="p-3 text-foreground/80">{m.multiZone}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== DETAILED REVIEW: DIY 4TH GEN ========== */}
            <section id="mrcool-diy-4th-gen" className="mb-10 scroll-mt-20">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-card border-b border-border p-6">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        Best DIY Install
                      </span>
                      <h2 className="text-2xl font-bold text-foreground">MrCool DIY 4th Gen</h2>
                      <p className="text-foreground/60 mt-1">The original DIY mini split that started it all</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">$1,549 - $3,329</div>
                      <div className="text-sm text-foreground/60">12K - 24K BTU at Home Depot</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The MrCool DIY 4th Gen is the unit that proved homeowners can install their own
                    mini split. Its pre-charged QuickConnect line sets are the key innovation — the
                    refrigerant is already sealed inside, so you never need to handle R-410A, own a
                    vacuum pump, or hold an EPA Section 608 certification. You run the line set from
                    the indoor unit through a 3-inch hole in your wall to the outdoor compressor,
                    tighten the fittings, and the system is ready.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    At 22 SEER2, it significantly outperforms most central AC systems. The inverter
                    compressor adjusts speed continuously rather than cycling on and off, which means
                    more consistent temperatures and less energy waste. It heats down to -4&deg;F,
                    making it a true year-round solution even in California&apos;s colder mountain
                    and northern communities.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-600" /> Pros
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          True DIY install — no HVAC tools or EPA cert needed
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          22 SEER2 efficiency saves up to 26% on energy costs
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Heats down to -4&deg;F for year-round use
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Multi-zone capable up to 6 zones
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Widely available at Home Depot and other retailers
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-1">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          R-410A refrigerant being phased out (higher GWP)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Not the most efficient in the MrCool lineup
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Line sets have fixed lengths — measure carefully before ordering
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Key Specs</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                      <div>
                        <div className="text-foreground/60">Efficiency</div>
                        <div className="font-semibold text-foreground">22 SEER2</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Sizes</div>
                        <div className="font-semibold text-foreground">12K-36K BTU</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Heating</div>
                        <div className="font-semibold text-foreground">Down to -4&deg;F</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Install Time</div>
                        <div className="font-semibold text-foreground">~4.5 hours</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <BuyButton
                      productKey="mrcool-diy-4th-gen"
                      source="best-mini-split-ac"
                      variant="primary"
                      label="Check Price — MrCool DIY 4th Gen"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ========== DETAILED REVIEW: DIY 5TH GEN ========== */}
            <section id="mrcool-diy-5th-gen" className="mb-10 scroll-mt-20">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-green-500/10 border-b border-border p-6">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <span className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        Newest Model
                      </span>
                      <h2 className="text-2xl font-bold text-foreground">MrCool DIY 5th Gen</h2>
                      <p className="text-foreground/60 mt-1">Next-gen refrigerant, peak efficiency</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">From ~$1,600</div>
                      <div className="text-sm text-foreground/60">12K BTU at Costco</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The 5th Gen is MrCool&apos;s answer to the global refrigerant transition. It uses
                    R-454B, which has a significantly lower global warming potential (GWP) than the
                    R-410A used in the 4th Gen. This matters because the EPA is phasing down HFC
                    refrigerants under the AIM Act, and R-454B is the industry&apos;s leading
                    replacement. Buying the 5th Gen means your system uses the refrigerant of the
                    future, not the past.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Efficiency gets a bump too — up to 22.7 SEER2 compared to the 4th Gen&apos;s
                    22 SEER2. The same QuickConnect DIY installation system carries over, so the
                    install experience is identical. Currently available as a 12K BTU single-zone
                    unit at Costco, with more sizes expected to roll out. If you are buying a
                    single-zone system and want the latest technology, the 5th Gen is the one to get.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-600" /> Pros
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          R-454B refrigerant — future-proof, lower environmental impact
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Highest SEER2 rating in the DIY lineup (22.7)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Same proven QuickConnect DIY install
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Available at Costco
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-1">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Limited to 12K BTU currently — fewer size options
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Multi-zone options not yet available
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Newer product with less long-term track record
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Key Specs</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                      <div>
                        <div className="text-foreground/60">Efficiency</div>
                        <div className="font-semibold text-foreground">22.7 SEER2</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Size</div>
                        <div className="font-semibold text-foreground">12K BTU</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Refrigerant</div>
                        <div className="font-semibold text-foreground">R-454B</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Install</div>
                        <div className="font-semibold text-foreground">DIY (~4.5 hrs)</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <BuyButton
                      productKey="mrcool-diy-5th-gen"
                      source="best-mini-split-ac"
                      variant="primary"
                      label="Check Price — MrCool DIY 5th Gen"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ========== DETAILED REVIEW: EASY PRO ========== */}
            <section id="mrcool-easy-pro" className="mb-10 scroll-mt-20">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-purple-500/10 border-b border-border p-6">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <span className="inline-block bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        Best Performance
                      </span>
                      <h2 className="text-2xl font-bold text-foreground">MrCool Easy Pro</h2>
                      <p className="text-foreground/60 mt-1">Maximum efficiency, professional-grade results</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">~40% More Than DIY</div>
                      <div className="text-sm text-foreground/60">Premium tier pricing</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The Easy Pro sits at the top of MrCool&apos;s lineup for a reason: it
                    consistently outperforms both the DIY and Advantage lines in cooling efficiency
                    tests. If you are optimizing for the lowest possible energy bills and want the
                    best performance money can buy, this is the unit.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The &quot;DIY-adjacent&quot; installation means you can handle much of the setup
                    yourself, but some steps may benefit from professional involvement depending on
                    your local codes and comfort level. At roughly 40% more than the DIY line, the
                    premium buys you measurably better cooling efficiency — which, at California
                    electricity rates, can pay for itself over the system&apos;s 12-20 year lifespan.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-600" /> Pros
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Highest cooling efficiency in the MrCool lineup
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Outperforms DIY and Advantage in head-to-head tests
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Professional-grade build quality
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Multi-zone up to 5 zones
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-1">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          40% price premium over DIY line
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          May require some professional assistance
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Harder to find at big-box retailers
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Key Specs</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                      <div>
                        <div className="text-foreground/60">Efficiency</div>
                        <div className="font-semibold text-foreground">Highest in lineup</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Sizes</div>
                        <div className="font-semibold text-foreground">12K-36K BTU</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Heating</div>
                        <div className="font-semibold text-foreground">Down to -4&deg;F</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Install</div>
                        <div className="font-semibold text-foreground">DIY-adjacent / Pro</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <BuyButton
                      productKey="mrcool-easy-pro"
                      source="best-mini-split-ac"
                      variant="primary"
                      label="Check Price — MrCool Easy Pro"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ========== DETAILED REVIEW: ADVANTAGE ========== */}
            <section id="mrcool-advantage" className="mb-10 scroll-mt-20">
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-card border-b border-border p-6">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <span className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                        Best Budget
                      </span>
                      <h2 className="text-2xl font-bold text-foreground">MrCool Advantage</h2>
                      <p className="text-foreground/60 mt-1">Lowest entry price, professional installation</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">Lowest in Lineup</div>
                      <div className="text-sm text-foreground/60">Equipment cost only</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The Advantage is MrCool&apos;s most affordable line. It drops the QuickConnect
                    DIY system in favor of traditional flare fittings, which means you need an HVAC
                    technician with a vacuum pump, manifold gauges, and EPA certification to complete
                    the installation. The upside? The equipment itself costs less than the DIY line.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    If you are already planning to hire an HVAC professional — maybe because your
                    local code requires it, or you just prefer having a pro handle it — the Advantage
                    gives you MrCool quality at the lowest equipment price. The efficiency is slightly
                    lower at up to 20 SEER2 (vs 22+ for the DIY line), and heating performance drops
                    off below 5&deg;F rather than -4&deg;F, but for most California climates that
                    difference is negligible.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-600" /> Pros
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Lowest equipment price in MrCool lineup
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Professional install means guaranteed code compliance
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Same 7-year compressor warranty
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          Multi-zone up to 5 zones
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-1">
                        <XCircle className="h-4 w-4 text-red-500" /> Cons
                      </h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Requires professional HVAC installation ($1,500-$3,000+ labor)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Lower efficiency (20 SEER2 vs 22+)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Heating only to 5&deg;F (vs -4&deg;F for DIY)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-foreground/80">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          Total installed cost may exceed DIY line
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Key Specs</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                      <div>
                        <div className="text-foreground/60">Efficiency</div>
                        <div className="font-semibold text-foreground">Up to 20 SEER2</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Sizes</div>
                        <div className="font-semibold text-foreground">12K-36K BTU</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Heating</div>
                        <div className="font-semibold text-foreground">Down to 5&deg;F</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Install</div>
                        <div className="font-semibold text-foreground">Professional</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <BuyButton
                      productKey="mrcool-advantage"
                      source="best-mini-split-ac"
                      variant="primary"
                      label="Check Price — MrCool Advantage"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ========== DIY INSTALLATION GUIDE ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                DIY Installation Guide: What You Actually Need
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The biggest selling point of the MrCool DIY line is that you can install it
                yourself. Here is exactly what that involves — no sugarcoating.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-4">Tools You Need</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80"><strong>Drill with masonry bit</strong> — for the 3-inch wall penetration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80"><strong>3-inch hole saw</strong> — standard size for the line set pass-through</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80"><strong>Level</strong> — indoor unit must be perfectly level for drainage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80"><strong>Wrenches (2)</strong> — for tightening QuickConnect fittings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80"><strong>Stud finder</strong> — mounting bracket goes into studs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80"><strong>Caulk gun</strong> — seal the wall penetration</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-4">Installation Steps (Simplified)</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Mount the indoor bracket</h4>
                      <p className="text-sm text-foreground/70">Find studs, drill pilot holes, secure the mounting plate. Must be level and at least 7 feet from the floor.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Drill the wall penetration</h4>
                      <p className="text-sm text-foreground/70">Use the 3-inch hole saw to cut through the exterior wall. Angle slightly downward for drainage.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Run the line set</h4>
                      <p className="text-sm text-foreground/70">Feed the pre-charged QuickConnect line set through the wall. Connect to the indoor unit — just hand-tighten plus a wrench turn.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Position the outdoor unit</h4>
                      <p className="text-sm text-foreground/70">Place on a level pad or wall brackets. Connect the other end of the line set with the same QuickConnect fittings.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Wire the electrical connection</h4>
                      <p className="text-sm text-foreground/70">Connect the power cable from outdoor unit to a dedicated 20A or 30A breaker (depending on unit size). This step may require a permit in some jurisdictions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Seal, test, and enjoy</h4>
                      <p className="text-sm text-foreground/70">Caulk the wall penetration, power on the unit, and run through the setup on the remote. Total time: approximately 4.5 hours.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <strong className="text-red-300">Important:</strong> Check your local building codes
                  before installing. Some California cities require permits for HVAC work, and the
                  electrical connection may need to be done by a licensed electrician. The
                  refrigerant side (line set connection) does not require EPA certification with
                  MrCool&apos;s QuickConnect system since you never open the refrigerant circuit.
                </p>
              </div>
            </section>

            {/* ========== ENERGY SAVINGS MATH ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Energy Savings: The Real Math
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Mini split efficiency is measured in SEER2 (Seasonal Energy Efficiency Ratio).
                Higher SEER2 means less electricity consumed per BTU of cooling delivered. Here
                is how the numbers play out in real California energy costs.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-4">Summer Cooling Season Comparison</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                    <div>
                      <div className="font-semibold text-foreground">Old Central AC (14 SEER)</div>
                      <div className="text-sm text-foreground/60">Typical system installed before 2015</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">~2,571 kWh</div>
                      <div className="text-sm text-foreground/60">per summer</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                    <div>
                      <div className="font-semibold text-foreground">Modern Central AC (20 SEER)</div>
                      <div className="text-sm text-foreground/60">Current high-efficiency central</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-amber-600">~1,841 kWh</div>
                      <div className="text-sm text-foreground/60">per summer</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                    <div>
                      <div className="font-semibold text-foreground">MrCool DIY 5th Gen (22.7 SEER2)</div>
                      <div className="text-sm text-foreground/60">Best-in-class mini split</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">~1,058 kWh</div>
                      <div className="text-sm text-foreground/60">per summer</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-4">Annual Savings at California Rates</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 font-semibold">Utility</th>
                        <th className="text-left p-2 font-semibold">Peak Rate</th>
                        <th className="text-left p-2 font-semibold">kWh Saved vs 14 SEER</th>
                        <th className="text-left p-2 font-semibold">Annual Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-500/20">
                        <td className="p-2 text-foreground/80">PG&amp;E</td>
                        <td className="p-2 text-foreground/80">$0.40-$0.48/kWh</td>
                        <td className="p-2 text-foreground/80">1,513 kWh</td>
                        <td className="p-2 font-semibold text-green-600">$605-$726</td>
                      </tr>
                      <tr className="border-b border-slate-500/20">
                        <td className="p-2 text-foreground/80">SCE</td>
                        <td className="p-2 text-foreground/80">$0.36-$0.52/kWh</td>
                        <td className="p-2 text-foreground/80">1,513 kWh</td>
                        <td className="p-2 font-semibold text-green-600">$545-$787</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-foreground/80">SDG&amp;E</td>
                        <td className="p-2 text-foreground/80">$0.47-$0.70/kWh</td>
                        <td className="p-2 text-foreground/80">1,513 kWh</td>
                        <td className="p-2 font-semibold text-green-600">$711-$1,059</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-foreground/50 mt-3">
                  Savings calculated comparing 14 SEER old central AC (2,571 kWh) to 22.7 SEER2
                  mini split (1,058 kWh) for cooling season only. Actual savings vary by usage
                  patterns, home size, insulation, and climate zone. Rates as of April 2026 CPUC filings.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  <strong className="text-green-300">Payback period:</strong> A MrCool DIY 4th Gen
                  12K BTU at $1,549 (self-installed) saving $600/year on a PG&amp;E bill pays for
                  itself in under 2.6 years. With a 12-20 year lifespan, that is 10-17 years of
                  pure savings.
                </p>
              </div>
            </section>

            {/* ========== SIZING GUIDE ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What Size Mini Split Do You Need?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Mini splits are sized in BTU (British Thermal Units). The right size depends on
                the square footage of the space you are conditioning. Here is a general guide:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">9K BTU</div>
                  <div className="text-sm text-foreground/70 mt-1">Up to 350 sq ft</div>
                  <div className="text-xs text-foreground/50 mt-1">Bedroom, home office</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">12K BTU</div>
                  <div className="text-sm text-foreground/70 mt-1">350-550 sq ft</div>
                  <div className="text-xs text-foreground/50 mt-1">Large bedroom, studio</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">18K BTU</div>
                  <div className="text-sm text-foreground/70 mt-1">550-800 sq ft</div>
                  <div className="text-xs text-foreground/50 mt-1">Living room, open plan</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">24K-36K BTU</div>
                  <div className="text-sm text-foreground/70 mt-1">800-1,500 sq ft</div>
                  <div className="text-xs text-foreground/50 mt-1">Great room, multi-zone</div>
                </div>
              </div>
              <p className="text-sm text-foreground/60">
                For California&apos;s Inland Empire, Central Valley, and desert communities where
                summer temperatures regularly exceed 100&deg;F, consider sizing up one step for
                better performance during extreme heat.
              </p>
            </section>

            {/* ========== CALIFORNIA + SOLAR PAIRING ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Sun className="h-6 w-6 text-primary" />
                California Homeowners: Pair Your Mini Split with Solar
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A mini split is one of the smartest energy investments a California homeowner
                can make. But the smartest move? Pairing it with rooftop solar. Here is why the
                combination is so powerful:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    TOU Rate Arbitrage
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    California utilities charge the highest rates during peak hours (4-9 PM). But
                    your solar panels produce the most power from 10 AM to 4 PM — exactly when you
                    need cooling most. Running your mini split on solar-generated electricity during
                    the day means you avoid peak TOU rates entirely. PG&amp;E peak rates run
                    $0.40-$0.48/kWh. Solar electricity costs you nothing once the panels are paid for.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Battery className="h-4 w-4 text-primary" />
                    Pre-Cool Strategy
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Under NEM 3.0, excess solar exported to the grid earns very little. A better
                    strategy: use your solar to pre-cool your home with the mini split before peak
                    hours begin at 4 PM. Your home acts as a thermal battery — cool it down to
                    68&deg;F by 3:30 PM, then set the mini split to a higher temp or eco mode
                    during peak hours. You stay comfortable while barely touching the grid.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    Combined Savings
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    A high-efficiency mini split alone can cut cooling costs by 42%. Solar panels
                    can offset 80-100% of your remaining electricity. Together, a California
                    homeowner paying $250/month to their utility could see that drop to a fixed
                    $100-$125/month solar payment — locked in for the life of the system, immune
                    to rate increases.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  More Energy-Saving Product Reviews
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  GreenReviewsHub independently reviews the best green energy products — from portable
                  power stations to e-bikes to smart HVAC. Find the right product for your home.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Browse All Reviews
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* ========== WHO SHOULD BUY WHAT ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Which Mini Split Should You Buy?
              </h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">You want to save the most money overall</h3>
                  <p className="text-sm text-foreground/80">
                    <ArrowRight className="h-3 w-3 inline text-primary mr-1" />
                    <strong>MrCool DIY 4th Gen.</strong> The sweet spot. DIY install saves $3,000-$8,000
                    on labor, 22 SEER2 cuts energy costs, and it is widely available in multiple sizes.
                    Best all-around value.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">You want the latest technology</h3>
                  <p className="text-sm text-foreground/80">
                    <ArrowRight className="h-3 w-3 inline text-primary mr-1" />
                    <strong>MrCool DIY 5th Gen.</strong> R-454B refrigerant is the future, and 22.7 SEER2
                    is the best efficiency in the DIY class. Limited to 12K BTU currently, so best
                    for single-room applications.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">You want maximum performance and do not mind paying more</h3>
                  <p className="text-sm text-foreground/80">
                    <ArrowRight className="h-3 w-3 inline text-primary mr-1" />
                    <strong>MrCool Easy Pro.</strong> The best efficiency numbers in MrCool&apos;s
                    entire lineup. Worth the 40% premium if you are in a high-rate utility territory
                    (SDG&amp;E) where every efficiency point saves real money.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">You are hiring an HVAC tech anyway</h3>
                  <p className="text-sm text-foreground/80">
                    <ArrowRight className="h-3 w-3 inline text-primary mr-1" />
                    <strong>MrCool Advantage.</strong> Lowest equipment cost. If you need professional
                    install for code compliance or personal preference, this gives you the best
                    hardware value. Factor in $1,500-$3,000 for labor.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <details className="border border-border rounded-lg group" open>
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-card transition-colors rounded-lg">
                    Can I really install a mini split myself?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Yes, with the MrCool DIY line. Their pre-charged QuickConnect line sets eliminate
                    the need for an HVAC vacuum pump, manifold gauges, or EPA Section 608
                    certification. You need a drill, level, hole saw, and basic hand tools. Most
                    homeowners complete the installation in about 4.5 hours. The Advantage line
                    requires professional installation since it uses traditional flare fittings.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-card transition-colors rounded-lg">
                    How much will I save on my energy bill?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    A 22.7 SEER2 mini split uses roughly 1,058 kWh over a summer cooling season
                    compared to approximately 1,841 kWh for a 20 SEER central system — a 42%
                    reduction. At California rates of $0.30-$0.70/kWh depending on your utility and
                    TOU tier, that translates to $235-$1,059 in annual cooling savings. Combined
                    with heating season efficiency gains, total energy savings can reach up to 26%.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-card transition-colors rounded-lg">
                    What is the difference between the DIY 4th Gen and 5th Gen?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    The 5th Gen uses R-454B refrigerant with lower global warming potential compared
                    to the 4th Gen&apos;s R-410A. It achieves slightly higher efficiency at up to
                    22.7 SEER2 versus 22 SEER2. Both use the same QuickConnect DIY installation.
                    The 4th Gen is more widely available with more size options (12K-36K BTU), while
                    the 5th Gen is currently a 12K BTU unit available at Costco.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-card transition-colors rounded-lg">
                    How long does a mini split last?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    With proper maintenance, a mini split system lasts 12-20 years. MrCool units
                    come with a 7-year compressor warranty and 5-year parts warranty. Maintenance is
                    straightforward: clean the filters monthly during heavy use, keep the outdoor
                    unit clear of debris, and have it inspected annually. The inverter compressor
                    technology reduces wear compared to traditional on/off cycling.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-card transition-colors rounded-lg">
                    Do mini splits work in cold weather?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Yes. The MrCool DIY 4th Gen operates in heating mode down to -4&deg;F. Mini
                    split heat pumps are significantly more efficient than resistance heating —
                    they move heat rather than generate it, delivering 2-3 times more energy than
                    they consume. In mild California winters, a mini split heat pump handles 100%
                    of heating needs for most homes. Even in colder mountain communities like Big
                    Bear or Tahoe, they serve as highly efficient primary heat sources.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-card transition-colors rounded-lg">
                    Can I pair a mini split with solar panels?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Absolutely, and it is one of the best combinations for California homeowners. A
                    mini split running on solar-generated electricity provides effectively free
                    cooling and heating during peak sun hours — which aligns with the hottest part
                    of the day when you need AC most. Under NEM 3.0, using solar power directly for
                    your mini split during peak TOU hours avoids the highest electricity rates. A
                    pre-cool strategy (cooling to 68&deg;F before 4 PM peak hours) maximizes solar
                    self-consumption.
                  </div>
                </details>

                <details className="border border-border rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-card transition-colors rounded-lg">
                    Is a mini split better than a window AC unit?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    In almost every way, yes. A mini split at 22+ SEER2 is roughly twice as
                    efficient as most window units (10-15 SEER). Mini splits are dramatically
                    quieter, do not block your window, provide both heating and cooling, last
                    12-20 years instead of 5-8, and maintain more consistent temperatures with
                    inverter technology. The only advantage of window units is the lower upfront
                    cost ($150-$500 vs $1,549+).
                  </div>
                </details>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Find the Best Green Energy Products for Your Home
                </h2>
                <p className="text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
                  GreenReviewsHub independently reviews portable power stations, e-bikes, smart
                  thermostats, electric lawn equipment, and more. Every review includes real specs,
                  honest pros and cons, and energy savings math so you can buy with confidence.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  Explore All GreenReviewsHub Reviews
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
