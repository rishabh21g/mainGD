"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SketchyButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function SketchyButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: SketchyButtonProps) {
  const baseStyles =
    "relative font-sketchy font-semibold cursor-pointer select-none";

  const variants = {
    primary: "bg-primary text-primary-foreground shadow-sketchy",
    secondary: "bg-secondary text-secondary-foreground shadow-sketchy-accent",
    outline: "bg-transparent border-3 border-primary text-primary",
    ghost: "bg-transparent text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
        className
      )}
    >
      {children}
    </button>
  );
}
