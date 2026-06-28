"use client";

import Image from "next/image";
import FlagshipNav from "@/components/flagship/FlagshipNav";
import FlagshipHero from "@/components/flagship/FlagshipHero";
import LiveDashboard from "@/components/flagship/LiveDashboard";
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
      <LiveDashboard />
      <Capabilities />
      <LayerExplorer />
      <ProcessFlow />

      {/* === Kapanış: CTA + footer tek bir gömülü uydu fotoğrafının üzerinde === */}
      <div className="relative overflow-hidden border-t border-zinc-800">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/showcase/ankara-rgb.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.5]"
          />
          {/* üstte önceki bölüme yumuşak geçiş, ortada metin için karartma, altta foto görünür kalır */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070a13] via-[#070a13]/65 to-[#05070d]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,10,19,0.45)_100%)]" />
        </div>

        <div className="relative z-10">
          <FlagshipCTA />
          <FlagshipFooter />
        </div>
      </div>
    </main>
  );
}
