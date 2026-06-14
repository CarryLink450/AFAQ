import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Tajawal", "Arial", "sans-serif"]
      },
      colors: {
        royal: {
          50: "#eef8ff",
          100: "#d9efff",
          200: "#b8e3ff",
          500: "#1677c8",
          600: "#0c5ea8",
          700: "#074f91",
          900: "#07315d"
        },
        clinic: {
          cyan: "#6ee7ff",
          silver: "#eef2f7",
          ink: "#10233f"
        }
      },
      boxShadow: {
        premium: "0 24px 70px rgba(7, 49, 93, 0.14)",
        glow: "0 18px 48px rgba(22, 119, 200, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
