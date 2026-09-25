import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, getAllCitySlugs } from "@/data/cities-data";
import { growthCities } from "@/data/growth-cities";
import { CityComparison } from "@/components/growth/CityComparison";
import { cityPageMetadata } from "@/lib/city-pages";

// =============================================================================
// /solar-companies/<city>
//
// 2026-09-24 (Block 3.3): one template for every city. Until then the 19
// cities that only had a cities-data.ts entry rendered an older page listing
// the same nine national companies everywhere, with status notes that carried
// no source. Every page now opens with the installers the CPUC's
// interconnection records name in that city (src/data/dgstats/companies.ts),
// rendered by components/growth/CityComparison.tsx.
// =============================================================================

// STATIC PARAMS — Pre-renders all city pages at build time
export function generateStaticParams() {
  return [...new Set([...getAllCitySlugs(), ...Object.keys(growthCities)])].map(
    (slug) => ({ city: slug }),
  );
}

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  // One source for <title>, description, canonical, Open Graph and Twitter:
  // src/lib/city-pages.ts.
  return cityPageMetadata("companies", slug) ?? {};
}

export default async function SolarCompaniesCityPage({ params }: PageProps) {
  const { city: slug } = await params;
  if (!growthCities[slug] && !getCityBySlug(slug)) notFound();
  return <CityComparison slug={slug} />;
}
