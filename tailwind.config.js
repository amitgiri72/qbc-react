/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#AA1A12', // Replace with your exact red color
        },
        //   white: {
        //   DEFAULT: '#FFFFFF',
        // },
       
      },
      fontFamily: {
        'vietnam': ['"Be Vietnam Pro"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}