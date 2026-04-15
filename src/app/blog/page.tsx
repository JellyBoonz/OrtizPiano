import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How Often Should You Tune Your Piano?",
    excerpt: "Learn about the recommended tuning schedule for your piano based on usage, climate, and other factors.",
    date: "March 15, 2024",
    readTime: "1 min read",
    slug: "how-often-should-you-tune-your-piano",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Piano Maintenance Tips for Michigan Winters",
    excerpt: "Protect your piano from Michigan's harsh winter conditions with these essential maintenance tips.",
    date: "March 10, 2024",
    readTime: "1 min read",
    slug: "piano-maintenance-tips-for-michigan-winters",
    image: "https://images.unsplash.com/photo-1483137140003-ae073b395549?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Understanding Piano Pitch Raises",
    excerpt: "Learn when and why your piano might need a pitch raise, and what to expect during the process.",
    date: "March 5, 2024",
    readTime: "1 min read",
    slug: "understanding-piano-pitch-raises",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Blog() {
  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      <section className="bg-secondary rounded-3xl px-8 md:px-16 py-10 md:py-16 text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
          Piano Care Blog
        </h1>
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg">
          Expert tips and advice for maintaining your piano in optimal condition.
        </p>
      </section>

      <section className="bg-white rounded-3xl border border-border px-8 md:px-16 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-border bg-muted/40 overflow-hidden flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div
                  className="h-48 bg-cover bg-center bg-muted"
                  style={{ backgroundImage: `url(${post.image})` }}
                  aria-hidden="true"
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-medium mb-3 text-secondary">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Read more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
