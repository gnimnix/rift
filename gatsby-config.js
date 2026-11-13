module.exports = {
  siteMetadata: {
    // Keep in sync with SITE_URL in src/data/profile.js and static/robots.txt.
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
    {
      // Writes /sitemap-index.xml; only the portfolio page belongs in search results.
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/sad/`, `/example-index/`, `/404/`, `/404.html`],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
  ]
}
