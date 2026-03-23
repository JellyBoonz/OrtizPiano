"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/piano-health-check", label: "Piano Health Check" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/schedule", label: "Schedule Online" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50 max-w-[1400px] left-1/2 -translate-x-1/2 px-4 pt-4">
      <div className="bg-secondary rounded-2xl border border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/piano-gold.svg"
              alt="Ortiz Piano Tuning logo"
              width={24}
              height={24}
            />
            <span className="text-lg font-bold text-white font-serif">
              Ortiz Piano
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="tel:6162290630">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all">
                Call Now
              </button>
            </Link>
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-2xl">{isOpen ? "\u2715" : "\u2630"}</span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 px-5 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function DesktopNav() {
  return (
    <nav className="hidden md:block fixed top-0 z-50 w-full max-w-[1400px] left-1/2 -translate-x-1/2 px-4 md:px-6 pt-4">
      <div className="bg-secondary rounded-2xl border border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/piano-gold.svg"
              alt="Ortiz Piano Tuning logo"
              width={28}
              height={28}
            />
            <span className="text-xl font-bold text-white font-serif">
              Ortiz Piano Tuning
            </span>
          </Link>
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="tel:6162290630">
              <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all">
                Call Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
