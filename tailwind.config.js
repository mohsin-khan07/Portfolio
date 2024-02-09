/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Sen",
    },
    colors: {
      highlight: "#2DD2BD",
      white: "#FFFFFF",
      black: "#000000",
      grey1: "#18181B",
      grey2: "#252529",
      grey3: "#2A2A2B",
      grey4: "#52525B",
      grey5: "#71717A",
      grey6: "#A1A1AA",
      grey7: "#E4E4E7",
      grey8: "#F4F4F5",
      grey9: "#FAFAFA",
    },
    extend: {},
  },
  plugins: [],
};
