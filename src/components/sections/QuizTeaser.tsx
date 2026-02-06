"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section, Button } from "@/components/ui";

export function QuizTeaser() {
  return (
    <Section variant="turkis" padding="lg">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-coal text-sm font-medium mb-6">
            <Sparkles size={16} />
            Interaktives Quiz
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-coal mb-4">
            Was weißt du wirklich über Zeitarbeit?
          </h2>

          <p className="text-lg text-coal/80 mb-8">
            Teste dein Wissen und räume mit den häufigsten Vorurteilen auf. In
            nur 2 Minuten erfährst du die Wahrheit über moderne Zeitarbeit.
          </p>

          <Button
            variant="ghost"
            className="bg-white hover:bg-white/90 text-turkis"
            href="/zeitarbeit-quiz"
          >
            Quiz starten
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Quiz Preview Cards */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-64 h-40 bg-white rounded-xl shadow-lg p-4 transform rotate-6">
              <p className="text-sm text-coal/60">Mythos #3</p>
              <p className="font-bold text-coal mt-2">
                &ldquo;Zeitarbeit ist unsicher&rdquo;
              </p>
            </div>
            <div className="absolute top-8 left-8 w-64 h-40 bg-white rounded-xl shadow-lg p-4 transform -rotate-3">
              <p className="text-sm text-coal/60">Mythos #1</p>
              <p className="font-bold text-coal mt-2">
                &ldquo;Zeitarbeit = schlecht bezahlt&rdquo;
              </p>
            </div>
            <div className="relative z-10 w-64 h-40 bg-white rounded-xl shadow-xl p-4 mx-auto mt-16">
              <p className="text-sm text-turkis font-medium">Faktencheck</p>
              <p className="font-bold text-coal mt-2">
                Erfahre die Wahrheit!
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-turkis-light text-turkis text-xs rounded-full">
                  Stimmt
                </span>
                <span className="px-3 py-1 bg-grey text-coal/60 text-xs rounded-full">
                  Stimmt nicht
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
