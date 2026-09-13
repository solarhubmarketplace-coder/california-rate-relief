import type { Metadata } from 'next';
import { StateSolarCostPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Maryland Solar Panel Cost: Compare the Real Quote', description: 'Compare Maryland solar cost by cash price per watt, financing, production, roof scope and utility bill treatment.', alternates: { canonical: '/maryland/solar-cost' } };
export default function Page() { return <StateSolarCostPage config={stateSolarConfigs.maryland} />; }
