import Link from "next/link";
import { DecisionPage, QuoteChecklist, type Source } from "./DecisionPage";
import type { ServiceMarket } from "@/lib/service-market";

type LocalConfig = {
  title: string;
  intro: string;
  path: string;
  city: string;
  market: ServiceMarket;
  topic: string;
  localReview: React.ReactNode;
  utilityReview: React.ReactNode;
  licenseReview: React.ReactNode;
  sources: Source[];
  stateCostPath: string;
  stateCompaniesPath: string;
};

export const virginiaBeachSolarCompaniesConfig: LocalConfig = {
  title: "Solar Companies in Virginia Beach: Compare the Property, Permit and Contract",
  intro: "There is no honest universal “best” installer. A Virginia Beach comparison starts with the property’s zoning and permit path, the exact DPOR-licensed contractor, Dominion interconnection and the complete written price.",
  path: "/virginia/virginia-beach-solar-companies",
  city: "Virginia Beach, Virginia",
  market: "VA",
  topic: "Virginia Beach solar company and quote comparison",
  localReview: <><p>Virginia Beach assigns every property a zoning district, and the City’s ordinance includes solar facilities as conditional or accessory uses across specified districts. Ask the bidder to identify the property’s district, whether the proposed rooftop or ground-mounted design is allowed by right, and which City review applies.</p><p className="mt-3">The City accepts permit and inspection requests through its online system. Put the permit holder, plan-submission responsibility, inspection sequence and correction work in the proposal.</p></>,
  utilityReview: <p>Dominion’s net-metering process is separate from the City permit. Require the bidder to state who submits the interconnection notice, who answers utility corrections and what approval is needed before operation. The proposed system size must be tied to the home’s expected annual use, not a sales target.</p>,
  licenseReview: <p>Search the exact contracting business in Virginia DPOR’s license lookup. Record the license number, class and specialty; match that business to the contract; and identify every subcontractor responsible for electrical, roof or structural work.</p>,
  stateCostPath: "/virginia/solar-cost",
  stateCompaniesPath: "/virginia/solar-companies",
  sources: [
    { label: "City of Virginia Beach: zoning", url: "https://planning.virginiabeach.gov/zoning" },
    { label: "City of Virginia Beach: building permits", url: "https://planning.virginiabeach.gov/permits/building" },
    { label: "City of Virginia Beach: solar-facility zoning ordinance", url: "https://virginiabeach.gov/city-hall/codes-ordinances" },
    { label: "Virginia DPOR: contractor license lookup", url: "https://dporweb.dpor.virginia.gov/LicenseLookup/" },
    { label: "Virginia SCC: behind-the-meter generation", url: "https://www.scc.virginia.gov/regulated-industries/utility-regulation/energy-regulation/meter-generation/" },
    { label: "Dominion Energy Virginia: net metering", url: "https://www.dominionenergy.com/en/Virginia/Renewable-Energy-Programs/Net-Metering" },
    { label: "U.S. Department of Energy: choosing a solar installer", url: "https://www.energy.gov/cmei/systems/articles/decisions-decisions-choosing-solar-installer" },
  ],
};

export const baltimoreSolarCompaniesConfig: LocalConfig = {
  title: "Solar Companies in Baltimore: Compare the License, City Plan and BGE File",
  intro: "A Baltimore solar quote is ready to compare only when the Maryland contractor license, City permit drawing, BGE interconnection, equipment, production case and complete price are on paper.",
  path: "/maryland/baltimore-solar-companies",
  city: "Baltimore, Maryland",
  market: "MD",
  topic: "Baltimore solar company and quote comparison",
  localReview: <><p>Baltimore City Code § 15-517 says a building-permit application for a solar alternative-energy system must include an electrical line drawing detailed enough for code review. Ask who prepares that drawing, who applies, who answers corrections and who schedules inspections.</p><p className="mt-3">The City’s permit handbook says the property owner remains responsible for obtaining the permit even when an authorized party submits it. Put the permit number and approved scope in the project file before work begins.</p></>,
  utilityReview: <p>Maryland net metering and the serving utility’s interconnection process are separate from the City permit. For a BGE property, make the bidder identify the application responsibility, proposed system size, meter work, approval sequence and the utility charges that remain after solar.</p>,
  licenseReview: <p>Maryland’s Home Improvement Commission licenses residential home-improvement contractors and tells consumers to verify the license before hiring. Match the legal name and MHIC number to the contract. Maryland also requires rooftop-solar contracts to address a wildlife barrier unless the homeowner knowingly waives it after receiving the cost and risk information.</p>,
  stateCostPath: "/maryland/solar-cost",
  stateCompaniesPath: "/maryland/solar-companies",
  sources: [
    { label: "Baltimore City Code § 15-517: solar permit drawing", url: "https://codes.baltimorecity.gov/us/md/cities/baltimore/code/32/15-517" },
    { label: "Baltimore City: permit handbook", url: "https://dhcd.baltimorecity.gov/sites/default/files/permit_handbook.pdf" },
    { label: "Maryland Home Improvement Commission", url: "https://www.labor.maryland.gov/license/mhic/" },
    { label: "Maryland Labor: licensing queries", url: "https://labor.maryland.gov/pq/" },
    { label: "Maryland PSC: Solar in Maryland", url: "https://www.psc.state.md.us/electricity/wp-content/uploads/sites/2/Solar-in-Maryland-Fact-Sheet-1.pdf" },
    { label: "U.S. Department of Energy: choosing a solar installer", url: "https://www.energy.gov/cmei/systems/articles/decisions-decisions-choosing-solar-installer" },
  ],
};

export function LocalSolarCompaniesGuide({ config }: { config: LocalConfig }) {
  return (
    <DecisionPage title={config.title} intro={config.intro} path={config.path} sources={config.sources} sourceCheckedDate="2026-09-12" regionLabel={config.city} market={config.market} topic={config.topic} primaryResourceHref={config.stateCostPath} primaryResourceLabel="State solar cost guide" comparisonHref={config.stateCompaniesPath} comparisonLabel="State contractor checklist">
      <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5"><h2>Start with three proposals built from the same facts</h2><p>Give each bidder the same electricity-use record, roof information and project goals. Require the solar-only cash price, system size, equipment, first-year production, financing terms, permit scope, utility work, warranties and service responsibility. A monthly payment is not a complete comparison.</p></section>
      <section><h2>Resolve the local property and permit path</h2>{config.localReview}</section>
      <section><h2>Verify the contractor behind the proposal</h2>{config.licenseReview}</section>
      <section><h2>Keep utility approval separate</h2>{config.utilityReview}</section>
      <QuoteChecklist />
      <section><h2>Compare cash price before financing</h2><p>For a loan, list cash price, financed amount, fees, APR, term and total payments. For a lease or PPA, list the starting payment or rate, escalator, term, buyout, transfer and end-of-term terms. Use the <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">ownership and financing worksheet</Link>; the Maryland or Virginia contract controls.</p></section>
      <section><h2>The decision rule</h2><p>The stronger proposal is the one that survives document review: verified contractor, complete local plan, clear utility responsibility, comparable price and production inputs, written service obligations and no unverified incentive. If one is missing, the quote is not ready.</p></section>
    </DecisionPage>
  );
}
