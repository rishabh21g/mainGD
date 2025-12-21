"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SketchyCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function SketchyCard({
  children,
  className,
  hover = true,
}: SketchyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { rotate: [-0.5, 0.5, 0], y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-card p-6 border-3 border-primary",
        "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
        "shadow-sketchy transition-all duration-200",
        hover && "hover:shadow-sketchy-lg hover:-translate-x-0.5 hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </motion.div>
  )
}