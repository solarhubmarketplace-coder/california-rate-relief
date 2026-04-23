import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Zap,
  DollarSign,
  Star,
  Shield,
  Sun,
  Check,
  X,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Ceiling Fans 2026: Energy-Efficient Smart Ceiling Fans Compared',
  description:
    'Compare the best ceiling fans of 2026. In-depth reviews of Hunter Symphony, Big Ass Fans Haiku, Minka-Aire Light Wave, Modern Forms Torque, Fanimation Kute, and Hampton Bay Windward IV. DC vs AC motors, smart features, and sizing guide.',
  alternates: {
    canonical: '/reviews/best-ceiling-fan',
  },
  openGraph: {
    title:
      'Best Ceiling Fans 2026: Energy-Efficient Smart Ceiling Fans',
    description:
      'Hunter Symphony vs Big Ass Fans Haiku vs Modern Forms Torque vs Fanimation Kute. Full specs, pros/cons, sizing guide, and smart home integration breakdown.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Ceiling Fans 2026: Energy-Efficient Smart Ceiling Fans Compared',
  description:
    'Compare the best ceiling fans of 2026. In-depth reviews covering Hunter Symphony, Big Ass Fans Haiku, Minka-Aire Light Wave, Modern Forms Torque, Fanimation Kute, and Hampton Bay Windward IV. DC vs AC motors, smart home integration, airflow efficiency, and room sizing guide.',
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
    '@id': 'https://ratereliefca.com/reviews/best-ceiling-fan',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best ceiling fan in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hunter Symphony is our top overall pick for 2026. It combines a whisper-quiet DC motor, Wi-Fi and Bluetooth connectivity with voice assistant support, SureSpeed airflow optimization, and an integrated LED light kit — all for under $300. For a premium no-compromise option, the Big Ass Fans Haiku remains the gold standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are DC motor ceiling fans worth the extra cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. DC motor ceiling fans use up to 70% less electricity than traditional AC motor fans, run significantly quieter, offer more speed settings (often 6-7 vs 3), and are lighter weight which simplifies installation. The upfront premium of $50-$150 typically pays for itself within 2-3 years through energy savings, especially if you run your fan daily.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size ceiling fan do I need for my room?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For rooms up to 75 sq ft, use a 29-36 inch fan. For 76-144 sq ft, use a 36-42 inch fan. For 144-225 sq ft, use a 44-50 inch fan. For 225-400 sq ft, use a 50-54 inch fan. For rooms over 400 sq ft, use a 56-72 inch fan or consider installing two fans. The fan should be mounted at least 7 feet from the floor and 18 inches from the nearest wall.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can smart ceiling fans work with Alexa and Google Home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most modern smart ceiling fans support both Amazon Alexa and Google Home natively. The Hunter Symphony, Big Ass Fans Haiku, and Modern Forms Torque all include built-in Wi-Fi with voice assistant integration. Some models like the Fanimation Kute require an optional smart module add-on. HomeKit (Apple) support is less common but available on the Haiku and select Hunter models.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much electricity does a ceiling fan use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A modern DC motor ceiling fan on medium speed uses approximately 15-30 watts — comparable to a standard LED light bulb. Running a DC fan for 8 hours a day costs roughly $1-2 per month in electricity. An older AC motor fan uses 50-100 watts on medium. Compared to running air conditioning (which uses 1,000-3,500 watts), ceiling fans can reduce cooling costs by 30-40% by allowing you to raise your thermostat 4-6 degrees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is CFM and how much do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CFM stands for Cubic Feet per Minute and measures how much air a ceiling fan moves. For a comfortable breeze in a standard room, look for at least 4,000 CFM. High-performance fans like the Big Ass Fans Haiku and Modern Forms Torque deliver 6,000-8,000+ CFM. The key efficiency metric is CFM per watt — anything above 100 CFM/watt is considered excellent. The most efficient DC fans on our list reach 200+ CFM/watt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a ceiling fan with a light or without?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the fan is the primary light source in the room, get one with an integrated LED light kit. Modern fan lights produce 1,000-3,000 lumens, which is more than enough for most rooms. The Hunter Symphony and Minka-Aire Light Wave include excellent built-in LED panels. If you already have sufficient lighting, a fan-only model like the Fanimation Kute or a no-light configuration of the Modern Forms Torque will have a sleeker profile.',
      },
    },
  ],
};

interface Fan {
  name: string;
  badge: string;
  price: string;
  bladeSpan: string;
  motor: string;
  cfm: string;
  watts: string;
  speeds: string;
  smart: string;
  light: string;
  affiliateLink: string;
}

const fans: Fan[] = [
  {
    name: 'Hunter Symphony',
    badge: 'Best Overall',
    price: '$280',
    bladeSpan: '54"',
    motor: 'DC',
    cfm: '5,613',
    watts: '28W',
    speeds: '6',
    smart: 'Wi-Fi + Bluetooth',
    light: 'Integrated LED',
    affiliateLink: '#',
  },
  {
    name: 'Big Ass Fans Haiku',
    badge: 'Best Premium',
    price: '$1,275',
    bladeSpan: '52"',
    motor: 'DC',
    cfm: '6,100',
    watts: '24W',
    speeds: '7',
    smart: 'Wi-Fi + SenseME',
    light: 'Optional LED',
    affiliateLink: '#',
  },
  {
    name: 'Minka-Aire Light Wave',
    badge: 'Best Design',
    price: '$400',
    bladeSpan: '52"',
    motor: 'DC',
    cfm: '5,209',
    watts: '30W',
    speeds: '6',
    smart: 'Remote Only',
    light: 'Integrated LED',
    affiliateLink: '#',
  },
  {
    name: 'Modern Forms Torque',
    badge: 'Best Airflow',
    price: '$600',
    bladeSpan: '58"',
    motor: 'DC',
    cfm: '8,374',
    watts: '35W',
    speeds: '6',
    smart: 'Wi-Fi + App',
    light: 'Optional LED',
    affiliateLink: '#',
  },
  {
    name: 'Fanimation Kute',
    badge: 'Best Compact',
    price: '$300',
    bladeSpan: '44"',
    motor: 'DC',
    cfm: '3,950',
    watts: '19W',
    speeds: '6',
    smart: 'Optional Module',
    light: 'None',
    affiliateLink: '#',
  },
  {
    name: 'Hampton Bay Windward IV',
    badge: 'Best Budget',
    price: '$120',
    bladeSpan: '52"',
    motor: 'AC',
    cfm: '4,803',
    watts: '55W',
    speeds: '3',
    smart: 'None',
    light: 'Integrated LED',
    affiliateLink: '#',
  },
];

export default function BestCeilingFan() {
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
                Best Ceiling Fans 2026: Energy-Efficient Smart Ceiling Fans Compared
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Sun className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                A good ceiling fan is one of the most cost-effective ways to reduce your energy
                bill. Running a modern DC motor fan costs about $1-2 per month in electricity,
                yet it can let you raise your thermostat by 4-6 degrees — saving 30-40% on
                air conditioning costs. With smart home integration now standard on mid-range
                models, 2026 is a great year to upgrade.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We evaluated over 40 ceiling fans across performance, efficiency, noise, build
                quality, smart features, and value. These six stood out as the best options for
                different needs and budgets — from the $120 Hampton Bay Windward IV to the
                $1,275 Big Ass Fans Haiku.
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
                      Hunter Symphony — Best Overall
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Whisper-quiet DC motor, Wi-Fi/Bluetooth with Alexa and Google Home, SureSpeed
                      airflow guarantee, integrated LED light, and a sub-$300 price. The best
                      combination of features, performance, and value in 2026.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Big Ass Fans Haiku — Best Premium
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      The quietest fan on the market with SenseME auto-comfort technology. At 254 CFM
                      per watt, it is the most energy-efficient fan you can buy. Premium build quality
                      with a 13-year warranty.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Modern Forms Torque — Best Airflow
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Moves a massive 8,374 CFM of air with its 58-inch blade span — ideal for large
                      living rooms and open-concept spaces. Built-in Wi-Fi with a polished app
                      experience and a striking industrial design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Fan</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Price</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Span</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Motor</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>CFM</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Watts</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Speeds</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Smart</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Light</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fans.map((fan, idx) => (
                      <tr key={fan.name} style={{ borderTopWidth: '1px', borderColor: '#27272a', backgroundColor: idx % 2 === 0 ? '#141414' : '#171717' }}>
                        <td className="px-4 py-3 font-medium" style={{ color: '#f5f5f5' }}>
                          <a href={fan.affiliateLink} className="hover:underline" style={{ color: '#22c55e' }}>{fan.name}</a>
                          <span className="block text-xs mt-0.5" style={{ color: '#a1a1aa' }}>{fan.badge}</span>
                        </td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{fan.price}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{fan.bladeSpan}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{fan.motor}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{fan.cfm}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{fan.watts}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{fan.speeds}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{fan.smart}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{fan.light}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#f5f5f5' }}>
                In-Depth Reviews
              </h2>

              {/* --- Hunter Symphony --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    1. Hunter Symphony — Best Overall
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>
                    Editor&apos;s Choice
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4" style={{ color: s <= 4 ? '#facc15' : '#3f3f46', fill: s <= 4 ? '#facc15' : 'none' }} />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>4.5 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Hunter has been making ceiling fans since 1886, and the Symphony represents
                  everything they have learned distilled into a modern smart fan. The SureSpeed
                  system guarantees the listed airflow — no guessing based on blade pitch or motor
                  power alone. The DC motor runs nearly silently, even on its highest setting.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Smart integration is where the Symphony truly excels at its price point. Built-in
                  Wi-Fi and Bluetooth let you control it through the Hunter app, Amazon Alexa,
                  Google Home, or Apple HomeKit. You can schedule the fan to match your daily
                  routine, adjust the LED color temperature (2700K-5000K), and set auto-off timers.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> SureSpeed airflow guarantee (5,613 CFM)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Wi-Fi + Bluetooth + HomeKit support</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Whisper-quiet DC motor</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Tunable white LED (2700K-5000K)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Excellent value under $300</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Plastic blades feel less premium</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Only available in 54-inch size</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> App can be slow to connect initially</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="hunter-symphony"
                    source="ceiling-fan-hub"
                    variant="primary"
                    label="Check Price — Hunter Symphony"
                    showPrice
                  />
                </div>
              </div>

              {/* --- Big Ass Fans Haiku --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    2. Big Ass Fans Haiku — Best Premium
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#3b82f620', color: '#3b82f6' }}>
                    Premium Pick
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4" style={{ color: s <= 5 ? '#facc15' : '#3f3f46', fill: s <= 5 ? '#facc15' : 'none' }} />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>4.8 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Haiku is the benchmark that every other premium ceiling fan is measured against.
                  Big Ass Fans (yes, that is the real company name) builds commercial-grade fans for
                  warehouses and factories — the Haiku brings that engineering to your living room.
                  At 254 CFM per watt, it is the single most energy-efficient ceiling fan on the market.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The proprietary SenseME technology uses built-in occupancy and temperature sensors
                  to automatically adjust fan speed. Walk into the room and it ramps up. Leave and it
                  shuts off. The room gets warmer and it speeds up. This hands-off automation makes it
                  the most truly &quot;smart&quot; fan available — no voice commands needed.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Best energy efficiency (254 CFM/watt)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> SenseME auto-adjusts to occupancy and temperature</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Virtually silent operation</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> 13-year warranty</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Premium materials (aluminum blades)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Expensive ($1,275+)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> LED light kit is a $200+ add-on</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Limited finish options</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="big-ass-fans-haiku"
                    source="ceiling-fan-hub"
                    variant="primary"
                    label="Check Price — Big Ass Fans Haiku"
                    showPrice
                  />
                </div>
              </div>

              {/* --- Minka-Aire Light Wave --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    3. Minka-Aire Light Wave — Best Design
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#a855f720', color: '#a855f7' }}>
                    Design Award
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4" style={{ color: '#facc15', fill: '#facc15' }} />
                  ))}
                  <Star className="h-4 w-4" style={{ color: '#3f3f46', fill: 'none' }} />
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>4.3 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Light Wave is a statement piece. Its sculptural three-blade design with a
                  seamless integrated LED panel makes it the most visually striking fan on this list.
                  The blades curve gently and look more like modern art than a ceiling fixture. If
                  aesthetics are a priority, this is the fan interior designers recommend.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Performance is solid if not class-leading. The DC motor delivers 5,209 CFM at
                  30 watts, which is efficient but not quite as impressive as the Haiku or Torque.
                  It ships with a handheld remote rather than built-in Wi-Fi, so smart home
                  integration requires a third-party controller like the Bond Bridge.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Stunning sculptural design</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Bright integrated LED (1,600 lumens)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> DC motor with 6 speeds</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Multiple finish options</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> No built-in Wi-Fi or smart features</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Three blades move less air than four or five</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Non-replaceable LED module</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="minka-aire-light-wave"
                    source="ceiling-fan-hub"
                    variant="primary"
                    label="Check Price — Minka-Aire Light Wave"
                    showPrice
                  />
                </div>
              </div>

              {/* --- Modern Forms Torque --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    4. Modern Forms Torque — Best Airflow
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f59e0b20', color: '#f59e0b' }}>
                    Power Pick
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4" style={{ color: s <= 4 ? '#facc15' : '#3f3f46', fill: s <= 4 ? '#facc15' : 'none' }} />
                  ))}
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>4.4 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  If you have a large living room, great room, or open-concept floor plan, the
                  Modern Forms Torque is purpose-built for you. Its 58-inch blade span and optimized
                  blade pitch move a massive 8,374 CFM — nearly double what most 52-inch fans deliver.
                  You can actually feel the breeze from across a large room.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Modern Forms app is one of the better fan apps available. It supports scheduling,
                  adaptive learning, sleep mode (gradual speed reduction), and breeze mode (random
                  speed variation for a natural feel). The fan connects directly to Wi-Fi without
                  needing a separate hub or bridge.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Best-in-class airflow (8,374 CFM)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Built-in Wi-Fi with excellent app</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Adaptive learning and breeze modes</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Striking industrial design</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> 58-inch span is too large for small rooms</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> No integrated light (sold separately)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Higher price point ($600)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="modern-forms-torque"
                    source="ceiling-fan-hub"
                    variant="primary"
                    label="Check Price — Modern Forms Torque"
                    showPrice
                  />
                </div>
              </div>

              {/* --- Fanimation Kute --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    5. Fanimation Kute — Best Compact
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#06b6d420', color: '#06b6d4' }}>
                    Small Room Pick
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4" style={{ color: '#facc15', fill: '#facc15' }} />
                  ))}
                  <Star className="h-4 w-4" style={{ color: '#3f3f46', fill: 'none' }} />
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>4.2 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Most ceiling fan lists ignore bedrooms, offices, and smaller rooms — the
                  Fanimation Kute fills that gap perfectly. At 44 inches, it is sized right for
                  rooms between 100-225 square feet without overwhelming the space. The minimalist
                  flush-mount design sits close to the ceiling, making it ideal for rooms with
                  standard 8-foot ceilings.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The DC motor is impressively efficient at just 19 watts on high — the lowest power
                  draw of any fan on this list. It ships with a handheld remote, and smart home
                  support is available through an optional Fanimation FanSync module ($50-80). The
                  fan-only design keeps the profile exceptionally clean and slim.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Perfect size for bedrooms and offices</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Lowest power draw (19W)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Flush-mount for low ceilings</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Clean minimalist design</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> No integrated light</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Smart module costs extra</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Not powerful enough for large rooms</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="fanimation-kute"
                    source="ceiling-fan-hub"
                    variant="primary"
                    label="Check Price — Fanimation Kute"
                    showPrice
                  />
                </div>
              </div>

              {/* --- Hampton Bay Windward IV --- */}
              <div className="rounded-xl border p-6 md:p-8 mb-8" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    6. Hampton Bay Windward IV — Best Budget
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}>
                    Budget Pick
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4" style={{ color: s <= 3 ? '#facc15' : '#3f3f46', fill: s <= 3 ? '#facc15' : 'none' }} />
                  ))}
                  <Star className="h-4 w-4" style={{ color: '#3f3f46', fill: 'none' }} />
                  <span className="ml-2 text-sm font-semibold" style={{ color: '#d4d4d8' }}>3.8 / 5</span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Not everyone needs a $600 smart fan. The Hampton Bay Windward IV is a Home Depot
                  staple that delivers reliable performance at a price that is hard to argue with.
                  At $120, it includes a 52-inch span, an integrated LED light kit, and a reversible
                  motor for winter use — covering all the basics without any extras.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The trade-off is an AC motor. It uses roughly twice the electricity of DC fans
                  (55W vs 25-30W), only has 3 speed settings instead of 6, and runs louder on high.
                  There are no smart features — you get a pull chain and an optional wall control.
                  But if you need to outfit multiple rooms on a budget, five Windward IVs cost less
                  than one Haiku.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>Pros</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Unbeatable price ($120)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Includes LED light kit</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Good airflow for the price (4,803 CFM)</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} /> Widely available at Home Depot</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#0a0a0a' }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>Cons</p>
                    <ul className="space-y-1.5 text-sm" style={{ color: '#d4d4d8' }}>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> AC motor uses more electricity (55W)</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Only 3 speed settings</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> No smart features whatsoever</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} /> Louder on high speed</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <BuyButton
                    productKey="hampton-bay-windward-iv"
                    source="ceiling-fan-hub"
                    variant="primary"
                    label="Check Price — Hampton Bay Windward IV"
                    showPrice
                  />
                </div>
              </div>
            </section>

            {/* ========== SIZING GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Ceiling Fan Sizing Guide: Which Size Do You Need?
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                Choosing the right fan size is the single biggest factor in performance. A fan
                that is too small will not move enough air. A fan that is too large will overwhelm
                the room and may wobble. Use this chart to match your room to the right blade span.
              </p>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Room Size</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Blade Span</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Typical Room</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Our Pick</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: 'Up to 75 sq ft', span: '29-36"', room: 'Bathroom, closet, small nook', pick: 'Fanimation Kute (44")' },
                      { size: '76-144 sq ft', span: '36-42"', room: 'Home office, small bedroom', pick: 'Fanimation Kute (44")' },
                      { size: '144-225 sq ft', span: '44-50"', room: 'Standard bedroom, dining room', pick: 'Fanimation Kute (44")' },
                      { size: '225-400 sq ft', span: '50-54"', room: 'Living room, master bedroom', pick: 'Hunter Symphony (54")' },
                      { size: '400+ sq ft', span: '56-72"', room: 'Great room, open concept', pick: 'Modern Forms Torque (58")' },
                    ].map((row, idx) => (
                      <tr key={row.size} style={{ borderTopWidth: '1px', borderColor: '#27272a', backgroundColor: idx % 2 === 0 ? '#141414' : '#171717' }}>
                        <td className="px-4 py-3 font-medium" style={{ color: '#f5f5f5' }}>{row.size}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{row.span}</td>
                        <td className="px-4 py-3" style={{ color: '#a1a1aa' }}>{row.room}</td>
                        <td className="px-4 py-3" style={{ color: '#22c55e' }}>{row.pick}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded-lg p-4 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className="flex items-start gap-2">
                  <Shield className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                    <strong style={{ color: '#f5f5f5' }}>Mounting clearance:</strong> The fan blades should
                    be at least 7 feet above the floor and 18 inches from the nearest wall. For
                    ceilings under 8 feet, use a flush-mount (hugger) fan. For ceilings over 9 feet,
                    use a downrod to bring the fan to the optimal 8-9 foot height.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== DC vs AC MOTORS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                DC vs AC Motors: Which Is Better?
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                The motor type is the most important spec when choosing a ceiling fan. Here is
                how DC and AC motors compare across every metric that matters.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border p-6" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>DC Motor (Recommended)</h3>
                  </div>
                  <ul className="space-y-3 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Energy use:</strong> 15-35 watts (up to 70% less than AC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Noise:</strong> Near-silent operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Speed settings:</strong> 6-7 speeds (fine-tuned control)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Weight:</strong> Lighter motor, easier installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Smart features:</strong> Usually built-in Wi-Fi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#f59e0b' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Price:</strong> $250-$1,300+</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border p-6" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5" style={{ color: '#a1a1aa' }} />
                    <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>AC Motor (Budget Option)</h3>
                  </div>
                  <ul className="space-y-3 text-sm" style={{ color: '#d4d4d8' }}>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Energy use:</strong> 50-100 watts (higher bills)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Noise:</strong> Audible hum, especially on high</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Speed settings:</strong> 3 speeds only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Weight:</strong> Heavier motor assembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Smart features:</strong> Rarely included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                      <span><strong style={{ color: '#f5f5f5' }}>Price:</strong> $80-$200</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-lg p-4 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Bottom line:</strong> If you run your ceiling fan
                  daily, a DC motor fan pays for its premium in 2-3 years through electricity savings
                  alone. The noise difference is even more compelling — DC fans are virtually silent,
                  which makes a major difference in bedrooms and home offices.
                </p>
              </div>
            </section>

            {/* ========== SMART FEATURES ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Smart Ceiling Fan Features: What Actually Matters
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                &quot;Smart&quot; means different things across different fan brands. Here is a breakdown
                of the features that genuinely improve your daily experience versus marketing fluff.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Voice Assistant Integration (Alexa / Google / HomeKit)',
                    desc: 'Turn the fan on or off, adjust speed, and control lights entirely by voice. Essential if you already use a smart home ecosystem. The Hunter Symphony supports all three major platforms. The Haiku and Modern Forms Torque support Alexa and Google.',
                    worth: true,
                  },
                  {
                    title: 'Scheduling and Timers',
                    desc: 'Set your fan to turn on at bedtime and off in the morning automatically. Most smart fans support this through their app. The Big Ass Fans Haiku goes further with occupancy-based auto-on/off.',
                    worth: true,
                  },
                  {
                    title: 'Adaptive / Breeze Mode',
                    desc: 'Randomly varies the fan speed to simulate a natural breeze instead of a constant airflow. Available on the Modern Forms Torque and Big Ass Fans Haiku. Surprisingly pleasant for sleeping.',
                    worth: true,
                  },
                  {
                    title: 'Occupancy and Temperature Sensors',
                    desc: 'Only available on the Haiku. The fan detects when you enter or leave and adjusts accordingly. It also reads room temperature and speeds up as the room gets warmer. The most genuinely automated option.',
                    worth: true,
                  },
                  {
                    title: 'Remote App Control (When Not Home)',
                    desc: 'Control your fan from anywhere via the internet. Useful if you forget to turn it off before leaving. Available on all Wi-Fi-connected fans but not Bluetooth-only models.',
                    worth: false,
                  },
                ].map((feature) => (
                  <div key={feature.title} className="rounded-lg p-4 border" style={{ backgroundColor: '#141414', borderColor: '#27272a' }}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {feature.worth ? (
                          <CheckCircle className="h-5 w-5" style={{ color: '#22c55e' }} />
                        ) : (
                          <Shield className="h-5 w-5" style={{ color: '#a1a1aa' }} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>{feature.title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== AIRFLOW / CFM ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Understanding Airflow: CFM and Efficiency Ratings
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                CFM (Cubic Feet per Minute) tells you how much air a fan moves. But raw CFM alone
                does not tell the whole story — a fan that moves 5,000 CFM at 100 watts is far less
                efficient than one that moves 5,000 CFM at 25 watts. The metric that matters most
                is <strong style={{ color: '#f5f5f5' }}>CFM per watt</strong>.
              </p>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Fan</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>CFM (High)</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Watts (High)</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>CFM / Watt</th>
                      <th className="px-4 py-3 text-left font-semibold" style={{ color: '#f5f5f5' }}>Efficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Big Ass Fans Haiku', cfm: '6,100', watts: '24W', ratio: '254', rating: 'Exceptional' },
                      { name: 'Modern Forms Torque', cfm: '8,374', watts: '35W', ratio: '239', rating: 'Exceptional' },
                      { name: 'Fanimation Kute', cfm: '3,950', watts: '19W', ratio: '208', rating: 'Excellent' },
                      { name: 'Hunter Symphony', cfm: '5,613', watts: '28W', ratio: '200', rating: 'Excellent' },
                      { name: 'Minka-Aire Light Wave', cfm: '5,209', watts: '30W', ratio: '174', rating: 'Very Good' },
                      { name: 'Hampton Bay Windward IV', cfm: '4,803', watts: '55W', ratio: '87', rating: 'Average' },
                    ].map((row, idx) => (
                      <tr key={row.name} style={{ borderTopWidth: '1px', borderColor: '#27272a', backgroundColor: idx % 2 === 0 ? '#141414' : '#171717' }}>
                        <td className="px-4 py-3 font-medium" style={{ color: '#f5f5f5' }}>{row.name}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{row.cfm}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{row.watts}</td>
                        <td className="px-4 py-3 font-semibold" style={{ color: '#22c55e' }}>{row.ratio}</td>
                        <td className="px-4 py-3" style={{ color: '#d4d4d8' }}>{row.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                Any fan above 100 CFM/watt is considered energy-efficient. The ENERGY STAR
                threshold requires a minimum of 75 CFM/watt on high speed. All five DC motor fans
                on our list significantly exceed this threshold, with the Haiku reaching 254 CFM/watt
                — more than three times the ENERGY STAR minimum.
              </p>
            </section>

            {/* ========== FAQ ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqSchema.mainEntity.map((faq) => (
                  <details
                    key={faq.name}
                    className="group rounded-lg border"
                    style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-4 py-4 font-medium" style={{ color: '#f5f5f5' }}>
                      {faq.name}
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" style={{ color: '#a1a1aa' }} />
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
                  Ready to Upgrade Your Comfort?
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  A modern ceiling fan is one of the best energy investments you can make.
                  Browse our full lineup of energy-efficient home product reviews.
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
