"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section, TapeStrip } from "@/components/ui";
import testimonials from "@/content/testimonials/index.json";

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const areaColors = {
    pflege: "turkis",
    paedagogik: "amethyst",
    medizin: "turkis",
  };

  const color = areaColors[currentTestimonial.area as keyof typeof areaColors];

  return (
    <Section variant="default" padding="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-2 bg-amethyst/10 text-amethyst rounded-full text-sm font-medium mb-4">
          Stimmen unserer Talents
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-coal">
          Das sagen unsere Mitarbeiter
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <TapeStrip color={color as "turkis" | "amethyst"}>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <Quote
                  size={48}
                  className={`mb-6 ${
                    color === "turkis" ? "text-turkis/30" : "text-amethyst/30"
                  }`}
                />

                <blockquote className="text-xl md:text-2xl text-coal font-medium mb-8 leading-relaxed">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-grey overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="w-full h-full bg-gradient-to-br from-turkis/20 to-amethyst/20" />
                  </div>
                  <div>
                    <p className="font-bold text-coal">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-sm text-coal/60">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-xs text-coal/40">
                      {currentTestimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </TapeStrip>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-grey hover:bg-turkis hover:text-white transition-colors"
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-turkis" : "bg-grey"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full bg-grey hover:bg-turkis hover:text-white transition-colors"
            aria-label="Nächstes Testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
}
