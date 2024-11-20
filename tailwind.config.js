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
        'promotion-bg': "url('./assets/promotion_bg.png')",
        'get-mobile-app-section': "url('./assets/mobile-section-bg.png')",
        'login-bg': "url('./assets/login_bg.png')"
      },
      boxShadow: {
        'custom-sd': '0 1px 10px 0 rgb(0 0 0 / 0.1), 0 1px 10px 0 rgb(0 0 0 / 0.1);'
      }
    },
  },
  plugins: [],
}

