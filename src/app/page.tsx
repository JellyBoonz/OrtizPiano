"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="text-center">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <LocalSEOSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary leading-tight">
            Piano Tuning in Grand Rapids and surrounding areas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground leading-relaxed">
            Professional, affordable, and reliable piano tuning services with <strong className="text-accent">8 years of experience</strong>. 
            Serving West Michigan with precision and care.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="tel:6162290630">
              <motion.button
                className="bg-accent text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📞 Call Now - (616) 229-0630
              </motion.button>
            </Link>
            <Link href="#contact-section">
              <motion.button
                className="bg-secondary text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📅 Book a Tuning
              </motion.button>
            </Link>
          </div>
          
          <div className="flex justify-center mb-8">
            <Image
              src="/piano.webp"
              alt="Professional piano tuning services in Grand Rapids and Holland, Michigan"
              width={400}
              height={300}
              unoptimized={true}
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Trusted Grand Rapids Piano Tuner
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            With 8 years of hands-on experience tuning and repairing pianos across West Michigan, 
            I bring professional expertise and reliable service to every appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-accent/20"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">About Me</h3>
              <p className="text-foreground">
                Eight years of dedicated piano tuning experience serving musicians, 
                educators, and families throughout West Michigan. Every piano receives 
                the same attention to detail and professional care.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-accent/20"
          >
            <h3 className="text-xl font-semibold mb-4 text-secondary text-center">Customer Testimonials</h3>
            <div className="space-y-4">
              <div className="text-left">
                <p className="text-foreground italic mb-2">
                  &quot;Excellent service! My piano sounds amazing after the tuning. 
                  Professional, on-time, and very thorough.&quot;
                </p>
                <p className="text-accent font-medium">- Sarah M., Grand Rapids</p>
              </div>
              <div className="text-left">
                <p className="text-foreground italic mb-2">
                  &quot;Highly recommend! Fair pricing and my piano has never sounded better. 
                  Will definitely call again.&quot;
                </p>
                <p className="text-accent font-medium">- Michael R., Holland</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Piano Tuning",
      description: "Professional tuning to ensure your piano sounds harmonious and beautiful. Includes pitch adjustment and fine-tuning for optimal sound quality.",
      icon: "🎹",
      price: "$150"
    },
    {
      title: "Piano Repairs",
      description: "Comprehensive repair services including sticky keys, loose strings, broken hammers, and other mechanical issues to restore your piano's functionality.",
      icon: "🔧",
      price: "Varies"
    },
    {
      title: "Piano Appraisals",
      description: "Professional piano appraisals for insurance, sale, or estate purposes. Detailed evaluation of condition, age, and market value.",
      icon: "📋",
      price: "Starting at $99"
    }
  ];

  return (
    <section className="py-16 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Professional Piano Services
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Complete piano care services to keep your instrument in perfect condition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg border border-accent/20 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">{service.title}</h3>
              <p className="text-foreground mb-4">{service.description}</p>
              <div className="text-accent font-semibold text-lg">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Transparent Pricing
          </h2>
          <p className="text-lg text-foreground">
            Clear, upfront pricing with no hidden fees
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg border border-accent/20"
        >
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary mb-2">Standard Piano Tuning</h3>
              <div className="text-4xl font-bold text-accent mb-4">$150</div>
              <p className="text-foreground">
                Complete tuning service including pitch adjustment and fine-tuning
              </p>
            </div>
            
            <div className="border-t border-accent/20 pt-6">
              <h4 className="text-lg font-semibold text-secondary mb-2">Pitch Adjustment</h4>
              <div className="text-2xl font-bold text-accent mb-2">$50</div>
              <p className="text-foreground text-sm">
                Only needed if your piano has dropped far below standard A440 pitch, 
                typically due to long periods without tuning.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    message: '',
    website: '' // honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Robot protection checks
    if (formState.website) {
      // If honeypot field is filled, it's likely a bot
      console.log('Bot detected via honeypot');
      return;
    }

    // Additional validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    // Basic phone validation (at least 10 digits)
    const phoneDigits = formState.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid phone number.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          serviceType: formState.serviceType,
          preferredDate: formState.preferredDate,
          message: formState.message
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        setSubmitStatus({
          type: 'error',
          message: data.error,
        });
      } else {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! I will contact you soon to schedule your appointment.',
        });
        setFormState({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          preferredDate: '',
          message: '',
          website: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try calling (616) 229-0630 instead.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-16 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Contact Me Today
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Ready to schedule your piano tuning? Call directly or fill out the form below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-accent/20"
          >
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Quick Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-secondary">Phone</p>
                  <Link href="tel:6162290630" className="text-accent text-lg hover:underline">
                    (616) 229-0630
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-secondary">Email</p>
                  <Link href="mailto:zitropiano@gmail.com" className="text-accent text-lg hover:underline">
                    zitropiano@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="font-semibold text-secondary">Hours</p>
                  <p className="text-foreground">Mon-Fri: 9AM-6PM, Sat: By appointment</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="tel:6162290630">
                <motion.button
                  className="bg-accent text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  📞 Call Now - (616) 229-0630
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-accent/20"
          >
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Request Service</h3>
            
            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              
              <input
                type="tel"
                placeholder="Phone Number"
                value={formState.phone}
                onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
              
              <select
                value={formState.serviceType}
                onChange={(e) => setFormState(prev => ({ ...prev, serviceType: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              >
                <option value="">Select Service Type</option>
                <option value="piano-tuning">Piano Tuning</option>
                <option value="piano-repairs">Piano Repairs</option>
                <option value="piano-appraisal">Piano Appraisal</option>
              </select>
              
              <input
                type="date"
                value={formState.preferredDate}
                onChange={(e) => setFormState(prev => ({ ...prev, preferredDate: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              
              <textarea
                placeholder="Additional details or questions"
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              
              {/* Honeypot field - hidden from users but visible to bots */}
              <div className="absolute left-[-9999px]">
                <input
                  type="text"
                  name="website"
                  value={formState.website}
                  onChange={(e) => setFormState(prev => ({ ...prev, website: e.target.value }))}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-secondary text-background hover:bg-opacity-90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LocalSEOSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Piano Tuning Service Areas
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-3xl mx-auto">
            Professional piano tuning services available throughout West Michigan. 
            Based in Grand Rapids, serving the surrounding communities with reliable, 
            affordable piano care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: 'Grand Rapids', description: 'Professional piano tuning in Grand Rapids, MI' },
              { city: 'Holland', description: 'Trusted piano tuner serving Holland, Michigan' },
              { city: 'Zeeland', description: 'Piano tuning services in Zeeland, MI' },
              { city: 'Hudsonville', description: 'Local piano technician in Hudsonville, Michigan' }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-accent/20"
              >
                <h3 className="text-xl font-semibold mb-2 text-secondary">{location.city}</h3>
                <p className="text-foreground text-sm">{location.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-accent/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-secondary">
              Also Serving Surrounding Areas
            </h3>
            <p className="text-foreground">
              Ada, Rockford, Kentwood, Wyoming, Byron Center, Holland, Grand Haven, Zeeland, Hudsonville, and surrounding communities. 
              Call (616) 229-0630 to confirm service availability in your area.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
