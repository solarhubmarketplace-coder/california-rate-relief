import { CRR_IDENTITY, hasPostalAddress, type SiteIdentity } from '@/lib/site-identity';

// =============================================================================
// SiteIdentityBlock — the business behind the site: legal name, postal address
// and phone, each shown only when src/lib/site-identity.ts has it filled in.
// With nothing filled in (the state on 2026-09-24) it renders nothing, so no
// placeholder or guessed detail ever reaches a page. Used on About, Contact
// and in the footer.
// =============================================================================

export function SiteIdentityBlock({
  className = '',
  linkClassName = '',
  identity = CRR_IDENTITY,
}: {
  className?: string;
  linkClassName?: string;
  identity?: SiteIdentity;
}) {
  const address = hasPostalAddress(identity);
  if (!identity.legalName && !address && !identity.telephone) return null;
  return (
    <address className={`not-italic ${className}`}>
      {identity.legalName && (
        <span className="block">California Rate Relief is operated by {identity.legalName}.</span>
      )}
      {address && (
        <span className="block">
          {identity.streetAddress}, {identity.city}, {identity.region} {identity.postalCode}
        </span>
      )}
      {identity.telephone && (
        <span className="block">
          Phone:{' '}
          <a href={`tel:${identity.telephone.replace(/[^+\d]/g, '')}`} className={linkClassName}>
            {identity.telephone}
          </a>
        </span>
      )}
    </address>
  );
}
