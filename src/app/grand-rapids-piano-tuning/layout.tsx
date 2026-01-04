import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Rapids Piano Tuning – Book Today | Ortiz Piano Tuning",
  description: "Professional piano tuning in Grand Rapids, MI. Book your appointment today or call (616) 229-0630. Limited availability. Free check-up with booking.",
  alternates: {
    canonical: "https://ortizpiano.com/grand-rapids-piano-tuning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GrandRapidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

