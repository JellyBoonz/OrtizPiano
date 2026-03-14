import Link from "next/link";
import { MapPin } from "lucide-react";

export function ServiceAreasSection() {
  const areas = [
    "Grand Rapids",
    "Holland",
    "Zeeland",
    "Hudsonville",
    "Ada",
    "Rockford",
    "Kentwood",
    "Wyoming",
    "Byron Center",
    "Grand Haven",
    "Jenison",
    "Allendale",
  ];

  return (
    <section className="py-16 md:py-24 bg-white rounded-3xl border border-border overflow-hidden">
      <div className="px-8 md:px-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="size-4 text-primary" />
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Service Areas
            </p>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary mb-10">
            Serving communities across West Michigan
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-muted border border-border text-sm text-foreground"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Not sure if you&apos;re in our service area? Call{" "}
            <Link href="tel:6162290630" className="text-primary font-medium hover:underline">
              (616) 229-0630
            </Link>{" "}
            to find out.
          </p>
        </div>
      </div>
    </section>
  );
}
