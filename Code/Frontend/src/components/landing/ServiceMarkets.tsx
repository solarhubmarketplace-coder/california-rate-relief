import Link from 'next/link';

const markets = [
  { state: 'California', cost: '/solar-panels-california', companies: '/best-solar-companies-california' },
  { state: 'New Jersey', cost: '/new-jersey/solar-cost', companies: '/new-jersey/solar-companies' },
  { state: 'Maryland', cost: '/maryland/solar-cost', companies: '/maryland/solar-companies' },
  { state: 'Virginia', cost: '/virginia/solar-cost', companies: '/virginia/solar-companies' },
  { state: 'Delaware', cost: '/delaware/solar-cost', companies: '/delaware/solar-companies' },
  { state: 'Washington, DC', cost: '/washington-dc/solar', companies: '/washington-dc/solar-companies' },
];

export function ServiceMarkets() {
  return <section className='bg-slate-50 py-14' aria-labelledby='service-market-heading'>
    <div className='container mx-auto px-4'>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 id='service-market-heading' className='text-3xl font-bold text-slate-900'>Solar decision guides by state</h2>
        <p className='mt-3 text-slate-700'>Use a state guide to compare the cash price, utility assumptions, contractor and contract before requesting follow-up.</p>
      </div>
      <div className='mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3'>
        {markets.map((market) => <article key={market.state} className='rounded-xl border bg-white p-5 shadow-sm'>
          <h3 className='text-xl font-bold text-slate-900'>{market.state}</h3>
          <div className='mt-4 flex flex-col gap-3 text-sm font-semibold text-emerald-800'>
            <Link href={market.cost} className='underline underline-offset-2'>Cost and project guide</Link>
            <Link href={market.companies} className='underline underline-offset-2'>Company and quote comparison</Link>
          </div>
        </article>)}
      </div>
      <p className='mx-auto mt-6 max-w-3xl text-center text-sm text-slate-600'>California Rate Relief is a private referral service. It is not a utility or government program, and service availability is confirmed after the project details are reviewed.</p>
    </div>
  </section>;
}
