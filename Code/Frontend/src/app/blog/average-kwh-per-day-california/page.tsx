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
import { FACTS, formatFactDate, usd } from '@/data/facts';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// 2026-11-09 expansion: this page now owns both framings of the same number,
// kWh per day and kWh per month, because they come from one EIA figure and
// two pages would compete with each other. Every figure still traces to the
// source keyed in src/data/rate-sources.ts or src/data/facts.ts next to it.
//
// Arithmetic notes, so nobody has to re-derive them:
//   - EIA publishes the MONTHLY figure (Table 5A). The annual and daily
//     columns are arithmetic on it: 503 x 12 = 6,036 and 6,036 / 365 = 16.5.
//     The registry carries no EIA-published annual residential figure, so the
//     annual column cannot be cited directly and must follow from the monthly
//     one. (Before 2026-11-09 this page said 6,038, which followed from
//     nothing.) The U.S. row is the same arithmetic: 863 x 12 = 10,356.
//   - EIA RECS publishes the ANNUAL figure, so that table divides by 12 and
//     by 365 instead.
//   - The dollar bridge below is computed in code from the three average-rate
//     facts in src/data/facts.ts. No dollar figure on this page is typed out.
//   - The 2026-11-09 date is a revision date, not a re-verification date. The
//     rates and usage figures keep their own checked dates, stated below.

const path = '/blog/average-kwh-per-day-california';
const url = `https://ratereliefca.com${path}`;
const title = 'Average kWh Per Day and Per Month in California: Find Yours';
const h1 = 'Average kWh per Day and per Month in California, and How to Find Yours';
const description =
  'Work out your own kWh per day and per month from one bill, then see what that usage costs on PG&E, SCE and SDG&E. California averages 503 kWh a month, per EIA.';
const published = '2026-09-23';
const updated = '2026-11-09';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

// paoQ2_2026 is the report behind the three average-rate facts the dollar
// bridge below multiplies by, so it belongs in the reader's source list.
const sources = rateSources('eiaBill2024', 'eiaRecsWest', 'paoQ2_2026', 'pgeBaseline', 'pgeResRatesCurrent', 'pgeUnderstandBill', 'sceTiered', 'sceRateOptions', 'cecTseg2024', 'ladwpBillingFaq');

// --- The kWh-to-dollars bridge -----------------------------------------------
// Every cell is kWh x the registry's average ¢/kWh, rounded to the dollar.
// Nothing here is hand-typed, so a rate change in facts.ts moves the table.
const PGE_RATE = FACTS.pgeResidentialAverageRate;
const SCE_RATE = FACTS.sceResidentialAverageRate;
const SDGE_RATE = FACTS.sdgeResidentialAverageRate;
const RATES_CHECKED = formatFactDate(PGE_RATE.checkedAt);
const USAGE_CHECKED = formatFactDate(RATE_SOURCES_CHECKED);

const monthlyBill = (kwh: number, centsPerKwh: number) => usd(Math.round((kwh * centsPerKwh) / 100));

const BILL_LADDER = [250, 500, 750, 1000, 1500];

const billRows = BILL_LADDER.map((kwh) => [
  `${kwh.toLocaleString('en-US')} kWh`,
  monthlyBill(kwh, PGE_RATE.value),
  monthlyBill(kwh, SCE_RATE.value),
  monthlyBill(kwh, SDGE_RATE.value),
]);

const faqs = [
  {
    question: 'How many kWh per day does the average California home use?',
    answer:
      'About 16.5 kWh. EIA reports that California residential customers used an average of 503 kWh a month in 2024, which is 6,036 kWh a year, or about 16.5 kWh a day. The U.S. average was about 28.4 kWh a day.',
  },
  {
    question: 'What is the average kWh usage per month in California?',
    answer:
      'About 503 kWh. That is the 2024 average monthly use EIA reports for California residential customers, and it is the lowest of any state except Hawaii. The U.S. average was 863 kWh a month, so a typical California home uses roughly 58% of what a typical American home does.',
  },
  {
    question: 'Is 1,000 kWh a month a lot for a California home?',
    answer:
      'Yes. It is close to twice the 2024 California average of 503 kWh a month, and on a 30-day billing period it works out to about 33 kWh a day. That is above every PG&E territory allowance in the baseline tables below, and above every SCE regional allocation except region 15’s summer daily figure of 45.0 kWh, so a large share of it would be billed at the higher tier price: 40.702 cents per kWh on PG&E E-1 from March 1, 2026, and 40 cents per kWh on SCE’s tiered plan as of June 1, 2026.',
  },
  {
    question: 'Is 30 kWh a day a lot for a California home?',
    answer:
      "It is almost twice the 2024 California average of about 16.5 kWh a day, and it is above most PG&E and SCE baseline allowances, so much of it would be billed at the higher tier price. It is not unusual for a large single-family home: EIA's 2020 survey put Western homes of 3,000 square feet or more at about 36 kWh a day.",
  },
  {
    question: 'How many kWh a month does a 2,000 square foot home use?',
    answer:
      'A little above 791 kWh a month. EIA reports home size in bands, for the West census region rather than for California alone, and 2,000 square feet falls at the bottom edge of the band above the largest one the 2020 survey figures below isolate, so the published bands bracket it rather than name it. Western homes of 1,500 to 1,999 square feet used 9,492 kWh a year, about 791 kWh a month or 26.0 kWh a day. Homes of 3,000 square feet or more used 13,118 kWh a year, about 1,093 kWh a month or 35.9 kWh a day. A 2,000 square foot home sits just above the first of those and well below the second, so 791 kWh a month is the figure to start from, not 1,093. Square footage is only one driver; heating fuel, pool equipment and EV charging move the number more.',
  },
  {
    question: 'What time of day are PG&E rates the lowest?',
    answer:
      "It depends on the plan. On E-TOU-C, every hour outside 4 to 9 p.m. is off-peak. On E-TOU-D, everything outside 5 to 8 p.m. on non-holiday weekdays is off-peak. On EV2-A and E-ELEC, the lowest price runs from midnight to 3 p.m. every day. From March 1, 2026, EV2-A's off-peak price was 22.558 cents per kWh year-round.",
  },
  {
    question: 'How much electricity does California use per day in total?',
    answer:
      'The California Energy Commission reports total system electric generation of 278,338 gigawatt-hours in 2024. Spread over the 366 days of 2024, that is about 760 gigawatt-hours a day, not counting rooftop solar used on site.',
  },
  {
    question: 'What is a baseline allowance?',
    answer:
      "It is the block of electricity each home gets at the lowest residential price, set by the CPUC for your climate area, season and whether your home is all-electric. PG&E and SCE state it as kWh per day and multiply it by the days in your billing period. Use above the allowance costs more on tiered plans, and PG&E's E-TOU-C gives a credit on usage within it.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function AverageKwhPerDayCaliforniaPage() {
  return (
    <PublicLayout breadcrumbLabel="Average kWh per day and per month in California" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader
              parent={hub}
              current="Average kWh per day and per month"
              kicker="California · Usage"
              title={h1}
              dek={
                <>
                  Two numbers off one bill give you your own kWh per day and per month. The table below turns that month
                  of kWh into roughly what it costs on PG&amp;E, SCE and SDG&amp;E.
                </>
              }
              updated={updated}
              sourceCount={sources.length}
            />

            <p className="not-prose mb-8 text-sm text-muted-foreground">
              The date above is when this guide was last revised. Each figure below is dated by when its own source was
              last read: the EIA usage tables on {USAGE_CHECKED}, the utility average rates on {RATES_CHECKED}.
            </p>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                Your own figure is one division. Take the total kWh on your bill, divide it by the number of days in the
                billing period, and that is your kWh per day; the table below shows what a month at that level costs at
                each big utility&apos;s average rate. For scale, the average California home uses about 503 kWh a month,
                or about 16.5 kWh a day. Where you land against that depends on climate, home size, heating fuel and
                whether you charge an EV.
              </p>
              <p>
                Knowing your kWh is the fastest way to tell a usage problem from a price problem, and it is the number a
                solar or battery proposal should start from. Prices per kWh at each utility are on the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                ; this guide is about the kWh and what it costs you.
              </p>

              <DataTable
                caption="What a month of kWh costs at each utility's average residential rate"
                columns={[
                  'Monthly use',
                  `PG&E, ${PGE_RATE.value}¢/kWh`,
                  `SCE, ${SCE_RATE.value}¢/kWh`,
                  `SDG&E, ${SDGE_RATE.value}¢/kWh`,
                ]}
                rows={billRows}
                note={
                  <>
                    Each cell is the monthly kWh multiplied by that utility&apos;s bundled residential average rate, so
                    these are average-rate approximations, not tiered or time-of-use bills. A tiered bill splits usage
                    above and below the baseline allowance at two different prices, and a time-of-use bill depends on
                    which hours the kWh land in, so a real bill at the same usage can sit either side of these figures.
                    Rates: {PGE_RATE.publisher}, {PGE_RATE.sourceTitle}, from each utility&apos;s own rate table in
                    that report, checked {RATES_CHECKED}. PG&amp;E&apos;s is as of {PGE_RATE.asOf}, SCE&apos;s as of{' '}
                    {SCE_RATE.asOf} and SDG&amp;E&apos;s as of {SDGE_RATE.asOf}, and all three exclude the California
                    Climate Credit. The 2024 California average of 503 kWh a month sits just above the 500 kWh row.
                  </>
                }
              />

              {/* Bill-first step straight after the dollar bridge; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California kWh per day and solar sizing" />
              </div>

              <div className="not-prose">
                <KeyFacts
                  heading="Average household electricity use"
                  facts={[
                    { label: 'California, 2024', value: '503 kWh/month', note: 'about 16.5 kWh a day', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaBill2024.url } },
                    { label: 'United States, 2024', value: '863 kWh/month', note: 'about 28.4 kWh a day', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaBill2024.url } },
                    { label: 'Western apartment, 5+ units', value: '≈424 kWh/month', note: '2020 survey, West region', source: { publisher: 'U.S. EIA RECS', date: RATE_SOURCES_CHECKED, url: SRC.eiaRecsWest.url } },
                    { label: 'Western single-family detached', value: '≈857 kWh/month', note: '2020 survey, West region', source: { publisher: 'U.S. EIA RECS', date: RATE_SOURCES_CHECKED, url: SRC.eiaRecsWest.url } },
                  ]}
                />
              </div>

              <h2>What is the average kWh usage per month in California?</h2>
              <p>
                503 kWh. EIA&apos;s 2024 residential table reports average monthly use of 503 kWh for California
                customers, against 863 kWh for the United States as a whole. Only Hawaii is lower. The biggest users were
                Louisiana, Mississippi and Tennessee, at roughly 1,150 to 1,200 kWh a month, more than twice
                California&apos;s figure.
              </p>
              <DataTable
                caption="Average household electricity use, California and the U.S., 2024"
                columns={['Average household', 'kWh per month', 'kWh per day', 'kWh per year']}
                rows={[
                  ['California', '503', '16.5', '6,036'],
                  ['United States', '863', '28.4', '10,356'],
                ]}
                note={<>Source: U.S. EIA, 2024 Average Monthly Bill &ndash; Residential (Table 5A), checked {USAGE_CHECKED}. EIA publishes the monthly figure only; the annual column is that figure multiplied by 12 and the daily column is the annual divided by 365.</>}
              />
              <p>
                One catch with any monthly figure: a billing period is not a calendar month. PG&amp;E&apos;s bill
                glossary explains that charges are built from the number of days in your period, so multiply a daily
                figure by the day count printed on the bill rather than by 30. LADWP bills residential customers every two
                months, so its periods run about 60 days and its kWh totals look roughly twice as large as a monthly bill
                from an investor-owned utility.
              </p>

              <h2>How to find your own kWh per day and per month</h2>
              <p>
                Every California bill shows two numbers you need: total kWh and the number of days in the billing period.
                Divide the first by the second for your kWh per day. A 30-day bill for 450 kWh is 15 kWh a day; a 33-day
                bill for the same 450 kWh is about 13.6. To go back the other way, multiply your kWh per day by the day
                count printed on your own bill rather than by 30, which is how the utility builds the charge and how the
                baseline allowances further down are applied. Do it for the same month last year before you decide your
                usage went up.
              </p>
              <p>
                A single day is noisy, and a single month is seasonal. For sizing solar or a battery, use a full year: add
                up twelve months of kWh, divide by 12 for the monthly average and by 365 for the daily one. Utility online
                accounts show usage history; LADWP&apos;s, for example, has an Analyze My Usage chart.
              </p>

              <h2>Daily, monthly and annual use by type of home</h2>
              <p>
                EIA&apos;s Residential Energy Consumption Survey breaks usage down by home type and household size, but
                only by region, not by state. The figures below are for the West census region, which includes hotter
                Arizona and Nevada as well as California, from the 2020 survey, the latest with usage data. EIA says the
                2024 survey&apos;s usage tables will come out in spring 2027. Use the table to convert between the three
                framings: the annual column is what EIA publishes, and the monthly and daily columns divide it by 12 and
                by 365.
              </p>
              <DataTable
                caption="Average household electricity use in the West region, 2020 (EIA RECS)"
                columns={['Type of home or household', 'kWh per day', 'kWh per month', 'kWh per year']}
                rows={[
                  ['All Western homes', '23.6', '717', '8,608'],
                  ['Apartment, building with 5+ units', '13.9', '424', '5,086'],
                  ['Apartment, building with 2–4 units', '15.5', '470', '5,644'],
                  ['Single-family attached (townhouse)', '17.7', '539', '6,465'],
                  ['Mobile home', '25.1', '763', '9,153'],
                  ['Single-family detached', '28.2', '857', '10,287'],
                  ['Under 1,000 sq ft', '14.7', '447', '5,362'],
                  ['1,500 to 1,999 sq ft', '26.0', '791', '9,492'],
                  ['3,000 sq ft or more', '35.9', '1,093', '13,118'],
                  ['One-person household', '15.4', '470', '5,635'],
                  ['Four-person household', '28.2', '859', '10,303'],
                ]}
                note={<>Source: U.S. EIA, 2020 RECS Table CE2.5, physical units, checked {USAGE_CHECKED}. Annual totals are as EIA reports them; the daily and monthly columns are our division by 365 and by 12.</>}
              />
              <p>
                A statewide average also hides a wide spread inside California: the baseline tables below give SCE&apos;s
                hottest region three to four times the summer allowance of its cool regions.
              </p>

              <h2>Baseline allowances: the kWh billed at the lowest price</h2>
              <p>
                California&apos;s investor-owned utilities give every home a baseline allowance, a daily amount of electricity
                billed at the lowest residential price. PG&amp;E&apos;s bill glossary says the CPUC bases it on average use in
                each baseline territory. Your territory or region is printed on your bill. Multiply the daily figure by the
                days in your billing period to get your monthly allowance.
              </p>
              <DataTable
                caption="PG&E daily baseline allowance, individually metered homes (kWh per day)"
                columns={['Territory', 'Basic electric, summer', 'Basic electric, winter', 'All-electric, summer', 'All-electric, winter']}
                rows={[
                  ['P', '13.5', '11.0', '15.2', '26.0'],
                  ['Q', '9.8', '11.0', '8.5', '26.0'],
                  ['R', '17.7', '10.4', '19.9', '26.7'],
                  ['S', '15.0', '10.2', '17.8', '23.7'],
                  ['T', '6.5', '7.5', '7.1', '12.9'],
                  ['V', '7.1', '8.1', '10.4', '19.1'],
                  ['W', '19.2', '9.8', '22.4', '19.0'],
                  ['X', '9.8', '9.7', '8.5', '14.6'],
                  ['Y', '10.5', '11.1', '12.0', '24.0'],
                  ['Z', '5.9', '7.8', '6.7', '15.7'],
                ]}
                note={<>Source: PG&amp;E Residential Baseline Territories and Quantities, effective June 1, 2022 to present, checked {USAGE_CHECKED}. Summer is June to September; winter is October to May.</>}
              />
              <DataTable
                caption="SCE daily baseline allocation by region (kWh per day)"
                columns={['Region', 'Summer, daily', 'Summer, all-electric', 'Winter, daily', 'Winter, all-electric']}
                rows={[
                  ['5', '17.0', '16.8', '18.4', '27.0'],
                  ['6', '11.4', '8.7', '11.0', '12.6'],
                  ['8', '12.8', '9.9', '10.3', '12.3'],
                  ['9', '16.9', '12.5', '12.0', '13.9'],
                  ['10', '19.3', '15.9', '12.1', '16.4'],
                  ['13', '22.2', '24.2', '12.2', '23.0'],
                  ['14', '19.2', '18.5', '11.9', '21.1'],
                  ['15', '45.0', '24.0', '9.7', '17.4'],
                  ['16', '14.7', '13.5', '12.4', '23.2'],
                ]}
                note={<>Source: SCE Tiered Rate Plan page, checked {USAGE_CHECKED}, as SCE lists it. SCE describes regions 13, 14 and 15 as hot, 5, 9 and 10 as moderate and 6, 8 and 16 as cool.</>}
              />
              <p>
                Compare these with the 16.5 kWh statewide daily average and you can see why many homes spend part of each
                month above baseline. On SCE&apos;s tiered plan, the price as of June 1, 2026 was 30 cents per kWh up to
                baseline and 40 cents above it. On PG&amp;E&apos;s tiered E-1 plan from March 1, 2026, it was 32.561 cents
                and 40.702 cents. Medical Baseline customers get more: SCE adds 16.5 kWh a day. Our{' '}
                <Link href="/blog/pge-tier-rates" className={guideLink}>
                  PG&amp;E tier rates guide
                </Link>{' '}
                shows the tier math on a real bill.
              </p>

              <h2>What time of day are PG&amp;E rates the lowest?</h2>
              <p>
                On time-of-use plans, when you use the kWh matters as much as how many. PG&amp;E&apos;s lowest-priced hours
                depend on the plan you are on:
              </p>
              <DataTable
                caption="PG&E lowest-priced hours by plan, prices from March 1, 2026"
                columns={['Plan', 'Cheapest hours', 'Summer off-peak', 'Summer peak']}
                rows={[
                  ['E-TOU-C', 'Any time outside 4–9 p.m., every day', '39.940¢', '52.240¢ (4–9 p.m.)'],
                  ['E-TOU-D', 'Any time outside 5–8 p.m. on non-holiday weekdays; all weekend', '34.212¢', '47.708¢ (5–8 p.m.)'],
                  ['EV2-A', 'Midnight to 3 p.m., every day', '22.558¢', '53.809¢ (4–9 p.m.)'],
                  ['E-ELEC', 'Midnight to 3 p.m., every day', '33.358¢', '55.214¢ (4–9 p.m.)'],
                ]}
                note={<>Source: PG&amp;E residential rates table, March 1, 2026 to present (Advice Letter 7846-E), checked {USAGE_CHECKED}. Totals are bundled rates before the E-TOU-C baseline credit; EV2-A and E-ELEC also have a partial-peak price from 3 to 4 p.m. and 9 p.m. to midnight.</>}
              />
              <p>
                For how those plans compare in winter and who qualifies for EV2-A and E-ELEC, see{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use rates and peak hours
                </Link>
                . LADWP and SMUD use different hours; see the{' '}
                <Link href="/blog/ladwp-rates" className={guideLink}>
                  LADWP rate guide
                </Link>{' '}
                for Los Angeles.
              </p>

              <h2>Turning your kWh into a system size</h2>
              <p>
                Solar is sized against a year of kWh, not one bill. A home at the California average uses 6,036 kWh a
                year, which is EIA&apos;s 503 kWh a month times twelve. Add up your own twelve months and you have the
                number every proposal should be measured against.
              </p>
              <p>
                From there the arithmetic is one division. Take the annual production in kWh that a proposal assumes, divide
                it by your annual use, and that is the share of your usage the system is designed to cover. If a proposal
                does not state an annual production figure in kWh, you cannot do that division, and that is reason enough to
                ask for it in writing. The production assumption depends on roof pitch, orientation and shading, which is
                where{' '}
                <Link href="/blog/how-big-of-a-solar-system-do-i-need-california" className={guideLink}>
                  how big a solar system a California home needs
                </Link>{' '}
                picks up.
              </p>
              <p>
                Two things keep that number honest. First, the kWh you remove come off the top of the bill, so on a tiered
                plan they come off at the above-baseline price, which is the 40.702 cents on PG&amp;E E-1 and 40 cents on
                SCE&apos;s tiered plan quoted above, not at an average rate. Second, on a time-of-use plan what matters is
                which hours the production lands in. Your daily kWh turns into a monthly bill in the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  average California utility bill
                </Link>{' '}
                guide. For backup, the question is how much of that daily use you need overnight, which is where{' '}
                <Link href="/battery/how-many-batteries-do-i-need-california" className={guideLink}>
                  battery sizing
                </Link>{' '}
                starts.
              </p>

              <h2>How much electricity California uses in a day, statewide</h2>
              <p>
                The California Energy Commission counts total system electric generation, in-state plants plus imports,
                at 278,338 gigawatt-hours in 2024. Over 366 days that is about 760 gigawatt-hours a day. It does not
                include power from rooftop solar used on site, which the commission estimated at 26,765 gigawatt-hours in
                2024. Where that power comes from is covered in{' '}
                <Link href="/blog/where-does-california-get-its-electricity" className={guideLink}>
                  California&apos;s electricity sources
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

            <SolarInquiry topic="California kWh per day and solar sizing" variant="bill" heading="Compare a Solar Plan With Your Usage" />
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
