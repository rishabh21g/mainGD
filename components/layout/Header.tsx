"use client";

import SketchyButton from "@/components/ui/SketchyButton";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex relative w-full justify-center px-4 pt-10">
        <nav
          className={cn(
            "bg-card/95 backdrop-blur-md border-3 border-primary px-8 py-3",
            "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
            "shadow-sketchy"
          )}
        >
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/icon-512.png"
                  alt="GoDraw Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-primary tracking-tight">
                Go<span className="text-secondary">Draw</span>
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-bold text-sm text-foreground/80 hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="w-0.5 h-6 bg-primary/10 rotate-12 rounded-full" />

              <SketchyButton
                variant="primary"
                size="sm"
                className="text-sm px-6 py-2"
              >
                Log in
              </SketchyButton>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden relative w-full px-4 pt-6">
        <nav
          className={cn(
            "bg-card/95 backdrop-blur-md border-3 border-primary px-4 py-3",
            "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
            "shadow-sketchy"
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-7 h-7">
                <Image
                  src="/images/icon-512.png"
                  alt="GoDraw Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg font-bold text-primary tracking-tight">
                Go<span className="text-secondary">Draw</span>
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <div
              className={cn(
                "mt-3 bg-card/95 backdrop-blur-md border-3 border-primary p-4",
                "rounded-[25px_15px_25px_15px/15px_25px_15px_25px]",
                "shadow-sketchy relative z-50"
              )}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-bold text-base text-foreground/80 hover:text-primary py-3 px-4 rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="h-0.5 bg-primary/10 my-2 rounded-full" />

                <SketchyButton
                  variant="primary"
                  size="sm"
                  className="w-full text-base py-3"
                >
                  Log in
                </SketchyButton>
              </div>
            </div>

            {/* Backdrop */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
            />
          </>
        )}
      </header>
    </>
  );
}
