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
    screens: {
      xxs: "361px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1460px",
      "3xl": "1800px",
      fhd: "1920px",
      "4xl": "2400px",
    },
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-copy)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          300: '#FFBF66',
          400: '#FFB347',
          500: '#FFA500',
          DEFAULT: '#FFA500',
          600: '#FD894B',
          700: '#FF7A00',
          800: '#E66A00',
          900: '#CC5B00',
        },
        secondary: {
          400: '#FF5A5A',
          500: '#FF4545',
          DEFAULT: '#FF4545',
          600: '#FF4545',
          700: '#FF0000',
        },
        decoration: {
          50: '#F4E5F7', // Lightest
          100: '#E9CBF0',
          200: '#D3A6E1',
          300: '#BD81D2',
          400: '#A75CC3',
          DEFAULT: '#962F90',
          500: '#962F90', // Default
          600: '#7F297B',
          700: '#682366',
          800: '#511D51',
          900: '#3A173C', // Darkest
        },
        background: {
          DEFAULT: '#17021D',
        },
        gray: {
          ...colors.gray,
          100: '#FFFEFE',
          200: '#E9E8E8',
          900: '#20163E',
        },
      },
      aspectRatio: {
        portrait: "12 / 16",
        rectangle: "16 / 12",
      },
      borderRadius: {
        DEFAULT: "2px",
      },
      spacing: {
        mobileNavOffset: "77px",
        desktopNavOffset: "97px",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
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
