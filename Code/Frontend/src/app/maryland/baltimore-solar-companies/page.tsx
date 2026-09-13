import type { Metadata } from "next";
import { LocalSolarCompaniesGuide, baltimoreSolarCompaniesConfig as config } from "@/components/growth/LocalSolarCompaniesGuide";

export const metadata: Metadata = { title: config.title, description: config.intro, alternates: { canonical: config.path }, openGraph: { title: config.title, description: config.intro, type: "article", url: `https://ratereliefca.com${config.path}`, modifiedTime: "2026-09-12T00:00:00Z" } };
export default function BaltimoreSolarCompanies() { return <LocalSolarCompaniesGuide config={config} />; }
