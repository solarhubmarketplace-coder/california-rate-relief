import type { Metadata } from 'next';
import { UtilityDecisionPage, utilityGuideConfigs } from '@/components/growth/UtilityDecisionPage';

export const metadata: Metadata = { title: 'Why Is My Delmarva Power Bill So High? DE or MD', description: 'Check whether the Delmarva Power account is in Delaware or Maryland, then compare daily use, billing days, supply, delivery and adjustments.', alternates: { canonical: '/utilities/delmarva/high-bill' } };
export default function Page() { return <UtilityDecisionPage config={utilityGuideConfigs.delmarvaHighBill} />; }
