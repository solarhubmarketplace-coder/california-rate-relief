import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { DecisionPage, type Source } from "./DecisionPage";

const path = "/blog/do-solar-panels-work-during-power-outage-california";
const title = "Will My Solar Panels Work in a Blackout? Check the Backup Design";
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
    modifiedTime: "2026-09-12T00:00:00Z",
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
      sourceCheckedDate="2026-09-12"
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
        <h2>Choose the loads before choosing battery capacity</h2>
        <p>
          Write down the equipment that must stay on: refrigeration, lights,
          communications, medical devices, well pumps, garage access or heating
          and cooling. For each load, identify running power, startup demand and
          daily use. A whole-home label does not show whether every large appliance
          can operate at once or how long the stored energy lasts.
        </p>
      </section>

      <section>
        <h2>Backup proposal checklist</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100">
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
          and fire conditions create risk. Keep utility contact information and
          alerts current, build a household outage plan and identify a second way
          to support essential medical or accessibility equipment. The CPUC says
          customers using electricity-dependent medical devices should plan for
          an extended outage.
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
