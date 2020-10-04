const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Real Top Praha`,
    description: `Webová stránka klubu Real Top Praha.`,
    author: `AliUP s.r.o.`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Open Sans:300,400,600,700",
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          xs: "(max-width: 320px)",
          sm: "(max-width: 768px)",
          md: "(max-width: 1024px)",
          lg: "(max-width: 1536px)",
          portrait: "(orientation: portrait)",
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "@components": path.join(__dirname, "src/components"),
        "@images": path.join(__dirname, "src/images")
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `REAL-TOP-PRAHA`,
        start_url: `/`,
        background_color: `#0D457A`,
        theme_color: `#0D457A`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1451104017`,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}



