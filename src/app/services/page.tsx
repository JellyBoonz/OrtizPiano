import Link from "next/link";
import { Phone, ArrowRight, Piano, Music, Sparkles, Wrench, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Piano Tuning",
    description:
      "Fine-tuning your piano to ensure optimal sound quality. Our professional tuning service brings your piano back to its perfect pitch, ensuring every note sounds just right.",
    icon: Piano,
    price: "Starting at $150",
  },
  {
    name: "Tuning + Pitch Raise",
    description:
      "Comprehensive service for pianos that are significantly out of tune. We carefully adjust the overall pitch while maintaining the instrument's integrity.",
    icon: Music,
    price: "Starting at $200",
  },
  {
    name: "Tuning + Cleaning",
    description:
      "Complete package including thorough cleaning of the piano's interior and exterior, followed by precise tuning. Perfect for maintaining your piano's appearance and sound quality.",
    icon: Sparkles,
    price: "Starting at $250",
  },
  {
    name: "Minor Repairs",
    description:
      "Expert repair service for common piano issues including sticky keys, loose strings, and other minor mechanical problems.",
    icon: Wrench,
    price: "Starting at $50",
  },
  {
    name: "Electronic Keyboard Repair",
    description:
      "Expert repair service for digital pianos, MIDI keyboards, and stage keyboards. We diagnose and repair electronic components, key mechanisms, power supplies, circuit boards, display screens, and connectivity issues. Serving musicians, studios, churches, and schools throughout West Michigan.",
    icon: Keyboard,
    price: "Starting at $75",
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      {/* Hero Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Professional piano services to keep your instrument in perfect
            condition. From routine tuning to repairs, we have you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white border border-border rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-muted/40 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-xl md:text-2xl font-medium text-secondary mb-2">
                        {service.name}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-medium">
                          {service.price}
                        </span>
                        <Link href="/contact">
                          <Button className="bg-secondary text-white hover:bg-secondary/90 py-6 rounded-full font-medium">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Contact us for a free consultation. We&apos;ll help you determine
              the best service for your piano.
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
