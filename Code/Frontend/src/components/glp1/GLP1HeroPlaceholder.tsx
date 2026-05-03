/**
 * Inline SVG hero placeholder. Used when a provider's `heroImage` field is
 * missing — renders a category-colored gradient with the provider name and a
 * small "Provider Photo Pending" tag. Keeps the layout consistent until real
 * imagery is fetched via Grok.
 *
 * 16:9 aspect (matches the slot real images render in).
 *
 * Usage:
 *   {provider.heroImage
 *     ? <Image src={provider.heroImage} ... />
 *     : <GLP1HeroPlaceholder name={provider.name} category={provider.category} />}
 */

import type { ProviderCategory } from '@/lib/glp1-providers';

const CATEGORY_GRADIENT: Record<ProviderCategory, { from: string; to: string; accent: string }> = {
  Telemedicine:           { from: '#E8DCC0', to: '#D4A33A', accent: '#0E2A3A' },
  'Compounding Pharmacy': { from: '#D9E8D4', to: '#7CA982', accent: '#0B3D2E' },
  'Manufacturer Program': { from: '#DEE5E8', to: '#9333EA', accent: '#3B1A52' },
  Hybrid:                 { from: '#F4EBD0', to: '#F59E0B', accent: '#5C3A0B' },
};

interface GLP1HeroPlaceholderProps {
  name: string;
  category: ProviderCategory;
  /** Optional one-word descriptor under the name (e.g., "Compounded", "Branded") */
  tag?: string;
}

export function GLP1HeroPlaceholder({ name, category, tag }: GLP1HeroPlaceholderProps) {
  const g = CATEGORY_GRADIENT[category];
  const initial = name.trim()[0]?.toUpperCase() ?? '?';

  return (
    <div
      className='relative w-full h-full overflow-hidden'
      style={{
        background: `linear-gradient(135deg, ${g.from} 0%, ${g.to} 100%)`,
        aspectRatio: '16 / 9',
      }}
      aria-label={`${name} — provider photo pending`}
    >
      {/* Decorative oversized initial in the background */}
      <div
        className='absolute -right-8 -bottom-12 select-none pointer-events-none'
        style={{
          fontSize: '14rem',
          fontFamily: '"Playfair Display", "Georgia", serif',
          fontWeight: 900,
          color: g.accent,
          opacity: 0.12,
          lineHeight: 1,
        }}
      >
        {initial}
      </div>

      {/* Provider name + tag, bottom-left */}
      <div className='absolute inset-0 flex flex-col justify-end p-5'>
        <div
          className='text-[10px] font-bold uppercase tracking-widest mb-1.5 inline-block self-start px-2 py-0.5 rounded-full'
          style={{
            backgroundColor: 'rgba(255,255,255,0.75)',
            color: g.accent,
            backdropFilter: 'blur(4px)',
          }}
        >
          Provider Photo Pending
        </div>
        <div
          className='text-2xl md:text-3xl font-bold leading-tight'
          style={{ color: g.accent, fontFamily: '"Playfair Display", "Georgia", serif' }}
        >
          {name}
        </div>
        {tag && (
          <div className='text-xs mt-0.5' style={{ color: g.accent, opacity: 0.75 }}>
            {tag}
          </div>
        )}
      </div>

      {/* Subtle texture — diagonal stripes via SVG */}
      <svg
        className='absolute inset-0 w-full h-full pointer-events-none'
        aria-hidden='true'
      >
        <defs>
          <pattern id='hero-stripes' patternUnits='userSpaceOnUse' width='8' height='8' patternTransform='rotate(45)'>
            <line x1='0' y1='0' x2='0' y2='8' stroke={g.accent} strokeWidth='0.5' opacity='0.05' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#hero-stripes)' />
      </svg>
    </div>
  );
}
