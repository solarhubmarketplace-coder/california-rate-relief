import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Are Solar Panels a Scam? What California Homeowners Should Know (2026)',
  description:
    'Solar panels aren\'t a scam—but some solar companies are. Learn how to spot predatory tactics, verify installers, and protect yourself.',
  alternates: {
    canonical: '/blog/are-solar-panels-a-scam',
  },
  openGraph: {
    title:
      'Are Solar Panels a Scam? What California Homeowners Should Know (2026)',
    description:
      'Solar panels aren\'t a scam—but some solar companies are. Learn how to spot predatory tactics and verify installers.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Are Solar Panels a Scam? What California Homeowners Should Know (2026)',
  description:
    'Solar panels aren\'t a scam—but some companies are. Learn how to spot predatory tactics and protect yourself in California.',
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
    '@id': 'https://ratereliefca.com/blog/are-solar-panels-a-scam',
  },
};

export default function AreSolarPanelsAScam() {
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
                Trust &amp; Transparency
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Are Solar Panels a Scam? What California Homeowners Should Know (2026)
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
                Short answer: Solar panels themselves are not a scam. Rooftop solar is a mature, proven technology that has reduced electricity bills for millions of California homeowners over the past 15 years. However, some solar companies absolutely are scams. They use high-pressure sales tactics, hide contract terms, make false savings claims, and exploit homeowners&apos; trust in renewable energy. This article separates fact from fiction and gives you the tools to spot predatory solar companies before they lock you into a bad deal.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Let&apos;s Address This Head-On
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                There are approximately 2.33 million residential solar installations in California as of 2026. The vast majority of these installations work as promised — they produce electricity, homeowners save money, and the systems run reliably for 25+ years. Solar is not a scam. It&apos;s a real technology with real economics that makes sense for many homeowners, especially in California where utility rates are among the highest in the nation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                That said, the solar industry also has a well-documented problem with predatory actors. The California Contractors State License Board (CSLB) received approximately 177 solar-related complaints per month in 2025, down 18% from the 2024 peak but still substantial. Common complaints include misleading savings claims, hidden contract terms, poor installation quality, and companies that disappear after the sale.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Solar Panels Are Not a Scam (But Some Companies Are)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The technology works. A typical California residential solar system produces 400-600 kilowatt-hours (kWh) per month, offsetting 60-90% of a home&apos;s electricity consumption depending on roof size, orientation, and shading. That production is real and measurable. Your utility company verifies the production through the meter. You either get credits on your bill or payments for excess power, depending on your utility and net metering agreement.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The economics work too. In SCE territory where rates are 34.5 cents per kWh and rising, a solar system paying for itself in 9-12 years is a solid investment. In PG&E territory, the math is even better. The federal residential tax credit (which expired December 31, 2025) used to accelerate payback, but even without it, the long-term math holds up if you plan to stay in your home for 15+ years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                What makes some solar sales a scam isn&apos;t the technology or the financing model — it&apos;s the predatory practices used to sell it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Real Scam Tactics
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Misleading savings claims.</strong> A company promises you&apos;ll save $50,000 over 25 years based on inflated assumptions — utility rates rising 15% annually (unrealistic), your electricity consumption staying constant (most homes use less over time), and the solar system producing 5-10% more than realistic models suggest. When the actual savings are $20,000, you feel scammed. Always ask for a detailed, itemized projection using conservative assumptions and your actual 12-month usage history, not estimates.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Hidden or poorly explained escalators.</strong> A lease or PPA contract says your rate is 10 cents per kWh, but buried on page 14 in footnote 7, there&apos;s a 2.5% annual escalator. In year 15, you&apos;re paying 13.2 cents — not the 10 cents you thought you were locking in. By year 25, it&apos;s 15.7 cents. Scammers bank on homeowners not reading 40+ page contracts. Always request a 25-year payment schedule broken down year by year.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Fake &quot;free&quot; or &quot;government-funded&quot; offers.</strong> Door-to-door reps claim the program is &quot;government-subsidized,&quot; &quot;utility-approved,&quot; or &quot;funded by federal grants.&quot; There is no single federal or state &quot;free solar program&quot; that covers all homeowners. California has rebates and financing assistance, but they&apos;re limited, require qualification, and don&apos;t make solar free. If someone claims their offer is government-funded, ask for official documentation and verify through the CPUC website or your utility.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Pressure to sign immediately.</strong> &quot;This offer expires tonight.&quot; &quot;We only have three slots left this month.&quot; &quot;If you don&apos;t sign today, the price goes up.&quot; These are classic high-pressure sales tactics. Legitimate solar companies have inventory and can accommodate you next week. Artificial urgency is a red flag. California law gives you three days to cancel a home improvement contract anyway, so there&apos;s no legitimate reason to rush.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Abandoned projects.</strong> A company installs your panels, collects the first few payments, then goes bankrupt. You&apos;re left with a system covered by a warranty issued by a defunct company — essentially worthless. You still owe on the loan or PPA but have no recourse. Check the company&apos;s financial stability and years in business. Companies less than three years old are higher risk.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How to Verify Any Installer
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CSLB license check.</strong> Every solar installer in California must hold a Contractor&apos;s State License Board (CSLB) license, either C-46 (Solar Contractor) or C-10 (Electrical Contractor). Go to{' '}
                <a
                  href='https://www.cslb.ca.gov/CheckLicenseStatus'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  cslb.ca.gov/CheckLicenseStatus
                </a>{' '}
                and search the company. Verify that the license is active, not suspended or revoked. Also check the company&apos;s complaint history — if there are multiple unresolved complaints, keep looking.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Online reviews and Better Business Bureau.</strong> Google the company name + &quot;reviews&quot; and &quot;complaints.&quot; Check the Better Business Bureau (bbb.org) for accreditation and complaint history. Be skeptical of companies with all five-star reviews (fake reviews are common) but also wary of those with numerous one-star complaints about billing, service, or unresponsive support.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Ask for references.</strong> Request three references from California homeowners who signed contracts more than two years ago. Call them. Ask whether the company delivered on promises, whether actual bills matched projections, whether the company responded to questions, and whether they&apos;d use the same company again. Honest companies provide references without hesitation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Get everything in writing.</strong> Before signing any contract, you should have in writing: (1) system specifications (size in kW, panel brand, inverter, installation timeline), (2) total cost (for purchase) or monthly rate (for PPA/lease), (3) performance projections with your actual usage history as the basis, (4) the annual escalator if applicable, (5) warranty terms, and (6) cancellation or buyout options. If the company won&apos;t provide all of this before you sign, don&apos;t sign.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The 3-Day Cooling-Off Period
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California law mandates that any home improvement contract (including solar) must include a three-day cancellation period. This gives you three calendar days to cancel after signing without penalty. Use this time to review the contract with a lawyer, get a second opinion, or simply sleep on it. Many homeowners later realize they were pressured and regret signing. The three-day window is your escape hatch — use it if you have any doubts.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Legitimately Doesn&apos;t Make Sense
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Not every home is a good fit for solar, and honest companies will tell you that upfront. Solar doesn&apos;t make financial sense if your roof has heavy shading from trees or neighboring buildings that can&apos;t be mitigated, if your monthly electricity bill is under $100 (savings may not justify complexity), if your roof needs replacement within the next 5 years (replace the roof first, then install solar), or if you&apos;re planning to move within 2-3 years (though PPAs can transfer to buyers, they make homes harder to sell).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If a company tells you that your home is a great fit for solar when the above factors clearly apply, that&apos;s a red flag. Honest companies are willing to say no.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar panels are not a scam. The technology is proven, the economics work in California&apos;s high-rate environment, and millions of homeowners benefit from solar systems every day. But the solar industry does have bad actors who use predatory sales tactics, hide contract terms, and exploit trust in renewable energy. Protect yourself by verifying the installer&apos;s CSLB license, getting all terms in writing, requesting a 25-year cost projection, asking for verifiable references, and using the three-day cooling-off period if you have doubts. If a company won&apos;t provide these basics, it&apos;s either incompetent or dishonest — either way, keep looking.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Want Clarity on Your Options?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                Get a straight assessment of whether solar (or another approach) makes sense for your home, based on your actual utility rates and usage.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Get Your Assessment
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
                href='/blog/why-is-my-pge-bill-so-high'
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
