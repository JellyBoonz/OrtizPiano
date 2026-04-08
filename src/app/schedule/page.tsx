"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ScheduleOnline() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (formState.website) {
      console.log("Bot detected via honeypot");
      return;
    }

    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim()) {
      setSubmitStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    const phoneDigits = formState.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setSubmitStatus({ type: "error", message: "Please enter a valid phone number." });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formElement = e.currentTarget as HTMLFormElement;
      const formData = new FormData(formElement);
      formData.set("form-name", "contact-form");

      const urlEncoded = Array.from(formData.entries())
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
        .join("&");

      const response = await fetch("/contact-form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncoded,
      });

      if (response.status >= 400) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try calling (616) 229-0630 instead.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden w-full max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      {/* Hero Banner */}
      <section className="relative bg-secondary overflow-hidden rounded-3xl">
        <div className="px-8 md:px-16 py-10 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
            Schedule Online
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Fill out the form below and Jaiden will confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white rounded-3xl overflow-hidden border border-border">
        <div className="px-8 md:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left - Form */}
            <div className="lg:col-span-3 space-y-10">
              <div className="bg-muted rounded-2xl p-8 md:p-10">
                {/* Hidden static form for Netlify detection */}
                <form name="contact-form" data-netlify="true" data-netlify-honeypot="website" hidden>
                  <input type="text" name="name" />
                  <input type="email" name="email" />
                  <input type="tel" name="phone" />
                  <select name="serviceType">
                    <option value="piano-tuning">Piano Tuning</option>
                    <option value="piano-repairs">Piano Repairs</option>
                    <option value="electronic-keyboard-repair">Electronic Keyboard Repair</option>
                    <option value="piano-appraisal">Piano Appraisal</option>
                  </select>
                  <input type="date" name="preferredDate" />
                  <textarea name="message"></textarea>
                  <input type="text" name="website" />
                </form>

                <h3 className="font-serif text-xl font-medium text-secondary mb-6">
                  Request an Appointment
                </h3>

                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-xl text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact-form" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="rounded-xl border-border bg-background h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="(555) 123-4567"
                        value={formState.phone}
                        onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                        className="rounded-xl border-border bg-background h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      className="rounded-xl border-border bg-background h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceType" className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Service Type
                      </label>
                      <Select
                        value={formState.serviceType}
                        onValueChange={(value) => setFormState((prev) => ({ ...prev, serviceType: value }))}
                      >
                        <SelectTrigger className="rounded-xl border-border bg-background h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="piano-tuning">Piano Tuning</SelectItem>
                          <SelectItem value="piano-repairs">Piano Repairs</SelectItem>
                          <SelectItem value="electronic-keyboard-repair">Electronic Keyboard Repair</SelectItem>
                          <SelectItem value="piano-appraisal">Piano Appraisal</SelectItem>
                        </SelectContent>
                      </Select>
                      <select name="serviceType" value={formState.serviceType} onChange={() => {}} className="hidden" aria-hidden="true">
                        <option value="">Select Service Type</option>
                        <option value="piano-tuning">Piano Tuning</option>
                        <option value="piano-repairs">Piano Repairs</option>
                        <option value="electronic-keyboard-repair">Electronic Keyboard Repair</option>
                        <option value="piano-appraisal">Piano Appraisal</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Preferred Date
                      </label>
                      <Input
                        id="preferredDate"
                        type="date"
                        name="preferredDate"
                        value={formState.preferredDate}
                        onChange={(e) => setFormState((prev) => ({ ...prev, preferredDate: e.target.value }))}
                        className="rounded-xl border-border bg-background h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                      Tell us about your piano
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Piano brand, age, last time it was tuned, any issues you've noticed..."
                      value={formState.message}
                      onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      className="rounded-xl border-border bg-background"
                    />
                  </div>

                  {/* Honeypot */}
                  <div className="absolute left-[-9999px]">
                    <input
                      type="text"
                      name="website"
                      value={formState.website}
                      onChange={(e) => setFormState((prev) => ({ ...prev, website: e.target.value }))}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white hover:bg-secondary/90 py-6 rounded-full font-medium text-base"
                  >
                    {isSubmitting ? "Sending..." : "Request Appointment"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We&apos;ll confirm your appointment within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Right Sidebar - Image & Contact */}
            <div className="lg:col-span-2 space-y-10">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/stock/piano-strings.jpg"
                  alt="Close up of piano strings"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Prefer to call? */}
              <div>
                <h3 className="font-serif text-xl font-medium text-secondary mb-4">
                  Prefer to call?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                      <Link
                        href="tel:6162290630"
                        className="text-base font-medium text-secondary hover:text-primary transition-colors"
                      >
                        (616) 229-0630
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                      <Link
                        href="mailto:zitropiano@gmail.com"
                        className="text-base font-medium text-secondary hover:text-primary transition-colors"
                      >
                        zitropiano@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Hours</p>
                      <p className="text-base font-medium text-secondary">Mon&ndash;Fri: 9AM&ndash;6PM</p>
                      <p className="text-xs text-muted-foreground">Saturday by appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
