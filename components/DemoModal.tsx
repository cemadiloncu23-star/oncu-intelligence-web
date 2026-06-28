"use client";

import React from "react";
import { Mail } from "lucide-react";

const COMPANY_EMAIL = "iletisim@oncuintelligence.com";
const DEMO_SUBJECT = "Demo / Erişim Talebi";

export default function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const mailtoUrl = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Demo talep et"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-sm border border-zinc-800 bg-[#0e131f] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.5)] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-2 font-[family-name:var(--font-inter)] text-xl font-bold text-zinc-100">Demo / Erişim Talebi</h2>
        <p className="mb-6 text-sm leading-relaxed text-zinc-400">
          Talebiniz şirket e-posta adresimize yönlendirilecek şekilde e-posta istemcinizi açar.
        </p>
        <p className="mb-6 text-[11px] text-zinc-600">
          Mesaj sırasına göre yanıtlama yapılır; acil durumlarda iletişim formunu kullanabilirsiniz.
        </p>

        <a
          href={mailtoUrl}
          className="mb-4 flex w-full items-center justify-center gap-2 rounded-sm bg-zinc-100 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition-colors hover:bg-white"
        >
          <Mail className="h-4 w-4" />
          <span className="normal-case tracking-normal">E-posta ile talep</span>
        </a>

        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-sm border border-zinc-800 bg-transparent py-2.5 text-sm font-semibold uppercase tracking-wide text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
        >
          Kapat
        </button>
      </div>
    </div>
  );
}
