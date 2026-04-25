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
  Check,
  X,
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
  Sun,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title:
    'Best Battery Powered Pressure Washers (2026): EGO vs Greenworks vs Ryobi vs DeWalt vs Sun Joe',
  description:
    'Compare the best battery powered pressure washers in 2026. In-depth reviews of EGO POWER+ 3200 PSI, Greenworks 60V, Ryobi 40V, DeWalt 20V MAX, and Sun Joe 24V. Cordless pressure washer buying guide with specs, pros/cons, and use-case recommendations.',
  alternates: {
    canonical: '/reviews/best-battery-pressure-washer',
  },
  openGraph: {
    title:
      'Best Battery Powered Pressure Washers (2026)',
    description:
      'EGO POWER+ 3200 PSI vs Greenworks 60V vs Ryobi 40V vs DeWalt 20V MAX vs Sun Joe 24V. Full specs, pros/cons, and buyer guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Battery Powered Pressure Washers (2026): EGO vs Greenworks vs Ryobi vs DeWalt vs Sun Joe',
  description:
    'Compare the best cordless battery-powered pressure washers in 2026. In-depth reviews covering EGO POWER+ 3200 PSI, Greenworks 60V 2100 PSI, Ryobi 40V 1500 PSI, DeWalt 20V MAX 600 PSI, and Sun Joe 24V 350 PSI.',
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
    '@id': 'https://ratereliefca.com/reviews/best-battery-pressure-washer',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are battery powered pressure washers as powerful as gas models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not yet. The most powerful cordless pressure washer in 2026, the EGO POWER+ HPW3200, tops out at 3,200 PSI, which rivals many entry-level gas units. However, gas models routinely deliver 3,000-4,200 PSI with higher GPM (gallons per minute), giving them more cleaning power for heavy-duty jobs like stripping paint or cleaning concrete driveways. For most residential tasks — cars, patios, siding, outdoor furniture, a battery unit in the 1,500-3,200 PSI range is more than sufficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a battery powered pressure washer run on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Runtime varies widely by battery capacity and pressure setting. High-end models like the EGO POWER+ 3200 PSI with the 10.0 Ah battery can run for approximately 60-90 minutes on low pressure and 20-30 minutes at max pressure. Mid-range units like the Greenworks 60V typically deliver 30-45 minutes. Compact models like the DeWalt 20V MAX and Sun Joe 24V run for 10-20 minutes, making them suited to quick spot-cleaning tasks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a battery pressure washer to clean a driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but you need at least 2,000 PSI for effective concrete cleaning. The EGO POWER+ 3200 PSI and Greenworks 60V 2100 PSI are both capable of cleaning driveways, patios, and sidewalks. Lower-PSI models like the Ryobi 40V (1,500 PSI) can handle lightly soiled concrete but will struggle with oil stains or deep grime. For large driveways, pair a high-PSI cordless washer with a surface cleaner attachment for the best results.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best battery pressure washer for car washing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For car washing, you want moderate pressure (1,000-1,800 PSI) with a wide-angle nozzle to avoid damaging paint. The Ryobi 40V 1500 PSI is our top pick for car detailing — it delivers enough pressure to blast off dirt and road grime without risking paint damage, and its 40V battery platform is shared with dozens of other Ryobi tools. The Greenworks 60V at 2,100 PSI also works well on a low-pressure setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do battery powered pressure washers need a garden hose connection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most battery pressure washers require a garden hose connection for their water supply. However, some models, like the DeWalt 20V MAX DCPW550 and Sun Joe 24V, can draw water from a bucket or other still-water source using a siphon hose, making them truly portable for use anywhere without a tap. This is ideal for boat docks, campsites, or remote job sites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are cordless pressure washers worth the higher price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most homeowners, yes. Cordless pressure washers eliminate the hassle of gas engines (no fuel mixing, no pull-starts, no fumes, no winterizing) and corded electrics (no extension cords, no outlet needed). The convenience factor is enormous: grab the unit, pop in a battery, and start cleaning anywhere on your property. The tradeoff is lower peak power and limited runtime compared to gas or corded models. If you already own batteries in a compatible platform (EGO, Ryobi, DeWalt, Greenworks), the tool-only price makes them an even better value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What PSI do I need for different cleaning tasks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Here is a rough guide: 300-600 PSI for rinsing patio furniture, grills, and windows. 1,000-1,500 PSI for washing cars, bikes, boats, and light siding. 1,500-2,500 PSI for cleaning decks, fences, mildew on siding, and patio pavers. 2,500-3,200 PSI for concrete driveways, oil stains, paint prep, and heavy grime. Above 3,200 PSI typically requires a gas model and is used for commercial stripping and industrial cleaning.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  psi: string;
  gpm: string;
  voltage: string;
  battery: string;
  weight: string;
  hoseLength: string;
  waterSource: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'EGO POWER+ HPW3200',
    badge: 'Best Overall',
    price: '$549',
    psi: '3,200 PSI',
    gpm: '1.0 GPM',
    voltage: '56V',
    battery: '10.0 Ah (sold separately)',
    weight: '45 lbs',
    hoseLength: '25 ft',
    waterSource: 'Garden hose',
    affiliateLink: '#',
  },
  {
    name: 'Greenworks 60V 2100 PSI',
    badge: 'Best Value',
    price: '$349',
    psi: '2,100 PSI',
    gpm: '1.2 GPM',
    voltage: '60V',
    battery: '5.0 Ah (included)',
    weight: '37 lbs',
    hoseLength: '25 ft',
    waterSource: 'Garden hose',
    affiliateLink: '#',
  },
  {
    name: 'Ryobi 40V HP 1500 PSI',
    badge: 'Best for Cars',
    price: '$299',
    psi: '1,500 PSI',
    gpm: '1.0 GPM',
    voltage: '40V',
    battery: '4.0 Ah (included)',
    weight: '27 lbs',
    hoseLength: '25 ft',
    waterSource: 'Garden hose',
    affiliateLink: '#',
  },
  {
    name: 'DeWalt 20V MAX DCPW550',
    badge: 'Most Portable',
    price: '$199',
    psi: '600 PSI',
    gpm: '0.8 GPM',
    voltage: '20V',
    battery: '5.0 Ah (included)',
    weight: '8.4 lbs',
    hoseLength: '20 ft',
    waterSource: 'Hose or bucket',
    affiliateLink: '#',
  },
  {
    name: 'Sun Joe 24V-X2-PW1200',
    badge: 'Budget Pick',
    price: '$149',
    psi: '1,196 PSI',
    gpm: '1.0 GPM',
    voltage: '2x 24V (48V)',
    battery: '2x 4.0 Ah (included)',
    weight: '24.3 lbs',
    hoseLength: '20 ft',
    waterSource: 'Hose or bucket',
    affiliateLink: '#',
  },
];

export default function BestBatteryPressureWashers() {
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
                Product Reviews
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight" style={{ color: '#f5f5f5' }}>
                Best Battery Powered Pressure Washers (2026): EGO vs Greenworks vs Ryobi vs DeWalt vs Sun Joe
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=1200&q=80&auto=format&fit=crop' alt='Battery pressure washer in use' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Battery powered pressure washers have come a long way. In 2026, the best cordless
                models deliver enough PSI to tackle real cleaning jobs, driveways, siding, decks,
                cars. without the noise, fumes, and maintenance headaches of gas engines or the
                cord-tangling hassle of plug-in electrics. Just pop in a battery and start spraying.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We tested and compared the top five cordless pressure washers on the market today,
                evaluating them across power output, runtime, build quality, portability, and overall
                value. Whether you need a beast that can strip grime off concrete or a compact unit
                for quick car washes, this guide has you covered.
              </p>
            </div>

            {/* Quick Verdict Box */}
            <div className="rounded-xl p-6 md:p-8 mb-12 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>Quick Verdict: Our Top 3 Picks</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      EGO POWER+ HPW3200 — Best Overall
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      The most powerful cordless pressure washer available. 3,200 PSI rivals entry-level
                      gas units, and the 56V ARC Lithium platform delivers serious runtime. If you want
                      the closest thing to a gas pressure washer without the gas, this is it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Greenworks 60V 2100 PSI. Best Value
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Hits the sweet spot between power and price. 2,100 PSI handles driveways and
                      siding, battery included at $349, and the 60V platform is shared with
                      Greenworks mowers, blowers, and chainsaws.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Ryobi 40V HP 1500 PSI. Best for Cars
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Perfect for car enthusiasts who want a dedicated cordless washer. 1,500 PSI is
                      ideal for vehicles without risking paint damage, and the ONE+ HP platform means
                      you probably already own compatible batteries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Shield className="h-6 w-6 text-primary" />
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[800px] border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Spec</th>
                      {products.map((p) => (
                        <th key={p.name} className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>
                          <div>{p.name}</div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {p.badge}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Price</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.price}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Max PSI</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.psi}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>GPM</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.gpm}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Voltage</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.voltage}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Battery</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.battery}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Weight</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.weight}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Hose Length</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.hoseLength}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Water Source</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.waterSource}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. EGO POWER+ HPW3200 */}
            <section className="mb-14">
              <div className="border-l-4 border-yellow-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-yellow-300 bg-yellow-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Overall
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  1. EGO POWER+ HPW3200 (3,200 PSI)
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$549</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Max PSI</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>3,200</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Flow Rate</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>1.0 GPM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>45 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The EGO POWER+ HPW3200 is the king of cordless pressure washers in 2026. At 3,200 PSI,
                  it delivers cleaning power that matches or exceeds many consumer-grade gas units, making
                  it the first battery model that can genuinely replace a gas pressure washer for most
                  residential tasks. The secret is EGO&apos;s 56V ARC Lithium platform, which can push
                  serious amperage to the pump without overheating.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The unit ships as tool-only at $549, which means you need an EGO 56V battery (the 10.0 Ah
                  BA5600T is recommended for maximum runtime). If you already own EGO lawn equipment, a mower,
                  blower, or string trimmer, your batteries are cross-compatible. This is a huge value
                  proposition for homeowners already invested in the EGO ecosystem.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Build quality is excellent. The frame is sturdy with large wheels for easy maneuvering,
                  the 25-foot high-pressure hose is kink-resistant, and the variable-pressure wand lets you
                  dial from gentle rinse to full blast without swapping nozzles. EGO includes a turbo nozzle,
                  15-degree nozzle, and soap applicator in the box.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The main trade-off is weight. At 45 lbs (before battery), this is not a grab-and-go
                  unit. It is a serious piece of equipment designed to stay on its wheels. But if you want
                  the absolute most power from a cordless pressure washer, nothing else comes close.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>3,200 PSI, the highest of any cordless model</li>
                    <li>Variable-pressure wand eliminates nozzle swapping</li>
                    <li>Cross-compatible with all EGO 56V batteries</li>
                    <li>Excellent build quality with large-wheel cart design</li>
                    <li>Turbo nozzle included for tough stains</li>
                    <li>Virtually silent compared to gas models</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Tool-only: battery sold separately adds $200-$400+</li>
                    <li>Heavy at 45 lbs, not easily portable</li>
                    <li>1.0 GPM is lower than gas models (2.0-2.5 GPM typical)</li>
                    <li>Premium price point for the complete kit</li>
                    <li>Requires garden hose; no bucket-draw mode</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mb-8">
                <BuyButton
                  productKey="ego-power-hpw3200"
                  source="battery-pressure-washer-hub"
                  variant="primary"
                  label="Check Price, EGO POWER+ HPW3200"
                  showPrice
                />
              </div>
            </section>

            {/* 2. Greenworks 60V 2100 PSI */}
            <section className="mb-14">
              <div className="border-l-4 border-gray-400 pl-6 mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#1a1a2e', color: '#a1a1aa' }}>
                  Best Value
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  2. Greenworks 60V 2100 PSI
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$349</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Max PSI</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>2,100</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Flow Rate</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>1.2 GPM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>37 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Greenworks 60V 2100 PSI delivers the best balance of power, portability, and price
                  in the cordless pressure washer market. At $349 with a 5.0 Ah battery and charger
                  included, it costs significantly less than the EGO while still delivering enough punch
                  for driveways, deck cleaning, and siding wash-downs. The 2,100 PSI and 1.2 GPM flow
                  rate give it a cleaning power rating of 2,520 CU (Cleaning Units), which is respectable
                  for any electric pressure washer, corded or cordless.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Greenworks has been making battery-powered outdoor tools for over a decade, and it shows
                  in the build quality. The 60V platform shares batteries with their best-selling lawn
                  mowers, leaf blowers, chainsaws, and snow blowers. If you are building out a gas-free
                  yard care toolkit, the Greenworks ecosystem is one of the most complete available.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The included 5.0 Ah battery provides approximately 30-45 minutes of runtime depending
                  on pressure settings. For a full driveway clean, you may want a second battery or the
                  larger 8.0 Ah option. The quick-connect nozzle system comes with four tips (0-degree,
                  15-degree, 25-degree, and soap) plus a turbo nozzle for stubborn stains.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Battery and charger included at $349. Outstanding value</li>
                    <li>2,100 PSI handles most residential cleaning tasks</li>
                    <li>1.2 GPM, highest flow rate of any cordless model here</li>
                    <li>60V battery cross-compatible with Greenworks lawn tools</li>
                    <li>Lighter than EGO at 37 lbs with decent wheel mobility</li>
                    <li>Four nozzle tips plus turbo nozzle included</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>5.0 Ah battery limits runtime to ~30-45 min</li>
                    <li>Requires garden hose, no bucket-draw option</li>
                    <li>Hose can feel stiff in cold weather</li>
                    <li>Not powerful enough for deeply embedded oil stains</li>
                    <li>Soap tank is small — frequent refills on big jobs</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mb-8">
                <BuyButton
                  productKey="greenworks-60v-2100-psi"
                  source="battery-pressure-washer-hub"
                  variant="primary"
                  label="Check Price — Greenworks 60V 2100 PSI"
                  showPrice
                />
              </div>
            </section>

            {/* 3. Ryobi 40V HP 1500 PSI */}
            <section className="mb-14">
              <div className="border-l-4 border-amber-700 pl-6 mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#1a1a2e', color: '#a1a1aa' }}>
                  Best for Cars
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  3. Ryobi 40V HP Brushless 1500 PSI
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$299</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Max PSI</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>1,500</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Flow Rate</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>1.0 GPM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>27 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Ryobi&apos;s 40V HP Brushless 1500 PSI pressure washer is the sweet spot for car
                  enthusiasts and homeowners who want a dedicated vehicle-washing tool. At 1,500 PSI,
                  it delivers enough pressure to blast away road grime, brake dust, and bird droppings
                  without the risk of damaging automotive paint, clear coat, or trim that higher-PSI
                  units can cause if you are not careful.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The brushless motor is a big upgrade over brushed alternatives, it runs cooler, lasts
                  longer, and extracts more runtime from each battery charge. The included 4.0 Ah battery
                  provides roughly 30-40 minutes of washing, which is enough for 1-2 vehicles. And since
                  this is part of Ryobi&apos;s massive 40V platform (also sold at Home Depot as ONE+ HP),
                  most DIY homeowners already have compatible batteries on hand.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  At 27 lbs, the Ryobi is noticeably lighter than the EGO and Greenworks, making it
                  easier to move around the garage or carry to the driveway. The compact footprint means
                  it stores easily on a shelf or in a corner. It includes a turbo nozzle for tougher
                  cleaning jobs and a 15-degree nozzle for general use, plus a soap bottle attachment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>1,500 PSI is ideal for car washing without paint damage</li>
                    <li>Brushless motor for longer life and better efficiency</li>
                    <li>40V battery cross-compatible with 100+ Ryobi tools</li>
                    <li>Lightweight at 27 lbs — easy to carry and store</li>
                    <li>Battery and charger included at $299</li>
                    <li>Widely available at Home Depot</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>1,500 PSI is too low for tough concrete stains</li>
                    <li>1.0 GPM limits rinsing speed on large surfaces</li>
                    <li>Requires garden hose connection</li>
                    <li>No variable-pressure wand. Nozzle swapping required</li>
                    <li>Plastic wand feels less premium than EGO</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mb-8">
                <BuyButton
                  productKey="ryobi-40v-hp-1500-psi"
                  source="battery-pressure-washer-hub"
                  variant="primary"
                  label="Check Price, Ryobi 40V HP 1500 PSI"
                  showPrice
                />
              </div>
            </section>

            {/* 4. DeWalt 20V MAX DCPW550 */}
            <section className="mb-14">
              <div className="border-l-4 pl-6 mb-6" style={{ borderColor: '#a1a1aa' }}>
                <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#1a1a2e', color: '#a1a1aa' }}>
                  Most Portable
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  4. DeWalt 20V MAX DCPW550 (600 PSI)
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$199</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Max PSI</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>600</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Flow Rate</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>0.8 GPM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>8.4 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The DeWalt DCPW550 is a completely different animal from the other units on this list.
                  At just 600 PSI and 8.4 lbs, this is not a traditional pressure washer, it is a
                  portable power cleaner designed for quick, on-the-go cleaning tasks. Think of it as a
                  garden hose on steroids that you can take literally anywhere, including places with no
                  water hookup.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The killer feature is bucket-draw capability. The DCPW550 can siphon water directly
                  from a bucket, cooler, or any still-water source using the included suction hose. This
                  makes it perfect for boat docks, campsites, tailgate wash-downs, and remote job sites
                  where there is no spigot. Contractors love it for rinsing tools and equipment at the
                  end of the day.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  If you are a DeWalt 20V MAX user. And millions of tradespeople and DIYers are — you
                  already own compatible batteries. The 5.0 Ah battery included with the kit provides
                  roughly 10-15 minutes of continuous use, which is enough for spot cleaning but not for
                  whole-house jobs. This is a targeted tool, not a do-everything pressure washer.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Incredibly light at 8.4 lbs — truly handheld</li>
                    <li>Bucket-draw mode: no hose connection needed</li>
                    <li>20V MAX battery compatible with 200+ DeWalt tools</li>
                    <li>Affordable at $199 with battery and charger</li>
                    <li>Perfect for boats, RVs, camping, and job sites</li>
                    <li>Fits in a truck bed or trunk easily</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>600 PSI is not a real pressure washer. more of a power rinser</li>
                    <li>Very short runtime (10-15 minutes on 5.0 Ah)</li>
                    <li>Cannot handle concrete, heavy grime, or mildew</li>
                    <li>0.8 GPM flow rate is low</li>
                    <li>No wheels or cart; handheld only</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mb-8">
                <BuyButton
                  productKey="dewalt-20v-max-dcpw550"
                  source="battery-pressure-washer-hub"
                  variant="primary"
                  label="Check Price, DeWalt 20V MAX DCPW550"
                  showPrice
                />
              </div>
            </section>

            {/* 5. Sun Joe 24V-X2-PW1200 */}
            <section className="mb-14">
              <div className="border-l-4 pl-6 mb-6" style={{ borderColor: '#a1a1aa' }}>
                <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide" style={{ backgroundColor: '#1a1a2e', color: '#a1a1aa' }}>
                  Budget Pick
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  5. Sun Joe 24V-X2-PW1200 (1,196 PSI)
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$149</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Max PSI</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>1,196</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Flow Rate</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>1.0 GPM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>24.3 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Sun Joe 24V-X2-PW1200 proves you do not need to spend $500+ to get a functional
                  cordless pressure washer. At $149 with two 4.0 Ah batteries and a charger included,
                  this is the most affordable way to get into battery-powered pressure washing. The dual-battery
                  system combines two 24V packs for 48V total, delivering 1,196 PSI and 1.0 GPM of cleaning power.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Like the DeWalt, the Sun Joe can draw water from a bucket using the included siphon hose,
                  making it portable enough for camping trips, boat cleaning, or anywhere without a tap. But
                  unlike the DeWalt, it delivers nearly double the PSI, putting it in legitimate light-duty
                  pressure washer territory rather than just &quot;power rinser&quot; territory.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The trade-off for the low price is build quality and ecosystem depth. Sun Joe&apos;s 24V
                  battery platform is smaller than EGO, Greenworks, or Ryobi, so cross-compatibility with
                  other tools is limited. The plastic construction feels lighter-duty than the competition,
                  and the motor is louder relative to its output. But for occasional use — washing the car
                  once a week, cleaning patio furniture, rinsing off the grill, it gets the job done at a
                  price that is hard to argue with.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Incredible value at $149 with 2 batteries + charger</li>
                    <li>Bucket-draw mode for use anywhere without a hose</li>
                    <li>1,196 PSI handles light-to-medium cleaning tasks</li>
                    <li>Dual-battery system for extended runtime</li>
                    <li>Lightweight and compact at 24.3 lbs</li>
                    <li>Includes multiple nozzle tips and soap bottle</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Limited 24V ecosystem — fewer cross-compatible tools</li>
                    <li>Plastic construction feels less durable</li>
                    <li>1,196 PSI struggles with tough stains and concrete</li>
                    <li>Motor is noisier than premium competitors</li>
                    <li>Shorter hose (20 ft) limits reach</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mb-8">
                <BuyButton
                  productKey="sun-joe-24v-x2-pw1200"
                  source="battery-pressure-washer-hub"
                  variant="primary"
                  label="Check Price — Sun Joe 24V-X2-PW1200"
                  showPrice
                />
              </div>
            </section>

            {/* ========== BATTERY vs GAS vs ELECTRIC ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Battery className="h-6 w-6 text-primary" />
                Battery vs Gas vs Corded Electric: Which Is Right for You?
              </h2>

              <p className="leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                Choosing between battery, gas, and corded electric pressure washers depends on your
                priorities. Here is how they compare across the factors that matter most.
              </p>

              <div className="overflow-x-auto -mx-4 px-4 mb-8">
                <table className="w-full min-w-[700px] border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Factor</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Battery</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Gas</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Corded Electric</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Power (PSI)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>600 - 3,200</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>2,000 - 4,200+</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>1,500 - 2,300</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Flow Rate (GPM)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>0.8 - 1.2</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>2.0 - 2.5</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>1.2 - 1.8</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Portability</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Excellent, no cord, no hose limits</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Good — no cord, but heavy (60-90 lbs)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Limited. tethered to outlet</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Noise</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Quiet (60-75 dB)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Loud (85-100 dB)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Moderate (70-80 dB)</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Maintenance</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Almost none</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Oil changes, winterizing, spark plugs</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Minimal</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Runtime</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>10-90 min (battery dependent)</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Unlimited (refuel)</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Unlimited (plugged in)</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Price Range</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$149 - $549+</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$250 - $800+</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$80 - $300</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Emissions</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Zero</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Carbon monoxide + exhaust</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Zero</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Startup</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Press a button</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Pull-start (can be finicky)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Press a button</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>The Bottom Line</h3>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Choose battery</strong> if you value convenience,
                  low noise, zero emissions, and you primarily clean cars, patios, and outdoor furniture.
                  Battery models are also ideal if you already own tools in a compatible platform (EGO, Ryobi,
                  DeWalt, Greenworks).
                </p>
                <p className="leading-relaxed mt-3" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Choose gas</strong> if you need maximum power for
                  commercial-grade cleaning, have large concrete areas, or need to run for hours without stopping.
                </p>
                <p className="leading-relaxed mt-3" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Choose corded electric</strong> if you want a balance
                  of power and price, always have an outlet nearby, and do not mind managing an extension cord.
                </p>
              </div>
            </section>

            {/* ========== USE CASES ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 text-primary" />
                Best Battery Pressure Washer by Use Case
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Sun className="h-5 w-5 text-primary" />
                    Driveway and Concrete
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                    You need at least 2,000 PSI and preferably a turbo nozzle or surface cleaner attachment.
                  </p>
                  <p className="font-semibold text-sm" style={{ color: '#22c55e' }}>
                    Winner: EGO POWER+ HPW3200 (3,200 PSI)
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Shield className="h-5 w-5 text-primary" />
                    Car Washing and Detailing
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                    Moderate pressure (1,000-1,800 PSI) with a wide-angle tip protects paint and clear coat.
                  </p>
                  <p className="font-semibold text-sm" style={{ color: '#22c55e' }}>
                    Winner: Ryobi 40V HP 1500 PSI
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <DollarSign className="h-5 w-5 text-primary" />
                    Best on a Budget
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                    Under $200 with batteries included, handles light-to-medium tasks, bucket-draw capable.
                  </p>
                  <p className="font-semibold text-sm" style={{ color: '#22c55e' }}>
                    Winner: Sun Joe 24V-X2-PW1200 ($149)
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Star className="h-5 w-5 text-primary" />
                    Deck and Fence Cleaning
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                    1,500-2,100 PSI with a 25-degree nozzle cleans wood without gouging or splintering.
                  </p>
                  <p className="font-semibold text-sm" style={{ color: '#22c55e' }}>
                    Winner: Greenworks 60V 2100 PSI
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Battery className="h-5 w-5 text-primary" />
                    Boat, RV, and Camping
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                    Bucket-draw capability is essential when there is no hose connection available.
                  </p>
                  <p className="font-semibold text-sm" style={{ color: '#22c55e' }}>
                    Winner: DeWalt 20V MAX DCPW550
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <CheckCircle className="h-5 w-5 text-primary" />
                    All-Around Homeowner
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                    One tool for cars, patio, siding, and light concrete. Best balance of power, runtime, and price.
                  </p>
                  <p className="font-semibold text-sm" style={{ color: '#22c55e' }}>
                    Winner: Greenworks 60V 2100 PSI ($349)
                  </p>
                </div>
              </div>
            </section>

            {/* ========== BUYING GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Star className="h-6 w-6 text-primary" />
                What to Look for in a Battery Pressure Washer
              </h2>

              <div className="space-y-6">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#f5f5f5' }}>PSI and GPM: Understanding Cleaning Power</h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    PSI (pounds per square inch) measures water pressure, while GPM (gallons per minute) measures
                    flow rate. Multiply them together to get Cleaning Units (CU): a higher CU means more
                    cleaning power. For example, the EGO at 3,200 PSI x 1.0 GPM = 3,200 CU, while the
                    Greenworks at 2,100 PSI x 1.2 GPM = 2,520 CU. Both numbers matter. High PSI with low GPM
                    means the water hits hard but rinses slowly, while high GPM with low PSI rinses fast but
                    may not dislodge tough grime.
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#f5f5f5' }}>Battery Voltage and Runtime</h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Higher voltage generally means more power. 56V (EGO) and 60V (Greenworks) platforms
                    deliver the most PSI, while 20V (DeWalt) and 24V (Sun Joe) are suited to lighter tasks.
                    Battery capacity (measured in amp-hours, or Ah) determines runtime: a 10.0 Ah battery
                    lasts roughly 3-4x longer than a 2.5 Ah battery at the same voltage. Always check whether
                    the battery is included or sold separately, it can add $100-$400 to the total cost.
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#f5f5f5' }}>Platform Compatibility</h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    One of the biggest advantages of battery pressure washers is ecosystem compatibility.
                    If you already own a Ryobi mower, your 40V batteries work in the pressure washer. Same
                    for EGO 56V, Greenworks 60V, and DeWalt 20V MAX. This can save you $100-$300 by buying
                    the tool-only version. Before buying, inventory the batteries you already own and choose
                    accordingly.
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#f5f5f5' }}>Water Source Flexibility</h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Most cordless pressure washers require a standard garden hose connection. If you need
                    true anywhere-portability, look for models with bucket-draw (siphon) capability like the
                    DeWalt DCPW550 and Sun Joe 24V-X2-PW1200. These can pull water from any container, making
                    them ideal for remote locations, boats, and camping.
                  </p>
                </div>

                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#f5f5f5' }}>Nozzles and Accessories</h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Look for quick-connect nozzles in multiple spray angles: 0-degree (pencil jet for tough
                    stains), 15-degree (general cleaning), 25-degree (siding and delicate surfaces), and
                    40-degree (gentle rinse). A turbo nozzle combines high pressure with a rotating pattern
                    for stubborn grime. Some units, like the EGO HPW3200, feature a variable-pressure wand
                    that lets you adjust pressure on the fly without swapping tips.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== PSI GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 text-primary" />
                How Much PSI Do You Actually Need?
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-lg p-4 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <span className="flex-shrink-0 w-20 text-center font-bold text-sm rounded-lg py-2" style={{ backgroundColor: '#171717', color: '#22c55e' }}>
                    300-600
                  </span>
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#f5f5f5' }}>Light Rinsing</p>
                    <p className="text-xs" style={{ color: '#a1a1aa' }}>Windows, patio furniture, grills, flower pots, outdoor toys</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg p-4 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <span className="flex-shrink-0 w-20 text-center font-bold text-sm rounded-lg py-2" style={{ backgroundColor: '#171717', color: '#22c55e' }}>
                    1,000-1,500
                  </span>
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#f5f5f5' }}>Cars and Light Duty</p>
                    <p className="text-xs" style={{ color: '#a1a1aa' }}>Vehicle washing, bikes, boats, light siding, garage floors</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg p-4 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <span className="flex-shrink-0 w-20 text-center font-bold text-sm rounded-lg py-2" style={{ backgroundColor: '#171717', color: '#22c55e' }}>
                    1,500-2,500
                  </span>
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#f5f5f5' }}>Medium Duty</p>
                    <p className="text-xs" style={{ color: '#a1a1aa' }}>Decks, fences, vinyl siding, mildew removal, patio pavers, stucco</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg p-4 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <span className="flex-shrink-0 w-20 text-center font-bold text-sm rounded-lg py-2" style={{ backgroundColor: '#171717', color: '#22c55e' }}>
                    2,500-3,200
                  </span>
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#f5f5f5' }}>Heavy Duty</p>
                    <p className="text-xs" style={{ color: '#a1a1aa' }}>Concrete driveways, oil stains, paint prep, heavy grime, rust</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg p-4 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <span className="flex-shrink-0 w-20 text-center font-bold text-sm rounded-lg py-2" style={{ backgroundColor: '#171717', color: '#a1a1aa' }}>
                    3,200+
                  </span>
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#f5f5f5' }}>Commercial / Industrial</p>
                    <p className="text-xs" style={{ color: '#a1a1aa' }}>Paint stripping, graffiti removal, fleet washing, gas models only (for now)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Shield className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <details className="group rounded-xl border overflow-hidden" style={{ borderColor: '#27272a' }}>
                  <summary className="cursor-pointer px-4 py-3 font-semibold flex justify-between items-center" style={{ color: '#f5f5f5', backgroundColor: '#141414' }}>
                    Are battery powered pressure washers as powerful as gas models?
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: '#a1a1aa' }} />
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Not yet. The most powerful cordless model in 2026, the EGO POWER+ HPW3200, reaches
                    3,200 PSI, which rivals many entry-level gas units. However, gas models routinely deliver
                    3,000-4,200 PSI with higher GPM (2.0-2.5 vs 0.8-1.2), giving them significantly more
                    cleaning throughput. For most residential tasks, cars, patios, siding, outdoor
                    furniture. a battery unit in the 1,500-3,200 PSI range is more than sufficient.
                  </div>
                </details>

                <details className="group rounded-xl border overflow-hidden" style={{ borderColor: '#27272a' }}>
                  <summary className="cursor-pointer px-4 py-3 font-semibold flex justify-between items-center" style={{ color: '#f5f5f5', backgroundColor: '#141414' }}>
                    How long does a battery powered pressure washer run on a single charge?
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: '#a1a1aa' }} />
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Runtime varies widely by battery capacity and pressure setting. High-end models like the
                    EGO POWER+ 3200 PSI with the 10.0 Ah battery can run for approximately 60-90 minutes on
                    low pressure and 20-30 minutes at max pressure. Mid-range units like the Greenworks 60V
                    typically deliver 30-45 minutes. Compact models like the DeWalt 20V MAX and Sun Joe 24V
                    run for 10-20 minutes, making them suited to quick spot-cleaning tasks.
                  </div>
                </details>

                <details className="group rounded-xl border overflow-hidden" style={{ borderColor: '#27272a' }}>
                  <summary className="cursor-pointer px-4 py-3 font-semibold flex justify-between items-center" style={{ color: '#f5f5f5', backgroundColor: '#141414' }}>
                    Can I use a battery pressure washer to clean a driveway?
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: '#a1a1aa' }} />
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Yes, but you need at least 2,000 PSI for effective concrete cleaning. The EGO POWER+
                    3200 PSI and Greenworks 60V 2100 PSI are both capable of cleaning driveways, patios,
                    and sidewalks. Lower-PSI models like the Ryobi 40V (1,500 PSI) can handle lightly
                    soiled concrete but will struggle with oil stains or deep grime. For large driveways,
                    pair a high-PSI cordless washer with a surface cleaner attachment.
                  </div>
                </details>

                <details className="group rounded-xl border overflow-hidden" style={{ borderColor: '#27272a' }}>
                  <summary className="cursor-pointer px-4 py-3 font-semibold flex justify-between items-center" style={{ color: '#f5f5f5', backgroundColor: '#141414' }}>
                    What is the best battery pressure washer for car washing?
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: '#a1a1aa' }} />
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    The Ryobi 40V HP 1500 PSI is our top pick for car detailing. It delivers enough
                    pressure to blast off dirt and road grime without risking paint damage, and its 40V
                    battery platform is shared with dozens of other Ryobi tools. The Greenworks 60V at
                    2,100 PSI also works well on a low-pressure setting with a wide-angle nozzle.
                  </div>
                </details>

                <details className="group rounded-xl border overflow-hidden" style={{ borderColor: '#27272a' }}>
                  <summary className="cursor-pointer px-4 py-3 font-semibold flex justify-between items-center" style={{ color: '#f5f5f5', backgroundColor: '#141414' }}>
                    Do battery powered pressure washers need a garden hose connection?
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: '#a1a1aa' }} />
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Most do, yes. However, the DeWalt 20V MAX DCPW550 and Sun Joe 24V-X2-PW1200 can draw
                    water from a bucket or other still-water source using a siphon hose, making them truly
                    portable for use anywhere without a tap. This is ideal for boat docks, campsites, or
                    remote job sites.
                  </div>
                </details>

                <details className="group rounded-xl border overflow-hidden" style={{ borderColor: '#27272a' }}>
                  <summary className="cursor-pointer px-4 py-3 font-semibold flex justify-between items-center" style={{ color: '#f5f5f5', backgroundColor: '#141414' }}>
                    Are cordless pressure washers worth the higher price?
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: '#a1a1aa' }} />
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    For most homeowners, yes. Cordless units eliminate gas engine maintenance (no fuel
                    mixing, no pull-starts, no fumes, no winterizing) and the cord hassle of plug-in
                    electrics. The convenience factor is enormous: grab the unit, pop in a battery, and
                    start cleaning. If you already own batteries in a compatible platform, the tool-only
                    price makes them an even better value.
                  </div>
                </details>

                <details className="group rounded-xl border overflow-hidden" style={{ borderColor: '#27272a' }}>
                  <summary className="cursor-pointer px-4 py-3 font-semibold flex justify-between items-center" style={{ color: '#f5f5f5', backgroundColor: '#141414' }}>
                    What PSI do I need for different cleaning tasks?
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" style={{ color: '#a1a1aa' }} />
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Here is a rough guide: 300-600 PSI for rinsing patio furniture, grills, and windows.
                    1,000-1,500 PSI for washing cars, bikes, boats, and light siding. 1,500-2,500 PSI for
                    cleaning decks, fences, mildew on siding, and patio pavers. 2,500-3,200 PSI for concrete
                    driveways, oil stains, paint prep, and heavy grime. Above 3,200 PSI typically requires a
                    gas model and is used for commercial or industrial applications.
                  </div>
                </details>
              </div>
            </section>

            {/* ========== FINAL VERDICT ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <CheckCircle className="h-6 w-6" style={{ color: '#22c55e' }} />
                Final Verdict
              </h2>

              <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The battery powered pressure washer market has matured significantly. In 2026, there is
                  a credible cordless option for virtually every residential cleaning task. Here is our
                  final ranking:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#141414' }}>
                    <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <p className="font-bold" style={{ color: '#f5f5f5' }}>EGO POWER+ HPW3200, Best Overall</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        Unmatched 3,200 PSI. The only cordless model that can genuinely replace a gas pressure
                        washer for most homeowners. Premium price, premium performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#141414' }}>
                    <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <p className="font-bold" style={{ color: '#f5f5f5' }}>Greenworks 60V 2100 PSI, Best Value</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        The best all-around pick for most homeowners. Strong power, battery included, excellent
                        ecosystem, and a price that makes sense.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#141414' }}>
                    <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <p className="font-bold" style={{ color: '#f5f5f5' }}>Ryobi 40V HP 1500 PSI, Best for Cars</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        Paint-safe pressure, huge battery ecosystem, widely available. The go-to for anyone
                        who primarily washes vehicles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#141414' }}>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#27272a', color: '#a1a1aa' }}>4</span>
                    <div>
                      <p className="font-bold" style={{ color: '#f5f5f5' }}>DeWalt 20V MAX DCPW550, Most Portable</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        A niche tool done right. Not a traditional pressure washer, but the ultimate portable
                        power rinser for boats, camping, and job sites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#141414' }}>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#27272a', color: '#a1a1aa' }}>5</span>
                    <div>
                      <p className="font-bold" style={{ color: '#f5f5f5' }}>Sun Joe 24V-X2-PW1200. Budget Pick</p>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        The cheapest way into cordless pressure washing. Two batteries, bucket-draw mode, and
                        enough PSI for light-duty cleaning at a price that is hard to beat.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed text-sm" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Our recommendation for most people:</strong> The
                  Greenworks 60V 2100 PSI at $349 with battery included. It handles 80% of residential
                  cleaning tasks, costs less than half of the EGO, and the 60V battery platform gives you
                  a path to expanding into a full gas-free yard care setup.
                </p>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Explore More Green Product Reviews
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  From portable power stations and e-bikes to smart thermostats and electric lawn
                  equipment — we review the best green tech for your home and yard.
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
