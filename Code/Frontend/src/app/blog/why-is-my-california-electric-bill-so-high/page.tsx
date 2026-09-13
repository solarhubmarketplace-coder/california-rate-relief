import {
  CaliforniaBillDecisionPage,
  californiaBillMetadata,
} from "@/components/growth/CaliforniaBillDecisionPages";

export const metadata = californiaBillMetadata("high");

export default function WhyIsMyCaliforniaElectricBillSoHigh() {
  return <CaliforniaBillDecisionPage kind="high" />;
}
