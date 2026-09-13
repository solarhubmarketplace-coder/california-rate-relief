import type { Metadata } from 'next';
import { StateSolarCompaniesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Solar Companies in New Jersey: Quote Comparison', description: 'Compare New Jersey solar companies by verified registration, cash price, design, production assumptions, contract and service.', alternates: { canonical: '/new-jersey/solar-companies' } };
export default function Page() { return <StateSolarCompaniesPage config={stateSolarConfigs['new-jersey']} />; }
