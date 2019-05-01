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
              image
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
    <Layout page="BLOG">
      <ul>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
                  <li
                    key={edge.node.frontmatter.title}
                    styles={
                      `background: src(${edge.node.frontmatter.image})`
                    }
                  >
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
