import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: "Sunlux Solar Reviews (2026): Google 4.7/5, BBB A+ Rating",
  description: "Sunlux has completed 7,000+ installs with Google 4.7/5 across 550+ reviews and a BBB A+ file. In-house crews, no PPA focus. The honest review.",
  alternates: { canonical: '/solar-installers/sunlux-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Sunlux Solar Review 2026: One of SoCal's Higher-Rated Regional Installers",
  datePublished: '2026-04-24', dateModified: '2026-09-22',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/sunlux-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Sunlux Solar', address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '4.4', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Sunlux is a strong SoCal + Texas installer with 7,000+ completed installs, Google 4.7/5, BBB A+, and competitive cash pricing. Primary complaint theme is permitting/activation delays — real, but less severe than the national PPA-heavy competitors.',
};

export default function SunluxReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span>
              <Link href='/best-solar-companies-california' className='hover:text-primary'>Best Solar Companies in California</Link><span>/</span>
              <span className='text-foreground font-medium'>Sunlux Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunlux Solar Reviews (2026): One of SoCal&apos;s Higher-Rated Regional Installers
              </h1>
              
              <LastReviewedStamp date="2026-09-22" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-22'>Updated September 22, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p><p className='text-3xl font-extrabold text-foreground mt-1'>4.4 <span className='text-lg text-muted-foreground'>/ 5</span></p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>SoCal cash/loan buyers who want competitive pricing and a strong Google/BBB record</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>You need a locked install-by date, permitting and activation delays are the main complaint</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Sunlux is a Southern California solar installer (with Texas operations) that has built a meaningful scale — more than 7,000 completed installations, while maintaining customer reputation metrics well above the national PPA-heavy installers. Google shows 4.7/5 across 550+ reviews, Yelp holds at 3.8/5, and the BBB profile is A+ (not accredited, which is common and not a red flag). For SoCal cash and loan buyers, Sunlux sits in the upper tier of our comparison.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="Sunlux Solar review and quote comparison" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux is a privately held regional installer focused on Southern California and Texas. The company uses its own installation crews rather than subcontracting — one of the key differentiators from Palmetto and similar national dealer-network brands. California coverage is strongest in Orange County, LA, Inland Empire, and San Diego County; confirm serviceability for more remote parts of the state.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux does not manufacture panels. The company installs quality Tier-1 options, Panasonic has been a frequent panel choice, with SolarEdge inverters and LG batteries mentioned in recent installs. Install-day is typically completed in one day. The full process from contract to Permission to Operate runs 3 to 6 months, in line with California industry average post-NEM 3.0.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The reputation data is one of the stronger profiles in our California comparison:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Google: 4.7/5 across 550+ reviews — genuinely strong.</li>
                <li>Yelp: 3.8/5. Mixed but positive-skewing.</li>
                <li>BBB: A+, not accredited, modest complaint volume relative to company scale.</li>
                <li>EnergySage: positive reviews in smaller sample.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Permitting and activation delays — the most frequent theme. Typical for California in 2025–2026 but worth managing expectations around.</li>
                <li>Occasional unexpected fees at install (adders for panel-upgrade, trenching, etc.). Get itemized pricing in writing.</li>
                <li>Post-install service can be slower than the sales experience. Warranty claims have been reported as 2–4 week response times.</li>
                <li>Minor HOA or permit coordination hiccups with tighter-regulation California cities.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux focuses on ownership — cash or loan financing through third-party partners. You own the system and don&apos;t carry a long-term PPA or lease obligation — but there is no longer a 30% federal credit to capture, since IRC § 25D does not apply to expenditures made after December 31, 2025. Pricing is competitive; customer reports put cash-purchase pricing in the $3.00–$3.80 per watt range in California, which is roughly at or below the state average.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux provides standard 25-year equipment coverage and what the company describes as full component and workmanship guarantees. Specific terms vary by contract — get the warranty language in writing before signing, especially for workmanship length (10 years is common; 25 years is excellent).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Products: What Sunlux&apos;s Site Says</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux&apos;s own site doesn&apos;t name a specific panel brand — it cites &ldquo;world-leading solar manufacturers&rdquo; generically — but prominently features the Tesla Powerwall 3 as its battery, plus EV charging and electrical work (panel upgrades, subpanels, rewiring, outlets and breakers) alongside solar (<a href='https://sunlux.com/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>sunlux.com</a>, accessed September 22, 2026). The equipment section above instead names Panasonic panels, SolarEdge inverters, and LG batteries; we couldn&apos;t confirm those brands on Sunlux&apos;s reachable pages this session. Treat that as this page&apos;s own prior reporting rather than a current Sunlux claim, and confirm which brands are proposed with your rep before signing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing: What Sunlux Doesn&apos;t Publish</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A customer testimonial on <a href='https://sunlux.com/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>sunlux.com</a> mentions being offered &ldquo;a variety of financing options,&rdquo; and a separate testimonial mentions having &ldquo;bought the solar panels outright&rdquo; — but Sunlux does not publish a dedicated financing-terms page naming a lender, APR, term, or a formal cash/loan/lease menu on any page reached this session (accessed September 22, 2026). Combined with the note above that Sunlux focuses on cash and loan, ask directly whether your specific offer is a purchase (you own the system) or a use agreement (lease or PPA, someone else owns it) — that determines who can claim any tax credit and what happens at resale. For the tradeoffs in plain terms, see our guide to <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary underline'>compare cash, loan, lease, and PPA</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty and Guarantee: The Published Terms</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux&apos;s warranty page states: &ldquo;Every hardware component — including the solar panels, inverter and racking — is completely covered for 25 years,&rdquo; plus 24/7 system monitoring and access to Sunlux&apos;s Tech Support line (<a href='https://sunlux.com/solar-warranty/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>sunlux.com, Solar Warranty</a>, accessed September 22, 2026). Not stated on pages reached this session: a numeric production or output guarantee, a roof or leak warranty, a battery-specific term, or which purchase type the 25-year coverage applies to. Given the slow-response complaint pattern above, get the actual warranty document, not the marketing page, before signing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Service Process and Selling the Home</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux runs separate service intake for new versus existing customers and lists repair coverage for panel, inverter, battery, EV charging, and racking equipment, with a main line and a separate service line (<a href='https://sunlux.com/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>sunlux.com</a>, accessed September 22, 2026). No written response-time commitment was found; the &ldquo;2–4 week&rdquo; figure above is a customer complaint, not a Sunlux commitment. Because Sunlux&apos;s own site emphasizes cash and loan ownership over lease or PPA, a financed-or-owned Sunlux system typically transfers with the home like any other home improvement — no separate assignment to file. If yours is a loan, ask your lender (not Sunlux) whether it must be paid off or can be assumed at closing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Sunlux Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux is a strong pick for SoCal cash or loan buyers who value a regional installer with in-house crews, competitive pricing, and above-average customer reputation metrics. It&apos;s particularly attractive if you&apos;re in Orange County, LA Metro, or coastal San Diego where Sunlux has its strongest service history. The main caveat is timeline. Expect standard California industry 3 to 6 months, and build margin in your planning.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>CSLB Number and Questions to Ask</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No CSLB license number appears on Sunlux&apos;s homepage or warranty page, the two pages reached this session. Don&apos;t rely on a third-party site&apos;s number — search &ldquo;Sunlux&rdquo; yourself at CSLB&apos;s <a href='https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx' target='_blank' rel='noopener noreferrer' className='text-primary underline'>Check License tool</a> and confirm the entity name matches your contract — the same step our guide to <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className='text-primary underline'>verify a California solar contractor</Link> walks through.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-2 font-semibold'>Questions to ask before you sign:</p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>What is Sunlux&apos;s current CSLB license number, and does the business name match your contract?</li>
                <li>Cash, loan, or lease/PPA — and if a loan, what&apos;s the APR, term, and is there a UCC-1 filing?</li>
                <li>What&apos;s the exact production guarantee percentage, if any, written into the contract (not just marketing copy)?</li>
                <li>What response-time commitment for a warranty repair is in writing?</li>
                <li>Which panel, inverter, and battery models are proposed, and does the 25-year warranty cover all equally?</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Sunlux Solar a reputable company?</h3><p className='text-foreground/80'>Yes, by the data we can verify, 7,000+ installs, Google 4.7/5, BBB A+. One of the cleaner reputations in SoCal regional solar.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Sunlux offer PPAs or leases?</h3><p className='text-foreground/80'>Not as the primary offering. Sunlux focuses on cash and loan financing where you own the system.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What panels does Sunlux use?</h3><p className='text-foreground/80'>Tier-1 options — Panasonic has been a frequent panel brand with SolarEdge inverters and LG or other name-brand batteries. Sunlux does not manufacture its own panels.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Sunlux serve all of California?</h3><p className='text-foreground/80'>Strongest coverage is Southern California. Confirm serviceability for your specific zip code in the first call.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Sunlux Against Two California Alternatives.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief works with multiple top-rated California solar installers. Fill out one 60-second form and we&apos;ll line up quotes from up to three installers. So you can compare their pricing, equipment, and warranty terms side by side.</p>
              <div className='flex justify-center'><Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="Sunlux Solar review and quote comparison" />
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/baker-electric-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Baker Electric Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/solar-optimum-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Solar Optimum Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/ameco-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Ameco Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/new-day-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>New Day Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
              </div>
            </div>

            <div className='mt-10'>
              <Link href='/best-solar-companies-california' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Best Solar Companies in California</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="Sunlux" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
