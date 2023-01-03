module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Roboto Mono`,
            file: `https://fonts.googleapis.com/css2?family=Roboto+Mono&subset=latin&display=swap`,
          },
          {
            name: `Cedarville Cursive`,
            file: `https://fonts.googleapis.com/css2?family=Cedarville+Cursive&query=cursive&subset=latin&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
  ]
}
