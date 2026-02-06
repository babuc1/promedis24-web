"use client";

import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: "sm" | "md" | "lg";
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, gap = "md", children, ...props }, ref) => {
    const colsMap = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    };

    const gapMap = {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
    };

    return (
      <div
        ref={ref}
        className={cn("grid", colsMap[cols], gapMap[gap], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";

export { Grid };
