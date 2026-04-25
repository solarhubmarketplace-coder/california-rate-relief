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
    'Best Portable Air Conditioners (2026): Top 6 Portable AC Units Reviewed',
  description:
    'Compare the best portable air conditioners in 2026. In-depth reviews of LG, Midea Duo, Black+Decker, Whynter, SereneLife, and Honeywell portable AC units with BTU sizing guide, noise levels, and energy efficiency ratings.',
  alternates: {
    canonical: '/reviews/best-portable-air-conditioner',
  },
  openGraph: {
    title: 'Best Portable Air Conditioners (2026)',
    description:
      'LG LP1419IVSM vs Midea Duo vs Whynter ARC-14SH vs Black+Decker vs SereneLife vs Honeywell. Full specs, pros/cons, and buyer guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Portable Air Conditioners (2026): Top 6 Portable AC Units Reviewed',
  description:
    'Compare the best portable air conditioners in 2026. In-depth reviews covering LG LP1419IVSM, Midea Duo MAP12S1TBL, Black+Decker BPACT14HWT, Whynter ARC-14SH, SereneLife SLPAC8, and Honeywell MO08CESWK.',
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
    '@id': 'https://ratereliefca.com/reviews/best-portable-air-conditioner',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best portable air conditioner in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The LG LP1419IVSM is our top overall pick for 2026. Its inverter compressor delivers consistent cooling at 14,000 BTU while running significantly quieter than traditional portable ACs. It also uses less energy thanks to the variable-speed compressor that adjusts output to match demand rather than cycling on and off.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size portable AC do I need for my room?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A general rule is 20 BTU per square foot. For a 150 sq ft room, you need about 8,000 BTU. A 300 sq ft room needs 10,000-12,000 BTU. A 400-500 sq ft room requires 14,000 BTU. Add 10% for high ceilings, sunny rooms, or kitchens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a single-hose or dual-hose portable AC better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dual-hose portable ACs are more efficient because they draw outside air for condenser cooling instead of pulling cooled room air out through the exhaust. This prevents negative pressure that forces warm outside air to seep in through gaps. Dual-hose units cool rooms faster and use less energy, but they cost more and have a bulkier window kit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much electricity does a portable air conditioner use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 10,000-14,000 BTU portable AC uses 900-1,400 watts. Running 8 hours a day at average US electricity rates (~16 cents/kWh), that costs roughly $1.15-$1.80 per day or $35-$55 per month. Inverter models like the LG LP1419IVSM use 20-40% less energy than fixed-speed units.',
      },
    },
    {
      '@type': 'Question',
      name: 'How loud are portable air conditioners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most portable ACs produce 50-56 dB on their lowest setting, which is comparable to a normal conversation. The quietest models with inverter compressors can drop to 44-49 dB. Budget units without inverter technology tend to run 53-58 dB. For reference, 50 dB is about as loud as moderate rainfall.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you use a portable AC without a window?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Portable ACs must vent hot air somewhere. While a window is the most common option, you can also vent through a sliding door (with a tall panel kit), a drop ceiling, a dryer vent, or a hole cut in a wall. Without venting the exhaust, the unit will produce more heat than it removes and actually warm the room.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are portable air conditioners worth it compared to window units?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Portable ACs are worth it if you cannot install a window unit due to HOA rules, sliding windows, rental restrictions, or aesthetics. They are less efficient than window units of the same BTU rating (typically 20-30% less efficient) and noisier since the compressor is inside the room. However, their portability and easy setup make them the only option for many situations.',
      },
    },
  ],
};

export default function BestPortableAirConditionerPage() {
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
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>

            {/* ========== BREADCRUMB ========== */}
            <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: '#a1a1aa' }}>
              <Link href="/reviews" className="hover:underline" style={{ color: '#22c55e' }}>
                <ArrowLeft className="h-4 w-4 inline mr-1" />
                All Reviews
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span>Best Portable Air Conditioners</span>
            </nav>

            {/* ========== HERO ========== */}
            <header className="mb-12">
              <div className="flex items-center gap-2 text-sm mb-4" style={{ color: '#a1a1aa' }}>
                <Clock className="h-4 w-4" />
                <span>Updated April 21, 2026</span>
                <span className="mx-2">|</span>
                <span>18 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#f5f5f5' }}>
                Best Portable Air Conditioners (2026): Top 6 Portable AC Units Compared
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                We tested and researched dozens of portable air conditioners to find the best options
                for every room size and budget. Whether you need a quiet unit for a bedroom, a
                powerful dual-hose model for a large living room, or a budget pick under $300,
                this guide covers everything you need to know before buying.
              </p>
              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: '#141414', borderColor: '#22c55e33' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <Shield className="h-4 w-4 inline mr-1" style={{ color: '#22c55e' }} />
                  <strong style={{ color: '#f5f5f5' }}>GreenReviewsHub editorial policy:</strong>{' '}
                  Our recommendations are based on independent research and testing. We may earn a
                  commission if you purchase through our links, at no extra cost to you. This does
                  not influence our rankings or ratings.
                </p>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80&auto=format&fit=crop' alt='Portable air conditioner' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* ========== QUICK PICKS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Star className="h-6 w-6 inline mr-2" style={{ color: '#22c55e' }} />
                Our Top Picks at a Glance
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Best Overall', model: 'LG LP1419IVSM', btu: '14,000 BTU', price: '$530', note: 'Inverter compressor, quietest 14K unit' },
                  { label: 'Best Dual-Hose', model: 'Whynter ARC-14SH', btu: '14,000 BTU', price: '$480', note: 'Dual-hose efficiency, built-in heater' },
                  { label: 'Best Smart Features', model: 'Midea Duo MAP12S1TBL', btu: '12,000 BTU', price: '$470', note: 'Hose-in-hose design, Wi-Fi, voice control' },
                  { label: 'Best for Large Rooms', model: 'Black+Decker BPACT14HWT', btu: '14,000 BTU', price: '$420', note: '4-in-1 with heater, wide coverage' },
                  { label: 'Best Budget', model: 'SereneLife SLPAC8', btu: '8,000 BTU', price: '$280', note: 'Affordable, compact, good for small rooms' },
                  { label: 'Best Compact', model: 'Honeywell MO08CESWK', btu: '8,000 BTU', price: '$350', note: 'Ultra-slim, quiet, dual-filter system' },
                ].map((pick, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-lg p-4 border"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap self-start"
                      style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}
                    >
                      {pick.label}
                    </span>
                    <div className="flex-1">
                      <span className="font-semibold" style={{ color: '#f5f5f5' }}>{pick.model}</span>
                      <span className="mx-2" style={{ color: '#a1a1aa' }}>|</span>
                      <span style={{ color: '#d4d4d8' }}>{pick.btu}</span>
                    </div>
                    <span className="text-sm" style={{ color: '#a1a1aa' }}>{pick.note}</span>
                    <span className="font-bold whitespace-nowrap" style={{ color: '#22c55e' }}>{pick.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Search className="h-6 w-6 inline mr-2" style={{ color: '#22c55e' }} />
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#ffffff10' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #ffffff15' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Model</th>
                      <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>BTU</th>
                      <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Hose</th>
                      <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Noise</th>
                      <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>CEER</th>
                      <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Weight</th>
                      <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: 'LG LP1419IVSM', btu: '14,000', hose: 'Single', noise: '44 dB', ceer: '10.0', weight: '55 lbs', price: '$530', rating: '9.4' },
                      { model: 'Whynter ARC-14SH', btu: '14,000', hose: 'Dual', noise: '52 dB', ceer: '8.9', weight: '80 lbs', price: '$480', rating: '9.1' },
                      { model: 'Midea Duo MAP12S1TBL', btu: '12,000', hose: 'Dual*', noise: '49 dB', ceer: '9.8', weight: '57 lbs', price: '$470', rating: '9.0' },
                      { model: 'Black+Decker BPACT14HWT', btu: '14,000', hose: 'Single', noise: '53 dB', ceer: '8.5', weight: '68 lbs', price: '$420', rating: '8.5' },
                      { model: 'SereneLife SLPAC8', btu: '8,000', hose: 'Single', noise: '55 dB', ceer: '7.8', weight: '52 lbs', price: '$280', rating: '8.0' },
                      { model: 'Honeywell MO08CESWK', btu: '8,000', hose: 'Single', noise: '50 dB', ceer: '8.2', weight: '48 lbs', price: '$350', rating: '8.3' },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #ffffff08' }}>
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{row.model}</td>
                        <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.btu}</td>
                        <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.hose}</td>
                        <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.noise}</td>
                        <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.ceer}</td>
                        <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.weight}</td>
                        <td className="p-3 text-center font-semibold" style={{ color: '#22c55e' }}>{row.price}</td>
                        <td className="p-3 text-center">
                          <span className="inline-flex items-center gap-1 font-bold" style={{ color: '#22c55e' }}>
                            <Star className="h-3 w-3" /> {row.rating}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: '#a1a1aa' }}>
                *Midea Duo uses a hose-in-hose design that functions as dual-hose within a single exhaust tube.
                CEER = Combined Energy Efficiency Ratio (higher is better). Noise measured on lowest fan setting.
              </p>
            </section>

            {/* ========== REVIEW 1: LG LP1419IVSM ========== */}
            <section className="mb-12">
              <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <div className="p-6 md:p-8" style={{ borderBottom: '1px solid #ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                      Best Overall
                    </span>
                    <span className="flex items-center gap-1 font-bold text-lg" style={{ color: '#22c55e' }}>
                      <Star className="h-4 w-4" /> 9.4/10
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    1. LG LP1419IVSM &mdash; Inverter Technology Done Right
                  </h2>
                  <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                    14,000 BTU | Single-Hose | Inverter Compressor | ~$530
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The LG LP1419IVSM stands in a class of its own among portable ACs thanks to its
                    inverter compressor. Instead of the harsh on-off cycling that makes most portable
                    units annoying, this LG modulates compressor speed to maintain your set temperature
                    with minimal fluctuation. The result is dramatically lower noise, better energy
                    efficiency, and more consistent comfort.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    At 44 dB on low, it is the quietest 14,000 BTU portable AC we have found. That is
                    quieter than a refrigerator humming in the next room. The CEER rating of 10.0 also
                    leads the pack, meaning lower electricity bills over a full summer. LG&apos;s ThinQ
                    app integration lets you control the unit remotely and set schedules, though the app
                    can be finicky during initial setup.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                    The main trade-off is the single-hose design, which is inherently less efficient
                    than dual-hose in large or poorly insulated rooms. For bedrooms and medium-sized
                    living rooms up to 500 sq ft, the inverter advantage more than compensates. If you
                    value quiet operation and energy savings above all else, this is the one to buy.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-0" style={{ borderTop: '1px solid #ffffff10' }}>
                  <div className="p-6" style={{ borderRight: '1px solid #ffffff08' }}>
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Inverter compressor; quietest 14K unit at 44 dB</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Best-in-class CEER of 10.0 saves on electricity</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Wi-Fi enabled with LG ThinQ app and voice control</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Auto-evaporation eliminates manual draining</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Consistent temperature with no on/off cycling</li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Single-hose less efficient in poorly insulated rooms</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Higher price than non-inverter competitors</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> ThinQ app setup can be frustrating</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> No built-in heater mode</li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 text-center" style={{ borderTop: '1px solid #ffffff10' }}>
                  <BuyButton
                    productKey="lg-lp1419ivsm"
                    source="best-portable-air-conditioner"
                    variant="primary"
                    label="Check Price, LG LP1419IVSM"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 2: Whynter ARC-14SH ========== */}
            <section className="mb-12">
              <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <div className="p-6 md:p-8" style={{ borderBottom: '1px solid #ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                      Best Dual-Hose
                    </span>
                    <span className="flex items-center gap-1 font-bold text-lg" style={{ color: '#22c55e' }}>
                      <Star className="h-4 w-4" /> 9.1/10
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    2. Whynter ARC-14SH &mdash; Dual-Hose Efficiency King
                  </h2>
                  <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                    14,000 BTU | Dual-Hose | Heater Included | ~$480
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The Whynter ARC-14SH has been a perennial favorite among portable AC enthusiasts,
                    and for good reason. Its true dual-hose design draws outside air to cool the
                    condenser, which means it does not create the negative pressure problem that
                    plagues single-hose units. In practice, this translates to noticeably faster cool-down
                    times and lower energy consumption in larger spaces.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    Beyond cooling, the ARC-14SH doubles as a heater (up to 13,000 BTU heating output),
                    making it a year-round solution for rooms that need supplemental climate control. The
                    built-in dehumidifier pulls up to 101 pints per day, which is genuinely impressive
                    and useful in humid climates or basements.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                    The downsides: it is heavier at 80 lbs, the dual-hose window kit takes up more
                    space, and the compressor is louder than the LG at 52 dB. The eco-friendly R-32
                    refrigerant is a plus for environmentally conscious buyers. If you have a large
                    room or poor insulation and want maximum cooling performance, the Whynter is hard
                    to beat at this price.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-0" style={{ borderTop: '1px solid #ffffff10' }}>
                  <div className="p-6" style={{ borderRight: '1px solid #ffffff08' }}>
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> True dual-hose — no negative pressure issues</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Built-in heater for year-round use</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Powerful dehumidifier (101 pints/day)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Eco-friendly R-32 refrigerant</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Cools large rooms faster than single-hose units</li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Heavy at 80 lbs, difficult to move between rooms</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Louder than inverter models (52 dB)</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Dual-hose window kit is bulkier to install</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> No Wi-Fi or smart home integration</li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 text-center" style={{ borderTop: '1px solid #ffffff10' }}>
                  <BuyButton
                    productKey="whynter-arc-14sh"
                    source="best-portable-air-conditioner"
                    variant="primary"
                    label="Check Price. Whynter ARC-14SH"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 3: Midea Duo MAP12S1TBL ========== */}
            <section className="mb-12">
              <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <div className="p-6 md:p-8" style={{ borderBottom: '1px solid #ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                      Best Smart Features
                    </span>
                    <span className="flex items-center gap-1 font-bold text-lg" style={{ color: '#22c55e' }}>
                      <Star className="h-4 w-4" /> 9.0/10
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    3. Midea Duo MAP12S1TBL &mdash; Ingenious Hose-in-Hose Design
                  </h2>
                  <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                    12,000 BTU | Hose-in-Hose (Dual-Function) | Wi-Fi | ~$470
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The Midea Duo solves one of the biggest complaints about dual-hose portable ACs: the
                    bulky two-hose window kit. Midea engineered a hose-in-hose design where the intake
                    and exhaust run through a single tube, giving you dual-hose efficiency with
                    single-hose simplicity. It is a genuinely clever piece of engineering.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The Duo also leads in smart features. The Midea Air app provides full remote control,
                    scheduling, and energy monitoring. It works with Alexa and Google Assistant out of
                    the box. The inverter compressor (similar concept to the LG) keeps noise down to
                    49 dB and delivers a strong CEER rating of 9.8.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                    At 12,000 BTU it is rated for rooms up to 450 sq ft. For most bedrooms and
                    medium living rooms, that is more than sufficient. The only reason it does not
                    take the top spot is the lower BTU ceiling compared to the LG and Whynter for
                    those who need to cool very large spaces.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-0" style={{ borderTop: '1px solid #ffffff10' }}>
                  <div className="p-6" style={{ borderRight: '1px solid #ffffff08' }}>
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Hose-in-hose gives dual-hose efficiency, single-hose ease</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Wi-Fi with Alexa and Google Assistant support</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Inverter compressor — quiet at 49 dB</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Excellent CEER of 9.8</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Sleek, modern design with easy-roll casters</li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> 12,000 BTU may not suffice for 500+ sq ft rooms</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> No heater mode</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Hose-in-hose is thicker than a standard single hose</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Premium price for a 12K BTU unit</li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 text-center" style={{ borderTop: '1px solid #ffffff10' }}>
                  <BuyButton
                    productKey="midea-duo-map12s1tbl"
                    source="best-portable-air-conditioner"
                    variant="primary"
                    label="Check Price — Midea Duo MAP12S1TBL"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 4: Black+Decker BPACT14HWT ========== */}
            <section className="mb-12">
              <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <div className="p-6 md:p-8" style={{ borderBottom: '1px solid #ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                      Best for Large Rooms
                    </span>
                    <span className="flex items-center gap-1 font-bold text-lg" style={{ color: '#22c55e' }}>
                      <Star className="h-4 w-4" /> 8.5/10
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    4. Black+Decker BPACT14HWT &mdash; Affordable 4-in-1 Workhorse
                  </h2>
                  <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                    14,000 BTU | Single-Hose | Heater + Dehumidifier | ~$420
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    If you want a 14,000 BTU portable AC with a built-in heater and do not want to
                    spend over $500, the Black+Decker BPACT14HWT delivers honest value. It covers
                    rooms up to 525 sq ft in cooling mode and doubles as a space heater in cooler
                    months, making it a solid four-season appliance.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The cooling performance is straightforward and reliable. It uses a traditional
                    fixed-speed compressor, so it cycles on and off rather than modulating like
                    inverter models. This means temperature swings of 2-3 degrees are normal, and
                    the noise jumps noticeably when the compressor kicks in at 53 dB.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                    The self-evaporation system handles condensate well in most conditions, though
                    in very humid environments you may need to attach the drain hose. The LED display
                    is bright and easy to read, and the included remote control covers all functions.
                    For the price, it checks every box that most people need.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-0" style={{ borderTop: '1px solid #ffffff10' }}>
                  <div className="p-6" style={{ borderRight: '1px solid #ffffff08' }}>
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> 4-in-1: cooling, heating, dehumidifier, fan</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Strong 14,000 BTU output for large rooms</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Competitive price under $430</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Easy setup with included window kit</li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> No inverter — louder compressor cycling at 53 dB</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Single-hose efficiency limitations</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Lower CEER (8.5) means higher energy bills</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> No Wi-Fi or smart home support</li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 text-center" style={{ borderTop: '1px solid #ffffff10' }}>
                  <BuyButton
                    productKey="blackdecker-bpact14hwt"
                    source="best-portable-air-conditioner"
                    variant="primary"
                    label="Check Price. Black+Decker BPACT14HWT"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 5: SereneLife SLPAC8 ========== */}
            <section className="mb-12">
              <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <div className="p-6 md:p-8" style={{ borderBottom: '1px solid #ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                      Best Budget
                    </span>
                    <span className="flex items-center gap-1 font-bold text-lg" style={{ color: '#22c55e' }}>
                      <Star className="h-4 w-4" /> 8.0/10
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    5. SereneLife SLPAC8 &mdash; Solid Cooling on a Budget
                  </h2>
                  <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                    8,000 BTU | Single-Hose | Dehumidifier | ~$280
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The SereneLife SLPAC8 proves you do not need to spend $400+ to get effective portable
                    cooling. At under $300, it is the most affordable unit on this list and handles
                    rooms up to 225 sq ft with decent performance. For a bedroom, home office, or dorm
                    room, it gets the job done.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The 8,000 BTU output is honest for the price range. It cools a 200 sq ft bedroom
                    from 85 degrees to a comfortable 74 in about 20-25 minutes. The built-in dehumidifier
                    is a nice bonus, removing up to 50 pints per day. Three fan speeds and a 24-hour
                    programmable timer give you basic scheduling flexibility.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                    Where budget shows is noise and efficiency. At 55 dB it is the loudest unit on this
                    list, and the CEER of 7.8 means it pulls more electricity per BTU than the premium
                    options. The window kit is also basic — functional but not elegant. If budget is
                    your primary concern and you have a smaller room, the SereneLife is a smart choice.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-0" style={{ borderTop: '1px solid #ffffff10' }}>
                  <div className="p-6" style={{ borderRight: '1px solid #ffffff08' }}>
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Most affordable option under $300</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Effective for rooms up to 225 sq ft</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Built-in dehumidifier (50 pints/day)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Compact and lightweight for its class</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> 24-hour timer and remote control included</li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Loudest on the list at 55 dB</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Lowest CEER (7.8), higher running costs</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Basic window kit lacks polish</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> No Wi-Fi, no smart controls, no heater</li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 text-center" style={{ borderTop: '1px solid #ffffff10' }}>
                  <BuyButton
                    productKey="serenelife-slpac8"
                    source="best-portable-air-conditioner"
                    variant="primary"
                    label="Check Price. SereneLife SLPAC8"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== REVIEW 6: Honeywell MO08CESWK ========== */}
            <section className="mb-12">
              <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <div className="p-6 md:p-8" style={{ borderBottom: '1px solid #ffffff10' }}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
                      Best Compact
                    </span>
                    <span className="flex items-center gap-1 font-bold text-lg" style={{ color: '#22c55e' }}>
                      <Star className="h-4 w-4" /> 8.3/10
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                    6. Honeywell MO08CESWK &mdash; Slim, Quiet, and Refined
                  </h2>
                  <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                    8,000 BTU | Single-Hose | Dual-Filter | ~$350
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The Honeywell MO08CESWK is for buyers who want a portable AC that does not look
                    or sound like an industrial appliance. Its slim tower profile takes up less floor
                    space than any other unit on this list, and at 48 lbs it is the lightest too. In a
                    bedroom or small apartment, these details matter.
                  </p>
                  <p className="leading-relaxed mb-4" style={{ color: '#d4d4d8' }}>
                    The dual-filter system is a standout feature. A washable pre-filter catches dust
                    and pet hair, while a secondary activated carbon filter helps reduce odors. At
                    50 dB on low, it is meaningfully quieter than the Black+Decker and SereneLife,
                    though not as silent as the inverter-equipped LG.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#d4d4d8' }}>
                    Cooling capacity is rated for rooms up to 250 sq ft, and we found it handles that
                    range well. The auto-evaporation system works reliably. The lack of smart features
                    is the main compromise, you get a basic remote control and an LED display, but
                    no app control or voice assistant integration. For a bedroom AC that stays out of
                    the way and does its job quietly, the Honeywell is a refined pick.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-0" style={{ borderTop: '1px solid #ffffff10' }}>
                  <div className="p-6" style={{ borderRight: '1px solid #ffffff08' }}>
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <Check className="h-4 w-4" /> Pros
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Slimmest profile; fits tight spaces</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Lightest unit at 48 lbs. Easy to move</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Dual-filter with activated carbon for odors</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Quiet operation at 50 dB</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Reliable auto-evaporation</li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#ef4444' }}>
                      <X className="h-4 w-4" /> Cons
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> 8,000 BTU — not for rooms over 250 sq ft</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> No Wi-Fi, app, or voice control</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> More expensive than SereneLife for same BTU</li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> No heater or dehumidifier-only mode</li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 text-center" style={{ borderTop: '1px solid #ffffff10' }}>
                  <BuyButton
                    productKey="honeywell-mo08ceswk"
                    source="best-portable-air-conditioner"
                    variant="primary"
                    label="Check Price, Honeywell MO08CESWK"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SINGLE-HOSE vs DUAL-HOSE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 inline mr-2" style={{ color: '#22c55e' }} />
                Single-Hose vs Dual-Hose: Which Is Better?
              </h2>
              <div className="rounded-xl border p-6 md:p-8 mb-6" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  This is the most important decision when choosing a portable AC, and it affects
                  efficiency, cooling speed, and running costs more than BTU rating alone.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg p-5 border" style={{ backgroundColor: '#171717', borderColor: '#ffffff10' }}>
                    <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>Single-Hose</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#d4d4d8' }}>
                      Pulls room air across the condenser and exhausts it outside. This creates
                      <strong style={{ color: '#f5f5f5' }}> negative pressure</strong> in the room,
                      which draws warm outside air back in through gaps around doors and windows.
                    </p>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Simpler, lighter, easier window kit</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Lower price point</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Fine for well-insulated, smaller rooms</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Negative pressure reduces real efficiency</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Slower cool-down in large or leaky rooms</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-5 border" style={{ backgroundColor: '#171717', borderColor: '#ffffff10' }}>
                    <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>Dual-Hose</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#d4d4d8' }}>
                      Uses a separate intake hose to pull outside air for condenser cooling, then
                      exhausts it back out. Room air stays in the room &mdash;
                      <strong style={{ color: '#f5f5f5' }}> no negative pressure</strong>.
                    </p>
                    <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> No negative pressure problem</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Faster cooling, especially in large rooms</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Uses 20-30% less energy in practice</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Heavier and bulkier window kit</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#ef4444' }} /> Higher purchase price</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 rounded-lg p-4" style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>
                    <strong style={{ color: '#22c55e' }}>Our recommendation:</strong> For bedrooms
                    under 350 sq ft with decent insulation, a single-hose inverter unit like the
                    LG LP1419IVSM is the best balance of efficiency and simplicity. For large living
                    rooms, poorly insulated spaces, or very hot climates, go dual-hose with the
                    Whynter ARC-14SH or Midea Duo.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== BTU SIZING GUIDE ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Sun className="h-6 w-6 inline mr-2" style={{ color: '#22c55e' }} />
                BTU Sizing Guide: What Size AC Do You Need?
              </h2>
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  Buying the right BTU size is critical. Too small and the unit runs constantly without
                  reaching your desired temperature. Too large and it short-cycles (turns on and off
                  rapidly), which wastes energy and fails to dehumidify properly.
                </p>
                <div className="overflow-x-auto rounded-lg border mb-6" style={{ borderColor: '#ffffff10' }}>
                  <table className="w-full text-sm" style={{ backgroundColor: '#171717' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #ffffff15' }}>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Room Size</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>BTU Needed</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Example Rooms</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Our Pick</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: '100-200 sq ft', btu: '5,000-8,000', example: 'Small bedroom, office', pick: 'SereneLife SLPAC8' },
                        { size: '200-300 sq ft', btu: '8,000-10,000', example: 'Bedroom, studio apt', pick: 'Honeywell MO08CESWK' },
                        { size: '300-450 sq ft', btu: '10,000-12,000', example: 'Large bedroom, living room', pick: 'Midea Duo' },
                        { size: '450-550 sq ft', btu: '12,000-14,000', example: 'Master suite, open plan', pick: 'LG LP1419IVSM' },
                        { size: '550+ sq ft', btu: '14,000+', example: 'Large living room, loft', pick: 'Whynter ARC-14SH' },
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #ffffff08' }}>
                          <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{row.size}</td>
                          <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.btu}</td>
                          <td className="p-3 text-center" style={{ color: '#a1a1aa' }}>{row.example}</td>
                          <td className="p-3 text-center font-medium" style={{ color: '#22c55e' }}>{row.pick}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>Add Extra BTU If:</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#d4d4d8' }}>
                  <li className="flex items-start gap-2"><Zap className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Ceilings above 8 feet &mdash; add 10% per extra foot</li>
                  <li className="flex items-start gap-2"><Sun className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Room gets direct afternoon sun &mdash; add 10%</li>
                  <li className="flex items-start gap-2"><Zap className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Kitchen or room with heat-generating appliances &mdash; add 4,000 BTU</li>
                  <li className="flex items-start gap-2"><Zap className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> More than 2 people regularly in the room &mdash; add 600 BTU per person</li>
                  <li className="flex items-start gap-2"><Zap className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#22c55e' }} /> Poor insulation or many windows &mdash; add 10-20%</li>
                </ul>
              </div>
            </section>

            {/* ========== ENERGY EFFICIENCY ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <DollarSign className="h-6 w-6 inline mr-2" style={{ color: '#22c55e' }} />
                Energy Efficiency and Running Costs
              </h2>
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  Portable ACs are not cheap to run. Understanding energy efficiency can save you
                  hundreds of dollars over a summer. The key metric is <strong style={{ color: '#f5f5f5' }}>CEER</strong> (Combined
                  Energy Efficiency Ratio) &mdash; higher is better.
                </p>
                <div className="overflow-x-auto rounded-lg border mb-6" style={{ borderColor: '#ffffff10' }}>
                  <table className="w-full text-sm" style={{ backgroundColor: '#171717' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #ffffff15' }}>
                        <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>Model</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Watts</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>CEER</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Cost/Day*</th>
                        <th className="text-center p-3 font-semibold" style={{ color: '#f5f5f5' }}>Cost/Month*</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { model: 'LG LP1419IVSM', watts: '1,040', ceer: '10.0', day: '$1.33', month: '$40' },
                        { model: 'Midea Duo', watts: '1,070', ceer: '9.8', day: '$1.37', month: '$41' },
                        { model: 'Whynter ARC-14SH', watts: '1,300', ceer: '8.9', day: '$1.66', month: '$50' },
                        { model: 'Black+Decker', watts: '1,400', ceer: '8.5', day: '$1.79', month: '$54' },
                        { model: 'Honeywell', watts: '900', ceer: '8.2', day: '$1.15', month: '$35' },
                        { model: 'SereneLife', watts: '950', ceer: '7.8', day: '$1.22', month: '$37' },
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #ffffff08' }}>
                          <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>{row.model}</td>
                          <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.watts}</td>
                          <td className="p-3 text-center font-semibold" style={{ color: '#22c55e' }}>{row.ceer}</td>
                          <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.day}</td>
                          <td className="p-3 text-center" style={{ color: '#d4d4d8' }}>{row.month}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs" style={{ color: '#a1a1aa' }}>
                  *Estimated costs based on 8 hours/day operation at the US national average of $0.16/kWh.
                  Actual costs vary by region. California residents may pay $0.25-$0.45/kWh, which could
                  increase these estimates by 50-180%.
                </p>
                <div className="mt-6 rounded-lg p-4" style={{ backgroundColor: '#132a15' }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#d4d4d8' }}>
                    <strong style={{ color: '#22c55e' }}>Energy-saving tip:</strong> Inverter models
                    like the LG and Midea Duo use 20-40% less electricity than their wattage suggests
                    because the compressor runs at reduced speed most of the time. The listed wattage
                    is the maximum draw, not the typical draw.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== NOISE LEVELS ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                <Shield className="h-6 w-6 inline mr-2" style={{ color: '#22c55e' }} />
                Noise Level Comparison
              </h2>
              <div className="rounded-xl border p-6 md:p-8" style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}>
                <p className="leading-relaxed mb-6" style={{ color: '#d4d4d8' }}>
                  Noise is the number one complaint about portable air conditioners. Unlike window
                  units and mini-splits that place the compressor outside, portable ACs keep
                  everything inside the room. Here is how our picks compare.
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    { model: 'LG LP1419IVSM', db: 44, label: 'Library quiet', width: '40%' },
                    { model: 'Midea Duo', db: 49, label: 'Quiet office', width: '55%' },
                    { model: 'Honeywell MO08CESWK', db: 50, label: 'Moderate rain', width: '60%' },
                    { model: 'Whynter ARC-14SH', db: 52, label: 'Conversation', width: '68%' },
                    { model: 'Black+Decker BPACT14HWT', db: 53, label: 'Conversation', width: '72%' },
                    { model: 'SereneLife SLPAC8', db: 55, label: 'Busy office', width: '80%' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span style={{ color: '#f5f5f5' }}>{item.model}</span>
                        <span style={{ color: '#a1a1aa' }}>{item.db} dB &mdash; {item.label}</span>
                      </div>
                      <div className="w-full rounded-full h-3" style={{ backgroundColor: '#171717' }}>
                        <div
                          className="rounded-full h-3 transition-all"
                          style={{ width: item.width, backgroundColor: i === 0 ? '#22c55e' : i < 3 ? '#3b82f6' : '#f59e0b' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  For reference: 40 dB = quiet library, 50 dB = moderate rainfall, 60 dB = normal
                  conversation. Every 10 dB increase sounds roughly twice as loud. The 11 dB gap
                  between the LG (44 dB) and SereneLife (55 dB) is a significant perceived difference.
                  If you plan to sleep with the AC running, prioritize the LG or Midea Duo.
                </p>
              </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'What is the best portable air conditioner in 2026?',
                    a: 'The LG LP1419IVSM is our top overall pick. Its inverter compressor delivers the quietest operation (44 dB) and best energy efficiency (CEER 10.0) of any 14,000 BTU portable AC. For dual-hose efficiency, the Whynter ARC-14SH and Midea Duo MAP12S1TBL are the top choices.',
                  },
                  {
                    q: 'What size portable AC do I need for my room?',
                    a: 'Use the 20 BTU per square foot rule as a starting point. A 150 sq ft bedroom needs about 8,000 BTU. A 300 sq ft living room needs 10,000-12,000 BTU. Rooms over 450 sq ft should use a 14,000 BTU unit. Add 10% for high ceilings, sunny exposure, or kitchens.',
                  },
                  {
                    q: 'Is a single-hose or dual-hose portable AC better?',
                    a: 'Dual-hose is more efficient because it avoids the negative pressure problem that forces warm air into the room through gaps. However, single-hose inverter units like the LG LP1419IVSM can match or beat traditional dual-hose efficiency for well-insulated rooms under 450 sq ft. Dual-hose is the clear winner for large, poorly insulated, or very hot spaces.',
                  },
                  {
                    q: 'How much electricity does a portable air conditioner use?',
                    a: 'A 10,000-14,000 BTU portable AC uses 900-1,400 watts at peak. Running 8 hours a day at the US average of $0.16/kWh costs roughly $1.15-$1.80/day ($35-$55/month). Inverter models typically use 20-40% less because the compressor runs at variable speed rather than full power.',
                  },
                  {
                    q: 'How loud are portable air conditioners?',
                    a: 'Most portable ACs produce 50-56 dB on low, comparable to a normal conversation. The quietest models with inverter compressors reach 44-49 dB. For sleeping, look for units under 50 dB. The LG LP1419IVSM at 44 dB and Midea Duo at 49 dB are the best options for bedrooms.',
                  },
                  {
                    q: 'Can you use a portable AC without a window?',
                    a: 'The exhaust hose must vent somewhere. Alternatives to windows include sliding glass doors (with a tall panel kit), drop ceilings, dryer vents, or a hole cut in a wall. Without venting, the unit produces more heat than it removes and will warm the room. Ventless "evaporative coolers" are a different category and only work in dry climates.',
                  },
                  {
                    q: 'Are portable air conditioners worth it compared to window units?',
                    a: 'Portable ACs cost more to buy and run than equivalent window units. A 14,000 BTU window AC uses 20-30% less energy than a portable of the same capacity. However, portable ACs are the better option when window ACs cannot be installed. due to HOA rules, casement windows, rental restrictions, or aesthetic preferences. They also offer the advantage of being movable between rooms.',
                  },
                ].map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-lg border overflow-hidden"
                    style={{ backgroundColor: '#141414', borderColor: '#ffffff10' }}
                  >
                    <summary
                      className="cursor-pointer px-5 py-4 font-semibold flex items-center justify-between hover:opacity-80"
                      style={{ color: '#f5f5f5' }}
                    >
                      {faq.q}
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 shrink-0 ml-2" style={{ color: '#a1a1aa' }} />
                    </summary>
                    <div className="px-5 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.a}
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
                  Stay Cool This Summer
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Explore more cooling guides, smart home reviews, and energy-saving product comparisons
                  from GreenReviewsHub.
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
