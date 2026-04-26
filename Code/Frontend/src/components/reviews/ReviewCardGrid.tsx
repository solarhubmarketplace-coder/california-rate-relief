import Link from 'next/link';
import { Battery, Zap, Star, ArrowRight } from 'lucide-react';
import type { ReviewCard } from '@/lib/grh-reviews-data';

// =============================================================================
// ReviewCardGrid — render an array of GRH ReviewCards as a 2-col grid
// =============================================================================
// Extracted from /reviews/page.tsx so it can be reused by /reviews and by
// /reviews/page/[page] paginated routes.
// As of Apr 26 2026: cards now show product hero image at the top when present.
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
            className='rounded-xl shadow-sm border overflow-hidden hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col'
            style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
          >
            {/* Image header — only renders if image is set */}
            {review.image && (
              <div className='relative w-full h-48 bg-white overflow-hidden flex items-center justify-center'>
                <img
                  src={review.image}
                  alt={review.title}
                  className='w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500'
                  loading='lazy'
                />
                {review.brand && (
                  <span className='absolute top-2 right-2 text-[10px] font-bold tracking-wider text-white bg-black/60 backdrop-blur px-2 py-1 rounded-full uppercase'>
                    {review.brand}
                  </span>
                )}
                <span
                  className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                    review.badge === 'Comparison Guide'
                      ? 'bg-blue-500 text-white'
                      : 'bg-emerald-500 text-white'
                  }`}
                >
                  {review.badge === 'Comparison Guide' ? 'Guide' : 'Review'}
                </span>
              </div>
            )}

            <div className='p-6 flex flex-col flex-grow'>
              {/* If no image, badge appears here instead */}
              {!review.image && (
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
              )}

              <h2
                className='text-lg md:text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors tracking-tight leading-tight'
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
                className='text-sm leading-relaxed mb-4 flex-grow'
                style={{ color: '#d4d4d8' }}
              >
                {review.description}
              </p>
              <span className='text-sm font-semibold text-emerald-400 inline-flex items-center gap-1 mt-auto group-hover:gap-2 transition-all'>
                Read full review <ArrowRight className='h-4 w-4' />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
