import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { BillComparison } from '@/components/growth/BillComparison';

const sourceLink = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export const metadata = {
  title: 'Why Is My SCE Bill So High? A Bill-First Checklist',
  description: 'Compare billing days, daily kWh, rate plan, fixed charges, delivery and generation before deciding whether a solar project belongs in the conversation.',
  alternates: { canonical: '/blog/why-is-my-sce-bill-so-high' },
  openGraph: {
    title: 'Why Is My SCE Bill So High? A Bill-First Checklist',
    description: 'A bill-first SCE diagnosis: days, kWh, rate plan, fixed charges, delivery and generation.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    modifiedTime: '2026-09-20T00:00:00Z',
    url: 'https://ratereliefca.com/blog/why-is-my-sce-bill-so-high',
  },
};

export default function WhyIsMySCEBillSoHigh() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant='Article' domain='crr' headline='Why Is My SCE Bill So High? A Bill-First Checklist' url='https://ratereliefca.com/blog/why-is-my-sce-bill-so-high' datePublished='2026-04-24' dateModified='2026-09-20' description='Compare billing days, daily kWh, rate plan, fixed charges, delivery and generation before deciding whether a solar project belongs in the conversation.' />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span><Link href='/blog' className='hover:text-primary'>Blog</Link><span>/</span><span className='text-foreground'>Why Is My SCE Bill So High?</span>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>SCE · Billing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Why Is My SCE Bill So High?</h1>
              <p className='text-lg text-muted-foreground'>Start with the bill. A higher total can come from more days, more daily use, a different rate plan, fixed charges, delivery charges, generation charges, or more than one of those at once.</p>
            </header>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>Start with two bills from comparable periods</h2>
              <p>Pull the current bill and the same season from last year if you have it. Record the billing days, total kWh, electric charges, rate-plan name and any generation-provider line. A larger bill over more days is not the same change as a larger bill over the same number of days.</p>
              <div className='not-prose my-8'><BillComparison utilityName='SCE' /></div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Read the change in this order</h2>
              <ol className='list-decimal pl-6 space-y-3'>
                <li><strong>Billing days and kWh per day.</strong> Divide total kWh by billing days on each bill. This separates a longer cycle from a change in daily use.</li>
                <li><strong>Rate plan and time of use.</strong> Compare the rate-plan name on the bill against SCE&apos;s <a href='https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans' target='_blank' rel='noopener noreferrer' className={sourceLink}>current time-of-use plan information</a>. The relevant hours and charges are the ones attached to your plan and effective dates, not a statewide average.</li>
                <li><strong>Fixed charges.</strong> SCE explains that the <a href='https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc' target='_blank' rel='noopener noreferrer' className={sourceLink}>Base Services Charge</a> varies for CARE, FERA and qualified-housing customers and is tied to the billing period. Solar does not remove that charge. Read its line and amount on the bill before treating it as usage.</li>
                <li><strong>Generation and delivery.</strong> Keep the generation line separate from SCE delivery charges. If a community-choice provider appears on the bill, that provider&apos;s generation charge and SCE&apos;s delivery charge answer different questions.</li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>If the bill lists Desert Community Energy</h2>
              <p>For a Palm Springs account, confirm the generation provider on the bill before applying an SCE-only solar-billing explanation. Desert Community Energy says it administers its solar customers&apos; generation charges and credits, while SCE continues delivery, transmission and other service charges. DCE also describes a May generation true-up for its solar customers; SCE&apos;s delivery settlement timing depends on the account&apos;s billing option and connection date. Read the actual bill and the provider&apos;s guidance before comparing a balance or credit.</p>
              <p><a href='https://desertcommunityenergy.org/your-options/solar-customers/' target='_blank' rel='noopener noreferrer' className={sourceLink}>DCE&apos;s solar-customer guide</a>{' '}and SCE&apos;s{' '}<a href='https://www.sce.com/customer-service-center/help-center/solar/net-energy-metering/understanding-nem-bill' target='_blank' rel='noopener noreferrer' className={sourceLink}>NEM bill guide</a>{' '}were checked September 20, 2026. For a question about the generation line, contact the provider shown there; for delivery, meter or recorded-usage questions, contact SCE.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Use SCE&apos;s own comparison before changing plans</h2>
              <p>SCE&apos;s <a href='https://www.sce.com/save-money/rates-financing/rate-plan-comparison' target='_blank' rel='noopener noreferrer' className={sourceLink}>Rate Plan Comparison</a> uses your account history to compare eligible plans. Review the result beside the actual hours your household uses electricity. A plan change is a billing decision; it does not require a solar project.</p>
              <p>If the utility on the bill, the service address, or a charge does not match what you expected, contact <a href='https://www.sce.com/customer-service/contact-us' target='_blank' rel='noopener noreferrer' className={sourceLink}>SCE customer support</a> before asking a private referral service to interpret or correct it.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When a project comparison is useful</h2>
              <p>Once you know the bill pattern, you can decide whether to compare a solar or battery proposal. Ask for the same billing period, rate-plan assumption, remaining fixed charges, delivery and generation treatment, and any battery settings in writing. A proposal that cannot show those inputs is not ready for comparison.</p>
              <p>If roof work or backup is part of the decision, start with <Link href='/blog/is-my-roof-good-for-solar-california' className={sourceLink}>whether the roof is suited to solar</Link> and <Link href='/blog/solar-battery-backup-california' className={sourceLink}>the separate backup and battery decision</Link>. For address-level permit and project checks, see the local guides for <Link href='/solar-cost/temecula' className={sourceLink}>Temecula</Link>, <Link href='/solar-cost/murrieta' className={sourceLink}>Murrieta</Link>, and <Link href='/solar-companies/palm-desert' className={sourceLink}>Palm Desert</Link>; confirm the utility named on your own bill rather than assuming it from the city.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Related reading</h2>
              <ul className='list-disc pl-6 space-y-2'>
                <li><Link href='/blog/sce-rate-increase-2026' className={sourceLink}>SCE rate context</Link></li>
                <li><Link href='/blog/pge-vs-sce-vs-sdge-rates-compared' className={sourceLink}>PG&amp;E, SCE and SDG&amp;E billing comparison</Link></li>
                <li><Link href='/solar-panels-california' className={sourceLink}>California solar bill and quote decisions</Link></li>
              </ul>
            </div>
            <ArticleCTA />
            <div className='mt-8'><SolarInquiry utility='SCE' topic='SCE bill review' variant='bill' /></div>
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
