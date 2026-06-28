import Link from "next/link";
import { notFound } from "next/navigation";
import InnerPageHeader from "@/components/InnerPageHeader";
import { caseStudies, getCaseBySlug } from "@/lib/content/cases";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <InnerPageHeader title={c.title} subtitle={`Sektör: ${c.sector}`} />
      <article className="max-w-3xl mx-auto px-4 py-12 pb-24 space-y-8 text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-zinc-100 mb-2">Özet</h2>
          <p>{c.summary}</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-zinc-100 mb-2">Zorluk</h2>
          <p>{c.challenge}</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-zinc-100 mb-2">Yaklaşım</h2>
          <p>{c.approach}</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-zinc-100 mb-2">Sonuç</h2>
          <p>{c.outcome}</p>
        </section>
        <p>
          <Link href="/vaka" className="font-semibold text-zinc-300 hover:text-white hover:underline">
            ← Tüm vakalar
          </Link>
        </p>
      </article>
    </>
  );
}
