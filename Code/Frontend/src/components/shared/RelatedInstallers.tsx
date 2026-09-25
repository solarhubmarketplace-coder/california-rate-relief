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
// below was checked against a primary source (a court docket, an SEC filing,
// a state regulator record) and carries that source and date via
// `statusSource`.
//
// 2026-09-24 (Block 3.3, item 5) — re-checked. Freedom Forever's case was
// converted from Chapter 11 to Chapter 7 on Aug 7, 2026 (CourtListener's copy
// of the D. Del. docket, case 26-10522), so its line now says so. Taglines
// that rested on a company's own marketing ("America's largest", "Tier-1
// panels", "veteran-owned", "boutique", panel brands) were replaced with
// neutral lines or a figure from the CPUC's DG Stats records. The header no
// longer promises "ratings" (Decision 10: no published scoring method).
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
const DG_STATS_SOURCE: StatusSource = {
  publisher: 'CPUC DG Stats, Interconnected Project Sites (data through May 31, 2026)',
  date: 'checked Sep 24, 2026',
  url: 'https://www.californiadgstats.ca.gov/downloads/',
};

const SUNPOWER_8K: StatusSource = {
  publisher: 'SEC EDGAR — SunPower Corp. Form 8-K',
  date: 'Aug 5, 2024',
  url: 'https://www.sec.gov/Archives/edgar/data/867773/000086777324000086/spwr-20240802.htm',
};

// Curated set per topic. Most blog posts use 'general'. Each tagline either
// makes no factual claim or carries its source.
const INSTALLER_PICKS: Record<string, InstallerCard[]> = {
  general: [
    {
      slug: 'sunrun-review',
      name: 'Sunrun',
      // Sunrun 37,356 of 145,404 California residential systems approved to
      // connect in 2025, the largest count of any installer in the data set.
      tagline: 'Named on 37,356 California home solar systems connected in 2025, the most of any installer',
      statusSource: DG_STATS_SOURCE,
    },
    {
      slug: 'sunpower-review',
      name: 'SunPower',
      // The 8-K: Chapter 11 petitions filed Aug 5, 2024 (D. Del., Case No.
      // 24-11649), and an asset purchase agreement with Complete Solaria for
      // the Blue Raven Solar, New Homes and dealer-network businesses.
      tagline: 'Filed Chapter 11 on Aug 5, 2024; Complete Solaria agreed to buy parts of the business',
      statusSource: SUNPOWER_8K,
    },
    { slug: 'tesla-solar-review', name: 'Tesla Solar', tagline: 'Solar with Powerwall; ask for the net billing assumptions in writing' },
  ],
  // NEM 3 / NBT-relevant posts
  nem3: [
    { slug: 'tesla-solar-review', name: 'Tesla Solar', tagline: 'Solar with Powerwall; ask for net billing assumptions' },
    { slug: 'baker-electric-solar-review', name: 'Baker Electric Solar', tagline: 'California installer; ask for net billing assumptions in writing' },
    { slug: 'semper-solaris-review', name: 'Semper Solaris', tagline: 'California installer; get its battery and export assumptions in writing' },
  ],
  // Low-income / affordability posts
  affordability: [
    { slug: 'powur-solar-review', name: 'Powur', tagline: 'Check who installs and who services your system' },
    { slug: 'sunrun-review', name: 'Sunrun', tagline: 'Leases and PPAs; read the escalator and transfer terms' },
    { slug: 'la-solar-group-review', name: 'LA Solar Group', tagline: 'Los Angeles-area installer; compare its written terms' },
  ],
  // Premium / panel-focused posts
  premium: [
    {
      slug: 'sunpower-review',
      name: 'SunPower',
      tagline: 'Filed Chapter 11 on Aug 5, 2024; confirm who backs an old warranty',
      statusSource: SUNPOWER_8K,
    },
    { slug: 'solar-optimum-review', name: 'Solar Optimum', tagline: 'California installer; compare its written panel models and warranty' },
    { slug: 'baker-electric-solar-review', name: 'Baker Electric Solar', tagline: 'California installer; compare its written price and warranty' },
  ],
  // Bankruptcy / failed-installer focus
  defunct: [
    {
      slug: 'freedom-forever-review',
      name: 'Freedom Forever',
      tagline: 'Filed Chapter 11 on Apr 15, 2026; the case became a Chapter 7 case on Aug 7, 2026',
      statusSource: {
        publisher: 'U.S. Bankruptcy Court, D. Del. (Case No. 26-10522), via CourtListener',
        date: 'checked Sep 24, 2026',
        url: 'https://www.courtlistener.com/docket/73192534/freedom-forever-llc/',
      },
    },
    {
      slug: 'sullivan-solar-power-review',
      name: 'Sullivan Solar Power',
      // The widely repeated "defunct since 2021" date is trade-press/local
      // news only. The CSLB report lists Sullivan Solar Power of California
      // Inc, license 839077, revoked 06/20/2022.
      tagline: 'CSLB revoked its contractor license (No. 839077) on June 20, 2022',
      statusSource: {
        publisher: 'California CSLB — revoked-license report',
        date: 'Jun 20, 2022',
        url: 'https://www.cslb.ca.gov/Resources/Reports/Revoked/Revoked202206.pdf',
      },
    },
    {
      slug: 'sunpower-review',
      name: 'SunPower',
      tagline: 'Filed Chapter 11 on Aug 5, 2024; Complete Solaria agreed to buy parts of the business',
      statusSource: SUNPOWER_8K,
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
            Our installer reviews rest on public records: complaint categories, court dockets, company filings and license checks.
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
              // Full-strength muted ink (#56666C, 5.6:1 on the card's page-color
              // fill). The previous /80 tint measured 3.66:1, below WCAG AA
              // 4.5:1 for 12px text; the link inherits this color.
              <p className='text-xs text-muted-foreground mt-2 leading-snug'>
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
          Company notes above, including any bankruptcy, license revocation
          or restructuring, carry their own source and date and were last
          checked on 24 September 2026. Each company&apos;s review
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
