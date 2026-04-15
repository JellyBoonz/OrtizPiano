"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, AlertCircle, Award, Calendar, Clock, CloudRain, MapPin, Music, Phone, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const locations = {
  "grand-rapids": {
    name: "Grand Rapids",
    image: "/locations/grand-rapids.jpg",
    tagline: "Your piano deserves to sound as beautiful as the day you brought it home.",
    description: "Serving the heart of West Michigan with professional piano tuning and maintenance services.",
    neighborhoods: [
      "Downtown & Monroe North",
      "Heritage Hill",
      "Eastown",
      "East Hills & Cherry Hill",
      "Midtown & Belknap Lookout",
      "West Side & John Ball Park",
      "Creston & North End",
      "Alger Heights",
      "Ottawa Hills",
      "Garfield Park",
      "Fulton Heights",
      "Ridgemoor & Eastgate",
      "Westside Connection & Stocking",
      "Baxter & Madison Area"
    ],
    content: [
      {
        type: "paragraph",
        text: "You love your piano. But Michigan winters, summer humidity, and time have dulled its voice. Notes drift out of tune, keys feel sluggish, and every time you sit down to play you hear what it used to be."
      },
      {
        type: "paragraph",
        text: "You shouldn't have to gamble on a technician you found in a search result, wait weeks for a callback, or wonder if the person in your living room actually knows what they're doing."
      },
      {
        type: "heading",
        text: "A Grand Rapids piano tuner you can trust"
      },
      {
        type: "paragraph",
        text: "We've tuned pianos across West Michigan for more than eight years, from baby grands in Heritage Hill parlors to uprights in Eastown bungalows. We know how this climate works on your instrument, and we know how to bring it back."
      },
      {
        type: "heading",
        text: "How it works"
      },
      {
        type: "list",
        items: [
          "Call or book online in under two minutes",
          "We arrive on time, at your home, anywhere in Grand Rapids",
          "Your piano sounds beautiful again, usually the same day"
        ]
      },
      {
        type: "heading",
        text: "Why Grand Rapids pianists choose us"
      },
      {
        type: "list",
        items: [
          "Local expertise with over 8 years serving West Michigan",
          "Quick response times across every neighborhood",
          "Deep knowledge of how Michigan's climate affects your piano",
          "Flexible scheduling that fits around your week"
        ]
      },
      {
        type: "heading",
        text: "Don't let another season go by"
      },
      {
        type: "paragraph",
        text: "Every month a piano goes untuned, it drifts further from the instrument it was built to be. Strings lose tension, felt compacts, and small problems become expensive ones. Book a tuning today and hear your piano the way it was meant to sound, by the end of the week."
      }
    ]
  }
};

export default function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const location = locations[slug as keyof typeof locations];

  if (!location) {
    return (
      <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
        <section className="bg-white rounded-3xl border border-border overflow-hidden">
          <div className="px-8 md:px-16 py-16 md:py-24 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary leading-tight mb-6">
              Location not found
            </h1>
            <Link href="/locations" className="text-primary hover:text-primary/80 font-medium">
              Return to locations
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      {/* Hero Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-8 md:px-16 py-16 md:py-24">
            <Link
              href="/locations"
              className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="size-4 mr-2" />
              Back to locations
            </Link>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Piano Tuning in {location.name}
            </h1>
            {"tagline" in location && location.tagline && (
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mt-6">
                {location.tagline}
              </p>
            )}
          </div>
          {location.image && (
            <div
              className="min-h-64 lg:min-h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${location.image})` }}
              aria-hidden="true"
            />
          )}
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                <AlertCircle className="size-4" />
                The problem
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight">
                Your piano isn't sounding like it used to.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                You love your piano. But Michigan winters, summer humidity, and time have dulled its voice. Notes drift out of tune, keys feel sluggish, and every time you sit down to play you hear what it used to be.
              </p>
              <p>
                You shouldn't have to gamble on a technician you found in a search result, wait weeks for a callback, or wonder if the person in your living room actually knows what they're doing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                <Award className="size-4" />
                Your guide
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                A Grand Rapids piano tuner you can trust.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We've tuned pianos across West Michigan for more than eight years, from baby grands in Heritage Hill parlors to uprights in Eastown bungalows. We know how this climate works on your instrument, and we know how to bring it back.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="font-serif text-4xl font-medium text-primary mb-1">8+</div>
                <div className="text-gray-300 text-sm">Years serving West Michigan</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="font-serif text-4xl font-medium text-primary mb-1">1,000s</div>
                <div className="text-gray-300 text-sm">Of pianos tuned</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="size-5 text-primary" />
                  <div className="text-white font-medium">Every Grand Rapids neighborhood</div>
                </div>
                <div className="text-gray-300 text-sm">Downtown to Eastown, Heritage Hill to the West Side.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan / Steps */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-12 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <Calendar className="size-4" />
              The plan
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight">
              Three steps to a piano that sings.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Book in 2 minutes", desc: "Call or schedule online. Pick the day that works for you." },
              { n: "02", title: "We come to you", desc: "On time, at your home, anywhere in Grand Rapids." },
              { n: "03", title: "Your piano sings", desc: "A beautifully tuned instrument, usually the same day." },
            ].map((step) => (
              <div key={step.n} className="bg-muted/40 border border-border rounded-2xl p-8">
                <div className="font-serif text-5xl font-medium text-primary/30 mb-4">{step.n}</div>
                <h3 className="font-serif text-xl font-medium text-secondary mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-12 md:py-20">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <Sparkles className="size-4" />
              Why Grand Rapids pianists choose us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight">
              Built for West Michigan pianos.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: "8+ years of local expertise", desc: "Serving West Michigan families, studios, and churches since day one." },
              { icon: Clock, title: "Quick response times", desc: "Most appointments scheduled within the week, across every neighborhood." },
              { icon: CloudRain, title: "Climate-aware tuning", desc: "We account for Michigan's swings in humidity and temperature so your tuning holds." },
              { icon: Calendar, title: "Flexible scheduling", desc: "Evenings and weekends available to fit around your week." },
            ].map((f) => (
              <div key={f.title} className="bg-white border border-border rounded-2xl p-8">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <f.icon className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-secondary mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakes / Urgency */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="size-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Music className="size-10" />
              </div>
            </div>
            <div className="lg:col-span-10">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-4">
                Don't let another season go by.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every month a piano goes untuned, it drifts further from the instrument it was built to be. Strings lose tension, felt compacts, and small problems become expensive ones. Book a tuning today and hear your piano the way it was meant to sound, by the end of the week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hyperlocal: Grand Rapids Climate */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-12 md:py-20">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <CloudRain className="size-4" />
              Grand Rapids climate & your piano
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-secondary leading-tight mb-6">
              Thirty miles from Lake Michigan, and your soundboard knows it.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Grand Rapids sits in the lake-effect belt, which means our pianos ride a humidity rollercoaster most of the country never experiences. Indoor relative humidity routinely swings from 55 to 65 percent during muggy July afternoons on the Grand River down to 15 to 25 percent by late January when furnaces run non-stop through a lake-effect cold snap. That forty-point swing is exactly what pulls pitch, loosens tuning pins, and cracks soundboards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted/40 border border-border rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-secondary mb-3">Winter (Dec to Mar)</h3>
              <p className="text-muted-foreground leading-relaxed">
                When lake-effect bands roll in off Lake Michigan and the Gerald R. Ford Airport posts single-digit lows, home humidity drops fast. Soundboards shrink, pitch falls flat, and pianos near forced-air vents in homes along Plainfield or Leonard suffer most. We recommend a late-winter tuning once your furnace settles.
              </p>
            </div>
            <div className="bg-muted/40 border border-border rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-secondary mb-3">Spring & Summer</h3>
              <p className="text-muted-foreground leading-relaxed">
                By June, thunderstorms off the lake and 80-degree dew points push humidity back up. Soundboards swell, pitch rises sharp, and sticky keys show up in older Heritage Hill and East Hills homes without central air. A summer tuning locks in the warm-weather pitch before ArtPrize season.
              </p>
            </div>
            <div className="bg-muted/40 border border-border rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-secondary mb-3">Fall transition</h3>
              <p className="text-muted-foreground leading-relaxed">
                September and October are Grand Rapids' most stable stretch, and the ideal window for a precision tuning. If you tune once a year, aim for the weeks between the Pulaski Days parade and the first hard frost in Cannonsburg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hyperlocal: Venues & Landmarks */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-12 md:py-20">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <Music className="size-4" />
              A city built on music
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white leading-tight mb-6">
              From St. Cecilia to the church on the corner.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Grand Rapids has one of the deepest musical communities in the Midwest. We tune for students, teachers, worship leaders, and performers across the city, and we know the instruments that live alongside them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-white mb-3">Performance halls & stages</h3>
              <p className="text-gray-300 leading-relaxed">
                Working musicians preparing for DeVos Performance Hall, the St. Cecilia Music Center on Ransom Avenue, Fountain Street Church, the Pyramid Scheme, or the Listening Room at Studio Park trust us to prep practice pianos so they walk on stage ready.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-white mb-3">Schools & universities</h3>
              <p className="text-gray-300 leading-relaxed">
                We serve piano students and faculty at Calvin University, Aquinas College, GVSU's Pew Campus downtown, GRCC, Kendall, and Grand Rapids Christian, Forest Hills, East Grand Rapids, and City High families.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-white mb-3">Churches & worship</h3>
              <p className="text-gray-300 leading-relaxed">
                From historic sanctuaries like LaGrave Avenue Christian Reformed and Park Church to newer plants across Creston and the Westside, we tune and regulate pianos that lead congregations every Sunday.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-medium text-white mb-3">Homes across every neighborhood</h3>
              <p className="text-gray-300 leading-relaxed">
                Victorian uprights in Heritage Hill, Steinway grands in East Grand Rapids near Reeds Lake, studio uprights in Alger Heights bungalows, and everything in between. We know the homes, the HVAC setups, and the pianos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="bg-muted rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-8">
            Neighborhoods Served
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {location.neighborhoods.map((neighborhood, index) => (
              <li key={index} className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                {neighborhood}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              Schedule Service in {location.name}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Get your piano sounding its best. Contact us today to book your appointment.
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
    </div>
  );
}
