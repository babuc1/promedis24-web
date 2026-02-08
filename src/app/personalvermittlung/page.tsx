import { Metadata } from "next";
import {
  UserPlus,
  Search,
  FileCheck,
  Handshake,
  ArrowRight,
  Building2,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Target,
  Users,
  Zap,
  HelpCircle,
} from "lucide-react";
import { Section, Card, Grid, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Personalvermittlung - Direkte Festanstellung",
  description:
    "Fachkräfte direkt in Festanstellung vermittelt. Promedis24 findet die passende Fachkraft für Ihr Team – mit Erfolgsgarantie.",
};

const processSteps = [
  {
    icon: Search,
    step: "1",
    title: "Anforderungsprofil",
    description:
      "Gemeinsam definieren wir das ideale Profil: Qualifikation, Erfahrung, Soft Skills und Teamfit.",
  },
  {
    icon: Users,
    step: "2",
    title: "Active Sourcing",
    description:
      "Wir suchen aktiv in unserem Netzwerk und auf dem Arbeitsmarkt nach passenden Kandidaten.",
  },
  {
    icon: FileCheck,
    step: "3",
    title: "Vorauswahl",
    description:
      "Wir führen Erstgespräche, prüfen Unterlagen und präsentieren Ihnen nur geeignete Kandidaten.",
  },
  {
    icon: Handshake,
    step: "4",
    title: "Vermittlung",
    description:
      "Nach Ihren Gesprächen und Ihrer Entscheidung erfolgt die direkte Anstellung bei Ihnen.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Passgenaue Auswahl",
    description:
      "Wir verstehen Ihre Branche und finden Kandidaten, die fachlich und menschlich passen.",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description:
      "Sie sparen Wochen an Recruiting-Zeit. Wir übernehmen Suche, Screening und Vorauswahl.",
  },
  {
    icon: Shield,
    title: "Erfolgsgarantie",
    description:
      "Sollte die Fachkraft in der Probezeit nicht passen, suchen wir kostenlos Ersatz.",
  },
  {
    icon: Award,
    title: "Branchenexpertise",
    description:
      "14+ Jahre Erfahrung spezialisiert auf Pflege, Pädagogik und Medizin.",
  },
];

const differences = [
  {
    title: "Zeitarbeit",
    subtitle: "Arbeitnehmerüberlassung",
    points: [
      "Fachkraft ist bei Promedis24 angestellt",
      "Sie zahlen Stundensatz an uns",
      "Flexibel bei Bedarf anpassbar",
      "Ideal für temporären Bedarf",
      "Übernahme jederzeit möglich",
    ],
    cta: "Mehr über Zeitarbeit",
    href: "/fuer-unternehmen/zeitarbeit",
    color: "amethyst",
  },
  {
    title: "Personalvermittlung",
    subtitle: "Direkte Festanstellung",
    points: [
      "Fachkraft wird bei Ihnen angestellt",
      "Einmalige Vermittlungsgebühr",
      "Langfristige Bindung an Ihr Unternehmen",
      "Ideal für Dauerstellen",
      "Erfolgsgarantie inklusive",
    ],
    cta: "Jetzt anfragen",
    href: "/kontakt",
    color: "amethyst",
  },
];

const faqs = [
  {
    question: "Wie hoch ist die Vermittlungsgebühr?",
    answer:
      "Die Gebühr richtet sich nach der Position und dem Jahresgehalt. Wir besprechen die Konditionen transparent im Erstgespräch – ohne Überraschungen.",
  },
  {
    question: "Wann wird die Gebühr fällig?",
    answer:
      "Die Vermittlungsgebühr wird erst nach erfolgreichem Arbeitsbeginn der Fachkraft fällig. Kein Erfolg = keine Kosten.",
  },
  {
    question: "Was passiert, wenn es in der Probezeit nicht passt?",
    answer:
      "Sollte das Arbeitsverhältnis innerhalb der Probezeit enden, suchen wir kostenlos einen Ersatzkandidaten für Sie.",
  },
  {
    question: "Kann ich auch Kandidaten aus der Zeitarbeit übernehmen?",
    answer:
      "Ja, absolut! Viele unserer Zeitarbeitskräfte werden von Einrichtungen übernommen. Die Konditionen besprechen wir gerne mit Ihnen.",
  },
];

export default function PersonalvermittlungPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="amethyst" padding="lg">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            <UserPlus size={16} />
            Personalvermittlung
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fachkräfte direkt in Festanstellung
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Sie suchen langfristige Verstärkung für Ihr Team? Wir finden die
            passende Fachkraft und vermitteln sie direkt in Ihre Festanstellung
            – mit Erfolgsgarantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="primary">
              Jetzt Fachkraft finden
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              href="#unterschied"
              className="border-white text-white hover:bg-white hover:text-amethyst"
            >
              Zeitarbeit vs. Vermittlung
            </Button>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section variant="default" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">
            So funktioniert die Vermittlung
          </h2>
          <p className="text-lg text-coal/70 max-w-2xl mx-auto">
            Vom Anforderungsprofil bis zur erfolgreichen Einstellung – unser
            bewährter Prozess.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] right-[-40%] h-0.5 bg-amethyst/20" />
              )}
              <Card className="text-center relative z-10 h-full">
                <div className="w-12 h-12 bg-amethyst text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-coal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-coal/60">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section variant="grey" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">Ihre Vorteile</h2>
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

      {/* Comparison */}
      <Section variant="default" padding="lg" id="unterschied">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">
            Zeitarbeit vs. Personalvermittlung
          </h2>
          <p className="text-lg text-coal/70 max-w-2xl mx-auto">
            Beide Modelle haben ihre Stärken. Wir helfen Ihnen, die richtige
            Wahl für Ihren Bedarf zu treffen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differences.map((model) => (
            <Card
              key={model.title}
              variant={model.color === "turkis" ? "turkis" : "amethyst"}
              className="p-8"
            >
              <h3 className="text-2xl font-bold text-coal mb-1">
                {model.title}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  model.color === "turkis" ? "text-turkis" : "text-amethyst"
                }`}
              >
                {model.subtitle}
              </p>
              <ul className="space-y-3 mb-6">
                {model.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-coal/70">
                    <CheckCircle
                      size={18}
                      className={`flex-shrink-0 mt-0.5 ${
                        model.color === "turkis"
                          ? "text-turkis"
                          : "text-amethyst"
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                href={model.href}
                variant={model.color === "turkis" ? "primary" : "secondary"}
                className="w-full"
              >
                {model.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="coal" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              <HelpCircle size={16} />
              Häufige Fragen
            </span>
            <h2 className="text-3xl font-bold text-white">
              Fragen zur Personalvermittlung
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section variant="grey" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Zap size={32} className="mx-auto text-amethyst mb-3" />
              <p className="text-3xl font-black text-coal">85%</p>
              <p className="text-sm text-coal/60">
                Erfolgreiche Vermittlungen
              </p>
            </div>
            <div>
              <Clock size={32} className="mx-auto text-amethyst mb-3" />
              <p className="text-3xl font-black text-coal">4 Wochen</p>
              <p className="text-sm text-coal/60">
                Durchschnittliche Vermittlungsdauer
              </p>
            </div>
            <div>
              <Users size={32} className="mx-auto text-amethyst mb-3" />
              <p className="text-3xl font-black text-coal">600+</p>
              <p className="text-sm text-coal/60">Fachkräfte im Netzwerk</p>
            </div>
            <div>
              <Shield size={32} className="mx-auto text-amethyst mb-3" />
              <p className="text-3xl font-black text-coal">100%</p>
              <p className="text-sm text-coal/60">Erfolgsgarantie</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="amethyst" padding="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Finden Sie Ihre nächste Fachkraft
          </h2>
          <p className="text-white/70 mb-8">
            Teilen Sie uns Ihren Bedarf mit und wir starten die Suche nach dem
            perfekten Kandidaten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="primary">
              Jetzt anfragen
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              href="/fuer-unternehmen"
              className="border-white text-white hover:bg-white hover:text-amethyst"
            >
              Alle Leistungen
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
