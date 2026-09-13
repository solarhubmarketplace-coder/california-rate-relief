import type { Metadata } from 'next';
import { StateSolarCompaniesPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Solar Companies in Washington, DC: Quote Comparison', description: 'Compare Washington, DC solar companies by contractor license, roof and access plan, cash price, Pepco assumptions, contract and service.', alternates: { canonical: '/washington-dc/solar-companies' } };
export default function Page() { return <StateSolarCompaniesPage config={stateSolarConfigs['washington-dc']} />; }
