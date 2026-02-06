"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Euro,
  ShieldCheck,
  CalendarCheck,
  Cake,
  Gift,
  Heart,
} from "lucide-react";
import { Section, Card, Button, Grid } from "@/components/ui";

const benefits = [
  {
    icon: Euro,
    title: "Übertarifliche Bezahlung",
    description: "Verdiene mehr als im Tarifvertrag. Dazu kommen Zulagen und Boni.",
    href: "/benefits/uebertarifliche-bezahlung",
    color: "turkis",
  },
  {
    icon: ShieldCheck,
    title: "Unbefristete Festanstellung",
    description: "Sicherheit durch unbefristeten Arbeitsvertrag bei Promedis24.",
    href: "/benefits/unbefristete-festanstellung",
    color: "turkis",
  },
  {
    icon: CalendarCheck,
    title: "Wunsch-Dienstplan",
    description: "Du bestimmst, wann du arbeitest. Volle Flexibilität garantiert.",
    href: "/benefits/wunsch-dienstplan",
    color: "turkis",
  },
  {
    icon: Cake,
    title: "Geburtstagsfrei",
    description: "An deinem Geburtstag hast du frei – natürlich bezahlt.",
    href: "/benefits/geburtstagsfrei",
    color: "amethyst",
  },
  {
    icon: Gift,
    title: "Empfehlungsbonus",
    description: "Empfehle uns weiter und verdiene extra. Jede Empfehlung zählt.",
    href: "/benefits/empfehlungsbonus",
    color: "amethyst",
  },
  {
    icon: Heart,
    title: "Persönlicher Ansprechpartner",
    description: "Ein fester Ansprechpartner, der immer für dich da ist.",
    href: "/benefits/persoenlicher-ansprechpartner",
    color: "amethyst",
  },
];

export function BenefitsPreview() {
  return (
    <Section variant="grey" padding="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-2 bg-turkis/10 text-turkis rounded-full text-sm font-medium mb-4">
          Deine Vorteile
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-coal mb-4">
          Warum Promedis24?
        </h2>
        <p className="text-lg text-coal/70 max-w-2xl mx-auto">
          Zeitarbeit, die sich nach dir richtet – mit echten Benefits, die
          deinen Alltag besser machen.
        </p>
      </motion.div>

      <Grid cols={3} gap="md">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={benefit.href}>
              <Card hoverable className="h-full">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    benefit.color === "turkis"
                      ? "bg-turkis-light text-turkis"
                      : "bg-amethyst-light text-amethyst"
                  }`}
                >
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-coal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-coal/70 text-sm">{benefit.description}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Button variant="outline" href="/benefits">
          Alle Benefits entdecken
        </Button>
      </motion.div>
    </Section>
  );
}
