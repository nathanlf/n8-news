/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `N8 Internal Newsletter`,
    siteUrl: `https://n8-news.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletter-issues`,
        path: `${__dirname}/src/newsletter-issues`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cover-images",
        path: `${__dirname}/src/newsletter-issues`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
