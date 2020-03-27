const path = require('path');

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
    ['live',
      {
        layout: path.resolve(__dirname, './config/vue-live-template.vue'),
      }],
  ],
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer'),
    ],
  },
};
