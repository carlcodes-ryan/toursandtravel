/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fffbeb', // soft warm background
          DEFAULT: '#ea580c', // sunset orange
          dark: '#9a3412', // deep orange
        },
        earth: {
          light: '#fef3c7',
          DEFAULT: '#d97706',
          dark: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
