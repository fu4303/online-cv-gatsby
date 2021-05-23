require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = {
  title: `Scott Spence - CV`,
  firstName: `Scott`,
  lastName: `Spence`,
  siteUrl: `https://mecv.xyz`,
  titleTemplate: `%s | mecv.xyz`,
  description: `Scott Spence, JavaScript, React and Gatsby JS developer. He/Him`,
  twitterUsername: `@spences10`,
  facebookAppID: ``,
  faviconPng: `./static/favicon.png`,
  backgroundColour: `#663399`, // this is for favicon and manifest
  themeColour: `#755f9f`, // this is for favicon and manifest
  nameContent: `Scott Spence - cv/resume`,
  developerName: `Scott Spence`,
  developerUrl: `https.scottspence.me`,
  descriptionContent: `Scott Spence - web developer`,
  keywordsContent: `web developer, javascript, react, cv/resmue, information`,
  imageLink: `/favicon.png`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        siteId: process.env.GATSBY_FATHOM_TRACKING_ID_CV,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scott Spence - CV`,
        short_name: `Scott Spence - CV`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `standalone`,
        icon: siteMetadata.faviconPng,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            `Open Sans:400,700`,
            `Titillium Web:400,700`,
            `Nunito:400,700`,
            `Poppins:400,700`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-zeit-now`,
      options: {
        globalHeaders: {
          'referrer-policy': 'same-origin',
          'feature-policy':
            "geolocation 'self'; microphone 'self'; camera 'self'",
          'expect-ct': 'max-age=604800, enforce',
          'strict-transport-security':
            'max-age=31536000; includeSubDomains',
          'x-frame-options': 'DENY',
          'x-xss-protection': '1; mode=block',
          'x-content-type-options': 'nosniff',
          'x-download-options': 'noopen',
        },
      },
    },
  ],
}
