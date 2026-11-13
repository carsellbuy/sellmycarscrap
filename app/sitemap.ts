import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getAllPosts } from '@/data/posts';

const staticRoutes: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/ar', priority: 0.9 },
  { path: '/sell-car-dubai', priority: 0.9 },
  { path: '/sell-car-abu-dhabi', priority: 0.9 },
  { path: '/sell-car-sharjah', priority: 0.9 },
  { path: '/sell-car-ajman', priority: 0.9 },
  { path: '/sell-used-car', priority: 0.8 },
  { path: '/sell-unused-car', priority: 0.8 },
  { path: '/sell-damaged-car', priority: 0.8 },
  { path: '/sell-accidental-car', priority: 0.8 },
  { path: '/blog', priority: 0.6 },
  { path: '/privacy', priority: 0.2 },
  { path: '/terms', priority: 0.2 },
  { path: '/cookies', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    priority,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
