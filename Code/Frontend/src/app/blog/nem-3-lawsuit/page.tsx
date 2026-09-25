import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { HubUpLink } from '@/components/growth/HubUpLink';

const path = '/blog/nem-3-lawsuit';
const url = `https://ratereliefca.com${path}`;
const title = 'NEM 3.0 Lawsuit: What the Courts Decided (2026 Update)';
const h1 = 'The NEM 3.0 Lawsuit: What the Courts Decided and What It Means for You';
const description =
  'California’s appeals court upheld NEM 3.0 on remand in March 2026, after a 2025 Supreme Court ruling. The case timeline, and what could still change.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

const timeline = [
  ['December 15, 2022', 'CPUC adopts Decision 22-12-056, the net billing tariff (NEM 3.0).'],
  ['2023', 'CPUC denies rehearing in Decision 23-06-056; the challengers go to the Court of Appeal.'],
  ['April 15, 2023', 'Net billing applies to new interconnection applications at PG&E, SCE and SDG&E.'],
  ['First appeal', 'The Court of Appeal affirms the CPUC (98 Cal.App.5th 20).'],
  ['June 2025', 'The California Supreme Court hears argument in case S283614.'],
  ['August 7, 2025', 'The Supreme Court reverses on the standard of review and sends the case back.'],
  ['March 9, 2026', 'On remand, the Court of Appeal applies independent judgment and affirms the CPUC again.'],
];

const sources: Source[] = [
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'CPUC: Solar tariff decision press release, Dec. 15, 2022', url: 'https://www.cpuc.ca.gov/news-and-updates/all-news/cpuc-modernizes-solar-tariff-to-support-reliability-and-decarbonization' },
  { label: 'California Supreme Court: Center for Biological Diversity v. PUC, S283614 (Aug. 7, 2025), via CourtListener', url: 'https://www.courtlistener.com/opinion/10649729/center-for-biological-diversity-inc-v-public-utilities-com/' },
  { label: 'California Supreme Court: case page S283614', url: 'https://supreme.courts.ca.gov/case/s283614-center-biological-diversity-v-public-utilities-commission-pacific-gas-and-electric' },
  { label: 'Court of Appeal, First District: Center for Biological Diversity v. PUC, A167721A (Mar. 9, 2026), via Justia', url: 'https://law.justia.com/cases/california/court-of-appeal/2026/a167721a.html' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC: Net Billing Tariff proceeding page', url: 'https://www.cpuc.ca.gov/nbt' },
];

const faqs = [
  {
    question: 'Was NEM 3.0 overturned?',
    answer:
      'No. The California Supreme Court’s August 2025 ruling did not overturn the net billing tariff. It changed the standard courts use to review CPUC decisions and sent the case back. On March 9, 2026 the Court of Appeal applied that standard and affirmed the CPUC’s decision.',
  },
  {
    question: 'Will NEM 3.0 be overturned?',
    answer:
      'Not by this case as it stands: the appellate court upheld the tariff on remand. Changes are more likely to come through the CPUC itself. Its 2022 decision calls for three years of data after full implementation, a draft evaluation within five years, and a future proceeding to decide whether changes are needed.',
  },
  {
    question: 'Who sued over NEM 3.0?',
    answer:
      'The Center for Biological Diversity, the Environmental Working Group and the Protect Our Communities Foundation, according to the court opinions. They argued the tariff violated Public Utilities Code section 2827.1.',
  },
  {
    question: 'Does the lawsuit affect my existing NEM 2.0 system?',
    answer:
      'No. The case was about the net billing tariff for new customers. The CPUC’s 2022 announcement said the decision has no impact on existing rooftop solar customers, and NEM 2.0 customers keep their tariff for 20 years from interconnection under the CPUC’s rules.',
  },
  {
    question: 'Should I wait for the lawsuit before going solar?',
    answer:
      'The March 2026 ruling upheld the current tariff, so waiting for a court to restore NEM 2.0 terms is not a plan the record supports. Waiting does have a known cost for PG&E and SCE customers: the CPUC says the export bonus applies to residential applicants who apply before the end of 2027.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function Nem3LawsuitPage() {
  return (
    <PublicLayout breadcrumbLabel="NEM 3.0 lawsuit" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={h1} url={url} dateModified={updated} description={description} />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {[{ label: 'Home', href: '/' }, hub].map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="hover:text-primary">{c.label}</Link>
                  <span aria-hidden="true">/</span>
                </span>
              ))}
              <span className="text-foreground">{'NEM 3.0 lawsuit'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                The court challenge to NEM 3.0 has, so far, left the tariff standing. Three groups sued to
                overturn the CPUC’s 2022 net billing decision. The Court of Appeal upheld it, the California
                Supreme Court sent the case back in August 2025 because the lower court had given the CPUC
                too much deference, and on March 9, 2026 the Court of Appeal looked again under the stricter
                standard and affirmed the decision.
              </p>
              <HubUpLink path="/blog/nem-3-lawsuit" />
              <p>
                For a homeowner, that means the net billing tariff PG&amp;E, SCE and SDG&amp;E apply to new
                solar is still the rule, and existing NEM 2.0 accounts were never part of the case. Here is
                the timeline, what each side argued, and where changes could still come from.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="NEM 3.0 solar decision" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'CPUC decision challenged', value: 'D.22-12-056', note: 'Adopted December 15, 2022. CPUC.' },
                  { label: 'Supreme Court ruling', value: 'August 7, 2025', note: 'Reversed and remanded on the standard of review. Case S283614.' },
                  { label: 'Decision on remand', value: 'Affirmed, March 9, 2026', note: 'Court of Appeal, First District, Division Three. A167721A.' },
                  { label: 'Tariff for new solar today', value: 'Net billing (NEM 3.0)', note: 'Applies to applications since April 15, 2023. CPUC.' },
                ]}
              />

              <h2>Timeline of the NEM 3.0 case</h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">NEM 3.0 decision and court timeline</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">When</th>
                      <th className="p-3">What happened</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timeline.map(([when, what]) => (
                      <tr key={when} className="border-t border-border align-top">
                        <td className="p-3 font-medium whitespace-nowrap">{when}</td>
                        <td className="p-3">{what}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>What the CPUC decided in 2022</h2>
              <p>
                Decision 22-12-056 replaced NEM 2.0 for new customers of the three large investor-owned
                utilities. The CPUC’s announcement said export credits would be based on the avoided cost
                to the utility of buying clean electricity elsewhere, with extra bill credits for
                residential customers who adopt solar or solar and storage in the following five years,
                guaranteed for nine years. It projected that average solar customers would save about $100
                a month, solar-and-battery customers at least $136, and that systems would pay off in nine
                years or less on average. It said the decision includes no charges specific to solar
                customers and has no impact on existing rooftop solar customers.
              </p>
              <p>
                For how that tariff compares with the old one, see{' '}
                <Link href="/blog/net-billing-vs-net-metering-california" className={link}>net billing vs. net metering and the CPUC decision</Link>.
              </p>

              <h2>Who sued, and what they argued</h2>
              <p>
                The petitioners were the Center for Biological Diversity, the Environmental Working Group and
                the Protect Our Communities Foundation. Their case rests on Public Utilities Code section
                2827.1, which tells the CPUC to design the successor tariff so that customer-sited renewable
                generation continues to grow sustainably, to include alternatives for residential customers
                in disadvantaged communities, and to weigh costs and benefits.
              </p>
              <p>
                According to the March 2026 opinion, they made four arguments. The tariff slowed solar growth
                by cutting bill savings. It lacked specific alternatives for disadvantaged communities. The
                Avoided Cost Calculator left out benefits such as resiliency, out-of-state methane leakage,
                land use and transmission costs. And it put nonparticipating customers’ interests ahead of
                cost-effectiveness for the electrical system as a whole.
              </p>

              <h2>Why the Supreme Court sent it back</h2>
              <p>
                The first Court of Appeal ruling, reported at 98 Cal.App.5th 20, affirmed the CPUC using a
                highly deferential standard of review. In its August 7, 2025 opinion in case S283614, the
                California Supreme Court held that the deference described in the older Greyhound line of
                cases no longer governs review under Public Utilities Code sections 1757 and 1757.1 for
                industries other than water. Courts must instead exercise independent judgment on whether
                the agency followed the statute, under the framework known as Yamaha. It reversed and
                remanded so the Court of Appeal could apply that standard.
              </p>
              <p>
                That was a ruling about how to judge the decision, not a ruling that the decision was wrong.
                The tariff stayed in effect while the case went back down.
              </p>

              <h2>What the Court of Appeal held on remand</h2>
              <p>
                On March 9, 2026, the First District, Division Three, applied independent judgment and
                affirmed, in an opinion certified for publication. It rejected each argument in turn. On
                sustainable growth, it read the statute as aimed at ending the cost shift the Legislature was
                concerned about, not at guaranteeing any particular growth rate. On disadvantaged
                communities, it pointed to the higher export adder for CARE customers and CalEnviroScreen
                communities, plus existing programs, as the required alternatives. On benefits, it upheld
                the CPUC’s method and noted the Commission can revise the tariff later on new evidence. On
                cost-effectiveness, it read the statute to require that total costs and benefits to all
                customers and the electrical system be approximately equal. Its disposition: the decision is
                affirmed.
              </p>

              <h2>Where change could still come from</h2>
              <p>
                The CPUC built its own review into the tariff. Decision 22-12-056 says the Commission will
                collect three years of data after full implementation, issue a draft evaluation within five
                years of implementation, and consider in a future proceeding whether changes are needed. The
                CPUC’s net billing page lists Decision 23-11-068 as planning that evaluation. Any change to
                the tariff would come out of that process, and a change for future customers would not
                necessarily reach existing ones: net billing customers get nine years on the tariff they
                enrolled under.
              </p>
              <p>
                Legislation is the other route. The CPUC’s net billing page, checked September 23, 2026, still
                describes the net billing tariff as the one new applicants take service on.
              </p>

              <h2>What it means for you</h2>
              <p>
                If you already have solar on NEM 1.0 or NEM 2.0, nothing in this case changed your terms.
                Your tariff runs 20 years from interconnection; see{' '}
                <Link href="/blog/when-does-nem-2-expire" className={link}>when NEM 2.0 expires</Link>.
              </p>
              <p>
                If you are considering solar now, plan for net billing as it is. The CPUC says residential
                PG&amp;E and SCE customers who apply to interconnect before the end of 2027 get slightly
                higher export credits for nine years, and that storage is how customers maximize savings
                under the tariff. The{' '}
                <Link href="/blog/nem-3-california-timeline" className={link}>NEM 3.0 timeline</Link>{' '}
                lists the dates that still matter.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="If the ruling changes your plans"
                links={[
                  { href: '/blog/nem-3-california-still-worth-it', label: 'Whether solar still pencils out under NEM 3.0' },
                  { href: '/blog/nem-3-export-rates-california', label: 'The export values the court left in place' },
                  { href: '/battery/battery-payback-nem-3-california', label: 'How storage changes net billing math' },
                  { href: '/blog/california-public-utilities-commission', label: 'What the CPUC is and how it sets rates' },
                  { href: '/battery/solar-and-storage-association-california', label: 'Where the solar industry stood on the decision' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry topic="NEM 3.0 solar decision" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
