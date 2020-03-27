const sidebarGenerator = require('./config/sidebar-generator');

module.exports = {
  head: [
    ['link', 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap'],
  ],
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
