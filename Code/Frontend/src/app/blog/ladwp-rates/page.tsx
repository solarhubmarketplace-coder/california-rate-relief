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
import { RATE_SOURCES_CHECKED, rateSources } from '@/data/rate-sources';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/ladwp-rates';
const url = `https://ratereliefca.com${path}`;
const title = 'LADWP Rates 2026: Tier Prices, Peak Hours and Cost per kWh';
const h1 = 'LADWP Electric Rates in 2026: Tier Prices, Peak Hours and What You Pay per kWh';
const description =
  'LADWP electric rates for 2026: R-1A tier prices by season, R-1B peak hours, the Power Access Charge and how much rates rose from 2025.';
const published = '2026-09-23';
const updated = '2026-09-23';

const sources = rateSources('ladwpResRates', 'ladwpAdjFactors', 'ladwpRateGuide', 'ladwpBillingFaq', 'ladwpEvNem', 'ladwpEv', 'smudResRates', 'ladwpServiceRules', 'laLifelineUut');

const faqs = [
  {
    question: 'How much does LADWP charge per kWh?',
    answer:
      'It depends on the plan, the tier and the calendar quarter. On the standard R-1A plan, LADWP lists Tier 1 at 26.408 cents per kWh for July through September 2026 and 27.292 cents for October through December 2026, with Tier 2 at 32.267 and 33.151 cents. Those totals include the quarterly adjustment factors but exclude taxes and the monthly Power Access Charge.',
  },
  {
    question: 'Did LADWP rates go up in 2026?',
    answer:
      "Yes. Every 2026 price on LADWP's residential rate page is higher than the price for the same months of 2025. The increase is the same number of cents in every tier and time period: 2.475 cents per kWh for January to March, 1.597 cents for April to June, 2.102 cents for July to September and 2.688 cents for October to December. The base rates have not changed since July 1, 2019; the adjustment factors rose.",
  },
  {
    question: 'What are LADWP peak hours?',
    answer:
      'On the R-1B time-of-use plan, High Peak is 1:00 to 4:59 p.m. Monday through Friday. Low Peak is 10:00 a.m. to 12:59 p.m. and 5:00 to 7:59 p.m. on weekdays. Everything else, including all day Saturday and Sunday, is the lower-priced Base period. The standard R-1A plan has no peak hours; it prices by tier and season instead.',
  },
  {
    question: 'What are LADWP off-peak hours?',
    answer:
      "LADWP calls its lowest-priced time-of-use period the Base period: 8:00 p.m. to 9:59 a.m. on weekdays and all day on weekends. That is 118 of the week's 168 hours. LADWP names pool pumps, spas, central air conditioning and electric space heating as the loads worth moving into those hours.",
  },
  {
    question: 'What were LADWP’s R-1B time-of-use rates in 2025?',
    answer:
      'Including adjustment factors, LADWP listed R-1B at 33.022 cents High Peak, 27.182 cents Low Peak and 24.438 cents Base for July to September 2025, and 27.480, 27.480 and 25.126 cents for October to December 2025. January to March 2025 was 25.172 cents for both peak periods and 22.818 cents Base. The $12 monthly service charge applied throughout.',
  },
  {
    question: 'Does Zone 2 change LADWP’s time-of-use (R-1B) rates?',
    answer:
      'No. LADWP’s two climate zones set the size of the tiers on the standard R-1A plan, and the tier used for the Power Access Charge. R-1B has one price table for the whole city, set by the hour and season, so a Zone 2 home pays the same R-1B price per kWh as a Zone 1 home.',
  },
  {
    question: 'What is the utility users tax on an LADWP bill?',
    answer:
      'It is the City of Los Angeles electricity users tax, which LADWP’s service rules describe as a tax the City imposes on the electricity user as a percentage of the total electric bill. It is not part of the rates on this page. Seniors 62 and older and people with disabilities whose household income is under $66,650 can apply to the City’s Office of Finance for the Lifeline exemption.',
  },
  {
    question: 'What is the Power Access Charge on an LADWP bill?',
    answer:
      'It is the monthly fixed charge on the standard R-1A plan: $2.30, $7.90 or $22.70 a month depending on which usage tier your highest month of the past year reached. LADWP resets it every October 1 based on the previous 12 months, so a single high-use month can raise it for a year.',
  },
  {
    question: 'Is LADWP cheaper than Southern California Edison?',
    answer:
      "SMUD publishes a comparison of residential bills at 750 kWh a month, as of June 1, 2026: $217 for LADWP and $283 for Southern California Edison. That is one usage level on one date; your own bill depends on your plan, tier, zone and season.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function LadwpRatesPage() {
  return (
    <PublicLayout breadcrumbLabel="LADWP rates" breadcrumbParent={{ label: 'California utility rate tracker', href: '/california-utility-rate-tracker' }}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader
              parent={{ label: 'California utility rate tracker', href: '/california-utility-rate-tracker' }}
              current="LADWP rates"
              kicker="LADWP · Utility rates"
              title={h1}
              updated={updated}
              sourceCount={sources.length}
            />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                LADWP&apos;s 2026 residential prices run from about 24.4 to 41.0 cents per kWh, depending on the plan, the
                usage tier and the quarter. On the standard R-1A plan, Tier 1 is 26.408 cents from July to
                September 2026 and rises to 27.292 cents on October 1. Time-of-use peak hours are 1 to 5 p.m. on weekdays.
              </p>
              <p>
                Those prices come from LADWP&apos;s own residential rates page, checked September 23, 2026. They include
                LADWP&apos;s quarterly adjustment factors but not taxes or fixed monthly charges. LADWP is a city-owned
                utility, so it is not in the CPUC reports that set the averages on our{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  California utility rate tracker
                </Link>
                ; this page reads LADWP&apos;s tariff directly instead.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="LADWP rates at a glance"
                  facts={[
                    { label: 'R-1A Tier 1, Jul–Sep 2026', value: '26.408¢/kWh', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: sources[0].url } },
                    { label: 'R-1A Tier 1, Oct–Dec 2026', value: '27.292¢/kWh', note: 'Takes effect October 1, 2026', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: sources[0].url } },
                    { label: 'R-1B High Peak', value: '1–5 p.m. weekdays', note: 'Weekends are Base period all day', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: sources[2].url } },
                    { label: 'Power Access Charge (R-1A)', value: '$2.30–$22.70/mo', note: 'Set by your highest month of the past year', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: sources[0].url } },
                  ]}
                />
              </div>

              {/* Bill-first step; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="LADWP rates and solar comparison" utility="ladwp" />
              </div>

              <h2>How LADWP prices electricity: two residential plans</h2>
              <p>
                A single-family home or individually metered unit is on Schedule R-1, which has two options. R-1A, the
                standard rate, charges by usage tier and season. R-1B, the time-of-use rate, charges by the hour of the day
                and adds a flat monthly service charge instead of the tier-based access charge. To move to R-1B you apply through
                LADWP&apos;s time-of-use application. Master-metered apartment buildings are on a separate multifamily schedule,
                R-3.
              </p>
              <p>
                Every price is two parts added together: a base energy charge that has not changed since July 1, 2019, and a
                stack of pass-through adjustment factors that LADWP resets in January, April, July and October. The factors
                recover fuel and purchased power, renewable energy costs, grid reliability spending and low-income discounts.
                When LADWP rates move, it is almost always the factors that moved.
              </p>

              <h2>R-1A standard rate: tiers, zones and seasons</h2>
              <p>
                On R-1A, the first block of electricity each billing period is Tier 1, the next block is Tier 2, and anything
                above that is Tier 3. How big each block is depends on where you live. LADWP splits the city into a cooler Zone
                1 and a hotter Zone 2, and gives Zone 2 homes a larger Tier 1 because air conditioning and refrigerators work
                harder there. The zone map is linked from LADWP&apos;s rate explainer.
              </p>
              <DataTable
                caption="LADWP R-1A tier sizes by zone and billing cycle"
                columns={['Tier', 'Zone 1, monthly', 'Zone 1, two-month bill', 'Zone 2, monthly', 'Zone 2, two-month bill']}
                rows={[
                  ['Tier 1', 'First 350 kWh', 'First 700 kWh', 'First 500 kWh', 'First 1,000 kWh'],
                  ['Tier 2', 'Next 700 kWh', 'Next 1,400 kWh', 'Next 1,000 kWh', 'Next 2,000 kWh'],
                  ['Tier 3', 'Above 1,050 kWh', 'Above 2,100 kWh', 'Above 1,500 kWh', 'Above 3,000 kWh'],
                ]}
                note={<>Source: LADWP Residential Electric Rates, checked September 23, 2026. LADWP&apos;s billing questions page says residential customers are billed every two months, so the two-month column is the one that usually applies.</>}
              />
              <p>
                The high season runs June through September. From October through May, Tier 2 and Tier 3 carry the same
                price, so in winter there are effectively two prices: Tier 1 and everything above it. If a billing period straddles a season change or
                a quarterly price change, LADWP splits your usage by the number of days on each side.
              </p>
              <DataTable
                caption="LADWP R-1A price per kWh in 2026, including adjustment factors"
                columns={['Months (2026)', 'Tier 1', 'Tier 2', 'Tier 3']}
                rows={[
                  ['January–March', '24.771¢', '30.630¢', '30.630¢'],
                  ['April–May', '24.362¢', '30.221¢', '30.221¢'],
                  ['June', '24.362¢', '30.221¢', '38.922¢'],
                  ['July–September', '26.408¢', '32.267¢', '40.968¢'],
                  ['October–December', '27.292¢', '33.151¢', '33.151¢'],
                ]}
                note={<>Source: LADWP Residential Rates, R-1A Total Consumption Charge table, checked September 23, 2026. Excludes taxes, the Power Access Charge and the minimum charge.</>}
              />
              <p>
                R-1A also carries the Power Access Charge: $2.30 a month if your highest month of the last year stayed in Tier
                1, $7.90 if it reached Tier 2 and $22.70 if it reached Tier 3. LADWP recalculates it every October 1. The plan
                has a minimum charge of $10 a month plus adjustment factors.
              </p>

              <h2>R-1B time-of-use rate: LADWP peak and off-peak hours</h2>
              <p>
                R-1B prices electricity by when you use it. The hours are the same all year. What changes with the season is
                the gap between them: from October through May, High Peak and Low Peak cost the same, so the plan behaves like
                a simple day/night split. In June through September, High Peak costs noticeably more.
              </p>
              <DataTable
                caption="LADWP R-1B time-of-use periods"
                columns={['Period', 'Hours', 'Hours per week']}
                rows={[
                  ['High Peak', 'Monday–Friday, 1:00–4:59 p.m.', '20'],
                  ['Low Peak', 'Monday–Friday, 10:00 a.m.–12:59 p.m. and 5:00–7:59 p.m.', '30'],
                  ['Base', 'Monday–Friday, 8:00 p.m.–9:59 a.m.; all day Saturday and Sunday', '118'],
                ]}
                note={<>Source: LADWP Residential Electric Rates, checked September 23, 2026.</>}
              />
              <DataTable
                caption="LADWP R-1B price per kWh in 2026, including adjustment factors"
                columns={['Months (2026)', 'High Peak', 'Low Peak', 'Base']}
                rows={[
                  ['January–March', '27.647¢', '27.647¢', '25.293¢'],
                  ['April–May', '27.238¢', '27.238¢', '24.884¢'],
                  ['June', '33.078¢', '27.238¢', '24.494¢'],
                  ['July–September', '35.124¢', '29.284¢', '26.540¢'],
                  ['October–December', '30.168¢', '30.168¢', '27.814¢'],
                ]}
                note={<>Source: LADWP Residential Rates, R-1B Total Consumption Charge table, checked September 23, 2026. R-1B adds a $12.00 monthly service charge.</>}
              />
              <p>
                Those are 2026 prices. For the same periods of 2025, LADWP lists R-1B at 25.172 cents for both peak periods and
                22.818 cents Base in January to March, 33.022, 27.182 and 24.438 cents in July to September, and 27.480, 27.480 and
                25.126 cents in October to December. The climate zone makes no difference on R-1B: Zone 1 and Zone 2 matter only
                for the size of R-1A&apos;s tiers and for the Power Access Charge, so a Zone 2 home on time-of-use pays the same
                price per kWh as any other.
              </p>
              <p>
                LADWP&apos;s own guidance is that R-1B tends to suit two kinds of households: those whose two-month bills keep
                reaching Tier 3, and solar customers who keep banking credits. Notice how narrow the spread is. In the summer
                quarter, Base is only about 8.6 cents below High Peak, a smaller gap than the evening premium on the main PG&amp;E,
                SCE and SDG&amp;E time-of-use plans. Moving a load to the Base period helps, but the bigger lever on R-1B is simply using less.
              </p>

              <h2>Did LADWP rates go up? 2025 vs. 2026</h2>
              <p>
                Yes. LADWP posts both years side by side, and every 2026 figure is higher than the same months of 2025. Because
                the increase sits in the per-kWh adjustment factors, it is the same number of cents in every tier and period.
                LADWP is not regulated by the CPUC; its rates are set by City of Los Angeles ordinances, and the adjustment
                factors are reset each January, April, July and October.
              </p>
              <DataTable
                caption="How much each LADWP residential price rose, 2025 to 2026"
                columns={['Months', 'Added per kWh', 'R-1A Tier 1 (2025 → 2026)', 'Change']}
                rows={[
                  ['January–March', '+2.475¢', '22.296¢ → 24.771¢', '+11.1%'],
                  ['April–June', '+1.597¢', '22.765¢ → 24.362¢', '+7.0%'],
                  ['July–September', '+2.102¢', '24.306¢ → 26.408¢', '+8.6%'],
                  ['October–December', '+2.688¢', '24.604¢ → 27.292¢', '+10.9%'],
                ]}
                note={<>Our arithmetic from the LADWP Residential Rates tables for 2025 and 2026, checked September 23, 2026.</>}
              />
              <p>
                The adjustment-factor table shows where the money went. The Incremental Reliability Cost Adjustment, which
                recovers Power Reliability Program operating and debt costs, was 4.208 cents per kWh in the first half of 2025,
                5.505 cents from July 2025 through June 2026, and 6.934 cents from July 2026. The Variable Energy Adjustment,
                which covers fuel and non-renewable purchased power, rose from 0.439 cents in early 2025 to 1.590 cents for the
                quarter that starts October 1, 2026.
              </p>
              <p>
                <strong>Coming October 1, 2026:</strong> the fourth-quarter factors take R-1A Tier 1 from 26.408 to 27.292
                cents and the R-1B Base price from 26.540 to 27.814 cents. Because the high season also ends September 30,
                Tier 3 falls from 40.968 cents to 33.151 cents, the same as Tier 2, so a large summer bill will usually still
                shrink in October.
              </p>

              <h2>What a two-month LADWP bill looks like</h2>
              <p>
                Here is the arithmetic for one example, using only LADWP&apos;s published figures: a Zone 1 home on R-1A that
                uses 1,000 kWh over a two-month bill falling entirely in July through September 2026. The first 700 kWh are
                Tier 1 at 26.408 cents, about $184.86. The next 300 kWh are Tier 2 at 32.267 cents, about $96.80. If the
                home&apos;s highest month last year reached Tier 2, the Power Access Charge adds $7.90 for each month, or $15.80.
                That is roughly $297 before taxes. Your bill will differ with your zone, dates and usage, and it may also carry
                LADWP water charges and the city&apos;s sewer and trash fees, which LADWP bills on the city&apos;s behalf.
              </p>

              <h2>Discounts, EV charging and solar on LADWP</h2>
              <p>
                LADWP runs its own assistance programs rather than CARE and FERA. EZ-SAVE takes up to $16.34 off every two
                months for income-qualified households. Lifeline, for seniors and customers with disabilities who meet the
                income test, takes up to $35.42 off every two months. Both are applied through LADWP, not the state.
              </p>
              <p>
                If you charge an electric vehicle on a separately metered charger on a time-of-use rate, LADWP takes 2.5 cents
                per kWh off Base-period charging. Our guide to{' '}
                <Link href="/blog/ladwp-ev-charging-rates" className={guideLink}>
                  LADWP EV charging rates and rebates
                </Link>{' '}
                walks through the meter requirement and what charging costs at home.
              </p>
              <p>
                For rooftop solar, LADWP still uses net energy metering: exports earn a credit at your rate schedule&apos;s
                energy price, and leftover credits roll forward to later bills (the full{' '}
                <Link href="/blog/ladwp-net-metering" className={guideLink}>
                  LADWP net metering rules
                </Link>{' '}
                cover sizing and interconnection). Credits left when you close the account are
                zeroed out, so a system sized far beyond your use does not pay you back in cash. That is different from the
                net billing tariff at PG&amp;E, SCE and SDG&amp;E, where exports are credited at lower hourly values. The{' '}
                <Link href="/solar-savings/los-angeles-county" className={guideLink}>
                  Los Angeles County solar and bill guide
                </Link>{' '}
                covers how that plays out for local homes.
              </p>

              <h2>Where to go next</h2>
              <p>
                If your bill is higher than these prices suggest, work through{' '}
                <Link href="/blog/why-is-my-ladwp-bill-so-high" className={guideLink}>
                  why an LADWP bill jumps
                </Link>
                , which separates water, sanitation and old balances from the electric charges. For the billing calendar
                itself, see{' '}
                <Link href="/blog/how-often-does-ladwp-bill" className={guideLink}>
                  how often LADWP bills
                </Link>
                . To see how Los Angeles compares with the rest of the state, read{' '}
                <Link href="/blog/electricity-rates-highest-in-us-california" className={guideLink}>
                  why California&apos;s rates rank near the top nationally
                </Link>{' '}
                and the{' '}
                <Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className={guideLink}>
                  PG&amp;E, SCE and SDG&amp;E rate comparison
                </Link>
                . If you live on the edge of the city, check your bill: neighboring areas are served by SCE, whose{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  time-of-use plans run 4 to 9 p.m.
                </Link>
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

            <SolarInquiry utility="ladwp" topic="LADWP rates and solar comparison" heading="Compare a Solar Plan With Your LADWP Bill" />
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
