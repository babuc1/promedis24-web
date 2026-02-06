"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui";

const stats = [
  { value: 14, label: "Jahre Erfahrung", suffix: "" },
  { value: 600, label: "Zufriedene Talents", suffix: "+" },
  { value: 4.6, label: "Sterne Bewertung", suffix: "", decimals: 1 },
  { value: 50, label: "Standorte in Deutschland", suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <Section variant="coal" padding="md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-turkis mb-2">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </div>
            <p className="text-sm md:text-base text-white/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
