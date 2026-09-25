import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';
import { HubUpLink } from '@/components/growth/HubUpLink';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// Tier 3 (2026-09-23). No utility or agency publishes an average bill by
// apartment size, so this page prices federal apartment-usage figures on
// SDG&E's own August 1, 2026 rate tables and baseline allowances, and shows
// the arithmetic. Sibling of /blog/average-pge-bill-for-1-bedroom-apartment.

const path = '/blog/average-sdge-bill-2-bedroom-apartment';
const url = `https://ratereliefca.com${path}`;
const title = 'Average SDG&E Bill for a 2-Bedroom Apartment (2026)';
const h1 = 'What Is the Average SDG&E Bill for a Two-Bedroom Apartment?';
const description =
  "No official average exists, so we priced apartment usage on SDG&E's August 2026 rates: about $225 to $331 a month for 470 to 663 kWh, before taxes.";
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'eiaRecsWest',
  'sdgeDrAug2026',
  'sdgeTouDr1Aug2026',
  'sdgeBaselineCalc',
  'sdgePricingPlans',
  'sdgeHowRatesSet',
  'paoQ2_2026',
  'smudCompare',
  'cpucRateComparison',
  'cpucCareFera',
  'eiaBill2024',
);

const faqs = [
  {
    question: 'What is the average SDG&E bill for a 2-bedroom apartment?',
    answer:
      "SDG&E does not publish one. Using federal usage data for Western homes, 470 to 663 kWh a month, SDG&E's tiered DR plan from August 1, 2026 comes to about $225 to $331 for a 30-day bill before taxes, including the daily Base Services Charge. Coastal homes pay a little more than inland homes because their baseline allowance is smaller.",
  },
  {
    question: 'What is the average SDG&E bill for a 1-bedroom apartment?',
    answer:
      "About $201 to $207 for a 30-day bill before taxes, if the unit uses 425 kWh a month, EIA's 2020 figure for Western apartments in buildings with five or more units. That is on SDG&E's DR plan at August 1, 2026 prices, including about $23.80 of Base Services Charge.",
  },
  {
    question: 'Why is my SDG&E bill so high in an apartment?',
    answer:
      "Mostly the price. The CPUC Public Advocates Office puts SDG&E's residential average at 45.5 cents per kWh in June 2026, the highest of California's three big utilities. The flat Base Services Charge, about $24 a month for most customers, is also a large share of a small bill, and use above 130% of your baseline allowance is billed at the higher price.",
  },
  {
    question: 'Is SDG&E TOU-DR1 or DR cheaper for an apartment?',
    answer:
      'It depends on when you use power. TOU-DR1 charges 69.135 cents per kWh from 4 to 9 p.m. in summer and 37.433 cents in super off-peak hours, before a 10.702-cent credit on use up to 130% of baseline. DR charges 41.299 cents up to 130% of baseline and 52 cents above it, at any hour. A home that uses little power in the evening usually does better on TOU-DR1.',
  },
  {
    question: 'Does San Diego Community Power change my bill?',
    answer:
      'Yes, if you are enrolled. A community choice provider such as San Diego Community Power or Clean Energy Alliance sets the generation price, while SDG&E still bills delivery. The totals on this page are for customers who buy both from SDG&E. The CPUC rate comparison tool shows the combined rates for your ZIP code.',
  },
  {
    question: 'How much is an average PG&E bill for an apartment?',
    answer:
      'PG&E does not publish one either. Our separate guide prices a one-bedroom on PG&E’s March 2026 rates at roughly $105 to $191 a month for 250 to 450 kWh, before taxes. PG&E’s prices per kWh are lower than SDG&E’s, so the same usage costs less.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function AverageSdgeBillTwoBedroomPage() {
  return (
    <PublicLayout breadcrumbLabel="SDG&E bill for a 2-bedroom apartment" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="SDG&E bill for a 2-bedroom" kicker="SDG&E · Bills" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                SDG&amp;E does not publish an average bill by apartment size, so here is the arithmetic. A two-bedroom apartment
                using 470 to 663 kWh a month would pay about $225 to $331 for electricity at SDG&amp;E&apos;s August 1, 2026 prices
                on its tiered DR plan, before taxes. Where you land depends on your climate zone, the season and, on time-of-use
                plans, the hour.
              </p>
              <HubUpLink path="/blog/average-sdge-bill-2-bedroom-apartment" />
              <p>
                The usage range comes from federal survey data for Western homes; the prices and baseline allowances come from
                SDG&amp;E&apos;s own rate tables and calculator, checked September 23, 2026. It is our calculation, not an SDG&amp;E
                estimate, and it covers electricity only. For why San Diego bills run high in general, see{' '}
                <Link href="/blog/why-is-my-sdge-bill-so-high" className={guideLink}>
                  why an SDG&amp;E bill is so high
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="Inputs used on this page"
                  facts={[
                    { label: 'Western apartment, 5+ unit building', value: '≈424 kWh/mo', note: '5,086 kWh a year (2020)', source: { publisher: 'U.S. EIA RECS', date: RATE_SOURCES_CHECKED, url: SRC.eiaRecsWest.url } },
                    { label: 'Western home, 1,000–1,499 sq ft', value: '≈663 kWh/mo', note: '7,952 kWh a year (2020)', source: { publisher: 'U.S. EIA RECS', date: RATE_SOURCES_CHECKED, url: SRC.eiaRecsWest.url } },
                    { label: 'SDG&E DR, Tier 1 / Tier 2', value: '41.299¢ / 52.000¢', note: 'From August 1, 2026', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeDrAug2026.url } },
                    { label: 'Base Services Charge', value: '$0.79343/day', note: 'About $23.80 on a 30-day bill', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                  ]}
                />
              </div>

              <h2>How much electricity a two-bedroom apartment uses</h2>
              <p>
                No utility or agency publishes usage by bedroom count. The closest data is the U.S. Energy Information
                Administration&apos;s 2020 Residential Energy Consumption Survey for the West census region, which includes
                California. It reports yearly use by type and size of home:
              </p>
              <DataTable
                caption="Average electricity use in the West, by home type and size (2020)"
                columns={['Category', 'kWh a year', 'About kWh a month']}
                rows={[
                  ['Apartment in a building with 5+ units', '5,086', '424'],
                  ['Rented apartment (any building)', '5,255', '438'],
                  ['Apartment in a 2–4 unit building', '5,644', '470'],
                  ['Home under 1,000 sq ft', '5,362', '447'],
                  ['Home of 1,000–1,499 sq ft', '7,952', '663'],
                  ['Two-person household', '8,875', '740'],
                ]}
                note={<>Source: U.S. EIA, 2020 RECS Table CE2.5 (West region), physical units, checked September 23, 2026. The West covers California and 12 other states.</>}
              />
              <p>
                A larger apartment with two or three people, a dishwasher, in-unit laundry or electric heat will sit toward the
                top of that range. A small unit in a big building with gas cooking will sit toward the bottom. Your own figure is
                on the bill as total kWh for the billing period; divide it by the billing days to compare months.
              </p>

              <h2>What that usage costs on SDG&amp;E</h2>
              <p>
                SDG&amp;E&apos;s simplest plan to price is DR, its optional non-time-of-use schedule. From August 1, 2026 it charges
                41.299 cents per kWh for use up to 130% of your baseline allowance and 52.000 cents for everything above, plus a
                daily Base Services Charge of $0.79343. The baseline allowance depends on your climate zone and season; for a home
                with gas and electric service, SDG&amp;E&apos;s calculator gives 9.0 kWh a day on the coast and 10.4 inland in
                summer, which works out to 351 and about 406 kWh at the lower price on a 30-day bill.
              </p>
              <DataTable
                caption="Estimated 30-day SDG&E bill on Schedule DR, gas-and-electric apartment (before taxes)"
                columns={['Monthly use', 'Coastal, summer', 'Inland, summer', 'Coastal, winter']}
                rows={[
                  ['425 kWh', '≈ $207.24', '≈ $201.40', '≈ $206.41'],
                  ['470 kWh', '≈ $230.64', '≈ $224.80', '≈ $229.81'],
                  ['663 kWh', '≈ $331.00', '≈ $325.16', '≈ $330.17'],
                  ['740 kWh', '≈ $371.04', '≈ $365.20', '≈ $370.21'],
                ]}
                note={
                  <>
                    Our arithmetic from SDG&amp;E&apos;s Schedule DR total rates effective August 1, 2026 and its baseline allowance
                    calculator (summer June 1 to October 31), checked September 23, 2026. Each figure is kWh up to 130% of baseline
                    × 41.299¢ + remaining kWh × 52.000¢ + 30 days × $0.79343. Excludes taxes, fees and the California Climate
                    Credit. All-electric homes have different allowances.
                  </>
                }
              />
              <p>
                The climate-zone gap is small at these usage levels, about $6 a month, because DR&apos;s two prices are close. The
                bigger driver is usage: each extra 100 kWh above the allowance adds $52.
              </p>

              <h2>On TOU-DR1, the hour matters more than the amount</h2>
              <p>
                Most SDG&amp;E households are on TOU-DR1, which SDG&amp;E calls its standard residential schedule. From August 1,
                2026 it charges 69.135 cents per kWh on-peak (4 to 9 p.m. every day), 46.421 cents off-peak and 37.433 cents super
                off-peak in summer, and 61.471, 53.060 and 43.719 cents in winter. Use up to 130% of baseline earns a 10.702-cent
                credit. Super off-peak is midnight to 6 a.m. and 10 a.m. to 2 p.m. on weekdays, and midnight to 2 p.m. on weekends
                and holidays.
              </p>
              <p>
                That spread means two apartments with the same monthly kWh can get quite different bills. Moving 100 kWh a month
                from on-peak to super off-peak is worth $31.70 in summer and $17.75 in winter at these prices. An apartment where
                most use happens after work, cooking, TV and laundry between 4 and 9 p.m., can pay more on TOU-DR1 than the DR
                figures above; one that runs laundry and the dishwasher late at night or on weekend mornings can pay less. The{' '}
                <Link href="/blog/sdge-time-of-use-rates-2026" className={guideLink}>
                  SDG&amp;E time-of-use guide
                </Link>{' '}
                lists every plan&apos;s hours and prices.
              </p>

              <h2>Why SDG&amp;E apartment bills run higher than elsewhere</h2>
              <p>
                The price per kWh is the main reason. The CPUC Public Advocates Office puts SDG&amp;E&apos;s residential average at
                45.5 cents per kWh in June 2026, against 34.4 cents at SCE and 33.7 cents at PG&amp;E. SMUD&apos;s comparison of a
                750 kWh month as of June 1, 2026 shows $322 at SDG&amp;E, the highest of the utilities it lists. For comparison,
                the average California home used 503 kWh a month in 2024, per EIA. The flat Base Services Charge, about $23.80 on
                a 30-day bill, also weighs more on a small bill than a large one. Our{' '}
                <Link href="/blog/average-pge-bill-for-1-bedroom-apartment" className={guideLink}>
                  PG&amp;E one-bedroom estimate
                </Link>{' '}
                shows the same exercise in Northern California.
              </p>

              <h2>If a community choice provider serves your building</h2>
              <p>
                Two community choice aggregators operate in SDG&amp;E&apos;s territory, San Diego Community Power and Clean Energy
                Alliance, according to the CPUC&apos;s list. If you are enrolled in one, it sets the generation price and SDG&amp;E
                bills delivery, so the totals above do not apply exactly. The CPUC rate comparison shows the combined rate for your
                ZIP code, and{' '}
                <Link href="/blog/how-to-read-sdge-bill" className={guideLink}>
                  how to read an SDG&amp;E bill
                </Link>{' '}
                shows where each part appears.
              </p>

              <h2>What a renter can do about it</h2>
              <p>
                Check whether your household qualifies for CARE or FERA, which cut the bill and the Base Services Charge; the CPUC
                sets the income limits. Compare DR with TOU-DR1 against your own hourly usage in your SDG&amp;E account, since the
                cheaper plan depends on your schedule. And move flexible loads such as laundry, dishwashing and EV charging into
                super off-peak hours. If the building owner is considering solar or you are buying a home, the numbers above are the
                baseline any proposal should beat.
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

            <SolarInquiry utility="sdge" topic="SDG&E apartment bill and solar comparison" heading="Compare a Solar Plan With Your SDG&E Bill" />
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
