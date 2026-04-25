import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';

// =============================================================================
// RelatedReviewLinks — generic related-content callout
// =============================================================================
// Drop-in for any /reviews-style hub or article. Renders 3 contextual link
// cards plus a "see all" CTA. Used on GRH product reviews and SHG/AHB
// content surfaces to improve internal linking density.
// =============================================================================

export interface RelatedLink {
  href: string;
  title: string;
  tagline: string;
}

interface PaletteOpt {
  fg: string;
  muted: string;
  accent: string;
  cardBg: string;
  cardBorder: string;
  hoverBg: string;
}

interface Props {
  links: RelatedLink[];
  /** Optional "see all" footer CTA */
  seeAll?: { href: string; label: string };
  heading?: string;
  description?: string;
  /** Optional palette override (CRR uses tokens by default; SHG/AHB/GRH pass explicit hex) */
  palette?: PaletteOpt;
}

const DEFAULT_PALETTE: PaletteOpt = {
  fg: 'hsl(var(--foreground))',
  muted: 'hsl(var(--muted-foreground))',
  accent: 'hsl(var(--primary))',
  cardBg: 'hsl(var(--card))',
  cardBorder: 'hsl(var(--border))',
  hoverBg: 'hsl(var(--muted))',
};

export function RelatedReviewLinks({
  links,
  seeAll,
  heading,
  description,
  palette = DEFAULT_PALETTE,
}: Props) {
  return (
    <section
      className='my-10 rounded-xl border p-6'
      style={{ borderColor: palette.cardBorder, backgroundColor: palette.cardBg }}
      aria-label={heading ?? 'Related coverage'}
    >
      <div className='flex items-start gap-3 mb-4'>
        <div className='flex-shrink-0 mt-0.5'>
          <Layers className='h-5 w-5' style={{ color: palette.accent }} aria-hidden='true' />
        </div>
        <div>
          <h2 className='text-xl md:text-2xl font-bold' style={{ color: palette.fg }}>
            {heading ?? 'Related coverage'}
          </h2>
          {description && (
            <p className='text-sm mt-1' style={{ color: palette.muted }}>
              {description}
            </p>
          )}
        </div>
      </div>

      <div className='grid sm:grid-cols-3 gap-3'>
        {links.slice(0, 3).map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className='block rounded-lg border p-4 transition-colors'
            style={{ borderColor: palette.cardBorder, backgroundColor: palette.cardBg }}
          >
            <div className='font-bold mb-1' style={{ color: palette.fg }}>{l.title}</div>
            <div className='text-sm leading-snug' style={{ color: palette.muted }}>
              {l.tagline}
            </div>
            <div className='text-xs font-semibold mt-3 inline-flex items-center gap-1' style={{ color: palette.accent }}>
              Read
              <ArrowRight className='h-3 w-3' aria-hidden='true' />
            </div>
          </Link>
        ))}
      </div>

      {seeAll && (
        <div className='mt-4 pt-4 border-t text-center' style={{ borderColor: palette.cardBorder }}>
          <Link
            href={seeAll.href}
            className='inline-flex items-center gap-1 text-sm font-semibold underline'
            style={{ color: palette.accent }}
          >
            {seeAll.label}
            <ArrowRight className='h-3 w-3' aria-hidden='true' />
          </Link>
        </div>
      )}
    </section>
  );
}
