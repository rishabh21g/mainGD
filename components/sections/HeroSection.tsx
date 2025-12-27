"use client";

import SketchyButton from "@/components/ui/SketchyButton";
import SketchyBadge from "@/components/ui/SketchyBadge";
import { Zap, PencilLine } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className=" min-h-screen pt-28 pb-20 overflow-hidden  flex flex-col items-center justify-start">
      <div className="sketchy-container  w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <SketchyBadge variant="primary">
              <Zap className="w-4 h-4 mr-1" />
              Lightning-fast canvas
            </SketchyBadge>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-tight">
            Sketch your{" "}
            <span className=" inline-block">
              <span className="text-primary">ideas</span>
            </span>
            <br />
            at the speed of thought
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The simplest way to draw, sketch, and take quick notes. No
            complexity, just a lightning-fast canvas for your creativity.
          </p>
          <div className="flex justify-center mb-24">
            <SketchyButton
              variant="primary"
              size="lg"
              className="text-xl px-10 py-5 flex items-center gap-3"
            >
              Start Drawing
              <PencilLine className="w-6 h-6" />
            </SketchyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
