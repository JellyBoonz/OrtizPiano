"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import "./globals.css";
import Footer from "@/components/Footer";


export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const shouldIncludeScript = pathname === "/" || pathname === "/schedule";

  return (
    <html lang="en">
      <head>
        <title>Ortiz Piano Tuning | Professional Piano Tuning & Repair</title>
        <meta
          name="description"
          content="Expert piano tuning, repair, and digital keyboard repair services in Grand Rapids, MI. Professional piano technician offering tuning, pitch raises, cleaning, minor repairs, and electronic keyboard diagnostics. Serving musicians, teachers, and families since 2019. Call (616) 229-0630 for a free consultation."
        />
        <meta
          name="keywords"
          content="piano tuning Grand Rapids, piano repair Grand Rapids, piano technician, pitch raise, piano cleaning, piano maintenance, Michigan piano services, Piano Tuner, Ortiz Piano Tuning, professional piano tuning, piano service Grand Rapids, piano tuning near me, piano tuner near me, piano maintenance Grand Rapids, piano technician Grand Rapids, piano service Michigan, local piano tuner, best piano tuner Grand Rapids, certified piano technician, piano tuning service near me, piano tuning Grand Rapids MI, piano tuner Grand Rapids Michigan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Ortiz Piano Tuning" />
        <meta name="geo.region" content="US-MI" />
        <meta name="geo.placename" content="Grand Rapids" />
        <meta name="geo.position" content="42.9634;-85.6681" />
        <meta name="ICBM" content="42.9634, -85.6681" />
        <meta name="location" content="Grand Rapids, Michigan" />
        <meta name="service-area" content="Grand Rapids, Kent County, Ottawa County, West Michigan" />
        <meta name="local-business" content="piano tuning service" />
        <meta name="business-type" content="piano technician" />
        <meta name="service-type" content="piano tuning and repair" />
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
        <meta property="og:image" content="https://ortizpiano.com/og-image.png" />
        <meta property="og:image:alt" content="Professional Piano Tuning Services in Grand Rapids, MI" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ortiz Piano Tuning | Professional Piano Services in Grand Rapids" />
        <meta name="twitter:description" content="Expert piano tuning and repair services in Grand Rapids, MI. Professional piano technician offering tuning, pitch raises, cleaning, and minor repairs. Call (616) 229-0630 for a free consultation." />
        <meta name="twitter:image" content="https://ortizpiano.com/og-image.png" />
        <meta name="twitter:site" content="@ortizpiano" />
        <meta name="twitter:creator" content="@ortizpiano" />
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-title" content="Ortiz Piano Tuning" />
        <meta name="apple-mobile-web-app-title" content="Ortiz Piano Tuning" />
        <link rel="icon" href="https://ortizpiano.com/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="https://ortizpiano.com/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://ortizpiano.com/favicon.ico" />
        <link rel="manifest" href="https://ortizpiano.com/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* Google Analytics - Site-wide tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T49HW9K05X"
        />
        <Script id="google-analytics-sitewide">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T49HW9K05X');
          `}
        </Script>
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
                  "image": "https://ortizpiano.com/og-image.png",
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
                      "name": "Schedule Online",
                      "item": "https://ortizpiano.com/schedule"
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
          <main className="flex flex-col items-center pt-24">{children}</main>
          <Footer />
          <Link
            href="tel:6162290630"
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full px-5 py-3 shadow-lg shadow-primary/30 transition-all hover:scale-105 flex items-center gap-2 font-medium text-sm"
            aria-label="Call Ortiz Piano Tuning"
          >
            <Phone className="size-4" />
            Call Now
          </Link>
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
              onClick={toggleDrawer}
            >
              <span className="text-2xl">{isOpen ? "\u2715" : "\u2630"}</span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 px-5 py-4 space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/blog", label: "Blog" },
              { href: "/schedule", label: "Schedule Online" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors py-1"
                onClick={toggleDrawer}
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

function DesktopNav() {
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
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About Us
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Blog
            </Link>
            <Link href="/schedule" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Schedule Online
            </Link>
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
