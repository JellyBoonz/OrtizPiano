"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-center">
      <Header />
      <Services />
      <ServiceAreas />
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
          src="/piano.webp"
          alt="Ortiz Piano Tuning Logo - Grand Rapids Piano Services"
          width={600}
          height={600}
          unoptimized={true}
        />
      </div>
      <motion.h1
        className="font-serif text-4xl md:text-5xl font-bold mb-6 text-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ortiz Piano Tuning
      </motion.h1>
      <p className="font-serif text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground">
        Professional <strong>piano tuning</strong>, <strong>repairs</strong>, and <strong>maintenance</strong> services for the Greater Grand Rapids area.
      </p>
    </header>
  );
}

function Services() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Piano Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[ 
          { title: 'Piano Tuning', description: 'Precise tuning to ensure your piano sounds harmonious and beautiful.' },
          { title: 'Pitch Raise', description: 'Adjustments for pianos that are significantly out of tune, restoring proper pitch.' },
          { title: 'Piano Cleaning', description: 'Professional cleaning to remove dust and debris, preserving your piano’s integrity.' },
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

function ServiceAreas() {
  return (
    <section className="py-16 bg-accent/10">
      <h2 className="text-3xl font-bold mb-8">Serving Greater Grand Rapids</h2>
      <p className="font-serif text-xl md:text-2xl max-w-2xl mx-auto text-foreground">
        Based in Grand Rapids, Ortiz Piano Tuning serves a wide radius of West Michigan including Ada, Rockford, Kentwood, Wyoming, Byron Center, Zeeland, and surrounding areas.
      </p>
    </section>
  );
}


function WhyChooseUs() {
  return (
    <section className="py-16 bg-accent/5">
      <h2 className="text-3xl font-bold mb-8">Why Choose Ortiz?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[ 
          { title: 'Experienced Piano Technician', description: 'Years of expertise in tuning and repairing pianos of all types in Grand Rapids.' },
          { title: 'Attention to Detail', description: 'Treating your piano with the utmost care it deserves.' },
          { title: 'Affordable Rates', description: 'Quality service at competitive prices to fit your budget.' },
          { title: 'Customer Satisfaction Guaranteed', description: 'Your satisfaction is the top priority.' }
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
      <h2 className="text-3xl font-bold mb-8">About Ortiz</h2>
      <p className="font-serif text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground">
        Ortiz Piano Tuning provides quality care to keep your piano in perfect tune. Proudly serving musicians, educators, and families across West Michigan.
      </p>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-16 bg-background">
      <h2 className="text-3xl font-bold mb-8">Schedule a Tuning</h2>
      <Link href="tel:6162290630">
        <motion.button 
          className="bg-accent text-secondary px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Call Now
        </motion.button>
      </Link>
    </section>
  );
}
