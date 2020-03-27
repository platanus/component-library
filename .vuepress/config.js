const sidebarGenerator = require('./config/sidebar-generator');

module.exports = {
  themeConfig: {
    sidebar: [
      ...sidebarGenerator.getSidebar(),
    ],
  },
};
