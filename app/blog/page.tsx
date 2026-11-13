import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Car Selling Tips & Guides | SellMyCar.ae Blog',
  description: 'Read our latest articles about selling cars in Dubai, car valuation tips, and RTA transfer guides.',
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-brand-dark py-12 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Latest <span className="text-yellow-500">Insights</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Expert advice on selling your car, market trends, and automotive news in the UAE.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                  {post.mainImage ? (
                    <Image
                      src={post.mainImage.src}
                      alt={post.mainImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-blue-600 font-medium mb-2">{formatDate(post.publishedAt)}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.metaDescription || 'Click to read full article...'}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm mt-auto">
                    Read Article
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-xl text-gray-500">No blog posts yet.</h2>
            <p className="text-gray-400 mt-2">New articles are coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
