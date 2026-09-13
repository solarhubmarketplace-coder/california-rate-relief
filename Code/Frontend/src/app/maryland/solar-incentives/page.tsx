import type { Metadata } from 'next';
import { StateSolarIncentivesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Maryland Solar Incentives in 2026: Program Guide', description: 'Check Maryland Solar Access Program eligibility, participating contractors, current funding, utility rules and the federal credit change.', alternates: { canonical: '/maryland/solar-incentives' } };
export default function Page() { return <StateSolarIncentivesPage config={stateSolarConfigs.maryland} />; }
