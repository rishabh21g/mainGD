"use client";

import SketchyButton from "@/components/ui/SketchyButton";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto"
    >
      <nav
        className={cn(
          "bg-card/95 backdrop-blur-md border-3 border-primary px-8 py-3",
          "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
          "shadow-sketchy relative"
        )}
      >
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <motion.div
              whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative w-8 h-8"
            >
              <Image
                src="/images/icon-512.png"
                alt="GoDraw Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="text-xl font-bold text-primary tracking-tight">
              Go<span className="text-secondary">Draw</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-foreground/80 hover:text-primary font-bold text-sm transition-colors relative group"
                >
                  {link.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
                    style={{ borderRadius: "255px 15px 225px 15px" }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="w-0.5 h-6 bg-primary/10 rotate-12 rounded-full" />

            <div className="flex items-center gap-3">
              <SketchyButton
                variant="ghost"
                size="sm"
                className="text-sm px-4 py-2"
              >
                Log in
              </SketchyButton>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
