import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { FaqBlock } from '@/components/trust/FaqBlock';

const CALIFORNIA_RESIDENTIAL_CODE_URL =
  'https://codes.iccsafe.org/content/CARC2022P3/chapter-3-building-planning';
const CSLB_SOLAR_URL = 'https://www.cslb.ca.gov/solar';
const CSLB_LICENSE_LOOKUP_URL =
  'https://www.cslb.ca.gov/onlineservices/checklicenseii/checklicense.aspx';
const IRONRIDGE_ALL_TILE_HOOK_URL = 'https://www.ironridge.com/component/all-tile-hook/';
const IRONRIDGE_KNOCKOUT_TILE_URL = 'https://www.ironridge.com/component/knockout-tile/';
const UNIRAC_FLASHKIT_URL =
  'https://unirac.com/products/attachments/flashkit-tile-replacement/';
const TRI_FLASHING_BULLETIN_URL =
  'https://www.tileroofing.org/uploads/1/4/9/0/149044128/19tri036_tri-tech-bulletin-2016-001-recommendations-of-flashings-at-tile-penetration-june-2016_d2.pdf';
const TRI_SOLAR_TECH_BRIEF_URL =
  'https://www.tileroofing.org/uploads/1/4/9/0/149044128/19tri036_2008-01-solar-panels_d2.pdf';
const IRS_CREDIT_URL = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';
const DOE_ROOF_REPLACEMENT_URL =
  'https://www.energy.gov/eere/solar/articles/replacing-your-roof-its-great-time-add-solar';
const STOCKTON_SOLARAPP_URL =
  'https://www.stocktonca.gov/business/building___life_safety/automated_solar_permitting.php';
const PERMIT_GUIDEBOOK_URL =
  'https://lci.ca.gov/docs/20190226-Solar_Permitting_Guidebook_4th_Edition.pdf';

const metaTitle = "Solar Roof Tiles vs Panels on a Tile Roof in California";
const metaDescription =
  "Solar roofing in California: panels on a clay or concrete tile roof vs solar roof tiles, what drives solar tile cost, and who is licensed to install it.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: '/blog/solar-panels-tile-roof-california' },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: 'https://ratereliefca.com/blog/solar-panels-tile-roof-california',
    modifiedTime: '2026-09-23T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const faqs = [
  {
    question: 'Can you put solar panels on a clay tile roof?',
    answer:
      'Yes. Installers use tile-specific hooks or a tile-replacement mount rather than the mounts used on composition-shingle roofs, with deck and tile flashing at every attachment point. The Tile Roofing Industry Alliance treats clay and concrete tile the same way for flashing; what changes the hardware is the tile profile.',
  },
  {
    question: 'Do solar panels break roof tiles?',
    answer:
      'They can, mostly from cutting or grinding a tile to fit a hook, or from foot traffic during installation and later service. Tile-replacement mounts avoid some of this by removing the tile at each mount point. Ask for the installer’s written policy on cracked tiles before work starts.',
  },
  {
    question: 'How much do solar roof tiles cost?',
    answer:
      'No government or research source we could check publishes a current California price for solar roof tiles, so compare written bids rather than advertised figures. Solar tiles replace the roof covering, so the bid includes tear-off, underlayment, inactive matching tiles and roofing labor as well as the solar equipment. Compare it with a conventional re-roof plus panels, and with panels on your existing tile roof.',
  },
  {
    question: 'Is there a cost premium for putting solar on a tile roof?',
    answer:
      'Tile adds labor and breakage risk, but no source we could verify gives a specific premium. Ask your installer to show tile attachment and tile replacement as their own line items.',
  },
  {
    question: 'Can a roofing company install solar in California?',
    answer:
      'Only if it also holds a license class that covers solar work. The Contractors State License Board lists the classes that may install solar: A general engineering, B general building within its limits, C-10 electrical and C-46 solar, plus three classes for solar water and pool heating. Roofing is not on that list, so many roofers who sell solar bring in a licensed solar subcontractor. Get both license numbers in writing.',
  },
  {
    question: 'Will a solar company replace my roof?',
    answer:
      'Some bundle a new roof with solar, but the roof is never free: it is priced into the contract or the financing. Ask for the roof and the solar as separate line items with separate warranties. Our guide to roof replacement offered with solar covers what to check, and if a roof leaks after an install, the installer’s workmanship warranty is the first place to go.',
  },
  {
    question: 'Are solar shingles worth it in California?',
    answer:
      'They make the most sense when you need a new roof anyway and value the look. Because they are the roof covering, the bid includes a full re-roof, and roof repairs later involve the solar product too. Since January 1, 2026, a new system gets no federal Residential Clean Energy Credit. Compare the solar share of the price per watt with a panel quote on the same house before you decide.',
  },
  {
    question: 'Do solar roof tiles still qualify for the federal tax credit?',
    answer:
      'Not for new systems. The IRS says solar roofing tiles and solar shingles qualified because they generate energy, but that the Residential Clean Energy Credit is not available for any property placed in service after December 31, 2025. Traditional roofing that only supports panels generally did not qualify.',
  },
];

export default function SolarTileRoofCalifornia() {
  return (
    <PublicLayout breadcrumbLabel='Solar on tile roofs' breadcrumbParent={{ label: 'Roofs and solar', href: '/blog/is-my-roof-good-for-solar-california' }}>
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline='Solar Roof Tiles vs. Panels on a Tile Roof in California'
        url='https://ratereliefca.com/blog/solar-panels-tile-roof-california'
        dateModified='2026-09-23'
        description='The difference between solar panels mounted on an existing tile roof and roof-integrated solar tiles in California, plus a source-linked scope and contract checklist.'
      />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <span>/</span>
              <Link href='/blog/is-my-roof-good-for-solar-california' className='hover:text-primary'>Roofs and solar</Link>
              <span>/</span>
              <span className='text-foreground'>Solar on tile roofs</span>
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
                Reviewed <time dateTime='2026-09-23'>September 23, 2026</time> · By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link>
              </p>
              <p className='mt-2 text-sm text-muted-foreground'>
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p>
                Yes — clay and concrete tile roofs are common in California and installers work on them routinely, but the attachment method is different from a composition shingle roof, and that difference affects labor, tile breakage risk, and what you should get in writing before you sign. The sections below cover how tile-specific mounting hardware actually works, what causes tile breakage, and what a tile roof changes about your structural check, fire-code setbacks, and a future re-roof.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="Tile roof solar in California" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>First: identify which project you are pricing</h2>
              <p>
                A conventional rooftop photovoltaic system sits on or above the existing roof covering. A building-integrated photovoltaic system serves as part of the roof covering itself. California&apos;s residential code addresses those as separate categories, with separate roof-covering requirements for building-integrated systems.
              </p>
              <p>
                That distinction should be visible in the written scope before anyone quotes a total price. A low-profile panel array, a tile-roof attachment plan, and a roof-integrated solar-tile system are different designs with different roof work, equipment, and permit questions.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What &ldquo;solar roofing&rdquo; can mean: three different jobs</h2>
              <p>
                Search for solar roofing and you get three kinds of offers mixed together. Sorting yours into one of them tells you what the price should include and who needs to be licensed for it.
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>Panels on the roof you have.</strong> Standard modules on racking, attached through the existing covering. On tile, that means the hooks or replacement mounts described below. The roof itself is not replaced.</li>
                <li><strong>Solar tiles or shingles that are the roof.</strong> The state&apos;s Solar Permitting Guidebook, drawing on the California Electrical Code, defines building-integrated photovoltaics as cells or modules &ldquo;integrated into the outer surface or structure of a building&rdquo; that &ldquo;serve as the outer protective surface of the building,&rdquo; and photovoltaic shingles as &ldquo;a roof covering resembling shingles that incorporates photovoltaic modules.&rdquo; Source: <a href={PERMIT_GUIDEBOOK_URL} target='_blank' rel='noopener external' className='text-primary underline'>California Solar Permitting Guidebook, 4th edition (2019)</a>, checked September 23, 2026.</li>
                <li><strong>A new conventional roof plus panels, sold together.</strong> One contract, two trades. This is usually what &ldquo;roof and solar bundle&rdquo; offers mean; see <Link href='/blog/free-roof-replacement-with-solar-panels-california' className='text-primary underline'>what to check in a roof-plus-solar offer</Link>.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who may install solar roofing in California</h2>
              <p>
                The electrical side of every one of those jobs is solar work. The Contractors State License Board lists the classes allowed to install solar: A general engineering, B general building within its legal limits, C-10 electrical, and C-46 solar, which may &ldquo;install, modify, maintain, and repair thermal and photovoltaic solar energy systems,&rdquo; along with three classes limited to solar water and pool heating. Roofing is not on the list. Source: <a href={CSLB_SOLAR_URL} target='_blank' rel='noopener external' className='text-primary underline'>CSLB, Solar Smart</a>, checked September 23, 2026.
              </p>
              <p>
                In practice, a roofing company that sells solar either holds one of those classes as well or subcontracts the solar part. Either can work. What matters is that the contract names every company doing work on your house, with a license number you have checked on the <a href={CSLB_LICENSE_LOOKUP_URL} target='_blank' rel='noopener external' className='text-primary underline'>CSLB lookup</a>, and says which one answers for leaks.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Clay tile, concrete tile, and what actually changes the mounting hardware</h2>
              <p>
                Both clay and concrete tile are common on California roofs, and for mounting purposes the industry treats them the same way. The Tile Roofing Industry Alliance&apos;s own flashing guidance for solar and other rooftop accessories covers &ldquo;concrete and clay tiles roof systems&rdquo; as one category, with no separate rule for either material. What actually determines the hook or flashing hardware is the tile&apos;s <em>profile</em> (flat, &ldquo;S&rdquo; Spanish barrel, or &ldquo;W&rdquo; shaped) — manufacturer hardware is built to those shapes. Ask your installer which profile and manufacturer your tile is, not just whether it&apos;s clay or concrete; a bid that skips the profile is pricing a generic job, not yours.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How solar panels attach to a tile roof</h2>
              <p>Manufacturer documentation describes two main approaches:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>Tile hooks.</strong> A hook or bracket sets under the tile — sometimes after trimming it to fit — and fastens to the rafter, with the tile resting around the hook. IronRidge&apos;s All Tile Hook, for example, is built for flat, S, and W tile profiles and pairs with a separate deck flashing for waterproofing.</li>
                <li><strong>Tile replacement (&ldquo;comp-out&rdquo;).</strong> The installer removes the tile at each mounting point instead and sets a flashed base in its place, flush with the surrounding roof. Unirac&apos;s FlashKit Tile Replacement is one example: it uses a pre-applied butyl seal and is built, per Unirac, to carry the array&apos;s load &ldquo;without breaking tiles — no tile grinding or modification required.&rdquo;</li>
              </ul>
              <p>
                Whichever method a bidder proposes, the industry&apos;s own technical guidance is specific on one point: every attachment point needs an approved deck flashing and tile flashing, and installers should not fasten a mount directly to an individual tile. If a quote doesn&apos;t name the flashing product it will use, ask.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Tile breakage: what actually causes it</h2>
              <p>
                Breakage is the most common complaint about solar-on-tile jobs, and it traces mostly to the hook method, not the tile itself. IronRidge&apos;s own materials note that tile jobs &ldquo;can be messy and complicated&rdquo; and that hook-style installs &ldquo;often require tile grinding to ensure fit&rdquo; — grinding or cutting a brittle edge is where cracks start, and repeat foot traffic during a multi-day install adds to it. Manufacturers position replacement mounts as the fix: Unirac markets its base as built to resist breakage because it doesn&apos;t work around the tile at the mount point at all. Ask which method your installer defaults to and why, and get their breakage policy in writing, alongside the attachment and flashing details the section above already asks you to document.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What a tile roof changes about a future re-roof</h2>
              <p>
                The U.S. Department of Energy notes panels last roughly 25 to 30 years, while a roof&apos;s own life depends on material and &ldquo;will last anywhere from 20 to 50 years&rdquo; — and that timing solar to a roof replacement, rather than doing them separately, &ldquo;can save money in the long run&rdquo; by avoiding a later removal-and-reinstall. On tile specifically, that removal step is the slower one: taking tiles up to redo underlayment means handling the same inventory that made the original install take longer, with the same breakage risk described above. Ask, in writing, how a future re-roof affects your solar workmanship warranty, and who handles tile removal if the roofer and the solar installer aren&apos;t the same company.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Structural load and fire-code setbacks</h2>
              <p>
                Two checks apply to any roof carrying solar, tile included: whether the structure can bear the added weight, and how the layout meets California&apos;s fire-code roof-access rules. The Tile Roofing Industry Alliance states plainly that &ldquo;the roof must be constructed to support the loads of the roof-installed solar system&rdquo; — the same sign-off every California roof type needs. Our <Link href='/blog/is-my-roof-good-for-solar-california' className='text-primary underline'>roof suitability guide</Link> walks through both the structural review and the exact fire-code pathway and setback figures your installer&apos;s permit plan has to show.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Does tile mounting cost more?</h2>
              <p>
                No manufacturer or industry source we could verify this session publishes a specific dollar premium for tile versus composition-shingle attachment, so treat any number a salesperson quotes as their estimate, not an industry standard — ask them to itemize it. What is documented: tile roofing is one of the factors our <Link href='/solar-cost' className='text-primary underline'>statewide solar cost breakdown</Link> lists as adding installation labor versus a straightforward shingle job. Get a tile line item, or confirmation the labor is already reflected in your quote.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What about slate roofs?</h2>
              <p>
                A smaller share of the searches behind this page are about slate — a heavier, less common natural-stone material in California. The same principle applies: attachment has to run through the structure and a proper flashing, not straight into a fragile tile. We did not find a manufacturer technical page specific to slate mounting hardware this session, so if you have a slate roof, ask your installer directly whether they stock slate-specific hooks or flashing and ask to see a past slate job.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Questions to ask before a crew touches your tile roof</h2>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Which method — tile hook or tile replacement — and why, for my tile&apos;s profile?</li>
                <li>What hardware and flashing brand/model, and can I see the manufacturer&apos;s install sheet?</li>
                <li>What is your written policy if a tile cracks during install or a later service visit?</li>
                <li>Do you reset tiles yourselves or subcontract that step, and who is liable for it?</li>
                <li>How does this method affect my roof and workmanship warranties if I need a re-roof?</li>
                <li>Have you installed on this exact tile profile before? Can I see a past job?</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>If a leak or a re-roof comes later</h2>
              <p>
                Tile jobs raise two later questions: what happens if water gets in at a mount, and what it takes to lift the array for roof work. For the first, <Link href='/blog/roof-leak-after-solar-panel-install' className='text-primary underline'>what to do about a roof leak after solar</Link> covers the evidence to collect and who is responsible. For the second, <Link href='/blog/solar-panel-removal-reinstall-cost' className='text-primary underline'>solar panel removal and reinstall costs</Link> explains what a quote should itemize, and tile is one of the factors that moves it. Routine upkeep on any roof is in <Link href='/solar-panel-maintenance-california' className='text-primary underline'>our solar panel maintenance guide</Link>.
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
                Because the product is the roof, it has to pass roof tests as well as electrical ones. The state&apos;s permitting guidebook lists, among the fire-safety items a plan checker looks for, that rooftop modules have &ldquo;the proper fire classification rating,&rdquo; and it notes that photovoltaic shingle packaging must carry a label showing compliance with the ASTM D 3161 wind test. Ask the seller for the product&apos;s fire classification and wind rating documents along with its electrical listing.
              </p>
              <p>
                Get the product specification, the roof assembly scope, the permit plan, and the warranty documents before comparing proposals. Your local building department decides the permit and inspection requirements for the address, and some fast-track solar permits leave these products out: Stockton&apos;s automated SolarAPP+ permit, for example, lists &ldquo;No building-integrated photovoltaic systems (BIPV)&rdquo; among its conditions (<a href={STOCKTON_SOLARAPP_URL} target='_blank' rel='noopener external' className='text-primary underline'>City of Stockton</a>, checked September 23, 2026). A website cannot approve a project.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Solar roof tiles price: what drives the cost</h2>
              <p>
                We could not find a government or research source that publishes current California prices for solar roof tiles, so this page does not print a per-square-foot figure. What a solar-tile bid covers is predictable, and it is much more than the solar equipment: tear-off of the existing roof, underlayment and flashing, the active solar tiles, inactive tiles that match them on the rest of the roof, electrical work, inverters and any battery, permits and inspection. Roof size, pitch, hips and valleys, and how much of the roof faces the sun all move the total.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>How to compare a solar tile bid with a panel bid</h3>
              <p>
                A single total hides the part you can compare. Ask the seller to split the price into the solar share (the active tiles, inverters, electrical work and the system size in kilowatts) and the roofing share (tear-off, underlayment, inactive tiles and flashing). Divide the solar share by the system&apos;s watts to get a price per watt, and set it next to a panel quote; our <Link href='/solar-cost' className='text-primary underline'>California solar cost guide</Link> explains how per-watt prices are read. Then compare the roofing share with a plain re-roof bid for the same house.
              </p>
              <p>
                The fair comparison is three bids on the same house: solar tiles as the new roof, a conventional re-roof with panels on top, and, if your tile roof has years left, panels mounted on the existing tile. The tax picture has also changed. The IRS says solar roofing tiles and solar shingles qualified for the Residential Clean Energy Credit because they generate energy, but that the credit &ldquo;is not available for any property placed in service after December 31, 2025.&rdquo; Source: <a href={IRS_CREDIT_URL} target='_blank' rel='noopener external' className='text-primary underline'>IRS, Residential Clean Energy Credit</a>, checked September 23, 2026. For how any roof bundle is financed, see <Link href='/blog/free-roof-replacement-with-solar-panels-california' className='text-primary underline'>what to check in a roof-plus-solar offer</Link>.
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
                <li>
                  <a href={IRONRIDGE_ALL_TILE_HOOK_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    IronRidge All Tile Hook
                  </a>{' '}
                  — tile hook mounting hardware for flat, S, and W tile profiles.
                </li>
                <li>
                  <a href={IRONRIDGE_KNOCKOUT_TILE_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    IronRidge Knockout Tile Replacement
                  </a>{' '}
                  — tile-replacement (&ldquo;comp-out&rdquo;) mounting method and flashing.
                </li>
                <li>
                  <a href={UNIRAC_FLASHKIT_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    Unirac FlashKit Tile Replacement
                  </a>{' '}
                  — tile-replacement mounting base and flashing profiles.
                </li>
                <li>
                  <a href={TRI_FLASHING_BULLETIN_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    Tile Roofing Industry Alliance, Technical Bulletin 2016-001
                  </a>{' '}
                  — flashing requirements at solar and rooftop-accessory tile penetrations.
                </li>
                <li>
                  <a href={TRI_SOLAR_TECH_BRIEF_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    Tile Roofing Industry Alliance, Technical Brief 2008-01
                  </a>{' '}
                  — structural load and flashing requirements for roof-mounted solar on tile.
                </li>
                <li>
                  <a href={PERMIT_GUIDEBOOK_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    California Solar Permitting Guidebook, 4th edition (2019)
                  </a>{' '}
                  — definitions of building-integrated PV and photovoltaic shingles; fire classification and wind-label checks.
                </li>
                <li>
                  <a href={STOCKTON_SOLARAPP_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    City of Stockton: automated solar permitting (SolarAPP+) eligibility
                  </a>{' '}
                  — example of a fast-track permit that excludes building-integrated PV.
                </li>
                <li>
                  <a href={IRS_CREDIT_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    IRS — Residential Clean Energy Credit
                  </a>{' '}
                  — solar roofing tiles and shingles vs. traditional roofing; credit ends for property placed in service after December 31, 2025.
                </li>
                <li>
                  <a href={DOE_ROOF_REPLACEMENT_URL} target='_blank' rel='noopener external' className='text-primary underline'>
                    U.S. Department of Energy — Replacing Your Roof? It&apos;s a Great Time to Add Solar
                  </a>{' '}
                  — panel and roof lifespan, and the case for timing solar to a re-roof.
                </li>
              </ul>
            </div>

            <FaqBlock items={faqs} id='common-questions' />
            <HubSpokeLinks hub='roof_structures' currentPath='/blog/solar-panels-tile-roof-california' />
            <ArticleCTA
              heading='Compare the written scope before you decide'
              body='California Rate Relief is a private referral service. You can request a solar review of a written quote; provider availability, design and price are determined after review.'
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
