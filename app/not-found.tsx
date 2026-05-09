import Link from "next/link";
import MarketingShell from "@/components/MarketingShell";

export default function NotFound() {
  return (
    <MarketingShell>
      <main className="min-h-[55vh] flex flex-col items-center justify-center px-4 py-24 bg-[#F8FAFC] text-[#0F172A]">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] mb-2">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-3">Sayfa bulunamadı</h1>
        <p className="text-[#64748B] text-center max-w-md mb-8 leading-relaxed">
          Aradığınız adres taşınmış veya silinmiş olabilir. Ana sayfadan devam edebilir veya iletişim formunu kullanabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#15803D] text-white font-bold hover:bg-[#166534] shadow-md shadow-[#15803D]/25"
          >
            Ana sayfa
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#4338CA]/25 bg-[#EEF2FF] text-[#3730a3] font-bold hover:bg-[#E0E7FF]"
          >
            İletişim
          </Link>
        </div>
      </main>
    </MarketingShell>
  );
}
