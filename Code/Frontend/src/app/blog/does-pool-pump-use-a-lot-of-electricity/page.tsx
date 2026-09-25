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

// Tier 3 (2026-09-23). How much a pool pump adds to a California electric
// bill, using ENERGY STAR and the federal pump standard for the equipment and
// each utility's 2026 prices for the cost. Pump wattage varies by model, so
// costs are shown per kilowatt of pump power rather than for an assumed pump.

const path = '/blog/does-pool-pump-use-a-lot-of-electricity';
const url = `https://ratereliefca.com${path}`;
const title = 'Does a Pool Pump Use a Lot of Electricity? (California)';
const h1 = 'Does a Pool Pump Use a Lot of Electricity? What It Adds to a California Bill';
const description =
  'A pool pump can be a home’s second-largest electric load. What each kilowatt costs a month on PG&E, SCE, SDG&E, SMUD and LADWP rates, and how to cut it.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'estarPoolPumps',
  'estarPoolFactSheet',
  'ecfrPoolPumps',
  'pgeResRatesCurrent',
  'sceTou',
  'sdgeTouDr1Aug2026',
  'sdgePricingPlans',
  'smudResRates',
  'ladwpResRates',
  'ladwpRateGuide',
  'eiaEpm56a',
);

const faqs = [
  {
    question: 'Does a pool pump use a lot of electricity?',
    answer:
      'Yes. ENERGY STAR says a pool pump could be a home’s second-largest energy user. How much it uses is its power draw times the hours it runs, so a single-speed pump running many hours a day is the expensive case. A variable-speed pump at half speed uses about one-eighth the power.',
  },
  {
    question: 'How much does it cost to run a pool pump in California?',
    answer:
      'For every kilowatt the pump draws, running it 8 hours a day uses 240 kWh a month. At 2026 prices that costs about $96 on PG&E’s E-TOU-C off-peak price, $82 on SCE’s summer off-peak, $90 in SDG&E’s super off-peak hours, $37 on SMUD’s summer off-peak and $64 in LADWP’s Base period. Multiply by your pump’s kilowatts.',
  },
  {
    question: 'What time should I run my pool pump in California?',
    answer:
      'Outside your plan’s peak: not between 4 and 9 p.m. on PG&E’s E-TOU-C, SCE’s TOU-D-4-9PM or SDG&E’s TOU-DR1, and not 5 to 8 p.m. on weekdays at SMUD. SDG&E’s cheapest hours are midnight to 6 a.m. and 10 a.m. to 2 p.m. on weekdays. LADWP suggests running pool equipment from 8 p.m. to 10 a.m. on weekdays and anytime on weekends on its time-of-use plan.',
  },
  {
    question: 'How many hours a day should a pool pump run?',
    answer:
      'Only as long as it takes to filter the water. ENERGY STAR notes that running the filter 6 hours a day instead of 24 cuts its energy use by 75%, and that several short cycles can keep a pool cleaner than one long one. ENERGY STAR’s installation guidance sets the pump’s lowest speed at one that still circulates the pool’s full volume in 12 hours.',
  },
  {
    question: 'Are variable-speed pool pumps required in California?',
    answer:
      'New pool filter pumps sold in the U.S. must meet a federal efficiency standard for dedicated-purpose pool pumps that took effect for pumps made from July 19, 2021, set in 10 CFR 431.465. The rule also sets freeze-protection defaults: no higher than 40°F, no more than one hour between checks, and no more than half of maximum speed.',
  },
  {
    question: 'Does a robotic pool cleaner save electricity?',
    answer:
      'Yes. ENERGY STAR cites a PG&E study in which a robotic cleaner used 197 kWh a year, against 1,675 kWh for a cleaner powered by the filter pump and 2,989 kWh for one run by a booster pump.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function PoolPumpElectricityPage() {
  return (
    <PublicLayout breadcrumbLabel="Pool pump electricity use" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Pool pump electricity use" kicker="California · Electric bills" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                Yes. ENERGY STAR says a pool pump could be your home&apos;s second-largest energy user. In California it costs
                more than most places, because the residential price here is almost twice the U.S. average. How much it adds
                depends on three things you can control: the pump&apos;s speed, how many hours it runs and which hours those are.
              </p>
              <p>
                Pumps differ too much to quote one wattage for all of them, so this page shows the cost per kilowatt of pump
                power on each large California utility&apos;s 2026 prices. Find the input watts on your pump&apos;s label or in its
                manual, or ask your pool service, and multiply. Every price is from the utility&apos;s own rate table, checked on
                September 23, 2026.
              </p>

              <QuickAnswer>
                <p>
                  <strong>The math:</strong> kilowatts × hours per day × days = kWh. A pump drawing 1 kW for 8 hours a day uses 240
                  kWh a month, about $96 at PG&amp;E&apos;s summer off-peak price and $166 at SDG&amp;E&apos;s summer on-peak price.
                  <strong> The fixes:</strong> run it outside 4 to 9 p.m., run it fewer hours, and use a variable-speed pump at low
                  speed for filtering.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="Pool pump energy at a glance"
                  facts={[
                    { label: 'Rank among home loads', value: 'Up to 2nd largest', source: { publisher: 'ENERGY STAR', date: RATE_SOURCES_CHECKED, url: SRC.estarPoolPumps.url } },
                    { label: 'Half speed uses', value: '1/8 the power', note: 'Why variable speed saves', source: { publisher: 'ENERGY STAR', date: RATE_SOURCES_CHECKED, url: SRC.estarPoolPumps.url } },
                    { label: 'Filter 6 hours instead of 24', value: '75% less energy', source: { publisher: 'ENERGY STAR', date: RATE_SOURCES_CHECKED, url: SRC.estarPoolPumps.url } },
                    { label: 'California vs U.S. price, June 2026', value: '34.74¢ vs 18.34¢', note: 'Residential average per kWh', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpm56a.url } },
                  ]}
                />
              </div>

              <div className="not-prose my-8">
                <HeroQuickCheck topic="Pool pump electricity and solar comparison" />
              </div>

              <h2>Why a pool pump uses so much</h2>
              <p>
                A pump runs for hours every day, often all year. The waste comes from speed. A conventional single-speed pump runs
                at the high flow needed for pool cleaning, but filtration, a pump&apos;s main job, needs only about half that flow.
                ENERGY STAR explains the physics: cutting pump speed in half cuts its power to about one-eighth. So a single-speed
                pump spends most of its hours using far more power than the task needs.
              </p>
              <p>
                ENERGY STAR-certified in-ground pumps use 18% less energy than standard ones by its 2022 fact sheet, and a
                variable-speed model saves more the lower its filtering speed is set, because of that one-eighth rule. Pool cleaners matter as well.
                ENERGY STAR cites a PG&amp;E study in which a cleaner powered by a booster pump used 2,989 kWh a year and one
                powered by the filter pump 1,675 kWh, against 197 kWh for a robotic cleaner. At PG&amp;E&apos;s 39.94-cent summer
                off-peak price, 2,989 kWh is about $1,194 a year and 197 kWh about $79.
              </p>

              <h2>What each kilowatt costs per month in California</h2>
              <p>
                The table prices 240 kWh, which is 1 kW of pump power running 8 hours a day for 30 days, at each utility&apos;s
                cheapest summer hour and its summer peak. Scale it to your pump: a 1.5 kW pump is 1.5 times these figures, and 12
                hours a day is 1.5 times again.
              </p>
              <DataTable
                caption="Cost of 240 kWh a month (1 kW for 8 hours a day), summer 2026 prices"
                columns={['Utility and plan', 'In the cheapest hours', 'In the peak window']}
                rows={[
                  ['PG&E E-TOU-C', '$95.86 (off-peak 39.940¢)', '$125.38 (4–9 p.m., 52.240¢)'],
                  ['SCE TOU-D-4-9PM', '$81.60 (off-peak 34¢)', '$139.20 (weekdays 4–9 p.m., 58¢)'],
                  ['SDG&E TOU-DR1', '$89.84 (super off-peak 37.433¢)', '$165.92 (4–9 p.m., 69.135¢)'],
                  ['SMUD Time-of-Day', '$37.20 (off-peak 15.50¢)', '$90.36 (weekdays 5–8 p.m., 37.65¢)'],
                  ['LADWP R-1B', '$63.70 (Base 26.540¢)', '$84.30 (High Peak 35.124¢)'],
                ]}
                note={
                  <>
                    Our arithmetic from PG&amp;E&apos;s residential rates table (March 1, 2026), SCE&apos;s Time-of-Use plans page,
                    SDG&amp;E&apos;s TOU-DR1 rates (August 1, 2026), SMUD&apos;s residential rates (2026) and LADWP&apos;s R-1B
                    rates (July–September 2026), all checked September 23, 2026. Before baseline credits, taxes and fixed charges.
                    Winter prices are lower at every utility.
                  </>
                }
              />
              <p>
                The gap between the two columns is the cost of running the pump at the wrong time. On SDG&amp;E it is $76.08 a
                month for each kilowatt, simply from the clock. On a tiered plan such as PG&amp;E&apos;s E-1 or LADWP&apos;s R-1A,
                the hour does not change the price, but a pump&apos;s kWh can push the rest of the home&apos;s use into the higher
                tier.
              </p>

              <h2>When to run a pool pump in California</h2>
              <p>
                Pick hours outside your plan&apos;s peak window. On PG&amp;E&apos;s E-TOU-C, SCE&apos;s TOU-D-4-9PM and
                SDG&amp;E&apos;s TOU-DR1, that means anything but 4 to 9 p.m. SDG&amp;E&apos;s cheapest super off-peak hours are
                midnight to 6 a.m. and 10 a.m. to 2 p.m. on weekdays, and midnight to 2 p.m. on weekends and holidays. SMUD&apos;s
                peak is 5 to 8 p.m. on weekdays; on summer weekdays its off-peak price runs from midnight to noon, and weekends
                are off-peak all day. LADWP names a
                filtered swimming pool as one of the loads to move to 8 p.m. to 10 a.m. on weekdays, or any time on weekends, if
                you are on its time-of-use plan. Our{' '}
                <Link href="/blog/electricity-peak-hours-california" className={guideLink}>
                  peak hours by utility
                </Link>{' '}
                guide has every window in one place.
              </p>
              <p>
                If you have rooftop solar, the midday hours when the panels produce most are usually the best time to filter,
                since the pump then uses your own power rather than power bought at evening prices.
              </p>

              <h2>Run it fewer hours, and slower</h2>
              <p>
                ENERGY STAR points out that running the filter 6 hours a day instead of 24 cuts its energy use by 75%, and that a
                timer running several short cycles can keep the pool clean all day. Its installation guidance sets a pump&apos;s
                minimum speed at one that still turns over the pool&apos;s full volume in 12 hours. Ask your pool service to set
                the lowest speed and fewest hours that keep the water clear, then check the bill after a month.
              </p>
              <p>
                Replacement pumps have to be efficient. A federal standard covers dedicated-purpose pool pumps manufactured from
                July 19, 2021, with minimum efficiency ratings for filter pumps in 10 CFR 431.465. The same rule makes a pump with
                freeze protection ship with conservative defaults: it switches on at no more than 40°F, runs no more than an hour
                before rechecking, and at no more than half its maximum speed. Check those settings if a winter bill looks high.
              </p>

              <h2>Where a pool fits in a high bill</h2>
              <p>
                If your bill jumped the month the pool opened, the pump is a likely cause. Divide the bill&apos;s kWh by the days
                in the period and compare with the same month last year, as our{' '}
                <Link href="/blog/why-is-my-california-electric-bill-so-high" className={guideLink}>
                  high-bill checklist
                </Link>{' '}
                explains. Heating the water is a separate and often larger cost; our{' '}
                <Link href="/blog/solar-pool-heating-california" className={guideLink}>
                  solar pool heating guide
                </Link>{' '}
                covers that. And if you are comparing plans, the{' '}
                <Link href="/blog/electricity-rates-by-zip-code" className={guideLink}>
                  rate lookup by address
                </Link>{' '}
                shows your utility&apos;s standard prices.
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

            <SolarInquiry topic="Pool pump electricity and solar comparison" heading="See What Solar Would Do for a Pool Home's Bill" />
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
