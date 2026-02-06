"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Share2, RotateCcw } from "lucide-react";
import { Section, Button, Card } from "@/components/ui";
import quizQuestions from "@/content/quiz/questions.json";

type QuizState = "intro" | "playing" | "result";

export default function QuizPage() {
  const [state, setState] = useState<QuizState>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const currentQuestion = quizQuestions[currentIndex];

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === currentQuestion.answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswers([...answers, answer]);

    setTimeout(() => {
      if (currentIndex < quizQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setState("result");
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setState("intro");
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
  };

  const getResultMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) {
      return {
        title: "Zeitarbeit-Experte!",
        message: "Du kennst dich bestens aus. Du weißt, dass Zeitarbeit bei Promedis24 richtig gut sein kann!",
      };
    } else if (percentage >= 50) {
      return {
        title: "Gut informiert!",
        message: "Du hast einiges über Zeitarbeit gelernt. Es gibt noch mehr Vorteile zu entdecken!",
      };
    } else {
      return {
        title: "Vorurteile ade!",
        message: "Du hast einige Mythen über Zeitarbeit aufgedeckt. Zeit, die Wahrheit zu entdecken!",
      };
    }
  };

  return (
    <>
      {/* Intro State */}
      {state === "intro" && (
        <Section variant="turkis" padding="lg">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-2 bg-white/20 text-coal rounded-full text-sm font-medium mb-6">
                Interaktives Quiz
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-coal mb-6">
                Was weißt du wirklich über Zeitarbeit?
              </h1>
              <p className="text-lg text-coal/80 mb-8">
                Teste dein Wissen und räume mit den häufigsten Vorurteilen auf.
                6 Fragen – 2 Minuten – viele Aha-Momente!
              </p>
              <Button
                onClick={() => setState("playing")}
                className="bg-white text-turkis hover:bg-white/90"
              >
                Quiz starten
                <ArrowRight size={20} className="ml-2" />
              </Button>

              <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-2xl font-bold text-coal">6</p>
                  <p className="text-sm text-coal/70">Fragen</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-2xl font-bold text-coal">2</p>
                  <p className="text-sm text-coal/70">Minuten</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-2xl font-bold text-coal">100%</p>
                  <p className="text-sm text-coal/70">Aha-Momente</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      )}

      {/* Playing State */}
      {state === "playing" && (
        <Section variant="default" padding="lg">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-coal/60 mb-2">
                <span>Frage {currentIndex + 1} von {quizQuestions.length}</span>
                <span>{score} richtig</span>
              </div>
              <div className="h-2 bg-grey rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-turkis"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentIndex) / quizQuestions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <Card className="p-8 md:p-12">
                  <p className="text-sm text-turkis font-medium mb-2">
                    Mythos #{currentIndex + 1}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-coal mb-8">
                    &ldquo;{currentQuestion.myth}&rdquo;
                  </h2>

                  {answers.length === currentIndex ? (
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleAnswer(true)}
                        className="flex-1 p-4 rounded-xl border-2 border-turkis text-turkis font-medium hover:bg-turkis hover:text-white transition-all"
                      >
                        <Check size={20} className="inline mr-2" />
                        Stimmt
                      </button>
                      <button
                        onClick={() => handleAnswer(false)}
                        className="flex-1 p-4 rounded-xl border-2 border-amethyst text-amethyst font-medium hover:bg-amethyst hover:text-white transition-all"
                      >
                        <X size={20} className="inline mr-2" />
                        Stimmt nicht
                      </button>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-6 rounded-xl ${
                        answers[currentIndex] === currentQuestion.answer
                          ? "bg-turkis-light border border-turkis"
                          : "bg-amethyst-light border border-amethyst"
                      }`}
                    >
                      <p className="font-bold text-coal mb-2">
                        {answers[currentIndex] === currentQuestion.answer
                          ? "Richtig!"
                          : "Nicht ganz..."}
                      </p>
                      <p className="text-coal/80">{currentQuestion.explanation}</p>
                      <p className="mt-4 text-sm font-medium text-turkis">
                        Fakt: {currentQuestion.fact}
                      </p>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </Section>
      )}

      {/* Result State */}
      {state === "result" && (
        <Section variant="turkis" padding="lg">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-turkis">
                  {score}/{quizQuestions.length}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-coal mb-4">
                {getResultMessage().title}
              </h1>
              <p className="text-lg text-coal/80 mb-8">
                {getResultMessage().message}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  href="/bewerben"
                  className="bg-white text-turkis hover:bg-white/90"
                >
                  Jetzt bewerben
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button variant="outline" onClick={resetQuiz}>
                  <RotateCcw size={20} className="mr-2" />
                  Nochmal spielen
                </Button>
              </div>

              <button className="inline-flex items-center gap-2 text-coal/70 hover:text-coal">
                <Share2 size={20} />
                Ergebnis teilen
              </button>
            </motion.div>
          </div>
        </Section>
      )}
    </>
  );
}
