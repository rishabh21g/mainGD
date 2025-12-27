"use client";

import SketchyButton from "@/components/ui/SketchyButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
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
      {/* ================= Desktop Header ================= */}
      <header className="hidden md:flex w-full justify-center px-4 py-4 mx-auto max-w-7xl">
        <nav className="bg-card/95 backdrop-blur-md border-3 border-primary px-8 py-4 w-full rounded-md shadow-sketchy">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex gap-4 align-center">
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
                <span className="text-xl font-bold text-primary">GoDraw</span>
              </Link>
              {/* Nav Links */}
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
            </div>

            {/* Nav + Right Actions */}
            <div className="flex items-center gap-8">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Twitter">
                  <BsTwitterX className="w-5 h-5 text-primary hover:scale-110 transition" />
                </a>
                <a href="#" aria-label="Instagram">
                  <IoLogoInstagram className="w-6 h-6 text-primary hover:scale-110 transition" />
                </a>
              </div>

              {/* Login Button */}
              <SketchyButton variant="primary" size="sm">
                Sign in
              </SketchyButton>
              <SketchyButton variant="ghost" size="sm">
                Try for free
              </SketchyButton>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= Mobile Header ================= */}
      <header className="md:hidden w-full px-4 pt-6 relative z-50">
        <nav className="bg-card/95 backdrop-blur-md border-3 border-primary px-4 py-3 rounded-md shadow-sketchy">
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
              <span className="text-lg font-bold text-primary">
                Go<span className="text-secondary">Draw</span>
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-primary"
            >
              <IoMdMenu size={24} />
            </button>
          </div>
        </nav>

        {/* ===== Backdrop (FIRST) ===== */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
          />
        )}

        {/* ===== Mobile Menu ===== */}
        {mobileMenuOpen && (
          <div className="mt-3 bg-card/95 backdrop-blur-md border-3 border-primary p-4 rounded-md shadow-sketchy relative z-50">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-primary">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <MdClose size={22} />
              </button>
            </div>

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

              {/* Social Icons */}
              <div className="flex justify-center gap-6 py-4">
                <BsTwitterX className="w-6 h-6 text-primary" />
                <IoLogoInstagram className="w-6 h-6 text-primary" />
              </div>

              <SketchyButton className="w-full py-3">Sign in</SketchyButton>
              <SketchyButton className="w-full py-3" variant="ghost">
                Try for free
              </SketchyButton>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
