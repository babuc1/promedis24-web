'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Home, Heart, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export default function NotFound() {
  return (
    <main>
      <Section variant="coal">
        <div className="py-24 md:py-32 text-center">
          {/* Tape strips decoration */}
          <div className="relative inline-block mb-8">
            <motion.div
              initial={{ opacity: 0, rotate: -8, x: -20 }}
              animate={{ opacity: 0.3, rotate: -8, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-4 -left-12 w-24 h-5 bg-[#23D2AF] rounded-sm"
            />
            <motion.div
              initial={{ opacity: 0, rotate: 5, x: 20 }}
              animate={{ opacity: 0.3, rotate: 5, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-12 w-24 h-5 bg-[#8A84F5] rounded-sm"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-8xl md:text-[160px] font-black text-white/10 leading-none"
            >
              404
            </motion.h1>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            Seite nicht gefunden
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 mb-12 max-w-md mx-auto"
          >
            Diese Seite gibt es nicht – aber wir haben viel Besseres für dich.
          </motion.p>

          {/* Dual paths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {/* Bewerber */}
            <div className="bg-white/5 border border-[#23D2AF]/20 rounded-2xl p-8 text-left hover:border-[#23D2AF]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#23D2AF]/15 flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-[#23D2AF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Für Bewerber</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                Jobs finden, Benefits entdecken, in 60 Sekunden bewerben.
              </p>
              <div className="space-y-2">
                <a href="/jobs-in-meiner-naehe" className="flex items-center gap-2 text-sm text-[#23D2AF] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" /> Stellenangebote
                </a>
                <a href="/benefits" className="flex items-center gap-2 text-sm text-[#23D2AF] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" /> Benefits
                </a>
                <a href="/bewerben" className="flex items-center gap-2 text-sm text-[#23D2AF] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" /> Jetzt bewerben
                </a>
                <a href="/standorte" className="flex items-center gap-2 text-sm text-[#23D2AF] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" /> Standorte
                </a>
              </div>
            </div>

            {/* Unternehmen */}
            <div className="bg-white/5 border border-[#8A84F5]/20 rounded-2xl p-8 text-left hover:border-[#8A84F5]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#8A84F5]/15 flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6 text-[#8A84F5]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Für Unternehmen</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                Fachkräfte finden, Prozess kennenlernen, Personal anfragen.
              </p>
              <div className="space-y-2">
                <a href="/fuer-unternehmen" className="flex items-center gap-2 text-sm text-[#8A84F5] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" /> Übersicht
                </a>
                <a href="/fuer-unternehmen/zeitarbeit" className="flex items-center gap-2 text-sm text-[#8A84F5] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" /> Was ist Zeitarbeit?
                </a>
                <a href="/fuer-unternehmen/prozess" className="flex items-center gap-2 text-sm text-[#8A84F5] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" /> Unser Prozess
                </a>
                <a href="/kontakt" className="flex items-center gap-2 text-sm text-[#8A84F5] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" /> Kontakt
                </a>
              </div>
            </div>
          </motion.div>

          {/* Home button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Button href="/" variant="ghost" size="lg">
              <Home className="w-5 h-5 mr-2" />
              Zur Startseite
            </Button>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
