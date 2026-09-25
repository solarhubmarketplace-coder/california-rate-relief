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
  UTILITY_DATA,
  CPUC_IOU_CODES,
  getCityBySlug,
  getAllCitySlugs,
  type CityData,
} from '@/data/cities-data';
import { NearbyCities } from '@/components/shared/NearbyCities';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { CitySupplySections, citySupplyFacts } from '@/components/growth/CitySupply';
import { getPublishableCityCostSlugs, cityCostPath } from '@/data/city-cost-data';
import { cityBillCopy } from '@/lib/city-bill-content';
import { CitySiblingLinks } from '@/components/growth/NearbyCostCities';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { RATE_TRACKER_PATH } from '@/data/utility-rate-tracker';
import { Byline } from '@/components/trust/Byline';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import {
  cityPageDates,
  cityPageMetadata,
  cityQuickCheckUtility,
  growthUtilityForForm,
  isLiveCityPage,
  savingsCityCrumbs,
  savingsPageSeo,
} from '@/lib/city-pages';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';

/** The utility's own high-bill explainer, where the site has one (Block 5 §4.2). */
const HIGH_BILL_POST: Record<string, { href: string; label: string }> = {
  pge: { href: '/blog/why-is-my-pge-bill-so-high', label: 'PG&E high-bill breakdown' },
  sce: { href: '/blog/why-is-my-sce-bill-so-high', label: 'SCE high-bill breakdown' },
  sdge: { href: '/blog/why-is-my-sdge-bill-so-high', label: 'SDG&E high-bill breakdown' },
  ladwp: { href: '/blog/why-is-my-ladwp-bill-so-high', label: 'LADWP high-bill breakdown' },
};

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

/**
 * 2026-09-24 (Block 3.4): the FAQ is the bills page's own questions when it
 * has them, otherwise the provider, cost and plan questions built from
 * savings-providers.ts. The older per-city FAQs (solar cost, HOA, sun hours)
 * belonged to other pages or had no source, and are no longer rendered.
 */
function pageFaqs(city: CityData, supplyFaqs: FaqJsonLdItem[]): FaqJsonLdItem[] {
  return city.bills?.faqs?.length ? city.bills.faqs : supplyFaqs;
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
  const supply = citySupplyFacts(city);
  // CARE, FERA and the Net Billing Tariff are CPUC programs for PG&E, SCE and
  // SDG&E customers only (2026-09-23 pass).
  const isCpucIou = !needsUtilityConfirmation && CPUC_IOU_CODES.has(city.utilityCode);
  const faqs = pageFaqs(city, supply.faqs);
  const seo = savingsPageSeo(city);
  const dates = cityPageDates('savings', city.slug);
  const crumbs = savingsCityCrumbs(city.slug);
  const crumbLabel = city.bills ? `${city.name} bills and rates` : `${city.name} electricity provider and rates`;
  const companiesHref = isLiveCityPage('companies', city.slug) ? `/solar-companies/${city.slug}` : undefined;
  const costHref = getPublishableCityCostSlugs().includes(city.slug) ? cityCostPath(city.slug) : undefined;
  // The city's sourced bill copy from growth-cities.ts, moved here from its
  // companies page (lib/city-bill-content.ts).
  const billCopy = city.bills ? null : cityBillCopy(city.slug);
  const sources = city.bills
    ? city.bills.sources
    : [...supply.sources, ...(billCopy?.sources ?? []).filter((s) => !supply.sources.some((t) => t.url === s.url))];

  return (
    <PublicLayout breadcrumbLabel={crumbLabel} breadcrumbParents={crumbs}>
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
      <FaqJsonLd items={faqs} />
      {/* Top spacing is tighter on phones (2026-09-23); md and up unchanged. */}
      <main className="pb-16 pt-8 md:pt-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb (matches the BreadcrumbList schema) */}
            <BreadcrumbTrail
              crumbs={crumbs}
              current={crumbLabel}
              className="mb-4 md:mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap"
            />

            {/* Header: the answer first, then the bill-first quick check
                (2026-09-24, Block 3.4 / 7.1). */}
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                {city.name}, CA
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                {seo.h1}
              </h1>
              <Byline updated={dates.modified} className="mb-4" />
              <p className="text-lg text-foreground/85 leading-relaxed mb-6">
                {city.bills ? city.bills.answer : supply.answer}
              </p>
              <HeroQuickCheck
                compact
                utility={cityQuickCheckUtility('savings', city.slug)}
                topic={`${city.name} solar savings and quote comparison`}
              />
            </header>

            {/* 2026-09-23: this city's other pages, one per question. */}
            <CitySiblingLinks
              slug={city.slug}
              type="savings"
              omitStatewide={[RATE_TRACKER_PATH]}
              className="mb-10"
            />

            {/* Quick facts: who delivers, who generates, the average rate
                and the fixed charge (every value sourced below). */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Home className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">
                  {supply.split ? 'Split' : utilityDisplayName}
                </div>
                <div className="text-xs text-muted-foreground">
                  {supply.split ? 'Utility depends on the address' : 'Delivers the power'}
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Sun className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">
                  {supply.generation?.cca ? supply.generation.cca.short : supply.split ? 'Check bill' : utility.shortName}
                </div>
                <div className="text-xs text-muted-foreground">Supplies the generation</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">
                  {supply.rateCents !== null ? `${supply.rateCents.toFixed(1)}¢/kWh` : 'Own schedule'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {supply.rateCents !== null ? `${supply.utility} average, ${supply.rateAsOf}` : `${supply.utility} sets its rates`}
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <DollarSign className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">
                  {isCpucIou ? '$24.15/mo' : 'Use bill'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {isCpucIou ? 'Fixed charge (CPUC D.24-05-028)' : 'Fixed charges vary'}
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-slate max-w-none">
              {/* Bills and rates pages (Decision 18) keep their own sourced
                  sections; every other city gets the provider, cost, plan,
                  discount and solar-billing sections (Decision 42). */}
              {city.bills ? (
                city.bills.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-foreground/80 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}
                    {section.links && section.links.length > 0 && (
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        <span className="font-semibold">Read next:</span>{' '}
                        {section.links.map((link, i) => (
                          <span key={link.href}>
                            {i > 0 && ' · '}
                            <Link href={link.href} className="text-primary hover:underline">
                              {link.label}
                            </Link>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <>
                  <CitySupplySections facts={supply} companiesHref={companiesHref} costHref={costHref} />
                  {billCopy ? (
                    <>
                      <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                        Reading a {city.name} solar bill
                      </h2>
                      <p className="text-foreground/80 leading-relaxed mb-6">{billCopy.bill}</p>
                      {billCopy.sections.map((section) => (
                        <div key={section.heading}>
                          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">{section.heading}</h2>
                          {section.paragraphs.map((paragraph, i) => (
                            <p key={i} className="text-foreground/80 leading-relaxed mb-6">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ))}
                    </>
                  ) : null}
                </>
              )}

              <p className="text-foreground/80 leading-relaxed mb-6">
                If the bill itself is the problem, start with{' '}
                <Link href="/blog/why-is-my-california-electric-bill-so-high" className="text-primary hover:underline">
                  why California electric bills run high
                </Link>
                {HIGH_BILL_POST[city.utilityCode] && !needsUtilityConfirmation ? (
                  <>
                    {' '}and the{' '}
                    <Link href={HIGH_BILL_POST[city.utilityCode].href} className="text-primary hover:underline">
                      {HIGH_BILL_POST[city.utilityCode].label}
                    </Link>
                  </>
                ) : null}
                .
              </p>

              {/* FAQs (FAQPage schema above is built from these strings) */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                {city.name} electricity questions
              </h2>
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-bold text-foreground mt-6 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {faq.answer}
                  </p>
                </div>
              ))}

              {/* Sources (every page; 51 had none before 2026-09-24). */}
              <h2 id="sources" className="text-2xl font-bold text-foreground mt-10 mb-4">
                Sources
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm [overflow-wrap:anywhere]">
                {sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {source.label}
                    </a>{' '}
                    (checked {source.fetchedAt})
                  </li>
                ))}
              </ul>
            </div>

            {/* The page's tools and its one ask: the bill and quote tool, the
                CTA and the inquiry form, unchanged. Marked like DecisionPage's
                inquiry block so the contents list and prose checks skip it. */}
            <div data-toc-ignore="">
            <div className="mt-12">
              {needsUtilityConfirmation ? (
                <BillComparison utilityName="utility" />
              ) : (
                <SavingsCalculator
                  defaultUtility={city.utilityCode}
                  cityName={city.name}
                />
              )}
            </div>

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
              {/* growthUtilityForForm: a city-utility code the form does not
                  list ('cpau', 'gwp') reaches it as the utility's name. */}
              <SolarInquiry
                utility={needsUtilityConfirmation ? '' : growthUtilityForForm(city.utilityCode)}
                topic={`${city.name} solar savings and quote comparison`}
              />
            </div>

            </div>

            {/* Companion route + nearby cities (internal linking) */}
            <NearbyCities city={city} variant="savings" />

            <HubSpokeLinks
              hub="city_bills"
              currentPath={`/solar-savings/${city.slug}`}
              max={6}
              title="Electric rates and bills in other California cities"
            />

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
    </PublicLayout>
  );
}
