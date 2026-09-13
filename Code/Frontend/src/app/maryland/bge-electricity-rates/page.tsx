import type { Metadata } from 'next';
import { UtilityDecisionPage, utilityGuideConfigs } from '@/components/growth/UtilityDecisionPage';

export const metadata: Metadata = { title: 'BGE Electricity Rates in 2026: Bill Components', description: 'See the current published BGE residential electricity components and learn how to compare distribution, supply, transmission and surcharges.', alternates: { canonical: '/maryland/bge-electricity-rates' } };
export default function Page() { return <UtilityDecisionPage config={utilityGuideConfigs.bgeRates} />; }
