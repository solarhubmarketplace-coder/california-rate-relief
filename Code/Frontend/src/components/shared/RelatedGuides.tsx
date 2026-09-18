import Link from 'next/link';

/**
 * In-body editorial link block.
 *
 * Why this exists: the 2026-09-18 crawl measured 30 pages under
 * `/solar-problems` (21) and `/battery` (9) with zero inbound content links
 * from anywhere else on the site — all 216 of their internal links were
 * circular inside their own subtree. Phase 1 of the California strategy of
 * record (2026-09-17) connects them to the sections that hold the site's
 * authority: `/blog`, the `/solar-companies` city pages and `/commercial-solar`.
 *
 * The block renders inside the article body, so `scripts/crawl-linkgraph.mjs`
 * counts these as content links rather than site chrome. Each donor page passes
 * its own short list; nothing here is templated across the whole site, which
 * keeps every href well under the crawler's 80% ubiquity threshold.
 */

export type RelatedGuideLink = {
  href: string;
  label: string;
  /** One clause on what the reader will find. Optional. */
  note?: string;
};

export function RelatedGuides({
  heading,
  intro,
  links,
}: {
  heading: string;
  intro?: string;
  links: RelatedGuideLink[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="mt-10 rounded-xl border border-border bg-card p-5 md:p-6">
      <h2 className="text-xl font-bold text-foreground mb-2 tracking-tight">
        {heading}
      </h2>
      {intro ? (
        <p className="text-sm text-muted-foreground mb-4">{intro}</p>
      ) : null}
      <ul className="list-disc pl-5 space-y-2">
        {links.map((l) => (
          <li key={l.href} className="text-sm leading-relaxed">
            <Link href={l.href} className="text-primary hover:underline font-medium">
              {l.label}
            </Link>
            {l.note ? (
              <span className="text-foreground/70"> — {l.note}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RelatedGuides;
