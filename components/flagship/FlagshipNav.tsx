"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Satellite } from "lucide-react";
import { getPanelLink } from "@/lib/site-config";
import { useOpenDemo } from "@/components/DemoOpenContext";

const navItems = [
  { label: "Platform", href: "#yetenekler" },
  { label: "Teknoloji", href: "#katmanlar" },
  { label: "Çözümler", href: "#surec" },
  { label: "İletişim", href: "/iletisim" },
];

export default function FlagshipNav() {
  const panel = getPanelLink();
  const openDemo = useOpenDemo();
  const [open, setOpen] = useState(false);

  // Drawer açıkken arka plan kaydırmasını kilitle + Escape ile kapat
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-md [-webkit-backdrop-filter:blur(12px)]"
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Sol — logo / yazı */}
          <a href="#tepe" className="group flex items-center gap-2.5" aria-label="ÖNCÜ Intelligence — ana sayfa">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-zinc-700 bg-white/[0.03] text-zinc-300 transition-colors group-hover:border-zinc-500">
              <Satellite className="h-4 w-4" strokeWidth={2} aria-hidden />
            </span>
            <span className="flex items-baseline gap-1.5 font-[family-name:var(--font-inter)] leading-none tracking-tight">
              <span className="text-base font-bold text-zinc-100">ÖNCÜ</span>
              <span className="text-base font-light text-zinc-500">Intelligence</span>
            </span>
          </a>

          {/* Sağ — ince çizgili burger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={open}
            aria-controls="flagship-drawer"
            className="group flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg transition-colors hover:bg-white/[0.05]"
          >
            <span className="h-px w-6 bg-slate-200 transition-all duration-300 group-hover:w-7 group-hover:bg-white" />
            <span className="h-px w-6 bg-slate-200 transition-all duration-300 group-hover:bg-white" />
            <span className="h-px w-6 bg-slate-200 transition-all duration-300 group-hover:w-4 group-hover:bg-white" />
          </button>
        </nav>
      </motion.header>

      {/* Karartma katmanı */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sağdan kayan buzlu cam navigasyon paneli */}
      <aside
        id="flagship-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Ana navigasyon"
        className={`fixed inset-y-0 right-0 z-[70] flex h-full w-[84%] max-w-sm transform flex-col border-l border-white/10 bg-[rgba(7,10,19,0.85)] backdrop-blur-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-backdrop-filter:blur(20px)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer başlığı */}
        <div className="flex h-16 items-center justify-between px-6">
          <span className="flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-sm tracking-tight">
            <span className="font-bold text-white">ÖNCÜ</span>
            <span className="font-light text-slate-400">Intelligence</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menüyü kapat"
            className="group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/[0.05]"
          >
            <span className="absolute h-px w-5 rotate-45 bg-slate-200 transition-colors group-hover:bg-white" />
            <span className="absolute h-px w-5 -rotate-45 bg-slate-200 transition-colors group-hover:bg-white" />
          </button>
        </div>

        {/* Kritik yönlendirmeler — geniş boşluklu */}
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
          {navItems.map((item, i) => {
            const isAnchor = item.href.startsWith("#");
            const cls =
              "group flex items-center justify-between border-b border-zinc-800 py-6 font-[family-name:var(--font-inter)] text-3xl font-semibold tracking-tight text-zinc-400 transition-colors hover:text-zinc-100";
            const inner = (
              <>
                <span>{item.label}</span>
                <ArrowUpRight className="h-5 w-5 text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-400" aria-hidden />
              </>
            );
            return isAnchor ? (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cls}>
                {inner}
              </Link>
            );
          })}
        </nav>

        {/* Alt aksiyonlar */}
        <div className="flex flex-col gap-3 px-6 pb-8">
          <a
            href={panel.href}
            target={panel.openInNewTab ? "_blank" : undefined}
            rel={panel.openInNewTab ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className="group inline-flex items-center justify-center gap-2 rounded-sm border border-zinc-700 bg-zinc-100 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-zinc-900 transition-colors hover:bg-white"
          >
            Panele giriş
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openDemo();
            }}
            className="inline-flex items-center justify-center rounded-sm border border-zinc-800 bg-transparent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
          >
            Demo talebi
          </button>
          <p className="pt-2 text-center font-mono text-[11px] tracking-wide text-zinc-700">
            iletisim@oncuintelligence.com
          </p>
        </div>
      </aside>
    </>
  );
}
