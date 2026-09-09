import {
  GLP1_PRICING_CAPTURE_DATE,
  glp1ProviderPriceRecords,
} from '@/lib/glp1-provider-pricing';

export const dynamic = 'force-static';

const csvCell = (value: string) => `"${value.replaceAll('"', '""')}"`;

export function GET() {
  const header = [
    'provider',
    'public_price_status',
    'headline_price',
    'published_price_lines',
    'listed_as_included',
    'caveat',
    'source_url',
    'checked_on',
  ];

  const rows = glp1ProviderPriceRecords.map((record) => [
    record.provider,
    record.publicPriceStatus,
    record.headlinePrice,
    record.priceLines.join(' | '),
    record.included.join(' | '),
    record.caveat,
    record.sourceUrl,
    record.checkedOn,
  ]);

  const csv = [header, ...rows]
    .map((row) => row.map((value) => csvCell(value)).join(','))
    .join('\n');

  return new Response(`${csv}\n`, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="glp1-provider-prices-${GLP1_PRICING_CAPTURE_DATE}.csv"`,
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
