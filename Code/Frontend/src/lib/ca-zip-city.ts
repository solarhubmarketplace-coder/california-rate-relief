/**
 * California ZIP -> USPS default city, for forms that ask for street + ZIP only.
 *
 * Data: GeoNames US postal codes (CC BY 4.0), the same 2,593 ZIPs as the
 * Supabase table public.ca_zip_places (migration 012), which the intake RPC uses
 * to fill leads.city and leads.state server-side. This client copy only lets a
 * form show the city back to the visitor and send it with the lead; the server
 * fills it either way.
 *
 * The table is loaded on demand (its own chunk, about 15 KB gzipped) the first
 * time a 5-digit ZIP is looked up, so pages without a form never download it.
 */
export interface ZipPlace {
  city: string;
  /** Two-letter state; 'CA' for every ZIP in the table. */
  state: string;
}

let table: Promise<Readonly<Record<string, string>>> | null = null;

function load(): Promise<Readonly<Record<string, string>>> {
  if (!table) {
    table = import('../data/ca-zip-city.ts')
      .then((mod) => mod.CA_ZIP_CITY)
      .catch((error) => {
        table = null; // a failed chunk load may succeed on the next keystroke
        throw error;
      });
  }
  return table;
}

/** City and state for a California ZIP, or null when the ZIP is unknown or the lookup fails. */
export async function lookupCaZipPlace(zip: string): Promise<ZipPlace | null> {
  const trimmed = (zip || '').trim();
  if (!/^\d{5}$/.test(trimmed)) return null;
  try {
    const city = (await load())[trimmed];
    return city ? { city, state: 'CA' } : null;
  } catch {
    return null;
  }
}

/** "123 Main St" + place + ZIP -> "123 Main St, Patterson, CA 95363"; "123 Main St, 95363" without a place. */
export function streetCityZipAddress(street: string, zip: string, place: ZipPlace | null): string {
  const s = street.trim();
  const z = zip.trim();
  return place ? `${s}, ${place.city}, ${place.state} ${z}` : `${s}, ${z}`;
}
