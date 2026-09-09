'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureFirstTouch } from '@/lib/attribution';

/** Capture entry before a reader navigates to either public intake form. */
export default function FirstTouchCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureFirstTouch();
  }, [pathname]);
  return null;
}
