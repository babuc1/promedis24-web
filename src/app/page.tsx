"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Heart,
  Building2,
  ChevronRight,
  ChevronLeft,
  Check,
  MapPin,
  Image as ImageIcon,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// ─── Hooks ───
function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [v, setV] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold }
    );
    o.observe(ref.current);
    return () => o.disconnect();
  }, [ref, threshold]);
  return v;
}

function FadeIn({
  children,
  delay = 0,
  y = 20,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const v = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Tape Strip (brand element) ───
function TapeStrip({
  color = "turkis",
  width = 80,
  top,
  left,
  right,
  bottom,
  rotate = -3,
}: {
  color?: "turkis" | "amethyst";
  width?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
}) {
  const colorHex = color === "turkis" ? "#23D2AF" : "#8A84F5";
  return (
    <div
      className="absolute pointer-events-none z-[1]"
      style={{
        top,
        left,
        right,
        bottom,
        width,
        height: 24,
        background: `${colorHex}18`,
        borderTop: `1px solid ${colorHex}25`,
        borderBottom: `1px solid ${colorHex}25`,
        transform: `rotate(${rotate}deg)`,
        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 4px, ${colorHex}08 4px, ${colorHex}08 5px)`,
      }}
    />
  );
}

// ─── Grain overlay ───
function Grain({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// ─── Job profiles ───
const jobs = [
  {
    title: "Gesundheits- &\nKrankenpfleger:in",
    area: "Pflege",
    color: "#23D2AF",
    salary: "3.800–4.600 €",
    benefits: ["Wunsch-Dienstplan", "Übertariflich", "Unbefristet"],
    demand: "Sehr hoch",
  },
  {
    title: "Altenpfleger:in",
    area: "Pflege",
    color: "#23D2AF",
    salary: "3.600–4.300 €",
    benefits: ["Flexible Einsatzorte", "Zulagen", "Geburtstagsfrei"],
    demand: "Sehr hoch",
  },
  {
    title: "Intensivpfleger:in",
    area: "Pflege",
    color: "#23D2AF",
    salary: "4.200–5.200 €",
    benefits: ["Top-Gehalt", "Modernste Kliniken", "On-Tour möglich"],
    demand: "Extrem hoch",
  },
  {
    title: "Pflegefachkraft",
    area: "Pflege",
    color: "#23D2AF",
    salary: "3.600–4.400 €",
    benefits: ["Vielfältige Einsätze", "Weiterbildung", "Unbefristet"],
    demand: "Hoch",
  },
  {
    title: "Erzieher:in",
    area: "Pädagogik",
    color: "#8A84F5",
    salary: "3.400–4.200 €",
    benefits: ["Wunsch-Einrichtung", "Kita bis Jugend", "Flexible Zeiten"],
    demand: "Sehr hoch",
  },
  {
    title: "Sozialpädagog:in",
    area: "Pädagogik",
    color: "#8A84F5",
    salary: "3.600–4.400 €",
    benefits: ["Diverse Träger", "Eigenverantwortung", "Entwicklung"],
    demand: "Hoch",
  },
  {
    title: "Heilerziehungs-\npfleger:in",
    area: "Pädagogik",
    color: "#8A84F5",
    salary: "3.400–4.100 €",
    benefits: ["Inklusion", "Abwechslung", "Persönliche Betreuung"],
    demand: "Hoch",
  },
  {
    title: "MFA – Medizinische\nFachangestellte",
    area: "Medizin",
    color: "#E8965A",
    salary: "3.200–3.800 €",
    benefits: ["Praxis & Klinik", "Regional", "Weiterbildung"],
    demand: "Hoch",
  },
  {
    title: "OTA – Operations-\ntechnische Assistenz",
    area: "Medizin",
    color: "#E8965A",
    salary: "3.800–4.600 €",
    benefits: ["OP-Erfahrung", "Top-Kliniken", "Spezialisierung"],
    demand: "Sehr hoch",
  },
];

// ─── Job Slider ───
function JobSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ l: false, r: true });

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollState({
      l: el.scrollLeft > 10,
      r: el.scrollLeft < el.scrollWidth - el.clientWidth - 10,
    });
  };

  useEffect(checkScroll, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 290, behavior: "smooth" });
    setTimeout(checkScroll, 500);
  };

  return (
    <div className="relative">
      {scrollState.l && (
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-coal border-2 border-turkis/30 flex items-center justify-center cursor-pointer shadow-lg hover:border-turkis/60 transition-colors"
        >
          <ChevronLeft className="w-[18px] h-[18px] text-turkis" />
        </button>
      )}
      {scrollState.r && (
        <button
          onClick={() => scroll(1)}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-coal border-2 border-turkis/30 flex items-center justify-center cursor-pointer shadow-lg hover:border-turkis/60 transition-colors"
        >
          <ChevronRight className="w-[18px] h-[18px] text-turkis" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-[18px] overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="min-w-[272px] max-w-[272px] snap-start flex-shrink-0 bg-white/[0.025] border border-white/5 rounded overflow-hidden transition-all duration-350 cursor-pointer hover:border-white/20 hover:-translate-y-1.5"
            style={
              {
                "--job-color": job.color,
              } as React.CSSProperties
            }
          >
            {/* Image placeholder */}
            <div
              className="h-[170px] relative"
              style={{
                background: `linear-gradient(160deg, ${job.color}14, ${job.color}05)`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${job.color}04 10px, ${job.color}04 20px)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon
                  className="w-10 h-10"
                  style={{ color: `${job.color}20` }}
                />
              </div>
              <div
                className="absolute top-3.5 left-3.5 px-2.5 py-[3px] text-[10px] font-bold tracking-wide"
                style={{
                  background: job.color,
                  color: job.area === "Pädagogik" ? "white" : "#002D32",
                }}
              >
                {job.area}
              </div>
              <div className="absolute top-3.5 right-3.5 bg-black/50 backdrop-blur-sm px-2 py-[3px] text-[9px] font-semibold text-white/70">
                {job.demand}
              </div>
              {/* Tape strip accent */}
              <div
                className="absolute bottom-[-1px] left-0 right-0 h-[3px]"
                style={{ background: job.color }}
              />
            </div>

            <div className="p-5 pb-6">
              <h3 className="font-serif text-lg text-white leading-tight mb-3 whitespace-pre-line min-h-[44px]">
                {job.title}
              </h3>
              <div
                className="flex items-center gap-2 mb-4 py-2.5 px-3.5"
                style={{
                  background: `${job.color}0C`,
                  borderLeft: `3px solid ${job.color}`,
                }}
              >
                <span className="text-[11px] text-white/35 font-medium">
                  Gehalt
                </span>
                <span
                  className="text-[15px] font-bold ml-auto"
                  style={{ color: job.color }}
                >
                  {job.salary}
                </span>
              </div>
              <div className="flex flex-col gap-[7px] mb-5">
                {job.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-[7px]">
                    <Check
                      className="w-[11px] h-[11px]"
                      style={{ color: `${job.color}90` }}
                    />
                    <span className="text-xs text-white/40">{b}</span>
                  </div>
                ))}
              </div>
              <button
                className="w-full flex items-center justify-center gap-[7px] border px-0 py-2.5 text-[13px] font-semibold cursor-pointer transition-all duration-300"
                style={{
                  borderColor: `${job.color}40`,
                  color: job.color,
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = job.color;
                  e.currentTarget.style.color =
                    job.area === "Pädagogik" ? "white" : "#002D32";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = job.color;
                }}
              >
                Jetzt bewerben <ArrowRight className="w-[13px] h-[13px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <span className="text-white/[0.12] text-[11px] font-medium tracking-wide">
          ← {jobs.length} Stellenprofile →
        </span>
      </div>
    </div>
  );
}

// ─── Process Timeline ───
function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const steps = [
    {
      n: "01",
      title: "Anfrage",
      time: "Tag 1",
      desc: "Sie melden Ihren Bedarf – telefonisch, per Mail oder über unser Formular. Berufsfeld, Qualifikation, Einsatzort und Zeitrahmen.",
    },
    {
      n: "02",
      title: "Matching",
      time: "Tag 1–3",
      desc: "Ihr Area Manager sucht passende Fachkräfte aus unserem Talentpool. Qualifikation, Persönlichkeit und Teamfit – alles zählt.",
    },
    {
      n: "03",
      title: "Vorstellung",
      time: "Tag 3–5",
      desc: "Sie erhalten ein detailliertes Profil mit Qualifikationen und Referenzen. Sie entscheiden – kein Risiko, keine Verpflichtung.",
    },
    {
      n: "04",
      title: "Einsatzstart",
      time: "Ab Tag 5",
      desc: "Die Fachkraft startet bei Ihnen. Wir bleiben persönlicher Ansprechpartner für beide Seiten – dauerhaft.",
    },
  ];

  return (
    <div className="flex gap-0">
      {/* Steps */}
      <div className="flex flex-col gap-0 w-[260px] flex-shrink-0">
        {steps.map((s, i) => (
          <div
            key={s.n}
            onClick={() => setActive(i)}
            className="py-[18px] px-6 cursor-pointer relative transition-all duration-400"
            style={{
              borderLeft: `3px solid ${i === active ? "#8A84F5" : "rgba(0,45,50,0.06)"}`,
              background: i === active ? "rgba(138,132,245,0.05)" : "transparent",
            }}
          >
            <div className="flex items-baseline gap-2.5">
              <span
                className="font-serif text-[22px] transition-colors duration-400"
                style={{
                  color: i === active ? "#8A84F5" : "rgba(0,45,50,0.12)",
                }}
              >
                {s.n}
              </span>
              <span
                className="text-[15px] font-semibold transition-colors duration-400"
                style={{
                  color: i === active ? "#002D32" : "rgba(0,45,50,0.3)",
                }}
              >
                {s.title}
              </span>
            </div>
            <span
              className="text-[11px] font-semibold transition-colors duration-400 ml-8"
              style={{
                color: i === active ? "#8A84F5" : "rgba(0,45,50,0.15)",
              }}
            >
              {s.time}
            </span>
          </div>
        ))}
      </div>
      {/* Detail */}
      <div className="flex-1 py-7 px-9 border-l border-coal/[0.06] flex flex-col justify-center">
        <p className="font-serif text-2xl text-coal mb-3 leading-tight">
          {steps[active].title}
        </p>
        <p className="text-[15px] text-coal/55 leading-relaxed">
          {steps[active].desc}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
export default function Homepage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="overflow-x-hidden">
      {/* ═══ HERO ═══ */}
      <section className="min-h-screen bg-coal relative overflow-hidden flex items-center py-[120px] pb-20">
        <Grain opacity={0.04} />
        {/* Gradient mesh */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "5%",
            right: "5%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle at 30% 40%, rgba(35,210,175,0.08), transparent 60%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "10%",
            left: "10%",
            width: 500,
            height: 500,
            background: "radial-gradient(circle at 60% 50%, rgba(138,132,245,0.06), transparent 60%)",
          }}
        />

        {/* Tape strips */}
        <TapeStrip color="turkis" width={120} top="15%" right="-20px" rotate={-5} />
        <TapeStrip color="amethyst" width={100} bottom="20%" left="-15px" rotate={3} />

        <div className="max-w-[1120px] mx-auto px-8 relative z-[2] w-full">
          <div className="max-w-[640px]">
            <FadeIn>
              <p className="text-turkis/80 text-[11px] font-bold tracking-[0.25em] uppercase mb-8">
                Seit 2011 · Gesundheits- & Sozialwesen
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-white text-[62px] leading-[1.08] mb-7 tracking-tight">
                Wo <span className="text-turkis">Fachkräfte</span> und{" "}
                <span className="text-amethyst">Einrichtungen</span>
                <br />
                zusammenfinden.
              </h1>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="text-white/40 text-[17px] leading-relaxed mb-11 max-w-[480px] font-light">
                Pflege, Pädagogik, Medizin – wir verbinden qualifizierte Fachkräfte mit den
                Einrichtungen, die sie brauchen.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex gap-3">
                <button
                  onClick={() => scrollTo("bewerber")}
                  className="inline-flex items-center gap-2 bg-turkis text-coal border-none py-[15px] px-[30px] text-sm font-bold cursor-pointer tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(35,210,175,0.3)]"
                >
                  <Heart className="w-[15px] h-[15px]" />
                  Ich suche einen Job
                </button>
                <button
                  onClick={() => scrollTo("unternehmen")}
                  className="inline-flex items-center gap-2 bg-transparent text-white border border-white/[0.12] py-[15px] px-[30px] text-sm font-semibold cursor-pointer tracking-wide transition-all duration-300 hover:border-amethyst/50 hover:bg-amethyst/[0.08]"
                >
                  Ich suche Personal
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right side – editorial stat block */}
          <FadeIn delay={0.3}>
            <div className="absolute right-8 bottom-0 flex gap-8">
              {[
                { v: "600+", l: "Fachkräfte" },
                { v: "14+", l: "Jahre" },
                { v: "18", l: "Standorte" },
              ].map((s) => (
                <div key={s.l} className="text-right">
                  <p className="font-serif text-[32px] text-white leading-none">{s.v}</p>
                  <p className="text-[10px] text-white/25 font-semibold tracking-[0.1em] uppercase mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="bg-white border-b border-coal/[0.04] relative">
        <div className="max-w-[1120px] mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-lg text-coal">4,6</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="text-xs"
                  style={{ color: i <= 4 ? "#F4B740" : "rgba(244,183,64,0.4)" }}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-[11px] text-coal/30 font-medium ml-1">auf Indeed</span>
          </div>
          <div className="text-[11px] text-coal/20 font-medium tracking-[0.1em]">
            PFLEGE · PÄDAGOGIK · MEDIZIN
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-coal/20" />
            <span className="text-[11px] text-coal/30 font-medium">18 Standorte bundesweit</span>
          </div>
        </div>
      </section>

      {/* ═══ BEWERBER: STELLENPROFILE ═══ */}
      <section id="bewerber" className="bg-coal py-[88px] pb-[72px] relative overflow-hidden">
        <Grain opacity={0.03} />
        <TapeStrip color="turkis" width={160} top="60px" right="-40px" rotate={-4} />

        <div className="max-w-[1120px] mx-auto px-8">
          <div className="flex justify-between items-end mb-11">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-turkis" />
                  <span className="text-turkis text-[11px] font-bold tracking-[0.2em] uppercase">
                    Für Bewerber
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.06}>
                <h2 className="font-serif text-[42px] text-white leading-tight mb-2.5">
                  Finde dein Stellenprofil.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/35 text-[15px] font-light">
                  9 Berufsbilder in drei Fachbereichen.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.12}>
              <div className="flex gap-2">
                {[
                  ["Pflege", "#23D2AF"],
                  ["Pädagogik", "#8A84F5"],
                  ["Medizin", "#E8965A"],
                ].map(([a, c]) => (
                  <span
                    key={a}
                    className="text-[11px] font-semibold py-1 px-3 tracking-wide"
                    style={{
                      color: c,
                      background: `${c}10`,
                      border: `1px solid ${c}18`,
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <JobSlider />
          </FadeIn>
        </div>

        {/* Quiz Banner */}
        <div className="mt-14">
          <FadeIn>
            <div
              className="border-t border-b py-5"
              style={{
                borderColor: "rgba(35,210,175,0.1)",
                background: "rgba(35,210,175,0.04)",
              }}
            >
              <div className="max-w-[1120px] mx-auto px-8 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <Sparkles className="w-4 h-4 text-turkis" />
                  <div>
                    <span className="font-semibold text-[13px] text-white">
                      Vorurteile über Zeitarbeit?{" "}
                    </span>
                    <span className="text-white/30 text-[13px] font-light">
                      Mach den Quiz – 2 Minuten.
                    </span>
                  </div>
                </div>
                <Link
                  href="/zeitarbeit-quiz"
                  className="inline-flex items-center gap-1.5 text-turkis text-xs font-bold no-underline border border-turkis/25 py-1.5 px-3.5 transition-colors duration-300 hover:bg-turkis/10"
                >
                  Starten <ArrowRight className="w-[11px] h-[11px]" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="max-w-[1120px] mx-auto px-8 flex items-center justify-between pt-10">
            <p className="text-white/25 text-sm font-light italic">
              Kein Anschreiben. 60 Sekunden. Fertig.
            </p>
            <Link
              href="/bewerben"
              className="inline-flex items-center gap-2 bg-turkis text-coal border-none py-3 px-6 text-sm font-bold cursor-pointer tracking-wide"
            >
              Jetzt bewerben <ArrowRight className="w-[13px] h-[13px]" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ═══ UNTERNEHMEN ═══ */}
      <section id="unternehmen" className="bg-[#FAFAF8] py-[88px] pb-20 relative">
        <Grain opacity={0.02} />
        <TapeStrip color="amethyst" width={140} top="50px" left="-30px" rotate={4} />

        <div className="max-w-[1120px] mx-auto px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-amethyst" />
              <span className="text-amethyst text-[11px] font-bold tracking-[0.2em] uppercase">
                Für Unternehmen
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.04}>
            <h2 className="font-serif text-[42px] text-coal leading-tight mb-2.5">
              Zwei Wege zu Ihrem Personal.
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-coal/40 text-[15px] font-light mb-11 max-w-[460px]">
              Ob flexibel oder langfristig – wir finden die Lösung, die zu Ihrem Bedarf passt.
            </p>
          </FadeIn>

          {/* 2 Product Cards */}
          <div className="grid grid-cols-2 gap-6 mb-16">
            {[
              {
                title: "Zeitarbeit",
                sub: "Flexibel & schnell",
                tag: "Kernkompetenz",
                href: "/fuer-unternehmen/zeitarbeit",
                desc: "Qualifizierte Fachkräfte für Ihren kurzfristigen oder laufenden Bedarf. Fest bei uns angestellt, fachlich bei Ihnen im Einsatz.",
                points: [
                  "Besetzung in 48h",
                  "Geprüfte Qualifikation",
                  "Übernahme möglich",
                  "Kein Recruiting-Aufwand",
                ],
              },
              {
                title: "Personal­vermittlung",
                sub: "Langfristig & direkt",
                tag: "Premium",
                href: "/personalvermittlung",
                desc: "Die Fachkraft, die bleibt. Wir suchen, prüfen und vermitteln direkt in Ihre Festanstellung – rein erfolgsbasiert.",
                points: [
                  "Direktanstellung bei Ihnen",
                  "Erfolgsbasierte Vergütung",
                  "Nachbesetzungsgarantie",
                  "Active Sourcing",
                ],
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={0.12 + i * 0.08}>
                <Link
                  href={card.href}
                  className="flex flex-col no-underline bg-white border border-coal/5 overflow-hidden h-full transition-all duration-400 hover:border-amethyst/30 hover:shadow-[0_12px_40px_rgba(138,132,245,0.08)]"
                >
                  {/* Image area */}
                  <div
                    className="h-[200px] relative"
                    style={{
                      background: "linear-gradient(150deg, rgba(138,132,245,0.04), rgba(138,132,245,0.012))",
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(138,132,245,0.03) 14px, rgba(138,132,245,0.03) 28px)",
                      }}
                    />
                    <div className="absolute top-[18px] left-[18px] bg-amethyst py-1 px-3.5 text-[10px] font-bold text-white tracking-wide">
                      {card.tag}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amethyst" />
                  </div>
                  <div className="p-7 pb-8 flex-1 flex flex-col">
                    <p className="text-amethyst text-[11px] font-bold tracking-[0.08em] uppercase mb-1.5">
                      {card.sub}
                    </p>
                    <h3 className="font-serif text-[28px] text-coal mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-coal/50 text-sm leading-relaxed mb-6 flex-1 font-light">
                      {card.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-2 gap-x-4 mb-6">
                      {card.points.map((p) => (
                        <div key={p} className="flex items-center gap-1.5">
                          <Check className="w-[11px] h-[11px] text-amethyst/70" />
                          <span className="text-xs text-coal/45">{p}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-amethyst text-[13px] font-bold">
                      Mehr erfahren <ChevronRight className="w-[13px] h-[13px]" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Process – below, separated */}
          <FadeIn delay={0.2}>
            <div className="border-t border-coal/[0.06] pt-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-amethyst text-[11px] font-bold tracking-[0.15em] uppercase mb-1.5">
                    Unser Prozess
                  </p>
                  <h3 className="font-serif text-[26px] text-coal">
                    In vier Schritten zur Besetzung
                  </h3>
                </div>
                <Link
                  href="/fuer-unternehmen/prozess"
                  className="inline-flex items-center gap-1.5 text-amethyst text-xs font-bold no-underline"
                >
                  Details <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <ProcessTimeline />
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.25}>
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-coal/[0.06]">
              <p className="text-coal/35 text-sm font-light italic">
                Ihr Area Manager meldet sich innerhalb von 48 Stunden.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-amethyst text-white border-none py-3 px-6 text-sm font-bold cursor-pointer tracking-wide"
              >
                Personal anfragen <ArrowRight className="w-[13px] h-[13px]" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="bg-white py-20 relative">
        <Grain opacity={0.015} />
        <div className="max-w-[1120px] mx-auto px-8">
          <FadeIn>
            <div className="mb-11">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-px bg-coal/15" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-coal/30">
                  Stimmen
                </span>
              </div>
              <h2 className="font-serif text-[34px] text-coal">Was unsere Partner sagen</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              {
                q: "Beste Entscheidung. Verschiedene Kliniken unter der Woche, am Wochenende meine Familie.",
                n: "Patrick K.",
                r: "Intensivpfleger",
                c: "#23D2AF",
              },
              {
                q: "Mit Promedis24 haben wir einen Partner, der unsere Branche versteht – nicht nur Schichten füllt.",
                n: "AWO München",
                r: "Sozialwirtschaft",
                c: "#8A84F5",
              },
            ].map((t, i) => (
              <FadeIn key={t.n} delay={i * 0.1}>
                <div
                  className="py-7 px-8"
                  style={{
                    borderLeft: `3px solid ${t.c}`,
                    background: `${t.c}03`,
                  }}
                >
                  <p className="font-serif text-lg text-coal italic leading-relaxed mb-5">
                    „{t.q}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold"
                      style={{
                        background: `${t.c}12`,
                        border: `1px solid ${t.c}20`,
                        color: t.c,
                      }}
                    >
                      {t.n
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-bold text-[13px] text-coal">{t.n}</p>
                      <p className="text-[11px] text-coal/35">{t.r}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <Link
              href="/erfolgsgeschichten"
              className="inline-flex items-center gap-1.5 text-coal/35 text-xs font-semibold no-underline border-b border-coal/[0.08] pb-0.5"
            >
              Alle Geschichten lesen <ArrowRight className="w-[11px] h-[11px]" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-coal py-[72px] relative overflow-hidden">
        <Grain opacity={0.04} />
        <TapeStrip color="turkis" width={100} bottom="20px" right="-20px" rotate={-6} />
        <TapeStrip color="amethyst" width={80} top="15px" left="-10px" rotate={5} />
        <div className="max-w-[1120px] mx-auto px-8 text-center relative z-[2]">
          <FadeIn>
            <h2 className="font-serif text-[38px] text-white mb-3.5">Bereit? Wir auch.</h2>
          </FadeIn>
          <FadeIn delay={0.04}>
            <p className="text-white/35 text-[15px] font-light mb-8">
              Der erste Schritt ist der einfachste.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex gap-3 justify-center">
              <Link
                href="/bewerben"
                className="inline-flex items-center gap-2 bg-turkis text-coal border-none py-3.5 px-7 text-sm font-bold cursor-pointer"
              >
                In 60 Sek. bewerben <ArrowRight className="w-[13px] h-[13px]" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-white/10 py-3.5 px-7 text-sm font-semibold cursor-pointer"
              >
                Personal anfragen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
