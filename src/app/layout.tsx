'use client';

import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link'
import './globals.css';
import { motion } from 'framer-motion';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const shouldIncludeScript = pathname === '/' || pathname === '/schedule';

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {shouldIncludeScript && (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-16763613402"
            />
            <Script id="google-tag">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16763613402');
              `}
            </Script>
          </>
        )}
        <div>
          <MobileNav/>
          <main className="flex flex-col items-center p-10">{children}</main>
          <footer className="p-5 text-center border-t border-subtle">
            <p className="text-secondary">© 2024 Ortiz Piano Tuning</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen); // Only handle state changes; don't prevent default behavior.
  }
  

  return (
    <div className="fixed top-0 left-0 w-full bg-background z-50 shadow-md">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-accent">Ortiz Piano Tuning</h1>
        <div className="flex items-center space-x-4">
          <Link href="https://calendar.app.google/jzeoaGxGgY7PhW5Y9" legacyBehavior>
            <a className="text-md font-bold text-accent hover:text-secondary">Book Now</a>
          </Link>
          <button
            className="text-accent focus:outline-none"
            onClick={toggleDrawer}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Drawer */}
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 w-64 h-full bg-backgroundDarker shadow-lg z-50"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="flex flex-col p-6 space-y-4 text-accent">
            <button
              className="text-accent self-end text-2xl focus:outline-none"
              onClick={toggleDrawer}
            >
              ✕
            </button>
            <Link href="/" legacyBehavior>
              <a className="text-lg hover:text-secondary" onClick={toggleDrawer}>
                Home
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="text-lg hover:text-secondary" onClick={toggleDrawer}>
                Services
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-lg hover:text-secondary" onClick={toggleDrawer}>
                About Us
              </a>
            </Link>

            <Link href="https://calendar.app.google/jzeoaGxGgY7PhW5Y9" legacyBehavior>
              <a className="text-lg hover:text-secondary" onClick={toggleDrawer}>
                Book Now
              </a>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}