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
import { HubUpLink } from '@/components/growth/HubUpLink';

// Tier 3 (2026-09-23): the tariff-book view of PG&E residential pricing. The
// time-of-use page explains the hours; this page lists every residential
// schedule, where its tariff lives, and how and when the prices change. It
// also carries the general PG&E rate questions (tiers, winter and weekend
// prices, net surplus compensation, rate cuts) that do not belong on the EV page.

const path = '/blog/pge-rate-schedules';
const url = `https://ratereliefca.com${path}`;
const title = 'PG&E Rate Schedules 2026: Every Residential Tariff';
const h1 = 'PG&E Rate Schedules in 2026: Every Residential Tariff, Its Price and Where to Find It';
const description =
  'Every PG&E residential rate schedule with its March 1, 2026 prices: E-1, E-TOU-C, E-TOU-D, E-ELEC, EV2-A, EV-B and multifamily plans, plus tariff PDFs.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'pgeTariffIndex',
  'pgeResRatesCurrent',
  'pgeRatePlanPricing',
  'pgeE1Tariff',
  'pgeEtoucTariff',
  'pgeEtoudTariff',
  'pgeEelecTariff',
  'pgeEv2Tariff',
  'pgeEvBTariff',
  'pgeBaseline',
  'pgeNem2Tariff',
  'pgeNscRates',
  'pgeNscFaq',
  'pgeRatePlans',
  'pgeGrc2027',
  'pgeBscNews',
  'paoPgeRequests',
  'paoQ2_2026',
  'paoQ2_2025',
  'cpucGrc',
  'cpucNbt',
  'pgeUnderstandBill',
);

const faqs = [
  {
    question: 'What is the PG&E E-1 rate?',
    answer:
      'E-1 is PG&E’s tiered residential schedule. Since March 1, 2026 it charges 32.561 cents per kWh for use up to your baseline allowance (Tier 1) and 40.702 cents for everything above it (Tier 2), plus a daily Base Services Charge of $0.79343 for most homes. There are no peak hours on E-1.',
  },
  {
    question: 'How do PG&E rate tiers work?',
    answer:
      'Each bill gives you a baseline allowance, a set number of kWh per day that depends on your baseline territory, the season and whether the home is all-electric. Use within it is Tier 1; use above it is Tier 2. On E-1 the gap is 8.141 cents per kWh. Time-of-use plans such as E-TOU-C replace tiers with a baseline credit of 8.14 cents on baseline usage.',
  },
  {
    question: 'What are PG&E winter rates?',
    answer:
      'Winter runs October 1 to May 31 on most residential schedules. On E-TOU-C the winter peak price is 39.757 cents and off-peak is 36.757 cents; on E-TOU-D they are 38.747 and 34.886 cents; on E-ELEC winter peak is 32.063 cents. EV-B uses a different winter, November through April.',
  },
  {
    question: 'Does PG&E charge less on weekends?',
    answer:
      'It depends on the schedule. E-TOU-D charges its peak price only 5 to 8 p.m. on non-holiday weekdays, so weekends are off-peak all day. E-TOU-C, E-ELEC and EV2-A keep the 4 to 9 p.m. peak every day, weekends included. EV-B has a shorter weekend peak, 3 to 7 p.m.',
  },
  {
    question: 'What is PG&E’s net surplus compensation rate?',
    answer:
      'It is the price PG&E pays net energy metering customers for surplus power left at the annual true-up. PG&E’s table shows rates from 2.919 to 3.396 cents per kWh for true-up months in 2025, and 2.751 cents for September 2026. It is based on wholesale prices, so it is far below the retail rate.',
  },
  {
    question: 'How often does PG&E change its rates?',
    answer:
      'Several times a year. Prices change whenever the CPUC approves an advice letter or decision that changes PG&E’s revenue, and PG&E posts a new rate table each time. Base rates are reset in a general rate case every four years; PG&E filed its 2027-2030 case on May 15, 2025 and does not expect related changes before January 2027.',
  },
  {
    question: 'Is there a PG&E rate comparison tool?',
    answer:
      'Yes. Signed in to your PG&E account, the rate plan comparison uses your own usage history to price the plans you qualify for. Without an account, PG&E’s rate plan pricing sheet shows every residential plan’s prices on one page.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function PgeRateSchedulesPage() {
  return (
    <PublicLayout breadcrumbLabel="PG&E rate schedules" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="PG&E rate schedules" kicker="PG&E · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                A PG&amp;E rate schedule is the CPUC-approved tariff that sets what you pay for electricity. Most homes are on
                E-TOU-C, with peak pricing from 4 to 9 p.m. every day. The other residential schedules are E-TOU-D, the
                tiered E-1, E-ELEC for electric homes, EV2-A and EV-B for electric vehicles, and EM, ES, ET and ESR for shared
                meters.
              </p>
              <HubUpLink path="/blog/pge-rate-schedules" />
              <p>
                Every price below is from PG&amp;E&apos;s residential rate table for March 1, 2026 to the present and the matching
                tariff sheets, checked September 23, 2026. They are &quot;bundled&quot; prices, for customers who buy both
                electricity and delivery from PG&amp;E. If a community choice aggregator supplies your power, your generation
                price comes from the CCA instead.
              </p>

              <QuickAnswer>
                <p>
                  <strong>Your schedule is printed on page 3 of your bill</strong>, under &quot;Details of Electric
                  Charges.&quot; Find it in the table below, then open the tariff PDF from PG&amp;E&apos;s tariff page for the full
                  rules. Prices last changed on March 1, 2026, when PG&amp;E cut per-kWh prices and started the Base Services
                  Charge.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="PG&E residential pricing, March 1, 2026 to present"
                  facts={[
                    { label: 'E-TOU-C (most homes)', value: '52.24¢ / 39.94¢', note: 'Summer peak / off-peak', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'E-1 tiered', value: '32.561¢ / 40.702¢', note: 'Tier 1 / Tier 2', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeE1Tariff.url } },
                    { label: 'Base Services Charge', value: '$0.79343/day', note: '$0.19713 CARE, $0.39688 FERA', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Residential average rate', value: '33.7¢/kWh', note: 'Unchanged since March 2026', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                  ]}
                />
              </div>

              <div className="not-prose my-8">
                <HeroQuickCheck topic="PG&E rate schedules and solar comparison" utility="pge" />
              </div>

              <h2>Every PG&amp;E residential rate schedule</h2>
              <p>
                PG&amp;E&apos;s tariff book lists each schedule by its code and official name. These are the ones that bill homes.
                Prices are per kWh, including generation and delivery.
              </p>
              <DataTable
                caption="PG&E residential electric rate schedules and prices (March 1, 2026 to present)"
                columns={['Schedule', 'Tariff name and who it is for', 'Summer price', 'Winter price']}
                rows={[
                  ['E-TOU-C', 'Residential Time-of-Use, peak 4–9 p.m. every day. PG&E’s standard plan for most homes.', 'Peak 52.240¢, off-peak 39.940¢', 'Peak 39.757¢, off-peak 36.757¢'],
                  ['E-TOU-D', 'Peak pricing 5–8 p.m. non-holiday weekdays. Voluntary, opt-in.', 'Peak 47.708¢, off-peak 34.212¢', 'Peak 38.747¢, off-peak 34.886¢'],
                  ['E-1', 'Residential Services. Tiered, no peak hours.', 'Tier 1 32.561¢, Tier 2 40.702¢', 'Same as summer; allowance changes'],
                  ['E-ELEC', 'Electric Home. For homes with EV charging, battery storage or a heat pump; required for new solar.', 'Peak 55.214¢, part-peak 39.026¢, off-peak 33.358¢', 'Peak 32.063¢, part-peak 29.854¢, off-peak 28.468¢'],
                  ['EV2 (EV2-A)', 'Home EV charging on the household meter.', 'Peak 53.809¢, part-peak 42.760¢, off-peak 22.558¢', 'Peak 41.099¢, part-peak 39.428¢, off-peak 22.558¢'],
                  ['EV (Rate B)', 'Separately metered EV charging.', 'Peak 62.131¢, part-peak 37.720¢, off-peak 26.465¢', 'Peak 43.878¢, part-peak 30.677¢, off-peak 23.504¢'],
                  ['EM', 'Master-metered multifamily service. Tiered.', 'Tier 1 37.174¢, Tier 2 46.572¢', 'Same as summer'],
                  ['EM-TOU', 'Master-metered multifamily time-of-use, peak 4–9 p.m. every day.', 'Peak 58.118¢, off-peak 45.818¢', 'Peak 45.634¢, off-peak 42.634¢'],
                  ['ES, ET, ESR', 'Multifamily service, mobile home park service, and RV park and marina service. E-1 tier prices with a per-unit discount on ES and ET.', 'Tier 1 32.561¢, Tier 2 40.702¢', 'Same as summer'],
                ]}
                note={
                  <>
                    Source: PG&amp;E residential rates table, tabs for March 1, 2026 to present, and the E-1, E-TOU-C, E-TOU-D,
                    E-ELEC, EV2 and EV tariff sheets, checked September 23, 2026. Summer is June 1 to September 30 and winter
                    October 1 to May 31 on every schedule except EV Rate B, whose summer is May to October. E-TOU-C, E-1, ES, ET
                    and ESR add a baseline credit or lower tier on usage within your baseline allowance.
                  </>
                }
              />
              <p>
                PG&amp;E has closed several older schedules. E-6 was eliminated on March 1, 2024, E-TOU Option A was discontinued
                at the end of 2020, E-TOU-B was eliminated on October 31, 2025, and the EV-A rate was eliminated under Advice
                Letter 7771-E. If an old bill or a solar proposal shows one of those codes, it no longer applies.
              </p>

              <h2>The Base Services Charge on every schedule</h2>
              <p>
                Since March 1, 2026, most PG&amp;E residential schedules add a flat daily Base Services Charge, and the per-kWh
                prices above are lower because of it. The charge depends on income, not usage:
              </p>
              <DataTable
                caption="PG&E Base Services Charge by income tier"
                columns={['Income tier', 'Who', 'Per day', 'About per month']}
                rows={[
                  ['Tier 1', 'CARE households', '$0.19713', '$6'],
                  ['Tier 2', 'FERA households and deed-restricted affordable housing', '$0.39688', '$12'],
                  ['Tier 3', 'Everyone else', '$0.79343', '$24'],
                ]}
                note={<>Sources: PG&amp;E residential rates table (March 1, 2026 to present) and PG&amp;E&apos;s March 1, 2026 article on the restructured bill, which gives the monthly amounts. The charge does not apply to EM, EM-TOU or EV Rate B.</>}
              />
              <p>
                Our{' '}
                <Link href="/blog/california-24-dollar-fixed-charge-explained" className={guideLink}>
                  explainer on California&apos;s $24 fixed charge
                </Link>{' '}
                covers how the CPUC set it and who qualifies for the lower tiers.
              </p>

              <h2>E-1 and PG&amp;E&apos;s rate tiers</h2>
              <p>
                E-1 is the only standard single-family schedule without peak hours. You pay 32.561 cents per kWh until you use
                up your baseline allowance, then 40.702 cents. The allowance is a daily figure multiplied by the days in the
                bill, and it depends on your baseline territory (a letter from P to Z on your bill), the season and whether the
                home is all-electric. A basic-service home in territory T gets 6.5 kWh a day in summer; one in territory W gets
                19.2.
              </p>
              <p>
                The tier structure is why an E-1 bill can climb faster than usage: every kWh above the allowance costs about 25%
                more. Our{' '}
                <Link href="/blog/pge-tier-rates" className={guideLink}>
                  PG&amp;E tier rates guide
                </Link>{' '}
                has the full allowance table and the history of both tier prices since 2023.
              </p>

              <h2>Winter, summer and weekend prices</h2>
              <p>
                Summer on PG&amp;E means June 1 to September 30 on every residential schedule except EV Rate B. Winter prices are
                lower and closer together, which makes the peak matter less from October to May. On E-TOU-C, the summer gap
                between peak and off-peak is 12.3 cents; in winter it is 3 cents.
              </p>
              <p>Weekend treatment is the other difference between schedules:</p>
              <ul>
                <li>
                  <strong>E-TOU-C, E-ELEC and EV2-A</strong> keep the 4 to 9 p.m. peak every day, including weekends and holidays.
                </li>
                <li>
                  <strong>E-TOU-D</strong> charges peak only from 5 to 8 p.m. Monday through Friday; weekends and holidays are
                  off-peak all day.
                </li>
                <li>
                  <strong>EV Rate B</strong> has a 2 to 9 p.m. weekday peak and a 3 to 7 p.m. peak on weekends and holidays.
                </li>
              </ul>
              <p>
                The eight holidays PG&amp;E treats as off-peak on E-TOU-D are New Year&apos;s Day, Presidents&apos; Day, Memorial
                Day, Independence Day, Labor Day, Veterans Day, Thanksgiving and Christmas. For the hour-by-hour picture, see{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E peak hours and time-of-use rates
                </Link>
                .
              </p>

              <h2>Solar schedules: NEM, NEM2 and the Net Billing Tariff</h2>
              <p>
                Solar customers are billed on one of the schedules above plus a solar schedule. NEM and NEM2 are the older net
                energy metering tariffs; NBT, the Net Billing Tariff, is what PG&amp;E calls the Solar Billing Plan. Under NEM and
                NEM2, any surplus left at the annual true-up is paid at the net surplus compensation rate, which follows
                wholesale prices. PG&amp;E&apos;s table shows 2.919 to 3.396 cents per kWh for true-up months in 2025 and 2.751 cents
                for September 2026, against retail prices of 30 cents and more.
              </p>
              <p>
                New solar customers must take service on E-ELEC. The differences between the tariffs are laid out in{' '}
                <Link href="/blog/nem-2-vs-nem-3-california" className={guideLink}>
                  NEM 1.0 vs NEM 2.0 vs NEM 3.0
                </Link>
                , and{' '}
                <Link href="/blog/solar-rate" className={guideLink}>
                  what rate solar homes pay
                </Link>{' '}
                covers the plan requirement.
              </p>

              <h2>Where to download a PG&amp;E tariff and how to read it</h2>
              <p>
                PG&amp;E&apos;s tariff page lists every electric schedule, rule and form with a PDF link. The schedule PDFs are
                named after the code, for example ELEC_SCHEDS_E-TOU-C.pdf or ELEC_SCHEDS_EV2 (Sch).pdf for EV2-A. Each sheet has
                the same parts:
              </p>
              <ul>
                <li>
                  <strong>Header and footer.</strong> The Cal. P.U.C. sheet number, the advice letter that changed it and the
                  effective date. E-TOU-D&apos;s rate sheet, for instance, cites Advice Letter 7846-E, effective March 1, 2026.
                </li>
                <li>
                  <strong>Applicability.</strong> Who may take the schedule. E-TOU-D calls itself voluntary and opt-in; E-ELEC
                  requires a qualifying technology such as EV charging, a battery or a heat pump.
                </li>
                <li>
                  <strong>Rates.</strong> The total bundled price and, further down, the unbundled pieces (generation,
                  distribution, transmission and others).
                </li>
                <li>
                  <strong>Special conditions.</strong> Time periods, seasons, holidays, baseline rules and bill protection.
                </li>
              </ul>
              <p>
                Some sheets change for reasons other than price. E-1&apos;s first sheet was revised on June 1, 2026 to show the
                California Climate Credit of $36.18 in the August and September bill cycles, while its per-kWh prices stayed at
                the March 1 levels.
              </p>

              <h2>How and when PG&amp;E rates change</h2>
              <p>
                PG&amp;E cannot set its own prices. The CPUC reviews PG&amp;E&apos;s core operating and investment costs in a
                general rate case every four years, and other costs, such as buying power, transmission and public purpose
                programs, go through separate rate cases. When a change is approved, PG&amp;E files an advice letter that turns it
                into prices and publishes a new rate table. That is
                why prices can move several times in one year.
              </p>
              <p>
                <strong>Recent cuts.</strong> PG&amp;E says it lowered electric prices five times in two years, most recently on
                March 1, 2026, and that residential prices were then 13% lower than in January 2024. The CPUC Public Advocates
                Office puts PG&amp;E&apos;s residential average at 33.7 cents per kWh in June 2026, down from 38.6 cents a year
                earlier.
              </p>
              <p>
                <strong>Why the long-term trend is still up.</strong> Over ten years, the Public Advocates Office reports
                PG&amp;E&apos;s residential rate up 69%, and names wildfire mitigation and liability costs, transmission and
                distribution spending, and rooftop solar incentives as the main statewide drivers. Looking ahead, PG&amp;E says
                its 2027-2030 general rate case would keep combined bills about flat in 2027, while the Public Advocates Office
                calculates that PG&amp;E&apos;s rate case and other expected requests together could raise the average bill by 16%
                in 2027 and 30% by 2030 if approved. The CPUC decides. Our{' '}
                <Link href="/blog/did-pge-rates-go-up" className={guideLink}>
                  history of every PG&amp;E rate change since 2023
                </Link>{' '}
                tracks each step.
              </p>

              <h2>Which schedule is cheapest for you</h2>
              <p>
                There is no single cheapest schedule; it depends on when you use power. PG&amp;E&apos;s rate plan comparison, inside
                your online account, prices the plans you qualify for against your own usage history. Two rules of thumb from
                the prices above: E-TOU-D rewards households that can avoid 5 to 8 p.m. on weekdays but use power on weekend
                evenings, and EV2-A or E-ELEC make sense only with a large, shiftable load such as an EV or heat pump. Our{' '}
                <Link href="/blog/how-to-lower-pge-bill" className={guideLink}>
                  steps to lower a PG&amp;E bill
                </Link>{' '}
                put the discounts first, and the{' '}
                <Link href="/blog/pge-ev-rates" className={guideLink}>
                  PG&amp;E EV rate guide
                </Link>{' '}
                compares the charging plans.
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

            <SolarInquiry utility="pge" topic="PG&E rate schedules and solar comparison" heading="Compare a Solar Plan With Your PG&E Schedule" />
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
