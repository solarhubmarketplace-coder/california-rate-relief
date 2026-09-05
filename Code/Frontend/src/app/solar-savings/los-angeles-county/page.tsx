import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, MapPin, Home, AlertTriangle } from 'lucide-react';
import { CITIES, UTILITY_DATA } from '@/data/cities-data';
import { TrustedSources } from '@/components/shared/TrustedSources';

/**
 * Los Angeles County regional hub.
 *
 * Why this page exists: a full link-graph crawl on 2026-09-05 found that eleven
 * /solar-savings city pages had zero inbound internal links from anywhere on the
 * site, and almost all of them were LA-basin cities — including Los Angeles and
 * Long Beach, the site's two largest markets. The five existing regional hubs
 * (Orange County, Bay Area, Inland Empire, San Diego County, Central Valley)
 * covered every region except this one, so LA County city pages were reachable
 * only from the sitemap.
 *
 * Unlike the older hubs this one links to BOTH city routes, since the 77
 * /solar-companies pages were the fully orphaned layer despite drawing 41% of
 * the site's search impressions.
 */

export const metadata: Metadata = {
  title: 'Solar Panels in Los Angeles County: 2026 Rates & Cost',
  description:
    'Solar for LA County homes across LADWP, SCE, Glendale and Pasadena territory. Rates differ sharply by utility — see what your city actually pays.',
  alternates: { canonical: '/solar-savings/los-angeles-county' },
  openGraph: {
    title: 'Solar in Los Angeles County: Rates, Costs and Options',
    description:
      'LA County spans four different electric utilities with very different rates. Find your city and what solar is actually worth there.',
    type: 'website',
  },
};

const LA_CITIES = CITIES.filter((c) => c.county === 'Los Angeles County').sort(
  (a, b) => b.avgMonthlyBill - a.avgMonthlyBill,
);

function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Solar Energy in Los Angeles County',
    description:
      'Solar costs, utility rates and options for Los Angeles County homeowners across LADWP, Southern California Edison, Glendale Water & Power and Pasadena Water & Power territory.',
    url: 'https://ratereliefca.com/solar-savings/los-angeles-county',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: LA_CITIES.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        url: `https://ratereliefca.com/solar-savings/${c.slug}`,
      })),
    },
  };
}

export default function LosAngelesCountySolarPage() {
  const ladwp = UTILITY_DATA['ladwp'];
  const sce = UTILITY_DATA['sce'];

  return (
    <PublicLayout>
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href="/solar-panels-california" className="hover:text-foreground">
                California
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Los Angeles County</span>
            </nav>

            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
                Solar Energy in Los Angeles County
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Los Angeles County has 88 incorporated cities and four different
                electric utilities, and what solar is worth here depends almost
                entirely on which one serves your address. LADWP customers pay
                roughly {(ladwp.ratePerKwh * 100).toFixed(0)}¢ per kWh. A few miles
                away in SCE territory the rate is about{' '}
                {(sce.ratePerKwh * 100).toFixed(1)}¢. Same county, same sunshine,
                very different math.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-6 md:p-8 mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Check your utility before you believe any quote
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LADWP, Glendale Water &amp; Power and Pasadena Water &amp; Power are
                publicly owned. They set their own rates and their own net-metering
                terms, and they are <strong>not</strong> governed by the CPUC&apos;s
                NEM 3.0 decision. If a salesperson is quoting you SCE rates, or
                telling an LADWP customer that a NEM 3.0 deadline is about to cost
                them money, the numbers in front of you are for a different
                household. Ask which utility the estimate was built on.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Four utilities</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  LADWP serves the City of LA. SCE serves most of the county.
                  Glendale and Pasadena run their own municipal utilities.
                </p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Homeowners only</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  These programs need an owner-occupied home. LA County&apos;s high
                  renter share means this rules a lot of households out.
                </p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Next step</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Find your city below, confirm the utility matches your bill, then
                  check eligibility.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">
                Solar by city in Los Angeles County
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LA_CITIES.map((city) => {
                  const utility = UTILITY_DATA[city.utilityCode];
                  return (
                    <div
                      key={city.slug}
                      className="bg-card rounded-xl border border-border p-5"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {city.name}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-foreground">
                          ${city.avgMonthlyBill}/mo
                        </span>{' '}
                        average bill · {utility.shortName} ·{' '}
                        {(utility.ratePerKwh * 100).toFixed(1)}¢/kWh
                      </div>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                        <Link
                          href={`/solar-savings/${city.slug}`}
                          className="text-primary hover:underline font-medium"
                        >
                          Costs &amp; savings →
                        </Link>
                        <Link
                          href={`/solar-companies/${city.slug}`}
                          className="text-primary hover:underline font-medium"
                        >
                          Compare installers →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We cover {LA_CITIES.length} of Los Angeles County&apos;s 88
                incorporated cities today, and we are adding more. If yours is not
                here, the statewide guide covers the rules that apply everywhere in
                California.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                See what solar is worth at your address
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Check your eligibility in about 60 seconds. No cost, no obligation.
              </p>
              <Link
                href="/#qualify"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Check My Eligibility
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />

      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <TrustedSources
          domain="crr"
          variant="compact"
          palette={{
            fg: 'hsl(var(--foreground))',
            muted: 'hsl(var(--foreground) / 0.85)',
            mutedFg: 'hsl(var(--muted-foreground))',
            accent: 'hsl(var(--primary))',
            cardBg: 'hsl(var(--card))',
            cardBorder: 'hsl(var(--border))',
          }}
        />
      </div>
    </PublicLayout>
  );
}
