import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { CityData } from '@/data/cities-data';
import { NearbyCityPages } from '@/components/growth/NearbyCostCities';
import { companionCityLinks, type CityPageType } from '@/lib/city-pages';

/**
 * Companion-page card + nearby-city links for the /solar-savings/<city> and
 * older /solar-companies/<city> templates.
 *
 * Why this exists: as of 2026-09-05 all 77 /solar-companies/<city> pages had ZERO
 * inbound internal links anywhere on the site (sitemap-only discovery), while
 * Search Console showed that layer earning 90,600 impressions in 90 days — 41% of
 * the whole site — stuck at average position 37.4. /solar-savings/<city> pages
 * averaged just 2.0 inbound links. This component gives every city page links to
 * its companion route and to its neighbours.
 *
 * 2026-09-22: the neighbours are no longer six cities-data.ts entries chosen by
 * county and then by utility (a Temecula page could list Bakersfield). They are
 * the nearest live city pages of any template, same county first, chosen by
 * nearbyCityLinks() in src/lib/city-pages.ts; scripts/assert-city-links.mjs
 * calls the same function. The companion card now opens the city's live
 * /solar-companies page, else its /solar-cost page, and never a redirect.
 */

export type CityLinkVariant = 'savings' | 'companies';

const BLURB: Record<CityPageType, (name: string) => string> = {
  companies: (name) =>
    `Solar companies for ${name}, and what each written proposal should include before you sign.`,
  cost: (name) =>
    `What sets the price of a solar system in ${name}: the utility rate, the city's permit rules, and the ownership and property-tax rules.`,
  savings: (name) =>
    `The ${name} savings guide: the utility checks, HOA rules and when solar doesn't make sense.`,
};

const CARD_LABEL: Record<CityPageType, (name: string) => string> = {
  companies: (name) => `Compare solar companies in ${name}`,
  cost: (name) => `What solar costs in ${name}`,
  savings: (name) => `See solar costs and savings in ${name}`,
};

export function NearbyCities({
  city,
  variant,
}: {
  city: CityData;
  variant: CityLinkVariant;
}) {
  const others = companionCityLinks(city.slug, variant);
  const card = others[0];
  const remaining = others.slice(1).map((other) => other.type);

  return (
    <div className="mt-10 pt-8 border-t border-border">
      {/* Companion route for the same city */}
      {card && (
        <Link
          href={card.href}
          className="group block rounded-xl border border-primary/25 bg-primary/5 p-5 mb-8 transition-colors hover:border-primary/50"
        >
          <span className="flex items-center gap-2 font-semibold text-foreground">
            {CARD_LABEL[card.type](city.name)}
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="mt-1 block text-sm text-muted-foreground">
            {BLURB[card.type](city.name)}
          </span>
        </Link>
      )}

      <NearbyCityPages slug={city.slug} type={variant} companionTypes={remaining} className="my-0" />
    </div>
  );
}

export default NearbyCities;
