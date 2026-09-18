import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  CityCostPage,
  cityCostDescription,
  cityCostPath,
  cityCostTitle,
} from '@/components/growth/CityCostPage';
import {
  getCityCostRow,
  getPublishableCityCostSlugs,
} from '@/data/city-cost-data';

// =============================================================================
// /solar-cost/[city] — "solar panel cost <city>" without a price on the page.
//
// THE GATE, ENFORCED TWICE
//   1. generateStaticParams lists only rows that pass isPublishableCityCostRow,
//      so a row with any TODO in a rendered field is never pre-rendered.
//   2. dynamicParams = false means a slug outside that list is a 404 rather than
//      an on-demand render. Combined, an unsourced city cannot ship even if a
//      link to it exists, and the sitemap is built from the same list.
// =============================================================================

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishableCityCostSlugs().map((city) => ({ city }));
}

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const row = getCityCostRow(slug);
  if (!row) return { title: 'Page not found' };
  const title = cityCostTitle(row.city);
  const description = cityCostDescription(row.city);
  const canonicalPath = cityCostPath(row.slug);
  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description,
      type: 'article',
      modifiedTime: `${row.sourcesFetchedAt}T00:00:00Z`,
      url: `https://ratereliefca.com${canonicalPath}`,
    },
  };
}

export default async function SolarCostCityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const row = getCityCostRow(slug);
  if (!row) notFound();
  return <CityCostPage row={row} />;
}
