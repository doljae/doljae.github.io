// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zero to Hero",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://doljae.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "doljae", // Usually your GitHub org/user name.
  projectName: "doljae.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          exclude: [
            '**/*.{js,jsx,ts,tsx}',
          ],
        },
        docs: false,
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              "https://github.com/doljae/doljae.github.io/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        themeConfig: {
          metadata: [
              {name: 'keywords', content: 'programming'},
              {name: 'description', content: 'A tech blog focusing on backend development'},
          ],
          // This would become <meta name="keywords" content="cooking, blog"/> in the generated HTML
        },
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
          title: "Zero to Hero",
          logo: {
            alt: "My Site Logo",
            src: "img/logo.svg",
          },
          items: [
            // {
            //   type: "docSidebar",
            //   sidebarId: "tutorialSidebar",
            //   position: "left",
            //   label: "Tutorial",
            // },
            // { to: "/blog", label: "Blog", position: "left" },
            // {
            //   href: "https://github.com/facebook/docusaurus",
            //   label: "GitHub",
            //   position: "right",
            // },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/doljae",
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/doljae",
                },
                {
                  label: "Tistory",
                  href: "https://doljae.tistory.com/",
                },
                // {
                //   label: "Blog",
                //   to: "/blog",
                // }
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Zero to Hero, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['java', 'kotlin']
        },
        algolia: {
          // The application ID provided by Algolia
          appId: '8PAI13JGXI',

          // Public API key: it is safe to commit it
          apiKey: '504edd96210e44369ac771c3daf88cfc',

          indexName: 'doljaeio',

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          externalUrlRegex: 'external\\.com|domain\\.com',

          // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
          replaceSearchResultPathname: {
            from: '/docs/', // or as RegExp: /\/docs\//
            to: '/',
          },

          // Optional: Algolia search parameters
          searchParameters: {},

          // Optional: path for search page that enabled by default (`false` to disable it)
          searchPagePath: 'search',

          //... other Algolia params
        },
      }),
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/docusaurus.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/docusaurus.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
