// =============================================================================
// breadcrumb-sections — the crumb names and section indexes every CRR trail
// uses (topic map Block 5 §5.6, 2026-09-23).
//
// No imports on purpose: components/shared/BreadcrumbJsonLd.tsx is a client
// component and reads this file, so it must not pull the topic-hub data into
// the browser bundle. The hub-aware trail for page shells is in
// lib/breadcrumbs.ts, which builds on this file.
// =============================================================================

export interface Crumb {
  label: string;
  href: string;
}

/**
 * Short crumb names for the section indexes and hub pages, keyed by URL. They
 * are the names already used in the visible trails on the site, so a trail a
 * page writes by hand and the one a shell derives read the same.
 */
export const CRUMB_LABELS: Readonly<Record<string, string>> = {
  '/blog': 'Blog',
  '/battery': 'Home batteries',
  '/commercial-solar': 'Commercial Solar',
  '/panel-reviews': 'Panel Reviews',
  '/solar-problems': 'Solar problems and scams',
  '/solar-installers': 'Solar company reviews',
  '/solar-cost': 'Solar cost by city',
  '/best-solar-companies-california': 'Solar companies in California',
  '/california-utility-rate-tracker': 'California utility rate tracker',
  '/solar-panels-california': 'Solar cost and value',
  '/solar-panel-maintenance-california': 'Solar panel maintenance',
  '/blog/why-is-my-california-electric-bill-so-high': 'Why California electric bills are high',
  '/blog/ppa-loan-vs-solar-lease-vs-cash-california': 'Leases, PPAs and financing',
  '/blog/california-solar-tax-credit-2026': 'California solar incentives',
  '/blog/nem-2-vs-nem-3-california': 'NEM 3.0 and net billing',
  '/blog/is-my-roof-good-for-solar-california': 'Roofs and solar',
  '/blog/is-community-solar-worth-it': 'Community solar',
};

/**
 * First URL segment -> its section index. `href: null` means no index page
 * returns 200 for that segment, so it is never linked: /solar-savings,
 * /solar-companies, /utilities and the state roots 404 (checked 2026-09-23
 * against src/app, where none of them has a page.tsx).
 */
export const SECTION_CRUMBS: Readonly<Record<string, { label: string; href: string | null }>> = {
  blog: { label: CRUMB_LABELS['/blog'], href: '/blog' },
  battery: { label: CRUMB_LABELS['/battery'], href: '/battery' },
  'commercial-solar': { label: CRUMB_LABELS['/commercial-solar'], href: '/commercial-solar' },
  'panel-reviews': { label: CRUMB_LABELS['/panel-reviews'], href: '/panel-reviews' },
  'solar-problems': { label: CRUMB_LABELS['/solar-problems'], href: '/solar-problems' },
  'solar-installers': { label: CRUMB_LABELS['/solar-installers'], href: '/solar-installers' },
  'solar-cost': { label: CRUMB_LABELS['/solar-cost'], href: '/solar-cost' },
  'solar-savings': { label: 'Solar Savings by City', href: null },
  'solar-companies': { label: 'Solar Companies by City', href: null },
};

/** '/blog/x/' -> ['blog', 'x'] (query, hash and slashes dropped). */
export function pathSegments(path: string): string[] {
  return (path || '/').split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
}

/**
 * The section crumb for a page below a section index, or null when the page is
 * the index itself, sits in no section, or its section has no index page.
 */
export function sectionCrumb(path: string): Crumb | null {
  const segments = pathSegments(path);
  if (segments.length < 2) return null;
  const section = SECTION_CRUMBS[segments[0]];
  return section && section.href ? { label: section.label, href: section.href } : null;
}
