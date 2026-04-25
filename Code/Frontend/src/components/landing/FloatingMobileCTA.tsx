'use client';

import Link from 'next/link';

// =============================================================================
// FloatingMobileCTA — sticky bottom bar on mobile only
// =============================================================================

export function FloatingMobileCTA() {
  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl p-3 flex items-center gap-2'>
      {/* REPLACE 800-555-0123 WITH REAL PHONE NUMBER */}
      <a
        href='tel:18005550123'
        className='flex-1 text-center bg-white border-2 border-green-700 text-green-700 font-bold py-3 rounded-lg text-sm'
      >
        Call Now
      </a>
      <Link
        href='#qualify'
        className='flex-1 text-center bg-green-700 text-white font-extrabold py-3 rounded-lg shadow-md text-sm'
      >
        Check Eligibility
      </Link>
    </div>
  );
}
