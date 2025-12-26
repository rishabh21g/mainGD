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
        "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
        "shadow-sketchy",
        className
      )}
    >
      {children}
    </div>
  );
}
