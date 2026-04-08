import Link from "next/link";
import Image from "next/image";
import { Phone, Music, Wrench, Keyboard, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      icon: <Music className="size-5" />,
      title: "Piano Tuning",
      description:
        "Precision tuning to restore your piano's tone. Includes pitch adjustment and fine-tuning for optimal sound.",
      price: "$150",
      href: "/piano-tuning-west-michigan",
    },
    {
      icon: <Wrench className="size-5" />,
      title: "Piano Repairs",
      description:
        "Sticky keys, loose strings, broken hammers, comprehensive repair for any mechanical issue.",
      price: "Varies",
      href: "/piano-repairs-west-michigan",
    },
    {
      icon: <Keyboard className="size-5" />,
      title: "Electronic Keyboard Repair",
      description:
        "Diagnostics and repair for digital pianos, MIDI controllers, and stage keyboards.",
      price: "Varies",
      href: "/electronic-keyboard-repair-west-michigan",
    },
    {
      icon: <ClipboardList className="size-5" />,
      title: "Piano Appraisals",
      description:
        "Professional evaluations for insurance, sale, or estate purposes with detailed condition reports.",
      price: "From $99",
      href: "/piano-appraisals-west-michigan",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary rounded-3xl overflow-hidden">
      <div className="px-8 md:px-16">
        <div className="mb-16 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight max-w-2xl">
            Complete care for your instrument
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="bg-secondary/80 p-8 md:p-10 group hover:bg-white/5 transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-primary font-medium text-sm">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/stock/piano-tuning-handle.jpg"
                alt="Piano tuning tools"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/stock/piano-strings.jpg"
                alt="Inside of a piano showing strings"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="tel:6162290630">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 rounded-full font-medium"
            >
              <Phone className="size-4" />
              Book a Service
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
