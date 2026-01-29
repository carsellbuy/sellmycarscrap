"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

// Props ইন্টারফেস এখন খালি বা ঐচ্ছিক, কারণ আমরা Link ব্যবহার করছি
interface BlogArchiveProps {}

export const BlogArchive: React.FC<BlogArchiveProps> = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Blog Header */}
      <div className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Automotive Insights & News</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest tips on selling cars, RTA regulations, and market trends in the UAE.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group block" // Link এর জন্য স্টাইল
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-brand-red font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Read Article <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};