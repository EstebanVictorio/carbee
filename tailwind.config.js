import {nextui} from "@nextui-org/react";
import colors from "./colors"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './blocks/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        overlay: "rgba(0, 69, 89, 0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;
