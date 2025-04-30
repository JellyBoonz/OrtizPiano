"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "How Often Should You Tune Your Piano?",
    excerpt: "Learn about the recommended tuning schedule for your piano based on usage, climate, and other factors.",
    date: "March 15, 2024",
    readTime: "1 min read",
    slug: "how-often-should-you-tune-your-piano"
  },
  {
    id: 2,
    title: "Piano Maintenance Tips for Michigan Winters",
    excerpt: "Protect your piano from Michigan's harsh winter conditions with these essential maintenance tips.",
    date: "March 10, 2024",
    readTime: "1 min read",
    slug: "piano-maintenance-tips-for-michigan-winters"
  },
  {
    id: 3,
    title: "Understanding Piano Pitch Raises",
    excerpt: "Learn when and why your piano might need a pitch raise, and what to expect during the process.",
    date: "March 5, 2024",
    readTime: "1 min read",
    slug: "understanding-piano-pitch-raises"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Piano Care Blog</h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Expert tips and advice for maintaining your piano in optimal condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-accent/20 p-6"
              >
                <div className="flex items-center text-sm text-foreground/60 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-secondary">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-accent hover:text-secondary transition-colors"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 