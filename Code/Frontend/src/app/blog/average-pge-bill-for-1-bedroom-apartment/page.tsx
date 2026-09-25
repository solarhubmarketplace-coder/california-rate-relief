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
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/average-pge-bill-for-1-bedroom-apartment';
const url = `https://ratereliefca.com${path}`;
const title = 'Average PG&E Bill for a 1-Bedroom Apartment (2026)';
const h1 = 'What Is the Average PG&E Bill for a One-Bedroom Apartment?';
const description =
  "No official average exists, so we priced typical apartment usage on PG&E's 2026 rates: about $105 to $191 a month for 250–450 kWh, before taxes.";
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('pgeResRatesCurrent', 'pgeBaseline', 'pgeBillExplainer', 'pgeUnderstandBill', 'pgeCca', 'eiaRecsWest', 'eiaBill2024', 'cpucCareFera', 'pgeFera');

const faqs = [
  {
    question: 'How much is an average PG&E bill for an apartment?',
    answer:
      "PG&E does not publish one. EIA's 2020 survey put apartments in Western buildings with five or more units at about 424 kWh a month. On PG&E's tiered E-1 plan from March 1, 2026, 450 kWh over a 30-day bill costs about $170 to $191 before taxes, depending on your baseline territory, including the standard Base Services Charge.",
  },
  {
    question: 'What is the average PG&E bill for a two-bedroom apartment?',
    answer:
      "No utility or state agency publishes it by bedroom count. As a proxy, EIA's 2020 survey put Western homes of 1,000 to 1,499 square feet at about 663 kWh a month, against about 447 kWh for homes under 1,000 square feet. More usage means more kWh above baseline, which PG&E bills at 40.702 cents instead of 32.561 cents on E-1.",
  },
  {
    question: 'Why is my PG&E bill high in a small apartment?',
    answer:
      "The flat Base Services Charge, about $24 a month for most customers since March 1, 2026, is a bigger share of a small bill. A low baseline territory also pushes more of your kWh into Tier 2. And a combined bill includes gas if your unit has a gas stove, heater or water heater.",
  },
  {
    question: 'Can renters lower a PG&E bill?',
    answer:
      'Yes, without touching the building. Check CARE and FERA eligibility, which cut the bill and the Base Services Charge; compare E-1 with E-TOU-C and E-TOU-D against your own usage history; and move flexible loads out of the 4 to 9 p.m. peak if you are on a time-of-use plan.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function AveragePgeBillOneBedroomPage() {
  return (
    <PublicLayout breadcrumbLabel="Average PG&E bill for a 1-bedroom apartment" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="PG&E bill for a 1-bedroom" kicker="PG&E · Bills" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                PG&amp;E does not publish an average bill by apartment size, so here is the math instead. A one-bedroom that
                uses 250 to 450 kWh a month would pay roughly $105 to $191 for electricity on PG&amp;E&apos;s tiered plan at
                March 1, 2026 prices, before taxes. Where you fall depends mostly on your baseline territory and the season.
              </p>
              <p>
                That range is our arithmetic from PG&amp;E&apos;s own rate and baseline tables, with the usage range taken from
                federal survey data on apartments. It is not a PG&amp;E estimate, and it leaves out gas. For the bigger
                picture on why California bills run high, start with our{' '}
                <Link href={hub.href} className={guideLink}>
                  guide to high California electric bills
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="Inputs used on this page"
                  facts={[
                    { label: 'Western apartment, 5+ unit building', value: '≈424 kWh/mo', note: '5,086 kWh a year (2020)', source: { publisher: 'U.S. EIA RECS', date: RATE_SOURCES_CHECKED, url: SRC.eiaRecsWest.url } },
                    { label: 'PG&E E-1 Tier 1 / Tier 2', value: '32.561¢ / 40.702¢', note: 'From March 1, 2026', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Base Services Charge, standard', value: '$0.79343/day', note: 'About $23.80 on a 30-day bill', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'California average home, 2024', value: '503 kWh/mo', note: 'All home types', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaBill2024.url } },
                  ]}
                />
              </div>

              <h2>How much electricity a one-bedroom uses</h2>
              <p>
                There is no official kWh figure for a one-bedroom. The closest data is the U.S. Energy Information
                Administration&apos;s Residential Energy Consumption Survey, which reports usage by type and size of home for
                the West census region, which covers California and 12 other states. In the 2020 survey, apartments in
                buildings with five or more units used 5,086 kWh a year, about 424 kWh a month, and apartments in two-to-four
                unit buildings used 5,644 kWh, about 470 a month. Homes under 1,000 square feet averaged 5,362 kWh, about 447
                a month, and one-person households 5,635 kWh.
              </p>
              <p>
                So 250 to 450 kWh a month covers most one-bedrooms we could model from public data. A unit with electric heat,
                a large TV setup or a home office running all day will sit at the top or above it. Your bill shows your own
                kWh and billing days; our{' '}
                <Link href="/blog/average-kwh-per-day-california" className={guideLink}>
                  kWh-per-day guide
                </Link>{' '}
                shows how to turn them into a daily number.
              </p>

              <h2>What that usage costs on PG&amp;E in 2026</h2>
              <p>
                On PG&amp;E&apos;s tiered plan, E-1, the first block of each bill, your baseline allowance, costs 32.561 cents
                per kWh and everything above it costs 40.702 cents. The allowance depends on your baseline territory, a
                letter printed on your bill, and it is much smaller in some territories than others. The table prices a 30-day
                summer bill in two territories at the ends of that range, including the standard Base Services Charge.
              </p>
              <DataTable
                caption="Estimated 30-day PG&E E-1 summer bill for a basic-electric apartment (before taxes)"
                columns={['Monthly use', 'Territory T (6.5 kWh/day allowance)', 'Territory R (17.7 kWh/day allowance)']}
                rows={[
                  ['250 kWh', '≈ $109.68', '≈ $105.21'],
                  ['350 kWh', '≈ $150.39', '≈ $137.77'],
                  ['450 kWh', '≈ $191.09', '≈ $170.33'],
                ]}
                note={<>Our arithmetic from PG&amp;E&apos;s residential rates table (March 1, 2026 to present) and baseline table (June 1, 2022 to present), both checked September 23, 2026. Each figure is Tier 1 kWh × 32.561¢ + Tier 2 kWh × 40.702¢ + 30 days × $0.79343. Excludes taxes, city fees, gas and the California Climate Credit.</>}
              />
              <p>
                Territory T&apos;s summer allowance is 195 kWh on a 30-day bill, so a 450 kWh month puts 255 kWh in Tier 2.
                Territory R&apos;s is 531 kWh, so the same month never leaves Tier 1. That is why two identical apartments in
                different parts of PG&amp;E&apos;s territory can get bills about $20 apart. Winter allowances differ again; the
                full table is in our{' '}
                <Link href="/blog/pge-tier-rates" className={guideLink}>
                  PG&amp;E tier rates guide
                </Link>
                .
              </p>

              <h2>The fixed charge weighs more on a small bill</h2>
              <p>
                Since March 1, 2026, most PG&amp;E customers pay a Base Services Charge of $0.79343 a day, about $24 a month,
                while per-kWh prices were lowered at the same time. In the table above, it is about 22% of a 250 kWh bill but
                only 12% to 14% of a 450 kWh bill. PG&amp;E itself says the lower kWh prices may or may not lead to a lower
                total bill; for a low-use apartment, the fixed charge is the bigger factor.
              </p>
              <p>
                Income-qualified households pay less. CARE customers are assigned the lowest charge, $0.19713 a day, and get a
                35% discount on their usage charges; FERA customers pay $0.39688 a day and get 18% off. The CPUC&apos;s 2026
                income limit for CARE is $43,280 for one or two people. Our guide to{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  PG&amp;E&apos;s income-qualified bill discounts
                </Link>{' '}
                has the full table and how to apply.
              </p>

              <h2>Tiered or time-of-use for an apartment?</h2>
              <p>
                PG&amp;E&apos;s E-TOU-C plan charges more from 4 to 9 p.m. every day and gives an 8.140-cent credit on usage
                within baseline, so a low-use apartment near its allowance can do well on it if the evening load is small.
                E-TOU-D has a shorter weekday peak but no baseline credit. The{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use plan guide
                </Link>{' '}
                compares them. Price each plan against your own year of usage before switching.
              </p>

              <h2>Three things that change an apartment bill</h2>
              <ul>
                <li>
                  <strong>Gas.</strong> If the unit has a gas stove, furnace or water heater, the PG&amp;E bill carries a gas
                  section too, priced separately in therms.
                </li>
                <li>
                  <strong>Community choice.</strong> Where one of the 12 community choice aggregators in PG&amp;E&apos;s
                  territory buys the power, PG&amp;E still delivers it and sends one combined bill, and the generation line
                  is not PG&amp;E&apos;s price. See{' '}
                  <Link href="/blog/what-is-3rd-party-electric-on-pge-bill" className={guideLink}>
                    what the third-party electric line means
                  </Link>
                  .
                </li>
                <li>
                  <strong>Master meter.</strong> A building served through one PG&amp;E master meter is on a master-metered
                  schedule such as EM, so the E-1 math on this page does not apply to your share directly.
                </li>
              </ul>

              <h2>If the bill is higher than this math</h2>
              <p>
                Compare your kWh per day with the same month last year, then check the rate plan and credits. The step-by-step
                checklist is in{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  why a PG&amp;E bill runs high
                </Link>
                , and the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  statewide average utility bill
                </Link>{' '}
                shows where California households land overall. For a larger apartment in SDG&amp;E territory, see{' '}
                <Link href="/blog/average-sdge-bill-2-bedroom-apartment" className={guideLink}>
                  the same estimate for an SDG&amp;E two-bedroom
                </Link>
                . Renters who cannot put panels on the roof can read{' '}
                <Link href="/blog/is-community-solar-worth-it" className={guideLink}>
                  whether community solar is worth it
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
              <HubSpokeLinks hub="electric_bills" currentPath={path} />
            </div>

            <SolarInquiry utility="pge" topic="PG&E apartment bill" variant="bill" heading="Compare a Solar Plan With Your PG&E Bill" />
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
