import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { IntentCTA } from '@/components/growth/IntentCTA';
import { articleHref, articlesInCluster } from '@/data/article-pages';

// =============================================================================
// /solar-installers — the index of the installer review section.
//
// WHY THIS PAGE EXISTS
// The 2026-09-18 link audit measured 10 inbound internal links spread across
// the 31 pages of this section, and eight of those pages had none at all:
// Trinity, Sunergy, Sullivan, Powur, Elevation, LA Solar Group, Empire and the
// Enphase/SolarEdge comparison. The section had no index — /solar-installers
// itself 404'd — so the only way in was a body link from a blog post or from
// another review. This page is the index the section never had, and it links
// every one of its children.
//
// WHAT THE ANCHOR TEXT MAY CLAIM
// California Rate Relief refers homeowners to independent providers and installs
// nothing, so nothing here is "our" installer. The blurbs below say what each
// review examines. They deliberately carry no rating, price, complaint count or
// bankruptcy date: those are on the review pages, beside the record they came
// from and the date it was checked, and repeating a figure on an index is how a
// figure goes stale in two places at once.
// =============================================================================

const path = '/solar-installers';

const metaTitle = 'California Solar Company Reviews and Comparisons';
const metaDescription =
  'Reviews of the solar companies selling in California, written from licence records, filings and complaint records. Comparisons and what to do if one fails.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'website',
    url: `https://ratereliefca.com${path}`,
  },
};

interface Entry {
  href: string;
  anchor: string;
  blurb: string;
}

/** The twenty-one company reviews, alphabetical by company. */
const REVIEWS: Entry[] = [
  {
    href: '/solar-installers/ameco-solar-review',
    anchor: 'Ameco Solar review',
    blurb: 'What this Los Angeles installer covers, how it is licensed and what its customer record shows.',
  },
  {
    href: '/solar-installers/baker-electric-solar-review',
    anchor: 'Baker Electric Solar review',
    blurb: 'A San Diego contractor: licence status, service area and how its quoting is structured.',
  },
  {
    href: '/solar-installers/elevation-solar-review',
    anchor: 'Elevation Solar review',
    blurb: 'What the marketplace ratings and the complaint record say about this installer, and what its contracts cover.',
  },
  {
    href: '/solar-installers/empire-solar-review',
    anchor: 'Empire Solar review: which entity you are signing with',
    blurb: 'Several businesses trade under similar names. How to establish which entity is on your contract before you sign.',
  },
  {
    href: '/solar-installers/freedom-forever-review',
    anchor: 'Freedom Forever review',
    blurb: 'The dealer-network model, its bankruptcy proceedings and what an existing customer can and cannot rely on.',
  },
  {
    href: '/solar-installers/la-solar-group-review',
    anchor: 'LA Solar Group review',
    blurb: 'A Los Angeles basin installer: licensing, the rebate programmes it navigates and its complaint record.',
  },
  {
    href: '/solar-installers/momentum-solar-review',
    anchor: 'Momentum Solar review',
    blurb: 'Sales model, equipment, battery options and what customers report about service after the install.',
  },
  {
    href: '/solar-installers/new-day-solar-review',
    anchor: 'New Day Solar review',
    blurb: 'A Riverside County installer: service area, licence record and what its warranty covers.',
  },
  {
    href: '/solar-installers/option-one-solar-review',
    anchor: 'Option One Solar review',
    blurb: 'An Inland Empire installer: what its warranty includes, whether labour is covered and how it is licensed.',
  },
  {
    href: '/solar-installers/palmetto-solar-review',
    anchor: 'Palmetto Solar review',
    blurb: 'How the partner-installer model works, what the monitoring subscription is, and what the complaint record shows.',
  },
  {
    href: '/solar-installers/powur-solar-review',
    anchor: 'Powur review',
    blurb: 'A network sales model with third-party crews: who is accountable for the install and what the complaint record shows.',
  },
  {
    href: '/solar-installers/semper-solaris-review',
    anchor: 'Semper Solaris review',
    blurb: 'A California solar, roofing and HVAC contractor with in-house crews, and what its reviews report.',
  },
  {
    href: '/solar-installers/solar-optimum-review',
    anchor: 'Solar Optimum review',
    blurb: 'A California installer: equipment lines, licence record and any litigation a buyer should know to check.',
  },
  {
    href: '/solar-installers/sullivan-solar-power-review',
    anchor: 'Sullivan Solar Power review',
    blurb: 'A defunct installer, kept here because its former customers still need to know where the warranty went.',
  },
  {
    href: '/solar-installers/sunergy-solar-review',
    anchor: 'Sunergy Solar review',
    blurb: 'What the marketplace ratings and reviews report, and what to confirm about scope before signing.',
  },
  {
    href: '/solar-installers/sunlux-solar-review',
    anchor: 'Sunlux review',
    blurb: 'A Southern California installer: licence record, ratings and how its proposals are put together.',
  },
  {
    href: '/solar-installers/sunnova-review',
    anchor: 'Sunnova review',
    blurb: 'A financier rather than an installer, and what its insolvency proceedings mean for an existing agreement.',
  },
  {
    href: '/solar-installers/sunpower-review',
    anchor: 'SunPower review after the rebrand',
    blurb: 'What happened to the original company, who holds the warranties now and who answers a service call.',
  },
  {
    href: '/solar-installers/sunrun-review',
    anchor: 'Sunrun review',
    blurb: 'What a Sunrun agreement commits a homeowner to over its full term, and what the company reports about itself.',
  },
  {
    href: '/solar-installers/tesla-solar-review',
    anchor: 'Tesla Solar review',
    blurb: 'Published pricing, how the order process works and what customers report about service response.',
  },
  {
    href: '/solar-installers/trinity-solar-review',
    anchor: 'Trinity Solar review',
    blurb: 'A north-east installer. Read this one to check whether it operates in California at all before you wait for a quote.',
  },
];

/** The four head-to-head comparisons. */
const COMPARISONS: Entry[] = [
  {
    href: '/solar-installers/sunrun-vs-sunpower',
    anchor: 'Sunrun vs SunPower',
    blurb: 'Two very different businesses after one of them restructured: who carries the warranty and who does the work.',
  },
  {
    href: '/solar-installers/sunrun-vs-tesla-solar',
    anchor: 'Sunrun vs Tesla Solar',
    blurb: 'Third-party ownership against a cash or loan purchase: price structure, install timeline and service.',
  },
  {
    href: '/solar-installers/sunnova-vs-sunrun',
    anchor: 'Sunnova vs Sunrun',
    blurb: 'A dealer network against in-house crews, and what that difference does to accountability for the install.',
  },
  {
    href: '/solar-installers/enphase-vs-solaredge',
    anchor: 'Enphase vs SolarEdge inverters',
    blurb: 'Microinverters against a string inverter with optimisers: what each does at the roof and what fails differently.',
  },
];

/*
 * CollectionPage with an ItemList of exactly the links rendered. This route is
 * an index; the writing is on the review pages, each of which emits its own
 * Article node with its own reviewed date. No date is invented here.
 */
function buildSchema(items: Entry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'California solar company reviews',
    description: metaDescription,
    url: `https://ratereliefca.com${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'California Rate Relief',
      url: 'https://ratereliefca.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://ratereliefca.com${item.href}`,
        name: item.anchor,
      })),
    },
  };
}

const link = 'font-semibold text-primary hover:underline';

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

export default function SolarInstallersIndex() {
  const guides = articlesInCluster('installer');
  const schemaItems = [
    ...REVIEWS,
    ...COMPARISONS,
    ...guides.map((g) => ({ href: articleHref(g), anchor: g.h1, blurb: g.metaDescription })),
  ];

  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(schemaItems)) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <span>/</span>
              <span className='text-foreground'>Solar company reviews</span>
            </nav>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight'>
              California solar company reviews
            </h1>
            <p className='text-lg text-foreground/80 leading-relaxed mb-5'>
              California Rate Relief is a private referral service. It installs nothing, sells no
              system and has no company to defend, which is the only reason these reviews can say
              what the licence records, the court filings and the complaint files actually say.
            </p>
            <p className='text-foreground/80 leading-relaxed mb-5'>
              Two things are worth doing before you read any of them. Verify the licence and the
              salesperson registration yourself, which takes a minute and settles most questions:{' '}
              <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={link}>
                how to verify a California solar contractor
              </Link>{' '}
              sets out where to look. Then read the company review beside the thing it is trying to
              sell you, because the contract, not the company, is what you are signing.
            </p>
            <p className='text-foreground/80 leading-relaxed mb-10'>
              If you want the shortlist rather than the file on each company, the{' '}
              <Link href='/best-solar-companies-california' className={link}>
                comparison of solar companies in California
              </Link>{' '}
              ranks them against each other, and{' '}
              <Link href='/solar-cost' className={link}>
                what solar costs in your city
              </Link>{' '}
              covers the local utility and permit side of the same decision. If the property is a
              business rather than a house, the reviews below are the wrong shelf:{' '}
              <Link href='/commercial-solar/cost-per-watt-california' className={link}>
                commercial solar cost per watt in California
              </Link>{' '}
              is where a commercial bid gets checked against a published figure.
            </p>

            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Company reviews
              </h2>
              <EntryList entries={REVIEWS} />
            </section>

            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Head to head
              </h2>
              <EntryList entries={COMPARISONS} />
            </section>

            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Contracts, buyouts and what happens when a company fails
              </h2>
              <p className='text-muted-foreground mb-4 leading-relaxed'>
                What an installer&rsquo;s insolvency does to a warranty, a loan, a lease or a PPA,
                and how the main third-party ownership agreements are actually written.
              </p>
              <ul className='space-y-3'>
                {guides.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={articleHref(guide)} className={link}>
                      {guide.h1}
                    </Link>
                    <span className='block text-sm text-muted-foreground'>
                      {guide.metaDescription}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <IntentCTA variant='review' />
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
