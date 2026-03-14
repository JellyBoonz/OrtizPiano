import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      <section className="bg-secondary rounded-3xl px-8 md:px-16 py-10 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-primary mx-auto" />
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Thank You!
          </h1>
          <p className="text-gray-400 leading-relaxed text-lg">
            Your request has been received. I will contact you soon to schedule
            your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="tel:6162290630">
              <Button className="bg-primary text-white hover:bg-primary/90 text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20 font-medium">
                <Phone className="w-4 h-4 mr-2" />
                Call Now – (616) 229-0630
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full font-medium"
              >
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
