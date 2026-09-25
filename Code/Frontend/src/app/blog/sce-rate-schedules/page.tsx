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

const path = '/blog/sce-rate-schedules';
const url = `https://ratereliefca.com${path}`;
const title = 'SCE Rate Schedules 2026: Every Residential Plan Explained';
const h1 = 'SCE Rate Schedules: Every Residential Plan, What It Costs and Who Qualifies';
const description =
  'Every SCE residential rate schedule in one place: Schedule D, TOU-D 4-9PM, 5-8PM and PRIME, CARE, FERA and solar, with June 2026 prices and who qualifies.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources('sceTou', 'sceTiered', 'sceBsc', 'sceRateOptions', 'sceTariffBooks', 'sceHistorical', 'sceNemBill', 'sceRateCompare', 'cpucCareFera', 'paoQ2_2026');

const faqs = [
  {
    question: 'What rate schedule am I on with SCE?',
    answer:
      "SCE says your current rate schedule is printed at the top of your bill. Unless you are on a closed legacy option, it will be one of the three open time-of-use options, TOU-D-4-9PM, TOU-D-5-8PM or TOU-D-PRIME, or the tiered Schedule D. A D-CARE or D-FERA listing means you also get an income-qualified discount on top of that plan.",
  },
  {
    question: 'What is SCE Schedule D?',
    answer:
      "Schedule D is SCE's tiered, non-time-of-use residential rate. As of June 1, 2026, SCE lists 30 cents per kWh up to your baseline allowance and 40 cents above it, plus the 79-cent daily Base Services Charge. Your baseline depends on your region and season, from 11.4 to 45.0 kWh a day in summer.",
  },
  {
    question: 'Which SCE rate plan is cheapest?',
    answer:
      "It depends on when you use power. TOU-D-PRIME has the lowest off-peak prices, 24 to 26 cents, but no baseline credit and requires an EV, home battery or heat pump. TOU-D-4-9PM and 5-8PM give a 10-cent baseline credit. SCE's Rate Plan Comparison tool runs your own usage through each plan; remember a switch to a TOU plan locks you in for 12 months.",
  },
  {
    question: 'Which SCE rate schedules are closed?',
    answer:
      "TOU-D-T closed to new customers on March 1, 2019, and TOU-D Options A and B are limited to customers who meet SCE's Discontinued TOU Period criteria. The original NEM schedule closed on July 1, 2017. Schedules DMS-1 and DMS-2 are closed to buildings and parks built after their cutoff dates.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function SceRateSchedulesPage() {
  return (
    <PublicLayout breadcrumbLabel="SCE rate schedules" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="SCE rate schedules" kicker="SCE · Rate schedules" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                SCE has one tiered residential schedule, Schedule D, and three open time-of-use options: TOU-D-4-9PM,
                TOU-D-5-8PM and TOU-D-PRIME. Discounts such as D-CARE and D-FERA, and solar schedules, sit on top of those.
                Your schedule is printed at the top of your bill. As of June 1, 2026, Schedule D charged 30 cents per kWh up
                to baseline and 40 cents above.
              </p>
              <p>
                This page lists every residential schedule SCE describes, what each costs where SCE publishes a price, who can
                use it and which ones are closed. For how these prices moved over time, see the{' '}
                <Link href="/blog/sce-rate-increase-2026" className={guideLink}>
                  SCE rate increase history
                </Link>
                ; for the peak-hour detail on the TOU options, the{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  SCE time-of-use guide
                </Link>
                ; and for every utility at once, the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="SCE residential schedules at a glance"
                  facts={[
                    { label: 'Open main schedules', value: '4', note: 'D, TOU-D-4-9PM, TOU-D-5-8PM, TOU-D-PRIME', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceTou.url } },
                    { label: 'Schedule D, June 1, 2026', value: '30¢ / 40¢', note: 'Up to baseline / above baseline', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceTiered.url } },
                    { label: 'Base Services Charge, all plans', value: '$0.79/day', note: '$12/mo FERA, $6/mo CARE', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceBsc.url } },
                    { label: 'SCE residential average, June 1, 2026', value: '34.4¢/kWh', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SCE rate schedule check" utility="sce" />
              </div>

              <h2>The four open schedules and their 2026 prices</h2>
              <p>
                SCE publishes rounded prices for customers who buy both delivery and generation from SCE. If a community
                choice provider or Direct Access supplier sells you power, your generation price differs. Summer is June
                through September; winter is October through May.
              </p>
              <DataTable
                caption="SCE open residential schedules, prices as SCE lists them (cents per kWh)"
                columns={['Schedule', 'How it prices', 'Summer', 'Winter', 'Baseline credit']}
                rows={[
                  ['D (tiered)', 'By amount used', 'Tier 1 30¢; Tier 2 40¢', 'Same', 'n/a; Tier 1 is the baseline'],
                  ['TOU-D-4-9PM', 'By hour; peak 4–9 p.m.', 'Weekday peak 58¢; weekend 4–9 p.m. 46¢; other hours 34¢', '4–9 p.m. 51¢; 8 a.m.–4 p.m. 33¢; other 37¢', '10¢ per kWh'],
                  ['TOU-D-5-8PM', 'By hour; peak 5–8 p.m.', 'Weekday peak 74¢; weekend 5–8 p.m. 54¢; other hours 34¢', '5–8 p.m. 60¢; 8 a.m.–5 p.m. 32¢; other 38¢', '10¢ per kWh'],
                  ['TOU-D-PRIME', 'By hour; peak 4–9 p.m.', 'Weekday peak 59¢; weekend 4–9 p.m. 40¢; other hours 26¢', '4–9 p.m. 56¢; other hours 24¢', 'None'],
                ]}
                note={<>Sources: SCE Tiered Rate Plan page (rates as of June 1, 2026) and Time-of-Use Residential Rate Plans page, both checked September 23, 2026. All four add the Base Services Charge.</>}
              />
              <p>
                <strong>Schedule D</strong> covers individually metered homes, from houses to condos, apartments and mobile
                homes. Every billing period starts at the Tier 1 price, and usage past your baseline allowance moves to Tier 2.
                SCE&apos;s rate summary adds that, since January 1, 2017, use above 400% of baseline is billed at a High Usage
                Charge.
              </p>
              <p>
                <strong>TOU-D-4-9PM and TOU-D-5-8PM</strong> both give a 10-cent-per-kWh baseline credit up to your monthly
                baseline allowance; SCE&apos;s example is a 200 kWh allowance earning a $20 credit. Homes that attest to having a
                heat pump water heater get extra baseline on these two plans, 1.9 kWh a day in summer and 2.6 in winter for a
                basic allowance.
              </p>
              <p>
                <strong>TOU-D-PRIME</strong> is for households with an EV or plug-in hybrid, a home battery, or an electric heat
                pump for water or space heating, and you must confirm the technology when you enroll. It has the lowest
                off-peak prices and no baseline credit. Solar Billing Plan customers are required to be on TOU-D-PRIME. SCE&apos;s
                rate summary also says a separately metered EV charger can now be served on a TOU-D schedule, with a meter
                credit.
              </p>

              <h2>Baseline: the allowance behind Tier 1 and the credit</h2>
              <p>
                Baseline is the amount of electricity the CPUC sets for essential use, figured per day by climate region,
                season and whether the home is all-electric. SCE multiplies the daily figure by the days in the billing period.
                In summer, basic daily allowances run from 11.4 kWh in cool region 6 to 45.0 kWh in hot region 15; SCE lists
                regions 13, 14 and 15 as hot, 5, 9 and 10 as moderate and 6, 8 and 16 as cool. Medical Baseline customers get
                16.5 kWh a day more. The full table is in our{' '}
                <Link href="/blog/average-kwh-per-day-california" className={guideLink}>
                  California kWh-per-day guide
                </Link>
                .
              </p>

              <h2>Discount and add-on schedules</h2>
              <DataTable
                caption="SCE residential discount and optional schedules"
                columns={['Schedule', 'What it does', 'Who qualifies']}
                rows={[
                  ['D-CARE', 'At least 30% off (SCE); 30–35% electric discount per the CPUC; $6/month Base Services Charge', 'Household income at or below 200% of federal poverty guidelines, or enrolled in a qualifying program'],
                  ['D-FERA', '18% off; $12/month Base Services Charge', 'Income above the CARE limit and at or below 250% of federal poverty guidelines; not with CARE'],
                  ['Medical Baseline', '16.5 kWh/day more at the baseline price', 'Household member needs life-support or essential medical equipment, or has a qualifying illness'],
                  ['D-SDP (Summer Discount Plan)', 'Bill discount for letting SCE cycle central air conditioning during events', 'Single-family homes with central AC and a load-control device; not Medical Baseline AC'],
                  ['CPP (Critical Peak Pricing)', 'Summer discount in exchange for much higher prices during event hours', 'Bundled customers with an interval or SmartConnect meter; not Medical Baseline'],
                  ['ESC-OO', 'Keeps a non-communicating meter', 'Anyone who declines a SmartConnect meter; one-time fee plus a monthly fee for three years'],
                ]}
                note={<>Sources: SCE Electric Rate Options summary; SCE Base Services Charge page; CPUC CARE/FERA page. Checked September 23, 2026. Base Services Charge amounts are SCE&apos;s approximate monthly figures.</>}
              />

              <h2>Closed and legacy schedules</h2>
              <ul>
                <li><strong>TOU-D-T</strong> closed to new customers on March 1, 2019. It had a noon-to-6 p.m. weekday peak and two levels, split at 130% of baseline.</li>
                <li><strong>TOU-D Options A and B</strong> are limited to customers who meet SCE&apos;s Discontinued TOU Period criteria, including those already on them on March 1, 2019. Their weekday peak runs 2 to 8 p.m.</li>
                <li><strong>NEM</strong>, the original net metering schedule, closed to new customers on July 1, 2017. NEM-ST, its successor, requires residential customers to be on a time-of-use rate, with some exceptions.</li>
                <li><strong>DMS-1</strong> (submetered apartments) is closed to buildings constructed after December 7, 1981, and <strong>DMS-2</strong> (submetered mobilehome parks) to parks begun after January 1, 1997. <strong>DM</strong> serves single-meter apartment buildings and duplexes built on or before June 13, 1978, residential hotels and qualifying RV parks, and <strong>DMS-3</strong> serves submetered qualifying RV parks.</li>
              </ul>

              <h2>Solar schedules</h2>
              <p>
                Solar customers keep a main schedule and add a solar one. Older systems are on NEM or NEM-ST, with a monthly
                bill for delivery and nonbypassable charges and, on the annual billing option, the energy balance settled once
                a year, explained in our{' '}
                <Link href="/blog/sce-settlement-bill" className={guideLink}>
                  SCE annual settlement bill guide
                </Link>
                . Newer systems are on the Solar Billing Plan and TOU-D-PRIME. How the two credit exports differently is in{' '}
                <Link href="/blog/net-billing-vs-net-metering-california" className={guideLink}>
                  net billing vs. net metering
                </Link>
                . Multifamily and affordable-housing solar uses virtual schedules: NEM-V and NEM-V-ST, SOMAH-VNM and MASH-VNM.
              </p>

              <h2>Where to read the official tariff sheets</h2>
              <p>
                SCE&apos;s Rates &amp; Pricing Choices page links the full tariff books, with the legal text and every charge
                for each schedule, and its historical page keeps schedules going back about ten years. Those are the documents
                to check if a bill does not match a summary like this one. Before switching plans, run SCE&apos;s Rate Plan
                Comparison with your own usage, and remember SCE says a customer who moves to a time-of-use plan cannot switch
                again for 12 months. If a high bill is what brought you here, start with{' '}
                <Link href="/blog/why-is-my-sce-bill-so-high" className={guideLink}>
                  why an SCE bill runs high
                </Link>
                , and to compare SCE with its neighbors see{' '}
                <Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className={guideLink}>
                  PG&amp;E vs. SCE vs. SDG&amp;E rates
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

            <SolarInquiry utility="sce" topic="SCE rate schedules" heading="Compare a Solar Plan With Your SCE Rate" />
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
