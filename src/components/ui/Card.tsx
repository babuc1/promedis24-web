"use client";

import { type HTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "turkis" | "amethyst" | "tape";
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hoverable = false,
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-xl transition-all duration-300";

    const variants = {
      default: "bg-white border border-grey shadow-sm",
      turkis: "bg-turkis-light border border-turkis/20",
      amethyst: "bg-amethyst-light border border-amethyst/20",
      tape: "bg-white border border-grey shadow-sm relative before:absolute before:top-0 before:left-4 before:w-16 before:h-6 before:bg-turkis/30 before:-translate-y-1/2 before:rotate-[-2deg] before:rounded-sm",
    };

    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    const hoverStyles = hoverable
      ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      : "";

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverStyles,
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
