import Link from 'next/link';
import { TRUST_LINKS } from './trust-links';

// =============================================================================
// TrustStrip — the slim line above the CRR header on every page.
//
// It says what the site is not and where its numbers come from, the way the
// big publishers put an advertiser disclosure at the top of the page. Only
// statements the site can stand behind go here: CRR is an information and
// referral site, not a utility, contractor or government agency, and its
// figures carry links to their sources. No dates are shown because there is no
// site-wide source-check date to show.
//
// Rendered by landing/Header.tsx, which only renders on ratereliefca.com (the
// shared trust pages branch to each host's own header).
// =============================================================================

export function TrustStrip() {
  return (
    <div className="border-b border-border bg-muted text-muted-foreground">
      <p className="container mx-auto px-4 py-1.5 text-center text-xs leading-snug">
        <span>
          Independent information and referral site. Not a utility, contractor or government
          agency.
        </span>{' '}
        <span className="hidden sm:inline">Figures link to their sources.</span>{' '}
        <Link
          href={TRUST_LINKS.howWeMakeMoney.href}
          className="whitespace-nowrap font-medium text-primary underline underline-offset-2 hover:no-underline"
        >
          How we make money
        </Link>
      </p>
    </div>
  );
}
