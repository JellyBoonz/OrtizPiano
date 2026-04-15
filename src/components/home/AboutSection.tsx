import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="bg-muted rounded-3xl overflow-hidden py-10 md:py-16">
      <div className="px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="relative aspect-[4/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/jaiden-headshot.jpeg"
                alt="Jaiden Ortiz, professional piano tuner in West Michigan"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-8">
              A pianist who tunes pianos, not just a technician
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Music has been part of Jaiden&apos;s life since he was five. He studied
                piano performance in college and has played for multiple churches across
                West Michigan. He knows what it feels like to sit down at a beautifully
                tuned piano and get lost in the music.
              </p>
              <p>
                That understanding, the difference between a piano that inspires
                and one that frustrates, is what he brings to every tuning. This
                isn&apos;t a side hustle. It&apos;s his full-time craft, and he&apos;s been
                doing it since 2017.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="tel:6162290630">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full font-medium"
                >
                  <Phone className="size-4" />
                  Call Now
                </Button>
              </Link>
              <Link href="/schedule">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 rounded-full font-medium"
                >
                  Schedule Online
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
