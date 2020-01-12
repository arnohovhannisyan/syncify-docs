module.exports = {
  title: "Syncify",
  tagline: "A reliable way of syncing your VSCode settings and extensions",
  url: "https://arnohovhannisyan.space",
  baseUrl: "/vscode-syncify/",
  favicon: "img/favicon.png",
  organizationName: "arnohovhannisyan",
  projectName: "vscode-syncify",
  themeConfig: {
    algolia: {
      apiKey: "cb827d79bcc9d365ebdf80d97ed09030",
      indexName: "syncify"
    },
    navbar: {
      title: "Syncify",
      links: [
        {
          to: "docs/getting-started/installation",
          label: "Docs",
          position: "left"
        },
        {
          href: "https://github.com/arnohovhannisyan/vscode-syncify",
          label: "GitHub",
          position: "left"
        }
      ]
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started/installation"
            },
            {
              label: "Contributing",
              to: "docs/contributing/prerequisites"
            },
            {
              label: "Features",
              to: "docs/features/profiles"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/DGvuqWD"
            },
            {
              label: "Slack",
              href:
                "https://join.slack.com/t/vscode-syncify/shared_invite/enQtNzc5MjYyMjYyNzEwLWQ5MGMxNDljZjk5NmYwNWZlYTBmYjk0MjliNjgyYWRkM2NiYjU2YjExY2RmODg2MGIyZTUwY2YzYWM2YThjMmM"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/arnohovhannisyan/vscode-syncify"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arno Hovhannisyan`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/arnohovhannisyan/syncify-docs/edit/master/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/main.css")
        }
      }
    ]
  ]
};
