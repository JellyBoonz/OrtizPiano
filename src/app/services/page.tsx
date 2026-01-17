"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  const services = [
    { 
      name: 'Piano Tuning', 
      description: 'Fine-tuning your piano to ensure optimal sound quality. Our professional tuning service brings your piano back to its perfect pitch, ensuring every note sounds just right.',
      icon: '🎹',
      price: 'Starting at $150'
    },
    { 
      name: 'Tuning + Pitch Raise', 
      description: 'Comprehensive service for pianos that are significantly out of tune. We carefully adjust the overall pitch while maintaining the instrument\'s integrity.',
      icon: '🎵',
      price: 'Starting at $200'
    },
    { 
      name: 'Tuning + Cleaning', 
      description: 'Complete package including thorough cleaning of the piano\'s interior and exterior, followed by precise tuning. Perfect for maintaining your piano\'s appearance and sound quality.',
      icon: '🧹',
      price: 'Starting at $250'
    },
    {
      name: 'Minor Repairs',
      description: 'Expert repair service for common piano issues including sticky keys, loose strings, and other minor mechanical problems.',
      icon: '🔧',
      price: 'Starting at $50'
    },
    {
      name: 'Electronic Keyboard Repair',
      description: 'Expert repair service for digital pianos, MIDI keyboards, and stage keyboards. We diagnose and repair electronic components, key mechanisms, power supplies, circuit boards, display screens, and connectivity issues. Serving musicians, studios, churches, and schools throughout West Michigan.',
      icon: '⌨️',
      price: 'Starting at $75'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-center text-secondary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-center text-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional piano services to keep your instrument in perfect condition
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-accent/20 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-secondary">{service.name}</h2>
                    <p className="text-foreground/80 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-semibold">{service.price}</span>
                      <Link href="/contact">
                        <motion.button
                          className="bg-accent text-secondary px-6 py-2 rounded-full text-sm font-semibold hover:bg-secondary hover:text-accent transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book Now
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-foreground/80 mb-6">
              Not sure which service you need? Contact us for a free consultation.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-secondary text-accent px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent hover:text-secondary transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
