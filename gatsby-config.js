module.exports = {
  siteMetadata: {
    title: "Miloš Dev",
    author: "Miloš Obrovac",
    description: "Miloš Obrovac's portfolio website - software developer",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    // If (compile errors) after installing gatsby-plugin-sass
    // ==> remove node_modules && package-lock.json file; npm install
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Miloš Obrovac - software developer`,
        short_name: `Miloš dev`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#f2b90f`,
        display: `standalone`,
        icon: `src/images/m.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              // to prevent white background:
              backgroundColor: false,
            },
          },
        ],
      },
    },
  ],
}
