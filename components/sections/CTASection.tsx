"use client";

import Image from "next/image";
import { Star, Pencil, Circle } from "@/components/decorations/Doodles";

export default function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decorations */}
      <Pencil className="absolute top-10 left-10 text-primary/10 hidden lg:block" />
      <Star className="absolute bottom-10 right-20 text-accent/30 hidden lg:block" />
      <Circle className="absolute top-20 right-10 text-secondary/20 hidden lg:block" />

      {/* Static SVG doodles */}
      <svg
        className="absolute top-0 left-20 w-40 h-20 text-primary/20 hidden md:block"
        viewBox="0 0 200 100"
      >
        <path
          d="M10,50 Q50,10 100,50 T190,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="absolute bottom-20 left-10 w-32 h-32 text-accent/20 hidden md:block"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 10"
        />
      </svg>

      <svg
        className="absolute top-10 right-32 w-24 h-24 text-secondary/30 hidden lg:block"
        viewBox="0 0 100 100"
      >
        <path
          d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        className="absolute bottom-10 right-10 w-28 h-16 text-primary/15 hidden md:block"
        viewBox="0 0 140 80"
      >
        <path
          d="M10,40 C30,10 50,70 70,40 S110,10 130,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div className="sketchy-container relative z-10">
        <div className="max-w-2xl mx-auto relative">
          {/* Card decorations */}
          <svg
            className="absolute -top-8 -left-8 w-16 h-16 text-accent/40"
            viewBox="0 0 100 100"
          >
            <path
              d="M20,20 L80,20 L80,80 L20,80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ transform: "rotate(12deg)", transformOrigin: "center" }}
            />
          </svg>

          <svg
            className="absolute -bottom-6 -right-6 w-20 h-12 text-primary/30"
            viewBox="0 0 100 60"
          >
            <path
              d="M5,30 Q25,5 50,30 T95,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* CTA Card */}
          <div className="bg-primary text-primary-foreground p-8 md:p-10 border-3 border-primary-dark rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-sketchy-lg text-center relative">
            <svg
              className="absolute -top-4 left-1/4 w-20 h-3 text-accent/60"
              viewBox="0 0 100 15"
            >
              <path
                d="M0,7 C20,2 40,12 60,7 S90,2 100,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <svg
              className="absolute top-4 -right-3 w-8 h-16 text-card/40"
              viewBox="0 0 40 80"
            >
              <path
                d="M20,5 L20,75"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 6"
              />
            </svg>

            <svg
              className="absolute -left-2 bottom-1/3 w-6 h-12 text-secondary/40"
              viewBox="0 0 30 60"
            >
              <path
                d="M15,5 C5,20 25,40 15,55"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready to start sketching?
            </h2>

            <p className="text-lg opacity-90 max-w-md mx-auto mb-6">
              Join thousands of creators who use GoDraw every day.
            </p>

            <div className="flex justify-center">
              <Image
                src="/images/fullLogo.png"
                alt="Start Drawing"
                width={200}
                height={60}
                className="drop-shadow-lg"
              />
            </div>

            <svg
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-4 text-card/30"
              viewBox="0 0 100 20"
            >
              <path
                d="M0,10 C20,0 30,20 50,10 S80,0 100,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <svg
              className="absolute bottom-8 right-8 w-6 h-6 text-accent/50"
              viewBox="0 0 30 30"
            >
              <circle
                cx="15"
                cy="15"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            <svg
              className="absolute top-8 left-8 w-5 h-5 text-card/40"
              viewBox="0 0 25 25"
            >
              <path
                d="M5,12.5 L20,12.5 M12.5,5 L12.5,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
