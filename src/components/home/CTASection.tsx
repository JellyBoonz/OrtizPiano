import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-secondary rounded-3xl overflow-hidden">
      <div className="px-8 md:px-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
            Ready to hear your piano at its best?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Whether it&apos;s been months or years since your last tuning, Jaiden
            is here to help. Schedule a service or give us a call today.
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
  );
}
