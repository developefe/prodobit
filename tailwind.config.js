/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    fontSize: {
      'h1': '93px',
      'h2': '77px',
      'h3': '64px',
      'h4': '54px',
      'h5': '45px',
      'h6': '37px',

      'body-lg': '30px',
      'body-md': '26px',
      'body-normal': '22px',
      'body-base': '18px',
      'body-sm': '15px',
      'body-xs': '14px',
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',

      'gray-50': '#fefefe',
      'gray-100': '#fcfcfd',
      'gray-200': '#fafafb',
      'gray-300': '#f8f8fa',
      'gray-400': '#f7f6f9',
      'gray-500': '#f5f4f7',
      'gray-600': '#dfdee1',
      'gray-700': '#aeadaf',
      'gray-800': '#878688',
      'gray-900': '#676668',
      'gray-1000': '#39373a',
      'gray-1100': '#242529',

      'blue-10': '#006ACB',
      'blue-50': '#eaf2f8',
      'blue-100': '#bdd8e9',
      'blue-200': '#9dc5df',
      'blue-300': '#70aad0',
      'blue-400': '#5499c7',
      'blue-500': '#2980b9',
      'blue-600': '#2574a8',
      'blue-700': '#1d5b83',
      'blue-800': '#174666',
      'blue-900': '#11364e',

      'red-10': '#B16D5C',
      'red-50': '#feedee',
      'red-100': '#fbc7ca',
      'red-200': '#f9acb0',
      'red-300': '#f7868c',
      'red-400': '#f56e75',
      'red-500': '#f34a53',
      'red-600': '#dd434c',
      'red-700': '#ad353b',
      'red-800': '#86292e',
      'red-900': '#661f23',

      'yellow-50': '#fff9ea',
      'yellow-100': '#ffeebe',
      'yellow-200': '#ffe59f',
      'yellow-300': '#ffd973',
      'yellow-400': '#ffd258',
      'yellow-500': '#ffc72e',
      'yellow-600': '#e8b52a',
      'yellow-700': '#b58d21',
      'yellow-800': '#8c6d19',
      'yellow-900': '#6b5413',

      'green-10': '#E6EDEB',
      'green-50': '#e8f4f2',
      'green-100': '#b9ded6',
      'green-200': '#97cec2',
      'green-300': '#67b8a7',
      'green-400': '#49aa95',
      'green-500': '#1c957b',
      'green-600': '#198870',
      'green-700': '#146a57',
      'green-800': '#0f5244',
      'green-900': '#0c3f34',

      'orange-10': '#FF5F1B',
      'orange-50': '#fff1ea',
      'orange-100': '#ffd5bd',
      'orange-200': '#ffc09d',
      'orange-300': '#ffa470',
      'orange-400': '#ff9254',
      'orange-500': '#ff7729',
      'orange-600': '#e86c25',
      'orange-700': '#b5541d',
      'orange-800': '#8c4117',
      'orange-900': '#6b3211',

      'purple-50': '#f2f2fe',
      'purple-100': '#d5d5fb',
      'purple-200': '#c1c1f9',
      'purple-300': '#a5a5f6',
      'purple-400': '#9394f4',
      'purple-500': '#7879f1',
      'purple-600': '#6d6edb',
      'purple-700': '#5556ab',
      'purple-800': '#424385',
      'purple-900': '#323365',

      'turquoise-50': '#e7fdff',
      'turquoise-100': '#b4f8ff',
      'turquoise-200': '#90f5ff',
      'turquoise-300': '#5ef1ff',
      'turquoise-400': '#3eeeff',
      'turquoise-500': '#0eeaff',
      'turquoise-600': '#0dd5e8',
      'turquoise-700': '#0aa6b5',
      'turquoise-800': '#08818c',
      'turquoise-900': '#06626b',
    },
    screens: {
      '2xl': {
        'max': '1680px'
      },
      'xl':{
        'max': '1440px',
      },
      'lg': {
        'max': '1370px',
      },
      'md': {
        'max': '1199px',
      },
      'sm':{
        'max': '991px',
      },
      'xs':
      {
        'max': '767px', 
      },
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.h1') },
        'h2': { fontSize: theme('fontSize.h2') },
        'h3': { fontSize: theme('fontSize.h3') },
        'h4': { fontSize: theme('fontSize.h4') },
        'h5': { fontSize: theme('fontSize.h5') },
        'h6': { fontSize: theme('fontSize.h6') },
      })
    })
  ],
}