import type { Metadata } from 'next';
import { StateSolarIncentivesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Washington, DC Solar Incentives in 2026: Program Guide', description: 'Check DC Solar for All, rooftop and community options, SREC and net-metering terms, and the 2026 federal credit change.', alternates: { canonical: '/washington-dc/solar-incentives' } };
export default function Page() { return <StateSolarIncentivesPage config={stateSolarConfigs['washington-dc']} />; }
