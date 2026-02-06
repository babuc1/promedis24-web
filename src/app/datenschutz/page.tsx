import { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Promedis24 GmbH",
};

export default function DatenschutzPage() {
  return (
    <Section variant="default" padding="lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-coal mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-coal max-w-none">
          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            1. Datenschutz auf einen Blick
          </h2>

          <h3 className="text-xl font-bold text-coal mt-6 mb-3">
            Allgemeine Hinweise
          </h3>
          <p className="text-coal/80 mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-bold text-coal mt-6 mb-3">
            Datenerfassung auf dieser Website
          </h3>
          <p className="text-coal/80 mb-4">
            <strong>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>

          <p className="text-coal/80 mb-4">
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </p>

          <p className="text-coal/80 mb-4">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
            Uhrzeit des Seitenaufrufs).
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            2. Hosting
          </h2>
          <p className="text-coal/80 mb-4">
            Wir hosten die Inhalte unserer Website bei Vercel Inc. Anbieter ist
            die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className="text-xl font-bold text-coal mt-6 mb-3">Datenschutz</h3>
          <p className="text-coal/80 mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold text-coal mt-6 mb-3">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p className="text-coal/80 mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
            <br />
            <br />
            Promedis24 GmbH
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
            <br />
            <br />
            Telefon: 0800 123 456 78
            <br />
            E-Mail: datenschutz@promedis24.de
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            4. Datenerfassung auf dieser Website
          </h2>

          <h3 className="text-xl font-bold text-coal mt-6 mb-3">Cookies</h3>
          <p className="text-coal/80 mb-4">
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind
            kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
            Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät gespeichert.
          </p>

          <h3 className="text-xl font-bold text-coal mt-6 mb-3">
            Kontaktformular
          </h3>
          <p className="text-coal/80 mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <h2 className="text-2xl font-bold text-coal mt-8 mb-4">
            5. Ihre Rechte
          </h2>
          <p className="text-coal/80 mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen.
          </p>

          <p className="text-coal/80 mb-4">
            Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
          </p>

          <p className="text-coal/80 mb-4">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
            sich jederzeit an uns wenden.
          </p>
        </div>
      </div>
    </Section>
  );
}
