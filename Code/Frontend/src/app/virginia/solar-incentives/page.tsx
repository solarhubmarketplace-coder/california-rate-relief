import type { Metadata } from 'next';
import { StateSolarIncentivesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Virginia Solar Incentives in 2026: Program Guide', description: 'Check Virginia solar incentives by utility, locality, ownership, net metering, SREC terms and the 2026 federal credit change.', alternates: { canonical: '/virginia/solar-incentives' } };
export default function Page() { return <StateSolarIncentivesPage config={stateSolarConfigs.virginia} />; }
