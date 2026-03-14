import Link from "next/link";
import { Phone, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sandy Chinavare",
    reviews: "7 reviews",
    timeAgo: "11 months ago",
    text: "Jaiden was very professional and polite. He communicated promptly and i was able to get my piano tuned quickly! I would definitely recommend him!",
    initials: "SC",
  },
  {
    name: "Robin Ward",
    reviews: "1 review",
    timeAgo: "a year ago",
    text: "Jaiden did a great job. He was quick to return texts, timely, and clear with what the process involved. Reasonable price. Our piano sounds better than ever!",
    initials: "RW",
  },
  {
    name: "Qiaorong Wang",
    reviews: "2 reviews",
    timeAgo: "a year ago",
    text: "I had a great experience with Ortiz! He is a very professional and warm hearted person. He tuned very carefully in each key. Recommended him to anyone who needs!",
    initials: "QW",
  },
];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-16 bg-white rounded-3xl border border-border overflow-hidden">
      <div className="px-8 md:px-16">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight">
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 border border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-medium shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <GoogleIcon className="size-5 shrink-0" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {testimonial.timeAgo}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
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
              className="border-secondary/20 text-secondary hover:bg-secondary/5 text-base px-8 py-6 rounded-full font-medium"
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
