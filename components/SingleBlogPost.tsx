"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';

interface SingleBlogPostProps {
  post: BlogPost;
  // onBack প্রপস আর দরকার নেই
}

export const SingleBlogPost: React.FC<SingleBlogPostProps> = ({ post }) => {
  // useEffect সরিয়ে ফেলা হয়েছে কারণ Next.js ডিফল্টভাবেই নতুন পেজে টপে স্ক্রল করে
  
  return (
    <article className="bg-white min-h-screen pb-20">
      
      {/* Header / Hero */}
      <div className="relative h-[400px] w-full bg-gray-900">
         <img 
           src={post.imageUrl} 
           alt={post.title} 
           className="w-full h-full object-cover opacity-40"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
         
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
                {/* Back Button -> Link */}
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-white/80 hover:text-brand-gold mb-6 transition-colors font-medium text-sm tracking-wide"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                </Link>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                  <span className="bg-brand-gold text-brand-dark px-3 py-1 rounded-full font-bold text-xs uppercase">{post.category}</span>
                  <span className="flex items-center"><Calendar className="h-4 w-4 mr-1"/> {post.date}</span>
                  <span className="flex items-center"><User className="h-4 w-4 mr-1"/> {post.author}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                  {post.title}
                </h1>
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-t-3xl p-8 md:p-12 shadow-xl">
           <div 
            className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-brand-gold prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
           />

           {/* CTA Box */}
           <div className="mt-16 bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Ready to sell your car?</h3>
              <p className="text-gray-600 mb-6">Get a free valuation and instant cash offer today.</p>
              
              {/* CTA Button -> Link to Home Anchor */}
              <Link 
                href="/#valuation-form"
                className="inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
              >
                Get Instant Offer
              </Link>
           </div>
        </div>
      </div>
    </article>
  );
};