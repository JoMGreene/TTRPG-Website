/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#04050A',
        'secondary': '#CBCBCB',
        'accent': '#aa4444'
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], neohellenic: ["GFS Neohellenic", "sans-serif"],
      },
      backgroundImage: {
        'arrow-icon': "url('/src/assets/arrow.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(195deg, var(--tw-gradient-stops))',
      },
      textShadow: {
        main: '0 0 5px #3E9994, 0 0 10px #3E9994, 0 0 15px #3E9994, 0 0 20px #3E9994, 0 0 25px #3E9994',
        drop: '2px 2px 5px #333333',
      },
      gridTemplateRows: {
        "card-grid": '50px 1fr',
      },
      boxShadow: {
        'around': '0 0 10px',
        'around-lg': '0 0 20px'
      },
    },
    screens: {
      ss: '480px',
      sm: '768px',
      md: '976px',
      lg: '1060px',
      xl: '1440px',
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
