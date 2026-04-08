"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/piano-health-check", label: "Piano Health Check" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/schedule", label: "Schedule Online" },
];

function ServicesDropdown({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="py-2">
      <Link
        href="/services"
        className="block px-4 py-2 text-sm text-gray-100 hover:text-white hover:bg-white/5 transition-colors font-medium"
        onClick={onNavigate}
      >
        All Services
      </Link>
      <div className="mx-4 my-1 border-t border-white/10" />
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/${service.slug}`}
          className="block px-4 py-2 text-sm text-gray-100 hover:text-white hover:bg-white/5 transition-colors"
          onClick={onNavigate}
        >
          {service.name}
        </Link>
      ))}
    </div>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
          <div className="border-t border-white/10 px-5 py-4 space-y-1">
            <Link
              href="/"
              className="block text-gray-100 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-gray-100 hover:text-white transition-colors py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown
                  className={`size-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="ml-2 border-l border-white/10">
                  <ServicesDropdown onNavigate={() => setIsOpen(false)} />
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-100 hover:text-white transition-colors py-2"
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <Link
              href="/"
              className="text-gray-100 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-gray-100 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown
                  className={`size-3.5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-secondary rounded-xl border border-white/10 shadow-xl overflow-hidden">
                  <ServicesDropdown
                    onNavigate={() => setServicesOpen(false)}
                  />
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-100 hover:text-white transition-colors text-sm font-medium"
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
