"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Star, Check, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GrandRapidsLandingPage() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sandy Chinavare",
      rating: 5,
      text: "Jaiden was very professional and polite. He communicated promptly and i was able to get my piano tuned quickly! I would definitely recommend him!",
    },
    {
      name: "Qiaorong Wang",
      rating: 5,
      text: "I had a great experience with Ortiz! He is a very professional and warm hearted person. He tuned very carefully in each key. Recommended him to anyone who needs!",
    },
    {
      name: "Tony Benac",
      rating: 5,
      text: "Prompt, friendly service, and our piano sounds great! Thanks!",
    },
  ];

  return (
    <>
      {/* Sticky Header */}
      {showStickyHeader && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-secondary shadow-lg border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3">
            <div className="flex items-center justify-between gap-4">
              <Link href="/#contact-section">
                <Button className="bg-primary text-white hover:bg-primary/90 text-sm px-6 py-2 rounded-full shadow-lg shadow-primary/20 font-medium">
                  Book Appointment Now
                </Button>
              </Link>
              <Link href="tel:6162290630">
                <Button className="bg-white text-secondary hover:bg-white/90 text-sm px-6 py-2 rounded-full font-medium">
                  <Phone className="size-3.5" />
                  Call (616) 229-0630
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
        {/* Hero Section */}
        <section className="bg-secondary rounded-3xl overflow-hidden">
          <div className="px-8 md:px-16 py-20 md:py-28">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                Grand Rapids Piano Tuning -- Book Today (Limited Availability)
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
                Professional who&apos;s tuned 1000+ pianos -- Free check-up when you book now
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact-section">
                  <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20 font-medium"
                  >
                    Book Appointment Now
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <Link href="tel:6162290630">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full font-medium"
                  >
                    <Phone className="size-4" />
                    Call (616) 229-0630
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Credibility Section */}
        <section className="bg-white rounded-3xl border border-border overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight">
                Trusted by Grand Rapids Piano Owners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-muted/40 p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-secondary font-medium">{testimonial.name}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-muted rounded-3xl overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-6">
                Tune Accuracy Guarantee
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If your piano does not hold pitch as expected, we&apos;ll make it right. Your satisfaction and sound quality are guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-3xl border border-border overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight text-center mb-10">
              Why Choose Our Piano Tuning Service
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Performance-ready sound for recitals, lessons, and performances",
                "Reliable scheduling that works with your timeline",
                "Local, experienced technician serving Grand Rapids",
                "Transparent pricing with no hidden fees",
                "Free check-up with booking",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-5">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary CTA Section */}
        <section className="bg-secondary rounded-3xl overflow-hidden">
          <div className="px-8 md:px-16 py-16 md:py-24">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="size-6 text-white" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                Limited Appointments Available This Week
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                Don&apos;t wait -- secure your piano tuning appointment today
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact-section">
                  <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20 font-medium"
                  >
                    Book Appointment Now
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <Link href="tel:6162290630">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full font-medium"
                  >
                    <Phone className="size-4" />
                    Call (616) 229-0630
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
