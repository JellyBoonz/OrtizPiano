"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

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

export default function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const location = locations[slug as keyof typeof locations];

  if (!location) {
    return (
      <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
        <section className="bg-white rounded-3xl border border-border overflow-hidden">
          <div className="px-8 md:px-16 py-16 md:py-24 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-6">
              Location not found
            </h1>
            <Link href="/locations" className="text-primary hover:text-primary/80 font-medium">
              Return to locations
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      {/* Hero Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-16 md:py-24">
          <Link
            href="/locations"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="size-4 mr-2" />
            Back to locations
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Piano Tuning in {location.name}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div className="max-w-3xl">
            {location.content.map((section, index) => {
              if (section.type === "paragraph") {
                return (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {section.text}
                  </p>
                );
              }
              if (section.type === "heading") {
                return (
                  <h2 key={index} className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mt-10 mb-6">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "list") {
                return (
                  <ul key={index} className="space-y-3 mb-6">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <Check className="size-5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="bg-muted rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-8">
            Neighborhoods Served
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {location.neighborhoods.map((neighborhood, index) => (
              <li key={index} className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                {neighborhood}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              Schedule Service in {location.name}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Get your piano sounding its best. Contact us today to book your appointment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="tel:6162290630">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20 font-medium"
                >
                  <Phone className="size-4" />
                  Call Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full font-medium"
                >
                  Schedule Online
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
