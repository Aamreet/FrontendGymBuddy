/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ph1':'320px',
      'ph2':'480px',
      'tab': '640px',
      // => @media (min-width: 640px) { ... }

      'lapi': '1024px',
      // => @media (min-width: 1024px) { ... }

      'pc': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}