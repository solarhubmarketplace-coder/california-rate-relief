import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "./DecisionPage";
import type { FaqJsonLdItem } from "@/components/shared/FaqJsonLd";
import { articleHref, articlesInCluster } from "@/data/article-pages";
import { CommercialReviewButton, CommercialReviewForm } from "./CommercialReview";

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
  // 2026-09-23 Tier 3 (claude/t3-misc-20260923): sources for the hub FAQ.
  {
    label: "NREL: Best Practices for Operation and Maintenance of Photovoltaic and Energy Storage Systems, 3rd Edition (December 2018; checked September 23, 2026)",
    url: "https://www.nrel.gov/docs/fy19osti/73822.pdf",
  },
  {
    label: "SDG&E: Solar Billing Plan (residential only; commercial customers keep their pricing plan; checked September 23, 2026)",
    url: "https://www.sdge.com/solar/solar-billing-plan",
  },
  {
    label: "SGIP program metrics: budget category status by administrator (checked September 23, 2026)",
    url: "https://www.selfgenca.com/home/program_metrics/",
  },
  {
    label: "California Energy Commission: Renewable Energy for Agriculture Program (closed; checked September 23, 2026)",
    url: "https://www.energy.ca.gov/programs-and-topics/programs/renewable-energy-agriculture-program",
  },
];

// 2026-09-23 Tier 3 (claude/t3-misc-20260923): three small commercial questions
// answered on the hub. DecisionPage renders them with FaqBlock, which emits the
// FAQPage schema from the same strings. Sources fetched 2026-09-23.
const commercialFaqs: FaqJsonLdItem[] = [
  {
    question: "What does commercial solar maintenance involve in California?",
    answer:
      "NREL’s best-practice guide for operation and maintenance divides the work into preventive maintenance on a schedule, corrective repairs when something fails, and condition-based maintenance driven by monitoring data. The routine tasks are performance monitoring, inspections such as thermal imaging of the array and electrical connections, inverter servicing, cleaning when soiling warrants it and, on ground mounts, vegetation control. The guide, from 2018, noted 10-year inverter warranties were common and 20-year extended plans were spreading. Before signing, get in writing who does each task, the response time for a fault, who pays for an inverter replacement and who owns the monitoring data; under a PPA or lease the provider usually carries it, under ownership you do.",
  },
  {
    question: "Does SDG&E have a commercial solar program?",
    answer:
      "Not a rebate on panels. New business systems in SDG&E territory are interconnected under the CPUC’s net billing rules, with export credits that vary by hour and are usually below the retail rate. SDG&E’s Solar Billing Plan page says the plan is for residential customers and that commercial customers stay on their existing pricing plan, so a business proposal has to model the actual commercial tariff. If San Diego Community Power or another CCA supplies the business, SDG&E says the CCA sets the generation export credit. Battery incentives, where available, come through SGIP’s non-residential budgets; check the tracker’s status for your category before a bid counts on them.",
  },
  {
    question: "Is there state funding for agricultural solar in California?",
    answer:
      "Not through the Energy Commission’s agricultural program right now. The Renewable Energy for Agriculture Program granted $10 million for renewable energy at farms; its only solicitation opened in January 2019, awards were announced that April, and the Energy Commission says all of the funding was used and it is not accepting applications. Farms use the same tools as other businesses: the federal business credit, subject to the cutoffs the 2025 tax law added for solar, SGIP for storage where budgets are open, and financing such as C-PACE. The agricultural solar guide on this site covers the tariffs and meter questions farms face.",
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
    modifiedTime: "2026-09-23T00:00:00Z",
  },
};

// The page's one ask (2026-09-23): the inline commercial form, which replaced
// the link to /commercial-assessment. Heading and intro keep the wording of the
// card it replaced. The wrapper keeps the #solar-inquiry id and a text link to
// /commercial-assessment, both asserted by scripts/review-commercial-solar-refresh.mjs.
function CommercialInquiry() {
  return (
    <CommercialReviewForm
      legacyAnchor
      standaloneLink
      heading="Put the property and bills in front of a commercial provider"
      intro="Tell California Rate Relief about the site, utility, electricity use and project goal. We review the inquiry and may connect a suitable project with an independent provider, subject to service availability."
    />
  );
}

// =============================================================================
// THE SECTION INDEX (added 2026-09-18, claude/audit-links-20260918)
//
// /commercial-solar held 29 inbound internal links across the 20 pages of its
// own section and this hub linked exactly two of its nineteen children: the
// cost page and the companies page, through DecisionPage's two nav slots. Three
// children — Title 24, VNEM aggregation and the schools guide — had no inbound
// internal link at all. A hub that does not link its section is not a hub, so
// every child is listed below.
//
// The twelve data-driven guides are read from src/data/article-pages.commercial.json
// rather than typed out, so a new guide in that file appears here the day it
// ships instead of waiting for someone to remember this list. The twelve
// hand-written pages have no such registry and are named explicitly.
// =============================================================================

const WRITTEN_GUIDES: { href: string; anchor: string; blurb: string }[] = [
  {
    href: "/commercial-solar/cost-per-watt-california",
    anchor: "Commercial solar cost per watt in California",
    blurb:
      "What the published per-watt figures are by system size, where they come from and the date they were checked, so a bid can be read against something.",
  },
  // GS-MERGES 2026-09-24: /commercial-solar/financing-options merged into
  // /blog/commercial-solar-financing-california, listed in BLOG_GUIDES below.
  {
    href: "/commercial-solar/cpace-financing-california",
    anchor: "How C-PACE financing works in California",
    blurb:
      "Assessment-based financing on the property tax bill: which authority levies it, what lender consent it needs and how it transfers with the building.",
  },
  {
    href: "/commercial-solar/companies-california",
    anchor: "Comparing commercial solar companies in California",
    blurb:
      "The licence classifications, references and scope questions that separate bidders when every proposal claims the same savings.",
  },
  {
    href: "/commercial-solar/title-24-requirements",
    anchor: "Title 24 Part 6 solar and storage requirements for nonresidential buildings",
    blurb:
      "When the Energy Code's photovoltaic and battery provisions apply to a permit application, and what the Energy Commission says about alterations.",
  },
  {
    href: "/commercial-solar/vnem-aggregation-multi-meter",
    anchor: "VNEM and NEM aggregation for multi-meter properties",
    blurb:
      "The difference between virtual net metering and meter aggregation, and which one a property with several meters can actually use.",
  },
  {
    href: "/commercial-solar/sgip-battery-storage",
    anchor: "SGIP commercial battery storage: current category status",
    blurb:
      "Which commercial storage categories the program tracker shows closed, and why an existing reservation is a different question from a new application.",
  },  {
    href: "/commercial-solar/commercial-solar-carport-cost",
    anchor: "Commercial solar carport cost in California",
    blurb:
      "The published benchmarks and what they leave out, what the canopy structure adds to the price, and how to read a carport bid against them.",
  },
  {
    href: "/commercial-solar/commercial-solar-roofing",
    anchor: "Commercial solar roofing: what to check before panels go on",
    blurb:
      "The roof's remaining life, how arrays attach to each roof type, structural loads and fire-access pathways, and who does the roofing versus the solar.",
  },
  {
    href: "/commercial-solar/solar-developers",
    anchor: "What a commercial solar developer does, and how to vet one",
    blurb:
      "How a developer differs from an EPC, installer or financier, how developers are paid, and what to ask one offering a PPA or lease.",
  },
  {
    href: "/commercial-solar/car-dealerships-going-solar-california",
    anchor: "Car dealerships going solar in California",
    blurb:
      "Roof or canopy, demand charges and EV-charging rates on the bill, code requirements for new showrooms, and what to put in a bid request.",
  },
  {
    href: "/commercial-solar/rec-commercial-solar-panels",
    anchor: "REC panels for commercial projects",
    blurb:
      "Which REC module lines are on the Energy Commission's equipment list, what that listing does and does not tell you, and where the modules were made.",
  },
  // Added 2026-09-23 (Tier 2 wave).
  {
    href: "/commercial-solar/commercial-solar-tax-credit",
    anchor: "The commercial solar tax credit in 2026 (Section 48E)",
    blurb:
      "The 6% and 30% rates, the bonus amounts, the December 31, 2027 cutoff for solar, depreciation, and selling the credit or taking it as a payment.",
  },
  {
    href: "/commercial-solar/commercial-solar-lease-programs",
    anchor: "Commercial solar leases: equipment leases and roof leases",
    blurb:
      "Leasing a system for your building versus renting your roof to a developer, how often each is used in California, and what to check before signing.",
  },
  {
    href: "/commercial-solar/industrial-solar-california",
    anchor: "Industrial solar in California: plants and manufacturers",
    blurb:
      "How large industrial systems run, why demand charges on schedules like PG&E B-19 and B-20 decide the economics, and what to put in a bid request.",
  },
  {
    href: "/commercial-solar/average-wattage-of-a-commercial-solar-panel",
    anchor: "Average wattage of a commercial solar panel",
    blurb:
      "What module sizes California business systems used in 2025, what new models on the state list are rated at, and what wattage means for a quote.",
  },
];

// Commercial-subject pages that live under /blog (topic hub "commercial").
const BLOG_GUIDES: { href: string; anchor: string; blurb: string }[] = [
  {
    href: "/blog/commercial-solar-financing-california",
    anchor: "Commercial solar financing in California: four options compared",
    blurb:
      "Purchase or loan, PPA, PACE and SBA-backed lending: who owns the system under each and which documents to compare.",
  },
  {
    href: "/blog/solar-carport-california-guide",
    anchor: "Solar carports in California: cost, permits and design",
    blurb:
      "Why a carport costs more than the same panels on a roof, which permit path applies, and the fire and access rules.",
  },
];

function SectionIndex() {
  const guides = articlesInCluster("commercial");
  return (
    <section>
      <h2>Every commercial solar guide on this site</h2>
      <p>
        Start with whichever question is actually blocking the decision. Each page states its
        sources and the date they were checked.
      </p>
      <ul className="mt-4 space-y-3">
        {WRITTEN_GUIDES.map((guide) => (
          <li key={guide.href}>
            <Link className="font-semibold text-primary underline" href={guide.href}>
              {guide.anchor}
            </Link>
            <span className="block text-sm text-muted-foreground">{guide.blurb}</span>
          </li>
        ))}
      </ul>
      <h3 className="mt-8">By property type and system size</h3>
      <ul className="mt-3 space-y-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link className="font-semibold text-primary underline" href={articleHref(guide)}>
              {guide.h1}
            </Link>
            <span className="block text-sm text-muted-foreground">{guide.metaDescription}</span>
          </li>
        ))}
      </ul>
      <h3 className="mt-8">Related guides on the blog</h3>
      <ul className="mt-3 space-y-3">
        {BLOG_GUIDES.map((guide) => (
          <li key={guide.href}>
            <Link className="font-semibold text-primary underline" href={guide.href}>
              {guide.anchor}
            </Link>
            <span className="block text-sm text-muted-foreground">{guide.blurb}</span>
          </li>
        ))}
      </ul>
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
      midContent={<CommercialReviewButton />}
      primaryResourceHref="/commercial-solar/cost-per-watt-california"
      primaryResourceLabel="Commercial cost and scope checklist"
      comparisonHref="/commercial-solar/companies-california"
      comparisonLabel="Compare commercial providers"
      faqs={commercialFaqs}
    >
      <p className="text-foreground/80">
        Before requesting bids, the commercial solar cost page and calculator lets you{" "}
        <Link className="font-semibold text-primary underline" href="/commercial-solar/cost-per-watt-california">
          estimate your after-tax cost, payback and property-value impact
        </Link>
        .
      </p>

      <SectionIndex />

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
            <thead className="bg-muted"><tr><th className="p-4">Structure</th><th className="p-4">Questions the proposal must answer</th></tr></thead>
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
