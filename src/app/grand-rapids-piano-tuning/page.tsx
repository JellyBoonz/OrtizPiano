"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
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
              <Link href="/schedule">
                <Button className="bg-primary text-white hover:bg-primary/90 text-sm px-6 py-2 rounded-full shadow-lg shadow-primary/20 font-medium">
                  Book Your Tuning
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
                Your piano should sound the way it did the day you fell in love with it.
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
                Jaiden Ortiz has tuned 1,000+ pianos across West Michigan. He comes to you, evaluates your instrument in person, and makes it sound the way it should.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/schedule">
                  <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20 font-medium"
                  >
                    Book Your Tuning
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

        {/* Problem Section */}
        <section className="bg-white rounded-3xl border border-border overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight mb-6">
              A piano that&apos;s off doesn&apos;t just sound bad — it changes how you play.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When the tone is wrong, you play less. You practice less. Playing for others starts to feel embarrassing. What was once a source of joy in your home quietly becomes something you avoid. That&apos;s not a small thing — and it&apos;s not something you have to live with.
            </p>
          </div>
        </section>

        {/* Guide Section */}
        <section className="bg-muted rounded-3xl overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight mb-6">
                He gets it — because music has been his life since he was five.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jaiden started performing at church at age five, picked up the piano at 16, and went on to study piano performance in college. He&apos;s been tuning professionally since 2017 — full-time, not a side gig. He knows what a beautifully tuned piano sounds like, and he knows how quickly the magic disappears when it isn&apos;t.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                When he comes to your home, he doesn&apos;t just tune strings — he listens to the whole instrument and tells you exactly where it stands.
              </p>
            </div>
          </div>
        </section>

        {/* Plan Section */}
        <section className="bg-white rounded-3xl border border-border overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight text-center mb-10">
              Here&apos;s how it works
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                {
                  step: "1",
                  title: "Book online or call",
                  body: "Choose a time that works for you. Jaiden will confirm within 24 hours and ask a few questions about your piano so he comes prepared.",
                },
                {
                  step: "2",
                  title: "Jaiden comes to you",
                  body: "He evaluates your piano in person, performs a thorough tuning, and flags anything else that needs attention — nothing gets overlooked.",
                },
                {
                  step: "3",
                  title: "Enjoy your piano again",
                  body: "You sit down at an instrument that sounds clear, responds the way it should, and makes you want to play. That&apos;s the whole point.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex items-start gap-5 rounded-2xl border border-border bg-muted/40 p-6">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-primary">{step}</span>
                  </div>
                  <div>
                    <p className="font-medium text-secondary mb-1">{title}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-secondary rounded-3xl overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center justify-center gap-1 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-medium text-sm">{testimonial.name}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed italic text-sm">&quot;{testimonial.text}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stakes / Failure Section */}
        <section className="bg-white rounded-3xl border border-border overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight mb-6">
              Without regular care, your piano doesn&apos;t just sound worse — it gets worse.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Strings loosen. Tuning pins wear. Damage that was once a simple fix becomes expensive — or permanent. And in the meantime, you stop playing. The longer a piano goes without service, the more it costs to bring back. Don&apos;t let that be your story.
            </p>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-muted rounded-3xl overflow-hidden">
          <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight mb-6">
                If it doesn&apos;t sound right, Jaiden will make it right.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every tuning is backed by a satisfaction guarantee. If your piano doesn&apos;t hold pitch or sound the way it should after his visit, he&apos;ll come back and fix it — no questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-secondary rounded-3xl overflow-hidden">
          <div className="px-8 md:px-16 py-16 md:py-24">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="size-6 text-white" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                Appointments are limited — West Michigan only.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Get back to the music. Your piano — and everyone who listens — will thank you.
              </p>
              <p className="text-sm text-gray-400 mb-10">
                Not sure if it&apos;s time?{' '}
                <Link href="/piano-health-check" className="text-primary underline underline-offset-2 hover:text-primary/80">
                  Take the 60-second Piano Health Check →
                </Link>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/schedule">
                  <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20 font-medium"
                  >
                    Book Your Tuning
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
