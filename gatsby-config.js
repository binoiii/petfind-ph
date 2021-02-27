if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config({
    path: "./config/.env",
  })
}

module.exports = {
  siteMetadata: {
    title: `PetfindPH`,
    description: `Help your lost pet find it's way home. Never lost your pet using our QR code tag profiler.`,
    sub_description: `Our goal is to secure and improve the comfort of pets and their owners all over the Philippines by ensuring that all pets who have lost their way home would get an opportunity to be reunited to their fur parent in no time.`,
    author: `@binoiii`,
    url: `https://petfind-ph.com`,
    image: `/images/petfindph-meta-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preload-fonts`,
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
        name: `petfind-ph`,
        short_name: `petfindph`,
        start_url: `/`,
        background_color: `#fbe260`,
        theme_color: `#fbe260`,
        display: `minimal-ui`,
        icon: `src/images/petfindph-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
