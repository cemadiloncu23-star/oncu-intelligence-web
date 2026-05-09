import type { Metadata } from "next";
import Link from "next/link";
import InnerPageHeader from "@/components/InnerPageHeader";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oncuintelligence.com";

export const metadata: Metadata = {
  title: "Satenergy | Satellite intelligence & energy efficiency — ÖNCÜ Intelligence",
  description:
    "Corporate dashboards for energy efficiency benchmarks, satellite intelligence overlays, audit-ready ISO 50001-style reporting — powered by ÖNCÜ Intelligence.",
  alternates: { canonical: `${base}/en`, languages: { tr: base, en: `${base}/en`, "x-default": base } },
  openGraph: { locale: "en_US", url: `${base}/en` },
};

export default function EnglishOverviewPage() {
  return (
    <main
      id="main"
      className="min-h-screen bg-slate-100 text-[#0F172A] selection:bg-[#15803D]/20 dark:bg-background dark:text-foreground"
    >
      <InnerPageHeader
        title="Satenergy product overview"
        subtitle="English summary of the ÖNCÜ Intelligence go-to-market site. For the full story and legal notices, browse the Turkish site or contact us."
        backHref="/"
        backLabel="← Turkish site"
      />

      <div className="mx-auto max-w-3xl px-4 py-10 pb-16">
        <ul className="list-disc space-y-3 ps-6 text-[#475569] dark:text-muted-foreground">
          <li>Fleet-ready panel for consumption baselines and sector benchmarking.</li>
          <li>Satellite intelligence workflows for renewables and operational visibility.</li>
          <li>Audit-oriented exports aligned with ISO 50001 narratives (scoped per deployment).</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/iletisim"
            className="inline-flex rounded-xl bg-[#15803D] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#15803D]/25 hover:bg-[#166534] dark:text-primary-foreground"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="inline-flex rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#4338CA] hover:border-[#4338CA]/35 dark:border-border dark:bg-card"
          >
            Turkish homepage
          </Link>
          <Link
            href="/guven"
            className="inline-flex rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#475569] dark:border-border dark:bg-card"
          >
            Technical trust
          </Link>
        </div>
      </div>
    </main>
  );
}
