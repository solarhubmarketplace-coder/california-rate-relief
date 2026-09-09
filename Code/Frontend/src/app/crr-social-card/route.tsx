import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#0f172a', padding: 80, color: '#f8fafc' }}>
      <div style={{ display: 'flex', color: '#2dd4bf', fontSize: 27, marginBottom: 40 }}>CALIFORNIA RATE RELIEF</div>
      <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>Understand your bill. Explore your solar options.</div>
      <div style={{ display: 'flex', fontSize: 28, color: '#cbd5e1', marginTop: 36 }}>Residential and commercial solar referrals</div>
      <div style={{ display: 'flex', fontSize: 24, color: '#2dd4bf', marginTop: 46 }}>ratereliefca.com</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
