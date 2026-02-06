"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const footerLinks = {
  bewerber: {
    title: "Für Bewerber",
    links: [
      { label: "Jobs", href: "/jobs" },
      { label: "Benefits", href: "/benefits" },
      { label: "On Tour", href: "/on-tour" },
      { label: "Zeitarbeit-Quiz", href: "/zeitarbeit-quiz" },
      { label: "Jetzt bewerben", href: "/bewerben" },
    ],
  },
  unternehmen: {
    title: "Für Unternehmen",
    links: [
      { label: "Über Zeitarbeit", href: "/fuer-unternehmen/zeitarbeit" },
      { label: "Unser Prozess", href: "/fuer-unternehmen/prozess" },
      { label: "Ihre Vorteile", href: "/fuer-unternehmen/vorteile" },
      { label: "Personalvermittlung", href: "/personalvermittlung" },
      { label: "Personal anfragen", href: "/kontakt" },
    ],
  },
  unternehmen2: {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Standorte", href: "/standorte" },
      { label: "Erfolgsgeschichten", href: "/erfolgsgeschichten" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  rechtliches: {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-coal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                PROMEDIS<span className="text-turkis">24</span>
              </span>
            </Link>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href="tel:+4980012345678"
                className="flex items-center gap-2 hover:text-turkis transition-colors"
              >
                <Phone size={16} />
                0800 123 456 78
              </a>
              <a
                href="mailto:info@promedis24.de"
                className="flex items-center gap-2 hover:text-turkis transition-colors"
              >
                <Mail size={16} />
                info@promedis24.de
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                Musterstraße 123
                <br />
                12345 Musterstadt
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-turkis transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-turkis transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-turkis transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-turkis transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Promedis24. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-sm text-white/60">
            14 Jahre Erfahrung | 600+ Talents | 4,6 Sterne
          </p>
        </div>
      </div>
    </footer>
  );
}
