import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, MapPin, Home } from 'lucide-react';
import { CITIES } from '@/data/cities-data';
import { savingsCityHref } from '@/lib/canonical-redirects';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RegionalCostCities } from '@/components/shared/RegionalCostCities';

export const metadata: Metadata = {
  title: 'San Diego County Solar Guide: City, Bill and Project Paths',
  description:
    'Editorial solar-planning links for San Diego County: city guides, SDG&E bill review, roof and storage questions, and commercial projects.',
  alternates: {
    canonical: '/solar-savings/san-diego-county',
  },
  openGraph: {
    title: 'San Diego County Solar Guide: City, Bill and Project Paths',
    description:
      'Find city guides, SDG&E bill review, roof and storage questions, and commercial solar planning links for San Diego County.',
    type: 'website',
  },
};

// San Diego County cities
const sanDiegoCities = CITIES.filter(
  (city) => city.county === 'San Diego County'
).sort((a, b) => a.name.localeCompare(b.name));

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'San Diego County Solar Guide',
    description:
      'Editorial navigation for solar-planning resources in San Diego County.',
    url: 'https://ratereliefca.com/solar-savings/san-diego-county',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: sanDiegoCities.map((city, position) => ({
        '@type': 'ListItem',
        position: position + 1,
        name: `${city.name} solar guide`,
        url: `https://ratereliefca.com${savingsCityHref(city.slug)}`,
      })),
    },
  };
}

export default function SanDiegoCountySolarPage() {
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
              <span className='text-foreground font-medium'>San Diego County</span>
            </nav>

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in San Diego County
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                Start with the actual account, property and project goal. This editorial hub collects current city guides and the planning paths that help you compare a new solar project, roof work, storage, or a business property without assuming a result for every household.
              </p>
            </div>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="San Diego County solar planning and quote comparison" className='mb-12' />

            {/* Info Section */}
            <div className='grid md:grid-cols-3 gap-6 mb-12'>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <MapPin className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Editorial guide coverage</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Editorial coverage for San Diego County. Confirm the address and utility account before relying on any rate or program information.
                </p>
              </div>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <Home className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Project type</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Start with the property decision: new solar, roof-first work, an existing system or storage, or a business property.
                </p>
              </div>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <ArrowRight className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Next Step</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Use the bill-review links before comparing a proposal, then use the inquiry below if you want to describe a project.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Choose the next question
              </h2>
              <ul className='space-y-3 text-muted-foreground leading-relaxed'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Read the current bill first:</strong> identify the provider, tariff and recent charges before treating a county utility label as your own account.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Check the roof before the equipment:</strong> roof age, condition, shade and access can change which project should be priced.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Separate an existing system from a new project:</strong> storage and retrofit questions need the current equipment and utility records.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Use the commercial path for a business property:</strong> a commercial bill, property authority and operating schedule need their own review.
                  </span>
                </li>
              </ul>
            </div>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                San Diego County city guides
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {sanDiegoCities.map((city) => {
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
            <RegionalCostCities region='San Diego County' counties={['San Diego County']} />

            <div className='grid gap-4 md:grid-cols-2 mb-12'>
              <Link href='/blog/why-is-my-sdge-bill-so-high' className='rounded-xl border border-border bg-card p-5 hover:border-primary/50'>
                <h2 className='font-semibold text-foreground'>SDG&E bill review</h2>
                <p className='mt-2 text-sm text-muted-foreground'>Use the account and bill details before comparing solar estimates.</p>
              </Link>
              <Link href='/blog/is-my-roof-good-for-solar-california' className='rounded-xl border border-border bg-card p-5 hover:border-primary/50'>
                <h2 className='font-semibold text-foreground'>Roof-first planning</h2>
                <p className='mt-2 text-sm text-muted-foreground'>Check the roof questions that belong in a solar scope.</p>
              </Link>
              <Link href='/battery' className='rounded-xl border border-border bg-card p-5 hover:border-primary/50'>
                <h2 className='font-semibold text-foreground'>Existing system or storage</h2>
                <p className='mt-2 text-sm text-muted-foreground'>Start with the equipment and backup goal, then compare configurations.</p>
              </Link>
              <Link href='/commercial-assessment' className='rounded-xl border border-border bg-card p-5 hover:border-primary/50'>
                <h2 className='font-semibold text-foreground'>Business property</h2>
                <p className='mt-2 text-sm text-muted-foreground'>Use the commercial assessment for a property with a business account or operating schedule.</p>
              </Link>
            </div>

            <p className='mb-12 text-sm text-muted-foreground'>
              Comparing payment structures? Read the{' '}
              <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary underline'>
                California PPA, loan, lease and cash guide
              </Link>
              .
            </p>

            {/* CTA Section */}
            <div className='bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Describe your project
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Share the property, utility account and project goal. A response or proposal depends on later review.
              </p>
              <Link
                href='#solar-inquiry'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Start an inquiry
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="San Diego County solar planning and quote comparison" />
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

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
