import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'


export default () => {
  const data = useStaticQuery( graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
            }
          }
        }
      }
    }
  `)

  return(
    <Layout page="blog-post">

    </Layout>
  )
}
