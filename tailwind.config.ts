import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundGreen: "#2f5b4c",
        foreground: "var(--foreground)",
        primaryButton: "#f6b683",
        secondary: "#191414",
        accent: "#FFC107",
        textLight: "#ede4da",
      },
      animation: {
        swing: "swing 2s ease-in-out infinite",
      },
      keyframes: {
        swing: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
