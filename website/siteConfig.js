const siteConfig = {
  title: "Syncify",
  tagline: "A reliable way of syncing your VSCode settings and extensions",
  url: "https://arnohovhannisyan.space",
  baseUrl: "/vscode-syncify/",

  projectName: "vscode-syncify",
  organizationName: "arnohovhannisyan",

  headerLinks: [
    { doc: "getting-started/installation", label: "Docs" },
    { blog: true, label: "Updates" }
  ],

  docsSideNavCollapsible: false,

  favicon: "img/logo.png",

  stylesheets: ["https://fonts.googleapis.com/css?family=Roboto:400,700"],

  fonts: {
    default: ["Roboto"]
  },

  colors: {
    primaryColor: "#343a40",
    secondaryColor: "#282c34"
  },

  copyright: `Copyright © ${new Date().getFullYear()} Arno Hovhannisyan`,

  highlight: {
    theme: "atom-one-dark"
  },

  scripts: [],

  onPageNav: "separate",

  cleanUrl: true
};

module.exports = siteConfig;
