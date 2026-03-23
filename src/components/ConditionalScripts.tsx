"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function ConditionalScripts() {
  const pathname = usePathname();
  const shouldIncludeScript = pathname === "/" || pathname === "/schedule";

  if (!shouldIncludeScript) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16763613402"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16763613402');
        `}
      </Script>
      <Script id="gtag-config" strategy="afterInteractive">{`
        gtag('config', 'AW-16763613402/QmInCPGvvLgaENrhwbk-', {
          'phone_conversion_number': '(616) 229-0630'
        });
      `}</Script>
    </>
  );
}
