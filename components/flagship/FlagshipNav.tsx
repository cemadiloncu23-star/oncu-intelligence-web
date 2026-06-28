"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Satellite } from "lucide-react";
import { getPanelLink } from "@/lib/site-config";
import { useOpenDemo } from "@/components/DemoOpenContext";

const links = [
  { label: "Yetenekler", href: "#yetenekler" },
  { label: "Veri katmanları", href: "#katmanlar" },
  { label: "Süreç", href: "#surec" },
];

export default function FlagshipNav() {
  const panel = getPanelLink();
  const openDemo = useOpenDemo();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#070a13]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#tepe" className="group flex items-center gap-2.5" aria-label="Satenergy — ana sayfa">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]">
            <Satellite className="h-4 w-4" strokeWidth={2} aria-hidden />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight text-white font-[family-name:var(--font-inter)]">
              Satenergy
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-500">
              Öncü Intelligence
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openDemo}
            className="hidden rounded-lg px-3 py-2 text-[13px] font-semibold text-slate-300 transition-colors hover:text-white sm:inline-flex"
          >
            Demo talebi
          </button>
          <a
            href={panel.href}
            target={panel.openInNewTab ? "_blank" : undefined}
            rel={panel.openInNewTab ? "noopener noreferrer" : undefined}
            className="group inline-flex items-center gap-1.5 rounded-lg bg-[#2563EB] px-3.5 py-2 text-[13px] font-semibold text-white shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_8px_24px_-6px_rgba(37,99,235,0.6)] transition-all hover:bg-[#1d4ed8] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.4),0_10px_30px_-6px_rgba(37,99,235,0.8)]"
          >
            Panele giriş
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
