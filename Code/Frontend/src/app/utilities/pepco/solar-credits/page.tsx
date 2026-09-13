import type { Metadata } from 'next';
import { UtilityDecisionPage, utilityGuideConfigs } from '@/components/growth/UtilityDecisionPage';

export const metadata: Metadata = { title: 'Pepco Net Metering and Solar Credits: MD vs. DC', description: 'Compare Pepco net-metering and solar-credit requirements in Maryland and Washington, DC, including interconnection, metering and remaining bill charges.', alternates: { canonical: '/utilities/pepco/solar-credits' } };
export default function Page() { return <UtilityDecisionPage config={utilityGuideConfigs.pepcoSolarCredits} />; }
