/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#F59E3D",
          400: "#FCD34D",
          500: "#F59E3D",
          600: "#D97706",
        },
        secondary: {
          DEFAULT: "#FDBA74",
          500: "#FDBA74",
        },
      },
    },
    colors: {
      ...colors,
    }
  },
  plugins: [],
};
