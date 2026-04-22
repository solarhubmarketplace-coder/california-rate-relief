import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
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
    'Best Heat Pump Water Heaters (2026): Rheem vs A.O. Smith vs Stiebel Eltron — Full Reviews',
  description:
    'Compare the best heat pump water heaters for 2026. In-depth reviews of Rheem ProTerra, A.O. Smith Voltex, GE GeoSpring, Bradford White AeroTherm, Stiebel Eltron Accelera 300, and State Premier. Energy savings, tax credits, and installation guide.',
  alternates: {
    canonical: '/reviews/best-heat-pump-water-heater',
  },
  openGraph: {
    title:
      'Best Heat Pump Water Heaters (2026): Full Comparison Guide',
    description:
      'Rheem ProTerra vs A.O. Smith Voltex vs Stiebel Eltron Accelera 300 vs GE GeoSpring. Specs, pros/cons, energy savings, and federal tax credit guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Heat Pump Water Heaters (2026): Rheem vs A.O. Smith vs Stiebel Eltron — Full Reviews',
  description:
    'Compare the best heat pump water heaters for 2026. In-depth reviews covering Rheem ProTerra, A.O. Smith Voltex, GE GeoSpring, Bradford White AeroTherm, Stiebel Eltron Accelera 300, and State Premier hybrid water heaters.',
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
    '@id': 'https://ratereliefca.com/reviews/best-heat-pump-water-heater',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best heat pump water heater in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Rheem ProTerra Plug-In Heat Pump Water Heater is our top pick for 2026. It offers a 3.55 UEF (Uniform Energy Factor), runs on a standard 120V outlet, features built-in leak detection and Wi-Fi connectivity, and qualifies for federal tax credits. It can save the average household $300-$550 per year on water heating costs compared to a standard electric tank.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much money can a heat pump water heater save per year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A heat pump water heater typically saves $300-$550 per year compared to a standard electric resistance water heater. Over the 13-15 year lifespan of the unit, that adds up to $3,900-$8,250 in energy savings. The exact amount depends on your local electricity rates, hot water usage, and climate. In warmer climates like California, savings tend to be on the higher end.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do heat pump water heaters work in cold climates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but efficiency decreases in colder ambient temperatures. Heat pump water heaters extract heat from surrounding air, so they work best in spaces that stay above 40-50 degrees Fahrenheit year-round. In cold climates, the unit may rely more heavily on its backup electric resistance elements, reducing efficiency. Installing in a garage, basement, or utility room that stays above 50 degrees F is recommended. Units like the Stiebel Eltron Accelera 300 are specifically designed for better cold-climate performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a federal tax credit for heat pump water heaters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under the Inflation Reduction Act (IRA), qualifying heat pump water heaters are eligible for a federal tax credit of up to $2,000. The unit must meet ENERGY STAR requirements and be installed in your primary residence. This credit can be claimed annually and can be combined with state and utility rebates. Some households may also qualify for HEEHRA point-of-sale rebates of up to $1,750.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a heat pump water heater last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heat pump water heaters typically last 13-15 years, which is comparable to or slightly longer than standard electric water heaters (10-15 years). The heat pump compressor itself is rated for 10+ years. Regular maintenance — flushing the tank annually, cleaning the air filter every 3-6 months, and checking the anode rod every 2-3 years — can extend the lifespan further.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are heat pump water heaters noisy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heat pump water heaters produce sound similar to a dehumidifier or window AC unit, typically ranging from 45-55 decibels depending on the model. This is about as loud as a normal conversation. Most homeowners find the noise level acceptable, especially when the unit is installed in a garage, basement, or utility room. The Rheem ProTerra and Stiebel Eltron Accelera 300 are among the quietest models available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I replace my gas water heater with a heat pump water heater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Heat pump water heaters are all-electric, so switching from gas requires running a dedicated electrical circuit (typically 240V/30A for most models, or just 120V for the Rheem ProTerra Plug-In). You will also need to cap the gas line and ensure adequate clearance — most units need at least 700-1,000 cubic feet of surrounding air space. The federal tax credit and potential gas-to-electric rebates can significantly offset the switchover cost.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  capacity: string;
  uef: string;
  voltage: string;
  firstHourRating: string;
  warranty: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'Rheem ProTerra',
    badge: 'Best Overall',
    price: '$1,499-$1,899',
    capacity: '40 / 50 / 65 / 80 gal',
    uef: '3.55',
    voltage: '120V or 240V',
    firstHourRating: '67-87 gal',
    warranty: '10 years',
    affiliateLink: '#',
  },
  {
    name: 'A.O. Smith Voltex',
    badge: 'Best Value',
    price: '$1,299-$1,699',
    capacity: '50 / 66 / 80 gal',
    uef: '3.45-3.75',
    voltage: '240V',
    firstHourRating: '68-84 gal',
    warranty: '10 years',
    affiliateLink: '#',
  },
  {
    name: 'GE GeoSpring',
    badge: 'Best Budget',
    price: '$1,099-$1,399',
    capacity: '50 gal',
    uef: '3.25',
    voltage: '240V',
    firstHourRating: '63 gal',
    warranty: '10 years',
    affiliateLink: '#',
  },
  {
    name: 'Bradford White AeroTherm',
    badge: 'Best for Pros',
    price: '$1,599-$1,999',
    capacity: '50 / 80 gal',
    uef: '3.42',
    voltage: '240V',
    firstHourRating: '72-89 gal',
    warranty: '10 years',
    affiliateLink: '#',
  },
  {
    name: 'Stiebel Eltron Accelera 300',
    badge: 'Best for Cold Climates',
    price: '$2,499-$2,999',
    capacity: '80 gal',
    uef: '2.83',
    voltage: '240V',
    firstHourRating: '78 gal',
    warranty: '10 years',
    affiliateLink: '#',
  },
  {
    name: 'State Premier',
    badge: 'Best Availability',
    price: '$1,349-$1,599',
    capacity: '50 / 66 / 80 gal',
    uef: '3.45-3.75',
    voltage: '240V',
    firstHourRating: '68-84 gal',
    warranty: '10 years',
    affiliateLink: '#',
  },
];

export default function BestHeatPumpWaterHeaters() {
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight" style={{ color: '#f5f5f5' }}>
                Best Heat Pump Water Heaters (2026): Rheem vs A.O. Smith vs Stiebel Eltron
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
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

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Water heating accounts for roughly 18-20% of the average American home&apos;s
                energy bill. A heat pump water heater (also called a hybrid water heater) uses
                2-3x less electricity than a standard electric tank by pulling heat from the
                surrounding air instead of generating it directly. That translates to $300-$550
                in annual savings for most households.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We researched and compared every major heat pump water heater available in 2026,
                analyzing efficiency ratings, first-hour delivery, noise levels, smart features,
                warranty coverage, and real-world owner feedback. This guide covers the six best
                options, who each one is best for, and how to maximize your savings with federal
                tax credits and utility rebates.
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
                      Rheem ProTerra — Best Overall
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Industry-leading 3.55 UEF, available in a 120V plug-in model that requires
                      no electrician for installation, built-in leak detection, Wi-Fi connectivity,
                      and the broadest size range (40-80 gallons). The complete package.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      A.O. Smith Voltex — Best Value
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Excellent efficiency (up to 3.75 UEF on the 66-gallon model), quiet
                      operation, strong first-hour delivery, and typically $200-$300 less than
                      comparable Rheem models. A great balance of performance and price.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Stiebel Eltron Accelera 300 — Best for Cold Climates
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      German-engineered with a large 80-gallon capacity and optimized compressor
                      that operates efficiently down to 35 degrees F. Premium price, but unmatched
                      build quality and cold-weather performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
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
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Tank Sizes</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.capacity}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>UEF Rating</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.uef}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Voltage</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.voltage}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>First Hour Rating</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.firstHourRating}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Warranty</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.warranty}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. Rheem ProTerra */}
            <section className="mb-14">
              <div className="border-l-4 border-yellow-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Overall
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  1. Rheem ProTerra Plug-In Heat Pump Water Heater
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$1,499-$1,899</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>UEF</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>3.55</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Sizes</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>40-80 gal</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Voltage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>120V / 240V</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Rheem ProTerra is the heat pump water heater that changed the game. Its
                  headline feature is the 120V plug-in option — you can literally plug it into a
                  standard household outlet, no electrician required. For homeowners replacing a gas
                  water heater who don&apos;t have a 240V circuit in the utility closet, this
                  eliminates one of the biggest installation barriers.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  With a 3.55 UEF, the ProTerra is one of the most efficient heat pump water heaters
                  on the market. That translates to roughly $350-$550 in annual energy savings over
                  a standard 50-gallon electric tank. The built-in LeakGuard system with an automatic
                  shut-off valve and leak detection sensor provides peace of mind against water
                  damage, and the EcoNet Wi-Fi module lets you monitor energy usage, adjust
                  temperature, and receive alerts from your phone.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Rheem offers the ProTerra in 40, 50, 65, and 80-gallon configurations, making
                  it suitable for everything from a 1-2 person household to a large family of 5+.
                  The first-hour rating of 67-87 gallons (depending on size) means it recovers
                  quickly during peak usage periods like morning showers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>120V plug-in option (no electrician needed)</li>
                    <li>Industry-leading 3.55 UEF efficiency</li>
                    <li>Built-in LeakGuard with auto shut-off</li>
                    <li>Wi-Fi / EcoNet app connectivity</li>
                    <li>Widest size range (40-80 gallon)</li>
                    <li>Qualifies for $2,000 federal tax credit</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>120V mode heats slower than 240V</li>
                    <li>Premium pricing vs competitors</li>
                    <li>App can be finicky per user reports</li>
                    <li>Taller unit — measure clearance carefully</li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
              >
                Check Price
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 2. A.O. Smith Voltex */}
            <section className="mb-14">
              <div className="border-l-4 border-gray-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-gray-700 bg-gray-200 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Value
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  2. A.O. Smith Voltex Hybrid Electric Water Heater
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$1,299-$1,699</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>UEF</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>3.45-3.75</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Sizes</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50-80 gal</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Voltage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>240V</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The A.O. Smith Voltex delivers the best efficiency-per-dollar of any heat pump
                  water heater in 2026. The 66-gallon model hits a remarkable 3.75 UEF — the
                  highest on this list — while costing $200-$300 less than the comparable Rheem
                  ProTerra. For homeowners who already have a 240V circuit available, the Voltex
                  is hard to beat on pure value.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  A.O. Smith&apos;s four operating modes give you flexibility: Efficiency mode runs
                  the heat pump exclusively for maximum savings, Hybrid mode balances the heat pump
                  with electric elements for faster recovery, Electric mode uses only the resistance
                  elements (useful in very cold garages), and Vacation mode saves energy while
                  you&apos;re away. The iCOMM connectivity module allows remote monitoring and
                  diagnostics, though it requires a separate adapter on some models.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Build quality is excellent. A.O. Smith uses a stainless steel core protector
                  and premium anode rod that extend tank life. The first-hour delivery rating of
                  68-84 gallons (depending on model) keeps up with high-demand households.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Up to 3.75 UEF (highest on this list)</li>
                    <li>$200-$300 less than comparable Rheem</li>
                    <li>Four operating modes for flexibility</li>
                    <li>Strong first-hour delivery</li>
                    <li>Excellent build quality and tank protection</li>
                    <li>Wide availability at major retailers</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>240V only — no 120V plug-in option</li>
                    <li>Wi-Fi adapter sold separately on some models</li>
                    <li>No built-in leak detection</li>
                    <li>No 40-gallon option for small households</li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
              >
                Check Price
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 3. GE GeoSpring */}
            <section className="mb-14">
              <div className="border-l-4 border-blue-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Budget
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  3. GE GeoSpring Hybrid Water Heater
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$1,099-$1,399</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>UEF</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>3.25</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Sizes</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50 gal</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Voltage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>240V</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The GE GeoSpring is the most affordable heat pump water heater that still
                  qualifies for the federal tax credit. At $1,099-$1,399 before incentives, the
                  after-credit cost can drop below $0 in some cases when you stack the $2,000
                  federal tax credit with state and utility rebates. For budget-conscious homeowners,
                  this makes the switch from a standard electric tank a no-brainer.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The 3.25 UEF is lower than the Rheem and A.O. Smith, but still roughly 3x more
                  efficient than a standard electric water heater. GE includes built-in Wi-Fi
                  with SmartHQ app integration, letting you schedule heating cycles around
                  time-of-use electricity rates — a significant advantage for California homeowners
                  paying peak TOU rates of 40-70 cents per kWh.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The main limitation is the single 50-gallon size. If you have a household of 4+
                  people with high simultaneous hot water demand, you may want a larger tank. But
                  for 1-3 person households, the GeoSpring hits the sweet spot of price, efficiency,
                  and smart features.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Lowest price on this list</li>
                    <li>Built-in Wi-Fi with SmartHQ app</li>
                    <li>TOU scheduling for peak rate avoidance</li>
                    <li>Qualifies for $2,000 federal tax credit</li>
                    <li>Compact footprint</li>
                    <li>Easy to find at Home Depot / Lowe&apos;s</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Only available in 50-gallon size</li>
                    <li>Lower 3.25 UEF vs competitors</li>
                    <li>Lower first-hour rating (63 gal)</li>
                    <li>240V only — requires dedicated circuit</li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
              >
                Check Price
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 4. Bradford White AeroTherm */}
            <section className="mb-14">
              <div className="border-l-4 border-purple-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best for Pros
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  4. Bradford White AeroTherm Heat Pump Water Heater
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$1,599-$1,999</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>UEF</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>3.42</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Sizes</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50 / 80 gal</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Voltage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>240V</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Bradford White is the brand plumbers trust. Unlike the other units on this list
                  that are widely available at retail, the AeroTherm is sold exclusively through
                  licensed plumbing professionals. This means you get professional installation
                  included — and the unit is built to professional-grade standards with a heavy-duty
                  tank and commercial-quality components.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The 3.42 UEF puts it solidly in the high-efficiency tier, and the 80-gallon
                  model&apos;s first-hour rating of 89 gallons is the highest on this list. If you
                  have a large family that hammers through hot water during the morning rush, the
                  AeroTherm keeps up. Bradford White&apos;s Vitraglas enamel lining and Hydrojet
                  Total Performance System reduce sediment buildup, extending tank life.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The pro-install-only model means you cannot buy this at Home Depot, which is
                  either a pro or a con depending on your perspective. You get expert installation,
                  but you also pay for it. For homeowners who want a set-it-and-forget-it
                  professional solution, the AeroTherm is the right choice.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Highest first-hour rating (89 gal on 80-gal model)</li>
                    <li>Professional installation included</li>
                    <li>Commercial-grade build quality</li>
                    <li>Vitraglas tank lining reduces sediment</li>
                    <li>Strong 3.42 UEF efficiency</li>
                    <li>Excellent plumber network support</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Not available at retail — pro install only</li>
                    <li>Higher total cost with installation</li>
                    <li>Limited smart/Wi-Fi features</li>
                    <li>Only 50 and 80-gallon sizes</li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
              >
                Find a Pro Installer
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 5. Stiebel Eltron Accelera 300 */}
            <section className="mb-14">
              <div className="border-l-4 border-cyan-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best for Cold Climates
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  5. Stiebel Eltron Accelera 300 Heat Pump Water Heater
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$2,499-$2,999</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>UEF</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>2.83</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Sizes</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>80 gal</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Voltage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>240V</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Stiebel Eltron Accelera 300 is the premium choice for homeowners who
                  prioritize build quality and cold-climate performance above all else. Made in
                  Germany, it features a compressor designed to extract heat from ambient air
                  as cold as 35 degrees F — significantly lower than most competitors, which start
                  losing efficiency below 45-50 degrees F.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The 80-gallon tank is one of the largest heat pump water heaters available,
                  and Stiebel Eltron claims it can heat up to 80% of hot water using the heat pump
                  alone (even in cooler environments), minimizing reliance on backup electric
                  elements. The unit is notably quiet at around 46 dB — one of the quietest models
                  tested.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The lower 2.83 UEF is misleading — it reflects the larger tank size and the way
                  UEF testing works. In real-world use, the Accelera 300 delivers comparable or
                  better annual energy savings than units with higher UEF ratings because the large
                  tank stores more heat pump-generated hot water, reducing the need for resistance
                  heating during peak demand. The premium price tag is the main barrier, but for
                  buyers who want a unit that will last 15+ years in any climate, this is it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Best cold-climate performance (down to 35 degrees F)</li>
                    <li>German engineering, premium build quality</li>
                    <li>Very quiet operation (~46 dB)</li>
                    <li>Large 80-gallon capacity</li>
                    <li>80% of heating via heat pump alone</li>
                    <li>Expected 15+ year lifespan</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Highest price on this list ($2,499-$2,999)</li>
                    <li>Only available in 80-gallon size</li>
                    <li>Lower UEF rating (tank size factor)</li>
                    <li>Limited smart features / no Wi-Fi</li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
              >
                Check Price
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 6. State Premier */}
            <section className="mb-14">
              <div className="border-l-4 border-orange-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Availability
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  6. State Premier Hybrid Heat Pump Water Heater
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$1,349-$1,599</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>UEF</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>3.45-3.75</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Sizes</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50-80 gal</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Voltage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>240V</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The State Premier is essentially a rebadged A.O. Smith Voltex sold through
                  State Water Heaters&apos; independent distribution network. State is a sister brand
                  of A.O. Smith (both owned by the same parent company), and the Premier shares
                  the same internal components, compressor, and tank design as the Voltex. So why
                  does it make this list separately? Availability.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  In many regions, especially in the Southeast and Midwest, State water heaters
                  are more readily available through local plumbing supply houses than A.O. Smith
                  retail models. If your plumber prefers State or if the A.O. Smith Voltex is
                  backordered in your area, the Premier gives you the exact same performance (up
                  to 3.75 UEF) through an alternative channel.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Pricing tends to be competitive with the Voltex, and in some cases slightly
                  lower through wholesale plumbing distributors. The warranty, efficiency ratings,
                  and operating modes are identical. The only practical difference is where and
                  how you buy it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Same internals as A.O. Smith Voltex</li>
                    <li>Up to 3.75 UEF efficiency</li>
                    <li>Better regional availability</li>
                    <li>Competitive or lower pricing through distributors</li>
                    <li>Strong plumber/contractor support network</li>
                    <li>50, 66, and 80-gallon sizes</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Not sold at big-box retail stores</li>
                    <li>Less brand recognition than Rheem/A.O. Smith</li>
                    <li>240V only — no plug-in option</li>
                    <li>Limited direct-to-consumer purchasing</li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
              >
                Find a Distributor
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* ========== HOW HEAT PUMP WATER HEATERS WORK ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 text-primary" />
                How Heat Pump Water Heaters Work
              </h2>

              <div className="border rounded-xl p-6 md:p-8 mb-6" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  A heat pump water heater works like a refrigerator in reverse. Instead of
                  pushing heat out of a box (to keep food cold), it pulls heat from the
                  surrounding air and transfers it into the water tank. This process uses
                  a compressor, an evaporator coil, and a condenser coil — the same basic
                  technology behind your home&apos;s air conditioner or heat pump HVAC system.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Because it moves heat rather than generating it, a heat pump water heater
                  uses 2-3 times less electricity than a standard electric resistance water
                  heater. A conventional 50-gallon electric tank uses about 4,500-5,500 watts
                  of resistive heating elements. A heat pump water heater&apos;s compressor draws
                  only about 500-800 watts to move the same amount of thermal energy.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Most modern heat pump water heaters are &quot;hybrid&quot; units — they include
                  both the heat pump and traditional electric resistance elements as backup.
                  In normal operation, the heat pump does all the work. During periods of
                  very high demand or very cold ambient temperatures, the electric elements
                  kick in to assist. This hybrid design ensures you never run out of hot
                  water, even in worst-case scenarios.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-5 text-center" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <Sun className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>Step 1: Absorb</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    The evaporator coil absorbs heat from the surrounding air, even at
                    temperatures as low as 35-40 degrees F.
                  </p>
                </div>
                <div className="border rounded-lg p-5 text-center" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <Battery className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>Step 2: Compress</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    The compressor concentrates the absorbed heat, raising the refrigerant
                    temperature to over 140 degrees F.
                  </p>
                </div>
                <div className="border rounded-lg p-5 text-center" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <Zap className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>Step 3: Transfer</h3>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    The condenser coil transfers the concentrated heat into the water tank,
                    heating your water efficiently.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== ENERGY SAVINGS VS TRADITIONAL ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <DollarSign className="h-6 w-6 text-primary" />
                Energy Savings: Heat Pump vs Traditional Water Heaters
              </h2>

              <div className="border rounded-xl p-6 md:p-8 mb-6" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The numbers speak for themselves. Here is how a heat pump water heater compares
                  to standard electric and gas water heaters in annual operating costs:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm mb-6">
                    <thead>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Type</th>
                        <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Annual Energy Cost</th>
                        <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Annual Savings</th>
                        <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>15-Year Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b" style={{ borderColor: '#27272a' }}>
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Standard Electric Tank</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>$550-$700/yr</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>—</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>—</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Gas Tank</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>$350-$500/yr</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>—</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>—</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: '#27272a' }}>
                        <td className="p-3 font-medium" style={{ color: '#22c55e' }}>Heat Pump (Hybrid)</td>
                        <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>$150-$250/yr</td>
                        <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>$300-$550/yr vs electric</td>
                        <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>$4,500-$8,250</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Costs based on national average electricity rate of ~$0.16/kWh and natural gas
                  rate of ~$1.50/therm. California homeowners paying $0.25-$0.45/kWh will see
                  even larger savings — potentially $500-$800+ per year compared to a standard
                  electric tank.
                </p>
              </div>
            </section>

            {/* ========== TAX CREDITS & REBATES ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <CheckCircle className="h-6 w-6 text-primary" />
                Tax Credits and Rebates (2026)
              </h2>

              <div className="space-y-4">
                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Federal Tax Credit — Up to $2,000
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Under the Inflation Reduction Act (IRA), ENERGY STAR-certified heat pump water
                    heaters qualify for a federal tax credit of up to $2,000 per year. This is a
                    direct reduction of your tax liability — not just a deduction. The unit must be
                    installed in your primary residence. This credit can be claimed annually (if
                    you install multiple qualifying improvements) and does not expire until 2032.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    HEEHRA Rebates — Up to $1,750
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    The High-Efficiency Electric Home Rebate Act (HEEHRA) provides point-of-sale
                    rebates for qualifying heat pump water heaters. Low-to-moderate income
                    households (under 150% area median income) can receive up to $1,750 off the
                    purchase price at the register. These rebates are administered by individual
                    states and availability varies — check your state&apos;s energy office for
                    current status.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Utility Rebates — $200-$800+
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Many electric utilities offer additional rebates for heat pump water heaters.
                    In California, PG&amp;E, SCE, and SDG&amp;E all have active rebate programs
                    ranging from $200-$800+ depending on the model and your rate plan. Some
                    utilities also offer discounted TOU rates for electric water heating, further
                    increasing your savings. Check your utility&apos;s website or call to confirm
                    current rebate amounts.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#22c55e' }}>
                    Stacking Example: Potential Net Cost
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                    A $1,499 Rheem ProTerra with a $2,000 federal tax credit + $500 utility
                    rebate = <strong style={{ color: '#22c55e' }}>net cost of -$1,001</strong> (you
                    come out ahead). Even without HEEHRA, the federal credit alone can make a
                    heat pump water heater effectively free or better. This is why 2026 is the
                    best time to make the switch.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== INSTALLATION REQUIREMENTS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Shield className="h-6 w-6 text-primary" />
                Installation Requirements
              </h2>

              <div className="space-y-4">
                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Space Requirements
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Heat pump water heaters need at least 700-1,000 cubic feet of surrounding
                    air space for the heat pump to operate efficiently. That is roughly a 10x10
                    foot room with an 8-foot ceiling. Garages, basements, large utility rooms,
                    and mechanical closets with louvered doors typically work well. Cramped,
                    unventilated closets are not ideal.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Electrical Requirements
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Most heat pump water heaters require a dedicated 240V/30A circuit — the same
                    as a standard electric water heater. If you are replacing an existing electric
                    tank, you likely already have the right circuit. The Rheem ProTerra Plug-In
                    is the exception: it can run on a standard 120V/15A outlet, eliminating the
                    need for a new circuit. If switching from gas, budget $200-$600 for an
                    electrician to run a new 240V line.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Condensate Drainage
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Heat pump water heaters produce condensate (like an air conditioner) — roughly
                    3-5 gallons per day depending on humidity. You will need a condensate drain
                    line to a floor drain, condensate pump, or exterior. This is often the most
                    overlooked installation requirement. Make sure your installer plans for drainage
                    before starting the job.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Temperature Considerations
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Heat pump water heaters perform best in spaces that stay between 40-100 degrees
                    F year-round. They also produce a cooling effect on the surrounding air (a
                    bonus in hot climates, but a consideration in cold ones). In California, garages
                    and utility rooms rarely drop below 45 degrees F, making them ideal locations.
                    In colder climates, an insulated basement is the best installation spot.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Height Clearance
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Heat pump water heaters are taller than standard tanks because the compressor
                    and evaporator sit on top. Expect total heights of 62-72 inches depending on
                    model. Measure your available ceiling height before purchasing — you need at
                    least 6 inches of clearance above the unit for proper airflow.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== FAQ SECTION ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }} open>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    What is the best heat pump water heater in 2026?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    The Rheem ProTerra Plug-In is our top pick. It offers a 3.55 UEF, runs on
                    a standard 120V outlet (no electrician needed), features built-in leak
                    detection and Wi-Fi connectivity, and qualifies for the $2,000 federal tax
                    credit. It can save the average household $300-$550 per year on water
                    heating costs compared to a standard electric tank.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How much money can a heat pump water heater save per year?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    A heat pump water heater typically saves $300-$550 per year compared to a
                    standard electric resistance water heater. Over the 13-15 year lifespan of
                    the unit, that adds up to $3,900-$8,250 in total energy savings. In California,
                    where electricity rates are 50-100% higher than the national average, savings
                    can reach $500-$800+ per year.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Do heat pump water heaters work in cold climates?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Yes, but efficiency decreases in colder ambient temperatures. Heat pump water
                    heaters extract heat from surrounding air, so they work best in spaces above
                    40-50 degrees F. In cold climates, installing in an insulated basement or
                    heated utility room is recommended. The Stiebel Eltron Accelera 300 is
                    specifically designed for cold-climate performance, operating efficiently down
                    to 35 degrees F.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Is there a federal tax credit for heat pump water heaters?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Yes. Under the Inflation Reduction Act, qualifying heat pump water heaters
                    are eligible for a federal tax credit of up to $2,000. The unit must be
                    ENERGY STAR certified and installed in your primary residence. This credit
                    can be claimed annually and is available through 2032. Combined with state
                    and utility rebates, many homeowners can get a heat pump water heater at
                    effectively zero net cost.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How long does a heat pump water heater last?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Heat pump water heaters typically last 13-15 years with proper maintenance.
                    The heat pump compressor is rated for 10+ years. Regular maintenance includes
                    flushing the tank annually, cleaning the air filter every 3-6 months, and
                    checking the anode rod every 2-3 years. Most manufacturers offer 10-year
                    warranties on the tank and key components.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Are heat pump water heaters noisy?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Heat pump water heaters produce sound similar to a dehumidifier or window AC
                    unit, typically ranging from 45-55 decibels. That is about as loud as a
                    normal conversation. Most homeowners find the noise acceptable when the unit
                    is installed in a garage, basement, or utility room. The Rheem ProTerra and
                    Stiebel Eltron Accelera 300 are among the quietest models at around 46-49 dB.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Can I replace my gas water heater with a heat pump water heater?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Yes. Switching from gas to a heat pump water heater requires running a
                    dedicated electrical circuit (240V/30A for most models, or just 120V for
                    the Rheem ProTerra Plug-In) and capping the gas line. You need at least
                    700-1,000 cubic feet of surrounding air space. The federal tax credit and
                    potential gas-to-electric rebates can significantly offset the switchover
                    cost. Many homeowners find that the energy savings pay back the conversion
                    expense within 2-3 years.
                  </div>
                </details>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Ready to Cut Your Water Heating Bill?
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Explore our full library of energy-saving product reviews, comparison guides,
                  and buyer resources.
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
    </ReviewLayout>
  );
}
