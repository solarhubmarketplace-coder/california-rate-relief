import type { Metadata } from 'next';
import { ArticleHub } from '@/components/shared/ArticleRoute';

export const metadata: Metadata = {
  title: 'Solar Problems & Scams in California: Honest Guides',
  description: 'How solar sales tactics work, what a true-up bill is, why your bill is still high after solar, and what to do if a contractor took your money. Independent, sourced.',
  alternates: { canonical: '/solar-problems' },
};

/*
 * Schema and CTA both come from <ArticleHub/> (src/components/shared/ArticleRoute.tsx):
 *   - CollectionPage + ItemList of the cluster's guides. This route is an index,
 *     not an article — the writing is on the child pages, each of which emits its
 *     own Article node. Do not add an Article here.
 *   - <Header/> for the sitewide eligibility CTA and <ArticleCTA/> for the
 *     in-body one.
 */
export default function Page() {
  return (
    <ArticleHub
      cluster="problems"
      title="What goes wrong with solar, and why"
      intro="Most complaints about solar are not about the panels. They come from how it was sold, what the contract actually said, and expectations nobody corrected. We do not install anything, so we have no reason to soften any of it."
    />
  );
}
