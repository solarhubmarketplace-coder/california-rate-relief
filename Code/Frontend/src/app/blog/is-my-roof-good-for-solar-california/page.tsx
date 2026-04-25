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
  title: 'Is My Roof Good for Solar? California Checklist 2026',
  description: "How to tell if your California roof is suitable for solar — orientation, age, shading, roof material, structural strength. Plus what disqualifies a roof and what fixes are worth it.",
  alternates: { canonical: '/blog/is-my-roof-good-for-solar-california' },
  openGraph: { title: 'Is My Roof Good for Solar? California Checklist 2026', description: 'How to evaluate whether your California roof works for solar.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Is My Roof Good for Solar? California Checklist 2026',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/is-my-roof-good-for-solar-california' },
};

export default function IsMyRoofGoodForSolar() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Is My Roof Good for Solar? California Checklist 2026"} url="https://ratereliefca.com/blog/is-my-roof-good-for-solar-california" datePublished="2026-04-23" dateModified="2026-04-24" description={"How to tell if your California roof is suitable for solar — orientation, age, shading, roof material, structural strength. Plus what disqualifies a roof and what fixes are worth it."} />
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Roof Suitability</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Is My Roof Good for Solar? California Checklist 2026</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Before you commit to solar in California, your roof needs to pass a few checks. Most California residential roofs are fine — the state&apos;s sunny climate and common roof materials are well-matched to solar — but about 10-20% of homes run into at least one issue during a site survey. Here&apos;s the checklist of what makes a roof good for solar, what disqualifies it, and what&apos;s worth fixing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The 6-Point California Roof Checklist</h2>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>1. Orientation</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                South-facing is best in the Northern Hemisphere. West-facing is second-best, with a California twist — west-facing panels produce more during afternoon/early-evening peak hours when utility rates are highest. East-facing works (morning production). North-facing roofs are generally not used for solar because production is significantly reduced.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many California homes have multiple roof facets — a 40 kWh/day 7 kW system might span both south- and west-facing sections for optimal daily production spread.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>2. Pitch (roof angle)</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s latitude (roughly 32-42 degrees) means optimal solar pitch is 32-42 degrees. In practice, anything from 10 degrees to 45 degrees works fine. Flat roofs (0-5 degrees, common on commercial and some modern residential) can have panels ballast-mounted at angle or laid flat — both work. Very steep roofs (50+ degrees) are harder to install on and may require specialty mounting but are solvable.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>3. Shading</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The biggest production killer. Roof sections with heavy shade from neighboring trees or buildings during peak sun hours (roughly 9 AM-3 PM) produce dramatically less solar. Some shading is workable — microinverters like Enphase can panel-level-optimize around shade on individual panels without dragging down the whole system. But chronic deep shade is a disqualifier.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Check your roof with Google Project Sunroof (enter your address) for a quick shade analysis. Your installer will do a more rigorous on-site evaluation with tools like SolarPathfinder or drone imagery.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>4. Roof age and remaining life</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panels are typically warrantied 25 years. If your roof has less than 10-15 years of life remaining, putting solar on it means you&apos;ll pay to remove and reinstall the panels when the roof fails — $3,000-$8,000 extra. Better to replace the roof first, or use a bundled solar + roof project. See our{' '}<Link href='/blog/free-roof-replacement-with-solar-panels-california' className='text-primary hover:underline'>roof-included solar guide</Link>.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California asphalt shingle roofs last 20-30 years; tile roofs 40-70 years; metal roofs 40-70 years. Get an inspection if you&apos;re unsure of your roof&apos;s age.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>5. Roof material</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Asphalt composite shingle — easiest and cheapest. Standard install.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Clay or concrete tile (common in California Spanish-style homes) — workable but adds labor cost. Specialty mounting hooks slide under tiles. Some tiles have to be removed and replaced around mounts.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Standing seam metal — great for solar. Clamp-on mounts attach to the seams with no roof penetrations at all. Reduces leak risk.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Wood shake — California increasingly prohibits new wood shake in fire zones, and most installers won&apos;t put solar on wood shake due to fire-risk stacking. Typically requires roof replacement first.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Flat membrane (TPO, EPDM) — works with ballast-mounted or penetration-mounted systems.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-6 mb-3'>6. Structural strength</h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panels add roughly 2.5-3.5 lbs/sq ft of dead load to your roof. Most California homes built in the last 60 years can handle this without reinforcement. Older homes, homes with severe truss damage, or homes with already-stressed roofs may need structural reinforcement before solar. Your installer&apos;s structural review catches this.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Disqualifies a Roof?</h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>North-only roof with no south or west alternatives</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Heavy all-day shade from nearby trees or buildings you can&apos;t trim or remove</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Roof at end of life needing replacement (fixable — replace first)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Wood shake roof in fire-risk zone (fixable — reroof)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Extreme roof pitch or unusual geometry that can&apos;t fit a reasonable array</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span>Structural failure or severe dry rot (fixable with repair)</span></li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What If Your Roof Needs Work?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your roof needs replacement before solar can go on, consider a bundled solar + roof project. Single contractor, single roof penetration warranty, financing includes both. See{' '}<Link href='/blog/free-roof-replacement-with-solar-panels-california' className='text-primary hover:underline'>roof-included solar</Link>{' '}for how this works.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For shade from a tree on your own property, an arborist can sometimes prune strategically. For shade from a neighbor&apos;s tree, California&apos;s Solar Shade Control Act may give you limited recourse but it&apos;s complicated — consult an attorney.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The 5-Minute Self-Check</h2>
              <ol className='space-y-2 text-foreground/80 mb-6 list-decimal pl-6'>
                <li>Open Google Maps. Find your home. Look at the satellite view. Does your roof face south or west? ✓ Good start.</li>
                <li>Do you see trees shading the majority of your south/west-facing roof at midday? ✗ Issue.</li>
                <li>What material is your roof? Asphalt shingle, concrete tile, metal = ✓. Wood shake = ✗ (replace first).</li>
                <li>How old is your roof? Under 15 years = ✓. Over 20 years = replace first.</li>
                <li>Run your address through Google Project Sunroof for a preliminary solar score.</li>
              </ol>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If all five check out, your roof is almost certainly solar-ready. A California installer&apos;s on-site survey confirms the details.
              </p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Your Roof Evaluated Free</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief installers perform free on-site roof surveys and give you a production estimate specific to your orientation and shading. No obligation.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
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
