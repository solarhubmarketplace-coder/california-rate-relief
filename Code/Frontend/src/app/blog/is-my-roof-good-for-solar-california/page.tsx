import {
  RoofSuitabilityGuide,
  roofSuitabilityMetadata,
} from "@/components/growth/RoofSuitabilityGuide";

export const metadata = roofSuitabilityMetadata;

export default function IsMyRoofGoodForSolar() {
  return <RoofSuitabilityGuide />;
}
