import { Info } from 'lucide-react';

/**
 * FTC-compliant affiliate disclosure. Renders at the top of every review
 * page (above the fold is required by FTC 16 CFR Part 255 as of 2025
 * enforcement updates). Honest, not apologetic — per 2026 CRO research,
 * honest disclosure builds trust rather than reducing conversions.
 */
export function AffiliateDisclosure({
  compact = false,
  variant,
}: {
  compact?: boolean;
  /** Pages may pass variant='compact' as an alias for compact={true} */
  variant?: string;
}) {
  if (variant === 'compact') compact = true;
  if (compact) {
    return (
      <p className='text-xs text-muted-foreground flex items-start gap-1.5 mb-4'>
        <Info className='h-3 w-3 mt-0.5 shrink-0' />
        <span>
          We may earn a commission on qualifying purchases through links on
          this page, at no extra cost to you. Our recommendations are based on
          independent research — manufacturer specifications, independent lab
          data, and aggregated owner reports — not on commission rates.
        </span>
      </p>
    );
  }

  return (
    <div className='bg-muted/30 border border-border rounded-lg p-3 mb-6 flex items-start gap-2'>
      <Info className='h-4 w-4 text-muted-foreground mt-0.5 shrink-0' />
      <p className='text-xs text-muted-foreground leading-relaxed'>
        <strong className='text-foreground/80'>Affiliate disclosure:</strong>{' '}
        GreenReviewsHub may earn a commission when you purchase through links on
        this page, at no extra cost to you. Our editorial recommendations are
        independent — we research and compare specifications and verify them
        against independent lab data and aggregated owner reports before
        recommending anything, and we never accept payment for favorable
        reviews.
      </p>
    </div>
  );
}
