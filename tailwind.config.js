/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'sans-serif'],
        georgian: ['Noto Serif Georgian', 'serif'],
      },
      fontSize: {
        'logo': '4rem',
        'banner': '5rem',
      },
      colors: {
        beige: '#F4E1C1',
        rose: '#E63946',
        charcoal: '#2B2B2B',
        'warm-white': '#FFF5E1',
      },
      keyframes: {
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(1)" },
          "5%": { opacity: "0.1", transform: "scale(1)" },
          "50%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0.1", transform: "scale(1.1)" }
        },
      },
      animation: {
        zoomIn: "zoomIn 5s ease-out forwards",
      },
      aspectRatio: {
        '5/7' : '5 / 7',
        '3/1' : '3 / 1',
        '3/2' : '3 / 2',
      }
    },
  },
  plugins: [],
}

