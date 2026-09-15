import type { Metadata } from "next";
import { LocalSolarCompaniesGuide, virginiaBeachSolarCompaniesConfig as config } from "@/components/growth/LocalSolarCompaniesGuide";

export const metadata: Metadata = { title: "Solar Companies in Virginia Beach: Permit and Contract Check", description: "Compare Virginia Beach solar bids by zoning and permit path, DPOR contractor license, Dominion interconnection and the complete written price.", alternates: { canonical: config.path }, openGraph: { title: "Solar Companies in Virginia Beach: Permit and Contract Check", description: "Compare Virginia Beach solar bids by zoning and permit path, DPOR contractor license, Dominion interconnection and the complete written price.", type: "article", url: `https://ratereliefca.com${config.path}`, modifiedTime: "2026-09-12T00:00:00Z" } };
export default function VirginiaBeachSolarCompanies() { return <LocalSolarCompaniesGuide config={config} />; }
