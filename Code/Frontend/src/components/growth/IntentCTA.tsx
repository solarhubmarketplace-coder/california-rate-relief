'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { intakeHrefForPath, isCommercialIntentPath } from '@/lib/intake-routing';
import { ctaCopyFor, ctaVariantForPath, type CtaVariant } from '@/lib/cta-intent';
import { trackEvent } from '@/components/GoogleAnalyticsClient';

// =============================================================================
// IntentCTA — the one CTA box for CRR content pages, asking the question the
// page's own visitors arrived with.
//
// Destination comes from the shared intake route policy: actual in-page forms,
// the home wizard on content-only pages, or commercial assessment. This box
// must never take the solar-inquiry ID away from the actual form.
//
// DRAFT COPY — see lib/cta-intent.ts and the copy review file.
// =============================================================================

export interface IntentCTAProps {
  /** Override the intent. Omitted, it is derived from the pathname. */
  variant?: CtaVariant;
  /** Override the heading. Existing per-page wording keeps working. */
  heading?: string;
  /** Override the supporting sentence. */
  body?: string;
  /** Override the button label. */
  action?: string;
  /** GA4 `cta` parameter, so placements stay distinguishable. */
  cta?: string;
  /** Optional box anchor. The inquiry anchor belongs to the actual form. */
  id?: string;
  className?: string;
}

export function useCtaVariant(explicit?: CtaVariant): {
  variant: CtaVariant;
  pathname: string;
  href: string;
} {
  const pathname = usePathname() || '';
  const variant = explicit
    ? explicit
    : isCommercialIntentPath(pathname)
      ? 'commercial'
      : ctaVariantForPath(pathname);
  return { variant, pathname, href: intakeHrefForPath(pathname) };
}

export function IntentCTA({
  variant,
  heading,
  body,
  action,
  cta = 'intent_cta',
  id,
  className = '',
}: IntentCTAProps) {
  const resolved = useCtaVariant(variant);
  const copy = ctaCopyFor(resolved.variant);
  return (
    <div
      id={id}
      className={`mt-12 rounded-lg border border-border border-t-4 border-t-primary bg-card p-6 md:p-8 ${className}`}
    >
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
        {heading ?? copy.heading}
      </h3>
      <p className="text-muted-foreground mb-5 max-w-2xl leading-relaxed">{body ?? copy.body}</p>
      <Link
        href={resolved.href}
        onClick={() =>
          // On link-only pages this box is the whole conversion step. cta_variant
          // is what makes "which ask was made" readable in GA4 — without it a
          // bill-review click and a generic click are the same row.
          trackEvent('cta_click', {
            cta,
            cta_variant: resolved.variant,
            destination: resolved.href,
            segment: resolved.variant === 'commercial' ? 'commercial' : 'residential',
            page_path: resolved.pathname || 'unknown',
          })
        }
        className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {action ?? copy.action}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
