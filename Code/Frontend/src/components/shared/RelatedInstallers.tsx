import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';

// =============================================================================
// RelatedInstallers — internal-linking callout for CRR blog posts
// =============================================================================
// Each CRR blog post should funnel readers toward installer reviews.
// Instead of per-paragraph keyword linking (brittle), we render a tidy
// callout with the hub link + 3 contextually-relevant installer reviews.
//
// Goal: kill the "orphan installer review" pattern from the audit.
//
// 2026-09-22 — status-claim audit: every bankruptcy/defunct/status claim
// below was checked this session against a primary source (a court docket,
// an SEC filing, a state regulator record, or the company's own investor
// page) and now carries that source and date via `statusSource`. A claim
// that did not check out was removed rather than restated with a citation
// bolted on after the fact — see the per-entry notes.
// =============================================================================

interface StatusSource {
  /** Publisher name, plain text — shown as "Source: {publisher} · {date}". */
  publisher: string;
  /** The event date (or "as of" date for an ongoing-status claim), plain text. */
  date: string;
  url: string;
}

interface InstallerCard {
  slug: string;
  name: string;
  tagline: string;
  /** Present only when the tagline makes a bankruptcy/defunct/status claim
   *  that was verified this session. Renders as a small citation line under
   *  the tagline. Absent for ordinary product/positioning taglines, which
   *  don't need one. */
  statusSource?: StatusSource;
}

// Curated set per topic. Most blog posts use 'general' — NEM-related posts
// might surface a different mix. Keep this honest: we only link to reviews
// that are genuinely relevant to the blog topic.
const INSTALLER_PICKS: Record<string, InstallerCard[]> = {
  general: [
    {
      slug: 'sunrun-review',
      name: 'Sunrun',
      tagline: "America's largest residential solar & storage provider; PPA/lease focus",
      statusSource: {
        publisher: 'Sunrun investor relations',
        date: 'as of Sep 2026',
        url: 'https://investors.sunrun.com/',
      },
    },
    {
      slug: 'sunpower-review',
      name: 'SunPower',
      tagline: 'Premium-brand panels; 2024 Chapter 11 restructuring',
      // Not "(now SunStrong)" — checked this session and that's a different
      // company. SunStrong Management is a separate entity that services
      // legacy SunPower (and, since a 2025 acquisition, legacy Sunnova)
      // lease/PPA fleets; it did not acquire the SunPower brand or new-build
      // business. The entity that did is Complete Solaria, which rebranded
      // to SunPower in April 2025 after buying the operating assets out of
      // the August 2024 bankruptcy (see sunpower-review for the full case).
      statusSource: {
        publisher: 'SEC EDGAR — SunPower Corp. Form 8-K',
        date: 'Aug 5, 2024',
        url: 'https://www.sec.gov/Archives/edgar/data/867773/000086777324000086/spwr-20240802.htm',
      },
    },
    { slug: 'tesla-solar-review', name: 'Tesla Solar', tagline: 'Solar Roof + Powerwall integration; cash-buy focus' },
  ],
  // NEM 3 / NBT-relevant posts — favor installers with battery + post-NEM 3 economics
  nem3: [
    { slug: 'tesla-solar-review', name: 'Tesla Solar', tagline: 'Powerwall integration is the strongest NEM 3 hedge' },
    { slug: 'baker-electric-solar-review', name: 'Baker Electric Solar', tagline: 'CA-only, NEM 3 quoting transparent' },
    { slug: 'semper-solaris-review', name: 'Semper Solaris', tagline: 'Veteran-owned CA installer; battery-forward post-NEM 3' },
  ],
  // Low-income / affordability posts
  affordability: [
    { slug: 'powur-solar-review', name: 'Powur', tagline: 'Network-model — wide CA coverage, no-money-down options' },
    { slug: 'sunrun-review', name: 'Sunrun', tagline: '$0-down PPA / lease with no upfront cost' },
    { slug: 'la-solar-group-review', name: 'LA Solar Group', tagline: 'Strong rebate / DAC-SASH navigation in LA basin' },
  ],
  // Premium / panel-focused posts
  premium: [
    {
      slug: 'sunpower-review',
      name: 'SunPower',
      // "Maxeon panels" (the pre-2024 exclusive supply relationship) is no
      // longer accurate — checked this session against the same 8-K plus
      // sunpower-review's own sourced text: that relationship was unwound in
      // the bankruptcy, and today's SunPower sources Tier-1 panels from
      // multiple suppliers.
      tagline: 'Tier-1 panels since 2024 restructuring; premium-tier pricing',
      statusSource: {
        publisher: 'SEC EDGAR — SunPower Corp. Form 8-K',
        date: 'Aug 5, 2024',
        url: 'https://www.sec.gov/Archives/edgar/data/867773/000086777324000086/spwr-20240802.htm',
      },
    },
    { slug: 'solar-optimum-review', name: 'Solar Optimum', tagline: 'Boutique CA installer; Panasonic / REC panels' },
    { slug: 'baker-electric-solar-review', name: 'Baker Electric Solar', tagline: 'Commercial-grade installs; transparent pricing' },
  ],
  // Bankruptcy / failed-installer focus
  defunct: [
    {
      slug: 'freedom-forever-review',
      name: 'Freedom Forever',
      tagline: 'Chapter 11 filed Apr 15, 2026 — what existing customers should do',
      statusSource: {
        publisher: 'U.S. Bankruptcy Court, D. Del. (Case No. 26-10522)',
        date: 'Apr 15, 2026',
        url: 'https://www.courtlistener.com/docket/73192534/freedom-forever-llc/',
      },
    },
    {
      slug: 'sullivan-solar-power-review',
      name: 'Sullivan Solar Power',
      // The widely-repeated "defunct since 2021" date is trade-press/local
      // news only (no primary source found this session). What a primary
      // source does confirm is the CSLB license revocation below, which is
      // itself sufficient reason not to hire this company.
      tagline: 'CSLB revoked its contractor license — do not hire',
      statusSource: {
        publisher: 'California CSLB — revoked-license report',
        date: 'Jun 20, 2022',
        url: 'https://www.cslb.ca.gov/Resources/Reports/Revoked/Revoked202206.pdf',
      },
    },
    {
      slug: 'sunpower-review',
      name: 'SunPower',
      tagline: 'Chapter 11 filed Aug 5, 2024; now operates under Complete Solaria',
      statusSource: {
        publisher: 'SEC EDGAR — SunPower Corp. Form 8-K',
        date: 'Aug 5, 2024',
        url: 'https://www.sec.gov/Archives/edgar/data/867773/000086777324000086/spwr-20240802.htm',
      },
    },
  ],
};

interface Props {
  /** Pick set: 'general' | 'nem3' | 'affordability' | 'premium' | 'defunct' */
  picks?: keyof typeof INSTALLER_PICKS;
  /** Optional override heading. */
  heading?: string;
}

export function RelatedInstallers({ picks = 'general', heading }: Props) {
  const installers = INSTALLER_PICKS[picks];
  const hasStatusClaims = installers.some((inst) => inst.statusSource);

  return (
    <section
      className='my-10 rounded-xl border border-border bg-card p-6'
      aria-label='Related California solar installer reviews'
    >
      <div className='flex items-start gap-3 mb-4'>
        <div className='flex-shrink-0 mt-0.5'>
          <Building2 className='h-5 w-5 text-primary' aria-hidden='true' />
        </div>
        <div>
          <h2 className='text-xl md:text-2xl font-bold text-foreground'>
            {heading ?? 'Compare California solar installers'}
          </h2>
          <p className='text-sm text-muted-foreground mt-1'>
            We&apos;ve reviewed every major California installer with honest ratings, complaint patterns, and what each is best (and worst) at.
          </p>
        </div>
      </div>

      <div className='grid sm:grid-cols-3 gap-3'>
        {installers.map((inst) => (
          <div
            key={inst.slug}
            className='rounded-lg border border-border bg-background hover:bg-muted/40 transition-colors p-4'
          >
            <Link href={`/solar-installers/${inst.slug}`} className='block'>
              <div className='font-bold text-foreground mb-1'>{inst.name}</div>
              <div className='text-sm text-muted-foreground leading-snug'>{inst.tagline}</div>
            </Link>
            {inst.statusSource ? (
              <p className='text-xs text-muted-foreground/80 mt-2 leading-snug'>
                Source:{' '}
                <a
                  href={inst.statusSource.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline hover:text-foreground'
                >
                  {inst.statusSource.publisher}
                </a>{' '}
                · {inst.statusSource.date}
              </p>
            ) : null}
            <Link
              href={`/solar-installers/${inst.slug}`}
              className='text-xs text-primary font-semibold mt-3 inline-flex items-center gap-1'
            >
              Read review
              <ArrowRight className='h-3 w-3' aria-hidden='true' />
            </Link>
          </div>
        ))}
      </div>

      {hasStatusClaims ? (
        <p className='mt-4 pt-4 border-t border-border text-xs text-muted-foreground'>
          Company status notes above, including any bankruptcy, license
          revocation or restructuring, carry their own source and date and
          were last checked on 22 September 2026. Each company&apos;s review
          page sets out the fuller case behind them. Status can change after
          that date; confirm anything you intend to rely on.
        </p>
      ) : null}

      <div className='mt-4 text-center'>
        <Link
          href='/best-solar-companies-california'
          className='inline-flex items-center gap-1 text-sm font-semibold text-primary underline'
        >
          See all California solar installers we&apos;ve reviewed
          <ArrowRight className='h-3 w-3' aria-hidden='true' />
        </Link>
      </div>
    </section>
  );
}
