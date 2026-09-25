import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { articleHref, articlesInCluster } from '@/data/article-pages';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { Byline } from '@/components/trust/Byline';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// =============================================================================
// /solar-installers — hub of the installer review section.
//
// WHY THIS PAGE EXISTS
// The 2026-09-18 link audit measured 10 inbound internal links spread across
// the 31 pages of this section, and eight of those pages had none at all. The
// section had no index — /solar-installers itself 404'd. This page is the index
// the section never had, and it links every one of its children.
//
// 2026-09-23: it is now also the page for the head query "solar reviews"
// (topical-authority hub installer_reviews). It leads with a short guide to
// reading solar company reviews, so it emits an Article for that guide plus an
// ItemList of exactly the links rendered below.
//
// WHAT THE ANCHOR TEXT MAY CLAIM
// California Rate Relief refers homeowners to independent providers and installs
// nothing, so nothing here is "our" installer. The blurbs below say what each
// review examines. The only facts stated on this page are the dated status
// facts in the "who still sells in California" table and the failures list,
// each with its source; ratings and complaint counts stay on the review pages.
// =============================================================================

const path = '/solar-installers';
const checked = '2026-09-23';

const metaTitle = 'Solar Reviews for California Homeowners (2026)';
const metaDescription =
  'How to read solar company reviews, which companies still list California, and our reviews of each, built on BBB files, court dockets and company filings.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${path}`,
    images: [CRR_SOCIAL_CARD],
  },
};

interface Entry {
  href: string;
  anchor: string;
  blurb: string;
}

/** The company reviews, alphabetical by company. */
const REVIEWS: Entry[] = [
  { href: '/solar-installers/ameco-solar-review', anchor: 'Ameco Solar review', blurb: 'What this Los Angeles installer covers, how it is licensed and what its customer record shows.' },
  { href: '/solar-installers/baker-electric-solar-review', anchor: 'Baker Electric Solar review', blurb: 'A San Diego contractor: licence status, service area and how its quoting is structured.' },
  { href: '/solar-installers/elevation-solar-review', anchor: 'Elevation Solar review', blurb: 'What its purchase agreement covers, where homeowner complaints concentrate, and what to check before signing.' },
  { href: '/solar-installers/empire-solar-review', anchor: 'Empire Solar review: which entity you are signing with', blurb: 'Several businesses trade under similar names. How to establish which entity is on your contract before you sign.' },
  { href: '/solar-installers/freedom-forever-review', anchor: 'Freedom Forever review', blurb: 'The dealer-network model, its bankruptcy proceedings and what an existing customer can and cannot rely on.' },
  { href: '/solar-installers/la-solar-group-review', anchor: 'LA Solar Group review', blurb: 'A Los Angeles basin installer: licensing, the rebate programmes it navigates and its complaint record.' },
  { href: '/solar-installers/momentum-solar-review', anchor: 'Momentum Solar review', blurb: 'Whether it serves California at all, its BBB complaint file and the lawsuits over marketing calls.' },
  { href: '/solar-installers/new-day-solar-review', anchor: 'New Day Solar review', blurb: 'A Riverside County installer: service area, licence record and what its warranty covers.' },
  { href: '/solar-installers/option-one-solar-review', anchor: 'Option One Solar review', blurb: 'An Inland Empire installer: what its warranty includes, whether labour is covered and how it is licensed.' },
  { href: '/solar-installers/palmetto-solar-review', anchor: 'Palmetto Solar and LightReach review', blurb: 'LightReach is Palmetto’s partner network: its BBB file, the federal dockets and the 25-year Energy Plan terms.' },
  { href: '/solar-installers/powur-solar-review', anchor: 'Powur review', blurb: 'A network sales model with third-party crews: who is accountable for the install and what the complaint record shows.' },
  { href: '/solar-installers/semper-solaris-review', anchor: 'Semper Solaris review', blurb: 'A California solar, roofing and HVAC contractor with in-house crews, and what its reviews report.' },
  { href: '/solar-installers/solar-optimum-review', anchor: 'Solar Optimum review', blurb: 'A California installer: equipment lines, licence record and any litigation a buyer should know to check.' },
  { href: '/solar-installers/sullivan-solar-power-review', anchor: 'Sullivan Solar Power review', blurb: 'A defunct installer, kept here because its former customers still need to know where the warranty went.' },
  { href: '/solar-installers/sunergy-solar-review', anchor: 'Sunergy Solar review', blurb: 'A Lake Forest installer: what it publishes about warranties and equipment, and which Sunergy you are dealing with.' },
  { href: '/solar-installers/sunlux-solar-review', anchor: 'Sunlux review: is it legit?', blurb: 'A Corona installer: its BBB file, the docket search, its published 25-year hardware warranty and the licence check.' },
  { href: '/solar-installers/sunnova-review', anchor: 'Sunnova review', blurb: 'A financier rather than an installer, and what its insolvency proceedings mean for an existing agreement.' },
  { href: '/solar-installers/sunpower-review', anchor: 'SunPower review after the rebrand', blurb: 'What happened to the original company, who holds the warranties now and who answers a service call.' },
  { href: '/solar-installers/sunrun-review', anchor: 'Sunrun review', blurb: 'Business status from its own filings, its BBB file, the Sunrun Guarantee, roof work and Vivint contracts.' },
  { href: '/solar-installers/tesla-solar-review', anchor: 'Tesla Solar review', blurb: 'Tesla’s panels, inverter and Powerwall on their datasheets, how quotes work and what to confirm about service.' },
  { href: '/solar-installers/trinity-solar-review', anchor: 'Trinity Solar review', blurb: 'A Northeast installer whose own site lists nine states and no California. Its BBB file and court record.' },
  { href: '/solar-installers/vivint-review', anchor: 'Vivint Solar review', blurb: 'Vivint Solar is now part of Sunrun. What legacy customers can do, and the California court record.' },
];

/** Head-to-head comparisons. */
const COMPARISONS: Entry[] = [
  { href: '/solar-installers/sunrun-vs-sunpower', anchor: 'Sunrun vs SunPower', blurb: 'Two very different businesses after one of them restructured: who carries the warranty and who does the work.' },
  { href: '/solar-installers/sunrun-vs-tesla-solar', anchor: 'Sunrun vs Tesla Solar', blurb: 'Third-party ownership against a cash or loan purchase: price structure, install timeline and service.' },
  { href: '/solar-installers/sunnova-vs-sunrun', anchor: 'Sunnova vs Sunrun', blurb: 'A dealer network against in-house crews, and what that difference does to accountability for the install.' },
  { href: '/solar-installers/sunrun-vs-trinity-solar', anchor: 'Sunrun vs Trinity Solar', blurb: 'One lists California and one does not: service area, complaint files and contract type side by side.' },
  { href: '/solar-installers/momentum-solar-vs-trinity-solar', anchor: 'Momentum Solar vs Trinity Solar', blurb: 'Two East Coast installers compared on their own records, and why neither is a California quote.' },
  { href: '/solar-installers/adt-solar-vs-momentum-solar', anchor: 'ADT Solar vs Momentum Solar', blurb: 'ADT left residential solar in 2024. What that means for its customers and for anyone comparing the two.' },
  { href: '/solar-installers/enphase-vs-solaredge', anchor: 'Enphase vs SolarEdge inverters', blurb: 'Microinverters against a string inverter with optimisers: what each does at the roof and what fails differently.' },
];

/** Programs and products that sit with the company reviews. */
const CHECKS: Entry[] = [
  { href: '/solar-installers/licensed-solar-installer', anchor: 'How to find a licensed solar installer', blurb: 'Which CSLB license classes cover solar work, how to pull the list of licensed solar contractors in your county, and how to confirm the one on your contract.' },
  { href: '/solar-installers/worst-solar-companies-california', anchor: 'The worst solar companies in California: how to check a record', blurb: 'No agency ranks installers. The bankruptcy filings on the court record, and how to check any company yourself.' },
  { href: '/blog/free-solar-panels-california', anchor: 'Solar offers that claim to cost nothing', blurb: 'The CPUC says solar is rarely without cost. What a no-cost solar ad can mean, the state program for income-qualified homeowners, and SOMAH.' },
  { href: '/blog/free-roof-replacement-with-solar-panels-california', anchor: 'Roof replacement offers bundled with solar', blurb: 'No California or federal program pays for a new roof because solar goes on it. How a bundled roof offer is paid for, and what to get in writing first.' },
  { href: '/blog/solar-panel-removal-reinstall-cost', anchor: 'Solar panel removal and reinstall cost for a new roof', blurb: 'What sets the cost to remove and reinstall panels for a new roof in California, who may do it, removing panels for good, and disposal rules.' },
  { href: '/solar-panels-california', anchor: 'What solar costs in California and whether it pays', blurb: 'What home solar costs in California, how net billing credits your exports, which incentives still apply in 2026, and how to judge whether it pays.' },
];

const PROGRAMS: Entry[] = [
  { href: '/solar-installers/pge-and-sunrun', anchor: 'PG&E and Sunrun battery programs', blurb: 'What PG&E’s programs with Sunrun paid enrolled customers, who could join and what to ask before enrolling.' },
  { href: '/battery/tesla-powerwall-3-cost-california', anchor: 'Tesla Powerwall 3 cost in California', blurb: 'The installed-cost benchmark, sizing, SGIP status and the net-billing case for a battery.' },
  { href: '/blog/tesla-powerwall-installers-california', anchor: 'Who can install a Tesla Powerwall in California', blurb: 'Who can install a Tesla Powerwall in California, how Tesla’s certified installer program works, and what drives the installed price.' },
  { href: '/battery/tesla-powerwall-alternatives', anchor: 'Tesla Powerwall alternatives compared', blurb: 'Enphase, FranklinWH and SolarEdge against the Powerwall 3: capacity, output, warranty, coupling and what drives installed price in California.' },
  { href: '/battery/sgip-battery-rebate-california', anchor: 'SGIP battery rebate status and who qualifies', blurb: 'What SGIP pays for a home battery, who qualifies for the equity budget, which budgets were open or waitlisted on Sept. 23, 2026, and SCE’s own rules.' },
  { href: '/panel-reviews', anchor: 'Solar panel brand reviews', blurb: 'Where panels are made, what their warranties cover and what the datasheet says, brand by brand.' },
  { href: '/panel-reviews/canadian-solar-panels-review', anchor: 'Canadian Solar panels review', blurb: 'Canadian Solar HiKu panels for California homes: efficiency ratings, temperature performance, 25-year warranties and pricing.' },
  { href: '/panel-reviews/rec-solar-panels-review', anchor: 'REC solar panels review', blurb: 'Who makes REC panels, where they are made, and what the Alpha Pure-RX warranty covers, including the certified-installer ProTrust terms.' },
  { href: '/panel-reviews/silfab-solar-panels-review', anchor: 'Silfab solar panels review', blurb: 'Silfab makes panels in Washington and South Carolina: the SIL-430 QD datasheet, why the product warranty depends on registration, and Silfab vs REC.' },
  { href: '/panel-reviews/trina-solar-panels-review', anchor: 'Trina Solar panels review', blurb: 'A tier-1 manufacturer with a 25-year product and power warranty: what the Vertex S series offers and what to ask a California installer.' },
];

const SRC = {
  sunrunLic: 'https://www.sunrun.com/state-contractor-license-information',
  momentum: 'https://www.momentumsolar.com/',
  trinity: 'https://www.trinitysolar.com/',
  elevation: 'https://poweredbyelevation.com/locations/',
  sunergy: 'https://www.sunergycorp.com/',
  adt: 'https://investor.adt.com/News--Events/news/news-details/2024/ADT-Provides-Solar-Business-Update-and-Advances-Capital-Allocation-Strategy/default.aspx',
  adtFy24: 'https://investor.adt.com/News--Events/news/news-details/2025/ADT-Reports-Fourth-Quarter-and-Full-Year-2024-Results/default.aspx',
  vivint: 'https://investors.sunrun.com/news-events/press-releases/detail/216/sunrun-completes-acquisition-of-vivint-solar-to-accelerate',
  ff: 'https://www.courtlistener.com/docket/73192534/freedom-forever-llc/',
  sunnova: 'https://www.courtlistener.com/docket/70491405/sunnova-energy-international-inc/',
  sunpower: 'https://www.courtlistener.com/docket/69017070/sunpower-corporation/',
  cslb: 'https://www.cslb.ca.gov/onlineservices/checklicenseii/checklicense.aspx',
  cpucGuide: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  cslbSolar: 'https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx',
};

const sources: ReviewSource[] = [
  { name: 'Sunrun — State contractor license information', url: SRC.sunrunLic, supports: 'California listed among licensed states', checked },
  { name: 'Momentum Solar — homepage', url: SRC.momentum, supports: 'Service states CT, FL, MA, NV, NJ, NY, TX', checked },
  { name: 'Trinity Solar — homepage', url: SRC.trinity, supports: 'Service states CT, DE, MD, MA, NJ, NY, PA, RI, OH', checked },
  { name: 'Elevation — Locations', url: SRC.elevation, supports: 'Active installation in AZ, CA (“from San Diego to San Francisco”), NV, TX, FL', checked },
  { name: 'Sunergy — homepage (sunergycorp.com)', url: SRC.sunergy, supports: 'Lake Forest, CA; service area California, Montana, Alaska', checked },
  { name: 'ADT — Solar business update (January 24, 2024)', url: SRC.adt, supports: 'ADT to exit residential solar', checked },
  { name: 'ADT — Fourth quarter and full year 2024 results', url: SRC.adtFy24, supports: 'Solar business substantially wound down in Q3 2024; reported as discontinued operations', checked },
  { name: 'Sunrun — Completion of the Vivint Solar acquisition (October 8, 2020)', url: SRC.vivint, supports: 'Vivint Solar acquired by Sunrun', checked },
  { name: 'CourtListener — In re Freedom Forever LLC, Bankr. D. Del. No. 26-10522', url: SRC.ff, supports: 'Chapter 11 filed April 15, 2026; converted to Chapter 7 by order signed August 7, 2026', checked },
  { name: 'CourtListener — In re Sunnova Energy International Inc., Bankr. S.D. Tex. No. 25-90160', url: SRC.sunnova, supports: 'Chapter 11 filed June 8, 2025', checked },
  { name: 'CourtListener — In re SunPower Corporation, Bankr. D. Del. No. 24-11649', url: SRC.sunpower, supports: 'Chapter 11 filed August 5, 2024', checked },
  { name: 'CPUC — California Solar Consumer Protection Guide overview', url: SRC.cpucGuide, supports: 'Signature and initials required with residential interconnection applications in PG&E, SCE, SDG&E, BVES, PacifiCorp and Liberty territory; get the CSLB license and HIS registration numbers; 800-321-CSLB; version 4 published in 2025', checked },
  { name: 'CSLB — Solar requirements', url: SRC.cslbSolar, supports: 'Solar energy system disclosure document before the sale is completed: total cost and payments including financing costs, and the cancellation right under Section 7159', checked },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Solar reviews for California homeowners: how to read them, and which companies still sell here',
  description: metaDescription,
  dateModified: checked,
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};

/* ItemList of exactly the links rendered in the lists below. */
function buildList(items: Entry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'California solar company reviews',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://ratereliefca.com${item.href}`,
      name: item.anchor,
    })),
  };
}

const link = 'font-semibold text-primary hover:underline';
const a = 'text-primary underline';
const h2 = 'text-2xl font-bold text-foreground mb-4 tracking-tight';
const p = 'text-foreground/80 leading-relaxed mb-5';

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className='space-y-3'>
      {entries.map((entry) => (
        <li key={entry.href}>
          <Link href={entry.href} className={link}>
            {entry.anchor}
          </Link>
          <span className='block text-sm text-muted-foreground'>{entry.blurb}</span>
        </li>
      ))}
    </ul>
  );
}

const STATUS: { company: string; href: string; status: string; src: string }[] = [
  { company: 'Sunrun', href: '/solar-installers/sunrun-review', status: 'Lists California among its licensed states', src: SRC.sunrunLic },
  { company: 'Elevation', href: '/solar-installers/elevation-solar-review', status: 'Lists California (“from San Diego to San Francisco”) among five states', src: SRC.elevation },
  { company: 'Sunergy (Lake Forest)', href: '/solar-installers/sunergy-solar-review', status: 'California-based; also lists Montana and Alaska', src: SRC.sunergy },
  { company: 'Momentum Solar', href: '/solar-installers/momentum-solar-review', status: 'Does not list California; lists CT, FL, MA, NV, NJ, NY, TX', src: SRC.momentum },
  { company: 'Trinity Solar', href: '/solar-installers/trinity-solar-review', status: 'Does not list California; lists nine Northeast, Mid-Atlantic and Ohio states', src: SRC.trinity },
  { company: 'ADT Solar', href: '/solar-installers/adt-solar-vs-momentum-solar', status: 'ADT exited residential solar (announced January 24, 2024)', src: SRC.adt },
  { company: 'Vivint Solar', href: '/solar-installers/vivint-review', status: 'Acquired by Sunrun, October 8, 2020', src: SRC.vivint },
];

export default function SolarInstallersIndex() {
  const guides = articlesInCluster('installer');
  const listItems = [
    ...REVIEWS,
    ...COMPARISONS,
    ...PROGRAMS,
    ...CHECKS,
    ...guides.map((g) => ({ href: articleHref(g), anchor: g.h1, blurb: g.metaDescription })),
  ];

  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(buildList(listItems)) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <span>/</span>
              <span className='text-foreground'>Solar company reviews</span>
            </nav>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-2 tracking-tight leading-tight'>
              Solar reviews for California homeowners
            </h1>
            <Byline updated={checked} sourceCount={sources.length} sourcesHref='#sources' className='mb-6' />

            <p className='text-lg text-foreground/80 leading-relaxed mb-5'>
              The most useful solar review is not a star rating. It is the company’s record: whether it still
              sells in California, what its Better Business Bureau complaints are about, what the federal court
              dockets show, and whether its license checks out. This page explains how to read each one and
              links to our review of every company we cover, each dated to the day it was checked.
            </p>
            <p className={p}>
              California Rate Relief is a private referral service. It installs nothing and sells no system,
              which is why these reviews can report what the licence records, court filings and complaint files
              actually say. Verify the licence and the salesperson registration yourself first; our guide to{' '}
              <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>
                verifying a California solar contractor
              </Link>{' '}
              takes about a minute per company. Then read the review beside the contract you are being offered,
              because the contract, not the company, is what you sign.
            </p>

            <HeroQuickCheck topic='California solar installer comparison' className='mb-12' />

            <section className='mb-12'>
              <h2 className={h2}>How to read solar company reviews</h2>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>Star ratings</h3>
              <p className={p}>
                Ratings on review sites change weekly, mix installation-day reviews with service reviews years
                later, and cannot tell you which crew or branch you will get. We do not quote them. If you use
                them, sort by newest, read the one- and two-star reviews for your region, and note the date.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>BBB complaint files</h3>
              <p className={p}>
                A BBB letter grade and a BBB complaint count are different things. A company can hold an A+ and
                still have thousands of complaints on file; Sunrun’s profile showed both when we checked it on
                September 23, 2026. Counts are not adjusted for size, so a company with a million customers will
                have more than a regional installer. The useful part is the breakdown by type and the recent complaint text: if most
                complaints are service or repair issues, ask how long a repair visit takes in your area and what
                happens to your payments while the system is down.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>Court dockets</h3>
              <p className={p}>
                Federal dockets are searchable at CourtListener. Two cautions. A party-name search returns every
                case where the name appears, including unrelated ones, so open the docket before counting it. And a
                filed complaint is an allegation, while a closed docket does not say who won. Our reviews list the
                court, case number and filing date so you can read the docket yourself.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>License and business status</h3>
              <p className={p}>
                Check the license number on your contract at the{' '}
                <a href={SRC.cslb} target='_blank' rel='noopener noreferrer' className={a}>CSLB license lookup</a>,
                and make sure the business name on the license matches the name on the contract. For a public
                company, bankruptcy or a wind-down must be announced, so its investor-relations site is the first
                place to look; for any company, a bankruptcy filing appears on the federal court docket.
              </p>
            </section>

            <section id='local-solar-reviews' className='mb-12 scroll-mt-24'>
              <h2 className={h2}>Local solar reviews: how to check a local installer</h2>
              <p className={p}>
                A local installer often has too few online reviews to average, and the ones it has may belong to another
                branch or to a company with a similar name. The records that are tied to the business itself tell you more.
                Four checks cover most of it, and none takes long.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>Match the license to the contract</h3>
              <p className={p}>
                The CPUC tells homeowners to get the contractor’s CSLB license number and the salesperson’s Home Improvement
                Salesperson (HIS) registration number before signing, and to check both at CSLB or by calling
                800-321-CSLB.<Cite href={SRC.cpucGuide} date={checked} /> Make sure the business name on the license is the
                name on the contract. Several companies we review trade under names close to someone else’s, and a
                national brand can sell through a local partner that holds its own license.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>Ask for the two documents the rules require</h3>
              <p className={p}>
                CSLB requires a solar contractor to give you a solar energy system disclosure document before the sale is
                complete. It has to show the total cost and payments for the system, including financing costs, and your
                right to cancel under Business and Professions Code section 7159.<Cite href={SRC.cslbSolar} date={checked} />{' '}
                If an investor-owned utility such as PG&amp;E, SCE or SDG&amp;E serves you, the installer must also collect
                your initials and signature on the CPUC’s California Solar Consumer Protection Guide before it applies to
                connect your system; version 4 was published in 2025.<Cite href={SRC.cpucGuide} date={checked} /> An
                installer that has not handed you both has not given you a complete offer.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>Look up the complaint and court record under the contract name</h3>
              <p className={p}>
                Search the BBB by the business name and city on the contract, not by the brand in the ad. The profile for{' '}
                <Link href='/solar-installers/sunlux-solar-review' className={a}>Sunlux</Link>, for example, is filed under
                Corona, and the one for{' '}
                <Link href='/solar-installers/palmetto-solar-review' className={a}>LightReach</Link> sits under Palmetto Solar in
                Charlotte, North Carolina. Read what the complaints are about, not just the grade. Then search federal dockets
                on CourtListener under the same name. A small local company often has none, which is a starting point
                rather than a clean record, because that search does not reach California’s state courts.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>Ask for local proof</h3>
              <p className={p}>
                Ask for two or three systems it installed near you in the past year, with the permit numbers, and the name
                of the person who will answer a service call once the system is running. Service after installation is the
                largest complaint category in almost every BBB file we have read. To find licensed solar contractors in
                your county, see{' '}
                <Link href='/solar-installers/licensed-solar-installer' className={a}>how to find a licensed solar installer</Link>;
                for the utility, permit and cost picture where you live, see solar companies in{' '}
                <Link href='/solar-companies/los-angeles' className={a}>Los Angeles</Link>,{' '}
                <Link href='/solar-companies/san-bernardino' className={a}>San Bernardino</Link>,{' '}
                <Link href='/solar-companies/riverside' className={a}>Riverside</Link> and{' '}
                <Link href='/solar-companies/sacramento' className={a}>Sacramento</Link>.
              </p>
            </section>

            <section className='mb-12'>
              <h2 className={h2}>Which reviewed companies still list California?</h2>
              <p className={p}>
                Several companies people search for do not sell here, and some no longer sell solar at all. This
                is what each company’s own site or filing said on September 23, 2026.
              </p>
              <div className='overflow-x-auto rounded-xl border border-border mb-4'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Company</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>California status (own site or filing)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STATUS.map((row) => (
                      <tr key={row.company} className='border-t border-border align-top'>
                        <td className='px-4 py-3'>
                          <Link href={row.href} className={link}>{row.company}</Link>
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          {row.status}
                          <Cite href={row.src} date={checked} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={p}>
                Three companies that sold in California have filed for bankruptcy since 2024. SunPower filed
                Chapter 11 on August 5, 2024.<Cite href={SRC.sunpower} date={checked} /> Sunnova filed Chapter 11
                on June 8, 2025.<Cite href={SRC.sunnova} date={checked} /> Freedom Forever filed Chapter 11 on
                April 15, 2026, and the court converted the case to Chapter 7 on August 7, 2026.
                <Cite href={SRC.ff} date={checked} /> If you hold a contract with any of them, start with{' '}
                <Link href='/solar-installers/solar-installer-bankruptcy-california' className={a}>
                  what survives a solar company bankruptcy
                </Link>
                .
              </p>
            </section>

            <section className='mb-12'>
              <h2 className={h2}>Company reviews</h2>
              <EntryList entries={REVIEWS} />
            </section>

            <section className='mb-12'>
              <h2 className={h2}>Head to head</h2>
              <EntryList entries={COMPARISONS} />
            </section>

            <section className='mb-12'>
              <h2 className={h2}>Batteries, panels and utility programs</h2>
              <EntryList entries={PROGRAMS} />
            </section>

            <section className='mb-12'>
              <h2 className={h2}>Checking a company before you sign</h2>
              <EntryList entries={CHECKS} />
            </section>

            <section className='mb-12'>
              <h2 className={h2}>Contracts, buyouts and what happens when a company fails</h2>
              <p className='text-muted-foreground mb-4 leading-relaxed'>
                What an installer&rsquo;s insolvency does to a warranty, a loan, a lease or a PPA, and how the
                main third-party ownership agreements are actually written.
              </p>
              <ul className='space-y-3'>
                {guides.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={articleHref(guide)} className={link}>
                      {guide.h1}
                    </Link>
                    <span className='block text-sm text-muted-foreground'>{guide.metaDescription}</span>
                  </li>
                ))}
              </ul>
            </section>

            <p className={p}>
              If you want the shortlist rather than the file on each company, the{' '}
              <Link href='/best-solar-companies-california' className={a}>comparison of solar companies in California</Link>{' '}
              covers how to choose, and{' '}
              <Link href='/solar-cost' className={a}>what solar costs in your city</Link> covers the local utility and
              permit side of the same decision. For a business property, check a commercial bid against{' '}
              <Link href='/commercial-solar/cost-per-watt-california' className={a}>commercial solar cost per watt in California</Link>.
            </p>

            <SourceList sources={sources} />

            <HubSpokeLinks hub='installers' currentPath={path} max={4} title='Choosing a solar company in California' />
            <HubSpokeLinks hub='financing' currentPath={path} max={4} title='Paying for the system: leases, PPAs and loans' />

            <div className='mt-10'>
              <SolarInquiry variant='review' topic='California solar installer comparison' />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
