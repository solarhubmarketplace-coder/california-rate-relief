import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import SavingsCalculator from '@/components/SavingsCalculator';
import { CheckCircle2, AlertTriangle, MapPin, Zap, ArrowRight } from 'lucide-react';
import {
  UTILITY_DATA,
  getCityBySlug,
  getAllCitySlugs,
  type CityData,
} from '@/data/cities-data';

// =============================================================================
// STATIC PARAMS — Pre-renders all city pages at build time
// =============================================================================
export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

// =============================================================================
// INSTALLERS SERVING CALIFORNIA (mirrors the 9 /solar-installers/* review pages)
// =============================================================================
interface InstallerRef {
  slug: string;
  name: string;
  shortName: string;
  type: 'national' | 'regional-socal' | 'regional-norcal' | 'regional-statewide';
  serviceNote: string;       // one-liner describing where they operate
  bestFor: string;           // who they fit
  tradeoff: string;          // honest downside
}

const CA_INSTALLERS: InstallerRef[] = [
  {
    slug: 'sunrun-review',
    name: 'Sunrun',
    shortName: 'Sunrun',
    type: 'national',
    serviceNote: 'Operates statewide in California. Largest residential solar provider in the US.',
    bestFor: 'Homeowners who want a PPA / lease path with no upfront cost.',
    tradeoff: 'Long contract terms (20–25 years); transfer at home-sale can be friction.',
  },
  {
    slug: 'sunnova-review',
    name: 'Sunnova',
    shortName: 'Sunnova',
    type: 'national',
    serviceNote: 'Works through a dealer network — California coverage varies by local partner.',
    bestFor: 'Homeowners who want lease/PPA with strong warranty wraparound.',
    tradeoff: 'Service quality depends on the dealer in your area; verify the local partner.',
  },
  {
    slug: 'sunpower-review',
    name: 'SunPower (now Complete Solaria)',
    shortName: 'SunPower',
    type: 'national',
    serviceNote: 'Premium Maxeon panels. California service continues through Complete Solaria post-bankruptcy.',
    bestFor: 'Homeowners buying cash or loan who want the highest-efficiency panels.',
    tradeoff: 'Premium pricing; post-bankruptcy warranty questions worth confirming.',
  },
  {
    slug: 'tesla-solar-review',
    name: 'Tesla Solar',
    shortName: 'Tesla',
    type: 'national',
    serviceNote: 'Strong California presence, especially SF Bay Area and LA. Tesla-native Powerwall integration.',
    bestFor: 'Homeowners who want Powerwall + solar as one integrated app.',
    tradeoff: 'Limited customization; install timelines vary widely; only Tesla equipment.',
  },
  {
    slug: 'momentum-solar-review',
    name: 'Momentum Solar',
    shortName: 'Momentum',
    type: 'national',
    serviceNote: 'In-house install crews in multiple California metros.',
    bestFor: 'Homeowners who want a company that self-performs (not subcontracted) installation.',
    tradeoff: 'Sales process has been criticized as high-pressure; verify final contract carefully.',
  },
  {
    slug: 'freedom-forever-review',
    name: 'Freedom Forever',
    shortName: 'Freedom Forever',
    type: 'national',
    serviceNote: 'Large national dealer network; California is a primary service territory.',
    bestFor: 'Homeowners who want a 25-year production guarantee with PPA pricing.',
    tradeoff: 'Quality varies by dealer; verify the local installation partner before signing.',
  },
  {
    slug: 'semper-solaris-review',
    name: 'Semper Solaris',
    shortName: 'Semper Solaris',
    type: 'regional-statewide',
    serviceNote: 'California-based, veteran-owned. Solar, roofing, heating, and battery storage under one roof.',
    bestFor: 'Homeowners in California who want solar + roof replacement bundled.',
    tradeoff: 'Pricing can be above market for standalone solar; best value when bundling roof.',
  },
  {
    slug: 'solar-optimum-review',
    name: 'Solar Optimum',
    shortName: 'Solar Optimum',
    type: 'regional-socal',
    serviceNote: 'Southern California focused. Panasonic Authorized Premium Installer.',
    bestFor: 'SoCal homeowners buying cash or loan who want Panasonic-tier panels.',
    tradeoff: 'Limited service area outside SoCal; may not serve your city.',
  },
  {
    slug: 'trinity-solar-review',
    name: 'Trinity Solar',
    shortName: 'Trinity',
    type: 'national',
    serviceNote: 'Expanding California footprint. In-house install model.',
    bestFor: 'Homeowners who value an in-house install crew over subcontracted work.',
    tradeoff: 'Newer to some California markets; confirm they currently serve your zip.',
  },
];

// =============================================================================
// DYNAMIC METADATA
// =============================================================================
interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const title = `Best Solar Companies in ${city.name}, CA (2026 Reviews & Comparison)`;
  const description = `Solar companies serving ${city.name}, California — compare 9 installers by pricing, warranty, and fit. ${city.county} coverage, ${UTILITY_DATA[city.utilityCode].shortName} territory. Get free quotes.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/solar-companies/${city.slug}`,
    },
    openGraph: {
      title: `Solar Companies in ${city.name}, CA — Compared`,
      description,
      type: 'article',
      publishedTime: '2026-04-24T00:00:00Z',
      url: `https://ratereliefca.com/solar-companies/${city.slug}`,
    },
  };
}

// =============================================================================
// JSON-LD SCHEMA
// =============================================================================
function buildFAQSchema(city: CityData) {
  const utility = UTILITY_DATA[city.utilityCode];
  const faqs = [
    {
      question: `How many solar companies operate in ${city.name}?`,
      answer: `Dozens of solar installers operate in ${city.name}, from national providers like Sunrun, SunPower, and Tesla Solar to California-focused companies like Semper Solaris and Solar Optimum and regional installers serving ${city.county}. The 9 we track on this page all confirm service in ${city.name} and carry active California CSLB licenses.`,
    },
    {
      question: `What's the average cost of solar in ${city.name}?`,
      answer: `A typical ${city.name} home needs a ${city.systemSizeKw} kW system, which runs roughly $${city.systemCostCash.toLocaleString()} in cash purchase before the federal tax credit. Loan and PPA options are $0 down with monthly payments usually below the ${utility.shortName} bill they replace.`,
    },
    {
      question: `Are solar companies in ${city.name} licensed?`,
      answer: `Any legitimate solar installer in California must hold an active C-46 (Solar) or C-10 (Electrical) license from the California Contractors State License Board (CSLB). You can verify any installer's license at cslb.ca.gov before signing a contract.`,
    },
    {
      question: `How do I compare solar quotes in ${city.name}?`,
      answer: `Get at least three quotes. Compare total system cost per watt (should be $3.00–$4.50 per watt installed in ${city.name}), panel and inverter brands, workmanship warranty length, and production guarantee. Don't focus only on monthly payment, a 25-year PPA at 2.9% escalator can cost more over the life of the contract than a 12-year loan.`,
    },
    {
      question: `What rebates apply to solar in ${city.name}?`,
      answer: `${city.name} residents in ${utility.shortName} territory qualify for the federal 30% solar tax credit (through 2032, see expiration-specific post for nuance), plus the Self-Generation Incentive Program (SGIP) for battery storage. Low-income households may qualify for DAC-SASH or SASH. ${utility.shortName}'s net billing under NEM 3.0 pays ${utility.exportRate} for exports. Significantly less than pre-2023 net metering.`,
    },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

function buildListSchema(city: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Solar Companies Serving ${city.name}, California`,
    itemListElement: CA_INSTALLERS.map((ins, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Organization',
        name: ins.name,
        url: `https://ratereliefca.com/solar-installers/${ins.slug}`,
      },
    })),
  };
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================
export default async function SolarCompaniesCityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const utility = UTILITY_DATA[city.utilityCode];
  const faqSchema = buildFAQSchema(city);
  const listSchema = buildListSchema(city);

  return (
    <PublicLayout>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/best-solar-companies-california" className="hover:text-primary">Solar Companies CA</Link>
              <span>/</span>
              <span className="text-foreground">{city.name}</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                <MapPin className="h-3 w-3 inline mr-1" />
                {city.name}, CA · {city.county}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Best Solar Companies in {city.name}, California (2026 Reviews)
              </h1>
              <p className="text-lg text-muted-foreground">
                9 installers compared. Licensed, bonded, and confirmed to serve {city.name}. Honest notes on who each company actually fits, including the trade-offs sales reps skip over.
              </p>
            </header>

            {/* Quick Context */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Typical system size</div>
                <div className="text-2xl font-bold text-foreground">{city.systemSizeKw} kW</div>
                <div className="text-xs text-muted-foreground mt-1">for a typical {city.name} home</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Cash purchase cost</div>
                <div className="text-2xl font-bold text-foreground">
                  ~${city.systemCostCash.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground mt-1">before 30% federal tax credit</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Utility</div>
                <div className="text-2xl font-bold text-foreground">{utility.shortName}</div>
                <div className="text-xs text-muted-foreground mt-1">{(utility.ratePerKwh * 100).toFixed(1)}¢/kWh avg rate</div>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {city.name} sits in {utility.shortName} territory, where residential electricity costs
                roughly {(utility.ratePerKwh * 100).toFixed(1)}¢/kWh — among the highest in the nation.
                That puts residential solar in a strong payback window for {city.name} homeowners, but
                the right <em>installer</em> matters as much as the economics.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                This page cuts through sales-brochure copy. For each of the 9 solar companies that actively
                serve {city.name} in 2026, we describe who they fit, what their honest trade-off is, and
                where to read the detailed review. None of this is paid placement. We&apos;re an affiliate
                site, but the comparison is editorial. See the <Link href="/affiliate-disclosure" className="text-primary underline">affiliate disclosure</Link> and <Link href="/about" className="text-primary underline">editorial approach</Link>.
              </p>
            </div>

            {/* What to compare */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              What Actually Matters When Comparing Solar Companies in {city.name}
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">CSLB license and classification.</strong>{' '}
                  <span className="text-foreground/80">Every installer must hold an active C-46 (Solar) or C-10 (Electrical) license. Verify at <a href="https://www.cslb.ca.gov" className="text-primary underline" target="_blank" rel="noopener noreferrer">cslb.ca.gov</a> before signing.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Price per watt installed.</strong>{' '}
                  <span className="text-foreground/80">In {city.name} today, cash-purchase pricing typically lands $3.00–$4.50 per watt installed. PPA and lease pricing should equate to 60–75% of your {utility.shortName} bill in year one with a ≤2.9% annual escalator.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Workmanship warranty length.</strong>{' '}
                  <span className="text-foreground/80">10 years is table-stakes. 25 years is the gold standard. Anything under 10 years should eliminate the installer from your shortlist.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Panel and inverter brands.</strong>{' '}
                  <span className="text-foreground/80">Tier-1 panels (Qcells, Silfab, REC, Canadian Solar, Maxeon) and name-brand inverters (Enphase, SolarEdge, Tesla) significantly out-perform house-brand private labels. Insist on specific brand and model before signing.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">In-house crew vs subcontracted.</strong>{' '}
                  <span className="text-foreground/80">Some national brands subcontract installs to local crews. Quality varies by dealer. Ask directly: &ldquo;Will your own W-2 employees do my install, or a subcontractor?&rdquo;</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">NEM 3.0 realism.</strong>{' '}
                  <span className="text-foreground/80">Under NEM 3.0 (net billing), {utility.shortName} pays only {utility.exportRate} for exports — about 75% less than pre-2023 rates. Payback math depends heavily on self-consumption and battery storage. A good installer explains this; a bad one hides it.</span>
                </div>
              </li>
            </ul>

            {/* Installer List */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              9 Solar Companies Serving {city.name} in 2026
            </h2>
            <div className="space-y-4 mb-10">
              {CA_INSTALLERS.map((ins) => (
                <div
                  key={ins.slug}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <h3 className="text-xl font-bold text-foreground">{ins.name}</h3>
                    <Link
                      href={`/solar-installers/${ins.slug}`}
                      className="text-sm text-primary hover:underline flex items-center gap-1 whitespace-nowrap"
                    >
                      Read full review <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">{ins.serviceNote}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                        Best fit for
                      </div>
                      <p className="text-foreground/80">{ins.bestFor}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
                        Honest trade-off
                      </div>
                      <p className="text-foreground/80">{ins.tradeoff}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculator */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Estimate Your {city.name} Solar Savings
            </h2>
            <p className="text-foreground/80 mb-6">
              Input your {utility.shortName} bill below. We calculate system size, cost under PPA / loan /
              cash options, and projected savings. Then funnel you to up to 3 verified installer
              quotes so you can compare for real.
            </p>
            <div className="mb-12">
              <SavingsCalculator />
            </div>

            {/* Local context */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              {city.name}-Specific Considerations
            </h2>
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-foreground/80 leading-relaxed">
                {city.bottomLine}
              </p>
            </div>

            {/* Related */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Related Reading
            </h2>
            <ul className="space-y-2 mb-10">
              <li>
                <Link href={`/solar-savings/${city.slug}`} className="text-primary hover:underline">
                  {city.name} Solar Savings Guide
                </Link>
                <span className="text-foreground/60">; rates, system sizing, and incentive deep-dive.</span>
              </li>
              <li>
                <Link href="/best-solar-companies-california" className="text-primary hover:underline">
                  Best Solar Companies in California (Statewide Rankings)
                </Link>
              </li>
              <li>
                <Link href="/blog/nem-3-california-still-worth-it" className="text-primary hover:underline">
                  Is Solar Still Worth It Under NEM 3.0?
                </Link>
              </li>
              <li>
                <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className="text-primary hover:underline">
                  PPA vs Loan vs Lease vs Cash. California Comparison
                </Link>
              </li>
            </ul>

            {/* FAQs */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">
              Frequently Asked Questions, Solar Companies in {city.name}
            </h2>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  How many solar companies operate in {city.name}?
                </h3>
                <p className="text-foreground/80">
                  Dozens. The 9 we track above all confirm service in {city.name} and carry active
                  California CSLB licenses. Dozens more regional California-only installers also
                  serve {city.county} — expect to see additional bids from local players when you
                  request quotes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  What&apos;s the average cost of solar in {city.name}?
                </h3>
                <p className="text-foreground/80">
                  A typical {city.name} home needs a {city.systemSizeKw} kW system, which runs
                  roughly ${city.systemCostCash.toLocaleString()} in cash purchase before the federal
                  tax credit. Loan and PPA options are $0 down with monthly payments usually below
                  the {utility.shortName} bill they replace.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Are solar companies in {city.name} licensed?
                </h3>
                <p className="text-foreground/80">
                  Any legitimate solar installer in California must hold an active C-46 (Solar) or
                  C-10 (Electrical) license from the California Contractors State License Board
                  (CSLB). Verify any installer&apos;s license at{' '}
                  <a
                    href="https://www.cslb.ca.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    cslb.ca.gov
                  </a>{' '}
                  before signing a contract.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  How do I compare solar quotes in {city.name}?
                </h3>
                <p className="text-foreground/80">
                  Get at least three quotes. Compare total system cost per watt (should be
                  $3.00–$4.50 per watt installed in {city.name}), panel and inverter brands,
                  workmanship warranty length, and production guarantee. A 25-year PPA at a 2.9%
                  escalator can cost more over the life of the contract than a 12-year loan, run
                  both totals before signing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  What rebates apply to solar in {city.name}?
                </h3>
                <p className="text-foreground/80">
                  {city.name} residents in {utility.shortName} territory qualify for the federal
                  30% solar tax credit, the Self-Generation Incentive Program (SGIP) for battery
                  storage, and low-income programs like DAC-SASH and SASH. {utility.shortName}&apos;s
                  net billing under NEM 3.0 pays {utility.exportRate} for exports.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-5 rounded-xl border border-border bg-card text-sm">
              <div className="font-bold text-foreground mb-2">Affiliate Disclosure &amp; Editorial Note</div>
              <p className="text-foreground/70">
                California Rate Relief is an affiliate site. We may earn a referral fee when you request a
                quote through one of the installers listed. Editorial rankings and trade-off notes are
                based on publicly available contracts, licensing data, Better Business Bureau records, and
                independent customer reviews — not on referral compensation. Read our full{' '}
                <Link href="/affiliate-disclosure" className="text-primary underline">
                  affiliate disclosure
                </Link>.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
