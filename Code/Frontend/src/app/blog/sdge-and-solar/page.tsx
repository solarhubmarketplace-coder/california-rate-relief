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
import { HubUpLink } from '@/components/growth/HubUpLink';

const path = '/blog/sdge-and-solar';
const url = `https://ratereliefca.com${path}`;
const title = 'SDG&E and Solar: Solar Billing Plan, EV-TOU-5 and Credits';
const h1 = 'SDG&E and Solar in 2026: The Solar Billing Plan, the EV-TOU-5 Rate and How Export Credits Work';
const description =
  'New SDG&E solar goes on the Solar Billing Plan and EV-TOU-5 rate. See 2026 import prices, what exports earn by hour, and what stays on the monthly bill.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'sdgeSolarBillingPlan',
  'sdgeSolarBill',
  'sdgeExportPricing',
  'sdgeEvTou5Aug2026',
  'sdgePricingPlans',
  'sdgeNemBill',
  'sdgeHowRatesSet',
  'cpucNbt',
  'paoQ2_2026',
);

const faqs = [
  {
    question: 'How does solar work with SDG&E?',
    answer:
      "Your panels power the home first. Extra power goes to SDG&E's grid and earns export credits; power you draw from the grid is billed on your rate plan. Since April 15, 2023, new solar customers of California's big three utilities take service on the net billing tariff, which SDG&E calls the Solar Billing Plan. SDG&E puts residential Solar Billing Plan customers on its EV-TOU-5 rate and bills monthly, with a true-up every 12 months.",
  },
  {
    question: 'What rate plan do SDG&E solar customers have to use?',
    answer:
      "EV-TOU-5 for residential customers on the Solar Billing Plan. The CPUC names EV-TOU-5 as SDG&E's required rate for net billing customers. From August 1, 2026 it charges 80.205 cents per kWh on summer on-peak (4 to 9 p.m.), 49.627 cents off-peak and 13.090 cents super off-peak, plus the daily Base Services Charge.",
  },
  {
    question: 'How much does SDG&E pay for solar exports?',
    answer:
      "It depends on the hour and month. In SDG&E's 2026 export-rate file, a weekday noon export earns about 0.4 cents per kWh in April and about 6.1 cents in August, while a weekday 6 p.m. export in August earns about $1.07. The credits come in two parts, generation and delivery, and each can only offset the matching import charge.",
  },
  {
    question: 'Do SDG&E solar customers still get a bill?',
    answer:
      "Yes, every month. SDG&E says Solar Billing Plan bills are due monthly. Export credits roll forward to later months, but the Base Services Charge and other non-nettable charges cannot be paid with export credits.",
  },
  {
    question: 'What happens when SDG&E NEM ends after 20 years?',
    answer:
      'CPUC rules let NEM 2.0 customers stay on that tariff for 20 years from their interconnection date. SDG&E says accounts that reach the end of the 20-year legacy period transition to the Solar Billing Plan, which means the EV-TOU-5 rate and hourly export credits.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function SdgeAndSolarPage() {
  return (
    <PublicLayout breadcrumbLabel="SDG&E and solar" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="SDG&E and solar" kicker="SDG&E · Solar" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                Solar you add in SDG&amp;E territory today goes on the Solar Billing Plan, California&apos;s net billing tariff,
                and SDG&amp;E puts residential Solar Billing Plan customers on its EV-TOU-5 rate. Power you import is billed at
                EV-TOU-5 prices; power you export earns credits that change by the hour, from well under a cent at spring middays
                to about a dollar on some August evenings. The bill comes every month.
              </p>
              <HubUpLink path="/blog/sdge-and-solar" />
              <p>
                Everything here is from SDG&amp;E&apos;s Solar Billing Plan pages, its EV-TOU-5 rate table effective August 1,
                2026, its 2026 hourly export-rate file and the CPUC&apos;s net billing page, all checked September 23, 2026. SDG&amp;E
                also has the highest residential average rate of California&apos;s three big utilities, 45.5 cents per kWh in June
                2026 per the CPUC Public Advocates Office, which is why the value of power you use yourself runs higher here than
                elsewhere.
              </p>

              <QuickAnswer label="Three things to know">
                <p>
                  <strong>1. The rate is set for you.</strong> Residential Solar Billing Plan customers are on EV-TOU-5.{' '}
                  <strong>2. Exports are worth most in the evening.</strong> Midday exports earn a few cents or less; late-summer
                  evening exports earn far more. <strong>3. Some charges never net out.</strong> The Base Services Charge and other
                  non-nettable charges are paid every month no matter how much you export.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="SDG&E solar, 2026"
                  facts={[
                    { label: 'Required residential rate', value: 'EV-TOU-5', note: 'For Solar Billing Plan customers', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucNbt.url } },
                    { label: 'EV-TOU-5 super off-peak', value: '13.090¢/kWh', note: 'Summer; 12.332¢ winter (Aug 1, 2026)', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeEvTou5Aug2026.url } },
                    { label: 'Weekday noon export, April', value: '≈0.4¢/kWh', note: 'Generation plus delivery credit', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeExportPricing.url } },
                    { label: 'Weekday 6 p.m. export, August', value: '≈$1.07/kWh', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeExportPricing.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SDG&E solar comparison" utility="sdge" />
              </div>

              <h2>Which SDG&amp;E solar plan you are on</h2>
              <p>
                There are two groups of SDG&amp;E solar customers. Anyone who applied to interconnect on or after April 15, 2023
                takes service on the net billing tariff, the Solar Billing Plan. Customers who connected earlier under net energy
                metering (NEM 1.0 or 2.0) keep that arrangement for 20 years from their interconnection date, then move to the
                Solar Billing Plan; SDG&amp;E&apos;s Solar Billing Plan page speaks directly to accounts reaching the end of that legacy period. The two plans
                bill differently, so the first step is knowing which one your bill shows. Our guide to{' '}
                <Link href="/blog/how-to-read-sdge-bill" className={guideLink}>
                  reading an SDG&amp;E bill, with or without solar
                </Link>{' '}
                shows where to look.
              </p>

              <h2>EV-TOU-5: what solar customers pay for imports</h2>
              <DataTable
                caption="SDG&E Schedule EV-TOU-5, effective August 1, 2026 (cents per kWh, bundled)"
                columns={['Period', 'Weekday hours', 'Summer', 'Winter']}
                rows={[
                  ['On-peak', '4–9 p.m. (every day)', '80.205¢', '52.383¢'],
                  ['Off-peak', '6–10 a.m., 2–4 p.m., 9 p.m.–midnight', '49.627¢', '46.566¢'],
                  ['Super off-peak', 'Midnight–6 a.m., 10 a.m.–2 p.m. (weekends: midnight–2 p.m.)', '13.090¢', '12.332¢'],
                ]}
                note={<>Source: SDG&amp;E Schedule EV-TOU-5 total rates table, effective August 1, 2026, and SDG&amp;E pricing plans page, checked September 23, 2026. Summer is June 1 to October 31. The plan adds a Base Services Charge of $0.79343 a day ($0.39688 for FERA and qualifying affordable housing).</>}
              />
              <p>
                EV-TOU-5 has the widest price gap of any SDG&amp;E residential plan. Its super off-peak price, about 13 cents, is
                among the cheapest SDG&amp;E electricity a household can buy, while its summer on-peak price, about 80 cents, is
                among the highest. That shape is deliberate: it rewards charging a car or battery overnight or at midday and
                punishes grid use from 4 to 9 p.m. For a solar home, the practical rule is to use or store midday solar and
                avoid importing in the evening.
              </p>

              <h2>What SDG&amp;E pays for exported solar</h2>
              <p>
                Solar Billing Plan exports earn two credits: a generation export credit and a delivery export credit. SDG&amp;E sets
                both for every hour of the year, by month and by weekday or weekend, from the CPUC&apos;s Avoided Cost Calculator.
                SDG&amp;E&apos;s own bill guide is clear that generation credits can only offset generation import charges and
                delivery credits only delivery import charges. The figures below are our reading of SDG&amp;E&apos;s 2026 hourly
                export file, adding the two parts together; the 2026 values are the same for customers without a lock-in and for
                those who applied in 2026.
              </p>
              <DataTable
                caption="SDG&E 2026 export credit per kWh, weekdays (generation plus delivery)"
                columns={['Month', 'Noon', '6 p.m.']}
                rows={[
                  ['January', '6.29¢', '9.97¢'],
                  ['April', '0.41¢', '7.33¢'],
                  ['June', '2.81¢', '8.66¢'],
                  ['July', '5.18¢', '32.39¢'],
                  ['August', '6.07¢', '$1.07'],
                  ['September', '5.46¢', '45.01¢'],
                  ['December', '5.72¢', '9.58¢'],
                ]}
                note={<>Source: SDG&amp;E Solar Billing Plan export pricing, current-year (NBT00) and 2026 vintage (NBT26) files, checked September 23, 2026. Values are hourly averages for non-holiday weekdays. Customers who buy generation from a community choice provider get the generation part from that provider.</>}
              />
              <p>
                Two things follow. Spring and early-summer midday exports are worth almost nothing, often under one cent, while
                the same kWh used at home avoids a 13-to-50-cent purchase. And a few late-summer evening hours are worth far more
                than any other time, which is why a battery that can discharge in August and September evenings is worth
                more under this plan than extra panels that only add midday exports.
              </p>

              <h2>The monthly bill and the true-up</h2>
              <p>
                SDG&amp;E bills Solar Billing Plan customers every month. Each bill charges for imported energy and applies the
                month&apos;s export credits; extra credits roll forward to later months. The Base Services Charge, customer and
                meter charges, non-bypassable charges and other fixed charges are what SDG&amp;E calls non-nettable: export
                credits cannot pay them. After 12 months you receive a true-up bill. If you exported more than you imported over
                the year, SDG&amp;E applies an Annual True-Up Adjustment for credits already given; if you imported more, the
                adjustment is zero. Then the account resets.
              </p>
              <p>
                Legacy NEM customers are billed differently. SDG&amp;E&apos;s NEM statement tracks net charges and credits as a
                running balance to the true-up date, and residential NEM customers may pay the full bill monthly or only part of
                it. They also moved to the Base Services Charge, which export credits do not offset. How that plan
                credits exports and how long it lasts are covered in{' '}
                <Link href="/blog/sdge-net-metering" className={guideLink}>
                  SDG&amp;E net metering (NEM 2.0) rules
                </Link>
                .
              </p>

              <h2>Solar credits and the 9-year lock-in</h2>
              <p>
                The CPUC guarantees the original customer who interconnects under the net billing tariff that tariff for nine
                years, and SDG&amp;E publishes separate export-rate sets for customers who applied in 2025 and in 2026 that qualify
                for 9-year lock-in rates. The CPUC&apos;s summary of the extra &ldquo;ACC Plus&rdquo; credit for customers who
                interconnect before the end of 2027 names residential PG&amp;E and SCE customers; it does not list SDG&amp;E. Ask
                any proposal which export-rate set it used.
              </p>

              <h2>Is solar worth it with SDG&amp;E?</h2>
              <p>
                SDG&amp;E&apos;s high retail prices make power you use yourself valuable, and the low midday export credits make
                power you send back at noon worth little. So the economics hinge on self-use and on the evening: a system sized to
                your daytime load, paired with a battery that covers 4 to 9 p.m., avoids the most expensive imports. A proposal
                should show your remaining SDG&amp;E bill on EV-TOU-5, including the Base Services Charge, not just a production
                estimate. For the wider comparison, read{' '}
                <Link href="/blog/nem-2-vs-nem-3-california" className={guideLink}>
                  NEM 2.0 versus the net billing tariff
                </Link>
                ,{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={guideLink}>
                  battery payback under net billing
                </Link>{' '}
                and the local numbers in{' '}
                <Link href="/solar-savings/san-diego" className={guideLink}>
                  San Diego solar savings
                </Link>
                .
              </p>
              <p>
                For SDG&amp;E&apos;s non-solar plans and hours, see{' '}
                <Link href="/blog/sdge-time-of-use-rates-2026" className={guideLink}>
                  SDG&amp;E time-of-use rates and peak hours
                </Link>
                ; for how SDG&amp;E&apos;s prices got here, see{' '}
                <Link href="/blog/sdge-rate-increase-2026" className={guideLink}>
                  SDG&amp;E&apos;s rate increase history
                </Link>
                ; and for which rate plan solar customers use at each utility, see{' '}
                <Link href="/blog/solar-rate" className={guideLink}>
                  solar rates in California
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

            <SolarInquiry topic="SDG&E solar comparison" utility="sdge" heading="Compare a Solar Plan With Your SDG&E Bill" />
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
