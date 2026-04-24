import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Sun,
  Star,
  Check,
  X,
  Zap,
  Shield,
  Clock,
  DollarSign,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Outdoor Solar Lights (2026): Path, Security, String & Step Lights Compared',
  description:
    'Compare the best outdoor solar lights for 2026. In-depth reviews of LITOM, URPOWER, BAXIA, GIGALUMI, Brightech, Ring, and SOLPEX solar lights. Covers path lights, security motion lights, string lights, step lights, and flood lights with brightness guides and placement tips.',
  alternates: {
    canonical: '/reviews/best-outdoor-solar-lights',
  },
  openGraph: {
    title: 'Best Outdoor Solar Lights (2026): Path, Security, String & Step Lights',
    description:
      'LITOM vs URPOWER vs BAXIA vs GIGALUMI vs Brightech vs Ring vs SOLPEX. Full specs, pros/cons, and placement guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Outdoor Solar Lights (2026): Path, Security, String & Step Lights Compared',
  description:
    'Compare the best outdoor solar lights for 2026 across five categories: path lights, security/motion lights, solar string lights, step lights, and flood lights. In-depth reviews of LITOM, URPOWER, BAXIA, GIGALUMI, Brightech Ambience Pro, Ring Solar Pathlight, and SOLPEX.',
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
    '@id': 'https://ratereliefca.com/reviews/best-outdoor-solar-lights',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many lumens do I need for outdoor solar lights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the purpose. Path and landscape lights need 10-100 lumens for ambient illumination. Step and deck lights work well at 5-50 lumens. Security and motion-sensor lights should be 300-1,000+ lumens to deter intruders and illuminate driveways. String lights are typically 5-15 lumens per bulb, which is plenty for ambiance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do solar lights work in winter or cloudy weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but with reduced performance. Modern solar panels can still charge in overcast conditions, though they may only reach 40-60% capacity. In winter, shorter days mean less charging time and dimmer or shorter runtime at night. Look for lights with larger solar panels and higher-capacity batteries (1,200 mAh+) for better cold-weather performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do solar lights last before needing replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quality solar lights last 2-5 years overall. The LED bulbs themselves can last 25,000-50,000 hours, but the rechargeable batteries typically degrade after 1-3 years and may need replacement. The solar panels can last 10+ years but gradually lose efficiency. Choosing lights with replaceable batteries extends the lifespan significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are solar lights bright enough for security purposes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, modern solar security lights like the LITOM 3-Head and URPOWER 3-Head models produce 1,000-2,500 lumens with motion detection, which is comparable to wired floodlights. They feature 120-270 degree detection angles and can illuminate large areas like driveways, backyards, and garage entrances effectively.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to install outdoor solar lights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Place solar panels facing south (in the Northern Hemisphere) with maximum sun exposure. Avoid shaded areas under trees, eaves, or north-facing walls. Path lights work best 6-8 feet apart along walkways. Security lights should be mounted 8-10 feet high at entry points. Step lights go on every other stair riser. String lights work well on pergolas, fences, and patio overhangs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do solar lights need direct sunlight or will indirect light work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct sunlight is ideal for fastest charging and longest runtime. Indirect light (bright shade, north-facing exposure) will still charge the batteries, but expect 30-50% less runtime. At minimum, solar lights need 6-8 hours of direct or bright indirect sunlight per day for full performance. Partial shade throughout the day is workable but will reduce brightness and duration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between warm white and cool white solar lights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warm white (2700-3000K) produces a soft, yellowish glow similar to incandescent bulbs — ideal for ambiance, patios, and garden paths. Cool white (5000-6500K) is a bright, bluish-white light better suited for security and task lighting. Most decorative solar lights use warm white, while motion-sensor security lights typically use cool white for maximum visibility.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  category: string;
  price: string;
  lumens: string;
  lightMode: string;
  runtime: string;
  waterproof: string;
  packSize: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'LITOM 3-Head Motion Sensor Light',
    badge: 'Best Security Light',
    category: 'Security / Motion',
    price: '$25-35',
    lumens: '2,500',
    lightMode: '3 modes',
    runtime: '8-10 hrs',
    waterproof: 'IP67',
    packSize: '1-2 pack',
    affiliateLink: '#',
  },
  {
    name: 'URPOWER 3-Head Solar Motion Light',
    badge: 'Best Value Security',
    category: 'Security / Motion',
    price: '$20-28',
    lumens: '1,000',
    lightMode: '3 modes',
    runtime: '8-12 hrs',
    waterproof: 'IP65',
    packSize: '2 pack',
    affiliateLink: '#',
  },
  {
    name: 'BAXIA Solar Flood Light',
    badge: 'Best Flood Light',
    category: 'Flood',
    price: '$22-30',
    lumens: '400',
    lightMode: 'Motion-activated',
    runtime: '8-10 hrs',
    waterproof: 'IP65',
    packSize: '4 pack',
    affiliateLink: '#',
  },
  {
    name: 'GIGALUMI Solar Path Lights',
    badge: 'Best Path Light',
    category: 'Path / Landscape',
    price: '$20-30',
    lumens: '12-15',
    lightMode: 'Auto on/off',
    runtime: '8-12 hrs',
    waterproof: 'IP44',
    packSize: '6-12 pack',
    affiliateLink: '#',
  },
  {
    name: 'Brightech Ambience Pro Solar String Lights',
    badge: 'Best String Lights',
    category: 'String / Decorative',
    price: '$35-50',
    lumens: '10 per bulb',
    lightMode: 'Steady / dim',
    runtime: '6-8 hrs',
    waterproof: 'IP65',
    packSize: '27 ft / 48 ft',
    affiliateLink: '#',
  },
  {
    name: 'Ring Solar Pathlight',
    badge: 'Best Smart Path Light',
    category: 'Path / Smart',
    price: '$30-35',
    lumens: '80',
    lightMode: 'Smart scheduling',
    runtime: 'Battery + solar',
    waterproof: 'IP55',
    packSize: '1 pack',
    affiliateLink: '#',
  },
  {
    name: 'SOLPEX Solar Step Lights',
    badge: 'Best Step Light',
    category: 'Step / Deck',
    price: '$18-25',
    lumens: '8-10',
    lightMode: 'Auto on/off',
    runtime: '8-10 hrs',
    waterproof: 'IP67',
    packSize: '6-8 pack',
    affiliateLink: '#',
  },
];

export default function BestOutdoorSolarLights() {
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
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best Outdoor Solar Lights (2026): Path, Security, String &amp; Step Lights Compared
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Sun className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>16 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop' alt='Outdoor solar lights' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Outdoor solar lights have come a long way from the dim, flickering path stakes of
                a decade ago. In 2026, you can get motion-sensing security floods that rival wired
                fixtures, decorative string lights that run all night, and smart path lights you
                control from your phone &mdash; all powered entirely by the sun, with zero wiring
                and zero electricity cost.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We spent over 60 hours researching and comparing solar lights across five categories:
                path/landscape, security/motion, string/decorative, step/deck, and flood. This guide
                covers the seven best options for 2026, with a head-to-head comparison table,
                category breakdowns, a lumens guide, placement tips, and an honest look at the
                pros and cons of each product.
              </p>
            </div>

            {/* Quick Picks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Zap className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Quick Picks: Our Top Recommendations
              </h2>
              <div className="grid gap-4">
                {[
                  { label: 'Best Security Light', pick: 'LITOM 3-Head Motion Sensor', why: '2,500 lumens, IP67, 270-degree detection' },
                  { label: 'Best Path Light', pick: 'GIGALUMI Solar Path Lights', why: 'Elegant design, warm white, 12-pack value' },
                  { label: 'Best String Lights', pick: 'Brightech Ambience Pro Solar', why: 'Commercial-grade, shatterproof, 48 ft option' },
                  { label: 'Best Step Light', pick: 'SOLPEX Solar Step Lights', why: 'IP67, stainless steel, ultra-low profile' },
                  { label: 'Best Flood Light', pick: 'BAXIA Solar Flood Light', why: '400 lumens, wide angle, 4-pack bundle' },
                  { label: 'Best Smart Light', pick: 'Ring Solar Pathlight', why: 'Alexa integration, smart scheduling, Ring ecosystem' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg border"
                    style={{ backgroundColor: '#141414', borderColor: '#22c55e22' }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      {item.label}
                    </span>
                    <span className="font-semibold" style={{ color: '#f5f5f5' }}>{item.pick}</span>
                    <span className="text-sm" style={{ color: '#a1a1aa' }}>&mdash; {item.why}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Head-to-Head Comparison Table
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#22c55e22' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      {['Product', 'Category', 'Lumens', 'Runtime', 'Waterproof', 'Price'].map(
                        (h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider"
                            style={{ color: '#22c55e' }}
                          >
                            {h}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, i) => (
                      <tr
                        key={p.name}
                        className="border-t"
                        style={{
                          borderColor: '#ffffff0a',
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                        }}
                      >
                        <td className="px-4 py-3">
                          <div className="font-semibold" style={{ color: '#f5f5f5' }}>
                            {p.name}
                          </div>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                          >
                            {p.badge}
                          </span>
                        </td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{p.category}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{p.lumens}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{p.runtime}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{p.waterproof}</td>
                        <td className="px-4 py-3 font-semibold" style={{ color: '#22c55e' }}>
                          {p.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: '#a1a1aa' }}>
                Prices reflect typical retail ranges as of April 2026. Actual pricing may vary by
                retailer and pack size.
              </p>
            </section>

            {/* ========== CATEGORY BREAKDOWNS ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                Solar Light Categories Explained
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: '#a1a1aa' }}>
                Not all outdoor solar lights serve the same purpose. Here is a quick breakdown of
                the five main categories and what to look for in each.
              </p>

              {/* Path / Landscape */}
              <div className="p-5 rounded-xl border mb-6" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#22c55e' }}>
                  <Sun className="inline h-5 w-5 mr-2" />
                  Path &amp; Landscape Lights
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                  These are the classic solar stake lights that line walkways, driveways, and garden
                  borders. They provide ambient illumination (10-100 lumens) and turn on automatically
                  at dusk. Look for warm white (3000K) if you want a cozy feel, or cool white for
                  brighter visibility. Stainless steel or die-cast aluminum housings last longer than
                  plastic in outdoor conditions.
                </p>
                <p className="text-sm font-medium" style={{ color: '#d4d4d8' }}>
                  Best for: walkways, garden borders, driveways, front entries
                </p>
              </div>

              {/* Security / Motion */}
              <div className="p-5 rounded-xl border mb-6" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#22c55e' }}>
                  <Shield className="inline h-5 w-5 mr-2" />
                  Security &amp; Motion-Sensor Lights
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                  High-output lights (300-2,500 lumens) triggered by motion detection. The best models
                  feature adjustable 3-head designs with 120-270 degree coverage and 20-26 foot
                  detection range. Most offer three modes: motion-only, dim-to-bright, and always-on.
                  IP65 or higher is essential since these are typically wall-mounted and fully exposed
                  to rain.
                </p>
                <p className="text-sm font-medium" style={{ color: '#d4d4d8' }}>
                  Best for: backyards, garages, driveways, side passages, dark corners
                </p>
              </div>

              {/* String / Decorative */}
              <div className="p-5 rounded-xl border mb-6" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#22c55e' }}>
                  <Star className="inline h-5 w-5 mr-2" />
                  String &amp; Decorative Lights
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                  Solar-powered versions of the popular Edison-style string lights. Premium models use
                  commercial-grade, shatterproof bulbs (not glass) and a separate solar panel on a
                  15-foot lead cable so you can place the panel in full sun while the lights hang in
                  shade. Look for at least 2,200K color temperature for that warm, vintage ambiance.
                  Runtime of 6-8 hours means they stay lit through a full evening.
                </p>
                <p className="text-sm font-medium" style={{ color: '#d4d4d8' }}>
                  Best for: patios, pergolas, fences, outdoor dining areas, parties
                </p>
              </div>

              {/* Step / Deck */}
              <div className="p-5 rounded-xl border mb-6" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#22c55e' }}>
                  <Zap className="inline h-5 w-5 mr-2" />
                  Step &amp; Deck Lights
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                  Low-profile lights designed to mount flush against stair risers, deck rails, or
                  fence posts. They cast a subtle downward glow (5-50 lumens) for safe navigation
                  without blinding anyone. Stainless steel construction and IP67 ratings are standard
                  on quality models. They are some of the easiest solar lights to install &mdash;
                  most attach with just two screws or adhesive tape.
                </p>
                <p className="text-sm font-medium" style={{ color: '#d4d4d8' }}>
                  Best for: stairs, decks, docks, fence posts, retaining walls
                </p>
              </div>

              {/* Flood */}
              <div className="p-5 rounded-xl border mb-6" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#22c55e' }}>
                  <Zap className="inline h-5 w-5 mr-2" />
                  Flood Lights
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#a1a1aa' }}>
                  Compact, wide-angle lights designed to wash a broad area with light. Unlike
                  directional security lights, floods cast a wider, more even beam. They are
                  motion-activated and ideal for illuminating walls, fences, or entry points without
                  the multi-head form factor. The BAXIA 4-pack model is a popular choice because it
                  covers multiple zones affordably.
                </p>
                <p className="text-sm font-medium" style={{ color: '#d4d4d8' }}>
                  Best for: walls, fence lines, garden perimeters, signage
                </p>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#f5f5f5' }}>
                In-Depth Reviews
              </h2>

              {/* === LITOM 3-Head === */}
              <div className="rounded-xl border p-6 mb-8" style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    1. LITOM 3-Head Solar Motion Sensor Light
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                  >
                    Best Security Light
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Lumens', value: '2,500' },
                    { label: 'Detection', value: '270°' },
                    { label: 'Waterproof', value: 'IP67' },
                    { label: 'Price', value: '$25-35' },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: '#171717' }}>
                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#a1a1aa' }}>{s.label}</div>
                      <div className="font-bold text-sm" style={{ color: '#f5f5f5' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The LITOM 3-Head is the brightest solar security light in our lineup at 2,500 lumens.
                  Its three independently adjustable heads cover up to 270 degrees, making it excellent
                  for illuminating garages, backyards, and side passages. The IP67 rating means it
                  handles rain, snow, and dust without issue. Three lighting modes &mdash;
                  motion-sensor only, dim-to-bright on motion, and always-on &mdash; give you
                  flexibility depending on the area. The built-in 2,400 mAh battery charges fully in
                  6-8 hours of direct sun and provides 8-10 hours of runtime. Installation is simple
                  with the included mounting bracket and screws.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="inline h-4 w-4 mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Industry-leading 2,500-lumen output</li>
                      <li>270-degree adjustable coverage</li>
                      <li>IP67 weatherproof rating</li>
                      <li>Three lighting modes</li>
                      <li>Affordable price for the brightness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#ef4444' }}>
                      <X className="inline h-4 w-4 mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Plastic housing &mdash; not as premium as metal</li>
                      <li>Motion sensor can be overly sensitive</li>
                      <li>Cool white only (no warm option)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <BuyButton
                    productKey="litom-3-head-solar-motion-sensor-light"
                    source="best-outdoor-solar-lights"
                    variant="primary"
                    label="Check Price — LITOM 3-Head Solar Motion Sensor Light"
                    showPrice
                  />
                </div>
              </div>

              {/* === URPOWER 3-Head === */}
              <div className="rounded-xl border p-6 mb-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    2. URPOWER 3-Head Solar Motion Light
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                  >
                    Best Value Security
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Lumens', value: '1,000' },
                    { label: 'Detection', value: '120°' },
                    { label: 'Waterproof', value: 'IP65' },
                    { label: 'Price', value: '$20-28 (2-pack)' },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: '#171717' }}>
                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#a1a1aa' }}>{s.label}</div>
                      <div className="font-bold text-sm" style={{ color: '#f5f5f5' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The URPOWER is the go-to budget pick for homeowners who want solid security
                  coverage without spending much. At 1,000 lumens it is noticeably dimmer than the
                  LITOM, but the 2-pack pricing makes it an excellent value &mdash; you can cover two
                  zones for less than the cost of one premium fixture. The 120-degree motion sensor
                  detects movement from up to 26 feet. Three modes (strong, dim+sensor, sensor-only)
                  and IP65 weatherproofing round out a compelling package. The 2,200 mAh battery
                  provides 8-12 hours of runtime depending on the mode selected.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="inline h-4 w-4 mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Outstanding value in 2-pack bundle</li>
                      <li>2,200 mAh battery for longer runtime</li>
                      <li>Easy wall-mount installation</li>
                      <li>26-foot detection range</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#ef4444' }}>
                      <X className="inline h-4 w-4 mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Only 1,000 lumens &mdash; not as bright as LITOM</li>
                      <li>Narrower 120-degree detection angle</li>
                      <li>Plastic construction</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <BuyButton
                    productKey="urpower-3-head-solar-motion-light"
                    source="best-outdoor-solar-lights"
                    variant="primary"
                    label="Check Price — URPOWER 3-Head Solar Motion Light"
                    showPrice
                  />
                </div>
              </div>

              {/* === BAXIA Flood === */}
              <div className="rounded-xl border p-6 mb-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    3. BAXIA Solar Flood Lights
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                  >
                    Best Flood Light
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Lumens', value: '400 each' },
                    { label: 'Angle', value: '120°' },
                    { label: 'Waterproof', value: 'IP65' },
                    { label: 'Price', value: '$22-30 (4-pack)' },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: '#171717' }}>
                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#a1a1aa' }}>{s.label}</div>
                      <div className="font-bold text-sm" style={{ color: '#f5f5f5' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The BAXIA flood lights are the kings of zone coverage on a budget. The 4-pack
                  lets you light up an entire perimeter &mdash; one on each side of the house &mdash;
                  for around $25. Each compact unit outputs 400 lumens with a 120-degree beam angle
                  and triggers on motion from up to 10 feet away. The slim, low-profile design is
                  less conspicuous than multi-head units, making them a good choice for aesthetic-
                  conscious homeowners. The 1,200 mAh battery is smaller than the security lights
                  above, but the motion-only activation conserves energy well.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="inline h-4 w-4 mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Excellent 4-pack value</li>
                      <li>Compact, low-profile design</li>
                      <li>Wide 120-degree flood beam</li>
                      <li>Simple peel-and-stick or screw mount</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#ef4444' }}>
                      <X className="inline h-4 w-4 mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>400 lumens is modest for a &quot;flood&quot; light</li>
                      <li>Short 10-foot detection range</li>
                      <li>Smaller 1,200 mAh battery</li>
                      <li>Motion-activated only &mdash; no always-on mode</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <BuyButton
                    productKey="baxia-solar-flood-lights"
                    source="best-outdoor-solar-lights"
                    variant="primary"
                    label="Check Price — BAXIA Solar Flood Lights"
                    showPrice
                  />
                </div>
              </div>

              {/* === GIGALUMI Path === */}
              <div className="rounded-xl border p-6 mb-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    4. GIGALUMI Solar Path Lights
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                  >
                    Best Path Light
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Lumens', value: '12-15' },
                    { label: 'Color Temp', value: '3000K warm' },
                    { label: 'Waterproof', value: 'IP44' },
                    { label: 'Price', value: '$20-30 (6-12 pack)' },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: '#171717' }}>
                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#a1a1aa' }}>{s.label}</div>
                      <div className="font-bold text-sm" style={{ color: '#f5f5f5' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  GIGALUMI path lights are a perennial best-seller for good reason. The stainless
                  steel and glass construction gives them a premium look that outclasses their price
                  point. Each light emits a gentle warm white glow that is perfect for lining
                  walkways, garden borders, and driveways. They turn on automatically at dusk and off
                  at dawn. The 600 mAh NiMH rechargeable battery delivers 8-12 hours of illumination
                  after a full charge. The 12-pack option is the best value, giving you enough to
                  line a 70-80 foot walkway at recommended 6-8 foot spacing.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="inline h-4 w-4 mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Stainless steel and glass construction</li>
                      <li>Warm white 3000K color temperature</li>
                      <li>Excellent 12-pack value</li>
                      <li>No wiring &mdash; stake into ground</li>
                      <li>8-12 hour runtime</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#ef4444' }}>
                      <X className="inline h-4 w-4 mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Only IP44 &mdash; splash-resistant, not submersible</li>
                      <li>12-15 lumens is dim (ambient only)</li>
                      <li>Stakes can feel flimsy in hard soil</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <BuyButton
                    productKey="gigalumi-solar-path-lights"
                    source="best-outdoor-solar-lights"
                    variant="primary"
                    label="Check Price — GIGALUMI Solar Path Lights"
                    showPrice
                  />
                </div>
              </div>

              {/* === Brightech Ambience Pro === */}
              <div className="rounded-xl border p-6 mb-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    5. Brightech Ambience Pro Solar String Lights
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                  >
                    Best String Lights
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Length', value: '27 ft / 48 ft' },
                    { label: 'Color Temp', value: '2200K warm' },
                    { label: 'Waterproof', value: 'IP65' },
                    { label: 'Price', value: '$35-50' },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: '#171717' }}>
                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#a1a1aa' }}>{s.label}</div>
                      <div className="font-bold text-sm" style={{ color: '#f5f5f5' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Brightech is the gold standard for solar string lights. The Ambience Pro line uses
                  commercial-grade, shatterproof Edison-style bulbs that produce a warm 2200K glow
                  &mdash; closer to candlelight than the harsh white of cheaper alternatives. The
                  solar panel connects via a 15-foot lead cable, so you can mount it in full sun
                  while the string runs under a pergola or patio cover. The 48-foot option with 15
                  bulbs is ideal for larger patios. A built-in 3,000 mAh lithium battery provides
                  6-8 hours of runtime. The heavy-duty rubber cord and IP65 rating withstand
                  year-round outdoor exposure.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="inline h-4 w-4 mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Warm 2200K Edison-style ambiance</li>
                      <li>Shatterproof, commercial-grade bulbs</li>
                      <li>15-foot lead cable for flexible panel placement</li>
                      <li>IP65 weatherproof with heavy-duty cord</li>
                      <li>Available in 27 ft and 48 ft lengths</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#ef4444' }}>
                      <X className="inline h-4 w-4 mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Higher price than generic solar strings</li>
                      <li>6-8 hour runtime may not last all night</li>
                      <li>Dimmer than plug-in string lights</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <BuyButton
                    productKey="brightech-ambience-pro-solar-string-lights"
                    source="best-outdoor-solar-lights"
                    variant="primary"
                    label="Check Price — Brightech Ambience Pro Solar String Lights"
                    showPrice
                  />
                </div>
              </div>

              {/* === Ring Solar Pathlight === */}
              <div className="rounded-xl border p-6 mb-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    6. Ring Solar Pathlight
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                  >
                    Best Smart Path Light
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Lumens', value: '80' },
                    { label: 'Smart Home', value: 'Alexa / Ring' },
                    { label: 'Waterproof', value: 'IP55' },
                    { label: 'Price', value: '$30-35 each' },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: '#171717' }}>
                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#a1a1aa' }}>{s.label}</div>
                      <div className="font-bold text-sm" style={{ color: '#f5f5f5' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  If you are already in the Ring ecosystem, the Solar Pathlight is the smartest
                  outdoor solar light available. At 80 lumens, it is significantly brighter than
                  traditional path lights. It connects to the Ring Bridge (sold separately) and
                  integrates with Alexa, letting you set schedules, create motion-triggered
                  automations, and control brightness by voice. The combination of a rechargeable
                  battery pack and a built-in solar panel means it rarely needs recharging from a
                  USB cable. The sleek, modern design comes in black or bronze finishes. The main
                  drawback is cost &mdash; at $30-35 per light, a full walkway setup gets expensive
                  compared to a GIGALUMI 12-pack.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="inline h-4 w-4 mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Alexa and Ring app integration</li>
                      <li>80 lumens &mdash; bright for a path light</li>
                      <li>Schedules and motion-triggered automations</li>
                      <li>Premium build quality and finish options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#ef4444' }}>
                      <X className="inline h-4 w-4 mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Expensive per-unit cost for full walkway coverage</li>
                      <li>Requires Ring Bridge for smart features</li>
                      <li>IP55 &mdash; lower weather rating than competitors</li>
                      <li>Sold individually, not in multi-packs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <BuyButton
                    productKey="ring-solar-pathlight"
                    source="best-outdoor-solar-lights"
                    variant="primary"
                    label="Check Price — Ring Solar Pathlight"
                    showPrice
                  />
                </div>
              </div>

              {/* === SOLPEX Step === */}
              <div className="rounded-xl border p-6 mb-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    7. SOLPEX Solar Step Lights
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                  >
                    Best Step Light
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Lumens', value: '8-10' },
                    { label: 'Material', value: 'Stainless steel' },
                    { label: 'Waterproof', value: 'IP67' },
                    { label: 'Price', value: '$18-25 (6-8 pack)' },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: '#171717' }}>
                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#a1a1aa' }}>{s.label}</div>
                      <div className="font-bold text-sm" style={{ color: '#f5f5f5' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  SOLPEX step lights are the most practical solar light on this list. They mount
                  flush against stair risers, deck posts, or fence rails and cast a soft downward
                  glow for safe nighttime navigation. The stainless steel face plate and IP67
                  waterproofing make them incredibly durable &mdash; they handle being stepped on,
                  hosed down, and left in snow without issue. At 8-10 lumens, they are intentionally
                  dim: the goal is wayfinding, not illumination. The 600 mAh NiMH battery provides
                  8-10 hours of runtime. Installation takes minutes &mdash; two screws or the
                  included adhesive strip per light. The 8-pack option covers a full staircase.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#22c55e' }}>
                      <Check className="inline h-4 w-4 mr-1" /> Pros
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>IP67 &mdash; highest waterproof rating in roundup</li>
                      <li>Stainless steel construction</li>
                      <li>Ultra-slim, low-profile design</li>
                      <li>Screw or adhesive mount options</li>
                      <li>Great multi-pack value</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#ef4444' }}>
                      <X className="inline h-4 w-4 mr-1" /> Cons
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ color: '#d4d4d8' }}>
                      <li>Very dim &mdash; wayfinding only</li>
                      <li>Solar panel is small, needs good sun exposure</li>
                      <li>Warm white only &mdash; no color options</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <BuyButton
                    productKey="solpex-solar-step-lights"
                    source="best-outdoor-solar-lights"
                    variant="primary"
                    label="Check Price — SOLPEX Solar Step Lights"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== LUMENS / BRIGHTNESS GUIDE ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Sun className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Brightness &amp; Lumens Guide
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                One of the biggest mistakes people make with solar lights is buying the wrong
                brightness level for the intended purpose. Here is a simple reference chart to
                match lumens to use case.
              </p>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#22c55e22' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      {['Use Case', 'Lumens Range', 'Example'].map((h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider"
                          style={{ color: '#22c55e' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { use: 'Step / deck accent', lumens: '5-15', example: 'SOLPEX Step Lights' },
                      { use: 'String light ambiance', lumens: '5-15 per bulb', example: 'Brightech Ambience Pro' },
                      { use: 'Path / walkway', lumens: '10-100', example: 'GIGALUMI Path Lights' },
                      { use: 'Smart path lighting', lumens: '50-100', example: 'Ring Solar Pathlight' },
                      { use: 'Landscape accent', lumens: '50-200', example: 'Spotlights / uplights' },
                      { use: 'Flood / area wash', lumens: '200-500', example: 'BAXIA Flood Lights' },
                      { use: 'Security / motion', lumens: '500-2,500+', example: 'LITOM / URPOWER' },
                    ].map((row, i) => (
                      <tr
                        key={row.use}
                        className="border-t"
                        style={{
                          borderColor: '#ffffff0a',
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                        }}
                      >
                        <td className="px-4 py-3 font-medium" style={{ color: '#f5f5f5' }}>{row.use}</td>
                        <td className="px-4 py-3" style={{ color: '#22c55e' }}>{row.lumens}</td>
                        <td className="px-4 py-3" style={{ color: '#a1a1aa' }}>{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: '#a1a1aa' }}>
                For reference, a standard 60-watt incandescent bulb produces roughly 800 lumens.
                Most solar path lights are intentionally much dimmer for gentle ambiance.
              </p>
            </section>

            {/* ========== PLACEMENT TIPS ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <CheckCircle className="inline h-6 w-6 mr-2" style={{ color: '#22c55e' }} />
                Placement Tips for Maximum Performance
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Maximize Sun Exposure',
                    tip: 'Point solar panels south (Northern Hemisphere). Avoid placement under tree canopies, eaves, or north-facing walls. Even partial shade reduces charging by 30-50%.',
                  },
                  {
                    title: 'Path Light Spacing',
                    tip: 'Place path lights 6-8 feet apart on alternating sides of the walkway for a staggered, even glow. Closer spacing (4-5 ft) for brighter coverage; wider (10 ft) for subtle ambiance.',
                  },
                  {
                    title: 'Security Light Height',
                    tip: 'Mount motion-sensor lights 8-10 feet high and angled slightly downward. This maximizes detection range and prevents animals from triggering the sensor.',
                  },
                  {
                    title: 'Step Light Placement',
                    tip: 'Install on every other stair riser for a balanced look. Mount at the center or offset to one side. Ensure the solar panel faces outward with no overhang blocking sunlight.',
                  },
                  {
                    title: 'String Light Planning',
                    tip: 'Map your layout before hanging. Use the lead cable to reach full sun for the panel. Allow slight sag between hooks for a natural drape. Avoid stretching the cord tight.',
                  },
                  {
                    title: 'Cold Weather Adjustment',
                    tip: 'In winter, solar panels charge less efficiently. Consider moving path lights slightly closer together and choosing models with 1,200+ mAh batteries for adequate cold-weather runtime.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}
                  >
                    <h3 className="text-sm font-bold mb-2" style={{ color: '#22c55e' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>{item.tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== WHAT TO LOOK FOR ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                What to Look for When Buying Solar Lights
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'IP Rating (Waterproofing)',
                    desc: 'IP44 handles splashes. IP65 resists jets of water. IP67 survives temporary submersion. For ground-level or fully exposed fixtures, aim for IP65 or higher.',
                  },
                  {
                    title: 'Battery Capacity (mAh)',
                    desc: 'Bigger batteries mean longer runtime. Path lights need 600+ mAh. Security lights should have 2,000+ mAh. Lithium-ion batteries outperform NiMH in cold weather and cycle life.',
                  },
                  {
                    title: 'Solar Panel Size and Type',
                    desc: 'Larger panels charge faster. Monocrystalline panels are more efficient than polycrystalline. Separate panels with lead cables offer the most placement flexibility.',
                  },
                  {
                    title: 'Color Temperature',
                    desc: 'Warm white (2700-3000K) for ambiance and landscaping. Cool white (5000-6500K) for security and task lighting. Some models offer switchable color temps.',
                  },
                  {
                    title: 'Build Material',
                    desc: 'Stainless steel and die-cast aluminum outlast ABS plastic. Glass lenses look better than acrylic but are heavier and breakable. Consider your climate and placement.',
                  },
                  {
                    title: 'Replaceable Batteries',
                    desc: 'Solar light batteries degrade after 1-3 years. Models with standard AA NiMH or replaceable lithium packs can be refreshed cheaply instead of replacing the entire light.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}
                  >
                    <h3 className="font-bold mb-1" style={{ color: '#f5f5f5' }}>
                      <DollarSign className="inline h-4 w-4 mr-1" style={{ color: '#22c55e' }} />
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq, i) => (
                  <details
                    key={i}
                    className="rounded-xl border group"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff0a' }}
                  >
                    <summary
                      className="px-4 py-4 cursor-pointer font-semibold text-sm list-none flex items-start gap-2"
                      style={{ color: '#f5f5f5' }}
                    >
                      <ChevronRight className="h-5 w-5 mt-0.5 shrink-0 transition-transform group-open:rotate-90" style={{ color: '#22c55e' }} />
                      {faq.name}
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
              <div
                style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}
                className="border rounded-xl p-6 md:p-8 text-center"
              >
                <Sun className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Light Up Your Yard &mdash; No Wiring Required
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Explore more solar-powered product reviews, comparison guides, and energy-saving
                  tips from GreenReviewsHub.
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
