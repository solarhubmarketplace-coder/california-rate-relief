import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SavingsCalculator from '@/components/SavingsCalculator';
import { BillComparison } from '@/components/growth/BillComparison';
import { LadwpSavingsGuide, ladwpSavingsTitle, ladwpSavingsDescription } from '@/components/growth/LadwpSavingsGuide';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Sun, Zap, DollarSign, Home } from 'lucide-react';
import {
  CITIES,
  UTILITY_DATA,
  CPUC_IOU_CODES,
  getCityBySlug,
  getAllCitySlugs,
  type CityData,
  type UtilityData,
} from '@/data/cities-data';
import {
  STATEWIDE_COST_BENCHMARK,
  formatStatewideBenchmarkRange,
} from '@/data/solar-cost-benchmark';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { NearbyCities } from '@/components/shared/NearbyCities';
import { Byline } from '@/components/trust/Byline';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { cityPageDates, cityPageMetadata, regionalHubsFor, savingsPageSeo } from '@/lib/city-pages';

// =============================================================================
// STATIC PARAMS — Pre-renders all city pages at build time
// =============================================================================
export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

// =============================================================================
// DYNAMIC METADATA — SEO title, description, OG tags per city
// =============================================================================
interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  if (slug === 'los-angeles') return {
    title: ladwpSavingsTitle,
    description: ladwpSavingsDescription,
    alternates: { canonical: '/solar-savings/los-angeles' },
    openGraph: { title: ladwpSavingsTitle, description: ladwpSavingsDescription, type: 'article', modifiedTime: '2026-09-11T00:00:00Z', url: 'https://ratereliefca.com/solar-savings/los-angeles' },
  };
  // Title, description, canonical, Open Graph and Twitter from one place
  // (src/lib/city-pages.ts). city.metaTitle / ogTitle are no longer read: they
  // had drifted apart (the og title said "Solar Savings…" under a "Solar
  // Panels…" <title>, and Twitter fell back to the site default).
  return cityPageMetadata('savings', slug) ?? {};
}

// =============================================================================
// JSON-LD SCHEMA GENERATORS
// =============================================================================
// No LocalBusiness schema (design pass 2, 2026-09-22). California Rate Relief
// has no premises in any city, so a per-city LocalBusiness node — with an
// areaServed city and a "$0 down" priceRange — described something that does
// not exist. Removed rather than reworded.

function buildFAQSchema(city: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================
export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  if (slug === 'los-angeles') return <LadwpSavingsGuide />;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const utility = UTILITY_DATA[city.utilityCode];
  const needsUtilityConfirmation = city.utilityConfirmationRequired === true;
  const utilityDisplayName = city.utilityDisplayName || utility.shortName;
  const rateDisplay = needsUtilityConfirmation
    ? 'Check bill'
    : utility.rateDisplay || `${(utility.ratePerKwh * 100).toFixed(1)}¢`;
  // CARE, FERA, DAC-SASH, SGIP and the Net Billing Tariff are CPUC programs for
  // PG&E, SCE and SDG&E customers. A city on SMUD, GWP or Lodi Electric was
  // being told about programs its utility does not run (2026-09-23 pass).
  const isCpucIou = !needsUtilityConfirmation && CPUC_IOU_CODES.has(city.utilityCode);
  const benchmark = STATEWIDE_COST_BENCHMARK;

  const faqSchema = buildFAQSchema(city);
  const seo = savingsPageSeo(city);
  const dates = cityPageDates('savings', city.slug);
  const hub = regionalHubsFor(city.slug)[0];

  return (
    <PublicLayout
      breadcrumbLabel={`Solar savings in ${city.name}`}
      breadcrumbParent={hub ? { label: `${hub.region} solar guide`, href: hub.href } : undefined}
    >
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline={seo.h1}
        url={`https://ratereliefca.com/solar-savings/${city.slug}`}
        datePublished={dates.published}
        dateModified={dates.modified}
        description={seo.description}
      />
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb (matches the BreadcrumbList schema) */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              {hub && (
                <>
                  <Link href={hub.href} className="hover:text-primary">{hub.region} solar guide</Link>
                  <span>/</span>
                </>
              )}
              <span className="text-foreground">Solar savings in {city.name}</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                {city.name}, CA
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                {seo.h1}
              </h1>
              <Byline updated={dates.modified} className="mb-4" />
              <p className="text-lg text-muted-foreground">
                A guide for {city.name} homeowners: your utility&apos;s rate
                plans and assistance programs, what drives the cost of solar,
                HOA rules, and the options for lowering your electric bill.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {rateDisplay}
                </div>
                <div className="text-xs text-muted-foreground">
                  {needsUtilityConfirmation
                    ? utilityDisplayName
                    : utility.rateLabel || `${utility.shortName} avg. rate/kWh`}
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <DollarSign className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {isCpucIou ? `$${utility.fixedCharge.toFixed(2)}` : 'Use bill'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {isCpucIou ? 'Monthly fixed charge (CPUC D.24-05-028)' : 'Actual account'}
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Sun className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {city.peakSunHours} hrs
                </div>
                <div className="text-xs text-muted-foreground">
                  Peak sun hours/day
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Home className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {city.population}
                </div>
                <div className="text-xs text-muted-foreground">
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-slate max-w-none">
              {/* Intro */}
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {city.introText}
              </p>

              {/* What Residents Pay */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                What {city.name} Residents Actually Pay for Electricity
              </h2>
              {city.electricitySection.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground/80 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}

              {needsUtilityConfirmation ? (
                <>
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    Step 1: Confirm the Utility on Your Bill
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    A {city.name} address alone does not establish the electric
                    provider. Read the utility name and current rate schedule on
                    the bill before using any rate, export-credit, assistance,
                    or solar-savings assumption.
                  </p>
                  {city.utilityLookupUrls && city.utilityLookupUrls.length > 0 && (
                    <ul className="mb-6 space-y-2">
                      {city.utilityLookupUrls.map((source) => (
                        <li key={source.url}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    Step 2: Check the Confirmed Utility&apos;s Current Options
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Once the provider is confirmed, use its current account and
                    published pages to check the rate plan, income-qualified
                    assistance, medical programs, and solar rules that apply to
                    that account. Do not carry one utility&apos;s programs or
                    assumptions over to another utility.
                  </p>
                </>
              ) : (
                <>
                  {/* Step 1: Check Rate Plan */}
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    Step 1: Check Your {utility.shortName} Rate Plan
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Before anything else, log into your{' '}
                    <a href={utility.accountUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {utility.shortName} account
                    </a>{' '}
                    and check which rate plan you&apos;re on. {utility.ratePlanAdvice}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    If you can shift heavy electricity use (laundry, dishwasher, EV
                    charging, pool pump) to the lower-priced hours on a
                    time-of-use plan, that plan may cost you less than the one
                    you are on. The rate comparison in your account shows the
                    difference using your own usage, not an average.
                    {city.name === 'Temecula' &&
                      ' In Temecula specifically, pre-cooling your home before 4 PM during summer and running the pool pump in the morning are two of the highest-impact changes.'}
                  </p>
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    Step 2: Check If You Qualify for Discounts
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {isCpucIou ? (
                      <>
                        {utility.shortName} runs the CPUC&apos;s income-based
                        discount programs. According to the CPUC,{' '}
                        <strong>CARE</strong> gives a 30–35% discount on the
                        electric bill for households under its income limits,
                        and <strong>FERA</strong> gives an 18% discount on the
                        electric bill for households of any size with income
                        between the CARE limit and 250% of the federal poverty
                        guidelines. Check eligibility and apply at{' '}
                      </>
                    ) : (
                      <>
                        {utility.shortName} is a publicly owned utility, so the
                        CPUC&apos;s CARE and FERA programs are not its programs.
                        Check its own income-qualified and medical discount
                        programs at{' '}
                      </>
                    )}
                    <a href={utility.careFeraUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {utility.shortName}&apos;s assistance page
                    </a>.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    If anyone in your household relies on electricity-dependent
                    medical equipment, check the utility&apos;s current medical
                    assistance eligibility and terms.
                  </p>
                </>
              )}

              {/* Solar Potential */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                {city.name}&apos;s Solar Potential
              </h2>
              {city.solarPotentialText.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground/80 leading-relaxed mb-6"
                >
                  {paragraph}
                  {i === city.solarPotentialText.split('\n\n').length - 1 && (
                    <>
                      {' '}
                      You can check your specific home&apos;s roof at{' '}
                      <a
                        href={city.googleSunroofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Google Project Sunroof
                      </a>
                      .
                    </>
                  )}
                </p>
              ))}

              {/* What Solar Costs */}
              {needsUtilityConfirmation ? (
                <>
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    Compare Written Solar Quotes in {city.name}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    A citywide system size, payment, or payback estimate is not a
                    substitute for the actual account and project. Give each
                    bidder the same confirmed utility, twelve months of usage,
                    roof and shade information, and requested backup loads.
                  </p>
                  <ul className="space-y-3 text-foreground/80 mb-8">
                    <li>
                      <strong>Comparable design:</strong> require the DC system
                      size, module and inverter models, roof planes, shade
                      assumptions, and each bidder&apos;s monthly production estimate.
                    </li>
                    <li>
                      <strong>Itemized cash scope:</strong> separate solar,
                      battery, roof, electrical, permit, and interconnection work
                      before comparing loans, leases, or PPAs.
                    </li>
                    <li>
                      <strong>Complete obligations:</strong> compare the written
                      payment schedule, escalation if any, term, transfer terms,
                      service responsibility, exclusions, and modeled remaining
                      utility charges.
                    </li>
                    <li>
                      <strong>Utility assumptions:</strong> have each bidder name
                      the rate, export, and interconnection rules used for the
                      confirmed account.
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    What Solar Costs in {city.name}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    No primary source publishes a solar price for {city.name}.
                    The price of your system depends on the size your usage
                    needs, the roof, the equipment and the installer. As a
                    benchmark, Lawrence Berkeley National Laboratory&apos;s{' '}
                    <a href={benchmark.source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Tracking the Sun
                    </a>{' '}
                    ({benchmark.source.publishedDate}) found that host-owned
                    residential systems installed in {benchmark.source.dataYear}{' '}
                    were priced at {formatStatewideBenchmarkRange()} (
                    {benchmark.percentileBand}, national sample), with
                    California near the middle. It is not a price for{' '}
                    {city.name}. Here is how the payment options differ.
                  </p>

              {/* Cost Comparison Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">
                        Option
                      </th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">
                        Upfront Cost
                      </th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">
                        Monthly Cost
                      </th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">
                        What to compare
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Cash purchase
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Full system price
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Remaining utility charges
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Cash price, equipment, warranty
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Solar loan
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Set by the loan terms
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Loan payment + remaining utility charges
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        APR, term, dealer fee, total of payments
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Solar PPA or lease
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Set by the contract
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        PPA or lease payment + remaining utility charges
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Starting price, escalator, term, transfer terms
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        No solar ({needsUtilityConfirmation ? 'current utility' : `${utility.shortName} only`})
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        —
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        {needsUtilityConfirmation ? 'Use actual bill' : `Your current ${utility.shortName} bill`}
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground/60 text-xs mb-8 italic">
                No city-level prices, payments or payback periods are shown
                because no primary source publishes them for {city.name}. Every
                option still leaves remaining utility charges
                {needsUtilityConfirmation
                  ? ' from the confirmed utility bill'
                  : isCpucIou
                  ? ` (the $${utility.fixedCharge.toFixed(2)} monthly fixed charge under CPUC Decision 24-05-028, plus any power you still buy)`
                  : ' (any power you still buy)'}
                .
              </p>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Get at least three written quotes for the same system
                    before committing to any option, and compare the cash
                    price, the price per watt, the equipment, the warranty and
                    the total of every payment line by line.
                  </p>
                </>
              )}

              {/* HOA Rules */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                HOA Rules for Solar in {city.name}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Many {city.name} neighborhoods have HOAs, and homeowners often
                worry about getting approval for solar panels. Here&apos;s what
                you need to know: under California&apos;s Solar Rights Act
                (Civil Code § 714), your HOA{' '}
                <strong>cannot prohibit</strong> you from installing solar
                panels. They can impose reasonable aesthetic restrictions (like
                panel placement preferences), but any restriction that increases
                your system cost by more than $1,000 or reduces efficiency by
                more than 10% is legally unenforceable.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                In practice, you typically submit an architectural review
                application. Under Civil Code § 714, if the HOA doesn&apos;t
                deny it in writing within 45 days of receiving it, the
                application is deemed approved. An HOA that willfully violates
                the law can owe actual damages and a civil penalty of up to
                $1,000, and in a court action the prevailing party is awarded
                reasonable attorney&apos;s fees.
              </p>

              {/* Utility rules & battery */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                {needsUtilityConfirmation ? 'Utility Rules' : utility.nemVersion} and Battery Storage in {city.name}
              </h2>
              {needsUtilityConfirmation ? (
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Confirm the electric provider before comparing export credits,
                  interconnection rules, time-of-use periods, or battery value.
                  Have each proposal use the same actual usage history, confirmed
                  utility, roof design, and backup-load scope. For background on
                  California investor-owned utility billing, see our{' '}
                  <Link href="/blog/nem-3-california-still-worth-it" className="text-primary hover:underline">
                    NEM 3.0 guide
                  </Link>, then verify the rule for the account.
                </p>
              ) : (
                <>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {isCpucIou
                      ? `${city.name} is in ${utility.shortName} territory, where new solar customers have taken service on the CPUC Net Billing Tariff since April 15, 2023. According to the CPUC, the credit for the excess solar energy you send back to the grid is usually lower than the retail rate you pay for grid power, though it can rise above it on late summer evenings.`
                      : `${city.name} is served by ${utility.shortName}, a publicly owned utility that sets its own rules for solar customers; the CPUC Net Billing Tariff covers only PG&E, SCE and SDG&E. Ask ${utility.shortName} what an exported kWh earns, and when, before comparing proposals.`}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    A battery can store excess daytime solar for later use. Compare
                    the battery settings and backup loads alongside the{' '}
                <Link
                  href="/blog/nem-3-california-still-worth-it"
                  className="text-primary hover:underline"
                >
                  NEM 3.0 guide
                </Link>
                    .
                  </p>
                </>
              )}
              <p className="text-foreground/80 leading-relaxed mb-6">
                {isCpucIou
                  ? "California's Self-Generation Incentive Program (SGIP) has offered battery storage rebates, but its categories open, close and waitlist separately. Check the exact category on the official tracker at "
                  : `California's Self-Generation Incentive Program (SGIP) is run for customers of the investor-owned utilities. Ask ${needsUtilityConfirmation ? 'your confirmed utility' : utility.shortName} about any battery program of its own, and check SGIP eligibility with the administrator at `}
                <a
                  href="https://www.selfgenca.com/home/program_metrics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  selfgenca.com
                </a>
                . A waitlist or remaining balance does not promise a rebate.
              </p>

              {/* When Solar Doesn't Work */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                When Solar Doesn&apos;t Make Sense in {city.name}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {city.whenSolarDoesntWork}
              </p>

              {/* City-Specific Tips */}
              {city.localTips.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    {city.name}-Specific Tips
                  </h2>
                  {city.localTips.map((tip, i) => (
                    <p
                      key={i}
                      className="text-foreground/80 leading-relaxed mb-6"
                    >
                      <strong>{tip.title}</strong> {tip.content}
                    </p>
                  ))}
                </>
              )}

              {/* FAQs */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Frequently Asked Questions
              </h2>
              {city.faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-foreground mt-6 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {faq.answer}
                  </p>
                </div>
              ))}

              {/* Tax Credit FAQ — shared across all cities */}
              <h3 className="text-lg font-bold text-foreground mt-6 mb-2">
                Is the federal solar tax credit still available?
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                No. IRC § 25D does not apply to expenditures made after
                December 31, 2025, and the IRS treats the expenditure as made
                when installation is complete, so a system you buy in 2026 gets
                no federal residential credit. On a lease or PPA the provider
                owns the system and is the one that may claim the § 48E
                business credit; that is the provider&apos;s tax position, not
                a savings figure for you. See our{' '}
                <Link
                  href="/blog/solar-tax-credit-expired-2026-options"
                  className="text-primary hover:underline"
                >
                  full guide on post-tax-credit options
                </Link>
                .
              </p>

              {/* Bottom Line */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                The Bottom Line for {city.name}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {city.bottomLine}
              </p>
            </div>

            {/* Savings Calculator */}
            {needsUtilityConfirmation ? (
              <BillComparison utilityName="utility" />
            ) : (
              <SavingsCalculator
                defaultUtility={city.utilityCode}
                cityName={city.name}
              />
            )}

            {/* CTA */}
            <div className="mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
                {city.name} Homeowner? See Your Options
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                If you want a solar provider to review your project, send your
                details through the form below. California Rate Relief is
                compensated by a solar provider when a homeowner we refer signs
                an agreement. A submission is not a quote, financing approval or
                program eligibility decision.
              </p>
              <Link
                href="#solar-inquiry"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Request a solar review
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8">
              <SolarInquiry
                utility={needsUtilityConfirmation ? '' : city.utilityCode}
                topic={`${city.name} solar savings and quote comparison`}
              />
            </div>

            {/* Companion route + nearby cities (internal linking) */}
            <NearbyCities city={city} variant="savings" />

            {/* Related Content */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Related Articles
              </h3>
              <div className="space-y-3">
                {city.relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="block text-primary hover:underline font-medium"
                  >
                    {article.title} →
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
