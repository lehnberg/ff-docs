const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fixed Forex',
  tagline: 'Trust-minimized syntetic assets',
  url: 'https://lehnberg.github.io',
  baseUrl: '/ff-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lehnberg', // Usually your GitHub org/user name.
  projectName: 'ff-docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Fixed Forex',
      logo: {
        alt: 'Fixed Forex logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/contribute', label: 'Contribute', position: 'left'},
        {to: '/security', label: 'Security', position: 'left'},
        {
          href: 'https://github.com/lehnberg/ff-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/docs/intro',
            },
            {
              label: 'Concepts',
              to: '/docs/concepts/overview',
            },
            {
              label: 'Guides',
              to: '/docs/guides/mint-tokens',
            },
            {
              label: 'Technical Reference',
              to: '/docs/reference/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://gov.yearn.finance/c/projects/fixed-forex/26',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Security',
              to: '/security',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lehnberg/ff-docs',
            },
          ],
        },
      ],
      copyright: `Copyleft © ${new Date().getFullYear()} Fixed Forex. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
