/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        light: '#68B3DF',
        main: '#50A8DA',
        dark: '#3987B2'
      },
      secondary: {
        lighten: '#424549',
        light: '#36393E',
        main: '#282B30',
        dark: '#121214',
        darker: '#09090a'
      },
      light: {
        lighten: '#FFFFFF',
        light: '#F9F9F9',
        main: '#E1E1E6',
        dark: '#C4C4CC',
        darker: '#A8A8B3'
      },
      danger: {
        light: '#FC626C',
        main: '#D7333D',
        dark: '#C72F39'
      },
      success: {
        light: '#66FFA3',
        main: '#49F58E',
        dark: '#1FCF66'
      }
    },
    fontFamily: {
      default: ['var(--font-roboto)', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};

