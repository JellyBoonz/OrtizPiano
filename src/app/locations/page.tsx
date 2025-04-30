"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const locations = [
  {
    name: "Grand Rapids",
    slug: "grand-rapids",
    image: "/grand-rapids.webp",
    description: "Serving the heart of West Michigan with professional piano tuning and maintenance services.",
    neighborhoods: [
      "Downtown",
      "Eastown",
      "Heritage Hill",
      "Midtown",
      "West Side"
    ]
  },
  {
    name: "Ada",
    slug: "ada",
    image: "/ada.webp",
    description: "Expert piano services for the Ada community and surrounding areas.",
    neighborhoods: [
      "Ada Village",
      "Forest Hills",
      "Cascade"
    ]
  },
  {
    name: "Rockford",
    slug: "rockford",
    image: "/rockford.webp",
    description: "Professional piano tuning and repair services in Rockford and nearby communities.",
    neighborhoods: [
      "Rockford City",
      "Cannonsburg",
      "Plainfield Township"
    ]
  },
  {
    name: "Kentwood",
    slug: "kentwood",
    image: "/kentwood.webp",
    description: "Serving Kentwood and surrounding areas with expert piano maintenance.",
    neighborhoods: [
      "East Kentwood",
      "West Kentwood",
      "Kentwood City Center"
    ]
  },
  {
    name: "Wyoming",
    slug: "wyoming",
    image: "/wyoming.webp",
    description: "Comprehensive piano services for the Wyoming community.",
    neighborhoods: [
      "Georgetown",
      "Jamestown",
      "Pine Island"
    ]
  },
  {
    name: "Byron Center",
    slug: "byron-center",
    image: "/byron-center.webp",
    description: "Professional piano tuning and maintenance in Byron Center and surrounding areas.",
    neighborhoods: [
      "Byron Center Village",
      "Gaines Township",
      "Cutlerville"
    ]
  },
  {
    name: "Zeeland",
    slug: "zeeland",
    image: "/zeeland.webp",
    description: "Expert piano services for the Zeeland community.",
    neighborhoods: [
      "Zeeland City",
      "Zeeland Township",
      "Holland Township"
    ]
  }
];

export default function Locations() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Service Areas</h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Professional piano tuning and maintenance services throughout West Michigan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-accent/20"
              >
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-secondary">
                    <Link href={`/locations/${location.slug}`} className="hover:text-accent transition-colors">
                      {location.name}
                    </Link>
                  </h2>
                  <p className="text-foreground/80 mb-4">{location.description}</p>
                  <div className="mb-4">
                    <h3 className="font-semibold text-secondary mb-2">Neighborhoods Served:</h3>
                    <ul className="list-disc list-inside text-foreground/80">
                      {location.neighborhoods.map((neighborhood, i) => (
                        <li key={i}>{neighborhood}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center text-accent hover:text-secondary transition-colors"
                  >
                    Learn more
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 