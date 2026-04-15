"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const blogPosts = {
  "how-often-should-you-tune-your-piano": {
    title: "How Often Should You Tune Your Piano?",
    date: "March 15, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "paragraph",
        text: "Regular piano tuning is essential for maintaining the instrument's sound quality and longevity. But how often should you tune your piano? The answer depends on several factors, and understanding these can help you maintain your piano's optimal performance."
      },
      {
        type: "heading",
        text: "Factors Affecting Tuning Frequency"
      },
      {
        type: "list",
        items: [
          "Climate and humidity changes",
          "Frequency of use",
          "Age and condition of the piano",
          "Professional requirements",
          "Recent moves or transportation",
          "Quality of the piano"
        ]
      },
      {
        type: "heading",
        text: "Climate and Humidity Impact"
      },
      {
        type: "paragraph",
        text: "In Michigan's climate, where we experience significant seasonal changes, humidity levels can fluctuate dramatically. These changes cause the piano's wooden components to expand and contract, affecting the tension of the strings and ultimately the pitch. This is why we recommend tuning your piano at least twice a year - ideally in spring and fall when the weather transitions are most significant."
      },
      {
        type: "heading",
        text: "Usage and Professional Requirements"
      },
      {
        type: "paragraph",
        text: "For professional pianists, concert halls, or music schools, more frequent tuning is necessary. Concert pianos are typically tuned before each performance, while practice pianos in music schools may need tuning every 1-2 months. For home pianos used for regular practice, quarterly tuning is recommended."
      },
      {
        type: "heading",
        text: "New Pianos and Recent Moves"
      },
      {
        type: "paragraph",
        text: "New pianos require more frequent tuning during their first year as they settle into their environment. Similarly, if your piano has been moved or transported, it should be tuned after the move and allowed to acclimate to its new environment for at least 2-3 weeks before the first tuning."
      },
      {
        type: "heading",
        text: "Signs Your Piano Needs Tuning"
      },
      {
        type: "list",
        items: [
          "Notes sound out of tune with each other",
          "The piano sounds different than usual",
          "You notice a change in the piano's tone",
          "Keys feel different when played",
          "You hear buzzing or unusual vibrations"
        ]
      },
      {
        type: "heading",
        text: "Maintenance Between Tunings"
      },
      {
        type: "paragraph",
        text: "To maintain your piano's condition between tunings, keep it away from direct sunlight, maintain consistent room temperature, and use a humidifier or dehumidifier as needed to control humidity levels. Regular cleaning and proper playing technique also contribute to the piano's longevity."
      }
    ]
  },
  "piano-maintenance-tips-for-michigan-winters": {
    title: "Piano Maintenance Tips for Michigan Winters",
    date: "March 10, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1483137140003-ae073b395549?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "paragraph",
        text: "Michigan winters can be particularly harsh on pianos due to the extreme temperature changes and dry indoor air. Proper maintenance during these months is crucial to protect your investment and maintain optimal sound quality."
      },
      {
        type: "heading",
        text: "Understanding Winter Challenges"
      },
      {
        type: "paragraph",
        text: "During Michigan winters, the combination of cold outdoor temperatures and heated indoor spaces creates a challenging environment for pianos. The dry air from heating systems can cause wood to shrink and crack, while temperature fluctuations can affect string tension and tuning stability."
      },
      {
        type: "heading",
        text: "Essential Winter Maintenance Tips"
      },
      {
        type: "list",
        items: [
          "Maintain consistent room temperature (68-72°F)",
          "Use a humidifier to keep humidity between 40-50%",
          "Keep the piano away from heating vents and direct sunlight",
          "Regularly clean the piano to prevent dust buildup",
          "Schedule a winter tuning to address any seasonal changes"
        ]
      },
      {
        type: "heading",
        text: "Humidity Control Solutions"
      },
      {
        type: "paragraph",
        text: "Investing in a quality humidifier is one of the best ways to protect your piano during Michigan winters. Consider a whole-room humidifier or a piano-specific humidification system. Monitor humidity levels with a hygrometer and adjust as needed to maintain the ideal range."
      },
      {
        type: "heading",
        text: "Temperature Management"
      },
      {
        type: "paragraph",
        text: "Avoid placing your piano near exterior walls or windows where it might be exposed to cold drafts. If possible, keep the room temperature consistent, even when the piano is not in use. Sudden temperature changes can cause condensation inside the piano, leading to potential damage."
      },
      {
        type: "heading",
        text: "Regular Maintenance Schedule"
      },
      {
        type: "list",
        items: [
          "Schedule a pre-winter tuning in late fall",
          "Check humidity levels daily",
          "Clean the piano weekly",
          "Inspect for any signs of damage monthly",
          "Schedule a post-winter tuning in early spring"
        ]
      },
      {
        type: "heading",
        text: "Professional Care"
      },
      {
        type: "paragraph",
        text: "Regular professional maintenance is especially important during winter months. A qualified piano technician can identify and address any issues before they become serious problems. They can also provide specific recommendations for your piano's unique needs in Michigan's climate."
      }
    ]
  },
  "understanding-piano-pitch-raises": {
    title: "Understanding Piano Pitch Raises",
    date: "March 5, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1600&q=80",
    content: [
      {
        type: "paragraph",
        text: "A pitch raise is a specialized piano tuning procedure that becomes necessary when a piano has fallen significantly below its standard pitch. Understanding when and why your piano might need a pitch raise can help you maintain its optimal performance."
      },
      {
        type: "heading",
        text: "What is a Pitch Raise?"
      },
      {
        type: "paragraph",
        text: "A pitch raise is a process where a piano technician raises the overall pitch of the piano to bring it back to standard concert pitch (A440). This is different from a regular tuning, as it involves significant adjustments to all strings simultaneously."
      },
      {
        type: "heading",
        text: "When is a Pitch Raise Needed?"
      },
      {
        type: "list",
        items: [
          "After long periods without tuning",
          "Following significant climate changes",
          "After moving the piano to a new location",
          "When the piano is more than 20 cents flat",
          "Before a performance or recording session"
        ]
      },
      {
        type: "heading",
        text: "The Pitch Raise Process"
      },
      {
        type: "paragraph",
        text: "The process typically involves two steps: first, a rough pitch raise to get the piano close to the correct pitch, followed by a fine tuning to achieve precise pitch and stability. This two-step process is necessary because the tension changes in one part of the piano affect the tension in other parts."
      },
      {
        type: "heading",
        text: "What to Expect"
      },
      {
        type: "list",
        items: [
          "The process takes longer than a regular tuning",
          "Multiple passes may be needed",
          "The piano may need a follow-up tuning",
          "Some temporary instability is normal",
          "The final result should be stable and in tune"
        ]
      },
      {
        type: "heading",
        text: "Preventing the Need for Pitch Raises"
      },
      {
        type: "paragraph",
        text: "Regular maintenance is the best way to prevent your piano from needing a pitch raise. This includes consistent tuning schedules, proper humidity control, and avoiding extreme temperature changes. If you notice your piano sounding significantly flat, schedule a service call as soon as possible."
      },
      {
        type: "heading",
        text: "Professional Considerations"
      },
      {
        type: "paragraph",
        text: "Pitch raises should always be performed by a qualified piano technician. The process requires specialized knowledge and experience to ensure the piano's structural integrity is maintained. Attempting a pitch raise without proper training can lead to broken strings or other damage."
      }
    ]
  }
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
        <div className="bg-white rounded-3xl border border-border px-8 md:px-16 py-10 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-secondary mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      <article className="bg-white rounded-3xl border border-border px-8 md:px-16 py-10 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>

          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight mb-8">
            {post.title}
          </h1>

          {post.image && (
            <div
              className="aspect-[16/9] w-full rounded-2xl bg-cover bg-center bg-muted mb-10"
              style={{ backgroundImage: `url(${post.image})` }}
              aria-hidden="true"
            />
          )}

          <div className="space-y-4">
            {post.content.map((section, index) => {
              if (section.type === "paragraph") {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {section.text}
                  </p>
                );
              }
              if (section.type === "heading") {
                return (
                  <h2 key={index} className="text-xl font-medium text-secondary mt-8">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "list") {
                return (
                  <ul key={index} className="list-disc pl-6 text-muted-foreground leading-relaxed">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      </article>
    </div>
  );
}
