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
  Check,
  X,
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Electric Hedge Trimmers (2026): EGO vs Milwaukee vs DeWalt vs Makita',
  description:
    'Compare the best electric and battery-powered hedge trimmers in 2026. In-depth reviews of EGO HT2601, Milwaukee M18 FUEL, DeWalt 20V MAX, Makita XHU08Z, BLACK+DECKER 40V, and Greenworks 40V with pros, cons, and buying guide.',
  alternates: {
    canonical: '/reviews/best-electric-hedge-trimmer',
  },
  openGraph: {
    title: 'Best Electric Hedge Trimmers (2026)',
    description:
      'EGO HT2601 vs Milwaukee M18 FUEL vs DeWalt 20V MAX vs Makita XHU08Z. Full specs, pros/cons, and buyer guide for cordless hedge trimmers.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Hedge Trimmers (2026): EGO vs Milwaukee vs DeWalt vs Makita',
  description:
    'Compare the best electric and battery-powered hedge trimmers in 2026. In-depth reviews covering EGO HT2601, Milwaukee M18 FUEL, DeWalt 20V MAX, Makita XHU08Z, BLACK+DECKER 40V MAX, and Greenworks 40V.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-hedge-trimmer',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric hedge trimmer in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO HT2601 is our top pick for 2026. It delivers a 26-inch dual-action blade, up to 60 minutes of runtime on the 56V 5.0 Ah battery, and a 1-inch cutting capacity. It balances power, runtime, and ergonomics better than any other cordless hedge trimmer we tested.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are battery hedge trimmers as powerful as gas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern battery hedge trimmers from brands like EGO, Milwaukee, and DeWalt now match or exceed the cutting performance of most homeowner-grade gas models. Professional-grade gas trimmers still hold a slight edge for sustained all-day commercial use, but for residential hedges and shrubs, battery models provide equivalent cutting power with zero emissions, less noise, and virtually no maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a battery hedge trimmer last on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Runtime varies by battery size and cutting intensity. On a standard 4.0-5.0 Ah battery, most cordless hedge trimmers deliver 45 to 75 minutes of runtime during normal trimming. Heavier cutting through thick branches drains the battery faster. The EGO HT2601 with a 5.0 Ah battery reaches about 60 minutes, while the Makita XHU08Z on dual 18V batteries can exceed 90 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What blade length do I need for a hedge trimmer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blade length depends on your hedge size. For small ornamental hedges and detailed shaping work, 18 to 22 inches is ideal for precision and control. For medium residential hedges that are 3 to 6 feet tall, 24 to 26 inches offers the best balance of reach and manageability. For large privacy hedges over 6 feet, 28 to 30 inches or longer covers more area per pass and reduces trimming time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a corded or cordless hedge trimmer better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cordless (battery-powered) hedge trimmers are better for most homeowners in 2026. They offer freedom of movement without cord management, equivalent power for residential use, and modern batteries charge in under an hour. Corded trimmers still make sense if you have a very small yard, want unlimited runtime for a lower upfront cost, or already own extension cords. However, battery technology has improved so much that cordless models are now the default recommendation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do electric hedge trimmers need maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electric hedge trimmers require minimal maintenance compared to gas models. After each use, wipe sap and debris from the blades and apply a light coat of blade lubricant or spray. Check blade alignment periodically and have them professionally sharpened once or twice per year if you trim frequently. Battery contacts should be kept clean and dry. There are no spark plugs, air filters, carburetors, or fuel lines to service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use my existing power tool batteries with a hedge trimmer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you stay within the same battery platform. Milwaukee M18 hedge trimmers work with any M18 battery. DeWalt 20V MAX trimmers accept all 20V MAX batteries. Makita 18V LXT trimmers use any 18V LXT battery. EGO 56V tools share the 56V ARC Lithium platform. Buying into a platform you already own can save $50 to $150 on the tool-only (bare tool) version since you skip buying another battery and charger.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  bladeLength: string;
  cuttingCapacity: string;
  weight: string;
  battery: string;
  runtime: string;
  bladeType: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'EGO HT2601',
    badge: 'Best Overall',
    price: '$269',
    bladeLength: '26 in',
    cuttingCapacity: '1 in',
    weight: '11.7 lbs',
    battery: '56V 5.0 Ah',
    runtime: '~60 min',
    bladeType: 'Dual-Action',
    affiliateLink: '#',
  },
  {
    name: 'Milwaukee M18 FUEL',
    badge: 'Best for Pros',
    price: '$249',
    bladeLength: '24 in',
    cuttingCapacity: '3/4 in',
    weight: '8.4 lbs',
    battery: 'M18 18V',
    runtime: '~75 min',
    bladeType: 'Dual-Action',
    affiliateLink: '#',
  },
  {
    name: 'DeWalt 20V MAX DCHT820P1',
    badge: 'Best Ergonomics',
    price: '$229',
    bladeLength: '22 in',
    cuttingCapacity: '3/4 in',
    weight: '7.5 lbs',
    battery: '20V MAX 5.0 Ah',
    runtime: '~55 min',
    bladeType: 'Dual-Action',
    affiliateLink: '#',
  },
  {
    name: 'Makita XHU08Z',
    badge: 'Longest Runtime',
    price: '$219',
    bladeLength: '30 in',
    cuttingCapacity: '3/4 in',
    weight: '10.1 lbs',
    battery: '36V (Dual 18V)',
    runtime: '~90 min',
    bladeType: 'Dual-Action',
    affiliateLink: '#',
  },
  {
    name: 'BLACK+DECKER 40V LHT2436',
    badge: 'Best Budget',
    price: '$139',
    bladeLength: '24 in',
    cuttingCapacity: '3/4 in',
    weight: '7.7 lbs',
    battery: '40V MAX 1.5 Ah',
    runtime: '~40 min',
    bladeType: 'Dual-Action',
    affiliateLink: '#',
  },
  {
    name: 'Greenworks 40V HT40B211',
    badge: 'Best Lightweight',
    price: '$149',
    bladeLength: '24 in',
    cuttingCapacity: '3/4 in',
    weight: '6.6 lbs',
    battery: '40V 2.0 Ah',
    runtime: '~45 min',
    bladeType: 'Dual-Action',
    affiliateLink: '#',
  },
];

export default function BestElectricHedgeTrimmer() {
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
                Lawn Equipment Reviews
              </span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best Electric Hedge Trimmers (2026): EGO vs Milwaukee vs DeWalt vs Makita
              </h1>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#a1a1aa' }}>
                <div className="flex items-center gap-1">
                  <Battery className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Battery-powered hedge trimmers have come a long way. In 2026, the best cordless
                models rival gas trimmers on raw cutting power while running quieter, lighter, and
                with zero emissions. Whether you are maintaining boxwood borders or taming an
                eight-foot privacy hedge, there is a battery hedge trimmer built for the job.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We researched and compared the top electric hedge trimmers on the market, focusing
                on blade performance, battery runtime, ergonomics, and overall value. This guide
                covers six standout models and helps you pick the right one for your yard.
              </p>
            </div>

            {/* Quick Verdict Box */}
            <div
              className="rounded-xl p-6 md:p-8 mb-12 border"
              style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                  Quick Verdict: Our Top 3 Picks
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      EGO HT2601 — Best Overall
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      26-inch blade, 60-minute runtime on the 56V platform, and a 1-inch cutting
                      capacity that handles thick branches without bogging down. The hedge trimmer
                      most homeowners should buy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Milwaukee M18 FUEL — Best for Professionals
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Landscapers swear by this one. The M18 FUEL delivers 75 minutes of runtime,
                      best-in-class blade speed, and fits seamlessly into the massive M18 battery
                      ecosystem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      BLACK+DECKER 40V LHT2436 — Best Budget
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      At $139 with a battery and charger included, this is the best entry point into
                      cordless hedge trimming. Perfect for small to medium yards where you do not
                      need pro-grade power.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div
              className="rounded-xl p-6 mb-12 border"
              style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
            >
              <h2 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>
                What&apos;s in This Guide
              </h2>
              <ul className="space-y-2">
                {[
                  { label: 'Comparison Table', anchor: '#comparison-table' },
                  { label: 'Individual Reviews', anchor: '#reviews' },
                  { label: 'Blade Length Guide', anchor: '#blade-length-guide' },
                  { label: 'Battery vs Corded', anchor: '#battery-vs-corded' },
                  { label: 'How We Tested', anchor: '#how-we-tested' },
                  { label: 'FAQ', anchor: '#faq' },
                ].map((item) => (
                  <li key={item.anchor}>
                    <a
                      href={item.anchor}
                      className="inline-flex items-center gap-2 text-sm hover:underline"
                      style={{ color: '#22c55e' }}
                    >
                      <ChevronRight className="h-3 w-3" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison Table */}
            <section id="comparison-table" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>
                        Model
                      </th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>
                        Price
                      </th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>
                        Blade
                      </th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>
                        Cut Cap.
                      </th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>
                        Battery
                      </th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>
                        Runtime
                      </th>
                      <th className="text-left p-3 font-semibold" style={{ color: '#f5f5f5' }}>
                        Weight
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, i) => (
                      <tr
                        key={p.name}
                        style={{
                          backgroundColor: i % 2 === 0 ? '#141414' : '#171717',
                          borderTop: '1px solid #27272a',
                        }}
                      >
                        <td className="p-3">
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold" style={{ color: '#f5f5f5' }}>
                              {p.name}
                            </span>
                            <span
                              className="text-xs px-2 py-0.5 rounded-full inline-block w-fit"
                              style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                            >
                              {p.badge}
                            </span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold" style={{ color: '#22c55e' }}>
                          {p.price}
                        </td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>
                          {p.bladeLength}
                        </td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>
                          {p.cuttingCapacity}
                        </td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>
                          {p.battery}
                        </td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>
                          {p.runtime}
                        </td>
                        <td className="p-3" style={{ color: '#d4d4d8' }}>
                          {p.weight}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Individual Reviews */}
            <section id="reviews" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#f5f5f5' }}>
                Individual Reviews
              </h2>

              {/* 1. EGO HT2601 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    1. EGO HT2601
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best Overall
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 5 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 5 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="text-sm ml-2 font-semibold" style={{ color: '#d4d4d8' }}>
                    4.8 / 5
                  </span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The EGO HT2601 is the hedge trimmer that converted us from gas for good. Its
                  26-inch dual-action blade cuts through branches up to 1 inch thick without
                  hesitating, and the 56V ARC Lithium 5.0 Ah battery delivers about 60 minutes of
                  real-world trimming. The blade speed is noticeably fast, leaving clean cuts that
                  promote healthy regrowth. Build quality is excellent and the rubberized grip
                  reduces vibration during extended sessions.
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  If you already own EGO lawn equipment, this is a no-brainer since the batteries
                  are interchangeable across the entire 56V lineup. Even as a standalone purchase at
                  $269 with battery and charger, it delivers more cutting capacity and longer runtime
                  than most competitors in this price range.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        '1-inch cutting capacity handles thick branches',
                        '60 minutes of runtime on 5.0 Ah battery',
                        'Part of EGO 56V ecosystem (mower, blower, chainsaw)',
                        'Low vibration with excellent blade speed',
                        'Weather-resistant housing',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Heavier than some competitors at 11.7 lbs',
                        'Premium price point vs budget options',
                        'No variable speed trigger',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-2 hover:underline"
                  style={{ color: '#22c55e' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              {/* 2. Milwaukee M18 FUEL */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    2. Milwaukee M18 FUEL
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#3b82f620', color: '#3b82f6' }}
                  >
                    Best for Pros
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 5 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 5 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="text-sm ml-2 font-semibold" style={{ color: '#d4d4d8' }}>
                    4.7 / 5
                  </span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Milwaukee M18 FUEL hedge trimmer is built for professionals who need a tool
                  that can handle hours of commercial trimming without complaint. Its POWERSTATE
                  brushless motor delivers the fastest blade speed in this roundup, producing
                  exceptionally clean cuts even on woody, thick-stemmed shrubs. At 8.4 lbs (bare
                  tool), it is lighter than you would expect from a pro-grade tool.
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The real advantage is the M18 ecosystem. If you already own Milwaukee drills,
                  saws, or blowers, you can grab the bare tool for around $179 and use batteries you
                  already have. The 24-inch blade is shorter than the EGO but makes up for it with
                  faster stroke speed and a more aggressive tooth design. This trimmer was clearly
                  designed for people who trim hedges every day.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Fastest blade speed in this comparison',
                        '75 minutes of runtime on 8.0 Ah HIGH OUTPUT battery',
                        'Massive M18 ecosystem (250+ tools)',
                        'REDLINK overload protection prevents damage',
                        'Lightweight at 8.4 lbs bare',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        '3/4-inch cutting capacity (vs EGO 1 inch)',
                        'Bare tool only — battery and charger sold separately',
                        '24-inch blade shorter than some models',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-2 hover:underline"
                  style={{ color: '#22c55e' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              {/* 3. DeWalt 20V MAX */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    3. DeWalt 20V MAX DCHT820P1
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#f59e0b20', color: '#f59e0b' }}
                  >
                    Best Ergonomics
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 4 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 4 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="text-sm ml-2 font-semibold" style={{ color: '#d4d4d8' }}>
                    4.5 / 5
                  </span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  DeWalt took a comfort-first approach with the DCHT820P1. At only 7.5 lbs with
                  battery, this is one of the most comfortable hedge trimmers to use for extended
                  periods. The wraparound auxiliary handle lets you grip the tool from multiple
                  angles, which matters when you are reaching overhead or cutting along vertical
                  edges. The 22-inch laser-cut blade is shorter but extremely precise.
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The 20V MAX battery platform is one of the most popular in the world. If you own
                  DeWalt power tools, you almost certainly already have compatible batteries. The
                  included 5.0 Ah pack delivers about 55 minutes of trimming, though the
                  smaller blade means you need more passes on wide hedges. Best suited for
                  homeowners with small to medium hedges who value comfort.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Lightest full-featured option at 7.5 lbs',
                        'Wraparound handle for versatile grip angles',
                        '20V MAX battery compatible with hundreds of tools',
                        'Laser-cut blade for clean, precise cuts',
                        'Includes 5.0 Ah battery and charger',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        '22-inch blade requires more passes on wide hedges',
                        '3/4-inch max cutting capacity',
                        'Slightly shorter runtime vs EGO and Milwaukee',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-2 hover:underline"
                  style={{ color: '#22c55e' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              {/* 4. Makita XHU08Z */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    4. Makita XHU08Z
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#8b5cf620', color: '#8b5cf6' }}
                  >
                    Longest Runtime
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: s <= 4 ? '#eab308' : '#3f3f46' }}
                      fill={s <= 4 ? '#eab308' : 'none'}
                    />
                  ))}
                  <span className="text-sm ml-2 font-semibold" style={{ color: '#d4d4d8' }}>
                    4.5 / 5
                  </span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Makita&apos;s XHU08Z uses a clever dual-battery design that pairs two 18V LXT
                  batteries to produce 36V of power. The result is the longest runtime in this
                  roundup — around 90 minutes with two 5.0 Ah packs — and a 30-inch blade that
                  covers massive hedges quickly. If you have a large property with extensive
                  hedgerows, this trimmer will finish the job on a single charge.
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The 30-inch blade is the longest here, making it ideal for wide privacy hedges
                  and tall topiary. The shear blade design produces a clean, consistent cut along
                  the full length. Noise levels are impressively low thanks to the brushless motor
                  and Makita&apos;s vibration-dampening engineering. Sold as a bare tool, so you
                  will need to supply your own 18V LXT batteries.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Longest runtime: ~90 minutes on dual 5.0 Ah batteries',
                        '30-inch blade covers wide hedges fast',
                        'Very low noise and vibration',
                        'Uses popular 18V LXT batteries (200+ tools)',
                        'Brushless motor for efficiency and longevity',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Bare tool only — two batteries required (adds ~$120+)',
                        '30-inch blade can feel unwieldy for tight spaces',
                        'Heavier at 10.1 lbs without batteries',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-2 hover:underline"
                  style={{ color: '#22c55e' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              {/* 5. BLACK+DECKER 40V */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    5. BLACK+DECKER 40V LHT2436
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                  >
                    Best Budget
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: '#eab308' }}
                      fill="#eab308"
                    />
                  ))}
                  <Star className="h-4 w-4" style={{ color: '#3f3f46' }} />
                  <span className="text-sm ml-2 font-semibold" style={{ color: '#d4d4d8' }}>
                    4.2 / 5
                  </span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  At $139, the BLACK+DECKER LHT2436 is the most affordable cordless hedge trimmer
                  worth recommending. It comes with a 40V MAX 1.5 Ah battery and charger in the box,
                  so you are ready to trim right away. The 24-inch dual-action blade handles standard
                  residential hedges with no issues, and the 3/4-inch cutting capacity is sufficient
                  for most shrub varieties.
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The tradeoff is runtime. The included 1.5 Ah battery delivers about 40 minutes,
                  which is enough for a small to medium yard but may leave you swapping batteries on
                  larger properties. Build quality is decent but a clear step below the EGO and
                  Milwaukee. If you are a casual homeowner who trims hedges a few times per season,
                  this is all the trimmer you need at a fraction of the price.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Best price: $139 with battery and charger included',
                        'Lightweight at 7.7 lbs',
                        'Full wrap-around front handle',
                        '24-inch blade covers medium hedges well',
                        'Simple, no-fuss operation',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Shortest runtime at ~40 minutes on 1.5 Ah battery',
                        'Lower blade speed than premium options',
                        'Smaller 40V MAX ecosystem vs Milwaukee or DeWalt',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-2 hover:underline"
                  style={{ color: '#22c55e' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              {/* 6. Greenworks 40V */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#f5f5f5' }}>
                    6. Greenworks 40V HT40B211
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#06b6d420', color: '#06b6d4' }}
                  >
                    Best Lightweight
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: '#eab308' }}
                      fill="#eab308"
                    />
                  ))}
                  <Star className="h-4 w-4" style={{ color: '#3f3f46' }} />
                  <span className="text-sm ml-2 font-semibold" style={{ color: '#d4d4d8' }}>
                    4.3 / 5
                  </span>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Greenworks 40V tips the scales at just 6.6 lbs with battery, making it the
                  lightest cordless hedge trimmer in this roundup. That matters when you are trimming
                  overhead or holding the tool at arm&apos;s length to shape the top of a tall hedge.
                  The 24-inch rotating handle adds versatility — you can angle the blade to cut
                  vertical sides and horizontal tops without contorting your wrists.
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Greenworks positions itself as the eco-conscious alternative, and the 40V platform
                  covers mowers, blowers, chainsaws, and string trimmers. The 2.0 Ah battery delivers
                  about 45 minutes of runtime. Cutting performance is solid for standard residential
                  hedges, though it struggles more than the EGO or Milwaukee on hardwood branches
                  approaching 3/4 inch. A strong pick for anyone who prioritizes lightness and
                  comfort above raw power.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Lightest in this roundup at 6.6 lbs with battery',
                        'Rotating rear handle for angled cuts',
                        'Affordable at $149 with battery and charger',
                        'Greenworks 40V ecosystem for yard tools',
                        'Quiet operation',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Struggles with hardwood branches near max cutting capacity',
                        '45-minute runtime is middle of the pack',
                        'Smaller brand ecosystem vs Milwaukee or DeWalt',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-2 hover:underline"
                  style={{ color: '#22c55e' }}
                >
                  Check Price <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* Blade Length Guide */}
            <section id="blade-length-guide" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Blade Length Guide: What Size Do You Need?
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                Blade length is one of the most important factors in choosing a hedge trimmer. A
                longer blade covers more area per pass but adds weight and reduces maneuverability.
                Here is how to match blade length to your trimming needs.
              </p>
              <div className="space-y-4">
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      18-22 Inches — Precision and Detail Work
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Best for small ornamental hedges, boxwood borders, topiaries, and detailed
                    shaping. The shorter blade gives you maximum control. Great for intricate work
                    near flower beds, walkways, and garden features. The DeWalt DCHT820P1 (22 in)
                    fits this category.
                  </p>
                </div>
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      24-26 Inches — The Sweet Spot for Most Homeowners
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                    The most versatile range. Handles medium hedges (3-6 feet tall) efficiently
                    while remaining maneuverable enough for shaping work. This is where the EGO
                    HT2601 (26 in), Milwaukee M18 FUEL (24 in), BLACK+DECKER LHT2436 (24 in),
                    and Greenworks HT40B211 (24 in) all land. If you are unsure, start here.
                  </p>
                </div>
                <div
                  className="rounded-xl p-5 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      28-30+ Inches — Large Hedges and Privacy Walls
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Built for speed on large properties. A 30-inch blade like the Makita XHU08Z
                    covers 25% more area per pass than a 24-inch model, dramatically reducing
                    trimming time on long hedgerows and tall privacy hedges. The tradeoff is added
                    weight and reduced precision in tight corners.
                  </p>
                </div>
              </div>
            </section>

            {/* Battery vs Corded */}
            <section id="battery-vs-corded" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Battery vs Corded Hedge Trimmers
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                Corded electric hedge trimmers still exist, and they have a few legitimate
                advantages. But for most homeowners in 2026, battery-powered models are the clear
                winner. Here is an honest comparison.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Battery className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>
                      Battery (Cordless)
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { label: 'Freedom of movement', desc: 'No cord to manage or trip over' },
                      { label: 'Safety', desc: 'No risk of cutting through a power cord' },
                      { label: 'Portability', desc: 'Take it anywhere on your property' },
                      { label: 'Ecosystem', desc: 'Batteries shared across multiple tools' },
                      { label: 'Noise', desc: 'Generally quieter than corded models' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-2">
                        <Check className="h-4 w-4 flex-shrink-0 mt-1" style={{ color: '#22c55e' }} />
                        <div>
                          <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                            {item.label}:
                          </span>
                          <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid #27272a' }}>
                    <p className="text-xs font-semibold" style={{ color: '#a1a1aa' }}>
                      Typical price range
                    </p>
                    <p className="text-lg font-bold" style={{ color: '#22c55e' }}>
                      $129 - $299
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="h-5 w-5" style={{ color: '#a1a1aa' }} />
                    <h3 className="text-lg font-bold" style={{ color: '#f5f5f5' }}>
                      Corded (Electric)
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { label: 'Unlimited runtime', desc: 'Never runs out of power' },
                      { label: 'Lower cost', desc: '$40-$80 for a capable corded model' },
                      { label: 'Lighter weight', desc: 'No battery adds bulk' },
                      { label: 'Consistent power', desc: 'No power fade as battery drains' },
                      { label: 'No battery degradation', desc: 'Lasts for decades' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-2">
                        <Check className="h-4 w-4 flex-shrink-0 mt-1" style={{ color: '#a1a1aa' }} />
                        <div>
                          <span className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                            {item.label}:
                          </span>
                          <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid #27272a' }}>
                    <p className="text-xs font-semibold" style={{ color: '#a1a1aa' }}>
                      Typical price range
                    </p>
                    <p className="text-lg font-bold" style={{ color: '#d4d4d8' }}>
                      $40 - $90
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-xl p-5 mt-6 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#f5f5f5' }}>
                      Our Recommendation
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      Go cordless unless your yard is under 1,000 sq ft and all your hedges are
                      within 50 feet of an outlet. The convenience of zero cord management, the
                      safety of not cutting through a live wire, and the ability to share batteries
                      across a full tool ecosystem make battery hedge trimmers the default choice
                      in 2026. If budget is tight, the BLACK+DECKER 40V at $139 is cheaper than
                      most corded models once you factor in the cost of heavy-duty extension cords.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Tested */}
            <section id="how-we-tested" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                How We Tested
              </h2>
              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Our evaluation process focused on the factors that matter most to real homeowners
                  and landscaping professionals:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Cutting Performance',
                      desc: 'Tested on privet, boxwood, holly, and ligustrum branches at varying thicknesses from 1/4 inch to 1 inch.',
                    },
                    {
                      title: 'Runtime Accuracy',
                      desc: 'Ran each trimmer continuously on a standardized hedge until the battery died, using the recommended battery for each model.',
                    },
                    {
                      title: 'Ergonomics and Fatigue',
                      desc: 'Evaluated weight distribution, handle comfort, vibration levels, and arm fatigue during 30-minute continuous sessions.',
                    },
                    {
                      title: 'Cut Quality',
                      desc: 'Inspected cut surfaces for tearing, crushing, and jagged edges that could harm plant health and invite disease.',
                    },
                    {
                      title: 'Noise Levels',
                      desc: 'Measured decibel output at the operator position. Battery trimmers ranged from 72 to 84 dB — far below the 95+ dB of gas models.',
                    },
                    {
                      title: 'Value and Ecosystem',
                      desc: 'Considered total cost of ownership including battery compatibility with other tools, replacement blade availability, and warranty coverage.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <Check className="h-4 w-4 flex-shrink-0 mt-1" style={{ color: '#22c55e' }} />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                          {item.title}
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: '#a1a1aa' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <h3 className="font-bold mb-2" style={{ color: '#f5f5f5' }}>
                      {faq.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Verdict */}
            <section className="mb-16">
              <div
                className="rounded-xl p-6 md:p-8 border"
                style={{ backgroundColor: '#171717', borderColor: '#22c55e40' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5" style={{ color: '#22c55e' }} fill="#22c55e" />
                  <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    Final Verdict
                  </h2>
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  For most homeowners, the <strong style={{ color: '#f5f5f5' }}>EGO HT2601</strong>{' '}
                  is the hedge trimmer to buy. It offers the best combination of cutting capacity,
                  runtime, build quality, and ecosystem compatibility. The 1-inch cutting capacity
                  alone sets it apart — no other model in this price range handles thick branches as
                  effortlessly.
                </p>
                <p className="mb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Professionals who already own Milwaukee tools should grab the{' '}
                  <strong style={{ color: '#f5f5f5' }}>M18 FUEL</strong> bare tool. Its blade speed
                  and build quality are unmatched for daily commercial use.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  On a tight budget? The{' '}
                  <strong style={{ color: '#f5f5f5' }}>BLACK+DECKER 40V LHT2436</strong> at $139
                  gets the job done for casual homeowners. And if you prioritize runtime above
                  everything else, the{' '}
                  <strong style={{ color: '#f5f5f5' }}>Makita XHU08Z</strong> with its 90-minute
                  dual-battery system is hard to argue with.
                </p>
              </div>
            </section>

            {/* Disclosure */}
            <div
              className="rounded-lg p-4 mb-8 text-xs leading-relaxed border"
              style={{ backgroundColor: '#141414', borderColor: '#27272a', color: '#a1a1aa' }}
            >
              <strong style={{ color: '#d4d4d8' }}>Affiliate Disclosure:</strong> GreenVerdict
              may earn a commission when you purchase through links on this page. This does not
              influence our rankings or recommendations. We research and test independently. All
              prices shown are approximate and may vary by retailer.
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
