import Link from 'next/link';
import { topicHub, type TopicHubId } from '@/data/topic-hubs';

/**
 * "More on this subject" block: links a page up to its hub page and across to
 * the other pages in the same subject (topical-authority link rules, SEO/24 §4).
 * API is fixed: <HubSpokeLinks hub="battery" currentPath="/battery/..." max={8} />
 *
 * On the hub page itself every spoke is listed (§5.1: a hub links all of its
 * spokes). On a spoke, the `max` siblings shown are the ones that follow it in
 * the hub's list, wrapping around, so each spoke is linked from the pages just
 * before it and no spoke late in a long list is left without sibling links.
 * A page that is not in the list starts at a stable offset derived from its path.
 */
function startIndex(spokes: { href: string }[], currentPath: string): number {
  const i = spokes.findIndex((s) => s.href === currentPath);
  if (i >= 0) return i + 1;
  let h = 0;
  for (let c = 0; c < currentPath.length; c++) h = (h * 31 + currentPath.charCodeAt(c)) >>> 0;
  return spokes.length ? h % spokes.length : 0;
}

export function HubSpokeLinks({ hub, currentPath, max = 8, title }: { hub: TopicHubId; currentPath: string; max?: number; title?: string }) {
  const h = topicHub(hub);
  if (!h) return null;
  const onHub = h.hubPage === currentPath;
  const others = h.spokes.filter((s) => s.href !== currentPath);
  let links = others;
  if (!onHub && others.length > max) {
    const start = startIndex(h.spokes, currentPath);
    const ordered = [...h.spokes.slice(start), ...h.spokes.slice(0, start)].filter((s) => s.href !== currentPath);
    links = ordered.slice(0, max);
  }
  const showHub = h.hubPage && !onHub;
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
