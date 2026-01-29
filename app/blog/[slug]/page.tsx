import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogData';
import { SingleBlogPost } from '@/components/SingleBlogPost';

// টাইপ আপডেট: id এর বদলে slug
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // slug নেওয়া হচ্ছে
  const post = BLOG_POSTS.find((p) => p.slug === slug); // slug দিয়ে খোঁজা হচ্ছে
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title} | SellMyScrapCar Blog`,
    description: post.excerpt,
  };
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params;
  
  console.log("Looking for slug:", slug); // ডিবাগিং এর জন্য

  // এখন আমরা slug দিয়ে পোস্ট খুঁজব
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="pt-20">
      <SingleBlogPost post={post} />
    </div>
  );
}