module.exports = {
  siteMetadata: {
    title: "Miloš Dev",
    author: "Miloš",
    description: "Developer's portfolio and blog website.",
  },
  plugins: [
    'gatsby-plugin-sass',
    // If you run into compile errors after installing gatsby-plugin-sass just remove the node_modules directory and package-lock.json file. After that run npm install. When everything is installed run npm run develop.﻿
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              // to prevent white background:
              backgroundColor: false
            }
          }
        ]
      }
    }

  ]
}
