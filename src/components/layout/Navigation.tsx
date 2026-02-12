"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import type { UserMode, NavItem } from "@/lib/types";

const bewerberNav: NavItem[] = [
  { label: "Jobs", href: "/jobs" },
  { label: "Benefits", href: "/benefits" },
  { label: "Standorte", href: "/standorte" },
  { label: "On-Tour", href: "/on-tour" },
];

const unternehmenNav: NavItem[] = [
  { label: "Zeitarbeit", href: "/fuer-unternehmen/zeitarbeit" },
  { label: "Personalvermittlung", href: "/personalvermittlung" },
  { label: "Unser Prozess", href: "/fuer-unternehmen/prozess" },
];

export function Navigation() {
  const [mode, setMode] = useState<UserMode>("bewerber");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = mode === "bewerber" ? bewerberNav : unternehmenNav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-coal/95 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-black text-white tracking-tight">
              PROMEDIS<span className="text-turkis">24</span>
            </span>
          </Link>

          {/* Desktop: Mode Toggle + Nav Links + Actions */}
          <div className="hidden md:flex items-center gap-8">
            {/* Mode Toggle */}
            <div className="flex rounded-lg overflow-hidden border border-white/10 h-8">
              <button
                onClick={() => setMode("bewerber")}
                className={cn(
                  "px-3.5 text-xs font-bold transition-all",
                  mode === "bewerber"
                    ? "bg-turkis text-coal"
                    : "bg-transparent text-white/40 hover:text-white/60"
                )}
              >
                Bewerber
              </button>
              <button
                onClick={() => setMode("unternehmen")}
                className={cn(
                  "px-3.5 text-xs font-bold transition-all",
                  mode === "unternehmen"
                    ? "bg-amethyst text-white"
                    : "bg-transparent text-white/40 hover:text-white/60"
                )}
              >
                Unternehmen
              </button>
            </div>

            {/* Dynamic Nav Links - fixed width to prevent layout shift */}
            <div className="flex items-center gap-6 min-w-[340px]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[13px] font-medium transition-colors whitespace-nowrap",
                    pathname === item.href
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Separator + Über uns + Kontakt */}
            <div className="flex items-center gap-4 border-l border-white/[0.08] pl-5">
              <Link
                href="/ueber-uns"
                className="text-white/35 text-[13px] font-medium hover:text-white/60 transition-colors"
              >
                Über uns
              </Link>
              <Link
                href={mode === "bewerber" ? "/kontakt" : "/kontakt?type=unternehmen"}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3.5 py-[7px] rounded-lg text-xs font-bold transition-all",
                  mode === "bewerber"
                    ? "bg-turkis text-coal hover:bg-turkis-dark"
                    : "bg-amethyst text-white hover:bg-amethyst-dark"
                )}
              >
                <Phone className="w-3 h-3" />
                Kontakt
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
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
            className="md:hidden bg-coal border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {/* Mode Toggle - Mobile */}
              <div className="flex rounded-lg overflow-hidden border border-white/10">
                <button
                  onClick={() => setMode("bewerber")}
                  className={cn(
                    "flex-1 px-4 py-2.5 text-sm font-bold transition-all",
                    mode === "bewerber"
                      ? "bg-turkis text-coal"
                      : "bg-transparent text-white/40"
                  )}
                >
                  Bewerber
                </button>
                <button
                  onClick={() => setMode("unternehmen")}
                  className={cn(
                    "flex-1 px-4 py-2.5 text-sm font-bold transition-all",
                    mode === "unternehmen"
                      ? "bg-amethyst text-white"
                      : "bg-transparent text-white/40"
                  )}
                >
                  Unternehmen
                </button>
              </div>

              {/* Nav Links */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                      pathname === item.href
                        ? mode === "bewerber"
                          ? "bg-turkis/10 text-turkis"
                          : "bg-amethyst/10 text-amethyst"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Über uns */}
              <Link
                href="/ueber-uns"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-white/40 hover:text-white hover:bg-white/5 transition-colors"
              >
                Über uns
              </Link>

              {/* CTA Button - Mobile */}
              <Button
                variant={mode === "bewerber" ? "primary" : "secondary"}
                fullWidth
                href={mode === "bewerber" ? "/kontakt" : "/kontakt?type=unternehmen"}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Kontakt
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
