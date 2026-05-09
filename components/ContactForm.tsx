"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: { sitekey: string; callback: (t: string) => void; "expired-callback"?: () => void }) => string;
      reset?: (id?: string) => void;
    };
  }
}

type Props = { turnstileSiteKey?: string };

export default function ContactForm({ turnstileSiteKey = "" }: Props) {
  const [pending, setPending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!turnstileSiteKey || !widgetRef.current) return;
    let cancelled = false;

    const render = () => {
      if (cancelled || !widgetRef.current || !window.turnstile) return;
      widgetId.current = window.turnstile.render(widgetRef.current, {
        sitekey: turnstileSiteKey,
        callback: (t) => setTurnstileToken(t),
        "expired-callback": () => setTurnstileToken(""),
      });
    };

    const existing = document.querySelector<HTMLScriptElement>('script[data-turnstile="1"]');
    if (existing) {
      existing.addEventListener("load", render, { once: true });
      if (window.turnstile) render();
      return () => {
        cancelled = true;
      };
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.dataset.turnstile = "1";
    script.onload = () => {
      if (!cancelled) render();
    };
    document.body.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [turnstileSiteKey]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const companyWebsite = String(fd.get("company_website") ?? "").trim();
    if (companyWebsite) {
      toast.success("Gönderildi.");
      form.reset();
      return;
    }

    const body = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      company_website: String(fd.get("company_website") ?? "").trim(),
      turnstileToken: turnstileSiteKey ? turnstileToken : "",
    };

    setPending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string; delivered?: boolean };
      if (!res.ok || !data.ok) {
        toast.error(data.error ?? "Gönderilemedi");
        setTurnstileToken("");
        if (widgetId.current && window.turnstile?.reset) window.turnstile.reset(widgetId.current);
        return;
      }
      toast.success(
        data.delivered
          ? "Mesajınız alındı. En kısa sürede dönüş yapılacaktır."
          : "Kayıt alındı. Üretimde webhook ekleyerek CRM’e iletebilirsiniz.",
      );
      form.reset();
      setTurnstileToken("");
      if (widgetId.current && window.turnstile?.reset) window.turnstile.reset(widgetId.current);
    } catch {
      toast.error("Ağ hatası — tekrar deneyin.");
    } finally {
      setPending(false);
    }
  }

  const input =
    "w-full rounded-xl border border-[#E2E8F0] bg-[#FAFCFE] px-4 py-3 text-sm text-[#0F172A] outline-none focus:border-[#15803D]/50 focus:ring-[3px] focus:ring-[#15803D]/15 dark:border-border dark:bg-card dark:text-foreground";

  return (
    <form onSubmit={onSubmit} className="max-w-lg space-y-5" autoComplete="on">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0" aria-hidden tabIndex={-1}>
        <label htmlFor="company_website">Web sitesi</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[11px] font-semibold text-[#475569] dark:text-muted-foreground">
          Ad soyad *
        </label>
        <input id="name" name="name" required className={input} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[11px] font-semibold text-[#475569] dark:text-muted-foreground">
          Kurumsal e-posta *
        </label>
        <input id="email" name="email" type="email" required className={input} autoComplete="email" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-[11px] font-semibold text-[#475569] dark:text-muted-foreground">
            Şirket
          </label>
          <input id="company" name="company" className={input} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[11px] font-semibold text-[#475569] dark:text-muted-foreground">
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" className={input} autoComplete="tel" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[11px] font-semibold text-[#475569] dark:text-muted-foreground">
          Mesaj *
        </label>
        <textarea id="message" name="message" required rows={5} className={`${input} min-h-[120px] resize-y`} />
      </div>
      {turnstileSiteKey ? (
        <div className="flex justify-start">
          <div ref={widgetRef} className="min-h-[65px]" />
        </div>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-[#15803D] px-8 py-3 font-bold text-white shadow-md shadow-[#15803D]/25 transition-colors hover:bg-[#166534] disabled:opacity-60 sm:w-auto dark:text-primary-foreground"
      >
        {pending ? "Gönderiliyor…" : "Gönder"}
      </button>
      <p className="text-[11px] leading-relaxed text-[#64748B] dark:text-muted-foreground">
        İsterseniz doğrudan{" "}
        <a href="mailto:iletisim@oncuintelligence.com" className="font-semibold text-[#15803D] underline dark:text-primary">
          iletisim@oncuintelligence.com
        </a>{" "}
        adresine de yazabilirsiniz.
      </p>
    </form>
  );
}
