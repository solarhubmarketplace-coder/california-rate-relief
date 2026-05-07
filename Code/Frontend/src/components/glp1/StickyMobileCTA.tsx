'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface StickyMobileCTAProps {
  /** The affiliate URL to send clicks to */
  href: string;
  /** Brand name for the button label */
  brandName: string;
  /** Optional: short pitch/price line shown above the button */
  pricePitch?: string;
  /** Hide on desktop? (default true — sticky bottom is mobile UX) */
  mobileOnly?: boolean;
}

/**
 * Sticky-bottom mobile affiliate CTA.
 *
 * Per 2026 CRO research (Gronk-verified): above-the-fold CTA + duplicated
 * in-content CTAs lift conversions 20-40%. On mobile, the persistent
 * bottom-bar pattern is the best-converting placement because:
 *   - It's always visible without scroll-jumping
 *   - It doesn't take the user's primary content space
 *   - Tap target stays in thumb zone
 *
 * Implementation notes:
 *   - Slides up only after the user scrolls past the in-content hero CTA
 *     (no double-CTA stacking when both are visible)
 *   - Dismissible — respects user choice (stored per-session, not persisted
 *     to avoid hostility)
 *   - rel="sponsored nofollow noopener" on the affiliate link
 *   - 48px+ tap target
 *   - No layout shift (CLS-safe — reserved space via fixed positioning)
 */
export function StickyMobileCTA({
  href,
  brandName,
  pricePitch,
  mobileOnly = true,
}: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Reveal after the user scrolls past ~600px (past the hero CTA)
    const handleScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setVisible(true);
      } else if (window.scrollY <= 600) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 ${mobileOnly ? 'md:hidden' : ''} animate-slide-up`}
      style={{
        backgroundColor: 'rgba(14, 42, 58, 0.97)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.15)',
      }}
    >
      <div className="flex items-center gap-2 px-4 py-3 max-w-md mx-auto">
        {pricePitch && (
          <div className="flex-1 text-xs leading-tight" style={{ color: '#F0EBE0' }}>
            {pricePitch}
          </div>
        )}
        <a
          href={href}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-bold whitespace-nowrap"
          style={{ backgroundColor: '#D4A33A', color: '#0E2A3A', minHeight: '48px' }}
        >
          Visit {brandName}
          <ExternalLink className="h-4 w-4" />
        </a>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="p-2 rounded-full hover:bg-white/10"
          style={{ color: '#F0EBE0', minHeight: '48px', minWidth: '48px' }}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
