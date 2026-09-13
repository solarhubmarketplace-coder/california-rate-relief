import {
  CaliforniaBillDecisionPage,
  californiaBillMetadata,
} from "@/components/growth/CaliforniaBillDecisionPages";

export const metadata = californiaBillMetadata("lower");

export default function HowToLowerElectricBillCalifornia() {
  return <CaliforniaBillDecisionPage kind="lower" />;
}
