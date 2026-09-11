// 2026-09-10 reviewed correction; original content retained at base e605685 and growth-50 evidence.
import { AssistanceGuide, assistanceMetadata } from '@/components/growth/AssistanceGuides';
export const metadata = assistanceMetadata('california');
export default function Page() { return <AssistanceGuide kind='california' />; }
