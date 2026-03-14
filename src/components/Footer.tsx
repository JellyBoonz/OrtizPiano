"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/schedule", label: "Schedule Online" },
  { href: "/locations", label: "Locations" },
];

const serviceLinks = [
  { href: "/services", label: "Piano Tuning" },
  { href: "/services", label: "Piano Repairs" },
  { href: "/services", label: "Keyboard Repair" },
  { href: "/services", label: "Piano Appraisals" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/piano-gold.svg"
                alt="Ortiz Piano Tuning logo"
                width={28}
                height={28}
              />
              <span className="text-white font-serif text-lg font-medium">
                Ortiz Piano Tuning
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Professional piano tuning and repair serving West Michigan since
              2017. Give your piano that new car feel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="tel:6162290630"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Phone className="size-4 text-primary shrink-0" />
                  (616) 229-0630
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:zitropiano@gmail.com"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Mail className="size-4 text-primary shrink-0" />
                  zitropiano@gmail.com
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Grand Rapids, MI<br />Serving all of West Michigan</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Mon &ndash; Fri: 9am &ndash; 6pm<br />Sat: By appointment</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ortiz Piano Tuning. All rights
            reserved. | <span className="text-white">Designed by{" "}
            <a
              href="https://www.kopplin.co"
              target="_blank"
              className="font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Kopplin Co.
            </a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
