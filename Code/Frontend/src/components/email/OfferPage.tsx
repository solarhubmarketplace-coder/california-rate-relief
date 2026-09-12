import Link from 'next/link';
import { OfferRequest } from './OfferRequest';

const offers = {
  'bill-review': {
    eyebrow: 'Your electricity bill',
    heading: 'A higher bill deserves a closer look.',
    intro: 'Start with what changed: how much electricity you used, when you used it, and what the bill actually includes. Then decide whether exploring solar makes sense for your home.',
    steps: [
      ['Compare the same period', 'Check the number of billing days and compare daily electricity use. A longer billing period can make the total look worse even when your daily use has barely changed.'],
      ['Separate usage from charges', 'Find the electricity subtotal, kilowatt-hours and rate plan. Keep past-due balances, water and other services separate when you compare bills.'],
      ['Bring one clear question', 'Has your usage changed? Are you using more power during expensive hours? Do you already have solar and still receive a large bill? Tell us what you want to understand.'],
    ],
    resource: '/blog/why-is-my-california-electric-bill-so-high',
    resourceLabel: 'Read the electricity bill guide',
    detail: 'Have your latest bill nearby. You do not need to upload it or enter an account number here.',
  },
  'quote-review': {
    eyebrow: 'Before your solar decision',
    heading: 'The monthly payment is only part of the quote.',
    intro: 'Put the price, equipment and assumptions next to each other. A useful comparison starts with the whole proposal. Use this checklist, then send the question that matters most to you.',
    steps: [
      ['Separate cash price and financing', 'Find the cash price, financed amount, term and any changes in payments. Ask the provider to explain differences between the cash and financed offers.'],
      ['Check what the system includes', 'Compare panel capacity, expected production, inverter and battery details. Look for separate roof, electrical or installation work.'],
      ['Ask about the assumptions', 'Which utility rate, electricity use and remaining utility bill support the estimate? Ask for the assumptions in writing so you can compare proposals on the same basis.'],
    ],
    resource: '/blog/ppa-loan-vs-solar-lease-vs-cash-california',
    resourceLabel: 'Compare solar payment options',
    detail: 'Keep the proposal with you. Start with a short question; there is no document upload on this page.',
  },
} as const;

export function OfferPage({ offer }: { offer: keyof typeof offers }) {
  const content = offers[offer];
  return <div className="min-h-screen bg-[#f7f7f0] text-slate-900">
    <header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-6"><Link href="/" className="text-lg font-bold tracking-tight text-emerald-900">California Rate Relief</Link><span className="text-right text-xs text-slate-600">Solar information &amp; referrals</span></div></header>
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <article>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">{content.eyebrow}</p>
          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{content.heading}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{content.intro}</p>
          <a href="#request" className="mt-7 inline-flex rounded-xl bg-emerald-800 px-6 py-3 font-semibold text-white hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Ask about my options <span aria-hidden="true" className="ml-3">→</span></a>
          <section className="mt-12" aria-label="Your checklist"><h2 className="text-2xl font-bold">Three things to check first</h2><ol className="mt-6 space-y-7">{content.steps.map(([title,body],i)=><li key={title} className="flex gap-4"><span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-900">{i+1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-2 leading-7 text-slate-600">{body}</p></div></li>)}</ol></section>
          <p className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6">{content.detail}</p>
          <Link href={content.resource} className="mt-6 inline-block font-semibold text-emerald-900 underline underline-offset-4">{content.resourceLabel}</Link>
        </article>
        <OfferRequest offer={offer}/>
      </div>
      <section className="mt-14 border-t border-slate-200 pt-8"><h2 className="text-xl font-bold">What happens after you ask?</h2><p className="mt-3 max-w-3xl leading-7 text-slate-600">Your request is saved for follow-up. California Rate Relief collects project details and may share them with a solar provider. The provider confirms whether they serve your location and what options they can offer. We are a private referral business, separate from your utility and government agencies.</p></section>
    </main>
    <footer className="border-t border-slate-200 bg-white px-5 py-8"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 text-sm text-slate-600"><span>California Rate Relief</span><div className="flex gap-5"><Link href="/privacy" className="underline">Privacy</Link><Link href="/contact" className="underline">Contact</Link><Link href="/" className="underline">Home</Link></div></div></footer>
  </div>;
}
