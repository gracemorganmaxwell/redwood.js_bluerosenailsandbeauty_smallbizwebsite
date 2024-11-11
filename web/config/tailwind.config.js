/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 theme: {
    extend: {
      colors: {
        darkBlue: '#314063',
        white: '#fefefe',
        greyViolet: '#B6B7C8',
        blueGrey: '#738BAC',
        slateBlue: '#535F93',
        royalBlue: '#233277',
        darkerGreyViolet: '#7E7F9A',
        black: '#000000',
        ascentBlue: '#2195e8',
      },
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      transitionTimingFunction: {
        'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 400ms ease-in-out-cubic',
        fadeOut: 'fadeOut 400ms ease-in-out-cubic',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        gfs_didot_regular: ['GFS Didot', 'serif'],
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    // ...other plugins
  ],
}
