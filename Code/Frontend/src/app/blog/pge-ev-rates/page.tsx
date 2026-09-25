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

const path = '/blog/pge-ev-rates';
const url = `https://ratereliefca.com${path}`;
const title = 'PG&E EV Rates 2026: EV2-A, EV-B and E-ELEC Prices';
const h1 = 'PG&E EV Rate Plans in 2026: EV2-A, EV-B and E-ELEC Compared';
const description =
  'PG&E’s EV2-A off-peak rate is 22.558¢/kWh from midnight to 3 p.m. Compare EV2-A, the separately metered EV-B and E-ELEC, with 2024–2026 price history.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'pgeResRatesCurrent',
  'pgeEv2Tariff',
  'pgeEvBTariff',
  'pgeEelecTariff',
  'pgeEvPlans',
  'pgeResRatesJan2026',
  'pgeResRatesSep2025',
  'pgeResRatesMar2025',
  'pgeResRatesJan2024',
  'pgeBsc',
  'pgeFinancialAssistance',
  'cpucNbt',
  'pgeTariffIndex',
);

const faqs = [
  {
    question: 'What is the PG&E EV2-A rate?',
    answer:
      "EV2-A is PG&E's whole-home time-of-use plan for households with an electric vehicle, and on a pilot basis a home battery or electric heat pump. From March 1, 2026 it charges 22.558 cents per kWh off-peak (midnight to 3 p.m.), 42.760 cents part-peak in summer and 53.809 cents on summer peak (4 to 9 p.m.), plus the daily Base Services Charge.",
  },
  {
    question: 'What was the PG&E EV2-A off-peak rate in 2025?',
    answer:
      "30.339 cents per kWh from January 1, 2025, then 31.026 cents in summer and 31.027 cents in winter from March 1, and 30.036 cents from September 1 through December 31, 2025, per PG&E's rate tables for each period. It fell to 28.474 cents on January 1, 2026 and to 22.558 cents on March 1, 2026.",
  },
  {
    question: 'Is the PG&E EV2-A off-peak rate still 30 cents per kWh?',
    answer:
      'No. The off-peak price was about 30 cents through 2025 (30.036 cents from September 1 to December 31, 2025) and fell to 28.474 cents on January 1, 2026. Since March 1, 2026 it has been 22.558 cents per kWh, summer and winter, with a daily Base Services Charge added to the bill.',
  },
  {
    question: 'Where is the PG&E EV2-A rate schedule PDF for 2026?',
    answer:
      'EV2-A is Rate A of PG&E Electric Schedule EV2. The current tariff PDF is ELEC_SCHEDS_EV2 (Sch).pdf, linked from PG&E’s Tariffs page; its price sheets show the rates effective March 1, 2026. PG&E’s residential rate table spreadsheet has the same prices on its Electric Vehicle and Technology tab.',
  },
  {
    question: 'How much does PG&E charge to charge an EV at home?',
    answer:
      'It depends on the plan and the hour. On EV2-A, off-peak charging (midnight to 3 p.m.) costs 22.558 cents per kWh, so 250 kWh a month comes to about $56.40. The same charging from 4 to 9 p.m. in summer would cost 53.809 cents per kWh. On the separately metered EV-B, off-peak is 26.465 cents in summer and 23.504 cents in winter.',
  },
  {
    question: 'What is the difference between EV2-A and EV-B?',
    answer:
      'EV2-A prices your whole home, car included, on one meter. EV-B puts only the car on a second, dedicated meter with its own hours: peak 2 to 9 p.m. on weekdays and 3 to 7 p.m. on weekends and holidays. EV-B has no Base Services Charge but a meter charge of about 4.9 cents a day, and it is not eligible for CARE, FERA or Medical Baseline.',
  },
  {
    question: 'Is EV2-A or E-ELEC better for charging an EV?',
    answer:
      "For overnight charging, EV2-A. Its off-peak price, 22.558 cents, is well below E-ELEC's 33.358 cents in summer and 28.468 cents in winter. E-ELEC can still win for homes whose other big load is a heat pump running on winter evenings, because its winter peak price is 32.063 cents against EV2-A's 41.099 cents. Run PG&E's comparison on your own usage.",
  },
  {
    question: 'What is the cheapest time to charge an EV on PG&E?',
    answer:
      'On EV2-A and E-ELEC, midnight to 3 p.m. every day. On EV-B, 11 p.m. to 7 a.m. on weekdays, plus weekend and holiday hours outside 3 to 7 p.m. On E-TOU-C or E-TOU-D, any hour outside the peak window, but at a higher price than EV2-A.',
  },
  {
    question: 'Can I get CARE on an EV rate?',
    answer:
      'Yes on EV2-A and E-ELEC, which take the 35% CARE discount on usage charges and the lowest income tier of the Base Services Charge. No on EV-B: PG&E says the separately metered plan is not eligible for CARE, FERA or Medical Baseline.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function PgeEvRatesPage() {
  return (
    <PublicLayout breadcrumbLabel="PG&E EV rates" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="PG&E EV rates" kicker="PG&E · EV charging" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                PG&amp;E has three rate plans for EV owners. EV2-A prices the whole home on one meter and charges 22.558 cents per
                kWh from midnight to 3 p.m. every day. EV-B puts the car on its own meter with different hours. E-ELEC is the
                electric-home plan, required for new solar. For most people charging overnight at home, EV2-A has the lowest price.
              </p>
              <HubUpLink path="/blog/pge-ev-rates" />
              <p>
                Prices below are PG&amp;E&apos;s bundled rates from its residential rate table for March 1, 2026 onward (Advice
                Letter 7846-E), checked September 23, 2026. PG&amp;E&apos;s EV2 tariff sheet, reissued June 1, 2026, carries the
                same energy prices. If a community choice provider supplies your power, the generation part of these prices comes
                from the provider instead. For the non-EV plans, see{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E peak hours and time-of-use rates
                </Link>
                .
              </p>

              <QuickAnswer label="Which PG&E EV plan tends to fit">
                <p>
                  <strong>EV2-A</strong> if the car charges overnight and the house can stay light from 4 to 9 p.m.{' '}
                  <strong>E-ELEC</strong> if a heat pump or battery shapes your bill as much as the car does, or if you are on
                  the Solar Billing Plan, which requires it. <strong>EV-B</strong> only if you want the car billed separately and
                  are willing to pay for a second meter; it gives up CARE and FERA.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="PG&E EV rates from March 1, 2026"
                  facts={[
                    { label: 'EV2-A off-peak', value: '22.558¢/kWh', note: 'Midnight–3 p.m., every day, all year', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'EV2-A summer peak', value: '53.809¢/kWh', note: '4–9 p.m. daily, June–September', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'EV-B off-peak (separate meter)', value: '23.504–26.465¢', note: 'Winter–summer', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Base Services Charge (EV2-A, E-ELEC)', value: '$0.79343/day', note: 'Standard tier; EV-B pays a meter charge instead', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="PG&E EV rates and solar comparison" utility="pge" />
              </div>

              <h2>PG&amp;E EV rate prices, side by side</h2>
              <DataTable
                caption="PG&E EV and electric-home rates from March 1, 2026 (cents per kWh, bundled)"
                columns={['Plan and season', 'Peak', 'Part-peak', 'Off-peak']}
                rows={[
                  ['EV2-A, summer (Jun–Sep)', '53.809¢', '42.760¢', '22.558¢'],
                  ['EV2-A, winter (Oct–May)', '41.099¢', '39.428¢', '22.558¢'],
                  ['EV-B, summer (May–Oct)', '62.131¢', '37.720¢', '26.465¢'],
                  ['EV-B, winter (Nov–Apr)', '43.878¢', '30.677¢', '23.504¢'],
                  ['E-ELEC, summer (Jun–Sep)', '55.214¢', '39.026¢', '33.358¢'],
                  ['E-ELEC, winter (Oct–May)', '32.063¢', '29.854¢', '28.468¢'],
                ]}
                note={<>Source: PG&amp;E residential rate table, Electric Vehicle and Technology tab, March 1, 2026 to present, checked September 23, 2026. EV2-A and E-ELEC add the income-tiered Base Services Charge ($0.79343, $0.39688 or $0.19713 a day). EV-B adds a meter charge of $0.04928 a day and no Base Services Charge.</>}
              />

              <h2>EV2-A: one meter, cheapest from midnight to 3 p.m.</h2>
              <p>
                EV2-A&apos;s hours are the same every day of the year, weekends and holidays included: peak 4 to 9 p.m., part-peak
                3 to 4 p.m. and 9 p.m. to midnight, and off-peak for the other 15 hours, midnight to 3 p.m. Summer is June 1
                through September 30. The off-peak price does not change with the season, which makes it easy to plan around: set
                the car to start charging at midnight and it pays 22.558 cents whether it is July or January.
              </p>
              <p>
                <strong>Who qualifies.</strong> PG&amp;E&apos;s EV2 tariff applies to customers with a currently registered battery
                electric or plug-in hybrid vehicle charged at home. Conventional hybrids, low-speed vehicles and electric
                motorcycles and bicycles do not count. The tariff also opens EV2-A on a pilot basis to homes with battery storage,
                which must be interconnected and at least 2 kWh for smaller users, and to homes that use an electric heat pump as
                the main source of water or space heating.
              </p>
              <p>
                <strong>The 800% cap.</strong> A home whose usage over 12 months exceeds 800% of its annual baseline allowance is
                removed from EV2-A, barred from any EV rate for 12 months and moved to E-TOU-D unless it picks another plan. That
                is rare for a single home and car, but it can catch a property charging several vehicles.
              </p>

              <h2>EV2-A price history, 2024 to 2026</h2>
              <DataTable
                caption="PG&E EV2-A prices by effective date (cents per kWh)"
                columns={['Effective', 'Off-peak', 'Summer peak', 'Winter peak', 'Fixed daily charge']}
                rows={[
                  ['Jan 1, 2024', '34.462¢', '65.713¢', '53.002¢', 'None'],
                  ['Jan 1, 2025', '30.339¢', '61.590¢', '48.879¢', 'None'],
                  ['Mar 1, 2025', '31.026¢ summer, 31.027¢ winter', '62.277¢', '49.566¢', 'None'],
                  ['Sep 1, 2025', '30.036¢', '61.286¢', '48.575¢', 'None'],
                  ['Jan 1, 2026', '28.474¢', '59.724¢', '47.013¢', 'None'],
                  ['Mar 1, 2026', '22.558¢', '53.809¢', '41.099¢', '$0.79343 (standard tier)'],
                ]}
                note={<>Source: PG&amp;E residential rate tables for each period (Electric Vehicle and Technology tab), from PG&amp;E&apos;s electric rates archive, checked September 23, 2026.</>}
              />
              <p>
                The March 2026 drop is not a straight price cut. That is when PG&amp;E added the Base Services Charge, moving part
                of its fixed costs out of the per-kWh price and into a daily charge of about $24 a month for most homes. A driver
                who charges a lot overnight gains from the lower kWh price; a light user may see little change once the daily
                charge is counted. Earlier moves track PG&amp;E&apos;s overall rate changes, covered in{' '}
                <Link href="/blog/did-pge-rates-go-up" className={guideLink}>
                  every PG&amp;E rate change since 2023
                </Link>
                , and the non-EV plans are listed in{' '}
                <Link href="/blog/pge-rate-schedules" className={guideLink}>
                  PG&amp;E&apos;s residential rate schedules
                </Link>
                .
              </p>

              <h2>EV-B: a separate meter just for the car</h2>
              <p>
                EV-B is Rate B of PG&amp;E&apos;s Schedule EV, and it is the only version left: PG&amp;E eliminated Rate A on
                November 30, 2025. The car is wired to its own meter, so the house stays on whatever plan suits it. EV-B keeps
                an older time pattern with its own seasons. Summer runs May through October. Peak is 2 to 9 p.m. Monday through
                Friday and 3 to 7 p.m. on weekends and holidays; part-peak is 7 a.m. to 2 p.m. and 9 to 11 p.m. on non-holiday
                weekdays; everything else is off-peak, which in practice means 11 p.m. to 7 a.m. on weekdays.
              </p>
              <p>
                The trade-offs are real. EV-B&apos;s summer peak, 62.131 cents, is the highest of any PG&amp;E residential rate
                here. It is not eligible for CARE, FERA or Medical Baseline, and PG&amp;E&apos;s EV page says it is not eligible for
                SmartRate either. A second meter also means electrical work and PG&amp;E approval before it saves anything. It
                makes the most sense where the house already has a meter panel set up for it or where the home&apos;s own usage
                pattern would be penalized on EV2-A.
              </p>

              <h2>E-ELEC: the electric-home plan</h2>
              <p>
                E-ELEC is open to homes with at least one of an EV, energy storage or an electric heat pump for water or space
                heating, metered together with the house. Customers on the net billing tariff must use it and do not need any of
                those technologies. Its off-peak price, 33.358 cents in summer and 28.468 cents in winter, is well above
                EV2-A&apos;s, so it is rarely the cheaper way to charge a car on its own. Its low winter prices are its strength.
              </p>

              <h2>What charging costs on each plan</h2>
              <p>
                Our own arithmetic, using March 2026 prices and 250 kWh of charging a month, all in off-peak hours: about $56.40
                on EV2-A, about $83.40 on E-ELEC in summer and $71.17 in winter, and about $66.16 on EV-B in summer plus roughly
                $1.50 a month in meter charges. The same 250 kWh on E-TOU-C&apos;s summer off-peak price, 39.940 cents before any
                baseline credit, would be about $99.85. PG&amp;E itself says off-peak charging on EV2-A costs about the same as
                gasoline at $2.16 a gallon, or $1.40 with CARE, and $2.39 on EV-B.
              </p>
              <p>
                The biggest risk is the clock, not the plan. The same 250 kWh charged at 6 p.m. on a summer weekday would cost
                about $134.52 on EV2-A. A charger schedule set to start at midnight is worth more than any plan choice. For public
                charging costs next to these, see{' '}
                <Link href="/blog/chargepoint-cost-per-kwh-california" className={guideLink}>
                  ChargePoint cost per kWh in California
                </Link>
                .
              </p>

              <h2>CARE, FERA and the Base Services Charge on EV plans</h2>
              <p>
                EV2-A keeps income-qualified discounts: PG&amp;E lists it as eligible for CARE, which takes 35% off usage charges,
                and FERA, which takes 18%. E-ELEC carries the same 35% CARE discount in PG&amp;E&apos;s rate table. On both plans,
                households at CARE-level incomes pay the lowest Base Services Charge tier, $0.19713 a day, and FERA-level
                households the middle tier, $0.39688, about $6 and $12 a month. EV-B does not qualify. If you are weighing a
                second meter mainly to isolate the car&apos;s cost, check first whether you would lose a CARE or FERA discount on
                it. Eligibility and how to apply are in{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  PG&amp;E&apos;s CARE and FERA discounts
                </Link>
                .
              </p>

              <h2>Solar, an EV and the right PG&amp;E plan</h2>
              <p>
                New solar customers do not choose: the CPUC places PG&amp;E customers on the net billing tariff on E-ELEC. Owners
                still on NEM 2.0 must be on a time-of-use rate, and the CPUC does not tie them to E-ELEC; ask PG&amp;E which EV
                plans your NEM agreement allows before switching. A home that exports at midday and charges the car after midnight
                is the pattern EV2-A&apos;s hours reward. A battery changes the picture again by covering 4 to 9 p.m.
                For sizing panels around a car, see{' '}
                <Link href="/blog/solar-panels-for-ev-charging-california" className={guideLink}>
                  solar panels for EV charging in California
                </Link>
                ; for other utilities, compare{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  SCE&apos;s TOU-D-PRIME EV plan
                </Link>{' '}
                and{' '}
                <Link href="/blog/ladwp-ev-charging-rates" className={guideLink}>
                  LADWP&apos;s EV rate discount
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

            <SolarInquiry topic="PG&E EV rates and solar comparison" utility="pge" heading="Compare a Solar Plan With Your PG&E Bill" />
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
