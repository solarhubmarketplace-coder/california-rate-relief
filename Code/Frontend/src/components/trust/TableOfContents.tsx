'use client';

import { useEffect, useState } from 'react';

// =============================================================================
// TableOfContents — "On this page", generated from the page's own headings.
//
// Two ways to feed it:
//   items   — a list the template already knows (ArticleRenderer builds one
//             from its data), rendered on the server.
//   rootId  — the id of the element holding the body; every <h2> inside it
//             becomes an entry after hydration, so a section another editor
//             adds to a template shows up without anyone touching this list.
//             Headings inside [data-toc-ignore] (the inquiry form) are skipped.
//             A heading with no id gets one derived from its text; a heading
//             with data-toc-label is listed under that shorter label.
//
// Renders nothing below `minItems` entries: a short page does not need one.
// The sticky positioning belongs to the rail that holds this (TocRail), so
// the same component can also sit inline.
// =============================================================================

export type TocItem = { id: string; label: string };

function slug(text: string): string {
  return (
    text
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'section'
  );
}

export interface TableOfContentsProps {
  items?: TocItem[];
  rootId?: string;
  minItems?: number;
  title?: string;
  className?: string;
}

export function TableOfContents({
  items,
  rootId,
  minItems = 3,
  title = 'On this page',
  className = '',
}: TableOfContentsProps) {
  const [scanned, setScanned] = useState<TocItem[]>([]);
  const [active, setActive] = useState('');
  const provided = items && items.length > 0 ? items : null;
  const list = provided ?? scanned;

  useEffect(() => {
    if (provided || !rootId) return;
    const root = document.getElementById(rootId);
    if (!root) return;
    const found: TocItem[] = [];
    root.querySelectorAll('h2').forEach((h) => {
      if (h.closest('[data-toc-ignore]')) return;
      // data-toc-label lets a long heading ("Sources checked September 12,
      // 2026") carry a short rail label ("Sources").
      const label = (h.dataset.tocLabel || h.textContent || '').replace(/\s+/g, ' ').trim();
      if (!label) return;
      if (!h.id) {
        const base = `section-${slug(label)}`;
        let id = base;
        let n = 2;
        while (document.getElementById(id)) id = `${base}-${n++}`;
        h.id = id;
      }
      found.push({ id: h.id, label });
    });
    setScanned(found);
  }, [provided, rootId]);

  useEffect(() => {
    if (list.length === 0 || typeof IntersectionObserver === 'undefined') return;
    const targets = list
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // The band between the sticky header and the top third of the screen.
      { rootMargin: '-96px 0px -66% 0px', threshold: 0 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [list]);

  if (list.length < minItems) return null;

  return (
    <nav aria-label={title} className={className}>
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{title}</p>
      <ol className="mt-3 border-l border-border text-sm">
        {list.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-3 leading-snug transition-colors ${
                  isActive
                    ? 'border-primary font-semibold text-foreground'
                    : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
