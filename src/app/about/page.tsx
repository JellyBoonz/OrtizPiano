import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      {/* Hero Banner */}
      <section className="relative bg-secondary overflow-hidden rounded-3xl">
        <div className="px-8 md:px-16 py-10 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
            About Ortiz Piano Tuning
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Professional piano technician serving Grand Rapids and surrounding areas
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden py-10 md:py-16">
        <div className="px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="relative aspect-[4/4] rounded-2xl overflow-hidden">
                <Image
                  src="/jaiden.png"
                  alt="Jaiden - Professional Piano Tuner"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight mb-6">
                Hi, I&apos;m Jaiden
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  My name is Jaiden, and I am a professional piano tuner with over 8 years of experience
                  helping musicians and music lovers maintain the sound quality of their pianos. I am passionate
                  about delivering high-quality service to ensure your piano sounds its best.
                </p>
                <p>
                  I specialize in piano tuning, pitch raises, cleaning, and minor repairs. My goal is to provide
                  exceptional service while maintaining the integrity and beauty of your instrument.
                </p>
                <p>
                  Based in Grand Rapids, I serve the greater West Michigan area, including Ada, Rockford,
                  Kentwood, Wyoming, Byron Center, Zeeland, and surrounding communities.
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
    </div>
  );
}
