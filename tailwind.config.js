/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'h-sm': {'raw': '(max-height: 599px)'},
        'h-md': {'raw': '(min-height: 600px) and (max-height: 899px)'},
        'h-lg': {'raw': '(min-height: 900px)'},
        'h-xl': {'raw': '(min-height: 1200px)'},
        'h-2xl': {'raw': '(min-height: 1600px)'},
      },
      backgroundImage: {
        Bggradient: "url('../images/gradient.jpg')",
      },
    },
  },
  plugins: [],
};
