"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Underline } from "@/components/decorations/Doodles";

const faqs = [
  {
    question: "Is GoDraw really free?",
    answer:
      "Yes! GoDraw is completely free to use. We believe everyone should have access to a simple, fast drawing tool without any barriers.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "Nope! You can start drawing immediately without signing up. If you want to save your work online, you can optionally create a free account.",
  },
  {
    question: "Can I use GoDraw offline?",
    answer:
      "Absolutely! GoDraw works as a Progressive Web App (PWA). Once loaded, you can use it without an internet connection.",
  },
  {
    question: "What file formats can I export?",
    answer:
      "You can export your drawings as PNG, SVG, or PDF. We also support copying directly to clipboard for quick sharing.",
  },
  {
    question: "Is there a limit to canvas size?",
    answer:
      "No limits! The canvas is infinite. Pan, zoom, and expand your creativity as much as you want.",
  },
  {
    question: "Can I collaborate with others?",
    answer:
      "Real-time collaboration is coming soon! For now, you can share your drawings via a unique link.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-muted/20">
      <div className="sketchy-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Got{" "}
            <span className="relative inline-block text-primary">
              questions?
              <Underline className="absolute -bottom-2 left-0 w-full h-3 text-accent" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve got answers. Here are the most common questions about
            GoDraw.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "bg-card border-3 border-primary overflow-hidden",
                "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
                openIndex === index && "shadow-sketchy"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground border-t-2 border-primary/20 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
