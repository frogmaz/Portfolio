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
    <Layout>
      <h1>blog</h1>
      <div className="under-h1">
        <ul>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ul>
      </div>

    </Layout>
  )
}
