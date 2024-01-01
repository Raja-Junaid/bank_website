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
        darkGray: "#222222",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        markazi: ["Markazi Text", "serif"],
      },

      screens: {
        "wide": "1440px"
      },
    },
  },
  plugins: [],
}