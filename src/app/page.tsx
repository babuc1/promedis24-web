'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, ArrowDown, Heart, Building2, MapPin, Star, Users,
  Clock, Zap, Quote, Sparkles, ChevronRight, ChevronLeft, Check,
  Play, Image as ImageIcon, Camera, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

// ─── Types ───
interface JobProfile {
  id: number;
  title: string;
  area: 'Pflege' | 'Pädagogik' | 'Medizin';
  color: string;
  salary: string;
  benefits: string[];
  demand: string;
  imgHint: string;
}

// ─── Job Profiles Data ───
const jobProfiles: JobProfile[] = [
  { id: 1, title: "Gesundheits- &\nKrankenpfleger/in", area: "Pflege", color: "#23D2AF", salary: "3.800 – 4.600 €", benefits: ["Wunsch-Dienstplan", "Übertariflich", "Unbefristet"], demand: "Sehr hoch", imgHint: "Krankenschwester Klinikflur" },
  { id: 2, title: "Altenpfleger/in", area: "Pflege", color: "#23D2AF", salary: "3.600 – 4.300 €", benefits: ["Flexible Einsatzorte", "Zulagen", "Geburtstagsfrei"], demand: "Sehr hoch", imgHint: "Altenpflege warmherzig" },
  { id: 3, title: "Intensivpfleger/in", area: "Pflege", color: "#23D2AF", salary: "4.200 – 5.200 €", benefits: ["Top-Gehalt", "Modernste Kliniken", "On-Tour möglich"], demand: "Extrem hoch", imgHint: "Intensivstation professionell" },
  { id: 4, title: "Pflegefachkraft", area: "Pflege", color: "#23D2AF", salary: "3.600 – 4.400 €", benefits: ["Vielfältige Einsätze", "Weiterbildung", "Unbefristet"], demand: "Hoch", imgHint: "Pflegekraft Dokumentation" },
  { id: 5, title: "Erzieher/in", area: "Pädagogik", color: "#8A84F5", salary: "3.400 – 4.200 €", benefits: ["Wunsch-Einrichtung", "Kita bis Jugend", "Flexible Zeiten"], demand: "Sehr hoch", imgHint: "Erzieherin mit Kindern" },
  { id: 6, title: "Sozialpädagoge/in", area: "Pädagogik", color: "#8A84F5", salary: "3.600 – 4.400 €", benefits: ["Diverse Träger", "Eigenverantwortung", "Entwicklung"], demand: "Hoch", imgHint: "Sozialpädagogik Beratung" },
  { id: 7, title: "Heilerziehungs-\npfleger/in", area: "Pädagogik", color: "#8A84F5", salary: "3.400 – 4.100 €", benefits: ["Inklusion", "Abwechslung", "Persönliche Betreuung"], demand: "Hoch", imgHint: "Heilerziehung Betreuung" },
  { id: 8, title: "MFA – Medizinische\nFachangestellte", area: "Medizin", color: "#F59E42", salary: "3.200 – 3.800 €", benefits: ["Praxis & Klinik", "Regionale Einsätze", "Weiterbildung"], demand: "Hoch", imgHint: "MFA Arztpraxis" },
  { id: 9, title: "OTA – Operations-\ntechnische Assistenz", area: "Medizin", color: "#F59E42", salary: "3.800 – 4.600 €", benefits: ["OP-Erfahrung", "Top-Kliniken", "Spezialisierung"], demand: "Sehr hoch", imgHint: "OTA Operationssaal" },
];

// ─── Counter Component ───
function Counter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(target.replace(/[^0-9.,]/g, '').replace(',', '.'));
    if (isNaN(num)) return;
    const duration = 1200;
    const start = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * num);
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [isInView, target]);

  const display = target.includes(',') ? val.toFixed(1).replace('.', ',') : Math.round(val);
  return <span ref={ref}>{display}{suffix}</span>;
}

// ─── FadeIn Component ───
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.15, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Job Slider Component ───
function JobSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollL, setCanScrollL] = useState(false);
  const [canScrollR, setCanScrollR] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollL(el.scrollLeft > 10);
    setCanScrollR(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => { checkScroll(); }, []);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: 'smooth' });
    setTimeout(checkScroll, 400);
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      {canScrollL && (
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-coal/90 border border-white/10 flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform"
        >
          <ChevronLeft className="w-[18px] h-[18px] text-white" />
        </button>
      )}
      {canScrollR && (
        <button
          onClick={() => scroll(1)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-coal/90 border border-white/10 flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform"
        >
          <ChevronRight className="w-[18px] h-[18px] text-white" />
        </button>
      )}

      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {jobProfiles.map((job) => (
          <div
            key={job.id}
            className="min-w-[260px] max-w-[260px] snap-start bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer transition-all hover:-translate-y-1 hover:border-white/20"
          >
            {/* Image area */}
            <div
              className="h-40 relative flex flex-col items-center justify-center gap-1.5"
              style={{ background: `linear-gradient(135deg, ${job.color}12, ${job.color}06)` }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${job.color}05 10px, ${job.color}05 20px)` }}
              />
              <ImageIcon className="w-6 h-6 relative" style={{ color: `${job.color}25` }} />
              <span className="text-[8px] font-bold tracking-wider uppercase relative" style={{ color: `${job.color}35` }}>
                {job.imgHint}
              </span>
              {/* Area badge */}
              <div
                className="absolute top-3 left-3 rounded-md px-2.5 py-1 text-[10px] font-bold"
                style={{ background: job.color, color: job.area === 'Pädagogik' ? 'white' : '#002D32' }}
              >
                {job.area}
              </div>
              {/* Demand badge */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-md px-2 py-1 text-[9px] font-semibold text-white/60">
                {job.demand}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-extrabold text-base text-white leading-tight mb-2 whitespace-pre-line min-h-[40px]">
                {job.title}
              </h3>

              {/* Salary */}
              <div
                className="flex items-center gap-1.5 mb-3.5 rounded-lg px-3 py-2"
                style={{ background: `${job.color}10` }}
              >
                <span className="text-[11px] text-white/40">Gehalt</span>
                <span className="text-sm font-extrabold ml-auto" style={{ color: job.color }}>{job.salary}</span>
              </div>

              {/* Benefits */}
              <div className="flex flex-col gap-1.5 mb-4">
                {job.benefits.map(b => (
                  <div key={b} className="flex items-center gap-1.5">
                    <Check className="w-3 h-3" style={{ color: `${job.color}80` }} />
                    <span className="text-xs text-white/45">{b}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="w-full flex items-center justify-center gap-1.5 rounded-[10px] py-2.5 text-[13px] font-bold transition-opacity hover:opacity-85"
                style={{ background: job.color, color: job.area === 'Pädagogik' ? 'white' : '#002D32' }}
              >
                Jetzt bewerben <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="text-center mt-4">
        <span className="text-white/15 text-[10px] font-semibold">
          ← {jobProfiles.length} Stellenprofile · Scrollen oder Pfeile nutzen →
        </span>
      </div>
    </div>
  );
}

// ─── Process Timeline Component ───
function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { n: '1', title: 'Anfrage', time: 'Tag 1', desc: 'Sie melden Ihren Bedarf – telefonisch, per Mail oder Formular. Berufsfeld, Qualifikation, Einsatzort.' },
    { n: '2', title: 'Matching', time: 'Tag 1–3', desc: 'Ihr Area Manager sucht passende Fachkräfte. Qualifikation, Persönlichkeit und Teamfit zählen.' },
    { n: '3', title: 'Vorstellung', time: 'Tag 3–5', desc: 'Profil mit Qualifikationen und Referenzen. Sie entscheiden – kein Risiko, keine Verpflichtung.' },
    { n: '4', title: 'Einsatzstart', time: 'Ab Tag 5', desc: 'Die Fachkraft startet. Wir bleiben Ansprechpartner für beide Seiten.' },
  ];

  return (
    <div>
      {/* Step bar */}
      <div className="flex gap-0 mb-7">
        {steps.map((s, i) => (
          <div key={s.n} className="flex-1 cursor-pointer" onClick={() => setActiveStep(i)}>
            {/* Progress bar */}
            <div
              className="h-[3px] rounded mb-4 transition-colors duration-500"
              style={{ background: i <= activeStep ? '#8A84F5' : 'rgba(0,45,50,0.06)' }}
            />
            <div className="px-2">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-400"
                  style={{ background: i === activeStep ? '#8A84F5' : 'rgba(0,45,50,0.04)' }}
                >
                  <span
                    className="text-xs font-extrabold transition-colors duration-400"
                    style={{ color: i === activeStep ? 'white' : 'rgba(0,45,50,0.3)' }}
                  >
                    {s.n}
                  </span>
                </div>
                <span
                  className="text-sm font-bold transition-colors duration-400"
                  style={{ color: i === activeStep ? '#002D32' : 'rgba(0,45,50,0.35)' }}
                >
                  {s.title}
                </span>
              </div>
              <span
                className="text-[11px] font-semibold transition-colors duration-400"
                style={{ color: i === activeStep ? '#8A84F5' : 'rgba(0,45,50,0.2)' }}
              >
                {s.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Active step detail */}
      <div className="bg-amethyst/[0.06] border border-amethyst/10 rounded-[14px] px-7 py-6 min-h-[80px]">
        <p className="text-[15px] text-coal/70 leading-relaxed">
          {steps[activeStep].desc}
        </p>
      </div>
    </div>
  );
}

// ─── Main Homepage Component ───
export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="bg-white">
      {/* ═══ 1. HERO ═══ */}
      <section className="min-h-screen bg-coal flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#001a1e] via-coal to-[#0a2a30]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 30% 60%, rgba(35,210,175,0.04) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 30%, rgba(138,132,245,0.04) 0%, transparent 50%)
              `
            }}
          />
          <div className="absolute bottom-4 right-5 flex items-center gap-1.5 bg-black/30 rounded-md px-2 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white/25 text-[8px] font-semibold">VIDEO BG</span>
          </div>
          <div className="absolute inset-0 bg-[#001a1e]/85" />
        </div>

        <div className="relative z-10 max-w-[680px]">
          <FadeIn>
            <p className="text-white/30 text-[11px] font-bold tracking-[0.2em] uppercase mb-7">
              Seit 2011 · Pflege · Pädagogik · Medizin
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-white font-black text-4xl md:text-[52px] leading-[1.1] mb-5 tracking-tight">
              Wo <span className="text-turkis">Fachkräfte</span> und{' '}
              <span className="text-amethyst">Einrichtungen</span> zusammenfinden.
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="text-white/45 text-lg leading-relaxed mb-9 max-w-[520px] mx-auto">
              Promedis24 verbindet qualifizierte Fachkräfte mit den Einrichtungen, die sie brauchen – schnell, persönlich und spezialisiert.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <button
                onClick={() => scrollTo('bewerber')}
                className="inline-flex items-center gap-2 bg-turkis text-coal px-7 py-3.5 rounded-xl text-[15px] font-bold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(35,210,175,0.2)]"
              >
                <Heart className="w-4 h-4" />
                Ich suche einen Job
              </button>
              <button
                onClick={() => scrollTo('unternehmen')}
                className="inline-flex items-center gap-2 bg-amethyst text-white px-7 py-3.5 rounded-xl text-[15px] font-bold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(138,132,245,0.2)]"
              >
                <Building2 className="w-4 h-4" />
                Ich suche Personal
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        >
          <span className="text-white/15 text-[10px] font-semibold tracking-wider">Entdecken</span>
          <ArrowDown className="w-3.5 h-3.5 text-white/10" />
        </motion.div>
      </section>

      {/* ═══ 2. SOCIAL PROOF BAR ═══ */}
      <section className="bg-[#FAFAFA] border-b border-coal/[0.04]">
        <div className="max-w-[1080px] mx-auto px-6 py-8 flex justify-center gap-12 flex-wrap">
          {[
            { val: '600', suffix: '+', label: 'Fachkräfte', Icon: Users },
            { val: '14', suffix: '+', label: 'Jahre', Icon: Clock },
            { val: '4,6', suffix: '★', label: 'Indeed', Icon: Star },
            { val: '18', suffix: '', label: 'Standorte', Icon: MapPin },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <s.Icon className="w-4 h-4 text-coal/15" />
                <span className="font-black text-2xl text-coal tracking-tight">
                  <Counter target={s.val} suffix={s.suffix} />
                </span>
              </div>
              <p className="text-coal/30 text-[11px] mt-0.5">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ 3. FÜR WEN BIST DU HIER? ═══ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <FadeIn>
            <p className="text-center text-coal/35 text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Wie können wir helfen?
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-center font-black text-4xl leading-tight mb-12 text-coal">
              Für wen bist du hier?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bewerber Card */}
            <motion.div
              onClick={() => scrollTo('bewerber')}
              whileHover={{ y: -4 }}
              className="relative p-10 rounded-[20px] border border-turkis/10 bg-turkis/[0.02] cursor-pointer transition-all duration-500 overflow-hidden group hover:border-turkis/30 hover:bg-turkis/[0.05]"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-turkis" />

              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-turkis/10 group-hover:bg-turkis transition-all duration-400">
                <Heart className="w-[22px] h-[22px] text-turkis group-hover:text-white transition-colors duration-400" />
              </div>

              <h3 className="font-extrabold text-[22px] mb-2.5 text-coal">
                Ich bin <span className="text-turkis">Fachkraft</span>
              </h3>
              <p className="text-coal/55 text-[15px] leading-relaxed mb-6">
                Pflege, Pädagogik oder Medizin – finde den Job, der sich deinem Leben anpasst. Übertariflich, unbefristet, mit Wunsch-Dienstplan.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Jobs finden', 'Benefits', 'Standorte', 'On-Tour'].map(t => (
                  <span key={t} className="text-xs text-turkis bg-turkis/10 border border-turkis/15 rounded-md px-2.5 py-1 font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-turkis font-bold text-sm group-hover:translate-x-1 transition-transform duration-400">
                Jetzt entdecken <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Unternehmen Card */}
            <motion.div
              onClick={() => scrollTo('unternehmen')}
              whileHover={{ y: -4 }}
              className="relative p-10 rounded-[20px] border border-amethyst/10 bg-amethyst/[0.02] cursor-pointer transition-all duration-500 overflow-hidden group hover:border-amethyst/30 hover:bg-amethyst/[0.05]"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-amethyst" />

              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-amethyst/10 group-hover:bg-amethyst transition-all duration-400">
                <Building2 className="w-[22px] h-[22px] text-amethyst group-hover:text-white transition-colors duration-400" />
              </div>

              <h3 className="font-extrabold text-[22px] mb-2.5 text-coal">
                Ich bin <span className="text-amethyst">Einrichtung</span>
              </h3>
              <p className="text-coal/55 text-[15px] leading-relaxed mb-6">
                Qualifizierte Fachkräfte für Ihr Team – schnell, zuverlässig und spezialisiert auf Gesundheit & Soziales.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Zeitarbeit', 'Vermittlung', 'Prozess', 'Vorteile'].map(t => (
                  <span key={t} className="text-xs text-amethyst bg-amethyst/10 border border-amethyst/15 rounded-md px-2.5 py-1 font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-amethyst font-bold text-sm group-hover:translate-x-1 transition-transform duration-400">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 4. BEWERBER: JOB PROFILE SLIDER ═══ */}
      <section id="bewerber" className="bg-coal py-20 relative overflow-hidden">
        <div className="absolute bottom-[-15%] left-[-5%] w-[45%] h-[45%] bg-[radial-gradient(circle,rgba(35,210,175,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1080px] mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-7 h-[3px] bg-turkis rounded" />
              <span className="text-turkis text-[11px] font-bold tracking-[0.15em] uppercase opacity-70">
                Für Bewerber
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.04}>
            <div className="flex justify-between items-end mb-9 flex-wrap gap-4">
              <div>
                <h2 className="font-black text-4xl text-white leading-[1.1] mb-2.5">
                  Finde dein Stellenprofil.
                </h2>
                <p className="text-white/40 text-[15px]">
                  9 Berufsbilder in Pflege, Pädagogik und Medizin.
                </p>
              </div>
              <div className="flex gap-1.5">
                {['Pflege', 'Pädagogik', 'Medizin'].map(a => {
                  const col = a === 'Pflege' ? '#23D2AF' : a === 'Pädagogik' ? '#8A84F5' : '#F59E42';
                  return (
                    <span
                      key={a}
                      className="text-[11px] font-bold rounded-md px-2.5 py-1"
                      style={{ color: col, background: `${col}12`, border: `1px solid ${col}20` }}
                    >
                      {a}
                    </span>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <JobSlider />
          </FadeIn>
        </div>

        {/* Quiz Banner */}
        <div className="mt-12">
          <FadeIn>
            <div className="bg-gradient-to-br from-turkis/[0.08] to-turkis/[0.02] border-t border-b border-turkis/[0.12] py-5">
              <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-turkis/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-turkis" />
                  </div>
                  <div>
                    <p className="font-bold text-[13px] text-white">Vorurteile über Zeitarbeit?</p>
                    <p className="text-white/30 text-[11px]">Mach den Quiz – 2 Minuten, null Verpflichtung.</p>
                  </div>
                </div>
                <Link
                  href="/zeitarbeit-quiz"
                  className="inline-flex items-center gap-1.5 text-turkis text-xs font-bold bg-turkis/10 border border-turkis/[0.18] rounded-lg px-3.5 py-1.5 hover:bg-turkis/15 transition-colors"
                >
                  Quiz starten <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <div className="pt-9">
          <FadeIn>
            <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
              <p className="text-white/35 text-sm">Kein Anschreiben. Kein Formular. Nur 60 Sekunden.</p>
              <Button href="/bewerben" variant="primary">
                Jetzt bewerben <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 4. UNTERNEHMEN: 2 PRODUCTS + PROCESS ═══ */}
      <section id="unternehmen" className="bg-white py-20">
        <div className="max-w-[1080px] mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-7 h-[3px] bg-amethyst rounded" />
              <span className="text-amethyst text-[11px] font-bold tracking-[0.15em] uppercase opacity-70">
                Für Unternehmen
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.04}>
            <h2 className="font-black text-4xl text-coal leading-[1.1] mb-2.5">
              Zwei Wege zu Ihrem Personal.
            </h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-coal/40 text-[15px] leading-relaxed mb-9 max-w-[480px]">
              Ob flexibel über Zeitarbeit oder langfristig per Direktvermittlung – wir finden die passende Lösung.
            </p>
          </FadeIn>

          {/* 2 Product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {[
              {
                title: 'Zeitarbeit',
                href: '/fuer-unternehmen/zeitarbeit',
                subtitle: 'Flexibel & schnell',
                desc: 'Qualifizierte Fachkräfte für Ihren kurzfristigen oder laufenden Bedarf. Fest bei uns angestellt, fachlich bei Ihnen.',
                highlights: ['Besetzung in 48h', 'Geprüfte Qualifikation', 'Übernahme möglich', 'Kein Recruiting-Aufwand'],
                imgHint: 'Klinik-Alltag / Pflegekraft im Einsatz',
                tag: 'Unsere Kernkompetenz',
              },
              {
                title: 'Personalvermittlung',
                href: '/personalvermittlung',
                subtitle: 'Langfristig & direkt',
                desc: 'Die Fachkraft, die bleibt. Wir suchen, prüfen und vermitteln direkt in Ihre Festanstellung – erfolgsbasiert.',
                highlights: ['Direktanstellung bei Ihnen', 'Erfolgsbasierte Vergütung', 'Nachbesetzungsgarantie', 'Active Sourcing'],
                imgHint: 'Handschlag / Teamfoto / Einstellung',
                tag: 'Premium Service',
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={0.12 + i * 0.08}>
                <Link
                  href={card.href}
                  className="flex flex-col bg-white border border-coal/[0.06] rounded-[18px] overflow-hidden h-full transition-all hover:border-amethyst/30 hover:shadow-[0_8px_32px_rgba(138,132,245,0.08)] group"
                >
                  {/* Image header */}
                  <div
                    className="h-[180px] relative flex flex-col items-center justify-center gap-1.5"
                    style={{ background: 'linear-gradient(135deg, rgba(138,132,245,0.08), rgba(138,132,245,0.04))' }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(138,132,245,0.03) 12px, rgba(138,132,245,0.03) 24px)' }}
                    />
                    <ImageIcon className="w-[22px] h-[22px] text-amethyst/20 relative" />
                    <span className="text-amethyst/25 text-[9px] font-semibold tracking-wide relative">{card.imgHint}</span>
                    <div className="absolute top-3.5 left-3.5 bg-amethyst rounded-lg px-3 py-1 text-[10px] font-bold text-white">
                      {card.tag}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-amethyst text-[11px] font-bold tracking-wide mb-1">{card.subtitle}</p>
                    <h3 className="font-black text-2xl text-coal mb-2.5">{card.title}</h3>
                    <p className="text-coal/50 text-sm leading-relaxed mb-5 flex-1">{card.desc}</p>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
                      {card.highlights.map(h => (
                        <div key={h} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-amethyst/70" />
                          <span className="text-xs text-coal/50">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-amethyst text-[13px] font-bold">
                      Mehr erfahren <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* PROCESS – interactive */}
          <FadeIn delay={0.2}>
            <div className="border-t border-coal/[0.06] pt-10">
              <div className="flex items-center justify-between mb-7 flex-wrap gap-4">
                <div>
                  <p className="text-amethyst text-[11px] font-bold tracking-[0.1em] uppercase mb-1.5">Unser Prozess</p>
                  <h3 className="font-extrabold text-[22px] text-coal">In 4 Schritten zur Besetzung</h3>
                </div>
                <Link
                  href="/fuer-unternehmen/prozess"
                  className="inline-flex items-center gap-1 text-amethyst text-xs font-bold"
                >
                  Details <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <ProcessTimeline />
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.25}>
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-coal/[0.06] flex-wrap gap-4">
              <p className="text-coal/40 text-sm">Ihr Area Manager meldet sich innerhalb von 48 Stunden.</p>
              <Button href="/kontakt" variant="secondary">
                Personal anfragen <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 5. TESTIMONIALS ═══ */}
      <section className="bg-[#FAFAFA] py-[72px] px-6">
        <div className="max-w-[1080px] mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-coal/30 text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Echte Stimmen
              </p>
              <h2 className="font-black text-[30px] text-coal">
                Was unsere Partner sagen
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-7">
            {[
              {
                quote: 'Beste Entscheidung. Verschiedene Kliniken unter der Woche, am Wochenende meine Familie.',
                name: 'Patrick K.',
                role: 'Intensivpfleger',
                color: '#23D2AF',
              },
              {
                quote: 'Mit Promedis24 haben wir einen Partner, der unsere Branche versteht.',
                name: 'AWO München',
                role: 'Träger der Sozialwirtschaft',
                color: '#8A84F5',
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div
                  className="rounded-[14px] p-7 flex gap-[18px]"
                  style={{ background: `${t.color}05`, border: `1px solid ${t.color}10` }}
                >
                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-full border-2 flex items-center justify-center text-[15px] font-extrabold flex-shrink-0"
                    style={{ background: `${t.color}12`, borderColor: `${t.color}18`, color: t.color }}
                  >
                    {t.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <Quote className="w-4 h-4 mb-2 opacity-20" style={{ color: t.color }} />
                    <p className="text-coal text-sm italic leading-relaxed mb-3">„{t.quote}"</p>
                    <p className="font-bold text-xs text-coal">
                      {t.name} <span className="font-normal text-coal/40">· {t.role}</span>
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="text-center">
              <Link
                href="/erfolgsgeschichten"
                className="inline-flex items-center gap-1.5 text-coal/40 text-xs font-semibold border border-coal/[0.08] rounded-lg px-3.5 py-1.5 hover:border-coal/15 hover:text-coal transition-all"
              >
                Alle Erfolgsgeschichten <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 6. FINAL CTA ═══ */}
      <section className="bg-coal py-[68px] px-6">
        <div className="max-w-[1080px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-black text-[32px] text-white leading-tight mb-3">
              Bereit? Wir auch.
            </h2>
          </FadeIn>

          <FadeIn delay={0.04}>
            <p className="text-white/40 text-[15px] leading-relaxed mb-7">
              Der erste Schritt ist der einfachste.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Button href="/bewerben" variant="primary">
                In 60 Sek. bewerben <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
              <Button href="/kontakt" variant="secondary">
                Personal anfragen <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
