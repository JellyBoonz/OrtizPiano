import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Schedule",
      description:
        "Call or fill out the form. Jaiden will ask about your piano's age, history, and current condition to come prepared.",
      image: "/stock/man-with-daughter-piano-lesson.png",
      imageAlt: "Father and daughter at a piano lesson",
      imagePosition: "",
    },
    {
      number: "02",
      title: "Evaluate & Tune",
      description:
        "On-site evaluation, thorough tuning, and a careful check for any needed repairs. Nothing gets overlooked.",
      image: "/stock/piano-tuning-handle.png",
      imageAlt: "Piano tuning handle on strings",
      imagePosition: "",
    },
    {
      number: "03",
      title: "Enjoy",
      description:
        "Play on an instrument that sounds and feels the way it should. Clear tone, smooth action, effortless experience.",
      image: "/stock/older-woman-smiling-playing-piano.png",
      imageAlt: "Woman smiling while playing piano",
      imagePosition: "object-top",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-white rounded-3xl border border-border overflow-hidden">
      <div className="px-8 md:px-16">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight">
            Three simple steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                className={`object-cover ${step.imagePosition}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="font-serif text-6xl md:text-7xl font-medium text-primary leading-none block mb-3">
                  {step.number}
                </span>
                <h3 className="text-xl font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12">
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
              className="border-secondary/20 text-secondary hover:bg-secondary/10 text-base px-8 py-6 rounded-full font-medium"
            >
              Schedule Online
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
