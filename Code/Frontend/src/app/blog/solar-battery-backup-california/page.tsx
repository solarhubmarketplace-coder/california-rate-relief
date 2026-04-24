import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Battery Backup in California: Cost, SGIP Rebate, and Whether It\'s Worth It (2026)',
  description:
    'Solar battery backup cost in California, SGIP rebate explained, Powerwall vs Enphase vs Franklin, PSPS preparedness, and NEM 3.0 self-consumption math.',
  alternates: { canonical: '/blog/solar-battery-backup-california' },
  openGraph: {
    title: 'Solar Battery Backup California (2026)',
    description: 'Cost, rebates, and whether a solar battery pays off in California under NEM 3.0.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    url: 'https://ratereliefca.com/blog/solar-battery-backup-california',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Solar Battery Backup in California: Cost, SGIP Rebate, and Whether It\'s Worth It',
  datePublished: '2026-04-24',
  dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/solar-battery-backup-california' },
};

export default function SolarBatteryBackupCA() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Solar Battery Backup California</span>
            </nav>

            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Battery Storage · California</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Solar Battery Backup in California: Cost, SGIP Rebate, and Whether It&apos;s Worth It
              </h1>
              <p className="text-lg text-muted-foreground">
                Under NEM 3.0 and with PSPS outages a yearly reality, battery storage went from luxury to near-essential for many California solar homeowners. Here&apos;s the actual 2026 math.
              </p>
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="p-4 rounded-lg border border-border bg-card text-sm">
                <strong>TL;DR:</strong> A residential solar battery in California runs $10,000–$18,000 installed for a single Powerwall-class unit (~13 kWh). The federal 30% tax credit plus California&apos;s SGIP rebate can cut that to $6,500–$13,000 net. Under NEM 3.0, batteries also boost solar self-consumption value, often enough to justify the cost purely on bill savings, before counting outage protection.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What a Residential Battery Actually Costs (2026)</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Battery</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Capacity</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Installed cost (CA)</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">After 30% ITC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Tesla Powerwall 3</td>
                      <td className="text-center py-3 px-3">13.5 kWh</td>
                      <td className="text-center py-3 px-3">$11,000–$15,000</td>
                      <td className="text-center py-3 px-3">$7,700–$10,500</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Enphase IQ Battery 10C</td>
                      <td className="text-center py-3 px-3">10 kWh</td>
                      <td className="text-center py-3 px-3">$10,000–$14,000</td>
                      <td className="text-center py-3 px-3">$7,000–$9,800</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Franklin WH aPower 2</td>
                      <td className="text-center py-3 px-3">15 kWh</td>
                      <td className="text-center py-3 px-3">$13,000–$17,000</td>
                      <td className="text-center py-3 px-3">$9,100–$11,900</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">FranklinWH + 2nd battery stack</td>
                      <td className="text-center py-3 px-3">30 kWh</td>
                      <td className="text-center py-3 px-3">$22,000–$28,000</td>
                      <td className="text-center py-3 px-3">$15,400–$19,600</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">SGIP Rebate Explained</h2>
              <p>
                California&apos;s Self-Generation Incentive Program (SGIP) is administered by the CPUC and pays a rebate on battery storage at one of two tiers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>General market tier.</strong> ~$150–$200/kWh of battery capacity. A 13.5 kWh Powerwall pulls roughly $2,000–$2,700 off the install.</li>
                <li><strong>Equity / Equity Resiliency tier.</strong> Up to 100% of the battery cost for low-income households, medical-baseline customers, or homes in fire-prone Tier 2 and Tier 3 HFTD zones. Confirm eligibility with your installer, the paperwork is non-trivial.</li>
              </ul>
              <p>
                Stacking SGIP with the 30% federal ITC is allowed. Order of operations: installer deducts SGIP at installation (or files for reimbursement on your behalf), and the federal ITC applies to your net out-of-pocket cost.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The NEM 3.0 Battery Math</h2>
              <p>
                Under NEM 3.0, exported solar earns only 5–8¢/kWh back from your utility. But self-consumed solar saves you the full 40¢+/kWh retail rate (in PG&amp;E/SCE/SDG&amp;E territory). A battery captures solar during the day and releases it during peak evening hours — effectively converting 5¢ export value into 40¢+ savings.
              </p>
              <p>
                For a typical 10 kW system exporting ~4,000 kWh/year under NEM 3.0 pre-battery, a battery can shift ~3,000 kWh of that into peak-hour self-consumption. That&apos;s roughly <strong>$1,000–$1,200/year in additional savings</strong> purely from the arbitrage — before counting any value for outage protection. Over a 10-year battery warranty, that&apos;s $10,000–$12,000 of recovered value on a $7,000–$10,000 net battery cost.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">PSPS and Wildfire Preparedness</h2>
              <p>
                Pacific Gas &amp; Electric&apos;s Public Safety Power Shutoffs (PSPS) have triggered more than 2 million household outages since 2019, many lasting 2–5 days. A battery sized at 10–15 kWh comfortably powers a well-managed home (refrigeration, lighting, internet, medical devices, limited AC) for 24–36 hours. Pair with solar and the battery can recharge each day — indefinite off-grid operation during a PSPS event is realistic for most homes.
              </p>
              <p>
                For homes in Tier 2 or Tier 3 High Fire-Threat Districts (HFTD), the SGIP Equity Resiliency Budget specifically subsidizes batteries for this use case. Check your address against the{' '}
                <a href="https://ia.cpuc.ca.gov/firemap/" target="_blank" rel="noopener noreferrer" className="text-primary underline">CPUC Fire-Threat Map</a>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Battery Sizing for a California Home</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Small (5–10 kWh):</strong> Covers essential circuits (fridge, lights, medical equipment) for 12–18 hours. Good for bill savings + modest outage coverage.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Medium (13–15 kWh. Single Powerwall or FranklinWH):</strong> Whole-house coverage excluding AC and pool pump for 24 hours.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Large (26–30 kWh, dual Powerwall or Franklin stack):</strong> Full-home coverage including AC for 24+ hours. Needed for homes running pool pumps, two EVs, or medical baseline loads.</div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Powerwall vs Enphase vs Franklin</h2>
              <p>Brief orientation — full reviews of each battery are on the way.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tesla Powerwall 3.</strong> Single-unit pricing strongest, tight integration with Tesla Solar or aftermarket retrofit via Tesla app. Warranty 10 years / unlimited cycles. Limited installer network in some CA regions.</li>
                <li><strong>Enphase IQ Battery.</strong> Modular 5 kWh and 10 kWh units — you buy exactly the capacity you need. Best fit for Enphase microinverter solar arrays (one app, one vendor). Warranty 15 years.</li>
                <li><strong>FranklinWH aPower 2.</strong> Largest single-unit capacity (15 kWh), highest continuous power output (10 kW). Gaining share for whole-home backup. Warranty 15 years / unlimited cycles.</li>
                <li><strong>Generac PWRcell.</strong> Popular with Generac generator customers. Modular 9–18 kWh. Warranty 10 years.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Battery Warranty Red Flags</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div><strong>Throughput limits.</strong> Some warranties cap total kWh delivered over life. Read the fine print. If you cycle daily, confirm you stay within the throughput allowance over 10 years.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div><strong>Minimum state-of-charge requirements.</strong> Some warranties require the battery to never drop below 20% — which conflicts with PSPS outage use if you actually want to use the battery in an emergency.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div><strong>Warranty transfer fees.</strong> If you sell your home, some battery warranties require a transfer fee ($300–$500) or fail entirely. Verify before buying.</div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/tesla-powerwall-installers-california" className="text-primary underline">Tesla Powerwall Installers in California</Link></li>
                <li><Link href="/blog/nem-3-california-still-worth-it" className="text-primary underline">Is Solar Still Worth It Under NEM 3.0?</Link></li>
                <li><Link href="/blog/do-solar-panels-work-during-power-outage-california" className="text-primary underline">Do Solar Panels Work During a Power Outage?</Link></li>
                <li><Link href="/commercial-solar/sgip-battery-storage" className="text-primary underline">SGIP Battery Storage (Commercial Deep Dive)</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
