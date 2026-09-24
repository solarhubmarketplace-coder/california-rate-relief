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

const path = '/blog/selling-electricity-back-to-the-grid-price-per-kwh';
const url = `https://ratereliefca.com${path}`;
const title = 'Selling Electricity Back to the Grid: Price per kWh (2026)';
const h1 = 'Selling Electricity Back to the Grid in California: What You Get per kWh';
const description =
  'California utilities pay 0¢ to over $1 per kWh for solar exports, depending on the tariff, hour and month. See 2026 values for PG&E, SCE, SMUD and LADWP.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources('cpucNbt', 'pgeEecValues', 'pgeSolarBilling', 'sceNsc', 'sceNemBill', 'smudResRates', 'ladwpEvNem', 'paoQ2_2026');

const faqs = [
  {
    question: 'How much do you get for selling electricity back to the grid in California?',
    answer:
      "It depends on your tariff. New PG&E, SCE and SDG&E solar customers are on the net billing tariff, where each exported kWh earns an hourly value set by the CPUC: under 1 cent at midday in spring on PG&E's 2026 sheet, and over $1 on some August evenings. SMUD pays a flat 9.6 cents. Older NEM customers get the retail rate during the year and about 2 cents for any surplus left at year end.",
  },
  {
    question: 'Do California utilities pay cash for solar power?',
    answer:
      'Mostly no. Exports earn bill credits that offset what you buy. Cash, or a check, comes only for surplus left at the end of a 12-month cycle, at the Net Surplus Compensation rate if you opted in; SCE paid $0.01825 per kWh for cycles ending September 2026. LADWP zeroes out leftover credits when you close the account.',
  },
  {
    question: 'Why are solar export credits so low at noon?',
    answer:
      "Because the credits under the net billing tariff track what the power is worth to the grid at that hour, and California's grid has plenty of solar at midday. The CPUC says export credits are usually lower than the retail price but can rise above it on late summer evenings. PG&E's 2026 values for April weekdays at noon total less than 1 cent per kWh.",
  },
  {
    question: 'Is it better to sell solar power or use it?',
    answer:
      'Under the net billing tariff, using it is usually worth more: every kWh you use at home avoids a retail price of roughly 24 to 74 cents on SCE plans, while a midday export may earn a few cents. That is why the CPUC says a battery helps customers get the most from net billing, by storing midday power for the evening.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function SellingElectricityBackPage() {
  return (
    <PublicLayout breadcrumbLabel="Selling electricity back to the grid" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Selling electricity back to the grid" kicker="Solar exports · Price per kWh" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                In California you mostly earn bill credits, not cash, and the price per kWh depends on your tariff. New PG&amp;E,
                SCE and SDG&amp;E solar customers get hourly values: PG&amp;E&apos;s 2026 sheet runs from under 1 cent at midday
                in April to about $1.15 at 7 p.m. on August weekdays. SMUD pays a flat 9.6 cents. Year-end surplus pays about 2
                cents.
              </p>
              <p>
                So &ldquo;how much do I get for selling solar back&rdquo; has four different answers in California, one for each
                system: the net billing tariff at the big three investor-owned utilities, the older net energy metering
                tariffs, SMUD&apos;s Solar and Storage Rate, and LADWP&apos;s net metering. This page gives the actual 2026
                figures for each. For the retail prices these credits offset, see the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="What a kWh sent to the grid earns"
                  facts={[
                    { label: 'PG&E net billing, April weekday noon, 2026', value: '$0.0085', note: 'Produced + delivered values', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeEecValues.url } },
                    { label: 'PG&E net billing, August weekday 7 p.m., 2026', value: '$1.1544', note: 'Among the highest hours', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeEecValues.url } },
                    { label: 'SMUD Solar and Storage Rate', value: '$0.096', note: 'Any hour, any season', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudResRates.url } },
                    { label: 'SCE year-end surplus, cycles ending Sep 2026', value: '$0.01825', note: 'Net Surplus Compensation', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceNsc.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="Solar export value check" />
              </div>

              <h2>Net billing (PG&amp;E, SCE, SDG&amp;E): hourly export values</h2>
              <p>
                Solar customers who applied to interconnect after the net billing tariff took effect in April 2023 are on it.
                Exports earn Energy Export Credits based on the CPUC&apos;s Avoided Cost Calculator: what the utility saves when
                your kWh replaces power it would have bought or delivered. The values change by month, hour and weekday or
                weekend. The set that applies to you is the one for the year you submitted your interconnection application,
                and the CPUC guarantees net billing customers the tariff for nine years.
              </p>
              <p>
                PG&amp;E publishes each year&apos;s set as two parts, a value for energy produced (the generation part) and a
                value for energy delivered. Here is a sample from its 2026 sheet, weekday values, both parts added:
              </p>
              <DataTable
                caption="PG&E Solar Billing Plan export values, 2026 application year, weekdays ($ per kWh, produced + delivered)"
                columns={['Month', 'Noon', '6 p.m.', '7 p.m.']}
                rows={[
                  ['January', '$0.0672', '$0.1025', '$0.0943'],
                  ['April', '$0.0085', '$0.0783', '$0.0783'],
                  ['July', '$0.0576', '$0.3643', '$0.4575'],
                  ['August', '$0.0680', '$1.1301', '$1.1544'],
                  ['September', '$0.0624', '$0.4608', '$0.5951'],
                  ['December', '$0.0634', '$0.0982', '$0.0908'],
                ]}
                note={<>Source: PG&amp;E Solar Billing Plan 2026 Energy Export Credit values sheet, checked September 23, 2026; sums are our arithmetic. PG&amp;E says the produced part applies only to customers who get generation from PG&amp;E; customers of a community choice provider or Direct Access provider should ask that provider.</>}
              />
              <p>
                The pattern is the point. Midday exports, when most panels produce most, earn a few cents or less; in April
                they are close to zero, and some spring weekend afternoons are listed at $0.00000 for the produced part. Late
                afternoon and evening exports in July through September earn far more, and PG&amp;E&apos;s single highest
                produced value, $0.99821, falls at 8 p.m. on August weekdays. The CPUC sums it up: export credits are usually
                lower than the retail rate but can rise above it on late summer evenings.
              </p>
              <p>
                Two additions. Residential PG&amp;E and SCE customers who apply before the end of 2027 get a small export
                adder for nine years; PG&amp;E calls these Energy Export Bonus Credits. SDG&amp;E customers are excluded, which
                the CPUC explains by SDG&amp;E&apos;s higher retail rates. And under net billing, bills are paid monthly while
                credits roll over and true up once a year.
              </p>

              <h2>Older net energy metering (NEM 1.0 and 2.0)</h2>
              <p>
                If your system was interconnected before net billing, you are probably on NEM. During the year, the CPUC says,
                exports are credited at your retail import rate, the same price you pay for power at that hour. That makes a
                NEM export worth roughly what SCE&apos;s time-of-use plans charge, about 24 to 74 cents depending on plan and
                hour. At the end of each 12-month cycle, any surplus left is paid at the Net Surplus Compensation rate, which
                the CPUC puts at about 2 to 3 cents per kWh.
              </p>
              <DataTable
                caption="SCE Net Surplus Compensation rate for 12-month cycles ending in recent months ($ per kWh)"
                columns={['Cycle ending', 'Rate']}
                rows={[
                  ['September 2024', '$0.01892'],
                  ['March 2025', '$0.01309'],
                  ['September 2025', '$0.01645'],
                  ['March 2026', '$0.01848'],
                  ['September 2026', '$0.01825'],
                ]}
                note={<>Source: SCE Net Surplus Compensation Rate page, checked September 23, 2026. SCE derives it from the day-ahead wholesale price.</>}
              />
              <p>
                SCE pays it as a bill credit or a check, but only if you opted in. How the year-end statement works is in our{' '}
                <Link href="/blog/sce-settlement-bill" className={guideLink}>
                  SCE annual settlement bill guide
                </Link>
                .
              </p>

              <h2>SMUD and LADWP</h2>
              <p>
                <strong>SMUD</strong> keeps it simple. Customers on its Solar and Storage Rate earn 9.6 cents per kWh for power
                sent to the grid, at any hour and in any season. Compare that with the 12.85 to 37.65 cents SMUD charges under
                its 2026 Time-of-Day rate, and self-use is worth more than export at every hour, most of all on summer weekday
                evenings.
              </p>
              <p>
                <strong>LADWP</strong> still uses net energy metering. When your system produces more than you use in a billing
                period, LADWP credits the excess at your rate schedule&apos;s energy price, and the credit carries forward to
                later bills, except against taxes and minimum charges. If a credit balance remains when you close the account,
                LADWP sets it to zero with no further payment. The LADWP rate tables are in our{' '}
                <Link href="/blog/ladwp-rates" className={guideLink}>
                  LADWP rates guide
                </Link>
                .
              </p>

              <h2>What this means if you are deciding on solar</h2>
              <DataTable
                caption="Export value by system, 2026"
                columns={['System', 'What an export earns', 'Leftover at year end']}
                rows={[
                  ['PG&E, SCE, SDG&E net billing', 'Hourly value; PG&E 2026 sheet: under 1¢ to about $1.15', 'Net Surplus Compensation'],
                  ['PG&E, SCE, SDG&E NEM 1.0/2.0', 'Your retail rate at that hour', 'Net Surplus Compensation, about 2–3¢'],
                  ['SMUD Solar and Storage Rate', '9.6¢, any hour', 'n/a'],
                  ['LADWP net metering', 'Your schedule’s energy price, as a credit', 'Carried forward; zeroed when service ends'],
                ]}
                note={<>Sources: CPUC net metering and net billing page; PG&amp;E, SCE, SMUD and LADWP rate pages. All checked September 23, 2026.</>}
              />
              <p>
                Under net billing, the money is in the power you do not buy, not the power you sell. That shifts the design
                question from &ldquo;how big&rdquo; to &ldquo;how much can I use myself,&rdquo; and it is why the CPUC points
                to battery storage for moving midday solar into the high-value evening. Our guides on{' '}
                <Link href="/blog/net-billing-vs-net-metering-california" className={guideLink}>
                  net billing vs. net metering
                </Link>
                ,{' '}
                <Link href="/blog/nem-3-california-still-worth-it" className={guideLink}>
                  whether solar under NEM 3.0 is still worth it
                </Link>{' '}
                and{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={guideLink}>
                  battery payback under NEM 3.0
                </Link>{' '}
                walk through that math. For the import prices exports are measured against, see{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use rates
                </Link>{' '}
                and{' '}
                <Link href="/blog/sce-rate-schedules" className={guideLink}>
                  SCE rate schedules
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

            <SolarInquiry topic="Solar export value" heading="Compare a Solar and Battery Plan With Your Bill" />
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
