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

const path = '/blog/sce-rate-increase-2026';
const url = `https://ratereliefca.com${path}`;
const title = 'SCE Rate Increase 2025–2026: History and Rate Chart';
const h1 = 'SCE Rate Increases, 2024 to 2026: The History, a Rate Chart and What Comes Next';
const description =
  'Southern California Edison rate history since 2024: the 13.1% jump on October 1, 2025, the small 2026 cuts, a rate chart and who approves increases.';
const published = '2026-04-14';
const updated = '2026-09-23';

const sources = rateSources(
  'paoQ2_2026',
  'paoQ4_2025',
  'paoQ3_2025',
  'paoQ2_2025',
  'paoQ1_2025',
  'paoQ4_2024',
  'paoQ3_2024',
  'paoQ2_2024',
  'sceBsc',
  'sceTou',
  'sceTiered',
  'cpucGrc',
  'cpucGrcProcess',
  'cpucCareFera',
);

/** Residential average rate, cents per kWh, as each CPUC Public Advocates Office report states it. */
const chart: { label: string; cents: number; note: string; projected?: boolean }[] = [
  { label: 'July 2024', cents: 33.2, note: 'Q2 2024 report' },
  { label: 'Oct 1, 2024', cents: 32.5, note: 'Q3 2024 report' },
  { label: 'Feb 2025', cents: 31.6, note: 'Q4 2024 report' },
  { label: 'Apr 2025', cents: 31.4, note: 'Q1 2025 report' },
  { label: 'Jun 1, 2025', cents: 31.2, note: 'Q2 2025 report' },
  { label: 'Oct 1, 2025', cents: 35.3, note: 'Q3 2025 report' },
  { label: 'Jan 1, 2026', cents: 34.5, note: 'Q4 2025 report' },
  { label: 'Jun 1, 2026', cents: 34.4, note: 'Q2 2026 report' },
  { label: 'Dec 31, 2026', cents: 33.5, note: 'Q2 2026 report, projected', projected: true },
];

const faqs = [
  {
    question: 'Did SCE raise rates in 2025?',
    answer:
      "Yes. On October 1, 2025, SCE's residential average rate rose about 13.1% when the CPUC's decision in SCE's 2025 general rate case went into rates, according to the CPUC Public Advocates Office. The average went from 31.2 cents per kWh in June 2025 to 35.3 cents. Earlier 2025 changes, on January 1, March 1 and June 1, were small decreases.",
  },
  {
    question: 'Did SCE rates go up or down in 2026?',
    answer:
      "Down slightly. SCE's January 1, 2026 change lowered the residential average rate about 2.3%, and the June 1, 2026 change lowered it about 0.1%, leaving it at 34.4 cents per kWh. The Public Advocates Office notes that SCE's total revenue requirement still rose $444.2 million on January 1, 2026; the rate fell because the costs were spread differently.",
  },
  {
    question: 'How much have SCE rates gone up over time?',
    answer:
      "The CPUC Public Advocates Office reports SCE's residential average rate up 4% over three years (June 2023 to June 2026), 56% over five years (January 2021 to June 2026) and 101% over ten years (January 2016 to June 2026), the largest ten-year increase of the three big investor-owned utilities.",
  },
  {
    question: 'Who approves SCE rate increases?',
    answer:
      'The California Public Utilities Commission. It sets how much revenue SCE may collect in a general rate case, filed every four years, and in separate proceedings for fuel and power costs, wildfire costs and other accounts. SCE then files advice letters that turn those decisions into the prices on your bill. The same process applies to PG&E and SDG&E.',
  },
  {
    question: 'Will SCE rates go up again?',
    answer:
      "The Public Advocates Office's July 2026 report projects SCE's residential average at about 33.5 cents per kWh by December 31, 2026, below today's 34.4 cents. It cautions that the projection counts only known requests and is likely to rise as SCE files new ones. This page does not project 2027.",
  },
  {
    question: 'What is the SCE Base Services Charge?',
    answer:
      'A flat daily charge that replaced the old Basic Charge in November 2025, under Assembly Bill 205 and CPUC Decision 24-05-028. SCE lists it at about $24 a month for most customers, $12 for FERA customers and qualifying deed-restricted affordable housing, and $6 for CARE customers. SCE says the change lowered the price per kWh by about 10%.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function SceRateIncreasePage() {
  return (
    <PublicLayout breadcrumbLabel="SCE rate increases" breadcrumbParent={{ label: 'California utility rate tracker', href: '/california-utility-rate-tracker' }}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader
              parent={{ label: 'California utility rate tracker', href: '/california-utility-rate-tracker' }}
              current="SCE rate increases"
              kicker="SCE · Utility rates"
              title={h1}
              updated={updated}
              sourceCount={sources.length}
            />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                SCE&apos;s last big rate increase took effect October 1, 2025, when its residential average rate rose about
                13.1% to 35.3 cents per kWh as the CPUC&apos;s 2025 rate case decision went into rates. Two small cuts in 2026
                brought it to 34.4 cents on June 1, 2026. That is still about 10% above June 2025 and roughly double 2016.
              </p>
              <p>
                Every average on this page is the CPUC Public Advocates Office&apos;s residential average rate: all SCE
                residential revenue divided by residential kWh, excluding the California Climate Credit. It is the same basis
                our{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  rate tracker for PG&amp;E, SCE, SDG&amp;E and SMUD
                </Link>{' '}
                uses, so the two pages agree. The price on your own bill depends on your plan and when you use power.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="SCE rates at a glance"
                  facts={[
                    { label: 'Residential average, June 1, 2026', value: '34.4¢/kWh', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'October 1, 2025 change', value: '+13.1%', note: '2025 general rate case', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ3_2025.url } },
                    { label: 'Ten-year change, Jan 2016 to Jun 2026', value: '+101%', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'Projected, Dec 31, 2026', value: '33.5¢/kWh', note: 'Known requests only; likely to rise', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SCE rate increase and solar comparison" utility="sce" />
              </div>

              <h2>SCE rate chart, 2024 to 2026</h2>
              <p>
                The chart plots SCE&apos;s residential average rate at each point the Public Advocates Office reported it. The
                bars start at zero, so the October 2025 step looks as large as it really is: about four cents per kWh in one
                day.
              </p>
            </div>

            <figure className="my-6" aria-labelledby="sce-chart-caption">
              <figcaption id="sce-chart-caption" className="mb-3 text-sm font-semibold text-foreground">
                SCE residential average rate, cents per kWh (excludes the California Climate Credit)
              </figcaption>
              <ul className="space-y-2">
                {chart.map((p) => (
                  <li key={p.label} className="grid grid-cols-[6.5rem_1fr_3.5rem] items-center gap-3 text-sm">
                    <span className="text-muted-foreground">{p.label}</span>
                    <span className="h-4 rounded bg-muted" aria-hidden="true">
                      <span
                        className={`block h-4 rounded ${p.projected ? 'bg-primary/40' : 'bg-primary'}`}
                        style={{ width: `${(p.cents / 40) * 100}%` }}
                      />
                    </span>
                    <span className="text-right font-semibold tabular-nums">{p.cents.toFixed(1)}¢</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Source: CPUC Public Advocates Office quarterly Electric Rates Reports, Q2 2024 through Q2 2026, checked
                September 23, 2026. The lighter bar is the office&apos;s projection, which counts only requests already filed.
              </p>
            </figure>

            <div className="prose prose-slate max-w-none">
              <h2>Every SCE rate change since mid-2024</h2>
              <p>
                From 2024 through 2026, SCE changed rates on January 1, March 1, June 1 or October 1. Each change is an advice
                letter that puts a CPUC decision into prices. The table lists each one the Public Advocates Office
                reported, with the change in the residential average rate and the main reason.
              </p>
              <DataTable
                caption="SCE residential rate changes, June 2024 to June 2026"
                columns={['Effective', 'Advice letter', 'Change in average rate', 'Main driver']}
                rows={[
                  ['June 1, 2024', '5307-E', 'About −1.6%', 'Lower 2023 fuel-cost trigger and wildfire-expense balances, partly offset by 2021 wildfire mitigation costs'],
                  ['October 1, 2024', '5379-E', 'About −2.2%', 'A $742 million refund of over-collected generation costs; interim recovery of $210 million in 2022 wildfire costs'],
                  ['January 1, 2025', '5449-E', 'About −2.6%', '2025 fuel and power forecast $616.3 million lower; cost-of-capital update'],
                  ['March 1, 2025', '5484-E', 'About −0.8%', 'Older rate-case and uncollectible balances finished recovering'],
                  ['June 1, 2025', '5555-E', 'About −0.6%', '$379.0 million of 2021 wildfire mitigation costs rolled off'],
                  ['October 1, 2025', '5643-E', 'About +13.1%', '2025 general rate case: $1.18 billion more base revenue, plus $902 million owed for January–September 2025'],
                  ['January 1, 2026', '5725-E', 'About −2.3% (vs. Nov. 15, 2025)', 'Rate case base revenue set at $10.187 billion; 2026 fuel and power forecast'],
                  ['June 1, 2026', '5829-E', 'About −0.1%', 'Wildfire self-insurance up to $650 million, offset by a smaller energy-efficiency budget'],
                ]}
                note={<>Source: CPUC Public Advocates Office Electric Rates Reports for Q2 2024, Q3 2024, Q4 2024, Q1 2025, Q2 2025, Q3 2025, Q4 2025 and Q2 2026, checked September 23, 2026. Percentages compare with the rates in effect just before each change.</>}
              />

              <h2>Why SCE rates jumped in October 2025</h2>
              <p>
                Utilities in California cannot raise base rates on their own. Every four years the CPUC sets how much SCE may
                spend running and rebuilding its system in a general rate case. SCE&apos;s 2025 case (application A.23-05-010)
                was decided in Decision 25-09-030, late in the year it was meant to cover. SCE&apos;s October 1, 2025 advice
                letter added $1.18 billion a year in authorized base revenue and began collecting $902 million, spread over 24
                months, that the decision allowed for January through September 2025. In total, the Public Advocates Office
                counted a $1.69 billion increase from SCE&apos;s June 1, 2025 revenue requirement.
              </p>
              <p>
                That is why the 2025 increase landed all at once: revenue approved for the whole year, including months already
                past, arrived in a single step. The same filing set up SCE&apos;s income-graduated Base Services Charge, which
                SCE says appeared on bills in November 2025; the office notes it had no effect on the class average.
              </p>

              <h2>What changed on SCE bills in 2026</h2>
              <p>
                <strong>November 2025: the Base Services Charge.</strong> SCE replaced its old Basic Charge with a flat Base
                Services Charge and cut the price of each kWh by about 10%, part of the bill restructuring Assembly Bill 205
                required. SCE lists the
                charge at $0.79 a day on its time-of-use and tiered plans, about $24 a month for most homes, $12 for FERA
                customers and $6 for CARE customers. Low-use homes can see higher bills; high-use homes can see lower ones.
              </p>
              <p>
                <strong>January 1, 2026: about −2.3%.</strong> The rate case decision set SCE&apos;s base revenue at $10.187
                billion, and SCE&apos;s 2026 fuel and purchased-power revenue requirement was set at about $4.7 billion. Total revenue still
                rose $444.2 million, but the residential average fell to 34.5 cents.
              </p>
              <p>
                <strong>June 1, 2026: about −0.1%.</strong> SCE&apos;s wildfire self-insurance budget rose to $650 million, up
                $380.7 million, while its 2026 energy-efficiency budget was cut by $240.3 million and a 2023 fuel-cost review
                returned $73.4 million. The net result was a residential average of 34.4 cents.
              </p>
              <p>
                For the prices on individual plans, see{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  SCE&apos;s time-of-use plans and peak hours
                </Link>{' '}
                and the full list of{' '}
                <Link href="/blog/sce-rate-schedules" className={guideLink}>
                  SCE residential rate schedules
                </Link>
                . SCE&apos;s tiered plan listed Tier 1 at 30 cents and Tier 2 at 40 cents per kWh as of June 1, 2026.
              </p>

              <h2>SCE rate increase history over the longer run</h2>
              <p>
                Short-term cuts hide the long trend. The Public Advocates Office puts SCE&apos;s residential average up 4% over
                the three years to June 2026, 56% since January 2021 and 101% since January 2016. SCE&apos;s ten-year rise is
                the largest of California&apos;s three big investor-owned utilities; PG&amp;E rose 69% and SDG&amp;E 97% over
                the same span. The office names wildfire mitigation and liability, transmission and distribution spending,
                and rooftop solar incentives as the main statewide drivers, citing the CPUC&apos;s 2025 SB 695 report.
              </p>
              <p>
                Wildfire costs are a large piece for SCE. The office counts $2.69 billion of SCE&apos;s 2026 revenue
                requirement as wildfire-related, about 14% of the total, up from 9% in January 2023.
              </p>

              <h2>Who approves SCE rate increases?</h2>
              <p>
                The California Public Utilities Commission. In a general rate case, the CPUC first decides the total revenue
                a utility may collect, then how to split it among residential, business and other customers. Consumer
                advocates, cities and other parties can challenge the utility&apos;s forecasts, and the CPUC holds public
                participation hearings in the service area. Separate proceedings handle fuel and power costs, wildfire costs
                and one-time balances, which is why SCE rates move several times a year. PG&amp;E and SDG&amp;E rate
                increases go through the same process.
              </p>

              <h2>Will SCE rates go up again?</h2>
              <p>
                The Public Advocates Office&apos;s July 2026 report projects SCE&apos;s residential average at about 33.5 cents
                by December 31, 2026. It warns that the forecast includes only requests already filed and will likely rise as
                SCE files more. The{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  dated rate tracker
                </Link>{' '}
                is updated when each new Public Advocates Office report comes out.
              </p>

              <h2>What an SCE customer can do about it</h2>
              <p>
                Start with the plan. SCE&apos;s rate comparison in My Account prices your last year of usage on each plan you
                qualify for. If your income is under the CPUC&apos;s limits, CARE takes 30% to 35% off the electric bill and
                FERA takes 18%, and both lower the Base Services Charge. For a bill that already looks wrong, work through{' '}
                <Link href="/blog/why-is-my-sce-bill-so-high" className={guideLink}>
                  why an Edison bill runs high
                </Link>
                .
              </p>
              <p>
                If you are weighing solar against these rates, the useful question is how SCE credits exports under the net
                billing tariff, not the average rate alone. Our{' '}
                <Link href="/blog/net-billing-vs-net-metering-california" className={guideLink}>
                  net billing vs. net metering explainer
                </Link>{' '}
                and{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={guideLink}>
                  battery payback under NEM 3.0
                </Link>{' '}
                cover that next step.
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

            <SolarInquiry utility="sce" topic="SCE rate increase and solar comparison" heading="Compare a Solar Plan With Your SCE Bill" />
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
