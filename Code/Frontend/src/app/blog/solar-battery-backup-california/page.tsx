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
import { SourceList, QuoteChecklist, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

// 2026-09-23 (topical-authority wave): rebuilt as a self-contained page from
// GrowthGuide kind="battery" (components/growth/Guides.tsx, now unused for this
// route) so it can own "solar battery cost california" and "solar battery
// savings" alongside the "solar battery backup california" queries it holds.
const path = '/blog/solar-battery-backup-california';
const url = `https://ratereliefca.com${path}`;
const title = 'Solar Battery Backup in California: Cost, Savings, Rebates';
const h1 = 'Solar Battery Backup in California: What It Costs, What It Saves, What Rebates Remain';
const description =
  'A solar battery runs key circuits in an outage and stores midday solar for evening use. California cost benchmarks, NEM 3.0 savings and 2026 rebates.';
const updated = '2026-09-23';
const hub = { label: 'Home battery storage', href: '/battery' };
const link = 'text-primary underline underline-offset-2';

const programs: [string, string, string][] = [
  ['PG&E Residential Storage Initiative', 'Battery installed at no charge', 'EPSS-circuit customers with 5+ EPSS outages since Jan 1, 2024 on CARE, FERA, Medical Baseline or Self-Identified Vulnerable'],
  ['PG&E Reliability Battery Initiative', 'Battery installed at no cost; full for 2026', 'Customers on circuits with worse-than-average reliability'],
  ['PG&E Permanent Battery Storage Rebate', '$7,500 after install; apply by Dec 31, 2026', 'First-time battery owners with 5+ Wildfire Safety outages since Jan 1, 2024'],
  ['SGIP Residential Solar and Storage Equity (AB 209)', '$1.10 per Wh of storage; mostly waitlisted', 'Income-qualified households'],
];

const sources: Source[] = [
  { label: 'LBNL: Tracking the Sun, 2024 Edition', url: 'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf' },
  { label: 'LBNL: Distributed Solar and Storage, 2026 Data Update', url: 'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'PG&E: Energy Export Credit price sheets, 2023–2026 (ZIP)', url: 'https://www.pge.com/assets/pge/docs/vanities/PGE-EEC-Price-Sheets.zip' },
  { label: 'SCE: How Solar Billing Plans work', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/solar-billing-plan' },
  { label: 'Tesla: Powerwall 3 Datasheet', url: 'https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf' },
  { label: 'Enphase: IQ Battery 5P data sheet (DSH-00010-11.0-EN)', url: 'https://enphase.com/download/iq-battery-5p-data-sheet' },
  { label: 'FranklinWH: aPower 2 datasheet', url: 'https://www.franklinwh.com/document/apower-2-datasheet' },
  { label: 'PG&E: Permanent Battery Storage Rebate', url: 'https://www.pge.com/en/save-energy-and-money/rebates-and-incentives/permanent-battery-storage-rebate.html' },
  { label: 'PG&E: Residential Storage Initiative', url: 'https://www.pge.com/en/outages-and-safety/outage-preparedness-and-support/general-outage-resources/residential-storage-initiative.html' },
  { label: 'PG&E: Reliability Battery Initiative', url: 'https://www.pge.com/en/outages-and-safety/outage-preparedness-and-support/reliability-battery-initiative.html' },
  { label: 'PG&E: Self-Generation Incentive Program', url: 'https://www.pge.com/en/save-energy-and-money/rebates-and-incentives/self-generation-incentive-program.html' },
  { label: 'SGIP program metrics (selfgenca.com)', url: 'https://www.selfgenca.com/home/program_metrics/' },
  { label: 'IRS: FAQs on OBBB changes to residential energy credits', url: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb' },
];

const faqs = [
  {
    question: 'How much does a solar battery cost in California?',
    answer:
      'No manufacturer publishes a California installed price. Lawrence Berkeley National Laboratory found storage added roughly $750 to $1,000 per kWh to paired residential systems nationally in 2023, and that the median home battery installed in 2025 was 13.5 kWh, mostly from California data. At those rates a 13.5 kWh battery adds about $10,000 to $13,500. Get an itemized quote for your house.',
  },
  {
    question: 'Is a solar battery worth it in California?',
    answer:
      'It depends on your tariff and your outages. On NEM 3.0, exports at midday earn little, so storing solar for the evening has real value; the CPUC says nearly 70 percent of net billing customers had added a battery by the end of 2024. On NEM 2.0, exports already earn near retail, so a battery is mostly a backup purchase.',
  },
  {
    question: 'Can I get a solar battery at no cost in California?',
    answer:
      'Some PG&E customers can. The Residential Storage Initiative installs a battery at no charge for customers on EPSS circuits with five or more EPSS outages since January 1, 2024 who are enrolled in CARE, FERA, Medical Baseline or the Self-Identified Vulnerable program. PG&E contacts eligible customers. Treat any other no-cost battery offer as a lease or loan until it shows otherwise.',
  },
  {
    question: 'Is there still a battery tax credit?',
    answer:
      'Not for a battery you own that is installed now. The IRS says the residential clean energy credit is not allowed for expenditures made after December 31, 2025, and an expenditure is made when installation is complete.',
  },
  {
    question: 'How long will a solar battery power my house in an outage?',
    answer:
      'Divide the battery’s usable kWh by the average load on the backed-up circuits. A 13.5 kWh Powerwall 3 running a steady 1 kW would last about 13.5 hours before any solar recharge. Whole-house loads with air conditioning drain it far faster, which is why most systems back up selected circuits.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function SolarBatteryBackupPage() {
  return (
    <PublicLayout breadcrumbLabel="Solar battery backup" breadcrumbParent={hub}>
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
              <span className="text-foreground">{'Solar battery backup'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                A solar battery in California does two jobs. It keeps selected circuits running when the grid goes
                down, and on NEM 3.0 it stores midday solar that would otherwise export for very little and uses it
                in the evening. Adding one costs roughly $750 to $1,000 per kWh of storage by Lawrence Berkeley
                National Laboratory’s national 2023 estimate, and the federal tax credit that once took 30 percent
                off ended with 2025. What’s left is a handful of narrower rebates.
              </p>
              <p>
                This guide covers what a battery can back up, where its bill savings come from, what it costs, and
                which programs still help in 2026. For every battery guide in one place, start at{' '}
                <Link href={hub.href} className={link}>home battery storage in California</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="Solar battery backup" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'Storage price premium', value: '$750–$1,000 per kWh', note: 'Paired residential systems, national, 2023. LBNL Tracking the Sun.' },
                  { label: 'Median home battery, 2025', value: '13.5 kWh', note: 'Mostly California data. LBNL 2026 update.' },
                  { label: 'NEM 3.0 customers with batteries', value: 'Nearly 70%', note: 'By end of 2024. CPUC.' },
                  { label: 'PG&E outage rebate', value: '$7,500', note: '5+ Wildfire Safety outages since Jan 1, 2024. PG&E, checked Sept 23, 2026.' },
                ]}
              />

              <h2>Job one: backup power</h2>
              <p>
                In an outage, a grid-tied solar system shuts off unless a battery and backup equipment let the
                house run as an island. With them, the battery powers the circuits you chose and solar can recharge
                it during the day. Which appliances run at once depends on the battery’s output, and how long they
                run depends on its energy.
              </p>
              <p>
                The three batteries most often quoted in California show the range, from each maker’s datasheet.
                A Tesla Powerwall 3 stores 13.5 kWh and delivers up to 11.5 kW continuously on the grid, with a 185
                LRA motor-start rating. An Enphase IQ Battery 5P stores 5.0 kWh and delivers 3.84 kVA, so homes
                stack several. A FranklinWH aPower 2 stores 15 kWh and delivers 10 kW continuously.
              </p>
              <p>
                For runtime, divide usable kWh by the average load. At a steady 1 kW, a 13.5 kWh battery lasts about
                13.5 hours before any recharge. Central air conditioning, electric heat and EV charging pull that
                down fast, so most designs back up essentials: refrigerator, lights, internet, a few outlets, maybe
                a well pump. For multi-day shutoffs, see{' '}
                <Link href="/battery/battery-backup-vs-generator-california" className={link}>battery versus generator for outages</Link>{' '}
                and{' '}
                <Link href="/blog/do-solar-panels-work-during-power-outage-california" className={link}>why solar alone goes dark in an outage</Link>.
              </p>

              <h2>Job two: bill savings, and why NEM 3.0 changed them</h2>
              <p>
                Savings depend on the tariff your solar is on. The CPUC says NEM 1.0 and NEM 2.0 credit exports at
                retail rates. If an export at noon is worth about what you pay at night, storing it gains little. On
                those accounts a battery is mainly a backup purchase, with some time-of-use savings.
              </p>
              <p>
                Net billing, NEM 3.0, is different. The CPUC says export credits there are usually below retail but
                can rise above it on late summer evenings, and that customers maximize savings by installing storage
                to use or export stored energy in high-value hours. PG&amp;E’s 2026 price sheet for 2025 and 2026
                applicants shows about $0.0085 per kWh for a weekday noon export in April and about $1.15 at 7 p.m.
                on an August weekday. SCE’s 2025 examples put summer daytime exports at about $0.06 and the 4–9 p.m.
                window at about $0.21.
              </p>
              <p>
                That spread is the savings case. A battery that charges from midday solar and covers your evening
                use avoids buying power at peak prices, instead of exporting it for pennies. The CPUC reports that
                nearly 70 percent of net billing customers had paired a battery with solar by the end of 2024.
                Run your own numbers with the{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={link}>NEM 3.0 battery payback guide</Link>{' '}
                and the{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>hourly export values</Link>.
              </p>

              <h2>What a solar battery costs in California</h2>
              <p>
                No manufacturer publishes a California installed price, so the best primary benchmarks are Lawrence
                Berkeley National Laboratory’s. Its Tracking the Sun 2024 report found storage added roughly $750
                to $1,000 per kWh to the installed price of paired residential systems in 2023, nationally. Its 2026
                data update found the median home battery installed in 2025 was 13.5 kWh, based mostly on California
                data, and that among cash purchases, paired solar-plus-storage systems had a median price $2.1 per
                watt higher than solar alone.
              </p>
              <p>
                At $750 to $1,000 per kWh, 13.5 kWh adds about $10,000 to $13,500. Your price moves with the number
                of units, whether the main panel needs an upgrade, the backup gateway or critical-loads panel, the
                permit, and how far the battery sits from the panel. For a line-by-line build of an installed price,
                see{' '}
                <Link href="/battery/home-battery-cost-california" className={link}>home battery cost in California</Link>,
                and to size it,{' '}
                <Link href="/battery/how-many-batteries-do-i-need-california" className={link}>how many batteries a home needs</Link>.
              </p>

              <h2>Rebates and programs that remain in 2026</h2>
              <p>
                The biggest one is gone: the IRS says the residential clean energy credit is not allowed for
                expenditures made after December 31, 2025. What remains is aimed at specific households. The
                Self-Generation Incentive Program’s equity budget pays $1.10 per watt-hour of storage for
                income-qualified homes, but on September 23, 2026 it showed a waitlist for PG&amp;E, SCE, CSE,
                SoCalGas and LADWP customers, with only the budget for customers of publicly owned utilities in
                PG&amp;E’s and SCE’s programs open.
              </p>
              <p>
                PG&amp;E customers in wildfire-outage areas have more. Its Permanent Battery Storage Rebate pays
                $7,500 to first-time battery owners with five or more Wildfire Safety outages since January 1, 2024,
                with 200 rebates left as of September 14, 2026 and a December 31, 2026 deadline. The full list is on{' '}
                <Link href="/battery/pge-solar-battery-rebate" className={link}>PG&amp;E’s battery incentives page</Link>.
              </p>

              <h2>What California utility backup programs cost</h2>
              <p>
                For eligible households, some cost nothing. PG&amp;E describes the systems its Residential Storage
                Initiative installs as valued at over $15,000, including equipment and installation, typically 10 to
                13 kWh, provided at no charge. Its Reliability Battery Initiative installs a 10 to 15 kWh battery at
                no cost for customers on less reliable circuits, but it is full for 2026. PG&amp;E’s SGIP page
                describes the income-qualified equity rebate as covering up to 100 percent of the cost, when funding
                is available.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Battery backup programs and what they cost the customer</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Program</th>
                      <th className="p-3">What it covers</th>
                      <th className="p-3">Who qualifies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map(([name, covers, who]) => (
                      <tr key={name} className="border-t border-border align-top">
                        <th scope="row" className="p-3 font-medium">{name}</th>
                        <td className="p-3">{covers}</td>
                        <td className="p-3">{who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <QuoteChecklist />

              <p>
                Before signing, check who will install it and how the warranty works if that company closes; see{' '}
                <Link href="/battery/solar-battery-company" className={link}>how to choose a solar battery company</Link>.
                Commercial projects follow separate rules on the{' '}
                <Link href="/commercial-solar/sgip-battery-storage" className={link}>commercial storage and SGIP page</Link>.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="The California battery guides in detail"
                links={[
                  { href: '/battery/powerwall-vs-enphase-vs-franklinwh', label: 'Powerwall 3, Enphase 5P and FranklinWH compared' },
                  { href: '/battery/add-powerwall-to-existing-solar', label: 'Adding a battery to existing solar' },
                  { href: '/battery/sgip-battery-rebate-california', label: 'SGIP rebate budget status' },
                  { href: '/blog/solar-during-psps-california', label: 'Solar and batteries during a PSPS' },
                  { href: '/blog/california-solar-tax-credit-2026', label: 'California solar incentives overview' },
                ]}
              />
              <HubSpokeLinks hub="battery" currentPath={path} />
            </div>

            <SolarInquiry topic="Solar battery backup" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
