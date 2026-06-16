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
        walnut: '#2B1D16',
        wood: '#3A261C',
        'dark-wood': '#1A110D',
        gold: '#C8A46B',
        'gold-dark': '#A8843B',
        ivory: '#F5F0E8',
        beige: '#D8C6AE',
        muted: '#9A8672',
      },
    },
  },
  plugins: [],
};

export default config;