import Link from 'next/link';
import { DecisionPage, QuoteChecklist, type Source } from './DecisionPage';

const path = '/virginia/richmond-solar-companies';

const sources: Source[] = [
  { label: 'City of Richmond: solar permits, zoning and historic-district review', url: 'https://www.rva.gov/sustainability/initiatives' },
  { label: 'Virginia SCC: behind-the-meter generation and net metering', url: 'https://www.scc.virginia.gov/regulated-industries/utility-regulation/energy-regulation/meter-generation/' },
  { label: 'Dominion Energy Virginia: net metering and interconnection steps', url: 'https://www.dominionenergy.com/en/Virginia/Renewable-Energy-Programs/Net-Metering' },
  { label: 'Virginia DPOR: Board for Contractors', url: 'https://www.dpor.virginia.gov/Boards/Contractors' },
  { label: 'Virginia DPOR: contractor license lookup', url: 'https://dporweb.dpor.virginia.gov/LicenseLookup/' },
  { label: 'U.S. Department of Energy: choosing a solar installer', url: 'https://www.energy.gov/cmei/systems/articles/decisions-decisions-choosing-solar-installer' },
];

const linkClass = 'font-semibold text-emerald-800 underline underline-offset-2';

export function RichmondSolarCompaniesGuide() {
  return (
    <DecisionPage
      title='Solar Companies in Richmond, Virginia: Compare the Contract, Not the Pitch'
      intro='There is no honest universal “best” installer. Richmond adds property, permit and historic-district questions to the normal Virginia license, utility and quote checks. Put those facts on one page before comparing price.'
      path={path}
      sources={sources}
      sourceCheckedDate='2026-09-12'
      regionLabel='Richmond, Virginia'
      market='VA'
      topic='Richmond Virginia solar company and quote comparison'
      primaryResourceHref='/virginia/solar-cost'
      primaryResourceLabel='Virginia solar cost guide'
      comparisonHref='/virginia/solar-companies'
      comparisonLabel='Virginia company checklist'
    >
      <section className='rounded-xl border border-emerald-200 bg-emerald-50 p-5'>
        <h2>Start with three written proposals</h2>
        <p>A company name is not the decision. Ask at least three bidders to price the same roof area, system size, equipment, first-year production, utility treatment and service scope. Compare the cash price before a loan, lease or power-purchase payment changes the picture.</p>
      </section>

      <section>
        <h2>Check the Richmond property before the savings claim</h2>
        <p>The City of Richmond says solar panels can be an accessory use in every zoning district, subject to the property&apos;s setbacks. Residential and commercial solar projects use the City&apos;s electrical permit process. A project that needs plan review also has plan-submission requirements.</p>
        <p className='mt-3'>Historic property needs another pass. Richmond&apos;s Commission of Architectural Review has placement guidance for Old and Historic Districts, including visibility from the public right of way and installation methods that protect the structure. Make the bidder identify this work before treating its schedule or price as final.</p>
      </section>

      <section>
        <h2>Verify the exact contractor</h2>
        <p>Search the legal business name and license number in Virginia&apos;s Department of Professional and Occupational Regulation lookup. Then match that record to the company on the contract. Record the license class and specialty, who pulls permits, who performs the electrical work, whether subcontractors are used, and who owns the service call after installation.</p>
        <p className='mt-3'>A sales logo, review count or national brand does not answer those questions. The contract should.</p>
      </section>

      <section>
        <h2>Keep the City permit and Dominion approval separate</h2>
        <p>For a Dominion Energy Virginia customer, the net-metering application is a utility interconnection process. Dominion reviews compatibility with its distribution system. The utility says the applicant remains responsible for local zoning, building and electrical requirements, equipment selection and installation.</p>
        <p className='mt-3'>Ask who submits the interconnection notice, who signs it, who answers corrections and when contingent approval is expected. Dominion also states that a net-metered system must be sized so it does not reasonably produce more than 150% of expected annual electrical consumption. Make the bidder show the usage record behind its proposed size.</p>
      </section>

      <QuoteChecklist />

      <section>
        <h2>Make financing visible</h2>
        <p>For a loan, write down cash price, financed amount, APR, fees, term and total payments. For a lease or power-purchase agreement, write down the starting payment or rate, escalator, purchase options, transfer process and end-of-term terms. A low first payment can still produce the highest total cost.</p>
        <p className='mt-3'>Use the <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={linkClass}>cash, loan, lease and PPA comparison</Link> as a worksheet. The contract&apos;s Virginia terms control.</p>
      </section>

      <section>
        <h2>The decision rule</h2>
        <p>The stronger Richmond proposal is the one you can audit. It names the licensed contractor, matches the property and City review path, shows Dominion interconnection responsibility, prices the same scope, explains the remaining electric bill and states who fixes problems. If any one of those is missing, the quote is not ready to compare.</p>
      </section>
    </DecisionPage>
  );
}
