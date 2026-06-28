"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getPanelLink } from "@/lib/site-config";
import { useOpenDemo } from "@/components/DemoOpenContext";

const navItems = [
  { label: "Platform", href: "#yetenekler" },
  { label: "Teknoloji", href: "#katmanlar" },
  { label: "Çözümler", href: "#surec" },
  { label: "İletişim", href: "/iletisim" },
];

const navLinkCls =
  "text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:text-white";

export default function FlagshipNav() {
  const panel = getPanelLink();
  const openDemo = useOpenDemo();
  const [open, setOpen] = useState(false);

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
        <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-8">
          {/* Sol — logo + yatay menü (SpaceX dizilimi) */}
          <div className="flex items-center gap-10">
            <a href="#tepe" aria-label="ÖNCÜ Intelligence — ana sayfa" className="shrink-0">
              <span className="font-[family-name:var(--font-inter)] text-[15px] font-extrabold uppercase tracking-[0.2em] text-white">
                ÖNCÜ<span className="ml-1.5 font-light text-zinc-400">INTELLIGENCE</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <a key={item.href} href={item.href} className={navLinkCls}>
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className={navLinkCls}>
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Sağ — SpaceX tarzı kutu buton + mobil burger */}
          <div className="flex items-center gap-3">
            <a
              href={panel.href}
              target={panel.openInNewTab ? "_blank" : undefined}
              rel={panel.openInNewTab ? "noopener noreferrer" : undefined}
              className="hidden items-center gap-2 border border-zinc-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-100 transition-colors hover:bg-white hover:text-zinc-900 sm:inline-flex"
            >
              Panele giriş
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Menüyü aç"
              aria-expanded={open}
              aria-controls="flagship-drawer"
              className="group flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-sm transition-colors hover:bg-white/[0.05] lg:hidden"
            >
              <span className="h-px w-6 bg-zinc-200 transition-all duration-300 group-hover:bg-white" />
              <span className="h-px w-6 bg-zinc-200 transition-all duration-300 group-hover:bg-white" />
              <span className="h-px w-6 bg-zinc-200 transition-all duration-300 group-hover:bg-white" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Karartma katmanı */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sağdan kayan buzlu cam navigasyon paneli (mobil) */}
      <aside
        id="flagship-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Ana navigasyon"
        className={`fixed inset-y-0 right-0 z-[70] flex h-full w-[84%] max-w-sm transform flex-col border-l border-zinc-800 bg-[rgba(7,10,19,0.92)] backdrop-blur-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [-webkit-backdrop-filter:blur(20px)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-[family-name:var(--font-inter)] text-[13px] font-extrabold uppercase tracking-[0.18em] text-white">
            ÖNCÜ<span className="ml-1.5 font-light text-zinc-400">INTELLIGENCE</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menüyü kapat"
            className="group relative flex h-10 w-10 items-center justify-center rounded-sm transition-colors hover:bg-white/[0.05]"
          >
            <span className="absolute h-px w-5 rotate-45 bg-zinc-200 transition-colors group-hover:bg-white" />
            <span className="absolute h-px w-5 -rotate-45 bg-zinc-200 transition-colors group-hover:bg-white" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
          {navItems.map((item) => {
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
