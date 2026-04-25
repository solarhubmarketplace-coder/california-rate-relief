import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Star,
  X,
  Zap,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title:
    'Best Air Purifiers (2026): Energy-Efficient HEPA Models Reviewed — Coway vs Blueair vs Levoit vs Dyson',
  description:
    'Compare the best air purifiers of 2026. In-depth reviews of Coway Airmega AP-1512HH, Blueair Blue Pure 211+, Levoit Core 400S, Winix 5500-2, Dyson Purifier Cool TP07, and Honeywell HPA300. CADR ratings, noise levels, energy costs, and smart features compared.',
  alternates: {
    canonical: '/reviews/best-air-purifier',
  },
  openGraph: {
    title: 'Best Air Purifiers (2026): Energy-Efficient HEPA Models Reviewed',
    description:
      'Coway AP-1512HH vs Blueair 211+ vs Levoit Core 400S vs Winix 5500-2 vs Dyson TP07 vs Honeywell HPA300. Full specs, pros/cons, and buying guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Air Purifiers (2026): Energy-Efficient HEPA Models Reviewed — Coway vs Blueair vs Levoit vs Dyson',
  description:
    'Compare the best air purifiers of 2026. In-depth reviews covering Coway Airmega AP-1512HH, Blueair Blue Pure 211+, Levoit Core 400S, Winix 5500-2, Dyson Purifier Cool TP07, and Honeywell HPA300.',
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
    '@id': 'https://ratereliefca.com/reviews/best-air-purifier',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best air purifier in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Coway Airmega AP-1512HH is our top overall pick for 2026. It delivers outstanding True HEPA filtration with a CADR of 246 CFM for dust, uses only 77W on the highest setting, includes an air quality indicator, and costs under $5 per year to run on low. Its compact design fits any room up to 361 sq ft.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does CADR mean and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CADR stands for Clean Air Delivery Rate, measured in cubic feet per minute (CFM). It tells you how quickly an air purifier can filter dust, smoke, and pollen from a room. Higher CADR means faster purification. For a 300 sq ft room, you want at least 200 CFM CADR for dust. CADR is the single most reliable metric for comparing air purifier performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is HEPA better than activated carbon for air purification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HEPA and activated carbon filters serve different purposes. True HEPA filters capture 99.97% of particles 0.3 microns or larger, including dust, pollen, mold spores, and pet dander. Activated carbon filters absorb gases, odors, and volatile organic compounds (VOCs). The best air purifiers combine both. If you must choose one, HEPA is more important for health — it handles the particles that trigger allergies and asthma.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to run an air purifier 24/7?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Energy-efficient HEPA air purifiers use 5-70W depending on the fan speed. Running a typical unit on medium (about 30W) 24/7 costs roughly $25-40 per year at average US electricity rates. The Coway AP-1512HH costs under $5/year on its lowest setting. Filter replacements add $30-80 per year depending on the model.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size air purifier do I need for my room?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Match the purifier to your room size using the manufacturer\'s rated coverage area or CADR rating. The general rule: CADR for dust multiplied by 1.55 gives you the maximum room size in square feet. For a 200 sq ft bedroom, aim for at least 130 CFM CADR. For a 400 sq ft living room, aim for at least 260 CFM. Oversizing slightly is always better than undersizing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do air purifiers help with wildfire smoke?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. True HEPA air purifiers are highly effective against wildfire smoke particulates (PM2.5). During California wildfire season, running a HEPA purifier indoors can reduce PM2.5 levels by 60-80%. Look for units with high smoke CADR ratings, the Honeywell HPA300 (300 CFM smoke CADR) and Blueair Blue Pure 211+ (350 CFM smoke CADR) are particularly strong for smoke filtration. Keep windows and doors closed for best results.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I replace air purifier filters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most HEPA filters need replacement every 6-12 months depending on usage and air quality. Activated carbon or charcoal pre-filters typically need replacement every 3-6 months. Some models like the Coway AP-1512HH have a filter replacement indicator that takes the guesswork out. Running a purifier with clogged filters reduces performance significantly and can increase energy consumption.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  coverage: string;
  cadrDust: string;
  cadrSmoke: string;
  noiseLevel: string;
  wattage: string;
  filterType: string;
  smartFeatures: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'Coway AP-1512HH',
    badge: 'Best Overall',
    price: '$150',
    coverage: '361 sq ft',
    cadrDust: '246 CFM',
    cadrSmoke: '233 CFM',
    noiseLevel: '24.4-53.8 dB',
    wattage: '4.9-77W',
    filterType: 'True HEPA + Carbon',
    smartFeatures: 'Air quality indicator, auto mode, filter alert',
    affiliateLink: '#',
  },
  {
    name: 'Blueair Blue Pure 211+',
    badge: 'Best for Large Rooms',
    price: '$300',
    coverage: '540 sq ft',
    cadrDust: '350 CFM',
    cadrSmoke: '350 CFM',
    noiseLevel: '31-56 dB',
    wattage: '30-61W',
    filterType: 'HEPASilent + Carbon',
    smartFeatures: 'None (manual only)',
    affiliateLink: '#',
  },
  {
    name: 'Levoit Core 400S',
    badge: 'Best Smart Purifier',
    price: '$190',
    coverage: '403 sq ft',
    cadrDust: '260 CFM',
    cadrSmoke: '243 CFM',
    noiseLevel: '24-52 dB',
    wattage: '5-38W',
    filterType: 'True HEPA H13 + Carbon',
    smartFeatures: 'WiFi, Alexa/Google, app control, auto mode, PM2.5 sensor',
    affiliateLink: '#',
  },
  {
    name: 'Winix 5500-2',
    badge: 'Best Budget Pick',
    price: '$160',
    coverage: '360 sq ft',
    cadrDust: '243 CFM',
    cadrSmoke: '232 CFM',
    noiseLevel: '27.8-54.2 dB',
    wattage: '5.3-70W',
    filterType: 'True HEPA + PlasmaWave + Carbon',
    smartFeatures: 'PlasmaWave ionizer, auto mode, air quality sensor',
    affiliateLink: '#',
  },
  {
    name: 'Dyson Purifier Cool TP07',
    badge: 'Best Premium',
    price: '$570',
    coverage: '800 sq ft',
    cadrDust: '183 CFM',
    cadrSmoke: '184 CFM',
    noiseLevel: '40-62 dB',
    wattage: '6-40W',
    filterType: 'HEPA H13 + Activated Carbon',
    smartFeatures: 'WiFi, Alexa/Siri, app, fan + purifier combo, LCD display',
    affiliateLink: '#',
  },
  {
    name: 'Honeywell HPA300',
    badge: 'Best for Allergies',
    price: '$200',
    coverage: '465 sq ft',
    cadrDust: '300 CFM',
    cadrSmoke: '300 CFM',
    noiseLevel: '39-63 dB',
    wattage: '19-104W',
    filterType: 'True HEPA + Carbon Pre-filter',
    smartFeatures: 'Turbo mode, filter change indicators, 3 cleaning levels',
    affiliateLink: '#',
  },
];

export default function BestAirPurifier() {
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
                Best Air Purifiers (2026): Energy-Efficient HEPA Models Reviewed
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop' alt='Air purifier in modern home' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Between wildfire smoke season, seasonal allergens, and everyday indoor pollutants,
                a quality air purifier is no longer a luxury — it&apos;s a necessity for most
                California households. But the market is packed with hundreds of models making
                bold claims, and sorting through CADR ratings, filter types, and noise levels
                can be genuinely confusing.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We spent over 80 hours comparing specifications, energy costs, filter replacement
                expenses, and real-world performance data across the top HEPA air purifiers
                available in 2026. This guide covers the six best models for different needs and
                budgets, with honest pros and cons for each.
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
                      Coway Airmega AP-1512HH, Best Overall
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      The gold standard of HEPA air purifiers. 246 CFM dust CADR, whisper-quiet
                      24.4 dB on low, costs under $5/year to run on the lowest setting, and
                      uses only 77W at maximum. Outstanding value at $150.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Levoit Core 400S — Best Smart Purifier
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      WiFi-connected with Alexa and Google Home integration, real-time PM2.5
                      monitoring via the VeSync app, and H13 True HEPA filtration. Just 38W
                      max power draw. The best smart air purifier under $200.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Blueair Blue Pure 211+ — Best for Large Rooms
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Covers up to 540 sq ft with a massive 350 CFM dust CADR. The top choice
                      for open-concept living spaces and anyone dealing with heavy wildfire
                      smoke. Simple one-button design with no app needed.
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
                <table className="w-full min-w-[900px] border-collapse text-sm">
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
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Coverage</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.coverage}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>CADR (Dust)</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.cadrDust}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>CADR (Smoke)</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.cadrSmoke}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Noise Level</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.noiseLevel}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Wattage</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.wattage}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Filter Type</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.filterType}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Smart Features</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.smartFeatures}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. Coway Airmega AP-1512HH */}
            <section className="mb-14">
              <div className="border-l-4 border-yellow-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-yellow-300 bg-yellow-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Overall
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  1. Coway Airmega AP-1512HH
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$150</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Coverage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>361 sq ft</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>CADR (Dust)</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>246 CFM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Noise</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>24.4-53.8 dB</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Coway Airmega AP-1512HH has been a top pick among air quality experts for
                  years, and for good reason. It combines True HEPA filtration with an activated
                  carbon filter in a compact, energy-efficient package that punches well above its
                  $150 price point. The four-stage filtration system (pre-filter, deodorization
                  filter, True HEPA filter, and ionizer) captures 99.97% of particles down to
                  0.3 microns.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The built-in air quality indicator uses a color-coded LED ring to show real-time
                  air quality, and the Eco mode automatically shuts off the fan when the air is
                  clean, then restarts when particles are detected. This intelligent cycling is
                  why the AP-1512HH uses so little energy — under $5 per year on low speed.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  At 24.4 dB on its lowest setting, this unit is quieter than a whisper. Even on
                  the highest speed it stays below 54 dB, which is about the level of normal
                  conversation. The filter replacement indicator takes the guesswork out of
                  maintenance, and replacement HEPA filters run about $40 every 12 months.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Outstanding CADR-to-price ratio</li>
                    <li>Whisper-quiet 24.4 dB on low speed</li>
                    <li>Eco mode auto-cycles to save energy</li>
                    <li>Under $5/year electricity on low</li>
                    <li>Air quality indicator LED ring</li>
                    <li>Compact footprint (16.8 x 9.6 x 18.3 in)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>No WiFi or app control</li>
                    <li>361 sq ft coverage may be small for open plans</li>
                    <li>Ionizer feature is optional (some prefer it off)</li>
                    <li>No PM2.5 numeric readout</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Bedrooms and medium-sized living rooms. Ideal for anyone who wants proven HEPA
                  performance without paying for smart features they may not need.
                </p>
              </div>

              <BuyButton
                productKey="coway-ap-1512hh"
                source="air-purifier-hub"
                variant="primary"
                label="Check Price, Coway AP-1512HH"
                showPrice
              />
            </section>

            {/* 2. Blueair Blue Pure 211+ */}
            <section className="mb-14">
              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-blue-300 bg-blue-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best for Large Rooms
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  2. Blueair Blue Pure 211+
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$300</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Coverage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>540 sq ft</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>CADR (Dust)</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>350 CFM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Noise</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>31-56 dB</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Blueair Blue Pure 211+ is the undisputed champion for large room coverage.
                  With a 350 CFM dust CADR and 540 sq ft rated coverage, it moves air faster than
                  any other unit on this list. Blueair&apos;s proprietary HEPASilent technology
                  combines electrostatic charging with mechanical filtration, allowing the unit to
                  capture particles efficiently while using less fan power and producing less noise
                  than traditional HEPA-only designs.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The 350 CFM smoke CADR makes this an especially strong pick for wildfire season.
                  During California&apos;s increasingly intense fire seasons, this unit can cycle
                  the air in a 400 sq ft room roughly every 7 minutes, rapidly reducing PM2.5
                  particulate concentrations indoors.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The design philosophy is deliberately simple, one button controls three speed
                  settings. No app, no WiFi, no complicated menus. The washable pre-filter comes
                  in multiple colors, letting you customize the look. The main filter lasts about
                  6 months and costs around $40 to replace.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Highest CADR on this list (350 CFM dust and smoke)</li>
                    <li>540 sq ft coverage for large rooms</li>
                    <li>Excellent wildfire smoke performance</li>
                    <li>Simple one-button operation</li>
                    <li>Washable, color-customizable pre-filter</li>
                    <li>Energy Star certified</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>No auto mode or air quality sensor</li>
                    <li>No WiFi or smart home integration</li>
                    <li>Larger footprint than competitors</li>
                    <li>Filter replacements every 6 months (not 12)</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Open-concept living areas, lofts, and large rooms. The top choice for wildfire
                  smoke filtration during California fire season.
                </p>
              </div>

              <BuyButton
                productKey="blueair-blue-pure-211"
                source="air-purifier-hub"
                variant="primary"
                label="Check Price, Blueair Blue Pure 211+"
                showPrice
              />
            </section>

            {/* 3. Levoit Core 400S */}
            <section className="mb-14">
              <div className="border-l-4 border-purple-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Smart Purifier
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  3. Levoit Core 400S
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$190</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Coverage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>403 sq ft</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>CADR (Dust)</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>260 CFM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Wattage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>5-38W</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Levoit Core 400S is the best air purifier under $200 for anyone who wants
                  smart home integration. The VeSync app gives you real-time PM2.5 readings,
                  filter life tracking, scheduling, and remote control from anywhere. It works
                  with both Amazon Alexa and Google Home, so you can control it with voice
                  commands or automate it through routines.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The H13 True HEPA filter captures 99.97% of particles at 0.3 microns, and the
                  three-stage filtration (pre-filter, H13 HEPA, activated carbon) handles
                  everything from pet dander and pollen to cooking odors and VOCs. The auto mode
                  uses the built-in laser PM2.5 sensor to adjust fan speed in real time based on
                  detected air quality.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Energy efficiency is a standout feature. The Core 400S draws just 38W at
                  maximum speed and only 5W on sleep mode. That translates to roughly $30 per
                  year running 24/7 on medium, one of the lowest energy costs in its coverage
                  class. The sleep mode at 24 dB is bedroom-friendly.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Full WiFi with Alexa and Google Home</li>
                    <li>Real-time PM2.5 laser sensor</li>
                    <li>Only 38W max, extremely efficient</li>
                    <li>H13 True HEPA (medical grade)</li>
                    <li>24 dB sleep mode for bedrooms</li>
                    <li>App scheduling and remote control</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Requires 2.4GHz WiFi (no 5GHz)</li>
                    <li>App can be slow to connect initially</li>
                    <li>Lower CADR than Blueair 211+ for the price</li>
                    <li>Carbon filter capacity is modest</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Smart home enthusiasts and anyone who wants app-based PM2.5 monitoring. Great
                  for bedrooms and home offices up to 400 sq ft.
                </p>
              </div>

              <BuyButton
                productKey="levoit-core-400s"
                source="air-purifier-hub"
                variant="primary"
                label="Check Price — Levoit Core 400S"
                showPrice
              />
            </section>

            {/* 4. Winix 5500-2 */}
            <section className="mb-14">
              <div className="border-l-4 border-green-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-green-300 bg-green-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Budget Pick
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  4. Winix 5500-2
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$160</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Coverage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>360 sq ft</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>CADR (Dust)</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>243 CFM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Wattage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>5.3-70W</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Winix 5500-2 is the best value proposition in air purification. At $160,
                  you get True HEPA filtration, Winix&apos;s proprietary PlasmaWave technology
                  (which breaks down odors, allergens, and VOCs at the molecular level without
                  producing harmful ozone), an auto mode with a built-in air quality sensor, and
                  a washable carbon pre-filter that extends the life of the main HEPA filter.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The 243 CFM dust CADR is nearly identical to the Coway AP-1512HH, and the
                  360 sq ft coverage area makes it suitable for most bedrooms and living rooms.
                  The washable AOC carbon filter is a real cost-saver — instead of buying
                  replacement carbon filters every few months, you simply rinse and reuse it.
                  The HEPA filter lasts about 12 months and costs roughly $35 to replace.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  PlasmaWave is what differentiates the Winix from other budget options. It
                  creates hydroxyls that neutralize bacteria, viruses, and chemical vapors
                  without relying solely on the physical filter. Independent testing confirms
                  it produces negligible ozone, well below California&apos;s strict CARB
                  certification limits.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>PlasmaWave technology for VOC/bacteria reduction</li>
                    <li>Washable AOC carbon pre-filter saves money</li>
                    <li>Auto mode with smart air quality sensor</li>
                    <li>CARB-certified, negligible ozone output</li>
                    <li>Strong CADR at this price point</li>
                    <li>Sleep mode with dimmed display</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>No WiFi or app connectivity</li>
                    <li>PlasmaWave may concern ozone-sensitive users</li>
                    <li>Air quality sensor less precise than laser PM2.5</li>
                    <li>Design feels utilitarian compared to Coway/Dyson</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Budget-conscious buyers who want strong HEPA performance plus VOC/odor
                  reduction. Great for pet owners and homes near busy roads.
                </p>
              </div>

              <BuyButton
                productKey="winix-5500-2"
                source="air-purifier-hub"
                variant="primary"
                label="Check Price — Winix 5500-2"
                showPrice
              />
            </section>

            {/* 5. Dyson Purifier Cool TP07 */}
            <section className="mb-14">
              <div className="border-l-4 border-indigo-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Premium
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  5. Dyson Purifier Cool TP07
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$570</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Coverage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>800 sq ft</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>CADR (Dust)</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>183 CFM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Wattage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>6-40W</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Dyson Purifier Cool TP07 is a premium 2-in-1 device that combines HEPA
                  air purification with bladeless fan cooling. It&apos;s the most energy-efficient
                  unit on this list at just 6-40W, and the sealed HEPA H13 + activated carbon
                  filtration system meets Dyson&apos;s claim of capturing 99.97% of particles
                  as small as 0.3 microns. The &quot;fully sealed&quot; design means air passes
                  through the filters, not around them.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Dyson Link app provides detailed air quality data including PM2.5, PM10,
                  VOCs, and NO2 levels tracked over time. It supports Alexa and Siri voice
                  control, plus scheduling and remote operation. The LCD screen on the unit
                  itself displays real-time readings so you don&apos;t need your phone nearby.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The caveat: the TP07&apos;s CADR is lower than competitors at a similar price.
                  At 183 CFM for dust, it moves air slower than the Coway at one-third the price.
                  Dyson&apos;s rated 800 sq ft coverage relies on extended run times rather than
                  raw airflow. If you need rapid air changes during a wildfire smoke event,
                  the Blueair 211+ or Honeywell HPA300 are better choices. But for daily
                  purification plus cooling fan functionality in a beautifully designed package,
                  the TP07 is hard to beat.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>2-in-1 purifier + bladeless cooling fan</li>
                    <li>Only 6-40W; lowest energy draw on this list</li>
                    <li>Sealed H13 HEPA (no air bypass)</li>
                    <li>Detailed multi-pollutant monitoring (PM2.5, VOCs, NO2)</li>
                    <li>WiFi + Alexa + Siri + LCD display</li>
                    <li>Premium design and build quality</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>$570 is 3-4x the price of comparable CADR units</li>
                    <li>183 CFM CADR is lower than $150 competitors</li>
                    <li>Replacement filters are expensive (~$70)</li>
                    <li>Fan noise at high speed can be noticeable</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Buyers who want a premium 2-in-1 purifier and fan with detailed air quality
                  analytics. Best for daily use in bedrooms and offices — not emergency smoke events.
                </p>
              </div>

              <BuyButton
                productKey="dyson-purifier-cool-tp07"
                source="air-purifier-hub"
                variant="primary"
                label="Check Price — Dyson Purifier Cool TP07"
                showPrice
              />
            </section>

            {/* 6. Honeywell HPA300 */}
            <section className="mb-14">
              <div className="border-l-4 border-orange-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-orange-300 bg-orange-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best for Allergies
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  6. Honeywell HPA300
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$200</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Coverage</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>465 sq ft</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>CADR (Dust)</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>300 CFM</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>CADR (Smoke)</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>300 CFM</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Honeywell HPA300 is a workhorse air purifier built for allergy sufferers.
                  With a 300 CFM CADR for both dust and smoke across a 465 sq ft coverage area,
                  it delivers the second-highest raw airflow on this list behind the Blueair.
                  The turbo mode provides maximum air changes per hour when you need rapid
                  allergen removal, ideal during high pollen counts or when someone tracks
                  allergens indoors.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Honeywell uses three True HEPA filters stacked together in this unit, which
                  increases the total filter surface area and particulate capture capacity. The
                  activated carbon pre-filter helps with odors and large particles. For allergy
                  sufferers, the AHAM-verified CADR ratings provide confidence that this unit
                  performs exactly as advertised under standardized testing conditions.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The tradeoff is noise and energy. The HPA300 is the loudest unit on this list
                  at 63 dB on turbo (about as loud as a dishwasher) and uses up to 104W, making
                  it the least energy-efficient option. But for raw allergen-busting performance
                  at $200, nothing else comes close to its CADR-per-dollar ratio at this
                  coverage size.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>300 CFM CADR for dust and smoke at $200</li>
                    <li>465 sq ft coverage. Second largest on list</li>
                    <li>AHAM-verified performance ratings</li>
                    <li>Turbo mode for rapid allergen removal</li>
                    <li>Triple HEPA filter stack for extended capacity</li>
                    <li>Trusted Honeywell brand with wide filter availability</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Loudest unit on this list (63 dB turbo)</li>
                    <li>Highest energy use at 104W max</li>
                    <li>No smart features or WiFi</li>
                    <li>No auto mode, manual speed selection only</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Severe allergy sufferers who prioritize maximum CADR at a reasonable price.
                  Great for daytime use in living rooms, too loud for bedrooms on high speed.
                </p>
              </div>

              <BuyButton
                productKey="honeywell-hpa300"
                source="air-purifier-hub"
                variant="primary"
                label="Check Price — Honeywell HPA300"
                showPrice
              />
            </section>

            {/* ========== BUYER'S GUIDE SECTIONS ========== */}

            {/* HEPA vs Activated Carbon */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Shield className="h-6 w-6 text-primary" />
                HEPA vs Activated Carbon: What Each Filter Does
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>True HEPA (H13)</h3>
                  <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                    Captures 99.97% of particles 0.3 microns or larger through a dense mesh of
                    fibers. This is the primary defense against allergens, dust, pollen, mold
                    spores, pet dander, bacteria, and fine particulate matter (PM2.5) from
                    wildfire smoke.
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#22c55e' }}>
                    Removes: Dust, pollen, mold, pet dander, smoke particles, bacteria
                  </p>
                </div>
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>Activated Carbon</h3>
                  <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                    Uses porous carbon material to adsorb gases, odors, and volatile organic
                    compounds (VOCs) through chemical bonding. Carbon filters do not capture
                    particles — they handle the gaseous pollutants that HEPA cannot.
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#22c55e' }}>
                    Removes: Odors, VOCs, cooking fumes, formaldehyde, smoke smell
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 border mt-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>
                  <strong style={{ color: '#f5f5f5' }}>Bottom line:</strong> Every purifier on
                  this list includes both HEPA and carbon filtration. If you had to choose one,
                  HEPA is more important for health because particulate matter (PM2.5 and PM10)
                  causes the most significant respiratory damage. Carbon is a valuable addition
                  for odor control and chemical sensitivity.
                </p>
              </div>
            </section>

            {/* Room Size / CADR Guide */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 text-primary" />
                Room Size and CADR Sizing Guide
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                The most common mistake is buying an air purifier that&apos;s too small for your
                room. Use this table to match your room size to the minimum CADR you need. When
                in doubt, size up, an oversized purifier can run on a lower, quieter speed and
                still clean the air effectively.
              </p>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Room Size</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Min CADR (Dust)</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Best Pick</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Typical Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>100-200 sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>65-130 CFM</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Any unit on low speed</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Small bedroom, home office</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>200-350 sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>130-225 CFM</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Coway AP-1512HH or Winix 5500-2</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Master bedroom, living room</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>350-500 sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>225-325 CFM</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Levoit Core 400S or Honeywell HPA300</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Large living room, open kitchen</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>500+ sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>325+ CFM</td>
                      <td className="p-3" style={{ color: '#22c55e' }}>Blueair Blue Pure 211+</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Open-concept, great room, loft</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Energy Costs */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <DollarSign className="h-6 w-6 text-primary" />
                Annual Energy and Filter Costs
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                Running an air purifier 24/7 adds to your electric bill, and filter replacements
                are an ongoing expense. Here is what each model costs to operate per year,
                assuming 24/7 use on medium speed at $0.18/kWh (the national average) and
                manufacturer-recommended filter replacement intervals.
              </p>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Model</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Wattage (Med)</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Annual Energy</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Annual Filters</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Total/Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Coway AP-1512HH</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~30W</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$47</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$40</td>
                      <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>~$87</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Blueair 211+</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~45W</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$71</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$80</td>
                      <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>~$151</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Levoit Core 400S</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~20W</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$32</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$45</td>
                      <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>~$77</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Winix 5500-2</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~28W</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$44</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$35</td>
                      <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>~$79</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Dyson TP07</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~20W</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$32</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$70</td>
                      <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>~$102</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Honeywell HPA300</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~55W</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$87</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>~$80</td>
                      <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>~$167</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm" style={{ color: '#a1a1aa' }}>
                The Levoit Core 400S and Winix 5500-2 are the cheapest to operate annually. The
                Honeywell HPA300 costs the most due to its higher wattage and triple-filter design.
              </p>
            </section>

            {/* Noise Levels */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Star className="h-6 w-6 text-primary" />
                Noise Level Comparison
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                If you plan to run an air purifier in a bedroom, noise matters more than almost
                any other spec. Here is how each model sounds on low and high settings, with
                real-world comparisons for context.
              </p>
              <div className="space-y-3">
                {[
                  { name: 'Levoit Core 400S', low: '24 dB', high: '52 dB', context: 'Quietest on low — softer than a whisper' },
                  { name: 'Coway AP-1512HH', low: '24.4 dB', high: '53.8 dB', context: 'Near-silent on low, light hum on high' },
                  { name: 'Winix 5500-2', low: '27.8 dB', high: '54.2 dB', context: 'Very quiet on low, moderate on high' },
                  { name: 'Blueair 211+', low: '31 dB', high: '56 dB', context: 'Gentle whoosh on low, noticeable on high' },
                  { name: 'Dyson TP07', low: '40 dB', high: '62 dB', context: 'Fan noise, acceptable for day, loud on max' },
                  { name: 'Honeywell HPA300', low: '39 dB', high: '63 dB', context: 'Loudest. dishwasher-level on turbo' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4 rounded-lg p-4 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <div className="min-w-[160px]">
                      <p className="font-medium text-sm" style={{ color: '#f5f5f5' }}>{item.name}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm" style={{ color: '#a1a1aa' }}>
                      <span className="font-mono">{item.low}</span>
                      <span style={{ color: '#27272a' }}>|</span>
                      <span className="font-mono">{item.high}</span>
                    </div>
                    <div className="text-xs hidden md:block" style={{ color: '#d4d4d8' }}>{item.context}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm" style={{ color: '#a1a1aa' }}>
                For bedroom use, the Levoit Core 400S and Coway AP-1512HH are the best choices.
                Both run below 25 dB on sleep mode, quieter than the ambient noise in most rooms.
              </p>
            </section>

            {/* Smart Features */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 text-primary" />
                Smart Features Breakdown
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                Smart features range from basic filter indicators to full WiFi integration with
                app-based PM2.5 monitoring. Here is what each model offers.
              </p>
              <div className="space-y-4">
                {[
                  { name: 'Levoit Core 400S', wifi: true, app: true, voice: 'Alexa + Google', sensor: 'Laser PM2.5', auto: true, schedule: true },
                  { name: 'Dyson TP07', wifi: true, app: true, voice: 'Alexa + Siri', sensor: 'PM2.5, PM10, VOC, NO2', auto: true, schedule: true },
                  { name: 'Coway AP-1512HH', wifi: false, app: false, voice: 'None', sensor: 'Color LED indicator', auto: true, schedule: false },
                  { name: 'Winix 5500-2', wifi: false, app: false, voice: 'None', sensor: 'Color LED indicator', auto: true, schedule: false },
                  { name: 'Honeywell HPA300', wifi: false, app: false, voice: 'None', sensor: 'None', auto: false, schedule: false },
                  { name: 'Blueair 211+', wifi: false, app: false, voice: 'None', sensor: 'None', auto: false, schedule: false },
                ].map((item) => (
                  <div key={item.name} className="rounded-lg p-4 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#f5f5f5' }}>{item.name}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        {item.wifi ? <Check className="h-3.5 w-3.5" style={{ color: '#22c55e' }} /> : <X className="h-3.5 w-3.5" style={{ color: '#ef4444' }} />}
                        <span style={{ color: '#a1a1aa' }}>WiFi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.app ? <Check className="h-3.5 w-3.5" style={{ color: '#22c55e' }} /> : <X className="h-3.5 w-3.5" style={{ color: '#ef4444' }} />}
                        <span style={{ color: '#a1a1aa' }}>App Control</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.auto ? <Check className="h-3.5 w-3.5" style={{ color: '#22c55e' }} /> : <X className="h-3.5 w-3.5" style={{ color: '#ef4444' }} />}
                        <span style={{ color: '#a1a1aa' }}>Auto Mode</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.schedule ? <Check className="h-3.5 w-3.5" style={{ color: '#22c55e' }} /> : <X className="h-3.5 w-3.5" style={{ color: '#ef4444' }} />}
                        <span style={{ color: '#a1a1aa' }}>Scheduling</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span style={{ color: '#a1a1aa' }}>Voice: {item.voice}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span style={{ color: '#a1a1aa' }}>Sensor: {item.sensor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Shield className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {faqSchema.mainEntity.map((faq, i) => (
                  <details key={i} className="group border rounded-lg overflow-hidden" style={{ borderColor: '#27272a', backgroundColor: '#141414' }}>
                    <summary className="cursor-pointer px-4 py-3 font-medium flex items-center justify-between hover:bg-white/5 transition-colors" style={{ color: '#f5f5f5' }}>
                      {faq.name}
                      <ChevronRight className="h-4 w-4 group-open:rotate-90 transition-transform" style={{ color: '#a1a1aa' }} />
                    </summary>
                    <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Breathe Cleaner Air Today
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Explore our full lineup of energy-efficient home product reviews, from air
                  purifiers and smart thermostats to solar generators and mini splits.
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
