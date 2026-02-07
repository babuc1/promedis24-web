'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Heart, Building2, Check, MapPin, Star, Users, Clock, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SplitHero() {
  const [hovered, setHovered] = useState<'bewerber' | 'unternehmen' | null>(null);

  const bewerberExpanded = hovered === 'bewerber';
  const unternehmenExpanded = hovered === 'unternehmen';

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row overflow-hidden">
      {/* BEWERBER SIDE (Türkis) */}
      <motion.div
        onMouseEnter={() => setHovered('bewerber')}
        onMouseLeave={() => setHovered(null)}
        animate={{
          flex: bewerberExpanded ? 1.6 : unternehmenExpanded ? 0.7 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative cursor-pointer flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-0 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #002D32 0%, #003d44 100%)' }}
      >
        {/* Glow */}
        <motion.div
          animate={{ opacity: bewerberExpanded ? 1 : 0.2 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-[-30%] left-[-10%] w-[80%] h-[80%] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(35,210,175,0.15) 0%, transparent 70%)' }}
        />

        {/* Tape decoration */}
        <motion.div
          animate={{ opacity: bewerberExpanded ? 0.5 : 0.15 }}
          transition={{ duration: 0.4 }}
          className="absolute top-8 -left-5 w-28 h-6 bg-[#23D2AF] -rotate-3 rounded-sm"
        />

        <div className="relative z-10 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#23D2AF]/15 border border-[#23D2AF]/25 rounded-full px-4 py-1.5 mb-6">
            <Heart className="w-3.5 h-3.5 text-[#23D2AF]" />
            <span className="text-[#23D2AF] text-xs font-bold tracking-widest uppercase">
              Für Bewerber
            </span>
          </div>

          {/* Headline */}
          <motion.h2
            animate={{ fontSize: bewerberExpanded ? '3rem' : '2.25rem' }}
            transition={{ duration: 0.5 }}
            className="font-black text-white leading-[1.1] mb-4"
          >
            Dein Job.{' '}
            <span className="text-[#23D2AF]">Deine Regeln.</span>
          </motion.h2>

          {/* Subline */}
          <motion.p
            animate={{ opacity: 1 }}
            className="text-white/70 leading-relaxed mb-6"
            style={{ fontSize: bewerberExpanded ? 18 : 16 }}
          >
            {bewerberExpanded
              ? 'Übertariflich bezahlt, unbefristet angestellt, mit Wunsch-Dienstplan. Bei Promedis24 bestimmst du, wie du arbeitest – in Pflege, Pädagogik oder Medizin.'
              : 'Übertariflich bezahlt. Unbefristet. Dein Wunsch-Dienstplan.'}
          </motion.p>

          {/* Benefit tags – expand on hover */}
          <AnimatePresence>
            {bewerberExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap gap-2 mb-7 overflow-hidden"
              >
                {['Wunsch-Dienstplan', 'Übertariflich', 'Unbefristet', 'Geburtstagsfrei'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 bg-[#23D2AF]/10 border border-[#23D2AF]/20 rounded-lg px-3 py-1.5 text-[#23D2AF] text-sm"
                  >
                    <Check className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button href="/bewerben" variant="primary" size={bewerberExpanded ? 'lg' : 'md'}>
              In 60 Sek. bewerben
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <AnimatePresence>
              {bewerberExpanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button href="/jobs-in-meiner-naehe" variant="ghost-dark">
                    Jobs entdecken
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stats – expand on hover */}
          <AnimatePresence>
            {bewerberExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex gap-8 mt-8 overflow-hidden"
              >
                {[
                  { icon: Users, val: '600+', label: 'Talents' },
                  { icon: Star, val: '4,6★', label: 'Indeed' },
                  { icon: MapPin, val: '18', label: 'Standorte' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[#23D2AF] font-black text-2xl">{s.val}</p>
                    <p className="text-white/40 text-xs">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* DIVIDER */}
      <div className="hidden md:block relative w-[2px] flex-shrink-0 bg-gradient-to-b from-transparent via-white/10 to-transparent z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#002D32] border-2 border-white/15 flex items-center justify-center">
          <span className="text-white/40 text-[10px] font-bold">oder</span>
        </div>
      </div>

      {/* Mobile divider */}
      <div className="md:hidden flex items-center gap-4 px-8 py-2 bg-[#002D32]">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/30 text-xs font-bold">oder</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* UNTERNEHMEN SIDE (Amethyst) */}
      <motion.div
        onMouseEnter={() => setHovered('unternehmen')}
        onMouseLeave={() => setHovered(null)}
        animate={{
          flex: unternehmenExpanded ? 1.6 : bewerberExpanded ? 0.7 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative cursor-pointer flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-0 overflow-hidden"
        style={{ background: 'linear-gradient(225deg, #0a0a2e 0%, #151540 100%)' }}
      >
        {/* Glow */}
        <motion.div
          animate={{ opacity: unternehmenExpanded ? 1 : 0.2 }}
          transition={{ duration: 0.6 }}
          className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(138,132,245,0.15) 0%, transparent 70%)' }}
        />

        {/* Tape decoration */}
        <motion.div
          animate={{ opacity: unternehmenExpanded ? 0.5 : 0.15 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-10 -right-5 w-28 h-6 bg-[#8A84F5] rotate-3 rounded-sm"
        />

        <div className="relative z-10 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#8A84F5]/15 border border-[#8A84F5]/25 rounded-full px-4 py-1.5 mb-6">
            <Building2 className="w-3.5 h-3.5 text-[#8A84F5]" />
            <span className="text-[#8A84F5] text-xs font-bold tracking-widest uppercase">
              Für Unternehmen
            </span>
          </div>

          {/* Headline */}
          <motion.h2
            animate={{ fontSize: unternehmenExpanded ? '3rem' : '2.25rem' }}
            transition={{ duration: 0.5 }}
            className="font-black text-white leading-[1.1] mb-4"
          >
            Ihr Personal.{' '}
            <span className="text-[#8A84F5]">Unsere Stärke.</span>
          </motion.h2>

          {/* Subline */}
          <motion.p
            animate={{ opacity: 1 }}
            className="text-white/70 leading-relaxed mb-6"
            style={{ fontSize: unternehmenExpanded ? 18 : 16 }}
          >
            {unternehmenExpanded
              ? 'Qualifizierte Fachkräfte für Pflege, Pädagogik und Medizin – innerhalb von 48 Stunden. 14+ Jahre Erfahrung, 600+ aktive Talents, 18 Standorte.'
              : 'Qualifizierte Fachkräfte in 48h. Spezialisiert auf Gesundheit & Soziales.'}
          </motion.p>

          {/* Benefit tags – expand on hover */}
          <AnimatePresence>
            {unternehmenExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap gap-2 mb-7 overflow-hidden"
              >
                {['48h Reaktionszeit', 'Spezialisiert', 'Übernahme möglich', '18 Standorte'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 bg-[#8A84F5]/10 border border-[#8A84F5]/20 rounded-lg px-3 py-1.5 text-[#8A84F5] text-sm"
                  >
                    <Check className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button href="/kontakt" variant="secondary" size={unternehmenExpanded ? 'lg' : 'md'}>
              Personal anfragen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <AnimatePresence>
              {unternehmenExpanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button href="/fuer-unternehmen/vorteile" variant="ghost-dark">
                    Vorteile ansehen
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stats – expand on hover */}
          <AnimatePresence>
            {unternehmenExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex gap-8 mt-8 overflow-hidden"
              >
                {[
                  { icon: Zap, val: '48h', label: 'Reaktionszeit' },
                  { icon: Clock, val: '14+', label: 'Jahre Erfahrung' },
                  { icon: Star, val: '100%', label: 'Spezialisiert' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[#8A84F5] font-black text-2xl">{s.val}</p>
                    <p className="text-white/40 text-xs">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
