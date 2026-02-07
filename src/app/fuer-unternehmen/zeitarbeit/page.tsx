import { Metadata } from "next";
import {
  Clock,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Building2,
  Briefcase,
  Scale,
} from "lucide-react";
import { Section, Card, Grid, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Was ist Zeitarbeit? - Für Unternehmen",
  description:
    "Erfahren Sie, wie Zeitarbeit funktioniert und welche Vorteile sie für Ihr Unternehmen bietet. Flexible Personallösungen von Promedis24.",
};

const myths = [
  {
    myth: "Zeitarbeit ist nur für kurzfristige Einsätze",
    truth:
      "Zeitarbeit eignet sich sowohl für kurzfristige Engpässe als auch für langfristige Personalplanung. Viele unserer Fachkräfte sind seit Jahren bei denselben Einrichtungen im Einsatz.",
  },
  {
    myth: "Zeitarbeitskräfte sind weniger qualifiziert",
    truth:
      "Unsere Fachkräfte verfügen über dieselben Qualifikationen wie Festangestellte. Wir prüfen alle Zertifikate, Berufserfahrung und fachliche Kompetenz sorgfältig.",
  },
  {
    myth: "Zeitarbeit ist teurer als Festanstellung",
    truth:
      "Wenn Sie alle Kosten einrechnen (Recruiting, Ausfallzeiten, Verwaltung, Sozialleistungen), ist Zeitarbeit oft kostengünstiger – besonders bei schwankendem Bedarf.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Flexibilität",
    description:
      "Reagieren Sie schnell auf Personalengpässe, saisonale Schwankungen oder unerwartete Ausfälle.",
  },
  {
    icon: Shield,
    title: "Planungssicherheit",
    description:
      "Wir kümmern uns um Recruiting, Verwaltung und Ersatz bei Ausfall – Sie konzentrieren sich auf Ihr Kerngeschäft.",
  },
  {
    icon: TrendingUp,
    title: "Kostenkontrolle",
    description:
      "Transparente Stundensätze ohne versteckte Kosten. Sie zahlen nur für tatsächlich geleistete Arbeit.",
  },
  {
    icon: Users,
    title: "Übernahmeoption",
    description:
      "Lernen Sie Fachkräfte im Arbeitsalltag kennen und übernehmen Sie sie bei Bedarf in Festanstellung.",
  },
];

const process = [
  {
    step: "1",
    title: "Arbeitnehmerüberlassung",
    description:
      "Die Fachkraft ist bei Promedis24 angestellt und wird an Ihre Einrichtung überlassen.",
  },
  {
    step: "2",
    title: "Fachliche Weisung",
    description:
      "Sie erteilen der Fachkraft fachliche Weisungen und integrieren sie in Ihr Team.",
  },
  {
    step: "3",
    title: "Arbeitgeber-pflichten",
    description:
      "Promedis24 übernimmt alle Arbeitgeberpflichten: Gehalt, Sozialversicherung, Urlaub.",
  },
];

export default function ZeitarbeitPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="amethyst" padding="lg">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-coal rounded-full text-sm font-medium mb-6">
            <Building2 size={16} />
            Für Unternehmen
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-coal mb-6">
            Was ist Zeitarbeit?
          </h1>
          <p className="text-lg text-coal/80 mb-8 max-w-2xl">
            Zeitarbeit – auch Arbeitnehmerüberlassung genannt – ist ein
            flexibles Personalmodell, bei dem qualifizierte Fachkräfte von einem
            Personaldienstleister an Unternehmen überlassen werden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/kontakt"
              className="bg-amethyst text-white hover:bg-amethyst-dark"
            >
              Personal anfragen
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              href="/fuer-unternehmen/prozess"
              className="border-coal text-coal hover:bg-coal hover:text-white"
            >
              Unser Prozess
            </Button>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section variant="default" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">
            So funktioniert Zeitarbeit
          </h2>
          <p className="text-lg text-coal/70 max-w-2xl mx-auto">
            Das Dreiecksverhältnis zwischen Personaldienstleister, Fachkraft und
            Ihrem Unternehmen einfach erklärt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {process.map((item) => (
            <Card key={item.step} className="text-center relative">
              <div className="w-12 h-12 bg-amethyst text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-coal mb-2">{item.title}</h3>
              <p className="text-coal/70">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Visual diagram */}
        <Card variant="amethyst" className="p-8">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            <div>
              <div className="w-16 h-16 bg-amethyst rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Briefcase size={32} className="text-white" />
              </div>
              <h4 className="font-bold text-coal">Promedis24</h4>
              <p className="text-sm text-coal/60">Arbeitgeber</p>
            </div>
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-20 h-0.5 bg-amethyst/30" />
                <Scale size={24} className="text-amethyst" />
                <div className="w-20 h-0.5 bg-amethyst/30" />
              </div>
              <p className="text-xs text-coal/50">Überlassungsvertrag</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amethyst rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Building2 size={32} className="text-white" />
              </div>
              <h4 className="font-bold text-coal">Ihre Einrichtung</h4>
              <p className="text-sm text-coal/60">Einsatzort</p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-turkis rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Users size={32} className="text-white" />
              </div>
              <h4 className="font-bold text-coal">Fachkraft</h4>
              <p className="text-sm text-coal/60">Arbeitnehmer</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Benefits */}
      <Section variant="grey" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">
            Ihre Vorteile mit Zeitarbeit
          </h2>
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

      {/* Myths */}
      <Section variant="default" padding="lg">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amethyst/10 text-amethyst rounded-full text-sm font-medium mb-4">
            <HelpCircle size={16} />
            Faktencheck
          </span>
          <h2 className="text-3xl font-bold text-coal mb-4">
            Mythen vs. Realität
          </h2>
          <p className="text-lg text-coal/70 max-w-2xl mx-auto">
            Wir räumen mit den häufigsten Vorurteilen über Zeitarbeit auf.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {myths.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6 bg-coal/5">
                  <p className="text-xs font-bold text-coal/40 uppercase tracking-wider mb-2">
                    Mythos
                  </p>
                  <p className="text-coal font-medium italic">
                    &ldquo;{item.myth}&rdquo;
                  </p>
                </div>
                <div className="p-6 bg-amethyst/5">
                  <p className="text-xs font-bold text-amethyst uppercase tracking-wider mb-2">
                    Realität
                  </p>
                  <p className="text-coal/80">{item.truth}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Legal info */}
      <Section variant="coal" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Rechtlicher Rahmen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Arbeitnehmerüberlassungsgesetz (AÜG) regelt alle Rechte und Pflichten",
              "Equal Pay: Zeitarbeitnehmer haben Anspruch auf gleiches Entgelt",
              "Maximale Überlassungsdauer: 18 Monate (mit Ausnahmen)",
              "Promedis24 ist zertifizierter Personaldienstleister mit Erlaubnis der Bundesagentur",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle
                  size={24}
                  className="text-amethyst flex-shrink-0 mt-0.5"
                />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="amethyst" padding="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-coal mb-4">
            Bereit für flexible Personallösungen?
          </h2>
          <p className="text-coal/70 mb-8">
            Kontaktieren Sie uns und erfahren Sie, wie Zeitarbeit Ihrem
            Unternehmen helfen kann.
          </p>
          <Button
            href="/kontakt"
            className="bg-amethyst text-white hover:bg-amethyst-dark"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </Section>
    </>
  );
}
