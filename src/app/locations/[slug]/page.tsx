"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const locations = {
  "grand-rapids": {
    name: "Grand Rapids",
    description: "Serving the heart of West Michigan with professional piano tuning and maintenance services.",
    neighborhoods: [
      "Downtown",
      "Eastown",
      "Heritage Hill",
      "Midtown",
      "West Side"
    ],
    content: [
      {
        type: "paragraph",
        text: "As the largest city in West Michigan, Grand Rapids is home to a vibrant music community. We're proud to serve piano owners throughout the city with expert tuning and maintenance services."
      },
      {
        type: "heading",
        text: "Why Choose Us in Grand Rapids"
      },
      {
        type: "list",
        items: [
          "Local expertise with over 8 years of service",
          "Quick response times throughout the city",
          "Knowledge of local climate conditions",
          "Flexible scheduling options"
        ]
      }
    ]
  }
};

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = locations[params.slug as keyof typeof locations];

  if (!location) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Location not found</h1>
          <Link href="/locations" className="text-accent hover:text-secondary">
            Return to locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/locations"
            className="inline-flex items-center text-accent hover:text-secondary mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to locations
          </Link>

          <h1 className="text-4xl font-bold mb-8 text-secondary">{location.name}</h1>

          <div className="prose prose-lg max-w-none">
            {location.content.map((section, index) => {
              if (section.type === "paragraph") {
                return (
                  <p key={index} className="mb-4 text-foreground/80">
                    {section.text}
                  </p>
                );
              }
              if (section.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-semibold mb-4 mt-8 text-secondary">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "list") {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 text-foreground/80">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-12 bg-white p-6 rounded-xl shadow-lg border border-accent/20">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Neighborhoods Served</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-foreground/80">
              {location.neighborhoods.map((neighborhood, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {neighborhood}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <motion.button
                className="bg-accent text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-accent transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Service in {location.name}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
} 