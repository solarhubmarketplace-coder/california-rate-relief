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

const path = '/blog/sdge-time-of-use-rates-2026';
const url = `https://ratereliefca.com${path}`;
const title = 'SDG&E Peak Hours and TOU-DR1 Rates 2026: Every Plan';
const h1 = 'SDG&E Time-of-Use Rates in 2026: Peak Hours, Weekends and Prices for TOU-DR1, EV-TOU-5 and Every Plan';
const description =
  'SDG&E peak is 4–9 p.m. every day, weekends included. See super off-peak hours and August 2026 prices for TOU-DR1, TOU-DR2, EV-TOU-5, TOU-ELEC and DR.';
const published = '2026-04-15';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'sdgeTouDr1Aug2026',
  'sdgeTouDr2Aug2026',
  'sdgeEvTou5Aug2026',
  'sdgeTouElecAug2026',
  'sdgeTouDrPAug2026',
  'sdgeEvTouAug2026',
  'sdgeDrAug2026',
  'sdgePricingPlans',
  'sdgeWhenMatters',
  'sdgeHowRatesSet',
  'sdgeTotalRates',
  'paoQ2_2026',
  'cpucNbt',
);

const faqs = [
  {
    question: 'What are SDG&E peak hours?',
    answer:
      'On-peak is 4 p.m. to 9 p.m. every day, including weekends and holidays, on TOU-DR1, TOU-DR2, EV-TOU-5, TOU-ELEC and SDG&E’s other time-of-use plans. Only the standard DR plan has no peak hours, because it charges one price at every hour.',
  },
  {
    question: 'Is SDG&E 4 to 9 on weekends?',
    answer:
      'Yes. SDG&E keeps 4 to 9 p.m. as on-peak on Saturdays, Sundays and holidays. What changes on weekends is the cheap part of the day: super off-peak runs in one block from midnight to 2 p.m., instead of the weekday split of midnight to 6 a.m. and 10 a.m. to 2 p.m.',
  },
  {
    question: 'What are SDG&E super off-peak hours?',
    answer:
      'On weekdays, midnight to 6 a.m. and 10 a.m. to 2 p.m. On weekends and SDG&E’s eight holidays, midnight to 2 p.m. Super off-peak exists on TOU-DR1, EV-TOU-5, TOU-ELEC, TOU-DR-P and EV-TOU; TOU-DR2 has only on-peak and off-peak.',
  },
  {
    question: 'What are SDG&E summer rates for 2026?',
    answer:
      "SDG&E's summer runs June 1 to October 31. On TOU-DR1 from August 1, 2026, summer prices are 69.135 cents per kWh on-peak, 46.421 cents off-peak and 37.433 cents super off-peak, before a 10.702-cent credit on usage up to 130% of baseline. Winter prices are 61.471, 53.060 and 43.719 cents.",
  },
  {
    question: 'How much does SDG&E charge per kWh?',
    answer:
      "It depends on the plan and hour, from about 12 cents (EV-TOU-5 winter super off-peak) to about 86 cents (separately metered EV-TOU summer on-peak). As one average, the CPUC Public Advocates Office puts SDG&E's residential rate at 45.5 cents per kWh in June 2026, the highest of California's three big investor-owned utilities.",
  },
  {
    question: 'How do I change my SDG&E rate plan?',
    answer:
      'Log in to My Energy Center, open Billing, choose Pricing Plans and enroll in an eligible plan. SDG&E says most plans require a 12-month commitment and can be changed once every 12 months.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function SdgeTimeOfUseRates2026() {
  return (
    <PublicLayout breadcrumbLabel="SDG&E time-of-use rates" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="SDG&E time-of-use rates" kicker="SDG&E · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                SDG&amp;E&apos;s peak hours are 4 to 9 p.m. every day, weekends and holidays included, on every time-of-use plan.
                The cheapest hours are super off-peak: midnight to 6 a.m. and 10 a.m. to 2 p.m. on weekdays, and midnight to 2
                p.m. on weekends. On the standard TOU-DR1 plan from August 1, 2026, a summer on-peak kWh costs 69.135 cents.
              </p>
              <p>
                SDG&amp;E says TOU-DR1 is its standard residential schedule and that a typical household is most likely on it.
                Every price here is from SDG&amp;E&apos;s total rate tables effective August 1, 2026, the latest posted when we
                checked on September 23, 2026. They are bundled prices for customers who buy power from SDG&amp;E; customers who buy
                generation from a community choice provider pay SDG&amp;E&apos;s delivery price plus their provider&apos;s generation
                price instead. For how SDG&amp;E&apos;s hours compare with PG&amp;E, SCE, SMUD and LADWP, see{' '}
                <Link href="/blog/electricity-peak-hours-california" className={guideLink}>
                  electricity peak hours across California
                </Link>
                .
              </p>

              <QuickAnswer label="Which SDG&E plan tends to fit">
                <p>
                  <strong>TOU-DR1</strong> suits households that can run dishwashers, laundry and pool pumps midday or
                  overnight. <strong>TOU-DR2</strong> suits people who want one simple rule: avoid 4 to 9 p.m.{' '}
                  <strong>EV-TOU-5</strong> suits EV owners who charge overnight, and it is the required rate for the Solar
                  Billing Plan. <strong>TOU-ELEC</strong> suits homes with an EV, battery or heat pump. <strong>DR</strong>{' '}
                  suits homes that cannot shift use at all, at a price.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="SDG&E time-of-use, from August 1, 2026"
                  facts={[
                    { label: 'Peak hours (all TOU plans)', value: '4–9 p.m. daily', note: 'Weekends and holidays included', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeWhenMatters.url } },
                    { label: 'TOU-DR1 summer on-peak', value: '69.135¢/kWh', note: 'Before the baseline credit', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                    { label: 'Summer season', value: 'June 1–Oct. 31', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeHowRatesSet.url } },
                    { label: 'Base Services Charge', value: '$0.79343/day', note: '$0.39688 FERA and qualifying affordable housing', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SDG&E time-of-use rates and solar comparison" utility="sdge" />
              </div>

              <h2>SDG&amp;E peak hours chart: weekdays and weekends</h2>
              <DataTable
                caption="SDG&E time-of-use periods (TOU-DR1, EV-TOU-5, TOU-ELEC, TOU-DR-P)"
                columns={['Period', 'Weekdays', 'Weekends and holidays']}
                rows={[
                  ['On-peak', '4–9 p.m.', '4–9 p.m.'],
                  ['Off-peak', '6–10 a.m., 2–4 p.m., 9 p.m.–midnight', '2–4 p.m., 9 p.m.–midnight'],
                  ['Super off-peak', 'Midnight–6 a.m., 10 a.m.–2 p.m.', 'Midnight–2 p.m.'],
                ]}
                note={<>Source: SDG&amp;E When Matters and residential pricing plans pages, checked September 23, 2026. TOU-DR2 has two periods every day: on-peak 4–9 p.m. and off-peak at all other hours. SDG&amp;E&apos;s holidays: New Year&apos;s Day, Presidents Day, Memorial Day, Independence Day, Labor Day, Veterans Day, Thanksgiving and Christmas.</>}
              />

              <h2>Is SDG&amp;E&apos;s 4-to-9 peak on weekends too?</h2>
              <p>
                Yes, and this is the most common surprise. Unlike PG&amp;E&apos;s E-TOU-D, SMUD or LADWP, which drop the peak on
                weekends, SDG&amp;E charges its on-peak price from 4 to 9 p.m. on Saturdays, Sundays and holidays. The weekend
                difference is at the other end of the day: super off-peak runs straight from midnight to 2 p.m., so a Saturday
                morning load of laundry at 8 a.m. is cheaper than the same load on a Tuesday, when 6 to 10 a.m. is regular
                off-peak. Weekend dinner, air conditioning and EV charging between 4 and 9 still pay the top price.
              </p>

              <h2>TOU-DR1 prices: SDG&amp;E&apos;s standard plan</h2>
              <DataTable
                caption="SDG&E Schedule TOU-DR1, effective August 1, 2026 (cents per kWh, bundled)"
                columns={['Period', 'Summer (Jun 1–Oct 31)', 'Winter (Nov 1–May 31)']}
                rows={[
                  ['On-peak', '69.135¢', '61.471¢'],
                  ['Off-peak', '46.421¢', '53.060¢'],
                  ['Super off-peak', '37.433¢', '43.719¢'],
                  ['Credit on usage up to 130% of baseline', '−10.702¢', '−10.702¢'],
                ]}
                note={<>Source: SDG&amp;E Schedule TOU-DR1 total rates table, effective August 1, 2026, checked September 23, 2026. Plus the daily Base Services Charge. FERA customers get an 18% line-item discount on the bill, excluding the Base Services Charge.</>}
              />
              <p>
                The baseline adjustment credit is why SDG&amp;E&apos;s own plan chooser shows lower numbers: for usage within 130% of
                your baseline allowance, a summer super off-peak kWh nets to about 26.7 cents and an on-peak kWh to about 58.4
                cents. Usage above that pays the full price. Notice also that winter off-peak and super off-peak prices are higher
                than summer&apos;s on TOU-DR1; only the on-peak price is higher in summer.
              </p>

              <h2>Every SDG&amp;E residential plan, side by side</h2>
              <DataTable
                caption="SDG&E residential plans, effective August 1, 2026 (cents per kWh, bundled; summer / winter)"
                columns={['Plan', 'On-peak', 'Off-peak', 'Super off-peak']}
                rows={[
                  ['TOU-DR1 (standard)', '69.135 / 61.471', '46.421 / 53.060', '37.433 / 43.719'],
                  ['TOU-DR2 (two periods)', '69.597 / 61.471', '41.666 / 47.372', 'None'],
                  ['EV-TOU-5 (EV owners, Solar Billing Plan)', '80.205 / 52.383', '49.627 / 46.566', '13.090 / 12.332'],
                  ['TOU-ELEC (EV, battery or heat pump)', '72.589 / 50.584', '38.885 / 37.679', '34.450 / 33.646'],
                  ['TOU-DR-P (event days)', '53.692 / 59.073', '49.226 / 51.376', '41.710 / 42.828'],
                  ['EV-TOU (separate EV meter)', '86.277 / 58.455', '55.699 / 52.638', '30.863 / 30.105'],
                ]}
                note={<>Source: SDG&amp;E total rate tables for each schedule, effective August 1, 2026, checked September 23, 2026. TOU-DR1, TOU-DR2 and TOU-DR-P also take the 10.702¢ credit on usage up to 130% of baseline. All plans except EV-TOU add the Base Services Charge; EV-TOU has a minimum bill of $0.413 a day instead.</>}
              />
              <p>
                <strong>DR, the flat plan.</strong> DR has no time periods. It charges 41.299 cents per kWh up to 130% of
                baseline and 52.000 cents above it, all year, plus the Base Services Charge. It removes the 4-to-9 risk, but at the same
                baseline tier it costs more than TOU-DR1&apos;s off-peak and super off-peak prices, which cover 19 hours of a
                weekday.
              </p>
              <p>
                <strong>TOU-DR-P.</strong> This plan trades a lower on-peak price for Reduce Your Use event days. SDG&amp;E can call
                up to 18 a year, and on those days usage from 4 to 9 p.m. costs an extra $1.16 per kWh. It fits a household that
                can reliably cut back when an event is called.
              </p>
              <p>
                <strong>EV-TOU-5.</strong> This plan has one of the lowest super off-peak prices SDG&amp;E offers a whole home, about
                13 cents, and one of its highest on-peak prices, about 80 cents in summer. It is built for overnight EV charging, and
                the CPUC names it as the required rate for SDG&amp;E customers on the net billing tariff. What that means for a solar
                home is covered in{' '}
                <Link href="/blog/sdge-and-solar" className={guideLink}>
                  SDG&amp;E and solar: the Solar Billing Plan and EV-TOU-5
                </Link>
                , and the billing rules themselves, from NEM 2.0 to the true-up, are in{' '}
                <Link href="/blog/sdge-net-metering" className={guideLink}>
                  SDG&amp;E net metering and the EV-TOU-5 Solar Billing Plan rate
                </Link>
                .
              </p>

              <h2>How much does SDG&amp;E charge per kWh?</h2>
              <p>
                By plan and hour, from 12.332 cents on EV-TOU-5 winter super off-peak to 86.277 cents on the separately metered
                EV-TOU summer on-peak. As a single figure, the CPUC Public Advocates Office puts SDG&amp;E&apos;s residential average
                at 45.5 cents per kWh in June 2026, excluding the Climate Credit, against 34.4 cents at SCE and 33.7 cents at
                PG&amp;E. The August 1, 2026 tables above came after that report. How SDG&amp;E&apos;s prices moved through 2026 is
                in{' '}
                <Link href="/blog/sdge-rate-increase-2026" className={guideLink}>
                  SDG&amp;E&apos;s rate increase history
                </Link>
                .
              </p>

              <h2>The Base Services Charge</h2>
              <p>
                Every plan except the separately metered EV-TOU adds a daily Base Services Charge: $0.79343 a day, about $24 a
                month, for most customers, and $0.39688 for FERA customers and households in qualifying deed-restricted affordable
                housing. SDG&amp;E notes that its plan-page prices leave this charge out, so add it when you compare plans or
                estimate a bill.
              </p>

              <h2>How to switch SDG&amp;E plans</h2>
              <ol>
                <li>Find your current schedule name on your bill, such as TOU-DR1, and whether a community choice provider supplies your generation.</li>
                <li>Review hourly usage in My Energy Center and note how much falls between 4 and 9 p.m., including weekends.</li>
                <li>Compare plans with SDG&amp;E&apos;s plan comparison, adding any EV, battery or heat pump you expect.</li>
                <li>Enroll in My Energy Center under Billing, then Pricing Plans. Most plans require a 12-month commitment.</li>
              </ol>

              <h2>If the bill is the problem, not the plan</h2>
              <p>
                Plan choice moves a bill by a margin; usage in the 4-to-9 window and summer air conditioning move it more. Start
                with our{' '}
                <Link href="/blog/why-is-my-sdge-bill-so-high" className={guideLink}>
                  SDG&amp;E high-bill checklist
                </Link>{' '}
                and{' '}
                <Link href="/blog/how-to-read-sdge-bill" className={guideLink}>
                  how to read an SDG&amp;E bill
                </Link>
                . For the other large utilities, see{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use rates
                </Link>{' '}
                and{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  SCE time-of-use rates
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

            <SolarInquiry topic="SDG&E time-of-use rates and solar comparison" utility="sdge" heading="Compare a Solar Plan With Your SDG&E Bill" />
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
