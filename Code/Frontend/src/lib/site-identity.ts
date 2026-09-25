// =============================================================================
// site-identity.ts — who runs ratereliefca.com, in one place
// =============================================================================
// The Organization JSON-LD (app/layout.tsx), the About and Contact pages and
// the footer read from this record. Each field renders only when it is filled
// in, so an empty field publishes nothing.
//
// Fill a field only with what Chad has confirmed for publication. As of
// 2026-09-24 the legal entity, street address and phone are not provided
// (plan item 2.1, Decision #38), and the code publishes no phone number, so
// those stay empty. The one contact detail the site already publishes is the
// email on /contact.
// =============================================================================

export interface SiteIdentity {
  /** Registered legal name of the business, e.g. "Example LLC". */
  legalName: string;
  streetAddress: string;
  city: string;
  /** Two-letter state code; only rendered with a street address. */
  region: string;
  postalCode: string;
  /** Public phone in E.164 or display form. */
  telephone: string;
  /** Public contact email, already shown on /contact. */
  email: string;
  /** Official profiles of the business (LinkedIn page, etc.). */
  sameAs: string[];
}

export const CRR_IDENTITY: SiteIdentity = {
  legalName: '',
  streetAddress: '',
  city: '',
  region: 'CA',
  postalCode: '',
  telephone: '',
  email: 'info@ratereliefca.com',
  sameAs: [],
};

/** True when there is a complete postal address to show. */
export function hasPostalAddress(id: SiteIdentity = CRR_IDENTITY): boolean {
  return Boolean(id.streetAddress && id.city && id.postalCode);
}

/**
 * The optional Organization fields for schema.org, each present only when
 * filled in. Spread into the Organization node.
 */
export function organizationIdentityFields(id: SiteIdentity = CRR_IDENTITY): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  if (id.legalName) out.legalName = id.legalName;
  if (hasPostalAddress(id)) {
    out.address = {
      '@type': 'PostalAddress',
      streetAddress: id.streetAddress,
      addressLocality: id.city,
      addressRegion: id.region,
      postalCode: id.postalCode,
      addressCountry: 'US',
    };
  }
  if (id.telephone || id.email) {
    out.contactPoint = {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      ...(id.telephone ? { telephone: id.telephone } : {}),
      ...(id.email ? { email: id.email } : {}),
    };
  }
  if (id.sameAs.length > 0) out.sameAs = id.sameAs;
  return out;
}
