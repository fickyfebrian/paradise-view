/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dancing: ['Dancing Script', 'cursive'],
    },
    extend: {
      colors: {
        primary: "#7C6A46",
        secondary: "#746341",
      }
    },
  },
  plugins: [],
};