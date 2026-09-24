import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { hubForPath, type TopicHubId } from '@/data/topic-hubs';
import { JSON_ARTICLE_RELATED } from '@/data/json-article-links';

/**
 * Link block rendered under a data-driven article (article-pages.*.json).
 *
 * The JSON bodies are plain text, so these pages cannot link inside their
 * prose. This gives each one its topical links instead (SEO/24 §4): a short
 * hand-picked "next question" list where one exists, then the hub it belongs
 * to and its siblings. The hub is the one topic-hubs.ts files the page under,
 * falling back to its section's hub.
 */
export function JsonArticleLinks({ path, fallbackHub }: { path: string; fallbackHub: TopicHubId }) {
  const related = JSON_ARTICLE_RELATED[path];
  const hub = hubForPath(path) ?? fallbackHub;
  return (
    <>
      {related && <RelatedGuides heading={related.heading} intro={related.intro} links={related.links} />}
      <HubSpokeLinks hub={hub} currentPath={path} />
    </>
  );
}
