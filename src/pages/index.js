import React from "react"

import Layout from '../components/layout'


export default ({data}) =>
  <Layout>
    <h1>intro</h1>
    <div className="under-h1">
      <h3>
        {data.site.siteMetadata.title}
      </h3>
      <h4>
        {data.site.siteMetadata.author}
      </h4>

    </div>

  </Layout>

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
