import type { Metadata } from 'next';
import { StateSolarCostPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Delaware Solar Panel Cost: Compare the Real Quote', description: 'Compare Delaware solar cost by cash price per watt, financing, production, roof scope and utility interconnection.', alternates: { canonical: '/delaware/solar-cost' } };
export default function Page() { return <StateSolarCostPage config={stateSolarConfigs.delaware} />; }
