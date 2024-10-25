import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'layout': "#F2F3F8",
        'red-active': '#DB1430',
        'dark-hover': '#2f2e3c',
        'dark-icon': '#3a3a5d',
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse": "spin 1s reverse infinite",
      },
    },
  },
  plugins: [],
};
export default config;
