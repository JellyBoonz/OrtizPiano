"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="min-h-screen bg-background">
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
  