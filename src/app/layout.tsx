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
      <head>
        <title>Ortiz Piano Tuning | Professional Piano Tuning & Repair in Grand Rapids, MI</title>
        <meta
          name="description"
          content="Expert piano tuning and repair services in Grand Rapids, MI. Professional piano technician offering tuning, pitch raises, cleaning, and minor repairs. Serving musicians, teachers, and families since 2019. Call (616) 229-0630 for a free consultation."
        />
        <meta
          name="keywords"
          content="piano tuning Grand Rapids, piano repair Grand Rapids, piano technician, pitch raise, piano cleaning, piano maintenance, Michigan piano services, Piano Tuner, Ortiz Piano Tuning, professional piano tuning, piano service Grand Rapids, piano tuning near me, piano tuner near me, piano maintenance Grand Rapids, piano technician Grand Rapids, piano service Michigan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Ortiz Piano Tuning" />
        <meta name="geo.region" content="US-MI" />
        <meta name="geo.placename" content="Grand Rapids" />
        <meta name="geo.position" content="42.9634;-85.6681" />
        <meta name="ICBM" content="42.9634, -85.6681" />
        <link rel="canonical" href="https://ortizpiano.com" />
        {/* Open Graph Metadata */}
        <meta property="og:title" content="Ortiz Piano Tuning | Professional Piano Services in Grand Rapids" />
        <meta
          property="og:description"
          content="Expert piano tuning and repair services in Grand Rapids, MI. Professional piano technician offering tuning, pitch raises, cleaning, and minor repairs. Call (616) 229-0630 for a free consultation."
        />
        <meta property="og:url" content="https://ortizpiano.com" />
        <meta property="og:site_name" content="Ortiz Piano Tuning" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ortizpiano.com/piano.webp" />
        <meta property="og:image:alt" content="Professional Piano Tuning Services in Grand Rapids, MI" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ortiz Piano Tuning | Professional Piano Services in Grand Rapids" />
        <meta name="twitter:description" content="Expert piano tuning and repair services in Grand Rapids, MI. Professional piano technician offering tuning, pitch raises, cleaning, and minor repairs. Call (616) 229-0630 for a free consultation." />
        <meta name="twitter:image" content="https://ortizpiano.com/piano.webp" />
        <meta name="twitter:site" content="@ortizpiano" />
        <meta name="twitter:creator" content="@ortizpiano" />
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-title" content="Ortiz Piano Tuning" />
        <meta name="apple-mobile-web-app-title" content="Ortiz Piano Tuning" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
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
            <Script id="gtag-config">{`
              gtag('config', 'AW-16763613402/QmInCPGvvLgaENrhwbk-', {
                'phone_conversion_number': '(616) 229-0630'
              });
            `}</Script>

            <Script
              id="ld-json"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Ortiz Piano Tuning",
                  "image": "https://ortizpiano.com/piano.webp",
                  "telephone": "+1-616-229-0630",
                  "email": "zitropiano@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Grand Rapids",
                    "addressRegion": "MI",
                    "postalCode": "49503",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 42.9634,
                    "longitude": -85.6681
                  },
                  "url": "https://ortizpiano.com",
                  "description": "Ortiz Piano Tuning offers professional piano tuning, pitch raises, and minor repairs in Grand Rapids, Michigan. Serving musicians, teachers, and families since 2019.",
                  "priceRange": "$$",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "09:00",
                      "closes": "18:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "09:00",
                      "closes": "18:00",
                      "description": "By appointment only"
                    }
                  ],
                  "areaServed": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": 42.9634,
                      "longitude": -85.6681
                    },
                    "geoRadius": 20000
                  },
                  "hasMap": "https://www.google.com/maps/place/Grand+Rapids,+MI",
                  "sameAs": [
                    "https://www.facebook.com/ortizpiano",
                    "https://www.instagram.com/ortizpiano"
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "25",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
              
                  "makesOffer": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Piano Tuning",
                        "description": "Professional piano tuning service to ensure your piano sounds its best."
                      },
                      "price": "150",
                      "priceCurrency": "USD"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Pitch Raise",
                        "description": "Comprehensive pitch adjustment for pianos that have fallen significantly out of tune."
                      },
                      "price": "200",
                      "priceCurrency": "USD"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Piano Cleaning",
                        "description": "Thorough cleaning of piano interior and exterior to maintain optimal condition."
                      },
                      "price": "100",
                      "priceCurrency": "USD"
                    }
                  ]
                }),
              }}
            />
            <Script
              id="ld-json-breadcrumb"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://ortizpiano.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Services",
                      "item": "https://ortizpiano.com/services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "About",
                      "item": "https://ortizpiano.com/about"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Contact",
                      "item": "https://ortizpiano.com/contact"
                    }
                  ]
                }),
              }}
            />
          </>
        )}
        <div>
          <MobileNav />
          <DesktopNav />
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
            <Link href="/blog" legacyBehavior>
              <a className="text-lg hover:text-secondary" onClick={toggleDrawer}>
                Blog
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

function DesktopNav() {
  return (
    <nav className="hidden md:block fixed top-0 left-0 w-full bg-backgroundDarker z-50 shadow-md border-b border-subtle">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-background font-serif">
            Ortiz Piano Tuning
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-background hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-background hover:text-secondary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-background hover:text-secondary transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="text-background hover:text-secondary transition-colors">
              Blog
            </Link>
            <Link href="tel:6162290630">
              <motion.button
                className="bg-accent text-secondary px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}