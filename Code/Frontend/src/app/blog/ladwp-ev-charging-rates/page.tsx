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

const path = '/blog/ladwp-ev-charging-rates';
const url = `https://ratereliefca.com${path}`;
const title = 'LADWP EV Charging Rates 2026: Discount, Meter and Rebates';
const h1 = 'LADWP EV Charging Rates: What Charging at Home Costs in Los Angeles in 2026';
const description =
  'LADWP takes 2.5¢ per kWh off EV charging in the Base period if the charger has its own TOU meter. See 2026 prices, the $10 minimum and rebates.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources('ladwpEv', 'ladwpEvNem', 'ladwpResRates', 'ladwpRateGuide', 'ladwpBillingFaq', 'paoQ2_2026', 'pgeResRatesCurrent', 'sceTou');

const faqs = [
  {
    question: 'Does LADWP have an EV rate?',
    answer:
      'LADWP has an EV rate discount rather than a separate EV plan. If your charger is on its own meter and that meter is on a time-of-use rate, LADWP takes $0.025 per kWh off charging in the Base period. The EV meter has a $10 monthly minimum plus adjustment factors, and no service charge.',
  },
  {
    question: 'What is the cheapest time to charge an EV with LADWP?',
    answer:
      "The Base period: weekdays from 8 p.m. to 10 a.m. and all day Saturday and Sunday. It is also the only period the EV discount applies to. On LADWP's R-1B time-of-use rate, Base costs 26.540 cents per kWh from July through September 2026 and 27.814 cents from October 1, before the 2.5-cent discount.",
  },
  {
    question: 'How much does it cost to charge an EV at home with LADWP?',
    answer:
      'On a separately metered charger, Base-period charging nets about 24.0 cents per kWh from July to September 2026 and about 25.3 cents from October, after the discount, our arithmetic. So 300 kWh a month, about 890 miles at the 100 MPGe efficiency the CPUC Public Advocates Office assumes, costs about $72 to $76 before taxes. On the main meter at Tier 2 prices it would be about $97.',
  },
  {
    question: 'What EV rebates does LADWP offer?',
    answer:
      'LADWP lists a $1,000 rebate on a qualified home EV charger, $500 more for EZ-SAVE or Lifeline customers, and an extra $250 toward installing a dedicated EV meter. It also offers $1,500 toward a qualified used EV, or $4,000 for EZ-SAVE and Lifeline customers.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function LadwpEvChargingRatesPage() {
  return (
    <PublicLayout breadcrumbLabel="LADWP EV charging rates" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="LADWP EV charging rates" kicker="LADWP · EV charging" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                LADWP does not have a separate EV plan. It takes $0.025 per kWh off charging in the Base period, weekday nights
                and weekends, if your charger has its own meter on a time-of-use rate. With 2026 prices that nets about 24 cents
                per kWh through September and about 25.3 cents from October 1, before taxes.
              </p>
              <p>
                Whether the discount is worth a second meter depends on how much you drive and which tier your house already
                reaches. Below: how the EV meter is billed, what charging costs by season, the rebates that help pay for the
                setup, and how LADWP compares with charging elsewhere. LADWP&apos;s full rate tables are in our{' '}
                <Link href="/blog/ladwp-rates" className={guideLink}>
                  LADWP rates guide
                </Link>
                , and every utility&apos;s prices are in the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="LADWP EV charging in four numbers"
                  facts={[
                    { label: 'EV discount, Base period only', value: '$0.025/kWh', note: 'Separately metered, on a TOU rate', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpEvNem.url } },
                    { label: 'R-1B Base price, Oct–Dec 2026', value: '27.814¢/kWh', note: 'Before the discount', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpResRates.url } },
                    { label: 'EV meter minimum', value: '$10/month', note: 'Plus adjustment factors; no service charge', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpEv.url } },
                    { label: 'Home charger rebate', value: '$1,000', note: '+$500 EZ-SAVE/Lifeline; +$250 for the EV meter', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpEv.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="LADWP EV charging costs" utility="ladwp" />
              </div>

              <h2>How LADWP bills a separately metered EV charger</h2>
              <p>
                LADWP&apos;s EV rate discount works on a second meter that measures only the charger. The rules, from LADWP&apos;s
                EV and rate pages:
              </p>
              <ul>
                <li>The charger must be separately metered from your main meter, and the EV meter must be on a time-of-use rate.</li>
                <li>The discount is $0.025 per kWh and applies only to Base-period charging.</li>
                <li>The EV meter has a $10 monthly minimum plus adjustment factors: if its energy charges, not counting adjustment factors, come to less than $10, you pay $10.</li>
                <li>There is no service charge and no ESA adjustment factor charge on the EV discount rate.</li>
                <li>Both residential and business accounts qualify.</li>
              </ul>
              <p>
                Without a second meter, charging simply adds kWh to your house meter at whatever rate the house is on, with no
                discount.
              </p>

              <h2>What an LADWP kWh costs for EV charging in 2026</h2>
              <p>
                For a residential account, the time-of-use rate is R-1B. Its periods are the same all year: High Peak weekdays 1
                to 5 p.m., Low Peak weekdays 10 a.m. to 1 p.m. and 5 to 8 p.m., and Base the rest of the time, including
                weekends. Prices change quarterly as LADWP resets its adjustment factors.
              </p>
              <DataTable
                caption="LADWP R-1B prices in 2026 and the EV Base price after the discount (cents per kWh)"
                columns={['Months (2026)', 'High Peak', 'Low Peak', 'Base', 'Base with EV discount']}
                rows={[
                  ['January–March', '27.647¢', '27.647¢', '25.293¢', '22.793¢'],
                  ['April–May', '27.238¢', '27.238¢', '24.884¢', '22.384¢'],
                  ['June', '33.078¢', '27.238¢', '24.494¢', '21.994¢'],
                  ['July–September', '35.124¢', '29.284¢', '26.540¢', '24.040¢'],
                  ['October–December', '30.168¢', '30.168¢', '27.814¢', '25.314¢'],
                ]}
                note={<>Source: LADWP Residential Rates, R-1B Total Consumption Charge, and EV rate discount, checked September 23, 2026. The last column is our arithmetic. Excludes taxes and the EV meter&apos;s $10 minimum.</>}
              />
              <p>
                Because the discount applies only in Base, a car set to start charging at 8 p.m. on weekdays, or any time on
                weekends, gets the lowest price. Charging a car at 3 p.m. on a July weekday costs 35.124 cents with no discount,
                about 46% more than the discounted Base price.
              </p>

              <h2>Is a separate EV meter worth it?</h2>
              <p>
                Compare with charging on the house meter. On the standard R-1A rate, a Zone 1 home gets 700 kWh of Tier 1 per
                two-month bill and pays Tier 2 above that. Adding 300 kWh a month of charging to a home already past Tier 1
                costs, from July through September 2026, 32.267 cents per kWh in Tier 2, about $96.80 a month, or 40.968 cents
                in Tier 3, about $122.90. On a separate EV meter charging in Base, the same 300 kWh is about $72.12, and about
                $75.94 from October 1, our arithmetic.
              </p>
              <p>
                So the meter tends to pay when you charge a lot and your house already runs past Tier 1. It pays less for a
                light driver in a low-use home whose charging would stay in Tier 1 at 26.408 cents. The $250 meter rebate helps
                with the setup, and LADWP bills homes every two months, so check two bills before deciding; our guide on{' '}
                <Link href="/blog/how-often-does-ladwp-bill" className={guideLink}>
                  how often LADWP bills
                </Link>{' '}
                explains how to read them per day.
              </p>

              <h2>Rebates for the charger, the meter and the car</h2>
              <DataTable
                caption="LADWP EV rebates listed in 2026"
                columns={['Rebate', 'Amount', 'Extra for EZ-SAVE or Lifeline']}
                rows={[
                  ['Qualified residential EV charger', '$1,000', '+$500'],
                  ['Dedicated EV meter installation (with the charger rebate)', '$250', '—'],
                  ['Qualified used EV (all-electric or hybrid)', '$1,500', '$4,000 total'],
                ]}
                note={<>Source: LADWP Electric Vehicles page, checked September 23, 2026. Rebate terms and funding can change; confirm on LADWP&apos;s site or at (866) 484-0433 before you buy.</>}
              />

              <h2>How LADWP charging compares</h2>
              <p>
                The CPUC Public Advocates Office calculates that an EV getting 100 MPGe matches the fuel cost of a 28 mpg car at
                about 48.7 cents per kWh when gasoline is $4.60 a gallon. LADWP&apos;s discounted Base price is about half that. It
                is also in the same range as the investor-owned utilities&apos; EV plans: PG&amp;E&apos;s EV2-A off-peak price is
                22.558 cents, and SCE&apos;s TOU-D-PRIME off-peak runs 24 to 26 cents. Public charging prices in Los Angeles are
                set by each station owner; see{' '}
                <Link href="/blog/chargepoint-cost-per-kwh-california" className={guideLink}>
                  ChargePoint cost per kWh in California
                </Link>{' '}
                for how those are built.
              </p>
              <p>
                If you have or want rooftop solar, LADWP still uses net energy metering, so daytime exports earn credit at your
                energy price and roll forward to later bills; charging on weekends lets the car use your own solar directly.
                See{' '}
                <Link href="/blog/solar-panels-for-ev-charging-california" className={guideLink}>
                  solar panels for EV charging
                </Link>{' '}
                and the{' '}
                <Link href="/solar-savings/los-angeles-county" className={guideLink}>
                  Los Angeles County solar and bill guide
                </Link>
                , and for what exports earn at other utilities,{' '}
                <Link href="/blog/selling-electricity-back-to-the-grid-price-per-kwh" className={guideLink}>
                  selling electricity back to the grid
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

            <SolarInquiry utility="ladwp" topic="LADWP EV charging" heading="Compare Solar for EV Charging With Your LADWP Bill" />
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
