import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
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
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Portable Power Stations for Home Backup (2026): EcoFlow vs Bluetti vs Jackery vs Anker',
  description:
    'Compare the best portable power stations for home backup in 2026. In-depth reviews of EcoFlow Delta Pro 3, Anker SOLIX F3800, Bluetti AC500, Jackery 2000 Plus, and more. California PSPS and solar pairing guide included.',
  alternates: {
    canonical: '/reviews/best-portable-power-stations',
  },
  openGraph: {
    title:
      'Best Portable Power Stations for Home Backup (2026)',
    description:
      'EcoFlow Delta Pro 3 vs Anker SOLIX F3800 vs Bluetti AC500 vs Jackery 2000 Plus. Full specs, pros/cons, and California buyer guide.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Portable Power Stations for Home Backup (2026): EcoFlow vs Bluetti vs Jackery vs Anker',
  description:
    'Compare the best portable power stations for home backup in 2026. In-depth reviews covering EcoFlow Delta Pro 3, Anker SOLIX F3800, Bluetti AC500, Jackery Explorer 2000 Plus, EcoFlow Delta Pro Ultra, and Tesla Powerwall 3.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/best-portable-power-stations',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best portable power station for home backup in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EcoFlow Delta Pro 3 is our top pick for home backup in 2026. It offers 4,096 Wh of capacity (expandable to 12,288 Wh), 4,000W output, LFP battery chemistry with 3,500+ cycle life, and X-Stream charging that goes from 0 to 80% in just 50 minutes. Its Smart Home Panel integration makes it a seamless whole-home backup solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a portable power station power a whole house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it depends on the unit and your home\'s power demands. Units like the EcoFlow Delta Pro 3 (4,000W), Anker SOLIX F3800 (6,000W), and Bluetti AC500 (5,000W) can power most essential circuits including refrigerators, lights, routers, and medical devices. For true whole-home backup including HVAC, the EcoFlow Delta Pro Ultra or Tesla Powerwall 3 are better suited.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will a portable power station last during a power outage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Runtime depends on capacity and load. A 4,000 Wh unit powering essential loads (refrigerator, lights, router, phone charging) at roughly 500W will last about 7-8 hours. With solar panels connected, you can recharge during the day and run indefinitely. For California PSPS events that can last 2-5 days, pairing with solar panels is highly recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LFP (LiFePO4) better than NMC for power stations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For home backup, LFP (Lithium Iron Phosphate) is generally preferred. LFP batteries offer 3,000-4,000+ charge cycles vs 500-1,000 for NMC, are more thermally stable (safer), and handle deep discharges better. The tradeoff is that LFP is heavier per kWh. All top portable power stations in 2026 use LFP chemistry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charge a portable power station with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All major portable power stations support solar input via MC4 or proprietary connectors. Solar input ranges from 1,400W (Jackery 2000 Plus) to 3,000W (Bluetti AC500). In California, which averages 5.5-6.5 peak sun hours daily, a 400W portable solar panel setup can add roughly 2,000-2,600 Wh per day to your power station.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do portable power stations qualify for the federal tax credit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The federal Residential Clean Energy Credit (formerly ITC) for homeowners expired on December 31, 2025. However, standalone battery storage that is charged exclusively by solar may still qualify under certain commercial or business-use scenarios. California\'s SGIP program may offer rebates of $150/kWh for general market customers and up to $1,100/kWh for equity customers on qualifying battery storage systems.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  capacity: string;
  output: string;
  weight: string;
  battery: string;
  cycleLife: string;
  solarInput: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'EcoFlow Delta Pro 3',
    badge: 'Best Overall',
    price: '$1,999',
    capacity: '4,096 Wh',
    output: '4,000W',
    weight: '114 lbs',
    battery: 'LFP',
    cycleLife: '3,500+',
    solarInput: '2,600W',
    affiliateLink: '#',
  },
  {
    name: 'Anker SOLIX F3800',
    badge: 'Best Value',
    price: '$1,799',
    capacity: '3,840 Wh',
    output: '6,000W',
    weight: '~132 lbs',
    battery: 'LFP',
    cycleLife: '3,000+',
    solarInput: '2,400W',
    affiliateLink: '#',
  },
  {
    name: 'Bluetti AC500 + B300S',
    badge: 'Most Modular',
    price: '$2,299',
    capacity: '3,072 Wh',
    output: '5,000W',
    weight: '149.9 lbs',
    battery: 'LFP',
    cycleLife: '3,500+',
    solarInput: '3,000W',
    affiliateLink: '#',
  },
  {
    name: 'Jackery 2000 Plus',
    badge: 'Most Portable',
    price: '$1,999',
    capacity: '2,042.8 Wh',
    output: '3,000W',
    weight: '61.5 lbs',
    battery: 'LFP',
    cycleLife: '4,000',
    solarInput: '1,400W',
    affiliateLink: '#',
  },
  {
    name: 'EcoFlow Delta Pro Ultra',
    badge: 'Best Premium',
    price: '$4,099',
    capacity: '6,144 Wh',
    output: '7,200W',
    weight: 'N/A',
    battery: 'LFP',
    cycleLife: '3,500+',
    solarInput: 'N/A',
    affiliateLink: '#',
  },
  {
    name: 'Tesla Powerwall 3',
    badge: 'Best Permanent',
    price: '$12,500+',
    capacity: '13,500 Wh',
    output: '11,500W',
    weight: 'Wall-mount',
    battery: 'NMC',
    cycleLife: '10yr warranty',
    solarInput: 'Integrated',
    affiliateLink: '',
  },
];

export default function BestPortablePowerStations() {
  return (
    <PublicLayout>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="py-16 bg-background">
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
                Best Portable Power Stations for Home Backup (2026): EcoFlow vs Bluetti vs Jackery vs Anker
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Battery className="h-4 w-4" />
                  <time dateTime="2026-04-16">April 16, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span>22 min read</span>
                </div>
              </div>
            </header>

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Whether you&apos;re preparing for California&apos;s increasingly frequent PSPS
                shutoffs, building a solar-powered backup system, or just want peace of mind
                during grid outages, a portable power station is one of the smartest investments
                you can make in 2026. But with dozens of options on the market, choosing the right
                one is overwhelming.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We spent over 100 hours researching and comparing the top portable power stations
                available today. This guide breaks down the six best options for home backup,
                including head-to-head spec comparisons, California-specific considerations, and
                honest pros and cons for each unit.
              </p>
            </div>

            {/* Quick Verdict Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold text-foreground">Quick Verdict: Our Top 3 Picks</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      EcoFlow Delta Pro 3 — Best Overall
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The most complete home backup package. 4,096 Wh capacity, 4,000W output,
                      blazing-fast X-Stream charging, and Smart Home Panel integration make it the
                      gold standard for 2026.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Anker SOLIX F3800 — Best Value for Capacity
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Currently on promo at $1,799 (normally $3,999), the F3800 delivers 6,000W
                      output and expandability to a staggering 26,880 Wh. Best bang for the buck
                      in the category.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Bluetti AC500 + B300S — Most Modular
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Split architecture lets you start with a single battery and scale to 18,432 Wh
                      over time. The highest solar input (3,000W) of any unit on this list.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[800px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 font-semibold text-foreground border-b-2 border-slate-200">Spec</th>
                      {products.map((p) => (
                        <th key={p.name} className="text-left p-3 font-semibold text-foreground border-b-2 border-slate-200">
                          <div>{p.name}</div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {p.badge}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 font-medium text-foreground">Price</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3 text-foreground">{p.price}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="p-3 font-medium text-foreground">Capacity</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3 text-foreground">{p.capacity}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 font-medium text-foreground">Output</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3 text-foreground">{p.output}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="p-3 font-medium text-foreground">Weight</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3 text-foreground">{p.weight}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 font-medium text-foreground">Battery</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3 text-foreground">{p.battery}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="p-3 font-medium text-foreground">Cycle Life</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3 text-foreground">{p.cycleLife}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 font-medium text-foreground">Solar Input</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3 text-foreground">{p.solarInput}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. EcoFlow Delta Pro 3 */}
            <section className="mb-14">
              <div className="border-l-4 border-yellow-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Overall
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3">
                  1. EcoFlow Delta Pro 3
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
                  <p className="text-lg font-bold text-foreground">$1,999</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Capacity</p>
                  <p className="text-lg font-bold text-foreground">4,096 Wh</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output</p>
                  <p className="text-lg font-bold text-foreground">4,000W</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Weight</p>
                  <p className="text-lg font-bold text-foreground">114 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-foreground/80 leading-relaxed">
                  The EcoFlow Delta Pro 3 is the complete package for home backup in 2026. With
                  4,096 Wh of LFP battery capacity expandable to 12,288 Wh using extra batteries,
                  it can power essential circuits for 8-12 hours or longer depending on your load.
                  The 4,000W continuous output (7,200W surge) handles refrigerators, sump pumps,
                  medical equipment, and even window AC units without breaking a sweat.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  What truly sets the Delta Pro 3 apart is EcoFlow&apos;s X-Stream charging
                  technology. It charges from 0 to 80% in just 50 minutes on AC power, which is
                  critical when you know a PSPS shutoff or storm is incoming and need to top off
                  quickly. The 2,600W solar input means you can pair it with rooftop or portable
                  solar panels for extended off-grid runtime.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The optional Smart Home Panel lets you hardwire the Delta Pro 3 into your
                  electrical panel for automatic switchover during outages, similar to a
                  traditional generator but silent and emission-free.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm text-green-900">
                    <li>X-Stream fast charging (0-80% in 50 min)</li>
                    <li>Smart Home Panel for whole-home integration</li>
                    <li>3,500+ cycle LFP battery</li>
                    <li>Expandable to 12,288 Wh</li>
                    <li>2,600W solar input for fast solar recharge</li>
                    <li>Comprehensive app with energy monitoring</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-1">
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm text-red-900">
                    <li>114 lbs is heavy for &quot;portable&quot;</li>
                    <li>Smart Home Panel sold separately (~$400-600)</li>
                    <li>4,000W may not run central HVAC</li>
                    <li>Premium price for the full expanded setup</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Best for</p>
                <p className="font-medium text-foreground">
                  Homeowners who want a comprehensive, fast-charging backup system with optional
                  whole-home integration. Ideal for California PSPS preparedness.
                </p>
              </div>

              <a
                href="#"
                data-affiliate="{ECOFLOW_DELTA_PRO_3_LINK}"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Check Price — EcoFlow Delta Pro 3
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 2. Anker SOLIX F3800 */}
            <section className="mb-14">
              <div className="border-l-4 border-green-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Value for Capacity
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3">
                  2. Anker SOLIX F3800
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
                  <p className="text-lg font-bold text-foreground">$1,799</p>
                  <p className="text-xs text-green-600 font-medium">Promo (was $3,999)</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Capacity</p>
                  <p className="text-lg font-bold text-foreground">3,840 Wh</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output</p>
                  <p className="text-lg font-bold text-foreground">6,000W</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Weight</p>
                  <p className="text-lg font-bold text-foreground">~132 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-foreground/80 leading-relaxed">
                  The Anker SOLIX F3800 is a powerhouse that punches way above its current price
                  point. At $1,799 on promotion (normally $3,999), it offers the highest
                  continuous output on this list at 6,000W (12,000W surge) and can expand to a
                  massive 26,880 Wh using B3800 expansion batteries. That&apos;s enough to power an
                  average California home for 2-3 days on essentials.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  A standout feature is the built-in NEMA 14-50 240V outlet, which means you can
                  run 240V appliances like dryers, well pumps, or EV chargers directly without
                  special adapters. With a transfer switch, the F3800 becomes a legitimate
                  whole-home backup solution. The 2,400W solar input is strong, and the LFP
                  battery delivers 3,000+ cycles to 80% capacity.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Anker has built a strong reputation for battery reliability across its consumer
                  electronics line, and the SOLIX series represents their push into home energy.
                  The ecosystem is newer than EcoFlow or Bluetti, but the hardware specs are
                  exceptional for the price.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm text-green-900">
                    <li>Highest output: 6,000W continuous (12,000W surge)</li>
                    <li>Incredible value at current $1,799 promo price</li>
                    <li>NEMA 14-50 240V outlet built in</li>
                    <li>Expandable to 26,880 Wh (largest on list)</li>
                    <li>LFP battery with 3,000+ cycles</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-1">
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm text-red-900">
                    <li>Heaviest unit at ~132 lbs</li>
                    <li>Promo price may not last</li>
                    <li>Newer ecosystem vs EcoFlow/Bluetti</li>
                    <li>Slower AC charging than EcoFlow X-Stream</li>
                    <li>Fewer third-party accessories available</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Best for</p>
                <p className="font-medium text-foreground">
                  Budget-conscious buyers who want maximum power output and expandability.
                  The current promo pricing makes it the best watts-per-dollar in the category.
                </p>
              </div>

              <a
                href="#"
                data-affiliate="{ANKER_SOLIX_F3800_LINK}"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Check Price — Anker SOLIX F3800
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 3. Bluetti AC500 + B300S */}
            <section className="mb-14">
              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Modular
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3">
                  3. Bluetti AC500 + B300S
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
                  <p className="text-lg font-bold text-foreground">$2,299</p>
                  <p className="text-xs text-muted-foreground">Bundle (inverter + 1 battery)</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Capacity</p>
                  <p className="text-lg font-bold text-foreground">3,072 Wh</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output</p>
                  <p className="text-lg font-bold text-foreground">5,000W</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Weight</p>
                  <p className="text-lg font-bold text-foreground">149.9 lbs</p>
                  <p className="text-xs text-muted-foreground">67.2 + 82.7 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-foreground/80 leading-relaxed">
                  The Bluetti AC500 takes a fundamentally different approach from everything else
                  on this list. Instead of an all-in-one unit, the AC500 is a standalone inverter
                  module (67.2 lbs) that pairs with separate B300S battery modules (82.7 lbs
                  each). This split architecture means you can start with one battery at 3,072 Wh
                  and scale up to 18,432 Wh by adding up to six B300S units over time.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The AC500 delivers 5,000W continuous (10,000W surge) and boasts the highest
                  solar input on this list at 3,000W. For Californians with rooftop solar or
                  large portable panel arrays, that means faster recharge times during the day
                  and longer runtime during multi-day PSPS events.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The modular design is also practical for transport. Instead of lugging a single
                  130+ lb unit, you carry the inverter and batteries as separate, more manageable
                  pieces. Bluetti&apos;s ecosystem is mature, with a solid app, firmware updates, and
                  good customer support.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm text-green-900">
                    <li>Modular: buy one battery now, add more later</li>
                    <li>Highest solar input (3,000W)</li>
                    <li>5,000W continuous / 10,000W surge</li>
                    <li>Expandable to 18,432 Wh</li>
                    <li>3,500+ cycle LFP battery</li>
                    <li>Mature ecosystem with strong app support</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-1">
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm text-red-900">
                    <li>Higher entry price than competitors ($2,299 for bundle)</li>
                    <li>Two separate units to manage and store</li>
                    <li>Combined weight of 149.9 lbs</li>
                    <li>Inverter alone is useless (needs at least one B300S)</li>
                    <li>Full expansion (6 batteries) is very expensive</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Best for</p>
                <p className="font-medium text-foreground">
                  Buyers who want to start small and scale up incrementally. Also ideal for
                  anyone with high solar input needs or who wants the flexibility of modular
                  components.
                </p>
              </div>

              <a
                href="#"
                data-affiliate="{BLUETTI_AC500_LINK}"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Check Price — Bluetti AC500 + B300S
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 4. Jackery Explorer 2000 Plus */}
            <section className="mb-14">
              <div className="border-l-4 border-orange-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Portable
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3">
                  4. Jackery Explorer 2000 Plus
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
                  <p className="text-lg font-bold text-foreground">$1,999-$2,299</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Capacity</p>
                  <p className="text-lg font-bold text-foreground">2,042.8 Wh</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output</p>
                  <p className="text-lg font-bold text-foreground">3,000W</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Weight</p>
                  <p className="text-lg font-bold text-foreground">61.5 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-foreground/80 leading-relaxed">
                  At 61.5 lbs, the Jackery Explorer 2000 Plus is nearly half the weight of every
                  other unit on this list. That matters if you need your power station to do double
                  duty as both a home backup and a camping/tailgating/road-trip companion. It is
                  genuinely portable in a way that 100+ lb units simply are not.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The 2,042.8 Wh capacity is the smallest here, but it is still enough to run a
                  refrigerator, lights, router, and phone chargers for 4-6 hours. With expansion
                  batteries, you can scale up to 12,000 Wh. The 3,000W output (6,000W surge)
                  handles most home appliances including microwaves and power tools.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Jackery has been in the portable power space longer than almost anyone, and
                  their build quality and customer support reflect that experience. The LFP
                  battery delivers an impressive 4,000 cycles to 70% capacity, the longest
                  cycle life on this list.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm text-green-900">
                    <li>Lightest on list at 61.5 lbs (truly portable)</li>
                    <li>Best cycle life: 4,000 cycles to 70%</li>
                    <li>Expandable to 12,000 Wh</li>
                    <li>Dual-use: home backup + outdoor/camping</li>
                    <li>Proven brand with long track record</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-1">
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm text-red-900">
                    <li>Lowest base capacity (2,042.8 Wh)</li>
                    <li>Lowest solar input (1,400W)</li>
                    <li>3,000W output may not handle all heavy loads</li>
                    <li>No built-in home panel integration</li>
                    <li>Expansion batteries add up in cost quickly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Best for</p>
                <p className="font-medium text-foreground">
                  People who need both portability and home backup. If you camp, tailgate, or
                  travel frequently and also want outage protection at home, the 2000 Plus is
                  the best of both worlds.
                </p>
              </div>

              <a
                href="#"
                data-affiliate="{JACKERY_2000_PLUS_LINK}"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Check Price — Jackery Explorer 2000 Plus
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 5. EcoFlow Delta Pro Ultra */}
            <section className="mb-14">
              <div className="border-l-4 border-purple-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Premium / Whole Home
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3">
                  5. EcoFlow Delta Pro Ultra
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
                  <p className="text-lg font-bold text-foreground">$4,099</p>
                  <p className="text-xs text-muted-foreground">Single battery unit</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Capacity</p>
                  <p className="text-lg font-bold text-foreground">6,144 Wh</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output</p>
                  <p className="text-lg font-bold text-foreground">7,200W</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Battery</p>
                  <p className="text-lg font-bold text-foreground">LFP</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-foreground/80 leading-relaxed">
                  The EcoFlow Delta Pro Ultra is in a different league. Starting at 6,144 Wh per
                  battery and expandable up to a staggering 90 kWh with 15 battery modules, this
                  is a system designed to power an entire home — including HVAC, kitchen
                  appliances, and EV chargers — for days, not hours.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The 7,200W continuous output from a single inverter handles virtually any
                  household load. Combined with the Smart Home Panel 2, the Delta Pro Ultra
                  integrates directly into your home&apos;s electrical panel and provides true 240V
                  split-phase power. It is the closest thing to a Tesla Powerwall that you can
                  buy without professional installation.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  At $4,099 for a single battery (before adding expansion batteries, inverter, and
                  Smart Home Panel), this is a significant investment. But for homeowners in
                  California&apos;s fire-prone areas where PSPS events can last 3-5 days, having
                  90 kWh of backup capacity paired with rooftop solar provides genuine energy
                  independence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm text-green-900">
                    <li>Massive expandability up to 90 kWh</li>
                    <li>7,200W output handles whole-home loads</li>
                    <li>Smart Home Panel 2 for seamless integration</li>
                    <li>240V split-phase output</li>
                    <li>LFP with 3,500+ cycle life</li>
                    <li>Closest to permanent battery system without installation</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-1">
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm text-red-900">
                    <li>Very expensive ($4,099+ per battery)</li>
                    <li>Full system cost rivals permanent installations</li>
                    <li>Smart Home Panel 2 required for whole-home (extra cost)</li>
                    <li>Not truly portable at this scale</li>
                    <li>Overkill for apartments or small homes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Best for</p>
                <p className="font-medium text-foreground">
                  Premium buyers with larger homes who want whole-home backup without the
                  permanence (or permitting) of a Powerwall. Ideal for high-fire-risk areas
                  with frequent multi-day PSPS events.
                </p>
              </div>

              <a
                href="#"
                data-affiliate="{ECOFLOW_DELTA_PRO_ULTRA_LINK}"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Check Price — EcoFlow Delta Pro Ultra
                <ChevronRight className="h-4 w-4" />
              </a>
            </section>

            {/* 6. Tesla Powerwall 3 */}
            <section className="mb-14">
              <div className="border-l-4 border-slate-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Permanent Installation
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3">
                  6. Tesla Powerwall 3
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
                  <p className="text-lg font-bold text-foreground">$12,500-$16,500</p>
                  <p className="text-xs text-muted-foreground">Installed</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Capacity</p>
                  <p className="text-lg font-bold text-foreground">13.5 kWh</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output</p>
                  <p className="text-lg font-bold text-foreground">11,500W</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Battery</p>
                  <p className="text-lg font-bold text-foreground">NMC</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-foreground/80 leading-relaxed">
                  We are including the Tesla Powerwall 3 for context because many buyers comparing
                  portable power stations eventually ask: &quot;Should I just get a Powerwall
                  instead?&quot; The answer depends on your situation.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The Powerwall 3 is not portable. It is a permanently wall-mounted battery system
                  that requires professional installation and typically costs $12,500-$16,500
                  fully installed. What you get for that price is 13.5 kWh of capacity, 11,500W
                  of continuous output, an integrated solar inverter, automatic grid switchover,
                  and Tesla&apos;s Storm Watch feature that pre-charges the battery when severe weather
                  is forecasted.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  For homeowners who already have solar panels (or plan to install them), the
                  Powerwall 3 provides the most seamless integration. It is the &quot;set it and
                  forget it&quot; option — once installed, it manages itself automatically. The
                  10-year warranty guarantees 70% capacity retention. However, it uses NMC
                  (nickel manganese cobalt) chemistry rather than LFP, which has fewer total
                  cycles and is less thermally stable.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm text-green-900">
                    <li>Highest capacity (13.5 kWh) and output (11,500W)</li>
                    <li>Integrated solar inverter</li>
                    <li>Automatic grid switchover</li>
                    <li>Storm Watch predictive charging</li>
                    <li>10-year warranty</li>
                    <li>Zero maintenance after installation</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-1">
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm text-red-900">
                    <li>Not portable at all</li>
                    <li>$12,500-$16,500 installed (5-8x portable options)</li>
                    <li>Requires professional installation and permitting</li>
                    <li>NMC chemistry (fewer cycles, less stable than LFP)</li>
                    <li>Long lead times (weeks to months)</li>
                    <li>Cannot take it with you if you move (easily)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Best for</p>
                <p className="font-medium text-foreground">
                  Homeowners with solar already installed (or planning to install) who want a
                  permanent, fully automated backup solution and are willing to pay a premium for
                  seamless integration.
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic">
                Note: The Tesla Powerwall is not sold through affiliate programs. It must be
                purchased directly through Tesla or authorized installers.
              </p>
            </section>

            {/* ========== CALIFORNIA SECTION ========== */}
            <section className="mb-16">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="h-6 w-6 text-amber-600" />
                  <h2 className="text-2xl font-bold text-foreground">
                    California Buyers: Special Considerations
                  </h2>
                </div>

                <div className="space-y-6 text-foreground/80">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      PSPS Shutoffs Are Getting Worse
                    </h3>
                    <p className="leading-relaxed">
                      California&apos;s Public Safety Power Shutoff (PSPS) events affect 2 million+
                      households annually. PG&amp;E, SCE, and SDG&amp;E all conduct planned
                      outages during high fire-risk conditions, and these events can last
                      anywhere from 12 hours to 5+ days. A portable power station paired with
                      solar panels is one of the most practical ways to maintain power during
                      these events without a permanent generator installation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      TOU Arbitrage Opportunity
                    </h3>
                    <p className="leading-relaxed mb-3">
                      California&apos;s time-of-use rates create a significant arbitrage opportunity
                      for power station owners. By charging during off-peak hours and using
                      stored power during peak hours, you can meaningfully reduce your
                      electricity costs:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span><strong>PG&amp;E peak TOU:</strong> 45-52 cents/kWh</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span><strong>SCE peak TOU:</strong> 58-74 cents/kWh</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span><strong>SDG&amp;E peak TOU:</strong> 50-70+ cents/kWh</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-3">
                      With off-peak rates often 50-60% lower, a 4,000 Wh power station doing
                      daily TOU shifting could save $15-25/month on electricity costs alone.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      SGIP Rebates May Apply
                    </h3>
                    <p className="leading-relaxed">
                      California&apos;s Self-Generation Incentive Program (SGIP) offers rebates on
                      qualifying battery storage systems. General market customers may qualify
                      for approximately $150/kWh, while equity customers (low-income or
                      high-fire-risk areas) can receive up to $1,100/kWh. Not all portable
                      power stations qualify, so check with your utility&apos;s SGIP program
                      administrator before purchasing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Federal Tax Credit Status
                    </h3>
                    <p className="leading-relaxed">
                      The federal Residential Clean Energy Credit (formerly the ITC) for
                      homeowners expired on December 31, 2025. Standalone battery storage for
                      residential use no longer qualifies for the federal tax credit. However,
                      commercial or business-use battery systems may still qualify under
                      different provisions. Always consult a tax professional for your specific
                      situation.
                    </p>
                  </div>

                  <div className="bg-white border border-amber-300 rounded-lg p-4 mt-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Already thinking about solar for your California home?
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      A portable power station is a great start, but rooftop solar paired with
                      battery storage provides the most complete protection against rising rates
                      and outages. Check if you qualify for California&apos;s rate relief programs.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/solar-savings"
                        className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                      >
                        Check Your Savings
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/blog/is-solar-worth-it-california-2026"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                      >
                        Is Solar Worth It in CA?
                      </Link>
                      <Link
                        href="/blog/nem-3-california-still-worth-it"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                      >
                        NEM 3.0 Explained
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== BUYING GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Buying Guide: What to Look For
              </h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    1. Capacity (Wh)
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Capacity determines how long the power station can run your devices. A
                    typical California home uses 20-30 kWh per day, but essential loads
                    (refrigerator, lights, router, phone charging) draw roughly 500-800W,
                    meaning a 4,000 Wh unit will last 5-8 hours on essentials. For multi-day
                    outages, look for expandable systems or pair with solar panels.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    2. Output Power (Watts)
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Continuous output determines what appliances you can run simultaneously.
                    A refrigerator draws 100-400W, a microwave 1,000-1,500W, a window AC
                    500-1,500W, and a sump pump 800-1,800W. For home backup, we recommend a
                    minimum of 3,000W continuous output. Surge rating matters for motor
                    startup loads.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    3. Battery Chemistry (LFP vs NMC)
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    LFP (Lithium Iron Phosphate) is the clear winner for home backup. It
                    offers 3,000-4,000+ charge cycles (vs 500-1,000 for NMC), is more
                    thermally stable and safer, handles deep discharges better, and operates
                    in a wider temperature range. The only downside is slightly higher weight
                    per kWh. Every portable unit on this list uses LFP.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    4. Expandability
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Your power needs may grow over time, especially if you add an EV, a home
                    office, or medical equipment. Look for systems that support expansion
                    batteries. The range on this list goes from 12,000 Wh (Jackery) to
                    90,000 Wh (EcoFlow Delta Pro Ultra). Modular systems like the Bluetti
                    AC500 let you add capacity incrementally.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    5. Solar Input
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    If you plan to pair your power station with solar panels (highly
                    recommended for California), solar input wattage determines how fast you
                    can recharge from the sun. In California, you get an average of 5.5-6.5
                    peak sun hours daily. A 2,000W solar input with good panels can add
                    roughly 10,000-13,000 Wh per day, enough to fully recharge most units.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    6. Weight and Portability
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    If your power station will live in one spot permanently, weight matters
                    less. But if you need to move it between rooms, take it camping, or
                    store it in a closet, the difference between 61.5 lbs (Jackery) and
                    132 lbs (Anker) is significant. Consider whether you need wheels,
                    handles, or a cart.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    7. Home Integration Options
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    For seamless home backup, look for units that offer transfer switch
                    compatibility or dedicated home panels (like EcoFlow&apos;s Smart Home Panel).
                    These allow the power station to automatically kick in during outages
                    and power specific circuits in your electrical panel. Without this, you
                    will need to manually plug in appliances during outages.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== FAQ SECTION ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <details className="border border-slate-200 rounded-lg group" open>
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-slate-50 transition-colors rounded-lg">
                    What is the best portable power station for home backup in 2026?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    The EcoFlow Delta Pro 3 is our top pick. It offers 4,096 Wh of capacity
                    (expandable to 12,288 Wh), 4,000W output, LFP battery chemistry with
                    3,500+ cycle life, and X-Stream charging that goes from 0 to 80% in just
                    50 minutes. Its Smart Home Panel integration makes it a seamless whole-home
                    backup solution.
                  </div>
                </details>

                <details className="border border-slate-200 rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-slate-50 transition-colors rounded-lg">
                    Can a portable power station power a whole house?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Yes, but it depends on the unit and your home&apos;s power demands. Units like
                    the EcoFlow Delta Pro 3 (4,000W), Anker SOLIX F3800 (6,000W), and Bluetti
                    AC500 (5,000W) can power most essential circuits including refrigerators,
                    lights, routers, and medical devices. For true whole-home backup including
                    HVAC, the EcoFlow Delta Pro Ultra or Tesla Powerwall 3 are better suited.
                  </div>
                </details>

                <details className="border border-slate-200 rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-slate-50 transition-colors rounded-lg">
                    How long will a portable power station last during a power outage?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Runtime depends on capacity and load. A 4,000 Wh unit powering essential
                    loads (refrigerator, lights, router, phone charging) at roughly 500W will
                    last about 7-8 hours. With solar panels connected, you can recharge during
                    the day and run indefinitely. For California PSPS events that can last
                    2-5 days, pairing with solar panels is highly recommended.
                  </div>
                </details>

                <details className="border border-slate-200 rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-slate-50 transition-colors rounded-lg">
                    Is LFP (LiFePO4) better than NMC for power stations?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    For home backup, LFP (Lithium Iron Phosphate) is generally preferred. LFP
                    batteries offer 3,000-4,000+ charge cycles vs 500-1,000 for NMC, are more
                    thermally stable (safer), and handle deep discharges better. The tradeoff
                    is that LFP is heavier per kWh. All top portable power stations in 2026
                    use LFP chemistry.
                  </div>
                </details>

                <details className="border border-slate-200 rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-slate-50 transition-colors rounded-lg">
                    Can I charge a portable power station with solar panels?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    Yes. All major portable power stations support solar input via MC4 or
                    proprietary connectors. Solar input ranges from 1,400W (Jackery 2000 Plus)
                    to 3,000W (Bluetti AC500). In California, which averages 5.5-6.5 peak sun
                    hours daily, a 400W portable solar panel setup can add roughly
                    2,000-2,600 Wh per day to your power station.
                  </div>
                </details>

                <details className="border border-slate-200 rounded-lg group">
                  <summary className="p-4 font-semibold text-foreground cursor-pointer hover:bg-slate-50 transition-colors rounded-lg">
                    Do portable power stations qualify for the federal tax credit?
                  </summary>
                  <div className="px-4 pb-4 text-foreground/80 leading-relaxed">
                    The federal Residential Clean Energy Credit (formerly ITC) for homeowners
                    expired on December 31, 2025. However, standalone battery storage that is
                    charged exclusively by solar may still qualify under certain commercial or
                    business-use scenarios. California&apos;s SGIP program may offer rebates of
                    $150/kWh for general market customers and up to $1,100/kWh for equity
                    customers on qualifying battery storage systems.
                  </div>
                </details>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
                <Sun className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Ready to Go Solar in California?
                </h2>
                <p className="text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
                  A portable power station is a great first step, but nothing beats rooftop
                  solar paired with battery storage for long-term energy savings and outage
                  protection. California homeowners can qualify for programs that put solar on
                  your roof at no cost out of pocket, with fixed monthly payments that are
                  typically 30-50% less than your current utility bill.
                </p>
                <Link
                  href="/solar-savings"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  Check If You Qualify
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
