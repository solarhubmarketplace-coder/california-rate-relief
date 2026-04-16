import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Free Solar Panels in California: What\'s Real and What\'s a Scam (2026)',
  description:
    'Is "free solar" real? Yes—but it\'s not actually free. Learn how $0-down solar PPAs work, spot the scams, and protect yourself in California.',
  alternates: {
    canonical: '/blog/free-solar-panels-california',
  },
  openGraph: {
    title:
      'Free Solar Panels in California: What\'s Real and What\'s a Scam (2026)',
    description:
      'Is "free solar" real? Yes—but it\'s not actually free. Learn how $0-down solar PPAs work, spot the scams, and protect yourself.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Free Solar Panels in California: What\'s Real and What\'s a Scam (2026)',
  description:
    'Is "free solar" real? Yes—but it\'s not actually free. Learn how $0-down solar works in California and how to spot scams.',
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
    '@id': 'https://ratereliefca.com/blog/free-solar-panels-california',
  },
};

export default function FreeSolarPanelsCalifornia() {
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
                Solar Savings
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Free Solar Panels in California: What&apos;s Real and What&apos;s a Scam (2026)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>7 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                You&apos;ve probably seen billboards or heard radio ads promising &quot;free solar panels&quot; in California. The answer to &quot;Is it real?&quot; is complicated: the offer itself is real, but the word &quot;free&quot; is misleading. There is no such thing as truly free solar. What companies mean by &quot;free&quot; is $0 upfront cost — you pay through a monthly bill instead. This article explains how the legitimate version works, why scammers use the word &quot;free&quot; to exploit homeowners, and how you can protect yourself.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Is &quot;Free Solar&quot; Real?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes and no. The concept is real: companies will install solar panels on your roof at zero upfront cost. But nothing in life is free, and solar is no exception. What companies actually mean is that you don&apos;t pay anything at the moment of installation. Instead, you commit to paying for the electricity the panels produce, usually through a 20-25 year contract. It&apos;s a financing mechanism, not a gift.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In California, this model is called a PPA (Power Purchase Agreement) or a solar lease. Both put panels on your roof with no money down. Both promise monthly savings compared to utility bills. And both lock you into a contract that transfers when you sell the house or requires a buyout to remove.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The PPA is the more common legitimate model today. Here&apos;s how it works: a solar company owns the panels, installs them on your roof, handles maintenance, and manages performance. You pay a fixed rate per kilowatt-hour (kWh) of electricity the panels produce — typically 8-15 cents per kWh when you sign, depending on your location and utility rates. Your utility bill is reduced by the amount of solar power your home generates. If your solar system produces 500 kWh in a month and you&apos;re on a PPA paying 10 cents per kWh, you save money compared to paying your utility 40+ cents per kWh.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How $0-Down Solar Actually Works
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The installation, panels, inverter, wiring, and permits — all paid for by the solar company upfront. You pay nothing to have them installed. The company makes money from your monthly payments over 20-25 years. In California, the federal commercial investment tax credit (which expired for residential purchases at the end of 2025) is claimed by the company, not you. That tax benefit gets passed through to you as a lower PPA rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The monthly payment appears on your utility bill alongside your electricity charges. Each month, your solar panels generate power, you get credited for that, and you pay the PPA company for it. If the panels generate 600 kWh and your PPA rate is 10 cents per kWh, you pay $60 that month. Meanwhile, your utility bill drops by roughly $240 (assuming your utility charges 40 cents per kWh). Net result: your total monthly bill (utility + PPA) is lower than utility alone.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This math works because PPA rates start at a fixed rate but include a 1-3% annual escalator. Year one might be 10 cents per kWh, year two 10.3 cents, year three 10.6 cents, and so on. Utility rates, by contrast, have been rising 8-12% per year in some parts of California. Over 25 years, locking in a low fixed rate with modest escalation beats the alternative of paying rising utility rates.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Catch (Read This Carefully)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before you sign, understand what you&apos;re agreeing to. A PPA or lease is a binding 20-25 year contract. You don&apos;t own the panels. You can&apos;t remove them without paying a buyout fee (typically $3,000-$8,000). If you sell your house, the contract transfers to the buyer — which makes your home harder to sell and requires buyer approval. Some buyers will walk away rather than take on an unfamiliar solar obligation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The company handles maintenance, repairs, and insurance through their warranty. You don&apos;t need to do anything. But you&apos;re also locked in — if the system underperforms, you&apos;re still obligated to pay. If interest rates fall sharply and you could have financed a purchase cheaper, it&apos;s too late. You signed the contract.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The annual escalator also matters. A 2% escalator compounds. Year one is 10 cents, but by year 20 it&apos;s 14.7 cents — a 47% increase. If utility rates flatten or fall (unlikely but possible), the escalator means your savings shrink over time.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Common Scams in California
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The word &quot;free&quot; attracts bad actors. Here are the most common scams targeting California homeowners.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Door-to-door &quot;free&quot; offers with high-pressure tactics.</strong> A rep shows up at your door claiming you qualify for a &quot;free&quot; solar upgrade. They rush you to sign forms without explaining the contract terms, escalators, or buyout fees. By the time you realize what you&apos;ve agreed to, a 3-day cooling-off period has passed and you&apos;re locked in. California law requires home improvement sales (including solar) to include a three-day cancellation clause, but many dishonest companies hide this or intentionally delay disclosures. Always get everything in writing before signing, and always use the three-day window to review with a lawyer or solar expert if you have doubts.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Fake government affiliation.</strong> Scammers claim they&apos;re representing a &quot;state solar program&quot; or &quot;federal rate relief initiative&quot; to add credibility. In reality, there is no single &quot;free solar program&quot; from the government. California has rebate programs, tax incentives, and financing assistance, but none of them make solar truly free. If someone claims government affiliation, ask for written documentation and verify through the CPUC (California Public Utilities Commission) or your utility provider.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Hidden escalators and buried terms.</strong> The contract says 10 cents per kWh, but the escalator might be buried on page 8 in 8-point font. You don&apos;t discover the 3% annual increase until bills start climbing year two. Always request a 25-year payment projection in writing before signing. Legitimate companies will provide this without hesitation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Abandoned installations.</strong> The solar company installs panels, takes your upfront data, collects the first few payments, then goes out of business. You&apos;re left with a non-warrantied system, no maintenance support, and a contract that&apos;s now worthless. Always check the company&apos;s financial stability, years in business, and reviews on the California Contractors State License Board (CSLB) website.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How to Protect Yourself
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Verify the company&apos;s CSLB license.</strong> Every legitimate solar installer in California must hold a Contractor&apos;s State License Board (CSLB) license, either C-46 (Solar Contractor) or C-10 (Electrical Contractor). Go to{' '}
                <a
                  href='https://www.cslb.ca.gov/CheckLicenseStatus'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  cslb.ca.gov
                </a>{' '}
                and search by company name. Check that the license is active, not suspended or revoked. Also review the company&apos;s complaint history on the same site — a history of unresolved complaints is a red flag.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Get a 25-year cost comparison.</strong> Before signing, request a detailed itemization showing: (1) your estimated utility bill for 25 years assuming current rates never change, (2) your estimated PPA cost over 25 years including the escalator, and (3) the net savings. This projection must account for the annual escalator and show year-by-year costs. If the company won&apos;t provide this in writing, walk away.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Understand the three-day cooling-off period.</strong> California law gives you three days to cancel any home improvement contract, including solar. This clock starts when you sign. Use this period to review the contract with a lawyer, get a second opinion, or simply sleep on the decision. Many scams rely on you signing without reviewing later.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Check reviews and references.</strong> Look up the company on Google Reviews, the Better Business Bureau (BBB), and the CSLB website. Ask the company for three references from California homeowners who signed PPAs more than two years ago. Call them. Ask whether the company answered questions, whether bills matched projections, and whether they&apos;d do it again.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Avoid door-to-door and high-pressure environments.</strong> Legitimate solar companies also sell door-to-door (California allows it, but it requires registration), but the combination of door-to-door + high pressure + vague promises is a classic scam setup. Reputable companies give you time to think, provide written documentation upfront, and don&apos;t rush you toward the signature line.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Red Flags to Watch For
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                — Claims that the government is subsidizing your installation or that &quot;federal funds&quot; are paying for your solar.<br />
                — Promises of savings without showing a 25-year cost projection in writing.<br />
                — Pressure to sign &quot;today&quot; or claims that an offer &quot;expires tonight.&quot;<br />
                — No written contract or a contract longer than 40 pages with terms buried in fine print.<br />
                — Unwillingness to explain the annual escalator or buyout terms.<br />
                — Company registered less than three years ago with no verifiable track record.<br />
                — CSLB license that shows open complaints or prior suspensions.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                &quot;Free solar&quot; is real in the sense that legitimate companies do install panels with no upfront cost. But it&apos;s not free — you pay through a 20-25 year contract. PPAs make sense if utility rates are high and rising (true for most of California), if you plan to stay in your home long enough to recoup the savings, and if you want zero ownership hassle. Just verify the company, get a detailed cost projection, understand the escalator, and use the three-day cooling-off period to review. If a company won&apos;t provide these basics, it&apos;s a scam.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Ready to Explore Your Options?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                Get clarity on what a legitimate no-cost solar agreement would look like for your home. Our qualification takes 60 seconds.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check Your Eligibility
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
                href='/blog/are-solar-panels-a-scam'
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
