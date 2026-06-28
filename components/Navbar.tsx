"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import PanelNavLink from "@/components/PanelNavLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const anchorNav = [
  { label: "Platform", id: "platform" },
  { label: "Süreçler", id: "surecler" },
  { label: "Nasıl başlarım", id: "nasil-baslar" },
  { label: "Erişim", id: "erisim" },
];

const groupedPageLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Vakalar", href: "/vaka" },
  { label: "Kaynaklar", href: "/kaynaklar" },
  { label: "Paketler", href: "/paketler" },
  { label: "Teknik güven", href: "/guven" },
];

const navLinkClass =
  "whitespace-nowrap rounded-sm px-2.5 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:text-white";

export default function Navbar({ onDemoClick }: { onDemoClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hashHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);
  const isEn = pathname.startsWith("/en");

  return (
    <motion.nav
      initial={{ y: -24 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-zinc-800/80 bg-[#070a13]/80 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)]"
    >
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link
            href="/"
            className="flex shrink-0 items-center py-1"
            aria-label="ÖNCÜ Intelligence — ana sayfa"
          >
            <span className="font-[family-name:var(--font-inter)] text-[15px] font-extrabold uppercase tracking-[0.2em] text-white">
              ÖNCÜ<span className="ml-1.5 font-light text-zinc-400">INTELLIGENCE</span>
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 justify-center px-2 lg:flex">
            <div className="flex max-w-full flex-nowrap items-center gap-1">
              {anchorNav.map((item) => (
                <a key={item.id} href={hashHref(item.id)} className={navLinkClass}>
                  {item.label}
                </a>
              ))}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger
                  className={`inline-flex shrink-0 items-center gap-0.5 border-0 bg-transparent outline-none ring-0 ${navLinkClass} data-[state=open]:text-white`}
                  aria-label="Keşfet menüsünü aç"
                >
                  Keşfet
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  sideOffset={8}
                  className="min-w-[12rem] border-zinc-800 bg-[#0e131f] text-zinc-300"
                >
                  {groupedPageLinks.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="cursor-pointer focus:bg-white/[0.06] focus:text-white">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/iletisim" className={navLinkClass}>
                İletişim
              </Link>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link
              href={isEn ? "/" : "/en"}
              className="shrink-0 rounded-sm border border-zinc-700 px-2.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            >
              {isEn ? "TR" : "EN"}
            </Link>
            <PanelNavLink className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-zinc-700 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-200 transition-colors hover:bg-white hover:text-zinc-900" />
            <button
              type="button"
              onClick={onDemoClick}
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-zinc-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-900 transition-colors hover:bg-white"
            >
              Erişim talep et
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </button>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-sm p-2 text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-zinc-800 bg-[#070a13] lg:hidden">
          <div className="max-h-[min(80vh,calc(100dvh-4rem))] space-y-0.5 overflow-y-auto px-3 py-3">
            {anchorNav.map((item) => (
              <a
                key={item.id}
                href={hashHref(item.id)}
                onClick={() => setIsOpen(false)}
                className="block rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-wide text-zinc-400 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            {groupedPageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-wide text-zinc-400 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="block rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-wide text-zinc-400 hover:bg-white/[0.05] hover:text-white"
            >
              İletişim
            </Link>
            <div className="flex items-center gap-2 border-t border-zinc-800 pt-3">
              <Link
                href={isEn ? "/" : "/en"}
                onClick={() => setIsOpen(false)}
                className="inline-flex shrink-0 rounded-sm border border-zinc-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300"
              >
                {isEn ? "Türkçe" : "English"}
              </Link>
            </div>
            <div className="mt-2 space-y-2 border-t border-zinc-800 pt-3">
              <PanelNavLink
                onNavigate={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-sm border border-zinc-700 px-3 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-200"
              />
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onDemoClick();
                }}
                className="w-full rounded-sm bg-zinc-100 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition-colors hover:bg-white"
              >
                Erişim talep et
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
