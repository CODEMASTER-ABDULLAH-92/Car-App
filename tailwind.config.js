/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1a1c23',
        'dark-black': '#0d0d10',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #1a1c23, #0d0d10)',
      },
      colors: {
        'custom-white': 'rgba(255, 255, 255, 0.027)',
      },
      backdropBlur: {
        '10': '10px',
      },
    },
  },
  plugins: [],
}




