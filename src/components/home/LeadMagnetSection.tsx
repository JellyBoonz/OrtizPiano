import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Stethoscope } from "lucide-react";

export function LeadMagnetSection() {
  return (
    <section className="bg-secondary rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-8 md:px-16 py-16 md:py-20">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            <Stethoscope className="size-4" />
            Free Piano Health Check
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
            Not sure if your piano needs a tuning?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Answer a few quick questions and we'll tell you exactly what your piano needs, whether that's a tuning, a repair, or nothing at all. Free, honest, and takes less than two minutes.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Instant assessment of your piano's condition",
              "Personalized recommendations from a certified technician",
              "No pushy sales calls, no obligation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/piano-health-check">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20 font-medium"
            >
              Start my free health check
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
            <div className="size-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center">
              <Stethoscope className="size-8" />
            </div>
            <div>
              <div className="text-white font-serif text-2xl font-medium mb-1">
                2 minutes
              </div>
              <div className="text-gray-300 text-sm">to complete</div>
            </div>
            <div className="border-t border-white/10" />
            <div>
              <div className="text-white font-serif text-2xl font-medium mb-1">
                100% free
              </div>
              <div className="text-gray-300 text-sm">no credit card, no catch</div>
            </div>
            <div className="border-t border-white/10" />
            <div>
              <div className="text-white font-serif text-2xl font-medium mb-1">
                Expert-built
              </div>
              <div className="text-gray-300 text-sm">by a certified piano technician</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
