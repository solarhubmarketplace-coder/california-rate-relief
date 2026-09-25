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
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/average-kwh-per-day-california';
const url = `https://ratereliefca.com${path}`;
const title = 'Average kWh per Day in California: 16.5 kWh (2024 Data)';
const h1 = 'Average kWh per Day in California, and How Your Home Compares';
const description =
  'California homes averaged about 16.5 kWh a day in 2024, per EIA. See baseline allowances by utility and the cheapest hours to use power.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources('eiaBill2024', 'eiaRecsWest', 'pgeBaseline', 'pgeResRatesCurrent', 'pgeUnderstandBill', 'sceTiered', 'sceRateOptions', 'cecTseg2024', 'ladwpBillingFaq');

const faqs = [
  {
    question: 'How many kWh per day does the average California home use?',
    answer:
      'About 16.5 kWh. EIA reports that California residential customers used an average of 503 kWh a month in 2024, which is about 6,038 kWh a year, or 16.5 kWh a day. The U.S. average was about 28.4 kWh a day.',
  },
  {
    question: 'Is 30 kWh a day a lot for a California home?',
    answer:
      "It is almost twice the 2024 California average of about 16.5 kWh a day, and it is above most PG&E and SCE baseline allowances, so much of it would be billed at the higher tier price. It is not unusual for a large single-family home: EIA's 2020 survey put Western homes of 3,000 square feet or more at about 36 kWh a day.",
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
    <PublicLayout breadcrumbLabel="Average kWh per day in California" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Average kWh per day" kicker="California · Usage" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                The average California home uses about 16.5 kWh of electricity a day. EIA&apos;s 2024 data puts residential
                use at 503 kWh a month, roughly 6,038 kWh a year, which is about 58% of the U.S. average of 28.4 kWh a day.
                Your own number depends on climate, home size, heating fuel and whether you charge an EV.
              </p>
              <p>
                Knowing your kWh per day is the fastest way to tell a usage problem from a price problem, and it is the
                number a solar or battery proposal should start from. Prices per kWh at each utility are on the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                ; this page is about the kWh.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="Daily electricity use"
                  facts={[
                    { label: 'California average, 2024', value: '≈16.5 kWh/day', note: '503 kWh a month', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaBill2024.url } },
                    { label: 'U.S. average, 2024', value: '≈28.4 kWh/day', note: '863 kWh a month', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaBill2024.url } },
                    { label: 'Western apartment, 5+ units', value: '≈13.9 kWh/day', note: '2020 survey, West region', source: { publisher: 'U.S. EIA RECS', date: RATE_SOURCES_CHECKED, url: SRC.eiaRecsWest.url } },
                    { label: 'Western single-family detached', value: '≈28.2 kWh/day', note: '2020 survey, West region', source: { publisher: 'U.S. EIA RECS', date: RATE_SOURCES_CHECKED, url: SRC.eiaRecsWest.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California kWh per day and solar sizing" />
              </div>

              <h2>How to find your own kWh per day</h2>
              <p>
                Every California bill shows two numbers you need: total kWh and the number of days in the billing period.
                Divide the first by the second. A 30-day bill for 450 kWh is 15 kWh a day; a 33-day bill for the same 450
                kWh is about 13.6. Do it for the same month last year before you decide your usage went up. LADWP bills
                residential customers every two months, so its periods run about 60 days.
              </p>
              <p>
                A single day is noisy. For sizing solar or a battery, use a full year: add up twelve months of kWh and divide
                by 365. Utility online accounts show usage history; LADWP&apos;s, for example, has an Analyze My Usage chart.
              </p>

              <h2>Why California homes use less than the U.S. average</h2>
              <p>
                In EIA&apos;s 2024 table, California ranks second-lowest of the 50 states and D.C. for electricity use per
                home; only Hawaii is lower. The biggest users were Louisiana, Mississippi and Tennessee, at roughly 1,150 to
                1,200 kWh a month, more than twice California&apos;s 503. A statewide average also hides a wide spread inside
                California: the baseline tables below give SCE&apos;s hottest region three to four times the summer allowance of
                its cool regions.
              </p>

              <h2>Daily use by type of home</h2>
              <p>
                EIA&apos;s Residential Energy Consumption Survey breaks usage down by home type, but only by region, not by
                state. The figures below are for the West census region, which includes hotter Arizona and Nevada as well as
                California, from the 2020 survey, the latest with usage data. EIA says the 2024 survey&apos;s usage tables
                will come out in spring 2027.
              </p>
              <DataTable
                caption="Average household electricity use in the West region, 2020 (EIA RECS)"
                columns={['Type of home', 'kWh per year', 'About kWh per day']}
                rows={[
                  ['All Western homes', '8,608', '23.6'],
                  ['Apartment, building with 5+ units', '5,086', '13.9'],
                  ['Apartment, building with 2–4 units', '5,644', '15.5'],
                  ['Single-family attached (townhouse)', '6,465', '17.7'],
                  ['Mobile home', '9,153', '25.1'],
                  ['Single-family detached', '10,287', '28.2'],
                  ['Under 1,000 sq ft', '5,362', '14.7'],
                  ['1,500 to 1,999 sq ft', '9,492', '26.0'],
                  ['3,000 sq ft or more', '13,118', '35.9'],
                  ['One-person household', '5,635', '15.4'],
                  ['Four-person household', '10,303', '28.2'],
                ]}
                note={<>Source: U.S. EIA, 2020 RECS Table CE2.5, physical units, checked September 23, 2026. Daily figures are our division by 365.</>}
              />

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
                note={<>Source: PG&amp;E Residential Baseline Territories and Quantities, effective June 1, 2022 to present, checked September 23, 2026. Summer is June to September; winter is October to May.</>}
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
                note={<>Source: SCE Tiered Rate Plan page, checked September 23, 2026, as SCE lists it. SCE describes regions 13, 14 and 15 as hot, 5, 9 and 10 as moderate and 6, 8 and 16 as cool.</>}
              />
              <p>
                Compare these with the 16.5 kWh statewide average and you can see why many homes spend part of each month
                above baseline. On SCE&apos;s tiered plan, the price as of June 1, 2026 was 30 cents per kWh up to baseline and
                40 cents above it. On PG&amp;E&apos;s tiered E-1 plan from March 1, 2026, it was 32.561 cents and 40.702 cents.
                Medical Baseline customers get more: SCE adds 16.5 kWh a day. Our{' '}
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
                note={<>Source: PG&amp;E residential rates table, March 1, 2026 to present (Advice Letter 7846-E), checked September 23, 2026. Totals are bundled rates before the E-TOU-C baseline credit; EV2-A and E-ELEC also have a partial-peak price from 3 to 4 p.m. and 9 p.m. to midnight.</>}
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

              <h2>Using your kWh per day</h2>
              <p>
                Your daily kWh turns into a monthly bill in the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  average California utility bill
                </Link>{' '}
                guide, and into a system size in{' '}
                <Link href="/blog/how-big-of-a-solar-system-do-i-need-california" className={guideLink}>
                  how big a solar system a California home needs
                </Link>
                . For backup, the question is how much of that daily use you need overnight, which is where{' '}
                <Link href="/battery/how-many-batteries-do-i-need-california" className={guideLink}>
                  battery sizing
                </Link>{' '}
                starts.
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
