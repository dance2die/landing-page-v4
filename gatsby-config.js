module.exports = {
  siteMetadata: {
    title: `Sung M. Kim (aka dance2die)'s Home Page`,
    titleTemplate: '%s · aka dance2die',
    description: `Hi, I am Sung M. Kim (a.k.a dance2die) and this is my home 🏡 page.
    You can find out about my background and interests as well as contact info.`,
    url: 'https://sungkim.co',
    image: '/images/avatar-seo.jpg', // Path to your image you placed in the 'static' folder
    author: `@dance2die`,
    twitterUsername: '@dance2die',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            subsets: [`latin`],
            variants: [`400`],
          },
          {
            family: `Hind Madurai`,
            subsets: [`latin`],
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-106610940-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
