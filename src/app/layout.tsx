import { ReactNode } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import "./globals.css";
import Footer from "@/components/Footer";
import { MobileNav, DesktopNav } from "@/components/Nav";
import ConditionalScripts from "@/components/ConditionalScripts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Professional Piano Tuning and Maintenance in West Michigan | Have a Clean and Beautiful Sounding Piano | Ortiz Piano</title>
        <meta
          name="description"
          content="Expert piano tuning, repair, and digital keyboard repair services in West Michigan. Professional piano technician offering tuning, pitch raises, cleaning, minor repairs, and electronic keyboard diagnostics. Serving musicians, teachers, and families since 2019. Call (616) 229-0630 for a free consultation."
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
        <meta property="og:title" content="Ortiz Piano Tuning | Professional Piano Services in West Michigan" />
        <meta
          property="og:description"
          content="Expert piano tuning and repair services in West Michigan. Professional piano technician offering tuning, pitch raises, cleaning, and minor repairs. Call (616) 229-0630 for a free consultation."
        />
        <meta property="og:url" content="https://ortizpiano.com" />
        <meta property="og:site_name" content="Ortiz Piano Tuning" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ortizpiano.com/og-image.png" />
        <meta property="og:image:alt" content="Professional Piano Tuning Services in West Michigan" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ortiz Piano Tuning | Professional Piano Services in West Michigan" />
        <meta name="twitter:description" content="Expert piano tuning and repair services in West Michigan. Professional piano technician offering tuning, pitch raises, cleaning, and minor repairs. Call (616) 229-0630 for a free consultation." />
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
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T49HW9K05X" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T49HW9K05X');
              gtag('config', 'G-QF6L5NNKPZ');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {/* Conditional Google Ads scripts for / and /schedule */}
        <ConditionalScripts />
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
