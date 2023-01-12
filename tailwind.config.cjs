/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.hmtl','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}
