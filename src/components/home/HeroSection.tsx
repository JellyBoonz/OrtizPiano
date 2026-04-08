import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-secondary overflow-hidden rounded-3xl">
      <div className="relative w-full px-8 md:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-8">
            Professional Piano Tuning in Grand Rapids, MI
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-10 font-light">
            Your piano should inspire you to play, not hold you back. We&apos;ll make it sound and feel the way it should.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-3">
              {[
                { src: "/customers/robin-ward.png", alt: "Robin Ward" },
                { src: "/customers/tony-benac.png", alt: "Tony Benac" },
                { src: "/customers/sandy-chinavare.png", alt: "Sandy Chinavare" },
              ].map((customer, i) => (
                <div
                  key={i}
                  className="relative size-9 rounded-full overflow-hidden border-2 border-primary"
                >
                  <Image
                    src={customer.src}
                    alt={customer.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-medium">5.0</span>
              </div>
              <span className="text-gray-300 text-sm">300+ customers served since 2017</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
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
                className="border-white/20 text-white hover:bg-white/10 hover:text-white text-base px-8 py-6 rounded-full font-medium"
              >
                Schedule Online
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>

          {/* Hero image */}
          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/stock/girl-smiling-at-piano.jpeg"
                alt="Young girl smiling while playing piano"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
