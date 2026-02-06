import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Section, Card, Grid, Button } from "@/components/ui";

// Import location data
import berlinData from "@/content/locations/berlin.json";
import muenchenData from "@/content/locations/muenchen.json";
import hamburgData from "@/content/locations/hamburg.json";

const locations = [berlinData, muenchenData, hamburgData];

export const metadata: Metadata = {
  title: "Standorte",
  description:
    "Finden Sie Ihren Promedis24 Standort in Ihrer Nähe. Wir sind deutschlandweit für Sie da.",
};

export default function StandortePage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="turkis" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-coal mb-6">
            Unsere Standorte
          </h1>
          <p className="text-lg text-coal/80">
            Promedis24 ist deutschlandweit für Sie da. Finden Sie den Standort
            in Ihrer Nähe und lernen Sie Ihren persönlichen Ansprechpartner
            kennen.
          </p>
        </div>
      </Section>

      {/* Location Map Placeholder */}
      <Section variant="default" padding="md">
        <div className="aspect-[16/9] md:aspect-[21/9] bg-grey rounded-2xl flex items-center justify-center mb-8">
          <div className="text-center text-coal/60">
            <MapPin size={48} className="mx-auto mb-4 text-turkis" />
            <p className="text-lg font-medium">Interaktive Karte</p>
            <p className="text-sm">
              Hier wird die Deutschland-Karte mit allen Standorten angezeigt
            </p>
          </div>
        </div>
      </Section>

      {/* Location Cards */}
      <Section variant="grey" padding="lg">
        <h2 className="text-2xl md:text-3xl font-bold text-coal text-center mb-10">
          Alle Standorte im Überblick
        </h2>

        <Grid cols={3} gap="md">
          {locations.map((location) => (
            <Link key={location.slug} href={`/standorte/${location.slug}`}>
              <Card hoverable className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-turkis-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-turkis" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-coal">
                      {location.city}
                    </h3>
                    <p className="text-sm text-coal/60">
                      {location.areaManager.name}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-coal/70">
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-turkis" />
                    {location.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-turkis" />
                    {location.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-turkis" />
                    {location.email}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </Grid>

        <div className="text-center mt-10">
          <Button href="/jobs-in-meiner-naehe">
            Jobs in meiner Nähe finden
          </Button>
        </div>
      </Section>
    </>
  );
}
