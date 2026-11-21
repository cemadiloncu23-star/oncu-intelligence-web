"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { KurumsalNav } from "@/components/kurumsal/KurumsalLanding";
import SiteFooter from "@/components/SiteFooter";
import DemoModal from "@/components/DemoModal";
import FloatingCTA from "@/components/FloatingCTA";
import { DemoOpenContext } from "@/components/DemoOpenContext";

export default function MarketingShell({ children }: { children: ReactNode }) {
  const [showDemo, setShowDemo] = useState(false);
  const openDemo = () => setShowDemo(true);
  const pathname = usePathname();

  // Amiral gemisi (flagship) ana sayfa kendi minimal koyu chrome'unu yönetir.
  const isFlagship = pathname === "/";

  return (
    <DemoOpenContext.Provider value={openDemo}>
      {!isFlagship && <KurumsalNav />}
      {isFlagship ? children : <div className="min-h-screen bg-[#0a1018] pt-16">{children}</div>}
      {!isFlagship && <SiteFooter />}
      {!isFlagship && <FloatingCTA />}
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </DemoOpenContext.Provider>
  );
}
