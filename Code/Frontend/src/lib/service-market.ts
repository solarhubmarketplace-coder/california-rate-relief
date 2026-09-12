import { derivedLocationFields } from './ca-utility-by-zip.ts';

export const serviceMarkets = [
  ['CA', 'California'], ['NJ', 'New Jersey'], ['DE', 'Delaware'],
  ['MD', 'Maryland'], ['VA', 'Virginia'], ['DC', 'District of Columbia'],
] as const;
export type ServiceMarket = (typeof serviceMarkets)[number][0];
export function isServiceMarket(value: string): value is ServiceMarket {
  return serviceMarkets.some(([code]) => code === value);
}
export function isFiveDigitZip(value: string): boolean { return /^\d{5}$/.test(value.trim()); }
/** Does not infer a utility, county, or coverage result outside California. */
export function serviceLocationFields(market: ServiceMarket, zip: string, city: string, selectedUtility?: string | null) {
  if (market === 'CA') return { ...derivedLocationFields(zip, city, selectedUtility), service_market: market,
    territory_resolution: isFiveDigitZip(zip) ? 'visitor_selected_zip_validated' : 'visitor_selected_zip_unverified' };
  return { service_zip: zip.trim(), city: city.trim() || null, derived_utility: null, derived_cca: null,
    derived_county: null, derived_from: 'visitor_selected_market' as const, derived_utility_matches_selection: null,
    service_market: market, territory_resolution: isFiveDigitZip(zip) ? 'visitor_selected_zip_validated' : 'visitor_selected_zip_unverified' };
}
