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

const path = '/blog/how-to-lower-pge-bill';
const url = `https://ratereliefca.com${path}`;
const title = 'How to Lower Your PG&E Bill: Plans, Hours and Discounts';
const h1 = 'How to Lower Your PG&E Bill in 2026: Peak Hours, the Right Rate Plan, Baseline and Discounts';
const description =
  'Lower a PG&E bill by moving use out of 4–9 p.m., picking the right plan, staying near baseline and claiming CARE, FERA or Medical Baseline. 2026 prices.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'pgeWaysToLower',
  'pgeResRatesCurrent',
  'pgeBaseline',
  'pgeTouPlans',
  'pgeFinancialAssistance',
  'pgeMedicalBaselineProgram',
  'pgeBudgetBilling',
  'pgeSolarBill',
  'cpucClimateCredit',
  'cpucNbt',
);

const faqs = [
  {
    question: 'What is the fastest way to lower a PG&E bill?',
    answer:
      "Move usage out of 4 to 9 p.m. if you are on a time-of-use plan, and check that you are on the right plan. On E-TOU-C in summer, a kWh at 6 p.m. costs 52.240 cents and a kWh at 1 p.m. costs 39.940 cents, from PG&E's March 2026 rate table. If your household qualifies, CARE or FERA takes 35% or 18% off, which is larger than most behavior changes.",
  },
  {
    question: 'Which PG&E rate plan is cheapest?',
    answer:
      "There is no single answer; it depends on when and how much you use. E-TOU-C credits usage within baseline and suits light evening users. E-TOU-D has a shorter, weekday-only peak and suits heavier users. EV2-A has the lowest off-peak price, 22.558 cents, for homes with an EV, battery or heat pump. PG&E's rate analysis tool runs your own usage through each plan.",
  },
  {
    question: 'Can solar lower my PG&E bill?',
    answer:
      "It can lower the energy portion, but not all of it. PG&E says the Base Services Charge, about $24 a month for most customers, cannot be offset by solar generation credits, and new solar customers are placed on the E-ELEC rate under the CPUC's net billing tariff, where exported power usually earns less than imported power costs. A battery that covers 4 to 9 p.m. is often what makes the difference.",
  },
  {
    question: 'Does Budget Billing lower my PG&E bill?',
    answer:
      'No. Budget Billing averages your costs over 12 to 13 months so the payment is steadier, but you still pay for all the energy you use. It is not available to net energy metering customers.',
  },
  {
    question: 'How do I reduce my PG&E gas bill?',
    answer:
      "Heating is usually the largest winter gas load, so sealing and insulating, which PG&E lists among its ways to lower a bill, matters most. CARE takes 20% or more off gas, Medical Baseline adds about 25 therms a month at the lowest price for qualifying households, and the 2026 California Climate Credit on PG&E gas bills was $46.26 in April.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function HowToLowerPgeBillPage() {
  return (
    <PublicLayout breadcrumbLabel="How to lower a PG&E bill" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="How to lower a PG&E bill" kicker="PG&E · Billing" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                The biggest levers on a PG&amp;E bill are when you use power, which plan you are on, and whether you qualify for a
                discount. Moving use out of 4 to 9 p.m. cuts the price of each kWh by roughly a quarter on E-TOU-C in summer and
                by more than half on EV2-A. CARE takes 35% or more off electricity for income-qualified homes, and FERA takes
                18%.
              </p>
              <HubUpLink path="/blog/how-to-lower-pge-bill" />
              <p>
                This page is specific to PG&amp;E: its plans, its baseline allowances and its programs, with prices from PG&amp;E&apos;s
                residential rate table for March 1, 2026 onward, checked September 23, 2026. For advice that applies to every
                California utility, see{' '}
                <Link href="/blog/how-to-lower-electric-bill-california" className={guideLink}>
                  how to lower an electric bill in California
                </Link>
                . If your bill jumped and you do not know why, diagnose it first with{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  why a PG&amp;E bill runs high
                </Link>
                .
              </p>

              <QuickAnswer label="The order to work in">
                <p>
                  <strong>1.</strong> Claim any discount you qualify for (CARE, FERA, Medical Baseline). <strong>2.</strong> Check
                  your plan against your usage with PG&amp;E&apos;s rate analysis tool. <strong>3.</strong> Shift flexible loads out
                  of 4 to 9 p.m. <strong>4.</strong> Cut the loads that push you far above baseline. <strong>5.</strong> Only then
                  price solar or a battery against what is left.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="PG&E prices that decide your bill (from March 1, 2026)"
                  facts={[
                    { label: 'E-TOU-C summer, 4–9 p.m.', value: '52.240¢/kWh', note: 'Off-peak 39.940¢', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'E-1 above baseline', value: '40.702¢/kWh', note: 'Within baseline 32.561¢', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'CARE discount', value: '35%+ electric', note: 'FERA 18%', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeFinancialAssistance.url } },
                    { label: 'Base Services Charge', value: '$0.79343/day', note: 'Lower income tiers $0.39688 and $0.19713', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="Lower PG&E bill" utility="pge" />
              </div>

              <h2>1. Claim the discounts first</h2>
              <p>
                No habit change beats a percentage off the whole bill. PG&amp;E lists CARE at 35% or more off electricity and 20%
                or more off gas, and FERA at 18% off, for households under the income limits. Both also move you to a lower Base
                Services Charge tier. Eligibility and how to apply are in{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  PG&amp;E&apos;s CARE and FERA discounts
                </Link>
                .
              </p>
              <p>
                <strong>Medical Baseline</strong> is not income-based. If someone at home needs power for a qualifying condition
                or device, PG&amp;E adds roughly 500 kWh of electricity and 25 therms of gas a month at your plan&apos;s lowest price,
                or a 12% discount on E-ELEC, E-TOU-D and EV2-A. PG&amp;E also runs Energy Savings Assistance (ESA) home upgrades for
                income-qualified customers. If you are already behind, see{' '}
                <Link href="/blog/help-with-pge-bill" className={guideLink}>
                  help with a PG&amp;E bill
                </Link>{' '}
                for payment plans and past-due assistance.
              </p>

              <h2>2. Get on the plan that fits your hours</h2>
              <DataTable
                caption="PG&E residential plans compared, from March 1, 2026 (cents per kWh, bundled)"
                columns={['Plan', 'Expensive hours', 'Summer peak / off-peak', 'Winter peak / off-peak', 'Fits when']}
                rows={[
                  ['E-TOU-C', '4–9 p.m. every day', '52.240 / 39.940', '39.757 / 36.757', 'Usage stays near baseline; 8.140¢ credit on baseline kWh'],
                  ['E-TOU-D', '5–8 p.m. weekdays', '47.708 / 34.212', '38.747 / 34.886', 'Heavier use, busy weekends; no baseline credit'],
                  ['EV2-A', '4–9 p.m. every day', '53.809 / 22.558', '41.099 / 22.558', 'EV, battery or heat pump; charge after midnight'],
                  ['E-ELEC', '4–9 p.m. every day', '55.214 / 33.358', '32.063 / 28.468', 'Heat pump or battery; required for new solar'],
                  ['E-1 (tiered)', 'None; priced by volume', '32.561 in baseline, 40.702 above', 'Same', 'Cannot shift use to other hours'],
                ]}
                note={<>Source: PG&amp;E residential rate table, March 1, 2026 to present, checked September 23, 2026. EV2-A and E-ELEC also have part-peak prices from 3 to 4 p.m. and 9 p.m. to midnight. Every plan adds the daily Base Services Charge.</>}
              />
              <p>
                PG&amp;E&apos;s own advice is to make sure you are on the best rate plan for your needs, and its rate analysis tool
                compares plans using your actual usage. Pull a year of hourly data from your account before you switch; a plan
                that wins in July can lose in January. Full plan details are in{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E peak hours and time-of-use rates
                </Link>
                , the tiered option in{' '}
                <Link href="/blog/pge-tier-rates" className={guideLink}>
                  PG&amp;E tier rates on E-1
                </Link>{' '}
                and EV options in{' '}
                <Link href="/blog/pge-ev-rates" className={guideLink}>
                  PG&amp;E EV rate plans
                </Link>
                .
              </p>

              <h2>3. Move flexible loads out of 4 to 9 p.m.</h2>
              <p>
                On E-TOU-C, a summer kWh costs 12.3 cents more between 4 and 9 p.m. than at any other hour. On EV2-A the gap is 31
                cents. Our own arithmetic for one home: 600 kWh a month in summer on E-TOU-C with 120 kWh in the peak window.
                Moving 60 kWh of that, such as a dishwasher, laundry and pre-cooling, to earlier in the day saves about $7.38 a
                month before any baseline credit. The same shift on EV2-A saves about $18.75.
              </p>
              <p>
                The loads that move easily are the ones with timers: EV charging, dishwashers, washers and dryers, pool pumps and
                electric water heaters. Air conditioning moves partly, by cooling the house in early afternoon and letting it
                drift up during the peak. If you are on E-TOU-D, the window is shorter, 5 to 8 p.m., and weekends are off-peak
                all day, so weekend chores already land in cheap hours.
              </p>

              <h2>4. Know your baseline allowance</h2>
              <p>
                Baseline is the daily amount of electricity PG&amp;E prices lowest, set by your territory, season and whether the
                home heats with electricity. On E-1, usage above baseline costs 40.702 cents instead of 32.561, about 25% more.
                On E-TOU-C, baseline usage gets an 8.140-cent credit. The allowance varies widely. For homes without electric
                heat, summer baseline ranges from 5.9 kWh a day in territory Z to 19.2 kWh a day in territory W; the winter range
                is 7.5 to 11.1 kWh a day. Your territory letter is printed on your bill.
              </p>
              <DataTable
                caption="PG&E daily baseline allowance, individually metered homes without electric heat (kWh per day)"
                columns={['Territory', 'Summer (Jun–Sep)', 'Winter (Oct–May)']}
                rows={[
                  ['P', '13.5', '11.0'],
                  ['R', '17.7', '10.4'],
                  ['S', '15.0', '10.2'],
                  ['T', '6.5', '7.5'],
                  ['W', '19.2', '9.8'],
                  ['X', '9.8', '9.7'],
                  ['Z', '5.9', '7.8'],
                ]}
                note={<>Source: PG&amp;E residential baseline territories and quantities, effective June 1, 2022 to present (basic electric, Code B), checked September 23, 2026. Homes with permanent electric heat (Code H) get larger allowances; Medical Baseline adds more.</>}
              />
              <p>
                Multiply your allowance by the days in your billing cycle to see how much of your usage is getting the low price.
                A home in territory X using 20 kWh a day in summer is paying the higher price on about half of it.
              </p>

              <h2>5. Use less where the bill says it goes</h2>
              <p>
                PG&amp;E&apos;s own list starts with understanding your bill and insulating your home to keep conditioned air in. Its
                Home Energy Checkup shows where you could use less, hourly usage in your account shows which hours are expensive,
                and bill forecast alerts warn you when a bill is trending higher. Start with the biggest loads in your data, which
                in summer is usually cooling and in winter heating, rather than small plug loads.
              </p>

              <h2>What will not lower the bill</h2>
              <p>
                <strong>Budget Billing</strong> smooths payments using a 12-to-13-month average but does not reduce the total.{' '}
                <strong>The Base Services Charge</strong>, $0.79343 a day for most customers, does not change with usage; only the
                income tiers lower it. And <strong>turning things off during off-peak hours</strong> saves less than the same
                change at 6 p.m. The California Climate Credit helps but is fixed: in 2026 PG&amp;E electric customers receive
                $36.18 on the August bill and $36.18 on the September bill.
              </p>

              <h2>Where solar and a battery fit</h2>
              <p>
                Solar can cut the energy part of a PG&amp;E bill, but new solar customers are placed on E-ELEC under the CPUC&apos;s
                net billing tariff, exported power usually earns less than imported power costs, and PG&amp;E says the Base
                Services Charge cannot be offset by generation credits. So the value comes from power you use yourself, and a
                battery that covers 4 to 9 p.m. is often what makes the numbers work. Before any proposal, read{' '}
                <Link href="/blog/solar-rate" className={guideLink}>
                  what rate solar customers pay in California
                </Link>
                , and to see where each charge sits on your bill, read{' '}
                <Link href="/blog/how-to-read-pge-bill" className={guideLink}>
                  how to read a PG&amp;E bill
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

            <SolarInquiry topic="Lower PG&E bill" utility="pge" variant="bill" heading="Compare a Solar Plan With Your PG&E Bill" />
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
