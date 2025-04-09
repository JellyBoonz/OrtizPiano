"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import { motion } from "framer-motion";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const shouldIncludeScript = pathname === "/" || pathname === "/schedule";

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
          <MobileNav />
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
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-backgroundDarker z-50 shadow-md border-b border-subtle">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-background font-serif">
          Ortiz Piano Tuning
        </h1>
        <div className="flex items-center space-x-4">
          <Link href="tel:6162290630" legacyBehavior>
            <motion.button
              className="bg-accent text-secondary px-4 py-3 rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.button>
          </Link>
          <button
            className="text-background focus:outline-none"
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
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", stiffness: 70 }}
        >
          <div className="flex flex-col p-6 space-y-6 text-background">
            <button
              className="text-background self-end text-2xl focus:outline-none"
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
            <div className="flex flex-col items-center space-y-2">
              <Link href="tel:6162290630" legacyBehavior>
                <motion.button
                  className="bg-accent text-secondary px-4 py-3 rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
