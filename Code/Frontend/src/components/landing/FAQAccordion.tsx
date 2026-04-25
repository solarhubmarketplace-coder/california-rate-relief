import { ChevronDown } from 'lucide-react';

// =============================================================================
// FAQAccordion — 12 questions using <details> for zero-JS open/close
// =============================================================================

const FAQS = [
  {
    q: 'Is this really $0 down?',
    a: 'Yes. There is no upfront cost, no loan, no lien, and no payment plan. We install and own the system. You simply switch your power provider from your utility to the Rate Relief Program at a fixed lower rate.',
  },
  {
    q: 'What does "up to 50% lower" actually mean?',
    a: "Your locked-in per-kWh rate is set below your utility's current rate. Most California homeowners on PG&E, SCE, or SDG&E see 30–50% savings depending on usage and zone. Your exact rate is calculated on your eligibility call.",
  },
  {
    q: 'Who owns the equipment?',
    a: "We do. You don't own the panels or battery, which is why there's no upfront cost and no loan. You're paying for the lower power rate, not the hardware. The 25-year warranty covers all maintenance and repairs.",
  },
  {
    q: 'What is "bumper-to-bumper" warranty?',
    a: 'It means everything is covered for 25 years: panels, battery, inverter, monitoring, replacement parts, and labor. If anything breaks or underperforms, we fix it on our dime — no deductible, no service fee.',
  },
  {
    q: 'Will my power stay on during a PG&E PSPS or blackout?',
    a: 'Yes. Every install includes battery storage, so during a Public Safety Power Shutoff or grid outage your essentials (refrigerator, lights, Wi-Fi, medical devices, garage opener) keep running automatically.',
  },
  {
    q: 'Does this affect my credit score?',
    a: 'No. There is no credit pull and no loan, so nothing is reported to credit bureaus. Eligibility is based on home + utility + usage profile, not your credit score.',
  },
  {
    q: 'What if I want to sell my house?',
    a: 'The program transfers cleanly to the new owner. They inherit your locked-in rate, which is typically a marketable feature for buyers. We handle the transfer paperwork at no cost.',
  },
  {
    q: 'How long does the install take?',
    a: 'Most installs are completed in 1–2 days on-site. Permits and utility interconnection add 4–8 weeks total from contract to first lower-rate bill.',
  },
  {
    q: "What's the catch?",
    a: "Honestly, no catch — but there are limits. You don't own the equipment (you can't sell it). You're locked into the program for 25 years (transferable on home sale). Your roof and electrical panel must qualify. The eligibility call walks you through everything.",
  },
  {
    q: 'Why is this only available in 2026?',
    a: 'The 2026 program has a fixed number of California installation slots. Demand has been heavy due to PG&E rate hikes and PSPS frequency. Once slots fill, eligibility re-opens in the following program year at potentially different terms.',
  },
  {
    q: 'What utilities qualify?',
    a: 'PG&E, SCE, SDG&E, LADWP, SMUD, and most other California IOUs and municipal utilities. Use the form above to confirm eligibility for your specific utility and ZIP code.',
  },
  {
    q: 'Is this affiliated with my utility company?',
    a: 'No. The Rate Relief Program is independent from PG&E, SCE, SDG&E, LADWP, and SMUD. We become your power provider in place of (or alongside) your existing utility. Your utility still maintains the grid your home connects to.',
  },
];

export function FAQAccordion() {
  return (
    <section className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <div className='text-center mb-12'>
          <div className='inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase'>
            Common questions
          </div>
          <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3'>
            Everything you want to know
          </h2>
          <p className='text-lg text-slate-600'>
            Straight answers about how the 2026 program works.
          </p>
        </div>

        <div className='divide-y divide-slate-200 border-y border-slate-200'>
          {FAQS.map((item, i) => (
            <details key={i} className='group py-5'>
              <summary className='flex items-center justify-between gap-4 cursor-pointer list-none'>
                <span className='font-bold text-lg text-slate-900'>{item.q}</span>
                <ChevronDown
                  className='w-5 h-5 text-slate-400 transition-transform shrink-0 group-open:rotate-180'
                  aria-hidden='true'
                />
              </summary>
              <p className='mt-3 text-slate-600 leading-relaxed'>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
