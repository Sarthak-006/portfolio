import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          deep: "#1A1F2C",
          purple: "#9b87f5",
          light: "#E5DEFF",
          text: "#F1F0FB"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(155, 135, 245, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(155, 135, 245, 0.5)' },
        },
        'hexagon-rotate': {
          '0%': { transform: 'rotate(0deg) translateY(0px)' },
          '50%': { transform: 'rotate(180deg) translateY(-20px)' },
          '100%': { transform: 'rotate(360deg) translateY(0px)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0px) translateX(0px) scale(1)', opacity: '0' },
          '50%': { transform: 'translateY(-50px) translateX(10px) scale(1.2)', opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) translateX(-10px) scale(0.8)', opacity: '0' },
        },
        'gradient-morph': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'chain-link': {
          '0%': { opacity: '0', transform: 'scaleY(0)' },
          '50%': { opacity: '1', transform: 'scaleY(0.5)' },
          '100%': { opacity: '1', transform: 'scaleY(1)' },
        },
        'tilt-3d': {
          '0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "shine": "shine 8s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "hexagon-rotate": "hexagon-rotate 15s ease-in-out infinite",
        "particle-float": "particle-float 20s ease-in-out infinite",
        "gradient-morph": "gradient-morph 25s ease-in-out infinite",
        "chain-link": "chain-link 1s ease-out",
        "tilt-3d": "tilt-3d 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
