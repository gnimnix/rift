module.exports = {
  siteMetadata: {
    siteUrl: `https://blog.xmlu.net`,
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`,
          },
          {
            name: `JetBrains Mono`,
            file: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
  ]
}
