'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getAffiliateLink, buildAffiliateUrl } from '@/lib/affiliate-links';

interface BuyButtonProps {
  /** Key into AFFILIATE_LINKS registry */
  productKey: string;
  /** Which page/section is this click coming from? Used for tracking. */
  source?: string;
  /** Variant controls color/size. 'primary' = orange (high-convert), 'secondary' = green, 'compact' = table-row */
  variant?: 'primary' | 'secondary' | 'compact';
  /** Override button text. Default: "Check Price at {brand}" */
  label?: string;
  /** Show the current display price alongside the button */
  showPrice?: boolean;
  /** Full-width on mobile */
  fullWidth?: boolean;
  className?: string;
}

/**
 * The single source of truth for every affiliate CTA on every review page.
 *
 * Design choices are grounded in 2026 CRO research:
 *  - Orange is the highest-converting button color on light AND dark bgs
 *  - Minimum 44px tap target on mobile (py-3 = 12px + text line-height ≈ 48px)
 *  - Benefit-driven copy: "Check Price at EcoFlow" vs "Buy Now"
 *  - rel="sponsored nofollow" satisfies FTC + Google's affiliate link guidelines
 *  - target="_blank" keeps our review open while user checks price
 */
export function BuyButton({
  productKey,
  source = 'default',
  variant = 'primary',
  label,
  showPrice = false,
  fullWidth = false,
  className = '',
}: BuyButtonProps) {
  const link = getAffiliateLink(productKey);
  const href = buildAffiliateUrl(productKey, source);
  const buttonLabel = label || `Check Price at ${link.brand}`;

  // Variant styling — all meet 44px+ tap target, all use whitespace per CRO research
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-150';
  const sizes = {
    primary: 'px-6 py-3 text-base',
    secondary: 'px-6 py-3 text-base',
    compact: 'px-3 py-2 text-sm',
  };
  const colors = {
    // Orange/amber: research-backed highest CTR on dark theme + light bg
    primary:
      'bg-amber-500 hover:bg-amber-400 text-black focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2',
    secondary:
      'bg-emerald-500 hover:bg-emerald-400 text-black focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2',
    compact:
      'bg-amber-500 hover:bg-amber-400 text-black focus:outline-none focus:ring-1 focus:ring-amber-400',
  };
  const widthClass = fullWidth ? 'w-full sm:w-auto' : '';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Link
        href={href}
        target='_blank'
        rel='sponsored nofollow noopener noreferrer'
        className={`${base} ${sizes[variant]} ${colors[variant]} ${widthClass}`}
        data-affiliate-source={source}
        data-product-key={productKey}
      >
        {buttonLabel}
        {variant === 'compact' ? (
          <ExternalLink className='h-3 w-3' />
        ) : (
          <ArrowRight className='h-4 w-4' />
        )}
      </Link>
      {showPrice && link.priceDisplay && (
        <span className='text-sm font-semibold text-muted-foreground'>
          {link.priceDisplay}
        </span>
      )}
    </div>
  );
}
