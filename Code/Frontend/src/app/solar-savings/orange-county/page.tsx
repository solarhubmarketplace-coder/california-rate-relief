import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { RATE_TRACKER_CRUMB } from '@/lib/city-pages';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight } from 'lucide-react';
import {
  CITIES,
  UTILITY_DATA,
  utilityRateText,
  type CityData,
} from '@/data/cities-data';
import { savingsCityHref } from '@/lib/canonical-redirects';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RegionalCostCities } from '@/components/shared/RegionalCostCities';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { RATE_TRACKER_PATH } from '@/data/utility-rate-tracker';
import { Byline } from '@/components/trust/Byline';

// Region-specific sources for the prose below, fetched 2026-09-23; see the
// Sources line on the page.
const CHECKED = 'September 23, 2026';
const ANAHEIM_RATES_URL = 'https://www.anaheim.net/6335/Residential-Rates';
const SDGE_ABOUT_URL = 'https://www.sdge.com/more-information/our-company/about-us';
const OCPA_URL = 'https://www.ocpower.org/';
// 2026-09-23 (Tier 2, citycos): OCPA's FAQ lists its current members, and its
// Huntington Beach page says those customers returned to SCE in 2024. The
// Energy Commission's CCA layer still shades Huntington Beach as OCPA.
const OCPA_FAQ_URL = 'https://www.ocpower.org/faq/';
const OCPA_HB_URL = 'https://www.ocpower.org/huntington-beach-2/';
const SCE_CCA_URL = 'https://www.sce.com/partners/partnerships/community-choice-aggregation';
const SCE_BSC_URL = 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc';
const CEC_URL =
  'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about';
const PAO_Q2_2026_URL =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf';

// 2026-09-23 (topical-authority pass, city_bills hub): the old title read
// "Solar Companies in Orange County", an installer query this /solar-savings
// page does not answer. It ranks for "electricity provider orange county
// california" and "average electric bill orange county", so it now leads with
// those, per Decision 18 (keep the URL, re-scope the title).
const TITLE = 'Orange County Electricity Providers: SCE, Anaheim, SDG&E';
const DESCRIPTION =
  'Who supplies electricity in Orange County: SCE, Anaheim Public Utilities, SDG&E in the south, and Orange County Power Authority. Rates, bills and solar rules.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/solar-savings/orange-county',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: 'https://ratereliefca.com/solar-savings/orange-county',
    modifiedTime: '2026-09-23T00:00:00Z',
  },
};

const FAQS = [
  {
    question: 'Who is the electricity provider in Orange County, California?',
    answer:
      'Southern California Edison serves most of the county, about 70% of its area on the California Energy Commission map. San Diego Gas & Electric serves the southern end, including San Clemente, and the City of Anaheim runs its own utility. In Irvine, Buena Park and Fullerton, Orange County Power Authority supplies the generation while SCE delivers it. Huntington Beach left OCPA, and its customers returned to SCE in 2024.',
  },
  {
    question: 'What is the average electric bill in Orange County?',
    answer:
      'No source publishes one figure for the county. For SCE customers, the CPUC Public Advocates Office estimated June 2026 average bills for customers not on CARE at $152 a month in a cool climate zone where homes use about 385 kWh a month, and $254 in a hot zone using about 700 kWh. Your own twelve months of bills are the figure to use.',
  },
  {
    question: 'What are electricity rates in Orange County?',
    answer:
      "SCE's residential average rate was 34.4 cents per kWh as of June 1, 2026 (CPUC Public Advocates Office), plus a Base Services Charge of $24.15 a month for customers not on CARE or FERA. Anaheim posts its own tiered domestic rate, and SDG&E's average was 45.5 cents.",
  },
];

// Filter cities in Orange County
const orangeCountyCities = CITIES.filter(
  (city) => city.county === 'Orange County'
).sort((a, b) => a.name.localeCompare(b.name));

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Orange County Solar Energy & Cost Reduction',
    description:
      'A guide to solar energy options and electric bill reduction strategies for Orange County, California homeowners.',
    url: 'https://ratereliefca.com/solar-savings/orange-county',
    // mainEntity was a LocalBusiness for this region; CRR has no premises
    // anywhere, so it was removed (design pass 2, 2026-09-22).
  };
}

export default function OrangeCountySolarPage() {
  const sceUtility = UTILITY_DATA['sce'];
  const sdgeUtility = UTILITY_DATA['sdge'];

  return (
    <PublicLayout breadcrumbLabel='Orange County' breadcrumbParents={[RATE_TRACKER_CRUMB]}>
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            {/* Breadcrumbs: Home > California utility rate tracker > Orange County, the same
                list PublicLayout emits as BreadcrumbList (Block 5 §5.6). */}
            <BreadcrumbTrail
              crumbs={[RATE_TRACKER_CRUMB]}
              current='Orange County'
              className='flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8'
            />

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Who Provides Electricity in Orange County
              </h1>
              <Byline updated="2026-09-23" />
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                Southern California Edison delivers electricity to most of Orange County. The City of Anaheim runs its own utility, and the southern end of the county, including San Clemente, is San Diego Gas &amp; Electric territory. In three cities, Orange County Power Authority buys the power that SCE delivers. They price electricity very differently, so start with the name on your bill.
              </p>
              <p className='text-sm text-muted-foreground mt-3'>
                Updated {CHECKED}. California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
            </div>

            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                How the county splits between providers
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                The California Energy Commission maps each utility&apos;s territory. Laid over the county boundary, its layers (queried {CHECKED}) put about 70% of Orange County&apos;s area in SCE territory, about 14% in SDG&amp;E&apos;s along the south, and about 6% in the City of Anaheim&apos;s own utility. The Commission&apos;s community choice layer still shades Huntington Beach as Orange County Power Authority territory, but OCPA&apos;s own FAQ names only Buena Park, Fullerton and Irvine as current member cities, with Fountain Valley beginning service soon, and OCPA says its Huntington Beach customers returned to SCE in 2024. SCE still delivers the power and sends the bill in the member cities.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                On bills, the Public Advocates Office&apos;s June 2026 estimates for SCE customers not on CARE were $152 a month in a cool climate zone where homes use about 385 kWh a month and $254 in a hot one using about 700 kWh; CARE customers averaged $81 and $165. Since November 2025 SCE has added a Base Services Charge of $24.15 a month for customers not on CARE or FERA ($12.08 on FERA, $6.00 on CARE) and lowered its per-kWh prices by about 10%. Current averages for every utility are on the <Link href={RATE_TRACKER_PATH} className='text-primary underline'>California utility rate tracker</Link>. Sources: <a href={CEC_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>California Energy Commission, Electric Load Serving Entities</a>; <a href={OCPA_FAQ_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Orange County Power Authority, FAQ</a>; <a href={OCPA_HB_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>OCPA, Huntington Beach customers return to SCE</a>; <a href={PAO_Q2_2026_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>CPUC Public Advocates Office, Q2 2026 Electric Rates Report</a>; <a href={SCE_BSC_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SCE, Base Services Charge</a>; each fetched {CHECKED}.
              </p>
            </section>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Orange County solar savings and quote comparison" utility="sce" className='mb-12' />

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Three utilities, three different bills
              </h2>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>SCE: Irvine, Santa Ana, Huntington Beach, Westminster</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                {utilityRateText(sceUtility).sentence} That covers <Link href={savingsCityHref('irvine')} className='text-primary underline'>Irvine</Link>, <Link href={savingsCityHref('santa-ana')} className='text-primary underline'>Santa Ana</Link>, <Link href={savingsCityHref('huntington-beach')} className='text-primary underline'>Huntington Beach</Link> and <Link href={savingsCityHref('westminster')} className='text-primary underline'>Westminster</Link>. The <Link href='/blog/why-is-my-sce-bill-so-high' className='text-primary underline'>SCE bill guide</Link> and the <Link href='/blog/sce-time-of-use-rates-2026' className='text-primary underline'>SCE time-of-use guide</Link> explain the charges an estimate should start from.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>Anaheim Public Utilities: Anaheim</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Anaheim&apos;s posted domestic rate is an $8.00 monthly charge, 14.00¢ per kWh for the first 10 kWh a day, and 21.49¢ per kWh after that, with a time-of-use option alongside it (Anaheim Public Utilities, Residential Rates, checked September 23, 2026). The page shows no effective date, so confirm the current schedule with the utility. An estimate built on SCE&apos;s average does not describe a bill in <Link href={savingsCityHref('anaheim')} className='text-primary underline'>Anaheim</Link>.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>SDG&amp;E: San Clemente</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                SDG&amp;E says it has powered San Diego and southern Orange counties for over 140 years, and <Link href={savingsCityHref('san-clemente')} className='text-primary underline'>San Clemente</Link> is inside that territory. {utilityRateText(sdgeUtility).sentence} The <Link href='/solar-savings/san-diego-county' className='text-primary underline'>San Diego County guide</Link> covers SDG&amp;E and the community choice aggregators on its side of the line.
              </p>
            </section>

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Where Orange County Power Authority fits
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Orange County Power Authority (OCPA) is a community choice aggregator. Its FAQ names Buena Park, Fullerton and <Link href={savingsCityHref('irvine')} className='text-primary underline'>Irvine</Link> as its current member cities, with Fountain Valley beginning service soon. <Link href={savingsCityHref('huntington-beach')} className='text-primary underline'>Huntington Beach</Link> joined in 2022 but voted to leave in May 2023, and OCPA returned those customers to SCE in 2024. For solar customers, OCPA says it treats Net Billing Tariff customers&apos; generation as if it were under NEM 2.0, trues up in April and pays 10% more than SCE for excess generation. SCE lists OCPA among the CCAs in its territory and says it keeps providing CCA customers with meter reading, billing, maintenance and outage response.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                So an Irvine bill can carry OCPA generation charges next to SCE delivery charges. Ask each bidder which provider the estimate uses for generation, and have both portions modeled from your own bill. For the permit office and generation provider in each city, and what to ask the solar companies bidding there, see <Link href='/solar-companies/orange-county' className='text-primary underline'>comparing solar companies across Orange County</Link>.
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Sources, each checked {CHECKED}: <a href={ANAHEIM_RATES_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Anaheim Public Utilities, Residential Rates</a>; <a href={SDGE_ABOUT_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SDG&amp;E, About Us</a>; <a href={OCPA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Orange County Power Authority</a>; <a href='https://www.ocpower.org/energy-programs/solar-net-energy-metering/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>OCPA, Solar/Net Energy Metering</a>; <a href={SCE_CCA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SCE, Community Choice Aggregation</a>.
              </p>
            </section>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                Solar in Orange County Cities
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {orangeCountyCities.map((city) => {
                  const utility = UTILITY_DATA[city.utilityCode];
                  return (
                    <Link
                      key={city.slug}
                      href={savingsCityHref(city.slug)}
                      className='group bg-card rounded-xl border border-border p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300'
                    >
                      <div className='flex items-start justify-between gap-3'>
                        <div className='flex-1'>
                          <h3 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2'>
                            {city.name}
                          </h3>
                          <div className='space-y-1 text-sm text-muted-foreground'>
                            <p>{city.county}</p>
                            <p>{utility.shortName} service area</p>
                          </div>
                        </div>
                        <div className='text-primary/0 group-hover:text-primary transition-colors'>
                          <ArrowRight className='h-5 w-5' />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* claude/audit-links-20260918 — the cost-layer cities in these
                counties that this hub's own grid does not reach. */}
            <RegionalCostCities region='Orange County' counties={['Orange County']} />

            <FaqJsonLd items={FAQS} />
            <FaqBlock items={FAQS} id='faq' schema={false} />

            <HubSpokeLinks
              hub='city_bills'
              currentPath='/solar-savings/orange-county'
              max={6}
              title='Electric rates and bills in other California cities'
            />

            {/* CTA Section */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Want a Provider to Review Your Orange County Project?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Say which utility bills your address, and whether OCPA appears on the bill, when you send the form below. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
              <Link
                href='#solar-inquiry'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Request a solar review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry utility="sce" topic="Orange County solar savings and quote comparison" />
            </div>
          </div>
        </div>
      </main>

      {/* JSON-LD Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildRegionalCollectionSchema()),
        }}
      />

      {/*
        Article, alongside the CollectionPage node above — not instead of it.
        The two describe different things and neither is redundant:
          - CollectionPage  the index of city pages this hub links to
          - Article         the regional guide prose above that index, which is
                            original editorial content and needs an author,
                            a reviewer and a last-reviewed date for E-E-A-T
        Only the Article node claims mainEntityOfPage, so there is no competing
        "this page is really an X" assertion.

        dateModified is the 2026-09-10 schema/QC review. datePublished is
        deliberately omitted: this page carries no recorded first-publish date
        and inventing one would put an unverifiable date into structured data.
      */}
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline='Who Provides Electricity in Orange County'
        url='https://ratereliefca.com/solar-savings/orange-county'
        dateModified='2026-09-23'
      />

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
