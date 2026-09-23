import Link from 'next/link';
import { topicHub, type TopicHubId } from '@/data/topic-hubs';

/**
 * "More on this subject" block: links a page up to its hub page and across to
 * the other pages in the same subject (topical-authority link rules, SEO/24 §4).
 * API is fixed: <HubSpokeLinks hub="battery" currentPath="/battery/..." max={8} />
 */
export function HubSpokeLinks({ hub, currentPath, max = 8, title }: { hub: TopicHubId; currentPath: string; max?: number; title?: string }) {
  const h = topicHub(hub);
  if (!h) return null;
  const links = h.spokes.filter((s) => s.href !== currentPath).slice(0, max);
  const showHub = h.hubPage && h.hubPage !== currentPath;
  if (!showHub && links.length === 0) return null;
  return (
    <nav aria-label={`More on ${h.label}`} className="mt-10 rounded-lg border border-border bg-muted/30 p-5">
      <h2 className="text-lg font-semibold mb-3">{title ?? `More on ${h.label.toLowerCase()}`}</h2>
      {showHub && (
        <p className="mb-3">
          <Link href={h.hubPage!} className="font-medium text-primary underline-offset-4 hover:underline">
            {h.hubPageLabel ?? h.label}: the full guide
          </Link>
        </p>
      )}
      {links.length > 0 && (
        <ul className="grid gap-2 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-primary underline-offset-4 hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default HubSpokeLinks;
