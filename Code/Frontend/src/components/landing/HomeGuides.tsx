import Link from 'next/link';
import { Battery, Building2, DollarSign, Scale, Zap } from 'lucide-react';

// =============================================================================
// HomeGuides — server component, CRR homepage only
// =============================================================================
// Surfaces the site's own published guides directly beneath the utility
// picker / QualificationWizard, so the homepage reads as an independent
// publisher with its own content rather than a single-purpose lead form.
//
// 2026-09-23 (topic map Block 5 §5.7): the six topic cards became the site's
// hub pages, every one that exists, grouped under the five headings the spec
// names, one line each. A hub page is where a subject's guides are listed, so
// linking all of them here puts every guide two clicks from home. The list
// matches the hub pages in src/data/topic-hubs.ts (the news hub has no page
// yet and is left out until it does). Every href below is a route that exists
// in src/app; verify with `ls src/app/...` before adding or changing one.
// =============================================================================

type HubLink = { href: string; title: string; line: string };
type HubGroup = { heading: string; icon: typeof DollarSign; links: HubLink[] };

export const HOME_HUB_GROUPS: HubGroup[] = [
  {
    heading: 'Cost and paying',
    icon: DollarSign,
    links: [
      {
        href: '/solar-panels-california',
        title: 'Solar panels in California',
        line: 'What a system costs per watt, how to size it and whether it pays back.',
      },
      {
        href: '/solar-cost',
        title: 'Solar cost by city',
        line: 'What sets the price where you live: the utility, permit fees and local rules.',
      },
      {
        href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california',
        title: 'Lease, PPA, loan or cash',
        line: 'The contract terms to compare before you choose how to pay.',
      },
      {
        href: '/blog/california-solar-tax-credit-2026',
        title: 'Solar incentives in 2026',
        line: 'What California still offers now that the federal credit has ended.',
      },
    ],
  },
  {
    heading: 'Companies and reviews',
    icon: Scale,
    links: [
      {
        href: '/best-solar-companies-california',
        title: 'Compare solar companies',
        line: 'What to check on license, scope and service before comparing proposals.',
      },
      {
        href: '/solar-installers',
        title: 'Solar company reviews',
        line: 'Company records from BBB files, court dockets and company filings.',
      },
      {
        href: '/solar-problems',
        title: 'Solar problems and scams',
        line: 'Contract red flags, dealer fees, liens and what to do when a job goes wrong.',
      },
    ],
  },
  {
    heading: 'Bills, rates and NEM',
    icon: Zap,
    links: [
      {
        href: '/california-utility-rate-tracker',
        title: 'Utility rate tracker',
        line: 'Sourced residential rates for PG&E, SCE, SDG&E and SMUD, checked against utility filings.',
      },
      {
        href: '/blog/why-is-my-california-electric-bill-so-high',
        title: 'Why California bills are high',
        line: 'What drives California rates, and what to check on your own bill.',
      },
      {
        href: '/blog/nem-2-vs-nem-3-california',
        title: 'NEM 2.0 vs NEM 3.0',
        line: 'How export credits changed under net billing, and what that means for a new system.',
      },
      {
        href: '/blog/is-community-solar-worth-it',
        title: 'Community solar',
        line: 'When an off-site subscription fits better than rooftop panels, and the fees to check.',
      },
    ],
  },
  {
    heading: 'Batteries and your home',
    icon: Battery,
    links: [
      {
        href: '/battery',
        title: 'Home batteries',
        line: 'Sizing, cost and backup basics for a home battery, apart from any sales pitch.',
      },
      {
        href: '/blog/is-my-roof-good-for-solar-california',
        title: 'Is your roof ready for solar?',
        line: 'Usable unshaded area, structure and remaining roof life: what to confirm before a quote.',
      },
      {
        href: '/solar-panel-maintenance-california',
        title: 'Solar panel maintenance',
        line: 'Cleaning, repairs, warranties and who to call when output drops.',
      },
    ],
  },
  {
    heading: 'Commercial',
    icon: Building2,
    links: [
      {
        href: '/commercial-solar',
        title: 'Commercial solar',
        line: 'Build a comparable quote for a business, farm, school or multifamily property.',
      },
    ],
  },
];

type RecentGuide = { href: string; title: string };

// The rate tracker and the lease/PPA/loan guide were listed here too; both are
// now in the hub list above, and a page links a target once (Block 5 §5.9).
const RECENTLY_UPDATED: RecentGuide[] = [
  {
    href: '/commercial-solar/cost-per-watt-california',
    title: 'Commercial Solar Cost in California: What You Pay (2026)',
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

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
          {HOME_HUB_GROUPS.map(({ heading, icon: Icon, links }) => (
            <div key={heading} className='rounded-xl border border-border bg-card p-6'>
              <div className='mb-4 flex items-center gap-3'>
                <Icon className='h-6 w-6 shrink-0 text-primary' aria-hidden='true' />
                <h3 className='text-lg font-bold text-foreground'>{heading}</h3>
              </div>
              <ul className='space-y-4'>
                {links.map(({ href, title, line }) => (
                  <li key={href}>
                    <Link href={href} className='font-semibold text-primary hover:underline'>
                      {title}
                    </Link>
                    <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>{line}</p>
                  </li>
                ))}
              </ul>
            </div>
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
