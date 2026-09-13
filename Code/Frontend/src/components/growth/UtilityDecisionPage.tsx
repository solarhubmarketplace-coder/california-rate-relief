import Link from 'next/link';
import { BillComparison } from './BillComparison';
import { DecisionPage, type Source } from './DecisionPage';
import type { ServiceMarket } from '@/lib/service-market';

type UtilityGuideConfig = {
  path: string;
  title: string;
  intro: string;
  utilityName: string;
  utilityCode: string;
  market: ServiceMarket;
  regionLabel: string;
  topic: string;
  sources: Source[];
  kind: 'high-bill' | 'rates' | 'solar-credits';
};

const marylandBillSources: Source[] = [
  { label: 'Maryland Office of People’s Counsel: why utility bills are high', url: 'https://opc.maryland.gov/' },
  { label: 'Maryland Office of People’s Counsel: utility rates and bill basics', url: 'https://opc.maryland.gov/Consumer-Learning/Utility-Rates-and-Basics' },
  { label: 'Maryland Public Service Commission: consumer information', url: 'https://www.psc.state.md.us/consumer-information/' },
];

export const utilityGuideConfigs: Record<string, UtilityGuideConfig> = {
  bgeHighBill: {
    path: '/maryland/bge-high-bill',
    title: 'Why Is My BGE Bill So High? A Two-Bill Check',
    intro: 'A higher BGE total can come from more daily use, more billing days, higher supply or delivery charges, gas charges, an adjustment, or an unpaid balance. Compare the bill lines before assigning one cause.',
    utilityName: 'BGE', utilityCode: 'bge', market: 'MD', regionLabel: 'Maryland',
    topic: 'BGE high bill review', kind: 'high-bill',
    sources: [
      { label: 'Maryland Office of People’s Counsel: Why is my BGE bill so high?', url: 'https://opc.maryland.gov/Why-is-my-BGE-bill-so-high' },
      { label: 'Maryland Office of People’s Counsel: BGE rates and basics', url: 'https://opc.maryland.gov/Consumer-Learning/Utility-Rates-and-Basics/BGE' },
      ...marylandBillSources.slice(2),
    ],
  },
  bgeRates: {
    path: '/maryland/bge-electricity-rates',
    title: 'BGE Electricity Rates in 2026: Read the Whole Bill',
    intro: 'A BGE electricity bill is not one rate multiplied by kWh. Separate the fixed customer charge, distribution, supply, transmission, EmPOWER and other adjustments before comparing months or a solar proposal.',
    utilityName: 'BGE', utilityCode: 'bge', market: 'MD', regionLabel: 'Maryland',
    topic: 'BGE electricity rate and solar review', kind: 'rates',
    sources: [
      { label: 'Maryland Office of People’s Counsel: current BGE rates', url: 'https://opc.maryland.gov/Consumer-Learning/Utility-Rates-and-Basics/BGE' },
      { label: 'Maryland Office of People’s Counsel: why BGE bills are high', url: 'https://opc.maryland.gov/Why-is-my-BGE-bill-so-high' },
      ...marylandBillSources.slice(2),
    ],
  },
  pepcoHighBill: {
    path: '/utilities/pepco/high-bill',
    title: 'Why Is My Pepco Bill So High? Check Maryland or DC First',
    intro: 'Pepco serves both Maryland and Washington, DC, but the rates and regulators are different. Start with the jurisdiction printed on the bill, then compare daily use, billing days and each charge category.',
    utilityName: 'Pepco', utilityCode: 'pepco', market: 'MD', regionLabel: 'Maryland and Washington, DC',
    topic: 'Pepco high bill review', kind: 'high-bill',
    sources: [
      { label: 'Maryland Office of People’s Counsel: 2026 Pepco high-bill explainer', url: 'https://opc.maryland.gov/Why-is-my-2026-summer-Pepco-bill-so-high' },
      { label: 'Maryland Office of People’s Counsel: current Pepco rates', url: 'https://opc.maryland.gov/Consumer-Learning/Utility-Rates-and-Basics/Pepco' },
      { label: 'DC Public Service Commission: understanding a Pepco electric bill', url: 'https://dcpsc.org/Consumers-Corner/Information/Understanding-Your-Electric-Bill.aspx' },
      { label: 'DC Public Service Commission: current Pepco bill calculator', url: 'https://dcpsc.org/Utility-Information/Electric/Electric-Bill-Calculator.aspx' },
    ],
  },
  pepcoSolarCredits: {
    path: '/utilities/pepco/solar-credits',
    title: 'Pepco Net Metering and Solar Credits: Maryland vs. DC',
    intro: 'Pepco solar bill treatment depends on whether the account is in Maryland or Washington, DC, the approved interconnection, meter and tariff. Confirm the jurisdiction before relying on a savings estimate.',
    utilityName: 'Pepco', utilityCode: 'pepco', market: 'DC', regionLabel: 'Maryland and Washington, DC',
    topic: 'Pepco net metering and solar credit review', kind: 'solar-credits',
    sources: [
      { label: 'Pepco: net energy metering and interconnection process', url: 'https://www.pepco.com/cdn/assets/v3/assets/bltbb7c204688a1a6a8/blt342a039373cd4421/64e6d54a0bf445000dfcec63/Pepco_GPC_Brochure_Web.pdf?branch=prod_alias' },
      { label: 'Maryland PSC: Solar in Maryland fact sheet', url: 'https://www.psc.state.md.us/electricity/wp-content/uploads/sites/2/Solar-in-Maryland-Fact-Sheet-1.pdf' },
      { label: 'Maryland PSC: net-metering customer alert', url: 'https://www.psc.state.md.us/wp-content/uploads/Net-Metering-Alert-to-Customers_03062024.pdf' },
      { label: 'DC Public Service Commission: clean-energy commitments', url: 'https://dcpsc.org/CleanEnergy/Clean-Energy-Commitments.aspx' },
      { label: 'DC Department of Energy and Environment: Solar in the District', url: 'https://doee.dc.gov/service/solar-district' },
    ],
  },
  delmarvaHighBill: {
    path: '/utilities/delmarva/high-bill',
    title: 'Why Is My Delmarva Power Bill So High? Delaware or Maryland',
    intro: 'Delmarva Power serves customers in Delaware and Maryland under different rules. Identify the state on the account, then compare daily use, billing days, supply, delivery and adjustments line by line.',
    utilityName: 'Delmarva Power', utilityCode: 'delmarva', market: 'DE', regionLabel: 'Delaware and Maryland',
    topic: 'Delmarva Power high bill review', kind: 'high-bill',
    sources: [
      { label: 'Delaware Public Service Commission: Delmarva customer information', url: 'https://depsc.delaware.gov/delmarva-power/' },
      { label: 'Maryland Office of People’s Counsel: utility rates and bill basics', url: 'https://opc.maryland.gov/Consumer-Learning/Utility-Rates-and-Basics' },
      { label: 'Delmarva Power Maryland: residential energy-saving programs', url: 'https://homeenergysavings.delmarva.com/' },
      { label: 'Delmarva Power Delaware: residential energy programs', url: 'https://homeenergysavings.delmarva.com/energywiserewards/de/residential/overview' },
    ],
  },
};

const linkClass = 'font-semibold text-emerald-800 underline underline-offset-2';

function BillAudit({ utilityName }: { utilityName: string }) {
  return <>
    <section className='rounded-xl border border-emerald-200 bg-emerald-50 p-5'><h2>Start with the two-bill test</h2><p>Compare total kWh per day and electric charges per day. This removes the effect of a longer billing period and helps separate higher use from higher blended charges. It does not identify a tariff or promise that one change caused the bill.</p></section>
    <BillComparison utilityName={utilityName} />
    <section><h2>Check these lines in order</h2><ol className='list-decimal space-y-2 pl-6'><li>Service dates and number of billing days.</li><li>Current and prior kWh, then kWh per day.</li><li>Whether the meter read is actual, estimated or corrected.</li><li>Supply, transmission, distribution or delivery, and fixed customer charges.</li><li>Surcharges, taxes, credits, late charges, prior balances and payment-plan amounts.</li><li>Heating, cooling, EV charging, pool equipment or another load that changed.</li></ol><p className='mt-3'>Use the account’s regulator or utility contact for a billing dispute. California Rate Relief is a private solar referral service and cannot change or adjudicate a utility bill.</p></section>
  </>;
}

function BgeRates() {
  const rows = [
    ['Fixed customer charge', '$10.00 per month'],
    ['Distribution', '$0.04945 per kWh'],
    ['EmPOWER surcharge', '$0.01310 per kWh'],
    ['Supply', '$0.12519 per kWh'],
    ['Transmission', '$0.02322 per kWh'],
    ['Supply plus transmission', '$0.14841 per kWh'],
  ];
  return <>
    <section className='rounded-xl border border-emerald-200 bg-emerald-50 p-5'><h2>September 2026 BGE residential reference</h2><p>Maryland’s Office of People’s Counsel lists the following current reference charges. These are base-rate components, not a promise of the total rate on a particular bill. Adjustments, usage, supplier choice, taxes, gas service and other line items can change the result.</p></section>
    <section><h2>Current published components</h2><div className='overflow-x-auto rounded-xl border'><table className='w-full text-left text-sm'><thead className='bg-slate-100'><tr><th className='p-4'>Bill component</th><th className='p-4'>Published reference</th></tr></thead><tbody>{rows.map(([name, value]) => <tr key={name} className='border-t'><th scope='row' className='p-4'>{name}</th><td className='p-4'>{value}</td></tr>)}</tbody></table></div><p className='mt-3 text-sm text-slate-600'>Source checked September 12, 2026. Verify the current BGE tariff and the actual lines on your bill before making a decision.</p></section>
    <section><h2>Why one “price per kWh” can mislead</h2><p>Dividing the whole account balance by kWh can mix fixed charges, gas service, old balances and taxes into an electricity figure. For a solar comparison, separate the charges that may change with imports from charges that can remain even when rooftop production is high.</p></section>
    <BillComparison utilityName='BGE' />
  </>;
}

function PepcoCredits() {
  return <>
    <section className='rounded-xl border border-emerald-200 bg-emerald-50 p-5'><h2>First question: Maryland or Washington, DC?</h2><p>Pepco operates in both jurisdictions. Do not use a Maryland credit description for a DC account or the reverse. The application, interconnection documents, tariff and regulator must match the service address.</p></section>
    <section><h2>What has to happen before credits are dependable</h2><ol className='list-decimal space-y-2 pl-6'><li>The system and account holder must use the correct Pepco jurisdiction.</li><li>Pepco must approve the applicable interconnection documents before operation.</li><li>The account needs the required meter and net-metering arrangement.</li><li>The bill must show how imports, exports, carried credits and fixed charges are treated.</li><li>The contract must say who owns renewable-energy certificates and who receives any other program benefit.</li></ol></section>
    <section><h2>Do not equate a credit with a zero bill</h2><p>A customer can still have fixed, delivery, minimum, supplier or other charges. Production and consumption also occur at different times. Compare an actual post-solar bill to the proposal and ask Pepco about unexplained credit or meter treatment.</p></section>
    <section><h2>Keep rooftop and community solar separate</h2><p>Rooftop net metering uses equipment connected behind the customer’s meter. Community solar uses a subscription to an off-site project and a separate billing-credit structure. Confirm cancellation, fees, escalators and credit allocation before comparing either path.</p></section>
  </>;
}

export function UtilityDecisionPage({ config }: { config: UtilityGuideConfig }) {
  const stateHref = config.market === 'DC' ? '/washington-dc/solar' : config.market === 'DE' ? '/delaware/solar-cost' : '/maryland/solar-cost';
  return <DecisionPage title={config.title} intro={config.intro} path={config.path} sources={config.sources} sourceCheckedDate='2026-09-12' regionLabel={config.regionLabel} market={config.market} utility={config.utilityCode} topic={config.topic} primaryResourceHref={stateHref} primaryResourceLabel='State solar cost guide' comparisonHref='/tools/solar-panel-calculator' comparisonLabel='Compare a solar quote'>
    {config.kind === 'rates' ? <BgeRates /> : config.kind === 'solar-credits' ? <PepcoCredits /> : <BillAudit utilityName={config.utilityName} />}
    <section><h2>When solar belongs in the comparison</h2><p>Solar cannot correct a billing error or erase every charge. After the bill is understood, compare a written solar proposal against the home’s actual annual use, the correct utility treatment, the cash project price and the remaining bill. Use the <Link className={linkClass} href={stateHref}>state quote guide</Link> before submitting the optional inquiry below.</p></section>
  </DecisionPage>;
}
