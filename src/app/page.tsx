'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, ArrowDown, Heart, Building2, Check, MapPin, Star, Users,
  Clock, Zap, Shield, Calendar, Quote
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Animated counter component
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

// Fade in wrapper
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.15, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [routeHover, setRouteHover] = useState<'b' | 'u' | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="bg-white text-coal">
      {/* ═══ 1. HERO ═══ */}
      <section className="min-h-screen bg-coal flex flex-col justify-center items-center text-center px-6 py-20 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(35,210,175,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(138,132,245,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-[720px]">
          <FadeIn>
            <p className="text-white/35 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Seit 2011 · Gesundheits- & Sozialwesen
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-white font-black text-4xl md:text-[56px] leading-[1.08] mb-6 tracking-tight">
              Wo <span className="text-turkis">Fachkräfte</span> und{' '}
              <span className="text-amethyst">Einrichtungen</span> zusammenfinden.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-[560px] mx-auto">
              Promedis24 verbindet qualifizierte Pflege-, Pädagogik- und Medizin-Fachkräfte
              mit den Einrichtungen, die sie brauchen.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => scrollTo('bewerber-section')}
                className="inline-flex items-center gap-2.5 bg-turkis px-7 py-4 rounded-xl text-base font-bold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(35,210,175,0.25)] transition-all"
                style={{ color: '#FFFFFF' }}
              >
                <Heart className="w-[18px] h-[18px]" />
                Ich suche einen Job
              </button>
              <button
                onClick={() => scrollTo('unternehmen-section')}
                className="inline-flex items-center gap-2.5 bg-amethyst text-white px-7 py-4 rounded-xl text-base font-bold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(138,132,245,0.25)] transition-all"
              >
                <Building2 className="w-[18px] h-[18px]" />
                Ich suche Personal
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-[11px] font-semibold tracking-wider">Mehr entdecken</span>
          <ArrowDown className="w-4 h-4 text-white/15" />
        </motion.div>
      </section>

      {/* ═══ 2. SOCIAL PROOF BAR ═══ */}
      <section className="bg-grey border-b border-coal/5">
        <div className="max-w-[960px] mx-auto px-6 py-10 flex justify-center gap-16 flex-wrap">
          {[
            { val: '600', suffix: '+', label: 'Fachkräfte', Icon: Users },
            { val: '14', suffix: '+', label: 'Jahre Erfahrung', Icon: Clock },
            { val: '4,6', suffix: '★', label: 'Indeed Bewertung', Icon: Star },
            { val: '18', suffix: '', label: 'Standorte', Icon: MapPin },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08} className="text-center">
              <div className="flex items-center justify-center gap-2.5">
                <s.Icon className="w-[18px] h-[18px] text-coal/20" />
                <span className="font-black text-[28px] text-coal tracking-tight">
                  <Counter target={s.val} suffix={s.suffix} />
                </span>
              </div>
              <p className="text-coal/40 text-[13px] mt-1 font-medium">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ 3. ROUTE CARDS ═══ */}
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
              onClick={() => scrollTo('bewerber-section')}
              onMouseEnter={() => setRouteHover('b')}
              onMouseLeave={() => setRouteHover(null)}
              whileHover={{ y: -4 }}
              className={`relative p-10 rounded-[20px] border cursor-pointer transition-all duration-500 overflow-hidden ${
                routeHover === 'b' ? 'border-turkis/30 bg-turkis/[0.03]' : 'border-coal/5 bg-white'
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-turkis transition-opacity duration-500 ${routeHover === 'b' ? 'opacity-100' : 'opacity-0'}`} />

              <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 transition-all duration-400 ${
                routeHover === 'b' ? 'bg-turkis' : 'bg-turkis/10'
              }`}>
                <Heart className={`w-[22px] h-[22px] transition-colors duration-400 ${routeHover === 'b' ? 'text-white' : 'text-turkis'}`} />
              </div>

              <h3 className="font-extrabold text-[22px] mb-2.5 text-coal">
                Ich bin <span className="text-turkis">Fachkraft</span>
              </h3>
              <p className="text-coal/55 text-[15px] leading-relaxed mb-6">
                Pflege, Pädagogik oder Medizin – finde den Job, der sich deinem Leben anpasst. Übertariflich, unbefristet, mit Wunsch-Dienstplan.
              </p>

              <div className={`flex flex-wrap gap-1.5 mb-6 transition-opacity duration-400 ${routeHover === 'b' ? 'opacity-100' : 'opacity-50'}`}>
                {['Jobs finden', 'Benefits', 'Quiz', 'On-Tour'].map(t => (
                  <span key={t} className="text-xs text-turkis bg-turkis/5 border border-turkis/10 rounded-md px-2.5 py-1 font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              <div className={`flex items-center gap-1.5 text-turkis font-bold text-sm transition-transform duration-400 ${routeHover === 'b' ? 'translate-x-1' : ''}`}>
                Jetzt entdecken <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Unternehmen Card */}
            <motion.div
              onClick={() => scrollTo('unternehmen-section')}
              onMouseEnter={() => setRouteHover('u')}
              onMouseLeave={() => setRouteHover(null)}
              whileHover={{ y: -4 }}
              className={`relative p-10 rounded-[20px] border cursor-pointer transition-all duration-500 overflow-hidden ${
                routeHover === 'u' ? 'border-amethyst/30 bg-amethyst/[0.03]' : 'border-coal/5 bg-white'
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-amethyst transition-opacity duration-500 ${routeHover === 'u' ? 'opacity-100' : 'opacity-0'}`} />

              <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 transition-all duration-400 ${
                routeHover === 'u' ? 'bg-amethyst' : 'bg-amethyst/10'
              }`}>
                <Building2 className={`w-[22px] h-[22px] transition-colors duration-400 ${routeHover === 'u' ? 'text-white' : 'text-amethyst'}`} />
              </div>

              <h3 className="font-extrabold text-[22px] mb-2.5 text-coal">
                Ich bin <span className="text-amethyst">Einrichtung</span>
              </h3>
              <p className="text-coal/55 text-[15px] leading-relaxed mb-6">
                Qualifizierte Fachkräfte für Ihr Team – schnell, zuverlässig und spezialisiert auf Gesundheit & Soziales.
              </p>

              <div className={`flex flex-wrap gap-1.5 mb-6 transition-opacity duration-400 ${routeHover === 'u' ? 'opacity-100' : 'opacity-50'}`}>
                {['Zeitarbeit', 'Prozess', 'Vorteile', 'Vermittlung'].map(t => (
                  <span key={t} className="text-xs text-amethyst bg-amethyst/5 border border-amethyst/10 rounded-md px-2.5 py-1 font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              <div className={`flex items-center gap-1.5 text-amethyst font-bold text-sm transition-transform duration-400 ${routeHover === 'u' ? 'translate-x-1' : ''}`}>
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 4A. BEWERBER SECTION ═══ */}
      <section id="bewerber-section" className="bg-coal py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-[-20%] left-[-10%] w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(35,210,175,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[960px] mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-[3px] bg-turkis rounded" />
              <span className="text-turkis text-xs font-bold tracking-[0.15em] uppercase opacity-80">
                Für Bewerber
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="font-black text-4xl text-white leading-[1.1] mb-4">
              Der Job, der sich deinem<br />Leben anpasst.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-white/50 text-[17px] leading-relaxed mb-12 max-w-[560px]">
              Nicht du passt dich dem Job an – der Job passt sich dir an.
              Bei Promedis24 bestimmst du Dienstplan, Einsatzort und Arbeitsweise.
            </p>
          </FadeIn>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: Calendar, title: 'Wunsch-Dienstplan', desc: 'Du sagst, wann du arbeiten möchtest. Kein Einspringen, keine Überraschungen.' },
              { icon: Shield, title: 'Unbefristeter Vertrag', desc: 'Festanstellung bei Promedis24 mit vollem Sozialversicherungsschutz.' },
              { icon: Zap, title: 'Übertarifliches Gehalt', desc: 'Mehr verdienen als in Festanstellung. Plus Zulagen für Schicht und Wochenende.' },
            ].map((f, i) => (
              <FadeIn key={f.title} delay={0.15 + i * 0.08}>
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-7 hover:border-turkis/15 hover:bg-turkis/[0.04] transition-all">
                  <f.icon className="w-[22px] h-[22px] text-turkis opacity-80 mb-4" />
                  <h3 className="font-extrabold text-[17px] text-white mb-2">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.35}>
            <div className="flex gap-3.5 flex-wrap">
              <Button href="/bewerben" variant="primary">
                In 60 Sek. bewerben <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/benefits" variant="ghost-dark">
                Alle Benefits ansehen
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 4B. UNTERNEHMEN SECTION ═══ */}
      <section id="unternehmen-section" className="bg-white py-24 px-6">
        <div className="max-w-[960px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-[3px] bg-amethyst rounded" />
              <span className="text-amethyst text-xs font-bold tracking-[0.15em] uppercase opacity-80">
                Für Unternehmen
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="font-black text-4xl text-coal leading-[1.1] mb-4">
              Fachkräfte, die zu Ihrem<br />Team passen.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-coal/50 text-[17px] leading-relaxed mb-12 max-w-[560px]">
              Keine generischen Profile. Wir verstehen Ihre Branche und finden
              die Fachkraft, die fachlich und menschlich passt.
            </p>
          </FadeIn>

          {/* Process steps */}
          <div className="grid grid-cols-4 gap-0 mb-12">
            {[
              { step: '1', title: 'Anfrage', desc: 'Bedarf melden', time: 'Tag 1' },
              { step: '2', title: 'Matching', desc: 'Wir suchen passend', time: 'Tag 1–3' },
              { step: '3', title: 'Vorstellung', desc: 'Sie entscheiden', time: 'Tag 3–5' },
              { step: '4', title: 'Einsatz', desc: 'Fachkraft startet', time: 'Ab Tag 5' },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={0.15 + i * 0.08} className="text-center relative">
                {i < 3 && (
                  <div className="absolute top-5 left-[60%] right-[-40%] h-0.5 bg-amethyst/10" />
                )}
                <div className="w-10 h-10 rounded-xl bg-amethyst/10 flex items-center justify-center mx-auto mb-3 relative z-10">
                  <span className="font-extrabold text-base text-amethyst">{s.step}</span>
                </div>
                <h4 className="font-extrabold text-[15px] text-coal mb-1">{s.title}</h4>
                <p className="text-coal/40 text-[13px]">{s.desc}</p>
                <span className="text-amethyst text-[11px] font-bold opacity-60">{s.time}</span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.35}>
            <div className="flex gap-3.5 flex-wrap">
              <Button href="/kontakt" variant="secondary">
                Personal anfragen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/fuer-unternehmen" variant="outline">
                Vorteile ansehen
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 5. TESTIMONIALS ═══ */}
      <section className="bg-grey py-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <FadeIn>
            <h2 className="text-center font-black text-[32px] text-coal mb-12">
              Echte Stimmen
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: 'Beste Entscheidung. Unter der Woche verschiedene Kliniken, am Wochenende meine Familie.',
                name: 'Patrick K.', role: 'Intensivpfleger', color: 'turkis',
              },
              {
                quote: 'Mit Promedis24 haben wir einen Partner, der unsere Branche versteht – nicht nur Schichten füllt.',
                name: 'AWO München', role: 'Träger der Sozialwirtschaft', color: 'amethyst',
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className={`rounded-[20px] p-9 h-full ${
                  t.color === 'turkis' ? 'bg-turkis/[0.04] border border-turkis/10' : 'bg-amethyst/[0.04] border border-amethyst/10'
                }`}>
                  <Quote className={`w-6 h-6 mb-4 opacity-25 ${t.color === 'turkis' ? 'text-turkis' : 'text-amethyst'}`} />
                  <p className="text-coal text-[17px] italic leading-relaxed mb-5">
                    „{t.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-sm text-coal">{t.name}</p>
                    <p className="text-[13px] text-coal/40">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="text-center mt-8">
              <Button href="/erfolgsgeschichten" variant="outline" size="sm">
                Alle Erfolgsgeschichten <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 6. FINAL CTA ═══ */}
      <section className="bg-coal py-20 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-black text-4xl text-white leading-tight mb-4">
              Bereit? Wir auch.
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-white/45 text-[17px] leading-relaxed mb-9">
              Ob als Fachkraft oder als Einrichtung – der erste Schritt ist der einfachste.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Button href="/bewerben" variant="primary">
                In 60 Sek. bewerben <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/kontakt" variant="secondary">
                Personal anfragen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
