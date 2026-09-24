import type { Metadata } from 'next';
import {
  ArticleRoute,
  articleMetadata,
  articleStaticParams,
} from '@/components/shared/ArticleRoute';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
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
  // JSON bodies are plain text, so each guide's topical links (up to the hub,
  // across to siblings, out to NEM / incentives / cost) render under the
  // article instead of inline.
  const after = (
    <>
      {topic && (
        <RelatedGuides heading={topic.heading} intro={topic.intro} links={topic.links} />
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
