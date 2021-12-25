module.exports = {
  pathPrefix: `/auto-icon-website`,
  siteMetadata: {
    siteUrl: "https://uxplugins.github.io/auto-icon-website/",
    title: "Auto Icon",
    menuLinks: [
      {
        name: "home",
        link: "/auto-icon-website/",
      },
      {
        name: "plugin",
        link: "/auto-icon-website/plugin",
      },
      {
        name: "new-icons",
        link: "/auto-icon-website/new-icons",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "AutoIconWebsite",
        short_name: "AutoIcon",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#FFF",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        prefer_related_applications: true,
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
