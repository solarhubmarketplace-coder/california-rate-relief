import Link from 'next/link';
import { Mail } from 'lucide-react';

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
    body: 'Chad runs GreenReviewsHub as a research-led publication covering portable power stations, e-bikes, mini splits, smart thermostats, generators, and other green-energy gear. Most reviews aggregate manufacturer specs, owner reports, independent lab data, and warranty terms; when we have personally owned a product, we say so on the page. See the methodology page for how every review is constructed.',
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
