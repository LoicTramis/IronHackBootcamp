/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      titanone: ["Titan One", "sans-serif"],
    },
  },
  plugins: [],
};
