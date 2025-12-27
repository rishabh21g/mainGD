"use client";

import SketchyButton from "@/components/ui/SketchyButton";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, GiftIcon, Mail } from "lucide-react";
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
  {
    icon: GiftIcon,
    href: "https://instagram.com/@godraw.app",
    label: "Instagram",
  },
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
    <footer className=" pt-24 pb-12 overflow-hidden">
      <div className="sketchy-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/icon-512.png"
                  alt="GoDraw Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-primary">
                Go<span className="text-secondary">Draw</span>
              </span>
            </Link>

            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
              The whiteboard that feels like paper. <br />
              Sketch, brainstorm, and collaborate without the clunky interface.
            </p>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border-2 border-primary rounded-md flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground shadow-sketchy-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold mb-6 capitalize text-lg">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border-3 border-primary rounded-md p-8 md:p-10 shadow-sketchy mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-muted-foreground">
                Get the latest sketching tips and updates.
              </p>
            </div>

            <div className="w-full md:w-auto flex-1 max-w-md">
              {isSubscribed ? (
                <div className="bg-green-100 border-2 border-green-500 text-green-800 p-4 rounded-md flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Thanks for subscribing!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col gap-2"
                >
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        placeholder="Enter your email"
                        className={cn(
                          "w-full px-4 py-3 bg-background border-2",
                          "rounded-md",
                          error ? "border-red-500" : "border-primary"
                        )}
                      />
                      {error && (
                        <div className="absolute -bottom-6 left-2 flex items-center gap-1 text-xs text-red-500 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          {error}
                        </div>
                      )}
                    </div>
                    <SketchyButton variant="primary">Subscribe</SketchyButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-primary/20 pt-8 text-sm text-muted-foreground text-center">
          © 2025 GoDraw. Made with ✏️ for creators everywhere.
        </div>
      </div>
    </footer>
  );
}
