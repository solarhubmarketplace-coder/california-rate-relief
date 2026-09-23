import { COST_INDEX_UPDATED, buildCostIndexCsv } from '@/data/solar-cost-index';

// =============================================================================
// /california-solar-cost-index/data.csv — the index table as a file.
//
// Built at build time (force-static) from the same rows the page renders, so
// the download cannot disagree with the table. One row per city, with the
// city's own wording and every source URL. CRR-only: src/middleware.ts 404s
// this path on the other hosts served from this codebase.
// =============================================================================

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildCostIndexCsv(), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="california-solar-cost-index-${COST_INDEX_UPDATED}.csv"`,
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
