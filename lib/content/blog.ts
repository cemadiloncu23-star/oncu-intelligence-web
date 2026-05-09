export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
};

/** Canlı sitede yayınlanacak yazılar buraya eklenir (şu an yapay örnek içerik yok). */
export const blogPosts: BlogPost[] = [];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
