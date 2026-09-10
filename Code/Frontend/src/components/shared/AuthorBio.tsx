import Link from 'next/link';
import { CalendarClock, ExternalLink, Mail } from 'lucide-react';

// =============================================================================
// AuthorBio — palette-aware author bio block
// =============================================================================
// Renders Chad Simpson's bio with a domain-appropriate framing. No headshot
// (text-only) per audit decision; can be added later by setting headshotUrl.
//
// Important: bio framing is honest. Chad is a research-led editor, not a
// licensed contractor or medical professional. Each domain gets tailored
// language about what kind of research powers the publication.
// =============================================================================

export type AuthorBioPalette = {
  fg: string;
  muted: string;
  mutedFg: string;
  accent: string;
  cardBg: string;
  cardBorder: string;
};

type Domain = 'crr' | 'grh' | 'shg' | 'ahb';

const BIOS: Record<Domain, { headline: string; body: string; }> = {
  crr: {
    headline: 'Editor — Chad Simpson',
    body: 'Chad has been researching California solar policy and the installer market for several years, including the NEM 1, NEM 2, and NEM 3 transitions, NBT compensation, and the post-2024 lead-acquisition shakeout. He reads CSLB licensing records, BBB complaint files, and California Superior Court filings before any installer review goes live. California Rate Relief is a research-led publication; Chad is not a licensed contractor and does not give project-specific advice — see the methodology page for how we evaluate installers.',
  },
  grh: {
    headline: 'Editor — Chad Simpson',
    body: 'Chad runs GreenReviewsHub as a research-driven review publication covering portable power stations, e-bikes, mini splits, smart thermostats, generators, and other green-energy gear. Every review is built from manufacturer specifications, independent lab data (Project Farm, Consumer Reports, and comparable testing outlets), aggregated owner reports across retailers and owner forums, warranty terms, and safety-certification registries — cross-checked against each other to surface where real-world performance diverges from the spec sheet. GreenReviewsHub is a research-led publication; Chad is not a licensed contractor or electrician and does not give project-specific advice. See the methodology page for the full process and data sources behind every review.',
  },
  shg: {
    headline: 'Editor — Chad Simpson',
    body: 'Chad covers home security gear with a focus on privacy posture, real-world reliability, and the long-term ownership experience. He reads CVE disclosures, manufacturer warrant policies, and aggregated owner failure reports before a recommendation goes live. SecureHomeGear is a research-led publication; see the methodology page for the data sources and disqualifiers behind every review.',
  },
  ahb: {
    headline: 'Editor — Chad Simpson',
    body: 'Chad anchors At Home Biohacking in peer-reviewed research. Every health-relevant claim links to a PMID or DOI, and we name the evidence tier (RCT, systematic review, observational study, anecdote) when stating one. Chad is not a medical professional; content is informational and not medical advice. See the methodology page for how studies are weighted and how often pages are reviewed.',
  },
};

export function AuthorBio({
  domain,
  palette,
  showMethodologyLink = true,
  contactPath = '/contact',
}: {
  domain: Domain;
  palette: AuthorBioPalette;
  showMethodologyLink?: boolean;
  contactPath?: string;
}) {
  const bio = BIOS[domain];
  return (
    <aside
      className='rounded-xl border p-5 my-8'
      style={{ borderColor: palette.cardBorder, backgroundColor: palette.cardBg }}
      aria-label='About the editor'
    >
      <div className='flex items-start gap-4'>
        <div
          className='w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0'
          style={{ backgroundColor: palette.accent, color: '#0a0a0a' }}
          aria-hidden='true'
        >
          CS
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='font-bold mb-1' style={{ color: palette.fg }}>
            {bio.headline}
          </h3>
          <p className='text-sm leading-relaxed mb-3' style={{ color: palette.muted }}>
            {bio.body}
          </p>
          <div className='flex flex-wrap gap-3 text-xs'>
            {showMethodologyLink && (
              <Link href='/methodology' className='underline font-semibold' style={{ color: palette.accent }}>
                Our methodology
              </Link>
            )}
            <Link href='/author/chad-simpson' className='underline font-semibold' style={{ color: palette.accent }}>
              About Chad
            </Link>
            <Link href={contactPath} className='inline-flex items-center gap-1 underline font-semibold' style={{ color: palette.accent }}>
              <Mail className='h-3 w-3' aria-hidden='true' />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

// =============================================================================
// PersonSchema — Person JSON-LD for the editor
// =============================================================================
// Inject this once per page that has author/reviewer attribution. Reference
// the author URL from Article/Review schemas via {"@id": "...#chad-simpson"}.
// =============================================================================

export function PersonSchema({ siteOrigin }: { siteOrigin: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteOrigin}/author/chad-simpson#person`,
    name: 'Chad Simpson',
    url: `${siteOrigin}/author/chad-simpson`,
    jobTitle: 'Editor',
    description:
      'Research-led editor covering California solar policy, green-energy gear, home security, and at-home biohacking devices.',
    knowsAbout: [
      'California solar installer market',
      'NEM 3 net metering',
      'Portable power stations',
      'Home security cameras and privacy posture',
      'Red light therapy and at-home wellness devices',
    ],
    sameAs: [`${siteOrigin}/about`],
  };
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// =============================================================================
// formatLongDate — tiny local ISO formatter, no date library
// =============================================================================
// '2026-09-09' -> '9 September 2026'. Returns the input unchanged if it is not
// a plain YYYY-MM-DD string, so a bad date never renders as "NaN undefined".
// =============================================================================

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatLongDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d || m < 1 || m > 12) return iso;
  return `${d} ${MONTH_NAMES[m - 1]} ${y}`;
}

// =============================================================================
// ArticleAuthorBio — CRR byline + credential block for the foot of an article
// =============================================================================
// Named ArticleAuthorBio, not AuthorBio, because the AuthorBio export above is
// already imported by 222 pages across four hosts with a different prop shape
// (domain + palette). Renaming that would break every one of them.
//
// This block is CRR-specific on purpose: it carries California Rate Relief's
// referral-service statement verbatim, so it uses CRR's Tailwind theme tokens
// (same idiom as ArticleCTA) rather than a palette prop.
//
// The referral-service sentence is a compliance-adjacent claim written by the
// site owner. Do not paraphrase it, expand it, or wrap marketing copy around it.
// =============================================================================

export interface ArticleAuthorBioProps {
  /** ISO-8601 publish date, e.g. '2026-09-09'. */
  publishedISO: string;
  /** ISO-8601 last-updated date, e.g. '2026-09-10'. */
  updatedISO: string;
  /** Optional second name that checked the page, e.g. 'Chad Simpson'. */
  reviewer?: string;
  /** Optional primary sources behind the figures on this page. */
  sources?: { label: string; href: string }[];
}

export function ArticleAuthorBio({
  publishedISO,
  updatedISO,
  reviewer,
  sources,
}: ArticleAuthorBioProps) {
  return (
    <aside
      className='mt-12 rounded-2xl border border-border bg-card p-6'
      aria-label='About the author'
    >
      <div className='flex items-start gap-4'>
        <div
          className='w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0'
          aria-hidden='true'
        >
          CS
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='font-bold text-foreground tracking-tight'>
            <Link href='/author/chad-simpson' className='underline hover:text-primary'>
              Chad Simpson
            </Link>
            <span className='font-medium text-muted-foreground'>, Editor</span>
          </h3>

          <p className='mt-1 flex items-center gap-1.5 text-sm text-muted-foreground'>
            <CalendarClock className='h-3.5 w-3.5 flex-shrink-0' aria-hidden='true' />
            <span>
              Published {formatLongDate(publishedISO)} &middot; Updated {formatLongDate(updatedISO)}
            </span>
          </p>

          {reviewer && (
            <p className='mt-1 text-sm text-muted-foreground'>
              Reviewed by {reviewer}
            </p>
          )}

          <p className='mt-3 text-sm leading-relaxed text-foreground/80'>
            California Rate Relief is a referral service. We are not a licensed contractor. Installer licence numbers shown on our pages belong to those installers.
          </p>

          {sources && sources.length > 0 && (
            <div className='mt-4'>
              <h4 className='text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2'>
                Sources for this page
              </h4>
              <ul className='space-y-1.5 text-sm'>
                {sources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target='_blank'
                      rel='noopener external'
                      className='inline-flex items-center gap-1 text-primary font-medium hover:underline'
                    >
                      {s.label}
                      <ExternalLink className='h-3 w-3 flex-shrink-0' aria-hidden='true' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className='mt-4 text-sm'>
            Rates and incentives change. We log material fixes in our{' '}
            <Link href='/corrections' className='text-primary font-semibold underline'>
              corrections log
            </Link>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}
