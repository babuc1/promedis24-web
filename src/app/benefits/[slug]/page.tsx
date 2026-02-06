import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Euro,
  ShieldCheck,
  CalendarCheck,
  Cake,
  Gift,
  Heart,
  ArrowLeft,
  Check,
} from "lucide-react";
import { Section, Card, Button, Grid } from "@/components/ui";
import benefitsData from "@/content/benefits/index.json";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  euro: Euro,
  "shield-check": ShieldCheck,
  "calendar-check": CalendarCheck,
  cake: Cake,
  gift: Gift,
  "user-heart": Heart,
};

const benefitDetails: Record<string, { facts: string[]; content: string }> = {
  "uebertarifliche-bezahlung": {
    facts: [
      "Durchschnittlich 15-20% mehr Gehalt als im Tarifvertrag",
      "Attraktive Zulagen für Nacht-, Wochenend- und Feiertagsdienste",
      "Jährliche Bonuszahlungen möglich",
      "Transparente Gehaltsabrechnung",
    ],
    content: `
      Bei Promedis24 verdienst du mehr als anderswo. Wir zahlen übertariflich, weil wir wissen,
      was deine Arbeit wert ist. Als Fachkraft in Pflege, Pädagogik oder Medizin leistest du
      jeden Tag Außergewöhnliches – und das sollte sich auch auf deinem Konto bemerkbar machen.

      Neben dem übertariflichen Grundgehalt profitierst du von attraktiven Zulagen für Nacht-,
      Wochenend- und Feiertagsdienste. Je nach Einsatz und Leistung sind auch jährliche
      Bonuszahlungen möglich.
    `,
  },
  "unbefristete-festanstellung": {
    facts: [
      "100% unbefristete Arbeitsverträge",
      "Alle Vorteile einer Festanstellung",
      "Voller Kündigungsschutz",
      "Betriebliche Altersvorsorge möglich",
    ],
    content: `
      Zeitarbeit muss nicht unsicher sein. Bei Promedis24 erhältst du einen unbefristeten
      Arbeitsvertrag mit allen Vorteilen einer klassischen Festanstellung. Das bedeutet:
      voller Kündigungsschutz, Lohnfortzahlung im Krankheitsfall und Urlaubsanspruch
      nach Tarifvertrag.

      Du bist bei uns fest angestellt und wir kümmern uns um alles – von der Gehaltsabrechnung
      bis zur betrieblichen Altersvorsorge.
    `,
  },
  "wunsch-dienstplan": {
    facts: [
      "Du bestimmst deine Arbeitszeiten selbst",
      "Flexible Dienstplangestaltung",
      "Work-Life-Balance garantiert",
      "Keine Überraschungen – volle Planbarkeit",
    ],
    content: `
      Dein Leben, dein Dienstplan. Bei Promedis24 bestimmst du selbst, wann du arbeitest.
      Ob du lieber Früh-, Spät- oder Nachtschichten machst, ob du am Wochenende frei
      haben möchtest oder flexibel bist – wir richten uns nach dir.

      Unser Wunsch-Dienstplan gibt dir die Kontrolle über deine Zeit. Plane voraus,
      genieße deine Freizeit und arbeite, wann es für dich passt.
    `,
  },
  geburtstagsfrei: {
    facts: [
      "Bezahlter freier Tag an deinem Geburtstag",
      "Automatisch – keine Beantragung nötig",
      "Gilt für alle Mitarbeiter",
      "Unser Geschenk an dich",
    ],
    content: `
      Dein Geburtstag gehört dir! Bei Promedis24 hast du an deinem Ehrentag automatisch
      frei – natürlich voll bezahlt. Keine Anträge, keine Genehmigungen, kein Stress.

      Feier mit Familie und Freunden oder gönn dir einfach einen entspannten Tag.
      Das ist unser kleines Dankeschön für deinen Einsatz das ganze Jahr über.
    `,
  },
  empfehlungsbonus: {
    facts: [
      "Bonus für jede erfolgreiche Empfehlung",
      "Unbegrenzte Empfehlungen möglich",
      "Schnelle Auszahlung nach Probezeitende",
      "Doppelt gut: Du hilfst anderen und verdienst extra",
    ],
    content: `
      Kennst du jemanden, der gut zu uns passen würde? Empfehle Promedis24 weiter und
      verdiene dir einen attraktiven Bonus. Für jede erfolgreiche Empfehlung, die zu
      einer Einstellung führt, bedanken wir uns bei dir.

      Es gibt keine Obergrenze – empfehle so viele Kollegen wie du möchtest. Der Bonus
      wird nach der Probezeit des neuen Mitarbeiters ausgezahlt.
    `,
  },
  "persoenlicher-ansprechpartner": {
    facts: [
      "Ein fester Ansprechpartner für alle Fragen",
      "Erreichbar per Telefon, Mail und persönlich",
      "Schnelle Reaktionszeiten garantiert",
      "Persönliche Betreuung vor Ort",
    ],
    content: `
      Bei Promedis24 bist du keine Nummer. Du hast einen persönlichen Ansprechpartner,
      der dich kennt, der sich für dich einsetzt und der immer erreichbar ist – ob per
      Telefon, E-Mail oder persönlich vor Ort.

      Von der ersten Bewerbung bis zum laufenden Einsatz: Dein Ansprechpartner begleitet
      dich, klärt Fragen und sorgt dafür, dass du dich wohlfühlst.
    `,
  },
};

export async function generateStaticParams() {
  return benefitsData.map((benefit) => ({
    slug: benefit.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const benefit = benefitsData.find((b) => b.slug === slug);

  if (!benefit) {
    return {
      title: "Benefit nicht gefunden",
    };
  }

  return {
    title: benefit.seoTitle,
    description: benefit.seoDescription,
  };
}

export default async function BenefitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const benefit = benefitsData.find((b) => b.slug === slug);

  if (!benefit) {
    notFound();
  }

  const details = benefitDetails[slug];
  const IconComponent = iconMap[benefit.icon] || Euro;
  const otherBenefits = benefitsData.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section variant="turkis" padding="lg">
        <Link
          href="/benefits"
          className="inline-flex items-center gap-2 text-coal/70 hover:text-coal mb-6"
        >
          <ArrowLeft size={20} />
          Alle Benefits
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
              <IconComponent size={32} className="text-turkis" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-coal mb-4">
              {benefit.title}
            </h1>
            <p className="text-lg text-coal/80 mb-6">
              {benefit.shortDescription}
            </p>
            <Button href="/bewerben">Jetzt bewerben</Button>
          </div>

          {/* Facts Card */}
          <Card className="bg-white">
            <h2 className="text-lg font-bold text-coal mb-4">Auf einen Blick</h2>
            <ul className="space-y-3">
              {details?.facts.map((fact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-turkis flex-shrink-0 mt-0.5" />
                  <span className="text-coal/80">{fact}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Content Section */}
      <Section variant="default" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            {details?.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-coal/80 mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Other Benefits */}
      <Section variant="grey" padding="lg">
        <h2 className="text-2xl font-bold text-coal text-center mb-10">
          Weitere Benefits entdecken
        </h2>

        <Grid cols={3} gap="md">
          {otherBenefits.map((otherBenefit) => {
            const OtherIcon = iconMap[otherBenefit.icon] || Euro;
            return (
              <Link
                key={otherBenefit.slug}
                href={`/benefits/${otherBenefit.slug}`}
              >
                <Card hoverable className="h-full">
                  <div className="w-12 h-12 bg-turkis-light rounded-lg flex items-center justify-center mb-4">
                    <OtherIcon size={24} className="text-turkis" />
                  </div>
                  <h3 className="font-bold text-coal mb-2">
                    {otherBenefit.title}
                  </h3>
                  <p className="text-sm text-coal/70">
                    {otherBenefit.shortDescription}
                  </p>
                </Card>
              </Link>
            );
          })}
        </Grid>
      </Section>
    </>
  );
}
