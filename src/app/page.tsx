import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TransformationSection } from "@/components/home/TransformationSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto px-4 md:px-6 space-y-6 py-6">
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <TransformationSection />
      <CTASection />
    </div>
  );
}
