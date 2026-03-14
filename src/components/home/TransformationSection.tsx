import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react";

export function TransformationSection() {
  return (
    <section className="py-12 md:py-16 bg-muted rounded-3xl overflow-hidden">
      <div className="px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side: heading + image */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight mb-6">
              Don&apos;t let your piano fade into the background
            </h2>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/stock/piano-clean-livingroom.png"
                alt="Beautiful piano in a clean living room"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side: comparison cards stacked */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Without regular care
              </p>
              <ul className="space-y-3">
                {[
                  "Tone becomes dull and unpleasant",
                  "Keys feel uneven and unresponsive",
                  "Risk of permanent damage to strings and soundboard",
                  "You play less and eventually stop",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="size-4 text-muted-foreground mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-6 shadow-md">
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
                With Ortiz Piano Tuning
              </p>
              <ul className="space-y-3">
                {[
                  "Every note rings clear and true",
                  "Playing feels effortless and inspiring",
                  "Your piano stays in great condition for years",
                  "Music becomes the center of your home again",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="size-4 text-primary mt-1 shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
