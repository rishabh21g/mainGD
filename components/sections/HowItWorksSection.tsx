"use client";

import { MousePointer2, Pencil, Share2 } from "lucide-react";

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
    description:
      "Use pen, shapes, text, or freehand. Your creativity, your rules.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Share instantly",
    description: "Export or share with a link. Collaboration made effortless.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 ">
      <div className="sketchy-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple as <span className="text-primary">1, 2, 3</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No learning curve. No complicated tools. Just draw.
          </p>
        </div>
        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card p-8 border-3 border-primary rounded-md shadow-sketchy text-center">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg border-3 border-card">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/30 rounded-md flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
