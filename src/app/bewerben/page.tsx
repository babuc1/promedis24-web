"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  GraduationCap,
  HeartPulse,
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
} from "lucide-react";
import { Section, Button, Card } from "@/components/ui";

type Step = 1 | 2 | 3 | 4 | 5;

const areas = [
  { id: "pflege", label: "Pflege", icon: HeartPulse },
  { id: "paedagogik", label: "Pädagogik", icon: GraduationCap },
  { id: "medizin", label: "Medizin", icon: Stethoscope },
];

const qualifications: Record<string, string[]> = {
  pflege: [
    "Gesundheits- und Krankenpfleger/in",
    "Altenpfleger/in",
    "Pflegefachmann/-frau",
    "Krankenpflegehelfer/in",
    "Pflegeassistent/in",
    "Andere",
  ],
  paedagogik: [
    "Erzieher/in",
    "Sozialpädagoge/-in",
    "Kinderpfleger/in",
    "Heilerziehungspfleger/in",
    "Sozialassistent/in",
    "Andere",
  ],
  medizin: [
    "Medizinisch-technische/r Assistent/in",
    "Operationstechnische/r Assistent/in",
    "Medizinische/r Fachangestellte/r",
    "Physiotherapeut/in",
    "Ergotherapeut/in",
    "Andere",
  ],
};

export default function BewerbenPage() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    area: "",
    qualification: "",
    region: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (step < 5) {
      setStep((step + 1) as Step);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.area !== "";
      case 2:
        return formData.qualification !== "";
      case 3:
        return formData.region !== "";
      case 4:
        return (
          formData.name !== "" &&
          formData.email !== "" &&
          formData.phone !== ""
        );
      default:
        return true;
    }
  };

  if (isSubmitted) {
    return (
      <Section variant="turkis" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={48} className="text-turkis" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-coal mb-4">
              Bewerbung erhalten!
            </h1>
            <p className="text-lg text-coal/80 mb-8">
              Vielen Dank für deine Bewerbung, {formData.name}! Wir melden uns
              innerhalb von 24 Stunden bei dir.
            </p>
            <Button href="/" className="bg-white text-turkis hover:bg-white/90">
              Zur Startseite
            </Button>
          </motion.div>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section variant="turkis" padding="md">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-coal rounded-full text-sm font-medium mb-4">
              <Clock size={16} />
              In 60 Sekunden bewerben
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-coal">
              Starte jetzt deine Karriere
            </h1>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-coal/60 mb-2">
              <span>Schritt {step} von 5</span>
              <span>{Math.round((step / 5) * 100)}%</span>
            </div>
            <div className="h-2 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                animate={{ width: `${(step / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="default" padding="lg">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            {/* Step 1: Area */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-coal mb-2">
                  In welchem Bereich arbeitest du?
                </h2>
                <p className="text-coal/60 mb-6">Wähle deinen Fachbereich</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {areas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => setFormData({ ...formData, area: area.id })}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        formData.area === area.id
                          ? "border-turkis bg-turkis-light"
                          : "border-grey hover:border-turkis"
                      }`}
                    >
                      <area.icon
                        size={32}
                        className={`mx-auto mb-2 ${
                          formData.area === area.id ? "text-turkis" : "text-coal/60"
                        }`}
                      />
                      <p className="font-medium text-coal">{area.label}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Qualification */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-coal mb-2">
                  Was ist deine Qualifikation?
                </h2>
                <p className="text-coal/60 mb-6">
                  Wähle deine aktuelle Berufsbezeichnung
                </p>

                <div className="space-y-3">
                  {qualifications[formData.area]?.map((qual) => (
                    <button
                      key={qual}
                      onClick={() =>
                        setFormData({ ...formData, qualification: qual })
                      }
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        formData.qualification === qual
                          ? "border-turkis bg-turkis-light"
                          : "border-grey hover:border-turkis"
                      }`}
                    >
                      <span className="font-medium text-coal">{qual}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Region */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-coal mb-2">
                  Wo möchtest du arbeiten?
                </h2>
                <p className="text-coal/60 mb-6">
                  Gib deine Postleitzahl oder Stadt ein
                </p>

                <input
                  type="text"
                  placeholder="z.B. 10115 oder Berlin"
                  value={formData.region}
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                  className="w-full p-4 rounded-xl border-2 border-grey focus:border-turkis focus:outline-none text-lg"
                />

                <p className="mt-4 text-sm text-coal/60">
                  Wir finden Jobs in deiner Nähe – deutschlandweit verfügbar.
                </p>
              </motion.div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-coal mb-2">
                  Fast geschafft!
                </h2>
                <p className="text-coal/60 mb-6">
                  Gib deine Kontaktdaten ein, damit wir uns bei dir melden
                  können
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-coal mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Vor- und Nachname"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-4 rounded-xl border-2 border-grey focus:border-turkis focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coal mb-1">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      placeholder="deine@email.de"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-4 rounded-xl border-2 border-grey focus:border-turkis focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coal mb-1">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      placeholder="+49 123 456789"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full p-4 rounded-xl border-2 border-grey focus:border-turkis focus:outline-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-coal mb-2">
                  Deine Bewerbung
                </h2>
                <p className="text-coal/60 mb-6">
                  Überprüfe deine Angaben und sende deine Bewerbung ab
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-grey rounded-xl">
                    <p className="text-sm text-coal/60">Bereich</p>
                    <p className="font-medium text-coal">
                      {areas.find((a) => a.id === formData.area)?.label}
                    </p>
                  </div>
                  <div className="p-4 bg-grey rounded-xl">
                    <p className="text-sm text-coal/60">Qualifikation</p>
                    <p className="font-medium text-coal">
                      {formData.qualification}
                    </p>
                  </div>
                  <div className="p-4 bg-grey rounded-xl">
                    <p className="text-sm text-coal/60">Region</p>
                    <p className="font-medium text-coal">{formData.region}</p>
                  </div>
                  <div className="p-4 bg-grey rounded-xl">
                    <p className="text-sm text-coal/60">Kontakt</p>
                    <p className="font-medium text-coal">{formData.name}</p>
                    <p className="text-coal/70">{formData.email}</p>
                    <p className="text-coal/70">{formData.phone}</p>
                  </div>
                </div>

                <p className="text-xs text-coal/60 mb-4">
                  Mit dem Absenden deiner Bewerbung stimmst du unserer{" "}
                  <a href="/datenschutz" className="text-turkis hover:underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-grey">
              {step > 1 ? (
                <Button variant="ghost" onClick={handleBack}>
                  <ArrowLeft size={20} className="mr-2" />
                  Zurück
                </Button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <Button onClick={handleNext} disabled={!canProceed()}>
                  Weiter
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Bewerbung absenden
                </Button>
              )}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
