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
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';

const path = '/blog/average-utility-bill-california';
const url = `https://ratereliefca.com${path}`;
const title = 'Average Utility Bill in California: Electric, Gas and More';
const h1 = 'What Is the Average Utility Bill in California?';
const description =
  'California homes averaged $161 a month for electricity in 2024, per EIA, plus about $59 for natural gas. See the numbers by utility and why bills vary.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'eiaBill2024',
  'eiaSalesIndex',
  'eiaEpm56a',
  'eiaGasPriceCa',
  'eiaGasConsumersCa',
  'eiaGasVolumesCa',
  'paoQ2_2026',
  'smudResRates',
  'ladwpBillingFaq',
  'cpucCareFera',
  'cpucRateComparison',
  'pgeResRatesCurrent',
  'pgeBillForecast',
);

const faqs = [
  {
    question: 'What is the average electric bill in California?',
    answer:
      'The U.S. Energy Information Administration puts the 2024 average at $160.86 a month for California residential customers, based on 503 kWh a month at an average 31.97 cents per kWh. It is the most recent full-year figure; EIA plans its 2025 update for October 2026.',
  },
  {
    question: 'How do I estimate my electric bill?',
    answer:
      "Multiply the kWh you expect to use by your plan's price per kWh, then add the fixed charge. On PG&E's E-TOU-C plan from March 1, 2026, 500 kWh at the 39.940-cent summer off-peak price is $199.70, plus about $23.80 of Base Services Charge for a 30-day bill, before peak-hour use, the baseline credit and taxes. The CPUC's rate comparison tool lists the plans and prices for your ZIP code, and PG&E's Bill Forecast Alert warns you when a bill is on track to exceed an amount you set.",
  },
  {
    question: 'What is the average gas bill in California per month?',
    answer:
      "EIA does not publish a California gas bill directly. Using EIA's 2024 figures for residential gas use, customer count and price, a California gas customer used about 36.7 thousand cubic feet a year at $19.14 per thousand cubic feet, or roughly $59 a month averaged over the year. Winter bills run higher because most gas goes to heating.",
  },
  {
    question: 'What is the average PG&E bill?',
    answer:
      "PG&E does not publish one average bill. As a rough guide, California's 2024 average use of 503 kWh a month at PG&E's June 2026 residential average rate of 33.7 cents per kWh comes to about $170 for electricity. SMUD's June 1, 2026 comparison prices a 750 kWh month at $290 on PG&E. A combined PG&E bill also includes gas.",
  },
  {
    question: 'What is the average trash or water bill in California?',
    answer:
      'Cities, special districts and private haulers set water, sewer and trash charges, so they differ from one address to the next. We did not find a statewide average published by a state agency, so this page does not give one. Your city or water district posts its current rates.',
  },
  {
    question: 'Why are California utility bills so high?',
    answer:
      "Mostly because the price per kWh is high, not because Californians use a lot. EIA's 2024 data ranks California second-highest of 50 states and D.C. for electricity price but 50th for use per home. The CPUC Public Advocates Office names wildfire costs, transmission and distribution spending and rooftop solar incentives as the main drivers of rate increases.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function AverageUtilityBillCaliforniaPage() {
  return (
    <PublicLayout breadcrumbLabel="Average utility bill in California" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Average utility bill" kicker="California · Bills" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                The average California home paid $160.86 a month for electricity in 2024, according to the U.S. Energy
                Information Administration. Homes with natural gas paid roughly $59 a month more, averaged over the year. Water,
                sewer and trash are set city by city, so a statewide total for every utility does not exist.
              </p>
              <p>
                The electricity figure is EIA&apos;s most recent full year, published October 7, 2025. It is an average across
                about 14.2 million residential accounts, from coastal apartments to inland homes running air conditioning all
                summer, so your own bill can sit far from it. If yours looks out of line, our guide to{' '}
                <Link href={hub.href} className={guideLink}>
                  why California electric bills run high
                </Link>{' '}
                walks through the checks in order.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="California household utility costs"
                  facts={[
                    { label: 'Average electric bill, 2024', value: '$160.86/mo', note: '503 kWh at 31.97¢/kWh', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaBill2024.url } },
                    { label: 'U.S. average electric bill, 2024', value: '$142.26/mo', note: '863 kWh at 16.48¢/kWh', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaBill2024.url } },
                    { label: 'Average gas spending, 2024', value: '≈ $59/mo', note: 'Our calculation from EIA gas data', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaGasVolumesCa.url } },
                    { label: 'California residential price, June 2026', value: '34.74¢/kWh', note: 'U.S.: 18.34¢', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpm56a.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California average utility bill and solar comparison" />
              </div>

              <h2>The average electric bill: California vs. other states</h2>
              <p>
                California&apos;s electric bill is above the national average but not the highest, because the state pairs one
                of the highest prices per kWh with some of the lowest usage. In EIA&apos;s 2024 data, California ranks second of
                50 states and Washington, D.C. for price, eighth for the monthly bill and 50th for how much electricity a home
                uses. Only Hawaii homes used less.
              </p>
              <DataTable
                caption="Average residential electric bill, 2024 (EIA)"
                columns={['State', 'Average monthly use', 'Average price', 'Average monthly bill']}
                rows={[
                  ['California', '503 kWh', '31.97¢', '$160.86'],
                  ['United States', '863 kWh', '16.48¢', '$142.26'],
                  ['Hawaii', '495 kWh', '42.86¢', '$212.12'],
                  ['Arizona', '1,075 kWh', '14.91¢', '$160.24'],
                  ['Nevada', '930 kWh', '15.00¢', '$139.39'],
                  ['Oregon', '882 kWh', '14.70¢', '$129.62'],
                  ['Washington', '955 kWh', '11.90¢', '$113.68'],
                ]}
                note={<>Source: U.S. EIA, 2024 Average Monthly Bill, Residential (Table 5A), released October 7, 2025, checked September 23, 2026. Ranks are our sort of the same table.</>}
              />
              <p>
                Prices have kept climbing since. EIA&apos;s monthly data put California&apos;s average residential price at 34.74
                cents per kWh in June 2026, up from 33.59 cents a year earlier and nearly double the U.S. average of 18.34 cents.
                The same 503 kWh at June 2026 prices would cost more than the 2024 average bill. Our page on{' '}
                <Link href="/blog/electricity-rates-highest-in-us-california" className={guideLink}>
                  how California&apos;s rates rank nationally
                </Link>{' '}
                has the full state ranking.
              </p>

              <h2>Average electric bill by utility</h2>
              <p>
                No single average fits the whole state because California has several utilities with very different prices.
                The CPUC Public Advocates Office reports residential average rates for the three investor-owned utilities as of
                June 2026: 33.7 cents per kWh at PG&amp;E, 34.4 cents at SCE and 45.5 cents at SDG&amp;E. If a home used the
                statewide average of 503 kWh a month, those rates would come to about $170, $173 and $229. That is our
                arithmetic, and it assumes statewide-average usage in every territory, which is not true, so treat it as a
                sense of scale.
              </p>
              <p>
                SMUD, the Sacramento public utility, publishes its own comparison at a fixed 750 kWh a month, as of June 1, 2026.
                It is a utility&apos;s comparison of itself with its neighbors, so read it as one data point.
              </p>
              <DataTable
                caption="Residential bill for 750 kWh a month, as of June 1, 2026 (SMUD comparison)"
                columns={['Utility', 'Monthly bill at 750 kWh']}
                rows={[
                  ['San Diego Gas & Electric', '$322'],
                  ['Pacific Gas & Electric', '$290'],
                  ['Southern California Edison', '$283'],
                  ['LADWP', '$217'],
                  ['Modesto', '$175'],
                  ['Roseville', '$156'],
                  ['SMUD', '$149'],
                  ['Turlock', '$139'],
                ]}
                note={<>Source: SMUD Residential rates page, average residential monthly bill chart, checked September 23, 2026.</>}
              />
              <p>
                For a smaller home, see{' '}
                <Link href="/blog/average-pge-bill-for-1-bedroom-apartment" className={guideLink}>
                  what a PG&amp;E bill looks like for a one-bedroom apartment
                </Link>
                . To turn your own bill into daily usage, start with{' '}
                <Link href="/blog/average-kwh-per-day-california" className={guideLink}>
                  average kWh per day in California
                </Link>
                .
              </p>

              <h2>The average gas bill in California</h2>
              <p>
                EIA does not publish a California gas bill, but it publishes the pieces. In 2024, California&apos;s 11.43 million
                residential gas customers used 419.5 billion cubic feet, and the average residential price was $19.14 per
                thousand cubic feet. That works out to about 36.7 thousand cubic feet per home, or roughly $703 a year, about
                $59 a month. EIA&apos;s 2025 residential price is higher, $22.01, so 2025 gas bills are likely to
                be higher too once the usage data is final.
              </p>
              <p>
                Gas spending is seasonal. Most of it goes to space and water heating, so a January bill can be several times a
                July bill. On a combined PG&amp;E or SDG&amp;E statement, gas is billed on its own meter and rate, separate from
                electricity.
              </p>

              <h2>Water, sewer and trash</h2>
              <p>
                These are the most local utility costs. They are set by cities, water districts and waste haulers. We did not
                find a statewide average from a state
                agency, so we do not publish one. In Los Angeles, LADWP bills city sewer and trash fees on the same statement as
                water and power, according to LADWP&apos;s billing questions page, which is one reason an LADWP total can look
                high.
              </p>

              <h2>How to judge whether your bill is high</h2>
              <p>
                Compare daily use, not the monthly total. Divide the kWh on your bill by the number of days in the billing
                period and compare it with the same season last year. Then look at the price: whether you are on a tiered or
                time-of-use plan, whether a community choice aggregator supplies your electricity, and whether the flat monthly
                Base Services Charge now on PG&amp;E, SCE and SDG&amp;E bills is part of the jump. The statewide{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  rate tracker for each utility
                </Link>{' '}
                has the current averages and the date each one last changed.
              </p>

              <h2>If the bill is hard to pay</h2>
              <p>
                You are not alone. The Public Advocates Office reports that about 2.42 million PG&amp;E, SCE and SDG&amp;E
                customers, 20.6% of the total, were behind on their bills in May 2026, owing $619 on average. If your household
                income is under the CPUC limits, CARE cuts the electric bill by 30% to 35% and FERA by 18%, and both lower the
                monthly Base Services Charge. For PG&amp;E customers, our{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  guide to PG&amp;E&apos;s income-qualified discounts
                </Link>{' '}
                lists the 2026 income limits and how to apply.
              </p>
              <p>
                For longer-term options, compare the{' '}
                <Link href="/blog/how-to-lower-electric-bill-california" className={guideLink}>
                  steps that lower a California bill
                </Link>{' '}
                first, then{' '}
                <Link href="/solar-panels-california" className={guideLink}>
                  what solar costs and how it is sized
                </Link>{' '}
                against the same year of bills.
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="electric_bills" currentPath={path} />
            </div>

            <SolarInquiry topic="California average utility bill and solar comparison" variant="bill" heading="Compare a Solar Plan With Your Utility Bill" />
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
