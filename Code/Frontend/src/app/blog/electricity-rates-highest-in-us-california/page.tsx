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

const path = '/blog/electricity-rates-highest-in-us-california';
const url = `https://ratereliefca.com${path}`;
const title = 'California Electricity Rates: 2nd Highest in the U.S. (2026)';
const h1 = 'Does California Have the Highest Electricity Rates in the U.S.? Where It Ranks in 2026';
const description =
  "EIA: California's residential price was 34.74¢/kWh in June 2026, second only to Hawaii and nearly double the U.S. 18.34¢. State rankings and why.";
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources('eiaEpm56a', 'eiaEpm56b', 'eiaBill2024', 'eiaSalesIndex', 'paoQ2_2026', 'smudResRates');

const faqs = [
  {
    question: 'Does California have the highest electricity rates in the US?',
    answer:
      "No, Hawaii does. California is second. EIA's June 2026 figures put the average residential price at 52.72 cents per kWh in Hawaii and 34.74 cents in California, against a U.S. average of 18.34 cents. California is the most expensive of the 48 contiguous states.",
  },
  {
    question: 'Where did California rank in 2024?',
    answer:
      "Second again. EIA's annual 2024 data put California's average residential price at 31.97 cents per kWh, behind Hawaii at 42.86 cents and ahead of Massachusetts at 29.35 cents. The U.S. average was 16.48 cents.",
  },
  {
    question: 'Is SDG&E more expensive than Hawaii?',
    answer:
      "Not on these measures. SDG&E's residential average was 45.5 cents per kWh in June 2026, per the CPUC Public Advocates Office, below Hawaii's statewide 52.72 cents in EIA's data for the same month. It is higher than every other state's average, though the two sources measure slightly differently.",
  },
  {
    question: 'Why is California electricity so expensive?',
    answer:
      "The CPUC Public Advocates Office names wildfire mitigation and liability costs, transmission and distribution investment, and rooftop solar incentives as the main statewide drivers. Its figures show residential average rates up 69% at PG&E, 101% at SCE and 97% at SDG&E from January 2016 to June 2026.",
  },
  {
    question: 'Are California electric bills the highest too?',
    answer:
      "No. Because California homes use little electricity, the average bill ranked eighth in EIA's 2024 data, $160.86 a month. Hawaii, Connecticut, Alabama, Massachusetts and Maryland were among the states with higher average bills.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function ElectricityRatesHighestInUsCaliforniaPage() {
  return (
    <PublicLayout breadcrumbLabel="California electricity rates vs. other states" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="California rates vs. other states" kicker="California · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                California has the second-highest residential electricity prices in the U.S., behind only Hawaii. In June
                2026, EIA put California&apos;s average at 34.74 cents per kWh, against 52.72 cents in Hawaii and 18.34 cents
                nationally. For the first half of 2026, California averaged 33.17 cents and again ranked second. Among the
                48 contiguous states, it is the most expensive.
              </p>
              <p>
                These are the U.S. Energy Information Administration&apos;s state averages across every utility in the state.
                Inside California the price depends heavily on which utility serves you; the{' '}
                <Link href={hub.href} className={guideLink}>
                  rate tracker for PG&amp;E, SCE, SDG&amp;E and SMUD
                </Link>{' '}
                has each one&apos;s current average and the date it last changed.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="California vs. the U.S."
                  facts={[
                    { label: 'California residential, June 2026', value: '34.74¢/kWh', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpm56a.url } },
                    { label: 'U.S. residential, June 2026', value: '18.34¢/kWh', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpm56a.url } },
                    { label: 'California rank, June 2026', value: '2nd of 50 states + D.C.', note: 'After Hawaii', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpm56a.url } },
                    { label: 'California rank, 2024', value: '2nd (31.97¢)', note: 'Annual average', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaBill2024.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California electricity rates and solar comparison" />
              </div>

              <h2>The 10 states with the highest residential electricity prices</h2>
              <DataTable
                caption="Average residential electricity price, June 2026 (cents per kWh)"
                columns={['Rank', 'State', 'June 2026', 'June 2025']}
                rows={[
                  ['1', 'Hawaii', '52.72¢', '40.96¢'],
                  ['2', 'California', '34.74¢', '33.59¢'],
                  ['3', 'Massachusetts', '29.61¢', '30.33¢'],
                  ['4', 'Maine', '29.59¢', '28.14¢'],
                  ['5', 'New York', '29.49¢', '26.55¢'],
                  ['6', 'Rhode Island', '29.23¢', '26.84¢'],
                  ['7', 'Alaska', '28.21¢', '26.87¢'],
                  ['8', 'New Hampshire', '27.01¢', '23.51¢'],
                  ['9', 'New Jersey', '24.95¢', '24.88¢'],
                  ['10', 'Vermont', '24.44¢', '23.00¢'],
                  ['—', 'U.S. average', '18.34¢', '17.47¢'],
                ]}
                note={<>Source: U.S. EIA, Electric Power Monthly Table 5.6.A (preliminary), checked September 23, 2026. Ranks are our sort of the 50 states and D.C.</>}
              />
              <p>
                A single month can move the order, so it helps to look at longer periods. For January through June 2026,
                EIA&apos;s year-to-date table puts Hawaii at 45.95 cents, California at 33.17 cents and Massachusetts at 30.06
                cents, the same top three. For all of 2024, EIA&apos;s annual data again has California second, at 31.97 cents,
                behind Hawaii&apos;s 42.86 cents and ahead of Massachusetts at 29.35 cents and Connecticut at 28.75 cents.
              </p>
              <p>
                One detail cuts the other way. From June 2025 to June 2026, California&apos;s average rose about 3.4%, from
                33.59 to 34.74 cents, while the U.S. average rose about 5.0%, from 17.47 to 18.34 cents. California is still
                far above the rest of the country, but it was not the fastest-rising state over that year.
              </p>

              <h2>Not just homes: California businesses pay more too</h2>
              <p>
                EIA&apos;s June 2026 figures show the same gap in every sector. California commercial customers averaged 27.33
                cents per kWh against 14.19 cents nationally, and industrial customers 20.74 cents against 9.17 cents. Across
                all sectors, California averaged 28.50 cents and the U.S. 14.48 cents.
              </p>

              <h2>Why California&apos;s electricity rates are so high</h2>
              <p>
                The CPUC Public Advocates Office, which represents utility customers before the commission, names three main
                statewide drivers in its July 2026 report: wildfire mitigation and liability costs, transmission and
                distribution investment, and rooftop solar incentives under net energy metering. Its ten-year figures, January
                2016 to June 2026, show residential average rates up 69% at PG&amp;E, 101% at SCE and 97% at SDG&amp;E, and its
                chart shows rates outpacing inflation since 2014.
              </p>
              <p>
                The detail, utility by utility, is on the pages that track each rate change: the{' '}
                <Link href="/blog/sce-rate-increase-2026" className={guideLink}>
                  SCE rate history since 2024
                </Link>
                , the{' '}
                <Link href="/blog/sdge-rate-increase-2026" className={guideLink}>
                  SDG&amp;E rate history
                </Link>{' '}
                and{' '}
                <Link href="/blog/did-pge-rates-go-up" className={guideLink}>
                  whether PG&amp;E rates went up
                </Link>
                . For the causes as they show up on a bill, see{' '}
                <Link href="/blog/why-is-my-california-electric-bill-so-high" className={guideLink}>
                  why California electricity is so expensive
                </Link>
                .
              </p>

              <h2>Inside California: which utilities cost the most</h2>
              <p>
                California&apos;s state average blends very different utilities. The Public Advocates Office reports June 2026
                residential averages of 45.5 cents per kWh at SDG&amp;E, 34.4 cents at SCE and 33.7 cents at PG&amp;E. SDG&amp;E&apos;s
                figure is higher than any other state&apos;s June average except Hawaii&apos;s, though the office and EIA measure
                slightly differently. In SMUD&apos;s own comparison of a 750 kWh month as of June 1, 2026, the publicly owned
                utilities come out cheaper: SMUD at $149, LADWP at $217, SCE at $283, PG&amp;E at $290 and SDG&amp;E at
                $322. The{' '}
                <Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className={guideLink}>
                  PG&amp;E, SCE and SDG&amp;E comparison
                </Link>{' '}
                and the{' '}
                <Link href="/blog/ladwp-rates" className={guideLink}>
                  LADWP rate guide
                </Link>{' '}
                have the plan-level prices.
              </p>

              <h2>Highest rates, but not the highest bills</h2>
              <p>
                California homes use little electricity: 503 kWh a month on average in 2024, second-lowest of the 50 states and
                D.C. So despite the second-highest price, California&apos;s average monthly bill, $160.86, ranked eighth in
                EIA&apos;s 2024 data, behind Hawaii, Connecticut, Alabama, Massachusetts and Maryland among others. The U.S.
                average bill was $142.26. More on what that means for a household in the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  average California utility bill
                </Link>{' '}
                guide.
              </p>

              <h2>What high rates mean for solar and batteries</h2>
              <p>
                A high price per kWh raises the value of every kWh a home does not have to buy, which is why solar gets so
                much attention in California. But the export side is set separately: under the CPUC&apos;s net billing tariff,
                power sent to the grid is usually credited at less than the retail price. The{' '}
                <Link href="/blog/nem-2-vs-nem-3-california" className={guideLink}>
                  NEM 2.0 vs. NEM 3.0 explainer
                </Link>{' '}
                covers how exports are credited now.
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={[...sources, SRC.cpucNbt]} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="utility_rates" currentPath={path} />
            </div>

            <SolarInquiry topic="California electricity rates and solar comparison" variant="bill" heading="Compare a Solar Plan With Your Electric Bill" />
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
