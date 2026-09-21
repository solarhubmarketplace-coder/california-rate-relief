import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { BillComparison } from '@/components/growth/BillComparison';

const sourceLink = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export const metadata: Metadata = {
  title: 'Why Is My SDG&E Bill So High? A Bill-First Checklist',
  description: 'Compare billing days, daily kWh, rate plan, delivery and the generation line on your SDG&E bill before deciding whether a project belongs in the conversation.',
  alternates: { canonical: '/blog/why-is-my-sdge-bill-so-high' },
  openGraph: {
    title: 'Why Is My SDG&E Bill So High? A Bill-First Checklist',
    description: 'A bill-first SDG&E diagnosis: days, kWh, rate plan, delivery and generation.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    modifiedTime: '2026-09-20T00:00:00Z',
    url: 'https://ratereliefca.com/blog/why-is-my-sdge-bill-so-high',
  },
};

export default function WhyIsMySDGEBillSoHigh() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant='Article' domain='crr' headline='Why Is My SDG&E Bill So High? A Bill-First Checklist' url='https://ratereliefca.com/blog/why-is-my-sdge-bill-so-high' datePublished='2026-04-24' dateModified='2026-09-20' description='Compare billing days, daily kWh, rate plan, delivery and the generation line on your SDG&E bill before deciding whether a project belongs in the conversation.' />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span><Link href='/blog' className='hover:text-primary'>Blog</Link><span>/</span><span className='text-foreground'>Why Is My SDG&amp;E Bill So High?</span>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>SDG&amp;E · Billing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Why Is My SDG&amp;E Bill So High?</h1>
              <p className='text-lg text-muted-foreground'>Start with the bill. A higher total can come from more billing days, more daily use, a different rate plan, delivery charges, generation charges, or more than one of those at once.</p>
            </header>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>Start with two bills from comparable periods</h2>
              <p>A bill total alone does not identify the cause. Pull the current bill and the same season from last year if you have it. Record billing days, total kWh, electric charges, rate-plan name, effective dates, and the generation provider shown on the statement. A larger bill over more days is not the same change as a larger bill over the same number of days.</p>
              <div className='not-prose my-8'><BillComparison utilityName='SDG&E' /></div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Read the change in this order</h2>
              <ol className='list-decimal pl-6 space-y-3'>
                <li><strong>Billing days and kWh per day.</strong> Divide total kWh by billing days on each bill. This separates a longer cycle from a change in daily use.</li>
                <li><strong>Rate plan and timing.</strong> Match the plan name on the bill to <a href='https://www.sdge.com/residential/pricing-plans' target='_blank' rel='noopener noreferrer' className={sourceLink}>SDG&amp;E&apos;s current residential pricing plans</a>. Use the effective schedule and the hours your household actually uses power; do not substitute a utility-wide average for the account&apos;s plan.</li>
                <li><strong>Delivery and generation.</strong> Keep SDG&amp;E transmission, delivery and other SDG&amp;E charges separate from the generation line. The bill identifies the arrangement that applies to the account.</li>
                <li><strong>Fixed and solar-related items.</strong> Read each recurring charge, credit, import, export, and True-Up line as its own item. A solar bill needs its own statement review; generation credits and a system proposal do not eliminate every charge automatically.</li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Confirm whether a community-choice provider is on the bill</h2>
              <p>For an enrolled <a href='https://sdcommunitypower.org/understanding-your-bill/' target='_blank' rel='noopener noreferrer' className={sourceLink}>San Diego Community Power</a> account, SDCP supplies generation while SDG&amp;E continues consolidated billing and delivery. SDCP&apos;s generation charge replaces the SDG&amp;E generation charge; it is not a second generation purchase. That arrangement applies only when the bill shows enrollment.</p>
              <p>For an enrolled <a href='https://thecleanenergyalliance.org/understanding-your-bill-with-cea/' target='_blank' rel='noopener noreferrer' className={sourceLink}>Clean Energy Alliance</a> account, SDG&amp;E continues billing and delivery while CEA replaces the SDG&amp;E generation line. CEA membership of a city does not establish that a particular account is enrolled. The bill does.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Use the account record before changing a plan</h2>
              <p>Review your current statement and account history through <a href='https://myaccount.sdge.com/' target='_blank' rel='noopener noreferrer' className={sourceLink}>SDG&amp;E My Account</a>, then compare the applicable plan schedule with the hours your household uses electricity. A rate-plan decision is separate from a solar or battery decision.</p>
              <p>If a utility name, charge, enrollment status, or service address does not match what you expected, contact SDG&amp;E before asking a private referral service to interpret or correct the bill.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>If the home already has solar</h2>
              <p>A solar statement can include imports, exports, credits, recurring charges, and a running settlement balance. Review those fields on their own terms before treating a new system, a larger system, or a battery as the answer. <Link href='/solar-problems/true-up-bill-california-explained' className={sourceLink}>How a California True-Up bill works</Link> explains the settlement question without assuming that a new project is needed.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When a project comparison is useful</h2>
              <p>Once you understand the bill pattern, you can decide whether to compare a solar or battery proposal. Ask for the same billing period, confirmed rate plan, confirmed generation provider, remaining delivery and fixed charges, and any battery settings in writing. A proposal that cannot show those inputs is not ready for comparison.</p>
              <p>For the rate schedule, see <Link href='/blog/sdge-time-of-use-rates-2026' className={sourceLink}>SDG&amp;E time-of-use rates</Link>. For the separate battery-cost question, see <Link href='/battery/home-battery-cost-california' className={sourceLink}>home battery cost in California</Link>. For local permit and project checks, use the city guides for <Link href='/solar-cost/san-diego' className={sourceLink}>San Diego</Link>, <Link href='/solar-cost/escondido' className={sourceLink}>Escondido</Link>, and <Link href='/solar-cost/chula-vista' className={sourceLink}>Chula Vista</Link>.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Related reading</h2>
              <ul className='list-disc pl-6 space-y-2'>
                <li><Link href='/blog/sdge-rate-increase-2026' className={sourceLink}>SDG&amp;E rate context</Link></li>
                <li><Link href='/blog/pge-vs-sce-vs-sdge-rates-compared' className={sourceLink}>PG&amp;E, SCE and SDG&amp;E billing comparison</Link></li>
                <li><Link href='/blog/solar-battery-backup-california' className={sourceLink}>The separate battery and backup decision</Link></li>
              </ul>
            </div>
            <ArticleCTA />
            <div className='mt-8'><SolarInquiry utility='SDG&E' topic='SDG&E bill review' variant='bill' /></div>
            <RelatedGuides heading='Before treating solar as the fix' links={[
              { href: '/solar-problems/solar-bill-still-high-california', label: 'When a bill stays high after going solar' },
              { href: '/solar-problems/running-ac-with-solar-california', label: 'Whether solar covers all-day air conditioning' },
            ]} />
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'><TrustedSources domain='crr' variant='compact' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
      <div className='container mx-auto px-4 max-w-3xl'><RelatedInstallers picks='general' /></div>
    </PublicLayout>
  );
}
