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

const path = '/blog/electricity-peak-hours-california';
const url = `https://ratereliefca.com${path}`;
const title = 'Electricity Peak Hours in California by Utility (2026)';
const h1 = 'Electricity Peak Hours in California: 4 to 9 p.m. at Most Utilities, and the Cheapest Time to Use Power';
const description =
  'Peak hours are 4–9 p.m. on the main PG&E, SCE and SDG&E plans. SMUD peaks 5–8 p.m. weekdays; LADWP 1–5 p.m. See off-peak hours and the cheapest times.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'pgeResRatesCurrent',
  'pgeTouPlans',
  'pgeEtoucTariff',
  'pgeEv2Tariff',
  'sceTou',
  'sceBsc',
  'sdgeWhenMatters',
  'sdgePricingPlans',
  'sdgeTouDr1Aug2026',
  'sdgeHowRatesSet',
  'smudTodDetails',
  'ladwpRateGuide',
  'ladwpResRates',
);

const faqs = [
  {
    question: 'What are the peak hours for electricity in California?',
    answer:
      "On the main time-of-use plans at PG&E (E-TOU-C), SCE (TOU-D-4-9PM) and SDG&E (TOU-DR1), 4 to 9 p.m. Some plans use shorter windows: PG&E's E-TOU-D and SCE's TOU-D-5-8PM peak from 5 to 8 p.m. SMUD's standard plan peaks 5 to 8 p.m. on weekdays, and LADWP's time-of-use plan has its High Peak from 1 to 5 p.m. on weekdays.",
  },
  {
    question: 'What is the cheapest time to use electricity in California?',
    answer:
      "It depends on your utility and plan. SDG&E's super off-peak, midnight to 6 a.m. and 10 a.m. to 2 p.m. on weekdays and midnight to 2 p.m. on weekends, is its cheapest. PG&E's EV2-A and E-ELEC are cheapest from midnight to 3 p.m. SCE's winter super off-peak runs 8 a.m. to 4 p.m. SMUD and LADWP are cheapest overnight and on weekends.",
  },
  {
    question: 'What are off-peak electricity hours in California?',
    answer:
      "On a 4-to-9 p.m. plan, every hour outside 4 to 9 p.m. is off-peak or cheaper. Weekend rules differ: PG&E's E-TOU-C and SDG&E's TOU-DR1 keep 4 to 9 p.m. as peak on weekends, SCE prices it lower as mid-peak on summer weekends, and PG&E's E-TOU-D, SMUD and LADWP are off-peak or base all weekend.",
  },
  {
    question: 'Are weekends off-peak in California?',
    answer:
      'Only on some plans. SMUD, LADWP and PG&E E-TOU-D treat weekends as off-peak all day. PG&E E-TOU-C, EV2-A and E-ELEC and SDG&E TOU-DR1 charge peak prices from 4 to 9 p.m. every day. SCE charges a lower mid-peak price from 4 to 9 p.m. on summer weekends.',
  },
  {
    question: 'Why are peak hours 4 to 9 p.m.?',
    answer:
      'Because that is when demand stays high while solar output falls. SCE says conservation matters most when solar production starts declining, generally around 4 p.m. Pricing the evening higher pushes flexible use such as laundry, EV charging and pre-cooling into the middle of the day or overnight.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function ElectricityPeakHoursCaliforniaPage() {
  return (
    <PublicLayout breadcrumbLabel="California electricity peak hours" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="California electricity peak hours" kicker="Statewide · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                In most of California, electricity peak hours are 4 to 9 p.m. That is the peak window on the main time-of-use
                plans at PG&amp;E, SCE and SDG&amp;E, and on PG&amp;E and SDG&amp;E it applies every day, weekends included. The
                two big city-owned utilities differ: SMUD peaks 5 to 8 p.m. on weekdays, and LADWP&apos;s time-of-use plan peaks
                1 to 5 p.m. on weekdays.
              </p>
              <p>
                Peak hours are set plan by plan, not statewide, so the real answer is on your bill: find the rate plan name, then
                match it to the table below. Every hour window here comes from the utility&apos;s own tariff or rate page, checked
                September 23, 2026. If a community choice provider supplies your electricity, the utility still delivers it and
                your plan name still appears on the bill; check the provider&apos;s rate page for its generation prices.
              </p>

              <QuickAnswer label="Short answer by utility">
                <p>
                  <strong>PG&amp;E:</strong> 4–9 p.m. daily (E-TOU-C, EV2-A, E-ELEC); 5–8 p.m. weekdays on E-TOU-D.{' '}
                  <strong>SCE:</strong> 4–9 p.m. daily (TOU-D-4-9PM, TOU-D-PRIME); 5–8 p.m. on TOU-D-5-8PM.{' '}
                  <strong>SDG&amp;E:</strong> 4–9 p.m. daily on every time-of-use plan. <strong>SMUD:</strong> 5–8 p.m. weekdays.{' '}
                  <strong>LADWP (R-1B):</strong> High Peak 1–5 p.m. weekdays.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="Summer peak price on each utility's standard time-of-use plan"
                  facts={[
                    { label: 'SDG&E TOU-DR1', value: '69.135¢/kWh', note: '4–9 p.m.; from Aug 1, 2026', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                    { label: 'SCE TOU-D-4-9PM', value: '58¢/kWh', note: '4–9 p.m. weekdays, as SCE lists it', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceTou.url } },
                    { label: 'PG&E E-TOU-C', value: '52.240¢/kWh', note: '4–9 p.m.; from Mar 1, 2026', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'SMUD Time-of-Day', value: '37.65¢/kWh', note: '5–8 p.m. weekdays, 2026', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudTodDetails.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California peak hours and solar comparison" />
              </div>

              <h2>Peak hours by utility and plan</h2>
              <DataTable
                caption="California residential peak hours by utility (2026)"
                columns={['Utility and plan', 'Peak', 'Days', 'Summer season']}
                rows={[
                  ['PG&E E-TOU-C', '4–9 p.m.', 'Every day', 'Jun 1–Sep 30'],
                  ['PG&E E-TOU-D', '5–8 p.m.', 'Weekdays except holidays', 'Jun 1–Sep 30'],
                  ['PG&E EV2-A and E-ELEC', '4–9 p.m. (part-peak 3–4 p.m. and 9 p.m.–midnight)', 'Every day', 'Jun 1–Sep 30'],
                  ['SCE TOU-D-4-9PM and TOU-D-PRIME', '4–9 p.m.', 'On-peak weekdays in summer; mid-peak weekends and all winter', 'June–September'],
                  ['SCE TOU-D-5-8PM', '5–8 p.m.', 'Same pattern as above', 'June–September'],
                  ['SDG&E TOU-DR1, TOU-DR2, EV-TOU-5, TOU-ELEC', '4–9 p.m.', 'Every day', 'Jun 1–Oct 31'],
                  ['SMUD Time-of-Day (5-8 p.m.)', '5–8 p.m. (summer mid-peak noon–5 p.m. and 8 p.m.–midnight)', 'Weekdays except holidays', 'Jun 1–Sep 30'],
                  ['LADWP R-1B', 'High Peak 1–5 p.m.; Low Peak 10 a.m.–1 p.m. and 5–8 p.m.', 'Weekdays', 'June–September'],
                ]}
                note={<>Sources: PG&amp;E residential rate table and E-TOU-C and EV2 tariffs; SCE Time-of-Use Residential Rate Plans; SDG&amp;E When Matters, pricing plans and How Rates Are Set pages; SMUD Time-of-Day rate details; LADWP Residential Electric Rates. All checked September 23, 2026.</>}
              />
              <p>
                Two patterns stand out. First, the investor-owned utilities all converged on an evening window that starts at 4
                or 5 p.m. Second, weekends are where plans split: some keep the evening peak seven days a week, some drop it on
                weekends, and SCE keeps the hours but charges less for them on summer weekends.
              </p>

              <h2>Off-peak and super off-peak hours</h2>
              <p>
                Off-peak is simply every hour that is not peak or part-peak, but several plans add a cheaper tier. SDG&amp;E calls
                it super off-peak: midnight to 6 a.m. and 10 a.m. to 2 p.m. on weekdays, and midnight to 2 p.m. on weekends and
                holidays. SCE adds super off-peak only in winter, 8 a.m. to 4 p.m. on TOU-D-4-9PM and TOU-D-PRIME. PG&amp;E&apos;s
                EV2-A and E-ELEC treat midnight to 3 p.m. as off-peak, with a part-peak shoulder on either side of 4 to 9 p.m.
                LADWP calls its cheapest period Base: 8 p.m. to 10 a.m. on weekdays and all day on weekends.
              </p>
              <DataTable
                caption="Cheapest hours on each utility's main plans"
                columns={['Utility and plan', 'Cheapest period', 'Price']}
                rows={[
                  ['SDG&E TOU-DR1', 'Super off-peak: weekdays midnight–6 a.m. and 10 a.m.–2 p.m.; weekends midnight–2 p.m.', '37.433¢ summer, 43.719¢ winter (Aug 1, 2026)'],
                  ['SCE TOU-D-PRIME', 'Winter super off-peak 8 a.m.–4 p.m. and off-peak; summer off-peak', '24¢ winter, 26¢ summer'],
                  ['PG&E EV2-A', 'Off-peak midnight–3 p.m., every day', '22.558¢ (Mar 1, 2026)'],
                  ['PG&E E-TOU-C', 'Every hour outside 4–9 p.m.', '39.940¢ summer, 36.757¢ winter, before baseline credit'],
                  ['SMUD Time-of-Day', 'Off-peak: all hours outside weekday 5–8 p.m. (and, in summer, outside weekday noon–midnight)', '15.50¢ summer, 12.85¢ non-summer'],
                  ['LADWP R-1B', 'Base: weekdays 8 p.m.–10 a.m.; weekends all day', '26.540¢ Jul–Sep 2026'],
                ]}
                note={<>Sources as above. SDG&amp;E TOU-DR1 and PG&amp;E E-TOU-C also offer baseline credits of 10.702¢ and 8.140¢ on usage within the allowance; SCE&apos;s TOU-D-PRIME has none.</>}
              />

              <h2>What is the best time to use electricity?</h2>
              <p>
                For most California households on a 4-to-9 p.m. plan, run flexible loads before 4 p.m. or after 9 p.m. The
                biggest savings come from loads you can schedule: EV charging, dishwashers, laundry, pool pumps and water heaters
                with timers. If you have a pool, see{' '}
                <Link href="/blog/does-pool-pump-use-a-lot-of-electricity" className={guideLink}>
                  when to run a pool pump
                </Link>{' '}
                and what it costs. Air conditioning is harder to move, but pre-cooling the house in early afternoon and letting it drift
                up during the peak shifts part of the load. On SDG&amp;E, the midday super off-peak window is cheap enough that
                running the dishwasher at noon beats running it at 10 p.m.
              </p>
              <p>
                The gap is large. On SDG&amp;E&apos;s TOU-DR1 in summer, a kWh at 6 p.m. costs 69.135 cents and a kWh at 1 p.m.
                costs 37.433 cents. On PG&amp;E&apos;s EV2-A, 53.809 cents against 22.558 cents. Our own arithmetic: moving 10 kWh a
                day of EV charging out of the SDG&amp;E peak into super off-peak saves about $3.17 a day, or roughly $95 over a
                30-day summer month.
              </p>

              <h2>Holidays count as off-peak on some plans</h2>
              <p>
                PG&amp;E&apos;s E-TOU-D and EV-B, SDG&amp;E&apos;s time-of-use plans and SMUD all have holiday rules. PG&amp;E and
                SDG&amp;E use the same eight: New Year&apos;s Day, Presidents Day, Memorial Day, Independence Day, Labor Day,
                Veterans Day, Thanksgiving and Christmas. SDG&amp;E prices those days like weekends, so super off-peak runs from
                midnight to 2 p.m., but 4 to 9 p.m. is still on-peak. SMUD adds Martin Luther King Jr. Day, Juneteenth and
                Indigenous Peoples&apos; Day for 11 in all, and prices every listed holiday as off-peak all day. PG&amp;E&apos;s
                E-TOU-C, EV2-A and E-ELEC peaks apply on holidays too.
              </p>

              <h2>Why the evening is the expensive part of the day</h2>
              <p>
                California&apos;s grid now carries a large share of solar, which floods it with power at midday and fades in the
                late afternoon while homes turn on lights, cooking and air conditioning. SCE puts it plainly: conservation
                matters most when solar production starts declining, generally around 4 p.m. Time-of-use pricing puts that cost
                on the evening hours, which is also why a home battery that stores midday solar for the evening is worth more
                under these plans than panels alone.
              </p>

              <h2>Peak hours and prices by utility, in depth</h2>
              <ul>
                <li>
                  <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                    PG&amp;E peak hours and time-of-use rates
                  </Link>{' '}
                  — E-TOU-C, E-TOU-D, EV2-A and E-ELEC prices.
                </li>
                <li>
                  <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                    SCE time-of-use rates and peak hours
                  </Link>{' '}
                  — the three TOU-D plans and the EV plan.
                </li>
                <li>
                  <Link href="/blog/sdge-time-of-use-rates-2026" className={guideLink}>
                    SDG&amp;E peak hours and TOU-DR1 rates
                  </Link>{' '}
                  — including weekend and super off-peak rules.
                </li>
                <li>
                  <Link href="/blog/smud-peak-hours" className={guideLink}>
                    SMUD peak hours and summer rates
                  </Link>{' '}
                  — when summer pricing starts and ends.
                </li>
                <li>
                  <Link href="/blog/ladwp-rates" className={guideLink}>
                    LADWP rates and R-1B time-of-use hours
                  </Link>{' '}
                  — tiers, seasons and the TOU option.
                </li>
              </ul>
              <p>
                For the average price per kWh at each utility rather than hour by hour, see the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                . If a high bill is what brought you here, start with{' '}
                <Link href="/blog/why-is-my-california-electric-bill-so-high" className={guideLink}>
                  why California electric bills run high
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

            <SolarInquiry topic="California peak hours and solar comparison" heading="Compare a Solar Plan With Your Peak-Hour Bill" />
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
