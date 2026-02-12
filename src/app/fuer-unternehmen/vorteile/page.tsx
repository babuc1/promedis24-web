import { Metadata } from "next";
import {
  Clock,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Building2,
  Zap,
  HeartHandshake,
  BadgeCheck,
  Wallet,
  RefreshCw,
  Target,
  Award,
  Phone,
} from "lucide-react";
import { Section, Card, Grid, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ihre Vorteile - Für Unternehmen",
  description:
    "Entdecken Sie die Vorteile einer Zusammenarbeit mit Promedis24: Schnelle Besetzung, qualifiziertes Personal, persönliche Betreuung und faire Konditionen.",
};

const mainBenefits = [
  {
    icon: Zap,
    title: "48h Reaktionszeit",
    description:
      "Sie haben dringenden Personalbedarf? Wir liefern innerhalb von 48 Stunden erste Kandidatenvorschläge.",
    highlight: "48h",
  },
  {
    icon: BadgeCheck,
    title: "Geprüfte Qualifikation",
    description:
      "Alle Fachkräfte werden von uns auf ihre Qualifikationen, Zertifikate und Berufserfahrung geprüft.",
    highlight: "100%",
  },
  {
    icon: HeartHandshake,
    title: "Persönlicher Ansprechpartner",
    description:
      "Ein fester Ansprechpartner kennt Ihre Einrichtung und Ihre Anforderungen – kein Call-Center.",
    highlight: "1:1",
  },
  {
    icon: Target,
    title: "Spezialisierung",
    description:
      "Wir konzentrieren uns ausschließlich auf Pflege, Pädagogik und Medizin – seit über 14 Jahren.",
    highlight: "14+",
  },
];

const detailedBenefits = [
  {
    category: "Flexibilität",
    icon: RefreshCw,
    items: [
      "Schnelle Reaktion auf Personalengpässe",
      "Flexible Vertragslaufzeiten",
      "Anpassung bei sich änderndem Bedarf",
      "Kurzfristige Einsätze möglich",
      "Saisonale Schwankungen abfangen",
    ],
  },
  {
    category: "Kosteneffizienz",
    icon: Wallet,
    items: [
      "Transparente Stundensätze",
      "Keine Recruiting-Kosten",
      "Keine Kosten bei Krankheit/Urlaub",
      "Kein Verwaltungsaufwand",
      "Planbare Personalkosten",
    ],
  },
  {
    category: "Qualitätssicherung",
    icon: Shield,
    items: [
      "Geprüfte Qualifikationen",
      "Regelmäßige Fortbildungen",
      "Einarbeitungsbegleitung",
      "Laufende Feedbackgespräche",
      "Schneller Ersatz bei Bedarf",
    ],
  },
  {
    category: "Entlastung",
    icon: Users,
    items: [
      "Wir übernehmen das Recruiting",
      "Alle Arbeitgeberpflichten bei uns",
      "Lohnabrechnung und Sozialabgaben",
      "Urlaubsplanung und -verwaltung",
      "Sie konzentrieren sich aufs Kerngeschäft",
    ],
  },
];

const comparisonPoints = [
  { aspect: "Recruiting-Zeit", withUs: "48h - 7 Tage", without: "Wochen bis Monate" },
  { aspect: "Recruiting-Kosten", withUs: "Inklusive", without: "5.000 - 15.000 EUR" },
  { aspect: "Ausfallrisiko", withUs: "Ersatz durch uns", without: "Ihr Problem" },
  { aspect: "Verwaltungsaufwand", withUs: "Minimal", without: "Erheblich" },
  { aspect: "Flexibilität", withUs: "Hoch", without: "Eingeschränkt" },
  { aspect: "Übernahmeoption", withUs: "Ja, jederzeit", without: "Nicht relevant" },
];

export default function VorteilePage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="amethyst-dark" padding="lg">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            <Building2 size={16} />
            Für Unternehmen
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ihre Vorteile mit Promedis24
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Qualifiziertes Personal, persönliche Betreuung, faire Konditionen –
            entdecken Sie, warum über 500 Einrichtungen uns vertrauen.
          </p>
          <Button
            href="/kontakt?type=unternehmen"
            variant="ghost"
            className="bg-white !text-amethyst hover:bg-white/90"
          >
            Jetzt Vorteile nutzen
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </Section>

      {/* Main Benefits Grid */}
      <Section variant="default" padding="lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainBenefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-amethyst-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={32} className="text-amethyst" />
              </div>
              <p className="text-3xl font-black text-amethyst mb-2">
                {benefit.highlight}
              </p>
              <h3 className="text-lg font-bold text-coal mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-coal/60">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Detailed Benefits */}
      <Section variant="grey" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">
            Alle Vorteile im Detail
          </h2>
          <p className="text-lg text-coal/70 max-w-2xl mx-auto">
            Von Flexibilität über Kosteneffizienz bis zur Qualitätssicherung –
            wir machen Personalmanagement einfach.
          </p>
        </div>

        <Grid cols={2} gap="lg">
          {detailedBenefits.map((section) => (
            <Card key={section.category}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amethyst/10 rounded-lg flex items-center justify-center">
                  <section.icon size={20} className="text-amethyst" />
                </div>
                <h3 className="text-xl font-bold text-coal">
                  {section.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
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
          ))}
        </Grid>
      </Section>

      {/* Comparison Table */}
      <Section variant="default" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coal mb-4">
              Der Vergleich
            </h2>
            <p className="text-lg text-coal/70">
              Zeitarbeit mit Promedis24 vs. klassische Festanstellung
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-grey">
                    <th className="text-left p-4 font-bold text-coal">Aspekt</th>
                    <th className="text-center p-4 font-bold text-amethyst bg-amethyst/5">
                      Mit Promedis24
                    </th>
                    <th className="text-center p-4 font-bold text-coal/50">
                      Ohne uns
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, i) => (
                    <tr
                      key={point.aspect}
                      className={i % 2 === 0 ? "bg-grey/30" : ""}
                    >
                      <td className="p-4 font-medium text-coal">
                        {point.aspect}
                      </td>
                      <td className="p-4 text-center text-amethyst font-semibold bg-amethyst/5">
                        {point.withUs}
                      </td>
                      <td className="p-4 text-center text-coal/50">
                        {point.without}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      {/* Trust Section */}
      <Section variant="coal" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Warum Einrichtungen uns vertrauen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award size={40} className="mx-auto text-amethyst mb-4" />
              <p className="text-3xl font-black text-white mb-2">14+</p>
              <p className="text-white/60">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <Users size={40} className="mx-auto text-amethyst mb-4" />
              <p className="text-3xl font-black text-white mb-2">600+</p>
              <p className="text-white/60">Aktive Fachkräfte</p>
            </div>
            <div className="text-center">
              <Building2 size={40} className="mx-auto text-amethyst mb-4" />
              <p className="text-3xl font-black text-white mb-2">18</p>
              <p className="text-white/60">Standorte bundesweit</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section variant="grey" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <Card variant="amethyst" className="p-8">
            <p className="text-xl text-coal italic mb-6">
              &ldquo;Mit Promedis24 haben wir einen Partner, der unsere Branche
              versteht – nicht nur Schichten füllt. Die persönliche Betreuung
              und die Qualität der Fachkräfte überzeugen uns seit Jahren.&rdquo;
            </p>
            <div>
              <p className="font-bold text-coal">AWO München</p>
              <p className="text-sm text-coal/60">Träger der Sozialwirtschaft</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="amethyst-dark" padding="lg">
        <div className="text-center max-w-2xl mx-auto">
          <Phone size={40} className="mx-auto text-white/80 mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-white/70 mb-8">
            Lassen Sie uns über Ihren Personalbedarf sprechen – unverbindlich
            und kostenlos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/kontakt?type=unternehmen"
              variant="ghost"
              className="bg-white !text-amethyst hover:bg-white/90"
            >
              Personal anfragen
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="ghost-dark"
              href="/fuer-unternehmen/prozess"
              className="border border-white/30"
            >
              Unser Prozess
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
