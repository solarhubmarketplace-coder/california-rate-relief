import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { HubUpLink } from '@/components/growth/HubUpLink';

// 2026-09-23 (topical-authority wave, Tier 2): the PG&E spoke of the NEM hub.
// /blog/nem-pge answers "what do the NEM lines on my bill mean"; this page
// answers "what is PG&E's Solar Billing Plan and how does it pay". Export
// values come from PG&E's 2026 application-year price sheet; rates from the
// PG&E residential rates workbook in effect since March 1, 2026.
const path = '/blog/pge-solar-billing-plan';
const url = `https://ratereliefca.com${path}`;
const title = 'PG&E Solar Billing Plan: How NEM 3.0 Billing Works (2026)';
const h1 = 'PG&E Solar Billing Plan: How Net Billing Works on a PG&E Account';
const description =
  'PG&E’s Solar Billing Plan is its name for NEM 3.0. Who is on it, the E-ELEC rate, how hourly export credits are priced, the bonus, and how the True-Up works.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

// Weekday Energy Produced + Energy Delivered, per kWh, from PG&E's
// "2026 Energy Export Credit Values: 2026 Interconnection Application Year" sheet.
const exportRows: [string, string, string][] = [
  ['January, noon', '$0.067', 'A winter midday export'],
  ['April, noon', '$0.0085', 'Spring midday, when the grid has the most solar'],
  ['April, 3 p.m.', 'under $0.001', 'Near zero on the sheet'],
  ['July, 7 p.m.', '$0.457', 'Summer evening'],
  ['August, 7 p.m.', '$1.154', 'Late-summer evening, among the highest values'],
  ['September, 7 p.m.', '$0.595', 'Evening value stays high into September'],
  ['December, 7 p.m.', '$0.091', 'A winter evening'],
];

const rateRows: [string, string, string][] = [
  ['Peak, 4–9 p.m. every day', '55.2¢', '32.1¢'],
  ['Part-peak, 3–4 p.m. and 9 p.m.–midnight', '39.0¢', '29.9¢'],
  ['Off-peak, all other hours', '33.4¢', '28.5¢'],
];

const sources: Source[] = [
  { label: 'PG&E: Solar Billing Plan', url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html' },
  { label: 'PG&E: Electric Home Rate Plan (E-ELEC)', url: 'https://www.pge.com/en/account/rate-plans/electric-home.html' },
  { label: 'PG&E: Residential rates table, March 1, 2026 to present (E-ELEC, EV2, time-of-use periods)', url: 'https://www.pge.com/assets/rates/tariffs/res-inclu-tou-current.xlsx' },
  { label: 'PG&E: Solar Billing Plan Energy Export Credit price sheets and how-to guide, 2023–2026 (ZIP)', url: 'https://www.pge.com/assets/pge/docs/vanities/PGE-EEC-Price-Sheets.zip' },
  { label: 'PG&E: Electric vehicle rate plans', url: 'https://www.pge.com/en/account/rate-plans/electric-vehicles.html' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
];

const faqs = [
  {
    question: 'What is PG&E’s Solar Billing Plan?',
    answer:
      'It is PG&E’s name for the net billing tariff the CPUC adopted in December 2022. Customers whose solar interconnection application went in after April 14, 2023 are enrolled in it. They pay monthly on the Electric Home (E-ELEC) rate and earn Energy Export Credits that vary by hour, weekday and month.',
  },
  {
    question: 'Is the PG&E Solar Billing Plan the same as NEM 3.0?',
    answer:
      'Yes. NEM 3.0 is the informal name. The CPUC calls it the net billing tariff and says the utilities refer to it as the Solar Billing Plan.',
  },
  {
    question: 'How much does PG&E pay for exported solar?',
    answer:
      'It depends on the hour and month you export, and on the year you applied. On PG&E’s 2026 application-year sheet, a weekday noon export in April earns about $0.0085 per kWh and a 7 p.m. export on an August weekday about $1.15. Those values stay fixed for nine years.',
  },
  {
    question: 'What rate plan are PG&E Solar Billing Plan customers on?',
    answer:
      'PG&E says Solar Billing Plan customers are automatically enrolled in the Electric Home (E-ELEC) rate. Its peak runs 4 to 9 p.m. every day, and its current table lists about 55 cents per kWh at the summer peak.',
  },
  {
    question: 'What is the best PG&E plan for solar and an EV?',
    answer:
      'For a Solar Billing Plan account, PG&E enrolls you in E-ELEC, which is built for homes with an EV, a battery or a heat pump. EV2-A has a lower off-peak price for overnight charging, but PG&E does not list it as an option for Solar Billing Plan customers, so ask PG&E before assuming you can switch.',
  },
  {
    question: 'Do I still get a True-Up on the Solar Billing Plan?',
    answer:
      'Yes. You pay monthly, and at the end of your 12-month billing cycle PG&E sends a True-Up Statement. PG&E says credits left after it applies them roll into the new 12-month cycle.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function PgeSolarBillingPlanPage() {
  return (
    <PublicLayout breadcrumbLabel="PG&E Solar Billing Plan" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={h1} url={url} dateModified={updated} description={description} />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {[{ label: 'Home', href: '/' }, hub].map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="hover:text-primary">{c.label}</Link>
                  <span aria-hidden="true">/</span>
                </span>
              ))}
              <span className="text-foreground">{'PG&E Solar Billing Plan'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                PG&amp;E’s Solar Billing Plan is the utility’s name for the CPUC’s net billing tariff, the rules most
                people call NEM 3.0. If your solar interconnection application went in after April 14, 2023, you are on
                it. PG&amp;E puts you on the Electric Home (E-ELEC) rate, bills you monthly, and credits exports at
                hourly values that stay fixed for nine years instead of at the retail price.
              </p>
              <HubUpLink path="/blog/pge-solar-billing-plan" />
              <p>
                This guide covers who is on the plan, the rate you pay for grid power, how exports are priced, the
                export bonus, and how the monthly bills and annual True-Up fit together. If you are trying to read the
                NEM lines on an existing bill, start with{' '}
                <Link href="/blog/nem-pge" className={link}>what NEM means on a PG&amp;E bill</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="PG&E Solar Billing Plan" utility="PG&E" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'Who is on it', value: 'Applied after Apr. 14, 2023', note: 'Older systems stay on NEM until their legacy period ends. PG&E, CPUC.' },
                  { label: 'Required rate', value: 'E-ELEC', note: 'Peak 4–9 p.m. every day. PG&E.' },
                  { label: 'Export values locked', value: '9 years', note: 'Set by the year you applied. CPUC.' },
                  { label: 'Starting export bonus', value: '$0.022/kWh', note: '$0.090 for CARE; steps down 20% a year. CPUC D.22-12-056.' },
                ]}
              />

              <h2>Who is on PG&amp;E’s Solar Billing Plan</h2>
              <p>
                The date PG&amp;E received your interconnection application decides it. PG&amp;E says customers who
                applied after April 14, 2023 are enrolled in the Solar Billing Plan. The CPUC says the net billing
                tariff has applied to new applicants since April 15, 2023, and that the utilities call it the Solar
                Billing Plan.
              </p>
              <p>
                Older systems stay where they are for now. The CPUC lets NEM 2.0 customers remain on that tariff for 20
                years from the date they interconnected. When that period ends, the account moves to net billing, but
                the CPUC’s decision says those customers do not get the export bonus described below. The same
                decision says a buyer of a home that already has solar does not get it either. For your own date, see{' '}
                <Link href="/blog/when-does-nem-2-expire" className={link}>when NEM 2.0 expires</Link>.
              </p>

              <h2>The rate you pay for grid power: E-ELEC</h2>
              <p>
                PG&amp;E says Solar Billing Plan customers are automatically enrolled in its Electric Home rate,
                Schedule E-ELEC. PG&amp;E built E-ELEC for homes with an electric vehicle, battery storage or an electric
                heat pump, and the CPUC’s net billing decision named it as PG&amp;E’s eligible rate for residential
                customers. The peak runs 4 to 9 p.m. every day, weekends and holidays included. Summer is June through
                September.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">PG&amp;E E-ELEC energy prices per kWh, rates in effect since March 1, 2026</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">E-ELEC period</th>
                      <th className="p-3">Summer (Jun–Sep)</th>
                      <th className="p-3">Winter (Oct–May)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rateRows.map(([period, summer, winter]) => (
                      <tr key={period} className="border-t border-border">
                        <td className="p-3">{period}</td>
                        <td className="p-3">{summer}</td>
                        <td className="p-3">{winter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                Total bundled energy charge per kWh from PG&amp;E’s residential rates table for March 1, 2026 to present.
                Customers of a community choice aggregator pay a different generation portion.
              </p>
              <p>
                On top of energy, E-ELEC carries a daily Base Services Charge that PG&amp;E introduced on March 1, 2026.
                The rates table lists three income tiers: $0.19713, $0.39688 and $0.79343 per day, or about $6, $12 or
                $24 over a 30-day month. PG&amp;E says the charge lowers the price you pay per kWh on average. How it
                shows up on a bill is covered in{' '}
                <Link href="/blog/nem-pge" className={link}>reading the NEM lines on a PG&amp;E bill</Link>.
              </p>

              <h3>The best PG&amp;E plan for solar and an EV</h3>
              <p>
                For a Solar Billing Plan account the practical answer is E-ELEC, because PG&amp;E enrolls you in it and
                its E-ELEC page does not list another option. It is also the plan PG&amp;E designed for homes that add an
                EV or a battery.
              </p>
              <p>
                The trade-off shows up at night. PG&amp;E’s current table lists EV2-A at about 22.6¢ per kWh off-peak in
                every season, against E-ELEC’s 33.4¢ in summer and 28.5¢ in winter. An EV that charges overnight would
                cost less on EV2-A, but PG&amp;E does not present EV2-A as a choice for Solar Billing Plan customers.
                Ask PG&amp;E in writing before you plan around a switch. Both plans put the peak at 4 to 9 p.m., so a
                battery that covers those hours helps on either one. The{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={link}>PG&amp;E time-of-use plans compared</Link>{' '}
                page lays out the rest of PG&amp;E’s residential rates.
              </p>

              <h2>How PG&amp;E prices the solar you export</h2>
              <p>
                Exports earn Energy Export Credits. PG&amp;E splits each credit into two parts, Energy Produced and
                Energy Delivered, and publishes a price sheet for each interconnection application year. The value
                changes by hour, by weekday versus weekend or holiday, and by month. The CPUC says the original customer
                who interconnects under net billing keeps that tariff for nine years, and PG&amp;E’s sheets set out the
                values for that period.
              </p>
              <p>
                Here is what the 2026 application-year sheet shows for a few weekday hours, adding the two parts
                together:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">PG&amp;E export credit per kWh for 2026 applicants, selected weekday hours</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Weekday hour</th>
                      <th className="p-3">Credit per kWh</th>
                      <th className="p-3">What it shows</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exportRows.map(([hour, value, note]) => (
                      <tr key={hour} className="border-t border-border">
                        <td className="p-3">{hour}</td>
                        <td className="p-3">{value}</td>
                        <td className="p-3">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                The spread is the point. A spring midday export is worth a fraction of a cent, while a late-summer
                evening export can be worth more than the E-ELEC peak price. Some spring weekend middays show $0.00 for
                Energy Produced. The full hour-by-hour pattern, with 2023 and 2024 applicants alongside, is in{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>NEM 3.0 export rates by hour</Link>.
              </p>
              <p>
                One footnote on PG&amp;E’s sheet matters for most of Northern California: Energy Produced credits apply
                only to customers who buy generation from PG&amp;E. If a community choice aggregator or a direct access
                provider supplies your generation, PG&amp;E says to ask that provider for its generation export pricing.
              </p>

              <h3>Checking your own export credits</h3>
              <p>
                PG&amp;E’s how-to guide walks through it. Log in to your account, open Energy Usage Details, and use Day
                View, because the values are set by month, day type and hour. Hover over an hour’s green export bar to
                see the kWh sent to the grid. Find the same month and hour on the price sheet for the year you applied,
                then multiply the kWh by the Energy Produced and Energy Delivered amounts. The guide says PG&amp;E would
                begin calculating the credits automatically in your account in September 2024, so this is a way to
                check its math.
              </p>

              <h2>The export bonus and how it steps down</h2>
              <p>
                To ease the move from NEM 2.0, the CPUC added a fixed bonus to every exported kWh, which its decision
                calls the ACC Plus adder. For PG&amp;E residential customers it started at $0.022 per kWh, or $0.090 for
                CARE customers. The decision cuts it at the end of each calendar year by 20 percent of that starting
                amount until it reaches zero after five years. Whatever amount applies when you enroll stays fixed for
                nine years.
              </p>
              <p>
                The CPUC’s summary: residential PG&amp;E and SCE customers who apply to interconnect before the end of
                2027 receive slightly higher-than-normal export credits for nine years. The bonus is not available for
                new construction, for customers moving over from NEM 1.0 or 2.0 at the end of their legacy period, or
                for someone who buys a home with an existing system.
              </p>

              <h2>Monthly bills and the annual True-Up</h2>
              <p>
                The CPUC’s net billing decision kept an annual true-up but requires monthly billing, so you pay each
                month. Credits still roll over for 12 months, and PG&amp;E sends a True-Up Statement at the end of
                each 12-month cycle. PG&amp;E says credits left after they are applied roll into the new cycle. Where
                those credits and charges appear on the page is shown in the guide to{' '}
                <Link href="/blog/how-to-read-pge-bill" className={link}>reading a PG&amp;E solar statement</Link>.
              </p>
              <p>
                If you export more energy than you use over a whole year, the CPUC’s decision kept the existing net
                surplus compensation method, which it calculates from average wholesale prices between 7 a.m. and 5
                p.m. over the past 12 months. The CPUC puts that at about 2 to 3 cents per kWh. What the statement
                contains, line by line, is in{' '}
                <Link href="/solar-problems/true-up-bill-california-explained" className={link}>what a NEM true-up is</Link>.
              </p>

              <h2>Why most Solar Billing Plan customers add a battery</h2>
              <p>
                The CPUC reports that nearly 70 percent of net billing customers had paired a battery with their solar
                by the end of 2024. The PG&amp;E numbers above show why. A kWh exported at noon in April earns under a
                cent; the same kWh stored and used at 7 p.m. avoids buying power during E-ELEC’s peak. Whether that
                pays back for your house depends on your usage and the battery’s price, which the{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={link}>NEM 3.0 battery payback guide</Link>{' '}
                works through. PG&amp;E customers in wildfire-outage areas should also check{' '}
                <Link href="/battery/pge-solar-battery-rebate" className={link}>PG&amp;E’s battery incentives</Link>.
              </p>

              <h2>What to check on your own account</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Confirm the program on your bill and the year your interconnection application went in. That year picks your price sheet.</li>
                <li>Confirm you are on E-ELEC, and note your Base Services Charge tier.</li>
                <li>Find your True-Up month so the 12-month cycle is not a surprise.</li>
                <li>Look at which hours you export most. Midday exports in spring earn the least.</li>
                <li>If a CCA serves you, get its generation export pricing; PG&amp;E’s sheet covers only the delivery part for you.</li>
              </ol>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Other PG&E and net billing questions"
                links={[
                  { href: '/blog/why-are-my-nem-charges-so-high', label: 'Why NEM charges on a solar bill run high' },
                  { href: '/blog/sce-solar-billing-plan', label: 'How SCE’s version of the plan differs' },
                  { href: '/blog/net-billing-vs-net-metering-california', label: 'What the CPUC’s net billing decision changed' },
                  { href: '/blog/why-is-my-pge-bill-so-high', label: 'A bill-first checklist for high PG&E bills' },
                  { href: '/blog/solar-battery-backup-california', label: 'What a backup battery runs and costs' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry utility="PG&E" topic="PG&E Solar Billing Plan" variant="bill" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
