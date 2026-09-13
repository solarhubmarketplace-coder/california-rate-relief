import type { Metadata } from 'next';
import { RichmondSolarCompaniesGuide } from '@/components/growth/RichmondSolarCompaniesGuide';

export const metadata: Metadata = {
  title: 'Solar Companies in Richmond VA: Quote Comparison',
  description: 'Compare Richmond solar companies by Virginia license, City permit path, Dominion interconnection, cash price, system design and service terms.',
  alternates: { canonical: '/virginia/richmond-solar-companies' },
};

export default function Page() {
  return <RichmondSolarCompaniesGuide />;
}
