"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import PanelNavLink from "@/components/PanelNavLink";
import ThemeToggle from "@/components/ThemeToggle";
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
  "whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold text-[#475569] transition-colors hover:bg-[#F1F5F9] hover:text-[#15803D] xl:px-3 xl:text-sm";

export default function Navbar({ onDemoClick }: { onDemoClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hashHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <motion.nav
      initial={{ y: -24 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/96 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-md dark:border-border dark:bg-card/95"
    >
      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-8">
        <div className="flex h-14 min-h-[3.5rem] items-center justify-between gap-2 lg:gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center py-1"
            aria-label="Satenergy — ÖNCÜ Intelligence, ana sayfa"
          >
            <span className="rounded-lg bg-[#051524] p-1.5 shadow-inner ring-1 ring-black/15">
              <BrandLogo variant="navbar" priority />
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 justify-center px-2 lg:flex">
            <div className="flex max-w-full flex-nowrap items-center gap-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {anchorNav.map((item) => (
                <a key={item.id} href={hashHref(item.id)} className={navLinkClass}>
                  {item.label}
                </a>
              ))}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger
                  className={`inline-flex shrink-0 items-center gap-0.5 border-0 bg-transparent outline-none ring-0 ${navLinkClass} data-[state=open]:bg-[#F1F5F9] data-[state=open]:text-[#4338CA]`}
                  aria-label="Keşfet menüsünü aç"
                >
                  Keşfet
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" sideOffset={6} className="min-w-[12rem]">
                  {groupedPageLinks.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="cursor-pointer">
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

          <div className="hidden shrink-0 items-center gap-1.5 lg:flex xl:gap-2">
            <Link
              href={pathname.startsWith("/en") ? "/" : "/en"}
              className="hidden shrink-0 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-2 text-[11px] font-bold uppercase tracking-wide text-[#475569] transition-colors hover:border-[#15803D]/30 hover:text-[#15803D] lg:inline-flex dark:border-border dark:bg-card dark:text-foreground"
            >
              {pathname.startsWith("/en") ? "TR" : "EN"}
            </Link>
            <ThemeToggle />
            <PanelNavLink className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#4338CA]/25 bg-[#EEF2FF] px-2.5 py-2 text-xs font-bold text-[#3730a3] transition-colors hover:border-[#4338CA]/40 hover:bg-[#E0E7FF] xl:px-3 xl:text-sm" />
            <button
              type="button"
              onClick={onDemoClick}
              className="shrink-0 rounded-xl bg-[#15803D] px-3 py-2 text-xs font-bold text-white shadow-sm shadow-[#15803D]/30 transition-colors hover:bg-[#166534] xl:px-4 xl:text-sm"
            >
              Erişim talep et
            </button>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#15803D]/40"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-[#E2E8F0] bg-white shadow-lg dark:border-border dark:bg-card lg:hidden">
          <div className="max-h-[min(80vh,calc(100dvh-3.75rem))] space-y-0.5 overflow-y-auto px-2 py-3">
            {anchorNav.map((item) => (
              <a
                key={item.id}
                href={hashHref(item.id)}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#475569] hover:bg-[#F8FAFC] hover:text-[#15803D] dark:text-foreground dark:hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            {groupedPageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#475569] hover:bg-[#F8FAFC] hover:text-[#4338CA] dark:text-foreground dark:hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#475569] hover:bg-[#F8FAFC] hover:text-[#15803D] dark:text-foreground dark:hover:bg-muted"
            >
              İletişim
            </Link>
            <div className="flex items-center gap-2 border-t border-[#E2E8F0] pt-2 dark:border-border">
              <Link
                href={pathname.startsWith("/en") ? "/" : "/en"}
                onClick={() => setIsOpen(false)}
                className="inline-flex shrink-0 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-xs font-bold uppercase text-[#475569] dark:border-border dark:bg-background dark:text-foreground"
              >
                {pathname.startsWith("/en") ? "Türkçe" : "English"}
              </Link>
              <ThemeToggle />
            </div>
            <div className="mt-2 border-t border-[#E2E8F0] pt-2 dark:border-border">
              <PanelNavLink
                onNavigate={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-xl border border-[#4338CA]/20 bg-[#EEF2FF] px-3 py-3 text-sm font-bold text-[#3730a3]"
              />
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onDemoClick();
                }}
                className="mt-2 w-full rounded-xl bg-[#15803D] px-4 py-3 text-sm font-bold text-white"
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
