import fs from 'node:fs';
import path from 'node:path';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

function collectLegacyPostPaths() {
  const blogDir = path.join(__dirname, 'blog');
  const stack = [blogDir];
  const paths = [] as string[];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) {
      continue;
    }

    for (const entry of fs.readdirSync(current, {withFileTypes: true})) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }

      if (!entry.isFile() || !entry.name.endsWith('.mdx')) {
        continue;
      }

      const content = fs.readFileSync(fullPath, 'utf8');
      const slugMatch = content.match(/\nslug:\s*(\d+)\s*\n/);
      if (!slugMatch) {
        continue;
      }

      const slug = slugMatch[1];
      paths.push(`/${slug}`);
    }
  }

  return paths.sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));
}

const legacyRootRedirects = collectLegacyPostPaths();

const config: Config = {
  title: "Zero to Hero",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://doljae.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "doljae", // Usually your GitHub org/user name.
  projectName: "doljae.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        pages: {
          exclude: [
            '**/*.{js,jsx,ts,tsx}',
          ],
        },
        docs: false,
        // docs: {
        //   sidebarPath: './sidebars.ts',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          blogTitle: 'Posts',
          blogDescription: 'Engineering notes, reviews, and migration logs.',
          postsPerPage: 10,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 15,
          archiveBasePath: 'archive',
          tagsBasePath: 'tags',
          feedOptions: {
            type: 'all',
            title: 'Zero to Hero Feed',
            description: 'Latest posts from Zero to Hero',
            copyright: `Copyright © ${new Date().getFullYear()} Zero to Hero`,
            language: 'ko',
            limit: 30,
          },
          tags: 'tags.yml',
          onInlineTags: 'warn',
          onUntruncatedBlogPosts: 'throw',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              "https://github.com/doljae/doljae.github.io/blob/main/",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: ['/archive'], to: '/blog/archive'},
          {from: ['/tags'], to: '/blog/tags'},
          ...legacyRootRedirects.map((fromPath) => ({
            from: [fromPath],
            to: `/blog${fromPath}`,
          })),
        ],
      },
    ],
  ],

  themeConfig: {
    themeConfig: {
      metadata: [
        {name: 'keywords', content: 'programming'},
        {name: 'description', content: 'A tech blog focusing on backend development'},
      ],
      // This would become <meta name="keywords" content="cooking, blog"/> in the generated HTML
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Zero to Hero",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/blog/archive', label: 'Archive', position: 'left'},
        {to: '/blog/tags', label: 'Tags', position: 'left'},
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'kotlin']
    },
    algolia: {
      appId: '8PAI13JGXI',
      apiKey: '504edd96210e44369ac771c3daf88cfc',
      indexName: 'doljaeio',
      contextualSearch: true,
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
