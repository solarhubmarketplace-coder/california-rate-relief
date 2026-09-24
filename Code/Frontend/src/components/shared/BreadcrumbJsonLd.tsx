'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { ReactElement } from 'react';
import { SECTION_CRUMBS, type Crumb } from '@/lib/breadcrumb-sections';

// =============================================================================
// BreadcrumbJsonLd — schema.org BreadcrumbList for CRR public pages
// =============================================================================
// Wired once into components/layout/PublicLayout.tsx, so every page that uses
// that layout emits breadcrumb schema with no per-page edit. Most CRR pages
// already render a VISIBLE breadcrumb nav (Home / Blog / This Page); this adds
// the machine-readable half, which was missing site-wide.
//
// Trail shape:  Home > <hub or section index> > [<mid-level>] > <current page>
//
// A ListItem pointing at a 404 is worse than omitting it, so a first path
// segment is linked only when a real index page exists under src/app. The
// section table is lib/breadcrumb-sections.ts (SECTION_CRUMBS), shared with the
// page shells so a derived visible trail and this schema use the same names.
// Checked 2026-09-23 against src/app (topic map Block 5 §5.6):
//   /blog, /battery, /commercial-solar, /panel-reviews, /solar-problems,
//   /solar-cost, /solar-installers   page.tsx present           -> linked
//   /solar-savings, /solar-companies  no page.tsx (only [city]/) -> skipped
// Skipped segments drop out of the list entirely; position stays 1-based and
// sequential over whatever survives.
//
// A page whose visible trail is not the URL section passes it: `parents` (the
// whole list between Home and the page) or the older single `parent`. The
// shells (DecisionPage, ArticleRoute) always pass `parents`, taken from the
// same list they render, so an empty list means "no middle crumb" and is not
// replaced by the URL section.
// =============================================================================

const DEFAULT_BASE_URL = 'https://ratereliefca.com';

/**
 * Hosts served from this same codebase that are NOT CRR (see src/middleware.ts).
 * A client component cannot read the request header, so emission is also
 * guarded on window.location.hostname once mounted: CRR breadcrumbs must never
 * show up in a sibling site's markup. Localhost and *.vercel.app preview hosts
 * are deliberately NOT blocked, so the schema stays testable.
 */
const NON_CRR_HOSTS = new Set([
  'greenreviewshub.com',
  'securehomegear.com',
  'athomebiohacking.com',
  'glp1comparehub.com',
]);

/**
 * Paths served on all five hosts by host-aware page handlers (mirrors
 * isSharedTrustPath in src/middleware.ts). PublicLayout is reachable on a
 * non-CRR host through /contact and /affiliate-disclosure, and the host is not
 * knowable during SSR, so these emit only after mount — once the hostname
 * check above has actually run. Every other path SSRs its schema normally.
 */
const SHARED_TRUST_PATHS = [
  '/about',
  '/contact',
  '/affiliate-disclosure',
  '/privacy',
  '/terms',
  '/methodology',
  '/author',
];

/** Path prefixes that get no breadcrumb schema at all. */
const EXCLUDED_PREFIXES = [
  '/dashboard',
  '/login',
  '/reset-password',
  '/api',
  '/testing-guide',
  '/testing',
  '/book',
  '/register',
  '/signup',
];

/** Slug tokens that are acronyms or trade names, not words to title-case. */
const ACRONYMS: Record<string, string> = {
  ca: 'CA',
  pge: 'PG&E',
  sce: 'SCE',
  sdge: 'SDG&E',
  ladwp: 'LADWP',
  smud: 'SMUD',
  nem: 'NEM',
  adu: 'ADU',
  hoa: 'HOA',
  ppa: 'PPA',
  ev: 'EV',
  sgip: 'SGIP',
  psps: 'PSPS',
};

/** Left lowercase inside a title — never in first position. */
const MINOR_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in',
  'nor', 'of', 'on', 'or', 'the', 'to', 'vs', 'with',
]);

/** 'adu-solar-requirements-california' -> 'ADU Solar Requirements California' */
export function labelFromSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (ACRONYMS[lower]) return ACRONYMS[lower];
      if (i > 0 && MINOR_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

/** JSON-LD goes through dangerouslySetInnerHTML; never let a raw '<' through. */
function serialize(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export interface BreadcrumbJsonLdProps {
  /** Overrides the label derived from the last path segment — pass the real h1. */
  currentLabel?: string;
  /** Absolute origin used for every item URL. */
  baseUrl?: string;
  /**
   * An explicit middle crumb (e.g. the /solar-cost index or a regional hub).
   * Replaces the section crumb derived from the first path segment, so the
   * schema trail matches the page's visible breadcrumb.
   */
  parent?: Crumb;
  /**
   * Every crumb between Home and this page, in order. Takes precedence over
   * `parent`; an empty array means the page has no middle crumb.
   */
  parents?: Crumb[];
}

export function BreadcrumbJsonLd({
  currentLabel,
  baseUrl = DEFAULT_BASE_URL,
  parent,
  parents,
}: BreadcrumbJsonLdProps): ReactElement | null {
  const pathname = usePathname();

  // Two-phase on purpose. Server HTML and the first client render both see
  // mounted === false, so hydration always matches; the hostname check only
  // takes effect on the render pass after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const onNonCrrHost =
    mounted &&
    typeof window !== 'undefined' &&
    NON_CRR_HOSTS.has(
      window.location.hostname.toLowerCase().replace(/^www\./, '')
    );

  if (onNonCrrHost) return null;

  const path = (pathname || '/').split('?')[0].split('#')[0];
  if (path === '' || path === '/') return null;
  if (EXCLUDED_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`))) {
    return null;
  }

  const isSharedTrustPath = SHARED_TRUST_PATHS.some(
    (p) => path === p || path.startsWith(`${p}/`)
  );
  if (isSharedTrustPath && !mounted) return null;

  const segments = path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  if (segments.length === 0) return null;

  const origin = baseUrl.replace(/\/+$/, '');
  const section = SECTION_CRUMBS[segments[0]];

  const trail: { name: string; item: string }[] = [
    { name: 'Home', item: `${origin}/` },
  ];

  // The section index earns its own crumb only when the page sits below it.
  if (parents) {
    for (const crumb of parents) {
      if (crumb.href.startsWith('/')) trail.push({ name: crumb.label, item: `${origin}${crumb.href}` });
    }
  } else if (parent && parent.href.startsWith('/')) {
    trail.push({ name: parent.label, item: `${origin}${parent.href}` });
  } else if (segments.length > 1 && section && section.href) {
    trail.push({ name: section.label, item: `${origin}${section.href}` });
  }

  // Segments between the section and the current page are intentionally
  // skipped: nothing guarantees they resolve to a real page. CRR is at most
  // two levels deep today, so this is a guard, not a live case.

  const derivedLabel =
    segments.length === 1 && section
      ? section.label
      : labelFromSlug(segments[segments.length - 1]);

  trail.push({
    name:
      currentLabel && currentLabel.trim() ? currentLabel.trim() : derivedLabel,
    item: `${origin}${path.replace(/\/+$/, '')}`,
  });

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  );
}
