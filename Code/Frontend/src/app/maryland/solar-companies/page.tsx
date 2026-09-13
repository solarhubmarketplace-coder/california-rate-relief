import type { Metadata } from 'next';
import { StateSolarCompaniesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Solar Companies in Maryland: Quote Comparison', description: 'Compare Maryland solar companies by MHIC licensing, cash price, design, utility assumptions, contract and service.', alternates: { canonical: '/maryland/solar-companies' } };
export default function Page() { return <StateSolarCompaniesPage config={stateSolarConfigs.maryland} />; }
