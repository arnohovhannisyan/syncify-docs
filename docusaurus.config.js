module.exports = {
  title: "Syncify",
  tagline: "A reliable way of syncing your VSCode settings and extensions",
  url: "https://arnohovhannisyan.space",
  baseUrl: "/vscode-syncify/",
  favicon: "img/logo.svg",
  organizationName: "arnohovhannisyan",
  projectName: "vscode-syncify",
  themeConfig: {
    navbar: {
      title: "Syncify",
      logo: {
        alt: "Syncify Logo",
        src: "img/logo.svg"
      },
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
      style: "dark",
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
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
