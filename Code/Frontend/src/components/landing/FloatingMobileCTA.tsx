'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { intakeHrefForPath, isCommercialIntentPath } from '@/lib/intake-routing';

// =============================================================================
// FloatingMobileCTA — sticky bottom bar on mobile only
// =============================================================================

export function FloatingMobileCTA() {
  const pathname = usePathname();
  const isCommercial = isCommercialIntentPath(pathname);
  // No phone number is published yet — once the owner supplies a real one,
  // this can go back to a two-button bar (call + check eligibility) like it
  // had before with a tel: link.
  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xl p-3'>
      <Link
        href={intakeHrefForPath(pathname)}
        className='block w-full text-center bg-emerald-700 text-white font-extrabold py-3 rounded-lg shadow-md text-sm'
      >
        {isCommercial ? 'Request Commercial Review' : 'Check My Eligibility'}
      </Link>
    </div>
  );
}
