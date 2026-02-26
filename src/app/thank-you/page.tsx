"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Thank You!
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Your request has been received. I will contact you soon to schedule
              your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:6162290630">
                <motion.button
                  className="bg-accent text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-accent transition-all duration-300 shadow-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Now – (616) 229-0630
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className="bg-white text-secondary px-8 py-4 rounded-full text-lg font-semibold border-2 border-accent hover:bg-accent/10 transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
