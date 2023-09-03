import {nextui} from "@nextui-org/react";
import colors from "./colors"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;
