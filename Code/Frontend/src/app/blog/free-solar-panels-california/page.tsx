// 2026-09-10 reviewed correction; original content retained at base e605685 and growth-50 evidence.
// 2026-09-17 sourced refresh (claude/ca-green-20260918): the AssistanceGuide
// kind='free' body now carries the CPUC "solar energy is rarely free" quotation,
// the $0-down cap under Bus. & Prof. Code §7159.5(a)(3), SOMAH for renters and
// multifamily, the 26 U.S.C. §25D 2026 position, and the statutory cancellation
// route. URL and template unchanged; the 2026-09-10 body is retained in git
// history at d23af74.
import { AssistanceGuide, assistanceMetadata } from '@/components/growth/AssistanceGuides';
export const metadata = assistanceMetadata('free');
export default function Page() { return <AssistanceGuide kind='free' />; }
