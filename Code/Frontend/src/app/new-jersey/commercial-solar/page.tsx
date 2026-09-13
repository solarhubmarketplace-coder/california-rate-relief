import type { Metadata } from 'next';
import Link from 'next/link';
import { DecisionPage } from '@/components/growth/DecisionPage';
import { CommercialAssessmentForm } from '@/components/landing/CommercialAssessmentForm';

const path = '/new-jersey/commercial-solar';
const linkClass = 'font-semibold text-emerald-800 underline underline-offset-2';

export const metadata: Metadata = {
  title: 'Commercial Solar in New Jersey: Project and Bid Guide',
  description: 'Review a New Jersey commercial solar project by interval use, roof or carport scope, utility tariff, interconnection, SuSI program path, financing and service.',
  alternates: { canonical: path },
};

export default function Page() {
  return <DecisionPage
    title='Commercial Solar in New Jersey: Build a Bid-Ready Project'
    intro='A commercial solar decision starts with the facility’s interval use, tariff, roof or parking scope, interconnection path and ownership structure. Give every bidder the same facts before comparing savings or price.'
    path={path}
    commercial
    regionLabel='New Jersey'
    market='NJ'
    sourceCheckedDate='2026-09-12'
    primaryResourceHref='/new-jersey/solar-incentives'
    primaryResourceLabel='New Jersey incentive guide'
    comparisonHref='/new-jersey/solar-companies'
    comparisonLabel='Contractor comparison guide'
    sources={[
      { label: 'New Jersey BPU: commercial customer programs', url: 'https://www.nj.gov/bpu/bpu/commercial/programs/' },
      { label: 'New Jersey BPU: 2026 CSI program action', url: 'https://www.nj.gov/bpu/newsroom/2026/approved/20260305.html' },
      { label: 'New Jersey CSI program: current project scope and solicitation information', url: 'https://csisolar.nj.gov/' },
      { label: 'New Jersey Division of Consumer Affairs: license verification', url: 'https://www.njconsumeraffairs.gov/Pages/verification.aspx' },
      { label: 'IRS: Clean Electricity Investment Credit', url: 'https://www.irs.gov/credits-deductions/clean-electricity-investment-credit' },
    ]}
    inquiry={<section id='solar-inquiry' className='my-10 scroll-mt-24'><h2 className='mb-3 text-2xl font-bold'>Discuss a New Jersey commercial project</h2><p className='mb-5 text-slate-700'>Send the facility and bill basics for a private solar referral review. Provider availability, engineering, program eligibility and price must still be confirmed.</p><CommercialAssessmentForm defaultMarket='NJ' /></section>}
  >
    <section className='rounded-xl border border-emerald-200 bg-emerald-50 p-5'><h2>The short answer</h2><p>Do not start with a generic payback percentage. Export interval data, identify the serving utility and tariff, define who controls the site, and price solar, storage, roofing, carports and electrical work on separate lines.</p></section>
    <section><h2>Prepare one project brief for every bidder</h2><ul className='list-disc space-y-2 pl-6'><li>At least 12 months of bills and interval data when available.</li><li>Facility hours, seasonal loads, demand peaks and planned EV, HVAC or process additions.</li><li>Roof age, structural information, usable roof or parking area, access and fire-lane constraints.</li><li>Utility account, tariff, supplier and known interconnection constraints.</li><li>Ownership, lease, lender and tenant approvals required for the property.</li><li>Solar-only cash price plus separate storage, roof, carport and electrical costs.</li></ul></section>
    <section><h2>Use the correct New Jersey solar program path</h2><p>NJBPU’s Successor Solar Incentive structure separates smaller net-metered projects from qualifying projects in the Competitive Solar Incentive program. The current CSI program describes non-residential net-metered projects greater than 5 MW as within CSI, while projects outside CSI may fit the Administratively Determined Incentive program. Require the applicant, project size, registration path, SREC-II ownership and current deadline in writing.</p><p className='mt-3'>A program description is not an award. Verify the live documents before a proposal counts an incentive as project cash flow.</p></section>
    <section><h2>Model the business bill</h2><p>A business bill can include energy, demand, delivery, fixed and supplier charges. A project that reduces annual kWh may not eliminate the interval that sets a demand charge. Compare solar alone and solar plus storage against the same interval data and operating schedule.</p><p className='mt-3'>Require expected onsite use, exports, curtailment, degradation and the remaining bill. Ask for a downside case if the load or construction schedule changes.</p></section>
    <section><h2>Keep federal tax treatment conditional</h2><p>The IRS describes the Clean Electricity Investment Credit under Internal Revenue Code § 48E, including wage, apprenticeship, domestic-content, energy-community, transfer and direct-payment rules. Eligibility and timing depend on the project and taxpayer. Keep any federal benefit outside the base project price until the business’s tax professional confirms it.</p></section>
    <section><h2>Compare contracts and long-term responsibility</h2><p>Identify the legal entity that develops, builds, owns, operates and services the system. For a purchase, loan, lease or power-purchase agreement, record total payments, escalators, performance terms, insurance, roof obligations, early termination, property sale and end-of-term removal or ownership.</p><p className='mt-3'>Verify the contracting business through the state license system. Match the business on the proposal to the entity that will perform and stand behind the work.</p></section>
    <section><h2>Continue the project review</h2><p>Use the <Link href='/new-jersey/solar-incentives' className={linkClass}>New Jersey incentive guide</Link> for current program checks and the <Link href='/new-jersey/solar-companies' className={linkClass}>company comparison guide</Link> before sending the project brief.</p></section>
  </DecisionPage>;
}
