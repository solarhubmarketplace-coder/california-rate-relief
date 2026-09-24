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
// 2026-09-23 (Tier 2): widened to own "solar battery backup", "california
// battery storage", "residential solar and storage equity" and the no-cost
// battery question. Rebate-program detail now lives on the SGIP page, which
// this page links to, so the two stop splitting "battery rebate" queries.
const path = '/blog/solar-battery-backup-california';
const url = `https://ratereliefca.com${path}`;
const title = 'Solar Battery Backup and Storage in California (2026)';
const h1 = 'Solar Battery Backup and Storage in California: What It Runs, Costs and Saves';
const description =
  'How a solar battery backs up a California home, what it costs, when storage pays under NEM 3.0, and which no-cost and equity battery programs remain.';
const updated = '2026-09-23';
const hub = { label: 'Home battery storage', href: '/battery' };
const link = 'text-primary underline underline-offset-2';

const programs: [string, string, string][] = [
  ['SGIP Residential Solar and Storage Equity (AB 209)', '$1.10 per Wh of storage, $3.10 per W of new solar. Open only for customers of publicly owned utilities assigned to PG&E or SCE; waitlisted elsewhere (Sept 23, 2026)', 'Income at or below 80% of area median income, or verified through CARE, FERA, ESA, SASH or DAC-SASH'],
  ['PG&E Residential Storage Initiative', 'Battery installed at no charge; PG&E says 2026 supply is almost gone', 'EPSS-impacted circuit, 5+ EPSS outages since Jan 1, 2024, and CARE, FERA, Medical Baseline or Self-Identified Vulnerable'],
  ['PG&E Reliability Battery Initiative', 'Battery installed at no cost; full for 2026', 'Customers on circuits PG&E identifies as having worse-than-average reliability'],
  ['PG&E Permanent Battery Storage Rebate', '$7,500; 179 rebates left as of Sept 18, 2026; apply by Dec 31, 2026', 'First-time battery owners with 5+ Wildfire Safety outages since Jan 1, 2024'],
  ['SCE Critical Care Backup Battery', 'Portable battery at no charge, not a whole-home system', 'Medical Baseline customers in a high fire risk area who use powered medical equipment'],
];

const sources: Source[] = [
  { label: 'LBNL: Tracking the Sun, 2024 Edition', url: 'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf' },
  { label: 'LBNL: Distributed Solar and Storage, 2026 Data Update', url: 'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf' },
  { label: 'California Energy Commission: California surpasses 21,000 megawatts of battery resources (Aug. 2026)', url: 'https://www.energy.ca.gov/news/2026-08/california-surpasses-21000-megawatts-battery-resources-supporting-states' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'PG&E: Energy Export Credit price sheets, 2023–2026 (ZIP)', url: 'https://www.pge.com/assets/pge/docs/vanities/PGE-EEC-Price-Sheets.zip' },
  { label: 'PG&E: Residential rates table, March 1, 2026 to present (E-ELEC)', url: 'https://www.pge.com/assets/rates/tariffs/res-inclu-tou-current.xlsx' },
  { label: 'SCE: How Solar Billing Plans work', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/solar-billing-plan' },
  { label: 'SCE: Time-of-Use residential rate plans (TOU-D-PRIME)', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans' },
  { label: 'SDG&E: Schedule EV-TOU-5 total rates, effective Aug. 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20EV-TOU-5%20Total%20Rates%20Table.pdf' },
  { label: 'Tesla: Powerwall 3 Datasheet', url: 'https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf' },
  { label: 'Enphase: IQ Battery 5P data sheet', url: 'https://enphase.com/download/iq-battery-5p-data-sheet' },
  { label: 'FranklinWH: aPower 2 datasheet', url: 'https://www.franklinwh.com/document/apower-2-datasheet' },
  { label: 'SGIP program metrics (selfgenca.com, as of Sept. 23, 2026)', url: 'https://www.selfgenca.com/home/program_metrics/' },
  { label: 'SGIP 2026 Handbook, Version 3 (ZIP)', url: 'https://www.selfgenca.com/documents/handbook/2026' },
  { label: 'CPUC: Self-Generation Incentive Program', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program' },
  { label: 'PG&E: Permanent Battery Storage Rebate', url: 'https://www.pge.com/en/save-energy-and-money/rebates-and-incentives/permanent-battery-storage-rebate.html' },
  { label: 'PG&E: Residential Storage Initiative', url: 'https://www.pge.com/en/outages-and-safety/outage-preparedness-and-support/general-outage-resources/residential-storage-initiative.html' },
  { label: 'PG&E: Reliability Battery Initiative', url: 'https://www.pge.com/en/outages-and-safety/outage-preparedness-and-support/reliability-battery-initiative.html' },
  { label: 'SCE: Critical Care Backup Battery Program', url: 'https://www.sce.com/outages-safety/outage-preparedness/critical-care-backup-battery-program' },
  { label: 'IRS: FAQs on OBBB changes to residential energy credits', url: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb' },
];

const faqs = [
  {
    question: 'How much does a solar battery cost in California?',
    answer:
      'No manufacturer publishes a California installed price. Lawrence Berkeley National Laboratory found storage added roughly $750 to $1,000 per kWh to paired residential systems in 2023, and that the median home battery installed in 2025 was 13.5 kWh, mostly from California data. At those rates a 13.5 kWh battery adds about $10,000 to $13,500. Get an itemized quote for your house.',
  },
  {
    question: 'Is a solar battery worth it in California?',
    answer:
      'It depends on your tariff and your outages. On NEM 3.0, midday exports earn little, so storing solar for the evening has real value; the CPUC says nearly 70 percent of net billing customers had added a battery by the end of 2024. On NEM 2.0, exports already earn near retail, so a battery is mostly a backup purchase.',
  },
  {
    question: 'How can I get a home battery in California without paying for it?',
    answer:
      'A few programs install one at no charge for households that qualify. PG&E’s Residential Storage Initiative serves income-qualified or medically vulnerable customers on circuits with five or more EPSS outages since January 1, 2024, and PG&E says its 2026 supply is almost gone. SGIP’s equity budget can cover most or all of a battery for income-qualified homes, but most of it is waitlisted. Treat any other no-cost offer as a lease or loan until the contract shows otherwise.',
  },
  {
    question: 'Who qualifies for California SGIP equity funding?',
    answer:
      'For a single-family home, the 2026 SGIP Handbook requires household income at or below 80 percent of area median income, or income already verified through CARE, FERA, the Energy Savings Assistance program, SASH or DAC-SASH. Renters can apply with the owner’s written approval. Qualifying does not mean funding is available; check the live budget first.',
  },
  {
    question: 'How many solar batteries do I need in California?',
    answer:
      'Size it to the loads you want running and for how long. Add up the watts of the circuits you will back up, multiply by the hours of an outage you want to cover, and compare that with usable kWh. One 13.5 kWh battery at a steady 1 kW lasts about 13.5 hours before solar recharges it. Central air, well pumps and EV charging push most homes to two or more units.',
  },
  {
    question: 'Is there still a battery tax credit?',
    answer:
      'Not for a battery you own that is installed now. The IRS says the residential clean energy credit is not allowed for expenditures made after December 31, 2025, and an expenditure is made when installation is complete.',
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

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                A solar battery backup system keeps the circuits you choose running when the grid goes down, and
                solar recharges it the next day. On NEM 3.0 it also stores cheap midday solar for the expensive
                evening hours. Storage adds roughly $750 to $1,000 per kWh by Lawrence Berkeley National
                Laboratory’s 2023 estimate, the federal credit ended with 2025, and a few narrow programs still help.
              </p>
              <p>
                This guide covers what a battery can run, where its bill savings come from in each utility’s
                territory, what it costs, how California’s storage fleet is growing, and who can get help paying.
                For every battery guide in one place, start at{' '}
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
                  { label: 'Median home battery, 2025', value: '13.5 kWh', note: 'About 80% California data. LBNL 2026 update.' },
                  { label: 'NEM 3.0 customers with batteries', value: 'Nearly 70%', note: 'By end of 2024. CPUC.' },
                  { label: 'California battery fleet', value: '21,112 MW', note: 'About 3,000 MW at homes and businesses. CEC, Aug. 2026.' },
                ]}
              />

              <h2>Job one: backup power when the grid is down</h2>
              <p>
                A grid-tied solar system shuts off in an outage unless a battery and backup equipment let the house
                run as an island. With them, the battery powers the circuits you chose and solar can refill it during
                the day. How many appliances run at once depends on the battery’s power output. How long they run
                depends on its stored energy.
              </p>
              <p>
                The three batteries most often quoted in California show the range, from each maker’s datasheet. A
                Tesla Powerwall 3 stores 13.5 kWh, delivers up to 11.5 kW on the grid, and lists a 185 LRA
                motor-start rating. An Enphase IQ Battery 5P stores 5.0 kWh and delivers up to 3.84 kVA, so homes
                stack several. A FranklinWH aPower 2 stores 15 kWh and delivers 10 kW continuously. Their spec sheets
                are compared side by side in{' '}
                <Link href="/battery/powerwall-vs-enphase-vs-franklinwh" className={link}>Powerwall 3 vs Enphase 5P vs FranklinWH</Link>.
              </p>

              <h3>How many batteries a California home needs</h3>
              <p>
                Start with the loads, not the brochure. List the circuits you want during an outage, their watts, and
                how many hours you want to cover. At a steady 1 kW, a 13.5 kWh battery lasts about 13.5 hours before
                any recharge. A refrigerator, lights, internet and a few outlets fit in that. Central air conditioning,
                an electric range, a well pump or EV charging do not, which is why most designs back up a
                critical-loads panel rather than the whole house. The full method is in{' '}
                <Link href="/battery/how-many-batteries-do-i-need-california" className={link}>how many batteries a home needs</Link>.
              </p>
              <p>
                For shutoffs that run several days, a battery that solar refills each afternoon behaves differently
                from a generator that burns fuel until the tank is empty. See{' '}
                <Link href="/battery/battery-backup-vs-generator-california" className={link}>battery versus generator for outages</Link>{' '}
                and{' '}
                <Link href="/blog/do-solar-panels-work-during-power-outage-california" className={link}>why solar alone goes dark in an outage</Link>.
              </p>

              <h2>Job two: bill savings, and why NEM 3.0 changed them</h2>
              <p>
                Savings depend on the tariff your solar is on. The CPUC says NEM 1.0 and NEM 2.0 credit exports at
                retail rates. If a noon export is worth about what you pay at night, storing it gains little, so on
                those accounts a battery is mainly a backup purchase.
              </p>
              <p>
                Net billing, NEM 3.0, is different. The CPUC says export credits there are based on its Avoided Cost
                Calculator and are usually lower than import rates, and it reports that nearly 70 percent of net
                billing customers had paired a battery with solar by the end of 2024. PG&amp;E’s price sheet for 2026
                applicants shows about $0.0085 per kWh for a weekday noon export in April and about $1.15 at 7 p.m. on
                an August weekday. A battery that charges from midday solar and covers your evening use avoids buying
                power at peak prices instead of exporting it for pennies. Run your own numbers with the{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={link}>NEM 3.0 battery payback guide</Link>{' '}
                and the{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>hourly export values</Link>.
              </p>

              <h3>Is solar plus storage worth more with SCE, PG&amp;E or SDG&amp;E?</h3>
              <p>
                The value of storage is the gap between what an export earns at midday and what you would pay for the
                same kWh in the evening. Each utility puts net billing customers on a different rate, so the gap
                differs.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>SCE.</strong> Solar Billing Plan customers take TOU-D-PRIME. SCE lists 59¢ per kWh on summer
                  weekdays from 4 to 9 p.m. and 26¢ off-peak. Its 2025–26 examples put summer daytime exports at about
                  $0.06 and 4–9 p.m. exports at about $0.21. Details are on the{' '}
                  <Link href="/blog/sce-solar-billing-plan" className={link}>SCE Solar Billing Plan guide</Link>.
                </li>
                <li>
                  <strong>PG&amp;E.</strong> Net billing customers take E-ELEC. PG&amp;E’s current rate table lists about
                  55¢ per kWh at the summer 4–9 p.m. peak and about 33¢ off-peak. See the{' '}
                  <Link href="/blog/pge-solar-billing-plan" className={link}>PG&amp;E Solar Billing Plan guide</Link>.
                </li>
                <li>
                  <strong>SDG&amp;E.</strong> Net billing customers take EV-TOU-5. SDG&amp;E’s August 2026 table lists
                  about 80¢ per kWh summer on-peak and 13¢ super off-peak. SDG&amp;E residential net billing customers
                  get no export bonus, because the CPUC found their paybacks were already under nine years without it.
                  See{' '}
                  <Link href="/blog/sdge-net-metering" className={link}>SDG&amp;E net metering and the Solar Billing Plan</Link>.
                </li>
              </ul>
              <p>
                Customers of LADWP and other city utilities are not on NEM 3.0 at all, which changes the math; see{' '}
                <Link href="/blog/ladwp-net-metering" className={link}>how LADWP net metering works</Link>.
              </p>

              <h3>Battery storage versus staying on the grid</h3>
              <p>
                Without a battery, a net billing home buys its evening power from the grid and exports its midday
                surplus at the avoided-cost value. With one, some of that surplus covers the evening instead. Both
                homes still pay their utility’s fixed monthly charges, which export credits cannot offset. And both
                lose power in an outage unless the battery is set up for backup. Ask a bidder to show your bill three
                ways from the same twelve months of usage: no solar, solar alone, and solar with storage.
              </p>

              <h2>What a solar battery costs in California</h2>
              <p>
                No manufacturer publishes a California installed price, so the best primary benchmarks are Lawrence
                Berkeley National Laboratory’s. Its Tracking the Sun 2024 report found storage added roughly $750 to
                $1,000 per kWh to the installed price of paired residential systems in 2023. Its 2026 data update found
                the median home battery installed in 2025 was 13.5 kWh, based about 80 percent on California data, and
                that among cash purchases, paired solar-plus-storage systems had a median price $2.1 per watt higher
                than solar alone.
              </p>
              <p>
                At $750 to $1,000 per kWh, 13.5 kWh adds about $10,000 to $13,500. Your price moves with the number of
                units, whether the main panel needs an upgrade, the backup gateway or critical-loads panel, the permit,
                and how far the battery sits from the panel. For a line-by-line build, see{' '}
                <Link href="/battery/home-battery-cost-california" className={link}>home battery cost in California</Link>.
              </p>

              <h2>California battery storage: how fast it is growing</h2>
              <p>
                The California Energy Commission reported in August 2026 that battery resources serving the state now
                total 21,112 MW. About 3,000 MW of that comes from more than 300,000 smaller systems at homes, schools,
                farms and businesses. The rest is utility-scale, including about 2,000 MW in Nevada and Arizona that
                serves the California grid.
              </p>
              <p>
                On the question of Texas overtaking California, the CEC says Texas has a similar amount of total
                installed battery capacity but its systems typically discharge for two hours or less, while
                California’s fleet is dominated by four-hour batteries. At home, Berkeley Lab found residential
                storage attachment rose nationally from 25 percent of solar installs in 2024 to 37 percent in 2025,
                driven largely by California. The statewide numbers are broken down in{' '}
                <Link href="/battery/battery-storage-capacity-california" className={link}>California battery storage capacity</Link>.
              </p>

              <h2>Can you get a solar battery at no cost?</h2>
              <p>
                Some households can, through programs with strict eligibility and limited supply. None is open to
                everyone, and most were full or nearly full when checked on September 23, 2026.
              </p>
              <p>
                PG&amp;E’s Residential Storage Initiative installs a battery, typically 10 to 13 kWh and valued at over
                $15,000, at no charge. It requires an EPSS-impacted circuit, five or more EPSS outages since January 1,
                2024, and enrollment in CARE, FERA, Medical Baseline or the Self-Identified Vulnerable program. PG&amp;E
                says its 2026 supply is almost gone. Its Reliability Battery Initiative, which installs 10 to 15 kWh on
                less reliable circuits, is full for 2026. SCE’s Critical Care Backup Battery program provides a portable
                battery, not a home system, to Medical Baseline customers in high fire risk areas who rely on powered
                medical equipment.
              </p>
              <p>
                Anything else sold as a no-cost battery deserves a close read. A lease, a PPA or a loan with no money
                down still has a monthly payment. Ask who owns the equipment and what you owe over the term.
              </p>

              <h2>Residential Solar and Storage Equity: the income-qualified budget</h2>
              <p>
                The Self-Generation Incentive Program’s Residential Solar and Storage Equity budget is the state’s
                largest battery incentive for lower-income homes. The CPUC says it holds $280 million from the state’s
                Greenhouse Gas Reduction Fund and pays $1.10 per watt-hour of storage and $3.10 per watt of new solar.
                The 2026 SGIP Handbook’s own example shows how that adds up: a 13.2 kWh battery and a 5 kW solar array
                reach a maximum incentive of $30,020, though the actual award can be lower.
              </p>
              <p>
                For a single-family home, the handbook requires household income at or below 80 percent of area median
                income, or income already verified through CARE, FERA, the Energy Savings Assistance program, SASH or
                DAC-SASH. Only new solar qualifies, not an expansion of an existing array. Renters can apply with a
                letter of approval from the owner, and customers of city utilities and rural co-ops are eligible too.
              </p>
              <p>
                Funding is the catch. On September 23, 2026 the program tracker showed the budget open only for
                customers of publicly owned utilities assigned to PG&amp;E or SCE, and waitlisted for everyone else.
                The handbook sets June 30, 2028 as the last day for new and waitlist applications. The budget-by-budget
                status, and which administrator handles your utility, are on the{' '}
                <Link href="/battery/sgip-battery-rebate-california" className={link}>SGIP battery rebate status page</Link>.
              </p>

              <h2>Other programs and rebates still running in 2026</h2>
              <p>
                The biggest help is gone: the IRS says the residential clean energy credit is not allowed for
                expenditures made after December 31, 2025. What remains is aimed at specific households. PG&amp;E
                customers with five or more Wildfire Safety outages since January 1, 2024 may qualify for{' '}
                <Link href="/battery/pge-permanent-battery-storage-rebate" className={link}>PG&amp;E’s Permanent Battery Storage Rebate</Link>,
                $7,500 for first-time battery owners. PG&amp;E showed 179 rebates left as of September 18, 2026, with a
                December 31, 2026 deadline. The full PG&amp;E list is on{' '}
                <Link href="/battery/pge-solar-battery-rebate" className={link}>PG&amp;E’s battery incentives page</Link>.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">California battery programs, what they cover and who qualifies, checked September 2026</caption>
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
                  { href: '/battery/add-powerwall-to-existing-solar', label: 'Adding a battery to existing solar' },
                  { href: '/battery/sgip-battery-rebate-california', label: 'Where each SGIP budget stands' },
                  { href: '/blog/solar-during-psps-california', label: 'Solar and batteries during a PSPS' },
                  { href: '/blog/nem-2-vs-nem-3-california', label: 'NEM 2.0 vs NEM 3.0 export rules' },
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
