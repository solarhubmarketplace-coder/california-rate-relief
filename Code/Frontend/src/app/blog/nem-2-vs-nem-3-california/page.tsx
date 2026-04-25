import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: 'NEM 2.0 vs NEM 3.0 California: What Changed and What It Means For You',
  description:
    "NEM 2.0 and NEM 3.0 are not the same. California's 2023 tariff change cut export credits by ~75%. Here is the side-by-side comparison, grandfathering rules, and what each tariff means for your solar payback.",
  alternates: {
    canonical: '/blog/nem-2-vs-nem-3-california',
  },
  openGraph: {
    title: 'NEM 2.0 vs NEM 3.0 California: What Changed, Side-By-Side',
    description:
      "California NEM 2.0 vs NEM 3.0 — the export credit, billing structure, and payback differences that matter.",
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NEM 2.0 vs NEM 3.0 California: What Changed and What It Means For You',
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/nem-2-vs-nem-3-california' },
};

export default function Nem2vsNem3() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"NEM 2.0 vs NEM 3.0 California: What Changed and What It Means For You"} url="https://ratereliefca.com/blog/nem-2-vs-nem-3-california" datePublished="2026-04-23" dateModified="2026-04-24" description={"NEM 2.0 and NEM 3.0 are not the same. California"} />
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'>
              <Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'>
                <ArrowLeft className='h-4 w-4' />Back to Blog
              </Link>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>California Solar Policy</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                NEM 2.0 vs NEM 3.0 California: What Changed and What It Means For You
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                California&apos;s solar billing tariff changed in April 2023 from NEM 2.0 to NEM 3.0 (officially the Net Billing Tariff, or NBT). If you installed solar before April 15, 2023, you&apos;re on NEM 2.0 and grandfathered in for 20 years. If you installed after that date, you&apos;re on NEM 3.0. The difference between the two is worth tens of thousands of dollars over the life of a typical solar system. Here&apos;s the plain-English side-by-side.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Side-By-Side Comparison</h2>

              <div className='overflow-x-auto rounded-xl border border-border my-8'>
                <table className='min-w-full text-sm'>
                  <thead className='bg-muted'>
                    <tr>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>What</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>NEM 2.0</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>NEM 3.0 (NBT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>In effect</td>
                      <td className='px-4 py-3 text-foreground/80'>Jan 2016 – Apr 14, 2023</td>
                      <td className='px-4 py-3 text-foreground/80'>Apr 15, 2023 – present</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Export credit rate</td>
                      <td className='px-4 py-3 text-foreground/80'>~Retail rate (~30-40¢/kWh)</td>
                      <td className='px-4 py-3 text-foreground/80'>Avoided cost (~5-8¢/kWh avg)</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Billing structure</td>
                      <td className='px-4 py-3 text-foreground/80'>Net (consume minus export)</td>
                      <td className='px-4 py-3 text-foreground/80'>Separate (buy retail, sell wholesale)</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Battery required?</td>
                      <td className='px-4 py-3 text-foreground/80'>No (export still valuable)</td>
                      <td className='px-4 py-3 text-foreground/80'>Effectively yes (self-consumption matters)</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Solar-only payback</td>
                      <td className='px-4 py-3 text-foreground/80'>7-9 years</td>
                      <td className='px-4 py-3 text-foreground/80'>12-15 years</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Solar + battery payback</td>
                      <td className='px-4 py-3 text-foreground/80'>8-11 years</td>
                      <td className='px-4 py-3 text-foreground/80'>9-12 years</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Grandfather period</td>
                      <td className='px-4 py-3 text-foreground/80'>20 years from interconnection</td>
                      <td className='px-4 py-3 text-foreground/80'>Not yet determined</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Core Difference, In One Sentence</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 2.0, electricity your panels exported was worth essentially the same as electricity you bought from the utility. Under NEM 3.0, exported electricity is worth about one-fifth of what you pay to buy it back. That&apos;s the entire story, and everything else flows from it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What NEM 2.0 Lets You Do</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re grandfathered under NEM 2.0, your meter effectively runs backward when you export solar to the grid. Export 10 kWh at 40¢/kWh during the day, earn $4 in credit. Consume 10 kWh at 40¢/kWh at night, pay $4. The economics are symmetric. Oversizing your solar system to maximize export was a rational strategy, and a correctly sized NEM 2.0 system can offset 90%+ of your annual electric bill without needing a battery.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your 20-year grandfathering runs from the date your system was officially interconnected (PTO — Permission to Operate), not from the installation date. A system that got PTO on March 15, 2023 stays on NEM 2.0 until March 15, 2043. After that, you transition to whatever tariff is in effect at that time.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What NEM 3.0 Forces You To Do</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 3.0, the asymmetric pricing between exported and consumed electricity changes the entire system design strategy. Self-consumption — using your solar production in real time, or storing it in a battery for evening use — is now dramatically more valuable than exporting to the grid.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A NEM 3.0 solar-only system still works, but only offsets 40-60% of typical California consumption because most production happens during the day when nobody&apos;s home to use it. Adding a battery brings self-consumption up to 70-90%, which restores most of the economics but adds $10,000-$15,000 to the system cost (partially offset by the SGIP rebate and the federal tax credit on storage).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Can You Keep NEM 2.0 When You Expand Your System?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Partially. Adding a battery to an existing NEM 2.0 system generally preserves your NEM 2.0 status — the battery is a storage add, not new generation capacity, so it doesn&apos;t trigger a tariff switch.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Adding <em>panels</em> gets more complicated. A small capacity expansion (typically under 1 kW or 10% of existing size, whichever is larger) usually stays on NEM 2.0. Above that threshold, the new capacity moves to NEM 3.0 while the original system stays on NEM 2.0 — a &quot;hybrid&quot; arrangement that utilities handle but which adds billing complexity. Rules vary by utility (PG&amp;E, SCE, SDG&amp;E each have slightly different implementations); confirm with your utility before adding panels.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is NEM 2.0 better than NEM 3.0?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, significantly. NEM 2.0 credits exported solar at retail rate (~30-40¢/kWh in California). NEM 3.0 credits it at avoided cost (~5-8¢/kWh). Same system, very different savings.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Am I on NEM 2.0 or NEM 3.0?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Check your interconnection date (PTO date). Before April 15, 2023 = NEM 2.0. On or after = NEM 3.0. Your utility bill also lists the applicable tariff.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can new solar customers still get NEM 2.0?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>No. NEM 2.0 closed to new interconnections on April 14, 2023. All new California residential solar interconnections are under NEM 3.0.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does NEM 3.0 make solar not worth it?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Solar still works under NEM 3.0, especially with a battery. Payback is slower (9-12 years with storage vs 7-9 under NEM 2.0), but still strong for most California homeowners paying $200+ per month. See our{' '}<Link href='/blog/nem-3-california-still-worth-it' className='text-primary hover:underline'>NEM 3.0 worth-it analysis</Link>{' '}for the full breakdown.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Find Out What NEM 3.0 Means For Your Home</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief runs the specific numbers for your utility, usage, and roof under the current Net Billing Tariff. Free eligibility check in 60 seconds.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="nem3" /></div>
    </PublicLayout>
  );
}
