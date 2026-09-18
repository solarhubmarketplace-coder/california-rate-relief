import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { SolarInquiry } from '@/components/growth/SolarInquiry';

const CALIFORNIA_RESIDENTIAL_CODE_URL =
  'https://codes.iccsafe.org/content/CARC2022P3/chapter-3-building-planning';
const CSLB_SOLAR_URL = 'https://www.cslb.ca.gov/solar';
const CSLB_LICENSE_LOOKUP_URL =
  'https://www.cslb.ca.gov/onlineservices/checklicenseii/checklicense.aspx';

export const metadata: Metadata = {
  title: "Solar Panels on a Tile Roof in California: What to Ask",
  description:
    "Panels mounted on a tile roof and solar roof tiles are different scopes. Get the roof, permit and license details in writing before you compare quotes.",
  alternates: { canonical: '/blog/solar-panels-tile-roof-california' },
  openGraph: {
    title: 'Solar Roof Tiles vs. Panels on a Tile Roof in California',
    description:
      'Understand the difference between solar panels on an existing tile roof and solar tiles that serve as the roof covering.',
    type: 'article',
    modifiedTime: '2026-09-12T00:00:00Z',
    url: 'https://ratereliefca.com/blog/solar-panels-tile-roof-california',
  },
};

export default function SolarTileRoofCalifornia() {
  return (
    <PublicLayout>
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline='Solar Roof Tiles vs. Panels on a Tile Roof in California'
        url='https://ratereliefca.com/blog/solar-panels-tile-roof-california'
        dateModified='2026-09-12'
        description='The difference between solar panels mounted on an existing tile roof and roof-integrated solar tiles in California, plus a source-linked scope and contract checklist.'
      />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <span>/</span>
              <Link href='/blog' className='hover:text-primary'>Blog</Link>
              <span>/</span>
              <span className='text-foreground'>Solar Roof Tiles and Tile-Roof Panels</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar + Roof</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Roof Tiles vs. Panels on a Tile Roof in California
              </h1>
              <p className='text-lg text-muted-foreground'>
                The phrase “solar roof tiles” can mean two different projects. One places conventional solar panels over an existing tile roof. The other uses photovoltaic material as part of the roof covering. Start by separating those jobs. They are not the same scope.
              </p>
              <p className='mt-3 text-sm text-muted-foreground'>
                Reviewed <time dateTime='2026-09-12'>September 12, 2026</time>
              </p>
            </header>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>First: identify which project you are pricing</h2>
              <p>
                A conventional rooftop photovoltaic system sits on or above the existing roof covering. A building-integrated photovoltaic system serves as part of the roof covering itself. California&apos;s residential code addresses those as separate categories, with separate roof-covering requirements for building-integrated systems.
              </p>
              <p>
                That distinction should be visible in the written scope before anyone quotes a total price. A low-profile panel array, a tile-roof attachment plan, and a roof-integrated solar-tile system are different designs with different roof work, equipment, and permit questions.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>If panels will be mounted on an existing tile roof</h2>
              <p>
                Ask for a written description of the existing roof condition reviewed for the project, the proposed attachment and flashing approach, and who is responsible for any roof work inside or outside the solar scope. The California Residential Code requires rooftop-mounted systems to be designed for the applicable structural loads, and it requires roof penetrations to be flashed and sealed under the roof provisions.
              </p>
              <p>
                The practical question is simple: if an issue appears later, you should be able to point to a written scope and see who agreed to handle it. Do not rely on a verbal assurance about tiles, waterproofing, permits, or future roof access.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>If solar tiles or shingles will serve as the roof covering</h2>
              <p>
                Ask the seller to identify the system as building-integrated photovoltaic work in the written proposal and to show the roof-covering scope separately from the electrical scope. California&apos;s residential code treats photovoltaic shingles and building-integrated roof panels as roof-covering systems, rather than simply a panel array installed over the roof.
              </p>
              <p>
                Get the product specification, the roof assembly scope, the permit plan, and the warranty documents before comparing proposals. Your local building department decides the permit and inspection requirements for the address. A website cannot approve a project.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What to request in writing</h2>
              <ul className='list-disc pl-6 space-y-2'>
                <li>The legal business name, contractor license number, and a current license lookup.</li>
                <li>The roof-work scope, including what work is included and what work is excluded.</li>
                <li>The solar equipment list and the documents that describe its applicable listing and installation requirements.</li>
                <li>The permit and inspection responsibilities for the project.</li>
                <li>The workmanship and roof warranty terms, including the party responsible for each one.</li>
                <li>The process for removing, repairing, or replacing roof materials if future roof work is needed.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Compare scopes before totals</h2>
              <p>
                Two proposals can use the same phrase—solar roof, solar tiles, or tile-roof solar—while describing different work. Compare the written roof scope, equipment list, permit responsibility, exclusions, and warranty language line by line. If a proposal will not say what it includes, it is not ready to compare.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Sources</h2>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <a href={CALIFORNIA_RESIDENTIAL_CODE_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    California Residential Code, Section R324
                  </a>{' '}
                  — rooftop-mounted and building-integrated photovoltaic provisions.
                </li>
                <li>
                  <a href={CSLB_SOLAR_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    California Contractors State License Board solar guidance
                  </a>{' '}
                  — consumer and contractor-license information.
                </li>
                <li>
                  <a href={CSLB_LICENSE_LOOKUP_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    CSLB license lookup
                  </a>{' '}
                  — verify the license information in a proposal before you sign.
                </li>
              </ul>
            </div>

            <ArticleCTA
              heading='Compare the written scope before you decide'
              body='California Rate Relief is a private referral service. You can request a no-obligation solar review of a written quote; provider availability, design and price are determined after review.'
            />

            <div className="mt-8">

              <SolarInquiry topic="Tile roof solar in California" />

            </div>
            <RelatedGuides
              heading="Roof work, cover and exclusions"
              links={[
                { href: "/solar-problems/solar-homeowners-insurance", label: "How panels change the homeowner policy" },
                { href: "/solar-problems/what-solar-doesnt-cover-california", label: "What the system scope leaves out" },
              ]}
            />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
