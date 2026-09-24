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

const path = '/blog/pge-tier-rates';
const url = `https://ratereliefca.com${path}`;
const title = 'PG&E Tier Rates 2026: Tier 1 vs Tier 2 Prices on E-1';
const h1 = 'PG&E Tier Rates in 2026: What Tier 1 and Tier 2 Cost and How the Tiers Work';
const description =
  "PG&E's tiered E-1 plan charges 32.561¢ per kWh in Tier 1 and 40.702¢ in Tier 2 from March 1, 2026. See baseline allowances, history and a sample bill.";
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'pgeResRatesCurrent',
  'pgeResRatesJan2026',
  'pgeResRatesSep2025',
  'pgeResRatesMar2025',
  'pgeResRatesJan2024',
  'pgeResRatesJan2023',
  'pgeRatesIndex',
  'pgeBaseline',
  'pgeUnderstandBill',
  'pgeBsc',
  'paoQ2_2026',
);

const faqs = [
  {
    question: 'What are the current PG&E tier rates?',
    answer:
      "From March 1, 2026, PG&E's tiered residential plan, E-1, charges 32.561 cents per kWh for Tier 1 and 40.702 cents per kWh for Tier 2. Those are total bundled prices for customers who buy both generation and delivery from PG&E. The plan also carries a daily Base Services Charge of about 79 cents for most customers.",
  },
  {
    question: 'What is the difference between PG&E Tier 1 and Tier 2?',
    answer:
      'Tier 1 is usage up to 100% of your baseline allowance, the amount PG&E bills at its lowest residential price. Tier 2 is everything above it. Since March 1, 2026, Tier 2 costs 8.141 cents more per kWh than Tier 1, about 25% more.',
  },
  {
    question: 'How do I know which tier I am in?',
    answer:
      'Your bill lists your baseline territory and allowance. Multiply the daily allowance for your territory and season by the days in the billing period; kWh up to that total is Tier 1 and the rest is Tier 2. The count resets every billing period.',
  },
  {
    question: 'Does PG&E still have a Tier 3 or high-usage charge?',
    answer:
      "Not on E-1. PG&E's December 2022 rate table priced usage over 400% of baseline at 49.335 cents per kWh. From January 1, 2023, usage over 400% has been billed at the same price as the rest of Tier 2.",
  },
  {
    question: 'Are PG&E tier rates the same for CCA customers?',
    answer:
      "No. The E-1 prices on this page are bundled rates. If a community choice aggregator supplies your power, PG&E bills delivery and the CCA sets generation, so the total differs. Use the joint rate comparison for your CCA instead of adding the two together.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function PgeTierRatesPage() {
  return (
    <PublicLayout breadcrumbLabel="PG&E tier rates" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="PG&E tier rates" kicker="PG&E · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                PG&amp;E&apos;s tiered plan, E-1, charges 32.561 cents per kWh for Tier 1 and 40.702 cents for Tier 2, effective
                March 1, 2026. Tier 1 covers usage up to your baseline allowance; Tier 2 is everything above it and costs
                about 25% more. The plan also adds a daily Base Services Charge, about $24 a month for most homes.
              </p>
              <p>
                Those are PG&amp;E&apos;s own figures from its residential rates table for March 1, 2026 onward, Advice Letter
                7846-E, checked September 23, 2026. For how PG&amp;E&apos;s average rate compares with SCE and SDG&amp;E, see the{' '}
                <Link href={hub.href} className={guideLink}>
                  rate tracker for California&apos;s major utilities
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="PG&E E-1 tiered plan, from March 1, 2026"
                  facts={[
                    { label: 'Tier 1 (up to baseline)', value: '32.561¢/kWh', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Tier 2 (above baseline)', value: '40.702¢/kWh', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Base Services Charge, most homes', value: '$0.79343/day', note: '$0.39688 FERA, $0.19713 CARE', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'CARE discount', value: '35%', note: 'On bundled usage charges', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="PG&E tier rates and solar comparison" utility="pge" />
              </div>

              <h2>How PG&amp;E&apos;s tiers work</h2>
              <p>
                Every PG&amp;E home gets a baseline allowance: a daily amount of electricity set for its baseline territory,
                the season and whether the home is all-electric. PG&amp;E&apos;s bill glossary says the CPUC bases Tier 1 prices
                on the average energy used by customers in each territory. On each bill, PG&amp;E multiplies your daily
                allowance by the number of days in the billing period. Everything up to that total is Tier 1. Everything
                above it is Tier 2.
              </p>
              <p>
                Tier 1 vs. Tier 2 is therefore not about the time of day. It is about how far past your own allowance you go
                in each billing period, and the count starts over on the next bill. A home that stays close
                to baseline pays mostly Tier 1 prices; a home with an EV, a pool pump or all-day air conditioning can spend
                most of the bill in Tier 2.
              </p>
              <DataTable
                caption="PG&E daily baseline allowance for a basic-electric home (kWh per day)"
                columns={['Territory', 'Summer (Jun–Sep)', 'Winter (Oct–May)']}
                rows={[
                  ['P', '13.5', '11.0'],
                  ['Q', '9.8', '11.0'],
                  ['R', '17.7', '10.4'],
                  ['S', '15.0', '10.2'],
                  ['T', '6.5', '7.5'],
                  ['V', '7.1', '8.1'],
                  ['W', '19.2', '9.8'],
                  ['X', '9.8', '9.7'],
                  ['Y', '10.5', '11.1'],
                  ['Z', '5.9', '7.8'],
                ]}
                note={<>Source: PG&amp;E Residential Baseline Territories and Quantities, individually metered homes, effective June 1, 2022 to present, checked September 23, 2026. All-electric homes get larger allowances, especially in winter; the full table is in our <Link href="/blog/average-kwh-per-day-california" className={guideLink}>kWh-per-day guide</Link>.</>}
              />

              <h2>A sample tiered bill</h2>
              <p>
                Take a basic-electric home in territory X that uses 400 kWh on a 30-day winter bill in 2026. Its allowance is
                9.7 kWh a day, or 291 kWh. Those 291 kWh are Tier 1 at 32.561 cents, about $94.75. The other 109 kWh are Tier
                2 at 40.702 cents, about $44.37. Thirty days of the standard Base Services Charge add about $23.80. The total
                is roughly $162.92 before taxes and any city fees. The same home on the CARE discount would pay 35% less on
                the usage charges and the lowest Base Services Charge tier.
              </p>
              <p>
                That is our arithmetic from PG&amp;E&apos;s published rates, not a PG&amp;E bill estimate. Your territory,
                season and usage change every line. If your real bill is far above this kind of math, the causes are in{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  why a PG&amp;E bill runs high
                </Link>
                .
              </p>

              <h2>Current PG&amp;E tier rates vs. earlier years</h2>
              <p>
                PG&amp;E publishes every past rate table, so the E-1 tier prices can be traced change by change. The March 1,
                2026 drop is partly an accounting shift: PG&amp;E moved some costs out of the per-kWh price and into the new
                Base Services Charge on the same date. Before that, E-1 had a daily delivery minimum bill instead of a fixed
                charge.
              </p>
              <DataTable
                caption="PG&E E-1 tier prices by effective date (cents per kWh, bundled)"
                columns={['Effective', 'Tier 1', 'Tier 2', 'Fixed daily charge']}
                rows={[
                  ['Jan 1, 2023', '32.549¢', '40.643¢', 'Minimum bill only'],
                  ['Mar 1, 2023', '34.050¢', '42.516¢', 'Minimum bill only'],
                  ['Jun 1, 2023', '33.376¢', '41.697¢', 'Minimum bill only'],
                  ['Jul 1, 2023', '35.271¢', '43.999¢', 'Minimum bill only'],
                  ['Sep 1, 2023', '35.841¢', '44.692¢', 'Minimum bill only'],
                  ['Jan 1, 2024', '42.009¢', '52.566¢', 'Minimum bill only'],
                  ['Mar 1, 2024', '42.101¢', '52.708¢', 'Minimum bill only'],
                  ['Apr 1, 2024', '42.676¢', '53.406¢', 'Minimum bill only'],
                  ['Jul 1, 2024', '38.828¢', '48.617¢', 'Minimum bill only'],
                  ['Sep 1, 2024', '39.033¢', '48.870¢', 'Minimum bill only'],
                  ['Oct 1, 2024', '40.206¢', '50.323¢', 'Minimum bill only'],
                  ['Jan 1, 2025', '40.122¢', '50.257¢', 'Minimum bill only'],
                  ['Mar 1, 2025', '40.730¢', '51.031¢', 'Minimum bill only'],
                  ['Sep 1, 2025', '39.834¢', '49.918¢', 'Minimum bill only'],
                  ['Jan 1, 2026', '37.839¢', '47.405¢', 'Minimum bill only'],
                  ['Mar 1, 2026', '32.561¢', '40.702¢', 'Base Services Charge, $0.79343/day (standard)'],
                ]}
                note={<>Source: PG&amp;E residential rate tables for each period, from PG&amp;E&apos;s electric rates archive, checked September 23, 2026. Prices exclude the California Climate Credit and taxes.</>}
              />
              <p>
                The peak was April 2024, when Tier 1 reached 42.676 cents. The CPUC Public Advocates Office ties several of
                PG&amp;E&apos;s later decreases to wildfire-cost recovery programs finishing their collection periods, and the
                January 2026 cut to a lower generation cost forecast. For
                the full story of each change, see{' '}
                <Link href="/blog/did-pge-rates-go-up" className={guideLink}>
                  whether PG&amp;E rates went up, year by year
                </Link>
                .
              </p>

              <h2>Tiers on time-of-use plans: the baseline credit</h2>
              <p>
                PG&amp;E&apos;s time-of-use plans do not have Tier 1 and Tier 2 prices, but one of them keeps the idea. E-TOU-C
                gives a baseline credit of 8.140 cents per kWh on usage within your allowance, taken off its peak and off-peak
                prices. E-TOU-D, EV2-A and E-ELEC have no baseline credit. So a household that lives near baseline may do
                better on E-1 or E-TOU-C, while a household far above it may do better on a plan without tiers. Compare
                them in our{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use plan guide
                </Link>
                , then check the result with PG&amp;E&apos;s rate comparison in My Account.
              </p>

              <h2>Master-metered buildings and CCA customers</h2>
              <p>
                Apartment buildings on one PG&amp;E master meter are on Schedule EM, not E-1. From March 1, 2026, EM charged
                37.174 cents for Tier 1 and 46.572 cents for Tier 2, with a delivery minimum bill instead of the Base
                Services Charge. Community choice customers pay PG&amp;E for delivery and their CCA for generation, so the
                bundled prices here are not their total; see{' '}
                <Link href="/blog/what-is-3rd-party-electric-on-pge-bill" className={guideLink}>
                  what the third-party electric line on a PG&amp;E bill means
                </Link>
                .
              </p>

              <h2>What to do with your tier numbers</h2>
              <p>
                If most of your kWh land in Tier 2 every month, you are paying about 25% more for that energy than a home
                near baseline. Lowering usage, moving to a time-of-use plan or adding solar all attack Tier 2 first, because
                it is the most expensive energy on the bill. Before comparing a solar quote, read how{' '}
                <Link href="/blog/nem-2-vs-nem-3-california" className={guideLink}>
                  NEM 3.0 credits exported power
                </Link>{' '}
                and check the{' '}
                <Link href="/blog/average-pge-bill-for-1-bedroom-apartment" className={guideLink}>
                  apartment-size PG&amp;E bill examples
                </Link>{' '}
                if you rent.
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

            <SolarInquiry utility="pge" topic="PG&E tier rates and solar comparison" heading="Compare a Solar Plan With Your PG&E Bill" />
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
