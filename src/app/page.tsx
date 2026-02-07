import {
  Hero,
  Stats,
  BenefitsPreview,
  TestimonialSlider,
  QuizTeaser,
  CTASection,
} from "@/components/sections";
import SplitHero from "@/components/sections/SplitHero";

export default function Home() {
  return (
    <>
      {/* New Split Hero - dual audience with hover effects */}
      <SplitHero />

      {/* Original Hero - can remove after comparison */}
      <Hero />
      <Stats />
      <BenefitsPreview />
      <TestimonialSlider />
      <QuizTeaser />
      <CTASection />
    </>
  );
}
