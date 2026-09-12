import { NetBillingGuide, netBillingMetadata } from "@/components/growth/NetBillingGuides";

export const metadata = netBillingMetadata("timeline");

export default function Page() {
  return <NetBillingGuide kind="timeline" />;
}
