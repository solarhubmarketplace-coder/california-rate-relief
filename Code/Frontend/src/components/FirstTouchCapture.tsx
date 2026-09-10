'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureFirstTouch } from '@/lib/attribution';
import { recordJourneyPage } from '@/lib/lead-journey';

/** Capture entry before a reader navigates to either public intake form. */
export default function FirstTouchCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureFirstTouch();
    recordJourneyPage();
  }, [pathname]);
  return null;
}
