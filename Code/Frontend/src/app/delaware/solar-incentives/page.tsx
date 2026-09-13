import type { Metadata } from 'next';
import { StateSolarIncentivesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Delaware Solar Incentives in 2026: Program Guide', description: 'Check Delaware Green Energy Program eligibility, utility-specific offerings, SREC terms and the 2026 federal credit change.', alternates: { canonical: '/delaware/solar-incentives' } };
export default function Page() { return <StateSolarIncentivesPage config={stateSolarConfigs.delaware} />; }
