"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
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
      {!isFlagship && <Navbar onDemoClick={openDemo} />}
      {children}
      {!isFlagship && <SiteFooter />}
      {!isFlagship && <FloatingCTA />}
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </DemoOpenContext.Provider>
  );
}
