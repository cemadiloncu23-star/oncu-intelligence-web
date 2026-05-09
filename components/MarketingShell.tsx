"use client";

import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import DemoModal from "@/components/DemoModal";
import FloatingCTA from "@/components/FloatingCTA";
import { DemoOpenContext } from "@/components/DemoOpenContext";

export default function MarketingShell({ children }: { children: ReactNode }) {
  const [showDemo, setShowDemo] = useState(false);
  const openDemo = () => setShowDemo(true);

  return (
    <DemoOpenContext.Provider value={openDemo}>
      <Navbar onDemoClick={openDemo} />
      {children}
      <SiteFooter />
      <FloatingCTA />
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </DemoOpenContext.Provider>
  );
}
