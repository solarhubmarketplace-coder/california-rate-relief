import { NetBillingGuide, netBillingMetadata } from "@/components/growth/NetBillingGuides";

export const metadata = netBillingMetadata("decision");

export default function Page() {
  return <NetBillingGuide kind="decision" />;
}
