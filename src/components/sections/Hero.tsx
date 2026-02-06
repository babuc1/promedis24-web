"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-turkis-light/30 to-amethyst-light/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-turkis/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amethyst/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-turkis/10 text-turkis rounded-full text-sm font-medium mb-6"
            >
              14 Jahre Erfahrung | 600+ zufriedene Talents
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-coal leading-tight mb-6">
              Dein Job.{" "}
              <span className="text-turkis">Deine Regeln.</span>
              <br />
              <span className="text-amethyst">Dein Leben.</span>
            </h1>

            <p className="text-lg md:text-xl text-coal/70 mb-8 max-w-xl">
              Zeitarbeit in Pflege, Pädagogik und Medizin – mit übertariflicher
              Bezahlung, unbefristeter Festanstellung und echtem
              Wunsch-Dienstplan.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" href="/bewerben">
                In 60 Sek. bewerben
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="secondary" size="lg" href="/fuer-unternehmen">
                Personal anfragen
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-coal/60">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-grey border-2 border-white"
                    />
                  ))}
                </div>
                <span>600+ Talents</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i <= 4 ? "text-turkis" : "text-grey"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span>4.6 Sterne</span>
              </div>
            </div>
          </motion.div>

          {/* Visual / Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-turkis/20 to-amethyst/20 shadow-2xl">
              {/* Placeholder for video/image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group relative w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <Play
                    size={32}
                    className="text-turkis ml-1 group-hover:text-turkis-dark transition-colors"
                  />
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                <span className="text-sm font-medium text-coal">
                  Stress<span className="text-turkis">less</span>
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                <span className="text-sm font-medium text-coal">
                  Dein <span className="text-amethyst">Ding</span>
                </span>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-turkis-light rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-turkis">14</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-coal">Jahre</p>
                  <p className="text-xs text-coal/60">Erfahrung</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
