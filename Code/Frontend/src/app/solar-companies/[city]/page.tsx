import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import SavingsCalculator from "@/components/SavingsCalculator";
import { BillComparison } from "@/components/growth/BillComparison";
import { SolarInquiry } from "@/components/growth/SolarInquiry";
import { HeroQuickCheck } from "@/components/growth/HeroQuickCheck";
import {
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  UTILITY_DATA,
  CPUC_IOU_CODES,
  getCityBySlug,
  getAllCitySlugs,
  utilityRateText,
  type CityData,
} from "@/data/cities-data";
import {
  STATEWIDE_COST_BENCHMARK,
  formatStatewideBenchmarkRange,
} from "@/data/solar-cost-benchmark";
import { RelatedInstallers } from "@/components/shared/RelatedInstallers";
import { TrustedSources } from "@/components/shared/TrustedSources";
import { NearbyCities } from "@/components/shared/NearbyCities";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { hasSavingsCityPage } from "@/lib/canonical-redirects";
import { growthCities } from "@/data/growth-cities";
import { CityComparison } from "@/components/growth/CityComparison";
import { cityCostPath, getPublishableCityCostSlugs } from "@/data/city-cost-data";
import {
  cityPageDates,
  cityPageMetadata,
  cityQuickCheckUtility,
  companiesPageSeo,
} from "@/lib/city-pages";
import { Byline } from "@/components/trust/Byline";
import { ArticleJsonLd } from "@/components/shared/ArticleJsonLd";
import { FaqJsonLd, type FaqJsonLdItem } from "@/components/shared/FaqJsonLd";

// =============================================================================
// STATIC PARAMS — Pre-renders all city pages at build time
// =============================================================================
export function generateStaticParams() {
  return [...new Set([...getAllCitySlugs(), ...Object.keys(growthCities)])].map(
    (slug) => ({ city: slug }),
  );
}

// =============================================================================
// INSTALLERS SERVING CALIFORNIA (mirrors the 9 /solar-installers/* review pages)
// =============================================================================
interface InstallerRef {
  slug: string;
  name: string;
  shortName: string;
  type:
    "national" | "regional-socal" | "regional-norcal" | "regional-statewide";
  serviceNote: string; // one-liner describing where they operate
  bestFor: string; // who they fit
  tradeoff: string; // honest downside
}

// 2026-09-23 compliance pass: the notes below describe what each company sells
// and what to check. They no longer claim that a company serves a given city,
// holds a license, is the "largest", or offers a guarantee or a $0-down price:
// none of that was verified against a primary source. Confirm coverage and the
// CSLB license for your own address before comparing bids.
const CA_INSTALLERS: InstallerRef[] = [
  {
    slug: "sunrun-review",
    name: "Sunrun",
    shortName: "Sunrun",
    type: "national",
    serviceNote:
      "National company that sells solar in California, mostly as leases and PPAs.",
    bestFor: "Homeowners who want a lease or PPA rather than owning the system.",
    tradeoff:
      "Lease and PPA terms run for many years; read the escalator, the term and the home-sale transfer terms.",
  },
  {
    slug: "sunnova-review",
    name: "Sunnova",
    shortName: "Sunnova",
    type: "national",
    serviceNote:
      "Works through local dealers, so the company that installs and services your system may not be Sunnova. Read the review for its current status.",
    bestFor: "Homeowners comparing a lease or PPA with a service agreement.",
    tradeoff:
      "Service quality depends on the dealer in your area; confirm who does the install and who handles repairs.",
  },
  {
    slug: "sunpower-review",
    name: "SunPower (now Complete Solaria)",
    shortName: "SunPower",
    type: "national",
    serviceNote:
      "SunPower went through bankruptcy; the brand now belongs to Complete Solaria. Read the review before relying on an old warranty.",
    bestFor:
      "Homeowners buying cash or with a loan who want a specific premium panel line.",
    tradeoff:
      "Premium pricing, and warranty questions after the bankruptcy are worth confirming in writing.",
  },
  {
    slug: "tesla-solar-review",
    name: "Tesla Solar",
    shortName: "Tesla",
    type: "national",
    serviceNote:
      "Sells solar with its own Powerwall battery in California.",
    bestFor: "Homeowners who want solar and a Powerwall managed in one app.",
    tradeoff:
      "Limited customization and Tesla equipment only; ask for a written install timeline.",
  },
  {
    slug: "momentum-solar-review",
    name: "Momentum Solar",
    shortName: "Momentum",
    type: "national",
    serviceNote: "National installer that sells solar in California.",
    bestFor:
      "Homeowners who want to ask one company to handle the full installation.",
    tradeoff:
      "Its sales process has drawn complaints about pressure; read the final contract carefully.",
  },
  {
    slug: "freedom-forever-review",
    name: "Freedom Forever",
    shortName: "Freedom Forever",
    type: "national",
    serviceNote:
      "Sold through a dealer network; California has been one of its markets. It filed for Chapter 11 on April 15, 2026 (U.S. Bankruptcy Court, D. Del.), so read the review before signing or relying on a warranty.",
    bestFor:
      "Homeowners comparing a dealer-sold system who will read the production terms closely.",
    tradeoff:
      "Quality varies by dealer; confirm the local installer and what, if anything, the contract guarantees about production.",
  },
  {
    slug: "semper-solaris-review",
    name: "Semper Solaris",
    shortName: "Semper Solaris",
    type: "regional-statewide",
    serviceNote:
      "California-based company that sells solar, roofing, heating and battery storage.",
    bestFor:
      "Homeowners in California who want solar and a roof replacement from one company.",
    tradeoff:
      "Compare the solar price on its own, not only as part of a bundle with the roof.",
  },
  {
    slug: "solar-optimum-review",
    name: "Solar Optimum",
    shortName: "Solar Optimum",
    type: "regional-socal",
    serviceNote:
      "Focused on Southern California.",
    bestFor:
      "Southern California homeowners buying cash or with a loan.",
    tradeoff: "Its service area is limited; it may not serve your city.",
  },
  {
    slug: "trinity-solar-review",
    name: "Trinity Solar",
    shortName: "Trinity",
    type: "national",
    serviceNote:
      "Serves the Northeast. Its review found no meaningful California operations, so it is listed here only so you can rule it out if its name comes up.",
    bestFor:
      "Homeowners outside California. In California, compare other bidders.",
    tradeoff:
      "Do not count it as one of your California bids unless it confirms in writing that it serves your address.",
  },
];

// =============================================================================
// DYNAMIC METADATA
// =============================================================================
interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  // One source for <title>, description, canonical, Open Graph and Twitter:
  // src/lib/city-pages.ts. It also dates the page (sourceCheckedDate for the
  // comparison template, git history of the city entry for this one).
  return cityPageMetadata("companies", slug) ?? {};
}

// =============================================================================
// JSON-LD SCHEMA
// =============================================================================
/**
 * The FAQ as data, rendered visibly below and emitted as FAQPage JSON-LD from
 * the same strings (2026-09-22). Before that the schema and the visible block
 * were written separately and had drifted: the visible cost answer still said
 * "before the federal tax credit" after § 25D ended, and a split-utility city
 * showed an average the schema had already withdrawn.
 */
function buildFaqs(city: CityData): FaqJsonLdItem[] {
  const utility = UTILITY_DATA[city.utilityCode];
  const needsUtilityConfirmation = city.utilityConfirmationRequired === true;
  const benchmark = STATEWIDE_COST_BENCHMARK;
  // 2026-09-23 compliance pass. The cost answer used to quote a city cash
  // price and a "$3.00–$4.50 per watt" range taken from a lead-generation
  // site, promised "$0 down" payments "below the bill", and said every company
  // above was licensed and confirmed to serve the city. None of that was
  // sourced. The one price figure left is LBNL's national benchmark
  // (src/data/solar-cost-benchmark.ts); the license answer follows CSLB.
  const benchmarkSentence = `As a benchmark, Lawrence Berkeley National Laboratory's Tracking the Sun (${benchmark.source.publishedDate}) found that host-owned residential systems installed in ${benchmark.source.dataYear} were priced at ${formatStatewideBenchmarkRange()} (${benchmark.percentileBand}, national sample), and that California sits near the middle of that range. It is not a price for ${city.name} or for your home.`;
  const isCpucIou = CPUC_IOU_CODES.has(city.utilityCode);
  return [
    {
      question: `How many solar companies operate in ${city.name}?`,
      answer: `This page does not count them, and it does not confirm that any company listed above serves your address. Eight of the nine companies above sell solar in California; the ninth, Trinity Solar, serves the Northeast. Other California installers may also bid on a ${city.county} project. Check each company's license at cslb.ca.gov and ask for written confirmation that it serves your address before you compare bids.`,
    },
    {
      question: `What's the average cost of solar in ${city.name}?`,
      answer: needsUtilityConfirmation
        ? `A citywide estimate cannot price a specific ${city.name} project or identify its electric provider. Confirm the utility from the current bill, then compare written cash prices, financing terms, equipment, production estimates, and remaining utility charges using the same project scope. ${benchmarkSentence}`
        : `No primary source publishes an average price for ${city.name}. Your price depends on the system size your usage needs, the roof, the equipment and the installer. ${benchmarkSentence} There is no federal tax credit to subtract on a system you buy in 2026: IRC § 25D does not apply to expenditures made after December 31, 2025. A loan, lease or PPA is priced by its own contract, so compare its total payments, not only the monthly figure.`,
    },
    {
      question: `Are solar companies in ${city.name} licensed?`,
      answer: `Check each one. The California Contractors State License Board (CSLB) lists the C-46 Solar classification, plus the A General Engineering, B General Building and some other specialty classifications, as licenses that can cover solar work, each within its own scope. CSLB's advice is not to use a contractor who is not licensed for solar work. Look up the license number and its classification at cslb.ca.gov before signing a contract.`,
    },
    {
      question: `How do I compare solar quotes in ${city.name}?`,
      answer: `Get at least three written quotes for the same project. Compare the total cash price and the price per watt, the panel and inverter make and model, the workmanship warranty and who performs repairs, and any production guarantee the contract actually includes. For comparison, LBNL's national benchmark for 2023 installations was ${formatStatewideBenchmarkRange()} (${benchmark.percentileBand}). A PPA or lease with an annual escalator can cost more over its term than a loan for the same system, so add up every payment in each contract before signing.`,
    },
    {
      question: `What rebates apply to solar in ${city.name}?`,
      answer: needsUtilityConfirmation
        ? `Programs and solar-billing rules depend on the electric provider and account. Confirm the provider from the current bill, then check that utility's current published eligibility, interconnection, export-credit, and battery-program information before relying on a proposal.`
        : `A ${city.name} homeowner who buys a system in 2026 gets no federal tax credit: IRC § 25D does not apply to expenditures made after December 31, 2025. On a lease or PPA the provider owns the system and is the one that may claim the § 48E business credit; that is the provider's tax position, not a savings figure for you. ${
            isCpucIou
              ? `State programs have their own rules and funding status: check the Self-Generation Incentive Program (SGIP) tracker for battery categories, and DAC-SASH, which the CPUC describes as open to income-qualified homeowners in disadvantaged communities. The original SASH program is closed. Under the CPUC Net Billing Tariff, ${utility.shortName} credits exported power at a value that is usually lower than the retail rate.`
              : `${utility.shortName} is a publicly owned utility, so the CPUC Net Billing Tariff and its programs do not set its solar rules. Ask ${utility.shortName} for its current solar, export-credit and rebate terms.`
          }`,
    },
  ];
}

/** Renders "cslb.ca.gov" inside an answer as the link it names. */
function FaqAnswer({ text }: { text: string }) {
  const [before, after] = text.split("cslb.ca.gov");
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <a
        href="https://www.cslb.ca.gov"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        cslb.ca.gov
      </a>
      {after}
    </>
  );
}

function buildListSchema(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Solar Companies Serving ${city.name}, California`,
    itemListElement: CA_INSTALLERS.map((ins, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Organization",
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
  if (growthCities[slug]) return <CityComparison slug={slug} />;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const utility = UTILITY_DATA[city.utilityCode];
  const needsUtilityConfirmation = city.utilityConfirmationRequired === true;
  const utilityDisplayName = city.utilityDisplayName || utility.shortName;
  const faqs = buildFaqs(city);
  const listSchema = buildListSchema(city);
  const seo = companiesPageSeo(slug);
  const dates = cityPageDates("companies", slug);
  const canonicalUrl = `https://ratereliefca.com/solar-companies/${slug}`;

  return (
    <PublicLayout
      breadcrumbLabel={`Solar companies in ${city.name}`}
      breadcrumbParent={{ label: "Solar companies in California", href: "/best-solar-companies-california" }}
    >
      <Header />
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={seo?.h1 ?? `Solar companies in ${city.name}`}
        url={canonicalUrl}
        datePublished={dates.published}
        dateModified={dates.modified}
        description={seo?.description}
      />
      <FaqJsonLd items={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      {/* Top spacing is tighter on phones so the quick check under the byline
          fits a 390x844 screen whole (2026-09-23); md and up unchanged. */}
      <main className="pb-16 pt-8 md:pt-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-4 md:mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/best-solar-companies-california"
                className="hover:text-primary"
              >
                Solar companies in California
              </Link>
              <span>/</span>
              <span className="text-foreground">Solar companies in {city.name}</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                <MapPin className="h-3 w-3 inline mr-1" />
                {city.name}, CA · {city.county}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                {seo?.h1}
              </h1>
              <Byline updated={dates.modified} className="mb-4" />
              {/* Bill-first step, right under the H1 and byline so it is on a
                  phone's first screen. It sends nothing; it opens the inquiry
                  form further down at step 2. */}
              <HeroQuickCheck
                compact
                utility={cityQuickCheckUtility("companies", slug)}
                topic={`Solar companies in ${city.name} and quote comparison`}
                className="mb-6"
              />
              <p className="text-lg text-muted-foreground">
                Nine companies California homeowners ask about, with notes on who
                each one fits and the trade-off to ask about. This page does not
                confirm that any of them serves your address: check the license
                and written coverage for your home before you compare bids.
              </p>
            </header>

            {/* Quick Context */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Installed price benchmark
                </div>
                <div className="text-2xl font-bold text-foreground">
                  ${STATEWIDE_COST_BENCHMARK.lowPerWatt.toFixed(2)}–${STATEWIDE_COST_BENCHMARK.highPerWatt.toFixed(2)}/W
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  national, {STATEWIDE_COST_BENCHMARK.source.dataYear} installs (LBNL); not a {city.name} price
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Federal credit on a 2026 purchase
                </div>
                <div className="text-2xl font-bold text-foreground">
                  None
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  IRC § 25D ended for expenditures after 2025
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Utility
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {utilityDisplayName}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {needsUtilityConfirmation
                    ? 'Confirm from current bill'
                    : utilityRateText(utility).short}
                </div>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {needsUtilityConfirmation ? (
                  <>
                    The city name does not establish the electric provider for
                    every {city.name} address. Confirm the utility on the current
                    bill, then require each installer to use that account&apos;s
                    usage and the same project scope in its proposal.
                  </>
                ) : (
                  <>
                    {city.name} sits in {utility.shortName} territory.{' '}
                    {utilityRateText(utility).sentence} The right{' '}
                    <em>installer</em> matters as much as the estimate.
                  </>
                )}
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                For each of nine companies California homeowners ask about,
                this page describes who it fits, the trade-off to ask about, and
                where to read the detailed review. California Rate Relief is
                compensated by a solar provider when a homeowner we refer signs
                an agreement. The site does not accept payment for placement.
                See{" "}
                <Link
                  href="/how-we-make-money"
                  className="text-primary underline"
                >
                  how we make money
                </Link>
                , the{" "}
                <Link
                  href="/affiliate-disclosure"
                  className="text-primary underline"
                >
                  referral service disclosure
                </Link>{" "}
                and the{" "}
                <Link href="/about" className="text-primary underline">
                  editorial approach
                </Link>
                .
              </p>
            </div>

            {/* City-Specific Context — pulls in unique paragraphs from city data so
                this page is meaningfully differentiated from the other 76 cities */}
            <div className="bg-card rounded-xl border border-border p-6 mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">
                What&apos;s Different About Solar in {city.name}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {city.introText}
              </p>
              {city.localTips && city.localTips.length > 0 && (
                <div className="space-y-3 mt-4 pt-4 border-t border-border">
                  {city.localTips.slice(0, 2).map((tip, i) => (
                    <div key={i}>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        {tip.title}
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {tip.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Local Considerations Box — varies per city */}
            <div className="prose prose-slate max-w-none mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {city.name}-Specific Solar Considerations
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {city.solarPotentialText}
              </p>
              {city.whenSolarDoesntWork && (
                <p className="text-foreground/80 leading-relaxed mt-4">
                  <strong className="text-foreground">
                    When solar may not be the right fit in {city.name}:
                  </strong>{" "}
                  {city.whenSolarDoesntWork}
                </p>
              )}
            </div>

            {/* What to compare */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              What Actually Matters When Comparing Solar Companies in{" "}
              {city.name}
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">
                    CSLB license and classification.
                  </strong>{" "}
                  <span className="text-foreground/80">
                    CSLB lists the C-46 Solar classification, plus A, B and some
                    other specialty licenses, as able to cover solar work within
                    their own scope. Look up the license number and its
                    classification at{" "}
                    <a
                      href="https://www.cslb.ca.gov/solar"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cslb.ca.gov
                    </a>{" "}
                    before signing.
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">
                    Price per watt installed.
                  </strong>{" "}
                  <span className="text-foreground/80">
                    {needsUtilityConfirmation
                      ? `Compare written cash prices and complete financing terms using the same ${city.name} project scope. Keep the confirmed utility bill separate so proposals do not substitute another provider's rates.`
                      : `Compare written cash prices and complete financing terms using the same project scope and ${utility.shortName} usage history.`}
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">
                    Workmanship warranty length.
                  </strong>{" "}
                  <span className="text-foreground/80">
                    Get the workmanship warranty term in writing, along with who
                    performs repairs and what the warranty excludes. Terms vary
                    by company, so compare them line by line across bids.
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">
                    Panel and inverter brands.
                  </strong>{" "}
                  <span className="text-foreground/80">
                    Insist on the exact panel and inverter make and model in the
                    contract, so you can check each datasheet and manufacturer
                    warranty yourself before signing.
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">
                    In-house crew vs subcontracted.
                  </strong>{" "}
                  <span className="text-foreground/80">
                    Some national brands subcontract installs to local crews.
                    Quality varies by dealer. Ask directly: &ldquo;Will your own
                    W-2 employees do my install, or a subcontractor?&rdquo;
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <AlertTriangle className="h-5 w-5 text-status-warning flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">NEM 3.0 realism.</strong>{" "}
                  <span className="text-foreground/80">
                    {needsUtilityConfirmation
                      ? 'Confirm the electric provider first. Each proposal should name the current export and interconnection rules it applies to the account, then show the same production and battery assumptions.'
                      : `Have each proposal name the current ${utility.shortName} export and interconnection rules it uses, then show the production and battery assumptions behind the estimate.`}
                  </span>
                </div>
              </li>
            </ul>

            {/* Installer List */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              9 Solar Companies to Compare for a {city.name} Home
            </h2>
            <div className="space-y-4 mb-10">
              {CA_INSTALLERS.map((ins) => (
                <div
                  key={ins.slug}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {ins.name}
                    </h3>
                    <Link
                      href={`/solar-installers/${ins.slug}`}
                      className="text-sm text-primary hover:underline flex items-center gap-1 whitespace-nowrap"
                    >
                      Read full review <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">
                    {ins.serviceNote}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                        Best fit for
                      </div>
                      <p className="text-foreground/80">{ins.bestFor}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-status-warning uppercase tracking-wide mb-1">
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
              Check a {city.name} Solar Quote
            </h2>
            <p className="text-foreground/80 mb-6">
              {needsUtilityConfirmation
                ? `Use the current ${city.name} bill below without selecting a provider by city name. Confirm the utility before comparing any proposal's rate or export assumptions.`
                : `Enter your ${utility.shortName} bill and the terms from a lease, PPA or loan quote to add up what the contract costs over its term.`}
            </p>
            <div className="mb-12">
              {needsUtilityConfirmation ? (
                <BillComparison utilityName="utility" />
              ) : (
                <SavingsCalculator />
              )}
            </div>

            <div className="mb-12">
              <SolarInquiry
                utility={needsUtilityConfirmation ? '' : city.utilityCode}
                topic={`Solar companies in ${city.name} and quote comparison`}
              />
            </div>

            {/* Local context */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              The Bottom Line for {city.name} Homeowners
            </h2>
            <div className="prose prose-slate max-w-none mb-10">
              <p className="text-foreground/80 leading-relaxed">
                {city.bottomLine}
              </p>
            </div>

            {/*
              Contract-risk reading, in the article body.

              Phase 1 of the 2026-09-17 California strategy: the /solar-problems
              cluster had zero inbound content links from outside its own
              subtree, while the /solar-companies city layer earned 35,424
              impressions in the 2026-08-12..2026-09-08 GSC window. A reader
              comparing installers for one city is exactly the reader who needs
              the fee, escalator, lien and door-to-door pages, so the links sit
              here rather than in the site chrome.
            */}
            <RelatedGuides
              heading={`Before you sign anything in ${city.name}`}
              intro="What the paperwork does, in the order it tends to cause trouble."
              links={[
                {
                  href: "/solar-problems/solar-dealer-fees-explained",
                  label: "How dealer fees pay for a low advertised rate",
                },
                {
                  href: "/solar-problems/solar-escalator-clause-explained",
                  label: "The escalator clause, and what it does to year 15",
                },
                {
                  href: "/solar-problems/ucc-1-lien-solar-california",
                  label: "UCC-1 liens and what they attach to",
                },
                {
                  href: "/solar-problems/solar-contract-red-flags-california",
                  label: "Contract red flags in the California disclosure forms",
                },
                {
                  href: "/solar-problems/solar-door-to-door-sales-california",
                  label: "What a door-to-door rep can and cannot legally do",
                },
                {
                  href: "/solar-problems/solar-sales-tactics-california",
                  label: "Common sales tactics and what each one obscures",
                },
                {
                  href: "/solar-problems",
                  label: "All California solar problem guides",
                },
              ]}
            />

            {/* Companion route + nearby cities (internal linking) */}
            <NearbyCities city={city} variant="companies" />

            {/* Related */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              Related Reading
            </h2>
            <ul className="space-y-2 mb-10">
              {hasSavingsCityPage(city.slug) && (
              <li>
                <Link
                  href={`/solar-savings/${city.slug}`}
                  className="text-primary hover:underline"
                >
                  {city.name} Solar Savings Guide
                </Link>
                <span className="text-foreground/60">
                  ; rates, system sizing, and incentive deep-dive.
                </span>
              </li>
              )}
              {getPublishableCityCostSlugs().includes(city.slug) && (
              <li>
                <Link
                  href={cityCostPath(city.slug)}
                  className="text-primary hover:underline"
                >
                  What Solar Costs in {city.name}
                </Link>
                <span className="text-foreground/60">
                  ; the utility rate, permits, and ownership rules that set the price.
                </span>
              </li>
              )}
              <li>
                <Link
                  href="/best-solar-companies-california"
                  className="text-primary hover:underline"
                >
                  Best Solar Companies in California (Statewide Rankings)
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/nem-3-california-still-worth-it"
                  className="text-primary hover:underline"
                >
                  Is Solar Still Worth It Under NEM 3.0?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
                  className="text-primary hover:underline"
                >
                  PPA vs Loan vs Lease vs Cash. California Comparison
                </Link>
              </li>
            </ul>

            {/* FAQs */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">
              Frequently Asked Questions, Solar Companies in {city.name}
            </h2>
            <div className="space-y-6 mb-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-foreground/80">
                    <FaqAnswer text={faq.answer} />
                  </p>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="p-5 rounded-xl border border-border bg-card text-sm">
              <div className="font-bold text-foreground mb-2">
                How California Rate Relief is paid
              </div>
              <p className="text-foreground/70">
                California Rate Relief is compensated by a solar provider when a
                homeowner we refer signs an agreement. It does not install
                anything and is not a contractor. A company appearing on this
                page is not a promise that your inquiry will be sent to that
                company, and the site does not accept payment for placement.
                Read{" "}
                <Link
                  href="/how-we-make-money"
                  className="text-primary underline"
                >
                  how we make money
                </Link>{" "}
                and the{" "}
                <Link
                  href="/affiliate-disclosure"
                  className="text-primary underline"
                >
                  referral service disclosure
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <RelatedInstallers picks="general" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <TrustedSources
          domain="crr"
          variant="compact"
          palette={{
            fg: "hsl(var(--foreground))",
            muted: "hsl(var(--foreground) / 0.85)",
            mutedFg: "hsl(var(--muted-foreground))",
            accent: "hsl(var(--primary))",
            cardBg: "hsl(var(--card))",
            cardBorder: "hsl(var(--border))",
          }}
        />
      </div>
    </PublicLayout>
  );
}
