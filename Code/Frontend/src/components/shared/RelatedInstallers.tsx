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
// =============================================================================

interface InstallerCard { slug: string; name: string; tagline: string; }

// Curated set per topic. Most blog posts use 'general' — NEM-related posts
// might surface a different mix. Keep this honest: we only link to reviews
// that are genuinely relevant to the blog topic.
const INSTALLER_PICKS: Record<string, InstallerCard[]> = {
  general: [
    { slug: 'sunrun-review', name: 'Sunrun', tagline: 'Largest US residential solar installer; PPA/lease focus' },
    { slug: 'sunpower-review', name: 'SunPower (now SunStrong)', tagline: 'Premium panels, post-restructuring service questions' },
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
    { slug: 'sunpower-review', name: 'SunPower', tagline: 'Maxeon panels, premium efficiency tier' },
    { slug: 'solar-optimum-review', name: 'Solar Optimum', tagline: 'Boutique CA installer; Panasonic / REC panels' },
    { slug: 'baker-electric-solar-review', name: 'Baker Electric Solar', tagline: 'Commercial-grade installs; transparent pricing' },
  ],
  // Bankruptcy / failed-installer focus
  defunct: [
    { slug: 'freedom-forever-review', name: 'Freedom Forever', tagline: 'Chapter 11 April 2026 — what existing customers should do' },
    { slug: 'sullivan-solar-power-review', name: 'Sullivan Solar Power', tagline: 'Defunct since 2021 — cautionary case study' },
    { slug: 'sunpower-review', name: 'SunPower', tagline: 'Restructured 2024; service-continuity questions' },
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
          <Link
            key={inst.slug}
            href={`/solar-installers/${inst.slug}`}
            className='block rounded-lg border border-border bg-background hover:bg-muted/40 transition-colors p-4'
          >
            <div className='font-bold text-foreground mb-1'>{inst.name}</div>
            <div className='text-sm text-muted-foreground leading-snug'>{inst.tagline}</div>
            <div className='text-xs text-primary font-semibold mt-3 inline-flex items-center gap-1'>
              Read review
              <ArrowRight className='h-3 w-3' aria-hidden='true' />
            </div>
          </Link>
        ))}
      </div>

      <div className='mt-4 pt-4 border-t border-border text-center'>
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
