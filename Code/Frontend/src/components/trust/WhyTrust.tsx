import Link from 'next/link';
import { TRUST_LINKS } from './trust-links';

// =============================================================================
// WhyTrust — how the site works, in the plain terms a reader needs before
// trusting a number or a form on it.
//
// Every sentence here is one of the few things established about the business:
//   - CRR is an independent information and referral site;
//   - it refers California homeowners who ask for help to a solar provider and
//     is compensated when a referred homeowner signs an agreement;
//   - it does not install anything and is not a utility, contractor or
//     government agency;
//   - its figures come from primary sources and are dated.
// Do not add fee amounts, partner names, staff or review steps here.
//
// variant="full"    — home page section
// variant="compact" — the small note under the table of contents in the rail
// =============================================================================

const link = 'text-primary underline underline-offset-2 hover:no-underline';

export function WhyTrust({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <div className="rounded-lg border border-border bg-card p-4 text-xs leading-relaxed text-muted-foreground">
        <p className="font-semibold text-foreground">About this site</p>
        <p className="mt-1">
          An independent information and referral site. It is compensated when a homeowner it
          refers signs an agreement with a solar provider. It does not install anything.
        </p>
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          <Link href={TRUST_LINKS.howWeMakeMoney.href} className={link}>
            How we make money
          </Link>
          <Link href={TRUST_LINKS.editorialPolicy.href} className={link}>
            Editorial policy
          </Link>
        </p>
      </div>
    );
  }

  const items = [
    {
      title: 'Information first',
      body: 'California Rate Relief is an independent information and referral site. The guides, source links, calculators and checklists can be used without submitting an inquiry.',
      href: TRUST_LINKS.editorialPolicy,
    },
    {
      title: 'How the site is paid',
      body: 'When a California homeowner asks for help, the site refers them to a solar provider. It is compensated when a referred homeowner signs an agreement.',
      href: TRUST_LINKS.howWeMakeMoney,
    },
    {
      title: 'What it is not',
      body: 'It does not install anything. It is not a utility, a contractor or a government agency.',
      href: TRUST_LINKS.about,
    },
    {
      title: 'Where the numbers come from',
      body: 'Figures are drawn from primary sources — the IRS, the CPUC, the California Energy Commission, the utilities and Lawrence Berkeley National Laboratory — and dated.',
      href: TRUST_LINKS.sourcesWeUse,
    },
  ];

  return (
    <section aria-labelledby="why-trust-heading" className="border-y border-border bg-card py-14 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 id="why-trust-heading" className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          How this site works
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="border-l-4 border-l-highlight pl-4">
              <h3 className="!text-base font-bold text-foreground md:!text-lg">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
              <Link href={item.href.href} className={`mt-2 inline-block text-sm font-medium ${link}`}>
                {item.href.label}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Material corrections are logged, with dates, on the{' '}
          <Link href={TRUST_LINKS.corrections.href} className={link}>
            corrections page
          </Link>
          . How pages are researched is on the{' '}
          <Link href={TRUST_LINKS.methodology.href} className={link}>
            methodology page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
