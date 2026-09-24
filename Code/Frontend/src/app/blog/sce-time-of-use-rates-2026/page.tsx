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

const path = '/blog/sce-time-of-use-rates-2026';
const url = `https://ratereliefca.com${path}`;
const title = 'SCE Time-of-Use Rates 2026: Peak Hours and Prices';
const h1 = 'SCE Time-of-Use Rates in 2026: Peak Hours and Prices for TOU-D-4-9PM, TOU-D-5-8PM and TOU-D-PRIME';
const description =
  'SCE peak is 4–9 p.m. on TOU-D-4-9PM and TOU-D-PRIME, 5–8 p.m. on TOU-D-5-8PM. See each plan’s price per kWh, off-peak hours, the EV plan and base charge.';
const published = '2026-09-11';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'sceTou',
  'sceEvPlan',
  'sceTiered',
  'sceBsc',
  'sceRateCompare',
  'sceJointRates',
  'paoQ2_2026',
  'cpucNbt',
);

const faqs = [
  {
    question: 'What are SCE peak hours?',
    answer:
      'On TOU-D-4-9PM and TOU-D-PRIME, 4 to 9 p.m. every day. On TOU-D-5-8PM, 5 to 8 p.m. every day. From June through September those hours are on-peak on weekdays and mid-peak on weekends. From October through May they are mid-peak every day. SCE lists the plans on its Time-of-Use Residential Rate Plans page.',
  },
  {
    question: 'What are SCE off-peak hours?',
    answer:
      'Every hour outside the peak window. In summer, TOU-D-4-9PM and TOU-D-PRIME are off-peak from 9 p.m. to 4 p.m. the next day. In winter, off-peak runs 9 p.m. to 8 a.m. and a cheaper super off-peak period runs 8 a.m. to 4 p.m. On TOU-D-5-8PM, the same pattern shifts to 8 p.m. to 5 p.m. and 8 a.m. to 5 p.m.',
  },
  {
    question: 'How much does SCE charge per kWh?',
    answer:
      "It depends on the plan and the hour. SCE's listed prices run from 24 cents (TOU-D-PRIME off-peak in winter) to 74 cents (TOU-D-5-8PM summer weekday on-peak). The tiered plan was 30 cents in Tier 1 and 40 cents in Tier 2 as of June 1, 2026. As one average, the CPUC Public Advocates Office puts SCE's residential rate at 34.4 cents per kWh in June 2026.",
  },
  {
    question: 'Does SCE have an EV rate?',
    answer:
      "Yes. SCE's EV plan is TOU-D-PRIME, open to households that own or lease an electric vehicle or plug-in hybrid, have a home battery, or heat water or space with an electric heat pump. It has no baseline credit but the lowest off-peak prices SCE lists: 26 cents in summer and 24 cents in winter. You attest that you are eligible when you enroll.",
  },
  {
    question: 'Are weekends off-peak on SCE?',
    answer:
      'Not entirely. On weekends the 4-to-9 p.m. window (5 to 8 p.m. on TOU-D-5-8PM) still costs more than the rest of the day, but in summer SCE prices it as mid-peak rather than on-peak. On TOU-D-4-9PM that is 46 cents instead of the 58-cent weekday on-peak price.',
  },
  {
    question: 'How often can I change my SCE rate plan?',
    answer:
      "SCE says that once you switch to a time-of-use rate, you cannot switch again for a full 12 months. Run SCE's Rate Plan Comparison tool on your own usage before you switch.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function SceTimeOfUseRates2026() {
  return (
    <PublicLayout breadcrumbLabel="SCE time-of-use rates" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="SCE time-of-use rates" kicker="SCE · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                Southern California Edison&apos;s peak hours are 4 to 9 p.m. every day on TOU-D-4-9PM and TOU-D-PRIME, and 5 to
                8 p.m. every day on TOU-D-5-8PM. The most expensive hours are summer weekdays, when SCE lists on-peak prices of 58
                to 74 cents per kWh. The cheapest are winter mornings and middays on TOU-D-PRIME, at 24 cents.
              </p>
              <p>
                SCE offers three open time-of-use plans and one tiered plan, Schedule D. The prices below are the ones SCE posts on
                its Time-of-Use Residential Rate Plans page, rounded by SCE to the cent and checked September 23, 2026; the tiered
                page is labeled &ldquo;current rates as of 6/1/26.&rdquo; They are bundled prices for customers who buy their
                power from SCE. For SCE&apos;s average rate next to PG&amp;E and SDG&amp;E, see the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>

              <QuickAnswer label="Which SCE plan tends to fit">
                <p>
                  <strong>TOU-D-4-9PM</strong> suits a household that stays near its baseline and can keep 4 to 9 p.m. light.{' '}
                  <strong>TOU-D-5-8PM</strong> has a shorter window but higher prices inside it, so it only pays if you can
                  clear those three hours. <strong>TOU-D-PRIME</strong> suits homes with an EV, battery or heat pump and is
                  required for solar on the Solar Billing Plan. <strong>Schedule D</strong> (tiered) suits homes that cannot
                  shift use at all. SCE&apos;s comparison tool on your own usage settles it.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="SCE time-of-use, as listed September 2026"
                  facts={[
                    { label: 'Peak window (4-9PM and PRIME)', value: '4–9 p.m. daily', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceTou.url } },
                    { label: 'Peak window (5-8PM)', value: '5–8 p.m. daily', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceTou.url } },
                    { label: 'Lowest listed price', value: '24¢/kWh', note: 'TOU-D-PRIME, winter off-peak and super off-peak', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceTou.url } },
                    { label: 'Base Services Charge', value: '$24.15/month', note: 'About $0.79 a day; $6 CARE, $12.08 FERA', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceBsc.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SCE time-of-use rates and solar comparison" utility="sce" />
              </div>

              <h2>SCE peak and off-peak hours by plan</h2>
              <p>
                SCE&apos;s summer runs June through September and winter October through May. The clock hours of the higher-priced
                window never change; what changes is its label and price. In summer it is on-peak on weekdays and mid-peak on
                weekends. In winter it is mid-peak every day, and the middle of the day becomes super off-peak, the cheapest
                period on each plan.
              </p>
              <DataTable
                caption="SCE residential time-of-use periods"
                columns={['Plan', 'Summer (Jun–Sep)', 'Winter (Oct–May)']}
                rows={[
                  ['TOU-D-4-9PM', 'On-peak 4–9 p.m. weekdays; mid-peak 4–9 p.m. weekends; off-peak 9 p.m.–4 p.m.', 'Mid-peak 4–9 p.m. daily; off-peak 9 p.m.–8 a.m.; super off-peak 8 a.m.–4 p.m.'],
                  ['TOU-D-5-8PM', 'On-peak 5–8 p.m. weekdays; mid-peak 5–8 p.m. weekends; off-peak 8 p.m.–5 p.m.', 'Mid-peak 5–8 p.m. daily; off-peak 8 p.m.–8 a.m.; super off-peak 8 a.m.–5 p.m.'],
                  ['TOU-D-PRIME', 'On-peak 4–9 p.m. weekdays; mid-peak 4–9 p.m. weekends; off-peak 9 p.m.–4 p.m.', 'Mid-peak 4–9 p.m. daily; off-peak 9 p.m.–8 a.m.; super off-peak 8 a.m.–4 p.m.'],
                ]}
                note={<>Source: SCE, Time-of-Use Residential Rate Plans, checked September 23, 2026.</>}
              />

              <h2>SCE time-of-use prices per kWh</h2>
              <DataTable
                caption="SCE time-of-use prices by period (cents per kWh, as SCE lists them)"
                columns={['Plan and period', 'Summer', 'Winter']}
                rows={[
                  ['TOU-D-4-9PM, 4–9 p.m. weekdays', '58¢ (on-peak)', '51¢ (mid-peak)'],
                  ['TOU-D-4-9PM, 4–9 p.m. weekends', '46¢ (mid-peak)', '51¢ (mid-peak)'],
                  ['TOU-D-4-9PM, off-peak', '34¢', '37¢'],
                  ['TOU-D-4-9PM, super off-peak', '—', '33¢'],
                  ['TOU-D-5-8PM, 5–8 p.m. weekdays', '74¢ (on-peak)', '60¢ (mid-peak)'],
                  ['TOU-D-5-8PM, 5–8 p.m. weekends', '54¢ (mid-peak)', '60¢ (mid-peak)'],
                  ['TOU-D-5-8PM, off-peak', '34¢', '38¢'],
                  ['TOU-D-5-8PM, super off-peak', '—', '32¢'],
                  ['TOU-D-PRIME, 4–9 p.m. weekdays', '59¢ (on-peak)', '56¢ (mid-peak)'],
                  ['TOU-D-PRIME, 4–9 p.m. weekends', '40¢ (mid-peak)', '56¢ (mid-peak)'],
                  ['TOU-D-PRIME, off-peak', '26¢', '24¢'],
                  ['TOU-D-PRIME, super off-peak', '—', '24¢'],
                ]}
                note={<>Source: SCE, Time-of-Use Residential Rate Plans, checked September 23, 2026. TOU-D-4-9PM and TOU-D-5-8PM take 10¢ off each kWh up to your monthly baseline allocation; TOU-D-PRIME has no baseline credit. Every plan adds the daily Base Services Charge.</>}
              />
              <p>
                Read the table two ways. Across plans, TOU-D-5-8PM charges the most inside its window, 74 cents on a summer
                weekday against 58 cents on TOU-D-4-9PM, so a shorter window is not automatically cheaper. Within a plan, the
                baseline credit matters: on TOU-D-4-9PM, SCE shows a summer weekday off-peak kWh at 24 cents after the credit and
                an on-peak kWh at 48 cents, as long as the usage falls within your baseline allocation.
              </p>

              <h2>TOU-D-4-9PM: SCE&apos;s standard time-of-use plan</h2>
              <p>
                SCE pitches this plan at people who stay up late and at smaller households in coastal areas. Its five-hour window is long, but the price inside it is lower than on
                the 5-to-8 plan, and the 10-cent baseline credit applies to your baseline allocation. SCE also gives eligible
                TOU-D-4-9PM and TOU-D-5-8PM customers with a heat pump water heater extra baseline: 1.9 kWh a day in summer and
                2.6 kWh a day in winter. It fits best when evening use is light and most of your kWh sit within baseline.
              </p>

              <h2>TOU-D-5-8PM: a shorter window at a higher price</h2>
              <p>
                TOU-D-5-8PM trims the window to three hours and moves the off-peak and super off-peak periods an hour later. The
                price for that is the highest listed on-peak rate at SCE, 74 cents on summer weekdays and 60 cents on winter
                evenings. It can work for a household that is out until 8 p.m. every weekday and does not cook, run air
                conditioning or charge a car until afterward. If 4 to 5 p.m. or 8 to 9 p.m. is when your use happens, the plan
                costs you nothing extra; if 5 to 8 is, it costs a lot.
              </p>

              <h2>TOU-D-PRIME: the EV, battery and heat pump plan</h2>
              <p>
                TOU-D-PRIME is for owners or lessees of an electric vehicle or plug-in hybrid, households with a residential
                battery, and homes that heat water or space with an electric heat pump. You confirm that you qualify when you
                enroll. It has no baseline credit, but its off-peak and super off-peak prices, 26 cents in summer and 24 cents in
                winter, are the lowest on any SCE plan. The weekday on-peak price, 59 cents, is about the same as TOU-D-4-9PM&apos;s.
              </p>
              <p>
                <strong>Solar customers.</strong> The CPUC requires customers on the net billing tariff, which SCE calls the Solar
                Billing Plan, to take service on TOU-D-PRIME. Customers still on NEM 2.0 must be on a time-of-use rate, though the CPUC
                does not name TOU-D-PRIME for them. How SCE credits exports is covered in{' '}
                <Link href="/blog/sce-settlement-bill" className={guideLink}>
                  the SCE annual settlement bill guide
                </Link>
                .
              </p>

              <h2>SCE EV rates: charging a car on TOU-D-PRIME</h2>
              <p>
                SCE markets TOU-D-PRIME as its electric vehicle plan and says charging in the lowest-priced hours is roughly like a
                gas driver paying less than $2 a gallon. The cheapest charging window depends on the season. In summer, anything
                outside 4 to 9 p.m. is 26 cents, so overnight charging works. In winter, 8 a.m. to 4 p.m. and 9 p.m. to 8 a.m. are
                both 24 cents. As a rough guide, and our own arithmetic, a car that takes 300 kWh a month at 24 cents adds about
                $72 to the bill; the same 300 kWh at the 56-cent winter mid-peak price would add about $168.
              </p>
              <p>
                SCE also says customers who install a second meter used only for EV charging receive a monthly EV Meter Credit
                that offsets that meter&apos;s basic charges. A second meter adds installation cost, so compare it with simply
                moving the whole home to TOU-D-PRIME. For EV charging on other utilities, see{' '}
                <Link href="/blog/pge-ev-rates" className={guideLink}>
                  PG&amp;E&apos;s EV rate plans
                </Link>{' '}
                and{' '}
                <Link href="/blog/ladwp-ev-charging-rates" className={guideLink}>
                  LADWP&apos;s EV discount
                </Link>
                .
              </p>

              <h2>How much does SCE charge per kWh?</h2>
              <p>
                By plan and hour, from 24 to 74 cents in the table above. The tiered Schedule D charges 30 cents per kWh up to
                your baseline allocation and 40 cents above it, per SCE&apos;s page labeled current as of June 1, 2026; the sample
                range SCE shows is 0 to 384 kWh in Tier 1. As a single figure, the CPUC Public Advocates Office puts SCE&apos;s
                residential average at 34.4 cents per kWh in June 2026, averaged over every plan and customer and excluding the
                California Climate Credit. Why that average moved, including the October 2025 rate case increase, is in{' '}
                <Link href="/blog/sce-rate-increase-2026" className={guideLink}>
                  SCE&apos;s rate increase history
                </Link>
                .
              </p>

              <h2>The Base Services Charge sits on top of every plan</h2>
              <p>
                Since November 2025, every SCE plan above adds a Base Services Charge: $24.15 a month for most households, about
                $0.80 a day, $12.08 for FERA customers and qualifying deed-restricted affordable housing, and $6.00 for CARE
                customers. SCE says it replaced the old Basic Charge and cut the price of each kWh by about 10%. It does not
                change with usage or plan, and solar customers pay it too. The full list of SCE schedules, including CARE, FERA
                and closed legacy plans such as TOU-D-A and TOU-D-B, is in{' '}
                <Link href="/blog/sce-rate-schedules" className={guideLink}>
                  SCE rate schedules explained
                </Link>
                .
              </p>

              <h2>Community choice customers</h2>
              <p>
                If a community choice provider supplies your power, SCE still delivers it and bills you, but the generation part
                of your price comes from the provider. SCE publishes joint rate comparisons for each provider that show the
                combined price; use those rather than the bundled prices above, or you will count generation twice.
              </p>

              <h2>How to choose and switch</h2>
              <ol>
                <li>Find your current plan name on your bill and note whether SCE or a community choice provider supplies generation.</li>
                <li>Download a year of hourly usage from your SCE account and see how much falls between 4 and 9 p.m. and between 5 and 8 p.m.</li>
                <li>Check how much of your usage sits within your baseline allocation, since only TOU-D-4-9PM and TOU-D-5-8PM credit it.</li>
                <li>Add loads you expect, such as an EV, heat pump or pool pump, which can make TOU-D-PRIME the better fit.</li>
                <li>Run SCE&apos;s Rate Plan Comparison tool, and switch only when you are sure, because the choice holds for 12 months.</li>
              </ol>

              <h2>Where solar and a battery fit</h2>
              <p>
                On TOU-D-PRIME, the expensive hours are 4 to 9 p.m., after rooftop solar output falls off. Panels alone cover the
                cheap midday hours; a battery that carries midday solar into the evening is what avoids the 56-to-59-cent
                window. Ask any proposal to show your remaining SCE bill on TOU-D-PRIME, including the Base Services Charge. If
                your bill already looks wrong, start with the{' '}
                <Link href="/blog/why-is-my-sce-bill-so-high" className={guideLink}>
                  SCE high-bill checklist
                </Link>
                , and compare hours across utilities in{' '}
                <Link href="/blog/electricity-peak-hours-california" className={guideLink}>
                  California electricity peak hours by utility
                </Link>
                . For the other large utilities, see{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use rates
                </Link>{' '}
                and{' '}
                <Link href="/blog/sdge-time-of-use-rates-2026" className={guideLink}>
                  SDG&amp;E time-of-use rates
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

            <SolarInquiry topic="SCE time-of-use rates and solar comparison" utility="sce" heading="Compare a Solar Plan With Your SCE Bill" />
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
