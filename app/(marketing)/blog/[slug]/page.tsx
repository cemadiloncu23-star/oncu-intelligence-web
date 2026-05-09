import Link from "next/link";
import { notFound } from "next/navigation";
import InnerPageHeader from "@/components/InnerPageHeader";
import { blogPosts, getPostBySlug } from "@/lib/content/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <InnerPageHeader title={post.title} subtitle={post.excerpt} />
      <article className="max-w-3xl mx-auto px-4 py-12 pb-24 space-y-6 text-[#475569] leading-relaxed">
        <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide">{post.date}</p>
        {post.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <p>
          <Link href="/blog" className="font-bold text-[#15803D] hover:underline">
            ← Blog listesi
          </Link>
        </p>
      </article>
    </>
  );
}
