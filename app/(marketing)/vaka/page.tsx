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
          <p className="rounded-sm border border-zinc-800 bg-[#0e131f] p-8 text-center text-zinc-400">
            Listelenecek vaka yok.{" "}
            <Link href="/iletisim" className="font-semibold text-zinc-200 underline-offset-2 hover:text-white hover:underline">
              İletişim
            </Link>{" "}
            ile referans süreci hakkında sorabilirsiniz.
          </p>
        ) : (
          caseStudies.map((c) => (
            <article key={c.slug} className="rounded-sm border border-zinc-800 bg-[#0e131f] p-6 transition-colors hover:border-zinc-700">
              <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{c.sector}</p>
              <h2 className="mb-2 text-xl font-bold text-zinc-100">
                <Link href={`/vaka/${c.slug}`} className="transition-colors hover:text-white">
                  {c.title}
                </Link>
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400">{c.summary}</p>
              <Link href={`/vaka/${c.slug}`} className="mt-4 inline-block text-sm font-semibold text-zinc-300 hover:text-white hover:underline">
                Detay
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  );
}
