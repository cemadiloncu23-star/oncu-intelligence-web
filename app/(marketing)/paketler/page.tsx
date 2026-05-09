import Link from "next/link";
import InnerPageHeader from "@/components/InnerPageHeader";

export default function PricingTiersPage() {
  return (
    <main id="main" className="min-h-screen bg-slate-100 pb-24 dark:bg-background">
      <InnerPageHeader
        title="Paketler ve kapsam"
        subtitle="Fiyat tabloları ve sabit SLA beyanları yazılı teklifle paylaşılır; vitrin bir taahhüt oluşturmaz."
      />

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm dark:border-border dark:bg-card md:p-10">
          <p className="mb-6 leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Satenergy kurumsal çözümü için kota, lokasyon sayısı, raporlamanın derinliği ve destek düzeyi proje görüşmesinde netleştirilir. Bu sayfa yalnızca süreç
            için yönlendirme sağlar.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex rounded-xl bg-[#15803D] px-8 py-3.5 font-bold text-white shadow-md shadow-[#15803D]/30 transition-colors hover:bg-[#166534] dark:text-primary-foreground"
          >
            Teklif / bilgi için yazın
          </Link>
        </div>
      </div>
    </main>
  );
}
