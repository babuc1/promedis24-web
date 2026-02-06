"use client";

import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "coal" | "turkis" | "amethyst" | "grey";
  container?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = "default",
      container = true,
      padding = "lg",
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "bg-white text-coal",
      coal: "bg-coal text-white",
      turkis: "bg-turkis-light text-coal",
      amethyst: "bg-amethyst-light text-coal",
      grey: "bg-grey text-coal",
    };

    const paddings = {
      none: "",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
    };

    return (
      <section
        ref={ref}
        className={cn(variants[variant], paddings[padding], className)}
        {...props}
      >
        {container ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
