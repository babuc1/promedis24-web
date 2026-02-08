import { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Users,
  Shield,
  HeartHandshake,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Section, Card, Grid, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Für Unternehmen - Personaldienstleistung",
  description:
    "Promedis24 ist Ihr Partner für qualifiziertes Personal in Pflege, Pädagogik und Medizin. Schnelle Besetzung, persönliche Betreuung, faire Konditionen.",
};

const benefits = [
  {
    icon: Clock,
    title: "Schnelle Besetzung",
    description:
      "Innerhalb von 24-48 Stunden stellen wir Ihnen passende Kandidaten vor.",
  },
  {
    icon: Users,
    title: "Qualifiziertes Personal",
    description:
      "Nur geprüfte Fachkräfte mit aktuellen Zertifikaten und Erfahrung.",
  },
  {
    icon: Shield,
    title: "Zuverlässigkeit",
    description:
      "14 Jahre Erfahrung und über 600 zufriedene Mitarbeiter sprechen für uns.",
  },
  {
    icon: HeartHandshake,
    title: "Persönliche Betreuung",
    description:
      "Ein fester Ansprechpartner kümmert sich um alle Ihre Anliegen.",
  },
];

const stats = [
  { value: "14+", label: "Jahre Erfahrung" },
  { value: "600+", label: "Aktive Talents" },
  { value: "4.6", label: "Sterne Bewertung" },
  { value: "24h", label: "Reaktionszeit" },
];

export default function FuerUnternehmenPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="amethyst" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              Für Unternehmen
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Qualifiziertes Personal für Ihre Einrichtung
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Sie suchen Fachkräfte in Pflege, Pädagogik oder Medizin? Promedis24
              findet die passenden Talente für Sie – schnell, zuverlässig und
              mit persönlicher Betreuung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                href="/kontakt"
                className="bg-white text-amethyst hover:bg-white/90"
              >
                Personal anfragen
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                href="/fuer-unternehmen/prozess"
                className="border-white text-white hover:bg-white hover:text-amethyst"
              >
                Unser Prozess
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/20 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <Users size={64} className="mx-auto text-white mb-4" />
                <p className="text-lg font-medium text-white">
                  Vertrauen Sie auf über 14 Jahre Erfahrung
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section variant="default" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">
            Ihre Vorteile mit Promedis24
          </h2>
          <p className="text-lg text-coal/70 max-w-2xl mx-auto">
            Wir verstehen die Herausforderungen im Gesundheits- und Sozialwesen
            und bieten Lösungen, die funktionieren.
          </p>
        </div>

        <Grid cols={2} gap="lg">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="flex gap-4">
              <div className="w-14 h-14 bg-amethyst-light rounded-xl flex items-center justify-center flex-shrink-0">
                <benefit.icon size={28} className="text-amethyst" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-coal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-coal/70">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Services Overview */}
      <Section variant="grey" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">
            Unsere Leistungen
          </h2>
        </div>

        <Grid cols={3} gap="md">
          <Link href="/fuer-unternehmen/zeitarbeit">
            <Card hoverable className="h-full text-center">
              <h3 className="text-xl font-bold text-coal mb-2">Zeitarbeit</h3>
              <p className="text-coal/70 mb-4">
                Flexible Personalüberlassung für kurz- und langfristige
                Einsätze.
              </p>
              <span className="text-amethyst font-medium">Mehr erfahren &rarr;</span>
            </Card>
          </Link>

          <Link href="/personalvermittlung">
            <Card hoverable className="h-full text-center">
              <h3 className="text-xl font-bold text-coal mb-2">
                Personalvermittlung
              </h3>
              <p className="text-coal/70 mb-4">
                Direkte Vermittlung von Fachkräften in Festanstellung.
              </p>
              <span className="text-amethyst font-medium">Mehr erfahren &rarr;</span>
            </Card>
          </Link>

          <Link href="/fuer-unternehmen/prozess">
            <Card hoverable className="h-full text-center">
              <h3 className="text-xl font-bold text-coal mb-2">Unser Prozess</h3>
              <p className="text-coal/70 mb-4">
                Transparent und effizient – so arbeiten wir für Sie.
              </p>
              <span className="text-amethyst font-medium">Mehr erfahren &rarr;</span>
            </Card>
          </Link>
        </Grid>
      </Section>

      {/* Trust Section */}
      <Section variant="default" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-coal mb-6">
              Warum Einrichtungen uns vertrauen
            </h2>

            <ul className="space-y-4">
              {[
                "Über 14 Jahre Erfahrung in der Personaldienstleistung",
                "Spezialisiert auf Pflege, Pädagogik und Medizin",
                "Persönliche Ansprechpartner in ganz Deutschland",
                "Transparente Konditionen ohne versteckte Kosten",
                "Hohe Mitarbeiterzufriedenheit = motiviertes Personal",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    className="text-amethyst flex-shrink-0 mt-0.5"
                  />
                  <span className="text-coal/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card variant="amethyst" className="p-8">
            <h3 className="text-2xl font-bold text-coal mb-4">
              Jetzt Personal anfragen
            </h3>
            <p className="text-coal/70 mb-6">
              Teilen Sie uns Ihren Bedarf mit und wir melden uns innerhalb von
              24 Stunden bei Ihnen.
            </p>
            <Button
              href="/kontakt"
              className="bg-amethyst text-white hover:bg-amethyst-dark"
              fullWidth
            >
              Kontakt aufnehmen
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}
