"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Contact() {
    const router = useRouter();
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
            // Submit to Netlify Forms - use the actual form element
            const formElement = e.currentTarget as HTMLFormElement;
            const formData = new FormData(formElement);
            
            // Ensure form-name is set
            formData.set('form-name', 'contact-form');
            
            // Convert FormData to URL-encoded string
            const urlEncoded = Array.from(formData.entries())
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
                .join('&');
            
            console.log('Submitting form with data:', urlEncoded);

            // Submit to the static HTML form file so Netlify Forms can intercept it
            const response = await fetch('/contact-form.html', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlEncoded,
            });

            console.log('Form submission response:', response.status, response.statusText);

            // Netlify Forms returns 200 on success, or redirects (which fetch follows)
            if (response.status >= 400) {
                const errorText = await response.text();
                console.error('Form submission error:', errorText);
                throw new Error(`Form submission failed: ${response.status}`);
            }

            router.push('/thank-you');
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
        <div className="min-h-screen bg-background">
            <section className="py-16 bg-background">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
                            Request Service
                        </h2>
                        <p className="text-lg text-foreground max-w-2xl mx-auto">
                            Ready to schedule your piano tuning? Fill out the form below and I&apos;ll get back to you soon.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-xl shadow-lg border border-accent/20 relative"
                    >
                        {/* Hidden static HTML form for Netlify to detect during build */}
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

                        <form 
                            name="contact-form"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit} 
                            className="space-y-4"
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formState.name}
                                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formState.email}
                                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formState.phone}
                                onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                                className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                                required
                            />
                            
                            <select
                                name="serviceType"
                                value={formState.serviceType}
                                onChange={(e) => setFormState(prev => ({ ...prev, serviceType: e.target.value }))}
                                className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                                required
                            >
                                <option value="">Select Service Type</option>
                                <option value="piano-tuning">Piano Tuning</option>
                                <option value="piano-repairs">Piano Repairs</option>
                                <option value="electronic-keyboard-repair">Electronic Keyboard Repair</option>
                                <option value="piano-appraisal">Piano Appraisal</option>
                            </select>
                            
                            <input
                                type="date"
                                name="preferredDate"
                                value={formState.preferredDate}
                                onChange={(e) => setFormState(prev => ({ ...prev, preferredDate: e.target.value }))}
                                className="w-full px-4 py-2 rounded-lg border border-accent/20 focus:ring-2 focus:ring-accent focus:border-transparent"
                            />
                            
                            <textarea
                                name="message"
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
            </section>
            
            <section className="py-20 bg-gradient-to-b from-background to-accent/5">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Contact Me</h1>
                        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                            Get in touch to schedule a service or ask any questions about piano tuning and maintenance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-accent/20">
                                <h2 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <span className="text-3xl">📞</span>
                                        <div>
                                            <h3 className="font-semibold text-secondary text-lg">Phone</h3>
                                            <Link href="tel:6162290630" className="text-foreground/80 hover:text-accent transition-colors text-lg">
                                                (616) 229-0630
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <span className="text-3xl">📧</span>
                                        <div>
                                            <h3 className="font-semibold text-secondary text-lg">Email</h3>
                                            <Link href="mailto:zitropiano@gmail.com" className="text-foreground/80 hover:text-accent transition-colors text-lg">
                                                zitropiano@gmail.com
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg border border-accent/20">
                                <h2 className="text-2xl font-semibold mb-6 text-secondary">Service Area</h2>
                                <div className="flex items-start space-x-4">
                                    <span className="text-3xl">📍</span>
                                    <div>
                                        <p className="text-foreground/80 text-lg">
                                            Grand Rapids and surrounding areas including:
                                        </p>
                                        <ul className="mt-2 text-foreground/80 text-lg list-disc list-inside">
                                            <li>Ada</li>
                                            <li>Rockford</li>
                                            <li>Kentwood</li>
                                            <li>Wyoming</li>
                                            <li>Byron Center</li>
                                            <li>Zeeland</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-accent/20">
                                <h2 className="text-2xl font-semibold mb-6 text-secondary">Business Hours</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <span className="text-3xl">⏰</span>
                                        <div className="space-y-2">
                                            <p className="text-foreground/80 text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p className="text-foreground/80 text-lg">Saturday: By appointment</p>
                                            <p className="text-foreground/80 text-lg">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg border border-accent/20">
                                <h2 className="text-2xl font-semibold mb-6 text-secondary">Quick Response</h2>
                                <div className="flex items-start space-x-4">
                                    <span className="text-3xl">⚡</span>
                                    <div>
                                        <p className="text-foreground/80 text-lg mb-4">
                                            For the fastest response, please call or text directly. I typically respond to messages within 24 hours.
                                        </p>
                                        <Link href="tel:6162290630">
                                            <motion.button
                                                className="bg-accent text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-accent transition-all duration-300 shadow-lg w-full"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Call Now
                                            </motion.button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
}
  