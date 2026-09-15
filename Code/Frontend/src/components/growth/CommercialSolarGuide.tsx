import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "./DecisionPage";

const path = "/commercial-solar";
const title = "Commercial Solar in California: Build a Quote You Can Actually Compare";
const intro = "A commercial solar proposal only works when it starts with the property’s real load, tariff, meters, roof or site, interconnection path and ownership plan. Use this guide to make bidders show the same inputs, costs and responsibilities.";


// The two consts above are visible copy: `title` heads the page and `intro` is the
// opening paragraph a reader sees. The search snippet has a different job and a
// hard length budget, so it is declared separately here. Reusing `intro` as the
// meta description is what caused a draft pass to overwrite a live opening
// paragraph on the SDG&E guide.
const metaTitle = "Commercial Solar in California: Build a Comparable Quote";
const metaDescription =
  "A commercial proposal starts with the property's load, tariff, meters and interconnection path. Use this guide to make bidders show the same inputs and costs.";

const sources: Source[] = [
  {
    label: "California Energy Commission: 2025 Nonresidential Solar PV",
    url: "https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-15",
  },
  {
    label: "California Energy Commission: 2025 Nonresidential Battery Energy Storage",
    url: "https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-16",
  },
  {
    label: "CPUC: Net Energy Metering and Net Billing",
    url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing",
  },
  {
    label: "IRS: Clean Electricity Investment Credit",
    url: "https://www.irs.gov/credits-deductions/clean-electricity-investment-credit",
  },
  {
    label: "U.S. Department of Energy: On-Site Solar Decision Guide",
    url: "https://betterbuildingssolutioncenter.energy.gov/solutions-at-a-glance/site-solar-decision-guide/printpdf",
  },
];

export const commercialSolarMetadata: Metadata = {
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

function CommercialInquiry() {
  return (
    <section id="solar-inquiry" className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900">Put the property and bills in front of a commercial provider</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
        Tell California Rate Relief about the site, utility, electricity use and project goal. We review the inquiry and may connect a suitable project with an independent provider, subject to service availability.
      </p>
      <Link className="mt-5 inline-block rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white" href="/commercial-assessment">
        Request a commercial assessment
      </Link>
      <p className="mt-3 text-xs text-slate-600">No cost to submit. No obligation. Project fit, service, design, price and savings must be confirmed.</p>
    </section>
  );
}

export function CommercialSolarGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      topic="California commercial solar project"
      sourceCheckedDate="2026-09-12"
      commercial
      inquiry={<CommercialInquiry />}
      primaryResourceHref="/commercial-solar/cost-per-watt-california"
      primaryResourceLabel="Commercial cost and scope checklist"
      comparisonHref="/commercial-solar/companies-california"
      comparisonLabel="Compare commercial providers"
    >
      <section>
        <h2>Start with the building. Then size the project.</h2>
        <p>A round-number system size or generic savings percentage is not a usable proposal. Give every bidder the same property and energy record. Ask each one to explain every gap.</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>At least 12 months of utility bills and, when available, interval and demand data.</li>
          <li>Current tariff, utility, account type and every meter the project is expected to affect.</li>
          <li>Operating hours, seasonal loads and planned changes such as EV charging or electrification.</li>
          <li>Roof age, warranty, structural records, parking or ground area, shade and equipment constraints.</li>
          <li>Property ownership, lease term, lender or landlord approvals and expected holding period.</li>
          <li>The actual goal: lower energy purchases, demand management, backup power, code compliance or a combination.</li>
        </ul>
      </section>

      <section>
        <h2>Make the savings model show its work</h2>
        <p>Require monthly production and bill results, not one annual total. The model should identify onsite use, grid imports, exports, export-credit assumptions, demand charges and every remaining utility charge. It should also show degradation, downtime, operating costs and the replacement assumptions carried through the analysis.</p>
        <p className="mt-3">Ask for the first year and every later year in a cash-flow table. If the project uses a utility escalation rate, financing escalator, tax benefit or resale value, make the bidder label it. Run a second case with the uncertain benefits removed.</p>
      </section>

      <section>
        <h2>California export credits do not equal the retail rate</h2>
        <p>The CPUC says new eligible systems in the investor-owned utility territories generally take service under the Net Billing Tariff. Onsite generation first serves onsite load. Excess generation exported to the grid receives time-varying compensation that is usually below the retail rate. That makes the load profile and time of production central to the proposal.</p>
        <p className="mt-3">Municipal utilities have their own tariffs and interconnection rules. Get the named tariff and current utility documents for the project address before accepting any savings result.</p>
      </section>

      <section>
        <h2>New construction has a separate Energy Code question</h2>
        <p>California&apos;s 2025 Energy Code applies to permit applications submitted on or after January 1, 2026. The California Energy Commission explains that specified newly constructed nonresidential buildings can have photovoltaic and battery requirements, subject to building type, calculations and exceptions. The commission also says alterations to existing nonresidential buildings do not trigger the prescriptive PV and battery requirements by themselves.</p>
        <p className="mt-3">Ask the project architect or energy-code professional to identify the applicable section, calculation method, exception and compliance forms. A sales proposal should not be the final code determination.</p>
      </section>

      <section>
        <h2>Compare ownership and service, not just monthly payment</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100"><tr><th className="p-4">Structure</th><th className="p-4">Questions the proposal must answer</th></tr></thead>
            <tbody>
              {[
                ["Direct ownership", "Who uses the tax benefits, funds replacements, operates the system and carries performance risk?"],
                ["Loan", "What are the cash price, fees, rate, term, collateral, total payments and prepayment terms?"],
                ["Lease", "Who owns, insures, monitors and repairs the equipment, and what happens at sale or lease end?"],
                ["Power purchase agreement", "What is the starting energy price, escalator, minimum purchase, performance obligation and end-of-term choice?"],
              ].map(([structure, questions]) => (
                <tr className="border-t" key={structure}>
                  <th className="p-4 align-top" scope="row">{structure}</th>
                  <td className="p-4">{questions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Treat tax benefits as a tax workstream</h2>
        <p>The IRS says the Clean Electricity Investment Credit can apply to qualified facilities and energy-storage technology placed in service after 2024. Its current summary lists a 6% base credit, a possible increase up to 30% when labor requirements are met, possible bonus amounts and potential elective-pay or transfer options for eligible parties. Eligibility, credit amount, basis, labor rules, timing and tax ownership depend on the actual project.</p>
        <p className="mt-3">Have a qualified tax adviser confirm the treatment. Require the proposal to show project economics before tax benefits and then show the claimed benefits as a separate case.</p>
      </section>

      <section>
        <h2>Issue one scope to every bidder</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>Define the meters, loads, project goals and required completion conditions.</li>
          <li>Require the same production-weather source, utility data and analysis period.</li>
          <li>Separate solar, storage, roof, structural, electrical, permitting and interconnection costs.</li>
          <li>Name the equipment, warranties, monitoring, service response and replacement assumptions.</li>
          <li>Identify every exclusion, allowance, change-order trigger and owner responsibility.</li>
          <li>Provide a milestone schedule with design, permit, utility, procurement, construction and commissioning dependencies.</li>
          <li>State who owns the drawings, data, incentives and equipment at every stage.</li>
        </ol>
      </section>

      <section>
        <h2>Do the failure review before signing</h2>
        <p>Test lower production, delayed interconnection, a roof repair, a rate change, equipment downtime and an early property sale. Ask who pays, what remedy applies and what the contract lets each party do. The strongest proposal is the one whose assumptions and responsibilities remain clear when the easy case does not happen.</p>
      </section>
    </DecisionPage>
  );
}
