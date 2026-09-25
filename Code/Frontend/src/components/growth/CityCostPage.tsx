import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Byline } from '@/components/trust/Byline';
import { TocRail, RAIL_GRID } from '@/components/trust/TocRail';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { LocalProjectGuidance } from '@/components/growth/LocalProjectGuidance';
import { CitySiblingLinks, NearbyCostCities } from '@/components/growth/NearbyCostCities';
import { RelatedGuides, type RelatedGuideLink } from '@/components/shared/RelatedGuides';
import { ContentBlock } from '@/components/growth/ContentBlocks';
import { MapPin, ArrowRight } from 'lucide-react';
import { cityCostPath, getPublishableCityCostRows, type CityCostRow } from '@/data/city-cost-data';
import { RATE_TRACKER_PATH, getUtilityRate } from '@/data/utility-rate-tracker';
import { growthCities } from '@/data/growth-cities';
import { getCityBySlug } from '@/data/cities-data';
import { companiesCityHref, hasCompaniesCityPage } from '@/lib/canonical-redirects';
import { cityQuickCheckUtility, costPageModified, costPageSeo } from '@/lib/city-pages';
import {
  COST_RULES_PATH,
  COST_RULES_TITLE,
  buildCostPageContent,
  costHubRow,
  formatVerified,
} from '@/lib/city-cost-content';

/** The next `max` cost cities after this one (alphabetical, wrapping), so every
 *  city is linked from the pages just before it. */
function otherCostCities(slug: string, max: number) {
  const rows = [...getPublishableCityCostRows()].sort((a, b) => a.city.localeCompare(b.city));
  const i = rows.findIndex((r) => r.slug === slug);
  const ordered = [...rows.slice(i + 1), ...rows.slice(0, Math.max(i, 0))];
  return ordered.slice(0, max).map(costHubRow);
}

// Per-city extra links where a city's cost page draws impressions for a query
// another page answers (topical-authority wave 2026-09-23, CREATE_DEDICATED
// holder links). Most cities have none.
const CITY_COST_EXTRA_LINKS: Record<string, RelatedGuideLink[]> = {
  'san-diego': [
    {
      href: '/blog/solar-resources',
      label: 'Official California solar resources',
      note: 'production data, license checks, net billing rules and incentives, from the agencies that publish them',
    },
  ],
};

// =============================================================================
// CityCostPage — the template behind /solar-cost/[city]
//
// Rebuilt 2026-09-24 (Block 3 of the SEO implementation plan). The query is
// "solar panel cost <city>", and the page now answers it first, with a
// sourced California figure: the median cost per watt homeowners reported to
// their utility (CPUC DG Stats), for the city when at least 30 reported, else
// the county, the utility territory or the state, always named. Then the
// city's permit fee against the Gov. Code §66015 limit, local DG Stats facts,
// the utility, and a link to the one explainer that holds the shared
// §25D / §48E / §73 / §7169 text.
//
// Every sentence in the article body comes from src/lib/city-cost-content.ts.
// This file only lays it out, so the city-page gate (src/data/city-gate.ts)
// measures the page a reader sees.
//
// HARD CONSTRAINTS
//   - A figure is a reported benchmark, labeled with its area, sample size and
//     source; never a quote, never a payback period or a savings promise.
//   - The utility rate is imported from the rate tracker, never retyped.
//   - California Rate Relief is a referral service and not a contractor. No
//     installer is named or ranked here, nothing is described as ours, and
//     nothing is called free.
//   - Rows reach this component only through the gate in city-cost-data.ts.
// =============================================================================

export { cityCostPath } from '@/data/city-cost-data';

const link = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export function CityCostPage({ row }: { row: CityCostRow }) {
  const utility = getUtilityRate(row.utilityKey);
  const content = buildCostPageContent(row);
  const split = row.utilitySplit;
  const utilityForTools = row.slug === 'corona' || split ? '' : utility.name;
  const path = cityCostPath(row.slug);
  const canonicalUrl = `https://ratereliefca.com${path}`;
  const seo = costPageSeo(row);
  const updated = costPageModified(row);

  // Cross-link to the companion /solar-companies/<city> page when one is live
  // (not redirected, and present in growthCities or CITIES).
  const companiesPageIsLive =
    hasCompaniesCityPage(row.slug) &&
    (Boolean(growthCities[row.slug]) || Boolean(getCityBySlug(row.slug)));

  return (
    <PublicLayout
      breadcrumbLabel={`Solar cost in ${row.city}`}
      breadcrumbParent={{ label: 'Solar cost by city', href: '/solar-cost' }}
    >
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline={seo.h1}
        url={canonicalUrl}
        dateModified={updated}
        description={seo.description}
      />
      <FaqJsonLd items={content.faqs} />
      <Header />
      <main className='pb-16 pt-8 md:pt-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className={`mx-auto max-w-6xl ${RAIL_GRID}`}>
          <article className='min-w-0 max-w-3xl'>
            <nav aria-label='Breadcrumb' className='mb-4 md:mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span aria-hidden='true'>/</span>
              <Link href='/solar-cost' className='hover:text-primary'>Solar cost by city</Link><span aria-hidden='true'>/</span>
              <span className='text-foreground' aria-current='page'>Solar cost in {row.city}</span>
            </nav>

            <header className='mb-6'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                {row.county} &middot; Reported cost
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                {seo.h1}
              </h1>
              <Byline updated={updated} dateLabel='Updated' sourceCount={content.sources.length} sourcesHref='#sources'>
                <span className='inline-flex items-center gap-1'><MapPin className='h-4 w-4' aria-hidden='true' />{row.city}, {row.county}</span>
              </Byline>
            </header>

            <div className='prose prose-slate max-w-none'>
              {/* ---------- The answer, first screen ---------- */}
              <section aria-label={`What solar costs in ${row.city}`} className='mb-6'>
                {content.answer.map((block, index) => (
                  <ContentBlock key={`answer-${index}`} block={block} lead />
                ))}
              </section>
            </div>

            {/* Bill-first step, after the answer. It sends nothing; it opens the
                inquiry form at the end of the page at step 2. The utility is
                pre-selected only for a single-utility city. */}
            <HeroQuickCheck
              compact
              utility={cityQuickCheckUtility('cost', row.slug)}
              topic={`Solar project in ${row.city}`}
              className='mb-8'
            />

            {/* The "On this page" rail lists every h2 inside this element. */}
            <div id='city-cost-body' className='prose prose-slate max-w-none [&_h2]:scroll-mt-24'>
              <CitySiblingLinks
                slug={row.slug}
                type='cost'
                omitStatewide={[RATE_TRACKER_PATH]}
                className='mb-8'
              />

              {content.sections.map((section) => (
                <div key={section.id}>
                  <h2 id={section.id} className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                    {section.heading}
                  </h2>
                  {section.blocks.map((block, index) => (
                    <ContentBlock key={`${section.id}-${index}`} block={block} />
                  ))}
                  {section.id === 'utility' ? <LocalProjectGuidance citySlug={row.slug} /> : null}
                </div>
              ))}

              {/* ---------- FAQ ---------- */}
              <h2 id='faq' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Frequently asked questions
              </h2>
              <div className='space-y-6'>
                {content.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>{faq.question}</h3>
                    <p className='text-foreground/80 m-0'>{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* ---------- Sources ---------- */}
              <h2 id='sources' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Sources
              </h2>
              <ul className='list-disc pl-6 space-y-2 text-sm [overflow-wrap:anywhere]'>
                {content.sources.map((source) => (
                  <li key={`${source.url}-${source.label}`}>
                    <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
                      {source.label}
                    </a>{' '}
                    &mdash; checked {formatVerified(source.verifiedAt)}
                  </li>
                ))}
              </ul>
              <p className='text-foreground/60 text-sm'>
                The tax, contract and permit rules every California city shares, with their statutes:{' '}
                <Link href={COST_RULES_PATH} className={link}>{COST_RULES_TITLE}</Link>.
              </p>
            </div>

            <div className='not-prose mt-10 grid gap-4 sm:grid-cols-2'>
              <Link
                href={content.indexRowHref}
                className='group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50'
              >
                <span className='flex items-center gap-2 font-semibold text-foreground'>
                  {row.city} in the California Solar Cost Index
                  <ArrowRight className='h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5' />
                </span>
                <span className='mt-1 block text-sm text-muted-foreground'>
                  Its permit fee, permit platform and utility beside every other city&apos;s.
                </span>
              </Link>
              {companiesPageIsLive && (
                <Link
                  href={companiesCityHref(row.slug)}
                  className='group block rounded-xl border border-primary/25 bg-primary/5 p-5 transition-colors hover:border-primary/50'
                >
                  <span className='flex items-center gap-2 font-semibold text-foreground'>
                    Compare solar companies in {row.city}
                    <ArrowRight className='h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5' />
                  </span>
                  <span className='mt-1 block text-sm text-muted-foreground'>
                    Who installs in {row.city} and what each written proposal should include.
                  </span>
                </Link>
              )}
            </div>

            {CITY_COST_EXTRA_LINKS[row.slug] && (
              <RelatedGuides heading={`More for ${row.city} homeowners`} links={CITY_COST_EXTRA_LINKS[row.slug]} />
            )}

            <NearbyCostCities row={row} />

            {/* Replaces the city_cost HubSpokeLinks block, whose labels in
                topic-hubs.ts still carry the pre-2026-09-24 titles: the same
                rotation (the next cities after this one), labeled with each
                city's own reported figure, plus the hub. */}
            <nav aria-label='Solar cost in other California cities' className='not-prose mt-10 rounded-lg border border-border bg-muted/30 p-5'>
              <h2 className='text-lg font-semibold mb-3'>Solar cost in other California cities</h2>
              <ul className='grid gap-2 text-sm sm:grid-cols-2'>
                {otherCostCities(row.slug, 6).map((other) => (
                  <li key={other.slug}>
                    <Link href={other.path} className={link}>
                      {other.city}: {other.perWatt} ({other.level})
                    </Link>
                  </li>
                ))}
              </ul>
              <p className='mt-3 text-sm'>
                <Link href='/solar-cost' className={link}>Every city by county</Link>
              </p>
            </nav>

            <SolarInquiry
              variant='bill'
              utility={utilityForTools}
              topic={`Solar project in ${row.city}`}
            />
          </article>
          <TocRail rootId='city-cost-body' />
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
