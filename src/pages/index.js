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
  )
}
