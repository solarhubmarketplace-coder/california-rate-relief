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

const path = '/blog/sdge-rate-increase-2026';
const url = `https://ratereliefca.com${path}`;
const title = 'SDG&E Rate Increase 2026: History, Chart and What Changed';
const h1 = 'SDG&E Rate Increases in 2026: What Changed, the History Since 2024 and Why San Diego Pays the Most';
const description =
  'SDG&E rates rose about 11.4% on January 1, 2026, then fell 2.0% in June. See every change since 2024, TOU-DR1 prices and why San Diego pays the most.';
const published = '2026-04-24';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'paoQ2_2026',
  'paoQ1_2026',
  'paoQ4_2025',
  'paoQ3_2025',
  'paoQ2_2025',
  'paoQ4_2024',
  'paoQ3_2024',
  'paoQ2_2024',
  'sdgeTotalRates',
  'sdgeTouDr1Aug2026',
  'sdgeTouDr1Jun2026',
  'sdgeTouDr1Jan2026',
  'sdgeTouDr1Oct2025',
  'sdgeTouDr1Jun2025',
  'sdgeTouDr1Jan2024',
  'sdgeTouDr1Jan2023',
  'sdgeWhenMatters',
  'sdgeEvTou5Aug2026',
  'sdgePricingPlans',
  'cpucNbt',
  'cpucCareFera',
);

const chart: { label: string; cents: number; projected?: boolean }[] = [
  { label: 'July 2024', cents: 38.3 },
  { label: 'Oct 1, 2024', cents: 38.5 },
  { label: 'Feb 1, 2025', cents: 39.7 },
  { label: 'Jun 1, 2025', cents: 41.5 },
  { label: 'Oct 1, 2025', cents: 41.0 },
  { label: 'Jan 1, 2026', cents: 45.7 },
  { label: 'Jun 1, 2026', cents: 45.5 },
  { label: 'Dec 31, 2026', cents: 46.1, projected: true },
];

const faqs = [
  {
    question: 'Did SDG&E raise rates in 2026?',
    answer:
      "Yes. SDG&E's January 1, 2026 change raised its residential average rate about 11.4%, according to the CPUC Public Advocates Office, mainly to recover generation costs that ran higher than forecast in 2025. A June 1, 2026 change cut the average about 2.0%, and SDG&E's rate tables show another small adjustment on August 1, 2026.",
  },
  {
    question: 'How much does SDG&E charge per kWh?',
    answer:
      "The residential average was 45.5 cents per kWh on June 1, 2026, per the Public Advocates Office. On SDG&E's standard TOU-DR1 plan from August 1, 2026, summer prices were 69.135 cents on-peak, 46.421 cents off-peak and 37.433 cents super off-peak, before a credit of 10.702 cents on usage up to 130% of baseline.",
  },
  {
    question: 'Why are SDG&E rates so high?',
    answer:
      "The Public Advocates Office names wildfire costs, transmission and distribution spending and rooftop solar incentives as the main statewide drivers. For SDG&E specifically, its January 2026 increase came from a $613.8 million rise in generation-related revenue, including $621.0 million of 2025 costs that were under-collected, plus $172.2 million in transmission access charges.",
  },
  {
    question: 'Will SDG&E rates go up again?',
    answer:
      "The office's July 2026 report projects SDG&E's residential average at about 46.1 cents per kWh by December 31, 2026, slightly above June's 45.5 cents, and warns the projection counts only requests already filed.",
  },
  {
    question: 'What are SDG&E’s EV rates?',
    answer:
      "SDG&E's whole-home EV plan is EV-TOU-5, for customers with an electric vehicle registered with the DMV. From August 1, 2026 it charges 13.090 cents per kWh super off-peak in summer and 12.332 cents in winter (midnight to 6 a.m., plus 10 a.m. to 2 p.m. on weekdays and midnight to 2 p.m. on weekends), against 80.205 cents on summer on-peak, 4 to 9 p.m. It adds the $0.79343 daily Base Services Charge. SDG&E also offers EV-TOU and EV-TOU-2.",
  },
  {
    question: 'Do SDG&E solar customers get the export bonus?',
    answer:
      "No. The CPUC's net billing tariff gives PG&E and SCE residential customers who apply before the end of 2027 slightly higher export credits for nine years, but excludes SDG&E customers because SDG&E's higher rates already make solar save more there. SDG&E net billing customers must take the EV-TOU-5 rate.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function SdgeRateIncreasePage() {
  return (
    <PublicLayout breadcrumbLabel="SDG&E rate increases" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="SDG&E rate increases" kicker="SDG&E · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                SDG&amp;E&apos;s biggest recent increase took effect January 1, 2026: its residential average rate rose about
                11.4%, to 45.7 cents per kWh, mostly to recover 2025 generation costs that came in above forecast. A 2.0% cut
                on June 1 left it at 45.5 cents, still the highest of California&apos;s three big utilities. A smaller change
                followed August 1.
              </p>
              <p>
                The averages come from the CPUC Public Advocates Office&apos;s quarterly rate reports; the plan prices come from
                SDG&amp;E&apos;s own total-rate tables, both checked September 23, 2026. They match the SDG&amp;E row on our{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                , which also has PG&amp;E and SCE for comparison.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="SDG&E rates at a glance"
                  facts={[
                    { label: 'Residential average, June 1, 2026', value: '45.5¢/kWh', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'January 1, 2026 change', value: '+11.4%', note: 'Generation cost true-up', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ4_2025.url } },
                    { label: 'TOU-DR1 summer on-peak, Aug 1, 2026', value: '69.135¢/kWh', note: '4–9 p.m.; before baseline credit', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                    { label: 'Ten-year change, Jan 2016 to Jun 2026', value: '+97%', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SDG&E rate review" utility="sdge" />
              </div>

              <h2>SDG&amp;E rate chart, 2024 to 2026</h2>
              <p>
                Each bar is SDG&amp;E&apos;s residential average rate as the Public Advocates Office reported it. The bars start
                at zero. The step up on January 1, 2026 is the largest single move in the period.
              </p>
            </div>

            <figure className="my-6" aria-labelledby="sdge-chart-caption">
              <figcaption id="sdge-chart-caption" className="mb-3 text-sm font-semibold text-foreground">
                SDG&amp;E residential average rate, cents per kWh (excludes the California Climate Credit)
              </figcaption>
              <ul className="space-y-2">
                {chart.map((p) => (
                  <li key={p.label} className="grid grid-cols-[6.5rem_1fr_3.5rem] items-center gap-3 text-sm">
                    <span className="text-muted-foreground">{p.label}</span>
                    <span className="h-4 rounded bg-muted" aria-hidden="true">
                      <span className={`block h-4 rounded ${p.projected ? 'bg-primary/40' : 'bg-primary'}`} style={{ width: `${(p.cents / 50) * 100}%` }} />
                    </span>
                    <span className="text-right font-semibold tabular-nums">{p.cents.toFixed(1)}¢</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Source: CPUC Public Advocates Office Electric Rates Reports, Q2 2024 through Q2 2026, checked September 23,
                2026. The lighter bar is the office&apos;s end-of-2026 projection, which counts only requests already filed.
              </p>
            </figure>

            <div className="prose prose-slate max-w-none">
              <h2>Every SDG&amp;E rate change since 2024</h2>
              <DataTable
                caption="SDG&E residential rate changes, March 2024 to August 2026"
                columns={['Effective', 'Change in average rate', 'Main driver']}
                rows={[
                  ['March 1, 2024', 'About +5.7%', 'Interim recovery of $232.6 million in wildfire mitigation costs; a higher authorized cost of capital (Advice Letter 4366-E)'],
                  ['October 1, 2024', 'About +0.7% vs. March 1, 2024', 'Recovery of $29.3 million in 2014–2022 emergency event costs and $9.5 million for the San Diego Regional Energy Network (4507-E)'],
                  ['February 1, 2025', 'About +2.3%', '2024 general rate case (Decision 24-12-074) added $295.0 million; generation balancing account up $156.6 million (4588-E)'],
                  ['June 1, 2025', 'Average rose to 41.5¢ from 39.7¢', "SDG&E's tables show the transmission charge rising from 5.517¢ to 7.503¢ per kWh"],
                  ['October 1, 2025', 'About −1.5%', 'Emergency-cost and energy-network charges rolled off; Base Services Charge began (4701-E)'],
                  ['January 1, 2026', 'About +11.4%', '2026 fuel and power costs up $613.8 million, including $621.0 million of 2025 under-collection; transmission access charges up $172.2 million (4757-E)'],
                  ['April 1, 2026', 'Small', 'TOU-DR1 summer on-peak moved from 69.654¢ to 69.572¢'],
                  ['June 1, 2026', 'About −2.0% vs. April 1', 'A federal order cut the base transmission revenue requirement by $112.2 million (4843-E)'],
                  ['August 1, 2026', 'Not yet reported by the office', 'TOU-DR1 summer on-peak rose from 68.459¢ to 69.135¢; generation up, distribution down'],
                ]}
                note={<>Sources: CPUC Public Advocates Office Electric Rates Reports, Q2 2024 through Q2 2026; SDG&amp;E Schedule TOU-DR1 total rate tables for June 1, 2025, April 1, 2026, June 1, 2026 and August 1, 2026. All checked September 23, 2026.</>}
              />
              <p>
                The January 2026 increase is the one most San Diego customers noticed. SDG&amp;E&apos;s 2025 market revenues from
                its power portfolio came in lower than forecast, leaving a $621.0 million balance to collect starting January
                1, on top of a $184.6 million higher 2026 portfolio budget. Because the CPUC reviews these balances in its
                annual fuel and power proceedings rather than in the four-year rate case, they can arrive quickly and in one
                step.
              </p>

              <h2>SDG&amp;E TOU-DR1 prices over time</h2>
              <p>
                SDG&amp;E calls TOU-DR1 its standard residential schedule and says a typical household is most likely on it.
                Its on-peak hours are 4 to 9 p.m. The table tracks the summer prices, before the credit SDG&amp;E gives on usage up to 130% of
                baseline.
              </p>
              <DataTable
                caption="SDG&E TOU-DR1 summer prices by effective date (cents per kWh)"
                columns={['Effective', 'On-peak', 'Off-peak', 'Super off-peak', 'Baseline credit']}
                rows={[
                  ['Jan 1, 2023', '83.325¢', '51.979¢', '35.515¢', '−11.724¢'],
                  ['Jan 1, 2024', '67.586¢', '44.685¢', '32.657¢', '−9.946¢'],
                  ['Mar 1, 2024', '70.206¢', '47.262¢', '35.211¢', '−10.478¢'],
                  ['Oct 1, 2024', '70.519¢', '47.575¢', '35.524¢', '−10.543¢'],
                  ['Feb 1, 2025', '71.412¢', '47.416¢', '34.812¢', '−10.544¢'],
                  ['Jun 1, 2025', '73.709¢', '49.713¢', '37.109¢', '−11.017¢'],
                  ['Oct 1, 2025', '67.263¢', '43.267¢', '30.663¢', '−9.690¢'],
                  ['Jan 1, 2026', '69.654¢', '47.560¢', '38.818¢', '−10.905¢'],
                  ['Apr 1, 2026', '69.572¢', '47.505¢', '38.773¢', '−10.892¢'],
                  ['Jun 1, 2026', '68.459¢', '46.392¢', '37.660¢', '−10.663¢'],
                  ['Aug 1, 2026', '69.135¢', '46.421¢', '37.433¢', '−10.702¢'],
                ]}
                note={<>Source: SDG&amp;E Schedule TOU-DR1 total rate tables for each date, from SDG&amp;E&apos;s Total Electric Rates page, checked September 23, 2026. Totals are for customers who buy generation from SDG&amp;E. From October 1, 2025, the plan also carries a Base Services Charge of $0.79343 a day ($0.39688 for FERA customers and qualifying affordable housing).</>}
              />
              <p>
                Two things stand out. The October 1, 2025 drop in every per-kWh price was the Base Services Charge taking
                effect: SDG&amp;E moved part of its costs into a flat daily charge, so the per-kWh prices fell while the
                class average barely moved. And in the summer prices, the January 2026 increase landed hardest on the
                cheapest hours: super off-peak rose about 8.2 cents and off-peak about 4.3 cents, against 2.4 cents on-peak.
              </p>

              <h2>Why San Diego pays the most</h2>
              <p>
                The Public Advocates Office puts SDG&amp;E&apos;s residential average up 5% over three years, 42% over five
                years and 97% over ten years to June 2026. It names wildfire costs, transmission and distribution investment
                and rooftop solar incentives as the main statewide drivers. SDG&amp;E&apos;s wildfire-related revenue
                requirement was $675.7 million in January 2026, 14% of its total, up from 9% in January 2023.
              </p>
              <p>
                Rate design matters too. SDG&amp;E&apos;s 4-to-9 p.m. on-peak price runs every day, including weekends, and
                was more than 22 cents above its off-peak price in summer 2026. See how that compares in{' '}
                <Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className={guideLink}>
                  PG&amp;E vs. SCE vs. SDG&amp;E rates
                </Link>
                , and how SCE&apos;s rates moved over the same years in{' '}
                <Link href="/blog/sce-rate-increase-2026" className={guideLink}>
                  the SCE rate history
                </Link>
                .
              </p>

              <h2>What an SDG&amp;E customer can do</h2>
              <p>
                <strong>Check the plan.</strong> SDG&amp;E&apos;s super off-peak hours are the cheapest on TOU-DR1 and on
                EV-TOU-5, the plan for EV charging and for solar customers on the net billing tariff. Our{' '}
                <Link href="/blog/sdge-time-of-use-rates-2026" className={guideLink}>
                  SDG&amp;E peak hours and TOU plan guide
                </Link>{' '}
                compares the options.
              </p>
              <p>
                <strong>Check the discounts.</strong> CARE cuts the bill 30% to 35% and FERA 18% for households under the
                CPUC&apos;s income limits, and both lower the Base Services Charge. If the bill still looks wrong, work through{' '}
                <Link href="/blog/why-is-my-sdge-bill-so-high" className={guideLink}>
                  why an SDG&amp;E bill runs high
                </Link>
                .
              </p>
              <p>
                <strong>Price solar against these rates.</strong> The CPUC says net billing export credits are usually lower
                than retail prices, and SDG&amp;E customers do not get the export bonus that PG&amp;E and SCE customers get,
                because SDG&amp;E&apos;s higher rates already make solar save more. That makes the self-use share, and a
                battery, the center of an SDG&amp;E proposal; see{' '}
                <Link href="/solar-panels-california#still-worth-it-nem-3" className={guideLink}>
                  whether solar still pays under NEM 3.0
                </Link>{' '}
                and the{' '}
                <Link href="/solar-savings/san-diego-county" className={guideLink}>
                  San Diego County solar and bill guide
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

            <SolarInquiry utility="sdge" topic="SDG&E rate review" heading="Compare a Solar Plan With Your SDG&E Bill" />
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
