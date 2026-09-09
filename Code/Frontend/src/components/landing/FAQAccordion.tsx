import { ChevronDown } from 'lucide-react';

// =============================================================================
// FAQAccordion — 12 questions using <details> for zero-JS open/close
// =============================================================================

export const FAQS = [
  {
    q: 'What is California Rate Relief?',
    a: 'California Rate Relief is a private referral service. We collect basic residential and commercial solar project information and make it available for review by a matched solar provider.',
  },
  {
    q: 'Does submitting the form approve my project?',
    a: 'No. A submission is a request for review. It is not an approval, quote, contract, savings guarantee, or confirmation that a particular project structure is available.',
  },
  {
    q: 'What information does the residential form collect?',
    a: 'The residential form asks for the utility, bill range, homeowner status, a broad credit range, property address and contact information. A provider may need more information before discussing options.',
  },
  {
    q: 'Do commercial projects use the homeowner form?',
    a: 'No. Commercial projects use a separate assessment that asks about the company, property type and control, location, utility, bill range, project timing and contact information.',
  },
  {
    q: 'Who determines pricing, savings and contract terms?',
    a: 'The solar provider does. Pricing, savings, equipment, ownership, financing, warranty, production and transfer terms should be stated in the provider’s written proposal and contract.',
  },
  {
    q: 'Is California Rate Relief a government or utility program?',
    a: 'No. California Rate Relief is not a government agency or utility and is not affiliated with or endorsed by a government agency, utility or the CPUC.',
  },
  {
    q: 'What happens after I submit?',
    a: 'The information is saved for review. A matched provider may contact you about next steps. Any project decision should be based on the provider’s written proposal and contract.',
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
            Straight answers about the referral and review process.
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
