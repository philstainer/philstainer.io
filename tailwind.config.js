const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.indigo.500'),
              '&:hover': {
                color: theme('colors.indigo.700')
              },
            },
          }
        },
       dark: {
         css: {
           a: {
             color: theme('colors.indigo.400'),
             '&:hover': {
               color: theme('colors.indigo.600')
             },
           },
         }
       },
      })
    },
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')],
}
