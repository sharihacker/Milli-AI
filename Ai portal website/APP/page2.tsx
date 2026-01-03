"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'AI' | 'Marketing' | 'Automation';
  readTime: number;
  date: string;
  slug: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Changing SEO in 2026',
    excerpt:
      'Discover how AI-powered tools are reshaping search engine optimization strategies and what you need to know to stay ahead.',
    category: 'AI',
    readTime: 5,
    date: 'Jan 2, 2026',
    slug: 'ai-changing-seo-2026',
    featured: true,
  },
  {
    id: '2',
    title: 'Automation Workflows for 2026: A Complete Guide',
    excerpt:
      'Learn how to build custom automation workflows that save your team 40+ hours per week using LLMs and no-code tools.',
    category: 'Automation',
    readTime: 5,
    date: 'Jan 1, 2026',
    slug: 'automation-workflows-2026',
  },
  {
    id: '3',
    title: 'The Future of SEO: AI-Driven Content Strategy',
    excerpt:
      'Explore how AI is transforming content creation and SEO strategy for modern marketers and agencies in 2026.',
    category: 'Marketing',
    readTime: 5,
    date: 'Dec 30, 2025',
    slug: 'future-seo-ai-content',
  },
  {
    id: '4',
    title: 'Building AI Agents That Actually Work',
    excerpt:
      'A deep dive into creating autonomous AI agents that handle real business processes and deliver measurable results.',
    category: 'AI',
    readTime: 5,
    date: 'Dec 28, 2025',
    slug: 'building-ai-agents-that-work',
  },
  {
    id: '5',
    title: 'Scaling Your Digital Marketing with Automation',
    excerpt:
      'Discover proven strategies to scale your ad campaigns and marketing automation using AI-powered tools and workflows.',
    category: 'Marketing',
    readTime: 5,
    date: 'Dec 26, 2025',
    slug: 'scaling-marketing-automation',
  },
];

const categoryColor = (cat: string) => {
  switch (cat) {
    case 'AI':
      return 'bg-blue-500/20 text-blue-300';
    case 'Marketing':
      return 'bg-pink-500/20 text-pink-300';
    case 'Automation':
      return 'bg-brand-cyan/20 text-brand-cyan';
    default:
      return 'bg-slate-700/20 text-slate-300';
  }
};

const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-12 rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/40 to-slate-900 p-8 md:p-10 shadow-glow overflow-hidden"
  >
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className={`rounded-full px-4 py-1.5 text-xs font-semibold ${categoryColor(post.category)}`}>
          {post.category}
        </span>
        <span className="text-sm text-slate-400">⭐ Featured</span>
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{post.title}</h2>

      <p className="text-lg text-slate-300">{post.excerpt}</p>

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <span className="text-sm text-slate-400">{post.date}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/40 px-3 py-1 text-sm text-slate-300">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {post.readTime} min read
        </span>
        <Link
          href={`/blog/${post.slug}`}
          className="ml-auto inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple px-6 py-2 font-semibold text-slate-900 hover:brightness-95 transition-all"
        >
          Read More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
);

const PostCard = ({ post }: { post: BlogPost }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 16 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-xl border border-slate-800/60 bg-gradient-to-br from-slate-900/40 to-slate-900 p-6 flex flex-col gap-4 h-full hover:shadow-glow transition-all duration-300"
  >
    <div>
      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColor(post.category)}`}>
        {post.category}
      </span>
    </div>

    <h3 className="text-lg font-bold text-white">{post.title}</h3>

    <p className="text-slate-300 text-sm flex-grow">{post.excerpt}</p>

    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
      <div className="flex items-center gap-4 text-sm">
        <span className="text-slate-400">{post.date}</span>
        <span className="inline-flex items-center gap-1 text-slate-400">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {post.readTime} min
        </span>
      </div>
      <Link href={`/blog/${post.slug}`} className="text-brand-cyan hover:text-brand-purple transition-colors">
        →
      </Link>
    </div>
  </motion.div>
);

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Daily AI Insights</h1>
          <p className="mt-3 text-lg text-slate-300">
            Stay updated with the latest trends in AI, automation, and digital marketing.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && <FeaturedPost post={featuredPost} />}

        {/* Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regularPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-slate-800/60 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white">Never Miss an Update</h2>
          <p className="mt-2 text-slate-300">Subscribe to our newsletter for weekly insights on AI and digital marketing.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for subscribing! (Demo)');
            }}
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg bg-slate-800/40 border border-slate-700 px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple px-6 py-2 font-semibold text-slate-900 hover:brightness-95"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
