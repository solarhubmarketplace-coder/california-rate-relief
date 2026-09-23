import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight } from 'lucide-react';
import { CITIES, UTILITY_DATA, utilityRateText } from '@/data/cities-data';
import { savingsCityHref } from '@/lib/canonical-redirects';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RegionalCostCities } from '@/components/shared/RegionalCostCities';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

// Region-specific sources for the prose below, fetched 2026-09-23; see the
// Sources line on the page. Which utility serves which city comes from
// src/data/cities-data.ts (CEC service-territory check, 2026-09-22).
const CHECKED = 'September 23, 2026';
const RPU_URL = 'https://www.riversideca.gov/utilities/about-rpu';
const CORONA_URL = 'https://www.coronaca.gov/departments/utilities/customer-care/services/electric-service';
const MVU_URL = 'https://www.moval.org/mvu/';
const IID_URL = 'https://www.iid.com/energy/about-iid-energy';
const SCE_CCA_URL = 'https://www.sce.com/partners/partnerships/community-choice-aggregation';
const DCE_URL = 'https://desertcommunityenergy.org/';

export const metadata: Metadata = {
  title: "Inland Empire Solar Guide: Riverside & San Bernardino",
  description: "Inland Empire solar: SCE or a city utility in Riverside, Corona and Moreno Valley, IID in the Coachella Valley, and the CCAs on SCE bills.",
  alternates: {
    canonical: '/solar-savings/inland-empire',
  },
  openGraph: {
    title: 'Inland Empire Solar Guide: Riverside & San Bernardino',
    description:
      'Which utility bills your Inland Empire address, from SCE to Riverside Public Utilities and IID, and where community choice fits.',
    type: 'website',
  },
};

const inlandEmpireCounties = [
  'Riverside County',
  'San Bernardino County',
];

const inlandEmpireCities = CITIES.filter((city) =>
  inlandEmpireCounties.includes(city.county)
).sort((a, b) => a.name.localeCompare(b.name));

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Inland Empire Solar Guide',
    description:
      'Editorial navigation for solar-planning resources in Riverside and San Bernardino counties.',
    url: 'https://ratereliefca.com/solar-savings/inland-empire',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: inlandEmpireCities.map((city, position) => ({
        '@type': 'ListItem',
        position: position + 1,
        name: `${city.name} solar guide`,
        url: `https://ratereliefca.com${savingsCityHref(city.slug)}`,
      })),
    },
  };
}

export default function InlandEmpireSolarPage() {
  const sceUtility = UTILITY_DATA['sce'];

  return (
    <PublicLayout>
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            {/* Breadcrumbs */}
            <nav className='flex items-center gap-2 text-sm text-muted-foreground mb-8'>
              <Link href='/' className='hover:text-foreground'>
                Home
              </Link>
              <span>/</span>
              <Link href='#solar-inquiry' className='hover:text-foreground'>
                Solar Savings
              </Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Inland Empire</span>
            </nav>

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in the Inland Empire
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                Southern California Edison bills most of the Inland Empire cities in this guide. Four are different: Riverside, Corona and Moreno Valley have city utilities that serve some or all addresses, and Palm Desert sits where SCE and the Imperial Irrigation District meet. Check the name on your bill before you compare any estimate.
              </p>
            </div>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Inland Empire solar planning and quote comparison" className='mb-12' />

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                SCE and the three city utilities
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                {utilityRateText(sceUtility).sentence} That applies in <Link href={savingsCityHref('temecula')} className='text-primary underline'>Temecula</Link>, <Link href={savingsCityHref('murrieta')} className='text-primary underline'>Murrieta</Link>, <Link href={savingsCityHref('menifee')} className='text-primary underline'>Menifee</Link>, <Link href={savingsCityHref('fontana')} className='text-primary underline'>Fontana</Link>, <Link href={savingsCityHref('san-bernardino')} className='text-primary underline'>San Bernardino</Link>, <Link href={savingsCityHref('redlands')} className='text-primary underline'>Redlands</Link> and the other SCE cities listed below. The <Link href='/blog/why-is-my-sce-bill-so-high' className='text-primary underline'>SCE bill guide</Link> explains the charges.
              </p>
              <ul className='space-y-3 text-muted-foreground leading-relaxed mb-4'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Riverside Public Utilities</strong> was established in 1895 and calls itself a customer-owned water and electric utility, governed by a board of nine community volunteers and the Riverside City Council. SCE&apos;s average does not describe an RPU bill in <Link href={savingsCityHref('riverside')} className='text-primary underline'>Riverside</Link>.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Corona</strong> runs its own electric utility inside the City&apos;s electric service area. Its customers do not receive an electric bill from SCE; other <Link href={savingsCityHref('corona')} className='text-primary underline'>Corona</Link> addresses are SCE customers.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Moreno Valley Utility</strong> is a publicly owned utility started in 2001. It posts a service-area map, so you can check whether a <Link href={savingsCityHref('moreno-valley')} className='text-primary underline'>Moreno Valley</Link> address is MVU or SCE.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>The Imperial Irrigation District</strong> says it provides electric power to more than 150,000 customers in the Imperial Valley and parts of Riverside and San Diego counties. In <Link href={savingsCityHref('palm-desert')} className='text-primary underline'>Palm Desert</Link>, check whether IID or SCE sends your bill.
                  </span>
                </li>
              </ul>
            </section>

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Community choice on Inland Empire bills
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                SCE lists several community choice aggregators in its territory, among them Desert Community Energy, Rancho Mirage Energy Authority, Apple Valley Choice Energy and San Jacinto Power. It says it keeps handling meter reading, billing, maintenance and outage response for their customers.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Desert Community Energy says <Link href={savingsCityHref('palm-springs')} className='text-primary underline'>Palm Springs</Link> residents are automatically enrolled in its Carbon Free plan, and that SCE still delivers the electricity and sends a single monthly bill. If you live in <Link href={savingsCityHref('san-jacinto')} className='text-primary underline'>San Jacinto</Link>, look for San Jacinto Power on the generation lines.
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Sources, each checked {CHECKED}: <a href={RPU_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Riverside Public Utilities, About RPU</a>; <a href={CORONA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>City of Corona, Electric Service</a>; <a href={MVU_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Moreno Valley Utility</a>; <a href={IID_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>IID, About IID Energy</a>; <a href={SCE_CCA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SCE, Community Choice Aggregation</a>; <a href={DCE_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Desert Community Energy</a>.
              </p>
            </section>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                Inland Empire city guides
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {inlandEmpireCities.map((city) => {
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
                          <p className='text-sm text-muted-foreground'>
                            Open the current city guide
                          </p>
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
            <RegionalCostCities region='Inland Empire' counties={inlandEmpireCounties} />

            <p className='mb-12 text-muted-foreground leading-relaxed'>
              Roof age and condition come before equipment; the <Link href='/blog/is-my-roof-good-for-solar-california' className='text-primary underline'>roof guide</Link> covers what belongs in the scope. For a business property, use the <Link href='/commercial-assessment' className='text-primary underline'>commercial assessment</Link> instead of the home form.
            </p>

            {/* CTA Section */}
            <div className='bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Describe your Inland Empire project
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Tell us which utility bills your address, SCE or a city utility, when you send the form below. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
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
              <SolarInquiry topic="Inland Empire solar planning and quote comparison" />
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
        Article, alongside the CollectionPage node above, as on the Bay Area,
        Orange County and Central Valley hubs: the regional prose above the
        city index is original and sourced (2026-09-23). datePublished is
        omitted because no first-publish date is recorded for this page.
      */}
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline='Solar Energy in the Inland Empire'
        url='https://ratereliefca.com/solar-savings/inland-empire'
        dateModified='2026-09-23'
      />

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
