/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Bggradient: "url('../images/gradient.jpg')",
      },
    },
  },
  plugins: [],
};
