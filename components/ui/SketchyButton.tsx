"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SketchyButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export default function SketchyButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: SketchyButtonProps) {
  const baseStyles = "relative font-sketchy font-semibold transition-all duration-200 cursor-pointer select-none"
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-light shadow-sketchy hover:shadow-sketchy-lg hover:-translate-x-0.5 hover:-translate-y-0.5",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-sketchy-accent hover:shadow-sketchy-lg",
    outline: "bg-transparent border-3 border-primary text-primary hover:bg-primary/10",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <motion.button
      whileHover={{ rotate: [-1, 1, -1, 0] }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
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
    </motion.button>
  )
}