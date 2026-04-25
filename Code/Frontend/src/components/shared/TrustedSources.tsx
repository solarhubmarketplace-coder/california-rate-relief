import { ExternalLink, Library } from 'lucide-react';
import {
  getSourcesForDomain,
  groupByCategory,
  CATEGORY_LABEL,
  type AuthoritativeSource,
  type SourceCategory,
} from '@/lib/authoritative-sources';

// =============================================================================
// TrustedSources — categorized authoritative outbound link list
// =============================================================================
// Renders the curated authoritative-sources catalog for a domain in a tidy
// categorized format. Used on /methodology pages and adaptable to any
// "References" surface.
//
// All outbound links use rel="noopener external" — NOT nofollow — because
// these are editorial citations, not affiliate links. We want search
// engines to recognize and follow them as trust signals.
// =============================================================================

export type TrustedSourcesPalette = {
  fg: string;
  muted: string;
  mutedFg: string;
  accent: string;
  cardBg: string;
  cardBorder: string;
};

interface Props {
  domain: 'crr' | 'grh' | 'shg' | 'ahb';
  palette: TrustedSourcesPalette;
  /**
   * If 'compact', renders a flat list of the top primary sources (~6).
   * If 'full', renders all sources grouped by category.
   * Default: 'full'.
   */
  variant?: 'full' | 'compact';
  /**
   * Optional custom heading (overrides default).
   */
  heading?: string;
}

function SourceLink({
  source,
  palette,
}: {
  source: AuthoritativeSource;
  palette: TrustedSourcesPalette;
}) {
  return (
    <li className='leading-relaxed'>
      <a
        href={source.url}
        target='_blank'
        rel='noopener external'
        className='font-semibold underline inline-flex items-center gap-1'
        style={{ color: palette.accent }}
      >
        {source.name}
        <ExternalLink className='h-3 w-3 flex-shrink-0' aria-hidden='true' />
      </a>
      <span className='block text-sm mt-1' style={{ color: palette.muted }}>
        {source.description}
      </span>
    </li>
  );
}

export function TrustedSources({ domain, palette, variant = 'full', heading }: Props) {
  const sources = getSourcesForDomain(domain);

  if (variant === 'compact') {
    const top = sources.filter((s) => s.primary).slice(0, 8);
    return (
      <section className='my-10'>
        <div className='flex items-center gap-3 mb-4'>
          <Library className='h-6 w-6' style={{ color: palette.accent }} aria-hidden='true' />
          <h2 className='text-2xl md:text-3xl font-bold' style={{ color: palette.fg }}>
            {heading ?? 'Primary trusted sources'}
          </h2>
        </div>
        <p className='mb-4' style={{ color: palette.muted }}>
          Government, research, and standards bodies we routinely cite. We link out so readers can verify our claims at the source.
        </p>
        <ul className='space-y-3 list-disc pl-6' style={{ color: palette.muted }}>
          {top.map((s) => (
            <SourceLink key={s.url} source={s} palette={palette} />
          ))}
        </ul>
      </section>
    );
  }

  const grouped = groupByCategory(sources);
  const cats = Object.keys(grouped) as SourceCategory[];

  return (
    <section className='my-10'>
      <div className='flex items-center gap-3 mb-4'>
        <Library className='h-6 w-6' style={{ color: palette.accent }} aria-hidden='true' />
        <h2 className='text-2xl md:text-3xl font-bold' style={{ color: palette.fg }}>
          {heading ?? 'Trusted sources we cite'}
        </h2>
      </div>
      <p className='mb-6' style={{ color: palette.muted }}>
        Below are the authoritative sources we consult when researching content for this site. Most are government registries, peer-reviewed literature databases, or established standards bodies. We link out so readers can verify our claims at the source.
      </p>
      <div className='space-y-8'>
        {cats.map((cat) => (
          <div key={cat}>
            <h3 className='text-lg font-bold mb-3' style={{ color: palette.fg }}>
              {CATEGORY_LABEL[cat]}
            </h3>
            <ul className='space-y-3 list-disc pl-6' style={{ color: palette.muted }}>
              {grouped[cat].map((s) => (
                <SourceLink key={s.url} source={s} palette={palette} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
