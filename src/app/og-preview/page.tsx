"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import Image from "next/image";
import { Star, Download } from "lucide-react";

export default function OgPreviewPage() {
  const ogRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    if (!ogRef.current) return;
    const dataUrl = await toPng(ogRef.current, {
      width: 1200,
      height: 630,
      pixelRatio: 2,
    });
    const link = document.createElement("a");
    link.download = "og-image.png";
    link.href = dataUrl;
    link.click();
  }

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div className="w-full flex flex-col items-center gap-10 py-16 px-4">
        {/* OG Image — 1200x630 */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div
            ref={ogRef}
            style={{ width: 1200, height: 630 }}
            className="relative overflow-hidden"
          >
            {/* Background */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "#1c3a2d" }}
            />

            {/* Right side image */}
            <div
              className="absolute right-0 top-0 bottom-0"
              style={{ width: 420 }}
            >
              <Image
                src="/stock/couple-playing-piano.png"
                alt="Couple playing piano"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="relative flex flex-col justify-between h-full"
              style={{ padding: 64, zIndex: 2 }}
            >
              {/* Logo + brand */}
              <div className="flex items-center" style={{ gap: 12 }}>
                <Image
                  src="/logos/piano-gold.svg"
                  alt="Ortiz Piano"
                  width={36}
                  height={36}
                />
                <span
                  className="text-white font-serif"
                  style={{ fontSize: 22, fontWeight: 700 }}
                >
                  Ortiz Piano Tuning
                </span>
              </div>

              {/* Headline + subtitle */}
              <div className="flex flex-col" style={{ gap: 20, maxWidth: 680 }}>
                <h2
                  className="text-white font-serif leading-[1.1] tracking-tight"
                  style={{ fontSize: 64, fontWeight: 600 }}
                >
                  Professional Piano Tuning in Grand Rapids, MI
                </h2>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: 22, color: "#9ca3af" }}
                >
                  Your piano should inspire you to play, not hold you back.
                </p>
              </div>

              {/* Social proof bar */}
              <div className="flex items-center" style={{ gap: 16 }}>
                <div className="flex" style={{ marginRight: -8 }}>
                  {[
                    {
                      src: "/customers/robin-ward.png",
                      alt: "Robin Ward",
                    },
                    {
                      src: "/customers/tony-benac.png",
                      alt: "Tony Benac",
                    },
                    {
                      src: "/customers/sandy-chinavare.png",
                      alt: "Sandy Chinavare",
                    },
                  ].map((customer, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "2px solid #c9a84c",
                        marginLeft: i > 0 ? -10 : 0,
                      }}
                    >
                      <Image
                        src={customer.src}
                        alt={customer.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col" style={{ gap: 2 }}>
                  <div className="flex items-center" style={{ gap: 6 }}>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="fill-yellow-400 text-yellow-400"
                          style={{ width: 18, height: 18 }}
                        />
                      ))}
                    </div>
                    <span
                      className="text-white"
                      style={{ fontSize: 18, fontWeight: 600 }}
                    >
                      5.0
                    </span>
                  </div>
                  <span style={{ fontSize: 14, color: "#9ca3af" }}>
                    300+ customers served since 2017
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          <Download className="size-4" />
          Download as PNG
        </button>
      </div>
    </>
  );
}
