"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterForm() {
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (String(fd.get("full_name") ?? "").trim()) {
      toast.success("Kayıt alındı.");
      form.reset();
      return;
    }
    const email = String(fd.get("email") ?? "").trim();

    setPending(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, full_name: "" }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        toast.error(data.error ?? "Kayıt alınamadı");
        return;
      }
      toast.success("Bülten kaydınız alındı.");
      form.reset();
    } catch {
      toast.error("Ağ hatası — tekrar deneyin.");
    } finally {
      setPending(false);
    }
  }

  const input =
    "min-w-0 flex-1 rounded-sm border border-zinc-700 bg-[#0e131f] px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors focus:border-zinc-500";

  return (
    <form onSubmit={onSubmit} className="relative mt-8 w-full max-w-md">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Bülten</p>
      <div className="absolute left-[-9999px] h-px w-px overflow-hidden opacity-0" aria-hidden tabIndex={-1}>
        <label htmlFor="nl_full_name">Tam ad</label>
        <input id="nl_full_name" name="full_name" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="kurumsal@sirketiniz.tr"
          className={input}
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 rounded-sm bg-zinc-100 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition-colors hover:bg-white disabled:opacity-60"
        >
          {pending ? "…" : "Abone ol"}
        </button>
      </div>
      <p className="mt-2 text-[10px] text-zinc-600">İstediğiniz zaman abonelikten çıkabilirsiniz.</p>
    </form>
  );
}
