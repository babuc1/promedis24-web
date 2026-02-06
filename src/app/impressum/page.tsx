import { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Promedis24 GmbH",
};

export default function ImpressumPage() {
  return (
    <Section variant="default" padding="lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-coal mb-8">Impressum</h1>

        <div className="prose prose-coal max-w-none">
          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="text-coal/80 mb-4">
            Promedis24 GmbH
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            Vertreten durch
          </h2>
          <p className="text-coal/80 mb-4">
            Geschäftsführer: Max Mustermann
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">Kontakt</h2>
          <p className="text-coal/80 mb-4">
            Telefon: 0800 123 456 78
            <br />
            E-Mail: info@promedis24.de
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            Registereintrag
          </h2>
          <p className="text-coal/80 mb-4">
            Eintragung im Handelsregister
            <br />
            Registergericht: Amtsgericht Musterstadt
            <br />
            Registernummer: HRB 12345
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            Umsatzsteuer-ID
          </h2>
          <p className="text-coal/80 mb-4">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE123456789
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            Erlaubnis zur Arbeitnehmerüberlassung
          </h2>
          <p className="text-coal/80 mb-4">
            Unbefristete Erlaubnis zur Arbeitnehmerüberlassung gemäß § 1 AÜG,
            erteilt durch die Bundesagentur für Arbeit.
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-coal/80 mb-4">
            Max Mustermann
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            Streitschlichtung
          </h2>
          <p className="text-coal/80 mb-4">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-turkis hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            <br />
            <br />
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </Section>
  );
}
