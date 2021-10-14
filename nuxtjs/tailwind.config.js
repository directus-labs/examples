const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'foreground-accent': '#172940',
        'foreground-subdued': '#A2B5CD',
        'foreground-inverted': '#FFFFFF',
        'background-accent': '#E4EAF1',
        'background-subdued': '#F0F4F9',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
