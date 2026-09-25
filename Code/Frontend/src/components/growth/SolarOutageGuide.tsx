import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { DecisionPage, type Source } from "./DecisionPage";
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = "/blog/do-solar-panels-work-during-power-outage-california";
const title = "Do Solar Panels Work During a Power Outage? Check the Backup Design";
const intro = "Most grid-tied solar systems shut down when utility power is off. A system must be specifically designed to disconnect safely from the grid and support selected loads before it can provide backup power.";


// The two consts above are visible copy: `title` heads the page and `intro` is the
// opening paragraph a reader sees. The search snippet has a different job and a
// hard length budget, so it is declared separately here. Reusing `intro` as the
// meta description is what caused a draft pass to overwrite a live opening
// paragraph on the SDG&E guide.
const metaTitle = "Do Solar Panels Work During a Power Outage in California?";
const metaDescription =
  "Most grid-tied solar systems shut down when utility power is off. A backup design must disconnect safely and support chosen loads to keep power on.";

const sources: Source[] = [
  {
    label: "U.S. Department of Energy: Solar and Resilience Basics",
    url: "https://www.energy.gov/cmei/systems/solar-and-resilience-basics",
  },
  {
    label: "CPUC: Public Safety Power Shutoff FAQs",
    url: "https://www.cpuc.ca.gov/consumer-support/psps/public-safety-power-shutoff-faqs",
  },
  {
    label: "CPUC: Public Safety Power Shutoffs",
    url: "https://www.cpuc.ca.gov/PSPS",
  },
  {
    label: "CPUC: Preparing for a Power Outage",
    url: "https://www.cpuc.ca.gov/consumer-support/preparing-for-a-power-outage",
  },
  {
    label: "PG&E: UL1741 SB interconnection requirements",
    url: "https://www.pge.com/assets/pge/docs/about/pge-systems/PGE-UL1741-SB-CSIP-Requirements.pdf",
  },
  {
    label: "SMA America: Secure Power Supply explained",
    url: "https://www.sma-sunny.com/us/how-to-explain-secure-power-supply-to-homeowners/",
  },
  {
    label: "PG&E: Public Safety Power Shutoffs",
    url: "https://www.pge.com/en/outages-and-safety/safety/community-wildfire-safety-program/public-safety-power-shutoffs.html",
  },
  {
    label: "SCE: Public Safety Power Shutoff",
    url: "https://www.sce.com/outages-safety/outage-preparedness/outage-types/public-safety-power-shutoff-psps",
  },
  {
    label: "SDG&E: PSPS - more info",
    url: "https://www.sdge.com/wildfire-safety/psps-more-info",
  },
  {
    label: "CPUC: Self-Generation Incentive Program",
    url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program",
  },
  {
    label: "SGIP Program Administrator: Budget",
    url: "https://sgipsd.org/budget",
  },
  {
    label: "PG&E: Self-Generation Incentive Program",
    url: "https://www.pge.com/en/save-energy-and-money/rebates-and-incentives/self-generation-incentive-program.html",
  },
  {
    label: "SCE: Self-Generation Incentive Program",
    url: "https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/self-generation-incentive",
  },
];

export const solarOutageMetadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "article",
    url: `https://ratereliefca.com${path}`,
    modifiedTime: "2026-09-22T00:00:00Z",
    images: [CRR_SOCIAL_CARD],
  },
};

export function SolarOutageGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      topic="California solar blackout and backup design"
      sourceCheckedDate="2026-09-22"
      primaryResourceHref="/blog/solar-battery-backup-california"
      primaryResourceLabel="Battery and backup decision guide"
      comparisonHref="/blog/solar-during-psps-california"
      comparisonLabel="PSPS planning guide"
    >
      <section>
        <h2>Solar on the roof does not automatically mean power in the house</h2>
        <p>
          The U.S. Department of Energy explains that grid-connected solar
          generally depends on the grid and is designed to switch off when grid
          power is lost. The CPUC likewise says most solar systems automatically
          power down during a shutoff so they do not energize utility lines being
          handled by repair crews and first responders.
        </p>
      </section>

      <section>
        <h2>Why the grid-tied shutoff happens, by name</h2>
        <p>
          A grid-tied solar panel is a passive DC source — it doesn&apos;t
          &quot;need&quot; electricity to generate, but the inverter that turns
          that DC into usable AC power needs the grid&apos;s own AC signal to
          synchronize to before it will push power into your house. When the
          grid goes down, code requires the inverter to stop. This is called
          anti-islanding, and it&apos;s not optional: PG&amp;E&apos;s own
          interconnection requirements state that the utility requires
          UL1741 SB&ndash;certified inverters for new interconnections
          (effective August 29, 2023) and has incorporated IEEE 1547.1-2020
          test procedures into its testing regime for that certification
          (PG&amp;E, accessed 2026-09-22). The rule exists so a solar-fed
          circuit can&apos;t stay energized and shock a lineworker who thinks
          the line is dead — it&apos;s a safety requirement, not a limitation
          your installer forgot to design around.
        </p>
      </section>

      <section>
        <h2>A backup system has to create a safe electrical island</h2>
        <p>
          A backup-capable design disconnects the home from the utility grid and
          establishes a controlled source for the selected circuits. That usually
          involves compatible controls, an inverter that supports the intended
          backup mode and stored energy. The equipment list alone is not enough.
          Ask for a one-line diagram and written description of what happens when
          grid power fails, at night and when the battery reaches its reserve.
        </p>
      </section>

      <section>
        <h2>Two ways to actually keep the power on</h2>
        <p>
          There are two hardware paths that let a grid-tied system provide
          power once the grid is down, and they solve different problems.
        </p>
        <p>
          <strong>Battery with a backup gateway.</strong> This is the path the
          rest of this page already covers — a battery and transfer equipment
          create a controlled island for selected circuits, independent of
          the grid. It can run through the night and keeps working after
          dark, which the second option cannot.
        </p>
        <p>
          <strong>An inverter with a secure power outlet.</strong> Some
          grid-tied string inverters include a dedicated outlet that works
          without a battery. SMA&apos;s Sunny Boy line, which uses what SMA
          calls a Secure Power Supply, is the example most California
          installers cite: when the grid fails, you flip a switch on the
          inverter and it feeds one dedicated outlet — up to 2,000 watts (20
          amps) — directly from whatever the panels are producing at that
          moment (SMA America, accessed 2026-09-22). No battery required,
          typically a $350&ndash;$400 install add-on, no 240-volt loads, and
          it only works while the panels are producing — nothing at night or
          on a heavily overcast day. A narrow fix (a fridge, a phone, a
          medical device by day), not whole-home backup.
        </p>
      </section>

      <section>
        <h2>Choose the loads before choosing battery capacity</h2>
        <p>
          Write down the equipment that must stay on: refrigeration, lights,
          communications, medical devices, well pumps, garage access or heating
          and cooling. For each load, identify running power, startup demand and
          daily use. A whole-home label does not show whether every large appliance
          can operate at once or how long the stored energy lasts.
        </p>
        <p>
          How long a battery keeps your chosen circuits running depends on
          the battery&apos;s usable capacity, how many circuits you put on
          it, and how much those circuits draw — there&apos;s no single
          &quot;hours of backup&quot; number that applies to every home, and
          we won&apos;t invent one here. For a sizing method built from your
          own panel and usage instead of a sales estimate, see{' '}
          <Link className="underline" href="/battery/how-many-batteries-do-i-need-california">
            how many batteries do I need in California?
          </Link>
        </p>
      </section>

      <section>
        <h2>Backup proposal checklist</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr><th className="p-4">Get in writing</th><th className="p-4">What it should answer</th></tr>
            </thead>
            <tbody>
              {[
                ["Backed-up circuits", "Which exact circuits remain energized, and which loads are excluded?"],
                ["Usable energy", "How much stored energy is available after reserve settings and operating limits?"],
                ["Power output", "What continuous and startup loads can the system support at the same time?"],
                ["Outage charging", "Can solar restart or charge the battery while islanded, and under what conditions?"],
                ["Operating modes", "What happens at night, in low sunlight and when the battery reaches reserve?"],
                ["Commissioning", "Who tests the outage transition and teaches the owner how to operate it?"],
              ].map(([item, answer]) => (
                <tr className="border-t" key={item}>
                  <th className="p-4 align-top" scope="row">{item}</th>
                  <td className="p-4">{answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Test the ugly scenarios before signing</h2>
        <p>
          Ask the bidder to model a nighttime outage, low-sun days, smoke or shade,
          simultaneous motor starts and an outage that lasts longer than one day.
          Compare those results with the household&apos;s actual critical loads. No
          battery lasts a guaranteed number of hours without specifying the load,
          starting state of charge and energy available during the outage.
        </p>
      </section>

      <section>
        <h2>PSPS planning is larger than the solar system</h2>
        <p>
          California utilities can use a Public Safety Power Shutoff when weather
          and fire conditions create risk. A PSPS is a deliberate,
          utility-initiated shutoff during high fire-risk weather — different
          from an equipment outage, and one solar alone (without a battery or
          secure-power-outlet inverter) does nothing to prevent. What each
          major California utility says about it, checked this session:
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Utility</th>
                <th className="p-4">Why they call one</th>
                <th className="p-4">Advance notice</th>
                <th className="p-4">What they say about duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th className="p-4 align-top" scope="row">PG&amp;E</th>
                <td className="p-4 align-top">High wind, dry vegetation, and a National Weather Service Red Flag Warning combined (PG&amp;E, accessed 2026-09-22)</td>
                <td className="p-4 align-top">&quot;We will always do our best to alert you... in some cases we may not send the first alert until the same day&quot;</td>
                <td className="p-4 align-top">Not specified on the fetched page</td>
              </tr>
              <tr className="border-t">
                <th className="p-4 align-top" scope="row">SCE</th>
                <td className="p-4 align-top">Fire-weather conditions — strong winds, dry vegetation, low humidity — evaluated on a 4&ndash;7 day lookout, refined through 1&ndash;4 hours before shutoff (SCE, accessed 2026-09-22)</td>
                <td className="p-4 align-top">Staged notifications from 4&ndash;7 days out down to 1&ndash;4 hours before</td>
                <td className="p-4 align-top">Not specified on the fetched page</td>
              </tr>
              <tr className="border-t">
                <th className="p-4 align-top" scope="row">SDG&amp;E</th>
                <td className="p-4 align-top">Wind speed, vegetation moisture, temperature, humidity, and field/fire-agency observations (SDG&amp;E, accessed 2026-09-22)</td>
                <td className="p-4 align-top">Staged at roughly 48, 24, 12, and 1&ndash;4 hours before</td>
                <td className="p-4 align-top">&quot;Power will remain shut off as long as the threat to public safety continues&quot;; restoration needs 4&ndash;8 daylight hours of line patrol per circuit and &quot;can take days&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          None of the three utility pages fetched this session recommend a
          specific backup technology; SDG&amp;E&apos;s page notes Community
          Resource Centers for charging small devices and mentions keeping a
          generator on hand as an option. Keep utility contact information
          and alerts current, build a household outage plan and identify a
          second way to support essential medical or accessibility equipment.
          The CPUC says customers using electricity-dependent medical devices
          should plan for an extended outage.
        </p>
      </section>

      <section>
        <h2>SGIP&apos;s Equity Resiliency incentive, for PSPS-affected households</h2>
        <p>
          Separate from the general storage incentive on our{' '}
          <Link className="underline" href="/battery">battery hub</Link>, SGIP
          has an <strong>Equity Resiliency</strong> budget built for
          PSPS-affected households. CPUC&apos;s SGIP page lists the rate at{' '}
          <strong>$1,000 per kWh</strong> of installed storage (CPUC, accessed
          2026-09-22); the program administrator&apos;s budget page says the
          incentive &quot;could cover as much as 100% of the cost&quot; (SGIP
          Program Administrator, accessed 2026-09-22). Eligibility needs one
          condition from each of two groups:
        </p>
        <p>
          <strong>Location or outage history:</strong> in a Tier 2 or 3 High
          Fire-Threat District, or has experienced multiple PSPS events
          (sources differ slightly on the exact threshold — SGIP&apos;s own
          budget page says two or more PSPS events, or one PSPS plus one
          wildfire-caused outage since January 1, 2017; PG&amp;E&apos;s SGIP
          page says more than two PSPS events, or five or more Enhanced
          Powerline Safety Setting outages since 2023).
        </p>
        <p>
          <strong>Household vulnerability:</strong> enrolled in a utility
          medical baseline program, meets low-income criteria, relies on an
          electric well pump for water, or already qualifies for CARE, ESA,
          SASH, or DAC-SASH.
        </p>
        <p>
          Budget availability changes by utility territory and by month, and
          the CPUC&apos;s own page currently shows this budget listed as
          &quot;available through 2025&quot; — worth confirming directly
          before anyone counts on it. For the current, per-utility
          reservation status, see:{' '}
          <Link className="underline" href="/battery/sgip-battery-rebate-california">
            SGIP battery rebate status in California
          </Link>
        </p>
      </section>

      <section>
        <h2>Require a real commissioning test</h2>
        <p>
          Before final payment, ask the installer to demonstrate the grid-loss
          transition, identify the backed-up circuits, show the reserve and load
          controls, and leave written shutdown and restart instructions. Keep the
          installer, equipment and utility support contacts with the electrical
          diagram. For the storage decision itself, use the <Link className="underline" href="/blog/solar-battery-backup-california">battery and backup guide</Link>.
        </p>
      </section>

      <section>
        <h2>Generator vs. battery, in practice</h2>
        <p>
          Both keep the lights on; they aren&apos;t the same purchase. A
          battery is silent, switches over automatically through the gateway
          described above, and (paired with solar) recharges without fuel. A
          portable or standby generator runs on gasoline, propane, or natural
          gas, has to be started and fueled, and produces exhaust — it must
          run outside, away from doors and windows. SCE offers separate, much
          smaller rebates for the two smaller devices:{' '}
          <strong>$150 for a qualifying portable power station</strong>{' '}
          (limit five per address) and{' '}
          <strong>
            $200, or $600 for income-qualified or medical baseline customers,
            for a qualifying portable generator
          </strong>
          , for customers in a Tier 2 or 3 High Fire-Threat District (SCE,
          accessed 2026-09-22). SCE also runs a{' '}
          <strong>Critical Care Backup Battery (CCBB)</strong> program: free
          portable backup batteries, with delivery, setup and training
          provided at no cost, for customers who live in a high fire-risk
          area, are enrolled in SCE&apos;s Medical Baseline Allowance program,
          and require electrically powered medical equipment (SCE, Critical
          Care Backup Battery Program, accessed 2026-09-22). No
          runtime-in-hours figure is stated for either option — it depends on
          the unit and the load, same as a home battery.
        </p>
      </section>
      <RelatedGuides
        heading="Choosing the equipment that carries the outage"
        intro="Backup is a hardware and sizing decision before it is a price decision."
        links={[
          { href: "/battery", label: "Home battery guides for California" },
          { href: "/battery/battery-backup-vs-generator-california", label: "Battery against a backup generator" },
          { href: "/battery/tesla-powerwall-3-cost-california", label: "What a Powerwall 3 costs installed in California" },
          { href: "/battery/powerwall-vs-enphase-vs-franklinwh", label: "Powerwall 3, Enphase 5P and FranklinWH compared" },
          { href: "/battery/tesla-powerwall-alternatives", label: "Alternatives to a Powerwall" },
        ]}
      />
    </DecisionPage>
  );
}
