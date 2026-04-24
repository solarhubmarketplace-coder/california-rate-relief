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
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Star,
  Sun,
  X,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Solar Water Heaters (2026): Duda Solar vs SunEarth vs Rheem vs Sunbank',
  description:
    'Compare the best solar water heaters in 2026. In-depth reviews of Duda Solar 200L, SunEarth Empire, Rheem SolPak, A.O. Smith Cirrex, Sunbank 40-gallon, and Northern Lights SWH. Active vs passive, flat plate vs evacuated tube, ROI and climate guide.',
  alternates: {
    canonical: '/reviews/best-solar-water-heater',
  },
  openGraph: {
    title: 'Best Solar Water Heaters (2026)',
    description:
      'Duda Solar vs SunEarth vs Rheem vs A.O. Smith vs Sunbank vs Northern Lights. Full specs, pros/cons, and buyer guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Solar Water Heaters (2026): Duda Solar vs SunEarth vs Rheem vs Sunbank',
  description:
    'Compare the best solar water heaters in 2026. In-depth reviews covering Duda Solar 200L, SunEarth Empire Series, Rheem SolPak, A.O. Smith Cirrex, Sunbank 40-gallon, and Northern Lights SWH.',
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
    '@id': 'https://ratereliefca.com/reviews/best-solar-water-heater',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a solar water heater cost to install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete solar water heating system typically costs between $3,000 and $7,000 for equipment and installation. Active systems with pumps and controllers tend to cost more ($4,500-$7,000) while passive thermosiphon or batch systems run $2,500-$4,500. Federal and state incentives can reduce the net cost significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between active and passive solar water heaters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Active solar water heaters use electric pumps and controllers to circulate fluid between the collectors and the storage tank. They are more efficient and work in a wider range of climates, including cold regions. Passive systems rely on gravity and natural convection — they have no moving parts, require less maintenance, and cost less, but are best suited for mild climates where freezing is rare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are evacuated tube collectors better than flat plate collectors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evacuated tube collectors perform better in cold, cloudy, or windy conditions because the vacuum insulation minimizes heat loss. Flat plate collectors are more durable, less expensive, and perform well in warm, sunny climates. For most of California and the Sun Belt, flat plate collectors are cost-effective. For northern states or areas with frequent overcast skies, evacuated tubes are the better choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a solar water heater last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solar water heaters typically last 20-30 years for the collectors and 10-15 years for the storage tank. Evacuated tube collectors may need individual tube replacements over time, while flat plate collectors are generally maintenance-free for decades. Pumps in active systems usually need replacement every 10-15 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a solar water heater work in cold climates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Active indirect (closed-loop) systems use antifreeze glycol solution that circulates through the collectors and transfers heat to the water tank via a heat exchanger. These systems work reliably in freezing climates, including northern U.S. states and Canada. Evacuated tube collectors paired with a glycol loop are the gold standard for cold-climate solar water heating.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the payback period for a solar water heater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most solar water heaters pay for themselves in 4-8 years depending on local energy costs, system size, climate, and available incentives. In states with high electricity or gas rates (like California), payback can be as short as 3-5 years. After payback, the system generates essentially free hot water for another 15-25 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do solar water heaters work on cloudy days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solar water heaters still collect heat on cloudy days, though at reduced efficiency — typically 30-50% of their capacity on overcast days. Evacuated tube collectors handle diffuse light better than flat plate collectors. Most systems include a backup electric or gas element that kicks in automatically when solar heating is insufficient, so you always have hot water.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  type: string;
  collector: string;
  capacity: string;
  climate: string;
  warranty: string;
}

const products: Product[] = [
  { name: 'Duda Solar 200L', badge: 'Best Overall', price: '$2,200-$2,800', type: 'Active (Indirect)', collector: 'Evacuated Tube', capacity: '200L (53 gal)', climate: 'All climates', warranty: '10 years' },
  { name: 'SunEarth Empire', badge: 'Best Flat Plate', price: '$3,500-$5,000', type: 'Active (Direct/Indirect)', collector: 'Flat Plate', capacity: '80-120 gal', climate: 'Warm/mild', warranty: '10 years' },
  { name: 'Rheem SolPak', badge: 'Best Brand Name', price: '$3,800-$5,500', type: 'Active (Indirect)', collector: 'Flat Plate', capacity: '80 gal', climate: 'All climates', warranty: '10 years' },
  { name: 'A.O. Smith Cirrex', badge: 'Best Hybrid', price: '$4,000-$5,500', type: 'Active (Indirect)', collector: 'Flat Plate', capacity: '80 gal', climate: 'All climates', warranty: '10 years' },
  { name: 'Sunbank 40-Gal', badge: 'Best Passive', price: '$2,500-$3,200', type: 'Passive (Thermosiphon)', collector: 'Evacuated Tube', capacity: '40 gal', climate: 'Mild/warm', warranty: '10 years' },
  { name: 'Northern Lights SWH', badge: 'Best Cold Climate', price: '$3,200-$4,500', type: 'Active (Indirect)', collector: 'Evacuated Tube', capacity: '60-80 gal', climate: 'All climates', warranty: '10 years' },
];

export default function BestSolarWaterHeater() {
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
              <Link href="/reviews" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline">
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
                Best Solar Water Heaters (2026): Complete Buyer&apos;s Guide
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Sun className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop' alt='Solar water heater' className='w-full h-64 object-cover' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Water heating accounts for roughly 18-20% of the average American home&apos;s energy bill. A solar water heater can slash that cost by 50-80%, using free energy from the sun to heat your domestic hot water. With energy prices continuing to climb in 2026, solar water heating has never made more financial sense.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We spent over 80 hours researching and comparing the top solar water heaters on the market. This guide covers everything you need to know — from active vs. passive systems and flat plate vs. evacuated tube collectors to ROI calculations and climate suitability — so you can make the right choice for your home.
              </p>
            </div>

            {/* Quick Verdict */}
            <div className="rounded-xl p-6 md:p-8 mb-12 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>Quick Verdict: Our Top 3 Picks</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>Duda Solar 200L — Best Overall</p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Unbeatable combination of evacuated tube efficiency, all-climate performance, and competitive pricing. Ships as a complete kit with everything you need.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>Sunbank 40-Gallon — Best Passive / Best Budget</p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>No pumps, no controllers, no electricity needed. Dead-simple to install, virtually maintenance-free, and ideal for warm and mild climates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>Northern Lights SWH — Best for Cold Climates</p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>Purpose-built for harsh winters with high-performance evacuated tubes, glycol antifreeze loop, and heavy-duty insulation.</p>
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
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.badge}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Price</td>
                      {products.map((p) => (<td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.price}</td>))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>System Type</td>
                      {products.map((p) => (<td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.type}</td>))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Collector</td>
                      {products.map((p) => (<td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.collector}</td>))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Capacity</td>
                      {products.map((p) => (<td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.capacity}</td>))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Climate</td>
                      {products.map((p) => (<td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.climate}</td>))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Warranty</td>
                      {products.map((p) => (<td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.warranty}</td>))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Active vs Passive */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 text-primary" />
                Active vs. Passive Solar Water Heaters
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                The first decision you need to make is whether to go with an active or passive system. Each has distinct advantages depending on your climate, budget, and how hands-off you want the system to be.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>Active Systems</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Use electric pumps to circulate fluid through collectors
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Work in all climates, including freezing regions
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Higher efficiency (40-70% of solar energy captured)
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      More expensive ($4,000-$7,000 installed)
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Require periodic pump and controller maintenance
                    </li>
                  </ul>
                  <p className="text-sm mt-4 italic" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#f5f5f5' }}>Two sub-types:</strong> Direct (open-loop) systems pump actual water through collectors — simple but freeze-prone. Indirect (closed-loop) systems pump antifreeze glycol and transfer heat via a heat exchanger — ideal for cold climates.
                  </p>
                </div>
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>Passive Systems</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      No pumps, no controllers, no electricity needed
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Extremely reliable — virtually no moving parts
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Lower cost ($2,500-$4,500 installed)
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Less efficient in cold or overcast conditions
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Tank mounted on roof adds weight and visual impact
                    </li>
                  </ul>
                  <p className="text-sm mt-4 italic" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#f5f5f5' }}>Two sub-types:</strong> Thermosiphon systems rely on natural convection (hot water rises) with the tank above the collectors. Batch/ICS systems heat water directly inside a glazed, insulated box on the roof.
                  </p>
                </div>
              </div>
            </section>

            {/* Flat Plate vs Evacuated Tube */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Sun className="h-6 w-6 text-primary" />
                Flat Plate vs. Evacuated Tube Collectors
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                The collector is the heart of any solar water heating system. The two main technologies each have sweet spots depending on your climate.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>Flat Plate Collectors</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      More durable — withstand hail and physical impact
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Lower cost per square foot of collector area
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Excellent in warm, sunny climates (California, Florida, Southwest)
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Lose more heat in cold, windy conditions
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Lower performance on overcast days
                    </li>
                  </ul>
                  <p className="text-xs mt-4 font-medium" style={{ color: '#22c55e' }}>Best for: California, Sun Belt states, mild climates</p>
                </div>
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>Evacuated Tube Collectors</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Vacuum insulation minimizes heat loss
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Perform well in cold, cloudy, and windy conditions
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      Individual tubes replaceable if damaged
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Glass tubes more fragile than flat plates
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      Higher upfront cost
                    </li>
                  </ul>
                  <p className="text-xs mt-4 font-medium" style={{ color: '#22c55e' }}>Best for: Northern states, Pacific Northwest, cold climates</p>
                </div>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Star className="h-6 w-6 text-primary" />
                Individual Reviews
              </h2>

              {/* --- Duda Solar 200L --- */}
              <div className="rounded-xl border mb-8 overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="p-6 border-b" style={{ borderColor: '#27272a' }}>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>1. Duda Solar 200L</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>Best Overall</span>
                  </div>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>$2,200-$2,800 | Active Indirect | Evacuated Tube | 200L (53 gal)</p>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The Duda Solar 200L is the most popular solar water heater kit in America for good reason. It ships as a complete pressurized system with 20 evacuated tubes, a well-insulated stainless steel tank, a pump station, controller, and all the plumbing fittings you need. The evacuated tube design delivers strong performance even on cloudy days and in freezing temperatures when used with the included glycol antifreeze.
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    At 200 liters (53 gallons), it comfortably supplies a household of 2-3 people. Larger families can opt for the 300L or 400L versions. The digital controller automates circulation, and the backup electric element ensures hot water even during extended overcast stretches. Installation is straightforward for a licensed plumber — most report 4-6 hours.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#22c55e' }}>Pros</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Complete kit — everything included for install</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Evacuated tubes excel in all climates</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Competitive pricing for an active system</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Multiple size options (200L, 300L, 400L)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#ef4444' }}>Cons</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Glass tubes can break during shipping</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />53-gallon tank may be small for 4+ people</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Requires roof collector and ground-level tank</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <BuyButton
                      productKey="duda-solar-200l"
                      source="best-solar-water-heater"
                      variant="primary"
                      label="Check Price — Duda Solar 200L"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* --- SunEarth Empire Series --- */}
              <div className="rounded-xl border mb-8 overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="p-6 border-b" style={{ borderColor: '#27272a' }}>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>2. SunEarth Empire Series</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#3b82f620', color: '#3b82f6' }}>Best Flat Plate</span>
                  </div>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>$3,500-$5,000 | Active Direct/Indirect | Flat Plate | 80-120 gal</p>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    SunEarth is a California-based manufacturer that has been building flat plate collectors since 1978. The Empire Series is their flagship line — heavy-gauge copper absorbers with a selective coating, tempered low-iron glass glazing, and aluminum frames built to survive decades on a rooftop. These are SRCC-certified and widely used in commercial and residential installations across the Sun Belt.
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The Empire collectors pair with standard 80-gallon solar storage tanks and can be configured as open-loop (direct) in freeze-free zones or closed-loop (indirect) with glycol for colder areas. A two-collector system handles a typical 3-4 person household. The flat plate design is incredibly durable — SunEarth collectors from the 1980s are still in service today.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#22c55e' }}>Pros</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Made in California — proven 45+ year track record</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Extremely durable flat plate construction</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Excellent performance in sunny climates</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />SRCC-certified — qualifies for tax credits</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#ef4444' }}>Cons</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Collectors only — tank and pump sold separately</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Not ideal for cold or frequently overcast climates</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Higher total installed cost than tube-based kits</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <BuyButton
                      productKey="sunearth-empire-series"
                      source="best-solar-water-heater"
                      variant="primary"
                      label="Check Price — SunEarth Empire Series"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* --- Rheem SolPak --- */}
              <div className="rounded-xl border mb-8 overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="p-6 border-b" style={{ borderColor: '#27272a' }}>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>3. Rheem SolPak</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f59e0b20', color: '#f59e0b' }}>Best Brand Name</span>
                  </div>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>$3,800-$5,500 | Active Indirect | Flat Plate | 80 gal</p>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    If you want a solar water heater from a household name in water heating, Rheem&apos;s SolPak is the answer. The system pairs Rheem&apos;s flat plate collectors with their solar-ready storage tanks and a glycol-based closed-loop circulation package. It is backed by Rheem&apos;s national service network, which makes finding parts and qualified installers significantly easier than niche solar brands.
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    Performance is solid — the flat plate collectors are efficient in sunny conditions and the 80-gallon tank provides ample storage for a family of 3-4. The indirect glycol loop means it works in freezing climates too. Where Rheem really wins is peace of mind: widespread installer availability, easy warranty claims, and a brand that has been making water heaters for over 100 years.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#22c55e' }}>Pros</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Trusted brand with national service network</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Easy to find replacement parts and installers</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Closed-loop glycol handles freezing climates</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#ef4444' }}>Cons</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Premium pricing for the brand name</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Flat plate less efficient than tubes in cloudy areas</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Limited to 80-gallon tank configuration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <BuyButton
                      productKey="rheem-solpak"
                      source="best-solar-water-heater"
                      variant="primary"
                      label="Check Price — Rheem SolPak"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* --- A.O. Smith Cirrex --- */}
              <div className="rounded-xl border mb-8 overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="p-6 border-b" style={{ borderColor: '#27272a' }}>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>4. A.O. Smith Cirrex</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#8b5cf620', color: '#8b5cf6' }}>Best Hybrid</span>
                  </div>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>$4,000-$5,500 | Active Indirect | Flat Plate | 80 gal</p>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The A.O. Smith Cirrex is a solar-assisted water heater that pairs flat plate solar collectors with an integrated high-efficiency electric backup. What sets the Cirrex apart is its intelligent controller that seamlessly blends solar thermal input with electric heating — you get maximum solar contribution when the sun is shining and automatic electric backup during cloudy spells or high-demand periods.
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The 80-gallon solar-ready tank features a dual-coil heat exchanger for the glycol loop plus a 4,500W electric element. A.O. Smith&apos;s glass-lined tank with anode rod protection is among the most corrosion-resistant in the industry. Like Rheem, the A.O. Smith brand brings extensive installer networks and reliable warranty support.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#22c55e' }}>Pros</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Intelligent solar/electric hybrid controller</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Industry-leading corrosion-resistant tank</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Guaranteed hot water — never runs out</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#ef4444' }}>Cons</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Highest price point in our lineup</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Electric backup still uses grid power</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Complex install — needs qualified solar plumber</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <BuyButton
                      productKey="ao-smith-cirrex"
                      source="best-solar-water-heater"
                      variant="primary"
                      label="Check Price — A.O. Smith Cirrex"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* --- Sunbank 40-Gallon --- */}
              <div className="rounded-xl border mb-8 overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="p-6 border-b" style={{ borderColor: '#27272a' }}>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>5. Sunbank 40-Gallon</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#06b6d420', color: '#06b6d4' }}>Best Passive</span>
                  </div>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>$2,500-$3,200 | Passive Thermosiphon | Evacuated Tube | 40 gal</p>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The Sunbank 40-gallon is the king of simplicity. It is a thermosiphon system — the insulated tank sits above the evacuated tube collector, and hot water naturally rises into the tank through convection. No pump, no controller, no electricity required. It connects directly to your existing water heater as a preheater, dramatically reducing the energy your conventional unit needs to use.
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    This is the most affordable and lowest-maintenance solar water heater you can buy. It is ideal for mild to warm climates where hard freezes are rare. The evacuated tubes provide solid heating performance, and the stainless steel tank is well-insulated to retain heat overnight. At 40 gallons, it works best for 1-2 person households or as a solar preheater for larger families.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#22c55e' }}>Pros</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Zero electricity needed — fully passive</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Lowest maintenance of any solar water heater</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Affordable — fastest payback period</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Easy DIY-friendly installation</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#ef4444' }}>Cons</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Not suitable for freezing climates</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />40-gallon capacity limits it to small households</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Roof-mounted tank adds significant weight</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <BuyButton
                      productKey="sunbank-40-gallon"
                      source="best-solar-water-heater"
                      variant="primary"
                      label="Check Price — Sunbank 40-Gallon"
                      showPrice
                    />
                  </div>
                </div>
              </div>

              {/* --- Northern Lights SWH --- */}
              <div className="rounded-xl border mb-8 overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="p-6 border-b" style={{ borderColor: '#27272a' }}>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>6. Northern Lights SWH</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#0ea5e920', color: '#0ea5e9' }}>Best Cold Climate</span>
                  </div>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>$3,200-$4,500 | Active Indirect | Evacuated Tube | 60-80 gal</p>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    Northern Lights is a Canadian manufacturer that specializes in solar water heating for harsh winter conditions. Their evacuated tube collectors are paired with a robust glycol antifreeze loop, heavy-duty insulated piping, and a commercial-grade pump station designed to operate reliably at temperatures well below -40°F. If you live in the northern U.S., Midwest, or anywhere with brutal winters, this system is engineered for you.
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The evacuated tubes handle diffuse light effectively, which is critical in northern latitudes where overcast days are common. The included controller features freeze protection, overheat protection, and data logging. Systems are available in 60-gallon and 80-gallon configurations, with expansion options for larger homes or commercial applications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#22c55e' }}>Pros</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Purpose-built for extreme cold — tested to -40°F</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Evacuated tubes excel in low-light conditions</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />Commercial-grade components and build quality</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#ef4444' }}>Cons</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Higher cost than warm-climate alternatives</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Overkill if you live in a mild/warm climate</li>
                        <li className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />Smaller dealer network — may need to order direct</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <BuyButton
                      productKey="northern-lights-swh"
                      source="best-solar-water-heater"
                      variant="primary"
                      label="Check Price — Northern Lights SWH"
                      showPrice
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ========== HOW TO CHOOSE ========== */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <CheckCircle className="h-6 w-6 text-primary" />
                How to Choose the Right Solar Water Heater
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: '#a1a1aa' }}
              >
                With six solid options on the table, narrowing down the best
                system for your specific situation comes down to four key
                factors.
              </p>
              <div className="space-y-4 mb-6">
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: '#f5f5f5' }}
                  >
                    1. Your Climate
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#d4d4d8' }}
                  >
                    If you live where it freezes regularly, you need an active
                    indirect system with glycol antifreeze and evacuated tube
                    collectors. If you are in a warm, sunny region like Southern
                    California, Arizona, or Florida, a passive thermosiphon or
                    flat plate system will do the job at lower cost. Do not
                    overspend on cold-climate gear if your pipes never freeze.
                  </p>
                </div>
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: '#f5f5f5' }}
                  >
                    2. Your Household Size
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#d4d4d8' }}
                  >
                    A 40-gallon system like the Sunbank works for 1-2 people. A
                    53-gallon Duda Solar 200L handles 2-3 people. Families of
                    4+ should look at 80-gallon systems (Rheem SolPak, A.O.
                    Smith Cirrex) or upgrade to the Duda 300L/400L. Undersizing
                    your tank means you will still rely heavily on your backup
                    heater.
                  </p>
                </div>
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: '#f5f5f5' }}
                  >
                    3. Your Budget
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#d4d4d8' }}
                  >
                    Passive systems ($2,500-$3,200) offer the fastest payback
                    and lowest upfront cost. Mid-range active kits like the
                    Duda Solar 200L ($2,200-$2,800) deliver the best
                    performance-per-dollar. Premium brand-name systems from
                    Rheem and A.O. Smith ($3,800-$5,500) cost more but come
                    with extensive installer networks and easier warranty
                    service.
                  </p>
                </div>
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: '#f5f5f5' }}
                  >
                    4. DIY vs. Professional Install
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#d4d4d8' }}
                  >
                    Passive thermosiphon systems like the Sunbank are the most
                    DIY-friendly — basic plumbing skills and a helper are
                    enough. Active systems with pumps, controllers, and glycol
                    loops are best left to a licensed solar plumber. Budget
                    $1,000-$2,500 for professional installation on top of the
                    equipment cost.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== ROI / PAYBACK ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <DollarSign className="h-6 w-6 text-primary" />
                ROI and Payback Period
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Solar water heaters are one of the most cost-effective renewable energy investments you can make. Here is how the numbers break down for a typical household.
              </p>
              <div className="rounded-xl p-6 border mb-6" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>Typical Savings Math</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Average annual water heating cost:</strong> $400-$600 (electric) or $250-$350 (gas)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Solar offset:</strong> 50-80% of annual water heating energy</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Annual savings:</strong> $200-$480 for electric, $125-$280 for gas</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>System cost after incentives:</strong> $2,000-$5,000</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Payback period:</strong> 4-8 years (varies by climate and energy costs)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>System lifespan:</strong> 20-30 years (collectors), 10-15 years (tank)</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                The best ROI comes in areas with high electricity rates and abundant sunshine — California, Arizona, Florida, Texas, and Hawaii. If you are replacing an electric water heater and live in a sunny state, expect payback in 3-5 years. Homeowners replacing a gas water heater will see a longer payback (6-10 years) since gas is cheaper, but the environmental benefits and long-term savings still make it worthwhile over the 20-30 year system life.
              </p>
            </section>

            {/* ========== INSTALLATION TIPS ========== */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Zap className="h-6 w-6 text-primary" />
                Installation Considerations
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: '#a1a1aa' }}
              >
                Before purchasing a solar water heater, make sure your home is
                a good candidate. Here are the key factors to evaluate.
              </p>
              <div
                className="rounded-xl p-6 border mb-4"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <ul className="space-y-3">
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: '#d4d4d8' }}
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#22c55e' }}
                    />
                    <span>
                      <strong style={{ color: '#f5f5f5' }}>
                        Roof orientation:
                      </strong>{' '}
                      South-facing roofs are ideal. Southwest and southeast
                      orientations also work well. North-facing roofs are not
                      suitable without ground-mounted collector racks.
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: '#d4d4d8' }}
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#22c55e' }}
                    />
                    <span>
                      <strong style={{ color: '#f5f5f5' }}>
                        Roof condition:
                      </strong>{' '}
                      Your roof should have at least 10-15 years of life left.
                      Replacing a roof after installing collectors is expensive
                      and disruptive. Address any needed roof repairs first.
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: '#d4d4d8' }}
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#22c55e' }}
                    />
                    <span>
                      <strong style={{ color: '#f5f5f5' }}>
                        Shading:
                      </strong>{' '}
                      Collectors need direct sunlight for at least 6 hours per
                      day during peak season. Trim any overhanging trees that
                      cast shadows on your intended mounting area.
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: '#d4d4d8' }}
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#22c55e' }}
                    />
                    <span>
                      <strong style={{ color: '#f5f5f5' }}>
                        Structural load:
                      </strong>{' '}
                      Passive thermosiphon systems with roof-mounted tanks are
                      heavy (300+ lbs when full). Verify your roof structure
                      can handle the weight. Active systems with ground-level
                      tanks have no roof weight concerns beyond the collectors.
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: '#d4d4d8' }}
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#22c55e' }}
                    />
                    <span>
                      <strong style={{ color: '#f5f5f5' }}>
                        Permits and codes:
                      </strong>{' '}
                      Most jurisdictions require a plumbing permit for solar
                      water heater installation. Some HOAs have restrictions on
                      roof-mounted equipment. Check local codes before
                      purchasing.
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-sm"
                    style={{ color: '#d4d4d8' }}
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#22c55e' }}
                    />
                    <span>
                      <strong style={{ color: '#f5f5f5' }}>
                        Existing water heater:
                      </strong>{' '}
                      Solar water heaters work best when plumbed as a preheater
                      to your existing gas or electric tank. The solar system
                      preheats the water, and your conventional heater only
                      fires if the temperature needs a boost — dramatically
                      cutting fuel consumption.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ========== CLIMATE SUITABILITY ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Sun className="h-6 w-6 text-primary" />
                Climate Suitability Guide
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Not every solar water heater works well in every climate. Here is a quick reference to match your region with the right system type and product.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#f5f5f5' }}>Hot / Sunny Climates (California, Arizona, Texas, Florida)</h3>
                  <p className="text-sm mb-2" style={{ color: '#d4d4d8' }}>
                    Any system type works here. Flat plate collectors are the most cost-effective. Passive thermosiphon systems like the Sunbank are great budget options. Expect 70-90% of your hot water from solar year-round.
                  </p>
                  <p className="text-xs font-medium" style={{ color: '#22c55e' }}>Top picks: Sunbank 40-Gallon, SunEarth Empire, Duda Solar 200L</p>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#f5f5f5' }}>Moderate Climates (Mid-Atlantic, Pacific Northwest, Upper South)</h3>
                  <p className="text-sm mb-2" style={{ color: '#d4d4d8' }}>
                    Active indirect systems with glycol are the safest bet. Evacuated tube collectors outperform flat plates in these regions due to more overcast days and occasional freezes. Expect 50-70% solar contribution.
                  </p>
                  <p className="text-xs font-medium" style={{ color: '#22c55e' }}>Top picks: Duda Solar 200L, Rheem SolPak, A.O. Smith Cirrex</p>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#f5f5f5' }}>Cold / Northern Climates (Midwest, Northeast, Mountain West)</h3>
                  <p className="text-sm mb-2" style={{ color: '#d4d4d8' }}>
                    Active indirect systems with evacuated tubes and glycol antifreeze are essential. Passive systems will freeze and fail. Heavy insulation on all piping is critical. Expect 30-60% solar contribution depending on winter severity.
                  </p>
                  <p className="text-xs font-medium" style={{ color: '#22c55e' }}>Top picks: Northern Lights SWH, Duda Solar 200L</p>
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
                {faqSchema.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, idx: number) => (
                  <details key={idx} className="group rounded-lg border overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <summary className="flex items-center justify-between px-4 py-3 cursor-pointer font-medium text-sm list-none" style={{ color: '#f5f5f5' }}>
                      {faq.name}
                      <ChevronRight className="h-4 w-4 flex-shrink-0 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-4 pb-4 leading-relaxed text-sm" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Sun className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Ready to Cut Your Water Heating Bill?
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Explore our full library of solar product reviews, comparison guides, and energy-saving resources.
                </p>
                <Link href="/reviews" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:opacity-90" style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}>
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
