module.exports = {
  title: "S W A Y",
  tagline: "Selfhost your ecosystem",
  url: "https://docs.sway-me.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "sway-me", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/nightOwl"),
    },
    // algolia: {
    //   apiKey: "1233455",
    //   indexName: "rap",
    // },
    navbar: {
      logo: {
        src: "https://minio.resistr.life/sway-me/shared/ui-kit/logo.svg",
      },
      items: [
        {
          to: "dev-services/getting-started",
          label: "dev-services",
          position: "left",
        },
        {
          to: "personal-services/getting-started",
          label: "personal-services",
          position: "left",
        },
        { to: "mobile/getting-started", label: "mobile", position: "left" },
        {
          to: "workstation/getting-started",
          label: "workstation",
          position: "left",
        },
        { to: "tv/getting-started", label: "tv", position: "left" },
        { to: "cast/getting-started", label: "cast", position: "left" },
        { to: "speaker/getting-started", label: "speaker", position: "left" },
        { to: "watch/getting-started", label: "watch", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          position: "right",
          className: "header-gitlab-link",
          "aria-label": "Gitlab repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://gitlab.com/sway-me/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
