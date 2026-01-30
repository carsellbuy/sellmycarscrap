import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// --- ১. ইমেজের জন্য সেটিংস ---
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-[300px] md:h-[500px] my-8 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog Content Image'}
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
};

// --- ২. ডাটা আনার ফাংশন ---
async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      publishedAt,
      body,
      metaTitle,
      metaDescription
    }
  `;
  const post = await client.fetch(query, { slug });
  return post;
}

// --- ৩. SEO Metadata ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) return { title: 'Post not found' };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
  };
}

// --- ৪. মেইন পেজ কম্পোনেন্ট (Schema সহ) ---
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  // --- Article Schema তৈরি ---
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.mainImage ? urlFor(post.mainImage).url() : "",
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "SellMyCar.ae"
    },
    "description": post.metaDescription || post.title
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      
      {/* Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-blue-600 font-medium mb-3">
            {new Date(post.publishedAt).toDateString()}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Top Image */}
        {post.mainImage && (
          <div className="w-full mb-12">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-lg prose-blue mx-auto prose-img:rounded-xl prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 transition-colors">
          <PortableText 
            value={post.body} 
            components={ptComponents} 
          />
        </div>

      </article>

    </main>
  );
}