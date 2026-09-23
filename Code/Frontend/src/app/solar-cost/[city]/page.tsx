import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CityCostPage } from '@/components/growth/CityCostPage';
import {
  getCityCostRow,
  getPublishableCityCostSlugs,
} from '@/data/city-cost-data';
import { cityPageMetadata } from '@/lib/city-pages';

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
  // Title, description, canonical, Open Graph and Twitter come from one place
  // (src/lib/city-pages.ts) so the social titles cannot drift from <title>.
  return cityPageMetadata('cost', slug) ?? { title: 'Page not found' };
}

export default async function SolarCostCityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const row = getCityCostRow(slug);
  if (!row) notFound();
  return <CityCostPage row={row} />;
}
