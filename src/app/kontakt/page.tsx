"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import { Section, Card, Button } from "@/components/ui";

type FormType = "bewerber" | "unternehmen";

export default function KontaktPage() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const [formType, setFormType] = useState<FormType>("bewerber");

  // Set form type from URL parameter on mount
  useEffect(() => {
    if (typeParam === "unternehmen") {
      setFormType("unternehmen");
    }
  }, [typeParam]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Section
        variant={formType === "bewerber" ? "turkis" : "amethyst"}
        padding="lg"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Check
                size={48}
                className={formType === "bewerber" ? "text-turkis" : "text-amethyst"}
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-coal mb-4">
              Nachricht gesendet!
            </h1>
            <p className="text-lg text-coal/80 mb-8">
              Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich
              bei Ihnen.
            </p>
            <Button href="/" variant="ghost" className="bg-white !text-coal hover:bg-white/90">
              Zur Startseite
            </Button>
          </motion.div>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Section variant="default" padding="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-coal mb-6">
            Kontakt
          </h1>
          <p className="text-lg text-coal/70">
            Haben Sie Fragen oder möchten Sie uns kontaktieren? Wir sind für Sie
            da – ob als Bewerber oder als Unternehmen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-turkis-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-turkis" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-coal">Telefon</h3>
                  <a
                    href="tel:080012345678"
                    className="text-turkis hover:underline"
                  >
                    0800 123 456 78
                  </a>
                  <p className="text-sm text-coal/60">Mo-Fr 8:00-18:00 Uhr</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-turkis-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-turkis" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-coal">E-Mail</h3>
                  <a
                    href="mailto:info@promedis24.de"
                    className="text-turkis hover:underline"
                  >
                    info@promedis24.de
                  </a>
                  <p className="text-sm text-coal/60">
                    Wir antworten innerhalb von 24h
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-turkis-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-turkis" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-coal">Zentrale</h3>
                  <p className="text-coal/70">
                    Musterstraße 123
                    <br />
                    12345 Musterstadt
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2" padding="lg">
            {/* Form Type Toggle */}
            <div className="flex bg-grey rounded-full p-1 mb-8">
              <button
                onClick={() => setFormType("bewerber")}
                className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  formType === "bewerber"
                    ? "bg-turkis text-white"
                    : "text-coal hover:text-turkis"
                }`}
              >
                Ich bin Bewerber
              </button>
              <button
                onClick={() => setFormType("unternehmen")}
                className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  formType === "unternehmen"
                    ? "bg-amethyst text-white"
                    : "text-coal hover:text-amethyst"
                }`}
              >
                Ich bin Unternehmen
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formType === "unternehmen" && (
                <div>
                  <label className="block text-sm font-medium text-coal mb-1">
                    Einrichtung / Unternehmen *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full p-4 rounded-xl border-2 border-grey focus:border-amethyst focus:outline-none"
                    placeholder="Name Ihrer Einrichtung"
                  />
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-coal mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full p-4 rounded-xl border-2 border-grey focus:outline-none ${
                      formType === "bewerber"
                        ? "focus:border-turkis"
                        : "focus:border-amethyst"
                    }`}
                    placeholder="Vor- und Nachname"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-coal mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full p-4 rounded-xl border-2 border-grey focus:outline-none ${
                      formType === "bewerber"
                        ? "focus:border-turkis"
                        : "focus:border-amethyst"
                    }`}
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-coal mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full p-4 rounded-xl border-2 border-grey focus:outline-none ${
                    formType === "bewerber"
                      ? "focus:border-turkis"
                      : "focus:border-amethyst"
                  }`}
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-coal mb-1">
                  Nachricht *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full p-4 rounded-xl border-2 border-grey focus:outline-none resize-none ${
                    formType === "bewerber"
                      ? "focus:border-turkis"
                      : "focus:border-amethyst"
                  }`}
                  placeholder={
                    formType === "bewerber"
                      ? "Wie können wir Ihnen helfen?"
                      : "Beschreiben Sie Ihren Personalbedarf..."
                  }
                />
              </div>

              <p className="text-xs text-coal/60">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="/datenschutz" className="text-turkis hover:underline">
                  Datenschutzerklärung
                </a>{" "}
                zu.
              </p>

              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className={
                  formType === "bewerber"
                    ? "bg-turkis hover:bg-turkis-dark"
                    : "bg-amethyst hover:bg-amethyst-dark"
                }
                fullWidth
              >
                <Send size={20} className="mr-2" />
                Nachricht senden
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
