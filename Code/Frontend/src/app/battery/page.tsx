import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleHub } from '@/components/shared/ArticleRoute';

export const metadata: Metadata = {
  title: 'Home Battery Storage in California: Sizing, Cost, SGIP',
  description: 'How many kWh you need, what home batteries cost in California, how SGIP works, and specs for Powerwall 3, Enphase, and FranklinWH.',
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
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">Don&apos;t let a sales pitch collapse these into one story. For the utility-by-utility payback math, export credits, and simple-payback ranges, see: <Link href="/battery/battery-payback-nem-3-california" className="text-primary underline">Battery payback under NEM 3.0 &rarr;</Link></p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-cost">
            <h2 id="battery-cost" className="text-xl font-bold text-foreground">What does a home battery cost in California?</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">Installed cost depends on the system, your panel, and your installer&apos;s labor rates — there isn&apos;t one statewide number. What we can confirm from sources checked this session:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li><strong>SGIP incentive value:</strong> California&apos;s Self-Generation Incentive Program pays $1,100 per kWh of installed storage capacity under the Residential Solar and Storage Equity budget, for households that qualify and reserve funds before that budget closes (<a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program" target="_blank" rel="noopener external" className="text-primary underline">CPUC</a>, accessed 2026-09-22). For a 13.5 kWh Powerwall 3, that&apos;s up to $14,850 off — if your household qualifies for the equity budget and funds are available in your territory. Eligibility and budget status vary by utility; see the SGIP section below.</li>
              <li><strong>Total installed price by system:</strong> for Powerwall 3 specifically, see our sourced installer-quote range on the <Link href="/battery/tesla-powerwall-3-cost-california" className="text-primary underline">Powerwall 3 pricing page</Link>. We do not have a manufacturer-published or CPUC/CEC-benchmarked installed-price figure for the Enphase IQ Battery 5P or FranklinWH aPower 2 usable in California this session. For a full breakdown of what goes into an installed quote beyond hardware (electrical work, permits, a critical-loads panel), see: <Link href="/battery/home-battery-cost-california" className="text-primary underline">Home battery cost in California &rarr;</Link></li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80"><strong>Can you get a home battery without solar in California?</strong> Yes — batteries can charge from the grid on their own, without solar panels attached. In practice, most California incentive programs and utility rate designs (including SGIP&apos;s main residential track) are built around pairing storage with solar, so a standalone battery may qualify for fewer incentives and won&apos;t reduce your solar export loss under NEM 3.0, since there&apos;s no solar to export. It still works as a straightforward backup-power purchase.</p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-sgip">
            <h2 id="battery-sgip" className="text-xl font-bold text-foreground">How SGIP works, in plain terms</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">The Self-Generation Incentive Program (SGIP) is a California incentive for distributed energy systems installed at a customer&apos;s home, including battery storage, and it&apos;s overseen by the CPUC but run day to day by Program Administrators assigned by utility territory — PG&amp;E, SCE, SDG&amp;E (through the Center for Sustainable Energy), SoCalGas, and LADWP (<a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program" target="_blank" rel="noopener external" className="text-primary underline">CPUC</a>, accessed 2026-09-22). The mechanism is a per-kWh rebate: you (or your installer, on your behalf) apply through your territory&apos;s Program Administrator, get funds reserved against that budget category, install the system, and meet program requirements — including, in most residential tracks, enrolling in a qualifying demand response program — within a set window.</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">Not every SGIP budget category is open everywhere right now, and reservation is not the same as funding in hand — a program name on a quote is not money set aside for your project. For the live budget status by utility and category, checked as of September 10, 2026, see: <Link href="/battery/sgip-battery-rebate-california" className="text-primary underline">SGIP battery rebate status in California &rarr;</Link></p>
          </section>

          <section className="mb-10 rounded-xl border border-border bg-card p-5 md:p-6" aria-labelledby="battery-comparison">
            <h2 id="battery-comparison" className="text-xl font-bold text-foreground">Compare the main systems, at a glance</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">At a glance: the Powerwall 3 stacks the most usable capacity into one unit (13.5 kWh, 10-year warranty per <a href="https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf" target="_blank" rel="noopener external" className="text-primary underline">Tesla, Inc.</a>, accessed 2026-09-22); the Enphase IQ Battery 5P is the smallest single building block (5.0 kWh, warrantied up to 15 years or 6,000 cycles at &gt;60% capacity retention per <a href="https://enphase.com/en-in/download/iq-battery-5p-data-sheet" target="_blank" rel="noopener external" className="text-primary underline">Enphase Energy</a>, accessed 2026-09-22) if you want to size in small increments; the FranklinWH aPower 2 has the highest single-unit continuous output (10 kW, 15-year/60 MWh throughput warranty per <a href="https://www.franklinwh.com/products/apower2-home-battery-backup/" target="_blank" rel="noopener external" className="text-primary underline">FranklinWH</a>, accessed 2026-09-22). Full specs, scaling limits, and which fits which house: <Link href="/battery/powerwall-vs-enphase-vs-franklinwh" className="text-primary underline">Powerwall vs. Enphase vs. FranklinWH &rarr;</Link></p>
          </section>
        </>
      }
    />
  );
}
