import type { Metadata } from 'next';
import { UtilityDecisionPage, utilityGuideConfigs } from '@/components/growth/UtilityDecisionPage';

export const metadata: Metadata = { title: 'Why Is My Pepco Bill So High? Maryland or DC', description: 'Check the Pepco account jurisdiction, daily use, billing days, supply, delivery and adjustments before assigning the cause of a high bill.', alternates: { canonical: '/utilities/pepco/high-bill' } };
export default function Page() { return <UtilityDecisionPage config={utilityGuideConfigs.pepcoHighBill} />; }
