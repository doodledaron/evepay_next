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
        'light-red': '#F38181',
        'light-cyan': '#72ACA9',
        'lg-light-cyan': '#89B0AE',
        'dark-green': '#008000',
        'dark-green-transparent': 'rgba(0, 128, 0, 0.42)', 
        'gray': '#9A9A9A',
        'light-gray': '#FAF9F9',
        'md-gray': '#D2D2D2',
        'xs-light-gray': '#959595',
        'light-blacK': '#555B6E'
      }
    },
  },
  plugins: [],
};
export default config;
