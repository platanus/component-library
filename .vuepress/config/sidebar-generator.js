/* Based on: https://github.com/nikalsh/vuepress-auto-sidebar */
/* eslint-disable no-use-before-define */

const fs = require('fs');
const path = require('path');

const sidebar = {
  getSidebar(rootTitle = 'Home') {
    const root = getRootDir();
    const filesToIgnore = [/^\./, 'node_modules'];

    const dir = fs
      .readdirSync(root, { withFileTypes: true })
      .filter(file => !filesToIgnore.some(f => !!file.name.match(f)) && file.isDirectory())
      .map(file => file.name);

    const sidebarRoot = [
      {
        title: rootTitle,
        path: '/',
        collapsable: true,
        children: [],
      },
    ];

    const sidebarItems = getSidebarItems(dir);
    const generatedSidebar = Array.from(sidebarRoot.concat(sidebarItems));

    return generatedSidebar;
  },
};

function getRootDir() {
  return path.resolve(process.cwd());
}

function getSidebarItems(dir) {
  return dir.map(e => {
    const childDir = path.resolve(getRootDir(), e);
    const readmePath = `${e}/README.md`;
    const markdownFile = fs.existsSync(readmePath) && fs.readFileSync(readmePath, 'utf-8');
    const title =
      extractMarkdownTitle(markdownFile) ||
      e
        .split('-')
        .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
        .join(' ');

    const sidebarItem = {
      title,
      collapsable: false,
      path: markdownFile ? readmePath : null,
      children: [
        ...fs
          .readdirSync(childDir)
          .filter(file => file.includes('.md') && !file.match('README.md'))
          .map(c => `/${e}/${path.basename(c, '.md')}`),
      ],
    };

    return sidebarItem;
  });
}

// Based on: https://github.com/azu/get-title-markdown/blob/master/lib/get-title-markdown.js

function extractMarkdownTitle(text) {
  if (!text) return null;
  const headerMatch = /^#+(.*)$/;
  const lines = text.split('\n');
  const noEmptyLines = lines.filter(line => line.length > 0);
  if (noEmptyLines.length === 0) return null;
  const firstLine = noEmptyLines[0];
  const match = firstLine.match(headerMatch);
  if (match === null) return null;
  const title = match && match[1];

  return title.trim();
}

module.exports = sidebar;
