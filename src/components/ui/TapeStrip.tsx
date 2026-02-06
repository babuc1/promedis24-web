"use client";

import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TapeStripProps extends HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom" | "both";
  color?: "turkis" | "amethyst";
  rotation?: number;
}

const TapeStrip = forwardRef<HTMLDivElement, TapeStripProps>(
  (
    {
      className,
      position = "top",
      color = "turkis",
      rotation = -2,
      children,
      ...props
    },
    ref
  ) => {
    const colorMap = {
      turkis: "bg-turkis/30",
      amethyst: "bg-amethyst/30",
    };

    const tapeStyle = {
      transform: `rotate(${rotation}deg)`,
    };

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {(position === "top" || position === "both") && (
          <div
            className={cn(
              "absolute -top-3 left-4 w-20 h-6 rounded-sm z-10",
              colorMap[color]
            )}
            style={tapeStyle}
          />
        )}
        {children}
        {(position === "bottom" || position === "both") && (
          <div
            className={cn(
              "absolute -bottom-3 right-4 w-20 h-6 rounded-sm z-10",
              colorMap[color]
            )}
            style={{ ...tapeStyle, transform: `rotate(${-rotation}deg)` }}
          />
        )}
      </div>
    );
  }
);

TapeStrip.displayName = "TapeStrip";

export { TapeStrip };
