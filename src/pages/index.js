import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'


export default () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
          author
        }
      }
    }
  `)

  return (
    <Layout page="intro">
      <h3>
        {data.site.siteMetadata.title}
      </h3>
      <h4>
        {data.site.siteMetadata.author}
      </h4>
    </Layout>
  )
}
