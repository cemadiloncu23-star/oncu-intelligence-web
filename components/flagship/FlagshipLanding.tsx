"use client";

import FlagshipNav from "@/components/flagship/FlagshipNav";
import FlagshipHero from "@/components/flagship/FlagshipHero";
import Capabilities from "@/components/flagship/Capabilities";
import LayerExplorer from "@/components/flagship/LayerExplorer";
import ProcessFlow from "@/components/flagship/ProcessFlow";
import FlagshipCTA from "@/components/flagship/FlagshipCTA";
import FlagshipFooter from "@/components/flagship/FlagshipFooter";

export default function FlagshipLanding() {
  return (
    <main id="main" className="min-h-screen bg-[#070a13] text-slate-100 antialiased selection:bg-[#2563EB]/30 selection:text-white">
      <FlagshipNav />
      <FlagshipHero />
      <Capabilities />
      <LayerExplorer />
      <ProcessFlow />
      <FlagshipCTA />
      <FlagshipFooter />
    </main>
  );
}
