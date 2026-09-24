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

const path = '/blog/pge-time-of-use-rates-2026';
const url = `https://ratereliefca.com${path}`;
const title = 'PG&E Peak Hours and Time-of-Use Rates 2026: All Plans';
const h1 = 'PG&E Peak Hours and Time-of-Use Rates in 2026: E-TOU-C, E-TOU-D, EV2-A and E-ELEC';
const description =
  "PG&E peak hours are 4–9 p.m. daily on E-TOU-C, EV2-A and E-ELEC and 5–8 p.m. weekdays on E-TOU-D. See every plan's March 2026 price per kWh.";
const published = '2026-09-09';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'pgeResRatesCurrent',
  'pgeResRatesJan2026',
  'pgeResRatesSep2025',
  'pgeResRatesMar2025',
  'pgeResRatesJan2024',
  'pgeRatesIndex',
  'pgeTouPlans',
  'pgeEvPlans',
  'pgeElectricHome',
  'pgeBsc',
  'pgeBillExplainer',
  'pgeCca',
  'paoQ2_2026',
  'paoQ4_2025',
  'paoPgeRequests',
  'cpucNbt',
);

const faqs = [
  {
    question: 'What are PG&E peak hours?',
    answer:
      "4 p.m. to 9 p.m. every day, including weekends and holidays, on E-TOU-C, EV2-A and E-ELEC. On E-TOU-D, peak is 5 p.m. to 8 p.m. on non-holiday weekdays only. EV2-A and E-ELEC also have a partial-peak price from 3 to 4 p.m. and 9 p.m. to midnight. The separately metered EV-B plan uses different hours.",
  },
  {
    question: 'What are PG&E off-peak hours?',
    answer:
      'On E-TOU-C, every hour outside 4 to 9 p.m. On E-TOU-D, every hour outside 5 to 8 p.m. on weekdays, plus weekends and holidays. On EV2-A and E-ELEC, midnight to 3 p.m. every day is off-peak, the cheapest period on those plans.',
  },
  {
    question: 'What is the PG&E EV2-A off-peak rate per kWh?',
    answer:
      "22.558 cents per kWh, summer and winter, from March 1, 2026, per PG&E's residential rates table. It was 28.474 cents from January 1 to February 28, 2026, 30.036 cents from September to December 2025, and about 31.03 cents from March to August 2025. The March 2026 drop came with the new Base Services Charge.",
  },
  {
    question: 'How much does PG&E charge per kWh?',
    answer:
      "The CPUC Public Advocates Office puts PG&E's residential average at 33.7 cents per kWh in June 2026. Individual plan prices from March 1, 2026 range from 22.558 cents (EV2-A off-peak) to 55.214 cents (E-ELEC summer peak), plus a daily Base Services Charge of about 79 cents for most customers.",
  },
  {
    question: 'Did PG&E raise rates in 2026?',
    answer:
      "No. PG&E's residential average fell about 7.5% on January 1, 2026 and about 3.7% on March 1, 2026, per the Public Advocates Office, and there was no change in the second quarter. The office's July 2026 report projects 33.9 cents by the end of 2026. Its fact sheet on PG&E's 2027 rate case warns bills could rise about 16% in 2027 if all expected requests are approved.",
  },
  {
    question: 'Should I choose E-ELEC or EV2-A?',
    answer:
      "Compare your own usage. EV2-A's off-peak price, 22.558 cents, is well below E-ELEC's 33.358 cents in summer and 28.468 cents in winter, which favors overnight EV charging. E-ELEC's winter peak price, 32.063 cents, is far below EV2-A's 41.099 cents, which favors homes with heavy winter evening use such as a heat pump. Solar Billing Plan customers are placed on E-ELEC.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function PGETimeOfUseRates2026() {
  return (
    <PublicLayout breadcrumbLabel="PG&E time-of-use rates" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="PG&E time-of-use rates" kicker="PG&E · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                PG&amp;E&apos;s peak hours are 4 to 9 p.m. every day on E-TOU-C, EV2-A and E-ELEC, and 5 to 8 p.m. on
                non-holiday weekdays on E-TOU-D. From March 1, 2026, summer peak prices run 47.7 to 55.2 cents per kWh. The
                cheapest PG&amp;E power is EV2-A&apos;s 22.558-cent off-peak rate from midnight to 3 p.m.
              </p>
              <p>
                Every price here is from PG&amp;E&apos;s residential rates table for March 1, 2026 onward, set by Advice Letter
                7846-E and checked September 23, 2026; PG&amp;E had not posted a later table. They are total bundled prices for
                customers who buy both generation and delivery from PG&amp;E. For PG&amp;E&apos;s average rate next to SCE and
                SDG&amp;E, see the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>

              <QuickAnswer label="Which plan tends to fit">
                <p>
                  <strong>E-TOU-C</strong> suits a household that stays near its baseline allowance and can avoid 4 to 9 p.m.
                  every day. <strong>E-TOU-D</strong> suits heavier users or people home on weekends, since its peak is shorter
                  and weekday-only. <strong>EV2-A</strong> suits overnight EV charging. <strong>E-ELEC</strong> suits homes
                  with a heat pump, battery or EV, and is required for new solar customers. PG&amp;E&apos;s own comparison with
                  your usage is the deciding test.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="PG&E time-of-use, from March 1, 2026"
                  facts={[
                    { label: 'Peak hours (E-TOU-C, EV2-A, E-ELEC)', value: '4–9 p.m. daily', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Peak hours (E-TOU-D)', value: '5–8 p.m. weekdays', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Lowest price (EV2-A off-peak)', value: '22.558¢/kWh', note: 'Midnight to 3 p.m.', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Base Services Charge, most homes', value: '$0.79343/day', note: 'About $24 a month', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="PG&E time-of-use rates and solar comparison" utility="pge" />
              </div>

              <h2>PG&amp;E peak hours by plan</h2>
              <p>
                Summer on these plans runs June 1 through September 30 and winter October 1 through May 31. The hours
                themselves do not change with the season; the prices do.
              </p>
              <DataTable
                caption="PG&E residential time-of-use periods"
                columns={['Plan', 'Peak', 'Partial peak', 'Off-peak']}
                rows={[
                  ['E-TOU-C', '4–9 p.m., every day', 'None', 'All other hours'],
                  ['E-TOU-D', '5–8 p.m., Monday–Friday except holidays', 'None', 'All other hours, including weekends and holidays'],
                  ['EV2-A', '4–9 p.m., every day', '3–4 p.m. and 9 p.m.–midnight, every day', 'Midnight–3 p.m., every day'],
                  ['E-ELEC', '4–9 p.m., every day', '3–4 p.m. and 9 p.m.–midnight, every day', 'Midnight–3 p.m., every day'],
                ]}
                note={<>Source: PG&amp;E residential rates table, time-of-use period tabs, checked September 23, 2026. PG&amp;E&apos;s holidays for these plans are New Year&apos;s Day, Presidents&apos; Day, Memorial Day, Independence Day, Labor Day, Veterans Day, Thanksgiving and Christmas.</>}
              />

              <h2>PG&amp;E time-of-use prices, March 1, 2026</h2>
              <DataTable
                caption="PG&E residential time-of-use prices (cents per kWh, bundled)"
                columns={['Plan and season', 'Peak', 'Partial peak', 'Off-peak']}
                rows={[
                  ['E-TOU-C, summer', '52.240¢', '—', '39.940¢'],
                  ['E-TOU-C, winter', '39.757¢', '—', '36.757¢'],
                  ['E-TOU-D, summer', '47.708¢', '—', '34.212¢'],
                  ['E-TOU-D, winter', '38.747¢', '—', '34.886¢'],
                  ['EV2-A, summer', '53.809¢', '42.760¢', '22.558¢'],
                  ['EV2-A, winter', '41.099¢', '39.428¢', '22.558¢'],
                  ['E-ELEC, summer', '55.214¢', '39.026¢', '33.358¢'],
                  ['E-ELEC, winter', '32.063¢', '29.854¢', '28.468¢'],
                ]}
                note={<>Source: PG&amp;E residential rates table, March 1, 2026 to present (Advice Letter 7846-E), checked September 23, 2026. E-TOU-C prices are before its 8.140¢ baseline credit. All four plans add the daily Base Services Charge; CARE customers get 35% off usage charges.</>}
              />

              <h2>E-TOU-C: peak pricing 4 to 9 p.m. every day</h2>
              <p>
                E-TOU-C has one rule that is easy to remember and hard to avoid: 4 to 9 p.m. is peak every day, weekends and
                holidays included. It is also the only PG&amp;E time-of-use plan that keeps the baseline idea. Usage within
                your baseline allowance, set by your territory, heating source and season, gets an 8.140-cent credit off both
                the peak and off-peak price.
              </p>
              <p>
                <strong>It may fit when</strong> household use stays near baseline, evening use is light all week, and big
                loads can run before 4 p.m. or after 9 p.m. <strong>It may be a poor fit when</strong> cooking, cooling,
                laundry, a pool pump or EV charging regularly land between 4 and 9, especially on weekends. PG&amp;E&apos;s
                tiered alternative is covered in the{' '}
                <Link href="/blog/pge-tier-rates" className={guideLink}>
                  PG&amp;E tier rates guide
                </Link>
                .
              </p>

              <h2>E-TOU-D: peak 5 to 8 p.m. on weekdays</h2>
              <p>
                E-TOU-D narrows the peak to three hours on non-holiday weekdays and makes weekends off-peak all day. It has no
                baseline credit, so every kWh gets the same time-based price. Its summer peak, 47.708 cents, is the lowest
                summer peak of the four plans. It tends to suit homes well above baseline or with heavy weekend use, and it
                is a poor fit when most usage is already inside baseline or the 5-to-8 weekday load cannot move.
              </p>

              <h2>EV2-A: PG&amp;E&apos;s home EV charging rate</h2>
              <p>
                EV2-A prices the whole home, car included, on one meter. Its off-peak rate from midnight to 3 p.m. is 22.558
                cents per kWh year-round, the lowest per-kWh price on any PG&amp;E residential plan here. The trade-off is a
                high summer peak, 53.809 cents, and a partial-peak price of 42.760 cents from 3 to 4 p.m. and 9 p.m. to
                midnight. If the car charges after midnight and the house avoids 4 to 9, the plan rewards it.
              </p>
              <DataTable
                caption="PG&E EV2-A off-peak price per kWh over time"
                columns={['Effective', 'Off-peak price', 'Fixed daily charge']}
                rows={[
                  ['Jan 1, 2024', '34.462¢', 'Minimum bill only'],
                  ['Apr 1, 2024', '35.210¢', 'Minimum bill only'],
                  ['Jul 1, 2024', '30.924¢', 'Minimum bill only'],
                  ['Oct 1, 2024', '32.454¢', 'Minimum bill only'],
                  ['Jan 1, 2025', '30.339¢', 'Minimum bill only'],
                  ['Mar 1, 2025', '31.026¢ (summer), 31.027¢ (winter)', 'Minimum bill only'],
                  ['Sep 1, 2025', '30.036¢', 'Minimum bill only'],
                  ['Jan 1, 2026', '28.474¢', 'Minimum bill only'],
                  ['Mar 1, 2026', '22.558¢', 'Base Services Charge, $0.79343/day (standard)'],
                ]}
                note={<>Source: PG&amp;E residential rate tables for each period (Electric Vehicle and Technology tab), from PG&amp;E&apos;s electric rates archive, checked September 23, 2026.</>}
              />
              <p>
                PG&amp;E also offers EV-B, which puts the car on its own second meter. EV-B has its own seasons, May through
                October for summer, and its own hours: peak 2 to 9 p.m. on weekdays and 3 to 7 p.m. on weekends and
                holidays. From March 1, 2026 its prices ran from 23.504 cents off-peak in winter to 62.131 cents on summer
                peak, plus a meter charge of $0.04928 a day. For costs of charging at home against public chargers, see{' '}
                <Link href="/blog/chargepoint-cost-per-kwh-california" className={guideLink}>
                  what public charging costs per kWh in California
                </Link>
                .
              </p>

              <h2>E-ELEC: the Electric Home plan</h2>
              <p>
                E-ELEC is for homes with at least one of an electric vehicle, battery storage or an electric heat pump for
                water or space heating; the home does not need to be all-electric. PG&amp;E places Solar Billing Plan
                customers on it automatically, and the CPUC requires it for PG&amp;E customers on the net billing tariff. Its
                summer peak is the highest of the four plans, 55.214 cents, but its winter prices are the lowest: 32.063 cents
                on peak and 28.468 cents off-peak. Before March 2026, E-ELEC already had its own fixed charge, $0.49281 a day;
                it now uses the same income-graduated Base Services Charge as the other plans.
              </p>
              <p>
                <strong>E-ELEC vs. EV2-A.</strong> EV2-A&apos;s off-peak price is far lower, 22.558 cents against E-ELEC&apos;s
                33.358 in summer and 28.468 in winter, so overnight EV charging favors EV2-A. E-ELEC&apos;s winter peak is far
                lower, 32.063 against 41.099 cents, so a heat pump running on winter evenings favors E-ELEC. A home with both
                needs the comparison run on its own interval data.
              </p>

              <h2>How much does PG&amp;E charge per kWh?</h2>
              <p>
                It depends on the plan and the hour, from 22.558 cents on EV2-A off-peak to 55.214 cents on E-ELEC summer
                peak. As a single figure, the CPUC Public Advocates Office puts PG&amp;E&apos;s residential average at 33.7
                cents per kWh in June 2026, averaged across every plan, hour and customer and excluding the California
                Climate Credit. PG&amp;E&apos;s tiered E-1 plan charges 32.561 cents within baseline and 40.702 cents above it.
              </p>

              <h2>Did PG&amp;E raise rates in 2026?</h2>
              <p>
                No. The Public Advocates Office reports PG&amp;E&apos;s residential average fell about 7.5% on January 1, 2026,
                mainly because less generation cost fell on PG&amp;E&apos;s own bundled customers, and about 3.7% on March 1, as two wildfire-cost recovery programs
                ended and the Base Services Charge began. There was no PG&amp;E change in the second quarter. The office
                projects 33.9 cents by December 31, 2026, counting only requests already filed. Looking further out, its
                fact sheet on PG&amp;E&apos;s 2027 general rate case says the average bill could rise about 16% in 2027 and 30% by
                2030 if all of PG&amp;E&apos;s expected requests are approved. The year-by-year record is in{' '}
                <Link href="/blog/did-pge-rates-go-up" className={guideLink}>
                  did PG&amp;E rates go up
                </Link>
                .
              </p>

              <h2>The Base Services Charge changes the comparison</h2>
              <p>
                Every plan above adds a daily Base Services Charge: 79.343 cents for most customers, 39.688 cents for income
                tier 2 and 19.713 cents for income tier 1, roughly $24, $12 and $6 a month. PG&amp;E says the charge separated
                some costs from the per-kWh price, and that lower kWh prices may or may not mean a lower total bill. Do not add
                $24 to an old bill and call that the new total; compare the full current bill under each plan.
              </p>

              <h2>CCA customers need the joint rate, not these tables</h2>
              <p>
                If a community choice aggregator supplies your electricity, it sets the generation price while PG&amp;E keeps
                delivery, metering, billing and outage response, and a Power Charge Indifference Adjustment can appear. Use
                the joint rate comparison for your CCA and PG&amp;E plan; adding a CCA generation rate to PG&amp;E&apos;s bundled
                total would count generation twice.
              </p>

              <h2>How to pick a plan without guessing</h2>
              <ol>
                <li>Download at least 12 months of hourly or interval usage from your PG&amp;E account.</li>
                <li>Count how many kWh fall inside 4 to 9 p.m. every day and inside 5 to 8 p.m. on weekdays.</li>
                <li>Check how much usage falls within your baseline allowance, which only E-TOU-C credits.</li>
                <li>Add expected loads such as an EV, heat pump, electric water heater or pool equipment.</li>
                <li>Run PG&amp;E&apos;s rate comparison and keep the result with its date, because prices change.</li>
                <li>After switching, compare the next full billing cycles on kWh per day, not dollars alone.</li>
              </ol>

              <h2>Does solar or a battery change the best plan?</h2>
              <p>
                It can, and for new solar it is decided for you: the CPUC&apos;s net billing tariff puts PG&amp;E solar
                customers on E-ELEC, and export credits are usually lower than retail prices except on some late summer
                evenings. A battery that stores midday solar for the 4-to-9 window is the main lever. Start with the{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  PG&amp;E high-bill checklist
                </Link>
                , compare statewide in{' '}
                <Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className={guideLink}>
                  PG&amp;E vs. SCE vs. SDG&amp;E rates
                </Link>
                , and read{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={guideLink}>
                  battery payback under NEM 3.0
                </Link>{' '}
                before signing anything.
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

            <SolarInquiry topic="PG&E time-of-use rates and solar comparison" utility="pge" heading="Compare a Solar Plan With Your PG&E Bill" />
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
