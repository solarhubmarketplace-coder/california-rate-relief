import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, QuickAnswer, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// Tier 3 (2026-09-23). California prices follow the serving utility, the CCA
// and the rate plan, not the ZIP code, so this page teaches the lookup and
// gives each utility's sourced price instead of publishing a per-ZIP table
// that no primary source supports.

const path = '/blog/electricity-rates-by-zip-code';
const url = `https://ratereliefca.com${path}`;
const title = 'Electricity Rates by ZIP Code in California (2026)';
const h1 = 'Electricity Rates by ZIP Code in California: How to Find Your Real Rate';
const description =
  'California rates follow your utility, CCA and plan, not your ZIP. Find who serves your address and compare 2026 prices for PG&E, SCE, SDG&E, SMUD, LADWP.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'cpucRateComparison',
  'cecServiceAreas',
  'calccaMap',
  'openeiUrdb',
  'paoQ2_2026',
  'eiaEpm56a',
  'eiaEpmFeb2026',
  'smudCompare',
  'pgeResRatesCurrent',
  'pgeBaseline',
  'sceTou',
  'sdgeTouDr1Aug2026',
  'sdgeBaselineCalc',
  'smudResRates',
  'ladwpResRates',
  'pgeCca',
  'cpucDaProgram',
);

const faqs = [
  {
    question: 'What is the electricity rate for my ZIP code in California?',
    answer:
      "It depends on which utility serves the address, whether a community choice aggregator (CCA) supplies the power, and your rate plan. Enter your ZIP code, city or county in the CPUC's California Electric Rate Comparison tool to see the utility and CCA rates for that area, then match them to the plan printed on your bill.",
  },
  {
    question: 'Why do two homes in the same ZIP code pay different rates?',
    answer:
      'They can be on different plans (tiered or time-of-use), take power from different providers (the utility or a CCA), sit in different baseline territories, or have different discounts such as CARE or FERA. A ZIP code can also include addresses served by different utilities, so check the name on the bill.',
  },
  {
    question: 'What is the average electricity rate in California?',
    answer:
      "The U.S. Energy Information Administration puts California's June 2026 residential average at 34.74 cents per kWh, against 18.34 cents for the U.S. For full-year 2025 it reports 32.54 cents, second only to Hawaii. By utility, the CPUC Public Advocates Office lists June 2026 residential averages of 33.7 cents for PG&E, 34.4 cents for SCE and 45.5 cents for SDG&E.",
  },
  {
    question: 'Which California utility has the cheapest electricity?',
    answer:
      "Of the utilities SMUD compares, Turlock Irrigation District had the lowest residential bill for 750 kWh a month as of June 1, 2026 ($139), followed by SMUD ($149) and Roseville ($156). SDG&E was highest at $322. You cannot pick your utility by shopping; it is set by where you live.",
  },
  {
    question: 'Can I choose a different electricity provider in California?',
    answer:
      "Only in limited ways. When a city or county joins a community choice aggregator, California law enrolls its customers automatically, and the CCA then buys the power while the utility still delivers and bills it. Direct Access, where you buy from an energy service provider, is capped and allocated by lottery.",
  },
  {
    question: 'Where do I find my baseline territory or climate zone?',
    answer:
      'PG&E prints the baseline territory letter on the bill; its table runs from territory P to Z. SDG&E sets baseline by four climate zones (coastal, inland, mountain and desert) and has a calculator on its website. The zone changes how much of your use is billed at the lowest price.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function ElectricityRatesByZipCodePage() {
  return (
    <PublicLayout breadcrumbLabel="Electricity rates by ZIP code" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader
              parent={hub}
              current="Electricity rates by ZIP code"
              kicker="California · Utility rates"
              title={h1}
              updated={updated}
              sourceCount={sources.length}
            />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                In California, your electricity rate is set by the utility that serves your address, the plan you are on and,
                in many cities, a community choice aggregator (CCA) that buys the power. The ZIP code alone does not set it.
                Enter your ZIP in the CPUC&apos;s rate comparison tool to see which utility and CCA serve the area, then check the
                plan printed on your bill.
              </p>
              <p>
                That is why this page has no ZIP-by-ZIP price table: no state agency publishes one, and a table built from
                averages would give many readers the wrong number. What we can give you is the lookup, done in the right
                order, and the current price of the standard plan at each of California&apos;s five largest utilities, each
                taken from the utility&apos;s own rate page or tariff and checked on September 23, 2026.
              </p>

              <QuickAnswer label="The short version">
                <p>
                  <strong>1.</strong> Find the utility on your bill, or look up the address.{' '}
                  <strong>2.</strong> Check whether a CCA supplies the power.{' '}
                  <strong>3.</strong> Find your rate plan and baseline territory on the bill.{' '}
                  <strong>4.</strong> Read the price for that plan from the tables below or the utility&apos;s tariff.
                </p>
                <p>
                  For a single comparison number, the CPUC Public Advocates Office puts the June 2026 residential average at 33.7
                  cents per kWh for PG&amp;E, 34.4 cents for SCE and 45.5 cents for SDG&amp;E.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="California electricity prices at a glance"
                  facts={[
                    { label: 'California average, June 2026', value: '34.74¢/kWh', note: 'U.S. average 18.34¢', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpm56a.url } },
                    { label: 'PG&E / SCE / SDG&E average', value: '33.7¢ / 34.4¢ / 45.5¢', note: 'Residential, June 2026', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'Lowest 750 kWh bill SMUD lists', value: '$139 (Turlock)', note: 'SDG&E highest at $322', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudCompare.url } },
                    { label: 'California rank, 2025', value: '2nd highest', note: '32.54¢; only Hawaii higher', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpmFeb2026.url } },
                  ]}
                />
              </div>

              <div className="not-prose my-8">
                <HeroQuickCheck topic="Electricity rates by ZIP code and solar comparison" />
              </div>

              <h2>Why a ZIP code is not enough in California</h2>
              <p>
                In states with retail choice, you shop among suppliers and the ZIP code tells a website which offers exist. California
                works differently. Each address is inside one utility&apos;s service territory, and that utility delivers the
                power and sends the bill. Five things then set the price you pay per kWh:
              </p>
              <ul>
                <li>
                  <strong>The utility.</strong> PG&amp;E, SCE and SDG&amp;E are regulated by the CPUC. SMUD, LADWP and dozens of
                  other city and district utilities set their own rates.
                </li>
                <li>
                  <strong>The generation provider.</strong> If your city belongs to a CCA, the CCA buys the power and the
                  utility still delivers it. The bill then carries two sets of charges.
                </li>
                <li>
                  <strong>The rate plan.</strong> Most homes are on a time-of-use plan, where the price changes by hour and
                  season. Some are on a tiered plan, where it rises as you use more.
                </li>
                <li>
                  <strong>The baseline territory or climate zone.</strong> This sets how many kWh you get at the lowest price
                  before the higher price starts.
                </li>
                <li>
                  <strong>Discounts.</strong> CARE, FERA and Medical Baseline change the price and the fixed charge.
                </li>
              </ul>
              <p>
                Utility boundaries follow service territories drawn long before ZIP codes, so one ZIP can hold addresses served
                by different utilities. Always go by the name on the bill or an address lookup.
              </p>

              <h2>Step 1: Find the utility that serves the address</h2>
              <p>
                If you already live there, the utility&apos;s name is at the top of your bill. If you are moving or comparing
                homes, use one of these public lookups:
              </p>
              <ul>
                <li>
                  <strong>CPUC California Electric Rate Comparison.</strong> You enter a ZIP code, city or county and choose
                  residential, CARE or separately metered EV rates. It covers PG&amp;E, SCE and SDG&amp;E and the CCAs in
                  their territories.
                </li>
                <li>
                  <strong>California Energy Commission service-area map.</strong> The CEC publishes a map of electric utility
                  service areas statewide, including city and district utilities. The dataset was last updated on August 5,
                  2026.
                </li>
                <li>
                  <strong>CalCCA&apos;s interactive map.</strong> The California Community Choice Association map shows CCA,
                  city-owned and investor-owned utility boundaries, and its address bar tells you whether a CCA serves a
                  location.
                </li>
                <li>
                  <strong>OpenEI Utility Rate Database.</strong> A national database with a lookup by ZIP code, built on the
                  federal list of utilities. Use it to identify the utility, then confirm current prices on the utility&apos;s
                  own site, since a database entry can lag a rate change.
                </li>
              </ul>

              <h2>Step 2: Check whether a CCA supplies your power</h2>
              <p>
                Community choice aggregators operate inside the big utilities&apos; territories. The CPUC&apos;s comparison page
                lists 12 CCAs in PG&amp;E areas, 12 in SCE areas and 2 in SDG&amp;E areas. PG&amp;E notes that California law
                enrolls customers automatically once their city or county joins a CCA, and the bill then shows the CCA&apos;s generation charges next to
                the utility&apos;s delivery charges. The utility&apos;s posted &quot;total&quot; prices then do not apply to you; use
                the joint rate comparison your utility and CCA publish.
              </p>
              <p>
                On a PG&amp;E bill the CCA section is easy to miss.{' '}
                <Link href="/blog/what-is-3rd-party-electric-on-pge-bill" className={guideLink}>
                  What &quot;3rd party electric&quot; means on a PG&amp;E bill
                </Link>{' '}
                walks through it. Buying from a non-utility supplier outside a CCA is{' '}
                <Link href="/blog/direct-access-electricity-california" className={guideLink}>
                  Direct Access, which is capped and assigned by lottery
                </Link>
                .
              </p>

              <h2>Step 3: Read your plan and price</h2>
              <p>
                Your plan code is on the detail page of the bill: E-TOU-C or E-1 at PG&amp;E, TOU-D-4-9PM at SCE, TOU-DR1 at
                SDG&amp;E, and so on. Here is the standard residential plan at each large utility, with the price for the utility&apos;s own
                generation and delivery together (what a customer without a CCA pays).
              </p>
              <DataTable
                caption="Standard residential plan prices at California's five largest utilities (2026)"
                columns={['Utility and plan', 'Summer', 'Winter', 'Fixed charge', 'In effect']}
                rows={[
                  ['PG&E E-TOU-C', 'Peak 52.24¢, off-peak 39.94¢', 'Peak 39.76¢, off-peak 36.76¢', '$0.79343/day (most homes)', 'Since March 1, 2026'],
                  ['SCE TOU-D-4-9PM', 'Weekday on-peak 58¢, off-peak 34¢', 'Mid-peak 51¢, off-peak 37¢, super off-peak 33¢', '$0.79/day', 'SCE plan page, Sept. 2026'],
                  ['SDG&E TOU-DR1', 'On-peak 69.14¢, off-peak 46.42¢, super off-peak 37.43¢', 'On-peak 61.47¢, off-peak 53.06¢, super off-peak 43.72¢', '$0.79343/day', 'Since August 1, 2026'],
                  ['SMUD Time-of-Day (5-8 p.m.)', 'Peak 37.65¢, mid-peak 21.39¢, off-peak 15.50¢', 'Peak 17.76¢, off-peak 12.85¢', '$27.00/month', 'Since January 1, 2026'],
                  ['LADWP R-1A (tiered)', 'Tier 1 26.408¢, Tier 2 32.267¢, Tier 3 40.968¢ (Jul–Sep)', 'Tier 1 27.292¢, Tier 2 33.151¢ (Oct–Dec)', '$2.30 to $22.70/month', '2026 LADWP rates page'],
                ]}
                note={
                  <>
                    Sources: PG&amp;E residential rates table (March 1, 2026 to present); SCE Time-of-Use plans page; SDG&amp;E
                    Schedule TOU-DR1 total rates effective August 1, 2026; SMUD residential rates; LADWP residential rates. All
                    checked September 23, 2026. PG&amp;E, SCE and SDG&amp;E also give a credit on usage within baseline: 8.14¢ at
                    PG&amp;E, 10¢ at SCE and 10.702¢ at SDG&amp;E (on usage up to 130% of baseline). Excludes taxes, city fees and
                    the California Climate Credit.
                  </>
                }
              />
              <p>
                The hour windows matter as much as the prices. Peak is 4 to 9 p.m. every day on PG&amp;E&apos;s E-TOU-C and
                SDG&amp;E&apos;s TOU-DR1, 4 to 9 p.m. on weekdays for SCE&apos;s top price, 5 to 8 p.m. on weekdays at SMUD, and 1
                to 5 p.m. on weekdays for LADWP&apos;s time-of-use plan. Our{' '}
                <Link href="/blog/electricity-peak-hours-california" className={guideLink}>
                  guide to peak hours at every California utility
                </Link>{' '}
                sets them side by side.
              </p>

              <h2>Step 4: Find your baseline territory or climate zone</h2>
              <p>
                Two neighbors on the same plan can still pay different amounts because the lowest-price allowance depends on
                where the home sits. PG&amp;E divides its territory into ten baseline territories, P through Z. A basic-electric
                home in territory T gets 6.5 kWh a day in summer at the baseline price; one in territory R gets 17.7 kWh a day.
                SDG&amp;E uses four climate zones. For a home with gas and electric service, its summer allowance is 9.0 kWh a
                day on the coast, 10.4 inland, 13.6 in the mountains and 15.9 in the desert.
              </p>
              <DataTable
                caption="Daily baseline allowance examples (kWh per day, summer, basic service, not all-electric)"
                columns={['Utility', 'Lowest allowance', 'Highest allowance']}
                rows={[
                  ['PG&E (territories P–Z)', 'Territory Z: 5.9', 'Territory W: 19.2'],
                  ['SDG&E (four climate zones)', 'Coastal: 9.0', 'Desert: 15.9'],
                ]}
                note={
                  <>
                    Sources: PG&amp;E baseline territories and quantities (June 1, 2022 to present), basic-electric summer column;
                    SDG&amp;E baseline allowance calculator, gas-and-electric summer values (SDG&amp;E&apos;s summer runs June 1 to
                    October 31). Both checked September 23, 2026. All-electric homes get different allowances.
                  </>
                }
              />

              <h2>Average rates and bills by utility</h2>
              <p>
                If you want one number per utility, use a published average rather than a ZIP estimate. The CPUC Public
                Advocates Office reports a residential average rate that blends every plan and hour. SMUD publishes a
                comparison of what a 750 kWh month costs at nearby utilities.
              </p>
              <DataTable
                caption="Residential averages and a 750 kWh sample bill, mid-2026"
                columns={['Utility', 'Average residential rate', 'Bill for 750 kWh (June 1, 2026)']}
                rows={[
                  ['PG&E', '33.7¢/kWh', '$290'],
                  ['SCE', '34.4¢/kWh', '$283'],
                  ['SDG&E', '45.5¢/kWh', '$322'],
                  ['LADWP', 'Not in the CPUC report', '$217'],
                  ['SMUD', 'Not in the CPUC report', '$149'],
                  ['Roseville', 'Not in the CPUC report', '$156'],
                  ['Modesto Irrigation District', 'Not in the CPUC report', '$175'],
                  ['Turlock Irrigation District', 'Not in the CPUC report', '$139'],
                ]}
                note={
                  <>
                    Average rates: CPUC Public Advocates Office, Q2 2026 Electric Rates Report (June 2026, excluding the Climate
                    Credit). Bills: SMUD, How our rates compare, residential bill at 750 kWh as of June 1, 2026. Checked September
                    23, 2026.
                  </>
                }
              />
              <p>
                Statewide, the U.S. Energy Information Administration puts California&apos;s June 2026 residential average at
                34.74 cents per kWh, up from 33.59 cents in June 2025, against a U.S. average of 18.34 cents. For full-year 2025,
                its preliminary figure is 32.54 cents, second only to Hawaii. Our{' '}
                <Link href="/blog/electricity-rates-highest-in-us-california" className={guideLink}>
                  breakdown of why California ranks near the top
                </Link>{' '}
                explains the causes, and the{' '}
                <Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className={guideLink}>
                  PG&amp;E, SCE and SDG&amp;E comparison
                </Link>{' '}
                puts the three large utilities next to each other.
              </p>

              <h2>Where to go for your utility&apos;s full price list</h2>
              <p>
                Once you know the utility and plan, go to the detailed guide:{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use rates
                </Link>
                ,{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  SCE time-of-use rates
                </Link>
                ,{' '}
                <Link href="/blog/sdge-time-of-use-rates-2026" className={guideLink}>
                  SDG&amp;E TOU-DR1 and other plans
                </Link>
                ,{' '}
                <Link href="/blog/smud-peak-hours" className={guideLink}>
                  SMUD&apos;s time-of-day prices
                </Link>{' '}
                or{' '}
                <Link href="/blog/ladwp-rates" className={guideLink}>
                  LADWP tier prices and peak hours
                </Link>
                . The{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>{' '}
                records every change to the averages with its effective date. If you want to know what a full bill comes to,
                start with the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  average California utility bill
                </Link>
                .
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="utility_rates" currentPath={path} />
            </div>

            <SolarInquiry topic="Electricity rates by ZIP code and solar comparison" heading="Compare a Solar Plan With Your Current Rate" />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4">
        <TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
