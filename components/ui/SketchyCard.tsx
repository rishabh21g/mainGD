"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SketchyCardProps {
  children: ReactNode;
  className?: string;
}

export default function SketchyCard({ children, className }: SketchyCardProps) {
  return (
    <div
      className={cn(
        "bg-card p-6 border-3 border-primary",
        "rounded-md",
        "shadow-sketchy",
        className
      )}
    >
      {children}
    </div>
  );
}
