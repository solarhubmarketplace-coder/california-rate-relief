import type { Metadata } from 'next';
import { ArticleHub } from '@/components/shared/ArticleRoute';

export const metadata: Metadata = {
  title: 'Home Battery Storage in California: Costs, Rebates & Payback',
  description: 'What a home battery actually costs in California, how SGIP rebates work, and whether one pays back under NEM 3.0. Independent guides, sources cited.',
  alternates: { canonical: '/battery' },
};

export default function Page() {
  return (
    <ArticleHub
      cluster="battery"
      title="Home battery storage in California"
      intro="Under NEM 3.0 the export credit is a fraction of the retail rate, which is why batteries went from optional to central. These guides cover what storage costs, which rebates you can actually get, and where the payback math does not work."
    />
  );
}
