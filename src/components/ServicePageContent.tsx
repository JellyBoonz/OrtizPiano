import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Phone, X, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ServiceData } from "@/lib/services";

export function ServicePageContent({ service }: { service: ServiceData }) {
  const Icon = service.icon;
  const guaranteeIcons = [Shield, Star, Clock];

  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      {/* Hero Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-8 md:px-16 py-16 md:py-24">
            <Link
              href="/services"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="size-4 mr-2" />
              All Services
            </Link>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight max-w-xl mb-4">
              {service.name} in West Michigan
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-300 leading-snug max-w-xl mb-6">
              {service.hero.headline}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-6">
              {service.hero.subheadline}
            </p>

            <p className="text-primary font-medium mb-8">{service.price}</p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
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
          <div className="hidden lg:block relative min-h-[400px]">
            <Image
              src={service.images.hero.src}
              alt={service.images.hero.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-8">
              {service.problem.heading}
            </h2>
            {service.problem.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
            <ul className="mt-8 space-y-3">
              {service.problem.painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <X className="size-5 text-red-400 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="bg-muted rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Your Guide
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-8">
                {service.guide.heading}
              </h2>
              {service.guide.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
            <div className="hidden lg:block relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={service.images.guide.src}
                alt={service.images.guide.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            The Plan
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-10">
            {service.plan.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.plan.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-medium text-secondary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-[52px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included + Bonuses */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What You Get
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-white leading-tight mb-10">
            {service.included.heading}
          </h2>
          <ul className="space-y-4">
            {service.included.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {service.included.bonuses && service.included.bonuses.length > 0 && (
            <div className="mt-12 pt-10 border-t border-white/10">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
                Included Bonuses
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.included.bonuses.map((bonus, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <p className="text-primary font-semibold mb-2">{bonus.label}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{bonus.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stakes / Failure Section */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div>
            <p className="text-red-400 font-medium tracking-widest uppercase text-sm mb-4">
              What's at Stake
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-8">
              {service.stakes.heading}
            </h2>
            {service.stakes.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
            <ul className="mt-8 space-y-3">
              {service.stakes.consequences.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <X className="size-5 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success / Transformation Section */}
      <section className="bg-muted rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                The Transformation
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-8">
                {service.success.heading}
              </h2>
              {service.success.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              <ul className="mt-4 space-y-3">
                {service.success.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={service.images.success.src}
                alt={service.images.success.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="bg-white rounded-3xl border border-border overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 text-center">
            Zero Risk
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-secondary leading-tight mb-10 text-center">
            {service.guarantee.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.guarantee.items.map((item, i) => {
              const GuaranteeIcon = guaranteeIcons[i % guaranteeIcons.length];
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-muted/40 p-6"
                >
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <GuaranteeIcon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-secondary text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scarcity Note */}
      <section className="bg-muted rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-8">
          <div className="flex items-start gap-4">
            <Clock className="size-5 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-secondary font-medium">Limited availability: </span>
              {service.scarcity}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
              {service.ctaHeadline}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {service.ctaSubheadline}
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
