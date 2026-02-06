import { Metadata } from "next";
import { Award, Users, MapPin, Heart } from "lucide-react";
import { Section, Card, Grid, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Promedis24 kennen - Ihr Partner für Zeitarbeit in Pflege, Pädagogik und Medizin seit 2011.",
};

const timeline = [
  { year: "2011", title: "Gründung", description: "Promedis24 wird gegründet" },
  { year: "2014", title: "Expansion", description: "Erste Standorte in Norddeutschland" },
  { year: "2017", title: "Wachstum", description: "Über 300 aktive Mitarbeiter" },
  { year: "2020", title: "Digital", description: "Digitalisierung aller Prozesse" },
  { year: "2023", title: "Heute", description: "600+ Talents, 50+ Standorte" },
];

const values = [
  {
    icon: Heart,
    title: "Menschlichkeit",
    description: "Der Mensch steht bei uns immer im Mittelpunkt.",
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Wir setzen auf höchste Standards in allem, was wir tun.",
  },
  {
    icon: Users,
    title: "Partnerschaft",
    description: "Gemeinsam sind wir stärker - für Bewerber und Kunden.",
  },
  {
    icon: MapPin,
    title: "Nähe",
    description: "Deutschlandweit vor Ort - persönlich und erreichbar.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="turkis" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-coal mb-6">
            Über Promedis24
          </h1>
          <p className="text-lg text-coal/80">
            Seit 2011 verbinden wir Menschen mit ihrer Berufung. Als
            spezialisierter Personaldienstleister in Pflege, Pädagogik und
            Medizin setzen wir auf Qualität, Nähe und echte Partnerschaft.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section variant="coal" padding="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-turkis mb-2">14+</p>
            <p className="text-white/80">Jahre Erfahrung</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-turkis mb-2">600+</p>
            <p className="text-white/80">Zufriedene Talents</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-turkis mb-2">50+</p>
            <p className="text-white/80">Standorte</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-turkis mb-2">4.6</p>
            <p className="text-white/80">Sterne Bewertung</p>
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section variant="default" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-coal mb-6">Unsere Geschichte</h2>
            <p className="text-coal/70 mb-4">
              Promedis24 wurde 2011 mit einer klaren Vision gegründet:
              Zeitarbeit anders zu machen. Wir wollten beweisen, dass
              Personaldienstleistung fair, transparent und menschlich sein kann.
            </p>
            <p className="text-coal/70 mb-4">
              Heute sind wir einer der führenden Personaldienstleister im
              Gesundheits- und Sozialwesen. Mit über 600 aktiven Mitarbeitern
              und Standorten in ganz Deutschland verbinden wir täglich
              qualifizierte Fachkräfte mit Einrichtungen, die sie brauchen.
            </p>
            <p className="text-coal/70">
              Was uns antreibt? Die Überzeugung, dass gute Arbeit Wertschätzung
              verdient – und dass glückliche Mitarbeiter die beste Pflege
              leisten.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-turkis/20" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-turkis rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <span className="text-turkis font-bold">{item.year}</span>
                    <h3 className="font-bold text-coal">{item.title}</h3>
                    <p className="text-sm text-coal/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section variant="grey" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coal mb-4">Unsere Werte</h2>
          <p className="text-lg text-coal/70 max-w-2xl mx-auto">
            Diese Werte leiten uns jeden Tag – in der Zusammenarbeit mit unseren
            Mitarbeitern, Kunden und Partnern.
          </p>
        </div>

        <Grid cols={4} gap="md">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <div className="w-14 h-14 bg-turkis-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon size={28} className="text-turkis" />
              </div>
              <h3 className="font-bold text-coal mb-2">{value.title}</h3>
              <p className="text-sm text-coal/70">{value.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section variant="turkis" padding="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-coal mb-4">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="text-coal/80 mb-8">
            Ob als Fachkraft auf der Suche nach dem perfekten Job oder als
            Einrichtung mit Personalbedarf – wir freuen uns auf Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/bewerben" className="bg-white text-turkis hover:bg-white/90">
              Jetzt bewerben
            </Button>
            <Button
              href="/kontakt"
              variant="outline"
              className="border-coal text-coal hover:bg-coal hover:text-white"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
