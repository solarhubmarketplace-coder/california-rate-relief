import { NextResponse } from 'next/server';

// Vercel Cron target (see vercel.json — runs every 2 days). Purpose: prevent
// the free-tier "Sun Speed" Supabase project (CRR's CRM/lead capture) from
// auto-pausing after ~7 idle days, which silently stops accepting new leads
// from ratereliefca.com. Pings CRR's existing Railway-hosted health check,
// which itself queries Supabase, so no DB credentials are needed here.
export async function GET() {
  const target = 'https://api.ratereliefca.com/api/health';

  try {
    const res = await fetch(target, { cache: 'no-store' });
    const body = await res.json().catch(() => null);

    return NextResponse.json({
      ok: res.ok,
      target,
      upstreamStatus: res.status,
      upstreamBody: body,
      checkedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        target,
        error: error instanceof Error ? error.message : String(error),
        checkedAt: new Date().toISOString(),
      },
      { status: 502 }
    );
  }
}
