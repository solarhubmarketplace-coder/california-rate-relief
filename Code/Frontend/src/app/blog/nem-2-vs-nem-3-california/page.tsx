import { NetBillingGuide, netBillingMetadata } from "@/components/growth/NetBillingGuides";

export const metadata = netBillingMetadata("comparison");

export default function Page() {
  return <NetBillingGuide kind="comparison" />;
}
