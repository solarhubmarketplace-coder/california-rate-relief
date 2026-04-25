import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: 'PG&E Rate Increase 2026: What Residential Customers Actually Pay Now',
  description:
    "PG&E's 2026 rate changes explained, current residential rates, the $24 Base Services Charge, what drove the hike, and what you can do about it.",
  alternates: { canonical: '/blog/pge-rate-increase-2026' },
  openGraph: {
    title: 'PG&E Rate Increase 2026',
    description: 'PG&E residential rate changes for 2026, plain English.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    url: 'https://ratereliefca.com/blog/pge-rate-increase-2026',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'PG&E Rate Increase 2026',
  datePublished: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
};

export default function PGERateIncrease2026() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"PG&E Rate Increase 2026: What Residential Customers Actually Pay Now"} url="https://ratereliefca.com/blog/pge-rate-increase-2026" datePublished="2026-04-24" dateModified="2026-04-24" description={"PG&E"} />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span>
              <span className="text-foreground">PG&amp;E Rate Increase 2026</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Utility Rates · California</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">PG&amp;E Rate Increase 2026: What Residential Customers Actually Pay Now</h1>
              <p className="text-lg text-muted-foreground">PG&amp;E&apos;s 2026 rate changes are a mix. A slight generation-rate decrease on paper, offset by a new $24 Base Services Charge that hit most customers harder than the headlines suggested.</p>
            </header>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Actual 2026 Numbers</h2>
              <p>PG&amp;E&apos;s average residential rate is approximately 41.46¢/kWh in 2026, down modestly from 44.36¢/kWh in late 2025. But that headline decrease is deceptive because of the new Base Services Charge.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The $24 Base Services Charge</h2>
              <p>Effective March 2026, all PG&amp;E residential customers pay a fixed $24/month Base Services Charge regardless of electricity usage. This is distinct from per-kWh generation/transmission rates — it applies even if you use zero kWh from the grid. For solar homeowners, this fixed charge is unavoidable: net metering cannot zero it out.</p>
              <p>A low-use household paying $60/month in kWh charges now pays $84/month. A solar household whose bill was $12/month now pays $36/month.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Drove the Increase</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Wildfire-mitigation infrastructure spending (undergrounding lines in HFTD zones).</li>
                <li>Legacy liability payments from 2017–2019 wildfire settlements.</li>
                <li>Rate-base recovery of grid modernization investments.</li>
                <li>The AB 205 fixed-charge restructuring approved by the CPUC, which created the Base Services Charge.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Rate Plan Options</h2>
              <p>PG&amp;E offers several time-of-use plans. If you can shift laundry, dishwasher, EV charging, and pool pumps to off-peak hours (typically before 4 PM or after 9 PM), the best-fit TOU plan can save 10–15%. Log into your PG&amp;E account and use the rate-comparison tool.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What You Can Do</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Check your rate plan.</strong> Many households are on a default plan that isn&apos;t optimal.</li>
                <li><strong>Apply for CARE or FERA.</strong> Income-qualified discounts of 18–35%.</li>
                <li><strong>Medical Baseline allowance.</strong> Additional low-tier electricity for medical-equipment households.</li>
                <li><strong>Consider solar + battery.</strong> Solar alone under NEM 3.0 has stretched payback; pairing with a battery for self-consumption recovers most of the economics. See <Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar Battery Backup in California</Link>.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/california-24-dollar-fixed-charge-explained" className="text-primary underline">The $24 California Fixed Charge Explained</Link></li>
                <li><Link href="/blog/sce-rate-increase-2026" className="text-primary underline">SCE Rate Increase 2026</Link></li>
                <li><Link href="/blog/why-is-my-pge-bill-so-high" className="text-primary underline">Why Is My PG&amp;E Bill So High?</Link></li>
                <li><Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className="text-primary underline">PG&amp;E vs SCE vs SDG&amp;E Rates Compared</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
