import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-secondary rounded-3xl overflow-hidden">
      <div className="px-8 md:px-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
            Ready to hear your piano
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">at its best?</span>
              <Image
                src="/double-underline.svg"
                alt=""
                width={1283}
                height={132}
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-auto pointer-events-none -scale-y-100"
                aria-hidden="true"
              />
            </span>
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
  );
}
