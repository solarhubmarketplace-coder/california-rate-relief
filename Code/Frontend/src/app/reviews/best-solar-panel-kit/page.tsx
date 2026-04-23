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
  Check,
  CheckCircle,
  ChevronRight,
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
    'Best DIY Solar Panel Kits (2026): Renogy vs BougeRV vs ECO-WORTHY vs Rich Solar',
  description:
    'Compare the best DIY solar panel kits for home, RV, cabin, and off-grid use in 2026. In-depth reviews of Renogy 400W, BougeRV 200W, Rich Solar 200W, ECO-WORTHY 1200W, WindyNation 400W, and Grape Solar 540W with sizing guide and FAQ.',
  alternates: {
    canonical: '/reviews/best-solar-panel-kit',
  },
  openGraph: {
    title: 'Best DIY Solar Panel Kits (2026)',
    description:
      'Renogy 400W vs BougeRV 200W vs ECO-WORTHY 1200W vs Rich Solar 200W. Full specs, pros/cons, grid-tie vs off-grid guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best DIY Solar Panel Kits (2026): Renogy vs BougeRV vs ECO-WORTHY vs Rich Solar',
  description:
    'Compare the best DIY solar panel kits for home, RV, cabin, and off-grid use in 2026. In-depth reviews covering Renogy 400W, BougeRV 200W, Rich Solar 200W, ECO-WORTHY 1200W, WindyNation 400W, and Grape Solar 540W.',
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
    '@id': 'https://ratereliefca.com/reviews/best-solar-panel-kit',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best DIY solar panel kit for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Renogy 400W Solar Panel Kit is the best option for beginners. It ships with everything you need — panels, charge controller, mounting hardware, wiring, and connectors — plus Renogy provides detailed installation guides and responsive customer support. The 40A Rover MPPT controller is beginner-friendly with an LCD display that shows real-time system data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a DIY solar panel kit myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most off-grid DIY solar kits are designed for homeowner installation and require only basic tools. Off-grid kits that charge batteries (RV, cabin, shed) do not require permits in most jurisdictions. However, grid-tie kits that feed electricity back to the utility typically require a licensed electrician for the final connection and a permit from your local building department.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many solar panels do I need to power my home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average California home uses about 750-900 kWh per month. To offset that entirely, you would need roughly 6-8 kW of solar panels, which is 15-20 panels at 400W each. However, DIY solar kits are more commonly used for partial offset, backup power, or specific loads like an RV, workshop, or cabin rather than whole-home replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between grid-tie and off-grid solar kits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grid-tie kits connect to your utility and feed excess power back to the grid, reducing your electric bill. They require a grid-tie inverter and typically a permit. Off-grid kits are standalone systems that charge batteries and are completely independent of the utility grid. Off-grid kits are ideal for RVs, cabins, boats, and emergency backup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do DIY solar panel kits come with batteries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most DIY solar panel kits do not include batteries — they typically come with panels, a charge controller, wiring, and mounting hardware. Batteries are usually purchased separately because sizing depends on your specific energy storage needs. The ECO-WORTHY 1200W kit is a notable exception that offers bundle options including lithium batteries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do DIY solar panels last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern monocrystalline solar panels typically last 25-30 years with minimal degradation — most manufacturers guarantee at least 80% output at 25 years. Charge controllers and inverters generally last 10-15 years. Wiring and mounting hardware can last the lifetime of the panels if properly installed and maintained.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are DIY solar panel kits worth it compared to professional installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY kits cost roughly 50-70% less than professional installations per watt. A professional residential install averages $2.85-3.50 per watt, while DIY kits run $1.00-1.80 per watt. The trade-off is your time and labor, plus you may not qualify for certain utility interconnection programs. DIY kits are most cost-effective for off-grid, RV, and small-scale projects.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  wattage: string;
  panelType: string;
  controllerType: string;
  includes: string;
  warranty: string;
  bestFor: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'Renogy 400W Solar Kit',
    badge: 'Best Overall',
    price: '$599',
    wattage: '400W (4x 100W)',
    panelType: 'Monocrystalline',
    controllerType: '40A MPPT Rover',
    includes: 'Panels, controller, mounting, wiring, connectors',
    warranty: '25-year panel / 5-year controller',
    bestFor: 'Beginners, RV, cabin',
    affiliateLink: '#',
  },
  {
    name: 'BougeRV 200W Kit',
    badge: 'Best Portable',
    price: '$329',
    wattage: '200W (2x 100W)',
    panelType: 'Monocrystalline 9BB',
    controllerType: '30A PWM',
    includes: 'Panels, controller, wiring, Z-brackets',
    warranty: '25-year panel / 1-year controller',
    bestFor: 'RV, van life, camping',
    affiliateLink: '#',
  },
  {
    name: 'Rich Solar 200W Kit',
    badge: 'Best Budget',
    price: '$269',
    wattage: '200W (2x 100W)',
    panelType: 'Monocrystalline',
    controllerType: '20A MPPT',
    includes: 'Panels, controller, wiring, mounting',
    warranty: '25-year panel / 2-year controller',
    bestFor: 'Budget builds, sheds, small cabins',
    affiliateLink: '#',
  },
  {
    name: 'ECO-WORTHY 1200W Kit',
    badge: 'Best for Whole Home',
    price: '$1,099',
    wattage: '1,200W (6x 195W)',
    panelType: 'Monocrystalline',
    controllerType: '60A MPPT',
    includes: 'Panels, controller, inverter, wiring, mounting',
    warranty: '25-year panel / 5-year inverter',
    bestFor: 'Large off-grid, tiny home, whole cabin',
    affiliateLink: '#',
  },
  {
    name: 'WindyNation 400W Kit',
    badge: 'Best Off-Grid Starter',
    price: '$649',
    wattage: '400W (4x 100W)',
    panelType: 'Monocrystalline',
    controllerType: '30A PWM P30L',
    includes: 'Panels, controller, inverter, wiring, connectors',
    warranty: '25-year panel / 1-year accessories',
    bestFor: 'Off-grid cabin, RV, boat',
    affiliateLink: '#',
  },
  {
    name: 'Grape Solar 540W Kit',
    badge: 'Best Grid-Tie',
    price: '$899',
    wattage: '540W (3x 180W)',
    panelType: 'Polycrystalline',
    controllerType: 'Micro-inverter (grid-tie)',
    includes: 'Panels, micro-inverters, trunk cable, mounting',
    warranty: '25-year panel / 25-year micro-inverter',
    bestFor: 'Grid-tie, roof mount, bill offset',
    affiliateLink: '#',
  },
];

export default function BestSolarPanelKit() {
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
                Comparison Guide
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight" style={{ color: '#f5f5f5' }}>
                Best DIY Solar Panel Kits (2026): Complete Buyer&apos;s Guide
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Sun className="h-4 w-4" />
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
                DIY solar panel kits have gotten dramatically better — and cheaper — over the
                last two years. Whether you&apos;re outfitting an RV for full-time van life,
                powering a remote cabin, or offsetting your utility bill with a grid-tie setup,
                today&apos;s kits ship with everything you need to start generating your own
                electricity in a weekend.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                We tested and researched six of the most popular solar panel kits available in
                2026, comparing them on wattage, charge controller quality, included components,
                ease of installation, and long-term value. Here are our picks.
              </p>
            </div>

            {/* Quick Picks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Star className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Quick Picks at a Glance
              </h2>
              <div className="grid gap-4">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-lg border"
                    style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                          {product.badge}
                        </span>
                        <span className="font-bold" style={{ color: '#f5f5f5' }}>{product.name}</span>
                      </div>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>{product.bestFor} &middot; {product.wattage} &middot; {product.price}</p>
                    </div>
                    <a
                      href={product.affiliateLink}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:opacity-90 shrink-0"
                      style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                    >
                      Check Price <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Search className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Kit</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Wattage</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Controller</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Panel Type</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, idx) => (
                      <tr
                        key={product.name}
                        className="border-t"
                        style={{ borderColor: '#27272a', backgroundColor: idx % 2 === 0 ? '#141414' : '#171717' }}
                      >
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{product.name}</td>
                        <td className="p-3" style={{ color: '#22c55e' }}>{product.price}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{product.wattage}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{product.controllerType}</td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>{product.panelType}</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>{product.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Grid-Tie vs Off-Grid Explainer */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Zap className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Grid-Tie vs Off-Grid: Which Kit Type Do You Need?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                    <CheckCircle className="inline h-5 w-5 mr-2" style={{ color: '#22c55e' }} />
                    Grid-Tie Kits
                  </h3>
                  <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Grid-tie kits connect to your home&apos;s electrical panel and feed power
                    directly into the utility grid. Your meter spins backward when your panels
                    produce more than you consume, earning bill credits under net metering programs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-1 shrink-0" style={{ color: '#22c55e' }} />
                      <span>Reduces or eliminates your utility bill</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-1 shrink-0" style={{ color: '#22c55e' }} />
                      <span>No batteries needed (grid is your &quot;battery&quot;)</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-1 shrink-0" style={{ color: '#ef4444' }} />
                      <span>Requires permit and utility approval</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-1 shrink-0" style={{ color: '#ef4444' }} />
                      <span>Does NOT work during power outages (anti-islanding)</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-medium" style={{ color: '#22c55e' }}>
                    Best pick: Grape Solar 540W Kit
                  </p>
                </div>
                <div className="p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                    <Battery className="inline h-5 w-5 mr-2" style={{ color: '#22c55e' }} />
                    Off-Grid Kits
                  </h3>
                  <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Off-grid kits charge a battery bank and power your loads independently of the
                    utility grid. They are completely self-contained and work anywhere — rooftops,
                    RVs, boats, remote cabins, or emergency backup setups.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-1 shrink-0" style={{ color: '#22c55e' }} />
                      <span>Works anywhere, no utility connection needed</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-1 shrink-0" style={{ color: '#22c55e' }} />
                      <span>No permits required for most installations</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-1 shrink-0" style={{ color: '#ef4444' }} />
                      <span>Batteries add cost (and eventual replacement)</span>
                    </li>
                    <li className="flex items-start gap-2" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-1 shrink-0" style={{ color: '#ef4444' }} />
                      <span>Limited by battery capacity and sun hours</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-medium" style={{ color: '#22c55e' }}>
                    Best pick: ECO-WORTHY 1200W Kit (large) / Renogy 400W Kit (starter)
                  </p>
                </div>
              </div>
            </section>

            {/* Sizing / Wattage Guide */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <DollarSign className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Sizing Guide: How Many Watts Do You Actually Need?
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                The right kit size depends entirely on what you want to power. Here is a quick
                reference for common use cases, assuming 5-6 peak sun hours per day (typical
                for most of California).
              </p>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Use Case</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Daily kWh</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Recommended Kit</th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Est. Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: '#141414', borderColor: '#27272a' }} className="border-t">
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Phone + laptop charging</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>0.3-0.5 kWh</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>100-200W</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>$150-330</td>
                    </tr>
                    <tr style={{ backgroundColor: '#171717', borderColor: '#27272a' }} className="border-t">
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>RV essentials (lights, fan, fridge)</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>1.5-3 kWh</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>200-400W</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>$270-650</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderColor: '#27272a' }} className="border-t">
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Small cabin (lights, devices, small fridge)</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>3-5 kWh</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>400-800W</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>$500-900</td>
                    </tr>
                    <tr style={{ backgroundColor: '#171717', borderColor: '#27272a' }} className="border-t">
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Tiny home / large cabin</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>5-10 kWh</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>800-1500W</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>$800-1,500</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderColor: '#27272a' }} className="border-t">
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Partial home offset (grid-tie)</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>10-25 kWh</td>
                      <td className="p-3" style={{ color: '#d4d4d8' }}>2,000-5,000W</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>$2,000-5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#d4d4d8' }}>Pro tip:</strong> Always oversize by 20-25%.
                Real-world production is lower than rated wattage due to panel angle, temperature,
                partial shading, and wire losses. A 400W kit will realistically produce around
                300-340W under typical conditions.
              </p>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#f5f5f5' }}>
                Detailed Reviews
              </h2>

              {/* 1. Renogy 400W */}
              <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                    Best Overall
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>Renogy 400W Solar Panel Kit</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" style={{ color: i < 5 ? '#facc15' : '#3f3f46' }} fill={i < 5 ? '#facc15' : 'none'} />
                  ))}
                  <span className="ml-2 text-sm font-medium" style={{ color: '#d4d4d8' }}>4.8 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Renogy is the gold standard in DIY solar for a reason. This 400W kit includes
                  four 100W monocrystalline panels, a 40A Rover MPPT charge controller, all
                  necessary MC4 wiring, mounting Z-brackets, and branch connectors. The MPPT
                  controller alone is worth $100+ separately and harvests 15-30% more energy
                  than a PWM controller in the same conditions.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Installation is straightforward — Renogy provides step-by-step guides and
                  their customer support is among the best in the industry. The kit is designed
                  for 12V battery systems but can be wired in series for 24V. In full
                  California sun (5.5-6 peak hours), expect 1,800-2,200 Wh of daily production.
                </p>

                {/* What's in the Box */}
                <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>What&apos;s in the Box</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 4x 100W Mono Panels</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 40A Rover MPPT Controller</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> MC4 Connectors + Adapters</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Z-Bracket Mounting Kit</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 20ft 10AWG Tray Cable</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Branch Connectors (Pair)</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />MPPT controller included (not PWM)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Excellent documentation and support</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />25-year panel warranty</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Expandable — add panels later</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />No inverter included</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />No battery included</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Panels are rigid (not portable/foldable)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <BuyButton
                    productKey="renogy-400w-solar-panel-kit"
                    source="best-solar-panel-kit"
                    variant="primary"
                    label="Check Price — Renogy 400W Solar Panel Kit"
                    showPrice
                  />
                </div>
              </div>

              {/* 2. BougeRV 200W */}
              <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                    Best Portable
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>BougeRV 200W Solar Panel Kit</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" style={{ color: i < 4 ? '#facc15' : '#3f3f46' }} fill={i < 4 ? '#facc15' : 'none'} />
                  ))}
                  <span className="ml-2 text-sm font-medium" style={{ color: '#d4d4d8' }}>4.5 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  BougeRV has carved out a strong niche in the RV and van life community.
                  Their 200W kit uses 9-busbar monocrystalline cells for improved low-light
                  performance, which matters for early morning and cloudy day charging. The
                  included 30A PWM controller is basic but reliable for a 200W system.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The panels are slim-profile and lightweight, making them ideal for roof
                  mounting on RVs and vans where aerodynamics and weight limits matter. At
                  $329, it&apos;s competitively priced for what you get — though upgrading the
                  PWM controller to an MPPT unit is worth considering if you plan to expand.
                </p>

                <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>What&apos;s in the Box</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 2x 100W 9BB Mono Panels</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 30A PWM Controller</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> MC4 Extension Cables</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Z-Bracket Mounting Kit</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Y-Branch Connectors</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Battery Terminal Cables</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />9BB cells for better low-light output</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Lightweight and slim for RV mounting</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Competitive price point</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Strong RV/van community reputation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />PWM controller (not MPPT)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Shorter controller warranty (1 year)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />200W may be tight for heavy RV use</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <BuyButton
                    productKey="bougerv-200w-solar-panel-kit"
                    source="best-solar-panel-kit"
                    variant="primary"
                    label="Check Price — BougeRV 200W Solar Panel Kit"
                    showPrice
                  />
                </div>
              </div>

              {/* 3. Rich Solar 200W */}
              <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                    Best Budget
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>Rich Solar 200W Solar Panel Kit</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" style={{ color: i < 4 ? '#facc15' : '#3f3f46' }} fill={i < 4 ? '#facc15' : 'none'} />
                  ))}
                  <span className="ml-2 text-sm font-medium" style={{ color: '#d4d4d8' }}>4.3 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Rich Solar delivers the lowest cost-per-watt in this roundup at roughly
                  $1.35/W all-in. What sets this budget kit apart is that it includes a 20A
                  MPPT charge controller — not a cheap PWM unit — which means you get
                  significantly better charging efficiency for the price.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The panels are solid monocrystalline with a standard aluminum frame and
                  IP65 junction box. Build quality is on par with Renogy at a lower price.
                  The trade-off is a shorter controller warranty (2 years) and slightly less
                  polished documentation. Ideal for shed or small cabin builds where you want
                  maximum value.
                </p>

                <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>What&apos;s in the Box</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 2x 100W Mono Panels</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 20A MPPT Controller</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> MC4 Wiring Harness</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Z-Bracket Mounting Kit</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Battery Ring Terminals</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Inline Fuse Holder</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Lowest cost per watt (~$1.35/W)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />MPPT controller at a budget price</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Inline fuse included for safety</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Solid build quality for the price</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Shorter controller warranty (2 years)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Less documentation vs Renogy</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Smaller community and support resources</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <BuyButton
                    productKey="rich-solar-200w-solar-panel-kit"
                    source="best-solar-panel-kit"
                    variant="primary"
                    label="Check Price — Rich Solar 200W Solar Panel Kit"
                    showPrice
                  />
                </div>
              </div>

              {/* 4. ECO-WORTHY 1200W */}
              <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                    Best for Whole Home
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>ECO-WORTHY 1200W Solar Panel Kit</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" style={{ color: i < 5 ? '#facc15' : '#3f3f46' }} fill={i < 5 ? '#facc15' : 'none'} />
                  ))}
                  <span className="ml-2 text-sm font-medium" style={{ color: '#d4d4d8' }}>4.6 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  When a 200W or 400W kit is not going to cut it, the ECO-WORTHY 1200W system
                  is the kit to consider. It packs six 195W monocrystalline panels, a 60A
                  MPPT charge controller, and a 3,000W pure sine wave inverter — making it
                  one of the most complete large-scale DIY kits on the market.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  This kit produces 5,400-6,600 Wh per day in California sun, which is enough
                  to run a small cabin or tiny home including a refrigerator, lights, fans,
                  devices, and occasional power tools. The pure sine wave inverter can handle
                  sensitive electronics safely. ECO-WORTHY also offers bundle options that
                  include lithium batteries, making this a true all-in-one system.
                </p>

                <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>What&apos;s in the Box</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 6x 195W Mono Panels</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 60A MPPT Controller</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 3,000W Pure Sine Inverter</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> MC4 Cables + Connectors</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Mounting Z-Brackets</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 16ft Battery Cables</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Most complete kit — includes inverter</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />1,200W covers serious off-grid loads</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Battery bundle options available</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />60A MPPT handles expansion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Higher upfront cost ($1,099)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Six panels require significant roof/ground space</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Heavier and more complex install</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <BuyButton
                    productKey="eco-worthy-1200w-solar-panel-kit"
                    source="best-solar-panel-kit"
                    variant="primary"
                    label="Check Price — ECO-WORTHY 1200W Solar Panel Kit"
                    showPrice
                  />
                </div>
              </div>

              {/* 5. WindyNation 400W */}
              <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                    Best Off-Grid Starter
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>WindyNation 400W Complete Solar Kit</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" style={{ color: i < 4 ? '#facc15' : '#3f3f46' }} fill={i < 4 ? '#facc15' : 'none'} />
                  ))}
                  <span className="ml-2 text-sm font-medium" style={{ color: '#d4d4d8' }}>4.2 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  WindyNation takes a different approach by bundling a 1,500W pure sine wave
                  inverter with their 400W panel kit — making it a true turn-key off-grid
                  system (just add batteries). For someone building their first cabin or
                  off-grid workshop, having both the charge controller and inverter included
                  removes the guesswork of component matching.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The trade-off is that WindyNation uses a 30A PWM controller rather than
                  MPPT, which means 15-25% less harvesting efficiency compared to the Renogy
                  kit at the same wattage. But for a set-it-and-forget-it off-grid install
                  where simplicity matters more than maximum efficiency, this kit delivers
                  solid value at $649.
                </p>

                <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>What&apos;s in the Box</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 4x 100W Mono Panels</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 30A PWM P30L Controller</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 1,500W Pure Sine Inverter</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> MC4 Connectors + Cable</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Battery Cables</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> LCD Display on Controller</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Includes inverter — true all-in-one</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Simple, no-guesswork setup</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />US-based company with phone support</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />LCD controller shows real-time data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />PWM controller, not MPPT</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />1,500W inverter limits larger loads</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Shorter accessory warranty (1 year)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <BuyButton
                    productKey="windynation-400w-complete-solar-kit"
                    source="best-solar-panel-kit"
                    variant="primary"
                    label="Check Price — WindyNation 400W Complete Solar Kit"
                    showPrice
                  />
                </div>
              </div>

              {/* 6. Grape Solar 540W */}
              <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                    Best Grid-Tie
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>Grape Solar 540W Grid-Tie Kit</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" style={{ color: i < 4 ? '#facc15' : '#3f3f46' }} fill={i < 4 ? '#facc15' : 'none'} />
                  ))}
                  <span className="ml-2 text-sm font-medium" style={{ color: '#d4d4d8' }}>4.1 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Grape Solar is the go-to brand for DIY grid-tie installations. Unlike every
                  other kit in this roundup, the 540W system is designed to connect directly
                  to your home&apos;s electrical panel and feed power back to the utility grid.
                  It uses micro-inverters instead of a charge controller — one per panel — which
                  means each panel operates independently and maximizes output even if one
                  panel is partially shaded.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The micro-inverters come with a 25-year warranty, matching the panels
                  themselves. This kit is an excellent entry point for homeowners who want to
                  start offsetting their utility bill with solar and may expand the system
                  later. Keep in mind that grid-tie systems require a permit and utility
                  interconnection approval — this is not a plug-and-play weekend project.
                </p>

                <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#f5f5f5' }}>What&apos;s in the Box</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 3x 180W Poly Panels</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> 3x Micro-Inverters</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Trunk Cable (AC Bus)</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> End Caps + Connectors</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> Roof Mounting Hardware</li>
                    <li className="flex items-center gap-1"><Check className="h-3 w-3" style={{ color: '#22c55e' }} /> System Monitoring Gateway</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Only grid-tie kit in this roundup</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />25-year micro-inverter warranty</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Panel-level monitoring included</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} />Easily expandable — add more panels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Requires permit and utility approval</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />Polycrystalline (less efficient than mono)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} />No battery backup — goes down with the grid</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <BuyButton
                    productKey="grape-solar-540w-grid-tie-kit"
                    source="best-solar-panel-kit"
                    variant="primary"
                    label="Check Price — Grape Solar 540W Grid-Tie Kit"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* MPPT vs PWM Explainer */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Shield className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                MPPT vs PWM: Why Your Charge Controller Matters
              </h2>
              <div className="p-6 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The charge controller is the brain of your off-grid solar system. It
                  regulates voltage and current from the panels to the batteries, preventing
                  overcharging and maximizing energy harvest. There are two types:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>PWM (Pulse Width Modulation)</h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Simpler, older technology</li>
                      <li>Works best when panel voltage matches battery voltage</li>
                      <li>70-80% typical efficiency</li>
                      <li>Lower cost ($20-60)</li>
                      <li>Fine for small systems under 400W</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#0a0a0a' }}>
                    <h4 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>MPPT (Maximum Power Point Tracking)</h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Advanced, active voltage conversion</li>
                      <li>Harvests 15-30% more energy from panels</li>
                      <li>92-99% typical efficiency</li>
                      <li>Higher cost ($80-200+)</li>
                      <li>Essential for systems 400W+ or cold climates</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#d4d4d8' }}>Bottom line:</strong> If your kit budget allows,
                  always choose MPPT. The efficiency gain pays for the cost difference within the
                  first year or two, and it gives you headroom to expand your panel array later.
                </p>
              </div>
            </section>

            {/* Installation Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Zap className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                DIY Solar Installation Tips: What Beginners Get Wrong
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    <CheckCircle className="inline h-5 w-5 mr-2" style={{ color: '#22c55e' }} />
                    1. Orientation and Tilt Angle Matter More Than You Think
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    In California and most of the Northern Hemisphere, panels should face true
                    south (not magnetic south) at a tilt angle roughly equal to your latitude.
                    For most of California, that means 34-38 degrees. A panel laid flat on an RV
                    roof loses 10-15% of potential output compared to an optimally tilted setup.
                    Adjustable tilt mounts are a worthwhile $30-50 upgrade.
                  </p>
                </div>
                <div className="p-5 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    <CheckCircle className="inline h-5 w-5 mr-2" style={{ color: '#22c55e' }} />
                    2. Wire Gauge and Run Length Are Critical
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Undersized wire is the most common DIY mistake. Thin wire over long distances
                    causes voltage drop, which directly reduces charging efficiency and can cause
                    heat buildup. For runs over 20 feet between panels and controller, step up to
                    at least 10AWG wire (8AWG for runs over 30 feet). Most kits include adequate
                    wire for short runs, but if your panels are far from your battery bank, buy
                    heavier gauge cable separately.
                  </p>
                </div>
                <div className="p-5 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    <CheckCircle className="inline h-5 w-5 mr-2" style={{ color: '#22c55e' }} />
                    3. Fuse Everything — Even If the Kit Doesn&apos;t Include Fuses
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Install a fuse or circuit breaker between your panels and charge controller,
                    and between your battery bank and inverter. Some kits (like Rich Solar)
                    include an inline fuse; others do not. A $5 ANL fuse holder with a properly
                    rated fuse protects your entire system from short circuits and can prevent
                    fires. This is non-negotiable for any permanent installation.
                  </p>
                </div>
                <div className="p-5 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    <CheckCircle className="inline h-5 w-5 mr-2" style={{ color: '#22c55e' }} />
                    4. Series vs Parallel Wiring Changes Everything
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Wiring panels in series (positive to negative) increases voltage while keeping
                    amperage the same. Wiring in parallel (positive to positive, negative to
                    negative) increases amperage while keeping voltage the same. For MPPT
                    controllers, series wiring is usually better because it allows the controller
                    to step down the higher voltage efficiently. For PWM controllers, panels must
                    match the battery voltage, so parallel wiring is typical for 12V systems.
                  </p>
                </div>
                <div className="p-5 rounded-xl border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    <CheckCircle className="inline h-5 w-5 mr-2" style={{ color: '#22c55e' }} />
                    5. Battery Selection Makes or Breaks Your System
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Most solar kits do not include batteries, and the battery you choose has the
                    biggest impact on long-term cost and reliability. LiFePO4 (lithium iron
                    phosphate) batteries cost 2-3x more upfront than lead-acid but last 5-10x
                    longer (3,000-5,000 cycles vs 300-500 cycles) and can be discharged to 80-100%
                    depth of discharge vs only 50% for lead-acid. For any permanent installation,
                    LiFePO4 is the better investment. For seasonal or temporary setups, AGM
                    lead-acid still offers acceptable value.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq) => (
                  <details key={faq.name} className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                    <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                      {faq.name}
                    </summary>
                    <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Sun className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Ready to Build Your Own Solar System?
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Explore our full library of solar product reviews, power station comparisons,
                  and energy-saving guides.
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
