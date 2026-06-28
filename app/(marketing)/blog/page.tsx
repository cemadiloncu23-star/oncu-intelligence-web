import Link from "next/link";
import InnerPageHeader from "@/components/InnerPageHeader";
import { blogPosts } from "@/lib/content/blog";

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <InnerPageHeader
        title="Blog"
        subtitle="Teknik ve sektörel yazılar yayımlandıkça burada listelenir. Şu anda hazır makale bulunmuyor."
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 pb-24">
        {sorted.length === 0 ? (
          <p className="rounded-sm border border-zinc-800 bg-[#0e131f] p-8 text-center text-zinc-400">
            Henüz yayınlanmış yazı yok.{" "}
            <Link href="/iletisim" className="font-semibold text-zinc-200 underline-offset-2 hover:text-white hover:underline">
              İletişim
            </Link>{" "}
            üzerinden içerik talebi iletebilirsiniz.
          </p>
        ) : (
          sorted.map((post) => (
            <article
              key={post.slug}
              className="rounded-sm border border-zinc-800 bg-[#0e131f] p-6 transition-colors hover:border-zinc-700"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                {post.date}
              </p>
              <h2 className="mb-2 text-xl font-bold text-zinc-100">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-white">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-zinc-300 hover:text-white hover:underline">
                Devamını oku
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  );
}
