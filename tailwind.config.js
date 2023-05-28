/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Bggradient: "url('../images/gradient.jpg')",
      },

      boxShadow: {
        "gray-200": "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
