import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

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
    <html lang="de" className={`${dmSerif.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-outfit">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
