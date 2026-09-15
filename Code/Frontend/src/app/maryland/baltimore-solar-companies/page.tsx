import type { Metadata } from "next";
import { LocalSolarCompaniesGuide, baltimoreSolarCompaniesConfig as config } from "@/components/growth/LocalSolarCompaniesGuide";

export const metadata: Metadata = { title: "Solar Companies in Baltimore: License, Permit and BGE Check", description: "A Baltimore solar quote is ready to compare only with the Maryland contractor license, City permit drawing, BGE interconnection and complete price on paper.", alternates: { canonical: config.path }, openGraph: { title: "Solar Companies in Baltimore: License, Permit and BGE Check", description: "A Baltimore solar quote is ready to compare only with the Maryland contractor license, City permit drawing, BGE interconnection and complete price on paper.", type: "article", url: `https://ratereliefca.com${config.path}`, modifiedTime: "2026-09-12T00:00:00Z" } };
export default function BaltimoreSolarCompanies() { return <LocalSolarCompaniesGuide config={config} />; }
