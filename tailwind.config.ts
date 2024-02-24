import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "432px",
      md: "820px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
