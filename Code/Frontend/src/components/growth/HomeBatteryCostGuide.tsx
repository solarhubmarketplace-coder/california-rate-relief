import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "./DecisionPage";

const path = "/battery/home-battery-cost-california";
const title = "How Much Does a Solar Battery Cost? Build the Installed Price";
const intro = "There is no useful California battery price without the equipment, usable energy, power output, backup circuits, electrical work, permits, service and financing. Make every bidder price the same scope before you compare totals.";

const sources: Source[] = [
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label: "CPUC: Public Safety Power Shutoff FAQs",
    url: "https://www.cpuc.ca.gov/consumer-support/psps/public-safety-power-shutoff-faqs",
  },
  {
    label: "CPUC: Net Energy Metering and Net Billing",
    url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing",
  },
  {
    label: "U.S. Department of Energy: Solar and Resilience Basics",
    url: "https://www.energy.gov/cmei/systems/solar-and-resilience-basics",
  },
  {
    label: "IRS: Residential Clean Energy Credit",
    url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  },
];

export const homeBatteryCostMetadata: Metadata = {
  title,
  description: intro,
  alternates: { canonical: path },
  openGraph: {
    title,
    description: intro,
    type: "article",
    url: `https://ratereliefca.com${path}`,
    modifiedTime: "2026-09-12T00:00:00Z",
  },
};

export function HomeBatteryCostGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      topic="California home solar battery cost and quote"
      sourceCheckedDate="2026-09-12"
      primaryResourceHref="/blog/solar-battery-backup-california"
      primaryResourceLabel="Battery and backup decision guide"
      comparisonHref="/blog/do-solar-panels-work-during-power-outage-california"
      comparisonLabel="Outage design checklist"
    >
      <section>
        <h2>The advertised battery price is not the installed project price</h2>
        <p>
          The CPUC&apos;s outage FAQ gives a broad battery-cost reference, but it does not define a complete installed scope for your home. Battery size, controls, inverter compatibility, backup equipment, electrical work, permitting and labor can all change the total. Use a written site-specific proposal as the price. Do not build a budget from a hardware ad or a statewide average.
        </p>
      </section>

      <section>
        <h2>Require one price table from every bidder</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100"><tr><th className="p-4">Line item</th><th className="p-4">What the quote should identify</th></tr></thead>
            <tbody>
              {[
                ["Battery hardware", "Manufacturer, model, quantity, usable energy, power output and included warranty."],
                ["Controls and inverter", "Required gateway, transfer equipment, inverter or compatibility work."],
                ["Backup scope", "Exact circuits or loads, backup panel, load controls and outage operating modes."],
                ["Electrical work", "Main panel, service, subpanel, breakers, conduit, trenching and code corrections."],
                ["Installation", "Design, engineering, labor, mounting, delivery, commissioning and owner training."],
                ["Permits and utility", "Permit fees, inspections, interconnection work and any utility charges."],
                ["Other work", "Roof, wall, fire-clearance, structural, communications or restoration work."],
                ["Ongoing cost", "Monitoring, service plan, expected replacements, warranty labor and removal terms."],
              ].map(([item, detail]) => (
                <tr className="border-t" key={item}>
                  <th className="p-4 align-top" scope="row">{item}</th>
                  <td className="p-4">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Compare usable energy and power separately</h2>
        <p>
          Usable kilowatt-hours describe how much stored energy is available under the stated operating limits. Kilowatts describe how much power the system can deliver at once. Neither number alone tells you what the battery can run or for how long. Get both, then compare them with the selected loads, startup demand, reserve setting and charging available during an outage.
        </p>
      </section>

      <section>
        <h2>A retrofit needs an equipment-compatibility answer</h2>
        <p>
          If solar is already installed, give the bidder the module, inverter, monitoring and interconnection records. Ask what existing equipment stays, what changes and whether the work affects any warranty. Get the new one-line electrical diagram and the exact shutdown, restart and grid-loss behavior before signing.
        </p>
      </section>

      <section>
        <h2>Make the savings case use your actual tariff and load</h2>
        <p>
          The CPUC explains that onsite generation first serves onsite load under California&apos;s Net Billing Tariff and that export compensation is usually below the retail rate. A battery can shift when energy is used or exported, but the value depends on the customer&apos;s tariff, interval use, solar production, operating settings and future rate changes.
        </p>
        <p className="mt-3">
          Require monthly results showing solar sent directly to the home, energy charged into the battery, battery losses, grid imports, exports, export credits and the bill that remains. Run the model again with lower savings and without any unconfirmed incentive.
        </p>
      </section>

      <section>
        <h2>Do not subtract an incentive until eligibility is confirmed</h2>
        <p>
          California storage programs use specific eligibility categories, administrators, budgets and reservation rules. Ask for the program name, category, current status, application responsibility and what happens if funding is not awarded. The current IRS Residential Clean Energy Credit page says the residential credit is unavailable for property placed in service after December 31, 2025. Have a qualified tax adviser confirm the rule and timing for your project before any federal benefit enters the comparison.
        </p>
      </section>

      <section>
        <h2>Compare cash price before financing</h2>
        <p>
          Ask for the same complete cash price even if the proposal leads with a monthly payment. Then list down payment, financed amount, fees, annual percentage rate, term, total payments, prepayment rules and any balloon payment. A lower payment can come from a longer term or a different scope.
        </p>
      </section>

      <section>
        <h2>Run the outage test before final payment</h2>
        <p>
          The Department of Energy explains that ordinary grid-connected solar does not automatically keep a home powered when the grid is down. If backup is part of the purchase, require a real commissioning test. Confirm the backed-up circuits, simultaneous loads, reserve, low-sun behavior, manual controls and recovery after the grid returns. Use the <Link className="underline" href="/blog/do-solar-panels-work-during-power-outage-california">outage design checklist</Link> to put those answers in writing.
        </p>
      </section>
    </DecisionPage>
  );
}
