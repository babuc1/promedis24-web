import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Promedis24 - Zeitarbeit in Pflege, Pädagogik & Medizin",
    template: "%s | Promedis24",
  },
  description:
    "Promedis24 ist Ihr Partner für Zeitarbeit in Pflege, Pädagogik und Medizin. Übertarifliche Bezahlung, unbefristete Festanstellung und persönliche Betreuung.",
  keywords: [
    "Zeitarbeit",
    "Pflege",
    "Pädagogik",
    "Medizin",
    "Personaldienstleister",
    "Jobs",
    "Karriere",
  ],
  authors: [{ name: "Promedis24" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://promedis24.de",
    siteName: "Promedis24",
    title: "Promedis24 - Zeitarbeit in Pflege, Pädagogik & Medizin",
    description:
      "Ihr Partner für Zeitarbeit mit übertariflicher Bezahlung und unbefristeter Festanstellung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promedis24 - Zeitarbeit in Pflege, Pädagogik & Medizin",
    description:
      "Ihr Partner für Zeitarbeit mit übertariflicher Bezahlung und unbefristeter Festanstellung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
