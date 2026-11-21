import type { Metadata } from "next";

import Link from "next/link";

import InnerPageHeader from "@/components/InnerPageHeader";



const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oncuintelligence.com";



export const metadata: Metadata = {

  title: "KutGöz | Satellite site monitoring and feasibility for solar plants — ÖNCÜ Intelligence",

  description:

    "KutGöz monitors solar power plants and candidate sites with Sentinel-2 satellite data: soiling, vegetation encroachment and ponding alerts, plus pre-investment site and irradiance reports.",

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

        title="KutGöz product overview"

        subtitle="English summary of the ÖNCÜ Intelligence go-to-market site. For the full story and legal notices, browse the Turkish site or contact us."

        backHref="/"

        backLabel="← Turkish site"

      />



      <div className="mx-auto max-w-3xl px-4 py-10 pb-16">

        <ul className="list-disc space-y-3 ps-6 text-[#475569] dark:text-muted-foreground">

          <li>Pre-investment site report: last 12 months of irradiance, land cover, water and built-up indicators, estimated yield and payback.</li>

          <li>Operational monitoring of solar plants on every cloud-free Sentinel-2 pass (~5 days), compared against each site's own history.</li>

          <li>Weekly PDF reports and a REST API for integration with your own systems.</li>

        </ul>

        <div className="mt-8 flex flex-wrap gap-3">

          <Link

            href="/iletisim"

            className="inline-flex rounded-sm bg-zinc-100 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition-colors hover:bg-white"

          >

            Contact

          </Link>

          <Link

            href="/"

            className="inline-flex rounded-sm border border-zinc-700 bg-transparent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"

          >

            Turkish homepage

          </Link>

          <Link

            href="/guven"

            className="inline-flex rounded-sm border border-zinc-700 bg-transparent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"

          >

            Technical trust

          </Link>

        </div>

      </div>

    </main>

  );

}

