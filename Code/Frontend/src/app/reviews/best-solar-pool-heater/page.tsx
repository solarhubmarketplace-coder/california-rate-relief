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
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Star,
  Sun,
  X,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Best Solar Pool Heater 2026: Fafco vs Heliocol vs SunHeater — Complete Buyer\u2019s Guide',
  description:
    'Compare the best solar pool heaters and solar pool covers for 2026. In-depth reviews of Fafco Bear, Heliocol HC-40, SunHeater S120U, SmartPool S601P, and Sun2Solar covers. Sizing guide, DIY installation tips, and ROI payback analysis.',
  alternates: {
    canonical: '/reviews/best-solar-pool-heater',
  },
  openGraph: {
    title:
      'Best Solar Pool Heater 2026: Fafco vs Heliocol vs SunHeater',
    description:
      'Fafco Bear vs Heliocol HC-40 vs SunHeater S120U. Full specs, solar pool cover comparison, sizing calculator, and installation guide for 2026.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Solar Pool Heater 2026: Fafco vs Heliocol vs SunHeater — Complete Buyer\u2019s Guide',
  description:
    'Compare the best solar pool heaters and solar pool covers for 2026. In-depth reviews covering Fafco Bear, Heliocol HC-40, SunHeater S120U, SmartPool S601P, and Sun2Solar Blue Solar Cover with sizing guide, installation tips, and ROI analysis.',
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
    '@id': 'https://ratereliefca.com/reviews/best-solar-pool-heater',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a solar pool heater cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solar pool heaters range from $90 for a basic DIY kit like the SunHeater S120U to $3,000-$5,000 for a professionally installed system using premium panels like the Heliocol HC-40 or Fafco Bear. Most homeowners spend $2,000-$4,000 for a complete roof-mounted system with 4-6 panels, plumbing, and installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do solar pool heaters actually work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A properly sized solar pool heater can raise water temperature by 10-20 degrees Fahrenheit and extend your swim season by 2-4 months. In sunny climates like California, solar pool heaters are especially effective due to 250-300 sunny days per year. They work best when paired with a solar pool cover to retain heat overnight.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for a solar pool heater to pay for itself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A solar pool heater typically pays for itself in 1.5-3 years when replacing a gas heater, and 2-4 years when replacing an electric heat pump. Gas pool heaters cost $200-$400 per month to operate during swim season, while solar heaters have zero ongoing fuel costs. Over a 10-15 year lifespan, total savings range from $5,000 to $20,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a solar pool heater myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic ground-mounted systems like the SunHeater S120U and SmartPool S601P are designed for DIY installation and can be set up in 1-2 hours. Roof-mounted systems using Fafco Bear or Heliocol HC-40 panels typically require professional installation due to roof work, plumbing connections, and proper panel sizing. A roof-mounted DIY install is possible for handy homeowners but takes a full weekend.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a solar pool heater and a solar pool cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A solar pool heater actively circulates pool water through solar collector panels on your roof or ground rack, heating the water by 10-20 degrees F. A solar pool cover (also called a solar blanket) sits on the water surface to trap heat, reduce evaporation by up to 95%, and passively raise temperature by 5-8 degrees F. For best results, use both together. The cover retains the heat that the panels generate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many solar pool heater panels do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The general rule is that your solar collector area should equal 50-100% of your pool surface area. For a typical 15x30 foot pool (450 sq ft), you need 225-450 sq ft of solar panels. In warm climates like Southern California, 50-70% coverage is usually sufficient. In cooler areas like the Bay Area or Central Valley, aim for 75-100%. Each standard panel covers roughly 40-50 sq ft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do solar pool heaters work in winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solar pool heaters are seasonal in most regions. In Southern California they provide heating from March through November. In Northern California, the season is April through October. Most pool owners drain the system for winter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do solar pool heaters last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solar pool heater panels last 10-20 years. Polypropylene panels (Fafco, SunHeater) last 10-15 years. Individual-tube designs like Heliocol can last 15-20 years. Solar pool covers last 3-5 years.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  type: string;
  material: string;
  tempIncrease: string;
  warranty: string;
  installation: string;
  rating: number;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'Fafco Bear Solar Pool Heater',
    badge: 'Best Overall',
    price: '$350-$600/panel',
    type: 'Roof/Ground Panel',
    material: 'Polypropylene tubes',
    tempIncrease: '10-20\u00b0F',
    warranty: '10 years',
    installation: 'Professional recommended',
    rating: 4.5,
    affiliateLink: '#',
  },
  {
    name: 'SunHeater S120U',
    badge: 'Best Budget',
    price: '$90-$130',
    type: '2x20 ft Panels',
    material: 'Polypropylene',
    tempIncrease: '~10\u00b0F',
    warranty: '5 years',
    installation: 'DIY (1-2 hours)',
    rating: 4.3,
    affiliateLink: '#',
  },
  {
    name: 'Heliocol HC-40',
    badge: 'Best Premium',
    price: '$500-$800/panel',
    type: 'Roof/Ground Panel',
    material: 'Individual tubes',
    tempIncrease: '15-20\u00b0F',
    warranty: '15 years',
    installation: 'Professional recommended',
    rating: 4.6,
    affiliateLink: '#',
  },
  {
    name: 'SmartPool S601P',
    badge: 'Best Above Ground',
    price: '$200-$300',
    type: 'Dome Collector',
    material: 'Polypropylene dome',
    tempIncrease: '~10\u00b0F',
    warranty: '2 years',
    installation: 'DIY (1 hour)',
    rating: 4.2,
    affiliateLink: '#',
  },
  {
    name: 'Sun2Solar Blue Solar Cover',
    badge: 'Best Pool Cover',
    price: '$50-$150',
    type: 'Solar Blanket',
    material: '12-mil or 16-mil',
    tempIncrease: '5-8\u00b0F (passive)',
    warranty: '3-5 years',
    installation: 'None (lay on surface)',
    rating: 4.4,
    affiliateLink: '#',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.floor(rating)
              ? 'text-yellow-500 fill-yellow-500'
              : star <= rating
                ? 'text-yellow-500 fill-yellow-500/50'
                : 'text-yellow-500/30'
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-semibold" style={{ color: '#f5f5f5' }}>
        {rating}/5
      </span>
    </div>
  );
}

export default function BestSolarPoolHeater() {
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
      <main className="py-16" style={{ backgroundColor: '#0a0a0a' }}>
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
                Best Solar Pool Heater 2026: Fafco vs Heliocol vs SunHeater
              </h1>
              <p className="text-lg mb-4" style={{ color: '#a1a1aa' }}>
                Plus the best solar pool covers to lock in that free heat
              </p>
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
              <img src='https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop' alt='Solar pool heater' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* ========== OVERVIEW ========== */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Gas pool heaters run $200-$400/month during swim season. Electric heat pumps add
                $100-$200 to your bill. A solar pool heater eliminates those costs entirely using
                free energy from the sun. We compared the top solar pool heating systems and solar
                pool covers for 2026 -- from premium roof-mounted panels to budget DIY kits.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#a1a1aa' }}>
                In California, solar pool heaters are especially effective with 250-300 sunny days
                per year. Most pool owners can extend their swim season by 2-4 months and raise
                water temperature by 10-20&deg;F without spending a dime on fuel.
              </p>
            </div>

            {/* ========== QUICK PICKS ========== */}
            <div className="rounded-xl p-6 md:p-8 mb-12 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>Quick Picks: Our Top Recommendations</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Heliocol HC-40 — Best Premium Solar Pool Heater
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Highest efficiency, individual tube replacement, 15-year warranty. The gold standard for professional installations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Fafco Bear — Best Overall Value
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Most popular solar pool heater in the US. Proven design, 10-year warranty, 10-20&deg;F increase, strong dealer network.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      SunHeater S120U — Best Budget / DIY Pick
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Under $130 for 2x20 ft panels, installs in an hour. Test solar heating before committing to a roof system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== COMPARISON TABLE ========== */}
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
                          <div className="text-xs">{p.name}</div>
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
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Type</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.type}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Material</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.material}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Temp Increase</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.tempIncrease}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Warranty</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.warranty}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Installation</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.installation}</td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Rating</td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>{p.rating}/5</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== HOW SOLAR POOL HEATING WORKS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Sun className="h-6 w-6 text-primary" />
                How Solar Pool Heating Works
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="leading-relaxed mb-4" style={{ color: '#a1a1aa' }}>
                  Solar pool heaters are surprisingly simple. Your existing pool pump pushes water
                  through solar collector panels on your roof or a ground rack. The sun heats the
                  water as it flows through, and warm water returns to your pool. No electricity,
                  no gas, no extra moving parts.
                </p>
                <div className="rounded-xl p-6 mb-6 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f5f5' }}>The Heating Cycle</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xs">1</span>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}><strong style={{ color: '#f5f5f5' }}>Pump pushes water</strong> through diverter valve to collectors</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xs">2</span>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}><strong style={{ color: '#f5f5f5' }}>Water absorbs heat</strong> flowing through collector tubes/panels</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xs">3</span>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}><strong style={{ color: '#f5f5f5' }}>Warm water returns</strong> to pool, 5-10&deg;F warmer per pass</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xs">4</span>
                      <p className="text-sm" style={{ color: '#a1a1aa' }}><strong style={{ color: '#f5f5f5' }}>Auto-controller</strong> manages flow based on panel vs pool temp</p>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Brand differences come down to panel material, tube design, flow rate efficiency,
                  and durability. Premium panels extract more heat per square foot and last longer.
                </p>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. Fafco Bear */}
            <section className="mb-14">
              <div className="border-l-4 border-yellow-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-yellow-300 bg-yellow-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Overall
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  1. Fafco Bear Solar Pool Heater
                </h2>
                <StarRating rating={4.5} />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$350-$600</p>
                  <p className="text-xs" style={{ color: '#a1a1aa' }}>per panel</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Temp Boost</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>10-20&deg;F</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Material</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>Polypropylene</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Warranty</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>10 Years</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Fafco has been making solar pool heaters since 1969, and the Bear is their flagship
                  residential panel. It uses a polypropylene tube-on-web design that resists UV
                  degradation, pool chemicals, and freeze damage. The Bear is the most widely
                  installed solar pool heater in the United States.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Each panel covers roughly 32-48 sq ft of collector area. For a standard 15x30 pool,
                  you need 6-10 panels depending on climate. The combination of proven performance,
                  10-year warranty, widespread dealer availability, and mid-range pricing makes this
                  the sweet spot for most homeowners.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Most widely installed solar pool heater in the US</li>
                    <li>Proven 50+ year track record from Fafco</li>
                    <li>10-year warranty on panels</li>
                    <li>Resistant to pool chemicals, UV, and freezing</li>
                    <li>Strong dealer/installer network nationwide</li>
                    <li>10-20&deg;F temperature increase when properly sized</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Professional installation recommended ($1,500-$2,500 labor)</li>
                    <li>Tube-on-web design harder to repair than individual tubes</li>
                    <li>Requires significant roof space (200-400 sq ft)</li>
                    <li>Not ideal for shaded roofs</li>
                  </ul>
                </div>
              </div>

              <BuyButton
                productKey="fafco-bear-solar-pool-heater"
                source="best-solar-pool-heater"
                variant="primary"
                label="Check Price — Fafco Bear Solar Pool Heater"
                showPrice
              />
            </section>

            {/* 2. SunHeater S120U */}
            <section className="mb-14">
              <div className="border-l-4 border-blue-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-blue-300 bg-blue-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Budget
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  2. SunHeater S120U
                </h2>
                <StarRating rating={4.3} />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$90-$130</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Size</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>2x20 ft</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Temp Boost</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>~10&deg;F</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Install</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>DIY</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The SunHeater S120U is the entry point into solar pool heating and one of the
                  best-selling units on Amazon. For under $130, you get two 2x20 ft polypropylene
                  web panels that lay flat on the ground, a roof, or a fence. Connect to your
                  pool&apos;s return line with the included adapters and let your existing pump do the work.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The S120U provides about 40 sq ft of collector area -- enough to warm a small
                  above-ground pool or supplement an in-ground pool. Buy multiple units for bigger
                  pools. The real value is as a test run: experience solar pool heating for under $130
                  before committing to a $3,000-$5,000 roof system.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Incredibly affordable at $90-$130</li>
                    <li>True DIY install in 1-2 hours, no tools needed</li>
                    <li>Works with any existing pool pump</li>
                    <li>Can stack multiple units for larger pools</li>
                    <li>Great for testing solar heating concept</li>
                    <li>Lightweight and easy to store off-season</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Only 40 sq ft of collector area per kit</li>
                    <li>Not enough for large in-ground pools alone</li>
                    <li>Ground placement can be a tripping hazard</li>
                    <li>Shorter lifespan than roof-mounted panels</li>
                    <li>Hose connections can leak if not secured</li>
                  </ul>
                </div>
              </div>

              <BuyButton
                productKey="sunheater-s120u"
                source="best-solar-pool-heater"
                variant="primary"
                label="Check Price — SunHeater S120U"
                showPrice
              />
            </section>

            {/* 3. Heliocol HC-40 */}
            <section className="mb-14">
              <div className="border-l-4 border-purple-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Premium
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  3. Heliocol HC-40
                </h2>
                <StarRating rating={4.6} />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$500-$800</p>
                  <p className="text-xs" style={{ color: '#a1a1aa' }}>per panel</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Temp Boost</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>15-20&deg;F</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Design</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>Individual Tubes</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Warranty</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>15 Years</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Heliocol HC-40 is the panel professionals reach for when performance and longevity
                  matter most. Its individual tube design means each tube can be replaced separately --
                  a fallen branch does not require swapping an entire $500-$800 panel.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The ovalized tube shape maximizes water-to-sun contact area, delivering the highest
                  thermal efficiency of any unglazed solar pool panel. Heliocol was the official solar
                  pool heating provider for the 2000 and 2004 Olympic Games. The 15-year warranty is
                  the longest in the industry, a major edge over Fafco&apos;s 10-year coverage.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Highest efficiency unglazed solar pool panel</li>
                    <li>Individual tube replacement (no full panel swap)</li>
                    <li>15-year warranty, longest in the industry</li>
                    <li>Olympic-proven technology</li>
                    <li>Ovalized tube design maximizes heat absorption</li>
                    <li>Works well in both warm and cooler climates</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Most expensive option at $500-$800 per panel</li>
                    <li>Professional installation required</li>
                    <li>Total system cost often $4,000-$6,000+</li>
                    <li>Limited direct-to-consumer availability</li>
                    <li>Overkill for small or above-ground pools</li>
                  </ul>
                </div>
              </div>

              <BuyButton
                productKey="heliocol-hc-40"
                source="best-solar-pool-heater"
                variant="primary"
                label="Check Price — Heliocol HC-40"
                showPrice
              />
            </section>

            {/* 4. SmartPool S601P */}
            <section className="mb-14">
              <div className="border-l-4 border-cyan-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best for Above Ground
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  4. SmartPool S601P SunGrabber
                </h2>
                <StarRating rating={4.2} />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$200-$300</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Design</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>Dome</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Temp Boost</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>~10&deg;F</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Install</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>DIY</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Instead of flat panels, the SmartPool S601P uses a compact dome that sits on the
                  ground. Water flows through the solar-heated chamber and returns warmer. It connects
                  directly to standard above-ground pool pump fittings -- set the dome in a sunny spot,
                  connect two hoses, and turn on your pump. Add multiple domes for faster heating.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The ~10&deg;F temperature boost is modest but consistent and requires zero effort
                  once installed. For above-ground pool owners who want warmer water without an
                  electric heater, the SunGrabber is hard to beat at this price.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Designed specifically for above-ground pools</li>
                    <li>Compact dome takes minimal ground space</li>
                    <li>1-hour DIY installation, no tools needed</li>
                    <li>Works with any standard pool pump</li>
                    <li>Can connect multiple domes for faster heating</li>
                    <li>No roof mounting required</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Only 2-year warranty</li>
                    <li>Not efficient enough for large in-ground pools</li>
                    <li>Dome can be an eyesore in the yard</li>
                    <li>Less heat output per dollar than flat panels</li>
                    <li>Needs full sun placement to work effectively</li>
                  </ul>
                </div>
              </div>

              <BuyButton
                productKey="smartpool-s601p-sungrabber"
                source="best-solar-pool-heater"
                variant="primary"
                label="Check Price — SmartPool S601P SunGrabber"
                showPrice
              />
            </section>

            {/* 5. Sun2Solar Blue Solar Cover */}
            <section className="mb-14">
              <div className="border-l-4 border-emerald-400 pl-6 mb-6">
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Pool Cover
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  5. Sun2Solar Blue Solar Cover
                </h2>
                <StarRating rating={4.4} />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$50-$150</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Thickness</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>12 or 16 mil</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Temp Boost</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>5-8&deg;F</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Evaporation</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>-95%</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Sun2Solar Blue Solar Cover floats on your pool surface, trapping heat and reducing evaporation by up to 95%. Without a cover, 70% of heat escapes overnight -- a $50-$150 cover effectively doubles any heater&apos;s impact.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Incredibly affordable at $50-$150</li>
                    <li>Reduces evaporation by up to 95%</li>
                    <li>Passive 5-8&deg;F temperature increase</li>
                    <li>Reduces chemical usage 35-60%</li>
                    <li>No installation needed, just lay on water</li>
                    <li>Multiplies effectiveness of any solar heater</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Must be removed before swimming</li>
                    <li>Heavy and awkward to handle when wet</li>
                    <li>Bubbles degrade in 3-5 years from UV exposure</li>
                    <li>Needs a cover reel for large pools ($100-$300)</li>
                    <li>Can promote algae if water chemistry is off</li>
                  </ul>
                </div>
              </div>

              <BuyButton
                productKey="sun2solar-blue-solar-cover"
                source="best-solar-pool-heater"
                variant="primary"
                label="Check Price — Sun2Solar Blue Solar Cover"
                showPrice
              />
            </section>

            {/* ========== SOLAR HEATER VS HEAT PUMP VS GAS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 text-primary" />
                Solar Pool Heater vs Heat Pump vs Gas Heater
              </h2>
              <div className="mb-4" />
              <div className="overflow-x-auto -mx-4 px-4 mb-6">
                <table className="w-full min-w-[700px] border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Factor</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Solar Heater</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Heat Pump</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Gas Heater</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Upfront Cost</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$2,000-$5,000</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$2,500-$5,000</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$1,500-$3,500</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Monthly Operating Cost</td>
                      <td className="p-3" style={{ color: '#4ade80' }}>$0</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$100-$200</td>
                      <td className="p-3" style={{ color: '#fca5a5' }}>$200-$400</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Temp Increase</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>10-20&deg;F</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>10-15&deg;F</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Any (unlimited)</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Heating Speed</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>1-3 days</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>24-48 hours</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>6-12 hours</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Lifespan</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>10-20 years</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>10-15 years</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>5-10 years</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Best Climate</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Sunny (CA, AZ, FL, TX)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Moderate (40&deg;F+)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>Any climate</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>10-Year Total Cost</td>
                      <td className="p-3" style={{ color: '#4ade80' }}>$2,000-$5,000</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$8,500-$17,000</td>
                      <td className="p-3" style={{ color: '#fca5a5' }}>$13,500-$27,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Choose solar</strong> for sunny climates with zero operating costs.
                <strong style={{ color: '#f5f5f5' }}> Heat pump</strong> for year-round heating in cooler areas.
                <strong style={{ color: '#f5f5f5' }}> Gas</strong> only for rapid on-demand heating (vacation rentals, weekend-only pools).
                For California, solar is the clear winner.
              </p>
            </section>

            {/* ========== SOLAR POOL COVERS SECTION ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Shield className="h-6 w-6 text-primary" />
                Solar Pool Covers: The Essential Companion
              </h2>
              <div className="prose prose-slate max-w-none mb-6">

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <th className="text-left p-3 font-semibold border-b" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Thickness</th>
                        <th className="text-left p-3 font-semibold border-b" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Lifespan</th>
                        <th className="text-left p-3 font-semibold border-b" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b" style={{ borderColor: '#27272a' }}>
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>8-mil</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>1-2 seasons</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>Budget testing, temporary use</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                        <td className="p-3 font-medium" style={{ color: '#4ade80' }}>12-mil</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>3-4 seasons</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>Most pool owners (our pick)</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: '#27272a' }}>
                        <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>16-mil</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>4-5+ seasons</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>Permanent setup with cover reel</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  <strong style={{ color: '#f5f5f5' }}>Blue vs clear:</strong> Blue covers balance heat absorption with UV resistance
                  and are the better choice for most pools. Clear covers heat slightly faster during
                  the day but degrade sooner and promote algae. <strong style={{ color: '#f5f5f5' }}>Liquid solar covers</strong> are
                  a no-effort alternative (biodegradable oils that reduce evaporation ~40-50%) but are
                  less effective than a physical blanket.
                </p>
              </div>
            </section>

            {/* ========== SIZING GUIDE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Calendar className="h-6 w-6 text-primary" />
                Sizing Guide: How Many Panels Do You Need?
              </h2>
              <div className="mb-4" />

              <div className="rounded-xl p-6 mb-6 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#f5f5f5' }}>The 50-100% Rule</h3>
                <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>
                  Your total solar collector area should equal 50-100% of your pool&apos;s surface area.
                  Quick reference for common pool sizes:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr style={{ backgroundColor: '#0a0a0a' }}>
                        <th className="text-left p-3 font-semibold border-b" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Pool Size</th>
                        <th className="text-left p-3 font-semibold border-b" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Warm Climate (50-70%)</th>
                        <th className="text-left p-3 font-semibold border-b" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Cool Climate (75-100%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b" style={{ borderColor: '#27272a' }}>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>12x24 ft (288 sq ft)</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>3-5 panels</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>5-7 panels</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#0a0a0a' }}>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>15x30 ft (450 sq ft)</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>5-8 panels</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>8-11 panels</td>
                      </tr>
                      <tr className="border-b" style={{ borderColor: '#27272a' }}>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>20x40 ft (800 sq ft)</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>9-14 panels</td>
                        <td className="p-3" style={{ color: '#a1a1aa' }}>14-20 panels</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-3" style={{ color: '#71717a' }}>
                  Panel counts assume ~40-48 sq ft per standard panel (Fafco Bear or Heliocol HC-40 size).
                </p>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Sizing factors:</strong> South-facing roof = fewer panels needed. Shade/wind = more.
                A solar cover reduces required collector area by preventing overnight loss.
                <strong style={{ color: '#f5f5f5' }}> California:</strong> SoCal/Central Valley/IE = warm climate (50-70%). Bay Area/coast = cool climate (75-100%).
              </p>
            </section>

            {/* ========== INSTALLATION: DIY VS PRO ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Zap className="h-6 w-6 text-primary" />
                Installation: DIY vs Professional
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <CheckCircle className="h-5 w-5 text-primary" /> DIY
                  </h3>
                  <p className="text-xs mb-2" style={{ color: '#a1a1aa' }}><strong style={{ color: '#f5f5f5' }}>Best for:</strong> SunHeater S120U, SmartPool S601P, covers</p>
                  <ul className="space-y-1 text-sm" style={{ color: '#a1a1aa' }}>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />No roof work, 1-2 hour install</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />$90-$300 total, no permits needed</li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#f87171' }} />Limited capacity per unit</li>
                  </ul>
                </div>
                <div className="rounded-xl p-5 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                    <Shield className="h-5 w-5 text-primary" /> Professional
                  </h3>
                  <p className="text-xs mb-2" style={{ color: '#a1a1aa' }}><strong style={{ color: '#f5f5f5' }}>Best for:</strong> Fafco Bear, Heliocol HC-40 (roof-mounted)</p>
                  <ul className="space-y-1 text-sm" style={{ color: '#a1a1aa' }}>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Proper roof mounting + waterproof seals</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Optimized sizing + auto controller</li>
                    <li className="flex items-start gap-2"><DollarSign className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#fbbf24' }} />$3,000-$6,000 total installed</li>
                  </ul>
                </div>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: '#a1a1aa' }}>
                <strong style={{ color: '#f5f5f5' }}>Our take:</strong> South-facing roof with good sun? Go pro with Fafco or Heliocol.
                Want to test the concept first? Start DIY under $300 and upgrade later. Either way, add a solar cover.
              </p>
            </section>

            {/* ========== ROI / PAYBACK ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <DollarSign className="h-6 w-6 text-primary" />
                ROI and Payback Analysis
              </h2>
              <div className="mb-4" />

              <div className="overflow-x-auto -mx-4 px-4 mb-6">
                <table className="w-full min-w-[600px] border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Scenario</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Annual Savings</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Solar Cost</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>Payback</th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>15-Yr Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Replacing Gas</td>
                      <td className="p-3" style={{ color: '#4ade80' }}>$1,200-$2,400</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$3,000-$5,000</td>
                      <td className="p-3" style={{ color: '#4ade80' }}>1.5-3 yrs</td>
                      <td className="p-3" style={{ color: '#4ade80' }}>$13,000-$31,000</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Replacing Heat Pump</td>
                      <td className="p-3" style={{ color: '#fbbf24' }}>$600-$1,200</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$3,000-$5,000</td>
                      <td className="p-3" style={{ color: '#4ade80' }}>2.5-4 yrs</td>
                      <td className="p-3" style={{ color: '#4ade80' }}>$4,000-$13,000</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>New Install (no heater)</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>N/A</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>$3,000-$5,000</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>N/A</td>
                      <td className="p-3" style={{ color: '#4ade80' }}>+2-4 swim months/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                Over 15 years, a $4,000 solar system saves $10,000-$20,000 vs gas and $5,000-$12,000
                vs a heat pump. Add a $100 solar cover to maximize those savings.
              </p>
            </section>

            {/* ========== OVERALL PROS / CONS ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <Star className="h-6 w-6 text-primary" />
                Solar Pool Heating: Overall Pros and Cons
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#4ade80' }}>
                    <CheckCircle className="h-5 w-5" />
                    Advantages
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#86efac' }}>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" />Zero operating costs after installation</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" />10-20 year lifespan, minimal maintenance</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" />Extends swim season 2-4 months</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" />No emissions, no noise, no fuel</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" />Pays for itself in 1.5-4 years</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 flex-shrink-0 mt-0.5" />Budget DIY options under $150</li>
                  </ul>
                </div>
                <div className="rounded-xl p-6 border" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#f87171' }}>
                    <XCircle className="h-5 w-5" />
                    Drawbacks
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#fca5a5' }}>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" />Depends on sunlight, ineffective on cloudy days</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" />Slower than gas (1-3 days vs hours)</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" />Requires south-facing roof space</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" />Pro install adds $1,500-$2,500</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" />Seasonal in most regions</li>
                    <li className="flex items-start gap-2"><X className="h-4 w-4 flex-shrink-0 mt-0.5" />Cannot reach spa temps (100&deg;F+)</li>
                  </ul>
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
                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How much does a solar pool heater cost?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Solar pool heaters range from $90 for a basic DIY kit like the SunHeater S120U
                    to $3,000-$5,000 for a professionally installed system using premium panels like
                    the Heliocol HC-40 or Fafco Bear. Most homeowners spend $2,000-$4,000 for a
                    complete roof-mounted system with 4-6 panels, plumbing, and installation.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Do solar pool heaters actually work?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Yes. A properly sized solar pool heater can raise water temperature by 10-20
                    degrees Fahrenheit and extend your swim season by 2-4 months. In sunny climates
                    like California, solar pool heaters are especially effective due to 250-300
                    sunny days per year. They work best when paired with a solar pool cover to
                    retain heat overnight.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How long does it take for a solar pool heater to pay for itself?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    A solar pool heater typically pays for itself in 1.5-3 years when replacing a
                    gas heater, and 2-4 years when replacing an electric heat pump. Gas pool heaters
                    cost $200-$400 per month to operate during swim season, while solar heaters have
                    zero ongoing fuel costs. Over a 10-15 year lifespan, total savings range from
                    $5,000 to $20,000.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Can I install a solar pool heater myself?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Basic ground-mounted systems like the SunHeater S120U and SmartPool S601P are
                    designed for DIY installation and can be set up in 1-2 hours. Roof-mounted
                    systems using Fafco Bear or Heliocol HC-40 panels typically require professional
                    installation due to roof work, plumbing connections, and proper panel sizing. A
                    roof-mounted DIY install is possible for handy homeowners but takes a full weekend.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    What is the difference between a solar pool heater and a solar pool cover?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    A solar pool heater actively circulates pool water through solar collector panels
                    on your roof or ground rack, heating the water by 10-20&deg;F. A solar pool cover
                    sits on the water surface to trap heat, reduce evaporation by up to 95%, and
                    passively raise temperature by 5-8&deg;F. For best results, use both together.
                    The cover retains the heat that the panels generate.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How many solar pool heater panels do I need?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    The general rule is that your solar collector area should equal 50-100% of your
                    pool surface area. For a typical 15x30 foot pool (450 sq ft), you need 225-450
                    sq ft of solar panels. In warm climates like Southern California, 50-70% coverage
                    is usually sufficient. In cooler areas like the Bay Area, aim for 75-100%. Each
                    standard panel covers roughly 40-50 sq ft.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Do solar pool heaters work in winter?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    They are seasonal. In Southern California, expect meaningful heating March through
                    November. In Northern California, April through October. Most owners drain the
                    system for winter to prevent freeze damage.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How long do solar pool heaters last?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Polypropylene panels (Fafco, SunHeater) last 10-15 years. Individual-tube designs
                    (Heliocol) last 15-20 years since damaged tubes can be replaced individually.
                    Solar pool covers last 3-5 years before bubbles degrade.
                  </div>
                </details>
              </div>
            </section>

            {/* ========== FINAL VERDICT ========== */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#f5f5f5' }}>
                <CheckCircle className="h-6 w-6 text-primary" />
                Final Verdict
              </h2>
              <div className="prose prose-slate max-w-none mb-6">
                <div className="space-y-4">
                  <div className="rounded-xl p-5 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <p className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                      <Star className="h-4 w-4 inline text-yellow-500 fill-yellow-500 mr-1" />
                      Best premium: <span className="text-primary">Heliocol HC-40</span> — Highest efficiency, individual tube replacement, 15-year warranty. Worth it for large in-ground pools.
                    </p>
                  </div>
                  <div className="rounded-xl p-5 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <p className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                      <Star className="h-4 w-4 inline text-yellow-500 fill-yellow-500 mr-1" />
                      Best overall: <span className="text-primary">Fafco Bear</span> — Industry standard, proven track record, nationwide dealer network, 10-year warranty. Our pick for most homeowners.
                    </p>
                  </div>
                  <div className="rounded-xl p-5 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <p className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                      <Star className="h-4 w-4 inline text-yellow-500 fill-yellow-500 mr-1" />
                      Best budget: <span className="text-primary">SunHeater S120U + Sun2Solar Cover</span> — Under $250 total. Great way to test solar heating before committing to a roof system.
                    </p>
                  </div>
                  <div className="rounded-xl p-5 border" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <p className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                      <Star className="h-4 w-4 inline text-yellow-500 fill-yellow-500 mr-1" />
                      Best above-ground: <span className="text-primary">SmartPool S601P</span> — Dome design, 1-hour DIY install, works with any pump.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed mt-4 text-sm" style={{ color: '#a1a1aa' }}>
                  Regardless of which heater you choose, <strong style={{ color: '#f5f5f5' }}>always add a solar pool cover</strong> -- $50-$150 to reduce heat loss by 95% and make every panel work harder.
                </p>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }} className="border rounded-xl p-6 md:p-8 text-center">
                <Sun className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Explore More Green Energy Reviews
                </h2>
                <p className="max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  See our full lineup of solar product reviews, portable power stations, smart home
                  energy systems, and more.
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
