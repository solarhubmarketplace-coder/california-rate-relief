import { NextResponse } from 'next/server';
import {
  GLP1_PRICING_CAPTURE_DATE,
  glp1PricingCorrections,
  glp1PricingMethod,
  glp1ProviderPriceRecords,
} from '@/lib/glp1-provider-pricing';

export const dynamic = 'force-static';

export function GET() {
  return NextResponse.json(
    {
      name: 'GLP-1 Telehealth Advertised Price Dataset',
      capturedOn: GLP1_PRICING_CAPTURE_DATE,
      methodology: glp1PricingMethod,
      corrections: glp1PricingCorrections,
      records: glp1ProviderPriceRecords,
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      },
    }
  );
}
