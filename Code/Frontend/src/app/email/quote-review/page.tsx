import type { Metadata } from 'next';
import { OfferPage } from '@/components/email/OfferPage';
export const metadata: Metadata = {
  title: 'Questions About Your Solar Quote | California Rate Relief',
  description: 'Compare the price, equipment and assumptions in a solar proposal before your next step.',
  alternates: { canonical: 'https://ratereliefca.com/email/quote-review' },
  robots: { index: false, follow: true },
};
export default function QuoteReviewPage() { return <OfferPage offer="quote-review"/>; }
