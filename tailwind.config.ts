import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#0b0b0b",
        yellow: "#ffb400",
        grey: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        livvic: ["var(--livvic)"],
      },
      fontSize: {
        "70": "4.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
