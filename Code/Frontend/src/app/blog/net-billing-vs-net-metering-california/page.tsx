import { NetBillingGuide, netBillingMetadata } from "@/components/growth/NetBillingGuides";

export const metadata = netBillingMetadata("billing");

export default function NetBillingVsNetMetering() {
  return <NetBillingGuide kind="billing" />;
}
