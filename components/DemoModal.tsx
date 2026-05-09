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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_24px_48px_rgba(15,23,42,0.12)] md:p-8 dark:border-border dark:bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-2 text-xl font-bold text-[#0F172A] dark:text-foreground">Demo / Erişim Talebi</h2>
        <p className="mb-6 text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">
          Talebiniz şirket e-posta adresimize yönlendirilecek şekilde e-posta istemcinizi açar.
        </p>
        <p className="mb-6 text-[11px] text-[#94A3B8] dark:text-slate-500">
          Mesaj sırasına göre yanıtlama yapılır; acil durumlarda iletişim formunu kullanabilirsiniz.
        </p>

        <a
          href={mailtoUrl}
          className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#15803D] px-4 py-3 font-bold text-white shadow-[0_4px_14px_rgba(21,128,61,0.35)] transition-colors hover:bg-[#166534] dark:text-primary-foreground"
        >
          <Mail className="h-5 w-5" />
          <span>E-posta ile talep ({COMPANY_EMAIL})</span>
        </a>

        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-xl bg-[#F1F5F9] py-2.5 text-sm font-semibold text-[#475569] transition-colors hover:bg-[#E2E8F0] dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted/80"
        >
          Kapat
        </button>
      </div>
    </div>
  );
}
