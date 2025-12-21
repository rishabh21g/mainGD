"use client"

import { motion } from "framer-motion"
import SketchyCard from "@/components/ui/SketchyCard"
import { Underline } from "@/components/decorations/Doodles"
import { 
  Users, 
  Infinity, 
  WifiOff, 
  Save, 
  FileDown, 
  Shapes,
  Smile,
  Zap,
  LucideIcon
} from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  size: "small" | "medium" | "large"
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Draw together with friends or colleagues instantly. See their cursors move in real-time as you brainstorm together. Coming Soon!",
    size: "large",
  },
  {
    icon: Infinity,
    title: "Infinite & Page-based",
    description: "Start with an infinite canvas for big ideas, or use pages to organize your thoughts into structured documents.",
    size: "medium",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Buttery smooth performance with zero lag. Optimized rendering ensures your creativity flows without interruption.",
    size: "small",
  },
  {
    icon: WifiOff,
    title: "Work Offline",
    description: "No internet? No problem. GoDraw works completely offline and syncs when you're back.",
    size: "small",
  },
  {
    icon: Save,
    title: "Persistent Storage",
    description: "Your drawings are automatically saved to your browser's local storage. Never lose an idea.",
    size: "small",
  },
  {
    icon: FileDown,
    title: "PDF Export",
    description: "Export your masterpieces or notes to PDF format for easy sharing, printing, or archiving.",
    size: "small",
  },
  {
    icon: Shapes,
    title: "Bundles of SVGs",
    description: "Access a massive library of hand-drawn sketchy icons and shapes. Drag, drop, and customize them to fit your style.",
    size: "large",
  },
  {
    icon: Smile,
    title: "Simple & Easy",
    description: "Zero learning curve. The interface is designed to get out of your way so you can focus on creativity.",
    size: "medium",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-grid-sketchy relative">
      <div className="sketchy-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to{" "}
            <span className="relative inline-block text-primary">
              create
              <Underline className="absolute -bottom-2 left-0 w-full h-3 text-accent" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools wrapped in a simple, sketchy interface.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`${
                feature.size === "large" ? "lg:col-span-2" : 
                feature.size === "medium" ? "lg:col-span-2" : "col-span-1"
              }`}
            >
              <SketchyCard className="h-full group">
                <div className={`flex ${feature.size === "large" ? "flex-col sm:flex-row items-start sm:items-center gap-6" : "flex-col items-start"}`}>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className={`${
                      feature.size === "large" ? "w-20 h-20 shrink-0" : "w-14 h-14"
                    } bg-primary/10 rounded-[15px_255px_15px_225px/225px_15px_255px_15px] flex items-center justify-center mb-4 sm:mb-0 group-hover:bg-primary/20 transition-colors`}
                  >
                    <feature.icon className={`${
                      feature.size === "large" ? "w-10 h-10" : "w-7 h-7"
                    } text-primary`} />
                  </motion.div>
                  <div className={feature.size === "large" ? "flex-1" : ""}>
                    <h3 className={`${
                      feature.size === "large" ? "text-2xl" : "text-xl"
                    } font-bold text-foreground mb-2 mt-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SketchyCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}