import type { Metadata } from 'next';
import {
  ArticleRoute,
  articleMetadata,
  articleStaticParams,
} from '@/components/shared/ArticleRoute';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { JSON_ARTICLE_RELATED } from '@/data/json-article-links';
import { BATTERY_TOPIC_LINKS } from './topic-links';

export function generateStaticParams() {
  return articleStaticParams('battery');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata('battery', slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = BATTERY_TOPIC_LINKS[slug];
  // Cross-lane "next question" links for JSON pages live in
  // json-article-links.ts (the other JSON routes render them through
  // JsonArticleLinks). Show them here too, minus any link the topic block
  // above already carries.
  const topicHrefs = new Set(topic?.links.map((l) => l.href) ?? []);
  const related = JSON_ARTICLE_RELATED[`/battery/${slug}`];
  const relatedLinks = related?.links.filter((l) => !topicHrefs.has(l.href)) ?? [];
  // JSON bodies are plain text, so each guide's topical links (up to the hub,
  // across to siblings, out to NEM / incentives / cost) render under the
  // article instead of inline.
  const after = (
    <>
      {topic && (
        <RelatedGuides heading={topic.heading} intro={topic.intro} links={topic.links} />
      )}
      {related && relatedLinks.length > 0 && (
        <RelatedGuides heading={related.heading} intro={related.intro} links={relatedLinks} />
      )}
      <HubSpokeLinks hub="battery" currentPath={`/battery/${slug}`} />
    </>
  );
  return (
    <ArticleRoute
      cluster="battery"
      slug={slug}
      backHref="/battery"
      backLabel="All battery guides"
      after={after}
    />
  );
}
