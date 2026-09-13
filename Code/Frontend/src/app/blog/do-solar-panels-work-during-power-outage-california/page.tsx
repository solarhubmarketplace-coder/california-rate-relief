import {
  SolarOutageGuide,
  solarOutageMetadata,
} from "@/components/growth/SolarOutageGuide";

export const metadata = solarOutageMetadata;

export default function DoSolarWorkDuringOutage() {
  return <SolarOutageGuide />;
}
