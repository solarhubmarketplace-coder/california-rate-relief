'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { intakeHrefForPath, isCommercialIntentPath } from '@/lib/intake-routing';
import { ctaCopyFor, ctaVariantForPath, type CtaVariant } from '@/lib/cta-intent';
import { trackEvent } from '@/components/GoogleAnalyticsClient';

// =============================================================================
// FloatingMobileCTA — sticky bottom bar on mobile only.
//
// Most bill-shock search is mobile, so this bar is the ask that is actually on
// screen. Three things it now does that it did not:
//   * it makes the page's own ask (cta_variant), not one generic one;
//   * it can be dismissed, and stays dismissed for the rest of the session;
//   * it reserves its own height in the layout instead of sitting on top of the
//     last lines of the page, and it does not animate for a visitor who asked
//     for reduced motion.
// The destination is unchanged: still intakeHrefForPath() for this path.
//
// DRAFT COPY — labels come from lib/cta-intent.ts.
// =============================================================================

const DISMISS_KEY = 'crr_sticky_cta_dismissed_v1';

export function FloatingMobileCTA({ variant }: { variant?: CtaVariant } = {}) {
  const pathname = usePathname() || '';
  const isCommercial = isCommercialIntentPath(pathname);
  const resolved: CtaVariant = variant
    ? variant
    : isCommercial
      ? 'commercial'
      : ctaVariantForPath(pathname);
  const copy = ctaCopyFor(resolved);
  const href = intakeHrefForPath(pathname);

  // Mounted-gated so the server render and the first client render agree; the
  // dismissal lives in sessionStorage, which is unreadable during SSR and can
  // throw outright when storage is blocked.
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === '1') setDismissed(true);
    } catch {
      /* Storage blocked: the bar simply shows, as it always did. */
    }
    try {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(query.matches);
      const listener = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
      query.addEventListener('change', listener);
      return () => query.removeEventListener('change', listener);
    } catch {
      /* matchMedia missing: no animation is applied either way. */
    }
  }, []);

  // Hide the bar while an ask is already on screen (the hero quick check, an
  // inquiry form, the home wizard). Two asks on one screen compete, and on a
  // phone the bar sat over the quick check's Continue button.
  const [askInView, setAskInView] = useState(false);
  useEffect(() => {
    if (!mounted || dismissed || typeof IntersectionObserver === 'undefined') return;
    const visible = new Set<Element>();
    const observed = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setAskInView(visible.size > 0);
      },
      { threshold: 0 },
    );
    const scan = () => {
      document
        .querySelectorAll('main form, #qualify, #solar-inquiry, #commercial-review')
        .forEach((node) => {
          if (observed.has(node)) return;
          observed.add(node);
          observer.observe(node);
        });
    };
    scan();
    // The home wizard mounts inside Suspense and forms can swap to their
    // success panel, so look again once the page has settled.
    const timers = [600, 2000].map((ms) => window.setTimeout(scan, ms));
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      observer.disconnect();
    };
  }, [mounted, dismissed]);

  if (!mounted || dismissed) return null;

  const label = isCommercial ? 'Request Commercial Review' : copy.stickyAction;

  return (
    <>
      {/* Reserves the bar's height so the bar never covers the end of the page. */}
      <div aria-hidden="true" className="md:hidden h-[72px]" />
      <div
        aria-hidden={askInView || undefined}
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 border-t border-border bg-card p-3 shadow-lg ${
          reducedMotion
            ? ''
            : 'transition-transform duration-200 motion-reduce:transition-none'
        } ${askInView ? 'translate-y-full pointer-events-none' : ''}`}
      >
        <Link
          href={href}
          tabIndex={askInView ? -1 : undefined}
          onClick={() =>
            trackEvent('cta_click', {
              cta: 'sticky_mobile',
              cta_variant: resolved,
              destination: href,
              segment: isCommercial ? 'commercial' : 'residential',
              page_path: pathname || 'unknown',
            })
          }
          className="block flex-1 rounded-lg bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
        >
          {label}
        </Link>
        <button
          type="button"
          tabIndex={askInView ? -1 : undefined}
          aria-label="Dismiss this bar"
          onClick={() => {
            setDismissed(true);
            try {
              sessionStorage.setItem(DISMISS_KEY, '1');
            } catch {
              /* Dismissal then lasts for this page view only. */
            }
            trackEvent('cta_click', {
              cta: 'sticky_mobile_dismiss',
              cta_variant: resolved,
              destination: 'dismissed',
              page_path: pathname || 'unknown',
            });
          }}
          className="shrink-0 rounded-lg border border-border p-2 text-muted-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
