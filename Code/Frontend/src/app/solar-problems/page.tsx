import type { Metadata } from 'next';
import { ArticleHub } from '@/components/shared/ArticleRoute';
import { articlesInCluster, articleHref } from '@/data/article-pages';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { topicHub } from '@/data/topic-hubs';

export const metadata: Metadata = {
  title: "Solar Problems & Scams in California: Honest Guides",
  description: "How solar sales tactics work, what a true-up bill is, why your bill stays high after solar, and what to do if a contractor took your money. Sourced.",
  alternates: { canonical: '/solar-problems' },
};

/*
 * Schema and CTA both come from <ArticleHub/> (src/components/shared/ArticleRoute.tsx):
 *   - CollectionPage + ItemList of the cluster's guides. This route is an index,
 *     not an article — the writing is on the child pages, each of which emits its
 *     own Article node. Do not add an Article here.
 *   - <Header/> for the sitewide eligibility CTA, and HeroQuickCheck after the
 *     intro with SolarInquiry at the end as the in-body ask (2026-09-23).
 *
 * This page is also the hub of the "rules, permits and consumer protection"
 * topic (SEO/24). ArticleHub lists only the JSON guides, so the hub's other
 * spokes (hand-written pages such as the lawsuit and attorney guides) are
 * listed under it from src/data/topic-hubs.ts.
 */
export default function Page() {
  const jsonPaths = new Set(articlesInCluster('problems').map((p) => articleHref(p)));
  const otherSpokes = (topicHub('rules_permits')?.spokes ?? []).filter((s) => !jsonPaths.has(s.href));
  return (
    <ArticleHub
      cluster="problems"
      title="What goes wrong with solar, and why"
      intro="Most complaints about solar are not about the panels. They come from how it was sold, what the contract actually said, and expectations nobody corrected. We do not install anything, so we have no reason to soften any of it."
      after={
        <RelatedGuides
          heading="Disputes, lawsuits and the rules that apply"
          intro="When a problem needs more than a phone call: legal options, and the rules a project has to meet."
          links={otherSpokes}
        />
      }
    />
  );
}
