'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// =============================================================================
// StickyMobileCTA (GLP-1 variant)
// =============================================================================
// Sticky bottom bar on mobile only (md+ hidden). Appears once the user has
// scrolled past ~600px (roughly past the hero / first CTA) and stays visible
// until explicitly dismissed — never re-hides on scroll-up.
//
// Fires `telehealth_affiliate_click` to GA4 dataLayer + window.gtag + PostHog
// (if any are loaded) — same event-name convention as GLP1ComparisonTable so
// click data aggregates cleanly across surfaces.
//
// Brand palette matches the GLP-1 design system (warm beige + deep navy CTA).
// =============================================================================

interface StickyMobileCTAProps {
  /** Affiliate destination — must already be built via buildGlp1AffiliateUrl() */
  href: string;
  /** Display name of the brand (e.g. "TMates") */
  brandName: string;
  /** Optional price pitch line (e.g. "Compounded tirzepatide from $167/mo") */
  pricePitch?: string;
}

export function StickyMobileCTA({ href, brandName, pricePitch }: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      // Latched: once shown, stays shown until dismissed. Never re-hides on scroll-up.
      setVisible((prev) => prev || window.scrollY > 600);
    };
    // Initial check — covers deep-link / back-button arrivals already scrolled past 600.
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  const handleClick = () => {
    if (typeof window === 'undefined') return;
    const w = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
      posthog?: { capture?: (event: string, props: Record<string, unknown>) => void };
      gtag?: (...args: unknown[]) => void;
    };
    const payload = {
      affiliate_source: 'sticky-mobile-cta',
      brand: brandName,
    };
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: 'telehealth_affiliate_click', ...payload });
    }
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'telehealth_affiliate_click', payload);
    }
    if (w.posthog?.capture) {
      w.posthog.capture('telehealth_affiliate_click', payload);
    }
  };

  return (
    <div
      className='md:hidden fixed bottom-0 left-0 right-0 z-40 border-t-2 shadow-2xl'
      style={{ backgroundColor: '#FDF6E3', borderColor: '#C9A146' }}
      role='complementary'
      aria-label={`Sticky CTA: visit ${brandName}`}
    >
      <div className='flex items-center gap-3 p-3'>
        <div className='flex-1 min-w-0'>
          <p
            className='text-xs truncate'
            style={{ color: '#6B7B82' }}
          >
            {brandName}
          </p>
          {pricePitch && (
            <p
              className='text-sm font-bold truncate'
              style={{ color: '#0E2A3A' }}
            >
              {pricePitch}
            </p>
          )}
        </div>
        <Link
          href={href}
          target='_blank'
          rel='sponsored nofollow noopener noreferrer'
          onClick={handleClick}
          className='inline-flex items-center font-semibold rounded-lg px-3 py-2 text-sm whitespace-nowrap'
          style={{ backgroundColor: '#0E2A3A', color: '#F0EBE0', minHeight: '44px' }}
          data-affiliate-source='sticky-mobile-cta'
          data-brand={brandName}
        >
          Visit {brandName} →
        </Link>
        <button
          onClick={() => setDismissed(true)}
          aria-label='Dismiss sticky CTA'
          className='px-2 py-2 text-lg leading-none rounded'
          style={{ color: '#6B7B82', minWidth: '44px', minHeight: '44px' }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
