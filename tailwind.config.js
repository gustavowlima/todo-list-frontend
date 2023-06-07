/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        mainTextColor: "#262331",
        whiteColor: "#ffffff",
        gray200Color: "#d6d4e2",
        gray100Color: "#F5F4F6",
        greenColor: "#02b553",
        greenHoverColor: "#007331",
      },
    },
  },
  plugins: [],
};
