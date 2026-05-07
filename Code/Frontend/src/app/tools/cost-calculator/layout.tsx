import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'GLP-1 Cost Calculator: Monthly & Annual Drug Cost Breakdown',
  description:
    'Calculate your monthly GLP-1 cost across titration schedules. Compare Zepbound, Wegovy, compounded semaglutide, and compounded tirzepatide side-by-side. Verified May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/tools/cost-calculator' },
  openGraph: {
    title: 'GLP-1 Cost Calculator — Monthly Breakdown by Drug & Dose',
    description:
      'See exact monthly costs for every GLP-1 across titration schedules. Updated May 2026.',
    url: 'https://glp1comparehub.com/tools/cost-calculator',
    siteName: 'GLP1CompareHub',
    type: 'website',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630, alt: 'GLP-1 Cost Calculator — GLP1CompareHub' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function CostCalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
