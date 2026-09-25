// =============================================================================
// city-bill-content.ts: which city page carries a city's bill copy
// (2026-09-24, Block 3.3 / 3.4).
//
// growth-cities.ts entries hold sourced paragraphs about how the utility and
// the community choice aggregator bill a solar home (`bill`, and sections such
// as "How SCE pays a new Murrieta solar home"). Until 2026-09-24 they rendered
// on /solar-companies/<city>. That question belongs to /solar-savings/<city>
// ("who supplies your power and what it costs", Decision 42), so where the
// city has a live savings page without its own hand-written bills content,
// the copy moves there and the companies page links to it instead. A city
// with no live savings page keeps the copy on its companies page.
// =============================================================================

import { growthCities, type GrowthCitySection } from '../data/growth-cities.ts';
import { getCityBySlug } from '../data/cities-data.ts';
import { hasSavingsCityPage } from './canonical-redirects.ts';

const BILL_HEADING = /\b(bill|bills|pays|settles|credits|solar billing plan|solar account|solar rules|return to sce|arrival|name matters)\b/i;
const NOT_BILL_HEADING = /\b(permit|solarapp|mounting|inspection|historic|roof|sizing|placement|manufactured|mobile|glare)\b/i;

/** True for a growth-cities section about how a solar home is billed. */
export function isBillSection(section: GrowthCitySection): boolean {
  return BILL_HEADING.test(section.heading) && !NOT_BILL_HEADING.test(section.heading);
}

/** The savings page carries this city's bill copy (and the companies page does not). */
export function savingsCarriesBill(slug: string): boolean {
  const legacy = getCityBySlug(slug);
  return Boolean(growthCities[slug] && legacy && !legacy.bills && hasSavingsCityPage(slug));
}

export interface CityBillCopy {
  bill: string;
  sections: GrowthCitySection[];
  sources: { label: string; url: string; fetchedAt: string }[];
}

/**
 * A growth-cities source goes with the bill copy when it is a utility, CCA,
 * CPUC or CEC page (by host), or a city page about the city's own electric
 * utility (by label). Permit, tax, license and housing sources stay behind.
 */
const BILL_SOURCE_HOST = /(^|\.)(pge\.com|sce\.com|sdge\.com|cpuc\.ca\.gov|energy\.ca\.gov|arcgis\.com|avaenergy\.org|mcecleanenergy\.org|3cenergy\.org|sonomacleanpower\.org|westlightenergy\.org|peninsulacleanenergy\.com|cleanpoweralliance\.org|desertcommunityenergy\.org|thecleanenergyalliance\.org|sdcommunitypower\.org|ocpower\.org|lancasterenergy\.com|svcleanenergy\.org|pioneercommunityenergy\.org|mid\.org|tid\.org|mercedid\.org|smud\.org)$/i;
const BILL_SOURCE_LABEL = /(Water & Power|Electric Utility|Moreno Valley Utility|Ava Community Energy|Irrigation District)/;
const NOT_BILL_SOURCE = /\b(permit|permits|permitting|building|solarapp|symbium|etrakit|accela|sb 379|inspection|plan check|bulletin|submittal|re-roofing|HCD|IRS|CSLB|general plan|historic)\b/i;

function isBillSource(source: { label: string; url: string }): boolean {
  if (NOT_BILL_SOURCE.test(source.label)) return false;
  const host = new URL(source.url).hostname.replace(/^www\./, '');
  return BILL_SOURCE_HOST.test(host) || BILL_SOURCE_LABEL.test(source.label);
}

/** The bill copy and its sources, for the savings page. */
export function cityBillCopy(slug: string): CityBillCopy | null {
  const city = growthCities[slug];
  if (!city || !savingsCarriesBill(slug)) return null;
  const checked = city.sourceCheckedDate || '2026-09-10';
  const providerHost = city.provider ? new URL(city.provider.url).hostname.replace(/^www\./, '') : null;
  return {
    bill: city.bill,
    sections: (city.sections ?? []).filter(isBillSection),
    sources: city.sources
      .filter(isBillSource)
      .filter((s) => new URL(s.url).hostname.replace(/^www\./, '') !== providerHost)
      .map((s) => ({ ...s, fetchedAt: checked })),
  };
}
