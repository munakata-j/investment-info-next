import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minWidth: {
        '300': '300px', // min-w-300として使用
        '250': '250px',  // min-w-250として使用
        '100': '100px'
      },
      maxWidth: {
        '300': '300px', // max-w-300として使用
        '250': '250px',  // max-w-250として使用
        '100': '100px'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
