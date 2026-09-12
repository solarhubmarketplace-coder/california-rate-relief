import type { Metadata } from 'next';
import { OfferPage } from '@/components/email/OfferPage';
export const metadata: Metadata = {
  title: 'Understand Your Electric Bill | California Rate Relief',
  description: 'Check your electricity bill and ask about solar options for your home.',
  alternates: { canonical: 'https://ratereliefca.com/email/bill-review' },
  robots: { index: false, follow: true },
};
export default function BillReviewPage() { return <OfferPage offer="bill-review"/>; }
