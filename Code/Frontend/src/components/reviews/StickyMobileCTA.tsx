'use client';

import { useEffect, useState } from 'react';
import { BuyButton } from './BuyButton';
import { getAffiliateLink } from '@/lib/affiliate-links';

interface StickyMobileCTAProps {
  productKey: string;
  source?: string;
}

/**
 * Sticky bottom bar that appears on mobile after the user scrolls past
 * the hero. Research: lifts conversion 20-40% on long-form review pages
 * where most users never scroll to the bottom CTA.
 *
 * Hidden on desktop (md+) — desktop users see top + inline + final CTAs.
 * Dismissible — stays dismissed per session.
 */
export function StickyMobileCTA({
  productKey,
  source = 'sticky-mobile',
}: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const link = getAffiliateLink(productKey);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      // Show after user scrolls past ~600px (roughly past the top CTA box)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t-2 border-amber-500/40 shadow-2xl'>
      <div className='flex items-center gap-3 p-3'>
        <div className='flex-1 min-w-0'>
          <p className='text-xs text-muted-foreground truncate'>
            {link.brand}
          </p>
          {link.priceDisplay && (
            <p className='text-sm font-bold text-foreground'>
              {link.priceDisplay}
            </p>
          )}
        </div>
        <BuyButton
          productKey={productKey}
          source={source}
          variant='compact'
          label='Check Price'
        />
        <button
          onClick={() => setDismissed(true)}
          aria-label='Dismiss'
          className='text-muted-foreground hover:text-foreground px-2 py-1 text-lg leading-none'
        >
          ×
        </button>
      </div>
    </div>
  );
}
