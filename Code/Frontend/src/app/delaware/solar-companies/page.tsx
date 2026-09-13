import type { Metadata } from 'next';
import { StateSolarCompaniesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Solar Companies in Delaware: Quote Comparison', description: 'Compare Delaware solar companies by contractor registration, electrical license, cash price, contract and service.', alternates: { canonical: '/delaware/solar-companies' } };
export default function Page() { return <StateSolarCompaniesPage config={stateSolarConfigs.delaware} />; }
