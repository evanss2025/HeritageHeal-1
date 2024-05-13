/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': './heritageheal.png'
      }
    },
      
    colors: {
      cyan: colors.cyan,
      stone: colors.stone,
      fuchsia: colors.fuchsia,
      red: colors.red,
      black: colors.black,
      yellow: colors.yellow,
      green: colors.green
    },
  },
  plugins: [],
};
