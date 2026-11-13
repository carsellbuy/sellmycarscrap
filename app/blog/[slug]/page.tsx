import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, type PostBlock } from '@/data/posts';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">{block.text}</h2>;
    case 'list':
      return (
        <ul className="list-disc pl-6 space-y-2 my-6">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'image':
      return (
        <div className="relative w-full h-[300px] md:h-[500px] my-8 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <Image src={block.src} alt={block.alt} fill sizes="(max-width: 896px) 100vw, 896px" className="object-contain" />
        </div>
      );
    default:
      return <p className="my-5">{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    ...(post.mainImage && { image: post.mainImage.src }),
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'SellMyCarScrap' },
    description: post.metaDescription || post.title,
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-medium mb-3">
            {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{post.title}</h1>
        </div>

        {post.mainImage && (
          <div className="w-full mb-12">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image src={post.mainImage.src} alt={post.mainImage.alt} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" priority />
            </div>
          </div>
        )}

        <div className="text-lg leading-relaxed text-gray-700">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>
    </div>
  );
}
