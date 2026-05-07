import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'GLP-1 Match Quiz: Find Your Best Weight Loss Medication',
  description:
    'Answer 5 quick questions to find your best-fit GLP-1. Personalized match based on budget, injection preference, prior meds, and weight-loss goals.',
  alternates: { canonical: 'https://glp1comparehub.com/match' },
  openGraph: {
    title: 'GLP-1 Match Quiz — Find Your Best Medication',
    description:
      'Answer 5 questions and get a personalized GLP-1 recommendation based on your budget, goals, and preferences.',
    url: 'https://glp1comparehub.com/match',
    siteName: 'GLP1CompareHub',
    type: 'website',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630, alt: 'GLP-1 Match Quiz — GLP1CompareHub' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function MatchLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
