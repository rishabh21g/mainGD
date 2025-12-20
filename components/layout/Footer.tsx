"use client";

import SketchyButton from "@/components/ui/SketchyButton";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "FAQs", href: "#faq" },
    { name: "Pricing", href: "#pricing" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Community", href: "#" },
  ],
  company: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
};

const socialLinks = [
  { icon: XIcon, href: "https://x.com/@godraw_", label: "X" },
  { icon: Instagram, href: "https://instagram.com/@godraw.app", label: "Instagram" },
  { icon: Mail, href: "mailto:helpgodraw@gmail.com", label: "Email" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-muted/30 pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-4 bg-[url('/images/paper-edge.svg')] bg-repeat-x opacity-50" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 text-secondary/10 w-32 h-32"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M50 50 m-40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0"
            strokeDasharray="10 10"
          />
        </motion.svg>

        <motion.svg
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-10 text-primary/10 w-24 h-24"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M10 50 Q 25 10, 50 50 T 90 50" strokeLinecap="round" />
        </motion.svg>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-40 left-1/4 text-accent/20"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
          </svg>
        </motion.div>

        <motion.svg
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/4 text-primary/10 w-20 h-20"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 20 C 20 20, 40 80, 80 80" strokeLinecap="round" />
          <path d="M20 80 C 20 80, 80 20, 80 20" strokeLinecap="round" />
        </motion.svg>

        <div className="absolute top-10 left-10 opacity-20 rotate-12">
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            className="text-foreground"
          >
            <path
              d="M10 10 Q 50 90 90 10"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="sketchy-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <motion.div
                whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                className="relative w-10 h-10"
              >
                <Image
                  src="/images/icon-512.png"
                  alt="GoDraw Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <span className="text-2xl font-bold text-primary tracking-tight">
                Go<span className="text-secondary">Draw</span>
              </span>
            </Link>

            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed relative">
              The whiteboard that feels like paper. <br />
              Sketch, brainstorm, and collaborate without the clunky interface.
              <svg
                className="absolute -bottom-4 right-10 w-16 h-8 text-primary/20"
                viewBox="0 0 100 50"
                fill="none"
                stroke="currentColor"
              >
                <path d="M0 25 Q 50 0 100 25" strokeWidth="3" fill="none" />
              </svg>
            </p>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, rotate: [-10, 10, 0] }}
                  className="w-12 h-12 bg-card border-2 border-primary rounded-[255px_15px_225px_15px/15px_225px_15px_255px] flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors shadow-sketchy-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-foreground mb-6 capitalize text-lg flex items-center gap-2">
                  {category}
                  <svg className="w-full max-w-[40px] h-2" viewBox="0 0 40 5">
                    <path
                      d="M0 2.5 Q 20 5, 40 2.5"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 6 }}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border-3 border-primary rounded-[15px_255px_15px_225px/225px_15px_255px_15px] p-8 md:p-10 shadow-sketchy relative overflow-hidden mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-muted-foreground">
                Get the latest sketching tips, feature updates, and occasional
                doodles.
              </p>
            </div>

            <div className="w-full md:w-auto flex-1 max-w-md relative">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 border-2 border-green-500 text-green-800 p-4 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Thanks for subscribing! You&apos;re awesome.</span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col gap-2"
                >
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        placeholder="Enter your email"
                        className={cn(
                          "w-full px-4 py-3 bg-background border-2",
                          "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
                          "focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                          error
                            ? "border-red-500 focus:ring-red-200"
                            : "border-primary"
                        )}
                      />
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-6 left-2 flex items-center gap-1 text-xs text-red-500 font-medium"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {error}
                        </motion.div>
                      )}
                    </div>
                    <SketchyButton type="submit" variant="primary" size="md">
                      Subscribe
                    </SketchyButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-primary/20 pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© 2025 GoDraw. Made with ✏️ for creators everywhere.</p>
        </div>

        <div className="text-center pt-8 pb-4 relative">
          <span className="inline-block relative px-8 py-2 font-sketchy text-lg text-primary/80 italic">
            <span className="text-2xl opacity-50 absolute top-0 left-0">
              &quot;
            </span>
            Every masterpiece starts with a single stroke
            <span className="text-2xl opacity-50 absolute bottom-0 right-0">
              &quot;
            </span>
          </span>

          <svg
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 text-accent/40"
            viewBox="0 0 200 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q 100 10 200 5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5 5"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}