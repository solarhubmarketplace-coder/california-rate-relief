import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CITIES, type CityData } from '@/data/cities-data';

/**
 * Nearby-cities + companion-page internal linking block.
 *
 * Why this exists: as of 2026-09-05 all 77 /solar-companies/<city> pages had ZERO
 * inbound internal links anywhere on the site (sitemap-only discovery), while
 * Search Console showed that layer earning 90,600 impressions in 90 days — 41% of
 * the whole site — stuck at average position 37.4. /solar-savings/<city> pages
 * averaged just 2.0 inbound links. This component gives every city page links to
 * its companion route and to same-county / same-utility siblings.
 */

export type CityLinkVariant = 'savings' | 'companies';

function pickNearby(city: CityData, limit = 6): CityData[] {
  const others = CITIES.filter((c) => c.slug !== city.slug);
  const sameCounty = others.filter((c) => c.county === city.county);
  const sameUtility = others.filter(
    (c) => c.county !== city.county && c.utilityCode === city.utilityCode,
  );
  return [...sameCounty, ...sameUtility].slice(0, limit);
}

export function NearbyCities({
  city,
  variant,
}: {
  city: CityData;
  variant: CityLinkVariant;
}) {
  const nearby = pickNearby(city);
  const companionHref =
    variant === 'savings'
      ? `/solar-companies/${city.slug}`
      : `/solar-savings/${city.slug}`;
  const companionLabel =
    variant === 'savings'
      ? `Compare solar companies in ${city.name}`
      : `See solar costs and savings in ${city.name}`;
  const companionBlurb =
    variant === 'savings'
      ? `Installer-by-installer comparison for ${city.name}, including who actually serves the area and where each one fits.`
      : `What ${city.name} homeowners pay now, what solar costs here, and the local rules that change the maths.`;

  return (
    <div className="mt-10 pt-8 border-t border-border">
      {/* Companion route for the same city */}
      <Link
        href={companionHref}
        className="group block rounded-xl border border-primary/25 bg-primary/5 p-5 mb-8 transition-colors hover:border-primary/50"
      >
        <span className="flex items-center gap-2 font-semibold text-foreground">
          {companionLabel}
          <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
        </span>
        <span className="mt-1 block text-sm text-muted-foreground">
          {companionBlurb}
        </span>
      </Link>

      {nearby.length > 0 && (
        <>
          <h3 className="text-lg font-bold text-foreground mb-1">
            Solar near {city.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Nearby cities in {city.county} and other areas on the same utility.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {nearby.map((c) => (
              <Link
                key={c.slug}
                href={
                  variant === 'savings'
                    ? `/solar-savings/${c.slug}`
                    : `/solar-companies/${c.slug}`
                }
                className="text-primary hover:underline font-medium text-sm"
              >
                {variant === 'savings'
                  ? `Solar savings in ${c.name}`
                  : `Solar companies in ${c.name}`}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NearbyCities;
