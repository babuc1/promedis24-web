import { Metadata } from "next";
import Link from "next/link";
import {
  Euro,
  ShieldCheck,
  CalendarCheck,
  Cake,
  Gift,
  Heart,
} from "lucide-react";
import { Section, Card, Grid, Button } from "@/components/ui";
import benefitsData from "@/content/benefits/index.json";

export const metadata: Metadata = {
  title: "Benefits",
  description:
    "Entdecken Sie die Vorteile bei Promedis24: Übertarifliche Bezahlung, unbefristete Festanstellung, Wunsch-Dienstplan und mehr.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  euro: Euro,
  "shield-check": ShieldCheck,
  "calendar-check": CalendarCheck,
  cake: Cake,
  gift: Gift,
  "user-heart": Heart,
};

export default function BenefitsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="turkis" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-white/20 text-coal rounded-full text-sm font-medium mb-6">
            Deine Vorteile
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-coal mb-6">
            Benefits, die sich lohnen
          </h1>
          <p className="text-lg text-coal/80">
            Bei Promedis24 bekommst du mehr als nur einen Job. Entdecke unsere
            einzigartigen Benefits, die deinen Arbeitsalltag wirklich besser
            machen.
          </p>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section variant="default" padding="lg">
        <Grid cols={2} gap="lg">
          {benefitsData.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || Euro;
            const isEven = index % 2 === 0;

            return (
              <Link key={benefit.slug} href={`/benefits/${benefit.slug}`}>
                <Card
                  hoverable
                  variant={isEven ? "turkis" : "amethyst"}
                  className="h-full"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isEven
                          ? "bg-turkis text-white"
                          : "bg-amethyst text-white"
                      }`}
                    >
                      <IconComponent size={28} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-coal mb-2">
                        {benefit.title}
                      </h2>
                      <p className="text-coal/70">{benefit.shortDescription}</p>
                      <span
                        className={`inline-block mt-4 text-sm font-medium ${
                          isEven ? "text-turkis" : "text-amethyst"
                        }`}
                      >
                        Mehr erfahren &rarr;
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section variant="coal" padding="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit für echte Benefits?
          </h2>
          <p className="text-white/80 mb-8">
            Bewirb dich jetzt in nur 60 Sekunden und sichere dir alle Vorteile
            von Promedis24.
          </p>
          <Button href="/bewerben" className="bg-turkis hover:bg-turkis-dark">
            Jetzt bewerben
          </Button>
        </div>
      </Section>
    </>
  );
}
