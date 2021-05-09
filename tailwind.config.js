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
              color: theme('colors.indigo.600'),
              '&:hover': {
                color: theme('colors.indigo.900'),
              },
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.indigo.400'),
              '&:hover': {
                color: theme('colors.indigo.300'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
