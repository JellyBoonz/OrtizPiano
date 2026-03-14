import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    name: "Grand Rapids",
    slug: "grand-rapids",

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
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      {/* Hero Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              Service Areas
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Professional piano tuning and maintenance services throughout West Michigan.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div
                key={location.slug}
                className="rounded-2xl border border-border bg-muted/40 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="size-8 text-primary mx-auto mb-2" />
                    <span className="text-white/80 font-serif text-lg">{location.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-2xl font-medium text-secondary mb-3">
                    <Link href={`/locations/${location.slug}`} className="text-primary hover:text-primary/80 transition-colors">
                      {location.name}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{location.description}</p>
                  <div className="mb-4">
                    <h3 className="font-medium text-secondary mb-2">Neighborhoods Served:</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      {location.neighborhoods.map((neighborhood, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <MapPin className="size-3.5 text-primary shrink-0" />
                          {neighborhood}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Learn more
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              Ready to schedule your tuning?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We serve all of West Michigan. Contact us today to book your appointment.
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
              <Link href="/schedule">
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
