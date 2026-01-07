/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // The "Modern Industry Leader" Light Theme Palette
        "brand-blue": "#0047AB",     // Cobalt Blue (Strong, confident)
        "brand-dark": "#0B1120",     // Deep Navy (For footer/high contrast areas)
        "brand-text": "#1E293B",     // Slate 800 (Primary text - softer than pure black)
        "brand-gray": "#F8FAFC",     // Slate 50 (Light background for sections)
        "brand-border": "#E2E8F0",   // Slate 200 (Subtle borders)
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"], // Good for technical specs
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
      },
      animation: {
        // Slowed down to 40s for a smoother, premium feel
        marquee: "marquee 40s linear infinite",
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        // Smooth Fade In Up Animation
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // The Infinite Loop Marquee (Moves exactly half distance)
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, 
        },
        // Scanning effect for cards (optional but kept for compatibility)
        scan: {
          "0%": { top: "0%" },
          "50%": { top: "100%" },
          "51%": { top: "100%", opacity: 0 },
          "52%": { top: "0%", opacity: 0 },
          "53%": { top: "0%", opacity: 1 },
          "100%": { top: "0%" }, 
        },
      },
    },
  },
  plugins: [],
};