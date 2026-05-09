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
          <p className="rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center text-[#64748B] shadow-sm dark:border-border dark:bg-card dark:text-muted-foreground">
            Henüz yayınlanmış yazı yok.{" "}
            <Link href="/iletisim" className="font-bold text-[#15803D] hover:underline dark:text-emerald-400">
              İletişim
            </Link>{" "}
            üzerinden içerik talebi iletebilirsiniz.
          </p>
        ) : (
          sorted.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-colors hover:border-[#15803D]/25 dark:border-border dark:bg-card"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#64748B] dark:text-muted-foreground">
                {post.date}
              </p>
              <h2 className="mb-2 text-xl font-bold text-[#0F172A] dark:text-foreground">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[#15803D] dark:hover:text-emerald-400">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-[#15803D] hover:underline dark:text-emerald-400">
                Devamını oku
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  );
}
