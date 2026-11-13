// Blog posts live here now that Sanity has been removed.
// To publish a post, add an object to `posts`. `body` is a list of blocks
// rendered in order; `image` paths point to files in /public.

export type PostBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string };

export interface Post {
  slug: string;
  title: string;
  publishedAt: string; // ISO date, e.g. "2026-11-14"
  metaTitle?: string;
  metaDescription?: string;
  mainImage?: { src: string; alt: string };
  body: PostBlock[];
}

export const posts: Post[] = [];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
