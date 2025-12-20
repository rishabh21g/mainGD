import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  // 👇 THIS IS THE FIX: Pointing to root folders
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sketchy: ["Shantell Sans", "cursive"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          light: "hsl(var(--accent-light))",
          dark: "hsl(var(--accent-dark))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        sketchy: "255px 15px 225px 15px/15px 225px 15px 255px",
        "sketchy-sm": "15px 255px 15px 225px/225px 15px 255px 15px",
        "sketchy-md": "225px 15px 255px 15px/15px 255px 15px 225px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        scribble: {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "25%": { transform: "translateX(2px) rotate(0.5deg)" },
          "50%": { transform: "translateX(-1px) rotate(-0.5deg)" },
          "75%": { transform: "translateX(1px) rotate(0.25deg)" },
          "100%": { transform: "translateX(0) rotate(0deg)" },
        },
        pencilWrite: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out",
        float: "float 3s ease-in-out infinite",
        draw: "draw 2s ease-out forwards",
        scribble: "scribble 0.5s ease-in-out",
        "pencil-write": "pencilWrite 1.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "bounce-slow": "bounce 2s ease-in-out infinite",
      },
      boxShadow: {
        sketchy: "4px 4px 0px 0px hsl(var(--primary))",
        "sketchy-sm": "2px 2px 0px 0px hsl(var(--primary))",
        "sketchy-lg": "6px 6px 0px 0px hsl(var(--primary))",
        "sketchy-accent": "4px 4px 0px 0px hsl(var(--accent))",
      },
    },
  },
  plugins: [],
}

export default config