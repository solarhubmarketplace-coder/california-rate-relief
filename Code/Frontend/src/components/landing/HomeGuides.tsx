import Link from 'next/link';
import { Battery, Building2, DollarSign, RefreshCw, Scale, Zap } from 'lucide-react';

// =============================================================================
// HomeGuides — server component, CRR homepage only
// =============================================================================
// Surfaces the site's own published guides directly beneath the utility
// picker / QualificationWizard, so the homepage reads as an independent
// publisher with its own content rather than a single-purpose lead form.
// Every href below is a route that exists in src/app at the time this was
// written; verify with `ls src/app/...` before adding or changing one.
// =============================================================================

type GuideCard = {
  href: string;
  icon: typeof DollarSign;
  title: string;
  description: string;
};

const GUIDE_CARDS: GuideCard[] = [
  {
    href: '/solar-cost',
    icon: DollarSign,
    title: 'Solar cost by city',
    description: 'What sets the price in your city — utility, permits and incentives — with no sales quote and no invented number.',
  },
  {
    href: '/best-solar-companies-california',
    icon: Scale,
    title: 'Compare solar companies',
    description: 'What to check on license, scope and service before putting two proposals side by side.',
  },
  {
    href: '/california-utility-rate-tracker',
    icon: Zap,
    title: 'Current utility rates',
    description: 'Sourced residential rates for PG&E, SCE, SDG&E and SMUD, checked against utility filings.',
  },
  {
    href: '/blog/what-is-nem-3-california',
    icon: RefreshCw,
    title: 'NEM 3.0 explained',
    description: 'How the Net Billing Tariff prices exported electricity differently from electricity used at home.',
  },
  {
    href: '/battery',
    icon: Battery,
    title: 'Home batteries',
    description: 'Sizing, cost and backup basics for a home battery, apart from any solar sales pitch.',
  },
  {
    href: '/commercial-solar/cost-per-watt-california',
    icon: Building2,
    title: 'Commercial solar cost and calculator',
    description: 'Per-watt cost ranges by system size, plus a calculator for after-tax cost and payback.',
  },
];

type RecentGuide = { href: string; title: string };

const RECENTLY_UPDATED: RecentGuide[] = [
  {
    href: '/commercial-solar/cost-per-watt-california',
    title: 'Commercial Solar Cost in California: What You Pay (2026)',
  },
  {
    href: '/california-utility-rate-tracker',
    title: 'California Utility Rate Tracker: PG&E, SCE, SDG&E, SMUD',
  },
  {
    href: '/blog/what-is-nem-3-california',
    title: 'What is NEM 3.0 in California? Start with the bill',
  },
  {
    href: '/blog/sdge-time-of-use-rates-2026',
    title: 'SDG&E Time-of-Use Rates: TOU-DR1 Peak Hours Explained',
  },
  {
    href: '/solar-installers/sunrun-review',
    title: 'Sunrun Reviews (2026): Is It Still in Business?',
  },
  {
    href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california',
    title: 'Solar Lease vs. PPA vs. Loan vs. Cash Purchase in California',
  },
];

const REVIEWED_DATE = 'September 22, 2026';

export function HomeGuides() {
  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto mb-12 max-w-3xl text-center'>
          <p className='mb-3 text-xs font-bold uppercase tracking-wide text-primary'>
            Start with the question you have
          </p>
          <h2 className='text-3xl font-extrabold tracking-tight text-foreground md:text-5xl'>
            California solar, answered from public sources
          </h2>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
          {GUIDE_CARDS.map(({ href, icon: Icon, title, description }) => (
            <Link
              key={href}
              href={href}
              className='flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md'
            >
              <Icon className='mb-4 h-8 w-8 text-primary' aria-hidden='true' />
              <h3 className='mb-2 text-lg font-bold text-foreground'>{title}</h3>
              <p className='text-sm leading-relaxed text-muted-foreground'>{description}</p>
            </Link>
          ))}
        </div>

        <div className='mx-auto mt-8 max-w-3xl rounded-xl border border-border bg-card p-6 md:p-8'>
          <h3 className='mb-4 text-xs font-bold uppercase tracking-wide text-muted-foreground'>
            Recently updated
          </h3>
          <ul className='space-y-3'>
            {RECENTLY_UPDATED.map((item) => (
              <li
                key={item.href}
                className='flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4'
              >
                <Link href={item.href} className='font-semibold text-primary hover:underline'>
                  {item.title}
                </Link>
                <span className='shrink-0 text-xs text-muted-foreground'>Updated {REVIEWED_DATE}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
