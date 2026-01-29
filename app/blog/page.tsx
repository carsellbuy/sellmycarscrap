import { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogData'; 
import { BlogArchive } from '@/components/BlogArchive';

export const metadata: Metadata = {
  title: 'Car Selling Tips & Guides | SellMyCar.ae Blog',
  description: 'Read our latest articles about selling cars in Dubai, car valuation tips, and RTA transfer guides.',
};

// সমস্যা সম্ভবত এখানে ছিল। এই ফাংশনের আগে 'export default' থাকতে হবে।
export default function BlogPage() {
  return (
    <div className="pt-20"> 
      <div className="bg-brand-dark py-12 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Latest <span className="text-brand-gold">Insights</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Expert advice on selling your car, market trends, and automotive news in the UAE.
        </p>
      </div>

      <BlogArchive />
    </div>
  );
}