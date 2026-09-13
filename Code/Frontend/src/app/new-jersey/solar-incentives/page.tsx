import type { Metadata } from 'next';
import { StateSolarIncentivesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'New Jersey Solar Incentives in 2026: Program Guide', description: 'Check current New Jersey solar incentives, SuSI registration, SREC ownership, utility rules and the 2026 federal credit change.', alternates: { canonical: '/new-jersey/solar-incentives' } };
export default function Page() { return <StateSolarIncentivesPage config={stateSolarConfigs['new-jersey']} />; }
