import type { Metadata } from "next";
import { DecisionPage, type Source } from "./DecisionPage";

const path = "/blog/is-community-solar-worth-it";
const title = "Is Community Solar Worth It? Compare the Credit With Every Cost";
const intro = "Community solar can work for a renter, apartment resident or property without a usable roof. The answer depends on the subscription charge, utility bill credit, escalation, fees, term, cancellation, move rules and actual project availability.";

// The two consts above are visible copy: `title` heads the page and `intro` is the
// opening paragraph a reader sees. The search snippet has a different job and a
// hard length budget, so it is declared separately here. Reusing `intro` as the
// meta description is what caused a draft pass to overwrite a live opening
// paragraph on the SDG&E guide.
const metaTitle = "Is Community Solar Worth It? Compare Credit vs Cost";
const metaDescription =
  "Community solar can work for renters or homes without a usable roof. It depends on the subscription charge, bill credit, fees and contract terms.";

const sources: Source[] = [
  { label: "U.S. Department of Energy: Community Solar Basics", url: "https://www.energy.gov/cmei/systems/community-solar-basics" },
  { label: "U.S. Department of Energy: community solar program designs", url: "https://www.energy.gov/sites/default/files/2024-07/Community%20Solar%20Program%20Design.pdf" },
  { label: "U.S. Department of Energy: Clean Energy Connector", url: "https://www.energy.gov/cmei/systems/clean-energy-connector" },
  { label: "Virginia SCC: shared solar programs", url: "https://www.scc.virginia.gov/regulated-industries/utility-regulation/energy-regulation/renewable-resources/shared-solar/" },
  { label: "Maryland PSC: Solar in Maryland", url: "https://www.psc.state.md.us/electricity/wp-content/uploads/sites/2/Solar-in-Maryland-Fact-Sheet-1.pdf" },
  { label: "DC DOEE: Solar for All", url: "https://doee.dc.gov/solarforall" },
];
export const communitySolarWorthItMetadata: Metadata = { title: metaTitle, description: metaDescription, alternates: { canonical: path }, openGraph: { title: metaTitle, description: metaDescription, type: "article", url: `https://ratereliefca.com${path}`, modifiedTime: "2026-09-12T00:00:00Z" } };

export function CommunitySolarWorthItGuide() {
  return <DecisionPage title={title} intro={intro} path={path} sources={sources} sourceCheckedDate="2026-09-12" topic="community solar subscription comparison" primaryResourceHref="/solar-panels-california" primaryResourceLabel="Compare rooftop solar" comparisonHref="/blog/how-to-lower-electric-bill-california" comparisonLabel="Electric-bill decision guide">
    <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5"><h2>Use one equation</h2><p><strong>Net monthly benefit = utility bill credit minus subscription charge minus every fee.</strong> Run it month by month, then over the contract term. A large credit is not savings when the subscription costs nearly as much.</p></section>
    <section><h2>Community solar is an off-site subscription</h2><p>The Department of Energy defines community solar as a project or purchasing program whose benefits flow to multiple customers. A subscriber usually pays for a share of an off-site array and receives a utility bill credit. No panels are installed on the subscriber’s roof. That can make it useful for renters and buildings that cannot host rooftop solar.</p></section>
    <section><h2>Get twelve contract facts</h2><ul className="list-disc space-y-2 pl-6"><li>Serving utility, eligible account class and project status.</li><li>Subscription size and how it relates to historic use.</li><li>Subscription charge and every escalator.</li><li>Bill-credit formula and where the credit appears.</li><li>Guaranteed discount, if any, and how it is enforced.</li><li>Upfront, monthly, late, transfer and exit fees.</li><li>Minimum term, cancellation notice and renewal.</li><li>Rules for moving within or outside the utility territory.</li><li>What happens when usage falls or the project underproduces.</li><li>Start date and treatment before the project operates.</li><li>Customer-service and complaint contacts.</li><li>Handling of personal and utility-account data.</li></ul></section>
    <section><h2>Do not treat a fixed subscription cost as guaranteed savings</h2><p>DOE’s program-design guidance explains that a fixed subscription charge can coexist with credits that change as generation changes. That structure provides cost certainty on one side without guaranteeing the final savings. Ask for the exact cost-to-credit formula and a sample bill using your utility account.</p></section>
    <section><h2>Prefer strong consumer protections</h2><p>DOE lists plain-language disclosure, accessible complaints, a real bill credit and no sign-up, exit or termination fees among strong program features. Some income-qualified programs require a minimum discount. Do not assume those protections apply to every private subscription. Match each claim to the state program and signed contract.</p></section>
    <section><h2>Availability is local</h2><p>Community-solar laws and programs differ by state and utility. Virginia’s SCC, Maryland’s PSC and DC’s Department of Energy and Environment each publish separate program information. Confirm the utility account is eligible and the named project is approved or operating before giving payment or utility credentials.</p></section>
    <section><h2>The decision rule</h2><p>Community solar is worth considering when the project is real, the account is eligible, the net discount is clear, fees are limited and the move and cancellation rules fit the household. Walk away from a proposal that hides either side of the equation.</p></section>
  </DecisionPage>;
}
