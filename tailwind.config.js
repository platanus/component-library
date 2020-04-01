const defaultTheme = require('tailwindcss/defaultTheme');
const defaultConfig = require('tailwindcss/defaultConfig');
const plugin = require('tailwindcss/plugin');

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
  variants: {
    backgroundColor: [
      ...defaultConfig.variants.backgroundColor,
      'checked',
    ],
    borderColor: [
      ...defaultConfig.variants.borderColor,
      'checked',
    ],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    plugin(({ addVariant, e }) => {
      addVariant('checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`checked${separator}${className}`)}:checked`);
      });
    }),
  ],
};
