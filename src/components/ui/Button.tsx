"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "ghost-dark" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const buttonStyles = {
  base: "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  variants: {
    // Primary (Bewerber): Türkis BG + White Text (nicht coal - beide sind grünlich)
    primary:
      "bg-turkis text-[#FFFFFF] hover:bg-turkis-dark focus-visible:ring-turkis shadow-md hover:shadow-lg",
    // Secondary (Unternehmen): Amethyst BG + White Text
    secondary:
      "bg-amethyst text-white hover:bg-amethyst-dark focus-visible:ring-amethyst shadow-md hover:shadow-lg",
    // Ghost für helle Hintergründe
    ghost: "bg-transparent text-coal hover:bg-grey focus-visible:ring-turkis",
    // Ghost für dunkle Hintergründe
    "ghost-dark": "bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white",
    // Outline
    outline:
      "bg-transparent border-2 border-turkis text-turkis hover:bg-turkis hover:text-white focus-visible:ring-turkis",
  },
  sizes: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  },
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      children,
      ...rest
    } = props;

    const classes = cn(
      buttonStyles.base,
      buttonStyles.variants[variant],
      buttonStyles.sizes[size],
      fullWidth && "w-full",
      className
    );

    const content = isLoading ? (
      <span className="flex items-center gap-2">
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Laden...
      </span>
    ) : (
      children
    );

    // If href is provided, render as Link
    if ("href" in rest && rest.href) {
      const { href, onClick } = rest as ButtonAsLink;
      return (
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            onClick={onClick}
          >
            {content}
          </Link>
        </motion.span>
      );
    }

    // Otherwise, render as button
    const { onClick, disabled, type = "button" } = rest as ButtonAsButton;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={classes}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
