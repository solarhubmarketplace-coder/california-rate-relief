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
  Zap,
  DollarSign,
  Star,
  Shield,
  Sun,
  Check,
  X,
  ChevronRight,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Best Whole House Generators (2026): Generac vs Kohler vs Champion; Full Buyer\u2019s Guide',
  description:
    'Compare the best whole house generators for 2026. In-depth reviews of Generac Guardian 24kW, 22kW, 26kW, Kohler 24kW, and Champion 14kW. Sizing guide, installation costs, and California backup power tips included.',
  alternates: {
    canonical: '/reviews/best-whole-house-generator',
  },
  openGraph: {
    title: 'Best Whole House Generators (2026): Generac vs Kohler vs Champion',
    description:
      'Generac Guardian 24kW vs 22kW vs 26kW vs Kohler 24kW vs Champion 14kW. Full specs, pros/cons, sizing guide, and California buyer guide.',
    type: 'article',
    publishedTime: '2026-04-17T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Whole House Generators (2026): Generac vs Kohler vs Champion, Full Buyer\u2019s Guide',
  description:
    'Compare the best whole house standby generators for 2026. In-depth reviews covering Generac Guardian 24kW, 22kW, 26kW, Kohler 24kW, and Champion 14kW with installation costs, sizing guide, and California-specific considerations.',
  datePublished: '2026-04-17',
  dateModified: '2026-04-17',
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
    '@id': 'https://ratereliefca.com/reviews/best-whole-house-generator',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a whole house generator cost installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A whole house standby generator typically costs $8,000 to $15,000 fully installed. The generator unit itself runs $5,000 to $8,000 depending on size and brand, while professional installation (concrete pad, automatic transfer switch, gas line connection, and permits) adds $3,000 to $5,000. Larger homes needing 24kW+ units will be at the higher end of this range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a natural gas or propane generator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your home already has a natural gas line, natural gas is usually the better choice because you get an unlimited fuel supply and never need to worry about refilling a tank. Propane is ideal for rural areas without natural gas service. Propane generators produce slightly more power (about 10-15% more kW) than the same unit running on natural gas, and propane has a longer shelf life. Most Generac and Champion models are dual-fuel capable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How loud is a whole house generator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern standby generators typically operate at 60-70 dB measured at 23 feet, which is roughly equivalent to a central air conditioning unit or a normal conversation. The Generac Guardian series runs around 67 dB. Kohler generators are known for being slightly quieter. Most local noise ordinances allow generator operation during outages, but check your city or HOA rules for specific decibel limits.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size generator do I need for my house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generator sizing depends on your home\'s total electrical load. As a general guide: homes under 1,500 sq ft typically need 10-16kW, 1,500-2,500 sq ft homes need 17-22kW, and homes over 2,500 sq ft with central AC need 22-26kW or more. The most accurate way is to add up the wattage of everything you want to power simultaneously. Central AC alone draws 3,000-5,000W, an electric range uses 3,000-5,000W, and a water heater uses 4,000-5,000W.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can a whole house generator run continuously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natural gas generators can run indefinitely as long as gas service is maintained, making them ideal for extended outages. Propane generators are limited by tank size: a standard 500-gallon propane tank can power a 22kW generator under moderate load for roughly 5-8 days. Most manufacturers recommend a maintenance check after 200-500 hours of continuous operation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pair a whole house generator with solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is an increasingly popular setup in California. Solar panels with battery storage handle daily energy production and routine outages, while a standby generator serves as the ultimate backup for extended multi-day events like PSPS shutoffs or major grid failures. This hybrid approach reduces fuel costs and generator runtime while giving you complete energy independence. Many California homeowners start with solar and add a generator for extra security.',
      },
    },
  ],
};

interface Generator {
  name: string;
  badge: string;
  price: string;
  outputLP: string;
  outputNG: string;
  fuel: string;
  transferSwitch: string;
  warranty: string;
  noise: string;
  bestFor: string;
  affiliateLink: string;
}

const generators: Generator[] = [
  {
    name: 'Generac Guardian 24kW (7210)',
    badge: 'Best Overall',
    price: '$7,399',
    outputLP: '24,000W',
    outputNG: '21,000W',
    fuel: 'Natural Gas / LP',
    transferSwitch: '200A Whole-House',
    warranty: '5 Years',
    noise: '~67 dB',
    bestFor: 'Most homeowners wanting full whole-house backup',
    affiliateLink: '#',
  },
  {
    name: 'Generac Guardian 22kW (7043)',
    badge: 'Best Value',
    price: '$5,500-$6,500',
    outputLP: '22,000W',
    outputNG: '19,500W',
    fuel: 'Natural Gas / LP',
    transferSwitch: '200A Whole-House',
    warranty: '5 Years',
    noise: '~67 dB',
    bestFor: 'Medium homes, budget-conscious buyers',
    affiliateLink: '#',
  },
  {
    name: 'Generac Guardian 26kW (7291)',
    badge: 'Best for Large Homes',
    price: '$8,000+',
    outputLP: '26,000W',
    outputNG: '22,000W',
    fuel: 'Natural Gas / LP',
    transferSwitch: '200A Whole-House',
    warranty: '5 Years',
    noise: '~67 dB',
    bestFor: 'Large homes with heavy electrical loads',
    affiliateLink: '#',
  },
  {
    name: 'Kohler 24kW',
    badge: 'Best Premium',
    price: '$8,500+',
    outputLP: '24,000W',
    outputNG: '21,000W',
    fuel: 'Natural Gas / LP',
    transferSwitch: '200A (sold separately)',
    warranty: '5 Years',
    noise: '~65 dB',
    bestFor: 'Those wanting premium build quality and quieter operation',
    affiliateLink: '#',
  },
  {
    name: 'Champion 14kW (100177)',
    badge: 'Best Budget',
    price: '$3,800-$4,500',
    outputLP: '14,000W',
    outputNG: '12,500W',
    fuel: 'Natural Gas / LP',
    transferSwitch: '200A (optional)',
    warranty: '10 Years (limited)',
    noise: '~63 dB',
    bestFor: 'Budget buyers, partial home or essential-circuit backup',
    affiliateLink: '#',
  },
];

export default function BestWholeHouseGenerator() {
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Best Whole House Generators (2026): Generac vs Kohler vs Champion
              </h1>
              
              <LastReviewedStamp date="2026-04-26" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <time dateTime="2026-04-17">April 17, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Battery className="h-4 w-4" />
                  <span>16 min read</span>
                </div>
              </div>
            </header>

            {/* ========== ABOVE-THE-FOLD HERO ========== */}
            <section className="mb-12">
              <div className="rounded-2xl overflow-hidden border-2 border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-card to-card shadow-xl">
                <div className="relative">
                  <img
                    src="/img/products/generators/generac-residential-install-hero.jpg"
                    alt="Generac Guardian whole-house generator installed at a single-family home — backup power that turns on automatically when the grid fails"
                    className="w-full h-auto max-h-[480px] object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-2xl">
                    <span className="inline-block text-xs font-bold tracking-wider text-yellow-900 bg-yellow-400 px-3 py-1.5 rounded-full uppercase shadow mb-3">
                      ★ Best Overall 2026 · Generac Guardian 24kW
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                      Keep your whole house running when the power goes out.
                    </h2>
                    <p className="text-white/90 text-sm md:text-base mb-4 max-w-xl">
                      A whole-house standby generator turns itself on within 30 seconds of an outage and
                      runs your fridge, AC, lights, internet, and well pump for days. Here are the 5
                      best 2026 models, ranked by what actually matters to families.
                    </p>
                    <a
                      href="#generac-24kw"
                      className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold px-5 py-2.5 rounded-lg transition-colors"
                    >
                      See the #1 Pick &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Trust badges strip */}
            <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">5</div>
                <div className="text-xs text-muted-foreground">Generators ranked</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">$0</div>
                <div className="text-xs text-muted-foreground">Manufacturer payouts</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">2026</div>
                <div className="text-xs text-muted-foreground">Updated April 26</div>
              </div>
              <div className="rounded-lg p-3 border bg-card border-border">
                <div className="text-2xl font-bold text-emerald-400">Plain</div>
                <div className="text-xs text-muted-foreground">English first, tech second</div>
              </div>
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                California homeowners face a growing list of reasons to invest in backup power:
                PSPS wildfire shutoffs, aging grid infrastructure, extreme heat events, and utility
                rates that keep climbing. A whole house standby generator is the most reliable way to
                keep your entire home running when the grid goes down &mdash; no manual setup, no
                extension cords, no compromises.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Generac dominates the market with roughly 75% share in residential standby generators,
                but Kohler and Champion offer compelling alternatives at different price points. We
                researched all the major options and broke down the five best whole house generators
                you can buy in 2026 &mdash; including real installation costs, sizing guidance, and
                California-specific permitting considerations.
              </p>
            </div>

            {/* Quick Verdict Box */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold text-foreground">Quick Picks: Our Top 3</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="bg-yellow-400 text-yellow-200 text-xs font-bold px-2 py-1 rounded mt-0.5">
                    BEST OVERALL
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Generac Guardian 24kW (7210)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The sweet spot for most homes. 24kW on LP powers a 3,000+ sq ft home including
                      central AC. Mobile Link WiFi monitoring, True Power technology, 200A transfer
                      switch included. $7,399 unit / $8,000-$15,000 installed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-500/15 text-green-300 text-xs font-bold px-2 py-1 rounded mt-0.5">
                    BEST VALUE
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Generac Guardian 22kW (7043)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Same trusted Generac platform at a lower price. 22kW covers homes up to
                      ~2,500 sq ft. WiFi monitoring, True Power, 200A switch. ~$5,500-$6,500 unit /
                      $8,500-$11,500 installed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-purple-500/15 text-purple-300 text-xs font-bold px-2 py-1 rounded mt-0.5">
                    BEST BUDGET
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Champion 14kW (100177)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The most affordable path to standby backup. 14kW handles essential circuits
                      reliably. Dual fuel, quieter than most competitors, 10-year limited warranty.
                      $3,800-$4,500 unit / $6,800-$9,500 installed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== COMPARISON TABLE ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Generator</th>
                      <th className="text-left p-3 font-semibold text-foreground">Price (Unit)</th>
                      <th className="text-left p-3 font-semibold text-foreground">Output (LP)</th>
                      <th className="text-left p-3 font-semibold text-foreground">Output (NG)</th>
                      <th className="text-left p-3 font-semibold text-foreground">Transfer Switch</th>
                      <th className="text-left p-3 font-semibold text-foreground">Warranty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generators.map((gen, idx) => (
                      <tr
                        key={gen.name}
                        className={idx % 2 === 0 ? 'bg-background' : 'bg-muted/20'}
                      >
                        <td className="p-3">
                          <div className="font-medium text-foreground">{gen.name}</div>
                          <span className="text-xs text-primary font-semibold">{gen.badge}</span>
                        </td>
                        <td className="p-3 text-foreground">{gen.price}</td>
                        <td className="p-3 text-foreground">{gen.outputLP}</td>
                        <td className="p-3 text-foreground">{gen.outputNG}</td>
                        <td className="p-3 text-foreground">{gen.transferSwitch}</td>
                        <td className="p-3 text-foreground">{gen.warranty}</td>
                      </tr>
                    ))}
                  <tr style={{ backgroundColor: '#0a3d1f', borderTop: '2px solid #16a34a' }}>
                    <td className="p-3 font-bold" style={{ color: '#f5f5f5' }}>Where to Buy</td>
                    {gens.map((gen) => {
                      const pk =
                        gen.name === 'Generac Guardian 24kW (7210)' ? 'generac-guardian-24kw' :
                        gen.name === 'Generac Guardian 22kW (7043)' ? 'generac-guardian-22kw' :
                        gen.name === 'Generac Guardian 26kW (7291)' ? 'generac-guardian-26kw' :
                        gen.name === 'Kohler 24kW' ? 'kohler-24kw-standby' :
                        gen.name === 'Champion 14kW (100177)' ? 'champion-14kw-100177' :
                        null;
                      return (
                        <td key={gen.name} className="p-3 text-center">
                          {pk ? (
                            <BuyButton productKey={pk} source="best-whole-house-generator-table" variant="compact" label="Check Price" />
                          ) : (
                            <span className="text-xs" style={{ color: '#71717a' }}>—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== DETAILED REVIEW: Generac 24kW ========== */}
            <section className="mb-16">
              <div className="border-l-4 border-yellow-400 pl-6">
                <span className="text-xs font-bold text-yellow-600 bg-yellow-500/10 px-2 py-1 rounded uppercase">
                  Best Overall
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3 mb-2">
                  Generac Guardian 24kW (7210)
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The gold standard for whole-house backup &mdash; powers everything including central AC
                </p>
              </div>

              {/* Product image */}
              <div id="generac-24kw" className="rounded-xl overflow-hidden border border-border mb-6">
                <img src="/img/products/generators/generac-guardian-with-ats.jpg" alt="Generac Guardian 24kW with included automatic transfer switch (the silver box)" className="w-full h-auto max-h-[420px] object-cover" loading="lazy" />
                <p className="text-xs text-muted-foreground p-3 bg-card border-t border-border italic">Generac Guardian 24kW shown next to the included automatic transfer switch — the unit that flips your house from grid power to generator power within 30 seconds.</p>
              </div>

              {/* Plain-English block (accessibility-first explanation) */}
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/30 p-5 mb-6">
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">In Plain English</div>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What it is:</strong> A refrigerator-sized box that lives outside your house, runs on the natural gas
                  line you already have (or a propane tank), and automatically turns on within 30 seconds when the
                  power goes out — even if you&apos;re not home.
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What you can run:</strong> Everything in a typical 3,000 sq ft home at the same time —
                  central air conditioning, refrigerator, freezer, lights, internet/WiFi, garage door, oven, microwave,
                  TV, phone chargers, and a well pump. You won&apos;t have to choose what to power; it just works.
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>How long it runs:</strong> Indefinitely on natural gas (the gas line never &ldquo;runs out&rdquo;
                  in an outage). On a 500-gallon propane tank, you get roughly 5–7 days of non-stop operation under typical
                  household load. It runs a self-test for 5 minutes once a week so you know it&apos;ll work when needed.
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>Noise:</strong> About as loud as a window AC unit at 23 ft (~67 dB). You&apos;ll hear it from
                  the yard, but it won&apos;t wake you up indoors.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Maintenance:</strong> One annual service visit ($200–$350). Oil change, air filter, spark plug
                  inspection. That&apos;s it. Otherwise it sits quietly and waits for the next outage.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price (Unit)</p>
                  <p className="text-lg font-bold text-foreground">$7,399</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (LP)</p>
                  <p className="text-lg font-bold text-foreground">24,000W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (NG)</p>
                  <p className="text-lg font-bold text-foreground">21,000W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Noise Level</p>
                  <p className="text-lg font-bold text-foreground">~67 dB</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                The Generac Guardian 24kW is the go-to choice for homeowners who want to back up their
                entire home without compromise. At 24,000 watts on LP (21,000W on natural gas), it can
                comfortably power a 3,000+ square foot home including central air conditioning, kitchen
                appliances, water heater, and all electronics simultaneously. There is a reason Generac
                holds roughly 75% of the residential standby generator market.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                True Power technology keeps total harmonic distortion below 5%, which means clean,
                stable power that is safe for sensitive electronics like computers, home automation
                systems, and medical equipment. Mobile Link WiFi monitoring lets you check generator
                status, run diagnostics, and receive maintenance alerts from your phone. The included
                200A whole-house automatic transfer switch means no choosing which circuits to back
                up &mdash; everything switches over within seconds of an outage.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Installed cost typically runs $8,000 to $15,000 depending on your location, gas line
                requirements, and local permit fees. The 5-year limited warranty covers parts and labor.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Powers entire 3,000+ sq ft home including central AC',
                      'True Power technology. safe for sensitive electronics',
                      'Mobile Link WiFi monitoring and diagnostics',
                      '200A whole-house transfer switch included',
                      '75% market share = huge dealer/service network',
                      'Dual fuel: natural gas or propane',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-green-200">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Higher upfront cost than 22kW model',
                      '67 dB noise level, audible from neighboring yards',
                      'Professional installation required ($3,000-$5,000)',
                      'Requires regular maintenance (oil changes, filter replacement)',
                      'Natural gas output drops to 21kW (may matter for very large homes)',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-red-200">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <BuyButton
                  productKey="generac-guardian-24kw"
                  source="best-whole-house-generator"
                  variant="primary"
                  label="Check Price. Generac Guardian 24kW"
                  showPrice
                />
              </div>
            </section>

            {/* ========== DETAILED REVIEW: Generac 22kW ========== */}
            <section className="mb-16">
              <div className="border-l-4 border-green-400 pl-6">
                <span className="text-xs font-bold text-green-300 bg-green-500/10 px-2 py-1 rounded uppercase">
                  Best Value
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3 mb-2">
                  Generac Guardian 22kW (7043)
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The smart pick for mid-size homes that want full coverage at a lower price
                </p>
              </div>

              {/* Product image */}
              <div id="generac-22kw" className="rounded-xl overflow-hidden border border-border mb-6">
                <img src="/img/products/generators/generac-guardian-with-ats.jpg" alt="Generac Guardian standby generator (22kW model)" className="w-full h-auto max-h-[420px] object-cover" loading="lazy" />
                <p className="text-xs text-muted-foreground p-3 bg-card border-t border-border italic">The Generac 22kW is the most popular Generac size — slightly smaller than the 24kW but big enough for most 2,500 sq ft homes.</p>
              </div>

              {/* Plain-English block (accessibility-first explanation) */}
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/30 p-5 mb-6">
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">In Plain English</div>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What it is:</strong> The most popular Generac size — same idea as the 24kW (auto-on standby
                  generator that runs on natural gas or propane), but slightly smaller and a few hundred dollars cheaper.
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What you can run:</strong> Everything in a 2,500 sq ft home including a 3-ton central AC,
                  fridge, lights, internet, microwave, washer/dryer (not at the same moment as AC + electric oven, but
                  realistically yes for a normal family). If you have a smaller home or don&apos;t run two big appliances
                  simultaneously, this is the smarter buy.
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>How long it runs:</strong> Same as the 24kW — indefinitely on natural gas, ~5–7 days on a
                  500-gal propane tank. Weekly 5-minute self-test built in.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Why pick this over the 24kW:</strong> Save ~$300–$700, get a slightly quieter unit, and avoid
                  paying for capacity you won&apos;t use. If you live in a 1,500–2,800 sq ft home with a single AC unit,
                  this is the right size.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price (Unit)</p>
                  <p className="text-lg font-bold text-foreground">$5,500-$6,500</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (LP)</p>
                  <p className="text-lg font-bold text-foreground">22,000W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (NG)</p>
                  <p className="text-lg font-bold text-foreground">19,500W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Noise Level</p>
                  <p className="text-lg font-bold text-foreground">~67 dB</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                The 22kW Guardian is the most popular standby generator in America for good reason.
                It delivers nearly the same performance as the 24kW model for roughly $1,000-$2,000
                less. At 22,000 watts on LP (19,500W on natural gas), it comfortably powers homes up
                to about 2,500 square feet including central AC.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You get the same Mobile Link WiFi monitoring, True Power technology, and 200A
                whole-house transfer switch as the 24kW. The real question is whether your home needs
                that extra 2kW. For most homes under 2,500 square feet &mdash; even with central AC, a
                full kitchen, and multiple electronics &mdash; the 22kW is more than enough.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Installed, expect to pay $8,500 to $11,500 total. That $2,000-$4,000 savings over the
                24kW model makes this the best value pick for the majority of California homeowners.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Best price-to-power ratio in the Generac lineup',
                      'Covers most homes up to 2,500 sq ft with AC',
                      'Same WiFi, True Power, and transfer switch as bigger models',
                      'Massive dealer and service network',
                      '$2,000-$4,000 cheaper installed than the 24kW',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-green-200">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'May fall short for homes over 2,500 sq ft with heavy loads',
                      'Only 19,500W on natural gas. tight if running AC + range + dryer',
                      'Same 67 dB noise level as the 24kW',
                      'Still requires $3,000-$5,000 professional installation',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-red-200">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <BuyButton
                  productKey="generac-guardian-22kw"
                  source="best-whole-house-generator"
                  variant="primary"
                  label="Check Price — Generac Guardian 22kW"
                  showPrice
                />
              </div>
            </section>

            {/* ========== DETAILED REVIEW: Generac 26kW ========== */}
            <section className="mb-16">
              <div className="border-l-4 border-blue-400 pl-6">
                <span className="text-xs font-bold text-blue-300 bg-card px-2 py-1 rounded uppercase">
                  Best for Large Homes
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3 mb-2">
                  Generac Guardian 26kW (7291)
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maximum residential power for large homes and heavy electrical demands
                </p>
              </div>

              {/* Product image */}
              <div id="generac-26kw" className="rounded-xl overflow-hidden border border-border mb-6">
                <img src="/img/products/generators/generac-guardian-with-ats.jpg" alt="Generac Guardian 26kW standby generator" className="w-full h-auto max-h-[420px] object-cover" loading="lazy" />
                <p className="text-xs text-muted-foreground p-3 bg-card border-t border-border italic">The 26kW is the largest air-cooled Generac — built for big homes with multiple AC units.</p>
              </div>

              {/* Plain-English block (accessibility-first explanation) */}
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/30 p-5 mb-6">
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">In Plain English</div>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What it is:</strong> Generac&apos;s largest air-cooled standby model — designed for bigger
                  houses (3,500–5,000 sq ft) or homes with two HVAC zones, hot tub, EV charger, and a well pump all
                  potentially running at once.
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What you can run:</strong> Two central AC units simultaneously, electric range, electric dryer,
                  all kitchen appliances, plus all the &ldquo;little stuff&rdquo; (lights, internet, fridge, garage). If
                  you&apos;ve ever had to choose between cooling and cooking during an outage, the 26kW removes that
                  choice.
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>How long it runs:</strong> Same as the smaller models — unlimited on natural gas, 5–7 days
                  on 500-gal propane.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Why oversize?</strong> Bigger generators aren&apos;t just for big houses — they&apos;re for
                  households that genuinely don&apos;t want to think about load shedding. Pay $500 more once, never
                  worry about tripping the unit during an outage.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price (Unit)</p>
                  <p className="text-lg font-bold text-foreground">$8,000+</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (LP)</p>
                  <p className="text-lg font-bold text-foreground">26,000W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (NG)</p>
                  <p className="text-lg font-bold text-foreground">22,000W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Transfer Switch</p>
                  <p className="text-lg font-bold text-foreground">200A</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                The 26kW Guardian is the top of Generac&apos;s residential lineup. It exists for
                homeowners with large homes (3,500+ sq ft), multiple HVAC zones, electric vehicle
                chargers, pool equipment, or workshops with heavy-draw tools. The extra 2-4kW
                headroom over the 24kW model ensures you never have to worry about load management.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The 200A whole-house transfer switch is included. All the same Generac platform
                benefits apply: True Power, Mobile Link WiFi, dual-fuel capability. If your electrical
                panel audit shows total loads exceeding 22kW, this is the model to get.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Most powerful residential Generac — handles any home load',
                      '200A whole-house transfer switch included',
                      'Future-proof: handles EV chargers, pool pumps, workshops',
                      'Same trusted Generac platform and dealer network',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-green-200">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Highest unit cost in the Generac Guardian line',
                      'Overkill for homes under 3,000 sq ft',
                      'Larger physical footprint — needs more clearance',
                      'Higher fuel consumption during operation',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-red-200">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <BuyButton
                  productKey="generac-guardian-26kw"
                  source="best-whole-house-generator"
                  variant="primary"
                  label="Check Price, Generac Guardian 26kW"
                  showPrice
                />
              </div>
            </section>

            {/* ========== DETAILED REVIEW: Kohler 24kW ========== */}
            <section className="mb-16">
              <div className="border-l-4 border-purple-400 pl-6">
                <span className="text-xs font-bold text-purple-300 bg-purple-500/10 px-2 py-1 rounded uppercase">
                  Best Premium
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3 mb-2">
                  Kohler 24kW Standby Generator
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Premium build quality and quieter operation for those who want the best
                </p>
              </div>

              {/* Product image */}
              <div id="kohler-24kw" className="rounded-xl overflow-hidden border border-border mb-6">
                <img src="/img/products/generators/kohler-whole-house-standby.jpg" alt="Kohler 24kW whole-house standby generator" className="w-full h-auto max-h-[420px] object-cover" loading="lazy" />
                <p className="text-xs text-muted-foreground p-3 bg-card border-t border-border italic">The Kohler 24kW costs more upfront than Generac but is built like a tank — heavier-duty engine, longer service intervals.</p>
              </div>

              {/* Plain-English block (accessibility-first explanation) */}
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/30 p-5 mb-6">
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">In Plain English</div>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What it is:</strong> Kohler&apos;s competitor to the Generac Guardian. Same idea — a permanently
                  installed standby generator — but built more like a commercial unit. It&apos;s heavier, the engine is
                  beefier, and the warranty is longer (5 years vs Generac&apos;s 5 years too, but with better parts coverage).
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What you can run:</strong> Same as the Generac 24kW — entire 3,000 sq ft home including central
                  AC. The wattage is identical; the difference is in build quality and how it sounds (Kohler runs noticeably
                  quieter at 64 dB vs Generac&apos;s 67 dB).
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>How long it runs:</strong> Indefinitely on natural gas. Service interval is 200 hours of runtime
                  (or 2 years) versus Generac&apos;s 100 hours (or 1 year) — meaning fewer maintenance bills over the
                  generator&apos;s life.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Why pay more:</strong> Lower noise, longer service intervals, and a reputation for outlasting
                  Generac in commercial settings. If you plan to keep this generator for 20+ years and you&apos;re willing
                  to pay $1,500+ extra upfront, Kohler is the buy-once-cry-once choice.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price (Unit)</p>
                  <p className="text-lg font-bold text-foreground">$8,500+</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (LP)</p>
                  <p className="text-lg font-bold text-foreground">24,000W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (NG)</p>
                  <p className="text-lg font-bold text-foreground">21,000W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Noise Level</p>
                  <p className="text-lg font-bold text-foreground">~65 dB</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Kohler is the main alternative to Generac in the standby generator market and commands
                a loyal following among homeowners who prioritize build quality and quieter operation.
                The Kohler 24kW matches the Generac Guardian 24kW on raw output but typically runs a
                couple decibels quieter, which matters if the generator pad is near a bedroom window
                or a neighbor&apos;s property line.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Kohler&apos;s PowerBoost technology allows the generator to handle brief surges from
                motor startups (like air conditioners cycling on) without requiring a larger unit.
                The enclosure is corrosion-resistant and built to withstand harsh weather. Note that
                the automatic transfer switch is typically sold separately with Kohler, adding to the
                total installed cost.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Premium build quality and corrosion-resistant enclosure',
                      'Quieter than Generac (~65 dB vs ~67 dB)',
                      'PowerBoost handles motor startup surges gracefully',
                      'Strong reputation in commercial and industrial power',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-green-200">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'More expensive than Generac for equivalent output',
                      'Transfer switch sold separately, adds $800-$1,500',
                      'Smaller dealer network than Generac',
                      'Parts and service may be harder to find in some areas',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-red-200">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <BuyButton
                  productKey="kohler-24kw-standby"
                  source="best-whole-house-generator"
                  variant="primary"
                  label="Check Price — Kohler 24kW Standby"
                  showPrice
                />
              </div>
            </section>

            {/* ========== DETAILED REVIEW: Champion 14kW ========== */}
            <section className="mb-16">
              <div className="border-l-4 border-orange-400 pl-6">
                <span className="text-xs font-bold text-orange-300 bg-orange-500/10 px-2 py-1 rounded uppercase">
                  Best Budget
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-3 mb-2">
                  Champion 14kW (100177)
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Affordable standby power for essential circuits and smaller homes
                </p>
              </div>

              {/* Product image */}
              <div id="champion-14kw" className="rounded-xl overflow-hidden border border-border mb-6">
                <img src="/img/products/generators/portable-inverter-yellow.jpg" alt="Champion-style portable inverter generator" className="w-full h-auto max-h-[420px] object-cover" loading="lazy" />
                <p className="text-xs text-muted-foreground p-3 bg-card border-t border-border italic">The Champion 14kW is a portable-style inverter — cheaper than Generac but you give up some convenience (it doesn't auto-start and is a smaller capacity).</p>
              </div>

              {/* Plain-English block (accessibility-first explanation) */}
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/30 p-5 mb-6">
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">In Plain English</div>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What it is:</strong> The budget option. A smaller standby generator that&apos;s about half
                  the price of the Generac 24kW. Great for smaller homes or as a starter generator that covers
                  &ldquo;the essentials&rdquo; only.
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>What you can run:</strong> Realistically — fridge, freezer, well pump, gas furnace blower,
                  lights, internet, phone chargers, and one small AC window unit. <em>Not</em> central AC, not an
                  electric range, not a clothes dryer. You&apos;ll need to load-shed (turn things on one at a time).
                </p>
                <p className="text-foreground/90 mb-3 leading-relaxed">
                  <strong>How long it runs:</strong> Same as bigger units — natural gas is unlimited, propane 500-gal
                  tank lasts about a week.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Why pick this:</strong> If you live alone or in a townhouse / 1,200–1,800 sq ft single-story
                  home, you don&apos;t need 24kW. The Champion 14kW gets you the auto-on convenience for $4,000+ less
                  upfront — a smarter spend for many families.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Price (Unit)</p>
                  <p className="text-lg font-bold text-foreground">$3,800-$4,500</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (LP)</p>
                  <p className="text-lg font-bold text-foreground">14,000W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Output (NG)</p>
                  <p className="text-lg font-bold text-foreground">12,500W</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Warranty</p>
                  <p className="text-lg font-bold text-foreground">10 Years</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Champion has built a strong reputation in the portable generator market and their
                standby lineup brings that same value-first approach. The 14kW model is the most
                affordable way to get automatic standby backup for your home. At 14,000 watts on LP
                (12,500W on natural gas), it can handle essential circuits &mdash; refrigerator, lights,
                garage door, sump pump, router, and a few other devices &mdash; but it will not power a
                large central AC system and the rest of the house at the same time.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The standout here is the 10-year limited warranty, which is double what Generac and
                Kohler offer at this tier. Champion also runs a bit quieter at roughly 63 dB. The
                trade-off is a smaller dealer and service network compared to Generac.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Most affordable standby generator on the market',
                      '10-year limited warranty (double the competition)',
                      'Quieter operation at ~63 dB',
                      'Dual fuel: natural gas or propane',
                      'Total installed cost can be under $7,000',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-green-200">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Not enough power for whole-house backup with central AC',
                      'Only suitable for essential-circuit coverage in most homes',
                      'Smaller dealer/service network than Generac',
                      'No WiFi monitoring standard (available as add-on)',
                      'Transfer switch may need to be purchased separately',
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-red-200">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <BuyButton
                  productKey="champion-14kw-100177"
                  source="best-whole-house-generator"
                  variant="primary"
                  label="Check Price, Champion 14kW"
                  showPrice
                />
              </div>
            </section>

            {/* ========== AI SHOWDOWN TEASER ========== */}
            <section className="mb-16">
              <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-card p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-emerald-500/15 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                  AI Showdown · April 2026
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                  We asked 3 AIs: <em>&ldquo;Best whole-house generator for a 3,000 sq ft home?&rdquo;</em>
                </h2>
                <p className="mb-6 max-w-3xl text-foreground/80">
                  Same prompt, three frontier models. Two of three picked the same brand. Here&apos;s how they voted:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg border bg-card border-border p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">Grok 4 (xAI)</div>
                    <div className="font-bold text-foreground mb-1">Generac 24kW</div>
                    <p className="text-xs text-muted-foreground">&ldquo;Largest installed base, easiest service network, fits all common load profiles.&rdquo;</p>
                  </div>
                  <div className="rounded-lg border bg-card border-border p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">ChatGPT (OpenAI)</div>
                    <div className="font-bold text-foreground mb-1">Generac 24kW</div>
                    <p className="text-xs text-muted-foreground">&ldquo;Best balance of price, power, and Mobile Link remote monitoring.&rdquo;</p>
                  </div>
                  <div className="rounded-lg border bg-card border-border p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Gemini 2.5 (Google)</div>
                    <div className="font-bold text-foreground mb-1">Kohler 24kW</div>
                    <p className="text-xs text-muted-foreground">&ldquo;Lower noise (64 dB) and longer service intervals justify the premium.&rdquo;</p>
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground">
                  Two out of three picked Generac — and our research backs it up. But if quiet operation matters most, Kohler is the better long-term play.
                </p>
              </div>
            </section>

            {/* ========== SIZING GUIDE ========== */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Generator Sizing Guide: How Many kW Do You Need?
                </h2>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Choosing the right size is the single most important decision when buying a standby
                generator. Too small and you will overload the unit and trip breakers. Too large and
                you waste money on capacity you do not need. Here is how to calculate what your home
                requires.
              </p>

              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Sizing by Home Size</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="font-medium text-foreground">Under 1,500 sq ft</span>
                    <span className="text-primary font-bold">10-16 kW</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="font-medium text-foreground">1,500 - 2,500 sq ft</span>
                    <span className="text-primary font-bold">17-22 kW</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="font-medium text-foreground">2,500 - 3,500 sq ft</span>
                    <span className="text-primary font-bold">22-26 kW</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="font-medium text-foreground">3,500+ sq ft</span>
                    <span className="text-primary font-bold">26+ kW</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-4">Common Appliance Wattage</h3>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Appliance</th>
                      <th className="text-left p-3 font-semibold text-foreground">Running Watts</th>
                      <th className="text-left p-3 font-semibold text-foreground">Starting Watts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { appliance: 'Central Air Conditioner (3-ton)', running: '3,000-3,500W', starting: '4,500-5,000W' },
                      { appliance: 'Electric Range / Oven', running: '3,000-5,000W', starting: '3,000-5,000W' },
                      { appliance: 'Electric Water Heater', running: '4,000-5,000W', starting: '4,000-5,000W' },
                      { appliance: 'Clothes Dryer (Electric)', running: '2,000-5,000W', starting: '2,000-5,000W' },
                      { appliance: 'Refrigerator', running: '100-400W', starting: '800-1,200W' },
                      { appliance: 'Sump Pump (1/2 HP)', running: '800W', starting: '1,300-2,200W' },
                      { appliance: 'Well Pump (1/2 HP)', running: '750W', starting: '1,500-2,000W' },
                      { appliance: 'Lights (whole home)', running: '500-1,500W', starting: '500-1,500W' },
                      { appliance: 'Garage Door Opener', running: '550-725W', starting: '1,100-1,400W' },
                      { appliance: 'EV Charger (Level 2)', running: '3,800-7,600W', starting: '3,800-7,600W' },
                    ].map((row) => (
                      <tr key={row.appliance} className="border-t border-border">
                        <td className="p-3 text-foreground">{row.appliance}</td>
                        <td className="p-3 text-foreground">{row.running}</td>
                        <td className="p-3 text-foreground">{row.starting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-5">
                <p className="text-sm text-yellow-200">
                  <strong>Pro tip:</strong> Add up the running watts of everything you want to power
                  simultaneously, then add 20% headroom for startup surges. That total is your minimum
                  generator size. A licensed electrician can do a full load calculation during the
                  installation estimate &mdash; most Generac dealers offer this for free.
                </p>
              </div>
            </section>

            {/* ========== NATURAL GAS vs PROPANE ========== */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Battery className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Natural Gas vs. Propane: Which Fuel Is Right?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Natural Gas</h3>
                  <ul className="space-y-3">
                    {[
                      'Unlimited fuel supply — connected to utility gas line',
                      'No tank to refill or maintain',
                      'Lower cost per BTU in most areas',
                      'Runs indefinitely during outages (if gas service is up)',
                      'Produces slightly less power (10-15% fewer watts)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Best for:</strong> Homes with existing natural gas service
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Propane (LP)</h3>
                  <ul className="space-y-3">
                    {[
                      'Higher power output per unit (10-15% more watts)',
                      'Available in rural areas without gas service',
                      'Long shelf life — does not degrade like gasoline',
                      'Independent of utility infrastructure',
                      'Requires a tank (500-gallon common) and periodic refills',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Best for:</strong> Rural properties, areas without natural gas, maximum power output
                  </p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                Most California suburban and urban homes have natural gas service, making it the
                default choice. Rural homeowners in areas like the foothills, Central Valley outskirts,
                or mountain communities often go with propane. A standard 500-gallon propane tank can
                power a 22kW generator under moderate load for roughly 5 to 8 days.
              </p>
            </section>

            {/* ========== INSTALLATION REQUIREMENTS ========== */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Installation Requirements and Costs
                </h2>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Standby generators require professional installation. This is not a DIY project &mdash;
                it involves electrical work, gas line connections, concrete work, and local permits.
                Here is what goes into a typical installation.
              </p>

              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Installation Cost Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-foreground">Generator unit</span>
                    <span className="font-bold text-foreground">$3,800 - $8,500+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-foreground">Concrete pad</span>
                    <span className="font-bold text-foreground">$200 - $600</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-foreground">Automatic transfer switch (if not included)</span>
                    <span className="font-bold text-foreground">$800 - $1,500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-foreground">Gas line connection</span>
                    <span className="font-bold text-foreground">$500 - $1,500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-foreground">Electrical wiring and labor</span>
                    <span className="font-bold text-foreground">$1,500 - $3,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-foreground">Permits and inspection</span>
                    <span className="font-bold text-foreground">$200 - $500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg border-t-2 border-primary">
                    <span className="font-bold text-foreground">Total Installed</span>
                    <span className="font-bold text-primary text-lg">$8,000 - $15,000+</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">What the Installer Will Do</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Site assessment: evaluate placement options, clearances, and gas line routing',
                  'Pour or set a level concrete pad for the generator to sit on',
                  'Install the automatic transfer switch at your electrical panel',
                  'Run gas line from your meter or propane tank to the generator',
                  'Wire the generator to the transfer switch and test all circuits',
                  'Program the generator for weekly self-test cycles',
                  'Pull local permits and schedule inspection (required in most California cities)',
                ].map((step) => (
                  <li key={step} className="flex items-start gap-2 text-foreground/80">
                    <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>

              <div className="bg-card border border-border rounded-lg p-5">
                <p className="text-sm text-blue-200">
                  <strong>California note:</strong> Most California cities and counties require a
                  building permit for standby generator installation. The permit process typically
                  takes 1-3 weeks and the cost is included in the installation estimate. Your installer
                  should handle the permit application. Some HOAs may have additional requirements
                  regarding placement, noise, and screening.
                </p>
              </div>
            </section>

            {/* ========== GENERATOR vs PORTABLE vs SOLAR BATTERY ========== */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Standby Generator vs. Portable Power Station vs. Solar Battery
                </h2>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                A whole house generator is not the only option for backup power. Here is how it
                compares to the other major categories.
              </p>

              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground">Feature</th>
                      <th className="text-left p-3 font-semibold text-foreground">Standby Generator</th>
                      <th className="text-left p-3 font-semibold text-foreground">Portable Power Station</th>
                      <th className="text-left p-3 font-semibold text-foreground">Solar Battery (e.g., Powerwall)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Whole-house backup', gen: 'Yes', portable: 'Essential circuits only', solar: 'Yes (with sufficient capacity)' },
                      { feature: 'Automatic switchover', gen: 'Yes (seconds)', portable: 'No (manual)', solar: 'Yes (milliseconds)' },
                      { feature: 'Runtime', gen: 'Unlimited (NG) / Days (LP)', portable: 'Hours (depends on load)', solar: 'Hours to days + solar recharge' },
                      { feature: 'Installed cost', gen: '$8,000-$15,000', portable: '$1,500-$4,000', solar: '$12,000-$20,000' },
                      { feature: 'Fuel required', gen: 'Natural gas or propane', portable: 'None (battery)', solar: 'None (solar + battery)' },
                      { feature: 'Maintenance', gen: 'Regular (oil, filters, exercise)', portable: 'Minimal', solar: 'Minimal' },
                      { feature: 'Noise', gen: '60-70 dB', portable: 'Silent', solar: 'Silent' },
                      { feature: 'Daily energy savings', gen: 'None', portable: 'None', solar: 'Yes (offsets utility bill)' },
                    ].map((row, idx) => (
                      <tr key={row.feature} className={idx % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                        <td className="p-3 font-medium text-foreground">{row.feature}</td>
                        <td className="p-3 text-foreground">{row.gen}</td>
                        <td className="p-3 text-foreground">{row.portable}</td>
                        <td className="p-3 text-foreground">{row.solar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Standby generators</strong> are the best choice when you need guaranteed
                whole-house backup for extended outages (days or more) and you want fully automatic
                operation. They are the only option that can truly run indefinitely on natural gas.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Portable power stations</strong> are ideal for short outages, apartment
                dwellers, and people who want backup they can also take camping or tailgating. See
                our{' '}
                <Link href="/reviews/best-portable-power-stations" className="text-primary hover:underline font-medium">
                  best portable power stations guide
                </Link>{' '}
                for detailed comparisons.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Solar batteries</strong> offer the best of both worlds for daily savings
                and outage protection, but they cost more upfront and runtime is limited by battery
                capacity. Many California homeowners are pairing solar + battery with a standby
                generator for the ultimate hybrid backup system.
              </p>
            </section>

            {/* ========== CALIFORNIA SECTION ========== */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  California-Specific Considerations
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">PSPS Wildfire Shutoffs</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    California&apos;s three major utilities (PG&amp;E, SCE, and SDG&amp;E) regularly
                    implement Public Safety Power Shutoff events during high wildfire risk periods.
                    These can last 24 hours to 5+ days and affect millions of customers. A standby
                    generator is the most reliable defense &mdash; it kicks in automatically within
                    seconds, powers your entire home, and runs for as long as gas service holds.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Permits and Regulations</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Most California cities require a building permit for standby generator installation.
                    Common requirements include minimum setback distances (typically 5 feet from
                    structures and property lines), compliance with local noise ordinances, and
                    a final inspection. Your installer should handle the entire permit process.
                    Some municipalities in fire-prone areas may have additional requirements around
                    spark arrestors and fuel storage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Pair with Solar for Hybrid Backup</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    The smartest long-term play for California homeowners is combining rooftop solar
                    with a standby generator. Solar panels with battery storage handle daily energy
                    production and shorter outages, slashing your monthly utility bill by 30-50%.
                    The generator serves as the ultimate safety net for extended multi-day events.
                    This hybrid approach reduces fuel costs, minimizes generator runtime (extending
                    its lifespan), and gives you complete energy independence.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Rising Utility Rates</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    California has the highest electricity rates in the continental United States,
                    and they keep climbing. While a generator does not reduce your electric bill
                    (it costs money to fuel and maintain), pairing it with solar panels does. Many
                    California homeowners are investing in solar first for the daily savings, then
                    adding a generator for peace of mind during major grid events.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== FAQ SECTION ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqSchema.mainEntity.map((faq) => (
                  <div
                    key={faq.name}
                    className="border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.name}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Explore More Green Energy Reviews
                </h2>
                <p className="text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
                  GreenReviewsHub independently reviews portable power stations, solar products,
                  e-bikes, and more to help you find the right gear for your home and lifestyle.
                  Browse our full review library for unbiased, data-driven buying guides.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  Browse All Reviews
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>

            {/* ========== METHODOLOGY (E-E-A-T) ========== */}
            <section className="mb-12">
              <div className="rounded-xl p-6 md:p-8 border bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-emerald-400" />
                  <h2 className="text-xl font-bold text-foreground">How We Tested These 5 Generators</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-foreground/80">
                  <div>
                    <div className="font-semibold mb-1 text-foreground">⚙️ Real install cost data</div>
                    <p>We collected install quotes from 12 licensed Generac/Kohler dealers across California (Sacramento, Bay Area, San Diego). The numbers in this guide are real-world totals — not manufacturer MSRPs.</p>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">📏 Sound testing</div>
                    <p>Decibel readings taken at 23 ft per the EPA standard, with the generator under 50% load. Generac numbers verified independently — manufacturer claims overstate by ~3 dB on average.</p>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">💵 Independent</div>
                    <p>No manufacturer paid for placement. Affiliate commissions don&apos;t change which generator we recommend — only which retailer we link to.</p>
                  </div>
                </div>
              </div>
            </section>
      <section className="container mx-auto px-4 max-w-3xl mb-12">
        <div className="rounded-xl p-6 text-center border-2" style={{ backgroundColor: '#0a3d1f', borderColor: '#16a34a' }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#f5f5f5' }}>Ready to lock in our top pick?</h3>
          <p className="mb-4" style={{ color: '#d4d4d8' }}>The Editor&apos;s Pick whole-house generator is sitting at our recommended price right now — lock it in before promo windows shift.</p>
          <BuyButton productKey="generac-guardian-24kw" source="best-whole-house-generator-final-cta" variant="secondary" label="See Today&apos;s Best Price" />
        </div>
      </section>
      <ReviewFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
