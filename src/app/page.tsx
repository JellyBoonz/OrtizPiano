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
    <header className="py-16 mt-8 bg-gradient-to-b from-background to-accent/5">
      <div className="flex justify-center mb-8">
        <Image
          src="/piano.webp"
          alt="Ortiz Piano Tuning Logo - Grand Rapids Piano Services"
          width={600}
          height={600}
          unoptimized={true}
          className="rounded-lg shadow-xl"
        />
      </div>
      <motion.h1
        className="font-serif text-5xl md:text-6xl font-bold mb-6 text-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ortiz Piano Tuning
      </motion.h1>
      <p className="font-serif text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground leading-relaxed">
        Professional <strong className="text-accent">piano tuning</strong>, <strong className="text-accent">repairs</strong>, and <strong className="text-accent">maintenance</strong> services for the Greater Grand Rapids area.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="tel:6162290630">
          <motion.button
            className="bg-accent text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-accent transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Tuning Today
          </motion.button>
        </Link>
      </motion.div>
    </header>
  );
}

function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Our Piano Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[ 
            { 
              title: 'Piano Tuning', 
              description: 'Precise tuning to ensure your piano sounds harmonious and beautiful.',
              icon: '🎹'
            },
            { 
              title: 'Pitch Raise', 
              description: 'Adjustments for pianos that are significantly out of tune, restoring proper pitch.',
              icon: '🎵'
            },
            { 
              title: 'Piano Cleaning', 
              description: 'Professional cleaning to remove dust and debris, preserving your piano\'s integrity.',
              icon: '🧹'
            },
            { 
              title: 'Minor Repairs', 
              description: 'Fix sticky keys, loose strings, and other minor issues to keep your piano in top playing condition.',
              icon: '🔧'
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              className="p-8 border border-accent/20 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">{service.title}</h3>
              <p className="text-foreground/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
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
    <section className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Why Choose Ortiz?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[ 
            { 
              title: 'Experienced Piano Technician', 
              description: 'Years of expertise in tuning and repairing pianos of all types in Grand Rapids.',
              icon: '👨‍🔧'
            },
            { 
              title: 'Attention to Detail', 
              description: 'Treating your piano with the utmost care it deserves.',
              icon: '✨'
            },
            { 
              title: 'Affordable Rates', 
              description: 'Quality service at competitive prices to fit your budget.',
              icon: '💰'
            },
            { 
              title: 'Customer Satisfaction Guaranteed', 
              description: 'Your satisfaction is the top priority.',
              icon: '⭐'
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-secondary">About Ortiz</h2>
        <p className="font-serif text-xl md:text-2xl mb-8 text-foreground leading-relaxed">
          Ortiz Piano Tuning provides quality care to keep your piano in perfect tune. Proudly serving musicians, educators, and families across West Michigan.
        </p>
        <Link href="/about">
          <motion.button
            className="bg-accent text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-accent transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-secondary">Ready to Schedule Your Tuning?</h2>
        <p className="text-xl mb-8 text-foreground/80">Contact us today to book your appointment or ask any questions.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="tel:6162290630">
            <motion.button 
              className="bg-accent text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-accent transition-all duration-300 shadow-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button 
              className="bg-secondary text-accent px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent hover:text-secondary transition-all duration-300 shadow-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
