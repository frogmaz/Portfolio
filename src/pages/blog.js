import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  return(
    <Layout page="blog">
      <ul>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
                  <li key={edge.node.frontmatter.title}>
                    <Link to={`/blog/${edge.node.fields.slug}`}>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <p>{edge.node.frontmatter.date}</p>
                    </Link>
                  </li>
            )
          })}
      </ul>
    </Layout>
  )
}
