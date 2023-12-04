/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './public/index.html',
      "./src/**/*.{html,js,vue}",
    ],
    theme: {
      extend: {},
      colors: {
        'background': '#121212',
        'white-600': '#FFFF',
        'white-400': '#EDEDED',
        'dark-300': '#DADADA54',
        'dark-400': '#27272A',
        'dark-500': '#3E3E41',
        'amber' : '#9D4B00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
    plugins: [],
  }
  
  