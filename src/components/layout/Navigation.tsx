"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import type { UserMode, NavItem } from "@/lib/types";

const bewerberNav: NavItem[] = [
  { label: "Jobs", href: "/jobs" },
  { label: "Benefits", href: "/benefits" },
  { label: "On Tour", href: "/on-tour" },
  { label: "Standorte", href: "/standorte" },
  { label: "Quiz", href: "/zeitarbeit-quiz" },
];

const unternehmenNav: NavItem[] = [
  { label: "Zeitarbeit", href: "/fuer-unternehmen/zeitarbeit" },
  { label: "Unser Prozess", href: "/fuer-unternehmen/prozess" },
  { label: "Ihre Vorteile", href: "/fuer-unternehmen/vorteile" },
  { label: "Personalvermittlung", href: "/personalvermittlung" },
  { label: "Erfolgsgeschichten", href: "/erfolgsgeschichten" },
];

export function Navigation() {
  const [mode, setMode] = useState<UserMode>("bewerber");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = mode === "bewerber" ? bewerberNav : unternehmenNav;
  const ctaText = mode === "bewerber" ? "Jetzt bewerben" : "Personal anfragen";
  const ctaHref = mode === "bewerber" ? "/bewerben" : "/kontakt";
  const ctaVariant = mode === "bewerber" ? "primary" : "secondary";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-coal">
              PROMEDIS<span className="text-turkis">24</span>
            </span>
          </Link>

          {/* Mode Toggle - Desktop */}
          <div className="hidden md:flex items-center bg-grey rounded-full p-1">
            <button
              onClick={() => setMode("bewerber")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                mode === "bewerber"
                  ? "bg-turkis text-white"
                  : "text-coal hover:text-turkis"
              )}
            >
              Für Bewerber
            </button>
            <button
              onClick={() => setMode("unternehmen")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                mode === "unternehmen"
                  ? "bg-amethyst text-white"
                  : "text-coal hover:text-amethyst"
              )}
            >
              Für Unternehmen
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? mode === "bewerber"
                      ? "text-turkis"
                      : "text-amethyst"
                    : "text-coal hover:text-turkis"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button variant={ctaVariant} size="sm" href={ctaHref}>
              {ctaText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-coal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-grey overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Mode Toggle - Mobile */}
              <div className="flex items-center bg-grey rounded-full p-1">
                <button
                  onClick={() => setMode("bewerber")}
                  className={cn(
                    "flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all",
                    mode === "bewerber"
                      ? "bg-turkis text-white"
                      : "text-coal"
                  )}
                >
                  Bewerber
                </button>
                <button
                  onClick={() => setMode("unternehmen")}
                  className={cn(
                    "flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all",
                    mode === "unternehmen"
                      ? "bg-amethyst text-white"
                      : "text-coal"
                  )}
                >
                  Unternehmen
                </button>
              </div>

              {/* Nav Links */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2 rounded-lg text-base font-medium transition-colors",
                      pathname === item.href
                        ? mode === "bewerber"
                          ? "bg-turkis-light text-turkis"
                          : "bg-amethyst-light text-amethyst"
                        : "text-coal hover:bg-grey"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA Button - Mobile */}
              <Button
                variant={ctaVariant}
                fullWidth
                href={ctaHref}
                onClick={() => setMobileMenuOpen(false)}
              >
                {ctaText}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
