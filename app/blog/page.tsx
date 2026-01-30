import { Metadata } from 'next';
import { client, urlFor } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';

// 1. Metadata (আপনার আগেরটাই রাখলাম)
export const metadata: Metadata = {
  title: 'Car Selling Tips & Guides | SellMyCar.ae Blog',
  description: 'Read our latest articles about selling cars in Dubai, car valuation tips, and RTA transfer guides.',
};

// 2. Sanity থেকে ডাটা আনার ফাংশন
async function getPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      publishedAt,
      mainImage,
      metaDescription
    }
  `;
  const posts = await client.fetch(query);
  return posts;
}

// 3. মেইন কম্পোনেন্ট
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="pt-20 min-h-screen bg-gray-50"> 
      
      {/* --- আপনার আগের ডিজাইনের হেডার --- */}
      <div className="bg-brand-dark py-12 text-center text-white bg-slate-900">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Latest <span className="text-yellow-500">Insights</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Expert advice on selling your car, market trends, and automotive news in the UAE.
        </p>
      </div>

      {/* --- Sanity Blog Grid Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link 
                href={`/blog/${post.slug.current}`} 
                key={post.slug.current}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  
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
            <h3 className="text-xl text-gray-500">No blog posts found yet.</h3>
            <p className="text-gray-400 mt-2">Check back later or publish one from Sanity Studio.</p>
          </div>
        )}

      </div>
    </div>
  );
}