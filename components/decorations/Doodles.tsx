"use client"

import { motion } from "framer-motion"

export function Pencil({ className }: { className?: string }) {
  return (
    <motion.svg
      animate={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={className}
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </motion.svg>
  )
}

export function Star({ className }: { className?: string }) {
  return (
    <motion.svg
      animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className={className}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
    </motion.svg>
  )
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <motion.svg
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      className={className}
      width="120"
      height="30"
      viewBox="0 0 120 30"
      fill="none"
    >
      <motion.path
        d="M2 15 Q 15 2, 30 15 T 60 15 T 90 15 T 118 15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  )
}

export function Circle({ className }: { className?: string }) {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={className}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <circle
        cx="30"
        cy="30"
        r="25"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="10 5"
      />
    </motion.svg>
  )
}

export function Arrow({ className }: { className?: string }) {
  return (
    <motion.svg
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className={className}
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
    >
      <path
        d="M5 20 Q 20 10, 40 20 T 75 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M65 15 L 75 20 L 65 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.svg>
  )
}

export function Dots({ className }: { className?: string }) {
  return (
    <motion.div className={className}>
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
          className="inline-block w-2 h-2 mx-1 rounded-full bg-current"
        />
      ))}
    </motion.div>
  )
}

export function Underline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 20"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
        d="M3 10 Q 50 3, 100 10 T 197 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}