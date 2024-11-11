/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06AED5"
      },
      backgroundImage: {
        'hero-home': "url('./assets/home_hero1.png')",
      }
    },
  },
  plugins: [],
}

