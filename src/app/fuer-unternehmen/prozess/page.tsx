import { Metadata } from "next";
import {
  Phone,
  Search,
  UserCheck,
  Rocket,
  MessageSquare,
  FileCheck,
  Clock,
  ArrowRight,
  Building2,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Section, Card, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Unser Prozess - Für Unternehmen",
  description:
    "Vom ersten Kontakt bis zum Einsatz: So finden wir die passende Fachkraft für Ihr Unternehmen. Transparent, schnell und persönlich.",
};

const processSteps = [
  {
    icon: Phone,
    step: "1",
    title: "Anfrage",
    timing: "Tag 1",
    description:
      "Sie kontaktieren uns mit Ihrem Personalbedarf. Telefonisch, per E-Mail oder über unser Kontaktformular.",
    details: [
      "Welche Qualifikation wird benötigt?",
      "Wann soll der Einsatz starten?",
      "Wie lange ist der Bedarf geplant?",
      "Welche Schichten sind zu besetzen?",
    ],
  },
  {
    icon: MessageSquare,
    step: "2",
    title: "Bedarfsanalyse",
    timing: "Tag 1",
    description:
      "Ihr persönlicher Ansprechpartner bespricht alle Details mit Ihnen und versteht Ihre Anforderungen.",
    details: [
      "Fachliche Anforderungen klären",
      "Teamkultur verstehen",
      "Besonderheiten der Einrichtung",
      "Erwartungen abstimmen",
    ],
  },
  {
    icon: Search,
    step: "3",
    title: "Matching",
    timing: "Tag 1-3",
    description:
      "Wir durchsuchen unseren Pool von über 600 aktiven Fachkräften und finden passende Kandidaten.",
    details: [
      "Qualifikationsabgleich",
      "Verfügbarkeitsprüfung",
      "Standort-Matching",
      "Persönlichkeitsfit",
    ],
  },
  {
    icon: UserCheck,
    step: "4",
    title: "Vorstellung",
    timing: "Tag 3-5",
    description:
      "Wir stellen Ihnen geeignete Kandidaten vor. Sie entscheiden, wen Sie kennenlernen möchten.",
    details: [
      "Anonymisiertes Kurzprofil",
      "Qualifikationsnachweis",
      "Persönliches Gespräch (optional)",
      "Ihre Entscheidung zählt",
    ],
  },
  {
    icon: FileCheck,
    step: "5",
    title: "Vertragsabschluss",
    timing: "Tag 5-7",
    description:
      "Nach Ihrer Zusage erstellen wir den Überlassungsvertrag mit transparenten Konditionen.",
    details: [
      "Klare Stundensätze",
      "Flexible Laufzeiten",
      "Übernahmeklausel",
      "Keine versteckten Kosten",
    ],
  },
  {
    icon: Rocket,
    step: "6",
    title: "Einsatzstart",
    timing: "Ab Tag 7",
    description:
      "Die Fachkraft beginnt in Ihrer Einrichtung. Wir begleiten die Einarbeitung und bleiben Ihr Ansprechpartner.",
    details: [
      "Einarbeitungsbegleitung",
      "Regelmäßige Check-ins",
      "Schnelle Reaktion bei Fragen",
      "Laufende Qualitätssicherung",
    ],
  },
];

const advantages = [
  {
    icon: Clock,
    title: "48h Reaktionszeit",
    description: "Erste Kandidatenvorschläge innerhalb von 48 Stunden",
  },
  {
    icon: Zap,
    title: "Schneller Einsatzstart",
    description: "Von der Anfrage zum Einsatz in durchschnittlich 7 Tagen",
  },
  {
    icon: UserCheck,
    title: "Persönliche Betreuung",
    description: "Ein fester Ansprechpartner für alle Ihre Anliegen",
  },
];

export default function ProzessPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="amethyst" padding="lg">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            <Building2 size={16} />
            Für Unternehmen
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unser Prozess
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Vom ersten Kontakt bis zum erfolgreichen Einsatz – transparent,
            schnell und persönlich. So finden wir die passende Fachkraft für Ihr
            Team.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {advantages.map((adv) => (
              <div key={adv.title} className="text-center">
                <adv.icon size={24} className="mx-auto text-white mb-2" />
                <p className="font-bold text-white text-sm">{adv.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Timeline */}
      <Section variant="default" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-coal mb-4">
            In 6 Schritten zu Ihrer Fachkraft
          </h2>
          <p className="text-lg text-coal/70 max-w-2xl mx-auto">
            Unser bewährter Prozess sorgt dafür, dass Sie schnell und
            zuverlässig die richtige Unterstützung bekommen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-amethyst/20" />
              )}

              <div className="flex gap-6 pb-12">
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amethyst text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-coal">
                          {item.title}
                        </h3>
                        <span className="px-2 py-1 bg-amethyst/10 text-amethyst text-xs font-bold rounded">
                          {item.timing}
                        </span>
                      </div>
                      <p className="text-coal/70 mb-4">{item.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {item.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-coal/60"
                          >
                            <CheckCircle
                              size={14}
                              className="text-amethyst flex-shrink-0"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden md:flex w-16 h-16 bg-amethyst-light rounded-xl items-center justify-center flex-shrink-0">
                      <item.icon size={28} className="text-amethyst" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What we need */}
      <Section variant="grey" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coal mb-4">
              Was wir von Ihnen brauchen
            </h2>
            <p className="text-lg text-coal/70">
              Um Ihnen schnell die passende Fachkraft zu finden, benötigen wir
              einige Informationen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-bold text-coal mb-4">Pflichtangaben</h3>
              <ul className="space-y-3">
                {[
                  "Benötigte Qualifikation (z.B. Pflegefachkraft, Erzieher)",
                  "Einsatzort / Adresse",
                  "Gewünschter Einsatzbeginn",
                  "Arbeitszeiten / Schichtmodell",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-coal/70">
                    <CheckCircle
                      size={18}
                      className="text-amethyst flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="font-bold text-coal mb-4">Hilfreich zu wissen</h3>
              <ul className="space-y-3">
                {[
                  "Voraussichtliche Einsatzdauer",
                  "Besondere Anforderungen (z.B. Führerschein)",
                  "Teamgröße und -struktur",
                  "Übernahmeinteresse nach Einsatz",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-coal/70">
                    <CheckCircle
                      size={18}
                      className="text-coal/30 flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* After placement */}
      <Section variant="coal" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Nach dem Einsatzstart
          </h2>
          <p className="text-white/70 mb-8">
            Unsere Zusammenarbeit endet nicht mit dem ersten Arbeitstag. Wir
            bleiben Ihr Partner.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Regelmäßige Check-ins",
                desc: "Wir fragen aktiv nach Zufriedenheit – bei Ihnen und der Fachkraft.",
              },
              {
                title: "Schneller Support",
                desc: "Bei Fragen oder Problemen sind wir sofort für Sie da.",
              },
              {
                title: "Flexible Anpassung",
                desc: "Bedarf ändert sich? Wir passen Einsatzzeiten oder Personal an.",
              },
            ].map((item) => (
              <div key={item.title} className="text-left">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="amethyst" padding="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Starten Sie jetzt
          </h2>
          <p className="text-white/70 mb-8">
            Kontaktieren Sie uns noch heute und erhalten Sie innerhalb von 48
            Stunden erste Kandidatenvorschläge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/kontakt"
              className="bg-amethyst text-white hover:bg-amethyst-dark"
            >
              Personal anfragen
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              href="/fuer-unternehmen/vorteile"
              className="border-white text-white hover:bg-white hover:text-amethyst"
            >
              Ihre Vorteile ansehen
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
