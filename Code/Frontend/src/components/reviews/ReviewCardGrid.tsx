import Link from 'next/link';
import { Battery, Zap, Star } from 'lucide-react';
import type { ReviewCard } from '@/lib/grh-reviews-data';

// =============================================================================
// ReviewCardGrid — render an array of GRH ReviewCards as a 2-col grid
// =============================================================================
// Extracted from /reviews/page.tsx so it can be reused by /reviews and by
// /reviews/page/[page] paginated routes.
// =============================================================================

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.3;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className='flex items-center gap-1'>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className='h-4 w-4 fill-yellow-400 text-yellow-400' />
      ))}
      {hasHalfStar && (
        <div className='relative'>
          <Star className='h-4 w-4 text-gray-300' />
          <div className='absolute inset-0 overflow-hidden w-[50%]'>
            <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
          </div>
        </div>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className='h-4 w-4 text-gray-300' />
      ))}
      <span className='ml-1 text-sm font-semibold' style={{ color: '#f5f5f5' }}>
        {rating}/5
      </span>
    </div>
  );
}

export function ReviewCardGrid({ items }: { items: ReviewCard[] }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
      {items.map((review) => (
        <Link
          key={review.slug}
          href={`/reviews/${review.slug}`}
          className='group block'
        >
          <div
            className='rounded-xl shadow-sm border p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full flex flex-col'
            style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
          >
            <div className='flex items-center justify-between mb-4'>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${
                  review.badge === 'Comparison Guide'
                    ? 'bg-blue-500/15 text-blue-300'
                    : 'bg-green-500/15 text-green-300'
                }`}
              >
                {review.badge}
              </span>
              {review.icon === 'battery' ? (
                <Battery className='h-5 w-5' style={{ color: '#d4d4d8' }} />
              ) : (
                <Zap className='h-5 w-5' style={{ color: '#d4d4d8' }} />
              )}
            </div>
            <h2
              className='text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight'
              style={{ color: '#f5f5f5' }}
            >
              {review.title}
            </h2>
            {review.rating && (
              <div className='mb-3'>
                <StarRating rating={review.rating} />
              </div>
            )}
            <p
              className='leading-relaxed mb-4 flex-grow'
              style={{ color: '#d4d4d8' }}
            >
              {review.description}
            </p>
            <span className='text-sm font-semibold text-primary inline-flex items-center gap-1 mt-auto'>
              Read review →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
