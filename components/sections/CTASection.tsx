"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Pencil, Circle } from "@/components/decorations/Doodles"

const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
}

const floatVariants = {
  animate: {
    y: [-5, 5, -5],
    rotate: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export default function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <Pencil className="absolute top-10 left-10 text-primary/10 hidden lg:block" />
      <Star className="absolute bottom-10 right-20 text-accent/30 hidden lg:block" />
      <Circle className="absolute top-20 right-10 text-secondary/20 hidden lg:block" />

      <motion.svg
        className="absolute top-0 left-20 w-40 h-20 text-primary/20 hidden md:block"
        viewBox="0 0 200 100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.path
          d="M10,50 Q50,10 100,50 T190,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          variants={drawVariants}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-20 left-10 w-32 h-32 text-accent/20 hidden md:block"
        viewBox="0 0 100 100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 10"
          variants={{
            ...drawVariants,
            visible: {
              ...drawVariants.visible,
              transition: { pathLength: { duration: 2, ease: "easeInOut" }, opacity: { duration: 0.3 } },
            },
          }}
        />
      </motion.svg>

      <motion.svg
        className="absolute top-10 right-32 w-24 h-24 text-secondary/30 hidden lg:block"
        viewBox="0 0 100 100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.path
          d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            ...drawVariants,
            visible: {
              ...drawVariants.visible,
              transition: { pathLength: { duration: 1.8, ease: "easeInOut", delay: 0.3 }, opacity: { duration: 0.3, delay: 0.3 } },
            },
          }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-10 right-10 w-28 h-16 text-primary/15 hidden md:block"
        viewBox="0 0 140 80"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.path
          d="M10,40 C30,10 50,70 70,40 S110,10 130,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          variants={{
            ...drawVariants,
            visible: {
              ...drawVariants.visible,
              transition: { pathLength: { duration: 1.2, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.3, delay: 0.5 } },
            },
          }}
        />
      </motion.svg>

      <div className="sketchy-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative"
        >
          <motion.svg
            className="absolute -top-8 -left-8 w-16 h-16 text-accent/40"
            viewBox="0 0 100 100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.path
              d="M20,20 L80,20 L80,80 L20,80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              variants={drawVariants}
              style={{ rotate: 12 }}
            />
          </motion.svg>

          <motion.svg
            className="absolute -bottom-6 -right-6 w-20 h-12 text-primary/30"
            viewBox="0 0 100 60"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.path
              d="M5,30 Q25,5 50,30 T95,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              variants={{
                ...drawVariants,
                visible: {
                  ...drawVariants.visible,
                  transition: { pathLength: { duration: 0.8, ease: "easeInOut", delay: 0.6 }, opacity: { duration: 0.3, delay: 0.6 } },
                },
              }}
            />
          </motion.svg>

          <motion.div
            variants={containerVariants}
            whileHover={{ rotate: [-0.3, 0.3, 0] }}
            className="bg-primary text-primary-foreground p-8 md:p-10 border-3 border-primary-dark rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-sketchy-lg text-center relative"
          >
            <motion.svg
              className="absolute -top-4 left-1/4 w-20 h-3 text-accent/60"
              viewBox="0 0 100 15"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M0,7 C20,2 40,12 60,7 S90,2 100,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                variants={drawVariants}
              />
            </motion.svg>

            <motion.svg
              className="absolute top-4 -right-3 w-8 h-16 text-card/40"
              viewBox="0 0 40 80"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M20,5 L20,75"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 6"
                variants={{
                  ...drawVariants,
                  visible: {
                    ...drawVariants.visible,
                    transition: { pathLength: { duration: 0.6, ease: "easeInOut", delay: 0.4 }, opacity: { duration: 0.3, delay: 0.4 } },
                  },
                }}
              />
            </motion.svg>

            <motion.svg
              className="absolute -left-2 bottom-1/3 w-6 h-12 text-secondary/40"
              viewBox="0 0 30 60"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M15,5 C5,20 25,40 15,55"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                variants={{
                  ...drawVariants,
                  visible: {
                    ...drawVariants.visible,
                    transition: { pathLength: { duration: 0.7, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.3, delay: 0.5 } },
                  },
                }}
              />
            </motion.svg>

            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-3"
            >
              Ready to start sketching?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg opacity-90 max-w-md mx-auto mb-6"
            >
              Join thousands of creators who use GoDraw every day.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div
                variants={floatVariants}
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <Image
                  src="/images/fullLogo.png"
                  alt="Start Drawing"
                  width={200}
                  height={60}
                  className="drop-shadow-lg"
                />
              </motion.div>
            </motion.div>

            <motion.svg
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-4 text-card/30"
              viewBox="0 0 100 20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M0,10 C20,0 30,20 50,10 S80,0 100,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                variants={{
                  ...drawVariants,
                  visible: {
                    ...drawVariants.visible,
                    transition: { pathLength: { duration: 1, ease: "easeInOut", delay: 0.7 }, opacity: { duration: 0.3, delay: 0.7 } },
                  },
                }}
              />
            </motion.svg>

            <motion.svg
              className="absolute bottom-8 right-8 w-6 h-6 text-accent/50"
              viewBox="0 0 30 30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.circle
                cx="15"
                cy="15"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                variants={{
                  ...drawVariants,
                  visible: {
                    ...drawVariants.visible,
                    transition: { pathLength: { duration: 0.5, ease: "easeInOut", delay: 0.8 }, opacity: { duration: 0.3, delay: 0.8 } },
                  },
                }}
              />
            </motion.svg>

            <motion.svg
              className="absolute top-8 left-8 w-5 h-5 text-card/40"
              viewBox="0 0 25 25"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M5,12.5 L20,12.5 M12.5,5 L12.5,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  ...drawVariants,
                  visible: {
                    ...drawVariants.visible,
                    transition: { pathLength: { duration: 0.4, ease: "easeInOut", delay: 0.9 }, opacity: { duration: 0.3, delay: 0.9 } },
                  },
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}