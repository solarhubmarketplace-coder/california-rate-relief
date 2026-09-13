import Link from 'next/link';
import { DecisionPage, QuoteChecklist, type Source } from './DecisionPage';
import type { ServiceMarket } from '@/lib/service-market';

export type StateSolarConfig = {
  state: string;
  market: ServiceMarket;
  slug: 'new-jersey' | 'maryland' | 'virginia' | 'delaware' | 'washington-dc';
  costPath?: string;
  companiesPath?: string;
  costTitle?: string;
  costIntro?: string;
  utilities: string;
  licenseNote: string;
  contractNote: string;
  programNote: string;
  decisionNote?: string;
  sources: Source[];
};

export const stateSolarConfigs: Record<StateSolarConfig['slug'], StateSolarConfig> = {
  'new-jersey': {
    state: 'New Jersey', market: 'NJ', slug: 'new-jersey',
    utilities: 'PSE&G, JCP&L, Atlantic City Electric and Rockland Electric',
    licenseNote: 'Verify the contracting business in the New Jersey Division of Consumer Affairs real-time license system. Search the business name shown on the proposal, not only the salesperson or a marketing brand.',
    contractNote: 'Match the registered contractor, equipment, roof work, permits, interconnection responsibility, payment schedule and change-order rules to the written proposal.',
    programNote: 'NJBPU directs residential and smaller net-metered projects to the Administratively Determined Incentive side of the Successor Solar Incentive program. Registration and eligibility are project-specific. NJBPU also warns that New Jersey has no state program offering free residential solar installation.',
    sources: [
      { label: 'New Jersey BPU: Residential programs and Successor Solar Incentive', url: 'https://nj.gov/bpu/residential/program/' },
      { label: 'New Jersey BPU: customer assistance and current solar warning', url: 'https://www.nj.gov/bpu/assistance/index.html' },
      { label: 'New Jersey Division of Consumer Affairs: license verification', url: 'https://www.njconsumeraffairs.gov/Pages/verification.aspx' },
      { label: 'U.S. Department of Energy: choosing a solar installer', url: 'https://www.energy.gov/cmei/systems/articles/decisions-decisions-choosing-solar-installer' },
      { label: 'NREL 2024 Annual Technology Baseline: residential PV', url: 'https://atb.nrel.gov/electricity/2024/residential_pv' },
    ],
  },
  maryland: {
    state: 'Maryland', market: 'MD', slug: 'maryland',
    utilities: 'BGE, Pepco, Delmarva Power and Potomac Edison',
    licenseNote: 'Maryland says a residential solar installer needs a current Maryland Home Improvement Commission license, and a licensed master electrician must connect the system. Verify both roles instead of relying on a logo or sales badge.',
    contractNote: 'Maryland rooftop-solar contracts must address a wildlife barrier unless the homeowner knowingly waives it after receiving the price and risk information. Put the choice, price and waiver in writing with the rest of the project scope.',
    programNote: 'Maryland net metering measures electricity used and generated during the billing period, but the customer still pays the utility customer charge. The serving utility tariff and interconnection approval control the actual bill treatment.',
    sources: [
      { label: 'Maryland Public Service Commission: Solar in Maryland', url: 'https://www.psc.state.md.us/electricity/wp-content/uploads/sites/2/Solar-in-Maryland-Fact-Sheet-1.pdf' },
      { label: 'Maryland PSC: net-metering customer alert', url: 'https://www.psc.state.md.us/wp-content/uploads/Net-Metering-Alert-to-Customers_03062024.pdf' },
      { label: 'Maryland Home Improvement Commission: solar licensing and contract notice', url: 'https://labor.md.gov/license/mhic/' },
      { label: 'Maryland Home Improvement Commission: solar license FAQ', url: 'https://www.labor.md.gov/license/mhic/mhicfaq.shtml' },
      { label: 'U.S. Department of Energy: choosing a solar installer', url: 'https://www.energy.gov/cmei/systems/articles/decisions-decisions-choosing-solar-installer' },
      { label: 'NREL 2024 Annual Technology Baseline: residential PV', url: 'https://atb.nrel.gov/electricity/2024/residential_pv' },
    ],
  },
  virginia: {
    state: 'Virginia', market: 'VA', slug: 'virginia',
    utilities: 'Dominion Energy Virginia, Appalachian Power, Old Dominion Power and local electric cooperatives',
    licenseNote: 'Verify the contracting business through the Virginia Department of Professional and Occupational Regulation. The Board for Contractors licenses businesses, and the license class and specialty determine the work and project value the business may perform.',
    contractNote: 'Match the licensed business, license classification, equipment, roof work, permits, utility interconnection, payment schedule and change-order rules to the written proposal. Local licensing and permit requirements can also apply.',
    programNote: 'Virginia’s State Corporation Commission publishes the current net-metering rules, interconnection forms and separate shared-solar program information. The serving utility and the approved interconnection arrangement determine the actual bill treatment.',
    sources: [
      { label: 'Virginia SCC: behind-the-meter generation and net metering', url: 'https://www.scc.virginia.gov/regulated-industries/utility-regulation/energy-regulation/meter-generation/' },
      { label: 'Virginia SCC: regulated electric companies and service map', url: 'https://www.scc.virginia.gov/consumers/public-utility/electricity-faqs/regulated-companies-service-map/' },
      { label: 'Virginia SCC: shared solar programs', url: 'https://www.scc.virginia.gov/regulated-industries/utility-regulation/energy-regulation/renewable-resources/shared-solar/' },
      { label: 'Virginia DPOR: Board for Contractors', url: 'https://www.dpor.virginia.gov/Boards/Contractors' },
      { label: 'Virginia DPOR: license lookup', url: 'https://dporweb.dpor.virginia.gov/LicenseLookup/' },
      { label: 'U.S. Department of Energy: choosing a solar installer', url: 'https://www.energy.gov/cmei/systems/articles/decisions-decisions-choosing-solar-installer' },
      { label: 'NREL 2024 Annual Technology Baseline: residential PV', url: 'https://atb.nrel.gov/electricity/2024/residential_pv' },
    ],
  },
  delaware: {
    state: 'Delaware', market: 'DE', slug: 'delaware',
    utilities: 'Delmarva Power, Delaware Electric Cooperative and municipal electric systems',
    licenseNote: 'Check the contracting business in Delaware’s public construction-contractor registry. Check the responsible electrical professional separately in the Division of Professional Regulation license lookup, and confirm whether a funding program requires a participating contractor.',
    contractNote: 'Match the registered contractor, responsible electrical professional, equipment, permits, interconnection, incentive paperwork, payment schedule and change-order rules to the written proposal.',
    programNote: 'The Delaware Public Service Commission directs customer-owned Delmarva Power generation to the utility’s interconnection standards. Community solar is a separate subscription with its own bill credit, subscription fee and contract terms. Do not compare it as if equipment were installed on the home.',
    sources: [
      { label: 'Delaware PSC: renewable energy and customer-owned generation', url: 'https://depsc.delaware.gov/delawares-renewable-portfolio-standard-green-power-products/' },
      { label: 'Delaware PSC: community solar consumer information', url: 'https://depsc.delaware.gov/consumer-information/' },
      { label: 'Delaware DNREC: participating renewable-energy contractors', url: 'https://dnrec.delaware.gov/climate-coastal-energy/energy-office/renewables/participating-contractors/' },
      { label: 'Delaware Department of Labor: construction contractor lookup', url: 'https://contractorregistry.delaware.gov/Certification_PublicLookup?f=name&t=j' },
      { label: 'Delaware Division of Professional Regulation: license lookup', url: 'https://delpros.delaware.gov/oh_verifylicense' },
      { label: 'U.S. Department of Energy: choosing a solar installer', url: 'https://www.energy.gov/cmei/systems/articles/decisions-decisions-choosing-solar-installer' },
      { label: 'NREL 2024 Annual Technology Baseline: residential PV', url: 'https://atb.nrel.gov/electricity/2024/residential_pv' },
    ],
  },
  'washington-dc': {
    state: 'Washington, DC', market: 'DC', slug: 'washington-dc',
    costPath: '/washington-dc/solar',
    companiesPath: '/washington-dc/solar-companies',
    costTitle: 'Washington, DC Rooftop Solar: Property and Quote Review',
    costIntro: 'A useful DC rooftop-solar decision starts with who controls the roof, usable area and access, the solar-only cash price, expected production, and Pepco interconnection and bill treatment.',
    utilities: 'Pepco',
    licenseNote: 'Verify the contracting business through the DC Department of Licensing and Consumer Protection. Residential contractors need the applicable contractor license, and DC requires home-improvement contractors and general contractors doing residential work to maintain a licensed home-improvement salesperson.',
    contractNote: 'Put roof access, structural and electrical work, permits, Pepco interconnection, equipment, payment schedule, timeline and change-order rules in the written contract. Treat any “free solar” or guaranteed-savings statement as a claim that must be documented.',
    programNote: 'DC’s Department of Energy and Environment treats rooftop solar and community solar as different paths. A renter, condo resident or homeowner whose roof is unsuitable may be able to consider a community subscription, which does not install equipment on the home. Compare its subscription contract separately from a rooftop proposal.',
    decisionNote: 'For a rowhouse, condominium or shared building, establish roof ownership, association or co-owner authority, usable area, shade, equipment location and safe installer access before treating a production estimate as viable.',
    sources: [
      { label: 'DC DOEE: Solar in the District', url: 'https://doee.dc.gov/service/solar-district' },
      { label: 'DC DOEE: renewable-energy service providers', url: 'https://doee.dc.gov/publication/renewable-energy-service-providers' },
      { label: 'DC DLCP: contractor and construction services', url: 'https://dlcp.dc.gov/node/1618551' },
      { label: 'DC DLCP: solar contractor consumer advisory', url: 'https://dlcp.dc.gov/release/advisory-solar-installation-tax-credit-expirationL' },
      { label: 'U.S. Department of Energy: choosing a solar installer', url: 'https://www.energy.gov/cmei/systems/articles/decisions-decisions-choosing-solar-installer' },
      { label: 'NREL 2024 Annual Technology Baseline: residential PV', url: 'https://atb.nrel.gov/electricity/2024/residential_pv' },
    ],
  },
};

const linkClass = 'font-semibold text-emerald-800 underline underline-offset-2';

function Benchmark({ state }: { state: string }) {
  return <section><h2>A useful price benchmark, not a {state} quote</h2><p>NREL’s 2024 Annual Technology Baseline uses a 2023 bottom-up residential benchmark of $2.68 per DC watt. At that benchmark, an 8 kW system is $21,440 before financing, a battery, roof work and project-specific additions. It is a dated national modeling reference. A current local proposal can be higher or lower.</p><p className='mt-3'>Compare cash price per watt first: divide the solar-only cash price by the system’s DC watts. Keep batteries, roofing, electrical upgrades and dealer or loan fees on separate lines. A financed contract with a low stated rate can still cost much more than the cash system.</p></section>;
}

export function StateSolarCostPage({ config }: { config: StateSolarConfig }) {
  const path = config.costPath || `/${config.slug}/solar-cost`;
  const companiesPath = config.companiesPath || `/${config.slug}/solar-companies`;
  return <DecisionPage title={config.costTitle || `${config.state} Solar Panel Cost: Compare the Real Quote`} intro={config.costIntro || `A defensible ${config.state} estimate starts with the solar-only cash price, system size and expected production. Then add financing, roof, battery and utility-specific bill treatment separately.`} path={path} sources={config.sources} sourceCheckedDate='2026-09-12' regionLabel={config.state} market={config.market} topic={`${config.state} solar cost and quote review`} primaryResourceHref='/tools/solar-panel-calculator' primaryResourceLabel='Use the bill and quote calculator' comparisonHref={companiesPath} comparisonLabel={`Compare ${config.state} solar companies`}>
    <section className='rounded-xl border border-emerald-200 bg-emerald-50 p-5'><h2>The short answer</h2><p>Do not judge cost from the monthly payment. Ask for the solar-only cash price, DC system size, first-year production estimate and every add-on. Then compare the remaining utility bill under the correct tariff. The result depends on the property and contract, so this page does not publish a fake statewide “final price.”</p></section>
    <Benchmark state={config.state} />
    <section><h2>What changes the {config.state} price</h2><ul className='list-disc space-y-2 pl-6'><li>Roof planes, shade, structural work and whether roofing is included.</li><li>Panel and inverter models, battery capacity, backup loads and electrical upgrades.</li><li>Permits, utility interconnection and the party responsible for corrections.</li><li>Cash purchase, loan fees and APR, lease or power-purchase escalator, and transfer terms.</li><li>Expected production, degradation and the estimate for the bill that remains.</li></ul></section>
    <section><h2>Use the utility on the bill</h2><p>Common investor-owned utilities include {config.utilities}. A proposal should name the actual utility, tariff and interconnection assumptions. Do not accept a generic savings chart that treats every utility or export rule as the same.</p><p className='mt-3'>{config.programNote}</p></section>
    {config.decisionNote && <section><h2>Check the property before the production claim</h2><p>{config.decisionNote}</p></section>}
    <QuoteChecklist />
    <section><h2>Before signing</h2><p>{config.licenseNote}</p><p className='mt-3'>{config.contractNote}</p><p className='mt-3'>Use the <Link href={companiesPath} className={linkClass}>{config.state} quote-comparison checklist</Link> to compare the companies on the same basis.</p></section>
  </DecisionPage>;
}

export function StateSolarCompaniesPage({ config }: { config: StateSolarConfig }) {
  const path = config.companiesPath || `/${config.slug}/solar-companies`;
  const costPath = config.costPath || `/${config.slug}/solar-cost`;
  return <DecisionPage title={`Solar Companies in ${config.state}: A Quote-First Comparison`} intro={`There is no honest universal “best” installer. The useful comparison is which verified ${config.state} contractor gives this property the clearest design, cash price, production case and service responsibility.`} path={path} sources={config.sources} sourceCheckedDate='2026-09-12' regionLabel={config.state} market={config.market} topic={`${config.state} solar company and quote comparison`} primaryResourceHref={costPath} primaryResourceLabel={`${config.state} solar cost guide`} comparisonHref='/tools/solar-panel-calculator' comparisonLabel='Normalize my quote inputs'>
    <section className='rounded-xl border border-emerald-200 bg-emerald-50 p-5'><h2>How this comparison works</h2><p>California Rate Relief does not rank a company because it bought placement or because a brand has many reviews. Verify the contracting entity, normalize at least two written quotes, check who performs and services the work, and compare cash economics before financing.</p></section>
    <section><h2>1. Verify the business that signs the contract</h2><p>{config.licenseNote}</p><p className='mt-3'>Record the legal business name and license number shown on the contract. Confirm insurance, who pulls permits, whether installation is in-house or subcontracted, and who handles a warranty claim after the sale.</p></section>
    <section><h2>2. Compare the same system and bill</h2><p>Require each company to use the same usage history, roof area and backup goal. For customers of {config.utilities}, the proposal should identify the serving utility and explain imports, exports, fixed charges and the estimated bill that remains.</p><p className='mt-3'>{config.programNote}</p></section>
    <QuoteChecklist />
    <section><h2>3. Read the payment and transfer terms</h2><p>Compare the cash price even if you expect to finance. For a loan, record the APR, fees, term and total payments. For a lease or power-purchase agreement, record the starting payment, escalator, purchase options, end-of-term terms and home-sale process. Do not compare only the first monthly payment.</p></section>
    <section><h2>4. Put state-specific promises in writing</h2><p>{config.contractNote}</p><p className='mt-3'>Reject verbal promises that do not appear in the contract. Savings, tax, incentive and production claims need the assumptions and responsible party stated clearly.</p></section>
    {config.decisionNote && <section><h2>Confirm the property path</h2><p>{config.decisionNote}</p></section>}
    <section><h2>Our decision rule</h2><p>A stronger quote is complete enough to audit: it identifies the equipment, system size, cash price, production estimate, utility assumptions, roof and electrical scope, installer, service process and contract exits. Use the <Link href={costPath} className={linkClass}>{config.state} cost guide</Link> to calculate the comparable price per watt before choosing.</p></section>
  </DecisionPage>;
}
