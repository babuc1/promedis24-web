'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Plane, Euro, Calendar, UserCheck, MapPin,
  ChevronDown, ArrowRight, Quote
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Grid';
import { TapeStrip } from '@/components/ui/TapeStrip';
import onTourData from '@/content/on-tour/index.json';

const iconMap: Record<string, React.ElementType> = {
  Home, Plane, Euro, Calendar, UserCheck, MapPin,
};

// FAQ Accordion Item
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-[#002D32]/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-bold text-[#002D32] group-hover:text-[#23D2AF] transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#23D2AF]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#002D32]/70 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function OnTourPage() {
  return (
    <main>
      {/* HERO */}
      <Section variant="coal">
        <div className="relative py-16 md:py-24">
          {/* Decorative map dots background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {onTourData.destinations.map((dest, i) => (
              <motion.div
                key={dest.city}
                className="absolute w-3 h-3 rounded-full bg-[#23D2AF]"
                style={{
                  left: `${10 + (i * 10) % 80}%`,
                  top: `${15 + (i * 15) % 70}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl">
            <TapeStrip className="mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#23D2AF] font-bold text-sm tracking-widest uppercase mb-4"
            >
              Promedis24 Programm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-4"
            >
              {onTourData.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-[#23D2AF] font-bold mb-6"
            >
              {onTourData.hero.subline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              {onTourData.hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/bewerben" variant="primary" size="lg">
                Jetzt On-Tour bewerben
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="#so-funktionierts" variant="ghost-dark" size="lg">
                So funktioniert&apos;s
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section variant="default">
        <div className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#002D32] mb-4">
              Was On-Tour dir bietet
            </h2>
            <p className="text-lg text-[#002D32]/70 max-w-2xl mx-auto">
              Alles organisiert, alles bezahlt. Du konzentrierst dich aufs Arbeiten und Entdecken.
            </p>
          </motion.div>

          <Grid cols={3}>
            {onTourData.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || MapPin;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="turkis" className="h-full p-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#23D2AF]/20 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-[#23D2AF]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#002D32] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[#002D32]/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </Grid>
        </div>
      </Section>

      {/* DESTINATIONS MAP */}
      <Section variant="turkis">
        <div className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#002D32] mb-4">
              Deine möglichen Einsatzorte
            </h2>
            <p className="text-lg text-[#002D32]/70 max-w-2xl mx-auto">
              Vom Nordseestrand bis zum Alpenrand – du entscheidest, wo es hingeht.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {onTourData.destinations.map((dest, index) => (
              <motion.div
                key={dest.city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white rounded-2xl p-5 text-center shadow-sm cursor-default"
              >
                <MapPin className="w-6 h-6 text-[#23D2AF] mx-auto mb-2" />
                <p className="font-bold text-[#002D32]">{dest.city}</p>
                <p className="text-sm text-[#002D32]/50">{dest.region}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#002D32]/60 mt-8 text-sm"
          >
            + viele weitere Einsatzorte bundesweit. Sag uns einfach, wo du hin möchtest.
          </motion.p>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section variant="default" id="so-funktionierts">
        <div className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#002D32] mb-4">
              So funktioniert On-Tour
            </h2>
            <p className="text-lg text-[#002D32]/70 max-w-2xl mx-auto">
              In vier Schritten vom Sofa auf Tour.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {onTourData.howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 mb-10 last:mb-0"
              >
                {/* Step number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#23D2AF] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">{step.step}</span>
                  </div>
                  {index < onTourData.howItWorks.length - 1 && (
                    <div className="w-0.5 h-full bg-[#23D2AF]/20 mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-[#002D32] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#002D32]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section variant="grey">
        <div className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#002D32] mb-4">
              Das sagen unsere On-Tour-Talents
            </h2>
          </motion.div>

          <Grid cols={3}>
            {onTourData.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card variant="tape" className="h-full p-8">
                  <Quote className="w-8 h-8 text-[#23D2AF]/30 mb-4" />
                  <p className="text-[#002D32] italic leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-[#002D32]/10 pt-4">
                    <p className="font-bold text-[#002D32]">{testimonial.name}</p>
                    <p className="text-sm text-[#002D32]/60">{testimonial.role}</p>
                    <p className="text-sm text-[#23D2AF]">{testimonial.location}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="default">
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#002D32] mb-4">
                Häufige Fragen
              </h2>
            </motion.div>

            <div>
              {onTourData.faq.map((item, index) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="coal">
        <div className="py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TapeStrip className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Bereit für dein Abenteuer?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Bewirb dich jetzt und finde heraus, wo dein nächster Einsatz dich hinführt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/bewerben" variant="primary" size="lg">
                In 60 Sek. bewerben
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/standorte" variant="ghost-dark" size="lg">
                Standorte entdecken
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
