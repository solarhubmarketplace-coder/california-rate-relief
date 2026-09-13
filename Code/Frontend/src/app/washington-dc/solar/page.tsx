import type { Metadata } from 'next';
import { StateSolarCostPage, stateSolarConfigs } from '@/components/growth/StateSolarDecisionPage';

export const metadata: Metadata = { title: 'Washington, DC Rooftop Solar: Property and Quote Review', description: 'Review a Washington, DC rooftop solar proposal by roof authority, usable area, cash price, production, licensing and Pepco assumptions.', alternates: { canonical: '/washington-dc/solar' } };
export default function Page() { return <StateSolarCostPage config={stateSolarConfigs['washington-dc']} />; }
