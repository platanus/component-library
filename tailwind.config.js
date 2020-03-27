const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Rubik',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
