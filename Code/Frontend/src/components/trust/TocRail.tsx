import { TableOfContents, type TocItem } from './TableOfContents';
import { WhyTrust } from './WhyTrust';

// =============================================================================
// TocRail — the right-hand rail on long content templates, desktop only.
//
// Holds the sticky "On this page" list and the short "About this site" note
// (EnergySage puts its why-trust block beside the table of contents the same
// way). Below the lg breakpoint it is not rendered at all: there is no room for
// a rail, and the templates keep their own inline contents where they had one.
//
// Use it as the second child of an element with RAIL_GRID; the grid cell
// stretches to the row height, which is what lets the inner div stick.
// =============================================================================

export const RAIL_GRID = 'lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12 xl:gap-16';

export function TocRail({
  items,
  rootId,
  minItems = 3,
}: {
  items?: TocItem[];
  rootId?: string;
  minItems?: number;
}) {
  return (
    <aside className="hidden lg:block" data-toc-ignore="">
      <div className="sticky top-24 space-y-6">
        <TableOfContents
          items={items}
          rootId={rootId}
          minItems={minItems}
          className="max-h-[calc(100vh-18rem)] overflow-y-auto pr-1"
        />
        <WhyTrust variant="compact" />
      </div>
    </aside>
  );
}
