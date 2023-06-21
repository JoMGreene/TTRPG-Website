/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
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
        'bg1': 'url(/src/assets/tim-foster-1.webp)',
        'bg2': 'url(/src/assets/martin-sanchez-1.webp)',
        'bg3': 'url(/src/assets/marek-piwnicki-2.webp)',
        'bg4': 'url(/src/assets/david-marcu-1.webp)',
        'bg5': 'url(/src/assets/e-grossgasteiger-4.webp)',
        'fog': 'url(/src/assets/fog.webp)',
      },
      borderStyle: {
        inset: 'inset',
      },
      textShadow: {
        main: '0 0 5px #3E9994, 0 0 10px #3E9994, 0 0 15px #3E9994, 0 0 20px #3E9994, 0 0 25px #3E9994',
        lightTitle: '1px 1px 2px #555555',
        drop: '2px 2px 10px #333333',
        white: '2px 2px 10px #ffffff'
      },
      gridTemplateRows: {
        "card-grid": '50px 1fr',
        "card-grid-small": '30px 1fr'
      },
      boxShadow: {
        'around': '0 0 10px',
        'around-lg': '0 0 20px',
        'up': '0px 5px 15px #000000',
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
