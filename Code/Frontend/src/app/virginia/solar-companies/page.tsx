import type { Metadata } from 'next';
import { StateSolarCompaniesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Solar Companies in Virginia: Quote Comparison', description: 'Compare Virginia solar companies by contractor license, cash price, design, utility assumptions, contract and service.', alternates: { canonical: '/virginia/solar-companies' } };
export default function Page() { return <StateSolarCompaniesPage config={stateSolarConfigs.virginia} />; }
