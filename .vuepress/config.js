const path = require('path');

const sidebarGenerator = require('./config/sidebar-generator');

module.exports = {
  base: '/component-library/',
  head: [
    ['link', { href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap', rel: 'stylesheet' }],
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
