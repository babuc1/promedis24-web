"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users } from "lucide-react";
import { Section, Button } from "@/components/ui";

export function CTASection() {
  return (
    <Section variant="default" padding="lg">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Bewerber CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-turkis to-turkis-dark p-8 md:p-10 text-white"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Users size={28} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Auf der Suche nach dem perfekten Job?
            </h3>

            <p className="text-white/80 mb-6">
              Bewirb dich jetzt in nur 60 Sekunden und starte deine Karriere mit
              übertariflicher Bezahlung und echten Benefits.
            </p>

            <Button
              variant="ghost"
              className="bg-white text-turkis hover:bg-white/90"
              href="/bewerben"
            >
              Jetzt bewerben
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Unternehmen CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amethyst to-amethyst-dark p-8 md:p-10 text-white"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Building2 size={28} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Sie suchen qualifiziertes Personal?
            </h3>

            <p className="text-white/80 mb-6">
              Wir finden die passenden Fachkräfte für Ihre Einrichtung – schnell,
              zuverlässig und mit persönlicher Betreuung.
            </p>

            <Button
              variant="ghost"
              className="bg-white text-amethyst hover:bg-white/90"
              href="/kontakt?type=unternehmen"
            >
              Personal anfragen
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
