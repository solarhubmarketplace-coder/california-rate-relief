import type { Metadata } from 'next';
import { UtilityDecisionPage, utilityGuideConfigs } from '@/components/growth/UtilityDecisionPage';

export const metadata: Metadata = { title: 'Why Is My BGE Bill So High? Two-Bill Check', description: 'Compare BGE billing days, daily electricity use, supply, delivery, adjustments and prior balances before assigning the cause of a high bill.', alternates: { canonical: '/maryland/bge-high-bill' } };
export default function Page() { return <UtilityDecisionPage config={utilityGuideConfigs.bgeHighBill} />; }
