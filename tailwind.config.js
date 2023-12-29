/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTeal: "#022B3A",
        darkGreen: "#00727A",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}