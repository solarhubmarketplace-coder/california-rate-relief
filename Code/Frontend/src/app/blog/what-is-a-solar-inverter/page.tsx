import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'What Is a Solar Inverter? (Plain-English Guide with Types, Brands, and Lifespans)',
  description: "A plain-English explanation of solar inverters — what they do, the main types (string, micro, hybrid), how long they last, which brands are reliable, and warranty realities.",
  alternates: { canonical: '/blog/what-is-a-solar-inverter' },
  openGraph: { title: 'What Is a Solar Inverter?', description: 'Plain-English solar inverter guide.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/what-is-a-solar-inverter' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'What Is a Solar Inverter?', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function WhatIsASolarInverter() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">What Is a Solar Inverter?</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Solar Basics</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">What Is a Solar Inverter?</h1>
              <p className="text-lg text-muted-foreground">Solar panels produce DC electricity. Your home uses AC. The inverter is the device in the middle that makes it work — and it&apos;s the component most likely to need replacement during your system&apos;s lifetime.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What It Actually Does</h2>
              <p>Solar panels generate direct current (DC) electricity. Your home&apos;s outlets, lights, and appliances run on alternating current (AC) at 120V/240V and 60Hz. The inverter converts DC from the panels into AC that matches the utility grid&apos;s frequency and voltage exactly — so it can seamlessly flow into your home&apos;s breaker panel or back onto the grid.</p>
              <p>It also performs several other critical functions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Maximum Power Point Tracking (MPPT).</strong> Continuously adjusts the operating point of each panel to extract maximum power as sun conditions change.</li>
                <li><strong>Grid synchronization.</strong> Matches grid phase and frequency within milliseconds.</li>
                <li><strong>Anti-islanding protection.</strong> Shuts off within 2 seconds if the grid loses power — required by UL 1741 safety standards so utility workers aren&apos;t electrocuted by your solar backfeeding a dead line.</li>
                <li><strong>Monitoring and reporting.</strong> Modern inverters talk to a cloud app (Enphase Enlighten, SolarEdge mySolarEdge, Tesla app, Fronius SolarWeb) so you can see production in real time.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Three Main Types</h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>String Inverter.</strong> One large inverter handles all panels wired in series (&ldquo;a string&rdquo;). Lower cost but whole-system shutdown if the inverter fails. Brands: SMA, Fronius, Solis, Sungrow.</li>
                <li><strong>Microinverter.</strong> A small inverter under each panel. More expensive but independent per-panel operation. Per-panel monitoring is built in. Long warranties (25 years Enphase). Brands: Enphase (dominant), AP Systems, Hoymiles.</li>
                <li><strong>Hybrid / Battery-Ready Inverter.</strong> A string inverter that includes battery connection ports and grid-forming capability (can power your home during a grid outage with a battery). Brands: SolarEdge Energy Hub, Tesla Solar Inverter, Sol-Ark, FranklinWH.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Long Do Inverters Last?</h2>
              <p>The single most important thing to know: <strong>inverters do not last as long as solar panels.</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>String inverters</strong> typically last 10–15 years. Warranty usually 10–12 years.</li>
                <li><strong>Microinverters</strong> typically last 20–25 years. Warranty 25 years (Enphase).</li>
                <li><strong>Panels</strong> typically last 25–40 years. Warranty 25–40 years.</li>
              </ul>
              <p>For a string inverter system, budget for one inverter replacement around year 12. Cost today: $2,000–$4,000 for the inverter plus install labor.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Brand Reliability</h2>
              <p>Based on industry defect-rate data and warranty claim records:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Most reliable:</strong> Enphase (microinverters), SMA (string), Fronius (string). Low defect rates and strong warranty honor records.</li>
                <li><strong>Middle tier:</strong> SolarEdge (had QA issues 2019–2021 per SolarEdge&apos;s own investor disclosures; improved since), Tesla Solar Inverter.</li>
                <li><strong>Emerging but less proven:</strong> FranklinWH (good early reviews, limited track record), GoodWe, Solis.</li>
                <li><strong>Avoid:</strong> Any unknown-brand inverter without US technical support and parts inventory. Cheap Asian-import inverters often cannot source replacement parts in 5–8 years when you&apos;ll need them.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Goes Wrong and How to Know</h2>
              <p>Common inverter failure modes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Capacitor failure.</strong> Most common cause of inverter death — heat-accelerated aging of DC capacitors. Diagnosed by reduced AC output or inverter fault codes.</li>
                <li><strong>Communication failure.</strong> Inverter produces power but stops reporting to the monitoring app. Usually a firmware or gateway issue, not catastrophic.</li>
                <li><strong>Anti-islanding false trips.</strong> Inverter keeps shutting off when the grid is fine. Often a grid-voltage or frequency sensitivity that requires a firmware update.</li>
                <li><strong>Burned/failed microinverter.</strong> A single panel stops producing. Easy to spot in the monitoring app — one panel is dark.</li>
              </ul>
              <p>Check your monitoring app monthly. If production drops 10%+ vs same-month-prior-year, it&apos;s time to call your installer.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/string-inverter-vs-microinverter" className="text-primary underline">String Inverter vs Microinverter</Link></li>
                <li><Link href="/blog/what-happens-to-solar-panels-after-25-years" className="text-primary underline">What Happens to Solar Panels After 25 Years?</Link></li>
                <li><Link href="/best-solar-companies-california" className="text-primary underline">Best Solar Companies in California</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
