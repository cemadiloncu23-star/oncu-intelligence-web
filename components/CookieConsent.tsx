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
      <div className="pointer-events-auto max-w-3xl mx-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_-8px_40px_rgba(15,23,42,0.12)] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 text-sm text-[#475569] leading-relaxed">
          <p className="font-semibold text-[#0F172A] mb-1">Çerezler ve ölçüm</p>
          <p>
            Siteyi iyileştirmek için çerezler ve isteğe bağlı analitik kullanıyoruz. Ayrıntılar için{" "}
            <Link href="/gizlilik" className="text-[#15803D] font-semibold underline underline-offset-2">
              gizlilik politikası
            </Link>{" "}
            ve{" "}
            <Link href="/kvkk" className="text-[#15803D] font-semibold underline underline-offset-2">
              KVKK metni
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <button
            type="button"
            onClick={() => save("essential")}
            className="px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] text-sm font-semibold hover:bg-[#F1F5F9] transition-colors"
          >
            Yalnızca gerekli
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="px-4 py-2.5 rounded-xl bg-[#15803D] text-white text-sm font-bold hover:bg-[#166534] shadow-md shadow-[#15803D]/25 transition-colors"
          >
            Tümünü kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
