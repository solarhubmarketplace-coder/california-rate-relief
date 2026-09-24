// 2026-09-23 upgrade (claude/ta-installers-20260923) for "baker solar" and
// "baker electric california". Both Baker websites were re-read on 2026-09-23.
// Statements that no primary or first-party source supported (years of
// operation computed by hand, default equipment, install-day length, service
// area beyond what the company publishes, a light complaint profile, pricing
// position and an unconfirmed 25-year workmanship term) were removed rather
// than carried forward. What each company says about itself is attributed to
// it; the license numbers must still be checked at the CSLB by the reader.
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';

const metaTitle = "Baker Electric San Diego vs Baker Home Energy: Solar Review";
const metaDescription =
  "Two Baker companies, two CSLB license numbers (#161756 and #858088). Which one handles home solar in San Diego, what each sells, and what to verify.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: '/solar-installers/baker-electric-solar-review' },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: 'https://ratereliefca.com/solar-installers/baker-electric-solar-review',
    modifiedTime: '2026-09-23T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Baker Electric Solar Review 2026",
  datePublished: '2026-04-24', dateModified: '2026-09-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/baker-electric-solar-review' },
};

const BHE = 'https://bakerhomeenergy.com/';
const BE = 'https://www.baker-electric.com/';
const CSLB_CHECK = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const CSLB_C46 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C46';
const CSLB_CONTRACTS = 'https://www.cslb.ca.gov/Resources/IndustryBulletins/2020/20-22_solar_contracts.pdf';

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Is Baker Electric Solar the same company as Baker Home Energy?',
    answer:
      'They are related but separately licensed. Baker Home Energy publishes CA License #858088 with classifications C10, C46, C39 and C20 and handles residential work in the San Diego region. Baker Electric publishes CA License #161756 with classifications A, B, C7, C10 and C46, does commercial solar, battery storage and electrical construction, and points its residential services to Baker Home Energy. Both sites were read on September 23, 2026.',
  },
  {
    question: 'How long has Baker been in business?',
    answer:
      'Both Baker websites trace the business to 1938. Baker Home Energy’s site uses the line “since 1938,” and Baker Electric lists 1938 as its founding year. Longevity matters for a long warranty, but it does not replace checking the current license on the contract you sign.',
  },
  {
    question: 'Where is Baker Home Energy located and what area does it serve?',
    answer:
      'Its site gives 2060 Wineridge Place, Escondido, and describes the San Diego region, including North County. It also has solar service-location pages. Confirm in writing that your own address is served before you compare its bid.',
  },
  {
    question: 'What is NB Baker Electric Inc?',
    answer:
      'That name appears in searches but neither Baker website uses it for itself. The two published names are Baker Home Energy and Baker Electric. Ask which exact legal entity will sign your contract, then look that name and license number up at the CSLB rather than matching on a similar name.',
  },
  {
    question: 'Which license number should I check?',
    answer:
      'The one printed on your own proposal or contract. For home solar that is usually Baker Home Energy’s #858088. Confirm at the CSLB that it is active, that the classifications cover your scope, and that the business name matches your contract exactly.',
  },
  {
    question: 'Does Baker Electric do commercial solar in California?',
    answer:
      'Baker Electric’s own site describes commercial solar, battery storage, systems technology, transportation and service work, and says it operates in California, Arizona, Nevada and Montana. It also describes itself as 100% employee-owned since 2020. For a business or farm project, compare it with other commercial contractors on the same scope.',
  },
  {
    question: 'Is Baker more expensive than national solar companies?',
    answer:
      'This page states no price comparison, because no primary, dated pricing source exists for any single installer. Get the cash price and DC system size from each bidder in writing, work out the price per watt yourself, and check what each quote includes. A lease or PPA cannot be compared with a cash price directly; compare total payments over the term instead.',
  },
];

export default function BakerReview() {
  return (
    <PublicLayout breadcrumbLabel="Baker Electric solar review" breadcrumbParent={{ label: 'Solar company reviews', href: '/solar-installers' }}>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <FaqJsonLd items={faqs} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span>
              <Link href='/solar-installers' className='hover:text-primary'>Solar company reviews</Link><span>/</span>
              <span className='text-foreground font-medium'>Baker Electric Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Baker Electric Solar Reviews (2026): San Diego, and the Baker Home Energy Question
              </h1>

              <LastReviewedStamp date="2026-09-23" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-23'>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                &ldquo;Baker Electric&rdquo; and &ldquo;Baker solar&rdquo; searches lead to two separately licensed Escondido companies that both trace their start to 1938. Home solar in San Diego County goes through Baker Home Energy, CA License #858088, which Baker Electric&apos;s own site names as its residential arm. Baker Electric, CA License #161756, does commercial and large electrical work. Check whichever license is printed on your contract at the CSLB before you sign.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="Baker Electric Solar review and quote comparison" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Baker Electric vs. Baker Home Energy</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here is what each company publishes about itself. Both websites were read again on <strong>September 23, 2026</strong>. These are the companies&apos; own statements, not independent findings.
              </p>
              <div className='overflow-x-auto rounded-xl border border-border mb-6'>
                <table className='w-full text-left text-sm'>
                  <caption className='sr-only'>Baker entities as published on their own websites, read September 23, 2026</caption>
                  <thead className='bg-muted'>
                    <tr><th className='p-3'>Published name</th><th className='p-3'>Stated license</th><th className='p-3'>Stated scope and location</th></tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border'>
                      <td className='p-3 align-top font-semibold'>Baker Home Energy<br /><span className='font-normal text-muted-foreground'>bakerhomeenergy.com</span></td>
                      <td className='p-3 align-top'>CA License #858088<br />C10, C46, C39, C20</td>
                      <td className='p-3 align-top'>Residential: solar installation and repair, home batteries, heating and air conditioning, roofing, water filtration and heaters, electrical service and EV charging. 2060 Wineridge Place, Escondido. Describes the San Diego region, including North County.</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='p-3 align-top font-semibold'>Baker Electric<br /><span className='font-normal text-muted-foreground'>baker-electric.com</span></td>
                      <td className='p-3 align-top'>CA License #161756<br />A, B, C7, C10, C46</td>
                      <td className='p-3 align-top'>Commercial solar, battery storage, systems technology, transportation and service work. 1298 Pacific Oaks Place, Escondido. Also lists Nevada and Arizona licenses. Sends residential visitors to bakerhomeenergy.com.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                So for a home solar project, the company you are most likely dealing with is <strong>Baker Home Energy</strong>. The two sites publish separate license numbers, which makes them separate licensed businesses rather than one name spelled two ways. Neither site says &ldquo;Baker Electric Solar&rdquo; was renamed, and neither uses the name &ldquo;NB Baker Electric Inc.&rdquo; Sources: <a href={BHE} target='_blank' rel='noopener noreferrer' className='text-primary underline'>bakerhomeenergy.com</a> and <a href={BE} target='_blank' rel='noopener noreferrer' className='text-primary underline'>baker-electric.com</a>, both read September 23, 2026.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Why this matters: your contract, your warranty and your license check all attach to one legal business. Confirm which entity is named on the proposal, then look its number up in the CSLB&apos;s <a href={CSLB_CHECK} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Check a License</a> tool. Automated attempts to open the CSLB record for #858088 and #161756 on September 22 and 23, 2026 returned only the tool&apos;s blank search form, so this page cannot state either license&apos;s current status. That says nothing bad about either license. It means you should run the lookup yourself, in a browser, on the day you sign. The <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className='text-primary underline'>contractor-verification walkthrough</Link> shows what to read on the record.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What the license classes tell you</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Baker Home Energy&apos;s published classifications include both C-46 and C-10. The CSLB defines a C-46 Solar contractor as one who &ldquo;installs, modifies, maintains, and repairs thermal and photovoltaic solar energy systems&rdquo; (<a href={CSLB_C46} target='_blank' rel='noopener noreferrer' className='text-primary underline'>CSLB</a>, checked September 23, 2026), and C-10 is the electrical license. That pairing is relevant when a job goes beyond panels on a roof: a main panel upgrade, an EV charger or a battery with backed-up circuits. Ask which of those items the quote includes, and confirm on the CSLB record that the license on your contract carries the classes for all of them.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>A solar company that sells more than solar</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Baker Home Energy is a home-services company, not a solar-only installer. Alongside solar and batteries, its site sells heating and cooling, roofing, water filtration and heaters, electrical service and EV charging (bakerhomeenergy.com, read September 23, 2026). A company that also does roofing can be convenient if your roof needs work before panels go on. It also makes bundled quotes common. Ask for the solar, battery, roof and electrical work as separate line items so you can compare the solar portion with other bids.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment: what to ask for in writing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Neither Baker site published a single default panel, inverter or battery that this page could confirm on September 23, 2026, and earlier fetches of Baker Home Energy&apos;s homepage showed different battery brands on different visits. So treat any equipment you hear about as unconfirmed until it is on the proposal. Get the panel model, the inverter type (microinverters or a string inverter), the battery model and usable capacity, and the monthly production estimate. Our <Link href='/blog/string-inverter-vs-microinverter' className='text-primary underline'>string inverter vs microinverter comparison</Link> explains the trade-off if the bids differ.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and reputation: how to check them yourself</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>This page states no star rating and no review or complaint count. None could be verified at its own source with a date, and Baker&apos;s own site lists awards and ratings that this page did not verify.</li>
                <li>Search Yelp, Google and the BBB under both &ldquo;Baker Home Energy&rdquo; and &ldquo;Baker Electric.&rdquo; Listings exist under both names, and one search will not show everything. Note the date you looked.</li>
                <li>Read the recent one- and two-star reviews rather than the headline score. Complaint themes last longer than a rating, and you can raise them before signing.</li>
                <li>The CSLB license record shows complaint disclosures for the license. A federal court-record search is separate: dockets are searchable at <a href='https://www.courtlistener.com/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>CourtListener</a>, and California state-court matters sit with the county superior court.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing, warranty and contract terms</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A previous version of this page stated a 25-year workmanship warranty. Baker&apos;s dedicated warranty page could not be reached to confirm it, so the figure is no longer stated here. Ask for the workmanship warranty, the panel and inverter warranties, and any production guarantee in writing, and ask whether the terms differ for a cash purchase, a loan, a lease or a PPA. The <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary underline'>side-by-side of cash, loan, lease and PPA</Link> shows what changes with each.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Two California contract rules apply to every bidder, Baker included. The down payment cannot be more than $1,000 or 10% of the contract price, whichever is less, and the contract needs an approximate start date and estimated completion date (<a href={CSLB_CONTRACTS} target='_blank' rel='noopener noreferrer' className='text-primary underline'>CSLB bulletin #20-22</a>, checked September 23, 2026). A solar energy system disclosure document belongs on the front page.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Where this profile fits, and what to verify</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This page does not recommend or rank installers. What you can check is concrete: the residential entity&apos;s license number, its solar and electrical classifications, its published Escondido address, and a service list broad enough to bundle roofing or HVAC with solar. Confirm the license on your contract, get warranty terms in writing, confirm your address is served, and compare at least two other quotes broken out the same way. The <Link href='/best-solar-companies-california' className='text-primary underline'>statewide guide to choosing a solar company</Link> has the full checklist.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className='text-lg font-bold text-foreground mb-2'>{f.question}</h3>
                    <p className='text-foreground/80'>{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Quotes Before You Sign</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                California Rate Relief is a private referral service. Submit one short form and it may forward your inquiry to independent California providers, subject to availability, so you can compare pricing, equipment and warranty terms side by side. No installer is named as a partner and no provider is endorsed.
              </p>
              <div className='flex justify-center'><Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Request a solar review<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="Baker Electric Solar review and quote comparison" />
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>San Diego County next steps</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-companies/escondido' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Escondido installers and permits</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-cost/san-diego' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>What solar costs in San Diego</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/blog/sdge-time-of-use-rates-2026' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>SDG&amp;E time-of-use hours</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sullivan-solar-power-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Sullivan Solar Power review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/solar-optimum-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Solar Optimum review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/commercial-solar/companies-california' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Commercial solar contractors in California</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
              </div>
            </div>

            <HubSpokeLinks hub="installer_reviews" currentPath="/solar-installers/baker-electric-solar-review" />

            <div className='mt-10'>
              <Link href='/solar-installers' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to California solar company reviews</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="Baker Home Energy" cslbLicenseNumber="858088" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
