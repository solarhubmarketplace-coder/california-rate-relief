import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleHub } from '@/components/shared/ArticleRoute';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { FaqBlock } from '@/components/trust/FaqBlock';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { FACTS, formatFactDate, usd } from '@/data/facts';

// 2026-09-24 (plan item 5.1): the SGIP equity incentive, the SGIP tracker date
// and PG&E's rebate count read from src/data/facts.ts.
const sgipEquity = FACTS.sgipEquityBudget;
const pbsr = FACTS.pgeBatteryRebate;

// 2026-09-23 Tier 3 (claude/t3-misc-20260923): PG&E's rebate count updated to
// the figure on its page when read on 2026-09-23 (179 as of 09/18/2026), and a
// short FAQ added for two small questions this hub now answers: PG&E's
// no-charge battery programs and California's statewide storage total. Sources
// fetched 2026-09-23: PG&E (Residential Storage Initiative, Reliability Battery
// Initiative, Permanent Battery Storage Rebate) and the California Energy
// Commission's August 7, 2026 release. FaqBlock emits the FAQPage schema from
// the same strings.
const hubFaqs: FaqJsonLdItem[] = [
  {
    question: 'Does PG&E have a free home battery program?',
    answer:
      'For a narrow group, yes. PG&E’s Residential Storage Initiative says it provides permanent backup batteries “free of charge,” typically 10 to 13 kWh, to customers who have had five or more Enhanced Powerline Safety Settings outages since January 1, 2024, are served by an affected circuit, and are enrolled in CARE, FERA, Medical Baseline or the Self-Identified Vulnerable program. PG&E contacts eligible customers by letter or email, and on September 23, 2026 its page said batteries were almost gone for 2026. Its Reliability Battery Initiative, for circuits with worse-than-average reliability, said it was full for 2026. Everyone else pays for the battery; the $7,500 Permanent Battery Storage Rebate is the main PG&E offset, for accounts with five or more Wildfire Safety outages since January 1, 2024.',
  },
  {
    question: 'How much battery storage does California have now?',
    answer:
      'The California Energy Commission counted 21,112 megawatts of battery storage serving the state’s grid on August 7, 2026, up from less than 700 megawatts in 2019. Nearly 16,000 megawatts are utility-scale systems in California, about 2,000 megawatts are in Nevada and Arizona serving California’s grid, and about 3,000 megawatts come from more than 300,000 smaller batteries at homes, schools, farms and businesses.',
  },
];

export const metadata: Metadata = {
  title: 'Home Battery Storage in California: Sizing, Cost, SGIP',
  description: 'Home batteries in California: kWh sizing, installed cost, PG&E and SGIP rebates in 2026, NEM 3.0 payback, and Powerwall 3, Enphase and FranklinWH specs.',
  alternates: { canonical: '/battery' },
};

/*
 * Schema and CTA both come from <ArticleHub/> (src/components/shared/ArticleRoute.tsx):
 *   - CollectionPage + ItemList of the cluster's guides. This route is an index,
 *     not an article — the writing is on the child pages, each of which emits its
 *     own Article node. Do not add an Article here.
 *   - <Header/> for the sitewide eligibility CTA, and HeroQuickCheck after the
 *     intro with SolarInquiry at the end as the in-body ask (2026-09-23).
 */
export default function Page() {
  return (
    <ArticleHub
      cluster="battery"
      title="Home battery storage in California"
      intro="A home battery in California usually means 5–15 kWh of usable storage per unit, stacked into a larger system if you want whole-home backup. What it costs, whether an SGIP incentive applies, and whether you're buying it for outage backup or to cut bills under NEM 3.0 all depend on your utility, your panel, and how much you use in the evening. This page covers sizing, cost, SGIP, and how the three systems we track compare on paper — with links to a full walkthrough for each."
      content={
        <>
          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-purpose">
            <h2 id="battery-purpose" className="text-xl font-bold text-foreground">Choose the project purpose first</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li><Link href="/blog/solar-battery-backup-california" className="text-primary underline">Backup loads and outage goals</Link> need selected circuits, operating duration and a commissioning plan.</li>
              <li><Link href="/battery/home-battery-cost-california" className="text-primary underline">Battery cost and retrofit scope</Link> need the existing equipment, ownership, warranty, monitoring and electrical records.</li>
              <li><a href="https://service.tesla.com/docs/Public/Energy/Powerwall/Powerwall-2-Owners-Manual-NA-EN/GUID-DDDC3718-3289-49C9-B055-3B2767BE0CBE.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">Storage without solar</a> is a configuration to verify with the proposed equipment, installer and utility; it is not a universal permission or savings result.</li>
              <li>Use the plan comparison in your utility account before treating a battery as the answer; the <Link href="/blog/sce-time-of-use-rates-2026" className="text-primary underline">SCE</Link> and <Link href="/blog/sdge-time-of-use-rates-2026" className="text-primary underline">SDG&amp;E</Link> guides explain what to confirm on the bill.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-sizing">
            <h2 id="battery-sizing" className="text-xl font-bold text-foreground">How much battery do you actually need? (sizing by kWh)</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">Home batteries are sold and installed by usable capacity, and the number you need depends on what you want the battery to do, not on a sales chart. As a starting reference point, based on the manufacturer-published capacities of the three systems compared below:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li><strong>~5 kWh (single unit)</strong> — an Enphase IQ Battery 5P on its own (<a href="https://enphase.com/en-in/download/iq-battery-5p-data-sheet" target="_blank" rel="noopener external" className="text-primary underline">Enphase Energy</a>, accessed 2026-09-22). Enough to shift some evening usage off peak rates or keep a few essential circuits (router, some lighting, a refrigerator) running briefly. Stackable if you need more.</li>
              <li><strong>13.5–15 kWh (single unit)</strong> — a Tesla Powerwall 3 (<a href="https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf" target="_blank" rel="noopener external" className="text-primary underline">Tesla, Inc.</a>, accessed 2026-09-22) or a FranklinWH aPower 2 (<a href="https://www.franklinwh.com/products/apower2-home-battery-backup/" target="_blank" rel="noopener external" className="text-primary underline">FranklinWH</a>, accessed 2026-09-22). This is the range most California installers quote for &ldquo;one battery&rdquo; backup: a handful of circuits, or a full refrigerator-plus-lighting-plus-electronics load, for part of a day.</li>
              <li><strong>20 kWh and up (stacked units)</strong> — two or more units combined. This is where whole-home backup, an EV charger staying live, or multi-day outage coverage starts to become realistic.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">These are capacity tiers, not a promise of what any specific home will get through an outage — how long a battery actually lasts depends on your panel, your loads, and whether HVAC is included. For a sizing method built from your own utility bill instead of a spec sheet, see our full guide: <Link href="/battery/how-many-batteries-do-i-need-california" className="text-primary underline">How many batteries do I need in California &rarr;</Link></p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-coupling">
            <h2 id="battery-coupling" className="text-xl font-bold text-foreground">AC-coupled vs. DC-coupled: what it means for your system</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">You&apos;ll see &ldquo;AC-coupled&rdquo; and &ldquo;DC-coupled&rdquo; used to describe how a battery connects to solar. A DC-coupled battery ties into the solar array&apos;s output before it&apos;s converted to AC power, which can be more efficient when the battery and solar are installed together. An AC-coupled battery connects on the home&apos;s AC side, after the existing solar inverter — this is usually the simpler path when you&apos;re adding a battery to solar you already have, since it doesn&apos;t require touching the original inverter. Which configuration your quote uses depends on your existing equipment and your installer&apos;s design; ask specifically, since it affects both installed cost and how the system is wired into your panel.</p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-backup-vs-savings">
            <h2 id="battery-backup-vs-savings" className="text-xl font-bold text-foreground">Backup power vs. bill savings under NEM 3.0 — two different reasons to buy</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">California homeowners buy batteries for two different jobs, and it matters which one you&apos;re solving for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li><strong>Backup power.</strong> The battery&apos;s job is to keep the lights, refrigerator, and anything else you choose on a critical-loads circuit running during a grid outage or Public Safety Power Shutoff event. This value doesn&apos;t show up as a dollar figure on a bill — it&apos;s insurance, not arbitrage.</li>
              <li><strong>Bill savings under NEM 3.0.</strong> Since NEM 3.0 lowered what your utility credits you for exporting solar to the grid, some homeowners instead store their solar during the day and use it themselves in the evening, when retail rates are highest, rather than exporting it for a low credit. Whether this pencils out — and by how much — depends on your utility&apos;s export credit, your time-of-use rate, and how you use power at night.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">Don&apos;t let a sales pitch collapse these into one story. For the utility-by-utility export credits and how to run the payback math on your own bill, see: <Link href="/battery/battery-payback-nem-3-california" className="text-primary underline">Battery payback under NEM 3.0 &rarr;</Link></p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-cost">
            <h2 id="battery-cost" className="text-xl font-bold text-foreground">What does a home battery cost in California?</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">Installed cost depends on the system, your panel, and your installer&apos;s labor rates — there isn&apos;t one statewide number. What the primary sources below confirm (checked September 22, 2026):</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li><strong>SGIP incentive value:</strong> California&apos;s Self-Generation Incentive Program pays {usd(sgipEquity.value.storagePerKwh)} per kWh of installed storage capacity under the Residential Solar and Storage Equity budget, for households that qualify and reserve funds before that budget closes (<a href={sgipEquity.sourceUrl} target="_blank" rel="noopener external" className="text-primary underline">CPUC</a>, checked {formatFactDate(sgipEquity.checkedAt)}). On the program administrators&apos; tracker as of {formatFactDate(FACTS.sgipStatus.checkedAt)}, the ratepayer-funded version of that budget is closed, the state-funded AB 209 version is waitlisted for PG&amp;E, SCE, CSE, SoCalGas and LADWP electric customers, and only the budget for income-qualified customers of publicly owned utilities in PG&amp;E&apos;s and SCE&apos;s programs shows open (<a href="https://www.selfgenca.com/home/program_metrics/" target="_blank" rel="noopener external" className="text-primary underline">selfgenca.com</a>). A waitlist does not promise a rebate; see the SGIP section below.</li>
              <li><strong>Total installed price by system:</strong> no manufacturer publishes a California installed price. The closest primary benchmark is national: Lawrence Berkeley National Laboratory&apos;s <a href="https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf" target="_blank" rel="noopener external" className="text-primary underline">Tracking the Sun (2024 Edition)</a> estimates that storage added roughly $750 to $1,000 per kWh to the installed price of paired residential systems in 2023. See the <Link href="/battery/tesla-powerwall-3-cost-california" className="text-primary underline">Powerwall 3 pricing page</Link> for what drives a Powerwall quote. For a full breakdown of what goes into an installed quote beyond hardware (electrical work, permits, a critical-loads panel), see: <Link href="/battery/home-battery-cost-california" className="text-primary underline">Home battery cost in California &rarr;</Link></li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80"><strong>Can you get a home battery without solar in California?</strong> Yes — batteries can charge from the grid on their own, without solar panels attached. In practice, most California incentive programs and utility rate designs (including SGIP&apos;s main residential track) are built around pairing storage with solar, so a standalone battery may qualify for fewer incentives and won&apos;t reduce your solar export loss under NEM 3.0, since there&apos;s no solar to export. It still works as a straightforward backup-power purchase.</p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-sgip">
            <h2 id="battery-sgip" className="text-xl font-bold text-foreground">How SGIP works, in plain terms</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">The Self-Generation Incentive Program (SGIP) is a California incentive for distributed energy systems installed at a customer&apos;s home, including battery storage, and it&apos;s overseen by the CPUC but run day to day by Program Administrators assigned by utility territory — PG&amp;E, SCE, SDG&amp;E (through the Center for Sustainable Energy), SoCalGas, and LADWP (<a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program" target="_blank" rel="noopener external" className="text-primary underline">CPUC</a>, accessed 2026-09-22). The mechanism is a per-kWh rebate: you (or your installer, on your behalf) apply through your territory&apos;s Program Administrator, get funds reserved against that budget category, install the system, and meet program requirements within a set window. The program administrators removed the demand response enrollment requirement for the Residential Storage Equity and Residential Solar and Storage Equity budgets in January 2026, and the ratepayer-funded budgets closed to new applications at the end of 2025 under CPUC Decision 25-12-003 (<a href="https://www.selfgenca.com/home/about/" target="_blank" rel="noopener external" className="text-primary underline">SGIP announcements</a>, checked 2026-09-23).</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">Not every SGIP budget category is open everywhere right now, and reservation is not the same as funding in hand — a program name on a quote is not money set aside for your project. For the live budget status by utility and category, checked as of September 10, 2026, see: <Link href="/battery/sgip-battery-rebate-california" className="text-primary underline">SGIP battery rebate status in California &rarr;</Link></p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-rebates">
            <h2 id="battery-rebates" className="text-xl font-bold text-foreground">Battery rebates that still exist in 2026</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">The federal residential clean energy credit does not apply to a battery whose installation is completed after December 31, 2025 (<a href="https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb" target="_blank" rel="noopener external" className="text-primary underline">IRS</a>, checked 2026-09-23). What is left is narrower:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li><strong>PG&amp;E&apos;s {usd(pbsr.value.amountUsd)} rebate</strong> for first-time battery owners whose accounts have had five or more Wildfire Safety outages since January 1, 2024; PG&amp;E&apos;s page showed {pbsr.value.remaining} rebates remaining as of {formatFactDate(pbsr.value.remainingAsOf)} (<a href={pbsr.sourceUrl} target="_blank" rel="noopener external" className="text-primary underline">PG&amp;E</a>, checked {formatFactDate(pbsr.checkedAt)}). Every condition, what it covers against a <Link href="/battery/tesla-powerwall-3-cost-california" className="text-primary underline">Powerwall 3&apos;s installed cost</Link>, and the deadline: <Link href="/battery/pge-permanent-battery-storage-rebate" className="text-primary underline">the Permanent Battery Storage Rebate, explained</Link>.</li>
              <li><strong>Everything else a PG&amp;E customer can use</strong>, from no-charge batteries for some CARE and Medical Baseline households to grid-event payments: <Link href="/battery/pge-solar-battery-rebate" className="text-primary underline">PG&amp;E solar battery incentives in one table</Link>.</li>
              <li><strong>SGIP&apos;s income-qualified equity budget</strong>, mostly waitlisted, covered in the SGIP section above and on the <Link href="/battery/sgip-battery-rebate-california" className="text-primary underline">SGIP status page</Link>. For solar incentives beyond storage, see the <Link href="/blog/california-solar-tax-credit-2026" className="text-primary underline">California solar incentives overview</Link>.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-comparison">
            <h2 id="battery-comparison" className="text-xl font-bold text-foreground">Compare the main systems, at a glance</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">At a glance: the Powerwall 3 stacks the most usable capacity into one unit (13.5 kWh, 10-year warranty per <a href="https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf" target="_blank" rel="noopener external" className="text-primary underline">Tesla, Inc.</a>, accessed 2026-09-22); the Enphase IQ Battery 5P is the smallest single building block (5.0 kWh, warrantied up to 15 years or 6,000 cycles at &gt;60% capacity retention per <a href="https://enphase.com/en-in/download/iq-battery-5p-data-sheet" target="_blank" rel="noopener external" className="text-primary underline">Enphase Energy</a>, accessed 2026-09-22) if you want to size in small increments; the FranklinWH aPower 2 has the highest single-unit continuous output (10 kW, 15-year/60 MWh throughput warranty per <a href="https://www.franklinwh.com/products/apower2-home-battery-backup/" target="_blank" rel="noopener external" className="text-primary underline">FranklinWH</a>, accessed 2026-09-22). Full specs, scaling limits, and which fits which house: <Link href="/battery/powerwall-vs-enphase-vs-franklinwh" className="text-primary underline">Powerwall vs. Enphase vs. FranklinWH &rarr;</Link></p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-install">
            <h2 id="battery-install" className="text-xl font-bold text-foreground">Choosing who installs it, and adding storage to older solar</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li><Link href="/battery/solar-battery-company" className="text-primary underline">How to vet a battery company</Link>: the CSLB license class that covers battery work, the CPUC consumer guide you sign, and the handover documents to keep.</li>
              <li><Link href="/battery/add-powerwall-to-existing-solar" className="text-primary underline">Adding a Powerwall to solar you already own</Link>: Tesla&apos;s limit on existing solar per Powerwall, and what a battery-only addition means for NEM 2.0.</li>
              <li><Link href="/battery/battery-backup-vs-generator-california" className="text-primary underline">Powerwall or generator for outages</Link>, compared on runtime, fuel, noise and PG&amp;E&apos;s outage rebates.</li>
              <li><Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar battery backup cost and savings</Link>, for the bill-savings side of the same decision.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-nem">
            <h2 id="battery-nem" className="text-xl font-bold text-foreground">Batteries and your bill under NEM 3.0</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">Under the net billing tariff, export credits are usually below retail rates but can rise above them on late summer evenings, and the CPUC reports that nearly 70 percent of net billing customers had paired a battery with solar by the end of 2024 (<a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing" target="_blank" rel="noopener external" className="text-primary underline">CPUC</a>, checked 2026-09-23). The hourly values are published: see <Link href="/blog/nem-3-export-rates-california" className="text-primary underline">what NEM 3.0 pays for exported solar, by hour</Link>, and the <Link href="/blog/nem-2-vs-nem-3-california" className="text-primary underline">NEM 2.0 vs. NEM 3.0 comparison</Link> for how the tariffs differ. If you are still on NEM 2.0, <Link href="/blog/when-does-nem-2-expire" className="text-primary underline">the 20-year legacy clock</Link> decides when a battery starts paying its way.</p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-grid">
            <h2 id="battery-grid" className="text-xl font-bold text-foreground">California&apos;s battery fleet, and who shapes the rules</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">The state counted 21,112 MW of battery storage serving its grid in August 2026, about 3,000 MW of it in homes, schools and businesses (<a href="https://www.energy.ca.gov/news/2026-08/california-surpasses-21000-megawatts-battery-resources-supporting-states" target="_blank" rel="noopener external" className="text-primary underline">California Energy Commission</a>, August 7, 2026). The year-by-year totals and the Texas comparison are on <Link href="/battery/battery-storage-capacity-california" className="text-primary underline">California battery storage capacity</Link>. For the industry group that argues storage policy at the CPUC, see <Link href="/battery/solar-and-storage-association-california" className="text-primary underline">what CALSSA is and what it has argued</Link>.</p>
          </section>
        </>
      }
      after={
        <>
          <FaqBlock items={hubFaqs} id="battery-faq" heading="Home battery questions" />
          <HubSpokeLinks hub="battery" currentPath="/battery" title="More battery and backup guides" />
          <HubSpokeLinks hub="nem" currentPath="/battery" title="NEM 3.0 and solar billing, where battery savings come from" />
        </>
      }
    />
  );
}
