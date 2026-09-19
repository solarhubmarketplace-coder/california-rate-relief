import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CITIES, type CityData } from '@/data/cities-data';
import {
  companiesCityHref,
  hasCompaniesCityPage,
  hasSavingsCityPage,
  savingsCityHref,
} from '@/lib/canonical-redirects';

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
  // Phase 3 (2026-09-17): 25 /solar-savings city pages now 301 to their
  // /solar-companies twin. On a /solar-companies page for one of those cities
  // the companion link would point at a redirect straight back to this page, so
  // it is suppressed rather than retargeted. See src/lib/canonical-redirects.ts.
  const showCompanion =
    variant === 'savings' || hasSavingsCityPage(city.slug);
  // 2026-09-18: the companies city page for a city with a /solar-cost twin now
  // 301s there, so the companion link resolves through companiesCityHref() and
  // the label follows the page it actually opens.
  const companionRetired =
    variant === 'savings' && !hasCompaniesCityPage(city.slug);
  const companionHref =
    variant === 'savings'
      ? companiesCityHref(city.slug)
      : `/solar-savings/${city.slug}`;
  const companionLabel =
    variant === 'savings'
      ? companionRetired
        ? `What solar costs in ${city.name}`
        : `Compare solar companies in ${city.name}`
      : `See solar costs and savings in ${city.name}`;
  const companionBlurb =
    variant === 'savings'
      ? companionRetired
        ? `Installed cost, the local utility rate and what changes the payback period in ${city.name}.`
        : `Installer-by-installer comparison for ${city.name}, including who actually serves the area and where each one fits.`
      : `What ${city.name} homeowners pay now, what solar costs here, and the local rules that change the maths.`;

  return (
    <div className="mt-10 pt-8 border-t border-border">
      {/* Companion route for the same city */}
      {showCompanion && (
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
      )}

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
                    ? savingsCityHref(c.slug)
                    : companiesCityHref(c.slug)
                }
                className="text-primary hover:underline font-medium text-sm"
              >
                {variant === 'savings' && hasSavingsCityPage(c.slug)
                  ? `Solar savings in ${c.name}`
                  : hasCompaniesCityPage(c.slug)
                    ? `Solar companies in ${c.name}`
                    : `Solar costs in ${c.name}`}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NearbyCities;
