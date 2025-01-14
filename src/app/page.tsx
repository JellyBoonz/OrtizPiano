"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from the correct package

export default function Home() {
  return (
    <div className="text-center">
      <Header />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <CallToAction />
    </div>
  );
}

function Header() {
  return (
    <header className="py-8 mt-8 bg-background">
      <div className="flex justify-center mb-8">
        <Image
          src="/piano.png" // Ensure the image path is correct
          alt="Ortiz Piano Tuning Logo"
          width={600}
          height={600}
        />
      </div>
      <motion.h1 
        className="font-serif text-4xl md:text-5xl font-bold mb-6 text-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ortiz Professional Piano Care
      </motion.h1>
      <p className="font-serif text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground">
        Seasoned Piano technician offering expert <strong>tuning</strong>, <strong>repairs</strong>, and <strong>maintenance</strong> services in Greater Grand Rapids.
      </p>
      <Link href="https://calendar.app.google/jzeoaGxGgY7PhW5Y9">
        <motion.button 
          className="bg-accent text-secondary px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Tuning
        </motion.button>
      </Link>
    </header>
  );
}

function Services() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { title: 'Piano Tuning', description: 'Precise tuning to ensure your piano sounds harmonious and beautiful.' },
          { title: 'Tuning + Pitch Raise', description: 'Adjustments for pianos that are significantly out of tune, restoring proper pitch.' },
          { title: 'Tuning + Piano Cleanings', description: 'Professional cleaning to remove dust and debris, preserving your piano’s integrity.' },
          { title: 'Minor Repairs', description: 'Fix sticky keys, loose strings, and other minor issues to keep your piano in top playing condition.' }
        ].map((service, index) => (
          <motion.div 
            key={index}
            className="p-6 border border-accent/20 rounded-lg shadow-md bg-background"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-16 border bg-accent/5 rounded-lg">
      <h2 className="text-3xl font-bold mb-8">Why Choose Ortiz Piano Tuning?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { title: 'Experienced', description: 'Years of expertise in tuning and repairing pianos of all types.' },
          { title: 'Attention to Detail', description: 'Treating your piano with the utmost care it deserves.' },
          { title: 'Affordable Rates', description: 'Quality service at competitive prices to fit your budget.' },
          { title: 'Customer Satisfaction', description: 'Your satisfaction is the top priority.' }
        ].map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">About Ortiz Piano Tuning</h2>
      <p className="font-serif text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground">
        Seasoned Piano technician offering expert <strong>tuning</strong>, <strong>repairs</strong>, and <strong>maintenance</strong> services in Greater Grand Rapids.
      </p>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-16 bg-background">
      <h2 className="text-3xl font-bold mb-8">Keep Your Piano in Perfect Harmony</h2>
      <Link href="/schedule">
        <motion.button 
          className="bg-accent text-secondary px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Tune
        </motion.button>
      </Link>
    </section>
  );
}
