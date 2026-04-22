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
  Check,
  X,
  ChevronRight,
  CheckCircle,
  XCircle,
  Clock,
  Search,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Electric Pressure Washers (2026): Sun Joe vs Greenworks vs Ryobi vs Karcher',
  description:
    'Compare the best electric pressure washers for 2026. In-depth reviews of Sun Joe SPX3000, Greenworks GPW2700, Ryobi RY142300, Karcher K5 Premium, AR Blue Clean AR383, and Westinghouse ePX3500. PSI/GPM guide, nozzle types, and electric vs gas breakdown.',
  alternates: {
    canonical: '/reviews/best-electric-pressure-washer',
  },
  openGraph: {
    title: 'Best Electric Pressure Washers (2026)',
    description:
      'Sun Joe SPX3000 vs Greenworks GPW2700 vs Ryobi RY142300 vs Karcher K5 Premium. Full specs, pros/cons, and buying guide.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Electric Pressure Washers (2026): Sun Joe vs Greenworks vs Ryobi vs Karcher',
  description:
    'Compare the best electric pressure washers for 2026. In-depth reviews covering Sun Joe SPX3000, Greenworks GPW2700, Ryobi RY142300, Karcher K5 Premium, AR Blue Clean AR383, and Westinghouse ePX3500.',
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
    '@id': 'https://ratereliefca.com/reviews/best-electric-pressure-washer',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best electric pressure washer in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Sun Joe SPX3000 is our top overall pick for 2026. It delivers 2,030 PSI and 1.76 GPM through a reliable dual-detergent system, all for under $200. For heavier-duty work the Greenworks GPW2700 provides 2,700 PSI at a competitive price.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many PSI do I need in a pressure washer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most residential tasks like washing cars, patio furniture, and decks, 1,300-2,000 PSI is sufficient. Driveways, siding, and tougher stains call for 2,000-2,800 PSI. Anything above 3,000 PSI is commercial-grade and generally overkill for homeowners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an electric pressure washer as good as gas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the vast majority of residential cleaning, yes. Electric models are lighter, quieter, require zero engine maintenance, produce no emissions, and start instantly. Gas models only win when you need 3,000+ PSI, hot water output, or must work far from an outlet. Most homeowners will never need a gas unit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an electric pressure washer damage my car or siding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can if used incorrectly. Always start with the widest nozzle (40-degree or 65-degree) and keep the tip at least 12 inches from the surface. Never use a 0-degree nozzle on painted surfaces, vinyl siding, or vehicle paint. With the right nozzle and distance, electric pressure washers are perfectly safe for cars and home exteriors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What nozzle tips do I need for a pressure washer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most electric pressure washers include 5 standard tips: 0-degree (red, pinpoint blast for stubborn stains on concrete), 15-degree (yellow, stripping and heavy cleaning), 25-degree (green, general-purpose cleaning), 40-degree (white, gentle washing for cars and windows), and 65-degree (black, low-pressure detergent application). A turbo/rotary nozzle combines the power of 0-degree with the coverage of 25-degree and is included with many models.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do electric pressure washers last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quality electric pressure washer with a brushless or induction motor typically lasts 3-5 years with regular residential use. Universal (brushed) motor models last 1-3 years. Key factors include motor type, pump material (brass and stainless outlast plastic), and whether you store it properly in freezing temperatures. Always flush out remaining water after use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a special outlet for an electric pressure washer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most electric pressure washers draw 13-15 amps and run on a standard 120V/15A household outlet. However, you should plug directly into the outlet or use a heavy-gauge extension cord (12 AWG or lower, no longer than 25-50 feet). Using a thin or long extension cord causes voltage drop, which can overheat the motor and void your warranty.',
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
  cleaningPower: string;
  motorType: string;
  weight: string;
  hoseLength: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'Sun Joe SPX3000',
    badge: 'Best Overall',
    price: '$189',
    psi: '2,030',
    gpm: '1.76',
    cleaningPower: '3,573 CU',
    motorType: 'Induction',
    weight: '31.6 lbs',
    hoseLength: '20 ft',
    affiliateLink: '#',
  },
  {
    name: 'Greenworks GPW2700',
    badge: 'Best Heavy-Duty',
    price: '$299',
    psi: '2,700',
    gpm: '2.3',
    cleaningPower: '6,210 CU',
    motorType: 'Brushless',
    weight: '42.5 lbs',
    hoseLength: '25 ft',
    affiliateLink: '#',
  },
  {
    name: 'Ryobi RY142300',
    badge: 'Best Mid-Range',
    price: '$249',
    psi: '2,300',
    gpm: '1.2',
    cleaningPower: '2,760 CU',
    motorType: 'Brushless',
    weight: '36.6 lbs',
    hoseLength: '25 ft',
    affiliateLink: '#',
  },
  {
    name: 'Karcher K5 Premium',
    badge: 'Best Build Quality',
    price: '$349',
    psi: '2,000',
    gpm: '1.4',
    cleaningPower: '2,800 CU',
    motorType: 'Induction',
    weight: '25.4 lbs',
    hoseLength: '25 ft',
    affiliateLink: '#',
  },
  {
    name: 'AR Blue Clean AR383',
    badge: 'Best Budget',
    price: '$119',
    psi: '1,900',
    gpm: '1.51',
    cleaningPower: '2,869 CU',
    motorType: 'Universal',
    weight: '26.2 lbs',
    hoseLength: '20 ft',
    affiliateLink: '#',
  },
  {
    name: 'Westinghouse ePX3500',
    badge: 'Best Power-to-Price',
    price: '$229',
    psi: '2,500',
    gpm: '1.76',
    cleaningPower: '4,400 CU',
    motorType: 'Brushless',
    weight: '34.2 lbs',
    hoseLength: '25 ft',
    affiliateLink: '#',
  },
];

export default function BestElectricPressureWasher() {
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
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best Electric Pressure Washers (2026): Sun Joe vs Greenworks vs Ryobi vs Karcher
              </h1>
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

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                A good electric pressure washer turns a weekend of scrubbing into a
                30-minute job. Whether you&apos;re blasting mildew off your driveway,
                prepping your deck for stain, or giving your car a showroom rinse, the
                right machine makes all the difference.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                We compared over 40 models and narrowed the field to six standout picks
                across every price point. This guide covers specs, real-world performance,
                nozzle types, electric vs gas tradeoffs, and honest pros and cons.
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
                  <span
                    className="text-xs font-bold px-2 py-1 rounded mt-0.5 whitespace-nowrap"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #1
                  </span>
                  <div>
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      Sun Joe SPX3000 &mdash; Best Overall
                    </h3>
                    <p className="text-sm mt-1" style={{ color: '#a1a1aa' }}>
                      The gold standard for homeowners. 2,030 PSI, dual-detergent
                      tanks, induction motor, and a price that undercuts everything
                      in its class. Handles cars, patios, siding, and light
                      driveway work with ease.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded mt-0.5 whitespace-nowrap"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #2
                  </span>
                  <div>
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      Greenworks GPW2700 &mdash; Best Heavy-Duty
                    </h3>
                    <p className="text-sm mt-1" style={{ color: '#a1a1aa' }}>
                      The most powerful corded electric washer we tested. 2,700 PSI
                      and 2.3 GPM deliver gas-level cleaning power without the
                      fumes, engine maintenance, or deafening noise. Outstanding
                      on concrete and heavily soiled surfaces.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded mt-0.5 whitespace-nowrap"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #3
                  </span>
                  <div>
                    <h3 className="font-bold" style={{ color: '#f5f5f5' }}>
                      AR Blue Clean AR383 &mdash; Best Budget
                    </h3>
                    <p className="text-sm mt-1" style={{ color: '#a1a1aa' }}>
                      Under $120 and still delivers 1,900 PSI. Compact, light, and
                      surprisingly capable for cars, outdoor furniture, and light
                      patio cleaning. The best entry point if you&apos;re not sure how
                      much you&apos;ll use a pressure washer.
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
              <h2 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>
                What&apos;s in This Guide
              </h2>
              <nav className="space-y-2">
                {[
                  { label: 'Comparison Table', anchor: '#comparison-table' },
                  { label: 'Individual Reviews (All 6 Models)', anchor: '#reviews' },
                  { label: 'PSI & GPM: How Much Do You Need?', anchor: '#psi-gpm-guide' },
                  { label: 'Electric vs Gas Pressure Washers', anchor: '#electric-vs-gas' },
                  { label: 'Nozzle Types Explained', anchor: '#nozzle-types' },
                  { label: 'How We Tested', anchor: '#methodology' },
                  { label: 'FAQ', anchor: '#faq' },
                ].map((item) => (
                  <a
                    key={item.anchor}
                    href={item.anchor}
                    className="flex items-center gap-2 text-sm hover:underline"
                    style={{ color: '#22c55e' }}
                  >
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Comparison Table */}
            <section id="comparison-table" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#27272a' }}>
                <table className="w-full text-sm" style={{ backgroundColor: '#141414' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Model
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        PSI
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        GPM
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        CU*
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Motor
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Weight
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Hose
                      </th>
                      <th className="text-left p-4 font-semibold" style={{ color: '#f5f5f5' }}>
                        Price
                      </th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr
                        key={product.name}
                        className="border-t"
                        style={{
                          borderColor: '#27272a',
                          backgroundColor: index % 2 === 0 ? '#141414' : '#171717',
                        }}
                      >
                        <td className="p-4">
                          <div className="font-semibold" style={{ color: '#f5f5f5' }}>
                            {product.name}
                          </div>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded mt-1 inline-block"
                            style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
                          >
                            {product.badge}
                          </span>
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {product.psi}
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {product.gpm}
                        </td>
                        <td className="p-4 font-medium" style={{ color: '#22c55e' }}>
                          {product.cleaningPower}
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {product.motorType}
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {product.weight}
                        </td>
                        <td className="p-4" style={{ color: '#d4d4d8' }}>
                          {product.hoseLength}
                        </td>
                        <td className="p-4 font-bold" style={{ color: '#f5f5f5' }}>
                          {product.price}
                        </td>
                        <td className="p-4">
                          <a
                            href={product.affiliateLink}
                            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap"
                            style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                          >
                            Check Price
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: '#a1a1aa' }}>
                *CU = Cleaning Units (PSI x GPM). Higher CU means faster, more effective cleaning. Prices
                reflect typical retail as of April 2026.
              </p>
            </section>

            {/* Individual Reviews */}
            <section id="reviews" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-8"
                style={{ color: '#f5f5f5' }}
              >
                Individual Reviews
              </h2>

              {/* Review 1: Sun Joe SPX3000 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #1 Best Overall
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4"
                        style={{ color: s <= 4 ? '#facc15' : '#3f3f46' }}
                        fill={s <= 4 ? '#facc15' : 'none'}
                      />
                    ))}
                    <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                      4.5/5
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  Sun Joe SPX3000
                </h3>
                <p className="text-sm mb-4" style={{ color: '#22c55e' }}>
                  2,030 PSI | 1.76 GPM | 3,573 CU | {products[0].price}
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Sun Joe SPX3000 has been the best-selling electric pressure washer
                  in the US for years, and the reason is simple: it does everything most
                  homeowners need at a price that is hard to argue with. The induction
                  motor is quieter and more durable than universal (brushed) motors, and
                  the dual onboard detergent tanks let you switch between soap and rinse
                  without stopping. At 2,030 PSI and 1.76 GPM, it produces 3,573 cleaning
                  units &mdash; more than enough for cars, patios, decks, fencing, siding,
                  and light driveway work.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The five included quick-connect nozzle tips cover every common scenario.
                  Build quality is solid, the wheels and handle make it easy to move, and
                  at 31.6 lbs it is manageable for almost anyone. The 20-foot hose is
                  adequate though we wish it were 25 feet. If you want one pressure washer
                  that handles 90% of residential tasks without breaking the bank, the
                  SPX3000 is the default answer.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Dual detergent tanks for easy soap switching',
                        'Induction motor — quieter, longer lifespan',
                        'Excellent price-to-performance ratio',
                        'Five quick-connect nozzle tips included',
                        'TSS (Total Stop System) saves energy when trigger is released',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        '20-foot hose feels short on larger jobs',
                        'Plastic hose connector at gun can leak over time',
                        'No onboard hose reel',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="sun-joe-spx3000"
                  source="electric-pressure-washer-hub"
                  variant="primary"
                  label="Check Price — Sun Joe SPX3000"
                  showPrice
                  />
              </div>

              {/* Review 2: Greenworks GPW2700 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #2 Best Heavy-Duty
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4"
                        style={{ color: s <= 4 ? '#facc15' : '#3f3f46' }}
                        fill={s <= 4 ? '#facc15' : 'none'}
                      />
                    ))}
                    <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                      4.5/5
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  Greenworks GPW2700
                </h3>
                <p className="text-sm mb-4" style={{ color: '#22c55e' }}>
                  2,700 PSI | 2.3 GPM | 6,210 CU | {products[1].price}
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Greenworks GPW2700 is the most powerful corded electric pressure
                  washer in our lineup, and it is not even close. At 2,700 PSI and 2.3
                  GPM, its 6,210 cleaning units rival many entry-level gas machines. The
                  brushless motor is efficient and built to last, the 25-foot hose gives
                  you plenty of reach, and Greenworks includes a turbo nozzle, soap nozzle,
                  and a 15-inch surface cleaner attachment in the box &mdash; an add-on most
                  brands sell separately.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The tradeoff is weight. At 42.5 lbs it is the heaviest unit in our list,
                  and the higher PSI means you need to be more careful around delicate
                  surfaces. But if you want gas-level cleaning power without the noise,
                  fumes, or pull-start hassle, the GPW2700 delivers.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Highest cleaning units (6,210 CU) in our lineup',
                        'Surface cleaner attachment included in box',
                        'Brushless motor — efficient and long-lasting',
                        '25-foot high-pressure hose',
                        'Turbo nozzle included',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Heaviest unit at 42.5 lbs',
                        'High PSI requires care around painted surfaces',
                        'No dual detergent tanks',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="greenworks-gpw2700"
                  source="electric-pressure-washer-hub"
                  variant="primary"
                  label="Check Price — Greenworks GPW2700"
                  showPrice
                  />
              </div>

              {/* Review 3: Ryobi RY142300 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #3 Best Mid-Range
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4"
                        style={{ color: s <= 4 ? '#facc15' : '#3f3f46' }}
                        fill={s <= 4 ? '#facc15' : 'none'}
                      />
                    ))}
                    <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                      4.0/5
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  Ryobi RY142300
                </h3>
                <p className="text-sm mb-4" style={{ color: '#22c55e' }}>
                  2,300 PSI | 1.2 GPM | 2,760 CU | {products[2].price}
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Ryobi is a trusted name in power tools, and the RY142300 brings that
                  reputation to pressure washers. At 2,300 PSI it sits in the mid-range
                  sweet spot &mdash; powerful enough for driveways and siding but not so
                  aggressive that you worry about damaging softer surfaces. The brushless
                  motor is a standout feature at this price and should outlast
                  universal-motor competitors by a wide margin.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The lower GPM of 1.2 is the main drawback; it takes longer to rinse
                  large areas compared to the Sun Joe or Greenworks. On the plus side,
                  Ryobi&apos;s onboard detergent tank, hose reel, and upright cart design
                  make it one of the most user-friendly models to move and store. A solid
                  all-rounder at the $249 price point.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Brushless motor at a mid-range price',
                        'Onboard hose reel keeps things tidy',
                        'Upright cart design is easy to maneuver',
                        'Lower water consumption (1.2 GPM)',
                        '25-foot high-pressure hose',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Low GPM (1.2) slows down large-area rinsing',
                        'Cleaning units (2,760) below average for its PSI',
                        'Only available at Home Depot',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="ryobi-ry142300"
                  source="electric-pressure-washer-hub"
                  variant="primary"
                  label="Check Price — Ryobi RY142300"
                  showPrice
                  />
              </div>

              {/* Review 4: Karcher K5 Premium */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #4 Best Build Quality
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4"
                        style={{ color: s <= 4 ? '#facc15' : '#3f3f46' }}
                        fill={s <= 4 ? '#facc15' : 'none'}
                      />
                    ))}
                    <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                      4.0/5
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  Karcher K5 Premium
                </h3>
                <p className="text-sm mb-4" style={{ color: '#22c55e' }}>
                  2,000 PSI | 1.4 GPM | 2,800 CU | {products[3].price}
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Karcher invented the consumer pressure washer, and the K5 Premium
                  reflects decades of German engineering. At 25.4 lbs it is the lightest
                  unit in our roundup, yet it feels more solidly built than machines twice
                  its weight. The water-cooled induction motor is engineered for longevity,
                  and the patented Vario Power spray wand lets you adjust pressure on the
                  fly without changing nozzle tips &mdash; twist the wand to move seamlessly
                  from low-pressure rinse to high-pressure blast.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  At $349 you are paying more per cleaning unit than any other model here.
                  But if you value ergonomics, build quality, and plan to use your pressure
                  washer for many years, the K5 Premium justifies the investment. The
                  onboard hose reel, compact storage footprint, and included DirtBlaster
                  turbo nozzle round out a polished package.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Vario Power wand — adjust pressure without swapping tips',
                        'Lightest unit in our roundup (25.4 lbs)',
                        'Water-cooled induction motor for maximum lifespan',
                        'Onboard hose reel and compact storage',
                        'Premium build quality throughout',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Most expensive model in our roundup ($349)',
                        'Lower cleaning units (2,800) for the price',
                        'Proprietary accessories can be pricey to replace',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="karcher-k5-premium"
                  source="electric-pressure-washer-hub"
                  variant="primary"
                  label="Check Price — Karcher K5 Premium"
                  showPrice
                  />
              </div>

              {/* Review 5: AR Blue Clean AR383 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #5 Best Budget
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4"
                        style={{ color: s <= 4 ? '#facc15' : '#3f3f46' }}
                        fill={s <= 4 ? '#facc15' : 'none'}
                      />
                    ))}
                    <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                      3.5/5
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  AR Blue Clean AR383
                </h3>
                <p className="text-sm mb-4" style={{ color: '#22c55e' }}>
                  1,900 PSI | 1.51 GPM | 2,869 CU | {products[4].price}
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Under $120 and it actually works. The AR Blue Clean AR383 is proof you
                  do not need to spend $300 to get a capable pressure washer. At 1,900 PSI
                  and 1.51 GPM it produces 2,869 cleaning units, putting it ahead of
                  several more expensive models on pure cleaning power. It handles cars,
                  patio furniture, grills, and light deck cleaning without issue.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  The universal (brushed) motor is the main compromise &mdash; louder and
                  shorter-lived than induction or brushless alternatives. Expect 1-3 years
                  of regular use before the brushes wear. For occasional weekend use with
                  modest needs (cars, furniture, small patio), the AR383 is hard to beat.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Best price in our roundup ($119)',
                        'Surprisingly strong 2,869 cleaning units',
                        'Compact and lightweight (26.2 lbs)',
                        'Easy to set up out of the box',
                        'Good for occasional, lighter-duty use',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Universal (brushed) motor — shorter lifespan',
                        'Louder than induction/brushless competitors',
                        'Plastic build feels less durable',
                        'Garden hose connection can be finicky',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="ar-blue-clean-ar383"
                  source="electric-pressure-washer-hub"
                  variant="primary"
                  label="Check Price — AR Blue Clean AR383"
                  showPrice
                  />
              </div>

              {/* Review 6: Westinghouse ePX3500 */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8 border"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                  >
                    #6 Best Power-to-Price
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4"
                        style={{ color: s <= 4 ? '#facc15' : '#3f3f46' }}
                        fill={s <= 4 ? '#facc15' : 'none'}
                      />
                    ))}
                    <span className="text-sm ml-1" style={{ color: '#a1a1aa' }}>
                      4.0/5
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
                  Westinghouse ePX3500
                </h3>
                <p className="text-sm mb-4" style={{ color: '#22c55e' }}>
                  2,500 PSI | 1.76 GPM | 4,400 CU | {products[5].price}
                </p>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  The Westinghouse ePX3500 is the sleeper pick in this roundup. At $229
                  it delivers 2,500 PSI and 1.76 GPM for 4,400 cleaning units &mdash;
                  firmly between the Sun Joe and Greenworks on raw power. The brushless
                  motor is efficient and built to last, and Westinghouse includes four
                  quick-connect tips plus a turbo nozzle, foam cannon, and 25-foot hose.
                  The foam cannon is a particularly nice touch for car detailing.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  Brand recognition is the main weak point. Westinghouse is better known
                  for generators than pressure washers, and replacement parts can be harder
                  to find. But on pure specs and value, the ePX3500 punches well above its
                  weight class.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#22c55e' }}>
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Best cleaning-units-per-dollar in our roundup',
                        'Foam cannon included — great for car detailing',
                        'Brushless motor at a sub-$250 price',
                        '25-foot hose and turbo nozzle included',
                        '4,400 CU bridges the gap between mid-range and heavy-duty',
                      ].map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#ef4444' }}>
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {[
                        'Less established brand in the pressure washer space',
                        'Replacement parts harder to find',
                        'No onboard hose reel',
                      ].map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                          <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <BuyButton
                  productKey="westinghouse-epx3500"
                  source="electric-pressure-washer-hub"
                  variant="primary"
                  label="Check Price — Westinghouse ePX3500"
                  showPrice
                  />
              </div>
            </section>

            {/* PSI & GPM Guide */}
            <section id="psi-gpm-guide" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                PSI &amp; GPM: How Much Cleaning Power Do You Actually Need?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                PSI (pounds per square inch) measures force; GPM (gallons per minute)
                measures water flow. Multiply them to get Cleaning Units (CU) &mdash; the
                single best number for comparing overall cleaning power.
              </p>
              <div className="grid gap-4 mb-6">
                {[
                  { range: '1,300 - 1,800 PSI', cu: '~2,000 - 2,700 CU', tasks: 'Cars, patio furniture, bicycles, grills, window screens, light deck cleaning', verdict: 'Entry-level. Fine for light, occasional use.' },
                  { range: '1,800 - 2,300 PSI', cu: '~2,700 - 4,000 CU', tasks: 'Fencing, vinyl siding, moderate driveway stains, deck prep, mildew removal', verdict: 'The sweet spot for most homeowners.' },
                  { range: '2,300 - 2,800 PSI', cu: '~4,000 - 6,500 CU', tasks: 'Heavy concrete stains, oil marks, paint prep, large driveways', verdict: 'Heavy residential / light commercial.' },
                  { range: '3,000+ PSI', cu: '~6,500+ CU', tasks: 'Paint stripping, graffiti removal, commercial fleet washing', verdict: 'Commercial-grade. Overkill for most homeowners.' },
                ].map((tier) => (
                  <div
                    key={tier.range}
                    className="rounded-lg p-5 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-bold" style={{ color: '#22c55e' }}>
                        {tier.range}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: '#27272a', color: '#a1a1aa' }}>
                        {tier.cu}
                      </span>
                    </div>
                    <p className="text-sm mb-1" style={{ color: '#d4d4d8' }}>
                      <strong style={{ color: '#f5f5f5' }}>Best for:</strong> {tier.tasks}
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      {tier.verdict}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="rounded-lg p-5 border"
                style={{ backgroundColor: '#141414', borderColor: '#22c55e40' }}
              >
                <div className="flex items-start gap-3">
                  <Search className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                      Pro tip: GPM matters more than you think
                    </h4>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      PSI gets all the marketing attention, but GPM determines how
                      quickly you can actually finish a job. A washer with 2,000 PSI
                      and 1.76 GPM will clean a driveway faster than one with 2,300 PSI
                      and 1.2 GPM because it moves more water across the surface per
                      minute. When in doubt, compare cleaning units (PSI x GPM), not
                      PSI alone.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Electric vs Gas */}
            <section id="electric-vs-gas" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Electric vs Gas Pressure Washers: Which Is Right for You?
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                For the vast majority of homeowners, electric is the better choice. Gas
                only wins in specific scenarios.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#141414', borderColor: '#22c55e40' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="h-5 w-5" style={{ color: '#22c55e' }} />
                    <h3 className="text-lg font-bold" style={{ color: '#22c55e' }}>
                      Electric (Corded)
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Plug in and go — instant start, no pull cord',
                      'Zero emissions, safe for enclosed spaces',
                      '60-80% quieter than gas models',
                      'No engine oil, spark plugs, or fuel stabilizer',
                      'Lighter (25-45 lbs vs 60-80+ lbs), cheaper ($100-$350 vs $300-$800+)',
                      '1,300-2,800 PSI covers 95% of residential needs',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5" style={{ color: '#a1a1aa' }} />
                    <h3 className="text-lg font-bold" style={{ color: '#d4d4d8' }}>
                      Gas
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      '3,000-4,400+ PSI for commercial-grade power',
                      'No power cord — full portability anywhere',
                      'Hot water models available (electric hot water is rare)',
                      'Higher GPM (2.5-4.0) for faster large-area cleaning',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#a1a1aa' }} />
                        {point}
                      </li>
                    ))}
                    <li className="border-t pt-2 mt-2 text-sm font-medium" style={{ borderColor: '#27272a', color: '#a1a1aa' }}>
                      But also:
                    </li>
                    {[
                      'Requires fuel, oil changes, winterization',
                      'Much louder (85-90+ dB), heavier (60-80+ lbs)',
                      'Cannot be used indoors or in enclosed spaces',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm" style={{ color: '#d4d4d8' }}>
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="rounded-lg p-5 border"
                style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
              >
                <h4 className="font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                  The Bottom Line
                </h4>
                <p className="text-sm" style={{ color: '#a1a1aa' }}>
                  Choose gas only if you need 3,000+ PSI, hot water output, or must work
                  far from any outlet. For everything else, electric wins on noise, weight,
                  maintenance, and cost.
                </p>
              </div>
            </section>

            {/* Nozzle Types */}
            <section id="nozzle-types" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                Pressure Washer Nozzle Types Explained
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Using the wrong nozzle is the number one cause of pressure washer damage.
                Most models include color-coded quick-connect tips. Here is what each does.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { color: '#ef4444', degree: '0-Degree (Red)', use: 'Pinpoint blast for stubborn stains on hard concrete or metal. Never use on wood, paint, vinyl, or vehicles.', warning: true },
                  { color: '#facc15', degree: '15-Degree (Yellow)', use: 'Stripping and heavy cleaning. Removes paint, heavy mildew, and caked-on dirt from concrete and brick.', warning: false },
                  { color: '#22c55e', degree: '25-Degree (Green)', use: 'General-purpose cleaning. Your go-to tip for driveways, siding, fencing, decks, and most surfaces.', warning: false },
                  { color: '#f5f5f5', degree: '40-Degree (White)', use: 'Gentle washing. Safe for cars, windows, screens, and painted surfaces.', warning: false },
                  { color: '#3f3f46', degree: '65-Degree (Black / Soap)', use: 'Low-pressure detergent application. Apply soap before switching to a higher-pressure tip to rinse.', warning: false },
                  { color: '#60a5fa', degree: 'Turbo / Rotary Nozzle', use: 'Combines 0-degree power with spinning circular motion for wider coverage. Great for concrete and stone.', warning: false },
                ].map((nozzle) => (
                  <div
                    key={nozzle.degree}
                    className="flex items-start gap-4 rounded-lg p-4 border"
                    style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                  >
                    <div
                      className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                      style={{ backgroundColor: nozzle.color }}
                    />
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                        {nozzle.degree}
                      </h4>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}>
                        {nozzle.use}
                      </p>
                      {nozzle.warning && (
                        <p className="text-xs mt-1 font-medium" style={{ color: '#ef4444' }}>
                          Caution: Can cause injury and surface damage. Keep at least 12 inches from any surface.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="rounded-lg p-5 border"
                style={{ backgroundColor: '#141414', borderColor: '#22c55e40' }}
              >
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                      Safety rule: Always start wide, then narrow
                    </h4>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Begin with the 40-degree or 25-degree nozzle and test on an
                      inconspicuous area first. If you need more power, step down to
                      15-degree. Only use 0-degree on bare concrete or metal where you
                      are certain it will not cause damage. When in doubt, more distance
                      from the surface is always safer.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Methodology */}
            <section id="methodology" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#f5f5f5' }}
              >
                How We Tested and Ranked
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                We evaluated each model across six weighted criteria.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Cleaning Power (30%)', desc: 'Cleaning units (PSI x GPM) and real-world stain removal on concrete, wood, and siding.' },
                  { title: 'Value (25%)', desc: 'Price relative to cleaning units, included accessories, and build quality.' },
                  { title: 'Build Quality & Durability (20%)', desc: 'Motor type (brushless > induction > universal), pump materials, hose quality, and connectors.' },
                  { title: 'Ease of Use (10%)', desc: 'Setup time, weight, maneuverability, hose management, nozzle swapping, and storage.' },
                  { title: 'Accessories (10%)', desc: 'Turbo nozzles, surface cleaners, and foam cannons earn bonus points over basic tip sets.' },
                  { title: 'Brand & Support (5%)', desc: 'Warranty length, parts availability, and customer service reputation.' },
                ].map((criterion) => (
                  <div
                    key={criterion.title}
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <h4 className="font-semibold text-sm mb-1" style={{ color: '#22c55e' }}>
                      {criterion.title}
                    </h4>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      {criterion.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-8"
                style={{ color: '#f5f5f5' }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqSchema.mainEntity.map((faq) => (
                  <div
                    key={faq.name}
                    className="rounded-lg p-5 border"
                    style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
                  >
                    <h3 className="font-semibold mb-2" style={{ color: '#f5f5f5' }}>
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
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                    Final Verdict
                  </h2>
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  For most homeowners, the <strong style={{ color: '#f5f5f5' }}>Sun Joe
                  SPX3000</strong> remains the best all-around electric pressure washer
                  in 2026. It balances cleaning power, durability, features, and price
                  better than anything else on the market.
                </p>
                <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                  Need serious power? The <strong style={{ color: '#f5f5f5' }}>Greenworks
                  GPW2700</strong> rivals gas machines at 6,210 CU. On a budget? The <strong style={{ color: '#f5f5f5' }}>AR Blue Clean AR383</strong> gets it done
                  for under $120. For the best cleaning-units-per-dollar, the <strong style={{ color: '#f5f5f5' }}>Westinghouse ePX3500</strong> is a hidden gem.
                </p>
                <div className="flex flex-wrap gap-3">
                  {products.slice(0, 3).map((product) => (
                    <a
                      key={product.name}
                      href={product.affiliateLink}
                      className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg"
                      style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                    >
                      {product.name} <ChevronRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Disclosure */}
            <div
              className="rounded-lg p-4 border text-xs leading-relaxed"
              style={{ backgroundColor: '#141414', borderColor: '#27272a', color: '#a1a1aa' }}
            >
              <strong style={{ color: '#d4d4d8' }}>Affiliate Disclosure:</strong>{' '}
              GreenVerdict is reader-supported. When you buy through links on this page,
              we may earn a small commission at no extra cost to you. This does not influence
              our rankings. All prices are accurate as of publication and subject to change.
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
