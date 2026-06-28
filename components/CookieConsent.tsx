"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "satenergy_cookie_consent";

export type ConsentValue = "all" | "essential";

export function dispatchConsentChange(value: ConsentValue) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("satenergy-consent", { detail: value }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const save = useCallback((value: ConsentValue) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    dispatchConsentChange(value);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihleri"
      className="fixed bottom-0 left-0 right-0 z-[250] p-4 md:p-6 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto rounded-sm border border-zinc-800 bg-[#0e131f]/95 backdrop-blur-md shadow-[0_-8px_40px_rgba(0,0,0,0.5)] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 text-sm text-zinc-400 leading-relaxed">
          <p className="font-semibold text-zinc-100 mb-1">Çerezler ve ölçüm</p>
          <p>
            Siteyi iyileştirmek için çerezler ve isteğe bağlı analitik kullanıyoruz. Ayrıntılar için{" "}
            <Link href="/gizlilik" className="text-zinc-200 font-semibold underline underline-offset-2 hover:text-white">
              gizlilik politikası
            </Link>{" "}
            ve{" "}
            <Link href="/kvkk" className="text-zinc-200 font-semibold underline underline-offset-2 hover:text-white">
              KVKK metni
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <button
            type="button"
            onClick={() => save("essential")}
            className="px-4 py-2.5 rounded-sm border border-zinc-700 bg-transparent text-zinc-300 text-sm font-semibold uppercase tracking-wide hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Yalnızca gerekli
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="px-4 py-2.5 rounded-sm bg-zinc-100 text-zinc-900 text-sm font-semibold uppercase tracking-wide hover:bg-white transition-colors"
          >
            Tümünü kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
