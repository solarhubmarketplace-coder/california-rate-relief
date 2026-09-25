import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { GuideShell, Cite } from '@/components/growth/GuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import type { KeyFact } from '@/components/trust/KeyFacts';

const PATH = '/blog/free-roof-replacement-with-solar-panels-california';
const UPDATED = '2026-09-23';
const HUB = { label: 'Roofs and solar', href: '/blog/is-my-roof-good-for-solar-california' };
const metaTitle = 'Free Roof Replacement With Solar Panels: What to Check';
const metaDescription =
  'No California or federal program pays for a new roof because solar goes on it. How a “free roof” offer is paid for, and what to get in writing first.';

const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const CPUC_GUIDE_PAGE = 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const IRS_25D = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';
const CSLB_LOOKUP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const GRID = 'https://gridalternatives.org/what-we-do/program-administration/dac-sash';
const DOE_ROOF = 'https://www.energy.gov/eere/solar/articles/replacing-your-roof-its-great-time-add-solar';

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide (Version 4) and buyer questions', url: CPUC_GUIDE },
  { label: 'IRS: Residential Clean Energy Credit', url: IRS_25D },
  { label: 'CSLB: Check a contractor license or home improvement salesperson registration', url: CSLB_LOOKUP },
  { label: 'GRID Alternatives: DAC-SASH program administration', url: GRID },
  { label: 'U.S. Department of Energy: Replacing your roof? It’s a great time to add solar', url: DOE_ROOF },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Program that pays for a new roof',
    value: 'None found',
    note: 'No California or federal program covers a conventional re-roof because solar goes on it.',
  },
  {
    label: 'Federal solar credit',
    value: 'Ended after 2025',
    note: 'Not available for property placed in service after December 31, 2025.',
    source: { publisher: 'IRS', date: UPDATED, url: IRS_25D },
  },
  {
    label: 'Regulator’s red flag',
    value: '“Free solar”',
    note: 'The CPUC guide lists “free solar energy at no cost to you” as a claim to walk away from.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE },
  },
  {
    label: 'Roof life vs panel life',
    value: '20–50 vs 25–30 yrs',
    note: 'Roof life depends on material, per the U.S. Department of Energy.',
    source: { publisher: 'energy.gov', date: UPDATED, url: DOE_ROOF },
  },
];

const faqs = [
  {
    question: 'Is free roof replacement with solar panels really free?',
    answer:
      'No. The roof work is paid for inside the agreement even when nothing is due at signing. Ask for the roof scope priced as its own line, then compare it with a roof-only quote from a licensed roofing contractor on the same property. If the combined proposal will not itemize the roof, you cannot tell what it costs.',
  },
  {
    question: 'How does free roof replacement with solar panels work?',
    answer:
      'A provider bundles roof work into a solar contract and finances the total, so the monthly payment covers both. The roof may be done by a different licensed contractor than the solar installer, under a separate warranty. Get both license numbers, both warranties and the full payment schedule before signing.',
  },
  {
    question: 'What is the difference between a bundled roof offer and a solar loan?',
    answer:
      'A loan leaves you owning the system and the roof, with a balance to repay. A lease or power purchase agreement leaves a third party owning the system while you pay for equipment or power, which changes transferability at sale and who is responsible when a roof leak appears under the array. The roof work can be folded into either structure.',
  },
  {
    question: 'Does the federal tax credit cover roof replacement bundled with solar?',
    answer:
      'Not for conventional roofing. The IRS says traditional building components that primarily serve a roofing or structural function generally don’t qualify, naming roof trusses and traditional shingles, while solar roofing tiles and solar shingles do because they generate energy. The IRS also says the credit is not available for any property placed in service after December 31, 2025. Confirm your own situation with a qualified tax professional.',
  },
  {
    question: 'What should I verify before accepting a “free roof” solar offer?',
    answer:
      'The license number of every contractor named in the scope, the home improvement salesperson registration of whoever signed you up, the separate roof and solar scopes, the financing agreement in full, who owns the system at the end, and who pays to remove and reinstall the array if the roof needs work later. Use the CSLB lookup for the license checks.',
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function FreeRoofReplacementWithSolarCalifornia() {
  return (
    <PublicLayout breadcrumbLabel="Free roof replacement with solar" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Is free roof replacement with solar real? What to verify in California"
        url="https://ratereliefca.com/blog/free-roof-replacement-with-solar-panels-california"
        dateModified="2026-09-23"
        description="How a free-roof solar offer is actually paid for in California, whether any program covers roof replacement, what the IRS says about roofing and the solar credit, and what to get in writing."
      />
      <Header />
      <GuideShell
        title="Is free roof replacement with solar real? What to verify in California"
        eyebrow="Roofs and solar"
        crumbs={[HUB]}
        crumbLabel="Free roof replacement with solar"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="roof_structures"
        path={PATH}
        quickCheckTopic="Solar and roof proposal comparison"
        leadCount={2}
        inquiry={<SolarInquiry topic="Solar and roof proposal comparison" />}
      >
        <p>
          Not in the sense the phrase implies. A solar proposal can include roof work, and you may owe nothing at
          signing, but the roof is paid for somewhere in the agreement: through a loan balance, a lease or power
          purchase payment, or a higher system price. There is no California or federal program that pays for a
          conventional roof replacement because solar is installed on it.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          A referral request does not approve financing, establish program eligibility or promise a roof, system,
          price or savings.
        </p>

        <section>
          <h2>Do solar companies replace your roof?</h2>
          <p>
            Some will include roof work in a solar contract, and that is legitimate as long as it is priced and
            scoped in writing. What they don’t do is pay for it: the cost sits in the price or the financing.
            Separately, an installer is responsible for damage its own work causes, such as a leak at a roof
            mount, under its workmanship warranty; that is a repair, not a free roof. If you already have a leak,
            read <Link href="/blog/roof-leak-after-solar-panel-install">what to do about a roof leak after solar</Link>.
          </p>
          <p>
            Before any of that, settle{' '}
            <Link href="/blog/is-my-roof-good-for-solar-california">whether the roof is a good candidate in the first place</Link>.
            A roof that needs replacing is a roofing decision; a roof that cannot carry an array is a different
            answer altogether.
          </p>
        </section>

        <section>
          <h2>Separate “no money down” from “free”</h2>
          <p>
            A project may have no payment due at signing while still charging for roof work through a loan,
            lease, power purchase agreement or other contract. <Link href="/blog/solar-ppa-explained-california">How a solar PPA works</Link>{' '}
            explains how those payments are structured. The CPUC’s{' '}
            <a href={CPUC_GUIDE_PAGE} target="_blank" rel="noopener noreferrer">California Solar Consumer Protection Guide</a>{' '}
            (Version 4) lists “You can get free solar energy at no cost to you” as a claim a provider should not
            make, and the same logic applies to a “free roof” pitch: a bundled roof is a financed cost, not a waived
            one. <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} />
          </p>
          <p>
            Ask for the solar scope, roof scope, financing agreement and any change-order terms in writing. A
            monthly payment alone does not show what each part of the project costs or who is responsible for it.
          </p>
        </section>

        <section>
          <h2>Get these items on separate lines</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Roof and solar proposal comparison checklist</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Item</th>
                  <th className={th}>What to obtain before signing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>Roof work</th><td className={td}>Materials, roof area, exclusions, warranty, permit responsibility and the licensed contractor responsible for the work.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Solar work</th><td className={td}>System size, equipment, layout, interconnection assumptions, cash price and the contractor responsible for installation.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Payment</th><td className={td}>Upfront amount, total payments, interest or escalator terms, ownership and what happens if the property is sold.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Future work</th><td className={td}>Removal, reinstallation, roof repairs, equipment service and who pays for each item if it is not included.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Check the roof before a rooftop-solar decision</h2>
          <p>
            The CPUC’s consumer guide tells homeowners to ask whether the roof needs to be replaced before solar
            goes on, and roughly what it would cost to remove and reinstall the panels for a future roof
            replacement, including inspection fees. That is a property-specific question for the actual roof, not
            a universal number of remaining years.
          </p>
          <p>
            The U.S. Department of Energy notes that panels last about 25 to 30 years while a roof lasts 20 to 50
            depending on material, and that doing both at once avoids reinstalling the panels later.{' '}
            <Cite publisher="energy.gov" href={DOE_ROOF} date={UPDATED} /> Request a written scope from the
            responsible contractor and compare it with a roof-only option and a solar-only option on the same
            property. If you go solar-only on an aging roof, price the later work now with{' '}
            <Link href="/blog/solar-panel-removal-reinstall-cost">what solar panel removal and reinstall costs</Link>.
          </p>
        </section>

        <section>
          <h2>Don’t treat a tax claim as roof funding</h2>
          <p>
            The IRS says the Residential Clean Energy Credit “is not available for any property placed in service
            after December 31, 2025.” It also says “traditional building components that primarily serve a
            roofing or structural function generally don’t qualify. For example, roof trusses and traditional
            shingles that support solar panels don’t qualify, but solar roofing tiles and solar shingles do
            because they generate clean energy.” <Cite publisher="IRS" href={IRS_25D} date={UPDATED} />
          </p>
          <p>
            So a conventional roof replacement generally wasn’t a covered expense under that credit, even when
            bundled with solar, and the credit itself has ended for new systems. Tax treatment depends on your facts and
            tax year; use current IRS guidance and a qualified tax professional rather than a sales estimate. If
            you are weighing roof-integrated solar tiles instead, see{' '}
            <Link href="/blog/solar-panels-tile-roof-california">solar roof tiles vs panels on a tile roof</Link>.
          </p>
        </section>

        <section>
          <h2>Does DAC-SASH or another state program cover the roof?</h2>
          <p>
            Not based on what the program’s administrator publishes. GRID Alternatives, which administers DAC-SASH
            (Disadvantaged Communities Single-family Solar Homes), describes its program as bundling “state funding
            for solar with other local incentives and private philanthropy to make solar technology available at
            low to no cost.” The page describes the solar system and does not mention roof replacement or roof
            repair as a covered cost. <Cite publisher="GRID Alternatives" href={GRID} date={UPDATED} />
          </p>
          <p>
            If your roof needs work before solar can go on it, that is a separate expense outside DAC-SASH and the
            other state solar-assistance programs this site covers. For no-cost solar eligibility, see{' '}
            <Link href="/blog/free-solar-panels-california">free solar panels in California</Link> rather than
            repeating it here.
          </p>
        </section>

        <section>
          <h2>Verify the people and documents</h2>
          <ol>
            <li>Get the license number for every contractor named in the work scope.</li>
            <li>Use the <a href={CSLB_LOOKUP} target="_blank" rel="noopener noreferrer">CSLB license and home improvement salesperson lookup</a> before signing.</li>
            <li>Read the solar disclosure, contract and separate financing papers together.</li>
            <li>Check that every claimed roof, solar, warranty and payment term appears in the signed documents.</li>
            <li>Keep copies of the proposal, disclosure documents and change orders for later roof, repair or sale questions.</li>
          </ol>
          <p>
            Before signing a combined scope, read <Link href="/solar-problems/hidden-costs-of-solar-california">the cost lines that arrive after the quote</Link>,{' '}
            <Link href="/solar-problems/solar-contract-red-flags-california">what the California disclosure forms are meant to stop</Link>{' '}
            and <Link href="/solar-problems/solar-homeowners-insurance">how panels change the homeowner policy</Link>.
            If a contractor takes a deposit and stops, see <Link href="/solar-problems/solar-company-took-my-money-california">what to do next</Link>.
            Whether solar is worth doing at all is covered in{' '}
            <Link href="/blog/are-solar-panels-worth-it-california">are solar panels worth it in California</Link>, and
            upkeep after installation in <Link href="/solar-panel-maintenance-california">our solar panel maintenance guide</Link>.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
