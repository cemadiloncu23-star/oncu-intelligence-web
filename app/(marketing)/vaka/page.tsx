import Link from "next/link";
import InnerPageHeader from "@/components/InnerPageHeader";
import { caseStudies } from "@/lib/content/cases";

export default function CasesIndexPage() {
  return (
    <>
      <InnerPageHeader
        title="Vaka çalışmaları"
        subtitle="Yalnızca müşteri izni ve doğrulanabilir verilerle paylaşılacak vakalar burada yer alacaktır."
      />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12 pb-24">
        {caseStudies.length === 0 ? (
          <p className="rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center text-[#64748B] shadow-sm dark:border-border dark:bg-card dark:text-muted-foreground">
            Listelenecek vaka yok.{" "}
            <Link href="/iletisim" className="font-bold text-[#15803D] hover:underline dark:text-emerald-400">
              İletişim
            </Link>{" "}
            ile referans süreci hakkında sorabilirsiniz.
          </p>
        ) : (
          caseStudies.map((c) => (
            <article key={c.slug} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-border dark:bg-card">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#4338CA] dark:text-indigo-400">{c.sector}</p>
              <h2 className="mb-2 text-xl font-bold text-[#0F172A] dark:text-foreground">
                <Link href={`/vaka/${c.slug}`} className="transition-colors hover:text-[#15803D] dark:hover:text-emerald-400">
                  {c.title}
                </Link>
              </h2>
              <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{c.summary}</p>
              <Link href={`/vaka/${c.slug}`} className="mt-4 inline-block text-sm font-bold text-[#15803D] hover:underline dark:text-emerald-400">
                Detay
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  );
}
