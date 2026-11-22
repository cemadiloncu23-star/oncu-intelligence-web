"use client";

import { LangProvider } from "./lang";
import { AnnouncementBar, Navbar, Hero } from "./NavHero";
import { Pipeline, Platform, Sectors, SampleReport, Vision, Insights, CtaFooter } from "./Sections";

export default function OncuLanding() {
  return (
    <LangProvider>
      <main id="main" className="min-h-screen bg-[#030712] font-[family-name:var(--font-inter)] text-slate-100 antialiased selection:bg-[#2563EB]/30 selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <Hero />
        <Pipeline />
        <Platform />
        <Sectors />
        <SampleReport />
        <Vision />
        <Insights />
        <CtaFooter />
      </main>
    </LangProvider>
  );
}
