import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SavingsCalculator from '@/components/SavingsCalculator';
import { BillComparison } from '@/components/growth/BillComparison';
import { LadwpSavingsGuide, ladwpSavingsTitle, ladwpSavingsDescription } from '@/components/growth/LadwpSavingsGuide';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Sun, Zap, DollarSign, Home } from 'lucide-react';
import {
  CITIES,
  UTILITY_DATA,
  getCityBySlug,
  getAllCitySlugs,
  type CityData,
  type UtilityData,
} from '@/data/cities-data';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { NearbyCities } from '@/components/shared/NearbyCities';
import { Byline } from '@/components/trust/Byline';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import {
  cityPageDates,
  cityPageMetadata,
  cityQuickCheckUtility,
  regionalHubsFor,
  savingsPageSeo,
} from '@/lib/city-pages';

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
      {/* Top spacing is tighter on phones so the quick check under the byline
          fits a 390x844 screen whole (2026-09-23); md and up unchanged. */}
      <main className="pb-16 pt-8 md:pt-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb (matches the BreadcrumbList schema) */}
            <nav aria-label="Breadcrumb" className="mb-4 md:mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
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
              {/* Bill-first step, right under the H1 and byline so it is on a
                  phone's first screen. It sends nothing; it opens the inquiry
                  form further down at step 2. */}
              <HeroQuickCheck
                compact
                utility={cityQuickCheckUtility('savings', city.slug)}
                topic={`${city.name} solar savings and quote comparison`}
                className="mb-6"
              />
              <p className="text-lg text-muted-foreground">
                A data-driven guide for {city.name} homeowners — your local
                rates, solar costs, incentives, HOA rules, and every option for
                lowering your electric bill.
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
                  {needsUtilityConfirmation ? 'Use bill' : `$${city.avgMonthlyBill}`}
                </div>
                <div className="text-xs text-muted-foreground">
                  {needsUtilityConfirmation ? 'Actual account' : 'Avg. monthly bill'}
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
                    Step 1: Check Your {utility.shortName} Rate Plan (Free, 10
                    Minutes)
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
                    charging, pool pump) to off-peak hours (before 4 PM or after 9
                    PM), you can save 10-15% just by being on the right TOU plan.
                    {city.name === 'Temecula' &&
                      ' In Temecula specifically, pre-cooling your home before 4 PM during summer and running the pool pump in the morning are two of the highest-impact changes.'}
                  </p>
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    Step 2: Check If You Qualify for Discounts
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {utility.shortName} offers income-based discount programs that
                    many qualifying {city.name} households haven&apos;t applied
                    for. <strong>CARE</strong> provides a 30-35% discount on your
                    entire bill if your household income is below certain
                    thresholds. <strong>FERA</strong> offers an 18% discount for
                    families of 3+ with slightly higher income limits. Check
                    eligibility and apply at{' '}
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
                      You can check your specific home&apos;s solar potential
                      for free at{' '}
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
                    What Solar Costs in {city.name} (2026 Numbers)
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    The average {city.name} household needs a {city.systemSizeKw} kW
                    solar system to cover their electricity usage. Here&apos;s what
                    that looks like across different options.
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
                        Payback
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Cash purchase ({city.systemSizeKw} kW)
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        ~${city.systemCostCash.toLocaleString()}
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $0
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        ~6-7 years
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Solar loan ({city.systemSizeKw} kW)
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $0
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $180-$250
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        ~9-12 years
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Solar PPA
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $0
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $150-$200
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Day 1 savings
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
                        {needsUtilityConfirmation ? 'Use actual bill' : `$${city.avgMonthlyBill}+ (rising)`}
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground/60 text-xs mb-8 italic">
                Costs are approximate based on 2026 EnergySage data for{' '}
                {city.name}. Actual costs vary by roof, system size, and
                provider. PPA monthly costs include remaining utility charges
                {needsUtilityConfirmation
                  ? ' from the confirmed utility bill'
                  : utility.fixedCharge > 0
                  ? ` ($${utility.fixedCharge} fixed charge + any grid usage)`
                  : ' (any grid usage)'}
                .
              </p>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    To compare quotes from local installers for a purchased system,{' '}
                    <a
                      href={city.energySageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      EnergySage&apos;s {city.name} page
                    </a>{' '}
                    lets you get multiple quotes side by side. Always get at least 3
                    quotes before committing to any option.
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
                In practice, most {city.name} HOAs have streamlined their solar
                approval process because so many homeowners are going solar. You
                typically submit an architectural review application, and if the
                HOA doesn&apos;t respond with a written denial within 45 days,
                your application is deemed approved by default. If your HOA
                gives you pushback, the law is clearly on your side — and they
                can be liable for damages plus your attorney&apos;s fees if
                they unreasonably block your installation.
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
                    {city.name} is on {utility.shortName}&apos;s {utility.nemVersion} tariff,
                    which means the excess solar energy you send back to the grid earns
                    only {utility.exportRate} — far less than the {rateDisplay}+ you pay
                    to buy it back during peak hours.
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
                California&apos;s Self-Generation Incentive Program (SGIP) may
                still offer rebates for battery storage — check current
                availability at{' '}
                <a
                  href="https://www.selfgenca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  selfgenca.com
                </a>
                . SGIP funds are limited and allocated first-come, first-served.
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
                The residential tax credit (Section 25D) expired at the end of
                2025. If you buy a system outright, there is no federal credit.
                However, the commercial credit (Section 48E) is still
                available, which is how PPA providers can offer $0-down solar
                at rates below utility prices. See our{' '}
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
                If you&apos;re exploring the PPA route, check your eligibility
                for the California Rate Relief Program in about 60 seconds. No
                cost, no obligation.
              </p>
              <Link
                href="#solar-inquiry"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Check My Eligibility
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
