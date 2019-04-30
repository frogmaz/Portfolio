module.exports = {
  siteMetadata: {
    title: "MilošDev",
    author: "Miloš",
    description: "Developer's portfolio (and blog) website.",
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
