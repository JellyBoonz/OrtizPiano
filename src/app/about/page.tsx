"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
                        About Me
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-center text-foreground/80 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Professional piano technician serving Grand Rapids and surrounding areas
                    </motion.p>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image 
                                src="/jaiden.png"
                                alt="Jaiden - Professional Piano Tuner" 
                                width={300} 
                                height={300}
                                unoptimized 
                                className="rounded-full shadow-xl border-4 border-accent/20" 
                            />
                        </motion.div>
                        
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="prose prose-lg max-w-none">
                                <p className="text-lg text-foreground/80 mb-6">
                                    My name is Jaiden, and I am a professional piano tuner with over 8 years of experience 
                                    helping musicians and music lovers maintain the sound quality of their pianos. I am passionate 
                                    about delivering high-quality service to ensure your piano sounds its best.
                                </p>
                                <p className="text-lg text-foreground/80 mb-6">
                                    I specialize in piano tuning, pitch raises, cleaning, and minor repairs. My goal is to provide 
                                    exceptional service while maintaining the integrity and beauty of your instrument.
                                </p>
                                <p className="text-lg text-foreground/80 mb-8">
                                    Based in Grand Rapids, I serve the greater West Michigan area, including Ada, Rockford, 
                                    Kentwood, Wyoming, Byron Center, Zeeland, and surrounding communities.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/services">
                                    <motion.button
                                        className="bg-accent text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-accent transition-all duration-300 shadow-lg w-full sm:w-auto"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Services
                                    </motion.button>
                                </Link>
                                <Link href="/contact">
                                    <motion.button
                                        className="bg-secondary text-accent px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent hover:text-secondary transition-all duration-300 shadow-lg w-full sm:w-auto"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact Me
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
