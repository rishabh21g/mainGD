"use client"

import { motion } from "framer-motion"
import { MousePointer2, Pencil, Share2 } from "lucide-react"
import { Arrow } from "@/components/decorations/Doodles"

const steps = [
  {
    number: "01",
    icon: MousePointer2,
    title: "Open the canvas",
    description: "No signup required. Just open GoDraw and start immediately.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Draw anything",
    description: "Use pen, shapes, text, or freehand. Your creativity, your rules.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Share instantly",
    description: "Export or share with a link. Collaboration made effortless.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="sketchy-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple as <span className="text-primary">1, 2, 3</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No learning curve. No complicated tools. Just draw.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <svg className="w-full h-8" viewBox="0 0 1200 30" fill="none" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                d="M100 15 Q 300 5, 400 15 T 600 15 T 800 15 T 1100 15"
                stroke="hsl(var(--primary) / 0.3)"
                strokeWidth="3"
                strokeDasharray="10 10"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ rotate: [-1, 1, -1, 0], scale: 1.02 }}
                  className="bg-card p-8 border-3 border-primary rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-sketchy text-center"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg border-3 border-card">
                    {step.number}
                  </div>
                  
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="w-20 h-20 mx-auto mb-6 bg-accent/30 rounded-[15px_255px_15px_225px/225px_15px_255px_15px] flex items-center justify-center"
                  >
                    <step.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 translate-x-1/2 -translate-y-1/2">
                    <Arrow className="w-12 h-6 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}