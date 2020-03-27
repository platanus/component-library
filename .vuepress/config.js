const sidebarGenerator = require('./config/sidebar-generator');

module.exports = {
  themeConfig: {
    sidebar: [
      ...sidebarGenerator.getSidebar(),
    ],
  },
  plugins: [
    'live',
  ],
  postcss: {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss')('./tailwind.config.js'),
    ],
  },
};
