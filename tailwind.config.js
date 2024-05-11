// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  theme: {
    extend: {
      breakpoints: {
        '2xl': '1500px',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: '#FFA500',
          500: '#FD894B',
          DEFAULT: '#FD894B',
          600: '#FF7A00',
          700: '#E66A00',
          800: '#CC5B00',
          900: '#B34C00',
        },
        secondary: {
          400: '#FF5A5A',
          500: '#FF4545',
          DEFAULT: '#FF4545',
          600: '#FF4545',
          700: '#FF0000',
        },
        background: {
          DEFAULT: '#17021D',
        },
        gray: {
          ...colors.gray,
          100: '#FFFEFE',
          900: '#20163E',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            'h1,h2': {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '500',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
