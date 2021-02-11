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
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          label: "intro",
          position: "left",
        },
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
          href: "https://gitlab.com/sway-me",
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
          items: [],
        },
        {
          title: "Community",
          items: [],
        },
        {
          title: "More",
          items: [
            {
              label: "GitLab",
              href: "https://gitlab.com/sway-me",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sway. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://gitlab.com/sway-me/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
