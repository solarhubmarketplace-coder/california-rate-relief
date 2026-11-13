// =============================================================================
// Project address helpers for the residential lead contract (12 Nov 2026).
//
// Pure functions shared by ProjectAddressFields and the three residential
// forms: turning a Google Places result into the street / city / ZIP the
// contract needs, and the California ZIP check against the same 2,593 ZIPs the
// API uses. No imports from '@/...' so the node test runner can load this file.
// =============================================================================

/** Minimal shape of the Places components we read; @types/google.maps is not installed. */
export interface AddressComponent {
  long_name?: string;
  short_name?: string;
  types?: string[];
}

export interface PlaceAddress {
  street: string;
  city: string;
  zip: string;
  state: 'CA';
  /** Google returned a subpremise (unit) for this place. */
  unitFlag: boolean;
}

export type PlaceAddressError = 'street_format' | 'state_not_ca' | 'zip_not_ca';

function component(components: AddressComponent[] | undefined, type: string): AddressComponent | undefined {
  if (!Array.isArray(components)) return undefined;
  return components.find((part) => Array.isArray(part?.types) && part.types.includes(type));
}

/** City from a Places result: locality first, then the postal-town fallbacks. */
export function cityFromComponents(components: AddressComponent[] | undefined): string {
  for (const type of ['locality', 'postal_town', 'sublocality_level_1', 'administrative_area_level_3']) {
    const match = component(components, type);
    if (match?.long_name) return match.long_name;
  }
  return '';
}

/**
 * Street, city and ZIP from a picked suggestion. The street line is the first
 * comma segment of the suggestion as Google shows it, so "Apt 4", "Unit 4" or
 * "#4" stay in it and the reject check sees them. When that segment does not
 * start with the house number, the line is rebuilt from the components.
 */
export function placeToAddress(
  description: string,
  components: AddressComponent[] | undefined,
): PlaceAddress | { error: PlaceAddressError } {
  const number = component(components, 'street_number')?.long_name?.trim() ?? '';
  const route = component(components, 'route');
  const routeName = (route?.short_name || route?.long_name || '').trim();
  if (!number || !routeName) return { error: 'street_format' };
  if (component(components, 'administrative_area_level_1')?.short_name !== 'CA') return { error: 'state_not_ca' };
  const zip = component(components, 'postal_code')?.long_name?.trim() ?? '';
  if (!/^\d{5}$/.test(zip)) return { error: 'zip_not_ca' };
  const subpremise = component(components, 'subpremise')?.long_name?.trim() ?? '';
  const firstSegment = String(description ?? '').split(',')[0].trim();
  const street = firstSegment.toLowerCase().startsWith(number.toLowerCase())
    ? firstSegment
    : `${number} ${routeName}${subpremise ? ` #${subpremise}` : ''}`;
  return { street, city: cityFromComponents(components), zip, state: 'CA', unitFlag: Boolean(subpremise) };
}

export interface CaZipStatus {
  /** true/false from the table; null when the table could not be loaded (never blocks). */
  known: boolean | null;
  city: string | null;
}

/**
 * Is this a California ZIP? Same lazily loaded table as ca-zip-city.ts (its own
 * chunk, about 15 KB gzipped), but a failed load is reported as unknown (null)
 * rather than "not in California", so a network hiccup never blocks a lead.
 */
export async function caZipStatus(zip: string): Promise<CaZipStatus> {
  const trimmed = String(zip ?? '').trim();
  if (!/^\d{5}$/.test(trimmed)) return { known: false, city: null };
  try {
    const mod = await import('../data/ca-zip-city.ts');
    const city = mod.CA_ZIP_CITY[trimmed];
    return { known: Boolean(city), city: city ?? null };
  } catch {
    return { known: null, city: null };
  }
}

// ---------------------------------------------------------------------------
// Form state shared by ProjectAddressFields and the residential forms
// ---------------------------------------------------------------------------
export interface ProjectAddressState {
  street: string;
  city: string;
  zip: string;
  /** 'places' only while a picked suggestion is unedited. */
  source: 'places' | 'manual';
  placeSelected: boolean;
  /** The picked place had a subpremise. */
  placesUnitFlag: boolean;
  unitAnswer: '' | 'yes' | 'no';
  zipKnown: boolean | null;
  /** A PlacesStatus from use-places-address.ts. */
  placesStatus: string;
}

export const EMPTY_PROJECT_ADDRESS: ProjectAddressState = {
  street: '', city: '', zip: '', source: 'manual', placeSelected: false, placesUnitFlag: false,
  unitAnswer: '', zipKnown: null, placesStatus: 'idle',
};

/** Statuses in which a suggestion must be picked when a key exists. */
export function placesSelectionRequired(status: string, hasKey: boolean): boolean {
  return hasKey && (status === 'idle' || status === 'loading' || status === 'active');
}

/** The address part of a ResidentialLeadInput. */
export function addressLeadInput(a: ProjectAddressState, hasKey: boolean) {
  return {
    street: a.street,
    city: a.city,
    zip: a.zip,
    state: 'CA',
    zipKnown: a.zipKnown,
    addressSource: a.source,
    placesActive: placesSelectionRequired(a.placesStatus, hasKey),
    placeSelected: a.placeSelected,
    placesUnitFlag: a.placesUnitFlag,
    unitAnswer: a.unitAnswer,
  };
}
