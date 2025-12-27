import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SketchyBadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  className?: string;
}

export default function SketchyBadge({
  children,
  variant = "default",
  className,
}: SketchyBadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground border-primary/50",
    primary: "bg-primary/10 text-primary border-primary",
    secondary: "bg-secondary/20 text-secondary-dark border-secondary",
    accent: "bg-accent/30 text-accent-foreground border-accent-dark",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-sm font-medium border-2",
        "rounded-md",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
