import Link from "next/link";
import MarketingShell from "@/components/MarketingShell";

export default function NotFound() {
  return (
    <MarketingShell>
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#070a13] px-4 py-32 text-zinc-100">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">404</p>
        <h1 className="mb-3 text-center font-[family-name:var(--font-inter)] text-2xl font-extrabold tracking-tight md:text-3xl">
          Sayfa bulunamadı
        </h1>
        <p className="mb-8 max-w-md text-center leading-relaxed text-zinc-400">
          Aradığınız adres taşınmış veya silinmiş olabilir. Ana sayfadan devam edebilir veya iletişim formunu kullanabilirsiniz.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-zinc-100 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition-colors hover:bg-white"
          >
            Ana sayfa
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-sm border border-zinc-700 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            İletişim
          </Link>
        </div>
      </main>
    </MarketingShell>
  );
}
