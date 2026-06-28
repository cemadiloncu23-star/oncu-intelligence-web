"use client";

import Link from "next/link";

const legal = [
  { label: "KVKK", href: "/kvkk" },
  { label: "Gizlilik", href: "/gizlilik" },
  { label: "Kullanım şartları", href: "/kullanim-sartlari" },
  { label: "Teknik güven", href: "/guven" },
];

export default function FlagshipFooter() {
  return (
    <footer className="relative border-t border-white/[0.1] bg-transparent">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {legal.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-zinc-500 transition-colors hover:text-zinc-200">
              {l.label}
            </Link>
          ))}
          <a href="mailto:iletisim@oncuintelligence.com" className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-100">
            iletisim@oncuintelligence.com
          </a>
        </nav>
      </div>

      <div className="border-t border-white/[0.04]">
        <p className="mx-auto max-w-7xl px-5 py-4 text-center font-mono text-[11px] tracking-wide text-slate-600 sm:px-8">
          © 2026 ÖNCÜ Intelligence · Credit by the Öncü Intelligence
        </p>
      </div>
    </footer>
  );
}
