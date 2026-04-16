import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'How Long Do Solar Panels Last? (2026 Lifespan & Degradation Data)',
  description:
    'Solar panels last 30-40+ years in real-world use. Learn about degradation rates, warranties, inverter lifespan, and why California&apos;s climate gives panels an advantage.',
  alternates: {
    canonical: '/blog/how-long-do-solar-panels-last',
  },
  openGraph: {
    title:
      'How Long Do Solar Panels Last? (2026 Lifespan & Degradation Data)',
    description:
      'Solar panels last 30-40+ years. Here&apos;s what you actually need to know about lifespan, degradation, and warranties.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'How Long Do Solar Panels Last? (2026 Lifespan & Degradation Data)',
  description:
    'Solar panels last 30-40+ years in real-world use with predictable degradation rates. Learn about warranties, inverter replacement, and California climate advantages.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/blog/how-long-do-solar-panels-last',
  },
};

export default function HowLongDoSolarPanelsLast() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Blog
              </Link>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Education
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                How Long Do Solar Panels Last? (2026 Lifespan &amp; Degradation Data)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>10 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The short answer: solar panels last 30 to 40+ years in real-world use. But that&apos;s not the full story. The long answer involves understanding degradation rates, what happens after year 25, inverter lifespan, how warranties actually work, and why California&apos;s dry climate gives your panels a significant advantage. If you&apos;re deciding whether to invest in solar or evaluating a current system, you need to understand these facts.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Real Lifespan: 30-40+ Years
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panels degrade predictably and gradually. They don&apos;t fail catastrophically at year 25 or year 30. Instead, they slowly lose output efficiency over decades. The industry standard &quot;useful life&quot; is 25 to 30 years, but that&apos;s conservative. The real-world data is more encouraging.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The National Renewable Energy Laboratory (NREL) has tracked solar installations from the 1970s and 1990s. Those panels — now 35+ years old — still produce electricity at 80 to 90 percent of their original capacity. Some degrade even more slowly. This means a typical modern residential panel installed in 2026 with an initial 400-450 watt rating will likely be producing 300+ watts when you&apos;re 75 years old.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For context, most homeowners keep a house for 10 to 15 years on average. Even if you sell, a functioning solar system is an asset — not a liability. The panels will still be generating power, and the next owner gets the benefit (or takes over the PPA contract if that applies).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Understanding Degradation: The Real Numbers
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Degradation is the annual percentage loss of power output. This isn&apos;t a failure — it&apos;s a natural electrochemical process. The industry average is approximately 0.5 percent per year. That means your panel loses half of 1 percent of its maximum output annually.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>What does this look like in practice?</strong> A 450-watt panel loses about 2.25 watts in year one. After 10 years, it&apos;s producing roughly 425 watts (95% of original). After 25 years, it&apos;s producing about 388 watts (86% of original). After 40 years, it&apos;s producing roughly 351 watts (78% of original). These numbers assume average quality panels and typical California conditions.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Premium panels from tier-one manufacturers (Panasonic, Sunpower, Enphase) often degrade at 0.25 to 0.35 percent annually, extending the lifespan advantage. Budget panels sometimes degrade faster — up to 0.7 percent per year — but still last decades.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The key insight: degradation is slow, predictable, and the panels remain functional for 30 to 40+ years. They won&apos;t suddenly stop working at year 26.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What About Warranties? (The Fine Print Matters)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most solar panels come with two warranties: a product warranty and a performance warranty.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Product warranty</strong> covers defects in materials and workmanship — cracks, delamination, corrosion, manufacturing flaws. The industry standard is 10 years, though many manufacturers now offer 12 to 15 years. Some premium brands offer 25 years. This warranty protects you from panels that fail prematurely due to poor construction.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Performance warranty</strong> guarantees that your panel will maintain a minimum output level over time. The standard promise is that your panel will produce at least 90 percent of its rated output after 10 years, and at least 80 percent after 25 years. Most manufacturers guarantee 25 years, though some now extend this to 30, 35, or even 40 years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is critical: if your panels degrade faster than the warranty allows, the manufacturer replaces them at no cost. Given that most panels degrade at 0.5 percent annually — which means they&apos;ll hit 80 percent at year 40, not year 25 — the warranty is actually protective insurance for worst-case scenarios, not an expiration date.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Part People Forget: Inverters
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s what most homeowners don&apos;t think about: panels last 30+ years, but inverters don&apos;t.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                An inverter converts the DC power from panels into AC power your home uses. String inverters (one box for the whole system) typically last 10 to 15 years and cost $1,000 to $3,000 to replace. Microinverters (one per panel) last 20 to 25 years but are cheaper per unit to replace ($200 to $400 each). Battery inverters (if you have storage) typically last 10 to 15 years as well.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Budget for replacement.</strong> If you&apos;re keeping your solar system for 30 years, plan on replacing the main inverter at least once, possibly twice. That&apos;s $1,500 to $5,000 out of pocket — roughly $50 to $165 per year over the system lifetime. It&apos;s worth factoring into your long-term ROI calculations, but it doesn&apos;t change the fundamental math. Solar still makes financial sense; you just account for this maintenance cost.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California&apos;s Climate Advantage
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s dry climate is actually an advantage for panel longevity. Moisture and temperature cycling are the primary drivers of panel degradation. Coastal areas (San Francisco, San Diego) with salt air and humidity see slightly higher degradation due to corrosion risk. Desert areas (Inland Empire, San Bernardino) with extreme heat cycles see moderate degradation. But even then, the numbers are stable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                NREL data for California panels shows coastal areas degrade at roughly 0.4 percent annually, inland areas at about 0.55 percent. Compare this to humid regions (Florida, Louisiana) where degradation can reach 0.65 to 0.8 percent annually, and you see that California is a favorable geography for solar longevity.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Should You Actually Replace Panels?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The honest answer: almost never for age alone. You replace panels if they physically fail (cracked glass, internal delamination, wiring damage), if the roof needs work and panels are in the way, if you&apos;re upgrading to a higher-efficiency system to increase output, or if you&apos;re downsizing a home.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A 35-year-old panel producing at 80 percent capacity can still offset meaningful electricity costs. Replacement isn&apos;t economically rational unless new panels are significantly cheaper and efficiency gains justify the labor cost.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The one scenario where replacement makes sense: if a performance warranty claim is valid (degradation exceeding the manufacturer&apos;s guarantee), you get replacement panels at no cost. That&apos;s different from planned obsolesce — it&apos;s manufacturer liability if they fail to meet their promise.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panels are one of the longest-lasting residential systems you can install. A modern panel will produce useful electricity for 30 to 40+ years, degrading at a predictable and manageable rate. Warranties protect you against premature failure. The inverter, not the panels, is what you&apos;ll likely replace once over the system&apos;s lifetime. California&apos;s climate is favorable for panel longevity compared to humid regions. If you&apos;re evaluating solar, the lifespan question should not be a blocker — the economics and whether the system offsets your actual electricity costs are what matter.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Ready to Explore Solar for the Long Term?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re curious what a 30-year solar investment might look like for your home, you can check your eligibility with the California Rate Relief Program in about 60 seconds.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Articles
              </Link>
              <Link
                href='/blog/solar-panel-inspection-california'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Next Article
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
