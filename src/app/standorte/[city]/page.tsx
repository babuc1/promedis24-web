import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Mail, User, ArrowLeft } from "lucide-react";
import { Section, Card, Button, Grid } from "@/components/ui";

// Import location data
import berlinData from "@/content/locations/berlin.json";
import muenchenData from "@/content/locations/muenchen.json";
import hamburgData from "@/content/locations/hamburg.json";
import nuernbergData from "@/content/locations/nuernberg.json";
import koelnData from "@/content/locations/koeln.json";
import duesseldorfData from "@/content/locations/duesseldorf.json";
import frankfurtData from "@/content/locations/frankfurt.json";
import leipzigData from "@/content/locations/leipzig.json";
import friedrichshafenData from "@/content/locations/friedrichshafen.json";

const locationsMap: Record<string, typeof berlinData> = {
  berlin: berlinData,
  muenchen: muenchenData,
  hamburg: hamburgData,
  nuernberg: nuernbergData,
  koeln: koelnData,
  duesseldorf: duesseldorfData,
  frankfurt: frankfurtData,
  leipzig: leipzigData,
  friedrichshafen: friedrichshafenData,
};

export async function generateStaticParams() {
  return Object.keys(locationsMap).map((city) => ({
    city,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = locationsMap[city];

  if (!location) {
    return {
      title: "Standort nicht gefunden",
    };
  }

  return {
    title: `Zeitarbeit in ${location.city} - Promedis24 ${location.city}`,
    description: `Promedis24 ${location.city} - Ihr Partner für Zeitarbeit in Pflege, Pädagogik und Medizin. Kontaktieren Sie uns: ${location.phone}`,
  };
}

export default async function StandortPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = locationsMap[city];

  if (!location) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <Section variant="turkis" padding="lg">
        <Link
          href="/standorte"
          className="inline-flex items-center gap-2 text-coal/70 hover:text-coal mb-6"
        >
          <ArrowLeft size={20} />
          Alle Standorte
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-coal mb-4">
              Zeitarbeit in {location.city}
            </h1>
            <p className="text-lg text-coal/80 mb-6">
              Promedis24 {location.city} ist Ihr lokaler Partner für Zeitarbeit
              in Pflege, Pädagogik und Medizin. Wir kennen den Markt und finden
              den perfekten Job für Sie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/bewerben">Jetzt bewerben</Button>
              <Button variant="outline" href="/kontakt?type=unternehmen">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>

          {/* Area Manager */}
          <Card className="bg-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-turkis-light rounded-full flex items-center justify-center">
                <User size={32} className="text-turkis" />
              </div>
              <div>
                <p className="text-sm text-coal/60">Ihr Ansprechpartner</p>
                <h2 className="text-xl font-bold text-coal">
                  {location.areaManager.name}
                </h2>
                <p className="text-sm text-turkis">{location.areaManager.title}</p>
              </div>
            </div>
            <p className="text-coal/70 text-sm">
              &ldquo;Ich freue mich darauf, Sie kennenzulernen und gemeinsam den
              perfekten Job für Sie zu finden. Rufen Sie mich an oder schreiben
              Sie mir – ich bin für Sie da!&rdquo;
            </p>
          </Card>
        </div>
      </Section>

      {/* Contact & Map */}
      <Section variant="default" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-coal mb-6">
              Kontakt & Adresse
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-turkis-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-turkis" size={20} />
                </div>
                <div>
                  <p className="font-medium text-coal">Adresse</p>
                  <p className="text-coal/70">{location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-turkis-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-turkis" size={20} />
                </div>
                <div>
                  <p className="font-medium text-coal">Telefon</p>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-turkis hover:underline"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-turkis-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-turkis" size={20} />
                </div>
                <div>
                  <p className="font-medium text-coal">E-Mail</p>
                  <a
                    href={`mailto:${location.email}`}
                    className="text-turkis hover:underline"
                  >
                    {location.email}
                  </a>
                </div>
              </div>
            </div>

            <Button href={`/jobs?location=${location.slug}`} variant="outline">
              Jobs in {location.city} anzeigen
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-square lg:aspect-auto bg-grey rounded-2xl flex items-center justify-center">
            <div className="text-center text-coal/60 p-8">
              <MapPin size={48} className="mx-auto mb-4 text-turkis" />
              <p className="text-lg font-medium">Google Maps</p>
              <p className="text-sm">
                Koordinaten: {location.coordinates.lat}, {location.coordinates.lng}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits for this location */}
      <Section variant="grey" padding="lg">
        <h2 className="text-2xl font-bold text-coal text-center mb-10">
          Ihre Vorteile in {location.city}
        </h2>

        <Grid cols={3} gap="md">
          <Card>
            <h3 className="font-bold text-coal mb-2">Übertarifliche Bezahlung</h3>
            <p className="text-sm text-coal/70">
              Verdienen Sie mehr als im Tarifvertrag vorgesehen – plus Zulagen
              und Boni.
            </p>
          </Card>
          <Card>
            <h3 className="font-bold text-coal mb-2">Lokale Betreuung</h3>
            <p className="text-sm text-coal/70">
              {location.areaManager.name} ist immer für Sie da – persönlich und
              vor Ort.
            </p>
          </Card>
          <Card>
            <h3 className="font-bold text-coal mb-2">Regionale Jobs</h3>
            <p className="text-sm text-coal/70">
              Arbeiten Sie in Einrichtungen in und um {location.city} – kurze
              Wege, mehr Zeit.
            </p>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
