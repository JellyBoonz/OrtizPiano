"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
      rating: "★★★★★",
      text: "Jaiden was very professional and polite. He communicated promptly and i was able to get my piano tuned quickly! I would definitely recommend him!",
    },
    {
      name: "Qiaorong Wang",
      rating: "★★★★★",
      text: "I had a great experience with Ortiz! He is a very professional and warm hearted person. He tuned very carefully in each key. Recommended him to anyone who needs!",
    },
    {
      name: "Tony Benac",
      rating: "★★★★★",
      text: "Prompt, friendly service, and our piano sounds great! Thanks!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      {showStickyHeader && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-backgroundDarker shadow-lg border-b border-subtle"
        >
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <Link href="/#contact-section">
                <motion.button
                  className="bg-accent text-background px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Appointment Now
                </motion.button>
              </Link>
              <Link href="tel:6162290630">
                <motion.button
                  className="bg-secondary text-background px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call (616) 229-0630 – Book Today
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-secondary leading-tight">
              Grand Rapids Piano Tuning – Book Today (Limited Availability)
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-foreground max-w-3xl mx-auto">
              Professional who&apos;s tuned 1000+ pianos • Free check-up when you book now
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/#contact-section">
                <motion.button
                  className="bg-accent text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Appointment Now
                </motion.button>
              </Link>
              <Link href="tel:6162290630">
                <motion.button
                  className="bg-secondary text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call (616) 229-0630 – Book Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="text-3xl mb-2">★★★★★</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">
              Trusted by Grand Rapids Piano Owners
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-accent/20"
              >
                <div className="flex items-center mb-3">
                  <span className="text-accent text-lg mr-2">{testimonial.rating}</span>
                  <span className="text-secondary font-semibold">{testimonial.name}</span>
                </div>
                <p className="text-foreground italic">&quot;{testimonial.text}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 md:py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-accent/20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">
              Tune Accuracy Guarantee
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              If your piano does not hold pitch as expected, we&apos;ll make it right. Your satisfaction and sound quality are guaranteed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-accent/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary text-center">
              Why Choose Our Piano Tuning Service
            </h2>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <span className="text-lg">Performance-ready sound for recitals, lessons, and performances</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <span className="text-lg">Reliable scheduling that works with your timeline</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <span className="text-lg">Local, experienced technician serving Grand Rapids</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <span className="text-lg">Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <span className="text-lg">Free check-up with booking</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-12 md:py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">
              Limited Appointments Available This Week
            </h2>
            <p className="text-lg text-foreground mb-8">
              Don&apos;t wait – secure your piano tuning appointment today
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact-section">
                <motion.button
                  className="bg-accent text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Appointment Now
                </motion.button>
              </Link>
              <Link href="tel:6162290630">
                <motion.button
                  className="bg-secondary text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call (616) 229-0630 – Book Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

