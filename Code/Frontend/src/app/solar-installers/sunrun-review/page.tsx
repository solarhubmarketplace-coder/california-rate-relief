import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';

const path = '/solar-installers/sunrun-review';
const checked = '2026-09-23';

const metaTitle = 'Sunrun Reviews (2026): Is Sunrun Going Out of Business?';
const metaDescription =
  "Sunrun's own filings and BBB record as of Sept. 23, 2026: business status, what it costs, the Sunrun Guarantee, roof work, Tesla ties and Vivint contracts.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${path}`,
    publishedTime: '2026-04-22T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sunrun Reviews (2026): Business Status, Complaints, Contracts and Vivint Solar',
  description: metaDescription,
  datePublished: '2026-04-22',
  dateModified: checked,
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};
// No Review/Rating JSON-LD: this page publishes no user ratings (see the
// review-snippet note on the other installer reviews).

const SRC = {
  ir: 'https://investors.sunrun.com/',
  q2: 'https://investors.sunrun.com/news-events/press-releases/detail/378/sunrun-reports-second-quarter-2026-financial-results',
  dispatch:
    'https://investors.sunrun.com/news-events/press-releases/detail/381/sunrun-and-tesla-dispatch-580-megawatts-to-californias',
  vivint:
    'https://investors.sunrun.com/news-events/press-releases/detail/216/sunrun-completes-acquisition-of-vivint-solar-to-accelerate',
  bbb: 'https://www.bbb.org/us/ca/san-francisco/profile/solar-energy-equipment-dealers/sunrun-inc-1116-312886/complaints',
  guarantee: 'https://www.sunrun.com/why-sunrun/your-guarantee',
  roofing: 'https://www.sunrun.com/roofing',
  panels: 'https://www.sunrun.com/solar-panels',
  licenses: 'https://www.sunrun.com/state-contractor-license-information',
  lighthouse: 'https://www.sunrun.com/lighthouse',
  move: 'https://www.sunrun.com/go-solar-center/solar-faq/what-happens-if-i-move',
  transfer: 'https://www.sunrun.com/go-solar-center/solar-articles/service-transfer-buying-a-sunrun-solar-home',
  irs: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb',
};

const sources: ReviewSource[] = [
  { name: 'Sunrun investor relations — press releases', url: SRC.ir, supports: 'No bankruptcy, restructuring or wind-down release; Nasdaq: RUN; latest releases dated September 2026', checked },
  { name: 'Sunrun — Second Quarter 2026 Financial Results (August 5, 2026)', url: SRC.q2, supports: '1,034,738 subscribers at June 30, 2026; 74% storage attachment; $1.2 billion Aggregate Subscriber Value; $23 million Cash Generation; $(186) million operating cash flow; $267 million securitization; revised 2026 guidance', checked },
  { name: 'Sunrun — Sunrun and Tesla dispatch 580 MW to California’s grid (September 21, 2026)', url: SRC.dispatch, supports: 'Coordinated dispatch with Tesla; about 55% of the 110,000 participating Powerwalls owned by Sunrun', checked },
  { name: 'Sunrun — Completion of the Vivint Solar acquisition (October 8, 2020)', url: SRC.vivint, supports: 'All-stock deal at 0.55 Sunrun shares per Vivint Solar share; Vivint Solar to be integrated into Sunrun', checked },
  { name: 'Better Business Bureau — Sunrun, Inc. complaints', url: SRC.bbb, supports: 'A+ rating, accredited; 4,017 complaints in three years; 1,366 closed in 12 months; complaint types', checked },
  { name: 'Sunrun — The Sunrun Guarantee', url: SRC.guarantee, supports: 'Plans covered, 90% production guarantee, 25-year repair promise, watertight warranty, battery guarantee, not available in Florida', checked },
  { name: 'Sunrun — Roofing (with Remi)', url: SRC.roofing, supports: 'Bundled removal, roof work and reinstall; 5-year roofing workmanship warranty; financing not available in NY or NV', checked },
  { name: 'Sunrun — Solar panels page', url: SRC.panels, supports: 'Names Tesla Powerwall; names no panel or inverter manufacturer', checked },
  { name: 'Sunrun — State contractor license information', url: SRC.licenses, supports: 'States with listed contractor licenses, including California', checked },
  { name: 'Sunrun — Lighthouse', url: SRC.lighthouse, supports: 'Service platform for owners who lost access to their original installer', checked },
  { name: 'Sunrun — What happens if I move?', url: SRC.move, supports: 'Seller-side transfer steps; temporary removal of NOIEPC/UCC filings during transfer; prepay option', checked },
  { name: 'Sunrun — Buying a home with Sunrun solar', url: SRC.transfer, supports: 'Buyer-side transfer steps; soft credit inquiry that does not affect the buyer’s score', checked },
  { name: 'IRS — FAQs on Public Law 119-21 changes to 25D', url: SRC.irs, supports: 'No residential credit for expenditures made after December 31, 2025', checked },
];

const faqs = [
  {
    question: 'Is Sunrun going out of business or bankrupt?',
    answer:
      'Not on the evidence of its own disclosures. Checked on September 23, 2026, Sunrun’s investor site showed no bankruptcy, Chapter 11, restructuring or wind-down announcement, and the company reported second-quarter 2026 results on August 5, 2026. It also reported cash used in operations of $186 million for the quarter and cut its 2026 guidance, so read the full release if the company’s finances matter to your decision.',
  },
  {
    question: 'Is Sunrun owned by Tesla?',
    answer:
      'No. Sunrun is its own public company, listed on Nasdaq as RUN. The two companies work together: Sunrun installs Tesla Powerwall batteries and, in September 2026, the two coordinated a battery dispatch to California’s grid. Sunrun said about 55% of the 110,000 Powerwalls in that event were Sunrun-owned.',
  },
  {
    question: 'How much does Sunrun solar cost in California?',
    answer:
      'Sunrun does not publish a price. Most of its customers pay monthly under a lease or power purchase agreement, so the number to compare is the first-year payment, the annual escalator and the total over the term. If you are offered a cash purchase, divide the price by the system size in watts and compare it with other written quotes.',
  },
  {
    question: 'Will Sunrun replace my roof?',
    answer:
      'Sunrun works with Remi Roofing to bundle panel removal, roof work and reinstallation at a set price, and says that in some cases it may cover those costs. Roof jobs carry a 5-year workmanship warranty from that program. Separately, the Sunrun Guarantee includes a watertight warranty against leaks caused by the solar installation. Get the scope and who pays in writing.',
  },
  {
    question: 'Who makes Sunrun’s solar panels?',
    answer:
      'Sunrun does not manufacture panels. Its solar panels page names Tesla Powerwall as a battery option but no panel or inverter brand, so the brand depends on the proposal. Ask for the module and inverter model numbers in the contract.',
  },
  {
    question: 'Is Sunrun still honoring Vivint Solar contracts?',
    answer:
      'Sunrun completed its all-stock acquisition of Vivint Solar on October 8, 2020, and said Vivint Solar would be integrated into Sunrun. Legacy customers should confirm in writing which Sunrun entity now holds their agreement and where to send service and warranty claims.',
  },
  {
    question: 'Does the Sunrun Guarantee cover a system I bought for cash?',
    answer:
      'Sunrun says the guarantee comes with its Subscription and Protection Plus plans and is not available in Florida. On a cash purchase or third-party loan, ask whether Protection Plus is included; otherwise the manufacturers’ equipment warranties are what you have.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function SunrunReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <Link href='/solar-installers' className='hover:text-primary transition-colors'>Solar company reviews</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Sunrun Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Installer Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunrun Reviews (2026): Business Status, Complaints, Contracts and Vivint Solar
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime={checked}>Updated September 23, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>12 min read</span>
                </div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Sunrun is still in business. Its investor site showed no bankruptcy filing when we checked
                on September 23, 2026, and its second-quarter 2026 report counted 1,034,738 subscribers.
                Sunrun sells mostly leases and power purchase agreements, it absorbed Vivint Solar in 2020,
                and its BBB profile listed 4,017 complaints over three years, most about service and repairs.
              </p>
              <p className={p}>
                This review is for a California homeowner deciding whether to sign with Sunrun, or trying
                to understand an agreement already signed. It uses Sunrun’s own disclosures, its published
                guarantee and roofing terms, and the Better Business Bureau’s complaint record. It does not
                rank Sunrun against other installers.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Subscribers (June 30, 2026)', value: '1,034,738', source: { url: SRC.q2, date: checked } },
                    { label: 'Storage attachment, Q2 2026', value: '74%', note: 'Share of new installs with a battery', source: { url: SRC.q2, date: checked } },
                    { label: 'BBB complaints, last 3 years', value: '4,017', note: 'A+ rated, accredited', source: { url: SRC.bbb, date: checked } },
                    { label: 'Vivint Solar acquisition closed', value: 'Oct. 8, 2020', source: { url: SRC.vivint, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Sunrun review and quote comparison' />
              </div>

              <h2 className={h2}>Is Sunrun going out of business in 2026?</h2>
              <p className={p}>
                On the company’s own record, no. Sunrun trades on Nasdaq as RUN, and a public company has
                to announce a bankruptcy filing. When we checked its investor site on September 23, 2026,
                the newest releases were dated September 2026 and none mentioned bankruptcy, Chapter 11,
                restructuring or a wind-down.<Cite href={SRC.ir} date={checked} />
              </p>
              <p className={p}>
                The August 5, 2026 results give a fuller picture than a yes or no. Sunrun added 19,793
                subscribers in the quarter, 31% fewer than a year earlier, and reported Aggregate Subscriber
                Value of $1.2 billion, down 24%. It reported Cash Generation of $23 million and $186 million
                of net cash used in operating activities, lowered its full-year guidance, and said it placed a
                $267 million securitization in August.<Cite href={SRC.q2} date={checked} /> Those are the
                company’s figures, not a forecast from us. They show a large business still raising money
                and still growing its subscriber base, with slower sales than in 2025.
              </p>
              <p className={p}>
                For you, the practical question is what happens to the system and contract if that ever
                changes. Under a lease or PPA the agreement is an asset that can be sold or assigned. Before
                signing, ask who will hold the agreement, which entity must perform service and warranty
                work, and what your rights are if service stops. Get the answers from the documents, not the
                sales call. Our guide to{' '}
                <Link href='/solar-installers/solar-installer-bankruptcy-california' className={a}>
                  what survives when a solar company goes bankrupt
                </Link>{' '}
                walks through each type of contract.
              </p>

              <h2 className={h2}>Is Sunrun owned by Tesla?</h2>
              <p className={p}>
                No. Sunrun is a separate public company. The confusion is understandable, because the two
                work together. Sunrun installs Tesla Powerwall batteries, and on September 21, 2026 the
                companies announced that they had dispatched 580 MW from more than 140,000 home batteries
                during a California heat wave. Sunrun said about 55% of the 110,000 Powerwalls in that event
                were owned by Sunrun.<Cite href={SRC.dispatch} date={checked} /> If you are comparing the
                two as installers, see{' '}
                <Link href='/solar-installers/sunrun-vs-tesla-solar' className={a}>Sunrun vs. Tesla Solar</Link>.
              </p>

              <h2 className={h2}>How much does Sunrun solar cost?</h2>
              <p className={p}>
                Sunrun does not publish a price per watt or a monthly rate, and no primary source gives one,
                so this page does not state one. Most Sunrun customers do not buy the system. They pay
                monthly under a lease or a power purchase agreement, and Sunrun, as the owner, is the party
                that may claim any federal credit. A homeowner who buys gets none on a 2026 installation,
                because the IRS says Section 25D does not apply to expenditures made after December 31,
                2025.<Cite href={SRC.irs} date={checked} />
              </p>
              <p className={p}>
                So compare a Sunrun offer on the terms that decide its cost over 20 or 25 years: the
                first-year payment or per-kWh rate, the annual escalator, the term, the buyout price and what
                happens at the end. Our{' '}
                <Link href='/solar-installers/sunrun-ppa-explained' className={a}>explanation of the Sunrun PPA</Link>{' '}
                and the page on{' '}
                <Link href='/solar-installers/sunrun-buyout-cost' className={a}>how a Sunrun buyout is priced</Link>{' '}
                cover those terms. For what drives any lease payment, see{' '}
                <Link href='/blog/how-much-does-it-cost-to-lease-solar-panels-california' className={a}>
                  how much it costs to lease solar in California
                </Link>
                .
              </p>
              <p className={p}>
                <strong>Does the Sunrun PPA beat other offers?</strong> Only your numbers can answer that.
                Put the PPA rate and escalator next to your utility’s rate for the same hours, then next to a
                cash or loan quote for the same system. If the PPA’s rate in year 10 is above what you expect
                to pay the utility, the offer is weaker than it looks in year one. The{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>
                  side-by-side comparison of cash, loan, lease and PPA
                </Link>{' '}
                lays out the seven terms to line up.
              </p>

              <h2 className={h2}>Sunrun reviews in California: what the complaint record shows</h2>
              <p className={p}>
                We looked at the Better Business Bureau profile for Sunrun, Inc. in San Francisco on
                September 23, 2026. It showed an A+ rating and accreditation, 4,017 complaints in the last
                three years and 1,366 closed in the last 12 months. By type, 2,386 were service or repair
                issues, 722 order issues, 269 sales and advertising issues, 228 billing issues and 224 product
                issues.<Cite href={SRC.bbb} date={checked} />
              </p>
              <p className={p}>
                The recent complaints we read repeat a few themes: long waits for a technician after a
                system stopped working, customers still being billed on a lease while the system was down,
                disputes over who pays to repair roof damage, and trouble reaching someone who can act.
                Complaint counts are not adjusted for size, and Sunrun has more than a million subscribers,
                so the count alone does not tell you the odds of a problem. The themes are what to ask about.
                Ask how a production shortfall is credited, how long a repair visit takes in your area, and
                whether lease payments pause while the system is down.
              </p>
              <p className={p}>
                Star ratings on review sites move every week, so this page does not quote them. Check them
                yourself and note the date. For lawsuits, search the company name in the federal court
                record at CourtListener; a filed complaint is an allegation, not a finding.
              </p>

              <h2 className={h2}>Who manufactures Sunrun’s solar panels?</h2>
              <p className={p}>
                Sunrun does not make panels. Its solar panels page names Tesla Powerwall as a battery option
                and does not name a panel or inverter manufacturer.<Cite href={SRC.panels} date={checked} />{' '}
                The equipment depends on the proposal, so ask for the module make and model, the inverter
                make and model and the battery make and model in the contract. You can then read the
                manufacturer’s warranty for each. Our{' '}
                <Link href='/panel-reviews' className={a}>solar panel brand reviews</Link> cover several
                brands installers offer in California.
              </p>

              <h2 className={h2}>Will Sunrun replace my roof?</h2>
              <p className={p}>
                Sunrun offers roof work through a partner, Remi Roofing. Its roofing page says the program
                can bundle system removal, roof work and reinstallation into one job at a set price, that
                every roof job comes with a 5-year workmanship warranty, and that Remi’s third-party financing
                is not available in New York or Nevada. It also says that in some cases Sunrun may be able to
                cover the roof costs.<Cite href={SRC.roofing} date={checked} /> That is not a promise of a
                new roof. If a roof replacement is part of the pitch, get the scope, the price and who pays
                written into the agreement. For what these offers usually involve, read{' '}
                <Link href='/blog/free-roof-replacement-with-solar-panels-california' className={a}>
                  whether roof replacement with solar is ever really included
                </Link>{' '}
                and the{' '}
                <Link href='/blog/solar-panel-removal-reinstall-cost' className={a}>
                  removal and reinstall checklist
                </Link>
                .
              </p>

              <h2 className={h2}>What the Sunrun Guarantee covers</h2>
              <p className={p}>
                Sunrun’s guarantee page says the coverage comes with its Subscription and Protection Plus
                plans and is not available in Florida.<Cite href={SRC.guarantee} date={checked} /> It lists:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>a guarantee that the system produces at least 90% of estimated production over its life;</li>
                <li>a 25-year promise to cover replacement parts and labor for repairs;</li>
                <li>a watertight warranty against roof leaks or holes from the installation;</li>
                <li>a battery guarantee that the battery keeps your lights on during an outage;</li>
                <li>24/7 monitoring, with production data checked daily against the contract estimate.</li>
              </ul>
              <p className={p}>
                If you buy for cash or with a third-party loan, confirm in writing whether Protection Plus is
                included. Without it, you are relying on the manufacturers’ equipment warranties.
              </p>

              <h2 className={h2}>What happened to Vivint Solar customers?</h2>
              <p className={p}>
                Sunrun completed its all-stock acquisition of Vivint Solar on October 8, 2020, at 0.55 Sunrun
                shares for each Vivint Solar share, and said Vivint Solar would be integrated into Sunrun over
                the following quarters.<Cite href={SRC.vivint} date={checked} /> If you hold a Vivint Solar
                agreement, Sunrun is the company to contact for service, billing and a home-sale transfer.
                Ask for written confirmation of which entity holds your agreement and whether your original
                terms carry over unchanged. Our{' '}
                <Link href='/solar-installers/vivint-review' className={a}>Vivint Solar review</Link> covers
                the California court record and what legacy customers can do.
              </p>

              <h2 className={h2}>Sunrun in California: PG&amp;E programs and grid payments</h2>
              <p className={p}>
                Sunrun lists California among the states where it holds contractor licenses.
                <Cite href={SRC.licenses} date={checked} /> In PG&amp;E territory it has run battery programs
                with the utility that paid enrolled customers to share stored solar in the evening. See{' '}
                <Link href='/solar-installers/pge-and-sunrun' className={a}>PG&amp;E and Sunrun programs</Link>{' '}
                for what each season paid and who could join.
              </p>

              <h2 className={h2}>Sunrun PPA vs. lease, and selling your home</h2>
              <p className={p}>
                Under a PPA you pay for each kilowatt-hour the system produces. Under a lease you pay a fixed
                amount for the equipment. Either way Sunrun or a financing entity owns the system. Decide on
                the escalator, the term, the end-of-term options and the transfer terms, not the label; the{' '}
                <Link href='/solar-installers/sunrun-lease-vs-ppa' className={a}>Sunrun lease vs. PPA</Link>{' '}
                page compares the two.
              </p>
              <p className={p}>
                When you sell, the agreement has to be transferred to the buyer or paid off. Sunrun describes a
                transfer portal, a transfer agreement signed by all parties through DocuSign and a soft credit
                check for the buyer that it says does not affect the buyer’s credit score. It says it
                temporarily removes any NOIEPC or UCC filing on title during the transfer at no cost, and that a
                seller whose buyer declines the agreement can prepay the remaining service instead.
                <Cite href={SRC.move} date={checked} />
                <Cite href={SRC.transfer} date={checked} /> Ask for written proof of how any filing on title is
                handled before closing; our{' '}
                <Link href='/solar-problems/ucc-1-lien-solar-california' className={a}>UCC-1 solar lien explainer</Link>{' '}
                and the guide to{' '}
                <Link href='/blog/what-happens-to-solar-lease-when-i-sell-california' className={a}>
                  selling a home with a solar lease
                </Link>{' '}
                cover the steps.
              </p>
              <p className={p}>
                If your system was installed by a company that no longer supports it, Sunrun’s Lighthouse
                program says it serves owners who have lost access to their original installer.
                <Cite href={SRC.lighthouse} date={checked} />
              </p>

              <h2 className={h2}>Verify Sunrun’s CSLB license yourself</h2>
              <p className={p}>
                Sunrun’s own{' '}
                <a href={SRC.licenses} target='_blank' rel='noopener noreferrer' className={a}>
                  state-by-state contractor-license page
                </a>{' '}
                lists two California numbers — CSLB #750184 and CSLB #969975 — accessed September 22, 2026
                and corroborated by Sunrun’s own contractor-licenses PDF linked from that page. Those are not
                the #925340 shown in the installer-verification box on this page, which does not appear on
                Sunrun’s published license page. We could not independently confirm current status,
                classification, or bond for any of the three numbers: CSLB’s online lookup returned only its
                blank search form, with no rendered license record. Don’t treat “licensed” as settled from
                this page — verify each number yourself at CSLB’s Check License tool before signing anything.
                For what else to check, see our{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>
                  full contractor-verification walkthrough
                </Link>
                .
              </p>

              <h2 className={h2}>When Sunrun fits, and when it doesn’t</h2>
              <p className={p}>
                Sunrun fits a homeowner who wants a fixed monthly payment with little or nothing upfront, wants
                a battery included (74% of its new installs in the second quarter of 2026 had one), and is
                comfortable with a 20- to 25-year agreement with a company whose finances are public. It fits
                less well if you want to own the system, if fast post-install service is your deciding factor,
                or if you plan to sell the home soon and do not want a buyer to take on the agreement. This page
                does not recommend or rank installers. Compare at least two written quotes, and see other{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link>.
              </p>

              <div className='not-prose'>
                <FaqJsonLd items={faqs} />
                <FaqBlock items={faqs} schema={false} />
              </div>

              <div className='not-prose'>
                <SourceList sources={sources} />
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>
                Considering Sunrun? Compare With Two Other Installers First.
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                California Rate Relief is a private referral service. Submit one short form and it may forward
                your inquiry to independent California providers, subject to availability, so you can compare
                pricing, equipment and warranty terms side by side before you commit. No installer is named as a
                partner and no provider is endorsed.
              </p>
              <div className='flex justify-center'>
                <Link
                  href='#solar-inquiry'
                  className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                >
                  Request a solar review
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>
                California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Sunrun review and quote comparison' />
            </div>

            <HubSpokeLinks hub='installer_reviews' currentPath={path} />

            <div className='mt-10'>
              <Link href='/solar-installers' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'>
                <ArrowLeft className='h-4 w-4' />
                Back to California solar company reviews
              </Link>
            </div>
            <RelatedGuides
              heading='What the agreement does over its full term'
              links={[
                { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa', label: 'How a PPA differs from a lease' },
                { href: '/blog/what-happens-if-stop-paying-solar-lease-california', label: 'What default does to the agreement' },
                { href: '/solar-problems/solar-escalator-clause-explained', label: 'What an annual escalator does to the later years' },
                { href: '/battery/tesla-powerwall-3-cost-california', label: 'What a Powerwall 3 costs installed' },
              ]}
            />
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'>
        <VerifyInstallerBox installerName='Sunrun' cslbLicenseNumber='925340' bbbProfileUrl='https://www.bbb.org/us/ca/san-francisco/profile/solar-energy-equipment-dealers/sunrun-inc-1116-312886' />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
