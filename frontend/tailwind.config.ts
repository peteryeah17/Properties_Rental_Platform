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
        'airbnb': '#7f5ed1',
        'airbnb-dark': '#5536a3',
        'red': '#FF0000'
      }
    },
  },
  plugins: [],
};
export default config;
