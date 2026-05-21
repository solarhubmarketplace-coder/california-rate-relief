// =============================================================================
// GrhPageSchemas — supplementary JSON-LD for greenreviewshub.com pages
// =============================================================================
// Adds the schemas the audit identified as missing across all 123 GRH pages:
//   - BreadcrumbList (Home > Reviews > [Page]) — unlocks breadcrumb rich result
//   - Person (Chad Simpson editor) — replaces Organization-author signal,
//     improves E-E-A-T per Google's helpful-content systems
//   - Optional ItemList (for best-of hub pages) — unlocks "Best things" carousel
//
// This component is additive — it does NOT touch the existing Article/Review/
// FAQ/Product JSON-LD that lives inline in each page. Drop it next to those
// existing scripts and Google ingests the union of all signals.
// =============================================================================

import { headers } from 'next/headers';

// Resolve origin from the request host. greenreviewshub.com DNS is not yet
// wired, so GRH pages are currently served from ratereliefca.com/reviews/.
// Schema URLs must match the host the page is actually served from — a
// hardcoded greenreviewshub.com origin makes canonical and schema disagree on
// every page until DNS flips. Post-DNS this automatically returns the GRH domain.
function detectGrhOrigin(host: string): string {
  return host.toLowerCase().includes('greenreviewshub')
    ? 'https://greenreviewshub.com'
    : 'https://ratereliefca.com';
}

function humanize(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.length > 3 ? w.charAt(0).toUpperCase() + w.slice(1) : w.toUpperCase()))
    .join(' ');
}

export interface GrhPageSchemasProps {
  /** URL slug for this page (e.g., "ecoflow-delta-pro-3-review") */
  slug: string;
  /** Display name for the breadcrumb leaf — defaults to humanized slug */
  breadcrumbName?: string;
  /** If present, adds an ItemList schema (use on best-of hub pages) */
  itemList?: Array<{
    name: string;
    url?: string;
    image?: string;
  }>;
  /** Skip the Breadcrumb (rare — when page has its own custom breadcrumb schema) */
  skipBreadcrumb?: boolean;
  /** Page-type schema to emit for trust pages (about, contact, privacy, terms) */
  pageType?: 'AboutPage' | 'ContactPage' | 'WebPage';
  /** Page title — used by pageType schema */
  pageTitle?: string;
  /** Page description — used by pageType schema */
  pageDescription?: string;
}

export async function GrhPageSchemas({
  slug,
  breadcrumbName,
  itemList,
  skipBreadcrumb = false,
  pageType,
  pageTitle,
  pageDescription,
}: GrhPageSchemasProps) {
  const hdrs = await headers();
  const GRH_ORIGIN = detectGrhOrigin(hdrs.get('host') || '');
  const pageUrl = `${GRH_ORIGIN}/reviews/${slug}`;
  const leaf = breadcrumbName || humanize(slug);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: GRH_ORIGIN,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Reviews',
        item: `${GRH_ORIGIN}/reviews`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: leaf,
        item: pageUrl,
      },
    ],
  };

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${GRH_ORIGIN}/author/chad-simpson#person`,
    name: 'Chad Simpson',
    url: `${GRH_ORIGIN}/author/chad-simpson`,
    jobTitle: 'Editor',
    worksFor: {
      '@type': 'Organization',
      name: 'Green Reviews Hub',
      url: GRH_ORIGIN,
    },
    description:
      'Research-driven editor covering green-energy gear: portable power stations, e-bikes, mini splits, smart thermostats, generators, and adjacent home electrification products. Reviews are built from manufacturer specifications, independent lab data, aggregated owner reports, and warranty terms.',
    knowsAbout: [
      'Portable power stations',
      'Solar generators',
      'Electric bikes',
      'Mini split AC systems',
      'Smart thermostats',
      'Whole-house generators',
      'Electric lawn equipment',
    ],
    sameAs: [
      // [LINKEDIN-URL-TODO] Replace with real LinkedIn URL once available (Batch 0 #4)
      `${GRH_ORIGIN}/author/chad-simpson`,
    ],
  };

  const itemListSchema =
    itemList && itemList.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListOrder: 'https://schema.org/ItemListOrderDescending',
          numberOfItems: itemList.length,
          itemListElement: itemList.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            ...(item.url ? { url: item.url } : {}),
            name: item.name,
            ...(item.image ? { image: item.image } : {}),
          })),
        }
      : null;

  const pageTypeSchema = pageType
    ? {
        '@context': 'https://schema.org',
        '@type': pageType,
        '@id': pageUrl,
        url: pageUrl,
        name: pageTitle || leaf,
        description: pageDescription || undefined,
        isPartOf: { '@id': `${GRH_ORIGIN}#website` },
        publisher: { '@id': `${GRH_ORIGIN}#organization` },
      }
    : null;

  return (
    <>
      {!skipBreadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      {itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}
      {pageTypeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageTypeSchema) }}
        />
      )}
    </>
  );
}
