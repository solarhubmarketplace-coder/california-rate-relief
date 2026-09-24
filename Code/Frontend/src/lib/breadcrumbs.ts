// =============================================================================
// breadcrumbs — the trail a page shell derives when the page gives it none
// (topic map Block 5 §5.6, 2026-09-23).
//
// Shape: Home > <hub or section> > <page>. The shells that use this
// (DecisionPage, ArticleRoute) render the visible trail AND pass the same list
// to PublicLayout's BreadcrumbList, so the two cannot disagree.
//
//   - A page under a URL section keeps the section as its crumb: /battery,
//     /commercial-solar, /panel-reviews, /solar-cost, /solar-installers,
//     /solar-problems.
//   - A /blog post takes its topic hub's page instead of "Blog"
//     (data/topic-hubs.ts, hubForPath). A post in no hub keeps "Blog".
//   - Any other page that a hub lists as a spoke takes that hub's page.
//   - A hub page (including one under /blog), an out-of-state page and
//     anything else gets no middle crumb.
//
// Every crumb here is a section index with a page.tsx or a hub page from
// topic-hubs.ts, so none points at a 404 or a redirect.
// =============================================================================

import { hubForPath, topicHub } from '@/data/topic-hubs';
import { CRUMB_LABELS, SECTION_CRUMBS, pathSegments, sectionCrumb, type Crumb } from '@/lib/breadcrumb-sections';

export type { Crumb } from '@/lib/breadcrumb-sections';

/** The page of the topic hub `path` belongs to, as a crumb; null on the hub page itself. */
export function hubCrumb(path: string): Crumb | null {
  const id = hubForPath(path);
  const hub = id ? topicHub(id) : undefined;
  if (!hub || !hub.hubPage || hub.hubPage === path) return null;
  return { label: CRUMB_LABELS[hub.hubPage] ?? hub.label, href: hub.hubPage };
}

/** The crumbs between Home and `path` when the page passes none of its own. */
export function defaultCrumbs(path: string): Crumb[] {
  const segments = pathSegments(path);
  if (segments.length === 0) return [];
  const clean = `/${segments.join('/')}`;
  if (segments[0] !== 'blog') {
    const section = sectionCrumb(clean);
    if (section) return [section];
    // A section with no index page (/solar-savings, /solar-companies): no
    // middle crumb from the URL, and no hub guess either. Those templates set
    // their own parent.
    if (segments.length > 1 && SECTION_CRUMBS[segments[0]]) return [];
  }
  // A hub page is a top of its own trail, even when it sits under /blog
  // (e.g. /blog/nem-2-vs-nem-3-california): Home > page, no "Blog".
  if (isHubPage(clean)) return [];
  const hub = hubCrumb(clean);
  if (hub) return [hub];
  const blog = sectionCrumb(clean);
  return blog ? [blog] : [];
}

function isHubPage(path: string): boolean {
  const id = hubForPath(path);
  return Boolean(id && topicHub(id)?.hubPage === path);
}
